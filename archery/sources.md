# Archery: sources and verification log

Checked 3 Oct 2026 (IST). Every fact on the page comes from the source listed here or is standard physics worked on the page. Coaching fees, membership charges, phone numbers and email addresses were deliberately **not reproduced**.

## 1. Physics (standard science, worked on the page)

| Item | Basis | Status |
|---|---|---|
| Stored energy ≈ ½ × draw force × power stroke; 8.75 in brace height; 75% to the arrow | linear-spring approximation; brace height and efficiency **illustrative** | recomputed (40 lb, 28 in → 43.5 J, 32.6 J, 57.1 m/s) |
| No-drag flight: t = d/v, drop ½gt², launch angle ½·asin(gd/v²), max range v²/g | projectile motion | recomputed (70 m → 1.23 s, 7.37 m, 6.1°; ≈ 330 m) |
| Angular size of the 10-ring; sight-pin lever 0.8 m | geometry; 0.8 m **illustrative** | recomputed (1.74 mrad; 1 mm → 88 mm) |
| Compound let-off 80% / 75% | **illustrative** values | recomputed |
| Archer's paradox, spine, fletching, breathing, crosswind drift, dry-fire warning | general archery and physics knowledge | qualitative only |

## 2. Governing bodies

| Item | URL | Status |
|---|---|---|
| World Archery: international federation for the Olympic sport; target archery up to 90 m, standard 70 m recurve and 50 m compound; five-colour target, 10 zones and colour values; recurve face 122 cm with 12.2 cm 10-ring; compound face 80 cm with 8 cm 10-ring, outer four rings usually removed; barebow 50 m on 122 cm | https://www.worldarchery.sport/sport/disciplines/target-archery | loaded |
| World Archery education: international judges need current accreditation for major events; coaching programmes from beginner to elite and coach trainers; courses in Lausanne, regional hubs and on request; beginner awards open to all; performance awards run by national federations | https://www.worldarchery.sport/sport/education | rendered in headless Chrome |
| AAI: founded 8 Aug 1973; registered under the Societies Registration Act; recognised by MYAS; affiliated to World Archery, World Archery Asia, SAAF, IOA; recurve, compound, Indian round, para; 35 state/UT associations + 9 sports boards/institutions; pathway via national championships, NRATs and selection trials | https://www.indianarchery.org/about | rendered in headless Chrome (JS site; indianarchery.info redirects here) |
| AAI calendar 2026: West Zone Level-1 Coaches Workshop, Nadiad, 12–15 Oct (Gujarat State Archery Association); 46th NTPC Junior National (recurve, compound, Indian round), Jagatpura Shooting Range, Jaipur, 21–28 Oct (Rajasthan Archery Association); senior Indian round, compound and recurve nationals, Shillong, 11–18 Nov (Archery Association of Meghalaya); 4th NTPC NRAT, Gangtok, 21–30 Nov; Asia Cup World Ranking Tournaments (Sulaymaniyah, Hangzhou) | https://www.indianarchery.org/calendar | rendered in headless Chrome; corrected 5 Oct 2026: dates re-read with the calendar rendered in IST (the AAI page shows dates in the viewer's time zone, so a UTC render had shown each one a day early) and cross-checked with the Rajasthan Archery Association calendar 2026-27 (https://rajasthanarchery.com/calender-2026-27/) |
| AAI member units; registered archers | https://www.indianarchery.org/organization/member-unit · https://www.indianarchery.org/registered-archers | HTTP 200 (JS pages; content of the member list not reproduced) |

## 3. Places and programmes

| Item | URL | Status |
|---|---|---|
| DDA Yamuna Sports Complex: coaching for members and non-members in sports including archery | https://dda.gov.in/yamuna-sports-complex | loaded. Coach name, timings, fees and phone **not reproduced** |
| DDA Archery Promotion Scheme: launched July 2015 at Yamuna Sports Complex; boys and girls selected through trials advertised in the media | https://dda.gov.in/nuturing-sports-talent | loaded. Kit/stipend details not used |
| Tata Archery Academy, Jamshedpur: formally inaugurated 4 Oct 1996; residential centre of excellence; archery ground at the JRD Tata Sports Complex | https://www.tatasteel.com/corporate/our-organisation/sports-19/ and https://www.tata.com/newsroom/community/tata-archery-academy-25-years | loaded |

