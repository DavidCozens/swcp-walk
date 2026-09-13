// Places to stay, as points on the map rather than entries against a section.
// Each section works out for itself what's nearby (see lib/nearby.js), so one
// entry serves every section it's close to — the Porlock sites cover the end of
// section 1 and the start of section 2 without being listed twice, and a base
// on a peninsula will cover several days.
//
// STRUCTURED FIELDS carry anything we'd want to check, filter or sort on later.
// Each fact lives in exactly one place; don't restate a field in `note`.
//
//   dogs             true | false | null   null = not confirmed. Never guess.
//   season           "all-year" | { from: "MM-DD", to: "MM-DD" } | null
//   price_per_night  number (GBP) | null   null = unknown
//   hookup           true | false | null
//   verified         "YYYY-MM-DD" | null   when the details were last checked
//                                          against the owner's own website
//   maps_url         optional. A Google Maps directions link is generated from
//                    lat/lon; set this only to override it — a campsite
//                    entrance the postcode centroid doesn't land on, say.
//
// FREE TEXT is for colour and caveats that don't fit a field: `dogs_note`,
// `price_note`, `notes`.
//
// Unconfirmed details go stale quietly — porlockcaravanpark.co.uk now resolves
// to a differently-named park at a different address while directories still
// list the old name and season. Hence `verified`.
export default [
  {
    slug: "burrowhayes-farm",
    name: "Burrowhayes Farm",
    type: "campsite",
    lat: 51.20424, lon: -3.57803,
    address: "West Luccombe, Porlock, TA24 8HT",
    phone: "01643 862463",
    url: "https://burrowhayes.co.uk/",
    dogs: true,
    dogs_note: "Strict control; exercised off site",
    season: null,
    price_per_night: null,
    hookup: true,
    notes: "National Trust land, a mile east of Porlock",
    verified: "2026-09-13",
  },
  {
    slug: "porlock-holiday-park",
    name: "Porlock Holiday Park",
    type: "campsite",
    lat: 51.21043, lon: -3.59742,
    address: "High Bank, Porlock, TA24 8ND",
    phone: "07348 751554",
    email: "info@porlockholidaypark.co.uk",
    url: "https://www.porlockcaravanpark.co.uk/",
    dogs: true,
    season: null,
    price_per_night: null,
    notes: "Formerly Porlock Caravan Park. Directories still list the old name and a 15 Mar–31 Oct season",
    verified: "2026-09-13",
  },
  {
    slug: "lynmouth-holiday-retreat",
    name: "Lynmouth Holiday Retreat",
    type: "campsite",
    lat: 51.21877, lon: -3.82778,
    address: "Manor Farm, Barbrook, Lynton, EX35 6LD",
    phone: "01598 753349",
    url: "https://coastandcountryparks.co.uk/our-parks/lynmouth-holiday-retreat-north-devon/",
    dogs: true,
    dogs_note: "Up to two; short lead, not left unattended. Dog-walking meadow on site",
    season: null,
    price_per_night: null,
    hookup: true,
    notes: "Maximum unit length 9 m. The coast path runs past it",
    verified: "2026-09-13",
  },
  {
    slug: "sunny-lyn",
    name: "Sunny Lyn Holiday Park",
    type: "campsite",
    lat: 51.22075, lon: -3.83650,
    address: "Lynbridge Road, Lynton, EX35 6NS",
    phone: "01598 753384",
    email: "info@sunnylyn.co.uk",
    url: "https://www.sunnylyn.co.uk/",
    dogs: true,
    season: null,
    price_per_night: null,
    hookup: true,
    notes: "Nine electric touring pitches, by the West Lyn river. Lodges run year-round; the touring season isn't stated",
    verified: "2026-09-13",
  },
  {
    slug: "blue-ball-inn",
    name: "Blue Ball Inn",
    type: "britstop",
    lat: 51.23307, lon: -3.79547,
    address: "Countisbury, Lynmouth, EX35 6NE",
    phone: "01598 741263",
    email: "info@blueballinn.com",
    url: "https://www.blueballinn.com/",
    dogs: true,
    dogs_note: "£15 per dog per night; welcome throughout except the main restaurant",
    season: "all-year",
    price_per_night: null,
    notes: "Brit Stops member — overnight motorhome parking. Also fourteen en-suite rooms. Stands on the section 2 route at Countisbury",
    verified: "2026-09-13",
  },
  {
    slug: "porlock-weir-car-park",
    name: "Porlock Weir car park",
    type: "park4night",
    lat: 51.21878, lon: -3.62691,
    address: "B3225, Porlock Weir, TA24",
    url: "https://park4night.com/en/place/87299",
    dogs: true,
    season: null,
    price_per_night: 15,
    price_note: "per 24 hours, ticket machine or QR code",
    notes: "Public car park with public toilets; bars and restaurants alongside. Reported quiet overnight",
    // A park4night listing is user-reported, not the operator.
    verified: null,
  },
  {
    slug: "hoburne-blue-anchor",
    name: "Hoburne Blue Anchor",
    type: "campsite",
    lat: 51.18204, lon: -3.39684,
    address: "Blue Anchor, Minehead, TA24 6JT",
    phone: "01643 821360",
    dogs: null,
    season: null,
    price_per_night: null,
    notes: "Around 100 touring pitches, but four miles east of Minehead — a drive, not a walk",
    verified: null,
  },
  {
    slug: "bottom-ship",
    name: "The Bottom Ship",
    type: "inn",
    lat: 51.21829, lon: -3.62726,
    address: "5 Anchor Road, Porlock Weir, TA24 8PB",
    phone: "01643 863288",
    dogs: true,
    season: null,
    price_per_night: null,
    notes: "Rooms above the pub, on the path at Porlock Weir",
    verified: null,
  },
  {
    slug: "myrtle-cottage",
    name: "Myrtle Cottage",
    type: "bnb",
    lat: 51.20939, lon: -3.59702,
    address: "High Street, Porlock, TA24 8PU",
    url: "https://myrtleporlock.co.uk/",
    dogs: true,
    season: null,
    price_per_night: null,
    notes: "Walkers welcome, drying facilities. Reported open all year",
    verified: null,
  },
  {
    slug: "kenella-house",
    name: "Kenella House",
    type: "bnb",
    lat: 51.20557, lon: -3.47142,
    address: "7 Tregonwell Road, Minehead, TA24 5DT",
    url: "https://kenellahouse.co.uk/",
    dogs: null,
    season: null,
    price_per_night: null,
    notes: "About 500 m from the path",
    verified: null,
  },
];
