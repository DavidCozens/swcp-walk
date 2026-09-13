// Operators and firms, entered once and referenced wherever they're relevant.
//
//   kind      "operator" runs the scheduled routes in routes.js and is named
//             by them. "transfer" will drive you or your bags on request, has
//             no timetable, and is offered by coverage instead.
//   services  ["passenger", "baggage"] — a firm may do either or both. Baggage
//             firms earn their place when they also carry people, as Lyn
//             Valley Taxi does; a bags-only courier is no use on a van-based
//             walk, which is why Luggage Transfers Ltd isn't here.
//   covers    { lat, lon, radiusKm } for a local firm, or { everywhere: true }
//             for one working the whole path. Only meaningful for "transfer".
//   dogs      true | false | null. Same rule as anywhere else: never guessed.
export default [
  {
    slug: "stagecoach-south-west",
    name: "Stagecoach South West",
    kind: "operator",
    url: "https://www.stagecoachbus.com/",
    phone: null,
    // Attribution for the Exmoor coast service had moved around — Exmoor
    // National Park's 2025 timetable still called it "EX1 Exmoor Explorer,
    // First Bus". Stagecoach's own 2026 timetables settle it.
    notes: "Dogs usually carried, at the driver's discretion",
    verified: "2026-09-13",
  },
  {
    slug: "atwest",
    name: "Atwest",
    kind: "operator",
    url: null,
    phone: null,
    notes: "Community transport operator around Minehead and Porlock",
    verified: null,
  },
  {
    slug: "lyn-valley-taxi",
    name: "Lyn Valley Taxi",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // Based in Lynton. 20 km reaches Lynmouth, County Gate and Porlock Weir
    // but stops short of Minehead, which matches the areas they list.
    covers: { lat: 51.22942, lon: -3.83651, radiusKm: 20 },
    dogs: true,
    hours: "7am – 11pm, other times by arrangement",
    url: "https://www.lynvalleytaxi.co.uk/",
    phone: null,
    dogs_note: "Well behaved dogs",
    notes: "Drop-offs and pick-ups for walkers as well as luggage transfers, around Lynton, Lynmouth, Porlock, Brendon, County Gate, Simonsbath and Combe Martin. Five and seven seaters",
    verified: "2026-09-13",
  },
  {
    slug: "riverside-taxis-lynton",
    name: "Riverside Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 4 Park Street, Lynton. 20 km reaches Combe Martin, which they list.
    covers: { lat: 51.22890, lon: -3.83798, radiusKm: 20 },
    dogs: null,
    url: "https://riversidetaxis-lynton.co.uk/",
    phone: "01598 753442",
    email: "riverside-taxis1@btconnect.com",
    notes: "Family firm, 4, 6 and 8 seaters, covering Lynton, Brendon, Porlock, Minehead and Combe Martin. The site also shows Brighton numbers left over from a template — use the 01598 one. Walker drop-offs not mentioned on their own pages",
    verified: "2026-09-13",
  },
  {
    slug: "go2-taxi-ilfracombe",
    name: "GO2 Taxi",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // Ilfracombe. 25 km reaches Lynmouth; they claim Minehead to Westward Ho!
    // but say peak times may be local only.
    covers: { lat: 51.20767, lon: -4.12547, radiusKm: 25 },
    dogs: true,
    url: "http://www.go2taxi.co.uk/SWCPwalking.html",
    phone: "01271 545007",
    email: "go2taxi@mail.com",
    notes: "Six-seater. Coast path walker and luggage transfers, dog friendly, possibly local only at peak times. Mobile 07393 876629. The site hasn't changed since 2019, so whether it's still trading needs a call",
    verified: null,
  },
  {
    slug: "beach-runner-taxi",
    name: "Beach Runner Taxi",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // Woolacombe. They cover Minehead to Bideford; 30 km from Woolacombe
    // reaches Lynmouth but not Porlock or Minehead.
    covers: { lat: 51.17282, lon: -4.20515, radiusKm: 30 },
    dogs: true,
    dogs_note: "Welcome with owners, no extra charge",
    hours: "Any reasonable time",
    url: "https://www.woolacombetaxi.co.uk/south-west-coastal-path",
    phone: "07825 163284",
    notes: "Coast path transfers all year, Minehead to Bideford, groups up to 14 with luggage",
    verified: "2026-09-13",
  },
  {
    slug: "ycet",
    name: "Yealm Community Electric Transport",
    kind: "operator",
    url: "https://www.ycet.co.uk/",
    phone: "07399 067942",
    email: "etaxi@ycet.co.uk",
    notes: "Electric foot ferry and water taxi between Wembury, Noss Mayo and Newton Ferrers. Also on VHF channel 69",
    verified: null,
  },
];
