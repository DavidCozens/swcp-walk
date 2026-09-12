(function () {
  var el = document.querySelector(".map-overview");
  if (!el || typeof L === "undefined") return;

  var map = L.map(el, { scrollWheelZoom: false });
  L.tileLayer(el.dataset.tiles, {
    attribution: el.dataset.attribution,
    maxZoom: 19,
  }).addTo(map);

  // Sensible default view over the South West while data loads / if it fails.
  map.setView([50.6, -3.8], 8);

  fetch(el.dataset.src)
    .then(function (r) {
      return r.json();
    })
    .then(function (sections) {
      var withGpx = sections.filter(function (s) {
        return s.gpx;
      });
      if (!withGpx.length) return;

      var group = L.featureGroup().addTo(map);
      var pending = withGpx.length;

      withGpx.forEach(function (s) {
        new L.GPX(s.gpx, {
          async: true,
          // Waypoints are just the shaping points dropped while planning in OS Maps,
          // not places of interest, so parse the line only — otherwise each one
          // renders as a pin with an empty popup.
          gpx_options: { parseElements: ["track", "route"] },
          marker_options: {
            startIconUrl: null,
            endIconUrl: null,
            shadowUrl: null,
          },
          polyline_options: { color: "#e0a010", weight: 3, opacity: 0.9 },
        })
          .on("loaded", function (e) {
            e.target
              .bindPopup(
                '<a href="' + s.url + '">' + s.title + "</a>"
              )
              .addTo(group);
            done();
          })
          .on("error", done);
      });

      function done() {
        pending -= 1;
        if (pending <= 0 && group.getLayers().length) {
          map.fitBounds(group.getBounds(), { padding: [20, 20] });
        }
      }
    })
    .catch(function () {
      /* keep the default South West view */
    });
})();
