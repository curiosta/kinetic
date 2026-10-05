# Kinetic · Rock climbing: sources and verification notes

All checks done **3 Oct 2026 (IST)**. "Verified" means the official page was loaded and the stated fact was read on it, unless noted otherwise. The page deliberately shows **no prices or fees**. One operator page (Let's Play Climbing) displays a trip price; it is linked for its programme description only and the price is not reproduced.

## 1. Physics (chapters, quiz, Fall Lab)

| Claim | Basis |
|---|---|
| Friction F ≤ μN; slab needs μ ≥ tan α (30° → 0.58, 40° → 0.84, 45° → 1.00, 60° → 1.73) | Standard mechanics (computed) |
| Sticky rubber can exceed the simple Coulomb model on rough rock | General knowledge (**not fetched**), worded qualitatively |
| Arm pull ≈ mg·d/h (686.7 N × 0.30/1.2 ≈ 172 N; 0.15 m → 86 N) | Simplified static torque model (computed; labelled simplified on page) |
| Fall factor = fall ÷ rope out; ideal spring rope F = mg(1+√(1+2f·EA/mg)) | Standard physics model (computed). EA ≈ 24 kN is a **calibration choice** so 80 kg at f = 1.77 gives ≈ 9.0 kN (inside the 12 kN limit); "static" EA = 250 kN is **illustrative** |
| Worked forces: f 0.10 → 2.6 kN, 0.35 → 4.2 kN, 0.70 → 5.5 kN, 1.60 → 8.0 kN (70 kg) | Computed from the model |
| Top-bolt load ≈ 1.6 × climber force | **Illustrative teaching assumption**, labelled as such on the page |
| Anchor leg load F/(2cos(θ/2)): 0° 0.50, 60° 0.58, 90° 0.71, 120° 1.00, 150° 1.93 | Standard vector resolution (computed) |
| Landing: v = √(2gh); a = v²/(2d); a/g = h/d (3 m on 0.3 m → ≈ 10 g) | Kinematics (computed) |
| Work = mgh (70 kg × 20 m ≈ 13.7 kJ ≈ 3.3 kcal) | Computed |
| Forearm pump (restricted blood flow during sustained grip); finger pulley injuries adapt slowly | General sports-physiology knowledge (**not fetched**) |
| Chalk = magnesium carbonate; carabiners and slings marked with kN ratings | General knowledge (**not fetched**) |

## 2. Rope standard

| Item | URL | Status |
|---|---|---|
| UIAA 101 (v9.1) requires EN 892:2012+A3:2023: first-drop peak force ≤ 12 kN single, ≤ 8 kN half, ≤ 12 kN twin; ≥ 5 drops (twin ≥ 12); dynamic elongation ≤ 40%; test masses 80 kg (single/twin), 55 kg (half) | https://theuiaa.org/documents/safety-standards/UIAA_101-DynamicRopes-2025.pdf | PDF read |
| Factor-1.77 test on a fixed point; real falls lower (belayer, slippage, harness) | https://www.petzl.com/DK/en/Sport/What-is-the-impact-force-of-a-rope-?ProductName=CONTACT-9-8-mm | loaded |

## 3. Governing bodies

| Body | URL | Status |
|---|---|---|
| World Climbing (IFSC): Boulder, Lead, Speed, Para Climbing | https://www.ifsc-climbing.org/ | loaded (site describes itself as the International Federation of Sport Climbing, branded World Climbing) |
| IFSC member page listing the Indian Mountaineering Foundation for India | https://www1.ifsc-climbing.org/national-federations/nf-ind/ind-info | loaded (contact details deliberately not reproduced) |
| UIAA: safety standards, UIAA Safety Label | https://www.theuiaa.org/ | loaded |
| IMF: represents India in IFSC; National Sport Climbing Committee and zonal committees; national championship Nov–Dec; six Open Nationals since 2018 (Lead, Speed, Bouldering); first Nationals 1996, New Delhi | https://indmount.org/IMF/sportclimbing | loaded |
| NIM Uttarkashi: Sport Climbing Course (indoor and outdoor; July and August batches); Basic Mountaineering Course (rock, snow, ice) | https://www.nimindia.net/sportclimbing · https://www.nimindia.net/basic-mountaineering-course-bmc | loaded |

## 4. Gyms, crags and operators

| Item | URL | Status |
|---|---|---|
| BoulderBox, Vasant Kunj, Delhi: walls over two floors up to 7 m; online registration + safety induction video; free 15-min "Intro to Climbing" class | https://www.boulderbox.in/ · https://www.boulderbox.in/first-visit | loaded |
| Badami: hundreds of sport routes 4+ to 8b+, trad and bouldering potential, sandstone, ~150 km NW of Hampi, season Nov–Mar, up to 40 °C in summer, some bottom bolts stolen/chopped (stick clip) | https://www.boulderbox.in/blog/badami | loaded (2019 blog post; conditions may have changed) |
| Badami guide: 150+ bolted routes, mostly horizontal cracks, "Bolts for Bangalore", best Oct–Feb, routes 9–23 m single pitch, six areas | Bangalore Climbing Initiatives guide PDF (uploads-ssl.webflow.com, linked on page) | PDF read. Its "no permission needed currently" note is **not repeated** on the page, as access rules can change |
| Golden Boulders, Hampi: classes for all levels by certified instructors; gear rental/sale; bouldering most popular; few bolted lines; granite on the Tungabhadra; UNESCO World Heritage site | https://www.goldenboulders.com/ | loaded |
| Let's Play Climbing: four centres in Bengaluru; guided Badami sport and Hampi bouldering trips (clipping, cleaning, crash-pad placement) | https://mytribe.in/letsplayclimbing/climbing-coaching-training/outdoor-rock-adventures | loaded (page shows a price; **not reproduced**) |

## 5. Left off the page (could not verify)

- **Sport Climbing Federation of India:** its website returned 403 / a browser check to our fetcher. A claim that it is an IOA-recognised national body appears only in search snippets, so it is **not listed**. IMF is listed because World Climbing's own member page names it.
- **Hampi climbing season:** no official source found; the page says to plan for cooler months and confirm locally.
- **Himalayan Mountaineering Institute (Darjeeling):** site did not respond (HTTP 000), so not listed.
- **IMF Climbing Manual PDF:** TLS error; not used.
- UNESCO's Hampi page (whc.unesco.org) timed out; the World Heritage status is from Golden Boulders' page and is well established.

## 5. Deep research (5 Oct 2026, batch deep6)

| Item | Source | Status |
|---|---|---|
| Chalk and friction on real holds: 11 experienced climbers hanging from limestone and sandstone holds; chalk raised the friction coefficient by 18.7% (limestone) and 21.6% (sandstone); sandstone 15.6% higher than limestone without chalk | Amca, Vigouroux, Aritan, Berton, *The effect of chalk on the finger–hold friction coefficient in rock climbing*, *Sports Biomechanics* 11(4):473–479, 2012 — https://www.ingentaconnect.com/content/routledg/sb/2012/00000011/00000004/art00004 (abstract) | ✓ abstract; starting μ 0.60 and slope angles (arctan μ) are **illustrative**, computed by us (stated on page) |
| Contrary earlier result: chalk lowered fingertip friction on sandstone, granite, slate (low-force sliding test) | Li, Margetts, Fowler, *Sports Engineering*, 2001 (as summarised in Amca et al. 2012) | secondary |
| Rope friction at the top bolt: accelerometers on lead climber and belayer, falls 1.3–3.2 m with a GriGri; climber-side ÷ belayer-side tension 1.7–1.9; bolt ≤ 4.5 kN; climber up to ~4 × body weight; fall ≈ 1.8 × nominal (rope stretch ~12%, belayer lifted up to ~1 m); light-belayer limit ~55% of climber mass | R. Schad et al., *Safety Analysis of Sport Climbing Falls*, University of Alabama physics, manuscript — https://pages.physics.ua.edu/faculty/schad/research/Manuscript%20A.pdf (curl 5 Oct 2026) | ✓ read in full (unpublished manuscript; labelled as a university study) |
| Bolt-load table for 4.2 kN climber pull (ratios 1.0 / 1.7 / 1.9 / 8:5:3) and effective μ = ln 1.8 ÷ π ≈ 0.19 | computed by us from the page's Ch 3 fall and the measured ratios | computed |
| A2 pulley ≈ 3 × fingertip force in crimp grip; extrapolated 118 N fingertip → ~373 N pulley; open-hand grip bowstrings much less | A. Schweizer, *Biomechanical properties of the crimp grip position in rock climbers*, *J Biomech* 34:217–223 (2001); ISB 2001 long abstract https://isbweb.org/images/conf/2001/Longabstracts/PDF/1000_1099/1046.pdf | ✓ abstract read; finger-load scenarios **illustrative** |
| **IMF on World Climbing's national-federations list** (India page names Indian Mountaineering Foundation, indmount.org) | https://www1.ifsc-climbing.org/national-federations/nf-ind/ind-info (curl 5 Oct 2026) | **✓ Verified** |
| Name fix: "National Institute of Mountaineering" → **Nehru Institute of Mountaineering (NIM)**, Uttarkashi | https://nimindia.net/ (institute's own site) | ✓ corrected |
| Equilibrium Climbing Station (Bengaluru Hoodi & Indiranagar; Anjuna, Goa; since 2013; first-timers climb with an instructor) — new card | https://www.equilibriumclimbing.com/ (curl 5 Oct 2026; no prices reproduced) | gym's own site; accreditation unverified |
| Golden Boulders (Hampi): "trusted and certified" instructors, no body named | operator's own site (already cited in §1–4) | School's claim |
| Seasons | no verified change; strip untouched | — |

### Accreditation labels on cards (5 Oct 2026)
- IMF → ✓ On World Climbing's national-federations list; IMF championships → ✓ IMF championships
- NIM (body card + 2 course cards) → ✓ Government institute (NIM); note that NIM doesn't issue IFSC qualifications
- BoulderBox, Let's Play Climbing, Equilibrium Climbing Station, Badami trips → Accreditation: unverified
- Golden Boulders → School's claim — "certified instructors"
- Accreditation key callout added under "Where to train".
