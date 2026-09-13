// Works out which places to stay are near a section, so accommodation can be
// recorded once as a point on the map and picked up by every section it suits.
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

// GPX track points. Read straight off disk at build time; a regex is enough
// for a file we generate ourselves, and avoids parsing 500 points twice.
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

// A place counts as near if it's close to where the day starts or ends (you
// park there), or close to the route itself (you can reach it mid-walk). Both
// distances are returned so the page can say which it is.
export function nearbyStays(data, accommodation, limits) {
  const list = Array.isArray(accommodation) ? accommodation : [];
  const endpointKm = limits?.endpointKm ?? 5;
  const routeKm = limits?.routeKm ?? 2;

  const points = trackPoints(data.gpx);
  if (!points.length) return [];
  const first = points[0];
  const last = points[points.length - 1];

  return list
    .filter((a) => typeof a.lat === "number" && typeof a.lon === "number")
    .map((a) => {
      let toRoute = Infinity;
      for (const [lat, lon] of points) {
        const d = distanceKm(a.lat, a.lon, lat, lon);
        if (d < toRoute) toRoute = d;
      }
      const toStart = distanceKm(a.lat, a.lon, first[0], first[1]);
      const toEnd = distanceKm(a.lat, a.lon, last[0], last[1]);
      return {
        ...a,
        toRoute: round(toRoute),
        toStart: round(toStart),
        toEnd: round(toEnd),
        nearest: round(Math.min(toStart, toEnd)),
        atEnd: toEnd <= toStart,
      };
    })
    .filter((a) => a.nearest <= endpointKm || a.toRoute <= routeKm)
    .sort((a, b) => a.nearest - b.nearest);
}

function round(km) {
  return Math.round(km * 100) / 100;
}
