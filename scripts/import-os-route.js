// Pull a route straight out of an OS Maps link.
//
//   npm run import:route -- <os-maps-url> [slug]
//
// Writes src/gpx/<slug>.gpx and prints the front matter to paste into the
// section. The OS Maps page server-renders the whole route as GeoJSON, so the
// link is all that's needed — no manual GPX export, no login.
//
// Deliberately NOT copied out of the OS payload: the route's createdBy (an OS
// account id) and its createdAt/modifiedAt timestamps. This repo is public and
// those are personal, so they stop here. See the privacy note in CLAUDE.md.
import fs from "node:fs";
import path from "node:path";

const [, , input, slugArg] = process.argv;

if (!input) {
  console.error("Usage: npm run import:route -- <os-maps-url> [slug]");
  process.exit(1);
}

// Accept a full explore.osmaps.com link, or just the numeric route id.
const id = String(input).match(/(?:route\/)?(\d{4,})/)?.[1];
if (!id) {
  console.error(`Could not find a route id in "${input}".`);
  console.error("Expected something like https://explore.osmaps.com/route/33801498/my-route");
  process.exit(1);
}

const pageUrl = `https://explore.osmaps.com/route/${id}`;
process.stderr.write(`Fetching route ${id}…\n`);

const res = await fetch(pageUrl, {
  headers: { "user-agent": "Mozilla/5.0 (compatible; swcp-walk importer)" },
});
if (!res.ok) {
  console.error(`OS Maps returned ${res.status} for ${pageUrl}.`);
  console.error("Check the route exists and is shared (unlisted or public).");
  process.exit(1);
}

const html = await res.text();
const blob = html.match(
  /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s
)?.[1];
if (!blob) {
  console.error("No route data in the page — OS Maps may have changed its markup.");
  process.exit(1);
}

const route = JSON.parse(blob)?.props?.pageProps?.route?.data;
if (!route) {
  console.error("Route data missing from the page payload.");
  process.exit(1);
}

const track = route.features?.find((f) => f.geometry?.type === "LineString");
if (!track?.geometry?.coordinates?.length) {
  console.error("Route has no track line — nothing to draw.");
  process.exit(1);
}

const name = route.metadata?.name || `OS route ${id}`;
const slug = slugArg || route.metadata?.slugName || `route-${id}`;
const points = track.geometry.coordinates;
const c = route.characteristics || {};

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Track only. The waypoints are planning shaping-points, not places of
// interest, so they're left out rather than drawn as pins on the map.
const gpx = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="swcp-walk (imported from OS Maps route ${id})"
     xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${esc(name)}</name>
  </metadata>
  <trk>
    <name>${esc(name)}</name>
    <trkseg>
${points.map(([lon, lat]) => `      <trkpt lat="${lat}" lon="${lon}"></trkpt>`).join("\n")}
    </trkseg>
  </trk>
</gpx>
`;

// A route that doubles back looks perfectly normal drawn on a map — the
// return leg traces the outward one — but its distance and ascent are both
// inflated. Warn loudly; a deliberate out-and-back spur is possible, so this
// doesn't refuse to write the file.
function metres(a, b) {
  const R = 6371008.8;
  const dLat = ((b[1] - a[1]) * Math.PI) / 180;
  const dLon = ((b[0] - a[0]) * Math.PI) / 180;
  const la1 = (a[1] * Math.PI) / 180;
  const la2 = (b[1] * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const along = [0];
for (let i = 1; i < points.length; i += 1) {
  along.push(along[i - 1] + metres(points[i - 1], points[i]));
}

let overlap = null;
for (let i = 0; i < points.length; i += 1) {
  for (let j = i + 1; j < points.length; j += 1) {
    // Only interesting if the route comes back after going a good way away.
    if (along[j] - along[i] < 500) continue;
    if (metres(points[i], points[j]) < 40) {
      const gap = along[j] - along[i];
      if (!overlap || gap > overlap.gap) {
        overlap = { gap, from: along[i], to: along[j] };
      }
    }
  }
}

if (overlap) {
  process.stderr.write(
    `\n  !! This route retraces itself: the point at ${(overlap.from / 1000).toFixed(2)} km\n` +
      `     is reached again at ${(overlap.to / 1000).toFixed(2)} km — about ` +
      `${(overlap.gap / 1000).toFixed(2)} km walked twice.\n` +
      `     Distance and ascent below are inflated by it. Check the route in OS Maps\n` +
      `     unless the doubling-back is deliberate.\n\n`
  );
}

const outPath = path.join(process.cwd(), "src", "gpx", `${slug}.gpx`);
fs.writeFileSync(outPath, gpx);

const km = c.distance != null ? (c.distance / 1000).toFixed(1) : "";
const ascent = c.elevationAscent != null ? Math.round(c.elevationAscent) : "";
const [startLon, startLat] = points[0];
const [endLon, endLat] = points[points.length - 1];

console.log(`\nWrote src/gpx/${slug}.gpx — ${points.length} track points\n`);
console.log(`OS Maps name     : ${name}`);
console.log(`Distance         : ${km} km`);
console.log(`Ascent           : ${ascent} m  (descent ${c.elevationDescent ?? "?"} m)`);
console.log(`Difficulty       : ${c.difficulty ?? "?"}`);
console.log(`Starts           : ${startLat}, ${startLon}`);
console.log(`Ends             : ${endLat}, ${endLon}`);
console.log(`
Front matter — fill in title, start, end, region and order:

---
title: ${name}
order:
region:
start:
end:
distance_km: ${km}
ascent_m: ${ascent}
gpx: /gpx/${slug}.gpx
os_url: "${pageUrl}"
---
`);
console.log("Check the start/end coordinates land where you expect before committing.");
