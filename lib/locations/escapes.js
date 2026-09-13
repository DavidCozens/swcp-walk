// Places you can leave the path mid-section. Positions are real coordinates,
// so how far along a route each one falls is computed rather than typed —
// County Gate was recorded by hand as 11.4 km along section 2 and is actually
// 8.8 km, which is the kind of error a number nobody can check tends to keep.
export default [
  {
    slug: "county-gate",
    name: "County Gate",
    kind: "escape",
    lat: 51.22410, lon: -3.72954,
    address: "A39, Devon/Somerset border",
    escape: {
      detail: "Climb inland to the A39. Car park, visitor centre and a bus stop — not a village, and nothing here out of season",
    },
    verified: null,
  },
  {
    slug: "countisbury",
    name: "Countisbury",
    kind: "escape",
    lat: 51.23198, lon: -3.79578,
    address: "A39, Countisbury, EX35 6NE",
    escape: {
      detail: "The path passes the hamlet. Pub just off-route and the A39",
    },
    verified: null,
  },
  {
    slug: "lee-bay",
    name: "Lee Bay",
    kind: "escape",
    lat: 51.22657, lon: -3.87041,
    address: "Lee Abbey, Lynton, EX35 6JJ",
    escape: {
      detail: "The path meets the lane back to Lynton through the Valley of Rocks. Lee Abbey's car park (a charge) and toilets",
    },
    verified: null,
  },
  {
    slug: "woody-bay",
    name: "Woody Bay",
    kind: "escape",
    lat: 51.22145, lon: -3.89809,
    escape: {
      detail: "National Trust car park, free, on the lane inland to Martinhoe. Nothing else here",
    },
    verified: null,
  },
  {
    slug: "heddon-valley",
    name: "Heddon Valley",
    kind: "escape",
    lat: 51.21558, lon: -3.92700,
    address: "Heddon Valley, Parracombe, EX31 4PY",
    escape: {
      detail: "Down the valley inland to the Hunter's Inn, a small National Trust shop and pay car parks",
    },
    verified: null,
  },
  {
    slug: "trentishoe-lane",
    name: "Trentishoe Lane car park",
    kind: "escape",
    lat: 51.21492, lon: -3.95585,
    escape: {
      detail: "A small free roadside car park where the path meets the lane over the down. No services — a place to be picked up, not a way out on foot",
    },
    verified: null,
  },
  {
    // OSM node 4365510799, NaPTAN 1100DEA10810 "Garage (Stop C)"
    slug: "ilfracombe",
    name: "Ilfracombe",
    kind: "escape",
    lat: 51.20714, lon: -4.12494,
    address: "High Street, Ilfracombe, EX34 9FB",
    escape: {
      detail: "The town's bus stop is the High Street garage, 300 m inland of the path: the 301 to Combe Martin and Barnstaple, the 31 to Woolacombe, and the 300 coast bus in summer. Buses back from Woolacombe set down at Wilder Road car park, 200 m away",
    },
    verified: "2026-09-13",
  },
  {
    // OSM node 10221446652, NaPTAN 1100DEA10997 "Lee Sea Wall"
    slug: "lee-ilfracombe",
    name: "Lee",
    kind: "escape",
    lat: 51.19724, lon: -4.17755,
    address: "Lee, Ilfracombe, EX34 8LR",
    escape: {
      detail: "The path drops to the sea wall at Lee Bay. The only bus is a Tuesday and Friday service to Ilfracombe; otherwise it's a pick-up point",
    },
    verified: null,
  },
  {
    // OSM node 6769712454, NaPTAN 1100DEA11010 "Mortehoe Post Office"
    slug: "mortehoe",
    name: "Mortehoe",
    kind: "escape",
    lat: 51.18553, lon: -4.20776,
    address: "Station Road, Mortehoe, EX34 7DR",
    escape: {
      detail: "The village is just inland after Morte Point. Buses from the post office: the 31 to Ilfracombe on some journeys, and the 303 to Braunton and Barnstaple",
    },
    verified: "2026-09-13",
  },
  {
    // Centre of OSM way 55983271, the beach car park.
    slug: "putsborough",
    name: "Putsborough",
    kind: "escape",
    lat: 51.14484, lon: -4.22086,
    address: "Putsborough, Georgeham, EX33 1LB",
    escape: {
      detail: "Beach car park and café at the south end of Woolacombe Sands. No bus here; some 21C journeys reach Georgeham, 2 km inland",
    },
    verified: null,
  },
  {
    // OSM node 542275276, NaPTAN 1100DEA11032 "Ruda Holiday Park"
    slug: "croyde-bay",
    name: "Croyde Bay",
    kind: "escape",
    lat: 51.13421, lon: -4.23633,
    address: "Moor Lane, Croyde Bay",
    escape: {
      detail: "The path passes Ruda Holiday Park at the back of the beach. The 21C to Braunton from the stop at its entrance, about hourly Mon–Sat and on summer Sundays. The village is 800 m inland",
    },
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA11045 "Saunton Sands"; no OSM node
    slug: "saunton-sands",
    name: "Saunton Sands",
    kind: "escape",
    lat: 51.11782, lon: -4.21628,
    address: "Saunton Road (B3231), Saunton",
    escape: {
      detail: "The beach car park, with a café and shop, below the coast road. The 21C to Braunton from the beach turning",
    },
    verified: "2026-09-13",
  },
  {
    // Centre of OSM way 165500149.
    slug: "sandy-lane-car-park",
    name: "Sandy Lane car park",
    kind: "escape",
    lat: 51.09349, lon: -4.19591,
    address: "Sandy Lane, Braunton Burrows, EX33 2NX",
    escape: {
      detail: "Braunton Burrows' pay car park, with a kiosk. No bus; a place to be picked up. Braunton is 2.5 km away in a straight line",
    },
    verified: null,
  },
  {
    // Centre of OSM way 187046292.
    slug: "crow-point-car-park",
    name: "Crow Point car park",
    kind: "escape",
    lat: 51.07507, lon: -4.18721,
    escape: {
      detail: "At the end of the private toll road, where the path reaches the estuary. No services and no bus; a place to be picked up",
    },
    verified: null,
  },
  {
    // OSM node 891576167, NaPTAN 1100DEA10936 "Camp Gates".
    slug: "chivenor",
    name: "Chivenor (Camp Gates)",
    kind: "escape",
    lat: 51.09354, lon: -4.13683,
    address: "Chivenor",
    escape: {
      detail: "Bus stop beside the Tarka Trail at the camp gates. The 21B every 30 minutes Mon–Sat and hourly on Sundays to Braunton and Barnstaple; the 21C about hourly. Spar by the roundabout",
    },
    verified: "2026-09-13",
  },
  {
    // OSM node 6900362324 (railway=station, NaPTAN 9100BRNSTPL).
    slug: "barnstaple-station",
    name: "Barnstaple station",
    kind: "escape",
    lat: 51.07361, lon: -4.06302,
    address: "Station Road, Barnstaple, EX31 2AU",
    escape: {
      detail: "Just south of the Long Bridge, 400 m off the path. Trains on the Tarka Line to Exeter; taxi rank. Buses outside: the 21 and 21A to Fremington and Instow, the 21B to Braunton. Barnstaple bus station is across the bridge",
    },
    verified: "2026-09-13",
  },
  {
    // Centre of OSM way 78675081, tagged fee=no.
    slug: "fremington-quay-car-park",
    name: "Fremington Quay car park",
    kind: "escape",
    lat: 51.08123, lon: -4.11837,
    address: "Fremington Quay, EX31 3AR",
    escape: {
      detail: "Car park by the café, beside the Tarka Trail. Buses from the New Inn stop in Fremington village, 900 m up the lane",
    },
    verified: null,
  },
  {
    // Bideford Quay Stop B, OSM node 12492120059.
    slug: "bideford-quay-escape",
    name: "Bideford Quay",
    kind: "escape",
    lat: 51.01912, lon: -4.20414,
    address: "The Quay, Bideford",
    escape: {
      detail: "On the path, just north of the Long Bridge. The 21 and 21A back to Instow every 15–20 minutes Mon–Sat, half-hourly on Sundays; the 21 on to Westward Ho!. Taxi firms in the town",
    },
    verified: "2026-09-13",
  },
  {
    // Appledore end of OSM ferry way 165326919, as the appledore stop.
    slug: "appledore-quay",
    name: "Appledore Quay",
    kind: "escape",
    lat: 51.05251, lon: -4.19058,
    address: "The Quay, Appledore",
    escape: {
      detail: "On the path. The ferry straight back across to Instow, April to October, around high tide only. Otherwise the 21A from the Seagate Hotel stop to Bideford and Instow",
    },
    verified: "2026-09-13",
  },
  {
    // Horns Cross, OSM place node 1149862971.
    slug: "horns-cross-escape",
    name: "Peppercombe to Horns Cross",
    kind: "escape",
    lat: 50.98488, lon: -4.30196,
    address: "A39, Horns Cross, EX39 5DH",
    escape: {
      detail: "Up the Peppercombe valley path to the A39 at Horns Cross: the Coach and Horses, the Hoops Inn along the road, and the 319 to Bideford or Clovelly, Mon–Sat",
    },
    verified: null,
  },
  {
    // Bucks Mills Car Park, centre of OSM way 81175824.
    slug: "bucks-mills-escape",
    name: "Bucks Mills",
    kind: "escape",
    lat: 50.98510, lon: -4.34086,
    address: "Bucks Mills, EX39 5DY",
    escape: {
      detail: "The lane up through the hamlet to the A39 at Bucks Cross, for the 319 and the post office shop. A small free car park at the top of the hamlet takes cars only; bollards keep vans out",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 100712075.
    slug: "brownsham",
    name: "Brownsham",
    kind: "escape",
    lat: 51.00772, lon: -4.44470,
    address: "Lower Brownsham, Hartland, EX39 6AN",
    escape: {
      detail: "Woodland paths inland from Mouth Mill or Windbury Head to the National Trust's free car park, beside Lower Brownsham Farm tea room. Somewhere to be collected; no bus nearer than the Hartland road",
    },
    verified: null,
  },
  {
    // Centre of OSM way 56132433.
    slug: "hartland-point-car-park",
    name: "Hartland Point car park",
    kind: "escape",
    lat: 51.01948, lon: -4.51830,
    address: "Hartland Point, EX39 6AU",
    escape: {
      detail: "On the path, by the kiosk: a pay car park at the end of the lane from Hartland, and somewhere to be collected. Hartland, for the 319 and 219, is nearly 4 km inland",
    },
    verified: null,
  },
];
