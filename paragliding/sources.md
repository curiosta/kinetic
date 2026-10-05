# Kinetic · Paragliding: sources and verification notes

All checks done **5 Oct 2026 (IST)**. "Verified" means the official page was loaded and the stated fact was read on it, unless noted otherwise. The page deliberately shows **no prices**. Each school is linked to its own site, where readers should check current courses, dates and fees.

## 1. Physics (chapters, quiz, Glide Lab)

| Claim | Basis |
|---|---|
| Lift equation L = ½ρv²SC_L; drag; glide ratio = L/D; sink = airspeed ÷ L/D | Standard aerodynamics (textbook). Worked numbers computed by Kinetic |
| Polar curve: min-sink vs best-glide speeds; speed-to-fly into headwind | Standard glider polar / MacCready-style reasoning; illustrative numbers only (not a measured certification polar) |
| Speed bar lowers angle of attack / C_L and raises airspeed along the polar | Standard paraglider speed-system description (textbook / training manuals) |
| Reference wing (21 m² projected, trim 37 km/h, L/D 8.5, 95–100 kg all-up) | **Illustrative** values typical of a beginner (EN-A-style) wing; not a specific product |
| ISA air density: 1.225 kg/m³ at 0 m, ≈1.11 at 1,000 m, ≈0.97 at 2,400 m | International Standard Atmosphere formula (computed) |
| Dry adiabatic lapse ≈ 9.8 °C/km; dew-point lapse ≈ 2 °C/km; cloud base ≈ 125 m per °C spread | Standard meteorology rule of thumb (general knowledge, not fetched) |
| Cloud streets as wind-aligned thermal rolls; mountain lee wave + rotor | Standard soaring meteorology (general knowledge); wave presented as advanced / site-specific |
| Load factor n = 1/cos(bank); stall speed × √n; sink × n^1.5 (same C_L) | Standard flight mechanics (computed) |
| Asymmetric/frontal collapse recovery principles; spiral vs spin distinction; reserve as last-resort descent | Standard training / SIV curriculum concepts (general knowledge); not a how-to substitute for instruction |
| EN 926-2 classes A–D; DHV LTF-A–D | European EN 926-2:2013+A1:2022 (catalogue listings); DHV classification page loaded |
| Speed ∝ √(wing loading); glide ratio roughly unchanged | Follows from the lift equation (computed) |

## 2. Ratings and standards

| Item | URL | Status |
|---|---|---|
| FAI/CIVL SafePro Para 2026 (stages 1–5, colours, experience requirements; non-commercial tandem; 5B/5C/5D) | https://www.fai.org/sites/default/files/2026-05/Safepro%20Para%202026.pdf | PDF downloaded and read (prior pass; still on file in kinetic-tools/build/pg/) |
| FAI CIVL commission | https://www.fai.org/commission/civl | prior load; timed out on re-fetch 5 Oct 2026 |
| APPI 1 Discover / 2 Explore / 3 Pilot / 5 Advanced | https://flyappi.org/education_system/appi_1_discover/ (and sibling pages) | loaded (curl 200 on APPI 1) |
| APPI 4 Progress | n/a | **Not verified** for free-flight PG requirements |
| BHPA Pilot Rating Scheme | https://bhpa.co.uk/safety/prs/ | prior load; box curl failed 5 Oct 2026 |
| USHPA P1–P5 names | https://www.ushpa.org/ | Home previously 200; detailed requirements still not verified from official ratings page |
| DHV LTF-A/B/C/D classification | https://www.dhv.de/en/type-inspection/classification/ | loaded (curl 200) |
| EN 926-2:2013+A1:2022 flight-safety classes A–D | NEN / DIN catalogue entries; EN 926-2 summary used for class wording | catalogue / summary; full standard paywalled |
| HAPAI | — | **No body of this name verified.** Page notes PAI instead |

## 3. India: bodies and rules

| Item | URL | Status |
|---|---|---|
| Aero Club of India = NAC-India under NASG 2023; FAI sporting licences; accredited-schools list (6 PG schools) | https://www.aeroclubofindia.com/ · https://www.aeroclubofindia.com/accredited-schools/pg-gurukul | WebFetch 5 Oct 2026 (JS site; see §7) |
| Paragliding Association of India (Goa, 26 May 2010); NPRS P1–P5 / P7–P10; SafePro equivalence claim; membership/insurance | https://paraglidingassociationofindia.org/ | loaded 5 Oct 2026 (curl 200) |
| Lok Sabha unstarred Q 1311 (27 Jul 2026): NASP 2022 superseded by NASG 2023; no NSF for paragliding | https://sansad.in/getFile/lsapps/loksabhaquestions/annex/188/AU1311_OsAJQG.pdf | search index / prior |
| Ministry of Civil Aviation | https://www.civilaviation.gov.in/ | prior HTTP 200 |
| HP Aero Sports Rules 2022 + 2025 SIV amendment for tandem pilots | Tribune / Times of India + legitquest mirror | news + third-party legal DB; official gazette not reached |
| Himachal Tourism | https://himachaltourism.gov.in/ | previously timed out |
| ABVIMAS Manali (aero sports; paragliding course list "coming soon") | https://www.abvimas.org/ · https://www.abvimas.org/course/paragliding-course-list/ | loaded 5 Oct 2026 |
| Billing Paragliding Association | https://billingparaglidingassociation.com/ | prior load; box curl failed 5 Oct 2026 |

