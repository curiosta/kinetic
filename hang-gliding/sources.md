# Hang Gliding: sources and verification log

Checks 30 Oct 2026 (IST). Every fact on the page comes from a source listed here or is standard physics worked out on the page. No prices, course fees, phone numbers or email addresses are reproduced. What a school says about itself is attributed to it. Numbers marked **illustrative** are round values chosen to show the physics, not measurements of a particular glider.

## 1. Physics (worked on the page)

| Item | Basis | Status |
|---|---|---|
| Glide distance = height × glide ratio: 300 m at 10 / 15 / 17 / 20 : 1 → 3.0 / 4.5 / 5.1 / 6.0 km | geometry, still air | recomputed |
| Lift L = ½ ρ v² S C_L: 110 kg on 14 m² needs C_L ≈ 1.04 at 40 km/h, ≈ 0.46 at 60 km/h | lift equation; mass and area **illustrative** | recomputed |
| Pitch and weight shift: ≈ 78 N·m example; tumble vs collapse comparison | statics; values **illustrative** | recomputed |
| Landing energy ½ m v² for groundspeeds in wind: 0.95 / 3.8 / 6.8 kJ | kinematics; **illustrative** speeds | recomputed |
| Load factor n = 1 ÷ cos(bank): 30° / 45° / 60° → 1.15 / 1.41 / 2.0; stall speed × √n: 30 → 32 / 36 / 42 km/h (+41% at 60°) | circular motion | recomputed |
| Weak link ≈ 1 g (90–100 kg ≈ 0.88–0.98 kN) | NZHGPA TM05 Aero-Tow Manual 2022, https://nzhgpa.org.nz/wp-content/uploads/2022/11/TM05-Aero-Tow-Manual-2022.pdf | loaded |
| Lab test points: 300 m, 15:1, 40 km/h, still air → 4.50 km, 0.74 m/s, 6.8 min, 15.0:1, paraglider 3.00 km; 20 km/h headwind → 2.25 km, 7.5:1; 60 km/h → 3.00 km, 10.0:1 | lab_hang-gliding.js | asserted in test-all.js |

## 2. Gliders, ratings and safety

| Item | Source | Status |
|---|---|---|
| Glider weight 45–90 lb, flown prone, typical 20–30 mph, glide up to 16:1 | USHPA, https://www.ushpa.org/USHPA_New/Public/LearnToFly/what.aspx | loaded |
| Topless ≈ 17:1, rigid ≈ 20:1, paraglider ≈ 10:1; landing area 15–60 m | Wikipedia, https://en.wikipedia.org/wiki/Hang_gliding (2006 figures) | loaded |
| How to become a pilot (US ratings) | USHPA, https://www.ushpa.org/Public/LearnToFly/become-a-pilot.aspx | loaded |
| Fatality reports exist but no exposure denominator; the page quotes no rate | USHPA, https://www.ushpa.org/Public/PilotResources/fatalities.aspx | loaded |
| IPPI Stages 1–5; IPPI card valid only alongside a national rating; "Turns, downwind flying and slow speeds close to the ground shall be strictly avoided" | CIVL SafePro Delta 2025, https://www.fai.org/sites/default/files/civl/documents/safepro_delta_2025.pdf | loaded (PDF) |
| UK pilot rating scheme | BHPA, https://bhpa.co.uk/safety/prs/ | loaded |
| FAI hang gliding commission | FAI · CIVL, https://www.fai.org/commission/civl | loaded in research; bot-blocked (403) on link check 30 Oct 2026 |

## 3. India

| Item | Source | Status |
|---|---|---|
| Aero Club of India: National Air Sports Control, FAI member; has a Paragliding & Hang Gliding commissioner | https://www.aeroclubofindia.com/ | loaded |
| SkyVentures, Rajasthan: says it is "the only place to learn Hang Gliding in India"; 5-day basic course, winch towing | https://skyventures.in/services/flying-school-paragliding-hang-gliding-paramotor-in-india/ | School's claim; Accreditation: unverified (page names no certifying body; ACI list could not be loaded) |
| PHAI (phai.co.in) | returned 404 on 30 Oct 2026 | not listed |
| No training season published for India | SkyVentures page | calendar row "no season published" |

## 4. Who's who and competition

| Item | Source | Status |
|---|---|---|
| Four Indian pilots in CIVL Class 1 ranking: Deepak Ingole (7th Guatemalan Super Fly Tournament IV 2025; 7th Guatemalan HG National Open 2026), Amit Mohan Sharma 25th, Sanjeev Kumar 26th, Nagaraj S 28th (Telomoyo Cup VIII 2024, Indonesia) | CIVL rankings, https://civlcomps.org/ranking/hang-gliding-class-1-sport-xc/pilots?1=0&nation_id=108 | loaded |
| 24th FAI Hang Gliding World Championship, Àger, Spain, 13–26 Jul 2025; no Indian on podium lists | FAI, https://www.fai.org/page/hg-class-1-world-champions | loaded in research; bot-blocked (403) on link check |
