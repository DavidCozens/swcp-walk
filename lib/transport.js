// Which services are useful on a given section.
//
// A route names the locations it calls at, and a section knows which locations
// it touches — its endpoints, its escape points, any stop nearby. Intersect
// the two and the section's options fall out, so the coast bus is entered once
// and appears wherever it's relevant rather than being restated per section.
import { distanceKm } from "./nearby.js";

// Nearest place this route calls at, and how far you'd walk to reach it.
// `walkKm` answers the distance; see routesForSection for how.
function access(route, locations, from, walkKm) {
  if (!from) return null;
  let best = null;
  for (const slug of route.serves || []) {
    const stop = locations.find((l) => l.slug === slug);
    if (!stop) continue;
    const km = Math.round(walkKm(from, stop) * 100) / 100;
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

  // How far you'd walk from one end of the day to a stop. A stop on the
  // route is reached by walking the path, so it's measured along it: Fremington
  // is 4.3 km from Braunton in a straight line, but that line crosses the Taw
  // and the walk is 13.9 km round by Barnstaple. Anything further off the route
  // is straight-line, since you'd leave the path to get there anyway. The two
  // ends of the day are the two ends of the path.
  const lengthKm = nearby && nearby.lengthKm;
  const onRouteKm = (walk && walk.onRouteKm) != null ? walk.onRouteKm : 1.5;
  const measured = new Map();
  for (const kind of ["escape", "stop"]) {
    for (const loc of (nearby && nearby[kind]) || []) measured.set(loc.slug, loc);
  }
  const walkKm = (from, stop) => {
    const straight = distanceKm(from.lat, from.lon, stop.lat, stop.lon);
    if (!lengthKm || stop.slug === from.slug) return straight;
    const fromStart = from === start;
    if (stop.slug === (fromStart ? end : start)?.slug) return lengthKm;
    const m = measured.get(stop.slug);
    if (!m || m.toRoute > onRouteKm) return straight;
    return (fromStart ? m.kmAlong : lengthKm - m.kmAlong) + m.toRoute;
  };

  const escapeSlugs = new Set(((nearby && nearby.escape) || []).map((e) => e.slug));

  return routes
    .map((route) => {
      const calling = (route.serves || []).filter((slug) => touched.has(slug));
      const fromStart = access(route, all, start, walkKm);
      const fromEnd = access(route, all, end, walkKm);
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

// Firms that will drive you, or your bags, on request. No timetable to match,
// so they're offered by coverage: a local firm reaches a section if either end
// of the day falls inside its radius. Worth keeping the baggage-only ones —
// several of the firms that move bags will also move people.
export function transfersForSection({ start, end, transport }) {
  const providers = (transport && transport.providers) || [];
  const ends = [start, end].filter(Boolean);
  if (!ends.length) return [];

  return providers
    .filter((p) => p.kind === "transfer")
    .map((p) => {
      const covers = p.covers || {};
      if (covers.everywhere) return { ...p, reaches: "the whole path", distanceKm: null };
      if (typeof covers.lat !== "number" || typeof covers.radiusKm !== "number") return null;
      let nearest = null;
      for (const e of ends) {
        const km = distanceKm(covers.lat, covers.lon, e.lat, e.lon);
        if (!nearest || km < nearest.km) nearest = { km, place: e };
      }
      if (!nearest || nearest.km > covers.radiusKm) return null;
      return {
        ...p,
        reaches: nearest.place.name,
        distanceKm: Math.round(nearest.km * 10) / 10,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
}

// All public transport between two points, in one link: Google Maps knows the
// buses, trains and ferries, opens the app on a phone, and needs nothing typed.
// Generated from coordinates we already hold, so it can't go stale the way a
// stored timetable link does.
export function transitUrl(from, to) {
  if (!from || !to) return "";
  if (typeof from.lat !== "number" || typeof to.lat !== "number") return "";
  // A circuit (Portland) ends where it began: there's no journey to plan.
  if (from.slug && from.slug === to.slug) return "";
  return (
    "https://www.google.com/maps/dir/?api=1" +
    `&origin=${from.lat},${from.lon}` +
    `&destination=${to.lat},${to.lon}` +
    "&travelmode=transit"
  );
}
