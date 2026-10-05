# Bungee & Zipline: sources and verification log

Checked 4 Oct 2026 (IST). Every fact on the page comes from a source listed here or is standard physics worked out on the page. Prices, booking offers, phone numbers and email addresses shown on operators' and standards bodies' pages were deliberately **not reproduced**. What an operator says about itself is attributed to that operator.

## 1. Physics (worked on the page)

| Item | Basis | Status |
|---|---|---|
| Free fall (no drag) t = √(2L/g), v = √(2gL): L 10 / 20 / 30 / 40 m → 1.43 / 2.02 / 2.47 / 2.86 s, 14.0 / 19.8 / 24.3 / 28.0 m/s (50 / 71 / 87 / 101 km/h); 15 m → 17.2 m/s | kinematics | recomputed |
| Ideal cord: F = kx, E = ½kx²; energy balance m g (L + x) = ½ k x²; L = 20 m, k = 100 N/m: 40 / 70 / 90 / 110 kg → x 17.1 / 24.8 / 29.6 / 34.2 m, lowest 37.1 / 44.8 / 49.6 / 54.2 m, room on a 60 m platform 22.9 / 15.2 / 10.4 / 5.8 m | Hooke's law + energy conservation; cord values **illustrative** | recomputed |
| Peak pull kx ÷ mg: 4.3 / 3.6 / 3.2 × (40 / 70 / 110 kg), 4.6 × for 70 kg on k = 200 (x 15.6 m); top speed at x = mg/k: 75 / 77 / 80 / 74 km/h; 30 m stretch → 4.4 × | as above | recomputed |
| Rebound with an illustrative 20% energy loss: 70 kg jumper rises to ≈ 9 m below the platform; hangs at L + mg/k ≈ 26.9 m | energy conservation; loss figure **illustrative** | recomputed |
| Same rubber, k = EA/L (EA = 2,000 N, **illustrative**): stretch = 1.24 L for 70 kg; L 10 / 20 / 25 / 30 m → lowest 22.4 / 44.8 / 56.0 / 67.2 m; room on 60 m: 37.6 / 15.2 / 4.0 / −7.2 m; on 83 m: 60.6 / 38.2 / 27.0 / 15.8 m; peak always 3.6 ×; 15 m → 33.6 m | as above | recomputed |
| Zip top speed v = √(2 m g (sin θ − μ cos θ) ÷ (ρ CdA)), μ 0.01, CdA 0.5 m², ρ 1.2 (**illustrative**): 3° → 27 / 35 / 44 km/h, 6° → 40 / 53 / 66 km/h, 10° → 53 / 70 / 87 km/h for 40 / 70 / 110 kg | force balance | recomputed |
| Mid-span tension T ≈ W L ÷ (4 s): 100 kg on 300 m, sag 18 / 9 / 4.5 m → 4.1 / 8.2 / 16.4 kN (cable weight ignored) | statics (small-angle) | recomputed |
| Braking a = v² ÷ (2d) from 14.7 m/s: 20 / 10 / 5 / 3 m → 5.4 / 10.8 / 21.7 / 36.1 m/s² (0.55 / 1.1 / 2.2 / 3.7 g); 10 m/s in 4 m → 12.5 m/s² | kinematics | recomputed |
| Lab test points: default 2.02 s, 71 km/h, 24.8 m, 15.2 m, 3.6 ×, 53 km/h; 110 kg → 34.2 m, 5.8 m, 3.2 ×, 66 km/h; 10 m cord k 200 → 1.43 s, 50 km/h, 12.4 m, 37.6 m, 3.6 ×; 110 kg on a 30 m cord → hits the ground; 40 kg at 10° → 53 km/h | lab_bungee-zipline.js | asserted in test-all.js |
| Non-linear rubber cords and energy lost as heat (hysteresis) | general materials physics, stated qualitatively only | n/a |

## 2. Standards and governing bodies

