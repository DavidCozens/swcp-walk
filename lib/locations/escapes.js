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
];
