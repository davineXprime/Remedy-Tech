(function () {
  var bar = document.querySelector(".progress");
  function onScroll() {
    if (!bar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var ICONS = {
    bp: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Home Blood Pressure"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><rect x="90" y="58" width="220" height="64" rx="14" fill="none" stroke="#d4f8e8" stroke-width="8"/><rect x="98" y="66" width="204" height="48" rx="10" fill="#17875d"/><path d="M310 90 H360" stroke="#d4f8e8" stroke-width="6" stroke-linecap="round"/><circle cx="390" cy="90" r="38" fill="#17875d"/><circle cx="390" cy="90" r="28" fill="none" stroke="#d4f8e8" stroke-width="5"/><path d="M390 90 L408 72" stroke="#d4f8e8" stroke-width="4" stroke-linecap="round"/><circle cx="390" cy="90" r="5" fill="#d4f8e8"/></svg>',
    oxi: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Pulse Oximeter"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><rect x="140" y="48" width="120" height="84" rx="18" fill="#17875d"/><rect x="152" y="60" width="96" height="60" rx="12" fill="#064e3b"/><rect x="168" y="78" width="14" height="28" rx="3" fill="#d4f8e8"/><rect x="190" y="70" width="14" height="36" rx="3" fill="#d4f8e8"/><rect x="212" y="82" width="14" height="24" rx="3" fill="#d4f8e8"/><path d="M290 110 C310 70 330 130 350 90 C370 50 390 120 410 85" fill="none" stroke="#d4f8e8" stroke-width="5" stroke-linecap="round"/><circle cx="290" cy="110" r="6" fill="#d4f8e8"/></svg>',
    cgm: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="OTC Glucose"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><rect x="130" y="52" width="140" height="76" rx="16" fill="#17875d"/><rect x="148" y="68" width="104" height="44" rx="10" fill="#064e3b"/><circle cx="200" cy="90" r="16" fill="#d4f8e8"/><circle cx="200" cy="90" r="7" fill="#064e3b"/><path d="M340 55 C360 55 380 75 380 95 C380 120 360 140 340 140 C320 140 300 120 300 95 C300 75 320 55 340 55 Z" fill="#17875d"/><ellipse cx="340" cy="88" rx="18" ry="12" fill="#d4f8e8" opacity="0.35"/></svg>',
    watch_round: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Smartwatch"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><rect x="70" y="78" width="70" height="24" rx="8" fill="#17875d"/><rect x="340" y="78" width="70" height="24" rx="8" fill="#17875d"/><circle cx="240" cy="90" r="58" fill="#17875d"/><circle cx="240" cy="90" r="46" fill="#064e3b"/><circle cx="240" cy="90" r="6" fill="#d4f8e8"/><path d="M240 90 L240 62" stroke="#d4f8e8" stroke-width="4" stroke-linecap="round"/><path d="M240 90 L262 102" stroke="#d4f8e8" stroke-width="3" stroke-linecap="round"/><rect x="218" y="118" width="10" height="8" rx="1" fill="#d4f8e8"/><rect x="232" y="114" width="10" height="12" rx="1" fill="#d4f8e8"/><rect x="246" y="110" width="10" height="16" rx="1" fill="#d4f8e8"/></svg>',
    watch_rect: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="AMOLED Watch"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><rect x="60" y="78" width="80" height="24" rx="8" fill="#17875d"/><rect x="340" y="78" width="80" height="24" rx="8" fill="#17875d"/><rect x="155" y="38" width="170" height="104" rx="22" fill="#17875d"/><rect x="168" y="50" width="144" height="80" rx="14" fill="#064e3b"/><rect x="188" y="68" width="48" height="8" rx="3" fill="#d4f8e8"/><rect x="188" y="84" width="70" height="6" rx="2" fill="#d4f8e8" opacity="0.6"/><rect x="188" y="98" width="36" height="6" rx="2" fill="#d4f8e8" opacity="0.4"/><circle cx="290" cy="90" r="18" fill="none" stroke="#d4f8e8" stroke-width="4"/><path d="M290 80 L290 90 L300 96" stroke="#d4f8e8" stroke-width="3" stroke-linecap="round" fill="none"/></svg>',
    phone: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Smartphone"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><rect x="175" y="22" width="130" height="136" rx="16" fill="#17875d"/><rect x="185" y="36" width="110" height="100" rx="6" fill="#064e3b"/><circle cx="240" cy="148" r="6" fill="#d4f8e8"/><rect x="220" y="28" width="40" height="4" rx="2" fill="#d4f8e8" opacity="0.5"/></svg>',
    audio: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Audio"><rect width="480" height="180" fill="#064e3b"/><g fill="#d4f8e8"><path d="M36 28 L40 42 L56 46 L40 50 L36 64 L32 50 L16 46 L32 42 Z"/><path d="M440 36 L444 48 L458 52 L444 56 L440 68 L436 56 L422 52 L436 48 Z"/></g><circle cx="180" cy="90" r="42" fill="#17875d"/><circle cx="180" cy="90" r="18" fill="#064e3b"/><circle cx="300" cy="90" r="42" fill="#17875d"/><circle cx="300" cy="90" r="18" fill="#064e3b"/><path d="M222 70 Q240 50 258 70" fill="none" stroke="#d4f8e8" stroke-width="5"/><path d="M210 55 Q240 28 270 55" fill="none" stroke="#d4f8e8" stroke-width="4" opacity="0.6"/></svg>'
  };

  var grid = document.getElementById("notes-grid");
  var chips = document.querySelectorAll("[data-filter]");
  var moreBtn = document.getElementById("more-btn");
  var search = document.getElementById("search");
  var empty = document.querySelector(".empty");
  var expanded = false;
  var filter = "All";
  var notes = [];

  function renderCard(c) {
    var icon = ICONS[c.icon] || ICONS.watch_round;
    var extra = c.extra ? " is-extra" : "";
    var titleAttr = (c.title + " " + c.dek).replace(/"/g, """);
    return (
      '<a class="note' + extra + '" data-cat="' + c.category + '" data-title="' + titleAttr + '" href="' + c.href + '">' +
      '<div class="note-top"><span>' + c.category + '</span><span>No. ' + c.num + '</span></div>' +
      '<div class="mini">' + icon + '</div>' +
      '<h3>' + c.title + '</h3>' +
      '<p>' + c.dek + '</p>' +
      '<div class="go">Read the note →</div>' +
      '</a>'
    );
  }

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

  function boot(cards) {
    if (!grid) return;
    grid.innerHTML = cards.map(renderCard).join("");
    notes = document.querySelectorAll(".note");
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
  }

  fetch("data/homepage-cards.json")
    .then(function (r) { return r.json(); })
    .then(boot)
    .catch(function () {
      if (grid) grid.innerHTML = '<p style="padding:1rem">Unable to load notes.</p>';
    });
})();
