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
  {
    // OSM node 1106947133, NaPTAN 0800COD40192 "Boscaswell Stores" (E-bound):
    // where the 4 towards Morvah and Penzance, and the 7A towards Zennor and
    // St Ives, pick up. Opposite, 0800COD40191 (OSM node 12023741347), for the
    // 4A and 4B towards St Just; NW-bound 0800COA15450 (NaPTAN 50.15187,
    // -5.66501, no OSM node) for the 4 into Lower Boscaswell. A timing point
    // for the 4 and the 7. From Pendeen Watch 1.5 km in a straight line and
    // 1.7 km by the lighthouse lane and Leat Road; not 800 m. Boscaswell
    // Estate (0800COD40193, OSM node 5911263613), on the 4's loop through
    // Lower Boscaswell, is 1.4 km by road and has every 4 towards Penzance a
    // few minutes before Boscaswell Stores. The North Inn is 140 m away.
    slug: "pendeen-boscaswell-stores",
    name: "Pendeen (Boscaswell Stores)",
    kind: "stop",
    lat: 50.15177, lon: -5.66442,
    address: "B3306, Pendeen",
    notes: "In Pendeen village on the B3306, near the North Inn. The 4 to Morvah and Penzance, hourly Mon–Sat, 33 minutes, and the other way along the B3306 to Trewellard, Botallack and St Just, 12 minutes; the 4A and 4B by St Just in the evenings and on Sundays; in the summer holidays the 7 along the coast road to Gurnard's Head, Zennor and St Ives, and by St Just to Sennen Cove and Land's End. For St Ives out of the summer, change at Penzance",
    verified: "2026-09-15",
  },
  {
    // OSM node 682270200, NaPTAN 0800COD40048 "Lamorna Turn" (SW-bound, towards St
    // Buryan and Sennen); 0800COD40047 (N-bound, towards Penzance) and
    // 0800COA15620 (SE-bound, the 347 into the valley) are beside it with no OSM
    // nodes. The 1 and 1A call both ways. 1.6 km by the valley road from the
    // lamorna endpoint.
    slug: "lamorna-turn",
    name: "Lamorna Turn",
    kind: "stop",
    lat: 50.07169, lon: -5.57908,
    address: "B3315, Lamorna Turn, near Lamorna",
    notes: "On the B3315 where the Lamorna valley road turns off, 1.6 km up the valley from the cove. The 1 to St Buryan, Sennen Cove and Land's End, and the 1A to Treen, Porthcurno and Land's End, alternately about hourly Mon–Sat and every two hours on Sundays; both to Newlyn and Penzance, about 35 minutes",
    verified: "2026-09-15",
  },
  {
    // Centre of OSM way 619182268, "Lamorna Village Hall"; NaPTAN 0800COA15819
    // "Village Hall Car Prk" (SE-bound) is 80 m away with no OSM node. The Wink Inn
    // stops (0800COD40049; 0800COA15699, OSM node 1768695319), nearer the cove,
    // have no services. 0.8 km by the valley road from the lamorna endpoint.
    slug: "lamorna-village-hall",
    name: "Lamorna (Village Hall)",
    kind: "stop",
    lat: 50.06675, lon: -5.57088,
    address: "Lamorna valley road, Lamorna",
    notes: "In the valley, 0.8 km up the road from the cove past the Lamorna Wink. Only the 347 to Penzance, once each way Mon–Fri: out at 09:30, back at 12:58. Every other bus is at Lamorna Turn, 800 m further up",
    verified: null,
  },
  {
    // Centre of OSM way 65168443, "Penzance Bus Station" (amenity=bus_station,
    // NaPTAN 080G001). Stands A–F are NaPTAN 0800COZ06381–06386, OSM nodes
    // 682276427, 682276420, 682276415, 682276413, 682276410, 682276403. Penzance
    // railway station (OSM node 6900327462) is 100 m north-west. Not near section
    // 23; the change point for it, and on section 24's route. The 17's comment in
    // routes.js says it calls here too.
    slug: "penzance-bus-station",
    name: "Penzance bus station",
    kind: "stop",
    lat: 50.12128, lon: -5.53175,
    address: "Wharf Road, Penzance",
    notes: "By the railway station at the end of the main line. The 1 and 1A to Newlyn, Lamorna Turn, St Buryan, Sennen Cove, Porthcurno and Land's End from Stand B; the 6 to Newlyn and Mousehole from Stand A; the 2 to Long Rock, Marazion, Praa Sands, Porthleven and Helston from Stand E; the 347 to Lamorna from Stand F; the 17 to Long Rock, St Erth and St Ives; the 4 by Morvah to Pendeen and St Just, and the 4A direct to St Just. In the summer holidays the 7 and 7A round the coast by St Ives and Land's End",
    verified: "2026-09-15",
  },
  {
    // OSM node 682271152, NaPTAN 0800COD40548 "The Square" (NW-bound, towards
    // Long Rock and Penzance); 0800COD40549 (E-bound, towards Helston), OSM node
    // 682271155, 50 m east. The 2, 2A, 39A and 15 call both ways. 40–95 m from
    // where the section 24 route ends; the marazion endpoint record, 1 km east, is
    // served by the Cemetery stops instead.
    slug: "marazion-the-square",
    name: "Marazion (The Square)",
    kind: "stop",
    lat: 50.12342, lon: -5.47427,
    address: "The Square, Marazion",
    notes: "In the middle of Marazion. The 2 to Long Rock and Penzance every half hour Mon–Sat and hourly on Sundays, 10–12 minutes; the other way by Perranuthnoe to Goldsithney, or by Rosudgeon, Praa Sands and Porthleven to Helston. A few more to Penzance on the 39A and 15, Mon–Sat; the 15 also to St Erth station and Hayle, 3 a day",
    verified: "2026-09-16",
  },
  {
    // OSM node 682268716, NaPTAN 0800COC30257 "Blue Anchor" (W-bound), on
    // Coinagehall Street: where the 2 leaves for Porthleven and Penzance and the
    // 34 for Mullion and the Lizard. Opposite, 18 m away, Seven Stars
    // (0800COC30258, OSM node 682268717), where both set down coming into Helston;
    // bustimes.org also lists the 3, 36, 36B, 37, 38, 39 and National Express 404
    // and 504 there. 3.3 km from the section 26 route.
    slug: "helston-coinagehall-street",
    name: "Helston (Coinagehall Street)",
    kind: "stop",
    lat: 50.10050, lon: -5.27666,
    address: "Coinagehall Street, Helston",
    notes: "In the middle of Helston, where the Porthleven and Lizard buses meet. From Blue Anchor: the 2 to Porthleven, 10–12 minutes, and on by Praa Sands and Marazion to Penzance; the 34 by Culdrose, Poldhu Cove and Mullion to the Lizard, about an hour. Both hourly Mon–Sat and every two hours on Sundays. Buses into Helston stop opposite, at Seven Stars. The 3 to Falmouth, the 36 by Goonhilly to Coverack and St Keverne Mon–Sat, the 36B by Helford and Porthallow to St Keverne once a day Mon–Fri, the 35 by Gweek to Helford Passage and Falmouth, and National Express to London",
    verified: "2026-09-16",
  },
  {
    // OSM node 682268732, NaPTAN 0800COC30411 "Car Park" (N-bound), on the B3294
    // at North Corner, by the car park (OSM way 140066629) and toilets (way
    // 807664855). The only stop in Coverack; the 36 uses it both ways. 410 m from
    // the coverack endpoint record and 210 m from where the section 27 route
    // ends. No opposite stop in NaPTAN.
    slug: "coverack-car-park",
    name: "Coverack (Car Park)",
    kind: "stop",
    lat: 50.02619, lon: -5.09752,
    address: "B3294, North Corner, Coverack",
    notes: "At North Corner, above the harbour by the car park and toilets. Only the 36, Mon–Sat, no Sunday buses: five a day on to St Keverne, 8 minutes, and two straight to Helston, 11:00 and 14:22 (15:00 on Saturdays and in school holidays), 38 minutes to Sainsbury's; otherwise ride on by St Keverne, about 50. For the Lizard change at Helston Sainsbury's to the 34, 1 h 30 – 2 h 30 in all",
    verified: "2026-09-16",
  },
  {
    // Where OSM ferry ways 43993324 (from Falmouth) and 352272841 (to Place)
    // meet, on St Mawes quay.
    // The 50 and the Wednesday community bus go through this record: St Mawes
    // Car Park (0800COC30870, OSM node 682268881), 170 m north.
    slug: "st-mawes-quay",
    name: "St Mawes quay (ferries)",
    kind: "stop",
    lat: 50.15814, lon: -5.01406,
    address: "The Quay, St Mawes",
    notes: "Where the St Mawes Ferry from Falmouth lands and the Place ferry leaves, on the quay in St Mawes. The St Mawes Ferry's ticket office is halfway down the quay, 8.45am – 5.45pm April to October; in winter buy on board. Buses leave from the Car Park stop, 170 m up: the 50 by Portscatho, Pendower Turn and Tregony to Truro every day, and on Wednesdays the Roseland community bus to Veryan",
    verified: "2026-09-16",
  },
  // ── Section 28 ──
  {
    // NaPTAN 0800COC30427 "Car Park" (S-bound), position from NaPTAN as OSM has no
    // node; the 36B uses it both ways. By the Cornwall Council pay car park (OSM way
    // 33822594) and free toilets (way 1426391343) at the top of the village. 44 m
    // from the section 28 route; 374 m in a straight line and 685 m on OSM's ways,
    // at any tide, from the helford-village endpoint at the ferry jetty. The only
    // stop in Helford.
    slug: "helford-car-park",
    name: "Helford (Car Park)",
    kind: "stop",
    lat: 50.09220, lon: -5.13433,
    address: "Helford car park, Helford",
    notes: "At the top of the village by the pay car park and toilets. Only the 36B, once each way Mon–Fri: 10:00 by St Martin and Gunwalloe to Helston, Sainsbury's 10:36; 14:03 by Manaccan, Gillan and Porthallow to St Keverne The Square, 14:28. No weekend buses",
    verified: "2026-09-16",
  },
  {
    // South end of OSM ferry way 963909278 "Gillan Creek", node 2223465111, on the
    // beach below the house Halamana (way 799375096), 290 m across the creek from
    // St Anthony church (way 158587049). 32 m from the section 28 route. The north
    // landing, by Sailaway's pontoon, is 93 m from the st-anthony-in-meneage escape
    // record. Gillan Bus Shelter, on the 36B, is 765 m south in a straight line.
    slug: "halamana",
    name: "Gillan Creek ferry (Halamana)",
    kind: "stop",
    lat: 50.08701, lon: -5.10135,
    address: "Halamana beach, Gillan Creek, Manaccan",
    notes: "The Gillan Creek ferry's south landing: Sailaway's signboard on the beach opposite St Anthony church. Open the sign so the boat can see you, or ring 01326 231357. On demand in working hours, 1 April – 31 October, £5 a person, dogs free",
    verified: "2026-09-16",
  },

  // ── Section 29 ──
  {
    // OSM node 682268723 (named "Trebah Gardens" in OSM), NaPTAN 0800COC30327
    // "Helford Passage Turn" (SW-bound); OTS's timetable calls it "Helford Passage
    // Trebah Gardens". Where the 35 and 63 turn, so used both ways; no opposite
    // stop. 507 m from the section 29 route; 687 m in a straight line and 722 m on
    // OSM's ways from the helford-passage endpoint, up the lane from the Ferry Boat
    // Inn. The stops actually named Trebah Gardens (0800COC30329 / 30328) are 370 m
    // east.
    slug: "helford-passage-turn",
    name: "Helford Passage (Turn)",
    kind: "stop",
    lat: 50.10607, lon: -5.12473,
    address: "Helford Passage road, by Trebah Garden",
    notes: "At the top of the lane down to Helford Passage and the Ferry Boat Inn. The 35 and 63 by Mawnan Smith and Budock Water to Falmouth The Moor, 20–25 minutes, about hourly Mon–Sat, 08:05 – 18:33; no Sunday buses. Two journeys a day each way by Constantine and Gweek to Helston",
    verified: "2026-09-16",
  },
  {
    // OSM node 682276135, NaPTAN 0800COZ06299 "The Moor" (NE-bound), Stop B, on
    // Webber Street: where every OTS service starts and ends. The Moor A
    // (0800COC30662, position 50.15477, -5.07270; OSM platform node 792595312 carries
    // a stale route_ref), 25 m away, has Go Cornwall's 3, 32, 32A, 33 and 33A on
    // bustimes.org. 210 m from the section 29 route; 318 m from the falmouth endpoint.
    slug: "falmouth-the-moor",
    name: "Falmouth (The Moor)",
    kind: "stop",
    lat: 50.15477, lon: -5.07303,
    address: "Webber Street, The Moor, Falmouth",
    notes: "Falmouth's bus hub, in the town centre by the library. Stop B, OTS: the 35 and 63 by Mawnan Smith to Helford Passage, about hourly Mon–Sat; the 67 coastal circular by Pendennis Point, Gyllyngvase and Swanpool, hourly Mon–Sat; the 64 and 64A by Swanpool; the 35A by Gweek to Helston; the 60 town shuttle. No OTS buses on Sundays. Stop A, Go Cornwall: the 3 to Helston by Rame, the 32A to Truro, the 33 to Redruth",
    verified: "2026-09-16",
  },
  {
    // OSM node 30742864 "Falmouth Docks" (railway=station), NaPTAN 9100FALMTHD, CRS
    // FAL; platform way 64435532. The end of the Maritime Line. 100 m from the
    // section 29 route; nearest named street Pendennis Rise. Bar Road pay car park
    // (way 64435515) is 220 m west.
    slug: "falmouth-docks-station",
    name: "Falmouth Docks station",
    kind: "stop",
    lat: 50.15083, lon: -5.05561,
    address: "Pendennis Rise, Falmouth",
    notes: "The end of the Maritime Line, below Pendennis Castle by the docks. Trains to Falmouth Town, Penryn and Truro, about 27 minutes, half-hourly Mon–Sat and hourly on Sundays. Unstaffed; ticket machine, step-free, car park, on GWR's timetable",
    verified: "2026-09-16",
  },
  {
    // OSM node 30742869 "Falmouth Town" (railway=station), NaPTAN 9100FALMTHT, CRS
    // FMT; platform way 73210427. 290 m from the section 29 route, above the
    // National Maritime Museum; Avenue Road is the nearest street, 77 m. OSM tags it
    // wheelchair=no; GWR puts it in access category B, some step-free access.
    slug: "falmouth-town-station",
    name: "Falmouth Town station",
    kind: "stop",
    lat: 50.14835, lon: -5.06485,
    address: "Off Avenue Road, Falmouth",
    notes: "On the Maritime Line, a short walk up from Discovery Quay and the National Maritime Museum. Trains to Truro, about 24 minutes, half-hourly Mon–Sat and hourly on Sundays; Falmouth Docks 3 minutes the other way. Unstaffed; ticket machine and car park; step-free access only in part, so check GWR's station page. The 60 town shuttle calls at the station",
    verified: "2026-09-16",
  },
  // Section 30.
  {
    // OSM node 11610802638, NaPTAN 0800COC30838 "Bessy Beneath" (S-bound, towards
    // St Mawes and Portloe); opposite 0800COC30839 (OSM node 11610802637), 10 m,
    // towards Tregony and Truro. The 50, the 51 and the Wednesday community bus
    // call both ways. By the Texaco garage (OSM node 1610943626) and Roseland
    // Local shop (node 5501635438). 3.2 km from the section 30 route.
    slug: "ruan-high-lanes",
    name: "Ruan High Lanes (Bessy Beneath)",
    kind: "stop",
    lat: 50.24421, lon: -4.91420,
    address: "A3078, Ruan High Lanes",
    notes: "At the crossroads on the A3078, by a garage and shop. Where the 51 from Portloe and Veryan meets the 50, Mon–Sat; they connect only at some times of day. The 50 to Pendower Turn, Portscatho and St Mawes Car Park, about 35 minutes, or Tregony and Truro, about 35; the 51 to Portloe and Veryan, or Tregony and a few to St Austell",
    verified: "2026-09-16",
  },
  {
    // OSM node 11610802648, NaPTAN 0800COC30853 "Pendower Turn" (W-bound, towards
    // Portscatho and St Mawes); opposite 0800COC30854 (OSM node 10835730514),
    // 12 m, towards Truro. On the A3078 at the top of the lane to Pendower Beach:
    // 520 m on OSM's ways from the free beach car park (way 982868347), 180 m from
    // the section 30 route. Treworlas Turn (0800COC30852 / 30851), 500 m
    // north-east, has the same buses. The Carne Beach stop (0800COA15231) and
    // Lower Mill Gwendra (0800FWZ38434) are inactive, with no services.
    slug: "pendower-turn",
    name: "Pendower Turn",
    kind: "stop",
    lat: 50.20690, lon: -4.95560,
    address: "A3078, Treworlas, near Pendower",
    notes: "On the main road at the top of the lane from Pendower Beach, about 500 m. The 50 every day: to Portscatho and St Mawes, 25–30 minutes, for the Place ferry April to October; the other way by Ruan High Lanes, where the 51 goes to Veryan and Portloe Mon–Sat, and Tregony to Truro, about 40 minutes. On Wednesdays the community bus to Veryan",
    verified: "2026-09-16",
  },
  // Sections 31 and 32.
  {
    // OSM node 6605728689, "St Austell" (railway=station), NaPTAN 9100STAUSTL, CRS
    // SAU; GWR category A, step-free. The bus station (OSM node 12207565778) is
    // 40 m west, off High Cross Street: Stand A (0800COZ06359) the 23 and 51, Stand B
    // (0800COZ06363) the 29 and 25, Stand C (0800COZ06360) the 24 out and the 24A,
    // Stand D (0800COZ06362) the 24 in, Stand E (0800COZ06361) GorranBus. OSM taxi
    // rank node 1867195913 beside it. 2.3 km from the section 32 route; a change
    // point, not a stop near it.
    slug: "st-austell-station",
    name: "St Austell (station and bus station)",
    kind: "stop",
    lat: 50.33960, lon: -4.78933,
    address: "High Cross Street, St Austell",
    notes: "St Austell's railway station with the bus station beside it: the change for Mevagissey, Portloe and Par. The 29 to Pentewan and Mevagissey every day, hourly Mon–Sat; the 23 by Pentewan and Mevagissey to Gorran Haven, Mon–Sat; the 51 to Tregony and Portloe at 08:45, 11:45, 14:45 and 17:52, Mon–Sat; the 24 to Par and Fowey, hourly Mon–Sat; the 25 by Charlestown and Carlyon Bay, hourly Mon–Sat; the 24A by Charlestown, Carlyon Bay and Par on Sundays. Trains to Par in 7–8 minutes and to Truro. Ticket office Mon–Sat 7.30am – 7pm, Sundays 9am – 4.30pm",
    verified: "2026-09-16",
  },
  {
    // OSM node 6605728690, "Par" (railway=station), NaPTAN 9100PARR, CRS PAR; three
    // platforms (ways 99704052, 99704039, 99704036), the Newquay branch from
    // platform 3. OSM tags it wheelchair=no; GWR puts it in category B, some
    // step-free access. Par Railway Station bus stops (NW-bound 0800COC31410, OSM
    // node 11438533239; SE-bound 0800FWV38423, node 682276969), 125 m east, have the
    // 24 and 24A both ways and the early 25s. 530 m from the par endpoint and from
    // the section 32 route.
    slug: "par-station",
    name: "Par station",
    kind: "stop",
    lat: 50.35572, lon: -4.70461,
    address: "Eastcliffe Road, Par",
    notes: "On the main line, where the Newquay branch leaves. Trains to St Austell in 7–8 minutes, about two an hour Mon–Sat and roughly hourly on Sundays, and to Lostwithiel, Bodmin Parkway and Plymouth. Ticket office Mon–Fri 7.30am – 2pm, Sat 8am – 2.30pm, closed Sundays; step-free access only in part. Buses from the Railway Station stops outside: the 24 to St Austell, hourly Mon–Sat, and the 24A by Carlyon Bay and Charlestown on Sundays; both also go to Fowey",
    verified: "2026-09-16",
  },
  {
    // East end of OSM ferry way 122079278 "Fowey - Mevagissey Ferry", node
    // 1364970683 "Whitehouse Slip" (amenity=ferry_terminal), NaPTAN 9300FOY1. On the
    // section 33 route, 10.5 km along. The 24's Fowey Main Car Park stop
    // (0800COD40767, position 50.33500, -4.63924) is 600 m on OSM's ways, uphill.
    slug: "fowey-whitehouse",
    name: "Fowey (Whitehouse Quay)",
    kind: "stop",
    lat: 50.33312, lon: -4.63766,
    address: "Whitehouse Quay, Fowey",
    notes: "Where the Mevagissey ferry lands in Fowey, May to early October: to Mevagissey at 10.50, 12.50, 14.50 and 16.50 in September. The Polruan ferry lands here only 16 May – 15 September, 9.45am – 5.15pm; otherwise at Town Quay, 340 m along the town. The 24 to Par and St Austell leaves from Fowey Main Car Park, uphill, hourly Mon–Sat, and the 24A every two hours on Sundays",
    verified: "2026-09-16",
  },
  // Sections 33 and 34.
  {
    // Fowey end of OSM ferry way 427980097 from Polruan Quay, node 3032371008 "Town
    // Quay" (amenity=ferry_terminal); the operator gives PL23 1AT. 283 m from the
    // section 33 route and 340 m from the fowey-whitehouse stop record. Fowey
    // Parish Church bus stop (0800COD40768, OSM node 682271774), 75 m, has only
    // KP Cabs' 724 town service to the Main Car Park; not entered.
    slug: "fowey-town-quay",
    name: "Fowey (Town Quay)",
    kind: "stop",
    lat: 50.33517, lon: -4.63417,
    address: "Town Quay, Fowey",
    notes: "In the middle of Fowey, where the Polruan ferry lands 16 September – 15 May, and in summer before 9.30am and after 5.30pm; the rest of the summer day it uses Whitehouse Pier, 340 m along the town. Public toilets on the quay. The 24 to Par and St Austell leaves from Fowey Main Car Park, about 420 m uphill on OSM's ways, at 30 past Mon–Sat",
    verified: "2026-09-16",
  },
  {
    // OSM node 6605728693 "Liskeard" (public_transport=station), NaPTAN 9100LISKARD,
    // CRS LSK, GWR category B, on Station Yard. Liskeard Railway Station bus stops
    // (NE-bound 0800COA15021, OSM node 682268456; SW-bound 0800COA10146, node
    // 682274898), 100 m, have the 73. Liskeard Bus Interchange, where the 75 ends,
    // is 770 m north. 10.7 km from the section 34 route: a change point.
    slug: "liskeard-station",
    name: "Liskeard station",
    kind: "stop",
    lat: 50.44682, lon: -4.46953,
    address: "Station Yard, Liskeard",
    notes: "On the main line, where the Looe Valley Line starts. Trains to Par in about 25 minutes, roughly hourly or better every day, and to Plymouth; to Looe 13 a day Mon–Sat, 8 on Sundays until 8 November. The 73 to Looe and Polperro from the stops outside, hourly Mon–Sat and every two hours on Sundays. Ticket office Mon–Fri 7am – 6pm, Sat 8am – 6pm, Sun 9.15am – 4.45pm",
    verified: "2026-09-16",
  },
  {
    // OSM node 682268147, NaPTAN 0800COA10290 "Opposite Copley Arms" (W-bound): the
    // 10 towards Looe and Polperro. Copley Arms (E-bound 0800COA10291, NaPTAN
    // position 50.39198, -4.38237) towards Plymouth. The 75's West End Cottages
    // stops (N-bound 0800FWZ38633, OSM node 682280453, towards Liskeard; opposite
    // 0800FWZ38632, node 682280448, towards Seaton), 77 m west on OSM's ways. By the
    // Copley Arms pub (OSM way 812562554). 2.9 km from the section 34 route.
    slug: "hessenford",
    name: "Hessenford",
    kind: "stop",
    lat: 50.39192, lon: -4.38222,
    address: "A387, Hessenford",
    notes: "A village in the valley inland from Seaton, by the Copley Arms, where the 75 along the coast road meets the 10 between Looe, Polperro and Plymouth, Mon–Sat. The 10 every day, about every two hours; the 75 Mon–Sat only, from the West End Cottages stops 80 m west. They connect only at some times of day",
    verified: "2026-09-16",
  },
  {
    // OSM node 682268504, NaPTAN 0800COB20005 "Torpoint Ferry" (SW-bound), on Ferry
    // Street, where the 75 starts; Torpoint Ferry Shop (NE-bound 0800COB20003, OSM
    // node 682268502), 50 m, where it ends. The Torpoint chain ferry terminal is OSM
    // node 1119900401, 130 m east. Also the 70, 70A and 70B to Plymouth and
    // Cremyll, and Stagecoach's 172 college bus, per bustimes.org; section 35's
    // research may already have a Torpoint record: if so, use its slug instead.
    slug: "torpoint-ferry",
    name: "Torpoint (Ferry)",
    kind: "stop",
    lat: 50.37450, lon: -4.19392,
    address: "Ferry Street, Torpoint",
    notes: "At the Torpoint end of the chain ferry to Devonport, Plymouth, which runs 24 hours: every 10–15 minutes by day, every 30 minutes 21:30 – 06:30, free for foot passengers and bicycles. The 75 to Crafthole, Portwrinkle, Downderry, Seaton and Liskeard, six a day Mon–Sat, no Sundays. Go Cornwall's 70 group across on the ferry to Plymouth station and city centre, and round the Rame peninsula by Tregantle, Freathy and Cawsand to Cremyll, about hourly Mon–Sat and every two hours on Sundays",
    verified: "2026-09-16",
  },
  // Section 35.
  {
    // NaPTAN 0800COA05224 "Crafthole Cross Park" (S-bound), position via
    // bustimes.org; opposite Cross Park (0800COA05223) is 20 m south. OSM maps the
    // pair as unnamed nodes 9214857570 and 9214857571. 850 m on OSM's ways from
    // the portwrinkle endpoint, about 650 m from the section 35 route. The 75 both
    // ways; the 70B on its loop by Sheviock.
    slug: "crafthole",
    name: "Crafthole (Cross Park)",
    kind: "stop",
    lat: 50.36706, lon: -4.29955,
    address: "Crafthole, Torpoint",
    notes: "On the road through Crafthole, uphill from Portwrinkle. The 75 to Portwrinkle, Seaton and Liskeard, and to Torpoint, six a day Mon–Sat. The 70B towards Tregantle, Freathy, Cawsand and Cremyll Mon–Sat at 13:05, 16:05 and 17:21, and 19:16 and 20:46 as far as Millbrook; Sundays 17:19. Towards Torpoint and Plymouth Mon–Sat 07:26, 10:36, 12:36 and 22:17; Sundays 08:51 and 11:06. No Sunday bus to Portwrinkle",
    verified: "2026-09-16",
  },
  // Plymouth, for crossing 35.5 and section 36.
  {
    // OSM node 533335466, NaPTAN 1180PLC30132 "Royal Parade" Stop A3, where the 70
    // and 70B start and finish. The 34 uses Stop A2 (1180PLC30131, node 533335523),
    // 27 m east, and into town on Sundays A24 (118000061); the 10 uses A7
    // (118000002, node 4874934671), 180 m west. 1.7 km from the plymouth endpoint,
    // across the water from Cremyll.
    slug: "plymouth-royal-parade",
    name: "Plymouth (Royal Parade)",
    kind: "stop",
    lat: 50.37022, lon: -4.14099,
    address: "Royal Parade, Plymouth",
    notes: "Plymouth city centre's bus street, a row of lettered stops. From Stop A3 the 70 group by the Torpoint ferry and round the Rame peninsula to Cremyll, about hourly Mon–Sat and every two hours on Sundays, calling at Plymouth station 4 minutes on. From A2 the 34 to Stonehouse for the Cremyll ferry, 10 minutes, about every 30 minutes Mon–Sat and hourly on Sundays, going on to Derriford Hospital. From A7 the 10 to Saltash, Looe and Polperro, every day",
    verified: "2026-09-16",
  },
  {
    // OSM node 4098520591 "Plymouth" (railway=station), NaPTAN 9100PLYMTH, CRS PLY;
    // managed by GWR, step-free category A, on National Rail's station page.
    // Railway Station bus stops on Saltash Road, 180 m south: R2 (1180PLC30137, OSM
    // node 527785492) for the 70 and 70B towards Torpoint, R1 (1180PLC30139, node
    // 2452282733) into the centre.
    slug: "plymouth-station",
    name: "Plymouth station",
    kind: "stop",
    lat: 50.37810, lon: -4.14339,
    address: "North Road, Plymouth",
    notes: "The main line station, managed by GWR: trains west into Cornwall by Liskeard and Par, and east towards Exeter. The 70 and 70B from the Railway Station stops below it to Torpoint, the Rame peninsula and Cremyll, and into the city centre at Royal Parade, 5–9 minutes. Ticket office Mon–Fri 06:25 – 20:00, Sat 06:25 – 19:00, Sun 08:00 – 19:00; step-free access to all platforms",
    verified: "2026-09-16",
  },
  // Sections 37 and 38.
  {
    // OSM node 733812172 (amenity=bus_station). Stand A (NaPTAN 1100DEA10109)
    // for the 3, Stand B (1100DEA57204) for the 164, Stand C (1100DEA57205)
    // for the 162; all three within 15 m. 5.3 km from the salcombe endpoint,
    // so just outside the 5 km a section looks for a stop at either end of the
    // day: it will not appear on section 38's page, but the routes call there.
    slug: "kingsbridge-bus-station",
    name: "Kingsbridge bus station",
    kind: "stop",
    lat: 50.28305, lon: -3.77698,
    address: "Kingsbridge",
    notes: "Where the South Hams buses meet. The 3 to Plymouth by Modbury and to Dartmouth, roughly hourly every day; the 164 to Salcombe and to Totnes, about hourly Mon–Sat and four times on Sundays; the 162 out to Thurlestone, Malborough and Hope Cove, Mon–Fri only. South Hams Hospital and its minor injury unit are on the same road, 600 m north",
    verified: "2026-09-16",
  },
  {
    // NaPTAN 1100DEA10155 "Malborough Post Office" (NE-bound, towards
    // Kingsbridge); opposite Post Office (1100DEA10156) is 14 m south. The 164
    // uses the Garage and Yarde Gate Nursery stops on Salcombe Road instead,
    // 250 m east. 2.25 km from the section 38 route at Bolberry Down, so it is
    // a nearby stop but too far inland for an escape record.
    slug: "malborough",
    name: "Malborough",
    kind: "stop",
    lat: 50.24400, lon: -3.81412,
    address: "Higher Town, Malborough, Kingsbridge",
    notes: "The village on the ridge behind Bolberry Down and Soar Mill Cove, where the two Kingsbridge buses cross: the 164 to Salcombe and to Kingsbridge and Totnes every day, and the 162 out to Galmpton and Hope Cove Mon–Fri. A shop, two pubs and the Kingsbridge road",
    verified: "2026-09-16",
  },
  {
    // NaPTAN 1100DEA10074 "Modbury Post Office" (NW-bound, towards Plymouth);
    // opposite Post Office (1100DEA10073) is 8 m. Harraton Cross on the A379
    // (1100DEA10092 / 1100DEA10093), where the B3392 turns off for St Ann's
    // Chapel and Bigbury, is 1.6 km south-east and is also on the 3.
    slug: "modbury",
    name: "Modbury",
    kind: "stop",
    lat: 50.34903, lon: -3.88657,
    address: "Broad Street, Modbury",
    notes: "The nearest town on the A379 to the lanes behind Bigbury, and the change for Plymouth. The 3 through Broad Street to Plymouth by Yealmpton, and the other way to Kingsbridge and Dartmouth, roughly hourly Mon–Sat and five times on Sundays. No bus of any kind goes on down the B3392 to St Ann's Chapel and Bigbury: that is the F7 Fare Car, booked the day before",
    verified: "2026-09-16",
  },
  // Sections 39 and 40.
  // Sections 39 and 40.
  {
    // NaPTAN 1100DEA10198 "Stokenham Church House Inn" (E-bound); opposite
    // (1100DEA10197) is 10 m. By the Church House Inn, OSM node 4964305940.
    // 1.69 km from the torcross endpoint and 1.60 km from the section 40 route,
    // so it is a nearby stop at both ends of the day but too far off the path
    // for an escape record.
    slug: "stokenham",
    name: "Stokenham",
    kind: "stop",
    lat: 50.27286, lon: -3.67388,
    address: "Stokenham, Kingsbridge",
    notes: "The village behind Torcross, where the Torcross road meets the A379, about 1.7 km from the sea wall. The 93S shuttle to Torcross and to Kingsbridge, ten a day Mon–Fri and six on Sundays, and the Coleridge community bus on Thursday and Friday mornings. Two pubs, the Church House Inn and the Tradesmans Arms",
    verified: "2026-09-16",
  },
  // Section 40, for the Dart ferries and section 41.
  {
    // The Kingswear end of OSM ferry way 151746723, node 11654531, which is the
    // Lower Ferry slip, TQ6 0AA. The passenger ferry's Kingswear pontoon (node
    // 961721548) is 60 m north, beside Kingswear station, and Kingswear's OSM
    // place node 27199088 is 40 m away.
    //
    // IMPORTANT: this is the exact position the `dartmouth` endpoint record
    // currently holds — see the corrections below. Don't add this record until
    // that endpoint has been moved to the Dartmouth bank, or two records will
    // sit on the same point.
    slug: "kingswear",
    name: "Kingswear (Lower Ferry)",
    kind: "stop",
    lat: 50.34838, lon: -3.57317,
    address: "The Square, Kingswear",
    notes: "The far bank of the Dart, where section 41 picks the path up. The Lower Ferry lands at the slip and the passenger ferry at the pontoon 60 m north, by Kingswear station and the steam trains to Paignton. Buses to Brixham and Torbay from the village",
    verified: "2026-09-16",
  },
  {
    // The Kingswear end of OSM ferry way 23208493, node 11915067338, TQ6 0DZ:
    // 1.2 km north of the Lower Ferry's Kingswear slip, on the A379.
    slug: "kingswear-higher-ferry",
    name: "Kingswear (Higher Ferry)",
    kind: "stop",
    lat: 50.35963, lon: -3.57348,
    address: "A379, Kingswear",
    notes: "Where the Higher Ferry lands on the Kingswear side, 1.2 km up the river from the Lower Ferry slip and the village. A road crossing rather than a walker's one, but it runs until nearly 11pm every night",
    verified: "2026-09-16",
  },
];
