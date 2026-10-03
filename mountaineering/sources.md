# Trekking & Mountaineering: sources and verification log

Checked 4 Oct 2026 (IST). Every fact on the page comes from a source listed here or is standard physics worked out on the page. Course fees, insurance amounts, bank details, phone numbers and email addresses shown on the institutes' pages and PDFs were deliberately **not reproduced**. What an institute says about itself is attributed to that institute.

## 1. Physics and physiology (worked on the page)

| Item | Basis | Status |
|---|---|---|
| ISA pressure P = 101.325 (1 − 2.25577e-5 h)^5.25588 kPa; PO₂ = 0.2095 P; HMI route 0 / 1,850 / 3,048 / 4,029 / 4,450 / 5,029 m → 101.3 / 81.0 / 69.7 / 61.4 / 58.1 / 53.8 kPa, PO₂ 21.2 / 17.0 / 14.6 / 12.9 / 12.2 / 11.3 kPa, 100 / 80 / 69 / 61 / 57 / 53%; 5,400 m → 0.51; 5,500 m → 50% | International Standard Atmosphere (same model as the Running and Skiing pages) | recomputed |
| Lapse rate 6.5 °C / 1,000 m; 25 °C → −7.5 °C at 5,000 m | ISA; sea-level temperature **illustrative** | recomputed |
| Wind chill (metric form of the NWS index) WC = 13.12 + 0.6215T − 11.37V^0.16 + 0.3965T·V^0.16; −7.5 °C at 10 / 30 / 50 km/h → −12 / −16 / −18 °C; 0 °C at 30 km/h → −6.5 °C; 5.5 °C at 30 km/h → 1 °C | NWS formula in °F/mph (https://www.weather.gov/safety/cold-wind-chill-chart) converted; cross-checked −7.5 °C/30 km/h = 18.5 °F/18.6 mph → 2.8 °F = −16.2 °C | recomputed |
| W = m g h; 70 kg + 0 / 10 / 15 / 25 kg over 1,000 m → 687 / 785 / 834 / 932 kJ; ÷ 0.20 → 821 / 938 / 996 / 1,114 kcal; 70 kg × 500 m → 410 kcal | mechanics; 20% muscle efficiency **illustrative** | recomputed |
| Slide on snow a = g (sin θ − μ cos θ), v = √(2ad): 30°, μ 0.1 → 4.06 m/s², 6.4 / 9.0 / 12.7 / 20.1 m/s after 5 / 10 / 20 / 50 m; μ 0.3 → 9.7 m/s at 20 m; 20° → 2.43 m/s², 9.9 m/s | mechanics; μ values **illustrative** | recomputed |
| Slab shear stress τ = ρ g d sin θ; 200 kg/m³, 0.5 m → 336 / 490 / 604 / 694 Pa at 20 / 30 / 38 / 45°; 563 Pa at 35° | infinite-slope statics; density and thickness **illustrative** | recomputed |
| Lab test points: default 54.0 kPa, 11.3 kPa, 53%, −7.5 °C, −16 °C, 996 kcal; 3,000 m → 70.1 kPa, 14.7 kPa, 69%, 5.5 °C, 1 °C; calm → "not defined"; no pack → 821 kcal | lab_mountaineering.js | asserted in test-all.js |

## 2. Health and safety guidance

| Item | Source | Status |
|---|---|---|
| Inspired PO₂ at ~3,050 m is 69% of sea level; SpO₂ 88–91% on acute exposure; acute acclimatisation 3–5 days; training and fitness don't affect risk; AMS symptoms and onset 2–12 h; HACE and HAPE features; descent key; WMS rules (no > 2,750 m sleeping altitude in one day from low altitude; ≤ 500 m/day above 3,000 m; extra night per 1,000 m); rules can be too fast or too slow for individuals; three rules (know symptoms, never ascend to sleep with symptoms, descend if worse); AMS improves with descent ≥ 300 m; maximal exercise always reduced at altitude; Everest base camp ≈ 5,400 m, Kilimanjaro ≈ 5,900 m; altitude illness can approach 30% at higher elevations on the EBC route | CDC Yellow Book 2026, "High-Altitude Travel and Altitude Illness" (Hackett & Shlim), https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html | loaded via fetch tool (box curl gets 403) |
| Wind chill defined ≤ 50 °F and wind > 3 mph; sun can raise it 10–18 °F; frostbite needs air below freezing | NWS, https://www.weather.gov/safety/cold-wind-chill-chart | loaded |
| Most slab avalanches start on 30–50°; Swiss dataset > 1,000 avalanches: 96% on 30–50°, most 34–45°; run out onto lower angles | Avalanche.org, https://avalanche.org/avalanche-encyclopedia/terrain/slope-characteristics/slope-angle/ | loaded |
| UIAA Medical Commission papers incl. AMS/HAPE/HACE field management, nutrition, checking a commercial trek or expedition | https://www.theuiaa.org/mountain-medicine/medical-advice/ | loaded |
| Medication doses: deliberately **not** reproduced; page says to discuss any altitude medicine with a doctor | n/a | n/a |

## 3. Bodies, institutes and courses

| Item | Source | Status |
|---|---|---|
| UIAA founded 1932; 99 member associations in 77 countries as of the 2025 GA; IOC-recognised since 1995; MQL training standards since 1993 | https://www.theuiaa.org/inside-the-uiaa/about/ , https://www.theuiaa.org/home-of-training/mql/ | loaded |
| IMF: apex national body for mountaineering and allied sports, formed 5 Jan 1961; UIAA member ("UIAA … of which IMF is a member", IMF safety page); expedition rules (foreign teams apply ≥ 90 days ahead, IMF liaison officer); peak lists (open / virgin / trekking / other); trekking advice (start with day hikes, camp craft, map reading, first aid, adventure course; seasons: May–Jun & Sep–Oct for Garhwal, Kumaon, Sikkim, HP; Jun–Sep Ladakh/Zanskar; foothills Oct–Mar); advisory questions for organisers | https://www.indmount.org/ , https://indmount.org/IMF/safety , https://indmount.org/IMF/expeapp , https://indmount.org/IMF/getPeaks?type=op , https://indmount.org/IMF/trekking , https://indmount.org/IMF/advisory , institutes list https://indmount.org/IMF/institutes (JS site; read with headless Chrome) | loaded |
| NIM: 1964 proposal by MoD and UP government; principal chosen by MoD; courses; BMC 28 days for beginners (objectives: rock, snow, ice; map reading, navigation, weather, medicines); AMC 28 days, BMC 'A' grade, expedition to a peak > 5,500 m in Garhwal; SAR yearly since Dec 1992, AMC 'A'; MOI, AMC 'A'; Adventure course; durations (BMC/AMC 28, SAR/MOI 21, Adventure 14 days); beginners need no experience; fitness advice (5 km with 15 kg for a month, 30 min cardio, 20 push-ups, 5 pull-ups; high BP not recommended); kit list | https://www.nimindia.net/ , …/basic-mountaineering-course-bmc , …/advancemountaineering , …/search-rescue , …/methodofinstruction , …/adventurecourse , FAQ …/frequently-asked-questions (rendered and expanded with headless Chrome) | loaded |
| NIM Training Programme 2026: BMC 19 Oct–15 Nov 2026 (16–40), one batch 20–55; AMC 18–42; MOI 19 Oct–8 Nov 2026 (19–45); Adventure 17–30 Nov 2026 (20–50) and 2–15 Dec 2026 (14–20); 10 km / 10 kg fitness test; fee includes food, accommodation, equipment. Programme 2027: BMC from 22 Mar 2027; AMC 26 Apr, 27 May (ladies), 14 Sep 2027; SAR 22 Mar–11 Apr 2027 | NIM PDFs linked from its home page: https://www.nimindia.net/_files/ugd/25f551_b1475f92e2044590bfd35520b4b0115c.pdf (2026), …_7fade55ba443472b8904e4548a41e078.pdf (2027) | loaded (PDFs carry fees; not linked from the page, not reproduced) |
| HMI: founded 4 Nov 1954 to commemorate the first ascent of Everest by Tenzing Norgay and Edmund Hillary; Basic Course 28 days; route Yuksum 1,850 m, Tshoka ~10,000 ft, Dzongri 13,220 ft, Chaurikhang BC 14,600 ft, Mt Renok 16,500 ft height gain; acclimatisation walks; self-arrest, glacier travel, fixed rope, crevasse rescue, ice climbing; classes on mountain hazards, avalanche, mountain clothing and materials | https://www.hmidarjeeling.com/ , https://hmidarjeeling.com/courses/basic-course/ | loaded via fetch tool (box TLS fails against this host) |
| ABVIMAS: founded 16 Sep 1961 as the Western Himalayan Mountaineering Institute; BMC/AMC at Manali/Dharamshala; MOI (M); site shows booking for the 384th BMC (1–26 Oct 2026) and 60th MOI (29 Sep–26 Oct 2026); matriculation for BMC/AMC, 10+2 for MOI; BMC 'A' → AMC; AMC 'A' → MOI; AMC 'A' or 'B' → Trekking Guide Course; MBBS doctor's medical certificate valid 90 days; medical conditions advice; ≥ 2 months cardio and strength training | https://abvimas.org/ , https://www.abvimas.org/history/ , …/course/mountaineering-course-list/ , …/course/joining-instructions/ , …/course/medical-advice/ | loaded |
| JIM&WS Pahalgam: BMC 24 days (17–40; rock craft, ice craft, survival); 2026 batches 9 May–24 Aug completed/full; AMC 24 days (17–42; expedition planning, 18,000 ft peak; 10 Aug–2 Sep and 7–30 Sep 2026); MOI 15 days; skiing and snowboarding courses | https://www.jawaharinstitutepahalgam.com/Mountaineering.php , Course Programme 2026-27 PDF https://www.jawaharinstitutepahalgam.com/pdf/CP%2026-27.pdf | loaded |

## 4. Not verified / left off

- **Everest's height** and real (measured) summit pressure: not checked on an official source today, so the lab stops at 8,000 m and no summit figure is given.
- **HMI age limits** (17–45 appeared only in a search summary) and HMI 2026–27 batch dates: not confirmed on HMI's own pages. Left off.
- **IMF expedition rules for Indian teams** and state permits (Uttarakhand, Sikkim special guidelines): only the foreign-team rules were read. Page says only that the IMF runs the application process.
- **NIMAS Dirang, IISM Gulmarg, SGMI Gangtok**: listed by the IMF or NIM as recognised institutes, but their course pages were not checked. Not given cards.
- **ABVIMAS expeditions page**: shows "working on content". Not used.
- **Commercial trek operators**: none checked, so none are listed. The IMF advisory's questions are given instead.
- **Avalanche bulletins for India**: no current public bulletin page verified. Not linked.
- **IMF's own acclimatisation rule** ("for every 2000 ft gain at least two days"): it differs from the CDC/WMS rule; the page uses the CDC/WMS rule only, to avoid mixed messages.
- **Fees, insurance amounts, bank details, phone numbers** on NIM, HMI, ABVIMAS, JIM&WS and IMF pages: deliberately not reproduced.
