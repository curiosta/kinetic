#!/usr/bin/env python3
"""calendar.py : write /workspace/kinetic/calendar/{index.html,styles.css,app.js,strip.css,sources.md} from seasons.py.
Run footers.py afterwards (it adds Giscus and refreshes the More-sports line on the calendar page too)."""
import os, sys, json, html
B = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, B)
import seasons as SE
sports = SE.load_groups()
OUT = "/workspace/kinetic/calendar"; os.makedirs(OUT, exist_ok=True)
E = lambda s: html.escape(s, quote=False)
A = lambda s: html.escape(s, quote=True)
NAME = {s: (n[0].upper() + n[1:]) for s, n, g in sports.SPORTS}          # display names (already HTML: &amp;)
GNAME = dict(sports.GROUPS)
STATE = {"P": ("Peak", "●"), "Y": ("Possible", "◐"), "O": ("Off", "✕")}
ICON = {"water": "🌊", "air": "🪂", "snow-ice": "❄️", "wheels": "🛼", "land-rock": "🧗", "precision": "🎯", "endurance": "🏃"}
order = [s for s, _, _ in sports.SPORTS]
rows = sorted(SE.ROWS, key=lambda r: order.index(r["sport"]))   # stable: keeps region order within a sport
for i, r in enumerate(rows): r["i"] = i
events = sorted(SE.EVENTS, key=SE.sort_key)
CHECKED = SE.CHECKED

def plain(name): return html.unescape(name)
def label(r, m): return f'{plain(NAME[r["sport"]])}, {r["region"]}, {SE.MONTH_FULL[m]}: {STATE[r["m"][m]][0]}'
def ext(url, text, cls=""):
    c = f' class="{cls}"' if cls else ""
    if url.startswith("http"): return f'<a{c} href="{A(url)}" target="_blank" rel="noopener">{text}</a>'
    return f'<a{c} href="{A(url)}">{text}</a>'

# ---------------- grid ----------------
def grid():
    out = ['<table class="cal" id="cal">', '<caption class="sr-only">Season calendar: one row per sport and region; columns are months. ● peak, ◐ possible, ✕ off; ◆ marks an annual event.</caption>',
           '<thead><tr><th scope="col" class="c-sport">Sport · region</th>' + "".join(f'<th scope="col" data-m="{m}"><abbr title="{SE.MONTH_FULL[m]}">{SE.MON[m]}</abbr></th>' for m in range(12)) + '</tr></thead>']
    for gid, gname in sports.GROUPS:
        out.append(f'<tbody data-group="{gid}"><tr class="grp"><th colspan="13" scope="rowgroup"><span aria-hidden="true">{ICON[gid]}</span> {gname}</th></tr>')
        for s in [x for x in order if SE.GROUP_OF[x] == gid]:
            first = True
            for r in [r for r in rows if r["sport"] == s]:
                rid = f' id="s-{s}"' if first else ""
                yr = '<span class="yr">Year-round</span>' if r["yr"] else ""
                sp = f'<a class="sp" href="../{s}/">{NAME[s]}</a>' if first else f'<span class="sp sp2" aria-hidden="true">{NAME[s]}</span><span class="sr-only">{NAME[s]}</span>'
                tds = "".join(f'<td class="st {r["m"][m]}" data-r="{r["i"]}" data-m="{m}" tabindex="-1" aria-label="{A(label(r, m))}"><span aria-hidden="true">{STATE[r["m"][m]][1]}</span></td>' for m in range(12))
                out.append(f'<tr class="rw" data-sport="{s}"{rid}><th scope="row" class="c-sport">{sp}<span class="rg">{E(r["region"])}</span>{yr}</th>{tds}</tr>')
                first = False
            evs = SE.events_for(s)
            if evs:
                tds = ""
                for m in range(12):
                    here = [e for e in evs if m in e["m"]]
                    if here:
                        lab = f'{plain(NAME[s])} events in {SE.MONTH_FULL[m]}: ' + "; ".join(f'{e["name"]} ({SE.when(e)})' for e in here)
                        tds += f'<td class="ev on" data-s="{s}" data-m="{m}" tabindex="-1" aria-label="{A(lab)}"><span aria-hidden="true">◆</span></td>'
                    else: tds += f'<td class="ev" data-m="{m}"></td>'
                out.append(f'<tr class="evrow" data-sport="{s}"><th scope="row" class="c-sport"><span class="rg">◆ {NAME[s]} events</span></th>{tds}</tr>')
        out.append('</tbody>')
    out.append('</table>')
    return "\n".join(out)

