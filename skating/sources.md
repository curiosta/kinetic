# Kinetic · Roller & inline skating: sources and verification notes

Base checks done **3 Oct 2026 (IST)**; deep5 pass **5 Oct 2026 (IST)** (section 5). "Verified" means the official page was loaded and the stated fact was read on it, unless noted otherwise. The page deliberately shows **no prices**. Academy phone numbers and emails are also left off the page; readers are sent to each academy's own site.

## Scope decision: skateboarding excluded

Skateboarding is governed by the same bodies (World Skate globally; RSFI says it is "the governing body for skateboarding and roller sports in India"). It's still left out of this page, with a short explanatory note:
- **Different core physics.** The board isn't attached to the feet. Ollies, pop and flick tricks, and a sideways stance on one deck don't map onto striding on two skates.
- **Different skill ladder.** Its competitions (Olympic street and park) also differ.
- **Better as a page of its own.** It deserves dedicated chapters rather than a sidebar.

## 1. Physics (chapters, quiz, Roll Lab)

| Claim | Basis |
|---|---|
| Rolling resistance F = Crr × W; Crr ≈ 0.005 / 0.01 / 0.02 for rink / smooth concrete / rough asphalt | Standard mechanics. Crr values are **illustrative** orders of magnitude, not measurements |
| Drag ½ρv²CdA with ρ = 1.2, CdA 0.45 upright / 0.30 tuck | **Illustrative** values |
| 608 bearing (8 × 22 × 7 mm), two per wheel; ABEC = tolerance scale, not speed | General engineering knowledge (ABEC scale from the American Bearing Manufacturers Association), not fetched |
| Shore A durometer (lower = softer); wheel-size trade-offs; quad vs inline; heel brake/toe stop | General skating knowledge, not fetched |
| Lean tan θ = v²/(gr); v = √(2gh); terminal speed on slopes; stopping distance v²/(2a) | Standard mechanics; all numbers computed by Kinetic (Python check) |
| Braking decelerations 1 / 2 / 3.5 m/s²; reaction time 0.7 s | **Illustrative** values |
| Car tyre ≈ 65 cm diameter → ≈ 800 rpm at 100 km/h | Computed from an assumed typical tyre size |

## 2. Skill levels and instructor certifications

| Item | URL | Status |
|---|---|---|
| ICP Level 1: teachable skills (forward stride 1–2, heel brake, A-frame turn, forward swizzle, parallel turn, spin stop, grass stop); additional skills (stride 3, backward swizzle/movement, forward slalom, T-stop, crossovers, transitions, backward powerslide); entry requirement of intermediate skills; full protective gear + heel brake compulsory; pass marks 85% theory, 80% practical teaching | https://www.inlinecertificationprogram.org/icp-level-1 | loaded |
| ICP Levels 1–3 exist | ICP site navigation | loaded (Levels 2–3 details not read) |
| Skate IA programmes: Level 1 Core, 2A Mastery of the Classroom, 2B Advanced Technical Skills, Skate Park, Freestyle Slalom; inline and quad; in person and online | https://www.skateia.org/programs | loaded |
| **Kinetic milestone ladder** (Milestones 0–5) | Kinetic's own framework | **Judgement call**: no single international learner grading for roller/inline exists. Milestones 1–2 follow the ICP Level 1 skill lists; 0, 3 and 4 are labelled as Kinetic milestones |
| RSFI age categories: Cadet 5–7 / 7–9 / 9–11, Sub-Junior 11–14, Junior 14–17, Senior above 17, Master above 30 | https://indiaskate.com/delhi/ | Taken from the 2021–22 national-player list on RSFI's Delhi page; not from a current RSFI rulebook |

## 3. Governing bodies

