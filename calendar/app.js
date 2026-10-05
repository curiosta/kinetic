// Kinetic season calendar (/calendar/). Data: #caldata (generated from kinetic-tools/build/seasons.py).
(function () {
  "use strict";
  const D = JSON.parse(document.getElementById("caldata").textContent);
  const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const ST = { P: ["Peak", "●"], Y: ["Possible", "◐"], O: ["Off", "✕"] };
  const NOW = new Date(), CUR = NOW.getMonth();
  const pad = n => String(n).padStart(2, "0");
  const TODAY = NOW.getFullYear() + "-" + pad(NOW.getMonth() + 1) + "-" + pad(NOW.getDate());
  const ext = (url, text) => /^https?:/.test(url) ? '<a href="' + url + '" target="_blank" rel="noopener">' + text + "</a>" : '<a href="' + url + '">' + text + "</a>";
  const sname = s => D.sports[s].name;
  const state = { group: "all", events: true, month: CUR };

  // ---------- current month highlight ----------
  $$('#cal [data-m="' + CUR + '"]').forEach(el => { if (!el.classList.contains("ev") || el.classList.contains("on")) el.classList.add("now"); });
  $$('#cal thead th[data-m="' + CUR + '"]').forEach(el => el.classList.add("now"));

  // ---------- cell note ----------
  // Touch/coarse: tap opens; outside tap / Escape / Close / scroll dismisses (no sticky hover).
  // Fine pointer: mouse hover may still preview; click/focus keep working for keyboard.
  const note = $("#cellnote");
  const HINT_HOVER = '<p class="hint">Hover over or tap a cell to see why that month is marked the way it is.</p>';
  const HINT_TOUCH = '<p class="hint">Tap a cell to see why that month is marked the way it is. Tap outside, press Escape, or Close to dismiss.</p>';
  const coarseMq = window.matchMedia("(hover: none), (pointer: coarse)");
  const isCoarse = () => coarseMq.matches;
  const hintHtml = () => isCoarse() ? HINT_TOUCH : HINT_HOVER;
  let sel = null, ignoreScrollUntil = 0, ignoreHoverUntil = 0, noteOpen = false;
  function srcLinks(keys) { return keys.map(k => ext(D.src[k][1], D.src[k][0])).join("; "); }
  function placeNote(td) {
    note.classList.remove("flip-top");
    if (!isCoarse() || !td) return;
    const r = td.getBoundingClientRect();
    // Flip to top when the tapped cell sits in the lower half (keeps the panel in view).
    if (r.bottom > window.innerHeight * 0.55) note.classList.add("flip-top");
  }
  function fillNote(body) {
    note.innerHTML = '<div class="cellnote-bar"><button type="button" class="cellnote-close" aria-label="Close note">Close</button></div>' + body;
    note.classList.add("is-open");
    noteOpen = true;
    ignoreScrollUntil = Date.now() + 450;
  }
  function showRow(i, m) {
    const r = D.rows[i], s = r.m[m];
    const evs = D.events.filter(e => e.s === r.s && e.m.indexOf(m) >= 0);
    let h = '<h4>' + sname(r.s) + " · " + r.rg + "</h4>";
    h += "<p><b>" + D.mon[m] + '</b> <span class="tag ' + s + '">' + ST[s][1] + " " + ST[s][0] + "</span>" + (r.yr ? ' <span class="tag Y">Year-round</span>' : "") + "</p>";
    h += "<p>" + r.n[m] + "</p>";
    if (r.cf) h += '<p class="cf"><b>Sources differ:</b> ' + r.cf + "</p>";
    h += '<p class="why"><b>Why it matters:</b> ' + r.why + ' <a href="../' + r.s + "/#" + r.a + '">Read the physics →</a></p>';
    if (evs.length) h += '<p class="why"><span class="tag E">◆ Event</span> ' + evs.map(e => e.name + " (" + e.when + ")").join("; ") + "</p>";
    h += '<p class="src"><b>Source:</b> ' + srcLinks(r.src) + "</p>";
    fillNote(h);
  }
  function showEv(s, m) {
    const evs = D.events.filter(e => e.s === s && e.m.indexOf(m) >= 0);
    fillNote("<h4>" + sname(s) + " events · " + D.mon[m] + "</h4>" + evs.map(e =>
      '<p><span class="tag E">◆</span> <b>' + e.name + "</b>" + (e.g ? " (global)" : "") + " · " + e.when + " · " + e.where + " · " + ext(e.url, "Official page ↗") + "</p>").join(""));
  }
  function dismiss() {
    if (sel) { sel.classList.remove("sel"); sel = null; }
    note.innerHTML = hintHtml();
    note.classList.remove("is-open", "flip-top");
    noteOpen = false;
    // Closing can uncover a cell under the cursor; ignore brief hover so the note stays dismissed.
    ignoreHoverUntil = Date.now() + 400;
  }
  function pick(td) {
    if (!td) return;
    if (sel) sel.classList.remove("sel");
    sel = td; td.classList.add("sel");
    if (td.classList.contains("st")) showRow(+td.dataset.r, +td.dataset.m); else showEv(td.dataset.s, +td.dataset.m);
    placeNote(td);
  }
  const cells = () => $$("#cal td.st, #cal td.ev.on").filter(td => td.offsetParent !== null);
  const cal = $("#cal");
  const gridwrap = $(".gridwrap");
  // Prefer tap/click on coarse pointers; keep hover preview on fine pointers only.
  cal.addEventListener("mouseover", e => {
    if (isCoarse()) return;
    if (Date.now() < ignoreHoverUntil) return;
    const td = e.target.closest("td.st, td.ev.on");
    if (td) pick(td);
  });
  cal.addEventListener("click", e => {
    const td = e.target.closest("td.st, td.ev.on");
    if (!td) return;
    pick(td); roving(td);
  });
  cal.addEventListener("focusin", e => {
    const td = e.target.closest("td.st, td.ev.on");
    if (td) pick(td);
  });
  note.addEventListener("click", e => {
    if (e.target.closest(".cellnote-close")) { e.preventDefault(); dismiss(); }
  });
  document.addEventListener("pointerdown", e => {
    if (!noteOpen) return;
    if (note.contains(e.target)) return;
    if (e.target.closest && e.target.closest("#cal td.st, #cal td.ev.on")) return;
    dismiss();
  }, true);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && noteOpen) { e.preventDefault(); dismiss(); }
  });
  function onScrollDismiss(e) {
    if (!noteOpen || !isCoarse()) return;
    if (Date.now() < ignoreScrollUntil) return;
    if (e && e.target && note.contains(e.target)) return;
    dismiss();
  }
  window.addEventListener("scroll", onScrollDismiss, { passive: true, capture: true });
  if (gridwrap) gridwrap.addEventListener("scroll", onScrollDismiss, { passive: true });
  window.addEventListener("pagehide", dismiss);
  document.addEventListener("visibilitychange", () => { if (document.hidden) dismiss(); });
  if (typeof coarseMq.addEventListener === "function") coarseMq.addEventListener("change", () => { if (!noteOpen) note.innerHTML = hintHtml(); });
  else if (typeof coarseMq.addListener === "function") coarseMq.addListener(() => { if (!noteOpen) note.innerHTML = hintHtml(); });
  note.innerHTML = hintHtml();
  // roving tabindex: one tab stop for the grid, arrow keys move between cells
  function roving(td) { $$("#cal td[tabindex='0']").forEach(x => x.setAttribute("tabindex", "-1")); td.setAttribute("tabindex", "0"); }
  function firstCell() { const c = cells()[0]; if (c) roving(c); }
  cal.addEventListener("keydown", e => {
    const td = e.target.closest("td"); if (!td) return;
    const k = e.key; if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].indexOf(k) < 0) return;
    e.preventDefault();
    const m = +td.dataset.m;
    const rowsVis = $$("#cal tr.rw, #cal tr.evrow").filter(tr => tr.offsetParent !== null);
    let ri = rowsVis.indexOf(td.parentElement), nm = m;
    const ok = (tr, mm) => { const c = tr.querySelector('td[data-m="' + mm + '"]'); return c && (c.classList.contains("st") || c.classList.contains("on")) ? c : null; };
    let target = null;
    if (k === "ArrowLeft" || k === "ArrowRight" || k === "Home" || k === "End") {
      const step = (k === "ArrowLeft" || k === "End") ? -1 : 1;
      if (k === "Home") nm = -1; if (k === "End") nm = 12;
      for (let mm = nm + step; mm >= 0 && mm < 12; mm += step) { target = ok(rowsVis[ri], mm); if (target) break; }
    } else {
      const step = k === "ArrowUp" ? -1 : 1;
      for (let r = ri + step; r >= 0 && r < rowsVis.length; r += step) { target = ok(rowsVis[r], m); if (target) break; }
    }
    if (target) { roving(target); target.focus(); }
  });

  // ---------- group filter ----------
  function applyGroup(g) {
    state.group = g;
    $$(".chip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.g === g)));
    $$("#cal tbody").forEach(tb => { tb.hidden = !(g === "all" || tb.dataset.group === g); });
    $$("#evlist .evi").forEach(li => { li.hidden = !(g === "all" || li.dataset.group === g); });
    $$("#evlist .evmon").forEach(m => { m.hidden = !$$(".evi", m).some(li => !li.hidden); });
    dismiss();
    firstCell(); renderMonth();
  }
  $$(".chip").forEach(b => b.addEventListener("click", () => applyGroup(b.dataset.g)));

  // ---------- events toggle ----------
  const tog = $("#evtoggle");
  tog.addEventListener("click", () => {
    state.events = !state.events;
    document.body.classList.toggle("noev", !state.events);
    tog.setAttribute("aria-pressed", String(state.events));
    tog.querySelector("b").textContent = state.events ? "on" : "off";
    if (!state.events && sel && sel.classList.contains("ev")) dismiss();
    else if (noteOpen && sel && sel.offsetParent === null) dismiss();
    firstCell(); renderMonth();
  });

  // ---------- month view ----------
  const inGroup = s => state.group === "all" || D.sports[s].group === state.group;
  function renderMonth() {
    const m = state.month;
    $("#mname").textContent = D.mon[m];
    $$(".mchip").forEach(b => { b.setAttribute("aria-pressed", String(+b.dataset.m === m)); b.classList.toggle("now", +b.dataset.m === CUR); });
    const rows = D.rows.filter(r => inGroup(r.s));
    const item = r => '<li><b><a href="../' + r.s + '/#where">' + sname(r.s) + '</a></b> <span class="rgn">· ' + r.rg + '</span><span class="nt">' + r.n[m] + "</span></li>";
    const peak = rows.filter(r => r.m[m] === "P"), poss = rows.filter(r => r.m[m] === "Y");
    const offS = [...new Set(rows.filter(r => r.m[m] === "O").map(r => r.s))].filter(s => !rows.some(r => r.s === s && r.m[m] !== "O"));
    const evs = D.events.filter(e => e.m.indexOf(m) >= 0 && inGroup(e.s));
    let h = '<div class="mcol"><h3><span class="tag P">● Peak</span></h3>' + (peak.length ? "<ul>" + peak.map(item).join("") + "</ul>" : "<p class=\"nt\">Nothing at its peak in this group.</p>") + "</div>";
    h += '<div class="mcol"><h3><span class="tag Y">◐ Possible</span></h3>' + (poss.length ? "<ul>" + poss.map(item).join("") + "</ul>" : "<p class=\"nt\">Nothing marked possible in this group.</p>") +
      (offS.length ? '<p class="off"><b>Off everywhere we list:</b> ' + offS.map(sname).join(", ") + "</p>" : "") + "</div>";
    h += '<div class="mcol"><h3><span class="tag E">◆ Events</span></h3>' + (evs.length ? "<ul>" + evs.map(e => '<li><b>' + e.name + "</b>" + (e.g ? " (global)" : "") + '<span class="nt">' + e.when + " · " + e.where + " · " + ext(e.url, "Official page ↗") + "</span></li>").join("") + "</ul>" : '<p class="nt">No verified events this month' + (state.group === "all" ? "" : " in this group") + ".</p>") + "</div>";
    $("#monthout").innerHTML = h;
  }
  $$(".mchip").forEach(b => b.addEventListener("click", () => { state.month = +b.dataset.m; renderMonth(); }));

  // ---------- events list: keep Jan→Dec DOM order; flag editions that are over ----------
  const list = $("#evlist");
  const mons = $$(".evmon", list);
  mons.forEach(li => li.classList.toggle("now", +li.dataset.m === CUR));
  $$(".evi[data-end]", list).forEach(li => { if (li.dataset.end < TODAY) { li.classList.add("isp"); $(".past", li).hidden = false; } });
  // an edition that started in an earlier month and is still running moves to the top of the current month
  const curMon = $('.evmon[data-m="' + CUR + '"]', list);
  $$(".evi[data-start]", list).forEach(li => {
    if (li.dataset.start <= TODAY && li.dataset.end >= TODAY && li.closest(".evmon") !== curMon && curMon) {
      $("ul", curMon).insertBefore(li, $("ul", curMon).firstChild);
      const h = $(".evh", li), t = document.createElement("span"); t.className = "onnow"; t.textContent = "On now"; h.appendChild(t);
    }
  });
  $$(".evmon", list).forEach(m => { m.hidden = !$$(".evi", m).some(li => !li.hidden); });

  // ---------- deep link from a sport strip: #s-<slug> ----------
  function hashHl() {
    const id = location.hash.slice(1);
    $$("#cal tr.hl").forEach(tr => tr.classList.remove("hl"));
    if (!/^s-[a-z-]+$/.test(id)) { dismiss(); return; }
    const s = id.slice(2);
    if (!D.sports[s]) return;
    if (state.group !== "all" && D.sports[s].group !== state.group) applyGroup("all");
    $$('#cal tr[data-sport="' + s + '"]').forEach(tr => tr.classList.add("hl"));
    const first = $('#cal tr.rw[data-sport="' + s + '"] td[data-m="' + CUR + '"]');
    if (first) { pick(first); roving(first); }
  }
  window.addEventListener("hashchange", hashHl);

  // ---------- section nav: active link ----------
  const links = $$(".sectionnav a");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    ["grid", "month", "events", "about"].forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  firstCell(); renderMonth(); hashHl();
})();

// ---------- MOBILE NAV: edge fades + keep the active link in view (same as the home page) ----------
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
