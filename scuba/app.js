/* Kinetic — scuba prototype. Pure client-side JS, no dependencies. */
(function () {
  "use strict";

  const CHAPTERS = {
    "ch-pressure": "Ch 1 · Pressure & Boyle's law",
    "ch-buoyancy": "Ch 2 · Buoyancy, weighting & trim",
    "ch-air":      "Ch 3 · Why your tank shrinks at depth",
    "ch-gas":      "Ch 4 · Nitrogen, decompression & narcosis",
    "ch-ears":     "Ch 5 · Ears, sinuses & equalising",
    "ch-light":    "Ch 6 · Light, colour, sound & heat"
  };

  // Each question: q, options[], answer (index), explain, chapter id
  const QUESTIONS = [
    { ch: "ch-pressure",
      q: "You're 20 m down in the sea. Roughly what is the total (absolute) pressure on you?",
      o: ["About 2 bar", "About 3 bar", "About 20 bar", "About 1.2 bar"], a: 1,
      e: "1 bar of atmosphere above the water, plus about 1 bar for every 10 m of seawater: 1 + 2 = 3 bar. That's three times the pressure you feel on the beach." },
    { ch: "ch-pressure",
      q: "A balloon holding 6 litres of air at the surface is carried down to 30 m. What's its volume there?",
      o: ["1.5 litres", "2 litres", "0.2 litres", "3 litres"], a: 0,
      e: "Boyle's law: pressure × volume stays constant. At 30 m the pressure is 4 bar, so 6 L ÷ 4 = 1.5 L." },
    { ch: "ch-pressure",
      q: "What is the single most important rule for protecting your lungs on scuba?",
      o: ["Always descend slowly", "Equalise your ears every metre", "Breathe continuously and never hold your breath, especially while going up", "Only dive on nitrox"], a: 2,
      e: "If you hold your breath and rise, the air in your lungs expands (Boyle's law). Lungs full at 10 m would want to double in size by the surface. Over-expansion injuries have happened after breath-hold ascents of only a metre or two." },
    { ch: "ch-buoyancy",
      q: "You learned to dive in a freshwater lake. Now you're diving in the sea with exactly the same gear. What happens?",
      o: ["You'll need more lead, because seawater is denser and pushes up harder", "You'll need less lead, because salt makes you heavier", "Nothing changes: weight is weight", "It depends only on how deep you go"], a: 0,
      e: "Seawater is about 1.025 kg per litre against 1.000 for fresh water. A diver plus gear displacing about 100 L gets roughly 2.5 kg of extra lift in the sea, so most people add 2 to 3 kg of lead." },
    { ch: "ch-buoyancy",
      q: "You start a descent perfectly neutral and add no air to your BCD. As you go deeper you will…",
      o: ["Stay neutral the whole way", "Get more buoyant and drift up", "Get heavier (more negative), because the gas in your wetsuit and BCD gets squeezed", "Get heavier because the water gets saltier"], a: 2,
      e: "The tiny gas bubbles in neoprene and any air in your BCD shrink as pressure rises, so you displace less water and lose lift. That's why you add small puffs of air on the way down and let air out on the way up." },
    { ch: "ch-buoyancy",
      q: "Late in a dive, your cylinder is nearly empty. Compared with the start, you feel…",
      o: ["Heavier, because the empty tank is denser", "The same, because air weighs nothing", "Heavier, because cold water is denser", "Lighter (more buoyant), because you've breathed out about 2 to 3 kg of air"], a: 3,
      e: "A full 12 L cylinder at 200 bar holds about 2,400 L of surface air, which weighs roughly 2.9 kg. Breathe most of it and you're about 2 kg+ lighter. Your weighting has to hold you at the 5 m safety stop with a near-empty tank." },
    { ch: "ch-air",
      q: "On the surface you breathe 20 litres of air per minute. Same effort, but now at 30 m. How much do you draw from your tank per minute?",
      o: ["20 L", "40 L", "60 L", "80 L"], a: 3,
      e: "Your regulator gives you air at the surrounding pressure. At 30 m that's 4 bar, so every breath holds 4× as many molecules: 20 × 4 = 80 L/min of surface-equivalent air." },
    { ch: "ch-air",
      q: "A tank that would last 60 minutes on the surface lasts about how long at 20 m (same breathing effort)?",
      o: ["About 40 minutes", "About 30 minutes", "About 20 minutes", "About 10 minutes"], a: 2,
      e: "At 20 m the pressure is 3 bar, so you use air 3× as fast: 60 ÷ 3 = 20 minutes. (In practice you'd also hold back a reserve.)" },
    { ch: "ch-gas",
      q: "Why do divers ascend slowly and make a safety stop at about 5 m?",
      o: ["To save air", "To give the ears time to equalise", "To get used to the warmer water", "To let nitrogen dissolved in the body come out gradually, so it doesn't form bubbles"], a: 3,
      e: "At depth, extra nitrogen dissolves into your tissues (Henry's law). Come up too fast and it can come out as bubbles, like opening a shaken soda. That's decompression sickness. Slow ascents and a 3-minute stop give it time to leave through your lungs." },
    { ch: "ch-gas",
      q: "Which statement about nitrogen narcosis is correct?",
      o: ["It gets stronger with depth and clears quickly once you go shallower", "It only happens to beginners", "It's caused by carbon monoxide in the tank", "It starts the moment you go underwater"], a: 0,
      e: "Narcosis is a drunk-like effect of breathing nitrogen at high partial pressure. Many divers start to notice it around 30 m. It gets worse as you go deeper and fades within moments of going up a few metres." },
    { ch: "ch-gas",
      q: "Nitrox with 32% oxygen (EAN32) is normally limited to about 34 m. Why?",
      o: ["Below that the oxygen partial pressure goes over 1.4 bar, raising the risk of oxygen toxicity", "Nitrox freezes at depth", "The extra oxygen makes you more buoyant", "It's a legal limit in India only"], a: 0,
      e: "Partial pressure = fraction × absolute pressure. 0.32 × 4.4 bar (34 m) ≈ 1.4 bar, the usual working limit. Past that point, oxygen itself can cause convulsions underwater." },
    { ch: "ch-ears",
      q: "Why do your ears hurt as you descend?",
      o: ["Cold water irritates the eardrum", "Water pressure outside the eardrum gets higher than the air pressure in your middle ear, so the eardrum bows inward", "Nitrogen builds up in the inner ear", "Your mask presses on your ears"], a: 1,
      e: "The middle ear is a small pocket of air. As outside pressure rises, the eardrum is pushed inward until you let air in through the Eustachian tube (equalising). At just 2 m that's about 0.2 bar across an eardrum smaller than a fingernail, roughly 1.4 N, like a 140 g weight." },
    { ch: "ch-ears",
      q: "What is the best way to equalise?",
      o: ["Wait until it hurts, then blow as hard as you can", "Equalise only once you reach the bottom", "Start at the surface, equalise gently every metre or so in the shallows, and if it hurts, go up a little and try again", "Equalising is only needed below 10 m"], a: 2,
      e: "The biggest pressure change per metre is near the surface. If the pressure difference gets too big (around 1.2 m of water is the commonly cited figure), the tube can 'lock' shut. Go early, often and gently. Never force it." },
    { ch: "ch-light",
      q: "At 15 m you see a red snapper. What colour does it look without a torch?",
      o: ["Bright red: colour doesn't change underwater", "Bright blue, because the fish reflects the water", "Fluorescent green", "Greyish-brown or dull, because water has soaked up most of the red light before it reaches the fish"], a: 3,
      e: "Water absorbs long (red) wavelengths fastest. Even in very clear water only about 4% of red (700 nm) sunlight is left at 5 m, and practically none at 15 m. Shine a torch from 1 m away and the red comes back." },
    { ch: "ch-light",
      q: "You hear a boat engine underwater. Why is it so hard to tell which direction it's coming from?",
      o: ["Water muffles sound so it seems far away", "Your hood blocks one ear", "Sound travels about 4× faster in water, so the timing difference between your two ears is too small for your brain to use", "Sound bends around reefs"], a: 2,
      e: "Your brain locates sound mostly by tiny arrival-time differences between your ears. At about 1,500 m/s in seawater (vs about 343 m/s in air), that gap shrinks roughly 4×, and sound also reaches you through your skull. Treat any engine noise as 'look up and surface carefully'." }
  ];

  // ---------- QUIZ RENDER ----------
  const list = document.getElementById("quiz-list");
  const dots = document.getElementById("quiz-dots");
  const prog = document.getElementById("quiz-progress");
  const progLabel = document.getElementById("quiz-progress-label");
  const warn = document.getElementById("quiz-warn");
  const resultBox = document.getElementById("quiz-result");
  let graded = false;

  function esc(s) { return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  QUESTIONS.forEach((item, i) => {
    const n = i + 1;
    const div = document.createElement("div");
    div.className = "q";
    div.id = "q" + n;
    div.dataset.index = i;
    div.innerHTML =
      `<span class="qtag">${esc(CHAPTERS[item.ch].split(" · ")[1])}</span>` +
      `<span class="qnum">Question ${n} / ${QUESTIONS.length}</span>` +
      `<h3>${esc(item.q)}</h3>` +
      `<div class="opts" role="radiogroup" aria-label="Question ${n}">` +
      item.o.map((opt, j) =>
        `<label class="opt"><input type="radio" name="q${n}" value="${j}"><span>${esc(opt)}</span><span class="mark"></span></label>`
      ).join("") +
      `</div><div class="explain" aria-live="polite"></div>`;
    list.appendChild(div);

    const d = document.createElement("a");
    d.href = "#q" + n; d.textContent = n; d.id = "dot" + n;
    d.setAttribute("aria-label", "Go to question " + n);
    dots.appendChild(d);
  });

  function answeredCount() {
    return QUESTIONS.filter((_, i) => document.querySelector(`input[name="q${i + 1}"]:checked`)).length;
  }
  function updateProgress() {
    const c = answeredCount();
    prog.style.width = (c / QUESTIONS.length * 100) + "%";
    progLabel.textContent = `${c} of ${QUESTIONS.length} answered`;
  }

  list.addEventListener("change", (ev) => {
    if (graded || ev.target.type !== "radio") return;
    const q = ev.target.closest(".q");
    q.querySelectorAll(".opt").forEach(l => l.classList.toggle("sel", l.querySelector("input").checked));
    document.getElementById("dot" + (+q.dataset.index + 1)).classList.add("answered");
    updateProgress();
    warn.style.display = "none";
  });

  function grade() {
    const unanswered = QUESTIONS.length - answeredCount();
    if (unanswered > 0 && !document.getElementById("quiz-submit").dataset.confirmed) {
      warn.textContent = `${unanswered} question${unanswered > 1 ? "s" : ""} unanswered. They'll count as wrong. Press submit again to score anyway.`;
      warn.style.display = "block";
      document.getElementById("quiz-submit").dataset.confirmed = "1";
      return;
    }
    graded = true;
    let score = 0;
    const wrongChapters = new Map();
    QUESTIONS.forEach((item, i) => {
      const n = i + 1;
      const qEl = document.getElementById("q" + n);
      const picked = document.querySelector(`input[name="q${n}"]:checked`);
      const pickedIdx = picked ? +picked.value : -1;
      const right = pickedIdx === item.a;
      if (right) score++;
      else wrongChapters.set(item.ch, (wrongChapters.get(item.ch) || []).concat(n));
      qEl.classList.add("graded", right ? "right" : (picked ? "wrong" : "skipped"));
      qEl.querySelectorAll("input").forEach(inp => inp.disabled = true);
      qEl.querySelectorAll(".opt").forEach((lab, j) => {
        if (j === item.a) { lab.classList.add("correct"); lab.querySelector(".mark").textContent = "✓ correct"; }
        else if (j === pickedIdx) { lab.classList.add("incorrect"); lab.querySelector(".mark").textContent = "✗ your pick"; }
      });
      const ex = qEl.querySelector(".explain");
      ex.innerHTML = `<span class="verdict">${right ? "Correct." : (picked ? "Not quite." : "Skipped.")}</span> ${esc(item.e)}` +
        (right ? "" : `<br><a class="chlink" href="#${item.ch}" data-wrong-link="${item.ch}">Read ${esc(CHAPTERS[item.ch])} →</a>`);
      const dot = document.getElementById("dot" + n);
      dot.classList.remove("answered"); dot.classList.add(right ? "right" : "wrong");
    });

    const pct = score / QUESTIONS.length;
    let lvl, title, blurb;
    if (pct >= 0.8) { lvl = "lvl-ready"; title = "Physics: nailed it 🤿"; blurb = "You've got the physics. Skim the chapters for the details you missed, then scroll to “Where to go” to find training at your level. Knowing the physics is a great start; it is not the same as being trained to dive."; }
    else if (pct >= 0.55) { lvl = "lvl-close"; title = "Nearly there. Brush up on a couple of chapters"; blurb = "You have the basics. Fill the gaps below before your next dive and the rest will feel obvious underwater."; }
    else { lvl = "lvl-brush"; title = "Brush up first"; blurb = "No shame in that: this is exactly what the chapters are for. Read the ones linked below, then take the challenge again."; }

    resultBox.className = "result show " + lvl;
    const chItems = [...wrongChapters.entries()].map(([ch, qs]) =>
      `<li><a href="#${ch}" data-summary-link="${ch}">${esc(CHAPTERS[ch])}</a> <span class="small">(question${qs.length > 1 ? "s" : ""} ${qs.join(", ")})</span></li>`).join("");
    resultBox.innerHTML =
      `<div class="score" id="quiz-score">${score}<small> / ${QUESTIONS.length}</small></div>` +
      `<h3 id="quiz-verdict">${title}</h3><p>${blurb}</p>` +
      `<div class="result-note" id="quiz-disclaimer" role="note"><strong>Self-check only.</strong> This quiz is a learning aid. It is not a certification, a skills assessment or a fitness-to-dive (medical) assessment, and a high score does not qualify you to dive. To dive, you need proper training and certification from a certified instructor with a recognised agency (such as PADI, SSI or CMAS), plus a medical questionnaire and a doctor's clearance where required.</div>` +
      (chItems ? `<strong>Chapters to read:</strong><ul id="quiz-revisit">${chItems}</ul>` : `<p><strong>Perfect score.</strong> The chapters still have the worked numbers if you want to go deeper.</p>`) +
      `<div class="actions"><button class="btn btn-ghost" type="button" id="quiz-retake">↺ Retake the challenge</button><a class="btn btn-ghost" href="#where">Where to dive at my level →</a></div>`;
    document.getElementById("quiz-retake").addEventListener("click", resetQuiz);
    document.getElementById("quiz-submit").style.display = "none";
    warn.style.display = "none";
    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
    try { localStorage.setItem("kinetic-scuba-last", JSON.stringify({ score, of: QUESTIONS.length, at: Date.now() })); } catch (e) {}
  }

  function resetQuiz() {
    graded = false;
    resultBox.className = "result"; resultBox.innerHTML = "";
    document.querySelectorAll(".q").forEach(q => {
      q.className = "q";
      q.querySelector(".explain").innerHTML = "";
      q.querySelectorAll("input").forEach(i => { i.checked = false; i.disabled = false; });
      q.querySelectorAll(".opt").forEach(l => { l.className = "opt"; l.querySelector(".mark").textContent = ""; });
    });
    document.querySelectorAll("#quiz-dots a").forEach(d => d.className = "");
    const sub = document.getElementById("quiz-submit");
    sub.style.display = ""; delete sub.dataset.confirmed;
    updateProgress();
    document.getElementById("q1").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("quiz-submit").addEventListener("click", grade);
  document.getElementById("quiz-reset").addEventListener("click", resetQuiz);
  updateProgress();

  // Expose for automated tests
  window.KINETIC_QUIZ = { QUESTIONS, CHAPTERS, grade, resetQuiz };

  // ---------- DEPTH LAB ----------
  // RDP-style first-dive no-decompression limits on air (minutes), for illustration only.
  const NDL = [[10, 219], [12, 147], [14, 98], [16, 72], [18, 56], [20, 45], [22, 37], [25, 29], [30, 20], [35, 14], [40, 9], [42, 8]];
  // Pure-water absorption coefficients (1/m), Pope & Fry 1997
  const BANDS = [
    { k: "Red 700 nm", a: 0.624, rgb: [230, 40, 30] },
    { k: "Orange 600 nm", a: 0.2224, rgb: [255, 150, 30] },
    { k: "Green 550 nm", a: 0.0565, rgb: [60, 200, 90] },
    { k: "Blue 450 nm", a: 0.0092, rgb: [40, 110, 230] }
  ];
  const slider = document.getElementById("lab-depth");
  if (slider) {
    const $ = id => document.getElementById(id);
    const SAC = 20, USABLE = 12 * 150; // L/min; 12 L cylinder from 200 to 50 bar
    function ndlFor(d) {
      if (d < 10) return "> 3 h";
      for (const [depth, mins] of NDL) if (d <= depth) return mins + " min";
      return "n/a";
    }
    function fmt(x, dp) { return x.toFixed(dp); }
    function update() {
      const d = +slider.value;
      const P = 1 + d / 10;
      $("lab-d").textContent = d;
      $("lab-p").textContent = fmt(P, 1) + " bar";
      $("lab-vol").textContent = fmt(6 / P, 2) + " L";
      $("lab-use").textContent = Math.round(SAC * P) + " L/min";
      $("lab-time").textContent = Math.round(USABLE / (SAC * P)) + " min";
      $("lab-n2").textContent = fmt(0.79 * P, 2) + " bar";
      const po2 = 0.21 * P, po2n = 0.32 * P;
      $("lab-o2").textContent = fmt(po2, 2) + " bar";
      $("lab-o2n").textContent = fmt(po2n, 2) + " bar";
      $("lab-o2n").style.color = po2n > 1.4 ? "#ff8a70" : "#fff";
      $("lab-o2n-note").textContent = po2n > 1.4 ? "over 1.4 bar, too deep for EAN32" : "within 1.4 bar working limit";
      $("lab-ndl").textContent = ndlFor(d);
      $("lab-narc").textContent = d >= 30 ? "likely noticeable" : d >= 20 ? "possible in some divers" : "unlikely";
      const size = 140 * Math.cbrt(1 / P);
      const b = $("lab-balloon"); b.style.width = b.style.height = size.toFixed(0) + "px";
      BANDS.forEach((band, i) => {
        const f = Math.exp(-band.a * d);
        const el = $("sw" + i);
        const [r, g, bl] = band.rgb.map(c => Math.round(c * f + 8 * (1 - f)));
        el.style.background = `rgb(${r},${g},${bl})`;
        el.querySelector(".v").textContent = (f * 100 >= 1 ? fmt(f * 100, 0) : fmt(f * 100, 2)) + "%";
      });
    }
    slider.addEventListener("input", update);
    update();
  }

  // ---------- LEVEL TABS ----------
  const tabs = document.querySelectorAll(".lvl-tabs button");
  tabs.forEach(btn => btn.addEventListener("click", () => {
    tabs.forEach(b => b.setAttribute("aria-selected", b === btn ? "true" : "false"));
    document.querySelectorAll(".lvl-panel").forEach(p => p.classList.toggle("show", p.id === btn.getAttribute("aria-controls")));
  }));

  // ---------- STICKY NAV ACTIVE STATE ----------
  const navLinks = [...document.querySelectorAll(".sectionnav a")];
  const targets = navLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach(t => io.observe(t));
  }
})();
