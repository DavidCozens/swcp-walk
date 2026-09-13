// Which locations a section passes, and how far along its route they fall.
//
// Every location carries coordinates, so a section discovers what's near it
// rather than listing it — one record covers every section it happens to suit,
// and distances along the route are computed rather than typed.
import fs from "node:fs";
import path from "node:path";
import water from "./water.js";

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

// Every water segment, with its bounding box so the common case — a line
// nowhere near an estuary — is rejected without any arithmetic.
const WATER = water.flatMap((w) =>
  w.lines.flatMap((line) =>
    line.slice(1).map((b, i) => {
      const a = line[i];
      return {
        a,
        b,
        minLat: Math.min(a[0], b[0]),
        maxLat: Math.max(a[0], b[0]),
        minLon: Math.min(a[1], b[1]),
        maxLon: Math.max(a[1], b[1]),
      };
    })
  )
);

function side(p, q, r) {
  return (q[1] - p[1]) * (r[0] - p[0]) - (q[0] - p[0]) * (r[1] - p[1]);
}

// Whether the straight line between two points crosses water you can't walk
// over (see lib/water.js). Over a few kilometres, lat/lon is flat enough.
export function crossesWater(aLat, aLon, bLat, bLon) {
  const p = [aLat, aLon];
  const q = [bLat, bLon];
  const minLat = Math.min(aLat, bLat);
  const maxLat = Math.max(aLat, bLat);
  const minLon = Math.min(aLon, bLon);
  const maxLon = Math.max(aLon, bLon);
  for (const w of WATER) {
    if (w.maxLat < minLat || w.minLat > maxLat || w.maxLon < minLon || w.minLon > maxLon) continue;
    if (side(p, q, w.a) * side(p, q, w.b) < 0 && side(w.a, w.b, p) * side(w.a, w.b, q) < 0) {
      return true;
    }
  }
  return false;
}

