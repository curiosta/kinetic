// layout-viewport check for /calendar/ only
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  let pass=0, fail=0;
  for (const w of [320,360,390]) {
    const c = await b.newContext({ viewport: { width: w, height: 760 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    const p = await c.newPage();
    await p.goto('http://127.0.0.1:8088/calendar/', { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
    const iw = await p.evaluate(() => innerWidth);
    if (iw === w) pass++; else { fail++; console.log('FAIL calendar', w, 'layout viewport', iw); }
    await p.evaluate(() => document.getElementById('comments').scrollIntoView()); await p.waitForTimeout(2500);
    const r = await p.evaluate(() => ({ iw: innerWidth, ov: document.documentElement.scrollWidth - innerWidth, fr: !!document.querySelector('#comments iframe'), fw: (document.querySelector('#comments iframe') || { getBoundingClientRect: () => ({ right: 0 }) }).getBoundingClientRect().right }));
    if (r.iw === w && r.ov <= 0 && r.fw <= w + 0.5) pass++; else { fail++; console.log('FAIL calendar', w, 'with comments loaded', JSON.stringify(r)); }
    if (!r.fr) console.log('note calendar', w, 'giscus iframe not loaded (network?)');
    // open note and re-check overflow (return to the grid first; comments scroll can leave cells off-screen)
    await p.evaluate(() => document.getElementById('grid').scrollIntoView()); await p.waitForTimeout(200);
    await p.locator('#cal tr.rw td[data-m="0"]').first().tap(); await p.waitForTimeout(250);
    const n = await p.evaluate(() => {
      const el = document.getElementById('cellnote');
      const box = el.getBoundingClientRect();
      return { open: el.classList.contains('is-open'), ov: document.documentElement.scrollWidth - innerWidth, left: box.left, right: box.right, iw: innerWidth };
    });
    if (n.open && n.ov <= 0 && n.left >= -0.5 && n.right <= n.iw + 0.5) pass++; else { fail++; console.log('FAIL calendar', w, 'note open overflow', JSON.stringify(n)); }
    await c.close();
  }
  console.log(`VW CALENDAR: ${pass} passed, ${fail} failed`);
  if (fail) process.exitCode = 1;
  await b.close();
})();
