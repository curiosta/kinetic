# Sailing: sources and verification log

Checked 4 Oct 2026 (IST). Every fact on the page comes from a source listed here or is standard physics worked out on the page. Course prices, phone numbers and email addresses were deliberately **not reproduced**, even where a source page shows them. Claims a club makes about itself are attributed to that club.

## 1. Physics (worked on the page)

| Item | Basis | Status |
|---|---|---|
| Lift F = ½ρV²AC_L; ρ_air 1.225 kg/m³; 1 kn = 0.514 m/s; 7 m², C_L 1.0 → 41 / 163 / 368 N at 6 / 12 / 18 kn; 10 m² at 12 kn → 233 N | aerofoil lift equation; C_L and area **illustrative** | recomputed |
| Sail turns the flow; pressure difference = lift; no "equal transit" requirement | standard aerodynamics | n/a |
| Apparent wind AWS = √(TWS² + BS² + 2·TWS·BS·cos TWA); AWA = acos((TWS·cos TWA + BS)/AWS); 12 kn at 90° with BS 0/3/5/8 → 12.0/12.4/13.0/14.4 kn at 90/76/67/56°; 8 kn + 6 kn → 10 kn at 53° | vector addition | recomputed |
| Drive = F·sin AWA, heel = F·cos AWA (lift only, no drag); lab limited to TWA 40–90° so heel ≥ 0 | simplified model, **illustrative**, stated on the page | recomputed |
| Beat: distance = 1/cos θ (1.31/1.41/1.56/2.00 km at 40/45/50/60°); VMG = BS·cos θ with illustrative speeds 3.6/4.0/4.3/4.8 kn → 2.76/2.83/2.76/2.40 kn; 45° no-go figure | trigonometry; speeds and the 45° figure **illustrative** (labelled "typical figure for a dinghy" / "our examples") | recomputed |
| Water 1025 vs air 1.225 kg/m³ (≈ 840×); board 0.25 m², C_L 0.3 → 10 / 92 / 254 N at 1 / 3 / 5 kn; 41 N at 2 kn; air at 13 kn 27 Pa vs water at 5 kn 3,391 Pa (≈ 124×) | lift equation; board values **illustrative** | recomputed |
| Heeling moment = heel × 2.5 m; crew kg = moment / (9.81 × arm): 74 N → 185 N·m → 19 kg; 244 N → 610 N·m → 62 kg; 18 kn close-hauled 439 N → 1,098 N·m → 112 kg; 610 N·m at 1.5 m → 41 kg | statics; lever and arm **illustrative** | recomputed |
| Hull speed: deep-water wave speed v = √(gλ/2π) → 1.25√L m/s = 2.43√L kn (= 1.34√L_ft); 3/4/5/6 m → 4.2/4.9/5.4/6.0 kn; 9 m → 7.3 kn | wave dispersion relation | recomputed |
| Lab test points: default 13.0 kn, 67°, 192 N, 177 N, 74 N, 19 kg; 45° → 15.9 kn, 32°, 288, 153, 244 N, 62 kg; BS 0 → 12.0 kn, 45°, 163, 116, 116 N, 29 kg; TWS 18 → 368, 260, 260 N, 66 kg | lab_sailing.js | asserted in test-all.js |

## 2. Courses and bodies

| Item | Source | Status |
|---|---|---|
| YAI Small Boat Sailing Scheme: Basic Skills 1–3, Day Sailing, Racing Skills | https://trg.yai.org.in/training/small-boat-schemes.html | loaded |
| BS1: novices, no prerequisites; clothing and safety equipment; parts of the boat; steering and crewing in light winds under supervision; reaching course; basic rules; wind direction | https://trg.yai.org.in/training/small-boat-schemes/basic-skills-1.html | loaded |
| BS2: sail without guidance in light winds, enclosed waters; tacking and gybing on a triangle course; right-of-way rules; storm clouds | …/basic-skills-2.html | loaded |
| BS3: needs BS2 or equivalent; roll tack/gybe, spinnaker, trapeze in light–moderate winds; weather information and reports; sea and land breeze | …/basic-skills-3.html | loaded |
| Day Sailing: needs BS3; passage plans from charts, tides, forecasts; anchoring; rudderless sailing | …/day-sailing.html | loaded |
| Racing Skills: starts with flags/sound signals; mark roundings; gusty conditions; "basic aerodynamic theory (how sails work)"; sail power control; RRS 10, 11, 12, 18.1–18.2, 29.1, 31.1–31.2; wind shifts | …/racing-skills-1.html | loaded |
| Proficiency levels: buoyancy aid and footwear; getting out of irons; actions on capsize; man overboard; full inversion ("turtle"); crew trapped beneath the hull | …/proficiency-levels.html | loaded |
| YAI Training Centres (YAITC), YAI-assessed instructors, personal flotation devices | https://trg.yai.org.in/training-centrescertified-training-centres.html | loaded |
| Instructor courses (Assistant, Instructor, Senior); run in Mumbai; 40 h mentored instructing before assessment | https://trg.yai.org.in/instructing-a-coaching/instructor-courses/instructor-courses.html | loaded |
| RYA Level 1 (beginners, ~2 days/16 h, all directions, launching/recovery awareness); Level 2 (needs L1; rigging, launching, all directions, capsize recovery, safety); Level 3 (needs L2; consolidation + tasters of advanced modules); Seamanship Skills (needs L3; launching/recovering, stopping, reducing sail); advanced modules incl. Day Sailing, Sailing with Spinnakers, Performance Sailing | https://www.rya.org.uk/course-finder/dinghy-level-1-start-sailing , …/dinghy-level-2-basic-skills/ , …/dinghy-level-3-better-sailing/ , …/dinghy-seamanship-skills/ , https://www.rya.org.uk/training/small-boat-sailing-dinghy | loaded |
| RYA "Where's my nearest" centre/club finder (find.rya.org.uk redirects here) | https://www.rya.org.uk/wheres-my-nearest/ | loaded |
| World Sailing: RRS governs sailboat and sailboard racing, revised every four years, current RRS 2025–2028 | https://www.sailing.org/racingrules/ | loaded |
| LA28: 16–28 Jul 2028; boards at Belmont Shore, Long Beach; boats at Port of LA: ILCA 7, ILCA 6, 470, Nacra 17, 49er, 49erFX | https://www.sailing.org/la28/la28-schedule/ | loaded |
| YAI national body | https://www.yai.org.in/ | loaded |
| Tamil Nadu Sailing Association: not-for-profit, Chennai, formed 2002; accessible to all; races and annual programmes | http://tnsa.in/ | loaded |
| MP State Water Sports Academy of Excellence, Bhopal: inaugurated Jan 2007; sailing and rowing on Upper Lake; sailing coaches listed; talent selection 2024–25 (Sailing Academy) | https://dsywmp.gov.in/Academy/En_Water_Sports_Academy | loaded |

