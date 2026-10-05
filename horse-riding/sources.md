# Horse riding: sources and verification log

Checked 4 Oct 2026 (IST). Every fact on the page comes from a source listed here or is standard physics worked out on the page. Prices, membership charges, phone numbers and email addresses shown on riding schools' and federations' pages were deliberately **not reproduced**. What a school says about itself is attributed to that school.

## 1. Physics (worked on the page)

| Item | Basis | Status |
|---|---|---|
| Lean to stay balanced: accelerating tan φ = a ÷ g (1 / 2 / 3 m/s² → 5.8° / 11.5° / 17.0°); turning tan φ = v² ÷ (r g): 3 m/s r 10 m → 5.2°, 5 m/s r 20 m → 7.3°, 5 m/s r 10 m → 14.3°, 7 m/s r 20 m → 14.0° | Newton's second law; speeds **illustrative** | recomputed |
| Stride length = speed ÷ stride frequency; hoofbeats/s = beats × strides/s: walk 1.5 m/s, 0.9/s → 1.67 m, 3.6; trot 3.5 m/s, 1.4/s → 2.50 m, 2.8; canter 6.0 m/s, 1.7/s → 3.53 m, 5.1 | kinematics; speeds and stride rates **illustrative** | recomputed |
| Saddle as a sine wave, peak acceleration A(2πf)²: ±2 cm 1.8 Hz → 2.6 m/s² (0.26 g); ±3 cm 2.4 Hz → 6.8 (0.70 g); ±5 cm 2.4 Hz → 11.4 (1.16 g); ±5 cm 2.8 Hz → 15.5 (1.58 g) | simple harmonic motion; amplitudes and frequencies **illustrative** | recomputed |
| Jump as a drag-free projectile: rise (v sin θ)²/2g, time 2v sin θ/g, flight v² sin 2θ/g, take-off = flight/2; 5 m/s 30° → 0.32 m, 0.51 s, 2.21 m, 1.10 m; 6/30° → 0.46, 0.61, 3.18, 1.59; 6/35° → 0.60, 0.70, 3.45, 1.72; 7/30° → 0.62, 0.71, 4.33, 2.16 | projectile motion; CoM start 1.25 m and 0.6 m tuck allowance **illustrative** | recomputed; asserted in test-all.js |
| Lab clearances 1.25 + rise − (h + 0.6): 1.0 m fence at 6 m/s 30° → +11 cm; 1.2 m → −9 cm; 35° → +25 cm; 7 m/s → +27 cm; 6 m/s = 360 m/min, 7 m/s = 420 m/min | lab_horse-riding.js | asserted in test-all.js |
| Momentum p = mv for 500 kg horse + 70 kg rider (**illustrative masses**): 1.5 m/s → 855 kg·m/s (page: about 850), 6 m/s → 3,420; stopping in 3 s → 1,140 N ≈ weight of 116 kg | Newton's second law | recomputed |
| Fall from 2.4 m (**illustrative** head height): √(2gh) ≈ 6.9 m/s ≈ 25 km/h; with 6 m/s forward → 9.1 m/s; 2.0 / 2.8 m → 6.3 / 7.4 m/s (sources only) | kinematics | recomputed |
| Head stopping from 6.9 m/s, a = v²/2d: 0.5 / 1 / 2 / 3 cm → 4,761 / 2,381 / 1,190 / 794 m/s² (485 / 243 / 121 / 81 g) | kinematics; distances **illustrative**, average not peak values | recomputed |

## 2. Biology, gaits, riding technique and safety

