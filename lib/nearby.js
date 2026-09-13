// Which locations a section passes, and how far along its route they fall.
//
// Every location carries coordinates, so a section discovers what's near it
// rather than listing it — one record covers every section it happens to suit,
// and distances along the route are computed rather than typed.
import fs from "node:fs";
import path from "node:path";

const EARTH_KM = 6371.0088;

export function distanceKm(aLat, aLon, bLat, bLon) {
  const dLat = ((bLat - aLat) * Math.PI) / 180;
  const dLon = ((bLon - aLon) * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) *
      Math.cos((bLat * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_KM * Math.asin(Math.sqrt(h));
}

const trackCache = new Map();
export function trackPoints(gpxField) {
  if (!gpxField) return [];
  if (trackCache.has(gpxField)) return trackCache.get(gpxField);
  const file = path.join(process.cwd(), "src", gpxField.replace(/^\//, ""));
  let points = [];
  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, "utf8");
    points = [...raw.matchAll(/<trkpt lat="([-\d.]+)" lon="([-\d.]+)"/g)].map(
      (m) => [parseFloat(m[1]), parseFloat(m[2])]
    );
  }
  trackCache.set(gpxField, points);
  return points;
}

function round(km) {
  return Math.round(km * 100) / 100;
}

// Distances from one location to a route: nearest point on the track, how far
// along the track that point is, and the distance to each end of the day.
function measure(loc, points, along) {
  let toRoute = Infinity;
  let atIndex = 0;
  for (let i = 0; i < points.length; i += 1) {
    const d = distanceKm(loc.lat, loc.lon, points[i][0], points[i][1]);
    if (d < toRoute) {
      toRoute = d;
      atIndex = i;
    }
  }
  const first = points[0];
  const last = points[points.length - 1];
  const toStart = distanceKm(loc.lat, loc.lon, first[0], first[1]);
  const toEnd = distanceKm(loc.lat, loc.lon, last[0], last[1]);
  return {
    ...loc,
    toRoute: round(toRoute),
    kmAlong: round(along[atIndex]),
    toStart: round(toStart),
    toEnd: round(toEnd),
    nearest: round(Math.min(toStart, toEnd)),
    atEnd: toEnd <= toStart,
  };
}

export function nearbyByKind(data, locations, limits) {
  const points = trackPoints(data.gpx);
  const result = { stay: [], escape: [], poi: [] };
  if (!points.length) return result;

  const along = [0];
  for (let i = 1; i < points.length; i += 1) {
    along.push(along[i - 1] + distanceKm(points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]));
  }

  for (const loc of locations || []) {
    if (!(loc.kind in result)) continue;
    if (typeof loc.lat !== "number" || typeof loc.lon !== "number") continue;
    const rule = (limits || {})[loc.kind] || {};
    const m = measure(loc, points, along);
    // Somewhere to sleep counts if it's near either end of the day (you can
    // drive) or near the route. An escape point only counts near the route —
    // the whole point of it is leaving the path partway.
    const ok =
      (rule.endpointKm != null && m.nearest <= rule.endpointKm) ||
      (rule.routeKm != null && m.toRoute <= rule.routeKm);
    if (ok) result[loc.kind].push(m);
  }

  result.stay.sort((a, b) => a.nearest - b.nearest);
  result.escape.sort((a, b) => a.kmAlong - b.kmAlong);
  result.poi.sort((a, b) => a.kmAlong - b.kmAlong);
  return result;
}

// The endpoint a section names, resolved to its record.
export function lookup(locations, slug) {
  return (locations || []).find((l) => l.slug === slug) || null;
}
