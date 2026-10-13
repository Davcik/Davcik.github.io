/* Small progressive enhancements. Every page works without this file. */
(function () {
  "use strict";

  // Copy buttons: <button class="copy" data-copy="#id-of-element">Copy</button>
  document.querySelectorAll("button.copy[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-copy"));
      if (!target) return;
      var text = target.innerText.trim();
      var label = btn.textContent;
      function done(msg) {
        btn.textContent = msg;
        setTimeout(function () { btn.textContent = label; }, 1600);
      }
      function fallback() {
        var range = document.createRange();
        range.selectNodeContents(target);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        done("Selected");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done("Copied"); }, fallback);
      } else {
        fallback();
      }
    });
  });


  // Appearance toggle: follows the visitor's system setting until they choose
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Email address assembled in the browser to reduce spam harvesting
  document.querySelectorAll("a.email[data-u][data-d]").forEach(function (a) {
    var addr = a.getAttribute("data-u") + "@" + a.getAttribute("data-d");
    a.textContent = addr;
    a.setAttribute("href", "mailto:" + addr);
  });

  // Publication filter
  var search = document.getElementById("pub-search");
  if (!search) return;
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip[data-filter]"));
  var items = Array.prototype.slice.call(document.querySelectorAll(".ref[data-type]"));
  var groups = Array.prototype.slice.call(document.querySelectorAll(".year-group"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-pub-section]"));
  var count = document.getElementById("pub-count");
  var active = "all";

  function apply() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    items.forEach(function (li) {
      var okType = active === "all" || li.getAttribute("data-type") === active;
      var okText = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
      li.hidden = !(okType && okText);
      if (!li.hidden) shown++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector(".ref:not([hidden])"); });
    sections.forEach(function (s) { s.hidden = !s.querySelector(".ref:not([hidden])"); });
    if (count) count.textContent = shown + " of " + items.length + " items";
  }
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      active = chip.getAttribute("data-filter");
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      apply();
    });
  });
  search.addEventListener("input", apply);
  apply();
})();