// Distance you could actually cover: Infinity when the line crosses water.
function reachKm(aLat, aLon, bLat, bLon) {
  return crossesWater(aLat, aLon, bLat, bLon) ? Infinity : distanceKm(aLat, aLon, bLat, bLon);
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
// Nothing across water counts: the nearest point is the nearest one you could
// walk to, and an end of the day across an estuary is Infinity away.
//
// `nearest` stays straight-line for the kinds chosen by "nearest few, however
// far" — you'd drive to a hospital, and it's still the nearest one.
function measure(loc, points, along, { overWater = false } = {}) {
  const dist = overWater ? distanceKm : reachKm;
  let toRoute = Infinity;
  let atIndex = 0;
  for (let i = 0; i < points.length; i += 1) {
    const d = distanceKm(loc.lat, loc.lon, points[i][0], points[i][1]);
    // Only a closer point needs the water check.
    if (d < toRoute && (overWater || !crossesWater(loc.lat, loc.lon, points[i][0], points[i][1]))) {
      toRoute = d;
      atIndex = i;
    }
  }
  const first = points[0];
  const last = points[points.length - 1];
  const toStart = dist(loc.lat, loc.lon, first[0], first[1]);
  const toEnd = dist(loc.lat, loc.lon, last[0], last[1]);
  // null, not Infinity, for what can't be reached: it has to print.
  const km = (d) => (Number.isFinite(d) ? round(d) : null);
  return {
    ...loc,
    toRoute: km(toRoute),
    kmAlong: round(along[atIndex]),
    toStart: km(toStart),
    toEnd: km(toEnd),
    nearest: km(Math.min(toStart, toEnd)),
    atEnd: toEnd <= toStart,
  };
}

// Kinds that still mean something before a route is plotted: they're found
// by radius from the two ends of the day, which are known before the line
// between them. Escape points, sights and cafés are found *along* the route,
// so they wait. So do hospitals and vets, for a different reason: "the nearest
// few" is only true once that stretch has been researched, which happens with
// its route. Before that, the nearest on record for Exmouth is in Taunton.
const WITHOUT_ROUTE = ["stay", "stop"];

export function nearbyByKind(data, locations, limits) {
  let points = trackPoints(data.gpx);
  const result = { stay: [], escape: [], poi: [], stop: [], hospital: [], vet: [], food: [], shop: [] };
  // How many were in reach before the cap, so a section can say how much it
  // isn't showing.
  result.counts = {};
  const routed = points.length > 0;
  if (!routed) {
    // No route yet: measure from the endpoints alone, as a two-point line.
    const ends = [lookup(locations, data.start), lookup(locations, data.end)].filter(
      (l) => l && typeof l.lat === "number" && typeof l.lon === "number"
    );
    if (!ends.length) return result;
    points = ends.map((l) => [l.lat, l.lon]);
    if (points.length === 1) points.push(points[0]);
  }

  const along = [0];
  for (let i = 1; i < points.length; i += 1) {
    along.push(along[i - 1] + distanceKm(points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]));
  }

  // Food and supplies are matched by carrying the block, not by kind: a pub
  // with rooms is a place to stay *and* somewhere to eat, and belongs in both.
  for (const block of routed ? ["food", "shop"] : []) {
    const rule = (limits || {})[block] || {};
    const holders = (locations || []).filter(
      (l) => l[block] && typeof l.lat === "number" && typeof l.lon === "number"
    );
    const inReach = holders
      .map((loc) => measure(loc, points, along))
      .filter((m) => m.toRoute != null && (rule.routeKm == null || m.toRoute <= rule.routeKm));
    // Isolation: distance to the next nearest of the same sort, measured
    // against every one we know of. A lone tea room on a headland scores high;
    // one of forty in a town scores near zero and sorts itself out of the way.
    // A café across the estuary is no neighbour.
    for (const m of inReach) {
      let isolation = Infinity;
      for (const other of holders) {
        if (other.slug === m.slug) continue;
        const d = reachKm(m.lat, m.lon, other.lat, other.lon);
        if (d < isolation) isolation = d;
      }
      m.isolation = isolation === Infinity ? null : round(isolation);
    }
    inReach.sort((a, b) => (b.isolation ?? 99) - (a.isolation ?? 99));
    result.counts[block] = inReach.length;
    result[block] = rule.nearest != null ? inReach.slice(0, rule.nearest) : inReach;
  }

  for (const loc of locations || []) {
    if (!(loc.kind in result)) continue;
    if (loc.kind === "food" || loc.kind === "shop") continue;
    if (!routed && !WITHOUT_ROUTE.includes(loc.kind)) continue;
    if (typeof loc.lat !== "number" || typeof loc.lon !== "number") continue;
    const rule = (limits || {})[loc.kind] || {};
    const m = measure(loc, points, along, { overWater: rule.nearest != null });
    // A hospital or a vet is chosen by "nearest few, however far" — there is
    // always a nearest A&E and you want to know which, even at an hour's
    // drive. Everything else is chosen by radius: somewhere to sleep counts if
    // it's near either end of the day (you can drive) or near the route; an
    // escape point only near the route, since leaving the path partway is the
    // whole point of it.
    //
    // "However far" still has a ceiling, for a route plotted before its
    // stretch is researched — the Yealm ferry, say, whose nearest A&E on
    // record would otherwise be 150 km back up the coast. Not an answer, and
    // a dangerous one to be handed in an emergency.
    if (rule.nearest != null) {
      if (rule.maxKm == null || m.nearest <= rule.maxKm) result[loc.kind].push(m);
      continue;
    }
    // Without a route there's no line to be near, only the two ends.
    const ok =
      (rule.endpointKm != null && m.nearest != null && m.nearest <= rule.endpointKm) ||
      (routed && rule.routeKm != null && m.toRoute != null && m.toRoute <= rule.routeKm);
    if (ok) result[loc.kind].push(m);
  }

  // How long the route is, so a walk to a stop on it can be measured along it.
  result.lengthKm = routed ? round(along[along.length - 1]) : null;
  // Near the route but across water from both ends: sorted by the walk to it.
  const fromEnds = (m) => m.nearest ?? m.toRoute;
  result.stay.sort((a, b) => fromEnds(a) - fromEnds(b));
  result.escape.sort((a, b) => a.kmAlong - b.kmAlong);
  result.poi.sort((a, b) => a.kmAlong - b.kmAlong);
  result.stop.sort((a, b) => fromEnds(a) - fromEnds(b));
  for (const kind of ["hospital", "vet"]) {
    const take = ((limits || {})[kind] || {}).nearest;
    result[kind].sort((a, b) => a.nearest - b.nearest);
    if (take != null) result[kind] = result[kind].slice(0, take);
  }
  // Three GP minor-injury services can fill "the nearest few" and push the
  // A&E off the page: at Hartland Quay it's fourth. It's the one you can't do
  // without, so the nearest A&E is always listed, after the others.
  const hasAe = (list) => list.some((h) => (h.hospital || {}).type === "ae");
  if (routed && !hasAe(result.hospital)) {
    const rule = (limits || {}).hospital || {};
    const ae = (locations || [])
      .filter((l) => l.kind === "hospital" && (l.hospital || {}).type === "ae")
      .map((l) => measure(l, points, along, { overWater: true }))
      .filter((m) => rule.maxKm == null || m.nearest <= rule.maxKm)
      .sort((a, b) => a.nearest - b.nearest)[0];
    if (ae) result.hospital.push(ae);
  }
  return result;
}

// An evenly spaced sample of a route, small enough to ship in the sections
// feed but enough for the browser to tell which section it's standing on.
export function samplePoints(gpxField, count = 12) {
  const points = trackPoints(gpxField);
  if (points.length <= count) return points.map(([lat, lon]) => [round5(lat), round5(lon)]);
  const step = (points.length - 1) / (count - 1);
  const out = [];
  for (let i = 0; i < count; i += 1) {
    const [lat, lon] = points[Math.round(i * step)];
    out.push([round5(lat), round5(lon)]);
  }
  return out;
}

function round5(n) {
  return Math.round(n * 1e5) / 1e5;
}

// The endpoint a section names, resolved to its record.
export function lookup(locations, slug) {
  return (locations || []).find((l) => l.slug === slug) || null;
}
