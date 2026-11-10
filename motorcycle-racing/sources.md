# Motorcycle Racing & Off-road: sources and verification log

Checks 30 Oct 2026 (IST). Every fact on the page comes from a source listed here or is standard physics worked out on the page. No prices, course fees, entry fees, phone numbers or email addresses are reproduced. What a school, club or track says about itself is attributed to it. The page covers closed courses and private off-road ground only, never public roads. Numbers marked **illustrative** are round values chosen to show the physics.

## 1. Physics (worked on the page)

| Item | Basis | Status |
|---|---|---|
| Lean angle tan θ = v² ÷ (g r) = needed grip μ: 30° / 45° / 64° → 0.58 / 1.00 / 2.05 g | circular motion; 64° quoted by MotoGP, https://www.motogp.com/en/blog-articles/why-do-motogp-bikes-use-slick-tyres-the-science-behind-racing-rubber/1089039 | recomputed / loaded |
| Countersteering and wheel gyroscopics: 0.3 m wheel at 30 / 100 / 300 km/h → 265 / 884 / 2,653 rpm | Wikipedia, https://en.wikipedia.org/wiki/Counter_steering ; Am. J. Phys., https://doi.org/10.1119/1.19504 (bot-blocked 403 on link check) | recomputed / loaded |
| Braking d = v² ÷ (2a): 100 km/h at 1 g → 39.3 m (+1 s reaction → 67.1 m); at 0.5 g → 78.7 m (106.5 m) | kinematics | recomputed |
| Crash stopping: 100 km/h sliding μ 0.5 → 78.7 m; gravel ≈ 20 m ≈ 2 g; 0.5 m → ≈ 79 g | kinematics; **illustrative** | recomputed |
| Fall energy, 80 kg: 10 km/h → 309 J; 60 km/h → 11.1 kJ (36×) | ½ m v² | recomputed |
| Static stability factor SSF = T ÷ 2H (four-wheel off-road rollover) | NHTSA, https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/809868 | loaded |
| Lab test points: 60 km/h, 50 m, μ 1.0 → 29.5°, 57% within grip, 45.0°, 14.2 m, 28.3 m, 11.1 kJ; 100 km/h → 57.6°, 157% over, 39.3 m, 78.7 m, 30.9 kJ; μ 0.5 → 113% over, 26.6° | lab_motorcycle-racing.js | asserted in test-all.js |

## 2. Risk

| Item | Source | Status |
|---|---|---|
| Dakar since 1979: 79 deaths, 33 competitors, 24 motorcycle-related | Wikipedia, https://en.wikipedia.org/wiki/List_of_Dakar_Rally_fatal_accidents | loaded |
| C.S. Santosh's 2021 Dakar crash and recovery | Autocar India, https://www.autocarindia.com/motor-sports-news/cs-santosh-on-his-recovery-journey-after-dakar-2021-crash-421411 | loaded |
| FIM FRHPhe-02 helmet homologation for circuit racing | FIM, https://www.fim-moto.com/en/news/news-detail/article/circuit-racing-helmets-come-into-force-fim-homologated-under-frhphe-02 | loaded |

## 3. Licences, bodies and events in India

| Item | Source | Status |
|---|---|---|
| FMSCI is India's FIM federation | FIM, https://www.fim-moto.com/en/fim/continental-unions-national-federations/fim-asia/federations/fmsci | loaded |
| FMSCI competition licences | https://lic.fmsci.co.in/ ; https://www.fmsci.co.in/ | loaded |
| MRF MoGrip FMSCI National Supercross 2026: Shillong 11 Apr, Goa 25 Apr, Coimbatore 17 May, Baroda 18 Oct, Nashik 25 Oct, Kolhapur 29 Nov | MRF Motorsports, https://mrfmotorsports.com/championship/off-road/two-wheeler/mrf-mogrip-fmsci-national-supercross-championship-2026/2026/round-3 | loaded; earlier FMSCI calendar (16 Feb 2026) listed different venues, MRF page used; calendar row for round 6 only |
| Indian National Motorcycle Racing Championship 2026 dates | FMSCI calendar vs user-submitted listings conflict | no calendar row |
| Rainforest Challenge India: Goa, monsoon, since 2014; driver + co-driver crews; 2026 edition 26 Jul–1 Aug | Cougar Motorsport, https://www.cougarmotorsport.in/rfcindia/ | loaded; past, crew event, no calendar row |
| Maruti Suzuki Desert Storm | only a 2016 release found | not listed as current |
| Buddh International Circuit experiences | https://www.buddhinternationalcircuit.in/experiences/ | loaded |

