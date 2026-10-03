# Kinetic · Running: sources and verification notes

All checks done **3 Oct 2026 (IST)**. "Verified" means the official page was loaded and the stated fact was read on it, unless noted otherwise. The page deliberately shows **no prices or entry fees**. Each race is linked to its organiser's site, where readers should check current dates, eligibility and fees.

## 1. Physiology (chapters, quiz, Pace & Altitude Lab)

| Claim | Basis |
|---|---|
| Energy cost of running ≈ 1 kcal per kg per km, roughly independent of speed; individual spread ±10–20% | Long-standing exercise-physiology rule of thumb (general knowledge, **not fetched**) |
| Oxygen cost ≈ 200 mL O₂ per kg per km; ≈ 5 kcal per litre of O₂ | Rule of thumb (general knowledge, **not fetched**); consistency of the two rules computed |
| Peak vertical ground reaction force ≈ 2–3 × body weight; half-sine contact model; cadence studies | Biomechanics textbook values (general knowledge, **not fetched**); worked numbers computed (impulse = weight × step time) |
| VO₂ max falls "several per cent per 1,000 m above about 1,000 m"; Lab uses 7% | **Rule of thumb, labelled as such on the page**; real losses vary between individuals |
| Energy systems (phosphocreatine, glycolysis, aerobic); glycogen ≈ 2,000 kcal; carbohydrate 30–60 g/h (up to ~90 g/h for some) | General sports-nutrition knowledge (**not fetched**) |
| Heat: ~80% of metabolic energy becomes heat; 2.4 MJ per kg of sweat evaporated; humidity limits evaporation; hyponatraemia risk | Physics + physiology textbook values (**not fetched**); worked numbers computed |
| Racing-shoe economy gains of "a few per cent for many runners" | Summary of published studies (**not fetched**); worded with the variation caveat |
| AMS, HAPE, HACE symptoms and need for descent | General high-altitude medicine knowledge (**not fetched**); the page tells readers to follow organiser and medical advice |
| ISA pressure: Leh 3,505 m ≈ 65.7 kPa (≈ 65%); Khardung La 5,370 m ≈ 51.4 kPa (≈ 51%); O₂ partial pressure = 20.95% of total | International Standard Atmosphere formula (computed) |

## 2. Course standards and qualification rules

| Item | URL | Status |
|---|---|---|
| AIMS–World Athletics course measurement: calibrated bicycle method only, Grade A/B measurers; record courses ≤ 1 m/km drop and start–finish separation ≤ 50% of distance | https://aims-worldrunning.org/course-measurement.html | loaded |
| World Athletics Label road races | https://worldathletics.org/competitions/world-athletics-label-road-races | loaded |
| Boston Marathon 2027 qualifying: men 18–34 2:55:00, women 3:25:00; certified courses (USATF, AIMS or national body); 2027 cut-off 5 min 17 s | https://www.baa.org/races/boston-marathon/qualify | loaded |
| Abbott World Marathon Majors: eight Majors; age-group world rankings for 40+ across 350+ events | https://www.worldmarathonmajors.com/ | loaded |
| ITRA (trail race ratings and points) | https://itra.run/ | HTTP 202 to curl; description from general knowledge and from the Ladakh eligibility page's use of ITRA points |
| Athletics Federation of India: approved races page | https://indianathletics.in/approved-races-marathons/ | loaded, but **no race list was returned to our checker**; the page says so |

## 3. Races

| Item | URL | Status |
|---|---|---|
| Ladakh Marathon 13th edition, 10–13 Sep 2026; six races (SRU 122 km Thu 10 Sep; KC 72 km Fri 11 Sep; 5 km Sat 12 Sep; full, half and 11.2 km Sun 13 Sep); cut-offs; AIMS rules except ultras | https://ladakhmarathon.com/race-information/ | loaded via WebFetch (the box's curl gets no response, 000) |
| Ladakh acclimatisation: 7/10/15 days; rest day 1; hydration; avoid alcohol; monitor SpO₂; SNM Hospital; Diamox mention; "not determined by individual fitness levels"; O₂ about 50% at Khardung La | https://ladakhmarathon.com/acclimatisation/ | loaded via WebFetch |
| Ladakh eligibility: qualifying window 5 Sep 2024–23 Mar 2026; per-race time standards; min ages; max 300 (KC) / 100 (SRU); medical checks at Khardung and Kyagar villages; no supplementary oxygen; hydration pack; restricted-area permit exclusions; stadium/24 h/virtual/GPS-watch times not accepted | https://ladakhmarathon.com/eligibility-criteria/ | loaded via WebFetch |
| Tata Mumbai Marathon 17 Jan 2027; registration 31 Jul–5 Nov 2026; timing certificate sets start wave; age 18; expo 14–16 Jan 2027; Debutant Bib | https://tatamumbaimarathon.procam.in/race-categories/marathon/information | loaded |
| Vedanta Delhi Half Marathon 18 Oct 2026, JLN Stadium; timing certificate; age 18; registration 23 Jul–8 Sep; Debutant Bib | https://vedantadelhihalfmarathon.procam.in/race-categories/half-marathon/information | loaded |
| VDHM Open 10K, 18 Oct 2026: Sansad Marg → JLN Stadium; minimum age 15; no prior timing certificate required (certificate sets start wave); registrations closed apart from limited categories; bibs in person at expo; free Delhi Metro band | https://vedantadelhihalfmarathon.procam.in/race-categories/open-10k/information | loaded |
| TCS World 10K Bengaluru, 26 Apr 2026: Gold Label; timing certificate for Open 10K from 2026; Majja Run 4.2 km; virtual-to-2027 pathway; AFI among supporters | https://tcsworld10k.procam.in/news-media/latest-news/tata-consultancy-services-world-10-k-bengaluru-the-world-s-premier-10-k-is-scheduled-for-sunday-26th-april-2026-registrations-now-open | loaded (organiser press release) |
| Tata Ultra Marathon, Lonavala, 22 Feb 2026: 50/35 km, start times, head torches, no poles, time limits, eligibility | https://tataultra.com/race.html | loaded |
| Malnad Ultra, 28 Nov 2026: distances, time limits, climbing, terrain; 30/50 km entries closed when checked | https://malnadultra.com/ | loaded |

## 4. Left out / judgement calls

- **"Where to go" lists races, not schools.** Running has no licensing schools, so the level tabs list verified events (`.site` cards). The automated test counts unique schools **or events** for this reason.
- **Only two India body cards** (AFI and the Ladakh organiser): we found no other national body with a verifiable role in road running.
- **TMM's World Athletics label and AIMS listing** appeared in search results only, so they are not claimed on the page.
- **No coaching plans or paces as prescriptions.** The lab and chapters are illustrative; a doctor-first note for high altitude and existing conditions is in the disclaimer.
- **No prices, fees or tie-up line**; no emails or phone numbers.
- A hidden, empty `#gear` placeholder sits before the footer for a future Gear section (not built).
