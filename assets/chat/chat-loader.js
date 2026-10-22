/*
 * Kinetic chat loader: adds the "Ask Kinetic" OpenRouter chat widget to the page.
 * Included on every page with ONE tag (no inline script, no per-page config):
 *   <script src="/assets/chat/chat-loader.js" defer></script>
 * It works out its own folder from its src, so it does not depend on page depth.
 * Everything runs in the visitor's browser: no Kinetic backend and no keys in this repo. The visitor connects
 * their OWN OpenRouter account (PKCE) and the key stays in their tab. Default model: free models only.
 */
(function () {
  "use strict";
  if (window.__kineticChat) return;           // never load twice
  window.__kineticChat = true;

  var me = document.currentScript;
  var base = "/assets/chat/";
  try { var u = new URL(me.src, location.href); base = u.href.slice(0, u.href.lastIndexOf("/") + 1); } catch (e) {}
  var indexUrl = "/site-index.json";
  try { indexUrl = new URL("../../site-index.json", base).pathname; } catch (e) {}

  function txt(el) { return el ? (el.textContent || "").replace(/\s+/g, " ").trim() : ""; }
  function sportName() {
    // Titles look like "Scuba diving: the physics, explained | Kinetic" or "Archery · Physics of ... · Kinetic by Curiosta".
    var t = (document.title || "").split(/\s[|·]\s|:\s/)[0].trim();
    return t && !/^kinetic\b/i.test(t) ? t : "";
  }

  var path = location.pathname.replace(/index\.html$/, "");
  var isHome = path === "/" || path === "";
  var isCalendar = /\/calendar\/?$/.test(path);
  var suggestions;
  if (isHome) {
    suggestions = [
      "Which sport suits a beginner who loves water?",
      "Explain the physics of paragliding simply",
      "Which adventure sports can I do in India in winter?",
      "Compare scuba diving and freediving"
    ];
  } else if (isCalendar) {
    suggestions = [
      "What events are coming up next month?",
      "Which sports are in season in December?",
      "When is the best season for paragliding in India?",
      "How do I add this calendar to my phone?"
    ];
  } else {
    var s = sportName() || "this sport", sl = s.toLowerCase();
    var ch = Array.prototype.slice.call(document.querySelectorAll("article.chapter header h3, article.chapter h3"))
      .map(txt).filter(function (x, i, a) { return x && a.indexOf(x) === i; });
    suggestions = [];
    if (ch[0]) suggestions.push("Explain " + ch[0] + " in simple terms");
    if (ch[1]) suggestions.push("What's the physics behind " + ch[1].replace(/^the\s+/i, "") + "?");
    suggestions.push("What should a beginner know before trying " + sl + "?");
    suggestions.push("Where and when can I do " + sl + " in India?");
    suggestions = suggestions.slice(0, 4);
  }

  var persona = [
    "You are Kinetic's physics-of-sport tutor on kinetic.curiosta.com, a Curiosta site that explains the science behind individual adventure sports (water, air, snow and ice, wheels, land and rock, precision, endurance) with an India focus.",
    "Explain the physics and biology clearly for a curious beginner: everyday analogies, simple numbers with units, and short worked examples where they help.",
    "Ground every answer in Kinetic's pages and cite the pages you used as Markdown links. If Kinetic does not cover something, say so briefly and give only general, well-established science, clearly labelled as such.",
    "Stay on topic: adventure sports, their science, safety, training, seasons and events covered by this site. Politely decline unrelated requests.",
    "Safety: whenever a question touches a risky activity (for example scuba, freediving, cave or ice diving, paragliding, paramotoring, skydiving, bungee, mountaineering, big-wave surfing, kitesurfing, motorsport or shooting), add one short line saying this is educational and not a substitute for training with a certified instructor or licensed operator. Never give instructions for bypassing safety rules, equipment limits or certification.",
    "For medical questions (for example decompression illness or altitude sickness) advise seeing a qualified doctor. Event dates and listings can change: tell visitors to confirm with the organiser."
  ].join(" ");

  function load() {
    var sc = document.createElement("script");
    sc.src = base + "widget.js";
    sc.async = true;
    sc.setAttribute("data-site-name", "Kinetic");
    sc.setAttribute("data-default-model", "openrouter/free");
    sc.setAttribute("data-context-selector", "main, body");
    sc.setAttribute("data-exclude", ".topbar, .sectionnav, #comments, #gear, .comments");
    sc.setAttribute("data-index", indexUrl);
    sc.setAttribute("data-page-cap", "8000");
    sc.setAttribute("data-fab-label", "💬 Ask Kinetic");
    sc.setAttribute("data-persona", persona);
    sc.setAttribute("data-suggestions", JSON.stringify(suggestions));
    sc.setAttribute("data-greeting", "Hi! I'm Kinetic's physics tutor. Ask about the science on this page or any sport on the site, and I'll link the pages I use.");
    document.body.appendChild(sc);
  }

  // An OpenRouter sign-in return (?code=…&state=…) must be handled straight away; otherwise wait for idle
  // so the chat never competes with the page itself.
  if (/[?&](code|error|state|btw_debug)=/.test(location.search)) load();
  else if ("requestIdleCallback" in window) window.requestIdleCallback(load, { timeout: 2500 });
  else setTimeout(load, 800);
})();
