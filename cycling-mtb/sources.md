# Cycling & Mountain Biking: sources and verification log

Base checks 3 Oct 2026 (IST); deep5 pass 5 Oct 2026 (IST). Every fact on the page comes from the source listed here or is standard physics worked on the page. Fees, phone numbers and email addresses were deliberately **not reproduced**.

## 1. Physics (standard science, worked on the page)

| Item | Basis | Status |
|---|---|---|
| P = v(C<sub>rr</sub> m g cos θ + m g sin θ) + ½ρC<sub>d</sub>A v³; ρ = 1.2 kg/m³; no drivetrain loss or wind | mechanics; C<sub>d</sub>A 0.27/0.32/0.60 m² and C<sub>rr</sub> 0.005/0.012/0.025 **illustrative** | solved numerically in Python and in the lab JS (200 W, 85 kg, flat, hoods → 33.9 km/h, about 80% to drag) |
| Climbing: 8%, 85 kg, 200 W → 10.0 km/h, 92% to climbing, ≈ 796 m/h | same model | recomputed |
| Gear ratio × circumference (2.1 m road, 2.3 m 29-inch MTB) × cadence | geometry; circumferences approximate | recomputed |
| Stopping distance v·t + v²/(2a), 0.5 g, 1 s reaction; tip-over limit ≈ g × (horizontal CoM–front contact)/(CoM height) | mechanics; geometry **illustrative** | recomputed |
| Drop landing: v = √(2gh), average deceleration h/s (in g) | mechanics | recomputed |
| Drafting and slower-moving wake | general aerodynamics | qualitative only, no percentage claimed |

## 2. Governing bodies

| Item | URL | Status |
|---|---|---|
| UCI and its disciplines (road, track, mountain bike, BMX racing, BMX freestyle, trials, cyclo-cross, indoor, para-cycling) | https://www.uci.org/ | loaded (discipline list from site navigation) |
| Cycling Federation of India: affiliated to IOA, Asian Cycling Confederation and UCI; sole body recognised by MYAS; mission includes national championships for senior and junior men and women and an inter-state championship; MTB selection committee | https://www.cfiindia.in/about-1 | loaded |
| CFI licence procedure (licence guidelines, licence form 2025) | https://www.cfiindia.in/license-procedure | loaded (Wix page; documents not opened) |
| CFI online coaching course and list of Level 1 certified coaches | https://www.cfiindia.in/online-coaching-course-2024 | loaded |
| CFI MTB events page ("Events conducted in National MTB Championships") | https://www.cfiindia.in/mtb-events | loaded |
| Audax Club Parisien: Paris club founded 1904; BRM, Paris-Brest-Paris | https://www.audax-club-parisien.com/en/ | loaded |
| Audax India Randonneurs: recognised by ACP to conduct and oversee all BRMs and Audax events in India; first Indian brevet 200 km in Mumbai on 31 Jan 2010 | https://www.audaxindia.in/ | loaded |

## 3. Rides, events and courses

| Item | URL | Status |
|---|---|---|
| AIR calendar 2026: time limits 100 km 7.5 h, 200 km 13.5 h, 300 km 20 h, 400 km 27 h, 600 km 40 h, 1,000 km 75 h, 1,200 km 90 h; a rider who completes a 200 km event is a randonneur; PBP 1,230 km in 90 h, every 4 years; Oct 2026 BRMs from 100 to 1,200 km across Indian cities | https://www.audaxindia.in/events-ec-2026 | loaded |
| Fit India Sundays on Cycle: MYAS with CFI, Raahgiri Foundation and MY Bharat; across all states and UTs through the SAI and Khelo India network; 88th edition on 30 Aug 2026 at 25,000+ locations; "weekly cycling movement" | https://www.pib.gov.in/PressReleasePage.aspx?PRID=2304633&lang=1&reg=48 | loaded (PIB, 30 Aug 2026) |
| Tour of the Nilgiris 2026: pre-tour briefing 5 Dec, flag-off 6 Dec, last day 12 Dec; 7 days, 700+ km, Karnataka–Kerala–Tamil Nadu; fully supported (transport, food, accommodation, cycle maintenance, medical backup); first event 2008 | https://www.tourofnilgiris.com/ | loaded (registration amounts **not reproduced**) |
| NIM Mountain Terrain Biking course: techniques, skills and safety protocols for rugged terrain; for beginners and experienced riders; physical-conditioning recommendation | https://www.nimindia.net/mtbcourse | loaded (no duration or dates published on the page) |
| National MTB Championship: about 800 cyclists at Mahendragiri, Gajapati district, Odisha; four days; under CFI; hosted by Odisha Cycling Association | https://timesofindia.indiatimes.com/city/bhubaneswar/800-cyclists-converge-on-mahendragiri-for-national-mtb-championship/articleshow/134622002.cms | loaded (TOI, 2 Oct 2026) |

