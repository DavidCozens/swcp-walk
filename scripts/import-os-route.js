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
