(function () {
  var btn = document.querySelector("[data-nearest]");
  if (!btn) return;

  var status = document.querySelector("[data-nearest-status]");
  function say(message) {
    if (status) status.textContent = message || "";
  }

  function km(aLat, aLon, bLat, bLon) {
    var R = 6371.0088;
    var dLat = ((bLat - aLat) * Math.PI) / 180;
    var dLon = ((bLon - aLon) * Math.PI) / 180;
    var h =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((aLat * Math.PI) / 180) *
        Math.cos((bLat * Math.PI) / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  btn.addEventListener("click", function () {
    if (!navigator.geolocation) {
      say("This browser can't report your location.");
      return;
    }
    btn.disabled = true;
    say("Finding you…");

    navigator.geolocation.getCurrentPosition(
      function (pos) {
        fetch(btn.getAttribute("data-nearest"))
          .then(function (r) { return r.json(); })
          .then(function (sections) {
            var best = null;
            sections.forEach(function (s) {
              (s.points || []).forEach(function (p) {
                var d = km(pos.coords.latitude, pos.coords.longitude, p[0], p[1]);
                if (!best || d < best.km) best = { km: d, section: s };
              });
            });
            if (!best) {
              btn.disabled = false;
              say("No sections have a route yet.");
              return;
            }
            say(
              "Nearest: " + best.section.title +
              ", about " + best.km.toFixed(best.km < 10 ? 1 : 0) + " km away. Opening…"
            );
            window.location.href = best.section.url;
          })
          .catch(function () {
            btn.disabled = false;
            say("Couldn't load the sections list.");
          });
      },
      function (err) {
        btn.disabled = false;
        say(
          err.code === err.PERMISSION_DENIED
            ? "Location permission denied."
            : "Couldn't get your location."
        );
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  });
})();
