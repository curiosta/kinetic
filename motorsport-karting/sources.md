# Karting & Motorsport: sources and verification log

Base checks 4 Oct 2026 (IST); deep5 pass 5 Oct 2026 (IST), section 5. Every fact on the page comes from a source listed here or is standard physics worked out on the page. Prices, rate cards, course fees, entry fees, bank details, phone numbers and email addresses shown on the tracks', schools' and federations' pages were deliberately **not reproduced**. What a track, school or organiser says about itself is attributed to it. The page covers closed tracks only, never public roads.

## 1. Physics (worked on the page)

| Item | Basis | Status |
|---|---|---|
| Friction model F ≤ μN; friction circle: grip left for cornering = √(1 − b²): 0 / 50 / 80 / 100% braking → 100 / 87 / 60 / 0% | Coulomb friction, vector addition; μ = 1.2 **illustrative** | recomputed |
| Slip angle: a cornering tyre runs a few degrees off its pointing direction; force rises to a peak, then falls as the tyre slides | general tyre mechanics, qualitative | n/a |
| Limit corner speed v = √(μ g r): r 10 / 20 / 30 / 60 / 120 m → 39 / 55 / 68 / 96 / 135 km/h (μ 1.2), 32 / – / 55 / 78 / 110 km/h (μ 0.8); 150 kg at 68 km/h on 30 m → ≈ 1,780 N | circular motion | recomputed |
| Weight transfer ΔF = m a h ÷ L: 1,000 kg, h 0.5 m, L 2.5 m: 0.5 / 1.0 / 1.2 g → ≈ 980 / 1,960 / 2,350 N | statics; car values **illustrative** | recomputed |
| Karts have no differential (solid rear axle) and rely on chassis flex lifting the inside rear wheel | general kart engineering, qualitative | n/a |
| Racing line for a 90° bend: largest arc radius R = a + w/(1 − 1/√2) ≈ a + 3.41 w; a 5 m, w 8 m → 32.3 m; speeds at μ 1.2: 5 m → 28 km/h, 9 m → 37 km/h, 32.3 m → 70 km/h | geometry (derived) | recomputed |
| Braking d = v² ÷ (2μg), t = v ÷ (μg): 60 / 100 / 150 / 200 km/h → 11.8 / 32.8 / 73.7 / 131.1 m (μ 1.2), 17.7 / 49.2 / 110.6 / 196.6 m (μ 0.8); 1.42 / 2.36 / 3.54 / 4.72 s | kinematics | recomputed |
| Neck load: 6 kg head + helmet (**rough, illustrative**) × 1.2 g ≈ 7.2 kg-force | F = m a | recomputed |
| Downforce ½ ρ ClA v², ρ 1.2, ClA 3 m², 700 kg (**illustrative**): 100 / 150 / 200 / 250 km/h → 1,389 / 3,125 / 5,556 / 8,681 N = 0.20 / 0.46 / 0.81 / 1.26 × weight; 100 m corner μ 1.2 → 124 km/h without, 149 km/h with (1.74 g) | v² = μ g r ÷ (1 − μ ρ ClA r ÷ 2m) | recomputed |
| Tyre temperature and hysteresis: grip depends on rubber temperature, with a working range | general polymer physics, qualitative | n/a |
| Lab test points: default 68 km/h, 1.20 g, 2.51 s, 32.8 m, 2.36 s, no wings; 120 m → 135 km/h, 5.02 s; 700 kg (no wings) → unchanged; 100 m, ClA 3, 700 kg, 200 km/h → 149 km/h, 1.74 g, 3.81 s, 131.1 m, 4.72 s, 0.81 × weight; 150 kg, 150 m, μ 1.8, ClA 4, 100 km/h → no limit in this model, 21.8 m, 1.57 s, 1.26 × | lab_motorsport-karting.js | asserted in test-all.js |

## 2. Licences and governing bodies