# ---------------- events list (pre-rendered Jan..Dec; app.js starts it at the current month) ----------------
def evitem(e):
    gl = '<span class="gl">Global</span>' if e["scope"] == "Global" else ""
    when = f'<span class="when exact">{E(e["date"])}</span>' if e["date"] else f'<span class="when usual">{E(SE.cap(e["usual"]))}</span>'
    end = f' data-start="{SE.start_iso(e)}" data-end="{SE.end_iso(e)}"' if e["date"] else ""
    return (f'<li class="evi" data-sport="{e["sport"]}" data-group="{SE.GROUP_OF[e["sport"]]}"{end}>'
            f'<div class="evh"><b>{E(e["name"])}</b>{gl}</div>'
            f'<div class="evm">{when} · {E(e["where"])} · <a href="../{e["sport"]}/">{NAME[e["sport"]]}</a></div>'
            f'<div class="evl">{ext(e["url"], "Official page ↗")}<span class="past" hidden> · This edition is over: check the official page for the next one.</span></div></li>')
def evlist():
    out = ['<ol class="evlist" id="evlist">']
    for m in range(12):
        here = [e for e in events if e["m"][0] == m]
        if not here: continue
        out.append(f'<li class="evmon" data-m="{m}"><h3>{SE.MONTH_FULL[m]}</h3><ul>' + "".join(evitem(e) for e in here) + '</ul></li>')
    out.append('</ol>')
    return "\n".join(out)

