# Skateboarding: sources and verification log

Base checks 3 Oct 2026 (IST); deep5 pass 5 Oct 2026 (IST). Every fact on the page comes from the source listed here or is standard physics worked on the page. Fees, entry charges, phone numbers and email addresses were deliberately **not reproduced**.

## 1. Physics (standard science, worked on the page)

| Item | Basis | Status |
|---|---|---|
| Coasting d = v²/(2 C<sub>rr</sub> g); C<sub>rr</sub> 0.01–0.02 | mechanics; C<sub>rr</sub> **illustrative** | recomputed (4 m/s, 0.02 → 41 m) |
| Lean angle tan φ = v²/(gr) | mechanics | recomputed (29°, 33°, 25°) |
| Ollie as a projectile: v = √(2gH), airtime 2v/g | mechanics, idealised | recomputed (30 cm → 2.43 m/s, 0.49 s, 1.98 m at 4 m/s) |
| Ramp v = √(2gh); g-load at the bottom of the transition 1 + 2h/r | energy and circular motion, no friction | recomputed (1.5 m, r 1.8 m → 19.5 km/h, 2.67 g, 1,570 N for 60 kg) |
| Fall deceleration = h / stopping distance (in g) | mechanics; stopping distances **illustrative** | 20 g / 5 g / 2 g |
| Wheel rpm = v/(πd) | geometry | 54 mm at 15 km/h → 1,474 rpm |
| How trucks steer, ollie technique, pumping, wheel hardness | general skateboarding knowledge | qualitative only |

## 2. Governing bodies and rules

| Item | URL | Status |
|---|---|---|
| World Skate: governing body for skateboarding and roller sports, recognised by the IOC | https://www.worldskate.org/skateboarding.html | loaded |
| World Skate Academy: coach/skate-instructor courses and judge/referee courses (online and on site); only Academy judges and referees get an international licence; refresher courses | https://www.worldskate.org/about/world-skate-academy.html | loaded |
| RSFI: "the governing body for skateboarding and roller sports in India"; skateboarding page with rulebook 2022, annexures (w.e.f. 1 Apr 2023), rulebook 2018; 3-member Indian team at the 2019 Park Skateboarding World Championship (not used) | https://indiaskate.com/skateboarding/ | loaded |
| RSFI Skateboarding Rulebook 2022 (World Skate rules): Olympic disciplines street and park; no age limits; park helmets for all ages, street helmets under 18, in practice and competition; concussion protocol; park best of 2 (up to 4) runs of 30–50 s, five judges 0–100, drop high and low, average the other three to two decimals; Olympic street format 2 × 45 s runs + 5 single tricks, best run + 2 best tricks | https://indiaskate.com/wp-content/uploads/2024/02/10-SKATEBOARDING-RULEBOOK-2022-compressed.pdf | PDF downloaded and read with pdftotext |
| RSFI Skater Annual Registration 2026–27 | https://indiaskate.com/registered-skaters-2026-27/ | HTTP 200; RSFI home page states registration is mandatory (as checked for the skating page) |
| 64th National Roller Skating Championships, 5–15 Dec 2026, Karnataka, hosted by KRSA; technical-officials letter covers inline freestyle, skateboarding and roller derby | https://indiaskate.com/64th-national-roller-skating-championships-2026-technical-officials-letters-2/ | loaded |
| RSFI Karnataka unit page | https://indiaskate.com/karnataka/ | loaded |

## 3. Places

| Item | URL | Status |
|---|---|---|
| Janwaar Castle: skatepark in Janwaar, a remote village in Madhya Pradesh; "In 2015, a skatepark arrived"; rules "No school, no skateboarding" and "Girls first"; Asha Gond became national skateboarding champion and runs the community organisation | https://ulrikereinhard.com/blog/2026/07/04/what-janwaar-learned-what-telc-can-use/ | loaded (founder's blog, July 2026) |
| Janwaar Castle: construction from December 2014 by 12 skateboarders from seven countries with locals; Barefoot Skateboarders Organisation (youth non-profit) runs skateboarding sessions, community centre, school and homestays | https://ulrikereinhard.com/blog/2023/02/08/janwaar-castle-empowerment-through-transculturation/ | loaded (founder's blog, 2023) |
| Lohia Park, Gomti Nagar, Lucknow: LDA open-air skate park; "skating zone is complete and ready for use"; designed for beginners and young skaters | https://timesofindia.indiatimes.com/city/lucknow/lohia-park-to-get-citys-1st-open-air-skating-zone/articleshow/129111676.cms | loaded (TOI, 6 Mar 2026). Entry terms **not reproduced** |
| Cave Skatepark (Holystoked, Bengaluru) demolished in January 2026 after the collective could not keep paying rent | https://www.newstrailindia.com/inner.php?id=29872 | loaded via WebFetch (Newstrail, 21 Apr 2026) — **not listed as a place**, mentioned as closed |
| Jawahar Bal Bhavan skatepark, Cubbon Park, Bengaluru: announced Jan 2026, expected Apr–May 2026 | News18 / The Hans India / Oneindia (Jan 2026) via search | **opening not confirmed**; mentioned only as a callout telling readers to check |

## 4. Not verified / left off

- **Skateboarding Federation of India**: no official site found; skateboardingfederationofindia.com didn't resolve. **Not listed.**
- **Janwaar Castle's own website** (janwaar-castle.org) is now a domain-for-sale page, so the page links the founder's blog instead.
- **Holystoked** website returns "Store unavailable" (HTTP 402); its Cave park has closed.
- **Other Bengaluru, Delhi and Pune parks** (Play Arena, Backyard, Sam Sk8s, GLC) appear only in map listings and reviews; playarena.in was blocked. **Not listed.**
- **Olympic event details** beyond what the rulebook says were not checked.

