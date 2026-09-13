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