# ---------------- data for app.js ----------------
DATA = {
    "mon": SE.MONTH_FULL, "checked": CHECKED,
    "groups": [[g, html.unescape(n)] for g, n in sports.GROUPS],
    "sports": {s: {"name": NAME[s], "group": SE.GROUP_OF[s]} for s in order},
    "rows": [{"s": r["sport"], "rg": E(r["region"]), "m": r["m"], "n": [E(x) for x in r["notes"]], "why": E(r["why"][0]), "a": r["why"][1],
              "src": r["src"], "cf": E(r["conflict"]), "yr": r["yr"]} for r in rows],
    "events": [{"s": e["sport"], "name": E(e["name"]), "m": e["m"], "when": E(SE.when(e)), "exact": bool(e["date"]), "end": SE.end_iso(e),
                "where": E(e["where"]), "url": e["url"], "g": e["scope"] == "Global"} for e in events],
    "src": {k: [E(v[0]), v[1]] for k, v in SE.S.items()},
}
dj = json.dumps(DATA, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")

chips = '<button type="button" class="chip" data-g="all" aria-pressed="true">All</button>' + "".join(
    f'<button type="button" class="chip" data-g="{g}" aria-pressed="false">{n}</button>' for g, n in sports.GROUPS)
mchips = "".join(f'<button type="button" class="mchip" data-m="{m}" aria-pressed="false">{SE.MON[m]}</button>' for m in range(12))
legend = ('<ul class="legend" aria-label="Legend">'
          '<li><span class="key P" aria-hidden="true">●</span> Peak: a cited source calls it the best or main season</li>'
          '<li><span class="key Y" aria-hidden="true">◐</span> Possible: shoulder month, weather-dependent, or sources disagree</li>'
          '<li><span class="key O" aria-hidden="true">✕</span> Off: closed, banned or outside every cited season</li>'
          '<li><span class="key E" aria-hidden="true">◆</span> Annual event (toggle with the Events button)</li></ul>')
ICO = """<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0a3554"/><path d="M9 7v18M9 16l9-9M12 13l10 12" stroke="#11b5a4" stroke-width="3.2" stroke-linecap="round" fill="none"/><circle cx="25" cy="8" r="2" fill="#ff6b4a"/></svg>"""
FAV = """data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2306243a'/%3E%3Cpath d='M9 7v18M9 16l9-9M12 13l10 12' stroke='%2311b5a4' stroke-width='3.2' stroke-linecap='round' fill='none'/%3E%3C/svg%3E"""
nsp = len(order); nrows = len(rows); nev = len(events)

page = f'''<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>When to go: season calendar for adventure sports in India · Kinetic by Curiosta</title>
<meta name="description" content="Best months for {nsp} adventure sports in India, region by region, from diving in the Andamans to skiing in Gulmarg, with annual events and a source for every season.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../scuba/styles.css">
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="{FAV}">
</head>
<body>
<!-- generated by kinetic-tools/build/calendar.py from build/seasons.py; do not hand-edit -->
<header class="topbar">
  <div class="wrap">
    <a class="wordmark" href="../" aria-label="Kinetic home">
      {ICO}
      <span class="wm-text">kinetic<b>.</b></span>
      <span class="wm-sub">When to go</span>
    </a>
    <nav class="sectionnav" aria-label="Sections">
      <a href="#grid">Calendar</a>
      <a href="#month">By month</a>
      <a href="#events">Events</a>
      <a href="#about">About the data</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero cal-hero" id="top">
    <div class="wrap">
      <div>
        <span class="eyebrow">Season calendar · all {nsp} sports</span>
        <h1>When to <em>go</em></h1>
        <p class="lede">The best months for every sport on Kinetic, region by region, with the annual events worth planning around. Every season links to its source and to the physics of why the weather matters.</p>
        <div class="cta"><a class="btn btn-primary" href="#month">What can I do this month? →</a><a class="btn btn-ghost" href="#events">Annual events</a></div>
      </div>
      <div class="hero-stats" aria-label="At a glance">
        <div class="hero-stat"><span class="n">{nsp}</span><span class="l">sports</span></div>
        <div class="hero-stat"><span class="n">{nrows}</span><span class="l">regional seasons</span></div>
        <div class="hero-stat"><span class="n">{nev}</span><span class="l">annual and recurring events</span></div>
        <div class="hero-stat"><span class="n">12</span><span class="l">months, each with a source</span></div>
      </div>
    </div>
  </section>

  <section class="block" id="grid">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">01 · Calendar</span>
        <h2>Every sport, month by month</h2>
        <p>Tap or hover a cell for the reason, the source, and the physics behind it. On a phone, tap again outside, press Escape, or Close to dismiss; the grid scrolls sideways inside its box.</p>
      </div>
      <div class="callout note disclaimer"><p><b>Typical seasons, not a forecast.</b> These months come from the operators, federations and government sources we cite. Weather changes from year to year, so check with your operator and the <a href="https://mausam.imd.gov.in/" target="_blank" rel="noopener">IMD forecast</a> before you go.</p></div>
      {legend}
      <div class="toolbar">
        <div class="chips" role="group" aria-label="Filter by sport group">{chips}</div>
        <button type="button" class="evtoggle" id="evtoggle" aria-pressed="true" aria-controls="cal"><span aria-hidden="true">◆</span> Events: <b>on</b></button>
      </div>
      <div class="gridwrap" role="region" aria-label="Season calendar, scrolls sideways" tabindex="0">
{grid()}
      </div>
      <div class="cellnote" id="cellnote" aria-live="polite"><p class="hint">Tap or hover a cell to see why that month is marked the way it is. On touch screens, tap outside, press Escape, or Close to dismiss.</p></div>
    </div>
  </section>

  <section class="block alt" id="month">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">02 · By month</span>
        <h2>What can I do in <span id="mname">this month</span>?</h2>
        <p>Pick a month to see which sports are in season, which are possible, and what's on. It opens on the current month.</p>
      </div>
      <div class="mchips" role="group" aria-label="Pick a month">{mchips}</div>
      <div id="monthout" class="monthout" aria-live="polite"><noscript><p>Turn on JavaScript to use the month view, or use the calendar above.</p></noscript></div>
    </div>
  </section>

  <section class="block" id="events">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">03 · Events</span>
        <h2>Annual and recurring events</h2>
        <p>Well-known events in India, plus a few major global ones, sorted by month and starting from this month. Where the next edition's dates are officially announced we show them; otherwise it says “usually” and the month. Each one links to its official page, so check there before you plan.</p>
      </div>
{evlist()}
    </div>
  </section>

  <section class="block alt" id="about">
    <div class="wrap narrow">
      <div class="section-head">
        <span class="eyebrow">04 · About the data</span>
        <h2>How we built this calendar</h2>
      </div>
      <p><b>Peak</b> means a cited source calls those months the best, peak or ideal time, or every source we cite agrees on the season. Where one source gives a narrower peak, the narrower one wins. <b>Possible</b> means the activity runs but it's a shoulder or part month, it depends on the weather, or our sources disagree. <b>Off</b> means closed, banned, or outside every season we found. Year-round rows, like indoor rinks, pools and ranges, say so.</p>
      <p>When sources disagree, we show the more cautious option and say so in the cell note. Monsoon timings come from the India Meteorological Department's normal onset and withdrawal dates. A normal date is an average, so any given year can run early or late.</p>
      <p>Events show an exact date only when the organiser has announced the next edition. Otherwise they show the usual month from past editions. We left out events we couldn't confirm are still running; they're listed in the sources file.</p>
      <div class="callout"><p>Every row, event and dropped item is logged with its source in <a href="sources.md">sources.md</a>. Seasons and events were checked on {CHECKED}. Each sport's own page has more detail under “When to go”.</p></div>
    </div>
  </section>
</main>

<!-- Gear: reserved placeholder for a future section (affiliate setup pending). Not built yet; keep hidden. -->
<section id="gear" class="gear-placeholder" hidden aria-hidden="true" data-placeholder="gear"></section>

<footer>
  <div class="wrap">
    <div>
      <a class="wordmark" href="../" style="margin-bottom:8px">{ICO}<span class="wm-text">kinetic<b>.</b></span></a>
      <div>The science of individual adventure sports · a Curiosta brand · <a href="../">All sports</a></div>
      <div class="small" style="margin-top:6px">Seasons and events checked {CHECKED}. Sources: see <a href="sources.md">sources.md</a>. {sports.more_sports("calendar")}</div>
    </div>
    <div class="proto">Prototype - kinetic.curiosta.com</div>
  </div>
</footer>

<script id="caldata" type="application/json">{dj}</script>
<script src="app.js"></script>
</body>
</html>
'''
open(f"{OUT}/index.html", "w").write(page)
for f in ("styles.css", "app.js", "strip.css"):
    open(f"{OUT}/{f}", "w").write(open(f"{B}/cal/{f}").read())

# ---------------- sources.md ----------------
def mrange(m, ch):
    idx = [i for i in range(12) if m[i] == ch]
    if not idx: return "none"
    if len(idx) == 12: return "all year"
    # group into runs, wrapping Dec->Jan
    runs, cur = [], [idx[0]]
    for i in idx[1:]:
        if i == cur[-1] + 1: cur.append(i)
        else: runs.append(cur); cur = [i]
    runs.append(cur)
    if len(runs) > 1 and runs[0][0] == 0 and runs[-1][-1] == 11: runs[0] = runs.pop() + runs[0]
    return ", ".join(SE.MON[r[0]] if len(r) == 1 else f"{SE.MON[r[0]]}-{SE.MON[r[-1]]}" for r in runs)
md = [f"# Kinetic season calendar: sources", "",
      f"Page: `/calendar/` (\"When to go\") and the season strip on each sport page. Generated by `kinetic-tools/build/calendar.py` from `build/seasons.py`. Checked {CHECKED}.", "",
      "## How states are decided", "",
      "- **Peak (●)**: months a cited source calls best, peak or ideal, or the stated season where all cited sources agree. A narrower stated peak wins.",
      "- **Possible (◐)**: open, but a shoulder or part month, weather-dependent, or cited sources disagree.",
      "- **Off (✕)**: closed, banned, outside every cited season, or not advised.",
      "- Where sources conflict, the more conservative state is shown and the conflict is noted below and in the cell note.",
      "- Seasons are typical guidance, not forecasts; the page tells readers to check with operators and IMD forecasts.",
      "- No prices are reproduced, even where a source page shows them.", "",
      "## Sources", "", "| Key | Source | How checked |", "|---|---|---|"]
for k, (lab, url, how) in SE.S.items():
    md.append(f"| {k} | [{lab}]({url}) | {how} |")
md += ["", "## Rows (sport · region)", "", "| Sport | Region | Peak | Possible | Off | Sources | Conflict / softened |", "|---|---|---|---|---|---|---|"]
for r in rows:
    md.append(f"| {plain(NAME[r['sport']])} | {r['region']} | {mrange(r['m'],'P')} | {mrange(r['m'],'Y')} | {mrange(r['m'],'O')} | {', '.join(r['src'])} | {r['conflict'] or '-'} |")
md += ["", "## Events", "", "Exact dates are shown only where the next edition is officially announced (all on or after " + CHECKED + "); otherwise the label is \"usually <month>\". Past editions' dates below are evidence for the usual month, not shown as upcoming dates.", "",
       "| Month | Sport | Event | Shown as | Official page | Evidence |", "|---|---|---|---|---|---|"]
for e in events:
    md.append(f"| {SE.MON[e['m'][0]]} | {plain(NAME[e['sport']])} | {e['name']}{' (global)' if e['scope']=='Global' else ''} | {SE.when(e)} | {e['url']} | {e['src']} |")
md += ["", "Sports with no verified recurring event (their strips say so): " + ", ".join(plain(NAME[s]) for s in order if not SE.events_for(s)) + ".", "",
       "## Events dropped (not verified as still running, or not recurring)", ""]
for n, why in SE.DROPPED: md.append(f"- **{n}**: {why}")
md += ["", "## Notes", "",
       "- The archery page's 2026 national event dates were corrected on 5 Oct 2026 (they were one day early). The AAI calendar renders dates in the viewer's time zone. Read in IST and checked against the Rajasthan Archery Association's 2026-27 calendar, they are: Junior Nationals, Jaipur, 21-28 Oct; Senior Nationals, Shillong, 11-18 Nov; 4th NRAT, Gangtok, 21-30 Nov; and the workshop, 12-15 Oct.",
       "- Links marked as Kinetic page sources (`../<sport>/#where`) point to that sport's own sources.md for the underlying citations.", ""]
open(f"{OUT}/sources.md", "w").write("\n".join(md))
print("calendar written:", nrows, "rows,", nev, "events,", len(page), "bytes")
# test expectations for test-all.js (strip rows per sport, event counts)
json.dump({s: {"rows": [r["m"] for r in rows if r["sport"] == s], "events": len(SE.events_for(s))} for s in order},
          open("/workspace/kinetic-tools/cal/strip_expect.json", "w"), indent=0)
json.dump({"rows": len(rows), "events": len(events), "sports": order, "groups": {g: [s for s in order if SE.GROUP_OF[s] == g] for g, _ in sports.GROUPS},
           "evmonths": [e["m"][0] for e in events], "rowsByGroup": {g: len([r for r in rows if SE.GROUP_OF[r["sport"]] == g]) for g, _ in sports.GROUPS}},
          open("/workspace/kinetic-tools/cal/cal_expect.json", "w"), indent=0)
