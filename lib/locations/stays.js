// Places to stay. Part of the shared location model (see src/_data/locations.js):
// the common fields — slug, name, kind, lat/lon, address, contact, notes,
// verified — are the same for every kind of location, and everything specific
// to somewhere you sleep sits in `stay`.
//
//   stay.dogs             true | false | null   null = not confirmed. Never guess.
//   stay.season           "all-year" | { from: "MM-DD", to: "MM-DD" } | null
//   stay.price_per_night  number (GBP) | null
//   stay.hookup           true | false | null
//   verified              "YYYY-MM-DD" | null   when checked against the owner's
//                                               own website
//   maps_url              optional override for the generated directions link
//
// Free text for colour and caveats only: stay.dogs_note, stay.price_note, notes.
// Each fact lives in one place — don't restate a field inside `notes`.
export default [
  {
    slug: "burrowhayes-farm",
    name: "Burrowhayes Farm",
    kind: "stay",
    lat: 51.20424, lon: -3.57803,
    address: "West Luccombe, Porlock, TA24 8HT",
    phone: "01643 862463",
    url: "https://burrowhayes.co.uk/",
    notes: "National Trust land, a mile east of Porlock",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Strict control; exercised off site",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "porlock-holiday-park",
    name: "Porlock Holiday Park",
    kind: "stay",
    lat: 51.21043, lon: -3.59742,
    address: "High Bank, Porlock, TA24 8ND",
    phone: "07348 751554",
    email: "info@porlockholidaypark.co.uk",
    url: "https://www.porlockcaravanpark.co.uk/",
    notes: "Formerly Porlock Caravan Park. Directories still list the old name and a 15 Mar–31 Oct season",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "lynmouth-holiday-retreat",
    name: "Lynmouth Holiday Retreat",
    kind: "stay",
    lat: 51.21877, lon: -3.82778,
    address: "Manor Farm, Barbrook, Lynton, EX35 6LD",
    phone: "01598 753349",
    url: "https://coastandcountryparks.co.uk/our-parks/lynmouth-holiday-retreat-north-devon/",
    notes: "Maximum unit length 9 m. The coast path runs past it",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; short lead, not left unattended. Dog-walking meadow on site",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "sunny-lyn",
    name: "Sunny Lyn Holiday Park",
    kind: "stay",
    lat: 51.22075, lon: -3.83650,
    address: "Lynbridge Road, Lynton, EX35 6NS",
    phone: "01598 753384",
    email: "info@sunnylyn.co.uk",
    url: "https://www.sunnylyn.co.uk/",
    notes: "Nine electric touring pitches, by the West Lyn river. Lodges run year-round; the touring season isn't stated",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "blue-ball-inn",
    name: "Blue Ball Inn",
    kind: "stay",
    lat: 51.23307, lon: -3.79547,
    address: "Countisbury, Lynmouth, EX35 6NE",
    phone: "01598 741263",
    email: "info@blueballinn.com",
    url: "https://www.blueballinn.com/",
    notes: "Brit Stops member — overnight motorhome parking. Also fourteen en-suite rooms. Stands on the section 2 route at Countisbury",
    verified: "2026-09-13",
    stay: {
      type: "britstop",
      dogs: true,
      dogs_note: "£15 per dog per night; welcome throughout except the main restaurant",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "porlock-weir-car-park",
    name: "Porlock Weir car park",
    kind: "stay",
    lat: 51.21878, lon: -3.62691,
    address: "B3225, Porlock Weir, TA24",
    url: "https://park4night.com/en/place/87299",
    // The generated lat/lon link labelled itself "Locanda on the Weir" — the
    // coordinate is right (2 m from the car park in OSM) but Google snaps the
    // label to the nearest named business, and there are six within 60 m. A
    // Plus Code resolves to the point itself.
    maps_url: "https://www.google.com/maps/dir/?api=1&destination=9C3R699F%2BG6",
    notes: "Public car park with public toilets; bars and restaurants alongside. Reported quiet overnight",
    // A park4night listing is user-reported, not the operator.
    verified: null,
    stay: {
      type: "park4night",
      dogs: true,
      season: null,
      price_per_night: 15,
      price_note: "per 24 hours, ticket machine or QR code",
    },
  },
  {
    slug: "hoburne-blue-anchor",
    name: "Hoburne Blue Anchor",
    kind: "stay",
    lat: 51.18204, lon: -3.39684,
    address: "Blue Anchor, Minehead, TA24 6JT",
    phone: "01643 821360",
    notes: "Around 100 touring pitches, but four miles east of Minehead — a drive, not a walk",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "bottom-ship",
    name: "The Bottom Ship",
    kind: "stay",
    lat: 51.21829, lon: -3.62726,
    address: "5 Anchor Road, Porlock Weir, TA24 8PB",
    phone: "01643 863288",
    notes: "Rooms above the pub, on the path at Porlock Weir",
    verified: null,
    stay: {
      type: "inn",
      dogs: true,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "myrtle-cottage",
    name: "Myrtle Cottage",
    kind: "stay",
    lat: 51.20939, lon: -3.59702,
    address: "High Street, Porlock, TA24 8PU",
    url: "https://myrtleporlock.co.uk/",
    notes: "Walkers welcome, drying facilities. Reported open all year",
    verified: null,
    stay: {
      type: "bnb",
      dogs: true,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "kenella-house",
    name: "Kenella House",
    kind: "stay",
    lat: 51.20557, lon: -3.47142,
    address: "7 Tregonwell Road, Minehead, TA24 5DT",
    url: "https://kenellahouse.co.uk/",
    notes: "About 500 m from the path",
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      season: null,
      price_per_night: null,
    },
  },
];