## 4. Events

| Event | URL | Status |
|---|---|---|
| 2023 Indian Pre World Cup, Billing | https://pwca.org/events/2023-2023-indian-pre-world-cup-billing | prior |
| PWCA Asian Tour India Bir 2024 | https://pwca.org/events/2024-pwca-asian-tour-india-bir-2024 | prior |
| Paragliding World Cup India Panchgani 2026 (season 2025); February best month | http://pwca.org/events/2025-paragliding-world-cup-india-panchgani-2026-season-2025 | prior; exact dates only via search index → page says "February 2026" |
| No Bir PWCA event in 2025 or 2026 | https://pwca.org/events?season=2025 | prior search index |

## 5. Schools (where to fly)

| School | URL | Facts used | Status |
|---|---|---|---|
| **Skylark School of Paragliding**, Bir Billing | https://skylarkparagliding.in/ · /about/ · /courses/ · /tandem/ | Led by Manu Bedi (12+ years flying); Bir Billing; tandem since 2006; P1&P2 5–7 days (radio-assisted 3–6 solos); P3 5–7 days at Billing (7–14 solos); refreshment; equipment rental; Chandigarh office address. **No prices reproduced.** | WebFetch 5 Oct 2026 (box curl timed out / 000) |
| Temple Pilots, Kamshet | https://www.templepilots.com/paragliding-courses/ · /kamshet-paragliding/ | APPI; split P1–P4 day counts; equipment to APPI 3; min age 16; weight 45–110 kg; medical + insurance; tandem types; season Oct–May; sites by season | WebFetch 5 Oct 2026 (box curl 000) |
| Nirvana Adventures, Kamshet | https://www.flynirvana.com/ · /paragliding-holidays/flying-in-kamshet/ | Since 1997; season Nov–June; Tower/Shelar/Shinde; APPI 1 (7 d), APPI 2 (11 d); clinics; ISO 9001:2008 | curl 200 + WebFetch |
| PG Gurukul, Bir | https://www.paragliding.guru/ | BHPA-certified lead instructor Gurpreet Singh (flying since 1993); P1+P2; P3; integrated; SIV prereqs; XC; ACI/IPPI claim as school's statement; not under APPI; ages 16–60+ | curl 200 |
| Billing Paul Adventure, Bir | https://www.billingpauladventure.com/learn-paragliding | Arvind Paul (since 2001); Pilot L1–3 and APPI 1–3; ~7 days basic; year-round except 15 Jul–15 Sep; FAQ season Oct–Jun | curl 200 |
| Antigravity Paragliding School, Bir | https://www.antigravityparagliding.com/paragliding-course | P1+P2 7-day; P3; 30-day P4; 100+ students/year | WebFetch 5 Oct 2026 (curl 429) |
| Xtacee Paragliding Club (Fly Nandi), Nandi Hills / Bengaluru | https://flynandi.com/ | Founded 2006 by Narendra Raman; tandem; ground handling ~4 d; P1 ~10 d; P2 ~10 d with dynamic soaring / big ears / speed bar | WebFetch 5 Oct 2026 |

## 6. Left out (could not verify) or judgement calls

- **HAPAI**: no verified organisation of that name; PAI covered instead.
- **Flying Buddha**: Nepal (Pokhara) tandem operator — not an Indian school; left off.
- **Paragliding Mantra (Kamshet)**: home page loaded; course URLs 404; insufficient verification — left off.
- **Manali / Solang tandem operators** (e.g. Flying Buddy): not listed as full training schools this pass; ABVIMAS course list not yet published.
- **Yelagiri**: historical / district mentions only; no current verified school site — soft note only.
- **Billing/Bir altitudes** (≈2,400 m / ≈1,400 m): secondary sources; marked approximate.
- **USHPA rating requirements**: not shown (official detail page unreliable).
- **TT School and social-only Bir schools**: not listed.
- Schools' own accreditation claims reported as the school's statement unless an official list names the school (see §7 for the per-school labels).
- **No prices** anywhere on the Kinetic page (Skylark, Antigravity, Billing Paul, PAI and PG Gurukul pages show fees — not copied).

## 7. Accreditation re-check (5 Oct 2026, about 13:45–14:00 IST)

Manoj's rule: a verified label only when an official directory or membership list names the school. Otherwise "School's claim — body" if the school's own site makes the claim, or "Accreditation: unverified" if neither applies. No invented stamps. Card labels on the page follow this table.

### Directories checked