| Item | Source | Status |
|---|---|---|
| Footfall table: walk LH, LF, RH, RF, approx. even intervals, 2–3 or 3–4 limbs in contact, no aerial phase; trot (LH+RF), (RH+LF), aerial phase possible; right canter LH, (RH + LF together or nearly), RF, aerial phase; right gallop LH, RH, LF, RF; lead limb = last forelimb before aerial phase; canter vs gallop told apart by footfall order. Eight Icelandic horses ridden in an outdoor arena, accelerometers on all four limbs; speeds: walk 0.6–3.2, trot 1.8–6.7, canters 4.0–8.2 / 4.8–8.9, gallops 4.9–8.2 / 4.7–8.8 m/s | Robilliard, Pfau & Wilson (2007) "Gait characterisation and classification in horses", J Exp Biol 210:187, https://journals.biologists.com/jeb/article/210/2/187/17107/Gait-characterisation-and-classification-in-horses | loaded |
| Rider's aim: follow the horse's movement smoothly, keeping the centre of gravity in harmony with the horse's; dressage seat: upper body vertical above the seat bones, imaginary perpendicular line shoulder to heel, supple ankle with heel below toe, back swinging with the horse's back, faults incl. collapsed hip and hollow back; correct seat = prerequisite for effective application of all aids; light seat: hip, knee and ankle "move like a spring"; forward (jumping) seat: upper body in front of the vertical, elastic hip and knee, deep heel and knee, quiet hands | USDF Teaching Manual appendix "Seat Positions", excerpted from *Principles of Riding*, the official handbook of the German National Equestrian Federation (1985), https://www.usdf.org/EduDocs/Training/seatpositions.pdf | downloaded and read; not linked from the page |
| Vision: panoramic up to 350°; binocular 55–80° with the head raised; small blind spots above/perpendicular to the forehead, directly below the nose and directly behind | UC Davis School of Veterinary Medicine Horse Report, "10 Things You Might Not Know About Equine Ophthalmology" (23 Apr 2024), https://cehhorsereport.vetmed.ucdavis.edu/news/10-things-you-might-not-know-about-equine-ophthalmology | loaded |
| Hearing: ears move 180° using 10 muscles; used to orient towards a sound | Extension Horses (extension.org), "Horse Hearing", https://horses.extension.org/horse-hearing/ | loaded (the page gives two different frequency ranges, so no range is quoted) |
| Touch: skin is the main interface of communication between horse and rider; tactile sensitivity particularly high around the eyes, nostrils and mouth; hearing in some respects exceeds human hearing | Rørvang, Nielsen & McLean (2020) "Sensory Abilities of Horses and Their Importance for Equitation Science", Frontiers in Veterinary Science 7:633, https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2020.00633/full | loaded |
| Pressures (bit, leg, spur, whip) removed at the onset of the correct response; light signals placed before a pressure-release sequence | International Society for Equitation Science, Training Principles, https://www.equitationscience.com/ises-training-principles | loaded |
| EFI Art. 209: compulsory for anyone jumping a horse to wear a properly fastened helmet with three-point retention harness; protective headgear (meeting international testing standards) mandatory while riding on the show grounds, all disciplines | EFI Technical Guidelines 2021 (effective from 11 Nov 2022 per cover), http://efinf.org/pdf/TECHNICAL%20GUIDELINES%202021%20updated-compressed.pdf (linked from EFI FAQ) | downloaded and read |
| Helmet standards accepted by British Eventing (PAS 015, EN1384/VG1, ASTM F1163, SNELL E2001/E2016, AS/NZS 3838); replace every 3–5 years; replace after any fall where the head hits the ground; body protectors BETA 2018 Level 3 or EN 13158:2018 Level 3, mandatory for cross-country; fit: chest, ribs, spine, finish above the saddle | British Eventing "Understanding Helmet and Body Protector Standards", https://beprepared.britisheventing.com/blog/understanding-helmet-and-body-protector-standards | loaded |
| BETA 2018 Level 3 required at BE events from 1 Jan 2024 (purple BETA 2009 no longer permitted); three levels; protectors absorb energy of falls, kicks or being stepped on; protect abdomen, chest and ribs | British Eventing news, 6 Feb 2024, https://news.britisheventing.com/be-body-protector-rule-update-1st-january-2024/ | loaded; not linked from the page |

