// Kinetic season calendar (/calendar/). Data: #caldata (generated from kinetic-tools/build/seasons.py).
// Calm redesign (Oct 2026): no pop-up. Selecting a month opens its note inline, right under that row, in the page flow.
(function () {
  "use strict";
  const D = JSON.parse(document.getElementById("caldata").textContent);
  const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const ST = { P: "Peak", Y: "Possible", O: "Off" };
  const NOW = new Date(), CUR = NOW.getMonth();
  const pad = n => String(n).padStart(2, "0");
  const TODAY = NOW.getFullYear() + "-" + pad(NOW.getMonth() + 1) + "-" + pad(NOW.getDate());
  const ext = (url, text) => /^https?:/.test(url) ? '<a href="' + url + '" target="_blank" rel="noopener">' + text + "</a>" : '<a href="' + url + '">' + text + "</a>";
  const sname = s => D.sports[s].name;
  const state = { group: "all", month: CUR };
  const cal = $("#cal");

  // ---------- current month ----------
  $$('#cal [data-m="' + CUR + '"]').forEach(el => el.classList.add("now"));

  // ---------- inline month note (one at a time, inside the table, under its row) ----------
  let sel = null, det = null;
  const srcLinks = keys => keys.map(k => ext(D.src[k][1], D.src[k][0])).join("; ");
  function closeDet(focusBack) {
    if (det) { det.remove(); det = null; }
    if (sel) { sel.classList.remove("sel"); if (focusBack) sel.focus(); sel = null; }
  }
  function openDet(td) {
    if (sel === td) { closeDet(false); return; }
    closeDet(false);
    const tr = td.parentElement, r = D.rows[+tr.dataset.r], m = +td.dataset.m, s = r.m[m];
    const evs = D.events.filter(e => e.s === r.s && e.m.indexOf(m) >= 0);
    let h = '<div class="det-top"><h4>' + D.mon[m] + ' · <span class="stw">' + ST[s] + "</span> · " + sname(r.s) + ", " + r.rg + (r.yr ? " (year-round)" : "") + "</h4>" +
      '<button type="button" class="det-hide">Hide</button></div>';
    h += "<p>" + r.n[m] + "</p>";
    if (r.cf) h += '<p><span class="dl">Sources differ:</span> ' + r.cf + "</p>";
    h += '<p><span class="dl">Why it matters:</span> ' + r.why + ' <a href="../' + r.s + "/#" + r.a + '">Read the physics →</a></p>';
    if (evs.length) h += '<p><span class="dl">Events in ' + D.mon[m] + ":</span> " + evs.map(e => e.name + " (" + e.when + ")").join("; ") + "</p>";
    h += '<p class="src">Source: ' + srcLinks(r.src) + "</p>";
    det = document.createElement("tr"); det.className = "det";
    det.innerHTML = '<td colspan="13"><div class="detin" id="det" role="region" aria-live="polite" aria-label="' + D.mon[m] + " note" + '">' + h + "</div></td>";
    tr.after(det);
    sel = td; td.classList.add("sel");
    $(".det-hide", det).addEventListener("click", () => closeDet(true));
  }
  const cells = () => $$("#cal td.st").filter(td => td.offsetParent !== null);
  function roving(td) { $$("#cal td[tabindex='0']").forEach(x => x.setAttribute("tabindex", "-1")); td.setAttribute("tabindex", "0"); }
  function firstCell() { const c = cells().find(td => +td.dataset.m === CUR) || cells()[0]; if (c) roving(c); }
  cal.addEventListener("click", e => { const td = e.target.closest("td.st"); if (!td) return; roving(td); openDet(td); });
  cal.addEventListener("keydown", e => {
    const td = e.target.closest("td.st"); if (!td) return;
    const k = e.key;
    if (k === "Enter" || k === " ") { e.preventDefault(); openDet(td); return; }
    if (k === "Escape" && det) { e.preventDefault(); closeDet(true); return; }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].indexOf(k) < 0) return;
    e.preventDefault();
    const m = +td.dataset.m, rowsVis = $$("#cal tr.rw").filter(tr => tr.offsetParent !== null);
    let ri = rowsVis.indexOf(td.parentElement), target = null;
    if (k === "ArrowLeft" && m > 0) target = td.previousElementSibling;
    else if (k === "ArrowRight" && m < 11) target = td.nextElementSibling;
    else if (k === "Home") target = $('td[data-m="0"]', rowsVis[ri]);
    else if (k === "End") target = $('td[data-m="11"]', rowsVis[ri]);
    else if (k === "ArrowUp" && ri > 0) target = $('td[data-m="' + m + '"]', rowsVis[ri - 1]);
    else if (k === "ArrowDown" && ri < rowsVis.length - 1) target = $('td[data-m="' + m + '"]', rowsVis[ri + 1]);
    if (target && target.classList.contains("st")) { roving(target); target.focus(); }
  });

  // ---------- group filter (both chip rows stay in sync) ----------
  function applyGroup(g) {
    state.group = g;
    $$(".chip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.g === g)));
    $$("#cal tbody").forEach(tb => { tb.hidden = !(g === "all" || tb.dataset.group === g); });
    $$("#evlist .evi").forEach(li => { li.hidden = !(g === "all" || li.dataset.group === g); });
    $$("#evlist .evmon").forEach(m => { m.hidden = !$$(".evi", m).some(li => !li.hidden); });
    if (sel && sel.offsetParent === null) closeDet(false);
    firstCell(); renderMonth();
  }
  $$(".chip").forEach(b => b.addEventListener("click", () => applyGroup(b.dataset.g)));

  // ---------- month view ----------
  const inGroup = s => state.group === "all" || D.sports[s].group === state.group;
  function bySport(rows) {
    const o = [];
    rows.forEach(r => { let x = o.find(y => y.s === r.s); if (!x) o.push(x = { s: r.s, rg: [] }); x.rg.push(r.rg); });
    return o;
  }
  // rolling months: current month first, then the next 11 (with year); chips rebuilt client-side from today's date
  const Y0 = NOW.getFullYear();
  const ROLL = Array.from({ length: 12 }, (_, i) => ({ m: (CUR + i) % 12, y: Y0 + Math.floor((CUR + i) / 12) }));
  const ymOf = (y, m) => y + "-" + pad(m + 1);
  // the months (year-month) in which an event's next upcoming edition falls; [] when it has ended
  function evYM(e) {
    if (e.end) {
      if (e.end < TODAY) return [];
      const out = []; let y = +e.start.slice(0, 4), m = +e.start.slice(5, 7) - 1;
      const ey = +e.end.slice(0, 4), em = +e.end.slice(5, 7) - 1;
      while (y < ey || (y === ey && m <= em)) { if (ymOf(y, m) >= TODAY.slice(0, 7)) out.push(ymOf(y, m)); m++; if (m > 11) { m = 0; y++; } }
      return out;
    }
    return e.m.map(m => ymOf(m < CUR ? Y0 + 1 : Y0, m));
  }
  D.events.forEach(e => { e.ym = evYM(e); });
  const mbox = $(".mchips");
  mbox.innerHTML = ROLL.map((r, i) => (i > 0 && r.m === 0 ? '<span class="ydiv" aria-hidden="true">' + r.y + "</span>" : "") +
    '<button type="button" class="mchip' + (i === 0 ? " now" : "") + '" data-m="' + r.m + '" data-y="' + r.y + '" aria-pressed="false"><span class="ml">' + D.mon[r.m].slice(0, 3) + (r.y !== Y0 ? " '" + String(r.y).slice(2) : "") + '</span><span class="mc"></span></button>').join("");
  state.y = Y0;
  function renderMonth() {
    const m = state.month, y = state.y, ym = ymOf(y, m);
    $("#mname").textContent = D.mon[m] + " " + y;
    $$(".mchip").forEach(b => {
      const by = +b.dataset.y, bm = +b.dataset.m, n = D.events.filter(e => inGroup(e.s) && e.ym.indexOf(ymOf(by, bm)) >= 0).length;
      b.setAttribute("aria-pressed", String(bm === m && by === y));
      $(".mc", b).textContent = n ? " · " + n : "";
      b.setAttribute("aria-label", D.mon[bm] + " " + by + ", " + (n ? n + " upcoming event" + (n > 1 ? "s" : "") : "no upcoming events"));
    });
    const rows = D.rows.filter(r => inGroup(r.s));
    const item = x => '<li><a class="sn" href="../' + x.s + '/#where">' + sname(x.s) + '</a><span class="nt">' + x.rg.join(" · ") + "</span></li>";
    const peak = bySport(rows.filter(r => r.m[m] === "P")), poss = bySport(rows.filter(r => r.m[m] === "Y"));
    const offS = [...new Set(rows.map(r => r.s))].filter(s => rows.every(r => r.s !== s || r.m[m] === "O"));
    const evs = D.events.filter(e => e.ym.indexOf(ym) >= 0 && inGroup(e.s)).sort((a, b) => (a.start || "9") < (b.start || "9") ? -1 : (a.start || "9") > (b.start || "9") ? 1 : 0);
    const grp = state.group === "all" ? "" : " in this group";
    let h = '<div class="mcol"><h3><span class="key P" aria-hidden="true"></span>Peak</h3>' + (peak.length ? "<ul>" + peak.map(item).join("") + "</ul>" : '<p class="empty">Nothing at its peak' + grp + ".</p>") + "</div>";
    h += '<div class="mcol"><h3><span class="key Y" aria-hidden="true"></span>Possible</h3>' + (poss.length ? "<ul>" + poss.map(item).join("") + "</ul>" : '<p class="empty">Nothing marked possible' + grp + ".</p>") +
      (offS.length ? '<p class="off">Off everywhere we list: ' + offS.map(sname).join(", ") + ".</p>" : "") + "</div>";
    h += '<div class="mcol"><h3><span class="key E" aria-hidden="true"></span>Events</h3>' + (evs.length ? "<ul>" + evs.map(e => {
      const on = e.start && e.start <= TODAY;
      return "<li><b>" + e.name + "</b>" + (e.g ? " (global)" : "") + '<span class="nt">' + (on ? "On now · " : "") + e.when + " · " + e.where + " · " + ext(e.url, "Official page ↗") + "</span></li>";
    }).join("") + "</ul>" : '<p class="empty">No upcoming events this month' + grp + ".</p>") + "</div>";
    $("#monthout").innerHTML = h;
  }
  $$(".mchip").forEach(b => b.addEventListener("click", () => { state.month = +b.dataset.m; state.y = +b.dataset.y; renderMonth(); }));

  const list = $("#evlist");
  // ---------- events list: status words by today's date; "Coming up" regrouped by month + year; ended editions fold into "Already held" ----------
  const MONTHS = D.mon, up = $("#evup"), pastList = $("#evpastlist");
  const keyOf = li => {
    if (li.dataset.start) return li.dataset.start < TODAY ? TODAY : li.dataset.start;
    const m = +li.dataset.m, y = NOW.getFullYear() + (m < CUR ? 1 : 0);
    return y + "-" + pad(m + 1) + "-99";
  };
  const setStatus = (li, st) => { const s = $(".status", li); s.className = "status stw-" + st; s.textContent = { up: "Upcoming", now: "On now", ended: "Ended" }[st]; };
  function refreshEvents() {
    $$(".evi[data-end]", up).forEach(li => {
      if (li.dataset.end < TODAY) { setStatus(li, "ended"); li.classList.add("isp"); const lh = $(".lh", li); if (lh) lh.remove(); pastList.appendChild(li); }
      else setStatus(li, li.dataset.start <= TODAY ? "now" : "up");
    });
    const items = $$(".evi", up).sort((x, y) => { const a = keyOf(x), b = keyOf(y); return a < b ? -1 : a > b ? 1 : $(".evn", x).textContent.localeCompare($(".evn", y).textContent); });
    up.textContent = "";
    let cur = null, ul = null;
    items.forEach(li => {
      const ym = keyOf(li).slice(0, 7);
      if (ym !== cur) {
        cur = ym; const g = document.createElement("li"); g.className = "evmon" + (ym === TODAY.slice(0, 7) ? " now" : ""); g.dataset.ym = ym;
        g.innerHTML = "<h4>" + MONTHS[+ym.slice(5) - 1] + " " + ym.slice(0, 4) + "</h4><ul></ul>"; up.appendChild(g); ul = $("ul", g);
      }
      ul.appendChild(li);
    });
    const past = $$(".evi", pastList).sort((x, y) => (y.dataset.end || "").localeCompare(x.dataset.end || ""));
    past.forEach(li => pastList.appendChild(li));
    $("#pcount").textContent = past.length;
    $("#pyrs").textContent = [...new Set(past.map(li => li.dataset.end.slice(0, 4)))].sort().join(" and ");
    $("#evpast").hidden = !past.length;
  }
  refreshEvents();
  $$(".evmon", list).forEach(m => { m.hidden = !$$(".evi", m).some(li => !li.hidden); });
  // season grid: a dot only marks months with an event you can still attend
  $$("#cal td.ev[data-last]").forEach(td => { if (td.dataset.last < TODAY) { td.classList.remove("ev"); td.textContent = ""; } });

  // ---------- deep link from a sport strip: #s-<slug> ----------
  function hashHl() {
    $$("#cal tr.hl").forEach(tr => tr.classList.remove("hl"));
    const id = location.hash.slice(1);
    if (!/^s-[a-z-]+$/.test(id)) return;
    const s = id.slice(2);
    if (!D.sports[s]) return;
    if (state.group !== "all" && D.sports[s].group !== state.group) applyGroup("all");
    $$('#cal tr[data-sport="' + s + '"]').forEach(tr => tr.classList.add("hl"));
    const c = $('#cal tr.rw[data-sport="' + s + '"] td[data-m="' + CUR + '"]');
    if (c) roving(c);
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