## 4. Not verified / left off

- **cyclingfederationofindia.org** now serves an unrelated gambling page. The page uses CFI's current site, cfiindia.in.
- **MTB Himalaya** (mtbhimalaya.com) now serves an unrelated betting site. **Not listed.**
- **Manali–Leh**: only Wikipedia and commercial tour sites were found, with no official source for route, altitudes or season. **Not listed.**
- **CFI event calendar 2026–27** is an embedded document we couldn't read, so no other national championship dates are given.
- **ABVIMAS**: no mountain-biking course with a stated duration was found. **Not listed.**
- **Super Randonneur** definition: the AIR page didn't load (404), so it isn't stated.
- **Fit India site** (fitindia.gov.in) didn't respond to our fetchers; the page links the PIB release instead.

## 5. Deep research (5 Oct 2026, batch deep5)

| Item | Source | Status |
|---|---|---|
| Rolling-power table (C<sub>rr</sub> 0.003/0.005/0.008/0.012 at 30 km/h, 85 kg → ≈21/35/56/83 W); 200 W hoods speed 35.0/33.9/32.4 km/h for C<sub>rr</sub> 0.003/0.005/0.008 | same model as the lab, recomputed in Python (deep5/edit_cycling.py numbers) | C<sub>rr</sub> values **illustrative ranges** |
| Roughness resistance ("impedance"/"suspension losses"): depends mainly on road roughness (IRI) and vertical stiffness of bike + tyre; on moderately rough roads larger than rolling resistance; wider/softer tyres or compliant frames reduce it; optimal pressure P<sub>max</sub> only on smooth roads | M. M. Turner, "Cycling on rough roads: A model for resistance and vibration", arXiv:2405.00019 — https://arxiv.org/abs/2405.00019 (read 5 Oct 2026) | qualitative on page; no numbers lifted |
| Crossover v = √(2 C<sub>rr</sub> m g / (ρ C<sub>d</sub>A)): ≈17 km/h road hoods; ≈19 km/h MTB gravel; ≈27 km/h MTB dirt | mechanics, recomputed | ✓ |
| Chain-drive efficiency ≈81% to 98.6%, set mainly by chain tension and sprocket size; lubricant no lab difference on a clean chain | Spicer et al., "Effects of Frictional Loss on Bicycle Chain Drive Efficiency", ASME J. Mech. Des. 123:598–605 (2001); Johns Hopkins news release Aug 1999 https://pages.jh.edu/news_info/news/home99/aug99/bike.html (via search, 5 Oct 2026) | JHU release (19 Aug 1999) read via WebFetch 5 Oct 2026: best 98.6%, worst 81%; larger sprocket and higher tension → higher efficiency; lubricant no significant difference on clean new chain in lab (role outdoors: keep dirt out); study funded by Shimano. Speed table recomputed (100/98/95% → 33.9/33.7/33.3 km/h) |
| Drafting: small in-line groups 70–50% of solo drag (earlier studies); mid-rear of 121-rider peloton 5–10% | Blocken et al. 2018, J. Wind Eng. Ind. Aerodyn. 179:319–337, doi:10.1016/j.jweia.2018.06.011 — TU/e research portal abstract https://research.tue.nl/en/publications/aerodynamic-drag-in-cycling-pelotons-new-insights-by-cfd-simulati/ | abstract read 5 Oct 2026; power table (217/164/129/58 W at 35 km/h) recomputed |
| Air density by altitude/heat (ISA): 1.23 / 1.15 (35 °C) / 1.12 (920 m) / 0.99 (2,200 m) / 0.86 (3,500 m) kg/m³ → 33.7/34.4/34.7/36.0/37.5 km/h at 200 W | International Standard Atmosphere, recomputed; caution added that power falls at altitude/heat | ✓ |
| Headwind: 25 km/h ground, 15 km/h headwind → ≈194 W vs ≈93 W still air | mechanics, recomputed | ✓ |
| **CFI on ACC affiliated-federations list** ("India IND Cycling Federation of India", Appendix 1); ACC constitution Art. 4.3: ACC membership automatic with UCI membership | https://www.accasia.org/wp-content/uploads/2025/07/ACC-Constitution_Version-2020_Final.pdf (WebFetch 5 Oct 2026) | **✓ Verified** (UCI link via ACC) |
| UCI federation directory | https://www.uci.org/continental-confederations-and-national-federations/5S9ciqjP6n8HUeIdnBR5qq | interactive page; India entry **did not render** in curl or headless Chrome — not claimed directly |
| ACC national-federations page | https://www.accasia.org/national-federations/ | page 1 only via WebFetch (India on a later page); bot challenge to curl |
| **Audax India Randonneurs on Les Randonneurs Mondiaux member countries** ("INDIA - AUDAX INDIA RANDONNEURS") | https://www.randonneursmondiaux.org/52-Country_Organizations.html?langue=EN (curl 5 Oct 2026) | **✓ Verified** |
| ACP: LRM gathers all its BRM representatives | https://www.audax-club-parisien.com/en/our-organizations/brm-world/ (curl 5 Oct 2026) | loaded |
| NIM: President = Union Defence Minister; Vice-President = Uttarakhand CM; institute proposed by MoD and UP govt in 1964 | https://www.nimindia.net/ (curl 5 Oct 2026) | ✓ Government institute (same label as skiing page) |
| MTB Shimla 2026: 13th edition, 23–25 Oct 2026, Shimla; since 2012 | https://hastpa.com/events/ and https://hastpa.com/events/mtb-shimla/ (WebFetch 5 Oct 2026) | loaded; federation sanction 2026 **unverified** |
| MTB Shimla 2025: with Himachal Tourism + Cycling Association of Himachal Pradesh; 120 km; 20 km heritage ride | ANI via LatestLY, 15 May 2025 https://www.latestly.com/agency-news/india-news-12th-mtb-shimla-set-to-enthral-cyclists-across-india-6857392.html | news only |
| Himalayan Terra Pro MTB Camp, Manali: 6 days, beginner/intermediate, 2026 camps May–June, 3–4 h riding/day, "experienced mountain bike coaches" | https://www.himalayanterra.com/pro-mtb-camp (WebFetch 5 Oct 2026; price **not reproduced**) | School's claim; accreditation unverified |
| Into Wild Himalaya beginner MTB course, Kalath/Old Manali: 6 days, 1:5 ratio, 12+, "certified mountain biking instructors", school-issued basic MTB certificate | https://iwhexpeditions.com/tour/beginner-mountain-biking-course-manali/ (WebFetch 5 Oct 2026; price **not reproduced**) | School's claim; no body named |
| GoodWave MTB skills sessions, Bengaluru: monthly, 3–4 h, max 10, with CrankMeister Bicycle Works and Loose Riders India | https://www.goodwave.in/mtb-skills (WebFetch 5 Oct 2026) | Accreditation unverified |
| Seasons | MTB Shimla 23–25 Oct 2026 was added to build/seasons.py by the **concurrent calendar-events batch** (not deep5); deep5 added only a prose line in "When to go" | strip not hand-edited |

### Accreditation labels on cards (5 Oct 2026)
- Fit India Sundays on Cycle → ✓ Government programme (PIB)
- AIR 100 km brevets / Audax India BRMs → ✓ On Les Randonneurs Mondiaux member list
- Tour of the Nilgiris → Accreditation: unverified (organiser's site only)
- NIM MTB course → ✓ Government institute (NIM); CFI/UCI course stamp: none claimed
- Himalayan Terra → School's claim — "experienced mountain bike coaches"; Accreditation: unverified
- Into Wild Himalaya → School's claim — "certified instructors"; own course certificate; Accreditation: unverified
- GoodWave → Accreditation: unverified
- CFI MTB events / CFI licence → ✓ CFI (on ACC list); CFI coaching → ✓ CFI coach list
- MTB Shimla 2026 → Federation sanction for 2026: unverified
- National MTB Championship → News report — CFI championship
