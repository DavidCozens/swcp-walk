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
];
