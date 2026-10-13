// Kinetic calendar subscriptions: inline "Copy link" (no pop-up). Confirmation appears in place, next to the button.
(function () {
  "use strict";
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (ok, no) {
      var t = document.createElement("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy") ? ok() : no(); } catch (e) { no(e); } finally { t.remove(); }
    });
  }
  document.querySelectorAll(".subs").forEach(function (box) {
    var b = box.querySelector(".subs-copy"), msg = box.querySelector(".subs-msg");
    if (!b) return;
    b.hidden = false;
    b.addEventListener("click", function () {
      var url = b.dataset.url;
      copy(url).then(function () { msg.textContent = box.dataset.short ? "Copied" : "Copied. In Google Calendar: Other calendars → From URL, then paste."; },
                     function () { msg.textContent = "Couldn't copy. The link is: " + url; });
    });
  });
})();