## 4. Not verified / left off

- **Khelo India "Delhi Archery Academy"** page (web.kheloindia.gov.in) did not respond to our fetchers. **Not listed.**
- **Tata Archery Academy trial criteria** (age, height) were only in a 2024 news report. **Not stated.**
- **World Archery rulebook pages** (rulebook.worldarchery.org) did not load, so no rule-article details beyond the target-archery page are used.
- **Indoor 18 m face sizes** were not checked, so they aren't given (18 m appears only as a lab distance).

## 5. Deep research (5 Oct 2026, batch deep6)

| Item | Source | Status |
|---|---|---|
| Static spine test: shaft on supports 28 in apart, 1.94 lb (880 g) weight at the centre; sag in thousandths of an inch = spine number (lower = stiffer) | Easton Archery, *Making sense of arrow spine*, https://eastonarchery.com/2014/07/making-sense-of-arrow-spine/ ; ASTM F2031-05(2014) *Standard Test Method for Measurement of Arrow Shaft Static Spine*, https://store.astm.org/f2031-05r14.html (store page shows the standard as withdrawn, 2023) | ✓ maker's page + ASTM store page |
| Spine → bending stiffness EI = F L³ ÷ 48δ (F = 8.63 N, L = 0.711 m): 700 → 3.6, 600 → 4.2, 500 → 5.1, 400 → 6.4 N·m² | simple-beam formula, computed by us | computed; "typical use" column is a rule of thumb (stated) |
| Arrow drag measured in JAXA magnetic-suspension wind tunnel and free flight: Cd ≈ 1.5 with laminar boundary layer, ≈ 2.6 turbulent; transition depends on speed, point and vanes | T. Miyazaki et al., *Aerodynamic properties of an archery arrow*, *Sports Engineering* 16:43–54 (2013) — abstract https://www.bisp-surf.de/Record/PU201304002489 | ✓ abstract |
| Speed loss v = v₀e^(−kx), k = ρCdA ÷ 2m, and crosswind drift by the ballistic "lag time" rule, for the page's 20 g arrow at 57.1 m/s, 5.5 mm shaft (illustrative), 3 m/s wind: 70 m ≈ 14 / 25 cm | computed by us | computed; shaft diameter and wind **illustrative** (stated) |
| **AAI: World Archery member association, status Active** ("Archery Association of India", NOC IND, World Archery Asia) | World Archery API, https://api.worldarchery.sport/?v=3&content=MEMBERASSOCIATIONS&RBP=200 (curl 5 Oct 2026) | **✓ Verified** |
| AAI on the IOA's member list | https://olympic.ind.in/members/ (curl 5 Oct 2026) | **✓ Verified** |
| **Tata Archery Academy, Jamshedpur (Recurve)** on Khelo India's "State-wise – Academies accredited under Khelo India" | https://dashboard.kheloindia.gov.in/public/front/assets/Khelo_India_Academies_State_wise_td.pdf (curl 5 Oct 2026) | **✓ Verified** |
| DDA Yamuna Sports Complex coaching; DDA Archery Promotion Scheme | DDA's own pages (already cited) | ✓ government (coach certification not stated) |
| Seasons | no verified change; strip untouched | — |

### Accreditation labels on cards (5 Oct 2026)
- AAI → ✓ World Archery member association (Active) + ✓ On the IOA's member list; AAI member units → ✓ Listed by the AAI; AAI register → ✓ AAI register
- DDA Yamuna Sports Complex → ✓ Government sports complex (DDA) + "Coach certification: not stated"; DDA scheme → ✓ Government scheme (DDA)
- Tata Archery Academy → ✓ Khelo India accredited (recurve)
- AAI West Zone coaches workshop → ✓ AAI calendar; World Archery coach education → ✓ World Archery programme
- Accreditation key callout added under "Where to train".
