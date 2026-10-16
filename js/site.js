(function () {
  var bar = document.querySelector(".progress");
  function onScroll() {
    if (!bar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var chips = document.querySelectorAll("[data-filter]");
  var notes = document.querySelectorAll(".note");
  var moreBtn = document.getElementById("more-btn");
  var search = document.getElementById("search");
  var empty = document.querySelector(".empty");
  var expanded = false;
  var filter = "All";

  function apply() {
    var q = search ? search.value.trim().toLowerCase() : "";
    var shown = 0;
    notes.forEach(function (note) {
      var catOk = filter === "All" || note.getAttribute("data-cat") === filter;
      var text = (note.getAttribute("data-title") || "").toLowerCase();
      var qOk = !q || text.indexOf(q) !== -1;
      var folded = note.classList.contains("is-extra") && !expanded && filter === "All" && !q;
      var hide = !catOk || !qOk || folded;
      note.hidden = hide;
      if (!hide) shown += 1;
    });
    if (empty) empty.classList.toggle("show", shown === 0);
    if (moreBtn) {
      var extras = document.querySelectorAll(".note.is-extra").length;
      var browsing = filter === "All" && !q;
      moreBtn.hidden = !browsing || extras === 0;
      moreBtn.textContent = expanded ? "Show fewer notes" : "Read more notes";
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filter = chip.getAttribute("data-filter");
      chips.forEach(function (c) { c.classList.toggle("is-on", c === chip); });
      apply();
    });
  });

  if (moreBtn) {
    moreBtn.addEventListener("click", function () {
      expanded = !expanded;
      apply();
    });
  }

  if (search) search.addEventListener("input", apply);
  apply();
})();
