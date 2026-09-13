(function () {
  var el = document.querySelector(".map-section");
  if (!el || typeof L === "undefined") return;

  var map = L.map(el, { scrollWheelZoom: false });
  // maxZoom comes from site.js — basemaps differ, and asking beyond a
  // provider's top zoom just requests tiles that aren't there.
  L.tileLayer(el.dataset.tiles, {
    attribution: el.dataset.attribution,
    maxZoom: Number(el.dataset.maxzoom) || 19,
  }).addTo(map);


  // Route styling comes from site.js via data-route.
  var style = {};
  try { style = JSON.parse(el.dataset.route || "{}"); } catch (e) { /* defaults below */ }

  var line = {
    color: style.color || "#6a0dad",
    weight: style.weight || 4,
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


  // Places to stay, as pins. Uses divIcons rather than Leaflet's default
  // marker so there are no image requests to a CDN and each type can be
  // coloured from the stylesheet.
  function addStays(map) {
    var stays = [];
    try { stays = JSON.parse(el.dataset.stays || "[]"); } catch (e) { return null; }
    if (!stays.length) return null;

    var group = L.layerGroup();
    var byslug = {};

    stays.forEach(function (s) {
      if (typeof s.lat !== "number" || typeof s.lon !== "number") return;
      var marker = L.marker([s.lat, s.lon], {
        title: s.name,
        icon: L.divIcon({
          className: "stay-pin stay-pin-" + s.type,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
          popupAnchor: [0, -8],
          html: "",
        }),
      });
      marker.bindPopup(
        '<strong>' + escapeHtml(s.name) + "</strong><br>" +
        escapeHtml(s.label) + " &middot; " + escapeHtml(s.where) +
        (s.url ? '<br><a href="' + encodeURI(s.url) + '">website</a>' : "") +
        (s.directions ? (s.url ? " &middot; " : "<br>") +
          '<a href="' + encodeURI(s.directions) + '">directions</a>' : "")
      );
      marker.addTo(group);
      byslug[s.slug] = marker;
    });

    group.addTo(map);
    L.control.layers(null, { "Places to stay": group }, { collapsed: false }).addTo(map);

    // "Show on map" next to an entry in the list.
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-stay]") : null;
      if (!btn) return;
      var marker = byslug[btn.getAttribute("data-stay")];
      if (!marker) return;
      if (!map.hasLayer(group)) group.addTo(map);
      map.setView(marker.getLatLng(), Math.min(15, map.getMaxZoom()));
      marker.openPopup();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    return group;
  }

  function escapeHtml(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var gpx = el.dataset.gpx;
  if (!gpx) {
    map.setView([50.6, -3.8], 8);
    addStays(map);
    return;
  }

  new L.GPX(gpx, {
    async: true,
    // Waypoints are just the shaping points dropped while planning in OS Maps,
    // not places of interest, so parse the line only — otherwise each one
    // renders as a pin with an empty popup.
    gpx_options: { parseElements: ["track", "route"] },
    marker_options: { startIconUrl: null, endIconUrl: null, shadowUrl: null },
    polyline_options: line,
  })
    .on("loaded", function (e) {
      // Set the view first: the casing can't be drawn, and so can't be pushed
      // behind the route, until the map has a centre and zoom.
      map.fitBounds(e.target.getBounds(), { padding: [20, 20] });
      addCasing(map, e.target);
      addStays(map);
    })
    .on("error", function () {
      map.setView([50.6, -3.8], 8);
    })
    .addTo(map);
})();