## 4. Schools and clubs (no prices)

| Item | Source | Label |
|---|---|---|
| BigRock Dirt Park, near Kolar, Karnataka: 20+ acre off-road facility founded by C.S. Santosh; beginner course | https://bigrockdirtpark.com/pages/about-us | School's claim; Accreditation: unverified |
| STAR Academy · STAR Track, Gwal Pahari, Gurugram: 8-hour off-road course (gravel, inclines, water crossings); female instructors available | https://ridewithstar.in/ | School's claim; Accreditation: unverified |
| MoTo Lyfe, Gurugram: women-focused, female instructors; off-road levels and trail experience | https://motolyfe.in/ | School's claim; Accreditation: unverified |
| LetsRyde, Delhi NCR: women riders, beginner training (road) | https://www.letsryde.co.in/ | School's claim; Accreditation: unverified |

## 5. Who's who

| Item | Source | Status |
|---|---|---|
| C.S. Santosh first Indian Dakar finisher (2015); Harith Noah Rally2 class win, 11th overall, Dakar 2024 | Dakar, https://www.dakar.com/en/competitor/20 | loaded |
| Aishwarya Pissay, 2019 FIM Bajas World Cup women's title | Sportstar, https://sportstar.thehindu.com/motorsport/aishwarya-pissay-first-indian-to-win-world-title-fim-bajas-world-cup/article29027191.ece | loaded |
| Rahil Pillarisetty (Pro-Stock 301–400cc Open champion) and Jagathishree Kumaresan (retained Girls Stock 165cc title), 2025 season finale 11 Jan 2026 | The Hindu, https://www.thehindu.com/sport/motorsport/national-motorcycle-racing-championship-soorya-raj-kumar-end-championship-drought/article70498336.ece | loaded 30 Oct 2026 |

<!-- deepb1:start -->
## Deepen batch 1 (10 Nov 2026): Chapters 7 to 9

| Claim | Source |
| --- | --- |
| Top speed record 368.6 km/h (Jorge Martin, FP2, Mugello 2026); slipstreaming means less air resistance and extra speed; Mugello straight 1.14 km; top speeds about 240 km/h (1960), 305 km/h (1990), 352 km/h (2011); factors: engines, electronics, aerodynamics, tyres, circuits; safety: protective gear incl. airbags, circuit standards for surface, run-off, marshals, barriers, medical | https://www.motogp.com/en/news/2025/03/11/how-fast-are-motogp-bikes-top-speeds-records-how-they-compare/521392 |
| Front minimum 1.80 bar for 60% of a GP or 30% of a Sprint (since 2024); rear 1.68 bar; 2023 front 1.88 bar; penalties 16 s GP and 8 s Sprint; front pressure rises in hot air behind bikes and falls in clean air; rules followed Michelin safety concerns over deliberate low pressures; teams must predict how the race unfolds; Pirelli from 2027 | https://www.crash.net/motogp/feature/1092901/1/how-motogp-tyre-pressure-rules-work-2026 |
| Check pressure monthly when cold (not driven for at least three hours); TPMS may light briefly on cold mornings (marginally low pressure); underinflation can lead to a flat, blowout or tread separation; sustained high temperature can lead to blowouts and tread separation; 511 deaths in tire-related crashes in 2024; replace at 2/32 in tread | https://www.nhtsa.gov/equipment/tires |
| Typical stopping distances 20 to 70 mph (thinking, braking, total); rule 126: speed to stop well within the distance seen to be clear; enough space to pull up if the vehicle in front suddenly slows or stops; never closer than overall stopping distance; at least a two-second gap on high-speed roads and in tunnels where visibility is reduced; at least doubled on wet roads; up to ten times on icy roads; motorcycles need a greater distance to stop; fixed point such as a sign to measure the gap | https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158 ; https://assets.publishing.service.gov.uk/media/65f97642aa9b760011fbda4e/the-highway-code-stopping-distances.pdf |

Illustrative values (labelled): C_d A 0.3 m², air 1.2 kg/m³; tyre temperatures 20, 30, 10, 60, 70, 80 °C. Kinetic arithmetic: two-second gap distances; 0.67 s thinking time and about 0.67 g braking implied by the Highway Code table. Physics: drag, power ∝ v³, kinetic energy, Gay-Lussac's law, distance = speed × time.
<!-- deepb1:end -->
