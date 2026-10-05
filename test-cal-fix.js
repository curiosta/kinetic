// Calendar mobile UX fix checks + core calendar assertions (server on :8088).
const { chromium } = require('playwright-core');
const BASE = process.env.KINETIC_BASE || 'http://127.0.0.1:8088/';
const CE = require('/workspace/kinetic-tools/cal/cal_expect.json');
const LIVE = require('/workspace/kinetic-tools/sportlist.js').LIVE;
let pass = 0, fail = 0;
const assert = (c, m) => { if (!c) { console.log('FAIL:', m); fail++; process.exitCode = 1; } else { console.log('PASS:', m); pass++; } };
const GISCUS_MSG = m => /giscus|Clear-Site-Data|partitioned/i.test(m.text());
const dataAttrs = html => [...html.matchAll(/data-[\w-]+="[^"]*"/g)].map(m => m[0]).filter(a => a.startsWith('data-')).sort().join('|');
const GISCUS_SNIP = require('fs').readFileSync('/workspace/kinetic-tools/build/giscus-snippet.orig.html', 'utf8');

(async () => {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const CURL = BASE + 'calendar/';
  const MON = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  console.log('===== calendar desktop =====');
  const cc = await b.newContext({ viewport: { width: 1366, height: 900 } });
  const c = await cc.newPage(); const cerr = [];
  c.on('pageerror', e => cerr.push(e.message));
  c.on('console', m => { if (m.type() === 'error' && !GISCUS_MSG(m)) cerr.push(m.text()); });
  assert((await c.goto(CURL, { waitUntil: 'networkidle' })).status() === 200 && /When to go/.test(await c.title()), 'calendar: page loads');
  assert((await c.textContent('h1')).replace(/\s+/g, ' ').trim() === 'When to go', 'calendar: titled When to go');
  const nrows = await c.$$eval('#cal tr.rw', r => r.length);
  assert(nrows === CE.rows, `calendar: ${CE.rows} season rows (${nrows})`);
  await c.click('#cal tr.rw[data-sport="scuba"] td[data-m="6"]');
  const note = await c.textContent('#cellnote');
  assert(/Scuba/.test(note) && /July/.test(note) && /Source/.test(note) && await c.$('#cellnote a[href^="../scuba/#ch-"]'), 'calendar: cell note with source + physics');
  assert(await c.$('.cellnote-close') && await c.$eval('#cellnote', el => el.classList.contains('is-open')), 'calendar: open note has Close control');
  await c.keyboard.press('Escape');
  assert(await c.$eval('#cellnote', el => !el.classList.contains('is-open') && !!el.querySelector('.hint')), 'calendar: Escape dismisses note');
  await c.click('#cal tr.rw[data-sport="scuba"] td[data-m="6"]');
  await c.click('.cellnote-close');
  assert(await c.$eval('#cellnote', el => !el.classList.contains('is-open')), 'calendar: Close button dismisses note');
  const kb = await c.evaluate(() => document.querySelectorAll('#cal td[tabindex="0"]').length);
  await c.click('#cal tr.rw[data-sport="scuba"] td[data-m="0"]');
  await c.focus('#cal td[tabindex="0"]'); await c.keyboard.press('ArrowRight');
  const kb2 = await c.evaluate(() => { const a = document.activeElement; return a && a.tagName === 'TD' ? a.dataset.m : null; });
  assert(kb === 1 && kb2 !== null, `calendar: keyboard roving works (${kb}, month ${kb2})`);
  for (const [g, list] of Object.entries(CE.groups)) {
    await c.click(`.chip[data-g="${g}"]`);
    const vis = await c.$$eval('#cal tr.rw', r => [...new Set(r.filter(x => x.offsetParent !== null).map(x => x.dataset.sport))]);
    assert(JSON.stringify(vis) === JSON.stringify(list), `calendar: filter ${g}`);
  }
  await c.click('.chip[data-g="all"]');
  const evOn = await c.$$eval('#cal tr.evrow', r => r.filter(x => x.offsetParent !== null).length);
  await c.click('#evtoggle');
  const evOff = await c.$$eval('#cal tr.evrow', r => r.filter(x => x.offsetParent !== null).length);
  await c.click('#evtoggle');
  assert(evOn > 0 && evOff === 0, `calendar: events toggle ${evOn}→${evOff}`);
  const cm2 = await c.evaluate(() => { const x = document.getElementById('comments'); return x && { beforeGear: x.nextElementSibling && x.nextElementSibling.id === 'gear', g: document.getElementById('gear').hidden }; });
  const craw = await (await c.request.get(CURL)).text();
  const giscusSec = (craw.match(/<!-- giscus:start[\s\S]*?<!-- giscus:end -->/) || [''])[0];
  assert(cm2 && cm2.beforeGear && cm2.g && dataAttrs(giscusSec) === dataAttrs(GISCUS_SNIP), 'calendar: Giscus unchanged');
  const cfoot = await c.$$eval('footer a[href^="../"]', as => as.map(a => a.getAttribute('href').replace(/^\.\.\/|\/$/g, '')).filter(Boolean));
  assert(LIVE.every(x => cfoot.includes(x)) && (await c.$('footer a[href="sources.md"]')), 'calendar: footer sports + sources.md');
  await c.goto(CURL + '#s-running', { waitUntil: 'networkidle' }); await c.waitForTimeout(300);
  assert(await c.$$eval('#cal tr.hl', r => r.length > 0 && r.every(x => x.dataset.sport === 'running')), 'calendar: deep link #s-running');
  assert(cerr.length === 0, 'calendar: no JS errors desktop ' + cerr.join('; '));
  await cc.close();

  console.log('===== calendar mobile UX =====');
  for (const w of [320, 360, 390]) {
    const mc = await b.newContext({ viewport: { width: w, height: 800 }, isMobile: true, hasTouch: true });
    const mpg = await mc.newPage(); const me = [];
    mpg.on('pageerror', e => me.push(e.message));
    mpg.on('console', m => { if (m.type() === 'error' && !GISCUS_MSG(m)) me.push(m.text()); });
    await mpg.goto(CURL, { waitUntil: 'networkidle' });
    const o = await mpg.evaluate(() => ({ page: document.documentElement.scrollWidth - innerWidth, grid: (() => { const g = document.querySelector('.gridwrap'); return g.scrollWidth > g.clientWidth && g.getBoundingClientRect().right <= innerWidth + 0.5; })() }));
    await mpg.locator('#cal tr.rw td[data-m="0"]').first().tap();
    await mpg.waitForTimeout(200);
    const open = await mpg.evaluate(() => {
      const n = document.getElementById('cellnote');
      const r = n.getBoundingClientRect();
      return {
        open: n.classList.contains('is-open'),
        close: !!n.querySelector('.cellnote-close'),
        scuba: /Scuba/.test(n.textContent),
        fit: r.left >= -0.5 && r.right <= innerWidth + 0.5 && r.width <= innerWidth + 0.5,
        ov: document.documentElement.scrollWidth - innerWidth,
        fixed: getComputedStyle(n).position === 'fixed',
      };
    });
    assert(o.page <= 0 && o.grid, `calendar ${w}: no page overflow; grid scrolls inside (${o.page}, ${o.grid})`);
    assert(open.open && open.close && open.scuba && open.fit && open.ov <= 0, `calendar ${w}: tap opens fitted note (${JSON.stringify(open)})`);
    // dismiss via outside tap (hero)
    await mpg.locator('h1').tap();
    await mpg.waitForTimeout(150);
    assert(await mpg.$eval('#cellnote', el => !el.classList.contains('is-open')), `calendar ${w}: outside tap dismisses`);
    // reopen and Close
    await mpg.locator('#cal tr.rw td[data-m="1"]').first().tap();
    await mpg.waitForTimeout(150);
    await mpg.locator('.cellnote-close').tap();
    await mpg.waitForTimeout(150);
    assert(await mpg.$eval('#cellnote', el => !el.classList.contains('is-open')), `calendar ${w}: Close dismisses`);
    // reopen and Escape
    await mpg.locator('#cal tr.rw td[data-m="2"]').first().tap();
    await mpg.waitForTimeout(150);
    await mpg.keyboard.press('Escape');
    assert(await mpg.$eval('#cellnote', el => !el.classList.contains('is-open')), `calendar ${w}: Escape dismisses`);
    // reopen and scroll dismisses
    await mpg.locator('#cal tr.rw td[data-m="3"]').first().tap();
    await mpg.waitForTimeout(500); // past ignoreScrollUntil
    await mpg.evaluate(() => window.scrollBy(0, 200));
    await mpg.waitForTimeout(150);
    assert(await mpg.$eval('#cellnote', el => !el.classList.contains('is-open')), `calendar ${w}: scroll dismisses`);
    // navigate away via hash
    await mpg.locator('#cal tr.rw td[data-m="4"]').first().tap();
    await mpg.waitForTimeout(150);
    await mpg.evaluate(() => { location.hash = 'month'; });
    await mpg.waitForTimeout(150);
    assert(await mpg.$eval('#cellnote', el => !el.classList.contains('is-open')), `calendar ${w}: navigating away dismisses`);
    const o2 = await mpg.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert(o2 <= 0, `calendar ${w}: still no overflow after dismiss (${o2})`);
    assert(me.length === 0, `calendar ${w}: no JS errors ` + me.join('; '));
    await mc.close();
  }

  await b.close();
  console.log(`\nCAL FIX TOTAL: ${pass} passed, ${fail} failed`);
})();