## 3. Levels, ladder and governing bodies

| Item | Source | Status |
|---|---|---|
| EFI: constituted 1967; disciplines Dressage, Show Jumping, Eventing, Tent Pegging, Endurance; FEI membership certificate; EFI rider ID via forms; news 3 Jun 2026 "Ashish Limaye Earns First Spot on India's Asian Games 2026 Team" | https://efinf.org/ , https://efinf.org/FEI.php , https://efinf.org/Faq's.php | loaded |
| EFI show-jumping grades: Preliminary 0.90–1.05 m (regional shows only), Novice 1.00–1.10, Grade III 1.10–1.20, Grade II 1.20–1.30, Grade I 1.30–1.40, Grand Prix 1.35–1.50 (spread up to 1.70); speeds 325–375 m/min; EFI founded because the FEI would not accept Indian riders at foreign shows unless sent by their national federation | https://efinf.org/Show_Jumping.php | loaded |
| EFI dressage classes Preliminary, Elementary, Medium, Advanced Medium, Advanced, Prix St George, Intermediate I; 20 × 60 m arena; 0–10 marks per movement | https://efinf.org/Dressage.php | loaded |
| FEI: disciplines Jumping, Dressage & Para Dressage, Eventing, Driving & Para Driving, Endurance, Vaulting; mission (bond between horse and human, athlete welfare, ethical partnership with the horse) | https://inside.fei.org/fei/about-fei , https://inside.fei.org/fei/disciplines | loaded (www.fei.org returns 403 to scripted requests, so the page links inside.fei.org) |
| FEI Solidarity Rider's Education Programme: for NFs; beginner to early competition, 3 Olympic disciplines + Endurance; Degree 1 Elementary Rider's Diploma (low level, under 1 m jumps / basic flatwork, constant coaching on a well-trained horse); Degree 2 Competition Rider's Licence (over 1 m jumps / medium dressage / novice eventing / under 80 km endurance); full launch planned Jan 2026 | https://inside.fei.org/fei/solidarity/catalogue/rider-education-programme ; brochure https://inside.fei.org/system/files/FEI%20SF%202025%20-%20FEI_Solidarity_Rider%27sEducationProgramme.pdf | loaded / downloaded |
| BHS Stages: Stage 1 (basic horse care and riding) → 2 → 3 → 4 → BHSI → Fellowship; Stage 3 Ride Dressage / Ride Jump | https://www.bhs.org.uk/bhs-professional-qualifications-and-careers/bhs-qualifications-and-stages/ | loaded |
| BHS Stage 1 Ride: walk, trot, canter, turns and circles; no stirrups in walk and trot; light seat in trot and canter; trotting poles; plus Ride Safe Silver; assessed at a BHS Approved Riding Centre | https://www.bhs.org.uk/bhs-professional-qualifications-and-careers/bhs-qualifications-and-stages/stage-1/ , https://www.bhs.org.uk/go-riding-and-learn/recreational-awards/ride-safe/ | loaded |
| BHS Stage 2 Ride: balanced position with and without stirrups in walk, trot and canter; course of fences up to 75 cm | https://www.bhs.org.uk/bhs-professional-qualifications-and-careers/bhs-qualifications-and-stages/stage-2/ | loaded; not linked from the page |

## 4. Where to ride

