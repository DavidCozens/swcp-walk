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
];
