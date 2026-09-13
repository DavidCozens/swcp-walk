(function () {
  var el = document.querySelector(".map-overview");
  if (!el || typeof L === "undefined") return;

  var map = L.map(el, { scrollWheelZoom: false });
  // maxZoom comes from site.js — basemaps differ, and asking beyond a
  // provider's top zoom just requests tiles that aren't there.
  L.tileLayer(el.dataset.tiles, {
    attribution: el.dataset.attribution,
    maxZoom: Number(el.dataset.maxzoom) || 19,
  }).addTo(map);

  // Sensible default view over the South West while data loads / if it fails.
  map.setView([50.6, -3.8], 8);


  // Route styling comes from site.js via data-route.
  var style = {};
  try { style = JSON.parse(el.dataset.route || "{}"); } catch (e) { /* defaults below */ }

  var line = {
    color: style.color || "#6a0dad",
    weight: style.weight || 3,
    opacity: style.opacity == null ? 0.9 : style.opacity,
    lineCap: "round",
    lineJoin: "round",
  };

  // Draw a wider line underneath the route so it stays legible over contours.
  // leaflet-gpx has no casing option, so trace the loaded track again and push
  // the copy behind it.
  function addCasing(map, gpxLayer) {
    if (!style.casing) return;
    var drawn = [];
    (function collect(layer) {
      if (layer.getLatLngs) {
        var pts = layer.getLatLngs();
        if (pts && pts.length) {
          drawn.push(
            L.polyline(pts, {
              color: style.casing.color || "#ffffff",
              weight: style.casing.weight || line.weight + 3,
              opacity: 1,
              lineCap: "round",
              lineJoin: "round",
            }).addTo(map)
          );
        }
      }
      if (layer.getLayers) layer.getLayers().forEach(collect);
    })(gpxLayer);
    drawn.forEach(function (d) { d.bringToBack(); });
  }

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
          // A ferry isn't walked, so it's dashed.
          polyline_options: s.crossing ? Object.assign({}, line, { dashArray: "2 10" }) : line,
        })
          .on("loaded", function (e) {
            // Safe here: the map got a default view before the fetch, so the
            // casing can render and be pushed behind the route.
            addCasing(map, e.target);
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