| Item | Source | Status |
|---|---|---|
| EIRS (Bengaluru): established 1996 by Jitu Virwani; 240-acre campus; conducted in keeping with BHS standards; lessons beginner to advanced; guided trail rides; no membership needed; riding Tue–Sun 7–10 am and 3–5 pm, Mondays off; Embassy Pony Club based on the British Pony Club, tests, monthly weekend camps for up to 16 children; site lists results for NEC Grade 1 & Grand Prix SJ, Grade 2 SJ; riders include Ashish Limaye | https://www.embassyridingschool.in/about , https://www.embassyridingschool.in/eirs-riding-lessons , https://www.embassyridingschool.in/ | loaded |
| ARC (Mumbai): est. 1942; one of the oldest and largest private civilian riding clubs in India; lessons for all ages; basic riding, polo, tent pegging, show jumping, dressage; training clinics with experts; suggests age 7 to start; batches; racing season Nov–Apr no riding race-day evenings and Monday mornings, May–Oct no riding Mondays | https://amateurriders.club/ | box TLS handshake fails; verified with WebFetch |
| CEC (Chennai): Sholinganallur; basic horse and pony riding from scratch; competition riding in dressage, show jumping and polo; "more than 100+ National Medals in the past few years"; ages 6–66, max 72 kg, 1-hour classes, 6–12 months for basic skills; no casual rides; 6–8 am and 4–6 pm, Monday holiday | https://www.chennaihorseriding.com/ | loaded |
| Japalouppe (Talegaon Dabhade, near Pune): founded 1998 by Lorraine and Rohan More; just off the old Pune–Mumbai Expressway; lessons for all ages and skill levels; 45-minute batches; rider weight 80 kg max; pre-book at least 48 h; riding week off Wednesday; three-day Annual Equestrian Games with institutions from all over India | https://japalouppe.com/riding-lessons/ , https://japalouppe.com/about/ | loaded |
| BHS approved centres list (and its caveat to confirm current status) | https://www.bhs.org.uk/go-riding-and-learn/find-a-riding-centre-or-livery-yard/ | loaded |
| Spanish Riding School Morning Exercise: daily training in the baroque Winter Riding School with classical music, young stallions to fully trained; school jumps rarely shown | https://www.srs.at/en/tickets/morning-exercise | loaded |

Link check (4 Oct 2026): 16 external links on the page; 15 return 200 to curl; amateurriders.club fails the box's TLS handshake and was verified with WebFetch. Log: kinetic-tools/d2/linkcheck_horse-riding.txt.

## 5. Not verified / softened / left off

- **EFI learner levels**: the EFI site publishes competition grades and rider registration but no learner riding levels, so the ladder is a plain one with BHS Stages and the FEI framework as reference points, as the brief allowed.
- **FEI Rider's Education Programme in India**: it's a framework national federations apply for; we found nothing saying the EFI has adopted it, so the page says so. "Launched January 2026" was softened to "its 2025 brochure planned the full launch for January 2026".
- **Delhi Riding Club**: its listed domain (delhiridingclub.com) now redirects to an unrelated horoscope site, so there's no official page to verify against. Left off.
- **Army Polo & Riding Club (Delhi) and other Army clubs accepting civilians**: aprcdelhi.com shows only placeholder ("lorem ipsum") text and a login; no official page confirms current civilian lessons. Left off.
- **arcmumbai.com**: parked domain; the club's live site is amateurriders.club, which is what the page links.
- **The Children's Riding Club (Delhi)**: site returned errors (TLS / HTTP 500). Left off.
- **Kings Equestrian (Bengaluru/Hyderabad/Pune)**: its site claims affiliation with the EFI, FEI and BHS; FEI members are national federations, and the claims couldn't be checked, so it's left off.
- **Gait speeds from IFCE Equipedia**: the page was blocked (Incapsula) to both the box and WebFetch, so only the JEB study's measured ranges are used, attributed to that study.
- **Hearing frequency range**: the Extension Horses page gives two inconsistent statements, so no range is quoted.
- **Coaching folklore** (e.g. take-off "one fence-height away", what a left-behind rider does to the horse): not used; the jump chapter sticks to projectile physics and the handbook's seat description.
- **Fall and injury statistics**: none quoted; no single current source was checked.
- **Prices, lesson packages, membership charges, phone numbers and emails** (EIRS, ARC, Japalouppe, Kings and EFI pages all show some): deliberately not reproduced.

