// Operators and firms, entered once and referenced wherever they're relevant.
//
//   kind      "operator" runs the scheduled routes in routes.js and is named
//             by them. "transfer" will drive you or your bags on request, has
//             no timetable, and is offered by coverage instead.
//   services  ["passenger", "baggage"] — a firm may do either or both. The
//             baggage companies are worth having precisely because several of
//             them will also carry people.
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
    // Attribution for the Exmoor coast service has moved around — Exmoor
    // National Park's own 2025 timetable still calls it "EX1 Exmoor Explorer,
    // First Bus (Buses of Somerset)", while Buses of Somerset no longer lists
    // it. Needs confirming before anyone relies on it.
    verified: null,
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
    slug: "luggage-transfers",
    name: "Luggage Transfers Limited",
    kind: "transfer",
    services: ["baggage"],
    // States it covers the whole 630 miles, Minehead to Poole.
    covers: { everywhere: true },
    dogs: null,
    url: "https://www.luggagetransfers.co.uk/route/south-west-coast-path/",
    phone: "01326 567247",
    notes: "Bags only — no passenger transfers. Covers the full path, Minehead to Poole",
    verified: "2026-09-13",
  },
];
