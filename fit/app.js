/* Get fit self-check. Runs only in this tab: no storage, no network. */
(function () {
  "use strict";
  var form = document.getElementById("sc-form");
  if (!form) return;
  var box = document.getElementById("sc-result");
  var warn = document.getElementById("sc-warn");
  var qs = Array.prototype.slice.call(form.querySelectorAll("fieldset.q"));

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function li(arr) { return "<ul>" + arr.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>"; }

  form.addEventListener("change", function (ev) {
    if (ev.target.type !== "radio") return;
    var q = ev.target.closest("fieldset.q");
    q.classList.remove("missing");
    q.querySelectorAll(".opt").forEach(function (l) { l.classList.toggle("sel", l.querySelector("input").checked); });
  });

  form.addEventListener("reset", function () {
    qs.forEach(function (q) { q.classList.remove("missing"); q.querySelectorAll(".opt").forEach(function (l) { l.classList.remove("sel"); }); });
    box.className = "result"; box.innerHTML = "";
    warn.classList.remove("show"); warn.textContent = "";
  });

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var doc = [], build = [], tips = [], notes = [], missing = [];
    qs.forEach(function (q) {
      var c = q.querySelector("input:checked");
      q.classList.toggle("missing", !c);
      if (!c) { missing.push(q); return; }
      var text = q.getAttribute("data-gap");
      if (c.value === "doc") doc.push(text);
      else if (c.value === "build") { build.push(text); if (q.getAttribute("data-note")) notes.push(q.getAttribute("data-note")); }
      else if (c.value === "tip") tips.push(text);
    });
    if (missing.length) {
      warn.textContent = missing.length + (missing.length === 1 ? " question is" : " questions are") + " still open. Answer every one to see your result.";
      warn.classList.add("show");
      missing[0].scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    warn.classList.remove("show");
    var h = "", lvl;
    if (doc.length) {
      lvl = "lvl-doc";
      h = '<span class="eyebrow">Your result</span><p class="lvl">See a doctor first</p>' +
        "<p>You answered yes to " + (doc.length === 1 ? "a question" : doc.length + " questions") + " that schools and medical forms ask a doctor to look at before you start:</p>" + li(doc) +
        '<p class="result-note">This is common and often not a barrier. Take the operator\'s medical form to your doctor, and ask what kind of activity suits you now. <a href="#doctor">Why these questions</a></p>';
    } else if (build.length) {
      lvl = "lvl-close";
      h = '<span class="eyebrow">Your result</span><p class="lvl">Build up first</p>' +
        "<p>Nothing here points to a doctor. A few basics to build before a course:</p>" + li(build) +
        '<p class="result-note">The <a href="#routine">6-week starter routine</a> covers these. Re-take this check at week 6.</p>';
    } else {
      lvl = "lvl-ready";
      h = '<span class="eyebrow">Your result</span><p class="lvl">Ready to start lessons</p>' +
        "<p>Your basics match what schools ask of beginners. Next, fill in the school's own medical form honestly and listen to the briefing.</p>" +
        '<p class="result-note">Pick a sport from the <a href="../">home page</a>; each one sets out its own steps.</p>';
    }
    notes.forEach(function (n) { h += '<p class="result-note">' + esc(n) + "</p>"; });
    if (tips.length) h += '<p class="result-note"><strong>Also:</strong> aim for 6–8 hours of sleep, especially in the days before a course. <a href="#food">Food, water, sleep</a></p>';
    h += '<p class="small" style="color:#d4e6ef;margin:10px 0 0">A self-check, not a medical clearance or certification. Nothing was stored or sent.</p>';
    box.className = "result show " + lvl;
    box.innerHTML = h;
    box.scrollIntoView({ behavior: "smooth", block: "start" });
    box.focus({ preventScroll: true });
  });
})();
  // ---------- MOBILE NAV: edge fades + keep the active link in view ----------
  (function () {
    const snav = document.querySelector(".sectionnav");
    if (!snav) return;
    const fades = () => {
      const max = snav.scrollWidth - snav.clientWidth;
      snav.classList.toggle("fade-l", max > 4 && snav.scrollLeft > 4);
      snav.classList.toggle("fade-r", max > 4 && snav.scrollLeft < max - 4);
    };
    snav.addEventListener("scroll", fades, { passive: true });
    window.addEventListener("resize", fades);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fades);
    fades();
    const keep = () => {
      const a = snav.querySelector("a.active");
      if (!a || snav.scrollWidth <= snav.clientWidth + 4) return;
      const r = a.getBoundingClientRect(), n = snav.getBoundingClientRect();
      if (r.left < n.left + 16 || r.right > n.right - 40) snav.scrollBy({ left: r.left - n.left - 20, behavior: "smooth" });
    };
    if ("MutationObserver" in window) {
      const mo = new MutationObserver(keep);
      snav.querySelectorAll("a").forEach(a => mo.observe(a, { attributes: true, attributeFilter: ["class"] }));
    }
  })();