## 5. Deep research (5 Oct 2026, batch deep6)

| Item | Source | Status |
|---|---|---|
| Gait energetics: each gait has a speed range with a minimum energy cost per distance; horses' freely chosen speeds sit near those minima | D. F. Hoyt & C. R. Taylor, *Gait and the energetics of locomotion in horses*, *Nature* 292:239–240 (1981), https://ui.adsabs.harvard.edu/abs/1981Natur.292..239H/abstract | ✓ abstract; used **qualitatively** (the study's speeds were for small treadmill horses, so not quoted as targets) |
| Jump landing over a 1 m vertical: 6 horses (mean 599 kg), usual riders (mean 74 kg); peak vertical force ≈ 1.5 × body weight per foreleg; stance 171 ms (trailing) / 218 ms (leading); peak fetlock flexor moment 2.44 / 1.93 N·m/kg; leading leg brakes for first ~60% of stance; coffin- and fetlock-joint moments 82% and 45% above published trot values | L. S. Meershoek, H. C. Schamhardt, L. Roepstorff, C. Johnston, *Forelimb tendon loading during jump landings and the influence of fence height*, *Equine Vet J Suppl* 33 (2001) — VU Amsterdam repository full text https://research.vu.nl/ws/files/1800048/143814.pdf | ✓ full text read; 8.8 kN = 599 × 9.81 × 1.5 computed by us |
| Riding-helmet standards: VG1 and PAS 015 250 g, ASTM F1163 300 g at 1.8 m / 5.9 m/s flat anvil; Snell 2.0 m / 6.26 m/s, 300 g; PAS 015 3-impact average < 225 g; hazard anvil 5.4 m/s | Virginia Tech Helmet Lab, equestrian helmet ratings methodology (VTechWorks), https://vtechworks.lib.vt.edu/bitstreams/a4c7151c-6d04-4378-a12c-f41a63a3fc0e/download | ✓ read; (6.9 ÷ 5.9)² ≈ 1.37 computed by us from the page's own head-drop example |
| EFI's FEI membership | EFI's own page showing its FEI membership certificate, https://efinf.org/FEI.php ; FEI database entry https://data.fei.org/NFPages/NF/Details/Federation/57/EQUESTRIAN-FEDERATION-OF-INDIA- returned a bot check to curl/WebFetch | Federation's own page (labelled); **FEI directory not machine-readable → not marked ✓**. EFI is not on the IOA members page (olympic.ind.in/members/, 5 Oct 2026) |
| EIRS trainers teach "on the same level as the BHS"; Pony Club programme based on the British Pony Club | EIRS's own lessons pages (already cited) | School's claim (not BHS approval; no BHS listing found) |
| Chennai Equitation Centre: coaches "certified internationally" (no body named) | CEC's own home page (already cited) | School's claim |
| Amateur Riders' Club (ARC) site failed to load 5 Oct 2026; Japalouppe Equestrian Centre showed a bot check | — | Accreditation: unverified |
| Ashish Limaye named by the EFI for the Asian Games team | EFI news (already cited) | ✓ Named by the EFI |
| BHS approved-centre finder | BHS's own finder (already cited) | ✓ official list |
| Seasons | no verified change; strip untouched | — |

### Accreditation labels on cards (5 Oct 2026)
- EFI → Federation's own page — FEI membership certificate; FEI directory: not machine-readable for us
- EIRS → School's claim — "on the same level as the BHS"; EIRS Pony Club → School's claim — based on the British Pony Club
- ARC (×2) → Accreditation: unverified (site down); Japalouppe (×2) → Accreditation: unverified (bot check)
- Chennai Equitation Centre (×2) → School's claim — "certified internationally" coaches
- Limaye → ✓ Named by the EFI; BHS finder → ✓ BHS's own approved-centre finder; Spanish Riding School → "Not a riding school for visitors"
- Accreditation key callout added under "Where to train".
