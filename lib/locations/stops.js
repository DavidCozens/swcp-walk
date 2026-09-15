// Transport stops that aren't section endpoints or escape points in their own
// right, but that routes call at — so a route can say truthfully where it goes.
export default [
  {
    slug: "porlock",
    name: "Porlock",
    kind: "stop",
    lat: 51.20477, lon: -3.59504,
    address: "Porlock, Somerset",
    notes: "The village, inland of Porlock Weir and about 2.4 km from it. Shops, pubs and the coast road bus",
    verified: null,
  },
  {
    slug: "woody-bay-station",
    name: "Woody Bay Station (Martinhoe Cross)",
    kind: "stop",
    lat: 51.20162, lon: -3.88413,
    address: "A39, Martinhoe Cross, EX31 4RA",
    notes: "On the A39 by the Lynton & Barnstaple Railway station — not Woody Bay on the coast, which is a steep lane away",
    verified: "2026-09-13",
  },
  {
    slug: "barnstaple-bus-station",
    name: "Barnstaple bus station",
    kind: "stop",
    lat: 51.07871, lon: -4.05629,
    address: "Barnstaple",
    notes: "Where the Lynton and Combe Martin buses meet, out of season the only connection between them",
    verified: null,
  },
  {
    // OSM node 10677289703, NaPTAN 1100DEA10830
    slug: "watermouth",
    name: "Watermouth Cove",
    kind: "stop",
    lat: 51.21306, lon: -4.06631,
    address: "A399, Berrynarbor, EX34 9SJ",
    notes: "On the A399 by the cove, about 3 km out of Combe Martin. The 301 all year, the 300 in summer",
    verified: "2026-09-13",
  },
  {
    // OSM node 10745053325, NaPTAN 1100DEA10826
    slug: "hele-bay",
    name: "Hele Bay (Hele Bay Hotel)",
    kind: "stop",
    lat: 51.20904, lon: -4.09857,
    address: "Watermouth Road, Hele, Ilfracombe, EX34 9PZ",
    notes: "On the A399 above Hele beach. The 301 all year, the 300 in summer",
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA11027 "David's Hill"; no OSM node
    slug: "georgeham",
    name: "Georgeham (David's Hill)",
    kind: "stop",
    lat: 51.13592, lon: -4.19563,
    address: "Georgeham",
    notes: "In the village, 2 km inland of Putsborough. Only some 21C journeys, and none on Sundays",
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA10968 "Mullacott Cross"; no OSM node
    slug: "mullacott-cross",
    name: "Mullacott Cross",
    kind: "stop",
    lat: 51.18029, lon: -4.13105,
    address: "A361, near Ilfracombe",
    notes: "A roundabout, not a village. The 21B from Braunton meets the 31 to Woolacombe here; the 31 stops on the far side of the A361",
    verified: "2026-09-13",
  },
  {
    // OSM node 1743751647, NaPTAN 1100DEA11171 "New Inn" (towards Instow);
    // 1100DEA11169, for Barnstaple, is across the road.
    slug: "fremington",
    name: "Fremington (New Inn)",
    kind: "stop",
    lat: 51.07172, lon: -4.12256,
    address: "Mill Hill, Fremington",
    notes: "In the village, 900 m up from Fremington Quay. The 21 and 21A every 15–20 minutes Mon–Sat to Barnstaple and Instow, half-hourly on Sundays",
    verified: "2026-09-13",
  },
  {
    // Appledore end of OSM ferry way 165326919 (node 1768780273, mistagged
    // name=Instow).
    slug: "appledore",
    name: "Appledore (ferry slip)",
    kind: "stop",
    lat: 51.05251, lon: -4.19058,
    address: "The Quay, Appledore",
    notes: "Where the Instow ferry lands, across the Torridge. The 21A to Bideford and Barnstaple from the Seagate Hotel stop, 200 m north",
    verified: "2026-09-13",
  },
  {
    // OSM node 12492120059, NaPTAN 1100DEA10702 "Bideford Quay Stop B"; Stop
    // C, for Westward Ho!, is 100 m south.
    slug: "bideford-quay",
    name: "Bideford Quay",
    kind: "stop",
    lat: 51.01912, lon: -4.20414,
    address: "The Quay, Bideford",
    notes: "Where the 21 and 21A part, for Westward Ho! and Appledore",
    verified: "2026-09-13",
  },
  {
    // OSM node 10951570409, NaPTAN 1100DEA10713 "Northam, opp Durrant House
    // Hotel"; 1100DEA10714, towards Bideford, is across the road.
    slug: "northam-durrant-house",
    name: "Northam (Durrant House Hotel)",
    kind: "stop",
    lat: 51.03351, lon: -4.21266,
    address: "Heywood Road (A386), Northam",
    notes: "550 m up from the path along the Torridge north of Bideford. The 21 and 21A both call, to Bideford and Instow; the 21 goes on to Westward Ho!, the 21A to Appledore",
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA11140 "Instow Westleigh" (NE-bound); 1100DEA11141,
    // towards Bideford, is across the road. No OSM node.
    slug: "instow-westleigh",
    name: "Instow (Westleigh)",
    kind: "stop",
    lat: 51.03809, lon: -4.18782,
    address: "B3233, near Westleigh",
    notes: "On the Instow–Bideford road beside the Tarka Trail. The 21 and 21A both ways. Whether there's a way through from the trail isn't confirmed",
    verified: "2026-09-13",
  },
  {
    // OSM node 4491511464, NaPTAN 1100DEA10735 "Westward Ho!, opp Car Park".
    slug: "westward-ho-car-park",
    name: "Westward Ho! (Car Park)",
    kind: "stop",
    lat: 51.04044, lon: -4.23780,
    address: "Golf Links Road, Westward Ho!",
    notes: "The 21 loops round Westward Ho! and leaves from here for Bideford, Instow and Barnstaple. The 16 on Tuesdays and Thursdays",
    verified: "2026-09-13",
  },
  {
    // OSM node 4491531291, NaPTAN 1100DEA10632 "Abbotsham, opp Church";
    // 1100DEA10633, towards Clovelly, is across the road.
    slug: "abbotsham-church",
    name: "Abbotsham (Church)",
    kind: "stop",
    lat: 51.01590, lon: -4.24780,
    address: "Abbotsham",
    notes: "In the village, inland of Abbotsham Cliff. The 319 both ways, Mon–Sat",
    verified: "2026-09-13",
  },
  {
    // OSM node 11863337708, NaPTAN 1100DEA10636 "Fairy Cross Portledge
    // Gatehouse" (NE-bound); 1100DEA10637, towards Clovelly, is OSM node 11863337709.
    slug: "fairy-cross-portledge",
    name: "Fairy Cross (Portledge Gatehouse)",
    kind: "stop",
    lat: 50.99549, lon: -4.27654,
    address: "A39, Fairy Cross",
    notes: "On the A39 at the Portledge gatehouse. The 319 both ways, Mon–Sat",
    verified: "2026-09-13",
  },
  {
    // OSM node 10969042904, NaPTAN 1100DEA10638 "Horns Cross Acre Road"
    // (SW-bound); 1100DEA10639, towards Bideford, is across the road.
    slug: "horns-cross",
    name: "Horns Cross (Acre Road)",
    kind: "stop",
    lat: 50.98519, lon: -4.30214,
    address: "A39, Horns Cross",
    notes: "On the A39 in Horns Cross. The 319 both ways, Mon–Sat",
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA10640 "Hoops Inn" (E-bound); 1100DEA10641, towards
    // Clovelly, is opposite. No OSM node.
    slug: "hoops-inn-stop",
    name: "Hoops Inn",
    kind: "stop",
    lat: 50.98444, lon: -4.31692,
    address: "A39, Horns Cross",
    notes: "On the A39 outside the Hoops Inn. The 319 both ways, Mon–Sat",
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA10643 "Bucks Cross" (SE-bound); 1100DEA10642, towards
    // Clovelly, is across the road. No OSM node.
    slug: "bucks-cross",
    name: "Bucks Cross",
    kind: "stop",
    lat: 50.98143, lon: -4.35349,
    address: "A39, Bucks Cross",
    notes: "On the A39 above Buck's Mills. The 319 both ways, Mon–Sat",
    verified: "2026-09-13",
  },
  {
    // OSM node 1347453830, NaPTAN 1100DEA05988 "Burnstone Clovelly Cross"
    // (W-bound). Northbound buses use Clovelly Dyke Green, 1100DEA10648,
    // 50 m away.
    slug: "clovelly-cross",
    name: "Clovelly Cross",
    kind: "stop",
    lat: 50.98452, lon: -4.40547,
    address: "A39, Clovelly Cross",
    notes: "On the A39 above Clovelly. Every 319 towards Hartland stops here, including the two morning journeys that skip the Visitor Centre; towards Bideford they stop at Dyke Green, 50 m away",
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA10652 "Velly Lighthouse Cross" (SE-bound); 1100DEA10653,
    // towards Hartland, is across the road. No OSM node.
    slug: "velly-lighthouse-cross",
    name: "Velly (Lighthouse Cross)",
    kind: "stop",
    lat: 50.99299, lon: -4.43612,
    address: "Velly, Hartland road",
    notes: "On the Hartland road between Clovelly Cross and Hartland, 2 km inland of the path. The 319 both ways, Mon–Sat",
    verified: "2026-09-13",
  },
  {
    // OSM node 1347453825, NaPTAN 1100DEA10658 "Hartland Northgate Green"
    // (E-bound): where the 319 and 219 start and finish.
    slug: "hartland",
    name: "Hartland (Northgate Green)",
    kind: "stop",
    lat: 50.99370, lon: -4.48255,
    address: "Hartland",
    notes: "The nearest bus to Hartland Quay: 3.9 km by the road through Stoke, and nothing runs nearer. The 319 to Clovelly and Bideford, the 219 to Bude, Mon–Sat only",
    verified: "2026-09-13",
  },
  {
    // OSM node 682269928, NaPTAN 0800COC56573 "Stibb Coombe" (SW-bound, towards
    // Bude); 0800COC56574, towards Morwenstow, is OSM node 682269931 across the road.
    slug: "coombe-duckpool",
    name: "Coombe",
    kind: "stop",
    lat: 50.87723, lon: -4.54772,
    address: "Coombe, near Kilkhampton",
    notes: "In the hamlet by King William's Bridge, 700 m up the lane from Duckpool. The 217 to Bude and Morwenstow, three a day, weekdays",
    verified: "2026-09-14",
  },
  {
    // OSM node 682271865, NaPTAN 0800COD40799 "Stibb Beach Turn" (SE-bound,
    // towards Bude); 0800COD40800, towards Morwenstow, is OSM node 682271869.
    slug: "stibb-beach-turn",
    name: "Stibb (Beach Turn)",
    kind: "stop",
    lat: 50.86919, lon: -4.53283,
    address: "Stibb, near Bude",
    notes: "Where the lane from Sandymouth meets the Stibb road, 1.6 km inland of the beach car park. The 217 to Bude and Morwenstow, three a day, weekdays. Times here are from the national bus data; the operator's timetable doesn't list the stop",
    verified: "2026-09-14",
  },
  {
    // OSM node 9632281732, NaPTAN 0800COA16598 "Tintagel Molesworth Street"
    // (S-bound, towards Camelford); 0800COA16597, towards Boscastle, is across
    // the road with no OSM node. The timetable's timing point, Visitor Centre
    // (0800COA10024, OSM node 682267948; opposite 0800COA10019, node
    // 682267944), is 110 m east, but projects onto the route at km 17.4, so
    // the walk would be measured along the path as nearly 2 km.
    slug: "tintagel-molesworth-street",
    name: "Tintagel (Molesworth Street)",
    kind: "stop",
    lat: 50.66246, lon: -4.74991,
    address: "Molesworth Street, Tintagel",
    notes: "In the village, up the road from the castle. Every 95 both ways, within a minute of the Visitor Centre times, 110 m east. The morning 181 towards Camelford stops here; the evening 181 towards Boscastle stops opposite the Visitor Centre instead",
    verified: "2026-09-14",
  },
  {
    // OSM node 682267943, NaPTAN 0800COA10018 "Tregatta Bus Shelter" (NW-bound,
    // towards Tintagel); 0800COA10023, towards Camelford, is OSM node 682267947
    // across the road.
    slug: "tregatta",
    name: "Tregatta (Bus Shelter)",
    kind: "stop",
    lat: 50.65401, lon: -4.75184,
    address: "B3263, Tregatta, Tintagel",
    notes: "On the Tintagel–Camelford road at the Trelake Lane turning: 650 m on foot from Treknow, about 1.3 km from the Trebarwith Strand car park. Every 95 both ways, Sundays included, and the 181's two college journeys",
    verified: "2026-09-14",
  },
  {
    // OSM node 682278800, NaPTAN 0800FWX38620 "Delabole Westdowns Road"
    // (SW-bound, towards Port Isaac); 0800FWX38630, towards Camelford, is OSM
    // node 682278850 across the road. Chosen over Delabole Smugglers, the timing
    // point 850 m north-east, which is 4.97 km from Tintagel: under the 5 km
    // cut-off, so the 96 would be offered as a walk from the start of section 13.
    slug: "delabole-westdowns-road",
    name: "Delabole (Westdowns Road)",
    kind: "stop",
    lat: 50.62116, lon: -4.73427,
    address: "Westdown Road (B3314), Delabole",
    notes: "At the south-west end of Delabole where the Treligga road turns off: 1.9 km on foot from Treligga, 2.3 km from the lane end at Tregardock. Most 95s both ways, and the 96s that run through Delabole. Mon–Sat, where the 95 from Tintagel meets the 96 to Port Isaac",
    verified: "2026-09-14",
  },
  {
    // OSM node 682268115, NaPTAN 0800COA10247 "Port Isaac The Pea Pod": the
    // timing point, called at by every journey both ways as buses loop through
    // the village by Mayfield Road and the Co-op.
    slug: "port-isaac-pea-pod",
    name: "Port Isaac (The Pea Pod)",
    kind: "stop",
    lat: 50.59386, lon: -4.82992,
    address: "Back Hill, Port Isaac",
    notes: "At the top of the old village by the war memorial, 600 m from Port Gaverne. The 96 Mon–Sat; on Sundays in season the 95, direct to Tintagel",
    verified: "2026-09-14",
  },
  {
    // OSM node 682278817, NaPTAN 0800FWX38621 "Porteath Port Quin Cross"
    // (E-bound, towards Port Isaac); 0800COA15985, towards Polzeath, is across
    // the road with no OSM node.
    slug: "port-quin-cross",
    name: "Port Quin Cross",
    kind: "stop",
    lat: 50.57523, lon: -4.87257,
    address: "Porteath, near St Endellion",
    notes: "The nearest bus to Port Quin: on the road between St Endellion and Polzeath, 1.6 km inland of the harbour in a straight line. Every 96 through Polzeath, Mon–Sat, and the 95 on Sundays in season",
    verified: "2026-09-14",
  },
  {
    // OSM node 682268111, NaPTAN 0800COA10234 "Trebetherick The Mowhay"
    // (NE-bound, towards Polzeath); 0800COA10235 "opp The Mowhay Cafe", towards
    // Rock, is OSM node 682268112. The timing point.
    slug: "trebetherick-mowhay",
    name: "Trebetherick (The Mowhay)",
    kind: "stop",
    lat: 50.56601, lon: -4.91907,
    address: "Trebetherick",
    notes: "The nearest bus to Daymer Bay: in Trebetherick, 640 m inland of the Daymer Bay car park. The 96 Mon–Sat; on Sundays in season the 95",
    verified: "2026-09-14",
  },
  {
    // OSM node 10087876719, NaPTAN 0800COA10233 "Rock, opp Clock Garage"
    // (towards Wadebridge); 0800COA10231 (SW-bound, towards Polzeath and Port
    // Isaac) is 20 m away with no OSM node. The timing point. 1.48 km from the
    // route; Trewint Lane (0800SCH15977 / 15978), 1.27 km off, has the same buses.
    slug: "rock-clock-garage",
    name: "Rock (Clock Garage)",
    kind: "stop",
    lat: 50.54877, lon: -4.90504,
    address: "Rock Road, Rock",
    notes: "The nearest bus to the ferry: on Rock Road, 1.5 km east of the slipway. The 96 to Polzeath, Port Isaac and Wadebridge Mon–Sat; on Sundays in season the 95. No bus from this side reaches Padstow except by changing at Wadebridge",
    verified: "2026-09-14",
  },
  {
    // OSM node 682268301, NaPTAN 0800COA10420 "Padstow Bus Terminus"
    // (NW-bound). Where the 56 and 57 start and finish; New Street
    // (0800COA15781 / 15782), 50 m nearer the harbour, has the same buses.
    slug: "padstow-bus-terminus",
    name: "Padstow Bus Terminus",
    kind: "stop",
    lat: 50.53860, lon: -4.93621,
    address: "Treverbyn Road, Padstow",
    notes: "440 m south of the ferry pontoon. The 57 to Wadebridge and Bodmin, about hourly Mon–Sat and 6 a day on Sundays; the 56 to Porthcothan and Newquay. For Rock and Port Isaac by bus, change at Wadebridge",
    verified: "2026-09-14",
  },
  {
    // OSM node 682278526, NaPTAN 0800FWX38552 "Windmill Trevone Turn"
    // (E-bound, towards Padstow); 0800FWX38564, towards Harlyn and Newquay,
    // is OSM node 7685499452 across the road. The Trevone Bay Car Park and
    // Village Hall stops in Trevone itself have no buses.
    slug: "trevone-turn",
    name: "Windmill (Trevone Turn)",
    kind: "stop",
    lat: 50.53693, lon: -4.96941,
    address: "B3276, Windmill, near Trevone",
    notes: "The nearest bus to Trevone: on the Padstow–St Merryn road where the Trevone lane turns off, 1.1 km inland of the beach car park in a straight line. Every 56 both ways, Sundays included, 7–9 minutes from Padstow Bus Terminus. Stagecoach's 183 college bus to Bodmin also calls on term-time weekday mornings",
    verified: "2026-09-14",
  },
  {
    // OSM node 682268323, NaPTAN 0800COA10430 "Constantine Bay Surf Stores"
    // (SW-bound). Buses loop through the village by Towan and call here in both
    // directions. The Trevose Golf Club stops (0800SCH15924 / 15925) have no
    // buses. 0.8 km from the route; the only bus for Treyarnon too, since
    // Treyarnon Turn (0800SCH15914) is 1.5 km from its car park.
    slug: "constantine-bay-surf-stores",
    name: "Constantine Bay (Surf Stores)",
    kind: "stop",
    lat: 50.53017, lon: -5.01164,
    address: "Constantine Bay, Padstow",
    notes: "In the village by the shop: 740 m inland of the Constantine Bay beach car park, 800 m from Treyarnon's. Every 56 both ways, Sundays included: about 20 minutes to Padstow Bus Terminus, 10 to Porthcothan",
    verified: "2026-09-14",
  },
  {
    // OSM node 682279888, NaPTAN 0800FWZ38445 "Crantock Bus Shelter", in The
    // Square: the timing point, called at both ways as buses loop through the
    // village. Chapel Close (0800COC31634; opposite 0800COC31633, OSM node
    // 682269328) and Winstowe Terrace (0800COC31631 / 31630) have the same
    // buses within a minute. 550 m from the route; the crantock escape record
    // is 600 m away, too far to serve through it.
    slug: "crantock-bus-shelter",
    name: "Crantock (Bus Shelter)",
    kind: "stop",
    lat: 50.40183, lon: -5.10973,
    address: "The Square, Crantock",
    notes: "In the village square, 600 m inland of the Crantock beach car park in a straight line. The 87 to Newquay and Perranporth, hourly Mon–Sat and every two hours on Sundays, and the 85 to Newquay and Holywell Bay Mon–Sat: about 23 minutes to Newquay bus station",
    verified: "2026-09-15",
  },
  {
    // Centre of OSM way 182827641, "Fern Pit Ferry" (amenity=ferry_terminal),
    // below the Fern Pit Beach Kitchen on the Newquay bank of the Gannel, 36 m
    // north of the gannel water line. Not the "fern-pit" food record, the café
    // 60 m up the steps: a route can only call at a stop, escape, stay or
    // endpoint. The 58's Pentire Hotel stop (0800COC31500, OSM node 682269187)
    // is 220 m away, Pentire Car Park (0800COC31499, node 682269183) 250 m.
    slug: "fern-pit-landing",
    name: "Fern Pit (ferry landing)",
    kind: "stop",
    lat: 50.40934, lon: -5.11193,
    address: "Riverside Crescent, Pentire, Newquay",
    notes: "The Newquay landing of the summer Fern Pit ferry to Crantock beach, down the café's private footpath, open 10am – 6pm in season. The 58 town bus calls at Pentire Hotel and Pentire Car Park, 220–250 m away, every two hours Mon–Sat: 11–13 minutes to Newquay bus station",
    verified: "2026-09-15",
  },
  {
    // OSM node 682268622, NaPTAN 0800COC04306 "Old School" (E-bound); 0800COC04307,
    // opposite, has no OSM node. Timing point for both the 304 and the 315.
    // 2.4 km from the route.
    slug: "mount-hawke-old-school",
    name: "Mount Hawke (Old School)",
    kind: "stop",
    lat: 50.28339, lon: -5.20626,
    address: "Mount Hawke",
    notes: "In the village, inland between Porthtowan and St Agnes. The 304 to Truro and the 315 to St Agnes and Redruth, Mon–Sat",
    verified: "2026-09-15",
  },
  {
    // OSM node 682268744, NaPTAN 0800COC30451 "Redruth, opp Railway Station", on
    // Station Road: where the 49 and 48 from Portreath set down and the 315
    // towards Porthtowan and St Agnes picks up; bustimes.org lists the 14 and 18
    // to Truro here too. Railway Station (SW-bound, 0800COC30214, OSM node
    // 682268710), 110 m east, is where the 315 from St Agnes and the 49 towards
    // Portreath call. 5.3 km from the route: a change point, not a stop near it.
    slug: "redruth-railway-station",
    name: "Redruth (Railway Station)",
    kind: "stop",
    lat: 50.23293, lon: -5.22687,
    address: "Station Road, Redruth",
    notes: "Outside Redruth station, on the main line to Truro and Penzance. Where the 49 from Portreath meets the 315 to Porthtowan and St Agnes, and the 14 and 18 to Truro railway station, about every 15 minutes Mon–Sat and half-hourly on Sundays, 30 minutes",
    verified: "2026-09-15",
  },
  {
    // OSM node 262345551, "Lelant" (railway=station, request_stop=yes), NaPTAN
    // 9100LELANT, CRS LEL. On the estuary below St Uny church, 40 m from the
    // route and 730 m from the lelant-saltings escape record. Lelant Village
    // Hall bus stops on Fore Street (0800COD40485, OSM node 682270938; opposite
    // 0800COD40486, node 682270940), 280 m up the hill, have the 14 and 17 both
    // ways; the 14 and 17 serve this record through them.
    slug: "lelant-station",
    name: "Lelant station",
    kind: "stop",
    lat: 50.18399, lon: -5.43656,
    address: "Station Hill, Lelant",
    notes: "A request stop on the St Ives Bay Line, where roughly one train in two calls: signal the driver to board, tell the conductor to get off. Mon–Sat 12–13 trains a day each way, Sundays 5. Unstaffed, step-free, no ticket machine. Buses to St Ives and Hayle about hourly from Lelant Village Hall on Fore Street, up the hill",
    verified: "2026-09-15",
  },
  {
    // OSM node 6605728686, "St Erth" (railway=station), NaPTAN 9100STERTH, CRS
    // SER. The bus interchange in the park and ride, 0800COA16098 (OSM node
    // 9198040817), is 40 m away. 670 m from the section 20 route, south of the
    // Griggs Quay bridge and of where the Hayle estuary line begins.
    slug: "st-erth-station",
    name: "St Erth station",
    kind: "stop",
    lat: 50.17057, lon: -5.44392,
    address: "Rose-an-Grouse, St Erth",
    notes: "Where the St Ives Bay Line meets the main line to Truro and Penzance, with a park and ride. Ticket office Mon–Fri 7.30am – 2.45pm, Sat 8am – 1pm; toilets; no taxi rank, so book ahead. Buses at the interchange by the car park: the 17 to Lelant, Carbis Bay and St Ives, and Penzance, about hourly Mon–Sat and every two hours on Sundays; the 18 to Hayle in 6–7 minutes and on to Camborne, hourly every day",
    verified: "2026-09-15",
  },
  {
    // OSM node 687954286, "St Ives" (railway=station), NaPTAN 9100STIVES, CRS
    // SIV, above Porthminster beach, 50 m from the route. The Harbour Hotel bus
    // stops on The Terrace (0800COD40446, OSM node 682270867, towards Hayle, 60 m;
    // 0800COD40447, node 682270868, towards St Ives, 150 m) are called at by the
    // 14 and 17, which serve this record through them. They start and finish at
    // The Terrace (0800COA16554, node 5538689556), by the Malakoff bus station
    // (OSM way 241162320), 215 m away.
    slug: "st-ives-station",
    name: "St Ives station",
    kind: "stop",
    lat: 50.20885, lon: -5.47777,
    address: "Porthminster, St Ives",
    notes: "End of the St Ives Bay Line: every half hour or so to St Erth for the main line, 12 minutes. Buses from The Terrace and the Malakoff bus station just above: the 14 to Carbis Bay, Lelant, Hayle and Camborne, hourly, and the 17 to Lelant, St Erth and Penzance, hourly Mon–Sat; the 16 and 16A inland and by Zennor to Penzance. Ticket machine; unstaffed",
    verified: "2026-09-15",
  },
];
