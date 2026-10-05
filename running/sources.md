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
- **TMM's World Athletics label and AIMS listing** appeared in search results only, so they are not claimed on the page. *Superseded 5 Oct 2026 (deep7, §5): now verified on World Athletics' 2026 Label calendar and AIMS's member calendar, and labelled on the page.*
- **No coaching plans or paces as prescriptions.** The lab and chapters are illustrative; a doctor-first note for high altitude and existing conditions is in the disclaimer.
- **No prices, fees or tie-up line**; no emails or phone numbers.
- A hidden, empty `#gear` placeholder sits before the footer for a future Gear section (not built).

## 5. Deep research (5 Oct 2026, batch deep7)

| Item | Source | Status |
|---|---|---|
| Prototype foam-and-plate shoe vs two established racing shoes (mass matched): 18 high-calibre runners, 14/16/18 km/h; energy cost 4.16% and 4.01% lower (≈ 4%), in all 18 runners, independent of speed; study funded by Nike (two authors Nike employees, one a paid consultant) | W. Hoogkamer et al., *A comparison of the energetic cost of running in marathon racing shoes*, *Sports Med* 48:1009–1019 (2018), PMID 29143929 — https://pmc.ncbi.nlm.nih.gov/articles/PMC5856879/ | ✓ abstract + conflict statement read (NCBI E-utilities, 5 Oct 2026) |
| Economy → speed: below ~3 m/s speed gain slightly > economy gain; above, less; at 5.5 m/s ≈ ⅔; at 2:04 pace 3% economy → 1.97% faster (≈ 2:01:36) | S. Kipp, R. Kram, W. Hoogkamer, *Extrapolating metabolic savings in running: implications for performance predictions*, *Front Physiol* 10:79 (2019), PMID 30804807 — https://www.frontiersin.org/articles/10.3389/fphys.2019.00079/full | ✓ abstract; 4% rows (2:00:50; 3:22–3:23; 4:19–4:20) **computed by us, rough** (stated) |
| "Later studies found more runner-to-runner variation" | general statement; page already says effect varies | soft wording, no number |
| Sole thickness limits: road running & race walking 40 mm; track and field 20 mm; mountain and trail any; cross-country any from 1 Apr 2026; measured at 12% and 75% of internal length on a 270 mm sole; applies to World Athletics / area / label competitions | World Athletics, *Athletic Shoe Regulations*, approved by Council 2 Dec 2025, effective 1 Jan 2026 (Book C2.1A), PDF https://worldathletics.org/download/download?filename=3b2559ca-694d-4efb-80bb-4b17cdca0cb5.pdf&urlslug=C2.1A+%E2%80%93+Athletic+Shoe+Regulations+ | ✓ read (Appendix 2 table, Reg. 8.4) |
| Top speed and ground force: 33 subjects, top speeds 6.2–11.1 m/s; swing time did not vary (P = 0.18); average contact force 1.26× greater at 11.1 vs 6.2 m/s; decline (−6°) 9.96 m/s at 2.30 BW vs incline (+9°) 7.10 m/s at 1.76 BW | P. G. Weyand et al., *Faster top running speeds are achieved with greater ground forces not more rapid leg movements*, *J Appl Physiol* 89:1991–1999 (2000), PMID 11053354 — https://journals.physiology.org/doi/10.1152/jappl.2000.89.5.1991 | ✓ abstract |
| **AFI on Asian Athletics' member-federations page** (World Athletics' area association; contact ind@mf.worldathletics.org) | https://asianathletics.com/member-federations (curl 5 Oct 2026). World Athletics' own member-federations page is JavaScript-rendered and showed no list to our renderer | **✓ Verified (Asian Athletics)** |
| AFI on the IOA's member list | https://olympic.ind.in/members/ | **✓ Verified** |
| **World Athletics 2026 Label road-race calendar** includes Tata Mumbai Marathon (18 Jan 2026), TCS World 10K Bengaluru (26 Apr 2026), Vedanta Delhi Half Marathon (18 Oct 2026) | https://worldathletics.org/competitions/world-athletics-label-road-races (rendered 5 Oct 2026). Label tier (Gold etc.) not shown in the rendered list | **✓ Verified**; "Gold Label" for TCS W10K kept as organiser's claim |
| **AIMS official calendar of member races (Oct 2026–Jan 2028)** includes Tata Mumbai Marathon, Vedanta Delhi Half Marathon, TCS World 10K Bengaluru, Ladakh Marathon & Ultra (M, H, R, U), Boston Marathon | https://aims-worldrunning.org/calendar.html (curl 5 Oct 2026) | **✓ Verified** |
| Tata Ultra (Lonavala), Malnad Ultra: not on WA label or AIMS calendars | same two lists | "Not on either list" (normal for trail ultras; ITRA not checked per race) |
| Seasons | no verified change; strip untouched | — |

### Accreditation labels on cards (5 Oct 2026)
- World Athletics → ✓ World governing body; AIMS → ✓ World Athletics partner; ITRA → ✓ Association's own site; AFI → ✓ Asian Athletics member federation + ✓ On the IOA's member list; HASF Ladakh → ✓ Organiser's race on the AIMS member calendar
- TCS World 10K → ✓ WA Label (2026 calendar) + Organiser's claim "Gold Label" + ✓ AIMS member race; Delhi HM and its Open 10K → ✓ WA Label + ✓ AIMS; Tata Mumbai Marathon → ✓ WA Label (2026 edition) + ✓ AIMS
- Ladakh 5 km / half & full / 13th edition → ✓ AIMS member event; Khardung La Challenge and Silk Route Ultra → ✓ Part of an AIMS member event + "Run under the Race Director's own rules"
- Boston → ✓ AIMS member race; Abbott WMM → ✓ Series' own site; Tata Ultra, Malnad Ultra → Not on either list
- Race-label key callout added under "Where to run".