| Item | Source | Status |
|---|---|---|
| FMSCI is India's FIA member ("THE FEDERATION OF MOTOR SPORTS CLUBS OF INDIA", Sport & Mobility) | FIA members, https://www.fia.com/members/region/asia-6/country/IN | loaded |
| FMSCI licence portal lists: eSports; One Event; Club Sport / National / International; 2W Team Entrant; 4W Team Entrant; 4W International Individual Entrant | https://lic.fmsci.co.in/ | loaded via WebFetch (all FMSCI hosts refuse TLS from the build box) |
| FMSCI warning: licence holders must not take part in unauthorised events, which have no insurance, no track safety, no police permissions, no crowd control | https://grassroots.fmsci.co.in/ (FMSCI home page) | loaded via WebFetch |
| FIA Appendix L 2026 (published 24 June 2026): grades G (karting OK Junior etc.; ages 11–14 by its birthday rules), F (OK Senior non-gearbox; 13–15), E (14+); circuit D (> 3 kg/hp, age 16+, after Grade E or a similar national licence and ≥ 5 ASN-sanctioned competitions), C (2–3 kg/hp, 16+), B (1–2 kg/hp), A (≤ 1 kg/hp); FIA Super Licence: current Grade A, age 18 (17 at FIA discretion), qualifying criteria | https://www.fia.com/system/files/documents/appendix_l_2026_publie_le_24_juin_2026.pdf | downloaded and read |
| FIA Karting "How to start": licences issued by ASNs; national (a day to a year) or international; international needs a medical; three International Karting grades G (12–14), F (14, non-gearbox only), E (15+); unauthorised events → sanctions and revocation | https://www.fiakarting.com/page/how-start | loaded (rendered) |
| FIA Karting 2025 licence chart (G / F / E by birth year) | https://backend.fiakarting.com/sites/default/files/2025%20G-F-E_KartingLicenses.pdf | downloaded and read (not linked; the How-to-start page is linked instead) |
| Meco FMSCI Indian National Karting Championship 2026 – RMC India: licences issued by an ASN that is a CIK/FIA member; a valid National karting licence or International karting grade required; classes Micro MAX 8–11, Mini MAX 10–13, Junior MAX 12–15, Senior MAX 14+; mandatory medical insurance for FMSCI national championship events | Sporting regulations PDF linked from https://www.mecomotorsports.co.in/ | downloaded and read |

## 3. Where to drive

| Item | Source | Status |
|---|---|---|
| Meco Kartopia, Bengaluru: inaugurated 24 May 2015, 10 acres, built to international standards, FMSCI-approved; recreational karts Level 1 (7 bhp), Level 2 Rotax (9 bhp), Levels 3–4 "coming soon"; Monday holiday | https://www.mecomotorsports.co.in/Mecokartopia | loaded (rendered) |
| Meco's other recreational tracks: Chicane Circuit (Secunderabad), Kartainment (Shamshabad Airport, Hyderabad) | https://www.mecomotorsports.co.in/ | loaded |
| Meco Karting Academy: started 2003; basic licence programmes to intensive training; 2 days at Meco Kartopia; course contents; age groups Micro 8–12, Junior 12–15, Senior 15+ | https://www.mecomotorsports.co.in/karting | loaded (rendered) |
| Meco Racing Academy: 2 days at Kari Motor Speedway, Coimbatore; 15+; FLGB 1300, FLGB F4 and Polo cars; six theory and six practice sessions | https://www.mecomotorsports.co.in/racing | loaded (rendered) |
| 2026 national karting calendar: Round 1 27–28 June (COASTT, Coimbatore) … Round 6 17–18 Oct (Meco Kartopia) | https://www.mecomotorsports.co.in/ | loaded |
| CTR-JK Tyre FMSCI Indian National Car Racing Championship 2026: since 1997; rounds 11–13 Sep and 23–25 Oct (Kari Motor Speedway), 13–15 Nov (BREN Raceway, Bengaluru), 11–13 Dec (Madras International Circuit, Chennai) | https://www.jktyremotorsport.com/media/ctr-jk-tyre-fmsci-indian-national-car-racing-championship-2026-unveiled-one-nation-one-championship , https://www.jktyremotorsport.com/calendar | loaded (rendered) |
| Buddh International Circuit: 16 corners; Open Time Trial and Arrive & Drive for your own car or motorbike, briefing by an instructor; drivers need a driving licence, closed shoes and a helmet, riders full armoured leathers; calls itself India's only Formula One race track; open Mon–Sat 9 AM–6 PM | https://www.buddhinternationalcircuit.in/ , https://www.buddhinternationalcircuit.in/experiences/ | loaded |

## 4. Checked and left off (or softened)

- **FMSCI licence grade details** (karting Grassroot/ClubSport/National Mini and Regular, 4W National Racing Licence, ages, academy-certificate requirement): only found in third-party pages and in FMSCI PDFs on images.fmsci.co.in, which the build box cannot reach. The page names only the licence types the official portal lists, and the karting licence wording from the 2026 championship regulations.
- **Kari Motor Speedway**: its domain (karimotorspeedway.com) is parked, so it is not linked; the track is named via Meco's academy page and the JK Tyre 2026 calendar.
- **Madras International Circuit / MMRT and MMSC**: the club's website (madrasmotorsports.com) showed a maintenance page on 4 Oct 2026, so it is not linked; the circuit is named via the JK Tyre 2026 calendar. "MMRT" and the club's track-day and karting offers could not be verified and are not described.
- **BREN Raceway, COASTT and MIKA**: named only as championship venues, as listed by their organisers; no official sites were checked.
- **Other racing schools and rental karting chains**: not verified, so not listed.
- **Buddh International Circuit's F1 history**: described only in the circuit's own words ("India's only Formula One race track").
- All prices, fees, insurance amounts, rate cards and contacts.

