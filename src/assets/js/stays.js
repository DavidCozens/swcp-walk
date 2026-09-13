(function () {
  var btn = document.querySelector("[data-expand-all]");
  var list = document.querySelector(".stay-list");
  if (!btn || !list) return;

  function entries() {
    return Array.prototype.slice.call(list.querySelectorAll("details.stay"));
  }

  function sync() {
    var all = entries();
    var open = all.filter(function (d) { return d.open; }).length;
    btn.textContent = open === all.length ? "Collapse all" : "Expand all";
  }

  btn.addEventListener("click", function () {
    var all = entries();
    var expand = all.some(function (d) { return !d.open; });
    all.forEach(function (d) { d.open = expand; });
    sync();
  });

  // Keep the button honest when entries are opened individually.
  list.addEventListener("toggle", sync, true);
  sync();
})();
