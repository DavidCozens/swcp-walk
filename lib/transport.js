// Which services are useful on a given section.
//
// A route names the locations it calls at, and a section knows which locations
// it touches — its endpoints, its escape points, any stop nearby. Intersect
// the two and the section's options fall out, so the coast bus is entered once
// and appears wherever it's relevant rather than being restated per section.
export function routesForSection({ start, end, nearby, transport }) {
  const routes = (transport && transport.routes) || [];
  const providers = (transport && transport.providers) || [];

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

  return routes
    .map((route) => {
      const calling = (route.serves || []).filter((slug) => touched.has(slug));
      return {
        ...route,
        provider: providers.find((p) => p.slug === route.provider) || null,
        calling: calling.map((slug) => touched.get(slug).loc),
        // The question a one-way day actually asks: can this service get me
        // back to where I left the van?
        connectsEnds:
          !!start && !!end &&
          (route.serves || []).includes(start.slug) &&
          (route.serves || []).includes(end.slug),
      };
    })
    // Two calling points or it can't move you between anywhere useful.
    .filter((r) => r.calling.length >= 2)
    .sort((a, b) => Number(b.connectsEnds) - Number(a.connectsEnds));
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
