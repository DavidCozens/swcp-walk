// Which services are useful on a given section.
//
// A route names the locations it calls at, and a section knows which locations
// it touches — its endpoints, its escape points, any stop nearby. Intersect
// the two and the section's options fall out, so the coast bus is entered once
// and appears wherever it's relevant rather than being restated per section.
import { distanceKm } from "./nearby.js";

// Nearest place this route calls at, and how far you'd walk to reach it.
function access(route, locations, from) {
  if (!from) return null;
  let best = null;
  for (const slug of route.serves || []) {
    const stop = locations.find((l) => l.slug === slug);
    if (!stop) continue;
    const km = Math.round(distanceKm(from.lat, from.lon, stop.lat, stop.lon) * 100) / 100;
    if (!best || km < best.km) best = { stop, km };
  }
  return best;
}

export function routesForSection({ start, end, nearby, transport, locations, walk }) {
  const routes = (transport && transport.routes) || [];
  const providers = (transport && transport.providers) || [];
  const all = locations || [];
  const reachKm = (walk && walk.reachKm) != null ? walk.reachKm : 2.5;
  const maxKm = (walk && walk.maxReachKm) != null ? walk.maxReachKm : 5;

  // Everywhere this section touches, by slug.
  const touched = new Map();
  const add = (loc, role) => {
    if (loc && loc.slug && !touched.has(loc.slug)) touched.set(loc.slug, { loc, role });
  };
  add(start, "start");
  add(end, "finish");
  for (const kind of ["escape", "stop", "stay"]) {
    for (const loc of (nearby && nearby[kind]) || []) add(loc, kind);
  }

  const escapeSlugs = new Set(((nearby && nearby.escape) || []).map((e) => e.slug));

  return routes
    .map((route) => {
      const calling = (route.serves || []).filter((slug) => touched.has(slug));
      const fromStart = access(route, all, start);
      const fromEnd = access(route, all, end);
      // A service doesn't have to stop at the exact spot to be usable — it has
      // to be within a walk of it. Porlock is 2.4 km from Porlock Weir, which
      // makes the coast bus usable for the price of the walk, not unusable.
      const walkStart = fromStart ? fromStart.km : Infinity;
      const walkEnd = fromEnd ? fromEnd.km : Infinity;
      const furthestWalk = Math.max(walkStart, walkEnd);
      return {
        ...route,
        provider: providers.find((p) => p.slug === route.provider) || null,
        calling: calling.map((slug) => touched.get(slug).loc),
        fromStart,
        fromEnd,
        furthestWalk,
        linksEnds: furthestWalk <= reachKm,
        // Reaches both ends, but further out than we'd normally offer.
        stretch: furthestWalk > reachKm && furthestWalk <= maxKm,
        // Useful for bailing out partway even if it can't link the two ends.
        servesEscape: (route.serves || []).some((slug) => escapeSlugs.has(slug)),
      };
    })
    .filter((r) => r.calling.length >= 2 && (r.furthestWalk <= maxKm || r.servesEscape))
    .sort(
      (a, b) =>
        Number(b.linksEnds) - Number(a.linksEnds) ||
        a.furthestWalk - b.furthestWalk
    );
}

// All public transport between two points, in one link: Google Maps knows the
// buses, trains and ferries, opens the app on a phone, and needs nothing typed.
// Generated from coordinates we already hold, so it can't go stale the way a
// stored timetable link does.
export function transitUrl(from, to) {
  if (!from || !to) return "";
  if (typeof from.lat !== "number" || typeof to.lat !== "number") return "";
  return (
    "https://www.google.com/maps/dir/?api=1" +
    `&origin=${from.lat},${from.lon}` +
    `&destination=${to.lat},${to.lon}` +
    "&travelmode=transit"
  );
}