## 5. Deep research (5 Oct 2026, batch deep5)

| Item | Source | Status |
|---|---|---|
| Truck steering: tan δ = tan λ · sin β (λ pivot-axis angle from deck); Varszegi et al. write sin β cot κ = tan δ (κ rake angle); Hubbard 1979 origin | Varszegi, Takacs, Stepan, Hogan, "Stabilizing skateboard speed-wobble with reflex delay", J. R. Soc. Interface 13:20160345 (2016) — author PDF https://www.mm.bme.hu/~varszegi/pages/files/pub/2016/RSInter_2016_varszegi.pdf (downloaded, pdftotext, 5 Oct 2026) | ✓ formula read in eq. (2) |
| Turn radius R ≈ L/(2 tan δ), L = 0.36 m illustrative; table 2°/5°/10° tilt × 50°/44° axis → 4.3/1.7/0.87 m and 5.3/2.1/1.1 m; 3 m carve needs ≈2.9° (50°) | geometry, recomputed in Python | wheelbase and angles **illustrative**; bushing compliance/slip ignored (stated) |
| Lean on 1.7 m curve at 2/3/4/5 m/s → 13/28/43/56° | tan φ = v²/(gR), recomputed | ✓ |
| Speed wobble: stable control-gain region shrinks with speed; standing ahead of board centre tolerates larger reflex delay; low suspension stiffness can destabilise some speed ranges | same paper, abstract + conclusions | ✓ (qualitative on page) |
| Wheel meets step: backward share sin θ, cos θ = (R−h)/R; 52/60/70 mm × 3/5/10 mm | geometry, recomputed | rigid-wheel comparison only (stated) |
| 608 bearings: 8 mm bore, 22 mm OD, 7 mm wide; ABEC = precision/tolerance | Sector 9, https://sector9.com/blogs/blog/skateboard-bearing-sizes-what-you-need-to-know (WebFetch 5 Oct 2026) | manufacturer blog |
| ABEC (Annular Bearing Engineers' Committee) sets dimensions/tolerances; ignores side load, impact, lubrication, shields; ~90% of skating < 2,000 rpm | Bones Bearings, https://bonesbearings.com/support/abec (WebFetch 5 Oct 2026) | manufacturer page (commercial; attributed on page) |
| Durometer "A" scale, softer = more grip/bump absorption | general knowledge + link to cycling page roughness-resistance section | qualitative; no durometer numbers given |
| **RSFI on World Skate national federations** ("INDIA Roller Skating Federation of India (India Skate)", web link indiaskate.com) | https://www.worldskate.org/about/organisation/national-federations.html (curl 5 Oct 2026) | **✓ Verified** |
| RSFI notice 21 Sep 2026: MYAS issued 2026 affiliation letter; Indian team at World Skate Games 2026 | https://indiaskate.com/official-recognition-renewal-issuance-of-2026-ministry-affiliation-and-world-skate-games-2026-participation/ (WebFetch) | federation's own notice (labelled as such); MYAS list (yas.gov.in) timed out |
| worldskateindia.com also styles itself "Official Website of RSFI" (search result) | did not load (curl 000) | noted neutrally; page uses the URL World Skate links |
| "Skateboarding India Federation" (skateboardindia.org): promotes skateparks; team listed by initials; UK + India WhatsApp | https://www.skateboardindia.org/about (WebFetch) | **not** on World Skate list; not shown as governing body |
| Desert Dolphin Skatepark, Khempur (near Udaipur): built for Netflix *Skater Girl* by 100 Ramps + volunteers; 14,500 sq ft; workshops from Oct 2018; free public park after Apr 2019; daily free training workshops; adviser "certified skateboarding head judge for the Asian Extreme Sports Federation" | https://www.desertdolphinskatepark.com/about and / (WebFetch + curl 5 Oct 2026) | Park's claim; coaching accreditation unverified |
| WallRide Park, Peeran Cheruvu, Hyderabad: 2017, Hamza Khan; skate park + "India's first asphalt pump track"; coached classes; safety gear mandatory under 16; 3–9 pm, closed Wednesdays | https://wallridepark.com (curl 5 Oct 2026; **prices on the site not reproduced**) | Accreditation unverified |
| Community list "Skateparks of India" (indianskateculture.in) | curl 5 Oct 2026 | **not used as a source**: undated, still lists Holystoked (closed Jan 2026) |
| Jawahar Bal Bhavan skatepark, Cubbon Park | search 5 Oct 2026: only Jan 2026 announcements (April–May target) | still **not confirmed open**; callout kept |
| Skate Pro Academy (Delhi) | skateproacademy.com returned 500 / no response | not listed |
| Seasons | no change (strip untouched) | — |

### Accreditation labels on cards (5 Oct 2026)
- RSFI card → ✓ On World Skate's national-federations list + Federation's notice — MYAS recognition 2026
- Janwaar Castle → Accreditation: unverified
- Lohia Park → News report — LDA public park; Coaching accreditation: none listed
- Desert Dolphin → Park's claim (AESF head judge adviser); Coaching accreditation: unverified
- WallRide Park → Accreditation: unverified
- RSFI state units → ✓ Listed by RSFI; registration / rulebook → ✓ RSFI (on World Skate list); 64th Nationals → ✓ RSFI championship
- World Skate Academy coach / judge courses → ✓ World Skate (official)