| Item | Source | Status |
|---|---|---|
| Indian Adventure Tourism Guidelines Version 2.0 – 2018, launched by the Ministry of Tourism with the ATOAI as "Safety and Quality Norms for Adventure Tourism in India"; basic minimum standards for land, air and water activities; states/UTs advised to adopt them | PIB, 6 Aug 2018, https://pib.gov.in/Pressreleaseshare.aspx?PRID=1541766 | loaded |
| Guidelines text (bungee chapter 2: no Indian standards, follow Australian and New Zealand standards / AS/NZS 5848:2000; ages 12–45; 40–110 kg; rubber sourcing, shelf life, cool dark storage away from UV, inspection; cords made and certified by jump masters; jump master's word final; medical restrictions list; minimum two full-time qualified jump masters with First Aid & CPR. Zip-wire chapter 15: aspire to EN 15567:2015 Parts 1–2; zip wire = gliding under gravity in a sloping direction; guides trained in First Aid/CPR and zip-wire operations; at least one guide per course able to do a mid-span rescue within 30 minutes; manager/senior instructor ≥ 2 years; rock anchors ≥ 4 × applied load; passive braking always in place; sit harness, chest/full-body where appropriate, two points of attachment, UIAA or EN/CE PPE; fit checked by a guide; complete PPE check by an inspector at least every 12 months) | ATOAI-hosted PDF "Indian Adventure 2018 Version 2", linked as "Adventure Safety Guidelines" from https://www.atoai.org/sops (Google Drive file id 1-hm9Lw_fMFPrvoEsa8c9eY4uaGwgq3Zo) | downloaded and read (the tourism.gov.in copies returned 404 / Access Denied, so the page links the PIB release and the ATOAI page) |
| ATOAI founded 1994; national representative body of Indian adventure tour operators; guidelines unveiled 31 May 2018, crafted with ATOAI's expertise | https://www.atoai.org/about , https://www.atoai.org/our-story | loaded |
| ACCT: founded 1993 (Association for Challenge Course Technology); ANSI-accredited standards developer for challenge courses, aerial adventure parks, canopy tours and zip lines; first industry standards 1994; current standard ANSI/ACCT 03-2019 Challenge Courses and Canopy/Zip Line Tours Standards | https://www.acctinfo.org/ , https://www.acctinfo.org/standards-development , https://www.acctinfo.org/products/current-edition | loaded |
| ACCT is not a certifying body for individuals; only ACCT-accredited vendors issue Level 1, Level 2 and Course Manager practitioner certifications; Practitioner Certification Standards archived 29 Oct 2025 | https://www.acctinfo.org/practitioner-certification | loaded |
| ERCA (European Ropes Course Association): trainers, builders and inspectors; updates ERCA standards for construction, inspection and operation of ropes courses; certifies inspection bodies; lists certified training bodies; references EN 15567-1:2015 | https://www.erca.uk/index.php/en/about-erca/mission-statement , …/training-and-inspection/about-certification , …/faq-ropes-courses/questionandanswers2 | loaded (rendered with headless Chrome) |
| BS EN 15567-1:2015+A1:2020 "Sports and recreational facilities. Ropes courses – Construction and safety requirements", current, published 31 Mar 2020; applies to permanent and mobile ropes courses; requirements for zip lines revised | BSI Knowledge, https://knowledge.bsigroup.com/products/sports-and-recreational-facilities-ropes-courses-construction-and-safety-requirements | loaded (rendered) |
| EN 15567-1 definitions and clauses: 3.10 zip line; 3.22 primary brake; passive braking system; emergency brake; 4.3.4.2.1 passive braking always in place, departure regulation if landing not visible, training/equipment for active braking; 4.3.4.2.4 primary brake in arrival area, emergency brake where needed | iTeh Standards sample of SIST EN 15567-1:2015+A1:2020, https://standards.iteh.ai/catalog/standards/sist/5119f1fd-45f1-4ce7-967c-98318e8d3ffd/sist-en-15567-1-2015a1-2020 | loaded (rendered); not linked from the page |
| AS/NZS 5848:2000 Code of practice for bungy jumping; first published as NZS 5848:1990; revision project began (news dated 31 Mar 2026), publication scheduled May 2027 | Standards New Zealand news, https://www.standards.govt.nz/news-and-updates/bungy-jumping-standard-to-take-a-leap-forward-with-new-revision ; Standards Australia news, https://www.standards.org.au/news/bungy-jumping-standard-to-take-a-leap-forward-with-new-revision | loaded |

## 3. Operators and places

| Item | Source | Status |
|---|---|---|
| Jumpin Heights Rishikesh: Mohanchatti, about 45 min from the city, since 2010; Bungy, Running Valley Jump / Valley Rope Jump (couple, combined 160 kg), Flying Fox (tandem or triple; solo on request); ≈ 83 m platform; Flying Fox ≈ 1 km, up to 140 km/h (operator's claim); best season Sept–June; weather cancellations | https://www.jumpinheights.com/rishikesh/ , https://www.jumpinheights.com/faq/ | loaded |
| Jumpin Heights Goa: Mayem Lake, North Goa, 45 min from Baga; "India's only bungy over a lake"; "Goa's first fixed platform bungy"; tandem bungy; ≈ 60 m; best Oct–Mar; shut for monsoon 1 Jul–31 Aug 2024 | https://www.jumpinheights.com/goa/ , https://www.jumpinheights.com/ , FAQ | loaded |
| Jumpin Heights safety: follows Australian & New Zealand standards guidelines; NZ-designed platforms; three-check system; safety audit by NZ experts in May 2024; medical restrictions | https://www.jumpinheights.com/safety/ | loaded |
| Flying Fox Jodhpur (Mehrangarh Fort): 6 zip lines up to 300 m, 1.2 km total, practice zip in Chokelao Gardens, groups up to 12 with two instructors, min height 1.4 m, max 115 kg; still listed and bookable | https://www.flyingfox.asia/service-page/jodhpur-zip-line-tour , https://www.flyingfox.asia/locations | loaded (rendered) |
| Flying Fox Kikar: 5 zip lines up to 400 m, 1.4 km total, The Kikar Lodge near Rupnagar, ≈ 1.5 h from Chandigarh; "longest zip line tour in South Asia" (operator's claim) | https://www.flyingfox.asia/service-page/kikar-zip-line-tour | loaded (rendered) |
| AJ Hackett Bungy NZ: since 1988; Kawarau Bridge 43 m, "World Home of Bungy"; Nevis Bungy 134 m, highest in NZ, "8.5 seconds", 45–127 kg; Nevis Swing 300 m arc, solo or tandem; Nevis Catapult 150 m, up to 3 g, "World's First Catapult", min age 13 | https://www.bungy.co.nz/queenstown/kawarau-bungy-centre/kawarau-bridge-bungy/ , …/nevis/nevis-bungy/ , …/nevis/nevis-swing/ , …/nevis/nevis-catapult/ | loaded |
| Jais Flight: "world's longest zipline", 2.83 km, 1,680 m above sea level, up to 160 km/h (operator's claims); seasonal ("Season 2025/26") | https://visitjebeljais.com/play , https://visitjebeljais.com/ | loaded |

## 4. Not verified / softened / left off

- **Age and weight limits at Jumpin Heights**: its own pages disagree (Rishikesh page 12–55 years and 40–110 kg; safety page 12–45 years; FAQ 35–110 kg for Rishikesh). The page says only "minimum age 12; weight limits apply" and links to the operator.
- **Indian guidelines PDF on tourism.gov.in**: the copies found by search returned 404 or "Access Denied" from the box and the fetch tool; the page links the PIB release and the ATOAI page that hosts the document instead.
- **Flying Fox Neemrana**: the company's story mentions it, but its current Locations page lists only Jodhpur, Kikar and two sites in Kenya, so it's left off.
- **Reverse bungee in India**: no Indian operator page offering one was found; the catapult example is AJ Hackett's in New Zealand.
- **Other Rishikesh bungee operators**: not checked, so not listed.
- **Events**: no recurring public bungee or zip-line event circuit could be verified; the page says so.
- **AS/NZS 5848 and ANSI/ACCT 03-2019 content** (e.g. g limits, cord testing rules): the standards are paid documents and weren't read, so nothing from inside them is quoted; only their scope and status.
- **Operator claims** (speeds, "longest", "first", audit results, jump counts) are attributed to the operator, not presented as independent fact. Jump-count totals were not used.
- **Prices, booking offers, cashback, entry charges, phone numbers and emails**: deliberately not reproduced.

## 5. Deep research (5 Oct 2026, batch deep3)

| Item | Source | Status |
|---|---|---|
| Rubber hysteresis energy table (illustrative 20% loss on 70 kg example) | materials physics + prior lab numbers | worked on page |
| Catenary / sag slope deepen (start steep, finish may rise) | cable statics (already on page) | deepened narrative |
| Operator top-speed claims (140 / 160 km/h) | Jumpin Heights / Jais Flight sites (prior) | labelled **operator’s claim** |
| ERCA / ACCT public directories for Jumpin Heights or Flying Fox | search 5 Oct 2026 | **not found** → unverified / school’s claim only |
| Jumpin Heights safety (AS/NZS-style, NZ audit May 2024) | https://www.jumpinheights.com/safety/ | School’s claim |
| MoT / ATOAI guidelines | PIB + atoai.org/sops (prior) | operator norms, not a school stamp directory |

### Accreditation labels (5 Oct 2026)
- Flying Fox Jodhpur / Kikar → Accreditation: unverified
- Jumpin Heights (Flying Fox zip, Goa, Rishikesh, Running Valley) → School’s claim — AS/NZS-style / NZ audit
- AJ Hackett cards → Accreditation: unverified (this pass)