| Body | Official list | Result |
|---|---|---|
| APPI | APPI Worldwide Map https://flyappi.org/appi_worldwide/ (school + tandem-centre lists by country; `/schools/` page itself says "Work in progress") | Loaded (curl 200). **India schools:** Temple Pilots Paragliding School, Hi Fly, Fly Nirvana Paragliding School, Adventure Sports Federation Himachal Pradesh, Flybig adventure, Paul International Paragliding School, Kamshet Adventures, ThePilotschoice, Paragliding Mantra, Vayo Paragliding School. **India tandem centres:** Templepilots, Kamshet Adventures, Fly Nirvana Paragliding, Billing Paul Adventure, Explore Adventures India, FLYING CLUB BIR, Uflyparaglidingkamshet, Paragliding Mantra |
| ACI (NAC-India) | "Accredited Schools" pages on https://www.aeroclubofindia.com/ (JS app; read via WebFetch render + site bundle) | **Six schools listed:** PG Gurukul ("First ACI-Accredited School", 2025), Orange Life, Temple Pilots, Paragliding Bawas, Nirvana Adventures, Indus Paragliding. URLs `/accredited-schools/<slug>` (HTTP 200) |
| BHPA | Registered schools https://www.bhpa.co.uk/schools/schools.php?region=all (DB updated 4 Sep 2026) | Loaded via WebFetch (box curl timed out). UK schools plus overseas ones in Spain/Bulgaria etc.; **no Indian school**. BHPA does not publish a public instructor-licence search |
| PAI | https://paraglidingassociationofindia.org/ + member portal (pilot verification only) | Site says "Several Paragliding schools are affiliated to PAI" and publishes affiliation requirements, but **no public list of affiliated schools**. Portal `/verify-pilot` verifies individual pilots, not schools. Honorary advisors include Narendra Raman (Xtacee) and Arvind Paul (Billing Paul): individual roles |
| Billing Paragliding Association | https://billingparaglidingassociation.com/ (pilots / organisation / membership pages) | Lists individual members and pilots; **no school or operator list**. None of the seven schools claims BPA membership on its own site, so no BPA label is used |

### Per-school decision

| School | Label(s) on cards | Evidence |
|---|---|---|
| Temple Pilots (Kamshet) | ✓ APPI-listed · ✓ ACI-accredited | APPI school 2573 "Appi school Since 2010" https://flyappi.org/school/2573/ and tandem centre https://flyappi.org/tandem_center/2897/ (website templepilots.com); ACI https://www.aeroclubofindia.com/accredited-schools/temple-pilots ("ACI-Accredited School") |
| Nirvana Adventures (Kamshet) | ✓ APPI-listed · ✓ ACI-accredited · School's claim — ISO 9001 (tandem card only, where the old badge said ISO) | APPI school 2620 "Fly Nirvana Paragliding School", since 2012 https://flyappi.org/school/2620/ and tandem centre https://flyappi.org/tandem_center/3015/; ACI https://www.aeroclubofindia.com/accredited-schools/nirvana-adventures. ISO 9001:2008 is only the school's statement (flynirvana.com); no certificate or registrar named. Note: the 2008 edition of ISO 9001 was withdrawn in 2018 |
| PG Gurukul (Bir) | ✓ ACI-accredited · School's claim — BHPA · School's claim — PAI | ACI https://www.aeroclubofindia.com/accredited-schools/pg-gurukul ("First ACI-Accredited School"; 2025). Corroborated by The Tribune (PG Gurukul becomes first paragliding school to get national accreditation). BHPA: paragliding.guru says the lead instructor is BHPA-certified; the school is not a BHPA registered school, and instructor licences can't be checked publicly → claim. PAI/ATOAI affiliation: school's statements; PAI lists no schools → claim. School says it is not under APPI (consistent: not on APPI map). Old "BHPA" badge replaced with "ACI" |
| Billing Paul Adventure (Bir) | ✓ APPI-listed | APPI school 3051 "Paul International Paragliding School", managed by Arvind Paul, "Appi school Since 2023", website billingpauladventure.com https://flyappi.org/school/3051/ (also tandem centre 3053). Its "Pilot Level 1–3" courses are the school's own levels with no body named. Not on ACI's list |
| Antigravity Paragliding School (Bir) | Accreditation: unverified | Site says it "certifies" students (P1–P4) but names no body. Not on APPI map or ACI list |
| Skylark School of Paragliding (Bir) | Accreditation: unverified | Home/about/courses name no certifying body. Not on APPI map or ACI list |
| Xtacee Paragliding Club (Nandi Hills) | Accreditation: unverified | flynandi.com names no body. Not on APPI map or ACI list. Founder is a PAI honorary advisor (personal role, noted on card as not a school accreditation) |
| ABVIMAS (Manali) | Accreditation: unverified (with "Government" identity badge) | State institute; no APPI or ACI school listing found |

### Superseded

An earlier same-day pass (deep2 batch, `kinetic-tools/deep2/edit_accreditation.py`, about 13:47 IST) labelled Temple Pilots, Nirvana and Billing Paul "APPI — school's claim" and PG Gurukul "BHPA — school's claim" because APPI's directory hadn't been checked. This re-check found the APPI and ACI listings above, so those cards now carry verified labels. School-card badges now carry a `data-acc` attribute so generic badge swaps don't silently undo them.