| Body | URL | Status |
|---|---|---|
| World Skate and its discipline commissions | https://www.worldskate.org/about/organisation/discipline-commission.html | loaded |
| RSFI: "governing body for skateboarding and roller sports in India"; Skater Annual Registration 2026–27 mandatory; 64th Nationals 5–15 Dec 2026, hosted by KRSA; artistic and inline-freestyle schedules; Federation Cup Roller Derby 6–8 Sep 2026, Bikaner; Indian squad for World Skate Games 2026, Paraguay; speed selection trials at Noida | https://indiaskate.com/ | loaded |
| Delhi Skating Association (RSFI-affiliated state body) | https://indiaskate.com/delhi/ | loaded |
| Karnataka Roller Skating Association | via RSFI home page and Sree Ram Skating Club page | KRSA's own site **not checked** |
| rollerskatingfederationofindia.com | redirects to worldskateindia.com | **Not used** (unclear status); indiaskate.com calls itself the official RSFI site |

## 4. Where to skate

| Academy | URL | Facts used | Status |
|---|---|---|---|
| Delhi Skate Life (Delhi) | https://delhiskatelife.wordpress.com/ | Adult beginners and late starters; first-session skill list; helmet "non-negotiable"; pads | loaded (its own site, hosted on WordPress.com) |
| Chennai Skating Academy | https://chennaiskatingacademy.com/ | Speed, artistic, roller sports; quad and inline speed; group and personal sessions; over 8 years; age classes incl. Seniors 16+ fitness and recreational | loaded |
| The Skate Academy (Mumbai) | https://www.theskateacademy.in/ | Ajay Shivlani; teaching since 1991; inline and roller; beginners to elite; centres (Wadala, Bandra W, Ghatkopar E, Goregaon W, Andheri W, Santacruz W); corporate programme; *Hawaa Hawaai* (2014); world-ranking mentoring (2012) | loaded |
| Sree Ram Skating Club (Bengaluru) | https://www.sreeramasportsassociation.com/sree-ram-skating-club | Est. 2008; recognised by Karnataka govt, RSFI, KRSA, BDRSA; granite rink; roller and inline hockey | loaded. "Bengaluru" inferred from its BDRSA affiliation |

## 5. Left out (could not verify) or judgement calls

- **Royal Skaters Academy**: page returned HTTP 500, so excluded.
- **Jitendra / Guru Roller and Ice Skating Academies (Hyderabad)**: a blog-style site with competition news but no clear programme information, so not listed.
- **Chennai Sports Academy and Game Point (Hyderabad)**: found in search only, not checked, so not listed.
- **Public skate parks and outdoor skating spots** (e.g. in Bengaluru, Goa, Delhi): no official operator pages verified, so none listed.
- **63rd National Championships (2025)**: RSFI posted a postponement and clarification, and a third-party event in Visakhapatnam was described as not RSFI-approved. Left out to avoid confusion.
- **Spectator access** at RSFI events was not verified, so the page suggests asking your club.
- **World Skate Games 2026 dates and venue city**: not verified, so only "Paraguay" is stated.

## 5. Deep research (5 Oct 2026, batch deep5)

