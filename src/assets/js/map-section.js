(function () {
  var el = document.querySelector(".map-section");
  if (!el || typeof L === "undefined") return;

  var map = L.map(el, { scrollWheelZoom: false });
  L.tileLayer(el.dataset.tiles, {
    attribution: el.dataset.attribution,
    maxZoom: 19,
  }).addTo(map);

  var gpx = el.dataset.gpx;
  if (!gpx) {
    map.setView([50.6, -3.8], 8);
    return;
  }

  new L.GPX(gpx, {
    async: true,
    marker_options: { startIconUrl: null, endIconUrl: null, shadowUrl: null },
    polyline_options: { color: "#e0a010", weight: 4, opacity: 0.9 },
  })
    .on("loaded", function (e) {
      map.fitBounds(e.target.getBounds(), { padding: [20, 20] });
    })
    .on("error", function () {
      map.setView([50.6, -3.8], 8);
    })
    .addTo(map);
})();
