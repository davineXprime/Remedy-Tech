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
    fitbit_air: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Fitbit Air"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="56" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">FITBIT AIR</text><rect x="198" y="66" width="84" height="30" rx="15" fill="#e8f5ef"/><rect x="204" y="71" width="72" height="20" rx="10" fill="#17875d"/><circle cx="220" cy="81" r="3" fill="#f4fbf8"/><circle cx="240" cy="81" r="3" fill="#f4fbf8"/><circle cx="260" cy="81" r="3" fill="#f4fbf8"/><text x="240" y="122" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">SCREENLESS</text></svg>',
    ecg: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Portable ECG"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="52" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">PORTABLE ECG</text><rect x="195" y="62" width="90" height="40" rx="6" fill="#e8f5ef"/><path d="M205 82 L218 82 L225 70 L235 95 L245 75 L255 82 L275 82" fill="none" stroke="#17875d" stroke-width="3" stroke-linecap="round"/><text x="240" y="128" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">30-SEC STRIP</text></svg>',
    bp: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Home Blood Pressure"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="52" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">HOME BP</text><rect x="200" y="64" width="50" height="32" rx="8" fill="#17875d"/><circle cx="268" cy="80" r="18" fill="none" stroke="#c5ede0" stroke-width="4"/><path d="M268 80 L278 70" stroke="#c5ede0" stroke-width="3" stroke-linecap="round"/><text x="240" y="128" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">UPPER-ARM CUFF</text></svg>',
    oxi: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Pulse Oximeter"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="52" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">PULSE OXI</text><rect x="215" y="60" width="50" height="40" rx="10" fill="#17875d"/><rect x="222" y="68" width="36" height="24" rx="6" fill="#064e3b"/><rect x="228" y="74" width="8" height="14" rx="2" fill="#c5ede0"/><rect x="240" y="72" width="8" height="16" rx="2" fill="#c5ede0"/><text x="240" y="128" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">SpO2 · HR</text></svg>',
    cgm: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="OTC Glucose"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="52" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">OTC GLUCOSE</text><rect x="210" y="62" width="60" height="36" rx="10" fill="#17875d"/><circle cx="240" cy="80" r="10" fill="#c5ede0"/><circle cx="240" cy="80" r="4" fill="#064e3b"/><text x="240" y="128" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">CGM PATCH</text></svg>',
    watch_rect: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Amazfit Bip Max"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="52" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">BIP MAX</text><rect x="212" y="58" width="56" height="44" rx="8" fill="#17875d"/><rect x="218" y="64" width="44" height="32" rx="4" fill="#064e3b"/><rect x="226" y="72" width="16" height="4" rx="1" fill="#c5ede0"/><circle cx="252" cy="80" r="8" fill="none" stroke="#c5ede0" stroke-width="2"/><text x="240" y="128" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">AMOLED · GPS</text></svg>',
    watch_round: '<svg class="art" viewBox="0 0 480 180" role="img" aria-label="Smartwatch"><rect width="480" height="180" fill="#064e3b"/><circle cx="240" cy="90" r="70" fill="none" stroke="#c5ede0" stroke-width="10"/><circle cx="240" cy="90" r="70" fill="none" stroke="#17875d" stroke-width="3" stroke-dasharray="4 6"/><circle cx="240" cy="90" r="58" fill="#0a5c3a"/><text x="240" y="56" text-anchor="middle" fill="#f4fbf8" font-family="Georgia,serif" font-size="11" font-weight="700" letter-spacing="2">WATCH</text><circle cx="240" cy="88" r="22" fill="#17875d"/><circle cx="240" cy="88" r="14" fill="#064e3b"/><text x="240" y="122" text-anchor="middle" fill="#c5ede0" font-family="Arial,sans-serif" font-size="9" font-weight="700" letter-spacing="1">TRACKER</text></svg>'
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
    var titleAttr = (c.title + " " + c.dek).split('"').join("'");
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