| Item | Source | Status |
|---|---|---|
| Measured inline rolling resistance: 4-wheel cart 7.25 + 31.8 kg; mean of 9 runs. 78A: asphalt 3.07 N (precision) / 3.98 N (semi-precision); concrete 2.38 / 3.71 N. 82A: asphalt 4.63 / 5.14 N; concrete 4.17 / 5.08 N. Wheel, bearing, surface effects significant (ANOVA) | S. A. Cartwright, *The effect of surface, wheel, and bearing type on the physiological response of in-line skating*, MSc thesis, McGill University, 1994 (eScholarship@McGill); full text read via index copy https://exa.ai/library/publication/3rvjgj2104k (5 Oct 2026). McGill catalogue search returned no direct record link | ✓ numbers read in Tables 30–31; Crr (F ÷ 39.05 × 9.81 = 0.006–0.013) and coast distances (v²/2Crr·g, 15 km/h) computed by us |
| Same thesis: VO2 differed significantly between bearing types (HR did not); no significant VO2/HR difference between 78A and 82A; concrete vs asphalt not significant physiologically | same | ✓ |
| Same thesis: inline stride length ~3.8–4.7 m nearly constant over 336–381 m/min (20–23 km/h); stride rate ~79–101 /min rose with speed; Marino (1977) same pattern on ice | same, Tables 15–20 + discussion | ✓ |
| Speed-skating mechanics: elite performance related to large work per stroke, long glide, horizontal push-off (van Ingen Schenau et al.; de Boer et al. 1986, 1987a) | as reviewed in the same thesis | secondary (literature review) |
| Roller vs ice: 8 trained marathon skaters; VO2, VE, HR not significantly different; power, work per stroke, stroke frequency equal; push-off effectiveness no difference; lower max roller speed due to higher friction; upper-leg angle 7.5° higher in gliding | de Boer, Vos, Hutter, de Groot, van Ingen Schenau, *Eur J Appl Physiol* 56:562–569 (1987), doi:10.1007/BF00635371 — author abstract at https://www.bisp-surf.de/Record/PU198807009950 (WebFetch 5 Oct 2026) | ✓ abstract |
| Grip limit tan θ = μ, v = √(μ g r) on r = 5 m with μ 0.8/0.5/0.3 → 39°/27°/17°, 22.6/17.8/13.8 km/h | standard physics, recomputed | μ values **illustrative** (stated) |
| Work per push = P ÷ push rate; glide per push = v ÷ push rate (60 and 80 per min) | computed from the page's existing power table | push rates illustrative (stated) |
| **RSFI on World Skate national federations** ("INDIA Roller Skating Federation of India (India Skate)", indiaskate.com) | https://www.worldskate.org/about/organisation/national-federations.html (curl 5 Oct 2026; same check as skateboarding deep5) | **✓ Verified** |
| RSFI notice 21 Sep 2026: MYAS 2026 affiliation letter; World Skate Games 2026 squad | https://indiaskate.com/official-recognition-renewal-issuance-of-2026-ministry-affiliation-and-world-skate-games-2026-participation/ | federation's own notice (labelled) |
| Delhi Skating Association page on RSFI site | https://indiaskate.com/delhi/ | ✓ listed by RSFI |
| ICP Level 1 course, LAZERXTECH track, Pune, 25–27 Mar 2016, six Indian instructors; post bylined "ICP Examiner Ajay Shivlani, India" | https://www.inlinecertificationprogram.org/blog/dedicated-coaches-complete-level-1-pune-india (WebFetch) | ✓ ICP's own blog (2016) |
| ICP "Meet our Examiners" (current): lists examiners from USA, Singapore, UK, Greece, Poland, Spain/Argentina, Indonesia, Spain, Brazil; **no Indian examiner** | https://www.inlinecertificationprogram.org/meet-our-examiners (curl 5 Oct 2026) | Shivlani's current ICP status **unverified**; ICP "Global Directory" not checked (login/JS) |
| The Skate Academy: "Led by Ajay Shivlani, an internationally certified coach"; centres; timeline (1991 teaching, 2012 three skaters to world ranking, 2014 *Hawaa Hawaai*) | https://www.theskateacademy.in/skate-academy-programs/ , https://www.theskateacademy.in/ , https://www.theskateacademy.in/our-story/ (WebFetch; session-package and contact details **not reproduced**) | School's claim |
| Chennai Skating Academy: classes by age; no affiliation or certification named | https://chennaiskatingacademy.com/ (WebFetch) | Accreditation: unverified |
| Sree Ram Skating Club: "recognized by govt of Karnataka, RSFI, KRSA, and BDRSA" | https://www.sreeramasportsassociation.com/sree-ram-skating-club (curl) | School's claim (badge changed to "Says RSFI-recognised") |
| Delhi Skate Life | https://delhiskatelife.wordpress.com/ (curl 200) | community; unverified |
| Seasons | no verified change; strip untouched | — |

### Accreditation labels on cards (5 Oct 2026)
- RSFI → ✓ World Skate list + Federation's notice (MYAS 2026); Delhi SA → ✓ Listed by RSFI; KRSA → ✓ Named by RSFI as Nationals host
- Delhi Skate Life → unverified; Chennai Skating Academy (×3) → unverified
- The Skate Academy (×3) → School's claim "internationally certified coach" + current certification unverified (ICP 2016 byline noted)
- Sree Ram Skating Club (×2) → School's claim — RSFI, KRSA, BDRSA
- 64th Nationals → ✓ RSFI championship; Federation Cup → ✓ RSFI event; World Skate Games → ✓ World Skate event + Federation's notice (squad)
