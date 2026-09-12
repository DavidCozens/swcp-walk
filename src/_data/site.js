export default {
  title: "Walking the South West Coast Path",
  tagline: "Planning, one section at a time — 1,014 km (630 miles) from Minehead to Poole.",
  // The published GitHub Pages URL. Because this is a *project* page the site
  // lives under /swcp-walk/ — see pathPrefix in .eleventy.js.
  url: "https://davidcozens.github.io/swcp-walk/",
  // Basemap tiles. OpenStreetMap by default (free, no key). When you're ready,
  // swap this for an Ordnance Survey Maps tile URL + your API key.
  tiles: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },
};
