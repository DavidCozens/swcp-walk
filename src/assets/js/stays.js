(function () {
  // Each list section has its own expand-all. Scoped to the section it sits
  // in, so opening the stays doesn't also open the emergencies.
  Array.prototype.forEach.call(
    document.querySelectorAll("[data-expand-all]"),
    function (btn) {
      var section = btn.closest("section");
      if (!section) return;

      function entries() {
        return Array.prototype.slice.call(section.querySelectorAll("details.entry"));
      }

      function sync() {
        var all = entries();
        if (!all.length) return;
        var open = all.filter(function (d) { return d.open; }).length;
        btn.textContent = open === all.length ? "Collapse all" : "Expand all";
      }

      btn.addEventListener("click", function () {
        var all = entries();
        var expand = all.some(function (d) { return !d.open; });
        all.forEach(function (d) { d.open = expand; });
        sync();
      });

      section.addEventListener("toggle", sync, true);
      sync();
    }
  );
})();
