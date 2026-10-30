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
