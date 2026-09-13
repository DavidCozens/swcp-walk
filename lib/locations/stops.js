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
];