## 5. Deep research (5 Oct 2026, batch deep5)

| Item | Source | Status |
|---|---|---|
| Load sensitivity: axle 4,000 N, μ linear 1.3 @1,000 N → 1.1 @3,000 N; totals 4,800 / 4,750 / 4,600 / 4,000 N (0 / −1 / −4 / −17%) | teaching model, computed | μ(N) **illustrative** (stated on page) |
| Solid rear axle: outside-wheel extra distance = T/(r − T/2), T = 1.1 m → 25/12/6/3% at 5/10/20/40 m; +T·π/2 ≈ 1.7 m per 90° | geometry, computed | track width illustrative |
| Reaction distance v·t at 1.0/1.5 s + braking from existing table (μ 1.2) | computed | ~1 s stated as rule of thumb |
| Top speed from P·0.85 = ½ρCdAv³ + Crr·m·g·v, 150 kg, CdA 0.6, Crr 0.02, ρ 1.2 → 79/87/101/129 km/h for 7/9/14/28 bhp | computed (bisection) | all inputs illustrative; caveat about gearing/limiters on page. Lab outputs untouched |
| **FMSCI on FIA members list** ("THE FEDERATION OF MOTOR SPORTS CLUBS OF INDIA", Sport & Mobility) | https://www.fia.com/members/region/asia-6/country/IN (WebFetch 5 Oct 2026) | **✓ Verified** (recheck) |
| FIA licensed circuits, updated 2026-03-31: MADRAS IND Grade 2, 3.117 km, expiry 21.07.2026; KARI MOTOR SPEEDWAY IND Grade 4, 2.2 km, expiry 31.12.2027; no other Indian circuit (no Buddh, no BREN) | https://www.fia.com/sites/default/files/circuits_fia20260331_0.pdf (curl + pdftotext 5 Oct 2026) | ✓ Kari Grade 4; Madras licence date passed — **renewal unverified** (no later list found); Buddh **not listed** |
| FIA Karting homologated circuits (Nov 2025 edition): "Madras International Karting Arena, IND, Chennai, 1172 m, licence 1167, 07.04.2028, 1C" — the only Indian entry | https://www.fiakarting.com/sites/default/files/2025-11/Homologations_circuits_Liste_WEB.pdf (curl + pdftotext) | **✓ Verified**; Meco Kartopia not listed |
| MIKA to host FIA-CIK Arrive and Drive round, Sept 2026 (announced 12 Mar 2026 by MMSC VP Vicky Chadhok) | UNI India, https://www.uniindia.com/south-india/sports-motorsport-international-karting/15753 | news report; **not confirmed held**; madrasmotorsports.com/mika = maintenance page |
| Turbo Track, Sector 58 Gurugram: 800 m; Levels 1–3 rated 70/95/120 km/h; "Built with JK Tyre Motorsport expertise and aligned with FMSCI standards" | https://www.turbotrack.org/ (WebFetch; **prices not reproduced**) | Track's claim; unverified |
| Meco Kartopia "FMSCI-approved" | Meco page (base check 4 Oct) | now labelled Track's claim; badge → "Says FMSCI-approved" |
| FMSCI website / calendar / track approvals | fmsci.co.in curl 000 (5 Oct 2026); SPA calendar | **unreachable**; sanction of championships shown as organiser's claim |
| F9 Go Karting (Gurgaon), Speedomania | f9gokarting.com (WebFetch: addresses only, no track or safety detail); speedomania.in no response | not listed |
| Seasons | no verified change; strip untouched (concurrent calendar batch owns strips) | — |

### Accreditation labels on cards (5 Oct 2026)
- FMSCI → ✓ FIA members list; licence portal → ✓ FMSCI official; FIA Karting how-to / Appendix L / FIA Karting → ✓ FIA official
- Meco Kartopia → Track's claim — FMSCI-approved; Meco Chicane & Kartainment → unverified; Turbo Track (new) → Track's claim + unverified
- Meco Karting Academy → School's claim — licence programmes + unverified
- Meco FMSCI NKC / RMC India → Organiser's regulations + ✓ MIKA on FIA Karting list
- Meco Racing Academy → ✓ Kari Motor Speedway FIA Grade 4 + course unverified
- JK Tyre INRC → Organiser's announcement + ✓ Kari FIA Grade 4 (Madras renewal unverified; BREN not listed)
- Buddh International Circuit → Circuit's claim + no current FIA circuit licence listed
- MIKA (new site card) → ✓ FIA Karting homologated (1C)