## 3. Clubs, schools and events

| Item | Source | Status |
|---|---|---|
| Mumbai Sailing Club: 2 h introductory sail from Gateway of India; Learn to Sail Basic 5 × 2 h, Advanced 10 × 2 h on a club boat; club certificate; YAI certificate available separately; coaches certified by YAI (club's claim) | https://www.mumbaisailingclub.com/courses/learn-to-sail/ , https://www.mumbaisailingclub.com/courses/introduction-to-sailing/ | loaded |
| Aquasail Yachting Academy: adult and child courses basic → advanced; 25 ft sports keelboat; dinghies; kids on Laser Pico; multihull on Hobie Cat and Laser Dart; Learn to Cruise on Beneteau First 34.7 | https://www.aquasailindia.com/learn-to-sail/ | loaded |
| Royal Madras Yacht Club: YAI-accredited training centre; Basic Sailing Course 5 days; Advanced 7 days; Instructor 14 days; Kids 3 days, ages 7–16 (club's site) | https://rmycindia.com/ (JS-rendered; read with headless Chrome). Search results list rmycindia.com as the club's site; rmycofficial.in did not resolve / returned 500 | loaded |
| 24Seven Sailing Chennai: children 8–16 without experience; trial sail; "My first Solo" 5 sessions; Full Learn to Sail 12 sessions; small groups, qualified coaches, safety support | https://www.24sevensailing.com/chennai-sailing | loaded |
| GETHNAA (Government of Karnataka, Dept of Youth Empowerment & Sports): Karwar Water Sports Centre at the mouth of the Kali River offers sailing, windsurfing and kayaking (linked from the first-lessons panel; details on the windsurfing page) | https://gethnaa.org/ , https://gethnaa.org/our-centres | loaded 5 Oct 2026 (fees not reproduced; Optimist sailing named only on a flyer, not claimed) |
| Dubai Offshore Sailing Club: RYA recognised training centre; RYA Levels 1–3 (adult), Stages 1–4 (youth); hire after Level 2; beginners in lighter morning winds, advanced in afternoon sea breeze | https://dosc.ae/trainingcentre/dinghy/ | loaded |
| YAI Senior Nationals 2026: 14–20 Nov 2026, OA INWTC Mumbai under YAI and INSA; RRS 2025–2028; 49er, 49erFX, Nacra 17, iQFOiL, ILCA 7, ILCA 6, 470, Formula Kite; YAI life/associate members via affiliated clubs; own boats | news item https://www.yai.org.in/news/other-news/item/272-…html ; NOR PDF https://www.yai.org.in/images/pdf/2026/Notice-of-Race-YAI-Senior-Nationals-2026.pdf (version 03 Aug 2026) | loaded |
| YAI Monsoon Regatta 2026, 1–7 Jun 2026, Hussain Sagar; YAI 6th Secunderabad Club Youth Open Regatta (national ranking), Hussain Sagar, 20–25 Jul 2026 | https://www.yai.org.in/news/other-news/item/269-…html (and its "latest" list) | loaded |
| Yacht Club of Hyderabad: not-for-profit; free training for children from government schools; 209 boats; hosts the Monsoon Regatta (club's claims) | https://ychyderabad.com/ (JS-rendered; read with headless Chrome) | loaded |

## 4. Not verified / left off

- **WaterSchool, Durgam Cheruvu (Hyderabad)**: seen only in search results; waterschool.in doesn't resolve. Left off.
- **National Sailing School, Bhopal (2006)**: only press archives (Arab News 2006, Hindustan Times). Used the MP government academy page instead.
- **Royal Bombay Yacht Club, Bhopal Yacht Club, EME Sailing Association, INWTC as a school**: no public learn-to-sail page checked. Left off.
- **Class specifications** (e.g. ILCA sail areas, hull lengths): not verified, so the lab and worked examples use round illustrative numbers instead.
- **"More than 2,400 RYA training centres in 58+ countries"**: appears only on DOSC's page, not checked on an RYA page. Not used as a number.
- **Season and monsoon closures for Mumbai and Chennai clubs**: no club page states them. Not used.
- **Course fees and phone numbers** shown on the MSC, RMYC, 24Seven and YAI NOR pages: deliberately not reproduced.
