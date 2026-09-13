export default {
  title: "Walking the South West Coast Path",
  tagline: "Planning, one section at a time — 1,014 km (630 miles) from Minehead to Poole.",
  // The published GitHub Pages URL. Because this is a *project* page the site
  // lives under /swcp-walk/ — see pathPrefix in .eleventy.js.
  url: "https://davidcozens.github.io/swcp-walk/",
  // Basemap tiles. OpenTopoMap: contours and hillshading, free, no key needed.
  // It only renders to zoom 17, hence maxZoom below — going further asks for
  // tiles that don't exist. Swap for an Ordnance Survey Maps tile URL + key if
  // the Explorer look is wanted later.
  tiles: {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | ' +
      'Tiles &copy; <a href="https://opentopomap.org">OpenTopoMap</a> ' +
      '(<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    maxZoom: 17,
  },
  // How near a location has to be before a section lists it.
  // endpointKm: from where the day starts or finishes — drivable.
  // routeKm: from the route itself — reachable on foot mid-walk.
  nearby: {
    stay: { endpointKm: 5, routeKm: 2 },
    // An escape point is only useful if it's near the path you're on.
    escape: { routeKm: 1.5 },
    poi: { routeKm: 1 },
    // A transport stop is worth knowing about a little further out — you'd
    // walk or take a taxi to one.
    stop: { endpointKm: 5, routeKm: 3 },
    // Not a radius: the nearest A&E may be an hour away and you still need it.
    hospital: { nearest: 3 },
    vet: { nearest: 3 },
  },

  // How far you'd walk to reach a service. A stop doesn't have to be at the
  // spot to be useful — Porlock is 2.4 km from Porlock Weir, which makes the
  // coast bus usable for the price of the walk. Beyond reachKm a service is
  // still offered, but flagged as a stretch; beyond maxReachKm it's only kept
  // if it serves an escape point.
  walk: { reachKm: 2.5, maxReachKm: 5 },

  // How the route is drawn. The casing is a wider line underneath: on a
  // contour map the halo does more for legibility than the colour does.
  // Violet because nothing on OpenTopoMap's brown-and-green palette is violet.
  route: {
    color: "#6a0dad",
    weight: 4,
    opacity: 0.9,
    casing: { color: "#ffffff", weight: 7 },
  },
};
