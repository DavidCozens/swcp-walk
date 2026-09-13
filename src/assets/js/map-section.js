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
  // A ferry isn't walked, so it's drawn dashed — the same as on the overview.
  if (el.hasAttribute("data-crossing")) line.dashArray = "2 10";

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


  // Every nearby location as a pin — places to stay and escape points alike.
  // Uses divIcons rather than Leaflet's default marker so there are no image
  // requests to a CDN and each kind can be coloured from the stylesheet.
  var byslug = {};

  function buildLayer(json) {
    var stays = [];
    try { stays = JSON.parse(json || "[]"); } catch (e) { return null; }
    if (!stays.length) return null;

    var group = L.layerGroup();

    stays.forEach(function (s) {
      if (typeof s.lat !== "number" || typeof s.lon !== "number") return;
      var marker = L.marker([s.lat, s.lon], {
        title: s.name,
        // Same badge markup the list uses, so the two always match.
        icon: L.divIcon({
          className: "stay-marker",
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12],
          html: s.badge || "",
        }),
      });
      marker.bindPopup(
        (s.badge || "") +
        '<strong>' + escapeHtml(s.name) + "</strong><br>" +
        escapeHtml(s.label) + " &middot; " + escapeHtml(s.where) +
        (s.phone ? '<br><a href="tel:' + encodeURI(s.phone.replace(/ /g, "")) + '">' + escapeHtml(s.phone) + "</a>" : "") +
        (s.url ? '<br><a href="' + encodeURI(s.url) + '">website</a>' : "") +
        (s.directions ? (s.url ? " &middot; " : "<br>") +
          '<a href="' + encodeURI(s.directions) + '">directions</a>' : "")
      );
      marker.addTo(group);
      byslug[s.slug] = { marker: marker };
    });

    return group;
  }

  function addStays(map) {
    // Everything in one layer. Somewhere an hour's drive away doesn't widen
    // the view — the map fits the route's bounds, never the markers — so it
    // simply waits off-screen until you zoom out or press "Show on map".
    var all = buildLayer(el.dataset.stays);
    if (!all) return null;
    all.addTo(map);
    L.control.layers(null, { "Show pins": all }, { collapsed: false }).addTo(map);

    // "Show on map" next to an entry in the list.
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest("[data-stay]") : null;
      if (!btn) return;
      // The button lives in a <summary>; don't open/close the entry as well.
      ev.preventDefault();
      ev.stopPropagation();
      var entry = byslug[btn.getAttribute("data-stay")];
      if (!entry) return;
      var marker = entry.marker;
      if (!map.hasLayer(all)) all.addTo(map);
      map.setView(marker.getLatLng(), Math.min(15, map.getMaxZoom()));
      marker.openPopup();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    return all;
  }

  function escapeHtml(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var gpx = el.dataset.gpx;
  if (!gpx) {
    // No route yet: frame the two ends and mark them, but draw no line
    // between — a straight one would look like a route and isn't.
    var ends = [];
    try { ends = JSON.parse(el.dataset.ends || "[]"); } catch (e) { /* none */ }
    if (ends.length) {
      ends.forEach(function (p) {
        L.circleMarker([p.lat, p.lon], {
          radius: 7, color: style.casing ? style.casing.color : "#ffffff", weight: 2,
          fillColor: line.color, fillOpacity: 1,
        }).bindTooltip(p.name).addTo(map);
      });
      var bounds = L.latLngBounds(ends.map(function (p) { return [p.lat, p.lon]; }));
      // A circuit starts and ends in one spot, which has no extent to fit.
      if (bounds.getNorthEast().equals(bounds.getSouthWest())) map.setView(bounds.getCenter(), 12);
      else map.fitBounds(bounds, { padding: [40, 40] });
    } else {
      map.setView([50.6, -3.8], 8);
    }
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
