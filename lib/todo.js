// What still needs checking.
//
// The data deliberately records "not confirmed" rather than guessing, which
// only helps if the unconfirmed things are easy to find. This gathers them.
function missingForLocation(loc) {
  const missing = [];
  if (!loc.verified) missing.push("details never confirmed with the owner");
  if (loc.kind === "stay") {
    const stay = loc.stay || {};
    if (stay.dogs === null || stay.dogs === undefined) missing.push("dog policy");
    if (stay.season === null || stay.season === undefined) missing.push("opening season");
    if (stay.price_per_night === null || stay.price_per_night === undefined) missing.push("price per night");
    if (!loc.phone && !loc.email && !loc.url) missing.push("any way of contacting them");
  }
  if (loc.kind === "escape" && !(loc.escape && loc.escape.detail)) {
    missing.push("how you get off the path here");
  }
  return missing;
}

function missingForRoute(route) {
  const missing = [];
  if (!route.verified) missing.push("service never confirmed");
  if (route.season === null || route.season === undefined) missing.push("operating season");
  if (!route.frequency) missing.push("how often it runs");
  if (!route.url) missing.push("a timetable link");
  return missing;
}

export function todoList(locations, routes, providers) {
  const places = (locations || [])
    .map((loc) => ({ item: loc, missing: missingForLocation(loc) }))
    .filter((r) => r.missing.length)
    .sort((a, b) => b.missing.length - a.missing.length || a.item.name.localeCompare(b.item.name));

  const services = (routes || [])
    .map((route) => ({ item: route, missing: missingForRoute(route) }))
    .filter((r) => r.missing.length)
    .sort((a, b) => b.missing.length - a.missing.length);

  const operators = (providers || [])
    .map((p) => ({
      item: p,
      missing: [
        !p.verified ? "details never confirmed" : null,
        !p.phone && !p.url ? "any way of contacting them" : null,
        // You book a taxi by ringing it. A website alone isn't enough.
        p.kind === "transfer" && !p.phone ? "a phone number" : null,
        p.kind === "transfer" && (p.dogs === null || p.dogs === undefined)
          ? "whether they take dogs"
          : null,
      ].filter(Boolean),
    }))
    .filter((r) => r.missing.length);

  return {
    places,
    services,
    operators,
    total:
      places.reduce((n, r) => n + r.missing.length, 0) +
      services.reduce((n, r) => n + r.missing.length, 0) +
      operators.reduce((n, r) => n + r.missing.length, 0),
  };
}
