// Places to stay. Part of the shared location model (see src/_data/locations.js):
// the common fields — slug, name, kind, lat/lon, address, contact, notes,
// verified — are the same for every kind of location, and everything specific
// to somewhere you sleep sits in `stay`.
//
//   stay.dogs             true | false | null   null = not confirmed. Never guess.
//                         A hotel is only recorded if it's true.
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
    food: { type: "pub" },
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
    food: { type: "pub" },
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
  {
    slug: "caffyns-farm",
    name: "Caffyns Farm",
    kind: "stay",
    lat: 51.21769, lon: -3.87474,
    address: "Croscombe Lane, Lynton, EX35 6JW",
    phone: "01598 753967",
    email: "stay@exmoorcoastholidays.co.uk",
    url: "https://www.exmoorcoastholidays.co.uk/camping",
    notes: "Planning limits campervans to 5.5 m long and 2.2 m high, which rules out most high-tops. No bookings taken. Water and chemical disposal in each field; barn café and farm shop. Trades as Exmoor Coast Holidays",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free",
      season: "all-year",
      price_per_night: 15,
      price_note: "per adult; children 5–15 £12",
      hookup: null,
    },
  },
  {
    slug: "lynton-club-site",
    name: "Lynton Camping and Caravanning Club Site",
    kind: "stay",
    lat: 51.21759, lon: -3.85794,
    address: "Caffyn's Cross, Lydiate Lane, Lynton, EX35 6JS",
    phone: "01598 752379",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/devon/lynton/lynton-camping-and-caravanning-club-site/",
    notes: "The Club says not to follow satnav; it publishes approach directions. Arrivals after 1pm. Jumbo pitches for larger units. Whether non-members can book isn't stated. 2027 opens 22 March",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      season: { from: "03-27", to: "09-27" },
      price_per_night: null,
      price_note: "members from £9.30 per adult",
      hookup: true,
    },
  },
  {
    slug: "bottom-meadow-car-park",
    name: "Bottom Meadow car park",
    kind: "stay",
    // OSM way 160968516, centre: the pay car park on Castle Hill beside the
    // toilets and play area. The EX35 6AR postcode centroid is 130 m off.
    lat: 51.22846, lon: -3.83339,
    address: "Castle Hill, Lynton, EX35 6AR",
    url: "https://lyntonandlynmouthtowncouncil.gov.uk/parking/",
    // Overnight rules from North Devon Council's motorhomes guidance; the car
    // park itself is run by the town council, whose page doesn't repeat them.
    notes: "Town council car park where motorhomes may stay overnight. Up to two nights, no return within 48 hours; 8 m maximum; self-contained with a built-in toilet; 6 m from other motorhomes. Public toilets (RADAR key for the accessible one) and a play area",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 16,
      price_note: "cash, card or RingGo (location 23606)",
    },
  },
  {
    slug: "woody-bay-honesty-parking",
    name: "Woody Bay honesty-box parking",
    kind: "stay",
    lat: 51.22010, lon: -3.89996,
    address: "Near Woody Bay, Martinhoe, EX31 4QU",
    url: "https://park4night.com/en/place/118480",
    notes: "Six spaces with sea views. Reviewers warn it's very exposed in wind and muddy; levelling blocks needed",
    // A park4night listing is user-reported, not the operator.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 3,
      price_note: "honesty box or QR code",
    },
  },
  {
    slug: "hunters-inn",
    name: "The Hunters Inn",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.21676, lon: -3.92722,
    address: "Heddon Valley, Parracombe, Barnstaple, EX31 4PY",
    phone: "01598 763230",
    email: "enquiries@thehuntersinnheddonvalley.co.uk",
    url: "https://thehuntersinnheddonvalley.co.uk/",
    notes: "National Trust inn. Ten rooms plus Heddon Lodge; free parking for guests. Not the Hunters Inn at Newton Tracey, which search results mix up with it",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£15 per dog per stay, up to two; rooms 1–5 and 10 only; not left unattended",
      season: null,
      price_per_night: 100,
      price_note: "room only, £100–£200",
    },
  },
  {
    slug: "south-dean-camping",
    name: "South Dean Camping",
    kind: "stay",
    lat: 51.21866, lon: -3.94778,
    address: "Trentishoe, Parracombe, Barnstaple, EX31 4QD",
    phone: "07397 854413",
    email: "camp@southdeancamping.co.uk",
    url: "https://southdeancamping.co.uk/",
    notes: "The path runs just below the site. Eighteen acres of unmarked, unlit pitches. Closed for 2026; reopens 27 May 2027. Cash or bank transfer; arrivals 9am–9pm; no sign-written vehicles",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On leads. XL Bully, Pit Bull Terrier, Japanese Tosa, Dogo Argentino and Fila Brasileiro not accepted",
      season: null,
      price_per_night: 35,
      price_note: "from; non-electric campervan pitch, two adults",
      hookup: false,
    },
  },
  {
    slug: "silver-view-campsite",
    name: "Silver View Campsite",
    kind: "stay",
    // Postcode centroid: the farm isn't in OpenStreetMap.
    lat: 51.20668, lon: -4.00610,
    address: "Knapp Down Farm, Shute Lane, Combe Martin, EX34 0PG",
    phone: "07415 122557",
    url: "https://www.silverviewcampsite.co.uk/",
    notes: "Pop-up summer site, booked through campsites.co.uk. 2026 ran 22–31 May, June–July weekends and 24 Jul–30 Aug. Ten touring pitches, units up to 8 m",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch",
      season: null,
      price_per_night: 25,
      price_note: "touring pitch, up to six people",
      hookup: false,
    },
  },
  {
    slug: "pack-o-cards",
    name: "Pack o' Cards",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.20206, lon: -4.02914,
    address: "High Street, Combe Martin, EX34 0ET",
    phone: "01271 882300",
    email: "thepackocards@aol.com",
    url: "https://www.packocards.co.uk/",
    notes: "Six en-suite rooms. Free car park with an EV charger; motorhome parking not mentioned",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Welcome in the bar; nothing said about rooms",
      season: null,
      price_per_night: 95,
      price_note: "from, with breakfast; £95–£115",
    },
  },
  {
    slug: "newberry-valley-park",
    name: "Newberry Valley Park",
    kind: "stay",
    lat: 51.20137, lon: -4.04195,
    address: "Woodlands, Combe Martin, EX34 0AT",
    phone: "01271 882334",
    email: "relax@newberryvalleypark.co.uk",
    url: "https://www.newberryvalleypark.co.uk/",
    notes: "Premier and Large pitches up to 8 m, Classic up to 5 m. Reception closes 10 Oct – 1 Nov, so book late-season stays by 9 Oct",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £3 each per night. On lead except in the fenced dog field; dog wash on site",
      season: { from: "03-20", to: "11-01" },
      price_per_night: 27,
      price_note: "Classic pitch, low season, two people; £30–£51 for larger pitches and peak dates",
      hookup: true,
    },
  },
  {
    slug: "mill-park",
    name: "Mill Park Campsite",
    kind: "stay",
    lat: 51.20572, lon: -4.06362,
    address: "Mill Lane, Berrynarbor, EX34 9SH",
    phone: "01271 882647",
    email: "enquiries@millpark.com",
    url: "https://www.millpark.com/",
    notes: "Minimum two nights; no Sunday arrivals. Motorhome service point",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2 each per night",
      // The 2026 tariff runs 1 Mar – 31 Oct; no separate opening dates given.
      season: { from: "03-01", to: "10-31" },
      price_per_night: 30,
      price_note: "grass electric pitch, off-peak; £37–£45 fully serviced hardstanding",
      hookup: true,
    },
  },
  {
    slug: "watermouth-valley",
    name: "Watermouth Valley Camping Park",
    kind: "stay",
    lat: 51.21144, lon: -4.06373,
    address: "Watermouth, Ilfracombe, EX34 9SJ",
    email: "watermouthpark@gmail.com",
    url: "https://www.watermouthpark.co.uk/",
    notes: "Formerly Big Meadow. The postcode takes satnav to Watermouth Castle; the entrance is 300 yards past it. Contact form only, no phone. 2026 bookings closed; 2027 opens for booking 1 Oct. The 301 stops outside",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Off lead only in the exercise area above the Ocean View field",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "hele-valley",
    name: "Hele Valley Holiday Park",
    kind: "stay",
    lat: 51.20194, lon: -4.10070,
    address: "Hele Bay, Ilfracombe, EX34 9RD",
    phone: "01271 862460",
    email: "holidays@helevalley.co.uk",
    url: "https://www.helevalley.co.uk/",
    notes: "Small campervan pitches up to 6 m; large touring and motorhome pitches up to 9 m, with grey-water drainage. Choice of pitch only when booking direct",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On lead on the park; not left alone in your unit",
      season: { from: "04-01", to: "10-31" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "hillsborough-car-park",
    name: "Hillsborough car park",
    kind: "stay",
    lat: 51.20687, lon: -4.10695,
    address: "Hillsborough Road, Ilfracombe, EX34 9QJ",
    url: "https://www.northdevon.gov.uk/parking/car-parks/ilfracombe/hillsborough-car-park",
    // North Devon Council's own pages. OSM tags it camping=no, sleeping=no,
    // which the council contradicts.
    notes: "Council car park where motorhomes may stay overnight, subject to space. Up to two nights, no return within 48 hours; 8 m maximum; self-contained with a built-in toilet; 6 m from other motorhomes. No facilities",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 16,
      price_note: "cash, card or RingGo",
    },
  },
  {
    slug: "sandpiper-inn",
    name: "Sandpiper Inn",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.21074, lon: -4.11586,
    address: "Broad Street, Ilfracombe, EX34 9EQ",
    phone: "01271 865260",
    // No owner website; rooms from booking directories.
    notes: "B&B rooms above a harbourside pub, per booking directories",
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Reviews call the pub dog-friendly; nothing on rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "warcombe-farm",
    name: "Warcombe Farm Campsite",
    kind: "stay",
    lat: 51.18085, lon: -4.17966,
    address: "Station Road, Mortehoe, EX34 7EJ",
    phone: "01271 870690",
    url: "https://warcombefarm.co.uk/",
    notes: "Serviced, Pitch Plus, Premier, sea-view and fully gated pitches; grass or hardstanding. Fishing lake. Directories give a 15 Mar–31 Oct season, which differs from the owner's tariff dates",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 per night. On lead or tethered, never left unattended. 14-acre off-lead woodland walk; dog wash",
      // The 2026 tariff runs 13 Mar – 30 Oct; no separate opening dates given.
      season: { from: "03-13", to: "10-30" },
      price_per_night: 25.5,
      price_note: "serviced (electric) pitch, low season, two people; £29.50 mid, £44 peak",
      hookup: true,
    },
  },
  {
    slug: "damage-barton",
    name: "Damage Barton",
    kind: "stay",
    lat: 51.18520, lon: -4.18768,
    address: "Mortehoe, Woolacombe, EX34 7EJ",
    phone: "01271 870502",
    email: "enquiries@damagebarton.co.uk",
    url: "https://www.damagebarton.co.uk/",
    // OSM calls it a "Camping Club Site", which is wrong.
    notes: "Family-run on a working farm; affiliated to the Caravan and Motorhome Club but open to all. Direct access to the coast path. Grass or hardstanding, 10 A hookup. Deposit £50",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per unit, £2 each per night. Three exercise areas next to the site",
      season: { from: "03-20", to: "11-01" },
      price_per_night: 30,
      price_note: "low season: pitch £10 plus £10 per adult; £3 less without electric. Peak £37 for two",
      hookup: true,
    },
  },
  {
    slug: "north-morte-farm",
    name: "North Morte Farm",
    kind: "stay",
    lat: 51.19046, lon: -4.20086,
    address: "North Morte Farm, Mortehoe, Woolacombe, EX34 7EG",
    phone: "01271 870381",
    email: "info@northmortefarm.co.uk",
    url: "https://www.northmortefarm.co.uk/",
    notes: "Twenty gravel touring pitches, all with hookup. Narrow access. Direct access to the coast path. Walk-ins outside school holidays, 9am–7pm. Open for 2026 but no dates given",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Not allowed in the holiday homes; nothing said about pitches",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "easewell-farm",
    name: "Easewell Farm Holiday Park",
    kind: "stay",
    lat: 51.18867, lon: -4.19957,
    address: "Mortehoe Station Road, Woolacombe, EX34 7EH",
    phone: "01271 871400",
    url: "https://www.woolacombe.co.uk/devon-holiday-parks/easewell-farm",
    notes: "Woolacombe Bay Holiday Parks. 309 pitches: grass, hardstanding and gravel Super pitches. Minimum two nights, sometimes longer",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £1.50 each per night. On lead. Some breeds refused, including XL Bully and Pit Bull types",
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "touring pitch from £28 for two nights, two people",
      hookup: true,
    },
  },
  {
    slug: "twitchen-house",
    name: "Twitchen House Holiday Park",
    kind: "stay",
    lat: 51.18246, lon: -4.19701,
    address: "Mortehoe Station Road, Woolacombe, EX34 7ES",
    phone: "01271 870848",
    url: "https://www.woolacombe.co.uk/devon-holiday-parks/twitchen-house",
    notes: "Woolacombe Bay Holiday Parks. 252 pitches, hardstanding, some with sea views. Minimum two nights, sometimes longer. OSM names it Twitchen Caravan Park",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £1.50 each per night. On lead. Some breeds refused, including XL Bully and Pit Bull types",
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "touring pitch from £32 for two nights, two people",
      hookup: true,
    },
  },
  {
    slug: "lundy-house-hotel",
    name: "Lundy House Hotel",
    kind: "stay",
    lat: 51.18092, lon: -4.21241,
    address: "Chapel Hill, Mortehoe, Woolacombe, EX34 7DZ",
    phone: "07969 723811",
    email: "info@lundyhousehotel.co.uk",
    url: "https://www.lundyhousehotel.co.uk/",
    notes: "Small hotel, eight en-suite rooms, on the path between Mortehoe and Woolacombe. Parking for ten cars",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£10 per dog per night. On lead; not on beds; not left in rooms except at breakfast",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "woolacombe-sands",
    name: "Woolacombe Sands Holiday Park",
    kind: "stay",
    lat: 51.17020, lon: -4.18571,
    address: "Beach Road, Woolacombe, EX34 7AF",
    phone: "01271 870569",
    url: "https://www.woolacombe-sands.co.uk/",
    notes: "Basic, Standard and Super pitches. High-sided vehicles need prior consent; grass standard pitches take tents and small campervans only. Deposit £30",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2.75 per night",
      season: null,
      price_per_night: null,
      price_note: "from £20 a pitch with electric, basic £15, super £25 — the page doesn't say per night",
      hookup: true,
    },
  },
  {
    slug: "willingcott-club-site",
    name: "Willingcott Woolacombe Club Campsite",
    kind: "stay",
    lat: 51.16947, lon: -4.16909,
    address: "Woolacombe, EX34 7HN",
    phone: "01271 870554",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/devon/willingcott-woolacombe-club-campsite/",
    notes: "Caravan and Motorhome Club, open to non-members. 151 pitches, 80 hardstanding, 10 m maximum. The Club says not to follow satnav, and not to approach from the south on the B3231",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dog walk from the site",
      season: { from: "04-02", to: "10-05" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "putsborough-sands-campervans",
    name: "Putsborough Sands campervan parking",
    kind: "stay",
    // Centre of OSM way 55983271, "Puttsborough Car Park".
    lat: 51.14484, lon: -4.22086,
    address: "Putsborough, Georgeham, Braunton, EX33 1LB",
    phone: "01271 890231",
    url: "https://www.putsborough.com/camping-camper-vans/",
    notes: "Run by the landowner, not the council. Overnight on the hardstanding at the top of the beach car park, never at the front. First come, first served; on very busy weekends whole-weekend stays only. Toilets, drinking water, Elsan point and cold beach showers. The caravan parks alongside take touring caravans only",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      dogs_note: "The caravan-park terms allow two per pitch; the campervan page doesn't say",
      season: null,
      price_per_night: null,
      price_note: "per van, two adults; varies by season, ring for the tariff. Extra adults £7 each",
      hookup: false,
    },
  },
  {
    slug: "ruda-holiday-park",
    name: "Ruda Holiday Park",
    kind: "stay",
    // Centre of OSM way 830268115. OSM's operator tag (Parkdean) is out of date.
    lat: 51.13487, lon: -4.23512,
    address: "Croyde Bay, EX33 1NP",
    phone: "01271 890671",
    url: "https://www.johnfowlerholidays.com/devon-holiday-park/ruda-holiday-park/accommodation/camping-and-touring-holidays",
    notes: "John Fowler Holidays. Tourer and motorhome pitches are 11 × 7 m grass with 16 A hookup, in the Croyde Burrows field across the road from the main park. Bookings 01271 866766. Directories give a 6 Mar–31 Oct season; the owner's site gives no dates",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; a charge, amount not stated",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "bay-view-farm",
    name: "Bay View Farm Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 1154505806.
    lat: 51.12803, lon: -4.22670,
    address: "Croyde, Braunton, EX33 1PN",
    phone: "01271 890501",
    email: "info@bayviewfarm.co.uk",
    url: "https://www.bayviewfarmcampingcroyde.co.uk/",
    notes: "Premier pitches: hardstanding or grass, own tap, grey waste, 16 A. The owner says ignore satnav and turn left at Braunton's main lights. Motorhome arrivals 1–9pm, 11am–5pm in low season. Families and couples only",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      // Recorded as no: one dog is taken in low season only, by prior
      // arrangement, which a summer arrival can't rely on.
      dogs: false,
      dogs_note: "Low season only: one per pitch, by prior arrangement, £5 a night. Not in mid or high season",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "the-whiteleaf",
    name: "The Whiteleaf",
    kind: "stay",
    // Centre of OSM way 1162801956.
    lat: 51.12868, lon: -4.22803,
    address: "Croyde, Braunton, EX33 1PN",
    phone: "01271 890266",
    email: "bookings@thewhiteleaf.co.uk",
    url: "https://www.thewhiteleaf.co.uk/",
    notes: "Five en-suite rooms",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      dogs: null,
      season: null,
      price_per_night: 90,
      price_note: "from, double room with breakfast; varies by season",
    },
  },
  {
    slug: "incledon-farm",
    name: "Incledon Farm",
    kind: "stay",
    // OSM node 4366876689. The EX33 1JN postcode centroid is 330 m off.
    lat: 51.14205, lon: -4.19661,
    address: "Incledon Farm, Georgeham, Braunton, EX33 1JN",
    phone: "01271 890200",
    url: "https://incledonfarm.co.uk/camping/",
    notes: "Working farm. Premium pitches have hookup and most are levelled, pre-booking essential; standard pitches are chosen on arrival and gently sloping, ramps lent. The owner calls the Buckland Cross route from Braunton unsuitable for caravans and sends you through Croyde instead. Arrivals midday–6pm. Georgeham village and its bus stop are five minutes' walk",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night. On a lead at all times; livestock on the farm",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 28,
      price_note: "standard pitch, two people; premium with hookup £34",
      hookup: true,
    },
  },
  {
    slug: "lobb-fields",
    name: "Lobb Fields Caravan and Camping Park",
    kind: "stay",
    // OSM way 236976548, an unnamed caravan site. The EX33 1HG postcode
    // centroid is 400 m south, on Saunton Road.
    lat: 51.11365, lon: -4.18130,
    address: "Saunton Road, Braunton, EX33 1HG",
    phone: "01271 812090",
    url: "https://lobbfields.com/",
    notes: "180 pitches over three fields: grass, semi-hardstanding and fully serviced hardstanding; suits large motorhomes. Arrivals from midday, no waiting space. Bus stop at the entrance. The pitches page calls the Bottom Field open all year, which the tariff's dates contradict",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night. On-site dog walk",
      season: { from: "03-20", to: "11-01" },
      price_per_night: 22,
      price_note: "electric grass pitch, low season, two people; basic grass £16, fully serviced £29; peak £32.50–£47.50",
      hookup: true,
    },
  },
  {
    slug: "george-inn-braunton",
    name: "The George Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1562108889, where it's named "The George Hotel".
    lat: 51.10791, lon: -4.16116,
    address: "Exeter Road, Braunton, EX33 2JJ",
    phone: "01271 814903",
    email: "info@thegeorgeinnbraunton.com",
    url: "https://thegeorgeinnbraunton.com/",
    notes: "Six en-suite rooms. Check-in 3–10pm. Parking not mentioned. The 303 and 21B stop outside",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£10 a night, dog-friendly rooms only, so say when booking. Welcome throughout the pub",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "thistledene",
    name: "Thistledene",
    kind: "stay",
    // Postcode centroid: not in OpenStreetMap, and the owner gives no street.
    lat: 51.10421, lon: -4.15828,
    address: "Braunton, EX33 2BN",
    phone: "07432 014114",
    url: "https://thistledene.com/",
    notes: "Two en-suite rooms with their own entrance, on the A361 into Braunton. Position is the postcode's, not the building's",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Up to two per room",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "tarka-trail-camping",
    name: "Tarka Trail Camping",
    kind: "stay",
    // Centre of OSM way 1202350551.
    lat: 51.07039, lon: -4.15422,
    address: "Lower Yelland Farm, Yelland, Barnstaple, EX31 3EN",
    phone: "07944 247417",
    url: "https://tarkatrailcamping.co.uk/",
    notes: "Across the Taw: 3.5 km from Braunton as the crow flies, but the road goes round through Barnstaple. One large level field; takes campervans, motorhomes and caravans",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On a lead at all times",
      season: { from: "03-28", to: "09-30" },
      price_per_night: 18,
      price_note: "per adult with car; walkers £14; hookup £7",
      hookup: true,
    },
  },
  {
    slug: "north-walk-car-park",
    name: "North Walk car park",
    kind: "stay",
    // Centre of OSM way 29099644. The council's EX31 1DU postcode doesn't
    // resolve on postcodes.io.
    lat: 51.08179, lon: -4.06414,
    address: "North Walk, Barnstaple, EX31 1DU",
    url: "https://www.northdevon.gov.uk/parking/car-parks/barnstaple/north-walk-car-park",
    notes: "Council car park where motorhomes may stay overnight, subject to space. Up to two nights, no return within 48 hours; 8 m maximum; under 3,500 kg; self-contained with a built-in toilet; 6 m from other motorhomes. Beside the route by the Long Bridge",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 16,
      price_note: "cash, card or RingGo (zone 3613)",
    },
  },
  {
    slug: "riverbank-car-park-bideford",
    name: "Riverbank long stay car park",
    kind: "stay",
    // Centre of OSM way 7806591, an unnamed pay car park; the point on
    // Torridge District Council's car park map falls inside it. The EX39 2QS
    // postcode centroid is 490 m north.
    lat: 51.02266, lon: -4.20309,
    address: "Kingsley Road, Bideford, EX39 2QS",
    url: "https://www.torridge.gov.uk/parking/bideford/riverbank-long-stay",
    notes: "Torridge District Council car park between Victoria Park and the river, north of Bideford town centre. Motorhomes overnight 6pm–8am, up to two consecutive nights. No barbecues or fires, awnings, or tables and chairs outside. Some directories still give £11",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 12,
      price_note: "per bay; card, cash or RingGo (location 54524)",
    },
  },
  {
    slug: "churchfields-car-park-appledore",
    name: "Churchfields car park",
    kind: "stay",
    // Centre of OSM way 165326920, matching the point on Torridge District
    // Council's car park map.
    lat: 51.05510, lon: -4.19206,
    address: "The Quay, Appledore, EX39 1RL",
    url: "https://www.torridge.gov.uk/parking/appledore/churchfields",
    notes: "Torridge District Council car park on the estuary. Motorhomes overnight 6pm–8am, up to two consecutive nights. No barbecues or fires, awnings, or tables and chairs outside. EV charging. Across the Torridge from Instow: under a kilometre as the crow flies, round through Bideford by road",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 15,
      price_note: "per bay; card, cash or RingGo (location 54521)",
    },
  },
  {
    slug: "marshford-camping",
    name: "Marshford Camping",
    kind: "stay",
    // OSM node 4326673479. The EX39 1NS postcode centroid is 70 m west.
    lat: 51.04409, lon: -4.20486,
    address: "Marshford Organic Foods, Churchill Way, Northam, EX39 1NS",
    phone: "01237 477160",
    email: "info@marshfordcamping.co.uk",
    url: "https://www.marshfordcamping.co.uk/",
    notes: "Camping and Caravanning Club members only; membership number needed to book. Five grass van pitches and one hardstanding. Organic food shop on site. Booked ahead, minimum 2 nights in medium season and 3 in high; on-the-day pitches may be offered. Check-in from 2pm. Across the Torridge from Instow, round through Bideford by road",
    verified: "2026-09-13",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Two free per pitch, extra £2.50 a night. Lead of 3 m or less; never left unattended",
      // Inferred: the 2026 tariff gives rates only from 16 Apr to 30 Sep.
      season: { from: "04-16", to: "09-30" },
      price_per_night: 22,
      price_note: "per pitch, medium season, two adults; high season £25; hookup £5; solo walker or cyclist tent £11",
      hookup: true,
    },
  },
  {
    slug: "collacott-farm",
    name: "Collacott Farm",
    kind: "stay",
    // Postcode centroid (EX31 3QF). OSM's "Collacott Farm" is the solar farm;
    // the Club gives 51.0524, -4.1234, 170 m away.
    lat: 51.05342, lon: -4.12530,
    address: "Fremington, Barnstaple, EX31 3QF",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/barnstaple/collacott-farm/",
    notes: "Caravan and Motorhome Club CL, members only; directions only shown to members. Five pitches, hardstanding and grass, 16 A. Estuary views; working farm. About 1.5 miles from Fremington's shops and pubs",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Listed as ideal for dogs, with a dog walk from the site",
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "pyewell-farm",
    name: "Pyewell Farm",
    kind: "stay",
    // Postcode centroid (EX39 4LR); the Club gives 51.0383, -4.1389, 380 m
    // south-west.
    lat: 51.04142, lon: -4.13685,
    address: "Holmacott, Instow, Bideford, EX39 4LR",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/bideford/pyewell-farm/",
    notes: "Caravan and Motorhome Club CL, members only. Minimum stay 3 nights, always. Five pitches on a nearly level one-acre field; levelling blocks recommended. 16 A. Working sheep farm. Satnav not recommended; directions sent on booking (what3words multiple.craft.choppers). Arrivals midday–10pm",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Up to two, on a lead on the farm. Dog walking area",
      season: { from: "05-01", to: "10-01" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "west-ashford-barton",
    name: "West Ashford Barton",
    kind: "stay",
    // OSM node 1562491077, the hamlet; the Club's GPS is 80 m east. The
    // EX31 4DB postcode centroid is 600 m east.
    lat: 51.09843, lon: -4.11082,
    address: "Ashford, Barnstaple, EX31 4DB",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/barnstaple/west-ashford-barton/",
    notes: "Caravan and Motorhome Club CL, members only. Five pitches, hardstanding and grass, over three fields on 7 acres; some sloping. Estuary views; working farm. Pub within half a mile",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "A dog walk is listed; no policy stated",
      season: { from: "04-01", to: "10-01" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "wayfarer-inn-instow",
    name: "The Wayfarer Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 3811363174.
    lat: 51.05561, lon: -4.18044,
    address: "Lane End Road, Instow, EX39 4LB",
    phone: "01271 860342",
    email: "info@thewayfarerinstow.co.uk",
    url: "https://www.thewayfarerinstow.co.uk/",
    notes: "Six en-suite rooms, on the Tarka Trail. No parking of its own: public car park by Instow Cricket Club, or limited roadside on Marine Parade. The Boathouse and the Instow Arms are next door",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      // BringFido says £10 per pet per stay; unconfirmed.
      dogs: null,
      dogs_note: "Dogs welcome in the pub; rooms not stated",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "instow-barton",
    name: "Instow Barton",
    kind: "stay",
    // Postcode centroid: not in OpenStreetMap.
    lat: 51.05863, lon: -4.16844,
    address: "Rectory Lane, Instow, EX39 4LU",
    phone: "01271 860845",
    email: "contact@instowbarton.co.uk",
    url: "https://www.instowbarton.co.uk/",
    notes: "Farmhouse B&B with a restaurant; five en-suite rooms. Free parking; bike lock-up. Check-in 2–6pm. Position is the postcode's, not the building's",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Both room types listed as pets allowed; no conditions given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "westward-ho-main-car-park",
    name: "Westward Ho! Main car park",
    kind: "stay",
    // Centre of OSM way 222045352, an unnamed pay car park; the point on
    // Torridge District Council's car park map falls inside it.
    lat: 51.04088, lon: -4.23667,
    address: "Golf Links Road, Westward Ho!, EX39 1LG",
    url: "https://www.torridge.gov.uk/parking/westward-ho/main",
    notes: "Torridge District Council car park in the centre of the village. Motorhomes overnight 6pm–8am, up to two consecutive nights; a van across two bays pays for both. No barbecues or fires, awnings, or tables and chairs outside. EV charging",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 12,
      price_note: "per bay; card, cash or RingGo (location 54524)",
    },
  },
  {
    slug: "seabreeze-appledore",
    name: "Seabreeze",
    kind: "stay",
    // The Club's GPS. The EX39 1NF postcode centroid is 50 m north; an unnamed
    // OSM caravan_site (way 1203517573) is 60 m north-west.
    lat: 51.04950, lon: -4.20770,
    address: "Long Lane, Appledore, EX39 1NF",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/bideford/seabreeze/",
    notes: "Caravan and Motorhome Club CL, members only. Adults only. Five pitches, hardstanding and grass, on 1.5 acres at the edge of Northam Burrows. Arrivals 1–8pm, leave by 11am",
    // The Club's listing. seabreezecampsite.co.uk no longer resolves.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Listed as ideal for dogs; no conditions given",
      season: { from: "03-01", to: "01-03" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "knotty-corner",
    name: "Knotty Corner Camp Site",
    kind: "stay",
    // The Club's GPS; not in OpenStreetMap, and the Club shows no postcode.
    lat: 51.00417, lon: -4.26244,
    address: "Knotty Corner, Bideford",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/devon/bideford/knottycornercampsite/",
    notes: "Camping and Caravanning Club CS, members only; advance booking essential. Motorhomes up to 7.5 m. Grass and hardstanding pitches on a gently sloping 1.5 acres. Toilets, showers, washing-up",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Listed as pets welcome; no conditions given",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 20,
      price_note: "members, per unit including two adults and two children; up to £25",
      hookup: true,
    },
  },
  {
    slug: "skern-abbotsham",
    name: "Skern Adventure Abbotsham",
    kind: "stay",
    // Centre of OSM way 222161725, "The Ultimate High", tagged Abbotsham Road,
    // EX39 5AP — the activity centre's own address. The postcode centroid is
    // 800 m south-west, in Abbotsham village.
    lat: 51.02047, lon: -4.23897,
    address: "Abbotsham Road, Bideford, EX39 5AP",
    phone: "01237 475992",
    url: "https://www.skernadventure.co.uk/glamping-and-camping",
    notes: "Campsite at an outdoor activity centre: campervan touring pitches and tent pitches. Toilet and shower block, washing-up, waste disposal point, camp shop and café. Book online",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs allowed; Skern's own pages don't say",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "seagate-appledore",
    name: "The Seagate",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1176460206.
    lat: 51.05432, lon: -4.19132,
    address: "The Quay, Appledore, EX39 1QS",
    phone: "01237 472589",
    email: "seagate@youngs.co.uk",
    url: "https://www.theseagate.co.uk/",
    notes: "Young's pub on the quay; breakfast daily, walk-ins welcome. Dogs welcome in the pub. Seventeen rooms, above the pub and in a converted sail loft. Customer car park, first come first served. Johns deli and café is 180 m along the quay",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms take up to two; £25 a night for one or two. On a lead in shared areas, never left unsupervised, not on beds or soft furnishings",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "waterfront-inn-westward-ho",
    name: "The Waterfront Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 979335543. OSM gives EX39 1LH; the inn's own site 1LG.
    lat: 51.04139, lon: -4.23687,
    address: "Golf Links Road, Westward Ho!, EX39 1LG",
    phone: "01237 474737",
    url: "https://www.waterfrontinn.co.uk/",
    notes: "Pub with eleven en-suite B&B rooms; rooms are booked through Braddicks Holidays. Dogs welcome in the bar. Free parking. Live music some Friday and Saturday nights carries to the rooms",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      // A 2016 TripAdvisor review describes a dog room (Petrel); the owner's
      // room page now says "No Pets".
      dogs: false,
      dogs_note: "No pets in the rooms",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "corner-house-bideford",
    name: "Corner House Guest House",
    kind: "stay",
    // OSM node 48931638.
    lat: 51.02043, lon: -4.20802,
    address: "The Strand, Bideford, EX39 2ND",
    phone: "01237 473722",
    url: "http://cornerhouseguesthouse.co.uk/",
    notes: "Guest house by Victoria Park, north of the Quay; five rooms. Street pay and display, free outside charging hours. Check-in after 4pm; key box for late arrivals",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      // BringFido lists dogs allowed; unconfirmed.
      dogs: null,
      dogs_note: "Not stated on the owner's site",
      season: "all-year",
      price_per_night: 88,
      price_note: "twin en-suite; king double from £105",
    },
  },
  {
    slug: "royal-hotel-bideford",
    name: "The Royal Hotel",
    kind: "stay",
    // Centre of OSM way 539889358.
    lat: 51.01621, lon: -4.20099,
    address: "Barnstaple Street, Bideford, EX39 4AE",
    phone: "01237 472005",
    url: "https://royalbideford.co.uk/",
    notes: "Hotel at the East-the-Water end of the Long Bridge, on the Tarka Trail. 32 rooms",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£20 per dog per night, in a handful of dog-friendly rooms. Dogs allowed in the bar and Merchants Bistro",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "durrant-house-hotel",
    name: "Durrant House Hotel",
    kind: "stay",
    // Centre of OSM way 226884254.
    lat: 51.03379, lon: -4.21197,
    address: "Heywood Road, Northam, EX39 3QB",
    phone: "01237 472361",
    url: "https://durranthousehotel.com/",
    notes: "Hotel between Bideford and Northam, with the Olive Tree restaurant and the Appledore bar",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£20 per dog per night; ring before booking so a dog room can be chosen. Dogs in the Appledore bar, not the Olive Tree restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hoops-inn",
    name: "The Hoops Inn & Country Hotel",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 343083672. The EX39 5DL postcode centroid is 10 m away.
    lat: 50.98464, lon: -4.31682,
    address: "Horns Cross, Bideford, EX39 5DL",
    phone: "01237 451222",
    email: "sales@hoopsinn.co.uk",
    // hoopsinn.co.uk redirects here.
    url: "https://www.hotelsnorthdevon.co.uk/",
    notes: "Part-thatched inn with thirteen en-suite rooms and a restaurant; breakfast included. 2.5 acres of gardens",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In the family room and all standard doubles and twins. On the floor in bedding you bring; not on beds or furniture",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "roeys-retreat",
    name: "Roey's Retreat Campsite",
    kind: "stay",
    // EX39 5RU via postcodes.io. OSM has no campsite here; its "Dyke Green
    // Farm" (node 5792174162), which shares the postcode, is 25 m away.
    lat: 50.98567, lon: -4.40563,
    address: "Clovelly Cross, Higher Clovelly, EX39 5RU",
    phone: "07551 007049",
    url: "https://www.roeysretreatcampsite.co.uk/",
    notes: "At the Clovelly Cross roundabout. 25 grass pitches, 6 × 6 m, all with water; toilets, showers, small shop. Booked through campsites.co.uk; 15% deposit non-refundable",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, on a lead",
      // The site says "April to October"; exact dates not given.
      season: { from: "04-01", to: "10-31" },
      price_per_night: 30,
      price_note: "from, electric pitch (10 A); non-electric from £25",
      hookup: true,
    },
  },
  {
    slug: "red-lion-clovelly",
    name: "The Red Lion Hotel",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 120698635.
    lat: 50.99892, lon: -4.39805,
    address: "48 The Quay, Clovelly, EX39 5TF",
    phone: "01237 431237",
    url: "https://www.redlion-clovelly.co.uk/rooms/",
    notes: "On the harbour at the foot of the car-free cobbled street; seventeen rooms, all with a sea view. A stay includes entry to the village and Clovelly Court Gardens, and parking. Harbour Restaurant, and the Snug and Harbour bars",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Three dog-friendly rooms, £20 or £25 supplement; ring to book one",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "stoke-barton-farm",
    name: "Stoke Barton Farm Campsite",
    kind: "stay",
    // OSM node 4326028589, in the camping fields (tagged "Stroke Barton").
    // The farmyard and entrance, opposite Stoke church, are 210 m north-east.
    // EX39 6DU is shared with Hartland Quay, so its centroid is no help.
    lat: 50.99186, lon: -4.51800,
    address: "Stoke, Hartland, Bideford, EX39 6DU",
    phone: "01237 441238",
    url: "https://www.westcountry-camping.co.uk/",
    notes: "Working farm opposite Stoke church. Over 12 acres of camping fields, 30 hookups; laundry, chemical disposal. Larger vans: ignore satnav through Hartland village and follow the site's route via Pengilly Way. No supermarket deliveries; no driving on site after dark. The Hartland Quay car parks send vans here",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2.50 each a night. On a lead at all times, never left unattended, not in the facilities",
      // 2026 dates: Friday 3 April to Sunday 4 October.
      season: { from: "04-03", to: "10-04" },
      price_per_night: 26,
      price_note: "two adults at £13 each; single occupancy £15; hookup £5.50",
      hookup: true,
    },
  },
  {
    slug: "pitt-farm",
    name: "Pitt Farm Campsite",
    kind: "stay",
    // OSM node 11939912973, an unnamed campsite carrying Pitt Farm's phone
    // number. The EX39 6BZ postcode centroid is 35 m away.
    lat: 51.00607, lon: -4.49302,
    address: "Pitt Farm, Hartland, Bideford, EX39 6BZ",
    phone: "07795 411474",
    url: "https://pittfarmcamping.co.uk/",
    notes: "Working dairy farm near Hartland Point; one flat 5-acre field with sea views. Toilet and shower block, chemical disposal. No wifi. Coming from Bude, don't follow satnav — use the site's directions. Arrive 11am–9pm; later arrivals park in the farmyard until morning. No supermarket deliveries. 01237 441919 also listed",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 a night. Tethered on your own pitch; not left to wander, not in the toilets",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 22,
      price_note: "two adults at £11 each; 50% deposit, or full payment for stays of two nights or less",
      hookup: false,
    },
  },
  {
    slug: "west-titchberry-farm",
    name: "West Titchberry Farm",
    kind: "stay",
    // OSM node 4868049766.
    lat: 51.01627, lon: -4.50825,
    address: "Hartland Point, Hartland, Bideford, EX39 6AU",
    phone: "01237 441287",
    url: "https://www.hartlandpeninsula.co.uk/hotels-inns-bed-breakfast/west-titchberry-farm/",
    notes: "B&B in an 18th-century farmhouse on a working farm by Hartland Point. Evening meals and packed lunches on request",
    // The Hartland Peninsula Association listing. westtitchberryfarm.co.uk
    // no longer resolves.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Not stated",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hartland-caravan-camping-park",
    name: "Hartland Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 77497859, named "South Lane Caravan Park". The
    // EX39 6DG postcode centroid is 100 m west.
    lat: 50.99135, lon: -4.47467,
    // The owner's site gives Fore Street; the Hartland Peninsula Association
    // listing gives South Lane.
    address: "Hartland, Bideford, EX39 6DG",
    phone: "01237 441876",
    email: "info@hartlandcaravanandcampingpark.co.uk",
    url: "https://www.hartlandcaravanandcampingpark.co.uk/",
    notes: "Four-acre park a few minutes' walk from Hartland village. Grass and hardstanding pitches; shower block, laundry, fishing pond. Holiday caravans on the same site. Buses from the entrance",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free",
      season: null,
      price_per_night: 29.5,
      price_note: "electric pitch for two £27 plus £2.50 for a motorhome; non-electric £23; solo £7.50 less; rates vary by season",
      hookup: true,
    },
  },
  {
    slug: "fosfelle",
    name: "Fosfelle Country House",
    kind: "stay",
    // Centre of OSM way 77497866. The Club's GPS is 130 m south; the EX39 6EF
    // postcode centroid 60 m west.
    lat: 50.98667, lon: -4.47490,
    address: "Hartland, Bideford, EX39 6EF",
    phone: "01237 441273",
    url: "https://fosfelle.co.uk/caravan-camping/",
    notes: "Caravan and Motorhome Club CL, members only. Five hardstanding pitches with water, 12 A and picnic tables; some sloping; 9 m maximum. Token showers and WCs in private pods, grey and green waste disposal, laundry. Alpacas and miniature donkeys roam the paddock. Arrivals midday–10pm. Ten minutes' walk to Hartland",
    verified: "2026-09-13",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "The Club listing gives a dog wash and dog runs; on a lead on site because of the animals",
      season: "all-year",
      price_per_night: 24,
      price_note: "per pitch including hookup and water, from the Hartland Peninsula Association listing",
      hookup: true,
    },
  },
  {
    slug: "old-smithy-inn",
    name: "The Old Smithy Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 5124645927, the pub. The rooms building (way 1286111649) is
    // 40 m south; the EX39 6HG postcode centroid 30 m.
    lat: 50.93338, lon: -4.51861,
    address: "Welcombe, Bideford, EX39 6HG",
    phone: "01288 331305",
    email: "theoldsmithyinnltd@gmail.com",
    url: "https://www.theoldsmithyinn.co.uk/",
    notes: "Village pub in Welcombe. Three en-suite double rooms across the beer garden, each with its own entrance; breakfast included, parking on site, check-in from 3pm. Bar 12–11pm daily; food Mon–Sat 12–3pm and 5–8pm, Sun 12–6pm. The Motorhome Stopover Club lists free overnight van parking for diners; the pub's own site doesn't mention it",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "The rooms page says pets welcome; no charge or limit given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "bush-inn-morwenstow",
    name: "The Bush Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1076489846. OSM also has a bar node (11066959352)
    // 10 m away.
    lat: 50.90690, lon: -4.54957,
    address: "Crosstown, Morwenstow, Bude, EX23 9SR",
    phone: "01288 331242",
    email: "bushinn.crosstown@gmail.com",
    url: "https://www.thebushinnmorwenstow.com/",
    notes: "13th-century free house at Crosstown, up the combe from Morwenstow church. Camper vans may stay overnight in the car park, and tents in the garden, if you eat or drink at the pub. Food 12–9pm daily; breakfast Sat–Sun 8–11.30am. Four B&B rooms; only Room 4, across the courtyard, is dog-friendly. Live music and quiz nights. The Rectory Tearooms is 350 m away",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome, on leads at all times",
      season: null,
      price_per_night: null,
      price_note: "free if you eat or drink at the pub",
    },
  },
  {
    slug: "rectory-farm-wild-camping",
    name: "Rectory Farm Wild Camping",
    kind: "stay",
    // OSM node 1298693615, "Rectory Farm". OSM has no campsite; park4night's
    // pin for the field is 125 m east.
    lat: 50.90794, lon: -4.55367,
    address: "Rectory Farm, Crosstown, Morwenstow, EX23 9SR",
    url: "https://www.pitchup.com/campsites/England/South_West/Cornwall/Bude/rectory-farm-wild-camping/",
    notes: "Pop-up meadow site on the organic farm by the Rectory Tearooms, a few minutes from the coast path and the Bush Inn. Tents and small campervans. Water, portaloos and a hot shower",
    // Pitchup and park4night listings only; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Pitchup and park4night listings say dogs are allowed",
      // park4night gives 4 Jul–31 Aug; Pitchup opens it on 4 July. A pop-up
      // site's dates are set afresh each year.
      season: { from: "07-04", to: "08-31" },
      price_per_night: 15,
      price_note: "per tent or van, from park4night; an older ukcampsite listing gives £10",
      // ukcampsite.co.uk: no electric hookups.
      hookup: false,
    },
  },
  {
    slug: "dunsmouth-farm",
    name: "Dunsmouth Farm cliff field",
    kind: "stay",
    // Centre of OSM way 1472738998, the farmyard; the EX23 9EG postcode
    // centroid is 50 m away. The fields themselves are on the cliff to the
    // south-west: park4night's pin is 430 m from the farmyard, beside the
    // coast path.
    lat: 50.85471, lon: -4.54950,
    address: "Dunsmouth Farm, Bude, EX23 9EG",
    url: "https://park4night.com/en/place/188825",
    notes: "Two large clifftop fields with the coast path alongside. One toilet and a tap by the entrance. The lane is narrow, steep and rocky: manageable in a small van. Just park; the farmer collects in the evening. Reviewers find the one toilet stretched at weekends",
    // A park4night listing is user-reported, not the operator. searchforsites
    // marks it temporarily closed, but park4night reviews run to 29 Aug 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      season: null,
      price_per_night: 10,
      price_note: "per van, from 2026 park4night reviews",
    },
  },
  {
    slug: "bryder-farm-camping",
    name: "Bryder Farm Camping",
    kind: "stay",
    // Centre of OSM way 1303981194. The EX23 9HP postcode centroid is 120 m
    // west.
    lat: 50.86901, lon: -4.51966,
    address: "Stibb, Bude, EX23 9HP",
    // From OSM.
    phone: "07765 028322",
    url: "https://www.facebook.com/stibb1972/",
    notes: "Small family site at Stibb, inland from Sandymouth. Eight touring pitches with hookup and water, a tent field, static caravans round the edge. Toilets, showers, laundry, waste disposal",
    // Directories (ukcampsite, park4night, Pitchup) and OSM tags only; the
    // owner has a Facebook page and no website.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs are welcome",
      season: null,
      price_per_night: null,
      // OSM power_supply=yes; park4night and ukcampsite agree.
      hookup: true,
    },
  },
  {
    slug: "wildly-camping",
    name: "Wildly Camping",
    kind: "stay",
    // The Google Maps pin linked from the owner's site. OSM has no campsite
    // here, and the EX23 9EE centroid, shared with Bude Holiday Park, is 170 m
    // west.
    lat: 50.84378, lon: -4.54512,
    // The owner's site gives "Maer, Bude"; directories give Maer Lane.
    address: "Maer Lane, Bude, EX23 9EE",
    phone: "07751 164745",
    url: "https://www.wildlycamping.co.uk/",
    notes: "Small field site at Maer, a short walk from Northcott Mouth and Crooklets. Tents and campervans. Two hot showers, two toilets, washing-up sinks, drinking water. No vehicle movement 10pm–7am; reception unmanned after 6pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On leads and supervised at all times",
      season: null,
      price_per_night: 24,
      price_note: "two people; extra adult £12, under-18 £7",
      // Not stated by the owner. Directories say no electric hookups.
      hookup: null,
    },
  },
  {
    slug: "wooda-farm",
    name: "Wooda Farm Holiday Park",
    kind: "stay",
    // Centre of OSM way 126117203.
    lat: 50.84433, lon: -4.51509,
    address: "Poughill, Bude, EX23 9HJ",
    phone: "01288 352069",
    url: "https://wooda.co.uk/camping/",
    notes: "Large park at Poughill with sea views; 220 touring and camping pitches, grass or hardstanding, some fully serviced. Secure dog exercise field, dog showers and a woodland walk. Farm shop; bar and takeaway March–October. Holiday homes and lodges on the same park",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per touring pitch, for a small nightly charge. On a lead, never left unattended, exercised in the designated areas",
      season: null,
      price_per_night: 35,
      price_note: "from, grass pitch with 16 A hookup; non-electric from £23, hardstanding electric from £41",
      hookup: true,
    },
  },
  {
    slug: "broadclose-park-camping",
    name: "Broadclose Park Camping (Bude Town FC)",
    kind: "stay",
    // Centre of OSM way 1098981036, the football pitch. The EX23 8DR postcode
    // centroid is 100 m away; park4night's pin 50 m.
    lat: 50.83009, lon: -4.53468,
    address: "Broadclose Park, Bude, EX23 8DR",
    // Bude Tourist Information Centre, which takes the bookings.
    phone: "01288 354240",
    url: "https://www.visitbude.info/accommodation/broadclose-park/",
    notes: "Camping field at the football club, a walk from the town centre and Summerleaze; Co-op five minutes, Morrisons ten. Meant for self-contained motorhomes: basic showers, no chemical disposal. Six hookup pitches and 25 unmarked. Training or a match may be on. Book through Visit Bude, or turn up and pay when someone calls round",
    // Visit Bude (the Bude Area Tourist Board) listing. The club's own
    // budetownfc.com now shows a Wix domain error.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The Visit Bude listing says on a lead on site, with a public footpath alongside for walks",
      season: null,
      price_per_night: 15,
      price_note: "motorhome and up to three people; hookup pitch £20; extra adult £4",
      hookup: true,
    },
  },
  {
    slug: "crescent-car-park-bude",
    name: "Crescent car park",
    kind: "stay",
    // Centre of OSM way 4877218, unnamed, beside the Tourist Information
    // office (way 176871525). The EX23 8LE postcode centroid is 50 m north-east;
    // park4night's two Crescent entries are within 65 m.
    lat: 50.82709, lon: -4.54597,
    address: "The Crescent, Bude, EX23 8LE",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/crescent-bude-ex23-8le/",
    // Rules from Cornwall Council's page and its motorhome parking page. "No
    // return within 48 hours" and "6 m apart, no awnings" are from Visit
    // Bude's page, which reproduces the council's sign. Toilets from OSM.
    notes: "Cornwall Council car park by the Tourist Information Centre and the canal. Self-contained motorhomes with their own toilet may stay overnight in the designated overflow area only: two consecutive nights at most, no return within 48 hours, 6 m apart, no awnings, chairs, BBQs or generators. Overnight tickets from the pay & display machine by the overflow area. Every other council car park in Bude, including Summerleaze, Crooklets and the Wharf, bans motorhomes 11pm–8am. Public toilets by the Tourist Information Centre",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 20,
      price_note: "6pm–9am, April–October; £17.40 November–March",
    },
  },
  {
    slug: "efford-downs-campsite",
    name: "Efford Downs Campsite",
    kind: "stay",
    // Centre of OSM way 1194308228. The EX23 8LJ postcode centroid is 220 m
    // north-east, towards the lane end on Vicarage Road.
    lat: 50.82507, lon: -4.55042,
    address: "Vicarage Road, Bude, EX23 8LJ",
    email: "geddon@effordcamping.co.uk",
    url: "https://effordcamping.co.uk/",
    notes: "No-frills hillside field on Efford Down, the nearest campsite to the town centre, with direct access to the coast path. Sloping, with some flat spots. Water, flushing toilets, hot showers; bring toilet roll. Entrance lane just past the Brendon Arms towards Widemouth. Arrivals 2–9pm; no check-in, display your booking confirmation. Campervans and van conversions welcome; no A-class, twin-axle or over 8 m, and the lane suits nothing over 7 m. Quiet from 9pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£5 a night, paid on arrival; on a lead on site",
      season: null,
      price_per_night: 27,
      price_note: "two people sharing a pitch; extra adult £12; single walker with a tent £15",
      hookup: null,
    },
  },
  {
    slug: "upper-lynstone",
    name: "Upper Lynstone Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 471567786. The EX23 0LP postcode centroid is 230 m
    // south.
    lat: 50.82066, lon: -4.54939,
    address: "Bude, EX23 0LP",
    phone: "01288 352017",
    url: "https://upperlynstone.co.uk/touring-camping/",
    notes: "Family-run park three-quarters of a mile from Bude on the Widemouth road; the coast path adjoins it and the canal towpath leads into town. Touring field of 36 levelled, fenced 10 A pitches, fifteen with hardstandings; more in two camping fields. Heated shower block, chemical disposal, laundry, shop with Calor and Camping Gas. Arrivals noon–9pm. Families and couples only, no groups; single hikers welcome. Holiday caravans for hire",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved pets; on a lead on site and exercised off the park",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "beach-house-widemouth",
    name: "Beach House",
    kind: "stay",
    // OSM node 434057138, tagged "Beach House Hotel". The EX23 0AW postcode
    // centroid is 250 m north.
    lat: 50.79500, lon: -4.55544,
    address: "Marine Drive, Widemouth Bay, Bude, EX23 0AW",
    phone: "01288 361256",
    email: "widemouthbeachhouse@gmail.com",
    url: "https://www.beachhousewidemouth.co.uk/room-booking-in-cornwall/",
    notes: "Laid-back B&B on the foreshore at Widemouth Bay, home of The Break beach bar; the coast path runs through the garden. Some rooms basic; breakfast included. 10% off seven nights or more booked direct",
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "BringFido lists dogs allowed at £15 each per stay; the owner's site doesn't say",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "bay-view-inn-widemouth",
    name: "The Bay View Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 434057136. The EX23 0AW postcode centroid is 140 m north-west.
    lat: 50.79659, lon: -4.55461,
    address: "Marine Drive, Widemouth Bay, Bude, EX23 0AW",
    phone: "01288 361273",
    email: "reservations@bayviewinn.co.uk",
    url: "https://bayviewinn.co.uk/stay/",
    // Room count (six, en-suite) is from directories; the owner's stay page
    // gives none.
    notes: "Family-run pub and restaurant at the top of Widemouth beach, beside Sandparks Campsite, with rooms. Open 11am till late; food 12–2.30pm and 5–8.30pm. Dogs welcome in the surf bar, on the decking and in a dog-friendly area of the restaurant",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site covers dogs in the bar and restaurant, not the rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "sandparks-campsite",
    name: "Sandparks Campsite",
    kind: "stay",
    // Centre of OSM way 1486515788. The EX23 0AW postcode centroid is 280 m
    // north-west.
    lat: 50.79572, lon: -4.55311,
    address: "Marine Drive, Widemouth Bay, EX23 0AW",
    phone: "07551 600748",
    email: "reservations@sandparks.co.uk",
    url: "https://www.sandparkscampsitebude.co.uk/about",
    notes: "Beachside field overlooking Widemouth Bay, with the Bay View Inn at the entrance. Parking by the pitch. New toilet block, heated indoor and outdoor showers, washing-up area, wifi, charging, communal freezer. Campfires and BBQs allowed. Arrivals 10am–9pm, departure by noon",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The owner's FAQ says dog friendly; no limit or charge given",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 30,
      price_note: "from, two adults on a non-electric pitch; electric from £38",
      hookup: true,
    },
  },
  {
    slug: "widemouth-bay-caravan-park",
    name: "Widemouth Bay Caravan Park",
    kind: "stay",
    // Centre of OSM way 159535386. The EX23 0DF postcode centroid is 700 m
    // north-west.
    lat: 50.77678, lon: -4.55236,
    address: "Poundstock, Bude, EX23 0DF",
    phone: "01288 361208",
    url: "https://www.johnfowlerholidays.com/cornwall-holiday-park/widemouth-bay-caravan-park",
    notes: "John Fowler holiday park in 50 acres, five minutes from Widemouth beach. Over 100 touring pitches, grass and hardstanding, with or without hookup, alongside static caravans and safari tents. Indoor pool, bar, restaurant, shop, kids' club and evening entertainment; dog-walking field. Pitches from midday, vacate by 10am; ring ahead if arriving after dusk",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "John Fowler accepts dogs at all its parks, on leads; campsites.co.uk gives up to two per touring pitch",
      // campsites.co.uk listing; the owner's site gives no dates.
      season: { from: "03-06", to: "10-31" },
      price_per_night: null,
      price_note: "John Fowler gives camping pitches from £15 a night across its parks",
      hookup: true,
    },
  },
  {
    slug: "penhalt-farm",
    name: "Penhalt Farm Campsite",
    kind: "stay",
    // OSM node 1708341339. The farmyard (way 1306336516) is 100 m south; the
    // EX23 0DG postcode centroid 200 m south-west.
    lat: 50.77335, lon: -4.56288,
    address: "Penhalt Farm, Widemouth Bay, Bude, EX23 0DG",
    phone: "01288 361210",
    email: "info@penhaltfarm.co.uk",
    url: "https://www.penhaltfarm.co.uk/booking.html",
    notes: "Working farm on the coastal downs a mile south of Widemouth Bay, with sea views. Eight-acre site for tourers and tents, pitched round the edge; general pitches about 11 × 8 m. Shower block, laundry, games room, play area, small shop. Awnings allowed, no gazebos, no fires on the grass. Arrivals from 2.30pm, departure by 11am",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £3 each a night; under control at all times, with farm animals nearby",
      // 2026's dates, which may not recur.
      season: { from: "04-25", to: "10-31" },
      price_per_night: null,
      price_note: "pitch price only through the booking form; includes two adults and two children; hookup £5 (max 17 A), extra adult £5",
      hookup: true,
    },
  },
  {
    slug: "lower-tresmorn",
    name: "Lower Tresmorn Farm",
    kind: "stay",
    // OSM node 968210174. The EX23 0NU postcode centroid is 520 m east.
    lat: 50.74961, lon: -4.61008,
    address: "Lower Tresmorn Farm, Crackington Haven, Bude, EX23 0NU",
    phone: "01840 230667",
    url: "http://www.lowertresmorn.co.uk/bed-and-breakfast-crackington-haven-bude-cornwall.php",
    notes: "B&B in a medieval National Trust farmhouse above Crackington Haven; the coast path is a few minutes down the lane and across a field. Six rooms across the farmhouse, up a stone spiral stair, and the converted barn. Minimum stay usually two nights, shorter by arrangement. Children over 8. Self-catering cottages and a cabin too",
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "coombe-barton-inn",
    name: "The Coombe Barton Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 33796009. The EX23 0JG postcode centroid is 110 m east.
    lat: 50.74138, lon: -4.63284,
    address: "Crackington Haven, EX23 0JG",
    phone: "01840 230345",
    url: "https://coombebarton.co.uk/rooms/",
    notes: "Pub at the head of the beach. Five rooms, doubles and a triple, most en-suite; book by phone or the website's form. Open daily from 11.30am, noon on Sundays; lunch 12–2pm daily, dinner Mon–Sat 5.30–7.30pm",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "No dogs in bedrooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hallagather-crackington-campsite",
    name: "Crackington Campsite (Hallagather Farm)",
    kind: "stay",
    // Centre of OSM way 499123928, "Hallagather Farm". OSM has no campsite;
    // the EX23 0LA postcode centroid is 30 m east, park4night's pin 90 m east.
    lat: 50.73037, lon: -4.62536,
    address: "Hallagather Farm, Crackington Haven, EX23 0LA",
    phone: "07869 591670",
    email: "hallagather@gmail.com",
    url: "https://www.hallagatherfarmholidays.co.uk/camping",
    notes: "Relaxed farm field site, the nearest campsite to the beach: 30 minutes' walk down to Crackington Haven. Tents, campers and caravans; no set pitches, some sea views. Campfires allowed; fire pits and logs from the farm. Simple facilities with plenty of hot water. Book through the enquiry form or WhatsApp 07446 302306",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on leads",
      // A June 2026 park4night review gives "April to October ish".
      season: null,
      price_per_night: null,
      price_note: "from £8 a night, basis not stated; directories give £7 an adult, £4 a child, £1 a dog",
      // park4night description: no electric hookup.
      hookup: false,
    },
  },
  {
    slug: "trelay-farm-campsite",
    name: "Trelay Farm Campsite",
    kind: "stay",
    // OSM node 8887496232, Trelay Farm Shop; OSM has no campsite. The EX23 0NJ
    // postcode centroid is 400 m south.
    lat: 50.73846, lon: -4.58550,
    // Directories (ukcampsite, hotels.uk.com); the owner's site gives no address.
    address: "Trelay Farm, St Gennys, Bude, EX23 0NJ",
    phone: "07890 534713",
    email: "camping@trelay.org",
    url: "https://www.trelaycampsite.com/",
    notes: "Small eco site on a 32-acre community smallholding, two miles inland of Crackington Haven. Ten pitches in two areas, only four for campervans; parking limited. Toilets, hot showers, shared indoor space for cooking and drying, fridge-freezer, charging. Fire pits for hire. Greener Camping Club members only; you're enrolled when you book. They can sometimes collect walkers by car",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2 each; on a lead no longer than 2 m at all times, never left unattended",
      season: null,
      price_per_night: 25,
      price_note: "tent or campervan pitch with two people; solo £16; extra person £2.50; plus £12 a year Club membership",
      hookup: false,
    },
  },
  {
    slug: "old-wainhouse-inn",
    name: "The Old Wainhouse Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1185404186. The EX23 0BA postcode centroid is 3 m away.
    lat: 50.73021, lon: -4.57791,
    // The owner's site gives EX23 0BA and, further down, EX23 0XB, which
    // postcodes.io doesn't recognise.
    address: "Wainhouse Corner, St Gennys, Bude, EX23 0BA",
    phone: "01840 230711",
    email: "oldwainhouseinn@yahoo.com",
    url: "https://www.theoldwainhouseinn.co.uk/services-4",
    notes: "Traditional pub on the A39 at Wainhouse Corner, three miles inland of Crackington Haven. Four en-suite rooms: twin, double and single, room only or with breakfast. Dogs welcome inside and out in the pub. Premier convenience store next door",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site says nothing about dogs in the rooms; dog directories say only some superior rooms take them",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "bude-club-site",
    name: "Bude Camping and Caravanning Club Site",
    kind: "stay",
    // Centre of OSM way 906112853. The Club's own GPS is 920 m south-west; the
    // EX23 0BG postcode centroid 600 m north-east.
    lat: 50.71915, lon: -4.58579,
    address: "Gillards Moor, St Gennys, EX23 0BG",
    phone: "01840 230650",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/bude/bude-camping-and-caravanning-club-site/",
    notes: "Club site just off the A39, with countryside views. Grass and hardstanding pitches, some super-service. No motorhome service point, but grey waste and chemical disposal. Shop, wifi, play area, accessible facilities. The lanes round it have no footways, so the coast is a drive. Check-in 1pm, check-out noon",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome; no dog walk or off-lead area on site",
      season: { from: "05-01", to: "09-28" },
      price_per_night: null,
      price_note: "Club members from £10.50 an adult; additional charges may apply",
      hookup: true,
    },
  },
  {
    slug: "lower-pennycrocker-farm",
    name: "Lower Pennycrocker Farm",
    kind: "stay",
    // Centre of OSM way 309844854. The PL35 0BY postcode centroid is 110 m
    // south-west.
    lat: 50.70351, lon: -4.65592,
    address: "Lower Pennycrocker Farm, Boscastle, PL35 0BY",
    phone: "07967 605392",
    email: "colin.heard@yahoo.com",
    url: "https://pennycrocker.uk/",
    notes: "Family-owned farm site above Boscastle, two miles from the village along the coast path. Parking beside your pitch. Free showers, toilets, accessible toilet, washing-up room. Groups of up to eight. Office 9am–7pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2 each a night. Directories add on a lead and exercised off site",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 20,
      price_note: "two adults at £10 each; child 5+ £5; hookup £7",
      hookup: true,
    },
  },
  {
    slug: "wideacres-camping",
    name: "Wideacres Camping",
    kind: "stay",
    // OSM node 14054273166. park4night's pin is 60 m away; the PL35 0BU
    // postcode centroid, which the owner warns leads to Cargurra Farm, 610 m east.
    lat: 50.69646, lon: -4.65660,
    address: "St Juliot, Boscastle, PL35 0BU",
    phone: "07971 896360",
    url: "https://www.wideacrescamping.co.uk/",
    notes: "Family-run field site at St Juliot with sea views, a mile inland of the coast path; Boscastle is a walk down the Valency valley. Park where you pitch. Hot showers, indoor washing-up area, playground, and a small bar with a pool table, serving pizzas in peak season. A request bus stop at the end of the lane. park4night reports a notice on site: two people and two nights minimum",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: false,
      dogs_note: "A dog-free site",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 20,
      price_note: "per pitch, from park4night; electricity £5",
      hookup: true,
    },
  },
  {
    slug: "trebyla-farm",
    name: "Trebyla Farm Camping & Caravan Site",
    kind: "stay",
    // Centre of OSM way 233751142. park4night's pin is 60 m away; the PL35 0HL
    // postcode centroid 520 m north-west.
    lat: 50.69827, lon: -4.66510,
    address: "Trebyla Farm, Boscastle, PL35 0HL",
    phone: "01840 250308",
    email: "brigjl@aol.com",
    url: "https://boscastlecampsite.co.uk/",
    notes: "Two-acre field on a working farm a mile and a half above Boscastle, with sea views; the coast path is within walking distance. 30 pitches for tents, tourers and motorhomes, sheltered by high hedges. Toilets, showers, washing-up room, chemical disposal, drinking water. Fire pits on request. Book by email or phone; the owner says the booking form has been unreliable. Reviewers say bring levelling ramps",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories (ukcampsite, Pitchup) say dogs are welcome; the owner's site doesn't say",
      // park4night says open all year; the owner gives no dates.
      season: null,
      price_per_night: 18,
      price_note: "two adults at £9 each; single adult £13; child 3–17 £4.50; hookup £5",
      hookup: true,
    },
  },
  {
    slug: "yha-boscastle",
    name: "YHA Boscastle",
    kind: "stay",
    // OSM node 3552396438; YHA's own lat/lng is 3 m away. The PL35 0HD
    // postcode centroid is 130 m east.
    lat: 50.69073, lon: -4.69564,
    address: "Palace Stables, Boscastle, PL35 0HD",
    url: "https://www.yha.org.uk/hostel/yha-boscastle",
    notes: "Hostel in the old Palace Stables by the harbour, on the coast path. Self-catering only; drying room, cycle store. Reception 8–10am and 5–8.30pm. No parking: drop bags at the door, then park in the pay and display 300 m away",
    verified: "2026-09-14",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Assistance dogs only, unless you hire the whole hostel",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "wellington-boscastle",
    name: "The Wellington",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1289419384. The PL35 0AQ postcode centroid is 30 m away.
    lat: 50.68922, lon: -4.69294,
    address: "The Harbour, Boscastle, PL35 0AQ",
    phone: "01840 250202",
    url: "https://www.wellingtonhotelboscastle.com/our-rooms",
    notes: "16th-century coaching inn in the valley at the foot of Boscastle, run by St Austell Brewery. En-suite rooms with breakfast. Open 8am–11pm. Check-in from 3pm, out by 11am; two nights minimum on Friday and Saturday in peak times. A few parking spaces at the pub, first come first served",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. Not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trewethett-farm-club-site",
    name: "Trewethett Farm Club Campsite",
    kind: "stay",
    // Centre of OSM relation 2189213, an unnamed caravan site whose outline
    // contains the Club's own GPS point, 190 m south. The PL34 0BQ postcode
    // centroid is 260 m south.
    lat: 50.67570, lon: -4.72684,
    address: "Trethevy, Tintagel, PL34 0BQ",
    phone: "01840 770222",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/trewethett-farm-club-campsite/",
    notes: "Caravan and Motorhome Club site on the clifftop above Bossiney Cove; the coast path borders it. Closed from 14 September 2026 for redevelopment, due to reopen 11 June 2027, subject to planning. 146 pitches, 69 hardstanding; maximum outfit 9 m. Non-members welcome. Motorhome service point, laundry, family washroom, wifi, play area, late-arrivals area with hookup. Earliest arrival 1pm. Nearest shops are in Tintagel",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dog walk on and from the site",
      // The Club's open dates for 2027, the first season after redevelopment.
      season: { from: "06-11", to: "11-01" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "little-clifden-campsite",
    name: "Little Clifden Campsite",
    kind: "stay",
    // Centre of OSM way 1551177562. park4night's pin is 80 m away; the PL34 0BD
    // postcode centroid 180 m north.
    lat: 50.66468, lon: -4.72847,
    // Cool Cornwall's listing.
    address: "Little Clifden, Tintagel, PL34 0BD",
    url: "https://park4night.com/en/place/435502",
    notes: "Big field on a dairy farm inland of Bossiney, with sea views; pick your own pitch. Sloping: bring ramps. Toilets, two coin showers (£1 for 4 minutes, 50p coins), washing-up area, water tap, bins. Fire pits for hire; campfires and BBQs allowed. Half a mile from St Nectan's Glen, 30 minutes' walk to Tintagel",
    // Directories and park4night only; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Cool Cornwall and Go Explore say dogs welcome on a lead, with livestock next door; park4night lists pets allowed",
      // park4night: open from 3 Jun 2026, and a May 2026 review found it shut.
      // No closing date found.
      season: null,
      price_per_night: 20,
      price_note: "from park4night and its 2024–25 reviews; one reviewer paid that for one person and a car",
      // OSM power_supply=no.
      hookup: false,
    },
  },
  {
    slug: "bossiney-cove-campsite",
    name: "Bossiney Cove Campsite & Car Park",
    kind: "stay",
    // OSM node 4935264256, "Bossiney Cove Parking". park4night's pin is 20 m
    // away; the PL34 0AY postcode centroid 140 m south-west.
    lat: 50.66828, lon: -4.73640,
    // From the park4night listing.
    address: "Bossiney, Tintagel, PL34 0AY",
    url: "https://park4night.com/en/place/45472",
    notes: "Mown clifftop field on the B3263 between Tintagel and Boscastle, above Bossiney Haven, looking towards Lundy. Room for about 30 vans, no set pitches; sloping, so bring ramps. Overnight for self-contained campervans only. Gate open 9am–7pm, with a code for leaving early; pay the site manager 6–7pm, or book ahead on Pitchup. Drinking water; 2026 reviews report two portaloos added in June and cassette emptying on request. May shut to vehicles after heavy rain. Coffee and ice-cream van in the holidays. 10–15 minutes' walk to Tintagel beside the road. Day parking £3, out by 7pm",
    // The listing was written by the site ("BossineyCove") but isn't the
    // owner's own website; none found.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed; a May 2026 review stayed with a dog",
      // April to October, from the site's listing.
      season: { from: "04-01", to: "10-31" },
      price_per_night: 15,
      price_note: "per van, from the listing and 2026 reviews; £5 until 2025",
    },
  },
  {
    slug: "camelot-castle-hotel",
    name: "Camelot Castle Hotel",
    kind: "stay",
    // Centre of OSM way 108200004. The PL34 0DQ postcode centroid is 80 m south.
    lat: 50.66821, lon: -4.75555,
    address: "Tintagel, PL34 0DQ",
    phone: "01840 770202",
    url: "https://camelotcastle.com/dog-friendly-stays/",
    notes: "Clifftop hotel on the headland above Tintagel, beside the coast path. Sea- and moor-view rooms, self-catering apartments, restaurant and afternoon tea",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Classic rooms only: one dog per room, up to 20 kg and at least 12 months old, £22 a night. Ring reservations before booking. Allowed everywhere but the main restaurant and non-dog rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "king-arthurs-car-park",
    name: "King Arthur's Car Park",
    kind: "stay",
    // Centre of OSM way 107483304. park4night's pin is 80 m away; the PL34 0DA
    // postcode centroid 100 m south.
    lat: 50.66431, lon: -4.75154,
    address: "Brunswick House, Fore Street, Tintagel, PL34 0DA",
    phone: "01840 770870",
    email: "info@tintagelcarpark.co.uk",
    url: "https://www.tintagelcarpark.co.uk/",
    notes: "Private car park in the village beside the King Arthur's Arms, licensed for overnight stays by any vehicle. Level tarmac all year; a grass motorhome area Good Friday–31 October, 15 vans at most, 6 m apart; summer overflow fields from about the third week of July to mid-September, taking vans, tents and a vehicle-free field for walkers. Arriving before 5pm, pay the hourly rate on top. Toilets 50p, 6am–11pm; coin shower £3 for 4 minutes; washing-up £2; drinking water £2–4; cassette emptying £5; grey water and refuse free. Pay by machine or RingGo. The council car parks at Tintagel Visitor Centre, Trebarwith Strand and Boscastle's Cobweb ban motorhomes 11pm–8am",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: true,
      dogs_note: "On leads; clean up after them",
      // Tarmac all year; the grass and overflow areas are seasonal.
      season: "all-year",
      price_per_night: 7,
      price_note: "5pm–10am; 24 hours £14",
    },
  },
  {
    slug: "king-arthurs-arms",
    name: "King Arthur's Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 33809331. The PL34 0DA postcode centroid is 20 m away.
    lat: 50.66352, lon: -4.75150,
    address: "Fore Street, Tintagel, PL34 0DA",
    phone: "01840 770628",
    email: "info@kingarthursarms.co.uk",
    url: "https://kingarthursarms.co.uk/our-rooms/",
    notes: "Family-run free house in the centre of Tintagel with B&B rooms: doubles and family rooms above the pub, six ground-floor annexe rooms, five of them wheelchair-accessible wet rooms, and a three-bedroom flat. Breakfast included. Open from 9am; food 8.30am–9pm in season. Guests park free in King Arthur's Car Park next door, motorhomes included, midday to midday. Reservations office 9.30am–5.30pm",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms with easy outdoor access; no charge or limit given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-tintagel-country-club-car-park",
    name: "Old Tintagel Country Club Car Park",
    kind: "stay",
    // Centre of OSM way 107483307. park4night's pin is 40 m away; the PL34 0DD
    // postcode centroid 50 m.
    lat: 50.66479, lon: -4.75278,
    // From the park4night listing.
    address: "Atlantic Road, Tintagel, PL34 0DD",
    url: "https://park4night.com/en/place/151377",
    notes: "Private pay car park in the village on Atlantic Road, day and night. Vans use the grass at the far end, flat enough. 2025–26 reviews report toilets and a shower, open only to those staying the night",
    // park4night listing and reviews; no operator website found.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      season: "all-year",
      price_per_night: 10,
      price_note: "8pm–9am, from park4night; a June 2025 reviewer was charged £10 against £5 on the sign",
    },
  },
  {
    slug: "olde-malthouse-tintagel",
    name: "Ye Olde Malthouse Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1289436507. The PL34 0DA postcode centroid is 140 m east.
    lat: 50.66407, lon: -4.75283,
    address: "Fore Street, Tintagel, PL34 0DA",
    phone: "01840 770461",
    url: "https://malthousetintagel.com/our-rooms/",
    notes: "14th-century inn at the top of Tintagel's main street. Nine en-suite rooms, from a single popular with coast path walkers to a ground-floor Garden Suite; cooked breakfast and parking at the rear included. Kitchen open seven days",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Seven of the nine rooms; Rooms 1 and 8 are pet-free. No charge given on the owner's site; stayinapub says nominal",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "michael-house-treknow",
    name: "Michael House",
    kind: "stay",
    // OSM node 13408566001. The PL34 0EW postcode centroid is 5 m away.
    lat: 50.64738, lon: -4.74947,
    address: "Trelake Lane, Treknow, Tintagel, PL34 0EW",
    phone: "01840 770592",
    email: "info@michael-house.co.uk",
    url: "https://michael-house.co.uk/",
    notes: "Vegan guest house in Treknow, a mile south of Tintagel, looking down the valley to Trebarwith Strand; the coast path is ten minutes' walk. Two en-suite doubles, one can be a twin. Vegan evening meals by arrangement, £25 three courses; unlicensed, bring your own. Resident cats and dogs. £25 a person deposit; cash or transfer",
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "By arrangement: £20 per dog per stay on the tariff, £15 in the terms",
      // "Usually open nearly all year".
      season: null,
      price_per_night: 110,
      price_note: "two sharing, one night; £47 each a night for 2–4 nights, £42 for five or more; single supplement £20",
    },
  },
  {
    slug: "mill-house-inn-trebarwith",
    name: "The Mill House Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1221432352. The PL34 0HD postcode centroid is 80 m west.
    lat: 50.64521, lon: -4.74769,
    address: "Trebarwith Strand, Tintagel, PL34 0HD",
    phone: "01840 770200",
    email: "management@themillhouseinn.co.uk",
    url: "http://www.themillhouseinn.co.uk/staying-at-the-mill-house/",
    notes: "Former 18th-century corn mill in seven acres of its own wooded valley, ten minutes' walk up from Trebarwith Strand. Eight en-suite rooms, including a family room for five. Bar with a slate floor and log fires, restaurant, residents' lounge, terraces",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Dogs welcome in the bar and outside, not the restaurant since 1 June 2026; the owner's site doesn't say about rooms",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "port-william-trebarwith",
    name: "Port William",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 316315373. The PL34 0HB postcode centroid is 230 m east.
    lat: 50.64421, lon: -4.76113,
    address: "Trebarwith Strand, Tintagel, PL34 0HB",
    phone: "01840 770230",
    url: "https://www.theportwilliam.co.uk/our-rooms/",
    notes: "St Austell Brewery pub on the hillside above Trebarwith Strand, by the coast path. Eight sea-view rooms, all first floor by stairs, no extra beds or cots; breakfast included. Open 8am–11pm. Two nights minimum, with Saturday restrictions. Check-in from 3pm, out by 10.30am. A few parking spaces; the council car park is a minute away",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. Not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "the-port-gaverne",
    name: "The Port Gaverne",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 550576670, still "Port Gaverne Hotel". The owner's directions
    // link is 40 m away; the PL29 3SQ postcode centroid 90 m south-east.
    lat: 50.59274, lon: -4.82211,
    address: "Port Gaverne, Port Isaac, PL29 3SQ",
    phone: "01208 822973",
    email: "portgaverne@staustellbrewery.co.uk",
    url: "https://www.portgavernecornwall.co.uk/our-rooms",
    notes: "St Austell Brewery pub with rooms at the head of Port Gaverne cove, on the coast path; formerly the Port Gaverne Hotel. Rooms on the first and second floors up a narrow, steep stair; no extra beds, travel cots by arrangement. Breakfast included, 8–11am. Open 8am–11pm, 10.30pm Sundays; food noon–9pm, 9.30pm Friday and Saturday. Check-in from 3pm, out by 11am. Two nights minimum on Friday and Saturday in peak times. No parking: drop bags at the door, then limited on-street spaces or the New Road long-stay car park at the top of the hill. Reservations also on 0345 241 1133",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. On leads in public areas, not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-school-hotel-port-isaac",
    name: "The Old School Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 484533626. The PL29 3RD postcode centroid is 60 m
    // south-east; OSM's addr:postcode is PL29 3RB.
    lat: 50.59331, lon: -4.83222,
    address: "Fore Street, Port Isaac, PL29 3RD",
    phone: "01208 880721",
    email: "reception@theoldschoolhotel.co.uk",
    url: "https://www.theoldschoolhotel.co.uk/accommodation/",
    notes: "The village's old school, above the harbour, seen in Doc Martin. Twelve en-suite rooms: five kingsize, one of them a family room for four; five small doubles, four on the ground floor; two ground-floor singles with wet rooms. Breakfast included, 8.30–10am. Restaurant and bar open to non-residents: lunch noon–2.30pm, snacks to 5pm, dinner 6–9pm; winter hours may vary. Check-in from 3pm, out by 11am. A small residents' car park, space booked ahead and charged; otherwise the public car parks. Second number 01208 880020",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Only in a limited selection of rooms, arranged at booking and listed on the confirmation; a dog brought without permission means leaving and paying in full",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "slipway-port-isaac",
    name: "The Slipway",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 567523157, "Slipway Hotel". The PL29 3RH postcode
    // centroid is 50 m south-east.
    lat: 50.59192, lon: -4.83211,
    address: "Harbour Front, Port Isaac, PL29 3RH",
    phone: "01208 880264",
    email: "slipway@portisaachotel.com",
    url: "https://portisaachotel.com/stay/",
    notes: "Bar and restaurant on the harbour front with seven en-suite rooms above: four sea-view doubles, two with balconies; a double with lounge and a twin at the back; a loft suite. Breakfast 8.30–10am. Open 9am till late daily; covered terrace over the harbour. No parking: drop luggage only, since cars left outside are fined; the public car parks are 5–10 minutes' walk uphill",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "Pets are not allowed to stay",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trewetha-farm",
    name: "Trewetha Farm",
    kind: "stay",
    // Centre of OSM way 463191666, "Trewtha Farm". The PL29 3RU postcode
    // centroid is 130 m south.
    lat: 50.58709, lon: -4.81930,
    address: "Trewetha Farm, Port Isaac, PL29 3RU",
    phone: "01208 880256",
    email: "trewethafarm@btopenworld.com",
    url: "https://trewethafarm.wordpress.com/en-suite-bed-and-breakfast/",
    notes: "B&B in an 18th-century farmhouse on a four-acre smallholding in the hamlet of Trewetha, above Port Isaac; two footpaths lead from the farm to the coast path. Three en-suite doubles, one a family room for four, and a sea-view twin with a nearby bathroom. Eggs from the farm's own hens and ducks. Ample parking. Self-catering cottages and lodges too. The website's last post is from 2020, so ring to check",
    // Checked against the owner's site, which looks unchanged since 2020.
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      // "Room rates are the same all year round"; no closed season given.
      season: null,
      price_per_night: 85,
      price_note: "per room, the same all year",
    },
  },
  {
    slug: "lower-bodannon",
    name: "Lower Bodannon (Coastal Holidays)",
    kind: "stay",
    // Postcode centroid (PL29 3RU); OSM has nothing here. park4night's pin,
    // placed by the owner, is 210 m east.
    lat: 50.58592, lon: -4.81950,
    // From the park4night listing.
    address: "Lower Bodannon, Trewetha, Port Isaac, PL29 3RU",
    url: "https://park4night.com/en/place/362684",
    notes: "Farmer's meadow above Port Gaverne with sea views, five van places; Port Isaac is walkable. Toilet, shower and a kitchenette with microwave and washing machine; electricity only for charging phones. Up a bumpy track. A July 2026 reviewer says turn up and post £20 in an envelope through the white bungalow's letterbox; a September 2026 review found water only at the outdoor tap and the toilet, none in the kitchenette or shower. One 2025 reviewer's emails went unanswered. Glamping pods and cottages on the same farm",
    // park4night listing (written by the operator) and reviews; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night lists pets allowed; a July 2026 reviewer asks guests to pick up after dogs",
      // The listing says seasonal, but a reviewer stayed on 29 December 2025.
      season: null,
      price_per_night: 20,
      price_note: "per van, from park4night and 2024–26 reviews; a July 2025 reviewer paid £10 for a tent",
      hookup: false,
    },
  },
  {
    slug: "pennant-farm",
    name: "Pennant Farm",
    kind: "stay",
    // OSM node 11295322636. park4night's pin is 20 m away; the PL29 3TP
    // postcode centroid 520 m south-west.
    lat: 50.57703, lon: -4.82707,
    // Directories (Kompass, and listings drawn from its Facebook page).
    address: "Pennant Farm, St Endellion, Port Isaac, PL29 3TP",
    phone: "01208 880574",
    url: "https://park4night.com/en/place/493790",
    notes: "Camping field on a working farm near St Endellion, with country views; tractors pass. Sloping, with some level spots; 15 places on park4night. Two toilets and one shower, rustic but clean, hot and free. A June 2025 reviewer paid cash. Reviewers walk to Port Isaac in about 30 minutes by road or across the fields. Holiday cottages and a shepherd's hut too",
    // park4night and directories; the only owner presence is a Facebook page.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories quoting its Facebook page say dogs welcome; park4night lists pets allowed",
      // park4night lists it as seasonal; no dates found.
      season: null,
      price_per_night: 20,
      price_note: "per pitch, from park4night and 2025–26 reviews; a 2024 reviewer paid £15 for two with electricity",
      // 2024 and 2025 reviews: limited hookup.
      hookup: true,
    },
  },
  {
    slug: "poldark-inn",
    name: "The Poldark Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 4180095701. The PL33 9DQ postcode centroid is 30 m west.
    lat: 50.62297, lon: -4.74290,
    address: "Treligga Downs, Delabole, PL33 9DQ",
    phone: "01840 212565",
    email: "adrian@poldarkinn.com",
    url: "https://www.poldarkinn.com/",
    notes: "Free house high on Treligga Downs, inland of the coast path above Tregardock Beach. B&B rooms, all but one en-suite, and self-catering apartments next door. Home-made pub food, live sport, two pool tables. Bar open from 6pm daily. Check-in 1pm, out 11am. Free parking",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Tripadvisor reviews and booking sites say dogs welcome at no charge; the owner's site doesn't mention dogs",
      season: null,
      price_per_night: 60,
      price_note: "B&B from £60 a room",
    },
  },
  {
    slug: "mill-meadow-st-kew",
    name: "Mill Meadow Campsite",
    kind: "stay",
    // Postcode centroid (PL30 3ES); OSM has no campsite. The owner's map pin is
    // 260 m south, park4night's 220 m south.
    lat: 50.56449, lon: -4.79012,
    // The owner gives the postcode and St Kew parish; "Lanow Mill" from park4night.
    address: "Lanow Mill, St Kew, PL30 3ES",
    phone: "01208 841505",
    email: "lanowmill@gmail.com",
    url: "http://millmeadowcamping.co.uk/",
    notes: "Camping and Caravanning Club Certificated Site, members only: five vans or caravans and ten tents. Four-acre, gently sloping valley meadow in St Kew parish, bordered by Mill Lane and two streams; six west-facing pitches with hookup and water. Toilets, showers, grey and chemical waste disposal, reception room with fridge-freezer, kettle and microwave, levelling blocks to borrow. Communal fire pit by arrangement; raised BBQs only. Coded gate; quiet 10pm–7am. St Kew Inn 15 minutes' walk. Service stop £5 for up to three hours. A 2025 reviewer advises coming from the B3314, as the lanes from the A39 are narrow. Mobile 07769 960959",
    verified: "2026-09-14",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Well-controlled dogs welcome; £1 each a night",
      // The Club lists it open 1 Jan–31 Dec 2026; park4night says all year.
      season: "all-year",
      price_per_night: 20,
      price_note: "Club members, pitch with hookup; without £15, hardstanding £25; extra adult £5, shower £1",
      hookup: true,
    },
  },
  {
    slug: "gunvenna-holiday-park",
    name: "Gunvenna Holiday Park",
    kind: "stay",
    // Centre of OSM way 815082272. The PL27 6QN postcode centroid is 220 m
    // south-west.
    lat: 50.56671, lon: -4.86951,
    address: "St Minver, Wadebridge, PL27 6QN",
    phone: "01208 862405",
    email: "gunvenna.bookings@gmail.com",
    url: "https://www.gunvenna.com/camping_touring.html",
    notes: "Family-run touring and holiday-home park at St Minver, two miles inland of Polzeath. Hardstanding and grass super pitches with water and grey waste, and grass pitches with electricity. Indoor heated pool from late May to mid-September, shop, games room, play area, launderette, dog shower and dog walk. Check-in 2–8pm, nobody pitched after 8.30pm; out by 10.30am. £50 non-refundable deposit",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £5 each a night. Some breeds barred beyond the Dangerous Dogs Act. On a lead no longer than 8 ft, exercised only in the dog walk, never left alone",
      // The owner gives no season dates.
      season: null,
      price_per_night: null,
      price_note: "mid season £26.50 grass or £27.50 hardstanding, high season £39.50, for one car, two adults and two children; extra adult £6; hookup 16 A",
      hookup: true,
    },
  },
  {
    slug: "cornish-tipi-holidays",
    name: "Cornish Tipi Holidays",
    kind: "stay",
    // Centre of OSM way 1102384018. The PL30 3HZ postcode centroid is 380 m
    // south.
    lat: 50.58155, lon: -4.77170,
    address: "Tregildrans Quarry, Trelill, St Kew, PL30 3HZ",
    phone: "01208 880781",
    url: "https://www.cornishtipiholidays.co.uk/wild-camping",
    notes: "Tipis and camping round a spring-fed lake in a 20-acre wooded former quarry near Trelill. Campervans and motorhomes in the communal meadow only: all grass, no hardstanding, waste disposal or tank refills. Hot showers, flushing and composting loos, drinking water from standpipes. Campfires encouraged; swimming, boats and fishing in the lake. Arrive 4–8pm at busy times; late arrivals by arrangement, £20. One vehicle per booking. Summer marquee weddings can have amplified music until midnight",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: false,
      dogs_note: "No dogs or any other pets",
      // "Easter to October"; the only dates on the site are 2024's, 22 Mar–10 Oct.
      season: null,
      price_per_night: null,
      price_note: "meadow £25 an adult a night, child 2–12 £10–12, same for tents or vans; one night minimum",
      hookup: false,
    },
  },
  {
    slug: "treglines-farm-cl",
    name: "Treglines Farm CL",
    kind: "stay",
    // Centre of OSM way 1122758099, an unnamed farmyard; OSM has no campsite.
    // The Club's GPS is 70 m west; the PL27 6QT postcode centroid 370 m
    // south-west.
    lat: 50.56931, lon: -4.89114,
    // The Caravan and Motorhome Club's listing.
    address: "Treglines Farm, St Minver, Wadebridge, PL27 6QT",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/wadebridge/treglines-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a 0.75-acre lawned site on a working farm with country views, a mile from Polzeath beach by a footpath from the site. Some sloping pitches; levelling blocks needed. 10 A hookup, drive-over motorhome waste disposal, WC for exclusive use, dog walk from the site. Pub and shop within a mile. Directions are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing says dogs accepted, with a dog walk from the site",
      // The Club lists it open 11 Apr–31 Oct 2026.
      season: { from: "04-11", to: "10-31" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "southwinds-polzeath",
    name: "Southwinds Camping Park",
    kind: "stay",
    // OSM node 1685948758. The PL27 6QU postcode centroid is 320 m south-west.
    lat: 50.57498, lon: -4.89950,
    // The owner's sat nav postcode.
    address: "Polzeath, PL27 6QU",
    phone: "01208 863267",
    email: "info@southwindscamping.co.uk",
    url: "https://polzeathcamping.co.uk/index.php/southwinds/",
    notes: "Family site on the hill above Polzeath, with sea and country views; sister site to Tristram. Three fields, one open only in the July–August holidays. A budget area in the middle of Southwinds field takes small tents and campervans up to 5 m, no awning or hookup; the owner calls it popular with coast path walkers. One unit per pitch, no pup tents. Free hot showers, coin laundry, free wifi, freezer. A footpath to the beach and village; ask reception, as they advise against the road. Latest check-in strictly 6pm; not before 1pm in high season. No fires or fire pits. Families and couples only",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£4 a night",
      // "2026 Season Now Open", but the season dates on the page are 2025's,
      // closing 27 September.
      season: null,
      price_per_night: 20,
      price_note: "budget area, two people, low season; £25 high season; one person £12 or £15. Standard pitch £28 low, £38 high, hookup included where available; extra adult £10",
      hookup: true,
    },
  },
  {
    slug: "tristram-caravan-park",
    name: "Tristram Caravan Park",
    kind: "stay",
    // Centre of OSM way 1122484731. The PL27 6TD postcode centroid is 110 m
    // south-east.
    lat: 50.57361, lon: -4.91907,
    // The owner's sat nav postcode.
    address: "Polzeath, PL27 6TD",
    phone: "01208 862215",
    email: "info@tristramcampsite.co.uk",
    url: "https://polzeathcamping.co.uk/index.php/camping/",
    notes: "Family-run touring park on the grassy clifftop above Polzeath beach, fenced off from the coast path, with a footpath down to the beach. Caravans, motorhomes and campervans only: no tents of any kind, roof tents and trailer tents included. All grass, no hardstanding; some pitches slope, and ramps are sold on site. A budget area takes campervans up to 5 m with two people, no hookup or awning. Families and couples over 21; no large groups. Arrive strictly 2–6pm and check in at reception first; no arrivals after it closes. Out by 10.30am. Free showers and wifi. The 2027 diary opens at the end of September",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on leads, £4 a night; no XL Bullies",
      season: { from: "03-28", to: "11-01" },
      price_per_night: null,
      price_note: "budget area £32.50 mid season, £36 high; standard pitch with hookup £41 mid, £61.50 high. The tariff also lists adults £12 and cars £12 a night as extras, without saying whether a pitch includes anyone",
      hookup: true,
    },
  },
  {
    slug: "st-moritz-hotel",
    name: "St Moritz Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // OSM node 1290854692. The PL27 6SD postcode centroid is 85 m north.
    lat: 50.56688, lon: -4.92030,
    address: "Trebetherick, PL27 6SD",
    phone: "01208 862242",
    email: "stay@stmoritzhotel.co.uk",
    url: "https://stmoritzhotel.co.uk/dog-friendly-stays-cornwall/",
    notes: "Spa hotel in Trebetherick, between Polzeath and Rock; the coast path is a short walk away. Hotel rooms and suites, self-catering apartments and houses. Cowshed spa, indoor hydro pool, outdoor pool, gym, tennis courts; two restaurants and the Shorecrest Bar and Terrace; e-shuttle to the local area",
    // One directory says it is "ceasing to be a dog friendly hotel"; the
    // owner's page still lists dog-friendly rooms.
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Two ground-floor Garden Suites with enclosed gardens, and first-floor Sea View Pod rooms (a suite with balcony, Cosy and King rooms): up to two dogs, £20 each a night; book by phone. Not in the main restaurant; bar tables with dogs bookable through reception. Dogs allowed in the grounds and the Seaside Pool Club",
      // "Warm hospitality all year round".
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "trewiston-farm",
    name: "Trewiston Farm and Campsite",
    kind: "stay",
    // Centre of OSM way 1050861356, "Trewiston Farm Caravan Park". The PL27 6PX
    // postcode centroid is 170 m west.
    lat: 50.55806, lon: -4.90097,
    address: "St Minver, Wadebridge, PL27 6PX",
    phone: "01208 863205",
    email: "trewistonfarm@trewiston.co.uk",
    url: "https://www.trewiston.co.uk/",
    notes: "Family-run camping and caravan park between Polzeath, Daymer Bay and Rock, next to The Point golf course. A footpath through the farm leads to Polzeath; the coast path is within walking distance. Individual hookups, toilets and showers, shop, EV charging. A family pub a mile away; a regular bus to Wadebridge. Two lodges and static caravans too",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 a night",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 23,
      price_note: "low season, two people included; high season (1 July–3 September) £26; extra person £6; hookup £4",
      hookup: true,
    },
  },
  {
    slug: "st-enodoc-hotel",
    name: "St Enodoc Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 751308128, an unnamed hotel. The PL27 6LA postcode
    // centroid is 45 m east.
    lat: 50.54576, lon: -4.91612,
    address: "Rock Road, Rock, Wadebridge, PL27 6LA",
    phone: "01208 863394",
    email: "info@paul-ainsworth.co.uk",
    url: "https://enodoc-hotel.co.uk/rooms/",
    notes: "Paul Ainsworth's hotel above the Camel Estuary in Rock. Garden- and estuary-view rooms with super king beds, some twins; apartments with kitchenettes; two-bedroom family suites. Estuary Grill, Flour Garden pizzas in the gardens, bar and terrace; room service",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms in several categories, marked on the rooms page. No charge given by the owner; Canine Cornwall says eight rooms, £15 per dog a night",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-custom-house-padstow",
    name: "Old Custom House",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1190717400. The PL28 8BL postcode centroid is 140 m
    // south-east.
    lat: 50.54099, lon: -4.93743,
    address: "Padstow, PL28 8BL",
    phone: "01841 532359",
    email: "oldcustomhouse@staustellbrewery.co.uk",
    url: "https://www.oldcustomhousepadstow.co.uk/our-rooms",
    notes: "St Austell Brewery pub on Padstow's quay, in a listed building. 23 en-suite rooms, from a cosy double to a suite, many looking over the harbour or estuary; all on the first and second floors up steps. Breakfast included, 8.30–11.30am. Open 8.30am–11pm, 10.30pm one day a week; food noon–9pm. Check-in 4–10pm, out by 11am. Two nights minimum on Friday and Saturday in peak times. Can be noisy in peak season. No parking: the Harbour Commissioners' pay and display opposite is about £8 for 24 hours, and the long-stay at Trevethan Farm by Tesco £3 a day. Reservations also on 0345 241 1133",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. On leads in public areas, not left alone in the room, not on furniture or beds. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "london-inn-padstow",
    name: "The London Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1191574135. The PL28 8AN postcode centroid is 15 m away.
    lat: 50.54111, lon: -4.93949,
    address: "6–8 Lanadwell Street, Padstow, PL28 8AN",
    phone: "01841 531129",
    email: "contact@londoninnpadstow.co.uk",
    url: "https://www.londoninnpadstow.co.uk/",
    notes: "Family-run independent pub a street back from the harbour, opened in 1803 in three fishermen's cottages; St Austell Brewery ales. Five en-suite rooms above the pub. Small, changing menu; a roof terrace",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs; booking directories say dogs are welcome in the rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "harbour-hotel-padstow",
    name: "Harbour Hotel Padstow",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 174603384, "Padstow Harbour Hotel". The PL28 8DB
    // postcode centroid is 50 m west. Directories give it as the former
    // Metropole.
    lat: 50.53985, lon: -4.93721,
    address: "Station Road, Padstow, PL28 8DB",
    phone: "01841 532486",
    email: "padstow@harbourhotels.co.uk",
    url: "https://www.harbourhotels.co.uk/our-hotels/cornwall/harbour-hotel-padstow/faqs",
    notes: "Revamped Victorian hotel above the harbour, looking over the Camel Estuary; some rooms with balconies. The Jetty restaurant. Check-in from 3pm, ring if arriving after 10pm; out by 11am. Limited on-site parking, first come first served: free when booked direct, £10 a day otherwise",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Specific rooms only; ask the reservations team. £20 per dog a night. On a lead; allowed on the terrace and in the Boat Room (except during private events), not in the main restaurant, bar or lounge",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "link-road-car-park-padstow",
    name: "Link Road car park",
    kind: "stay",
    // Centre of OSM way 152192396, "Link Road Long Stay Car Park". The PL28 8AY
    // postcode centroid is 140 m north.
    lat: 50.53979, lon: -4.94181,
    address: "Link Road, Padstow, PL28 8AY",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/link-road-padstow-pl28-8ay/",
    // Rules from the car park's page and Cornwall Council's motorhome parking
    // page, which gives two consecutive nights as an example of what the signs
    // say. The town council's own page covers the Railway and Lawns car parks.
    notes: "Cornwall Council long-stay car park at the top of the town, tarmac, open 24 hours; the one car park in Padstow where self-contained motorhomes with their own toilet may stay overnight. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. No motorhome bays; pay for every bay you cover. The town council's Railway car park bans motorhomes 10pm–8am, and its Lawns car park is unsuitable for them. Pay and display or JustPark (location 8227)",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "dennis-cove-campsite",
    name: "Dennis Cove Campsite",
    kind: "stay",
    // Centre of OSM way 219704461. The PL28 8DR postcode centroid is 160 m east.
    lat: 50.53173, lon: -4.93782,
    address: "Dennis Lane, Padstow, PL28 8DR",
    phone: "01841 532349",
    url: "https://denniscovecampsite.co.uk/tariffs-booking-terms/",
    notes: "Family campsite on the edge of Padstow, 10 minutes' walk from the harbour by its own access onto the Camel Trail; estuary views from the top field. 100 grass pitches over five fields, including sister site The Foreshore. Tents, campervans, smaller motorhomes and caravans; most van pitches have grass-protection mesh. Toilet block refurbished 2020–21, with drying room and laundry. Single-track lane: arrive 1–9.30pm, no early or late arrivals; out by 11am. Three nights minimum at Whitsun and in August unless hiking or cycling. No shop, guest wifi or campfires; Tesco 10–15 minutes' walk. Non-refundable booking fee of £100 per pitch per week, or the full fee if less",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£4 a night, £5 peak; on leads and never left unattended",
      season: { from: "04-02", to: "09-27" },
      price_per_night: 38,
      price_note: "pitch with two people and a vehicle, off-peak; peak (Whitsun week, July and August) £44; extra adult £11.50–12.50; hookup £6.50 on a third of pitches; hiker rate £15–17 and single occupancy £27–32 by phoning the office",
      hookup: true,
    },
  },
  {
    slug: "padstow-campsite-trevethan",
    name: "Padstow Campsite (Trevethan Farm)",
    kind: "stay",
    // Centre of OSM way 152216967, Tesco; OSM has no campsite, whose entrance is
    // 50 m past Tesco's on Sarah's Lane. park4night's pin is 85 m east; the
    // PL28 8EL postcode centroid 510 m east.
    lat: 50.53493, lon: -4.94580,
    address: "Trevethan Farm, Sarah's Lane, Padstow, PL28 8EL",
    phone: "07766 400212",
    email: "trevethanfarm@gmail.com",
    url: "https://www.padstowcampsite.co.uk/our-story",
    notes: "Family-run seasonal pop-up site in fields at the top of Padstow, with estuary views; 10 minutes' walk to the harbour and the Rock ferry, two minutes to Tesco. Tents, campers and motorhomes of any size; up to five people per pitch. Hot showers, toilets, hot-water washing-up and drinking water. No Elsan disposal, no charging points (staff will charge a device), no wifi or generators. Raised BBQs only, no fire pits. Check-in 1–9pm; ring on arrival. Leave by midday. Reviewers say the field slopes. Trevethan Farm also runs long-stay day parking by the same lane, gates 8am–10pm, for leaving a vehicle while walking",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "No charge; on a lead. No breeds listed under the Dangerous Dogs Act",
      // "Seasonal, pop-up". park4night's listing says open all year, with £12
      // off-season for self-contained vans and facilities from the May bank
      // holiday; an April 2026 reviewer paid £15.
      season: null,
      price_per_night: 28,
      price_note: "per pitch, showers included; 2025 reviewers paid £25",
      hookup: false,
    },
  },
  {
    slug: "well-parc-trevone",
    name: "The Well Parc",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 867805340. The PL28 8QN postcode centroid is 75 m east.
    lat: 50.54169, lon: -4.97594,
    address: "Dobbin Lane, Trevone, PL28 8QN",
    phone: "01841 520318",
    email: "info@wellparc.co.uk",
    url: "http://www.wellparc.co.uk/the-hotel.htm",
    notes: "Family-run hotel and village inn in two acres above Trevone, looking out to Trevose Head; beaches and coast path under five minutes' walk. Seven en-suite rooms, three with sea views: two large family rooms, a triple and four doubles. Public bar open every day with food from sandwiches and pasties to steaks and seafood, and Cornish real ales; sun terrace facing the sea; ample private parking; wifi. Closed the Christmas and New Year weeks. Will carry luggage onwards for coast path walkers, given notice",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs; directories disagree",
      // "Open all year round apart from the Christmas and New Year weeks".
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trewithen-st-merryn",
    name: "Trewithen Caravan and Camping",
    kind: "stay",
    // Centre of OSM way 1341544132, which gives PL28 8LZ; the owner gives
    // PL28 8JZ, whose centroid is 600 m south-east.
    lat: 50.52739, lon: -4.97414,
    address: "Trewithen Farm, St Merryn, Padstow, PL28 8JZ",
    phone: "01841 520420",
    email: "maystrewithen@aol.com",
    url: "https://trewithencaravanandcamping.com/prices/",
    notes: "Quiet family-run site on a farm a mile from St Merryn village, with country views down the valley to Harlyn Bay. Eight acres, 30 pitches, 12 with hookup; book early for those. Toilet and shower block, accessible family wet room, washing-up, laundry, wetsuit rinse area. Two nights minimum; seven nights Saturday to Saturday on hookup pitches in July and August. Non-refundable deposit. Book online or by email",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night",
      // "Open 1st April to 31st October, subject to weather conditions".
      season: { from: "04-01", to: "10-31" },
      price_per_night: 24,
      price_note: "pitch with two adults and a car, April–June and September–October; £28 July–August; hookup pitch £28 or £32; extra adult £6",
      hookup: true,
    },
  },
  {
    slug: "higher-harlyn-park",
    name: "Higher Harlyn Park",
    kind: "stay",
    // Centre of OSM way 220537809, "HIgher Harlyn Touring Park". The owner
    // gives no postcode.
    lat: 50.53145, lon: -4.99718,
    address: "St Merryn, Padstow",
    phone: "01841 520022",
    email: "info@higherharlynpark.co.uk",
    url: "https://www.higherharlynpark.co.uk/tariff",
    notes: "Holiday park 300 m from the St Merryn crossroads on the road to Harlyn Bay, with camping and touring pitches, some with sea views to Trevose Head and Gulland; the Bays camping area opens at May half term. Up to six people per pitch, awning included. Bar Harlyn with live music, and Pedro's Al Fresco takeaway: brunch Tuesday–Sunday 9am–2pm, evenings Tuesday–Saturday 5.30–8pm; a restaurant upstairs due autumn 2026. Outdoor heated pool May half term to early September, shop through the season, laundrette, Elsan disposal, outdoor showers for wetsuits. No electric splitters, supermarket deliveries or open fires; quiet after 11pm. Under-25s only with family",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £5 each a night; on a lead at all times, even in the dog walk field. Not in the pool area, play area, toilets, showers, shop or laundrette; never left unattended",
      season: { from: "03-28", to: "11-01" },
      price_per_night: 25,
      price_note: "non-electric pitch, low season (28 March–21 May, 28 September–31 October); hookup £30, sea-view hookup £34. Mid season (1 June–9 July, 2–27 September) £30, £35, £40; high season (22–31 May, 10 July–1 September) £45, £50, £55. Extra person £5",
      hookup: true,
    },
  },
  {
    slug: "farmers-arms-st-merryn",
    name: "The Farmers Arms",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1221349105, "Farmers Arms Inn".
    lat: 50.52584, lon: -4.99177,
    address: "St Merryn, Padstow",
    phone: "01841 520303",
    url: "https://farmersarmscornwall.co.uk/our-rooms/",
    notes: "St Austell Brewery village inn in St Merryn, 19th-century. Four en-suite rooms including a family suite, booked through Booking.com from the pub's contact page. Pub food with a carvery, real ales, patio, children's play area; live entertainment, and the owner warns noise from the bar can reach the rooms. Customer car park",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Well-behaved pets may be able to stay by prior arrangement, subject to confirmation: ask before booking. Pets are welcome in many areas of the pub",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "pig-at-harlyn-bay",
    name: "THE PIG-at Harlyn Bay",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 867950085. The PL28 8SQ postcode centroid is 185 m
    // north-east.
    lat: 50.53699, lon: -5.00438,
    address: "Harlyn Bay, Padstow",
    phone: "0345 225 9494",
    email: "reservations@thepighotel.com",
    url: "https://www.thepighotel.com/at-harlyn-bay/plan-your-visit/faqs/",
    notes: "Country-house hotel with a kitchen-garden restaurant above Harlyn Bay, a short walk off the path. Check-in from 3pm, out by 11am. Free parking. The phone and email are central reservations for all the PIG hotels",
    // The site blocks direct fetches; its FAQ and 2026 Dog House Rules were read
    // through a reader proxy. One older directory says no dogs at Harlyn Bay;
    // the owner's FAQ excludes only THE PIG-in the wall and THE PIG-on the beach.
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In a small number of dog-friendly rooms, booked by email or phone. One dog, up to Labrador size (40 kg), over a year old; £40 a night plus a £500 pre-authorisation. Crate, bowls and blanket provided; not left unattended, kept off beds and furniture. Not in the main house, indoor restaurants, bars or lounges; welcome on terraces and in the grounds on a lead",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "harlyn-sands",
    name: "Harlyn Sands Holiday Park",
    kind: "stay",
    // Centre of OSM way 220525876, an unnamed caravan site; Alan Rogers' GPS
    // for Harlyn Sands is 140 m south, inside it. The PL28 8SQ postcode
    // centroid is 580 m south-east.
    lat: 50.54089, lon: -5.01022,
    address: "Lighthouse Road, PL28 8SQ",
    phone: "01841 520720",
    email: "enquiries@harlynsands.co.uk",
    url: "https://harlynsands.co.uk/touring/",
    notes: "Holiday park on Trevose Head above Harlyn Bay, with static caravans and the Super Splash Fun Pool. 80 level grass touring pitches on the main park, plus the sea-view Beachfield, whose facilities are 5 minutes' walk away on the main park. Unisex shower block, 20p for 4 minutes; toilets, laundry, washing-up. Pitches allocated at booking. A third of the cost as deposit",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per unit, charged extra; on a short lead at all times, with a £20 fine for a dog off the lead or fouling. No breeds under the Dangerous Dogs Act",
      // The owner gives no touring season or tariff; seasonal pitches run Easter
      // to the end of October. Alan Rogers lists March to October.
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "mother-iveys-bay",
    name: "Mother Ivey's Bay Holiday Park",
    kind: "stay",
    // Centre of OSM way 220526491. The PL28 8SL postcode centroid is 360 m west.
    lat: 50.54260, lon: -5.01290,
    address: "Trevose Head, Padstow, PL28 8SL",
    phone: "01841 520990",
    email: "info@motheriveysbay.com",
    url: "https://www.motheriveysbay.com/touring/",
    notes: "35-acre family park by Trevose Head above its own sandy beach at Mother Ivey's Bay, beside the path; no bar, club or restaurant, and silence 11pm–7am. Touring fields: Booby's, opening in May, with views over Booby's and Constantine Bays; The Green, central, over Mother Ivey's Bay; stone-walled Deluxe pitches with water, drainage and picnic table; The Square, sheltered. Pitches without hookup bookable by phone. Shop and launderette. Arrive from noon, no pitching after 10pm; out by 11am. Vehicle gates locked midnight–7am. Couples and families only. 50% non-refundable deposit. Bus stop opposite Constantine Bay Stores, a mile away",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £5 a night, £6 in high season. Not in The Square, the shop, launderette or toilet blocks. On a lead of 2 m or less on the park, and on the beach 10am–6pm; exercise off the park and beach; never left unattended",
      season: { from: "03-28", to: "11-01" },
      price_per_night: 33,
      price_note: "landscaped or walled pitch with hookup, up to six people, low season (to 21 May and October); £46 mid, £64 high (10 July–30 August). Deluxe pitch £62 mid, £77 high",
      hookup: true,
    },
  },
  {
    slug: "yha-treyarnon-bay",
    name: "YHA Treyarnon Bay",
    kind: "stay",
    // Centre of OSM way 220525273. The PL28 8JR postcode centroid is 210 m
    // south-east.
    lat: 50.52767, lon: -5.02281,
    address: "Padstow, PL28 8JR",
    email: "treyarnon@yha.org.uk",
    url: "https://www.yha.org.uk/hostel/yha-treyarnon-bay",
    notes: "Hostel 50 m from the sea at Treyarnon Bay, on the path. Shared rooms, private rooms (some en-suite), Landpods, bell tents, and pitch-up camping for your own tent. Trey Bay café and licensed bar with sea views; live music. Check-in 3–10pm, out by 10am; towels to hire. Parking at the hostel: register the vehicle at reception",
    verified: "2026-09-14",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Not in hostel bedrooms. Allowed in the camping area: Landpods and bell tents at £10 per dog a night, or free in your own tent, and then in the hostel's public areas except kitchens",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "treyarnon-bay-holidays",
    name: "Treyarnon Bay Holidays",
    kind: "stay",
    // Centre of OSM relation 15641325. The PL28 8JP postcode centroid is 260 m
    // west.
    lat: 50.52739, lon: -5.01804,
    address: "Treyarnon Bay, Padstow, PL28 8JP",
    phone: "01841 520681",
    email: "hello@treyarnonbayholidays.co.uk",
    url: "https://treyarnonbayholidays.co.uk/stay-with-us/camping/",
    notes: "Farm-run campsite above Treyarnon Bay, a few minutes' walk from Constantine Bay: 81 pitches, 26 with hookup; reviewers on the owner's page say much of the field slopes and needed chocks. Charged per unit, not per person. No wifi and patchy signal; no clubhouse, EV charging, generators or campfires. Showers £1 for 7 minutes; washing machine and dryer, freezer, phone charging. Treyarnon and Constantine stores a few minutes' walk; food vans in the school holidays. Check-in from 2pm, out by noon. Hookup pitches a week minimum, Saturday to Saturday, in the school holidays; non-electric pitches flexible. Couples and families only; zero tolerance of noise after 10pm. Office 9am–5pm Monday–Saturday",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night, pre-booked; on a lead. Not in the main camping fields in July and August: then only in the Farmers Field at Trevear, 10–15 minutes' walk from the main site, with no hookup, booked by phone",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 25,
      price_note: "campervan or motorhome, up to six people, April–June and September; £30 July–August; hookup £10, awning £5, extra person £5",
      hookup: true,
    },
  },
  {
    slug: "trethias-farm",
    name: "Trethias Farm Camping and Caravan Park",
    kind: "stay",
    // Centre of OSM way 220528639. The PL28 8JS postcode centroid, which the
    // owner gives for the park, is 370 m north.
    lat: 50.52111, lon: -5.02477,
    address: "Treyarnon Bay, St Merryn, Padstow, PL28 8JS",
    phone: "01841 520323",
    email: "trethiasfarm@btconnect.com",
    url: "https://www.trethiasfarm.co.uk/pricelist.php",
    notes: "Family-run since the 1950s, yards from the coast path by a private road; Treyarnon Bay 5 minutes' walk. Touring pitches round the field edges, no entertainment, minimal lighting. Free showers in refurbished blocks, washing machines and dryers, ice-pack freezer, chemical disposal, water points, family and accessible bathrooms. Reception and shop just off site. Up to five per pitch; no single-sex groups. Pitch from noon, out by 11am. Normally Saturday to Saturday in the summer holidays, to the August bank holiday. Book by phone, email or form; £50 deposit per pitch per week; cards at reception only. Quiet after 11pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night, £5 in high season; on a lead except in the sea-view dog walking field",
      // The latest price list is 2025's: low season 28 March–30 June and
      // 6 September–30 October. No 2026 dates published.
      season: null,
      price_per_night: 22,
      price_note: "caravan or motorhome pitch with two people, two vehicles and awning, 2025 low season; £30 high (1 July–5 September); electric £8 or £10 extra; fully serviced pitch £23 or £32; extra adult £8 or £10.50",
      hookup: true,
    },
  },
  {
    slug: "porthcothan-clifftop-camping",
    name: "Porthcothan Clifftop Camping",
    kind: "stay",
    // Centre of OSM way 1052045142, "Porthcothan Cliff Top Camping".
    // park4night's pin, likely at the field track, is 400 m south-east.
    lat: 50.51515, lon: -5.02790,
    // From the park4night listing.
    address: "Carnevas Farm, Porthcothan Bay, Padstow, PL28 8PN",
    url: "https://park4night.com/en/place/286851",
    notes: "Back-to-basics field on a working farm, on the clifftop right by the coast path, with open sea views; Porthcothan beach about 15 minutes' walk. Compost toilets, three hot showers, washing-up, water taps; no electricity, grey or chemical waste disposal. Reached by a field track across about three fields from a small roadside sign. Vans and small campers rather than big motorhomes; pick your own spot on the slope. An August 2026 reviewer advises booking ahead for weekends. The owner's website, porthcothanclifftopcamping.com, shows a Wix domain error",
    // park4night listing and reviews; the owner's site is down.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night's description says well-behaved dogs welcome",
      // park4night: "open throughout the summer". A reviewer was told in
      // December 2022 that it closes from September; one found it deserted on
      // 19 June 2024.
      season: null,
      price_per_night: 30,
      price_note: "two people and a van, from an August 2026 review; £25 on park4night and in 2023–24 reviews",
      hookup: false,
    },
  },
  {
    slug: "carnevas-holiday-park",
    name: "Carnevas Holiday Park",
    kind: "stay",
    // Centre of OSM way 220527970, "Carnevas". The PL28 8PN postcode centroid is
    // 310 m north-west.
    lat: 50.51308, lon: -5.01385,
    address: "St Merryn, Padstow, PL28 8PN",
    phone: "01841 520230",
    email: "info@carnevasholidaypark.co.uk",
    url: "https://carnevasholidaypark.co.uk/camping-and-touring/",
    notes: "Family-run park inland of Porthcothan, with camping and touring pitches, chalets and holiday homes. Free showers, family bathrooms, dishwashing, laundry, games room, play area. Shop end of May to early September; the Jolly Roger bar at Easter and May to mid September, with Joeys caterer outside it. Book with the booking form; a new online system is due. £50 deposit a week, £100 on hookup pitches in peak weeks, non-returnable",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night",
      // The 2026 tariff runs April to October; no exact dates.
      season: null,
      price_per_night: 19,
      price_note: "van, or car and tent, with two people, April, 1–23 May and October; £21–23.50 late May to mid July and September; £27.50 18 July–August; extra adult £4.50; hookup (10 A) £6, Saturday to Saturday preferred from 18 July",
      hookup: true,
    },
  },
  {
    slug: "berryfields-porthcothan",
    name: "Berryfields Tearoom & Holiday Park",
    kind: "stay",
    // Centre of OSM way 823073254, "Berryfields". park4night's pin is 25 m away.
    lat: 50.51071, lon: -5.01617,
    address: "Porthcothan, Padstow",
    // From directories.
    phone: "01841 520178",
    url: "https://park4night.com/en/place/601710",
    notes: "Small holiday park and tearoom above Porthcothan, 5–10 minutes' walk from the beach. A grass field at the back for about 20 vans or tents; hot showers by £1 token, drinking water, grey and chemical waste disposal. Playing areas, football field, pitch and putt and crazy golf. Cream teas and pasties in the tearoom",
    // park4night listing (2026, no reviews yet) and directories; the only owner
    // presence is a Facebook page.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night lists pets allowed; directories say dogs welcome",
      // park4night: open from May 2026.
      season: null,
      price_per_night: 25,
      price_note: "per night, from park4night's 2026 listing",
      // Directories list hookup and hardstanding; park4night doesn't list electricity.
      hookup: null,
    },
  },
  {
    slug: "penlan-porthcothan",
    name: "Penlan B&B",
    kind: "stay",
    // OSM node 4913742846. The PL28 8LP postcode centroid is 45 m west.
    lat: 50.50761, lon: -5.01939,
    // From the National Trails listing.
    address: "Porthcothan Bay, PL28 8LP",
    phone: "01841 520440",
    url: "https://www.nationaltrail.co.uk/en_GB/accommodation/penlan-2/",
    notes: "B&B in Porthcothan, 150 m from the coast path. Part of the house has its own entrance. Organic local produce at breakfast when available. The pub the listing suggests for evening meals, the Tredrea Inn, has been closed since October 2021 (CAMRA). Ring to check it's still taking guests",
    // National Trails listing only; no owner website, and a Facebook page.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The National Trails listing says dogs welcome",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trevean-st-merryn",
    name: "Trevean Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 220536427. The PL28 8PR postcode centroid is 200 m
    // north-west.
    lat: 50.51217, lon: -4.99635,
    address: "St Merryn, Padstow, PL28 8PR",
    phone: "01841 520772",
    email: "trevean.info@gmail.com",
    url: "https://www.treveancaravanandcamping.net/touring-camping/",
    notes: "Small family-run park on a working organic farm a mile from St Merryn, on the lane to Porthcothan; a footpath runs beside it. 31 level grass pitches off hardcore tracks, all within 200 m of the toilet block: 7 basic, 12 standard and 12 deluxe, the last two with 10 A hookup. Free hot showers, family wet room, laundry, dishwashing, wetsuit and dog wash, drive-in waste water point, Elsan disposal, EV charger, free wifi. Shop from Whitsun to September with bread and papers; five-acre field for dog walking and games. Arrivals 2–5pm, otherwise by arrangement; out by 11am. Deposit £10 a night, balance 7 days before arrival",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night",
      season: { from: "04-01", to: "11-01" },
      price_per_night: 20,
      price_note: "basic pitch with one unit, car and two people, off-peak; £25 peak (22–30 May, July–August); standard with hookup £22.50 or £30; deluxe £25 or £35; extra adult £7",
      hookup: true,
    },
  },
  {
    slug: "atlantic-view-porthcothan",
    name: "Atlantic View Camping",
    kind: "stay",
    // Centre of OSM way 859777704, an unnamed camp site; park4night's pin is
    // inside it, 185 m south-east.
    lat: 50.50342, lon: -5.02804,
    // From the park4night listing.
    address: "Off the B3276 between Porthcothan and Mawgan Porth",
    url: "https://park4night.com/en/place/286228",
    notes: "Two farm fields off the B3276 south of Porthcothan, reached past some houses; sea views over Porthcothan from the far field, which has a footpath to the beach and coast path, about 5–10 minutes. No booking or reception: park round the edge of either field, 6 m from neighbours, and the owners come round in the evening for cash or bank transfer; no cards. Showers 20p for hot water, drinking water, grey and chemical waste disposal. Reviewers call the toilets and showers dated but clean enough. Dark skies",
    // park4night listing and reviews; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night lists pets allowed; an August 2025 reviewer paid nothing extra for dogs",
      // park4night gives 1 April–31 October (2023); reviewers stayed in April
      // and October.
      season: null,
      price_per_night: 25,
      price_note: "per van, from a July 2026 review; £20–24 in 2024–25 reviews, £15 for one person in 2025",
      hookup: false,
    },
  },
  {
    slug: "macdonalds-farm",
    name: "Macdonald's Farm",
    kind: "stay",
    // Centre of OSM way 343041548. The PL28 8LT postcode centroid is 200 m north.
    lat: 50.49993, lon: -5.01715,
    address: "Porthcothan Bay, Padstow, PL28 8LT",
    phone: "01841 540829",
    email: "info@macdonaldsfarm.co.uk",
    url: "https://www.macdonaldsfarm.co.uk/stay/touring-motorhomes/",
    notes: "Family-run holiday park and petting farm inland of Porthcothan, with a café, bar and play area open to day visitors; the owner pitches it at coast path walkers. Touring pitches for vans, caravans and tents, and electric hardstanding grass pitches in winter. Renovated free showers, laundrette, dog and surfboard wash, freezer, phone charging, grey and Elsan disposal, shop, dog exercise area; wifi in the farm garden only. Breakfast daily 8–11am; evening food Tuesday–Saturday 4.30–8.30pm, bar until 9.30pm; in winter the café and bar open Friday–Sunday. Pitches from 1pm, out by 10am; quiet 10pm–7am. Bus stop at the entrance. Three sea-view B&B rooms too, from £130 for two with breakfast, but no dogs in them",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2 a night, £2.50 mid season, £3 high; on a lead in the camping field and farm garden; not left outside overnight. Welcome in the café. Not in the B&B rooms",
      // 2026 runs to 21 December; the 2027 tariff opens on 1 February (the
      // winter page says 2 February) and closes 19 December.
      season: { from: "02-01", to: "12-21" },
      price_per_night: 22,
      price_note: "electric small pitch for a VW-size van or small tent, two people, low season 2026; £30 mid, £34 high (1–5 May, 22 May–1 June, 17 July–31 August). Non-electric large pitch £25, £35, £40; electric large £33 in winter and low season, £44, £51. Extra adult £7–9",
      hookup: true,
    },
  },
  {
    slug: "bedruthan-steps-campsite",
    name: "Bedruthan Steps Campsite",
    kind: "stay",
    // Centre of OSM way 220527972, an unnamed camp site in the field north of
    // the National Trust's Carnewas turning, where the owner puts its entrance.
    // The owner gives no postcode.
    lat: 50.48482, lon: -5.03043,
    address: "B3276 between Mawgan Porth and Porthcothan, north of the Carnewas turning",
    phone: "07877 240015",
    url: "https://www.bedruthansteps.com/camping",
    notes: "Rustic off-grid clifftop field above Bedruthan Steps, the path running just below; Mawgan Porth 20 minutes' walk. 14-acre grass field with sea views; parts slope, so bring chocks; a flat area behind the tipis for large vans and motorhomes, and a flat overflow field across the road at busy times. No pitches allocated, first come first served even when booked. Flushing toilets, free hot showers, washing-up, drinking water, chemical disposal; no electricity or charging, generators not allowed. Shop, clifftop bar Thursday–Sunday, evening food trucks, morning crêpes and coffee, saunas, live music. Check-in 9am–9pm, ring ahead if later; staffed 24 hours from 26 June. Charcoal BBQs and open fires banned in dry weather; fire pits for hire. 25% deposit online, balance on arrival; cards taken. Walkers may leave a car in its car park for the day. The steps down to Bedruthan beach are closed after a rockfall. Second number, Victoria: 07833 475342",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "No charge; on leads unless under 100% control",
      season: { from: "06-26", to: "09-06" },
      price_per_night: 26,
      price_note: "medium van such as a VW Transporter, two adults; large van or motorhome £28 for two; tent or small van £11 per person; children 6–15 £5, under-5s free",
      hookup: false,
    },
  },
  {
    slug: "carnewas-farm",
    name: "Carnewas Farm Holidays",
    kind: "stay",
    // Centre of OSM way 859865498, an unnamed camp site. The PL27 7UW postcode
    // centroid, which the owner gives, is 80 m north.
    lat: 50.48017, lon: -5.02276,
    address: "Carnewas Farm, Mawgan Porth, PL27 7UW",
    phone: "01637 860314",
    url: "http://www.carnewasfarmholidays.co.uk/touring.php",
    notes: "Farm site near Bedruthan Steps with sea and country views and free coarse fishing for residents. Three areas for vans: the camping field, with toilets, showers and hookup; lakeside pitches, adults only; and a Caravan and Motorhome Club Certified Location in a flat, stone-walled 3/4-acre field with hookup on every pitch and an Elsan point. Hardstanding on request. Pitches from 2pm. Arrive after 8pm only by arrangement. Payment by BACS or cheque; stays of seven nights or fewer paid in full at booking, deposits non-returnable",
    // The terms say pitches must be vacated "by 12am on departure", presumably
    // noon.
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2 each a night; never left unattended or alone on the pitch; under control. On the Certified Location only with the management's permission",
      season: "all-year",
      price_per_night: 25,
      price_note: "touring caravan or motorhome with 10 A hookup and two adults; extra adult £4, children 5–15 £2. Camping field £10 per adult, hookup £10",
      hookup: true,
    },
  },
  {
    slug: "bedruthan-hotel",
    name: "Bedruthan Hotel & Spa",
    kind: "stay",
    // Centre of OSM way 197585738, "Bedruthen Steps Hotel". The TR8 4BU postcode
    // centroid is 10 m south.
    lat: 50.46958, lon: -5.02879,
    address: "Mawgan Porth, TR8 4BU",
    phone: "01637 861200",
    url: "https://www.bedruthan.com/dog-friendly",
    notes: "Family hotel above Mawgan Porth, open since 1959; the beach a short walk. Sea-view doubles, rooms with their own terraces, and family suites with separate children's rooms; no air conditioning. Wild Café, cocktail bar, pools and spa. Sister hotel to Scarlet, just down the hill",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Small to medium dogs, in various dog-friendly rooms but not the Cosy Doubles; limited, so contact reservations before booking. £25 a night. On leads round the hotel; welcome in the cocktail bar, Ballroom and Wild Café, not the pools or play areas",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "scarlet-hotel",
    name: "Scarlet Hotel",
    kind: "stay",
    // OSM node 4023468653. The TR8 4DQ postcode centroid is 110 m west.
    lat: 50.46846, lon: -5.02892,
    address: "Tredragon Road, Mawgan Porth, TR8 4DQ",
    phone: "01637 861800",
    url: "https://www.scarlethotel.co.uk/dog-friendly",
    notes: "Adults-only eco hotel on the cliff at Mawgan Porth, over 18s in every space; the path runs right by. Sea-view restaurant and bar, booking advised; spa. Check-in from 4pm, out by 11am. Free but limited parking, with valet help. Sister hotel to Bedruthan, which takes all ages",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Small to medium dogs, up to two, in a limited number of dog-friendly rooms with enclosed outdoor areas; contact reservations before booking. £25 a night. Kept off beds and furniture; on leads round the hotel. Welcome in the Reception and Retreat lounges, the bar and outdoor terrace; breakfast at a booth in the bar",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "merrymoor-inn",
    name: "The Merrymoor Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 3281895650, "Merrymoor Inn". The TR8 4BA postcode centroid is
    // 40 m north-east.
    lat: 50.46452, lon: -5.03198,
    address: "Mawgan Porth, TR8 4BA",
    phone: "01637 860258",
    url: "https://www.merrymoorinn.com/rooms-tariffs-offers/",
    notes: "Family-run inn beside the beach at Mawgan Porth, over 60 years. Seven en-suite rooms, most with views of the beach and cliffs. Bar and beachside beer garden; book evening tables before arrival. Full breakfast 8.30–9.30am included, early for flights by request; Newquay airport five minutes' drive. Rooms from 3.30pm, out by 10.30am. Two nights minimum in high season, shorter where availability allows. Non-refundable deposit of one night; full payment if cancelled within 21 days. Ample free parking. 20% off two nights or more October–March",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "One per room, £5 a night; take the dog with you when you go out",
      season: null,
      price_per_night: 125,
      price_note: "non-sea-view double or twin with breakfast, from; sea-view double £130, large sea-view double with bath £150, single £65; £20 off a double for one",
    },
  },
  {
    slug: "trevarrian-holiday-park",
    name: "Trevarrian Holiday Park",
    kind: "stay",
    // Centre of OSM way 308319044. The TR8 4AQ postcode centroid is 230 m
    // north-west.
    lat: 50.45434, lon: -5.02696,
    address: "Mawgan Porth, Newquay, TR8 4AQ",
    phone: "01637 860381",
    email: "holiday@trevarrian.co.uk",
    url: "https://www.trevarrianholidaypark.co.uk/tariff.html",
    notes: "Family-run park at Trevarrian, between Mawgan Porth and Watergate Bay: four fields of 10 × 8 m pitches, electric (16 A, blue plug; bring a 20 m cable) and non-electric, plus pods and a static. Two toilet and shower blocks with free showers, laundry, dishwashing and chemical disposal; shop with gas, bread and pasties; site-wide wifi. Indoor pool, four-lane bowling (charged), soft play, arcade, tennis. Lounge bar with live music and bingo in peak weeks; diner, eat in or takeaway, daily from Whitsun to the second week of September. Families and couples only; no fire pits. Pitches from noon, out by 11am. £40 a week non-refundable deposit plus £2 booking fee; balance on arrival. Bus stop across the road",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night, £3 in peak weeks; on a lead at all times, exercised on the dog walk only. Welcome in the leisure complex except the pool, says the FAQ; the facilities page says except the bar",
      // The 2026 tariff runs 1 March to 2 November; the FAQ says Easter or
      // 1 April, whichever is first, to the end of October.
      season: { from: "03-01", to: "11-02" },
      price_per_night: 28,
      price_note: "pitch with hookup and two people, low season; £34 for the late May bank holiday week, £38 18 July–31 August. Extra adult £9–14. 20% off seven nights 1 March–17 July and 1 September–2 November",
      hookup: true,
    },
  },
  {
    slug: "view-at-watergate-bay",
    name: "The View at Watergate Bay",
    kind: "stay",
    // Centre of OSM way 308125025. The TR8 4AE postcode centroid, which the
    // owner gives, is 500 m south-east.
    lat: 50.44987, lon: -5.03379,
    address: "Bostaran, Tregurrian, Newquay, TR8 4AE",
    phone: "01637 861160",
    url: "https://watergatebaycamping.co.uk/pricing-2026/",
    notes: "Smaller campsite with Atlantic views at Tregurrian, half a mile from Watergate Bay; formerly the outer park of Watergate Bay Touring Park, whose pool, bar, café, play areas and dog exercise field its guests may use, 200–300 yards along the road. Standard, large, hardstanding and fully serviced pitches with 16 A hookup; small non-electric camping pitches. Heated toilet and shower block, laundrette, indoor washing-up, Elsan and waste disposal, wetsuit and dog wash, wifi, phone charging. Shop and off-licence with bake-to-order bread and pasties; Sunshine at The View café and gin bar, dog friendly and open to the public, daily in peak times. One vehicle per pitch, extra £4.50 if space allows; ANPR barrier, so give the registration. Check-in from 1pm, out by 11am. Electric pitches Friday–Sunday arrivals and departures only in the summer holidays; three nights minimum over the spring and August bank holidays. Families and couples; quiet 10pm–7am. Raised BBQs, charcoal only; no fire pits or wood. £50 deposit per pitch per week; no booking fee",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £4.25 each a night; half price for stays of seven nights or more outside the spring bank holiday and summer holidays. On a lead at all times and kept off other pitches. Welcome in the bar, café, reception and shop on both sites",
      season: { from: "03-27", to: "10-01" },
      price_per_night: 30,
      price_note: "standard hookup pitch £10 plus £10 per adult, low season; per adult £11.10–15.45 in mid season, £15.20 in the spring bank holiday week, £17.65 24 July–31 August. Large hookup pitch £13.65, hardstanding or fully serviced £15.20. 15% off seven nights or more outside peaks, 10% for over-65s, asked for when booking",
      hookup: true,
    },
  },
  {
    slug: "watergate-bay-touring-park",
    name: "Watergate Bay Touring Park",
    kind: "stay",
    // Centre of OSM way 307927004. The TR8 4AD postcode centroid, which the
    // owner gives, is 510 m south-west.
    lat: 50.44999, lon: -5.02742,
    address: "Tregurrian, Newquay, TR8 4AD",
    phone: "01637 860387",
    email: "email@watergatebaytouringpark.co.uk",
    url: "https://www.watergatebaytouringpark.co.uk/touring-pitches",
    notes: "Family-run park at Tregurrian since 1975, half a mile from Watergate Bay beach; sister site of The View. Grass and gravel hardstanding pitches, non-electric or with 10 or 16 A hookup, up to premium pitches with water, drainage and a pergola; electricity pay-as-you-go from 2026. Two heated shower blocks, family bathroom, laundrette. Indoor pool, tennis court, skate park, games room, dog exercise area; Market Kitchen shop, café and restaurant; Cribbar bar with entertainment; EV charging; paid wifi. Not every facility is open all season. ANPR barrier. Pitches from noon, out by 11am. Electric pitches arrive and depart Friday, Saturday or Sunday in the main holiday weeks; three nights minimum at bank holidays, seven over Boardmasters. Families and couples only. £50 a week deposit; balance two weeks before arrival; no refunds for leaving early. Quiet after 11pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, pre-booked and charged; on a lead at all times, with an exercise area. Never left unattended, in cars or outside units overnight. Some breeds refused",
      // No touring season or tariff on the owner's site. The View's 2026 tariff
      // gives this park's pool as open 2 April–13 September.
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "watergate-bay-car-park",
    name: "Watergate Bay car park",
    kind: "stay",
    // Centre of OSM way 308478412, "Watergate Bay, Public Car Park". The
    // council's location map is centred 90 m north-west of it; the TR8 4AD
    // postcode centroid is 530 m north-east.
    lat: 50.44338, lon: -5.03776,
    address: "Watergate Bay, Newquay, TR8 4AD",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/watergate-bay-newquay-tr8-4ad/",
    // Rules from the car park's page and Cornwall Council's motorhome parking
    // page; each Newquay car park's own page gives its ban. park4night reviewers
    // report no overnight parking at Mawgan Porth's beach car park, which isn't
    // the council's.
    notes: "Cornwall Council long-stay car park behind Watergate Bay beach: about 400 spaces, tarmac, stone and grass, open 24 hours, no height limit. The only council car park in the Newquay area where self-contained motorhomes with their own toilet may stay overnight; no motorhome bays or facilities. Buy a motorhome overnight ticket for each night: ordinary tickets don't count. Two consecutive nights at most. Every council car park in Newquay town (Trenance, Tregunnel, Mount Wise, Harbour, Belmont, Towan Headland) bans motorhomes and campers 11pm–8am, and Porth Beach bans sleeping. Pay and display, JustPark location 8430, or BuzzPay",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "watergate-bay-hotel",
    name: "Watergate Bay Hotel",
    kind: "stay",
    // Centre of OSM way 308479552. The TR8 4AA postcode centroid is 20 m
    // south-west.
    lat: 50.44495, lon: -5.04105,
    address: "On the Beach, Watergate Bay, TR8 4AA",
    phone: "01637 860543",
    email: "life@watergatebay.co.uk",
    url: "https://watergatebay.co.uk/whos-coming/dogs/",
    notes: "Hotel on the beach at Watergate Bay, the path at the door. Rooms, suites, beach lofts, family suites and Village apartments. Zacry's restaurant, The Beach Hut on the sand, The Living Space; Swim Club with 25 m pool, hot tub and sauna. Rooms from 3pm, out by 11am. Free parking for residents, including the public beach car park; give the registration at the front desk. Ten slow EV chargers for guests",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms throughout the hotel, up to two dogs per room: £15 a night for the first, £5 for a second. Welcome in The Living Space and The Beach Hut, not Zacry's; the hotel suggests a local dog sitter. The beach is dog friendly all year",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "porth-beach-holiday-park",
    name: "Porth Beach Holiday Park",
    kind: "stay",
    // Centre of OSM way 118625819. The TR7 3NH postcode centroid, which the
    // owner gives, is 170 m west.
    lat: 50.42616, lon: -5.05109,
    address: "Newquay, TR7 3NH",
    phone: "01637 876531",
    email: "info@porthbeach.co.uk",
    url: "https://porthbeach.co.uk/touring-camping-newquay/",
    notes: "Level touring park in a sheltered bay across the road from Porth beach, a mile from Newquay. Grass or hardstanding pitches graded by the width they allow, many with 16 A hookup; premium riverbank pitches with water, drainage and TV point. Award-winning blocks with free showers; launderette. Charged per pitch, not per person, up to eight people. Pitches from noon, out by 10am; no pitching after dark: late arrivals wait in the car park until reception opens at 9am. No driving on site midnight–7am. £50 a week deposit, balance 40 days before arrival; booking fee £4 online, £12 by phone; choosing a pitch £12",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Touring side only, £5 per dog a night; breed asked at booking and some refused. On a lead at all times, even on the pitch; not exercised in the park or car parks; not left alone",
      // The tariff is headed 2025 but its first band starts 27 March, a Friday
      // in 2026.
      season: { from: "03-27", to: "10-30" },
      price_per_night: 44,
      price_note: "green electric pitch (4 m wide: small motorhome without awning, or VW camper with one), 27 March–22 May; red (2.5 m, VW camper without awning) £41, blue (6 m) £50, premium £52. Green £59 18 July–4 September. Hardstanding £3, extra car £1",
      hookup: true,
    },
  },
  {
    slug: "hendra-holiday-park",
    name: "Hendra Holiday Park",
    kind: "stay",
    // Centre of OSM way 118626389. The TR8 4NY postcode centroid is 230 m
    // north-east.
    lat: 50.39957, lon: -5.05096,
    address: "Newquay, TR8 4NY",
    phone: "01637 875778",
    email: "bookings@hendra-holidays.com",
    url: "https://www.hendra-holidays.com/camping-in-cornwall-touring/",
    notes: "Large holiday park on the inland edge of Newquay: 80 acres, touring and camping pitches from grass electric to hardstanding and fully serviced, plus holiday caravans. Pitch and Pause, a quieter adults' area with its own facilities block; adult-only pitches off season. Oasis indoor fun pool, outdoor pool end of May–August, Terrace Bar and Restaurant, pizza, fish and chips, nightly entertainment in peak times, shop, launderette. Bus to Newquay town centre from the main entrance. Reception 8am–8pm on Friday, Saturday and Monday check-in days, 8am–6pm otherwise",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On pitches set aside for dog owners, near a dog walking area, charged by season; say so when booking. Not on Gold or Silver Leaf, Super or Grand pitches. On leads at all times; some breeds refused",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "headland-hotel-newquay",
    name: "The Headland Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 111683659, "Headland Hotel". The TR7 1EW postcode
    // centroid is 20 m south-west.
    lat: 50.42053, lon: -5.09702,
    address: "Headland Road, Newquay, TR7 1EW",
    phone: "01637 872211",
    email: "reception@headlandhotel.co.uk",
    url: "https://www.headlandhotel.co.uk/about-us/dog-friendly/",
    notes: "Five-star Victorian hotel on Towan Headland above Fistral Beach, open since 1900, with the coast path outside. Rooms and suites, some with balconies, and self-catering Headland Cottages. RenMor restaurant, The Ballroom lounge, Ugly Butterfly by Adam Handling; AquaClub pools and spa. Rooms from 3pm, out by 11am. Free parking for guests",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Up to two per room, £33 each a night; confirm them when booking. The dog page says all hotel rooms, the FAQ a selection, so ask. On a lead inside; welcome in The Ballroom and parts of RenMor, not the AquaClub or spa. May be left in the room unless persistently barking",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "esplanade-hotel-newquay",
    name: "The Esplanade Hotel",
    kind: "stay",
    // Centre of OSM way 118286759. The TR7 1PS postcode centroid is 10 m away.
    lat: 50.41196, lon: -5.10349,
    address: "Esplanade, Newquay, TR7 1PS",
    phone: "01637 873333",
    email: "reservations@esplanadehotelnewquay.co.uk",
    url: "https://esplanadehotelnewquay.co.uk/sleep/dogs-welcome/",
    notes: "Four-star hotel overlooking Fistral Beach: sea-view and balcony rooms, family rooms, restaurant, surf school on site, family entertainment in the school holidays. Self-service dog wash 7am–10pm, £8, contactless only",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In a selection of dog-friendly rooms, many with outside access; tell the hotel in advance. £15 per dog a night; dog bed and bowl provided. Not in the restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "lewinnick-lodge",
    name: "Lewinnick Lodge",
    kind: "stay",
    food: { type: "restaurant" },
    // OSM node 1931965322. The TR7 1QD postcode centroid, which the owner
    // gives, is 160 m east.
    lat: 50.41190, lon: -5.11909,
    address: "Newquay, TR7 1QD",
    phone: "01637 878117",
    email: "reception@lewinnicklodge.co.uk",
    url: "https://lewinnicklodge.co.uk/stay/dog-friendly-stays/",
    notes: "Restaurant with rooms on Pentire Headland, west of Fistral, with sea-view bedrooms. EV destination charging for guests",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In a selection of dog-friendly rooms, up to two dogs, £25 each a night; check one is free before booking. Welcome in the bar and on the terrace, where tables can't be reserved",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "quarryfield-crantock",
    name: "Quarryfield Holiday Park",
    kind: "stay",
    // OSM node 1812853582, "Quarryfield Campsite". The TR8 5RJ postcode centroid,
    // which the owner gives, is 145 m north-east. OSM's way 118616408 around it
    // is tagged "Quarryfields/Crantock Beach" and Parkdean, a different park.
    lat: 50.40383, lon: -5.10686,
    address: "Crantock, TR8 5RJ",
    phone: "01637 830338",
    email: "info@quarryfield.co.uk",
    url: "https://www.quarryfield.co.uk/camping-and-touring/",
    notes: "Family-run park on the Crantock bank of the Gannel, above Crantock beach; Crantock village 10–15 minutes' walk. Camping and touring pitches and static caravans; the site gives 150 pitches with 150 hookups on one page and close to 200 pitches with 50 hookups on another. Outdoor pool, play area, arcade with pool table, an inn on site, new toilet and shower block with laundry. Ring or email to check availability, then post the booking form or bring it on arrival. Pitches from noon, out by 10am; no refunds for leaving early. Quiet after 10.30pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On pet-friendly pitches, £3 a night; on a lead at all times, under strict control",
      // The camping tariff runs 28 March to 31 October; its dates fall on
      // Saturdays in 2026.
      season: { from: "03-28", to: "10-31" },
      price_per_night: 23,
      price_note: "two adults at £11.50 each, 28 March–23 May, 30 May–18 July and 29 August–31 October; £13 each 23–30 May and 18 July–29 August. Hookup £9; children 3–15 £7–8",
      hookup: true,
    },
  },
  {
    slug: "trevella-park",
    name: "Trevella Holiday Park",
    kind: "stay",
    // Centre of OSM way 118558857, "Trevella Caravan Park". The TR8 5EW postcode
    // centroid, which the owner gives, is 370 m west.
    lat: 50.39766, lon: -5.09166,
    address: "Newquay, TR8 5EW",
    phone: "01637 808465",
    url: "https://www.parkholidays.com/holidays/parks/cornwall/trevella",
    notes: "Park Holidays park near Crantock: caravans, lodges and pods, with touring and camping pitches. Micro pub, shop, food trucks in peak season; outdoor pool 24 April–6 September, booked on arrival; fishing lakes, crazy golf, arcade, play area; dog walking area and dog and wetsuit wash; launderette, EV chargers. Cashless: cards only. The owner's site gives no touring tariff, season or pitch detail",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      // Park Holidays' own camping page, for all its touring parks; nothing
      // Trevella-specific beyond the dog facilities.
      dogs_note: "Park Holidays says pets are welcome on camping pitches for an extra fee and dogs at all its parks; on a lead at all times. Fee not given for touring",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "crantock-plains",
    name: "Crantock Plains Touring Park",
    kind: "stay",
    // Centre of OSM way 118571237. The TR8 5PH postcode centroid, which the
    // owner gives, is 70 m south-west.
    lat: 50.38977, lon: -5.08800,
    address: "Crantock, Newquay, TR8 5PH",
    phone: "01637 830955",
    email: "info@crantock-plains.co.uk",
    url: "https://crantock-plains.co.uk/prices.htm",
    // The owner's site is old: its tariff and booking form are headed 2024.
    notes: "Owner-supervised touring park off the A3075, about 2 km from Crantock village, pitched at campers who want peace and space. Six acres in two sheltered fields, flat pitches marked round the edges; hookups. Tiled toilet block with showers, washing-up sink, small laundry, Elsan point; phone charging, wifi, small play area. Families and couples. Book with the printed form, £50 deposit plus £2 booking fee; noon to noon. Out of season ring 01637 831273",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 a night; on leads, under strict supervision",
      // The 2024 tariff gives April–September.
      season: { from: "04-01", to: "09-30" },
      price_per_night: 20,
      price_note: "two adults at £10 each, 2024 tariff; hookup £7, single occupancy £14, children 2–15 £7; two adults minimum charge in July and August",
      hookup: true,
    },
  },
  {
    slug: "treago-farm",
    name: "Treago Farm",
    kind: "stay",
    // Centre of OSM way 118559478. The TR8 5QS postcode centroid, which the
    // owner gives, is 55 m south.
    lat: 50.39910, lon: -5.12212,
    address: "Crantock, Newquay, TR8 5QS",
    phone: "01637 830277",
    url: "http://www.treagofarm.co.uk/campsitetariff.html",
    notes: "Farm campsite at the West Pentire end of Crantock, surrounded by National Trust land and Cubert Common; footpaths across the common and dunes to Crantock beach and Porth Joke. 81 grass pitches, electric hookups. Free hot showers, launderette, freezer, games room. Shop and Rafters bar, adults only, mid May to early September, the bar 8–11pm. Book with the posted form and a £50 deposit; site fees paid on arrival, no refunds for arriving late or leaving early. Friday or Saturday changeovers in high season. No EV charging from pitches, no open fires, BBQs off the grass; no groups of young men or women unless arranged",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night; on a short lead on site at all times, and exercised off site",
      // Self-catering runs late March to the end of October; no camping season
      // given.
      season: null,
      price_per_night: 24,
      price_note: "two adults at £12 each, before 22 May, 30 May–4 July and from 4 September; £14 each at the late May bank holiday and 3 July–5 September. Electric pitch £12; minimum pitch fee £28, or £40 with electric, 10 July–29 August. No charge for the van",
      hookup: true,
    },
  },
  {
    slug: "porth-joke-campsite",
    name: "Porth Joke Campsite",
    kind: "stay",
    // Centre of OSM way 118628840, "Porth Joke Camping Site". The owner gives no
    // postcode for the campsite.
    lat: 50.39766, lon: -5.12964,
    address: "Treago Mill, Crantock",
    phone: "01637 831207",
    email: "treagomill@gmail.com",
    url: "https://crantockholiday.co.uk/campsite.html",
    notes: "Quiet family field beside Treago Mill, a few minutes along a level sandy path to Porth Joke beach, reached down a sandy track past Treago Farm. Camper vans welcome up to 6.5 m; no caravans or large motorhomes. Pitches about 10 m wide. Stone toilet block, unmetered hot showers, washing-up room with hot water, wifi, device charging; daily ice packs against a £20 returnable deposit. Fires in fire pits off the grass; logs sold at the house, no wood gathering. Take rubbish home, or £10 per 90 l bag. No recorded music aloud, quiet after 11pm. Book online",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: false,
      season: null,
      price_per_night: null,
      // No hookup mentioned by the owner; OSM tags it power_supply=no.
      hookup: null,
    },
  },
  {
    slug: "trevornick",
    name: "Trevornick Holiday Park",
    kind: "stay",
    // Centre of OSM way 593484102. The TR8 5PW postcode centroid, which the
    // owner gives, is 210 m west.
    lat: 50.38560, lon: -5.12683,
    address: "Holywell Bay, TR8 5PW",
    phone: "01637 830531",
    email: "info@trevornick.co.uk",
    url: "https://trevornick.co.uk/campsite-in-cornwall-touring/cornwall-touring-park/",
    notes: "Large family holiday park above Holywell Bay, beside Cubert Common, with Holywell Bay Golf's three courses. Standard electric grass pitches, premium grass with water and TV point, premium plus semi-hardstanding; ready tents, caravans, lodges, cottages. Farm Shop, takeaway, Woodys, Bear Den, arcade, fishing; Farm Club and The Shack in peak weeks, pool from mid May, Lounge Bar in the summer holidays. Pitches from noon, out by 10am; late arrivals use the night holding field. Same-day bookings three nights minimum. 20% non-refundable deposit, balance 12 weeks before. No young adults' groups in peak weeks. Charcoal BBQs raised off the ground, no fire pits or open fires. Office 9am–7pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Booked and charged per dog, up to three a pitch, in the dog fields: Hay, Red Corn and Sun in peak season, Pond and Yellow as well at Easter, September and October. On a lead; never left alone. Some breeds refused, XL Bully among them. Two dog walking fields, dog shower; welcome in Woodys, the shop, bars, arcade, reception and part of the pool",
      // 2026 facilities run from 2 April, before Easter, to October half term;
      // the park closes on 1 November.
      season: { from: "04-02", to: "10-31" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "perran-sands",
    name: "Haven Perran Sands",
    kind: "stay",
    // Centre of OSM way 120192524, "Perran Sands Holiday Camp". The TR6 0AQ
    // postcode centroid, which the owner gives, is 150 m west.
    lat: 50.35833, lon: -5.14253,
    address: "Perranporth, TR6 0AQ",
    url: "https://www.haven.com/touring-camping/parks/cornwall/perran-sands",
    notes: "Haven holiday park with direct access to Perran Beach. Basic and electric touring pitches among the caravans and glamping. Indoor pool with flumes; outdoor pool and lazy river from May half term, then selected days to the August bank holiday; Slim Chickens restaurant and takeaway, shop, entertainment. No commercial vehicles, no sleeping in awnings, no pup tents or gazebos",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 per dog a night, up to two per pitch. The beach is dog friendly",
      // Haven's pages carry season dates in their data but not clearly for this
      // park.
      season: null,
      price_per_night: 12,
      price_note: "pitch, from; varies by date and pitch",
      hookup: true,
    },
  },
  {
    slug: "tollgate-farm-perranporth",
    name: "Tollgate Farm Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 481874177. The TR6 0AD postcode centroid, which the
    // owner gives, is 580 m north-west.
    lat: 50.35170, lon: -5.13499,
    address: "Budnick Hill, Perranporth, TR6 0AD",
    phone: "01872 572130",
    email: "tollgatefarm@aol.com",
    url: "https://www.tollgatefarm.co.uk/tariff",
    notes: "Family-run site above Perranporth with views across the dunes to the sea; less than a mile to the town and beach. Generous pitches in enclosed areas, some with coastal views; hard standings, 16 A hookups, fully serviced pitches; five LogPods. Heated showers and family and accessible shower rooms, camper's kitchen, laundry, dishwashing, drive-over waste point, licensed shop, Calor and Camping Gaz, paid wifi. Farm animals, play field. Families and couples only. Three nights or fewer paid in full at booking; 40% deposit for longer. 10% off three nights or more off peak, outside school holidays",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs free",
      season: { from: "03-30", to: "09-30" },
      price_per_night: 28,
      price_note: "campervan or motorhome £10 plus £9 per adult, low season (30 March–22 May, September); £11 plus £11 mid, £14 plus £14 high (5–7 June, 18 July–31 August). Hookup £6, £7.50 high; fully serviced pitch £17.50–21.50 plus adults. Two nights minimum over the Tunes in the Dunes festival",
      hookup: true,
    },
  },
  {
    slug: "perranporth-camping",
    name: "Perranporth Camping & Touring Park",
    kind: "stay",
    // Centre of OSM way 875859185, an unnamed camp site; OSM node 1789141097,
    // "Perranporth Cp & Touring Park", is 50 m south. The TR6 0DB postcode
    // centroid, which the owner gives, is 200 m west.
    lat: 50.34567, lon: -5.14037,
    address: "Budnick, Perranporth, TR6 0DB",
    phone: "01872 572174",
    email: "perranporthcamping@gmail.com",
    url: "https://perranporth-camping.co.uk/prices/",
    notes: "Family-run site in a sheltered, tree-lined valley, the closest to Perranporth: 10 minutes' fairly level walk to the town and beach, with the dunes beside it. Grass pitches about 8 × 5 m, grass electric pitches up to 8 × 8 m, and electric hardstandings with water and drainage; 16 A. Two toilet blocks with coin showers, accessible shower room, laundry, dishwashing, waste disposal point, ice pack freezer, phone charging at the office. Outdoor pool included; The Fern cocktail bar; Sisu breakfast wagon. Arrivals from noon, out by 10.30am; pitches re-let after 6pm unless warned of a late arrival. One to three nights paid in full, non-refundable; £100 deposit a pitch otherwise. Minimum stays on busy weekends. No generators; charcoal and disposable BBQs banned in the dry weather since 17 July 2026",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night; on a lead on site at all times. Dog wash at reception. Welcome in The Fern, not the play area or pool",
      season: { from: "03-28", to: "11-02" },
      price_per_night: 32,
      price_note: "pitch with one vehicle and two people, low season (28 March–30 April, 28 September–2 November); £36 mid, £40 high (22–31 May, 5–7 June, 3 July–31 August). Hookup £8; extra adult £11–15. Autumn deal 21 September–2 November: £28, or £34 with hookup, with the pool closed",
      hookup: true,
    },
  },
  {
    slug: "anchor-barrow",
    name: "Anchor Barrow Campsite",
    kind: "stay",
    // OSM node 8894240417. The TR6 0ED postcode centroid, which the owner gives,
    // is 100 m north-east.
    lat: 50.33590, lon: -5.16883,
    address: "St Georges Hill, Perranporth, TR6 0ED",
    phone: "07949 501235",
    email: "stay@anchorbarrow.com",
    url: "https://www.anchorbarrow.com/touring-camping-perranporth/",
    notes: "Family-run field campsite on a hill south of Perranporth: 16 acres, no sea view, exposed, some pitches less level. 35 electric pitches, 10 × 15 m with 16 A hookup; non-electric pitches anywhere in the two fields. Toilets, showers, launderette, food preparation area with fridges, covered washing-up, charging lockers, paid EV charger (not from the pitch). Shop with meat, milk, bread and eggs; Barrow Bar daily; feast nights with local musicians Tuesday, Thursday, Friday and Saturday. Fire pits and BBQs allowed, raised. Takes groups, by phone. Arrivals noon–8pm, out by 11am; music off by 10pm. Beach 25 minutes by footpath; bus stop at the entrance",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 per dog a night; on leads except in the dog roaming area; not left alone on site",
      season: null,
      price_per_night: 29.5,
      price_note: "non-electric pitch with two people, same all season; electric £39.50. Extra person 13 and over £11.50, 3–12 £6",
      hookup: true,
    },
  },
  {
    slug: "seiners-arms",
    name: "The Seiners Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 5521962388, tagged TR6 0DP. The TR6 0JL postcode centroid, which
    // the owner gives, is 130 m south-east.
    lat: 50.34620, lon: -5.15562,
    address: "Beach Road, Perranporth, TR6 0JL",
    phone: "01872 573118",
    email: "info@seiners.co.uk",
    url: "https://www.seiners.co.uk/dog-friendly/",
    notes: "Pub and B&B on Perranporth beach, the rooms seconds from the sand, most with sea views, all with private bathrooms. Breakfast in The Rocks restaurant. Changes or cancellations two weeks before arrival, or the full stay is charged",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a few ground-floor rooms marked Dog Friendly when booking online; a dog added to any other room will be turned away. Must be fine left alone briefly; not nervous or reactive. Welcome in the bar and main restaurant from 11am, not The Rocks: breakfast on the sea-view terrace or in the room, arranged ahead",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "droskyn-lookout",
    name: "Droskyn Lookout",
    kind: "stay",
    // Centre of OSM way 363717212, old_name "YHA Perranporth". The TR6 0GS
    // postcode centroid, which the owner gives, is 115 m east.
    lat: 50.34609, lon: -5.16165,
    address: "Droskyn Point, Perranporth, TR6 0GS",
    email: "hello@droskynlookout.com",
    url: "https://droskynlookout.com/hostel/",
    notes: "Independent hostel, café and wellness centre in the old YHA building on the cliff at Droskyn Point, on the path. Eight-bed mixed dorms, a four-bed en-suite family room and a private room with a double bed and shared bathroom; linen included, towels to hire. Self-catering kitchen, washing machine, lockers, luggage store. Sauna, ice baths and hot tub, booked separately. Nearest parking Droskyn car park, free 1 November–31 March. Hostelworld gives check-in 4–8pm",
    verified: "2026-09-15",
    stay: {
      type: "hostel",
      dogs: null,
      dogs_note: "Hostelworld lists pets allowed; nothing on the owner's site",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "wheal-leisure-car-park",
    name: "Wheal Leisure car park",
    kind: "stay",
    // Centre of OSM way 239997025, "Wheal Leisure Car Park". The TR6 0EY postcode
    // centroid is 60 m south-east.
    lat: 50.34462, lon: -5.15212,
    address: "Perranporth, TR6 0EY",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/wheal-leisure-perranporth-tr6-0ey/",
    // Rules from the car park's page and Cornwall Council's motorhome parking
    // page. Perranporth Beach car park's ban is from park4night reviews
    // (place 293402), 2022–2025.
    notes: "Cornwall Council long-stay car park in the middle of Perranporth: 145 spaces, tarmac, open 24 hours, no height limit but a 3050 kg weight limit. The council's only car park in Perranporth, and one of eleven in Cornwall, where self-contained motorhomes with their own toilet may stay overnight. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. No motorhome bays; pay for every bay you cover. park4night reviewers report signs banning overnight sleeping 8pm–9am, with a £100 fine, and 2.13 m height barriers at Perranporth Beach car park. Pay and display, JustPark location 8340, or BuzzPay",
    verified: "2026-09-15",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "budnick-hill-londis",
    name: "Londis, Budnick Hill",
    kind: "stay",
    // Centre of OSM way 1191771540, a paid car park beside the Londis (node
    // 12536863836) and Texaco filling station on the B3285. park4night's pin is
    // on the shop, 30 m east; the TR6 0BX postcode centroid is 75 m north.
    lat: 50.34628, lon: -5.14882,
    address: "B3285, Perranporth, TR6 0BX",
    url: "https://park4night.com/en/place/102391",
    notes: "Parking behind the filling station and Londis on the road into Perranporth: about 12 van bays split by metal fencing, grass and hardstanding, easy for vans up to about 8 m; overflow in the bays outside or by the jet wash. Pay in the shop. No facilities. Five minutes to the Co-op, about 10 to the beach down a sandy lane; buses to Newquay outside. Reviewers call it quiet at night. Fills at busy times: ring ahead",
    // park4night listing and reviews, rated 4.1 from 72; the most recent in
    // August 2026. Several reviewers found the charges confusing.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 10,
      price_note: "per van overnight, from 7pm until 10.30–11am, from 2026 reviews; a further £10 by day",
    },
  },
  {
    slug: "perranround-farm",
    name: "Perranround Farm",
    kind: "stay",
    // Centre of OSM way 1215187046, an unnamed farmyard at Rosehill; park4night's
    // pin is 30 m west, and the TR4 9JX postcode centroid 95 m south-west.
    // Reviewers say to turn into the farmyard, not the next entrance.
    lat: 50.34606, lon: -5.11838,
    address: "Rosehill, Goonhavern, TR4 9JX",
    url: "https://park4night.com/en/place/584806",
    notes: "Working dairy farm on the B3285 between Perranporth and Goonhavern: a front field open most of the year and a big back field in summer, park where you like. One toilet, drinking water, Elsan and waste water disposal, bin. Ring on arrival and the farmer comes out to take cash. Some road noise in the front field. Bus stop at the gate for Newquay and Truro; pub and shop nearby",
    // park4night listing and reviews, rated 5 from 12; the most recent in
    // August 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      // park4night: open April–October.
      season: null,
      price_per_night: 10,
      price_note: "per van for 24 hours, cash, from 2025 reviews; the listing says £15",
      hookup: false,
    },
  },
  {
    slug: "ocean-meadow-cl",
    name: "Ocean Meadow",
    kind: "stay",
    // Postcode centroid (TR6 0BB), which the owner gives; OSM has no campsite.
    // The Club's GPS is 85 m south.
    lat: 50.33498, lon: -5.15377,
    address: "The Old Stables, Liskey Hill, Perranporth, TR6 0BB",
    phone: "01872 571888",
    email: "yvonne@ocean-meadow.co.uk",
    url: "https://ocean-meadow.co.uk/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: five level hardstanding pitches, each with 16 A hookup, water and its own bin, in a field above Perranporth with country and coastal views over the beach. Chemical disposal point, recycling, rotary clothes line; no toilets or showers listed. Some road noise. Arrivals from noon, by 8pm; out by 11am. Perranporth 15–20 minutes' walk down Liskey Hill, a steep climb back; bus stops nearby for Newquay and Truro. Book with the owner's form. Mobile 07980 241767",
    verified: "2026-09-15",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Well-behaved dogs, under control at all times; included in the pitch fee. Field next to the site for walking dogs off the lead",
      season: { from: "05-16", to: "09-30" },
      price_per_night: 30,
      price_note: "per pitch, from; includes hookup, awning, children, pets and cars",
      hookup: true,
    },
  },
  {
    slug: "polgarth-farm-cl",
    name: "Polgarth Farm",
    kind: "stay",
    // Postcode centroid (TR5 0XX), from the Club's listing; OSM has no campsite.
    // The Club's GPS is 105 m south.
    lat: 50.32515, lon: -5.17522,
    // The Caravan and Motorhome Club's listing.
    address: "Trevellas, St Agnes, TR5 0XX",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/perranporth/polgarth-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a 0.75-acre grass site on a working farm at Trevellas, some pitches sloping. 16 A hookup, battery charging, information room, recycling, dog walk from the site. Pub within a mile; buses to Perranporth and St Agnes within a mile. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs, with a dog walk from the site",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "cross-coombe-farm",
    name: "Cross Coombe Farm",
    kind: "stay",
    // Centre of OSM way 878179683, "Cross Coombe Farm Campsite". The TR5 0XP
    // postcode centroid is 180 m west.
    lat: 50.32314, lon: -5.18721,
    // The Camping and Caravanning Club's listing names Cross Coombe, St Agnes;
    // OSM gives no address.
    address: "Cross Coombe, Trevellas, St Agnes",
    // Phone from OSM's tags; the Club shows contact details to members only.
    phone: "01872 552379",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/st-agnes/crosscoombefarm/",
    notes: "Camping and Caravanning Club Certificated Site, members only: five vans or caravans and ten tents. Family-run, on the edge of the Jericho valley, the coast path and Trevellas cove minutes away; St Agnes 25 minutes' walk. Nine terraced, level pitches over 2.5 acres, grass or hardstanding, each with water and hookup; views over the valley to St Agnes. Two shower rooms, toilets, washing-up area, ice pack freezer, chemical waste point. Donkeys, alpacas and Shetland ponies in the paddocks. Booking advised in summer",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing says pets welcome, with a designated dog walk",
      // The Club says the pitches are accessible all year but gives no season.
      season: null,
      price_per_night: 25,
      price_note: "members' price per unit, up to two adults and two children, £25–30",
      hookup: true,
    },
  },
  {
    slug: "blue-hills-touring-park",
    name: "Blue Hills Touring Park",
    kind: "stay",
    // Centre of OSM way 169260163, "Blue Hills Touring Site". The TR5 0XP
    // postcode centroid, which the owner gives, is 130 m south. OSM's way
    // 1409821062, "Spitfire Park", is next to it and probably its Spitfire field.
    lat: 50.32398, lon: -5.18928,
    address: "Crosscoombe, Trevellas, St Agnes, TR5 0XP",
    phone: "01872 552999",
    email: "camping@blue-hills.co.uk",
    url: "https://bluehillscamping.co.uk/trevellas-camping/",
    notes: "Small, quiet touring park at Trevellas, beside the coast path, with a beach dog friendly all year down the lane. Spitfire, the main field, has 20 grass pitches round the edge, most with hookup and a few hardstandings; Harleys, fully serviced grass and hardstanding pitches with water, drainage and hookup, through a gateway 3 m wide at most; Avenger, tents only. Free hot showers, accessible shower room, covered washing-up, laundry. Pitches from 1pm, out by 11am; no arrivals after 7pm or dusk, whichever is first; night gate shut 10.30pm–7am. Pre-booking essential, with minimum stays. No sleeping in cars, or in vans without at least one rear or side opening window. No youth groups, stag or hen parties, or multiple units in July and August. No generators, EV charging, open fires or wood-burning fire pits. 25% deposit; no refunds within 28 days. Bus stop on the B3285 at the snooker hall",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per booking, £2 a night; on short leads and tethered or penned on the pitch; not left alone in units when you leave the park",
      // The home page says Easter to October, the pitches page 1 April to
      // 31 October.
      season: { from: "04-01", to: "10-31" },
      price_per_night: null,
      price_note: "tariff includes two people, one unit, one vehicle and hookup; prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "trevellas-manor-farm",
    name: "Trevellas Manor Farm Campsite",
    kind: "stay",
    // Centre of OSM way 878337149. The TR5 0XP postcode centroid, which the owner
    // gives, is 250 m north-west.
    lat: 50.32147, lon: -5.18689,
    address: "Crosscombe, St Agnes, TR5 0XP",
    phone: "01872 552238",
    email: "contact@tmfcampsite.co.uk",
    url: "https://www.trevellasmanorfarmcampsite.co.uk/tariffs",
    notes: "Family-run campsite, in the same field since 1927, its pitches round the edge of a large open field with sea views; Trevellas Porth 10 minutes' walk, St Agnes 30 minutes along the coast path. Grass and hardstanding pitches, over half with 16 A hookup. Modern block with showers, family and accessible rooms, washing-up, wetsuit wash, laundry, chemical and grey waste disposal. Recreation field and fenced off-lead dog area overlooking the sea. Minimum stays: two nights, three on sea-view pitches, in low season; three and four 17 July–31 August. A hiker pitch with no vehicle takes single nights, £10, by email. Arrivals 2–7pm, out by 11am. Three nights or fewer paid in full at booking; non-refundable. No generators. The owner advises ignoring sat nav and coming via Perranporth and the B3285; not via Wheal Kitty or Blue Hills, and not through St Agnes if large or towing",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, more in low season by arrangement; £2 a night. On a lead on site except in the fenced dog exercise area",
      season: { from: "04-03", to: "09-28" },
      price_per_night: 32,
      price_note: "grass or hardstanding pitch with hookup, two people, one car and one van, low season (3 April–16 July, 1–28 September); £40 high. Without hookup £26, £34; sea-view with hookup £42, £50. Extra person 14 and over £8",
      hookup: true,
    },
  },
  {
    slug: "driftwood-spars",
    name: "The Driftwood Spars",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 692778502. The TR5 0RT postcode centroid, which the owner gives,
    // is 40 m south.
    lat: 50.31822, lon: -5.20247,
    address: "Trevaunance Cove, St Agnes, TR5 0RT",
    phone: "01872 552428",
    url: "https://driftwoodspars.co.uk/bed-and-breakfast/",
    notes: "Brewpub and AA four-star B&B at Trevaunance Cove, on the coast path, in a 1650s building framed with spars from wrecks. Fifteen en-suite rooms, some with sea views: nine in the main building, three in an annex behind the brewery, and three across the road with a small shared garden. Breakfast in the sea-view dining room. Two nights minimum at weekends and three in school holidays; ring to ask. Cancel seven days ahead or pay the first night. Its own beers, all gluten free; restaurant. Car park paid, with £5.50 off for customers spending £10. A Brit Stops host in St Agnes whose description matches the Driftwood takes vans under 20 ft, with advance notice",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£7.50 per dog a night. The owner suggests the rooms across the road, with a shared garden, for dogs",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "st-agnes-hotel",
    name: "St Agnes Hotel",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1240665135, "The St Agnes Hotel". The TR5 0QP postcode centroid,
    // which the owner gives, is 15 m north-east.
    lat: 50.31244, lon: -5.20383,
    address: "11 Churchtown, St Agnes, TR5 0QP",
    phone: "01872 552307",
    url: "https://stagneshotel.co.uk/about-us/",
    notes: "The Aggie: St Austell Brewery pub with rooms in the centre of the village, opposite the church; Trevaunance Cove 10 minutes' walk down Stippy Stappy. En-suite king, twin superking and family rooms, most with views over St Agnes. Breakfast 8–11.30am, included in the rates. Breakfast, lunch and dinner daily; bar menu, terrace with a pizza shack in the warmer months. Free parking. Rooms all year; ring for the best rates",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog friendly, for a small supplement; amount not given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "beacon-country-house",
    name: "Beacon Country House",
    kind: "stay",
    // Postcode centroid (TR5 0NW), which the owner gives; OSM has no feature for
    // it.
    lat: 50.30496, lon: -5.21569,
    address: "Goonvrea Road, St Agnes, TR5 0NW",
    phone: "01872 552318",
    email: "info@beaconhotel.co.uk",
    url: "https://beaconhotel.co.uk/hotel-grounds/accommodation/",
    notes: "Family-run country house B&B in two acres below St Agnes Beacon, with views along the coast to St Ives. Eleven en-suite rooms: premium rooms with sea or country views, standard doubles, two twin or family rooms, one compact budget double; two rooms on the ground floor. Restaurant and bar. Self-catering shepherd huts too. Two 7 kW EV chargers, paid by app",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      // The linked dog policy PDF no longer loads.
      dogs_note: "In a number of the rooms; not in the restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "beacon-drive-lay-by",
    name: "Beacon Drive lay-by",
    kind: "stay",
    // Centre of OSM way 849339438, street-side parking on Beacon Drive;
    // park4night's pin is 10 m north.
    lat: 50.31132, lon: -5.22315,
    address: "Beacon Drive, St Agnes",
    url: "https://park4night.com/en/place/94185",
    // Council rules from the Reppers Coombe car park page. The National Trust
    // car park ban is from park4night reviews of place 87180.
    notes: "Free roadside parking for about eight on the slope of St Agnes Beacon, with sea views and sunsets; minutes across fields to the cliffs, an easy walk down to Chapel Porth. No facilities. Slight slope, so bring levelling blocks; the lane is signed unsuitable for long vehicles, though reviewers fitted 6 m and long-wheelbase vans. Reviewers call the road quiet at night. National Trust rangers check the nearby Trust car parks, which are day only, and one told a 2024 reviewer that overnight stays here aren't meant to happen, though he let them stay. St Agnes's council car park at Reppers Coombe bans motorhomes and campers 11pm–8am",
    // park4night listing and reviews, rated 4.67 from 15; the most recent in
    // April 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "st-agnes-beacon-club-site",
    name: "St Agnes Beacon Club Campsite",
    kind: "stay",
    // Centre of OSM way 1312771082, "St Agnes Beacon". The Club's GPS is 90 m
    // north; the TR5 0NU postcode centroid 210 m north.
    lat: 50.30686, lon: -5.22518,
    address: "Beacon Drive, St Agnes, TR5 0NU",
    phone: "01872 552543",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/st-agnes-beacon-club-campsite/",
    notes: "Caravan and Motorhome Club site at the foot of St Agnes Beacon, with panoramic coastal views; non-members welcome. 88 grass pitches with hookup on a gently sloping site on several levels, partly sheltered by gorse banks. No toilet block: bring your own facilities. Motorhome service point and drive-over waste disposal, laundry, gas, wifi. BBQs allowed. No tents. Arrivals from 1pm. Chapel Porth five minutes by car; St Agnes within walking distance. Enter by the second campsite entrance on Beacon Drive; the first is Beacon Cottage Farm. The Club advises not approaching St Agnes from Perranporth on the B3285. £5 deposit, refundable up to 21 days before",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The Club lists it ideal for dogs, with dog walks on and from the site; pets kept close and in sight",
      season: { from: "03-20", to: "10-05" },
      price_per_night: 25,
      price_note: "pitch and two adults under the Club's Tour for Less offer; prices vary by date and are shown when booking",
      hookup: true,
    },
  },
  {
    slug: "beacon-cottage-farm",
    name: "Beacon Cottage Farm",
    kind: "stay",
    // Centre of OSM way 481707732. The TR5 0NU postcode centroid, which the
    // owner gives, is 370 m north.
    lat: 50.30537, lon: -5.22453,
    address: "Beacon Drive, St Agnes, TR5 0NU",
    phone: "01872 552347",
    email: "jane@beaconcottagefarmholidays.co.uk",
    url: "https://www.beaconcottagefarmholidays.co.uk/camping/tariff/",
    notes: "Campsite on a working beef and arable farm by Wheal Coates, the coast path at the door; Chapel Porth beach 10 minutes' walk, St Agnes by a field path below the Beacon. 60 numbered, level grass pitches in six small paddocks, two with sea views, the rest sheltered; six serviced hardstandings. 10 A hookup. Free hot showers, family shower rooms, laundry, dishwashing, chemical disposal, motorhome service area, freezer for ice packs, wifi, play area. Fish and chip van, butcher, coffee van and pizza oven call. Families and couples only. Pitches from about noon, out by 11am; tell them if arriving after 6pm. Seven nights minimum in August. Deposit £100 a pitch a week on the tariff, £75 in the terms; balance paid on arrival. No fires, fire pits or chimineas; BBQs raised. No EV charging from hookups. Quiet 10pm–8am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night; on a short lead on the park except in the 2.5-acre dog exercise field; taken with you whenever you leave the park. Not in the play area or ball games field",
      // Opens 1 April 2026; the tariff runs to 30 September.
      season: { from: "04-01", to: "09-30" },
      price_per_night: 28,
      price_note: "standard pitch with two people, one car and a van, 1 April–22 May; £32 to 3 July and 4–30 September, £34 to 17 July, £42 18 July–3 September. Hookup £7, water and drainage £6, extra adult £8",
      hookup: true,
    },
  },
  {
    slug: "chapel-porth-motorhome-park",
    name: "Chapel Porth Motorhome Park",
    kind: "stay",
    // Postcode centroid (TR5 0NR), the postcode Pitchup gives; the owner gives
    // none and OSM has no feature for it. OSM's "Chapel Porth Youth Camp Site"
    // (way 649211354) is 120 m south-west. Position unconfirmed.
    lat: 50.30134, lon: -5.22238,
    address: "Chapel Porth, St Agnes",
    phone: "01872 248538",
    email: "minnowgreen@yahoo.co.uk",
    url: "https://www.chapel-porth-motorhome-park.co.uk/",
    notes: "Small family-run park for motorhomes only, adults only, beside woodland above the National Trust's Chapel Porth valley; the beach 400 m, about 15 minutes' walk; Wheal Coates and St Agnes Head within walking distance. Hard standings with hookup, waste water disposal; no tents, caravans or trailer tents. 7.5 m maximum. Booked and paid in full in advance; full refund 14 days or more before arrival, none after. Check-in 1–7pm, out by 11am. Quiet 10pm–8am; raised BBQs only, no open fires",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      // Home page and terms disagree.
      dogs: null,
      dogs_note: "The owner's home page says well-behaved dogs welcome on a lead; its terms say strictly no dogs on the premises. Ask before booking",
      season: "all-year",
      price_per_night: 30,
      price_note: "two adults, including £3 of electricity; extra adult £10",
      hookup: true,
    },
  },
  {
    slug: "porthtowan-coast-road-lay-by",
    name: "Coast Road lay-by, Porthtowan",
    kind: "stay",
    // OSM node 1123056993 on Coast Road (way 187992578), beside the lay-by;
    // park4night's pin is 11 m north. OSM doesn't map the lay-by itself.
    lat: 50.28680, lon: -5.23442,
    address: "Coast Road, Porthtowan",
    url: "https://park4night.com/en/place/190912",
    // Council rules from the Beach Road car park's page.
    notes: "Big roadside lay-by on the hill north-east of Porthtowan, overlooking the beach, below a row of houses: room for three to five vans, fairly level, some potholes. No facilities; toilets at the beach. Sunset views. Exposed in wind. Poor or no phone signal on most networks. A steep path goes down to the village and beach, about 10–20 minutes. Reviewers mostly report quiet nights once traffic drops after about 10pm, but some mention horns, boy racers and people stopping for the sunset. No signs against overnight stays, reviewers say. Porthtowan's council car park on Beach Road bans motorhomes and campers 11pm–8am and sleeping",
    // park4night listing and reviews, rated 4.31 from 35; the most recent in
    // November 2025.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "porthtowan-tourist-park",
    name: "Porthtowan Tourist Park",
    kind: "stay",
    // Centre of OSM way 647742141. The TR4 8TY postcode centroid, which the owner
    // gives, is 210 m south.
    lat: 50.27332, lon: -5.23769,
    address: "Mile Hill, Porthtowan, Truro, TR4 8TY",
    phone: "01209 890256",
    email: "admin@porthtowantouristpark.co.uk",
    url: "https://www.porthtowantouristpark.co.uk/touring-camping-north-cornwall/",
    notes: "Five-acre touring-only site in a rural setting a mile from Porthtowan beach; AA five-star platinum. Electric grass pitches, mostly 10 × 10 m (7 m wide including awning), and premium gravel hardstandings with their own water and grey waste point; 10 A hookup. Toilets and showers, family and accessible rooms, indoor dishwashing, laundry, wetsuit rinse, chemical disposal, free wifi, games room, play area. Shop, 8.30–10am and 4.30–6pm in 2024, with milk, bacon, eggs and bread; Calor and Camping Gaz. Choose a pitch on bookings of seven nights or more. No noise after 11pm; no fire pits or wood burning; no EV charging. Towing route and caravans via the A30 Avers junction and North Country; the owner warns against a narrow lane sat nav suggests",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on a lead, mess picked up; fenced exercise area on site. Breeds in the Dangerous Dogs Act refused",
      // 25 March–30 September in 2027.
      season: { from: "04-01", to: "09-27" },
      price_per_night: null,
      price_note: "prices only in the online booking; 15% off all pitches in the September 2026 end-of-season sale",
      hookup: true,
    },
  },
  {
    slug: "elm-farm-porthtowan",
    name: "Elm Farm",
    kind: "stay",
    // Centre of OSM way 288569130, "Elm Farm Campsite"; OSM node 5454060738,
    // "Elm Farm campsite", is 70 m north-west. The owner gives no postcode.
    lat: 50.26554, lon: -5.23693,
    address: "Coast road between Porthtowan and Portreath, Nancekuke",
    email: "elmfarmcornwall@gmail.com",
    url: "https://www.elmfarm.biz/camping",
    notes: "Off-grid camping on a smallholding in the Nancekuke valley, with a café and bar and a bike hire and repair shop on the Coast to Coast Trail; campers get cheaper hire. Two sheltered fields, pitches round the edges; tents, caravans and campervans. About 20 minutes by quiet lanes to the cliffs and coast path, then down to Porthtowan beach. Drinking water, composting loos, four family-size washrooms with hot showers, washing-up sinks, a flushing toilet and chemical disposal point (green fluid only) up the hill. No electricity on site; campers' fridge-freezer and charging points in the barn by the café. Brazier with wood and kindling £8 a night. Book online",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, as long as their human cleans up after them",
      season: { from: "05-01", to: "09-06" },
      price_per_night: 20,
      price_note: "two adults at £10 each, 1 May–18 July; £15 each 19 July–6 September. Children £7.50",
      hookup: false,
    },
  },
  {
    slug: "portreath-arms",
    name: "The Portreath Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 4916200099, "Portreath Arms Hotel"; the pub node 3714007130 is
    // 9 m west. The TR16 4LA postcode centroid is 60 m south. The owner's site
    // gives no address; street and postcode from OSM's tags.
    lat: 50.26162, lon: -5.28821,
    address: "The Square, Portreath, TR16 4LA",
    phone: "01209 842259",
    email: "email@theportreatharms.co.uk",
    url: "https://www.theportreatharms.co.uk/rooms",
    notes: "Family-owned bar, restaurant and seven-bedroom inn in the centre of the village, a short walk from the harbour and beach. En-suite doubles, a king with bath, a twin, and a double with sofa bed sleeping up to four; a top-floor twin shares a shower room with the neighbouring double, and the two can be let as a family room. Breakfast included. Open 11am–11pm, Sunday noon–10pm; food noon–2pm and 6–9pm Monday–Saturday. Portreath Beach bans dogs 10am–6pm, 1 July–31 August",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£5 a night, with a dog bed, towel, bowl and treats; on a lead. A few rooms kept allergy free. Not in the restaurant; tables in the bar, garden and decking",
      season: null,
      price_per_night: 60,
      price_note: "room, from; up to £130",
    },
  },
  {
    slug: "cliff-house-portreath",
    name: "Cliff House B&B",
    kind: "stay",
    // OSM node 4916200098. The TR16 4LE postcode centroid is 25 m west.
    lat: 50.26165, lon: -5.28859,
    // OSM's tags, which spell it "Cliff Tarrace"; directories give Cliff
    // Terrace, TR16 4LE.
    address: "Cliff Terrace, Portreath, TR16 4LE",
    // Phone from OSM's tags and directory listings.
    phone: "01209 843847",
    notes: "B&B on the coast path by Portreath's harbour, a couple of minutes' level walk from the beach. Directories list en-suite rooms with TV and kettle, one downstairs, free parking, one-night stays accepted and packed lunches on request. Not confirmed as still trading: listings found are directories and an Airbnb page",
    // Directory listings only; no owner website found.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Directories say well-behaved pets by prior arrangement",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hillcrest-views-campsite",
    name: "Hillcrest Views Campsite",
    kind: "stay",
    // OSM node 7867502285. The TR16 4EX postcode centroid, which the owner gives,
    // is 175 m south.
    lat: 50.24695, lon: -5.26003,
    address: "Hillcrest Farm, Voguebeloth, Illogan, Redruth, TR16 4EX",
    // OSM tags a different mobile, 07759 247105.
    phone: "07563 235300",
    email: "hillcrestviewscampsite@hotmail.com",
    url: "https://www.hillcrestviewscampsite.co.uk/",
    notes: "Small family-run 25-pitch site on a smallholding at the edge of Illogan, with valley views to St Agnes Beacon and Carn Brea; unsheltered. Grass, gravel and serviced pitches, 16 A hookup. Toilets and showers, family shower room, chemical disposal, drinking water; fire pit hire and firewood. Bus stops, shop, pharmacy and pubs a few minutes' walk. Portreath under 10 minutes' drive or 40 minutes' walk by the old tramway or the woods. No minimum stay; book online or ring 9am–6pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dogs and cats free",
      // 2026 season 27 March–1 November; open again 14 December–3 January.
      season: { from: "03-27", to: "11-01" },
      price_per_night: 23,
      price_note: "serviced grass and gravel touring pitch with hookup, two people, low season; £26 mid, £30 high. Grass pitch without hookup £15, £18, £22, hookup £5; backpacker £13–15. Extra adult £4, child 3–17 £3. Winter hookup £2 extra from 3 October",
      hookup: true,
    },
  },
  {
    slug: "tehidy-holiday-park",
    name: "Tehidy Holiday Park",
    kind: "stay",
    // OSM node 1789141347. The TR16 4JQ postcode centroid, which the owner
    // gives, is 50 m south-east.
    lat: 50.24488, lon: -5.25314,
    address: "Bassett Road, Harris Mill, Illogan, Redruth, TR16 4JQ",
    phone: "01209 216489",
    email: "holiday@tehidy.co.uk",
    url: "https://tehidy.co.uk/holiday-prices/",
    notes: "Small independent eco holiday park in a wooded valley, about 2 miles from Porthtowan beach: touring and camping pitches, hardstanding and grass, screened by hedges, alongside caravans, cottages and wigwam cabins; AA and Green Tourism Gold awards. Hookup on every pitch; bring a standard 3-pin lead. Book a motorhome as a caravan online. Free showers within about 100 m of every pitch, family and accessible wet room, indoor dishwashing with freezer, laundry, shop, games room, play area, covered BBQ shelter, rapid EV charger. No clubhouse or loud music. The valley site has inclines. 25% deposit; balance four weeks before arrival on the touring page, eight on the prices page",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: false,
      season: { from: "03-28", to: "10-31" },
      price_per_night: 23,
      price_note: "unit under 6 m with two people, 28 March–23 May and 29 August–31 October; £25 to 18 July, £27 to 29 August. 6–7 m £2 more, over 7 m £4 more. Hookup £4, extra person £4",
      hookup: true,
    },
  },
  {
    slug: "magor-farm",
    name: "Magor Farm Caravan & Campsite",
    kind: "stay",
    // Centre of OSM way 288522818, "Magor Farm Caravan and Campsite". The
    // TR14 0JF postcode centroid, which the owner gives, is 820 m east.
    lat: 50.23585, lon: -5.32204,
    address: "Magor Downs, Tehidy, Camborne, TR14 0JF",
    phone: "01209 713367",
    email: "magorfarm@btinternet.com",
    url: "https://www.magorfarm.co.uk/booking.htm",
    // The owner's site is old and its prices undated.
    notes: "Relaxed farm site at Tehidy with few rules, signposted near Hell's Mouth on Cliff Road. No reception: pitch where there's space and Redvers Williams finds you later. Toilet and shower block, free showers, wash-up area with spin drier, free ice pack freezing, play area. Ring to book, especially for a hookup. Cash or cheque on arrival; no cards. From Portreath, the B3301 west, then the Camborne turning",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 a night; on a lead at all times and exercised off site",
      // "Easter to the end of October".
      season: null,
      price_per_night: 18,
      price_note: "hookup pitch with two people, Easter–June and September–October; £22 July–August. Standard pitch £15, £17. Extra adult £5, child £2; undated tariff",
      hookup: true,
    },
  },
  {
    slug: "churchtown-farm-gwithian",
    name: "Churchtown Farm Caravan & Camping Site",
    kind: "stay",
    // Centre of OSM way 231419028. The TR27 5BX postcode centroid, which the
    // owner gives, is 205 m east.
    lat: 50.22281, lon: -5.38813,
    address: "Gwithian, Hayle, TR27 5BX",
    phone: "01736 753219",
    email: "admin@churchtownfarm.org.uk",
    url: "https://churchtownfarm.org.uk/",
    notes: "Family-run six-acre site on a farm in Gwithian, beside the dunes and the coast path; Gwithian beach about 300 m. 75 hookup pitches. Toilet and shower block with free showers, family bathrooms and an accessible unit, launderette, dishwashing, ice pack freezer, water points, motorhome waste facilities. Shop daily with local produce, groceries, ice cream and hot drinks. Families and couples only; no groups. Book by phone or email; booking office 9am–2pm Monday–Saturday. Two to four nights paid in full at booking, non-refundable; deposits non-refundable. Debit cards and cash, no credit cards. Arrivals from 11am, tell them if after 5pm; out by 10am. No fires or fire pits; BBQs on blocks. No generators or EV charging. Entrance 100 m past the church tower, through the farmyard. The Caravan and Motorhome Club also lists a members-only Certificated Location here, open 1 May–30 September, without hookup",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2.50 a night; on a short lead at all times, exercised off site, never left alone in the unit. Dog exercise area at the top of the car park; the dunes and beach adjoin. Banned breeds refused",
      season: { from: "04-01", to: "10-12" },
      price_per_night: 28,
      price_note: "hookup pitch with two adults and two children under 10, low season (1 April–21 May, 18 September–12 October); £34 mid (1 June–15 July, 1–18 September), £46 high (15 July–1 September), £40 over Whitsun (21 May–1 June, six nights minimum). Without hookup £22, £29, £40, £34. Extra adult £5. One small tent and one coast path walker £10",
      hookup: true,
    },
  },
  {
    slug: "prosper-house-camping",
    name: "Prosper House Camping",
    kind: "stay",
    // Centre of OSM way 746986550. The TR27 5BW postcode centroid, which the
    // owner gives, is 230 m south-east.
    lat: 50.22041, lon: -5.38497,
    address: "Prosper House, Prosper Hill, Gwithian, Hayle, TR27 5BW",
    phone: "07968 178856",
    email: "ruth@prosperhousecamping.co.uk",
    url: "https://prosperhousecamping.co.uk/tariff/",
    notes: "Small, no-frills family-run field campsite in Gwithian, next to the Red River Inn; the beach a short walk over the dunes. Tents, campervans and motorhomes; no caravans, hardstandings or hookup. Toilets, hot showers, cold-water washing up, fridge freezer and phone charging, chemical toilet disposal and water top-up. Fire pits to hire; sturdy fire pits of your own allowed, not on the grass. Usually three nights minimum, five in July and August, but they'll fit shorter stays into gaps; turn up unbooked and they'll take you if there's space. Payment by bank transfer; two to four nights paid in full at booking, non-refundable. Arrivals from noon, not after 9pm; out by 11am. Patchy phone signal. Turn in by the Red River Inn, opposite Gwithian Farm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £1 a night; on a lead or in the vehicle at all times on site. The nearest beach bans dogs 10am–6pm in July and August; from Peter's Point, about a mile off, dogs are allowed any time",
      // "15th May to mid September 2026".
      season: null,
      price_per_night: 22,
      price_note: "pitch with two people and one vehicle; £28 22–30 May and 1 July–31 August. Extra adult £4, child 5–16 £3",
      hookup: false,
    },
  },
  {
    slug: "gwithian-farm",
    name: "Gwithian Farm Campsite",
    kind: "stay",
    // Centre of OSM way 231419030, "Gwithian Farm". The TR27 5BX postcode
    // centroid, which the owner gives, is 220 m north-east.
    lat: 50.22092, lon: -5.38789,
    address: "1 Church Town Road, Gwithian, Hayle, TR27 5BX",
    phone: "01736 753127",
    email: "camping@gwithianfarm.co.uk",
    url: "https://www.gwithianfarm.co.uk/rates/",
    notes: "Family-run touring site in landscaped gardens behind a 16th-century thatched farmhouse in the middle of Gwithian, opposite the Red River Inn; the beach 10–12 minutes' walk through the village and dunes. All pitches at least 10 × 10 m: 38–40 gravel hardstandings with hookup for motorhomes and caravans, the rest grass, most with hookup. Free showers, family shower room, children's bathroom, accessible facilities, laundry, free ice pack freezer and phone charging, limited wifi. Shop; fish and chip, pizza and curry vans; coffee from the Goat Shack. £80 non-refundable deposit per pitch per week; balance on arrival. Minimum seven nights 22–30 May and five in July and August. Arrivals noon–8pm, no earlier; out by 10am. One car per pitch. No fires or fire pits; BBQs on bricks. No EV charging. Bus to Hayle and St Ives from the entrance",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2 a night, by arrangement when booking; on a lead at all times and exercised off site. The middle of Gwithian beach, Mexico Towans, is dog friendly; the beach is zoned 1 July–31 August, with dogs on all of it 6pm–10am",
      // 2027: 22 March–17 October.
      season: { from: "04-01", to: "10-12" },
      price_per_night: 30,
      price_note: "pitch with 16 A hookup, two people, one vehicle and unit, 1 April–21 May and 20 September–12 October; £36 31 May–30 June and 1–19 September, £40 22–30 May, £46 July–August. Without hookup £6 less. Extra adult £5, child £3. Coast path backpackers £10, no need to book",
      hookup: true,
    },
  },
  {
    slug: "old-stables-connor-downs",
    name: "The Old Stables Campsite",
    kind: "stay",
    // Postcode centroid (TR27 5EA), which the owner gives; OSM has no campsite.
    // Position unconfirmed.
    lat: 50.20651, lon: -5.36117,
    address: "Gwithian Road, Connor Downs, Hayle, TR27 5EA",
    phone: "07483 805064",
    url: "https://www.theoldstablescampsite.co.uk/",
    // Season has gaps, so it's given here rather than in stay.season.
    notes: "Campsite on Gwithian Road at Connor Downs, five minutes' drive from the beaches: 20 non-electric and 20 electric grass pitches, 8 × 8 m, for tents, campervans, motorhomes and caravans, and one electric grass pitch for motorhomes only; hookup 10 A. Three camping pods and two shepherd's huts. Toilets, hot showers, drinking water, washing-up area, wetsuit rinse; fire pits to hire. Open 2–20 April, 1–11 May and 22 May–21 September. Booked through Campsites.co.uk: 15% non-refundable deposit; cancel in writing three weeks ahead. The Turnpike Inn is 15 minutes' walk",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On the grass pitches; not in the pods or shepherd's huts",
      season: null,
      price_per_night: 22,
      price_note: "electric grass pitch, from; non-electric from £17. Up to five people",
      hookup: true,
    },
  },
  {
    slug: "godrevy-park-club-site",
    name: "Godrevy Park Club Campsite",
    kind: "stay",
    // Centre of OSM way 231419117, an unnamed camp site beside the B3301 at
    // Upton Towans; the Club's GPS is 55 m south. OSM's node for Gwithian Sands
    // Chalet Park (4081567425) sits at the way's southern edge, so the match is
    // likely but not certain. The TR27 5BL postcode centroid is 540 m south.
    lat: 50.21426, lon: -5.38991,
    address: "Upton Towans, Hayle, TR27 5BL",
    phone: "01736 753100",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/godrevy-park-club-campsite/",
    notes: "Caravan and Motorhome Club site at Upton Towans, members only; redeveloped and fully reopened in August 2024. 118 touring pitches, hardstanding and grass, with hookup; no tents or pods; outfits up to 9 m. Toilet block, accessible shower room, laundry, dishwashing, motorhome service point and drive-over waste disposal, wifi, play area. BBQs allowed. A rear gate opens onto the dunes, ten minutes' walk to the cliff path; the beach car park is a mile's drive. A fish and chip van visits. Arrivals from 1pm. The Club says not to use sat nav: from the West Cornwall Retail Park roundabout on the A30, the B3301 into Hayle, right at the double mini roundabout towards Portreath, then 1.5 miles. £5 deposit, cancellations free up to 21 days before",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The Club lists it ideal for dogs, with a dog walk from the site; pets kept close and in sight",
      // 2027: 19 March–1 November.
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "prices vary by date and are shown when booking; 10% off stays of four nights or more 22 September–1 November 2026",
      hookup: true,
    },
  },
  {
    slug: "atlantic-coast-holiday-park",
    name: "Atlantic Coast Holiday Park",
    kind: "stay",
    // OSM node 2273432774. The TR27 5BL postcode centroid, which the owner
    // gives, is 290 m south-west.
    lat: 50.21187, lon: -5.38970,
    address: "53 Upton Towans, Gwithian, Hayle, TR27 5BL",
    phone: "01736 752071",
    email: "enquiries@atlanticcoastpark.co.uk",
    url: "https://atlanticcoastpark.co.uk/holidays/touring-motorhome-pitches/",
    notes: "Five-star holiday park of statics, lodges and glamping pods at Upton Towans, with a touring and motorhome area at the foot of the dunes, a short walk to the beach. No bars or clubs. Hardstanding and grass pitches, each hedged and fully serviced with 16 A hookup; free wifi. Heated amenity block with family and accessible bathrooms, laundry, indoor dishwashing, freezer, surfers' shower, communal BBQ area, playground. Shop, bakery and coffee shop in reception. No generators or gazebos. Arrivals from noon, out by 11am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; all motorhome pitches pet friendly. Dog facilities on site",
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "mollys-meadow-cl",
    name: "Molly's Meadow",
    kind: "stay",
    // Postcode centroid (TR27 5DF), from the Club's listing; OSM has no
    // campsite. Position unconfirmed.
    lat: 50.20777, lon: -5.39046,
    // The Caravan and Motorhome Club's listing.
    address: "The Stables, Bar Lane, Connor Downs, Hayle, TR27 5DF",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/hayle/mollys-meadow/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a one-acre lawned field off Bar Lane, some pitches sloping, so bring levelling blocks. Grass pitches, no hookup; outfits up to 7.5 m. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open 1 March–30 October 2026.
      season: { from: "03-01", to: "10-30" },
      price_per_night: null,
      hookup: false,
    },
  },
  {
    slug: "travelodge-hayle",
    name: "Travelodge Hayle",
    kind: "stay",
    // Centre of OSM way 267035083, "Travelodge". The TR27 5DG postcode
    // centroid, which the owner gives, is 145 m south.
    lat: 50.19912, lon: -5.39621,
    address: "Carwin Rise, Loggans, Hayle, TR27 5DG",
    phone: "08719 846314",
    url: "https://www.travelodge.co.uk/hotels/307/Hayle-hotel",
    notes: "New-design Travelodge at the Loggans Moor roundabout on the A30, about 20 minutes' walk from St Ives Bay by the owner's reckoning. Standard, family and accessible rooms, king-size beds in doubles. Free parking. Staffed 24 hours; snacks and drinks 24 hours; coffee shop in a separate building from 6am. Breakfast to Go £6.95. Check-in from 3pm, out by noon; early check-in £20, late check-out £15",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Up to two, added as an extra when booking: £25 for one, £50 for two, per room. Guide dogs free",
      season: null,
      price_per_night: null,
      price_note: "saver rate £52.99 for a standard room on 20 September 2026, non-refundable; varies by date",
    },
  },
  {
    slug: "st-ives-bay-beach-resort",
    name: "St Ives Bay Beach Resort",
    kind: "stay",
    // Centre of OSM way 267035084, "St Ives Bay Holiday Park". The TR27 5BH
    // postcode centroid, which the owner gives, is 440 m north-west.
    lat: 50.20441, lon: -5.40462,
    address: "73 Loggans Road, Upton Towans, Hayle, TR27 5BH",
    phone: "0330 053 7000",
    url: "https://www.awayresorts.co.uk/parks/cornwall/st-ives-bay/touring-camping/",
    notes: "Away Resorts holiday park on Upton Towans with direct access to the three-mile beach. Grass pitches, standard or electric, all 5 × 8 m, one unit per pitch, up to six people included; guest passes and use of the park's facilities: indoor pool, Sands Bistro and Dynamite Bar, open by season. Showers and wash-up area, laundrette, shop, water and refuse disposal. Arrivals any day; check in from 11am, out by 10am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; the park calls itself pet friendly, and dogs are welcome in the bar and restaurant",
      // "Pitches available March to November".
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "sandy-acres",
    name: "Sandy Acres",
    kind: "stay",
    // Postcode centroid (TR27 5BA), which the owner gives, on Sandy Acres road
    // (OSM way 60916471); OSM doesn't map the campsite. park4night's pin (place
    // 339606) is by the Sandy Acres beach car park, 710 m north-west. Position
    // unconfirmed.
    lat: 50.20127, lon: -5.40449,
    address: "22 Sandyacres Road, Hayle, TR27 5BA",
    phone: "07494 436635",
    email: "sandyacrescamping@gmail.com",
    url: "https://www.sandy-acres.co.uk/stay/camping/31-pitches/",
    // Gate code from park4night reviews, rated 4.62 from 16; the most recent in
    // September 2026.
    notes: "Basic campsite in the Towans dunes above Hayle beach, a few minutes across the dunes to the sand, with the Sandy Acres café and surf school at the beach car park. 31 non-electric grass pitches for tents and campervans: standard, beach track (nearest the beach) and larger super pitches; no big motorhomes or 6 m bell tents, ask first. Four hot showers, six toilets, cold-water dishwashing, small shop, ice pack freezer, phone charging in the office. No hookup, wifi, fridge or chemical waste disposal. Gates locked 10pm–7am; park4night reviewers say campers are given a keypad code. Book by email. 50% deposit, balance six weeks before; two to four nights paid in full, non-refundable. Changeover Tuesday and Saturday in the summer holidays, super pitches Saturday to Saturday. No fires, generators or gazebos. The beach car park bans overnight parking",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £3 a night; on a 2 m lead on site at all times, exercised off site, never left alone. The beach below is dog friendly",
      // "Open from May–October".
      season: null,
      price_per_night: 28,
      price_note: "standard pitch with two people, one tent or van and one car, low season, 2025 tariff; beach track £30, super pitch £38. Half terms and summer holidays £38, £40, £48. Extra adult £7–10, child £4–7, car £5",
      hookup: false,
    },
  },
  {
    slug: "hayle-industrial-park",
    name: "Hayle Industrial Park",
    kind: "stay",
    // OSM node 762560370 on the Hayle Industrial Park road (way 60916535), off
    // Marsh Lane; park4night's pin is 5 m west.
    lat: 50.19311, lon: -5.39556,
    address: "Hayle Industrial Park, Marsh Lane, Hayle",
    url: "https://park4night.com/en/place/400018",
    // Council rules from the Gwithian Towans car park page; the Sandy Acres car
    // park ban from its owner.
    notes: "Free roadside parking on a dead-end road through Hayle Industrial Park, beside units, room for about ten. No facilities. Flat and well lit. Reviewers report quiet, undisturbed nights; workers arrive from about 8am and building work can start early. McDonald's round the corner; reviewers mention Screwfix and a small brewery on the estate. Cornwall Council's Gwithian Towans car park bans motorhomes and campers 11pm–8am, and the Sandy Acres beach car park at Hayle Towans bans overnight parking",
    // park4night listing and reviews, rated 4.22 from 9; the most recent in
    // July 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "beachside-holiday-park",
    name: "Beachside Holiday Park",
    kind: "stay",
    // Centre of OSM way 125143004. The TR27 5AW postcode centroid, which the
    // owner gives, is 735 m south.
    lat: 50.20193, lon: -5.41403,
    address: "12 Lethlean Lane, Hayle, TR27 5AW",
    phone: "01736 753080",
    email: "reception@beachside.co.uk",
    url: "https://www.beachside.co.uk/touring-and-camping/touring-caravan-and-camping-pitches-in-st-ives-bay-cornwall",
    notes: "Family-run holiday park in the dunes above St Ives Bay, with its own path down to the beach. Grass touring pitches with hookup for units up to 4 × 7 m plus a 3 m awning; serviced pitches add water, grey waste, TV point and wifi; large tent pitches. Pitch fee includes four people and one car; extra adult £16, child £8, car £8. Showers, indoor dishwashing, chemical disposal, motorhome service point. Coast restaurant and bar all season; outdoor heated pool and shop 2 May–25 September 2026; dune bar; surf school; entertainment in peak season. Saturday to Saturday only in school holidays. Pitches from noon until 10pm, 2 May–25 September, or 6pm otherwise; out by 10am. Choosing a pitch £25. 2026 bookings: £50 touring deposit, balance 56 days before arrival, no refund within 56 days",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per booking, £5 a night, on selected touring and large tent pitches only; on a short lead around the park; not left alone on the pitch. Dog exercise area. Welcome in designated areas of Coast",
      season: { from: "03-28", to: "10-31" },
      price_per_night: null,
      price_note: "prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "penellen-hayle",
    name: "The Penellen",
    kind: "stay",
    // Centre of OSM way 204419122, "The Penellen Bed and Breakfast". The
    // TR27 5AF postcode centroid, which the owner gives, is 105 m south-west.
    lat: 50.19839, lon: -5.42653,
    address: "64 Riviere Towans, Phillack, Hayle, TR27 5AF",
    phone: "01736 753777",
    email: "penellen@btconnect.com",
    url: "https://www.bedandbreakfasthotelcornwall.co.uk/rooms/",
    notes: "Room-only guest accommodation on Riviere Towans, 50 yards from the beach: two first-floor en-suite rooms with sea-view balconies over St Ives Bay, one double and one sleeping three. Free tea, coffee, juice, cereal, yoghurt and fruit, fridge, wifi. Conservatory for guests. No children under eight. Ample parking; reached by the private road past the Bucket of Blood and the caravan site. A two-bedroom self-catering apartment too",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      // Nothing about dogs on the owner's site.
      dogs: null,
      season: { from: "02-06", to: "11-14" },
      price_per_night: 140,
      price_note: "double room, one night; £270 for two, £390 for three. Room for two in the larger room £160, for three £195",
    },
  },
  {
    slug: "madhatter-hayle",
    name: "Madhatter Bed and Breakfast",
    kind: "stay",
    // Postcode centroid (TR27 4DX), which the owner gives; OSM has no feature
    // for it.
    lat: 50.19073, lon: -5.41059,
    address: "73 Fore Street, Hayle, TR27 4DX",
    phone: "01736 754241",
    email: "paulinemadhatterbandb@outlook.com",
    url: "https://madhatterbandb-hayle.co.uk/",
    notes: "B&B and café on Fore Street in Copperhouse, among the shops and restaurants. A single and a large double or twin sharing a shower room and bathroom, an en-suite double or twin, and a family room with a double, two singles, a sofa bed and a cot. Tea and coffee, TV, wifi; laundry for a small fee. Café 10am–4pm, Easter to the end of October, with homemade food, cream teas and cakes; walled garden. Bus stop outside for Truro, St Ives and Penzance, and the National Express; Hayle station just under a mile",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: true,
      // cornwall-online.co.uk says "for an additional small charge".
      dogs_note: "Dog friendly; no charge or rules given on the owner's site",
      season: "all-year",
      price_per_night: 50,
      price_note: "single room, from; double or twin £110, en-suite £130. Family room by occupancy",
    },
  },
  {
    slug: "cornubia-inn",
    name: "The Cornubia Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 406033226. The TR27 4DX postcode centroid, which the
    // owner gives, is 30 m north-west.
    lat: 50.19061, lon: -5.41018,
    // House number from OSM's tags; the owner gives Copperhouse, Hayle, TR27 4DX.
    address: "35 Fore Street, Copperhouse, Hayle, TR27 4DX",
    phone: "01736 753351",
    email: "info@thecornubiainn.co.uk",
    url: "https://www.thecornubiainn.co.uk/contact-us",
    notes: "Sports pub with rooms in Copperhouse: Sky Sports and BT Sport on three TVs and a 10 ft screen, live music, poker and quizzes; garden with a non-smoking area. En-suite superior king doubles, classic doubles and twins with showers, Sky TV, wifi, pod coffee machines. Continental breakfast. Free on-site parking. Check in 3–11pm, out by 11am. No parties",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "The booking policies say no pets",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "treglisson",
    name: "Treglisson Touring Park",
    kind: "stay",
    // OSM node 13037824001, "Treglisson campsite". The TR27 5JT postcode
    // centroid, which the owner gives, is 230 m west.
    lat: 50.18207, lon: -5.39151,
    address: "Wheal Alfred Road, Hayle, TR27 5JT",
    phone: "01736 753141",
    email: "treglisson@hotmail.co.uk",
    url: "https://treglisson.co.uk/prices-and-terms/",
    notes: "Small, sheltered, family-run rural site on an old orchard east of Hayle: 26 hookup pitches on the main site, and 9 non-electric pitches in a meadow field only in the May–June half term and summer holidays. Motorhomes must book a hardstanding; campervans needn't. No water or drainage on pitches; water taps and chemical toilet disposal. Tiled shower block, covered dishwashing, launderette with free powder, freezer, indoor and outdoor play areas. The Mine, a small licensed shop with made-to-order croissants, in May half term and summer holidays. Arrivals after 2pm, tell them if after 8pm; out by 11am. 20% non-refundable deposit, balance 28 days before; no refunds within 14 days. No stag or hen parties or large single-sex groups. Quiet 10.30pm–8am. Footpaths from the site; Gwithian beach five minutes' drive",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, up to two per pitch; well behaved and on a lead on site",
      // The tariff runs 2 April–25 October 2026; the home page says Easter to
      // 31 October.
      season: { from: "04-02", to: "10-25" },
      price_per_night: 30,
      price_note: "hookup pitch with two people and one car, 2 April–21 May and 1–30 June; £34 22–31 May, £38 July–August, £31 September, £28.50 1–25 October. Meadow non-electric £20–29. Extra adult £6, child 5 and over £3, extra car £10",
      hookup: true,
    },
  },
  {
    slug: "white-hart-hayle",
    name: "White Hart Hotel",
    kind: "stay",
    // Centre of OSM way 390101888. The TR27 4HQ postcode centroid, which the
    // owner gives, is 5 m south-west.
    lat: 50.18343, lon: -5.42125,
    address: "Foundry Square, Hayle, TR27 4HQ",
    phone: "01736 752322",
    url: "http://whiteharthotel-hayle.co.uk/tariff",
    notes: "Hotel in Foundry Square in the middle of Hayle, built in 1838 by the foundry owner Henry Harvey. Single, twin, double and family rooms, all en suite, with tea and coffee, mini-fridge and Freeview TV; original art throughout. Full English breakfast included. Two restaurants. Free gated parking; wifi in the main hotel rooms and bar. Weekly rates on request",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Well-behaved dogs in the annexe rooms only; say when booking",
      season: null,
      price_per_night: 70,
      price_note: "room with breakfast, from; indicative one-night rates £100 single, £125 double or twin, £140 premier, £200 family, varying with demand and season",
    },
  },
  {
    slug: "trelissick-farm-cl",
    name: "Trelissick Farm",
    kind: "stay",
    // Postcode centroid (TR27 6HE), from the Club's listing; OSM has no
    // campsite. Position unconfirmed.
    lat: 50.17324, lon: -5.42454,
    // The Caravan and Motorhome Club's listing.
    address: "Water Lane, Hayle, TR27 6HE",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/hayle/trelissick-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a sheltered half-acre on a working farm off Water Lane, Hayle. Grass pitches, no hookup. Pub and town within a mile. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open 13 April–31 October 2026.
      season: { from: "04-13", to: "10-31" },
      price_per_night: null,
      hookup: false,
    },
  },
  {
    slug: "trevessa-farm",
    name: "Trevessa Farm",
    kind: "stay",
    // Centre of OSM way 713457846, "Trevessa Farm Certificated Site";
    // park4night's pin is 65 m south-west, the TR27 6JZ postcode centroid 290 m
    // south-east. The owner gives only Long Lane; number and postcode from OSM's
    // tags.
    lat: 50.15242, lon: -5.43344,
    address: "9 Long Lane, St Erth, Hayle, TR27 6JZ",
    phone: "07971 570871",
    email: "info@trevessafarmcamping.co.uk",
    url: "https://trevessafarmcamping.co.uk/booking-and-tariff/",
    // Certificated Site status from OSM and the Club's listing; Pitchup also
    // takes bookings.
    notes: "Small site on a working farm above the River Hayle near St Erth, three-quarters of an acre with rural views. A Camping and Caravanning Club Certificated Site; the owner's site doesn't mention membership. Five 6 × 6 m hardstandings for motorhomes, campervans and caravans, with 16 A hookup; ten slightly sloping grass pitches for tents only, hookup optional. Separate toilets and showers cleaned twice a day, free hot water, covered dishwashing, drinking water, recycling, waste disposal point. Bell tent and yurt too. Riverside footpath to St Erth village, about 20 minutes, with shop, post office and the Star Inn. Arrivals from 1pm, out by 11am. Non-refundable deposit; balance on arrival, cash or bank transfer",
    verified: "2026-09-15",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "No extra charge; kept under supervision at all times because of the livestock",
      // Hardstanding tariff runs all year; tent pitches 15 March–1 November.
      season: "all-year",
      price_per_night: 24,
      price_note: "hardstanding pitch with hookup, up to five people, 1 February–1 October; £23 1 November–1 February; October not listed. The tariff also says hookup is £3.50 a night, paid on arrival. Grass tent pitch £18–19",
      hookup: true,
    },
  },
  {
    slug: "badger-inn-lelant",
    name: "The Badger Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 687357210; the building, way 1090617562, is centred 2 m south.
    // The TR26 3JT postcode centroid, which the owner gives, is on the node.
    lat: 50.18388, lon: -5.43960,
    address: "Fore Street, Lelant, St Ives, TR26 3JT",
    phone: "01736 752181",
    email: "info@thebadgerinn.co.uk",
    url: "https://www.thebadgerinn.co.uk/visit",
    // The owner's pages give two sets of kitchen hours, so none are given here.
    notes: "Village pub with rooms on Fore Street in Lelant, five minutes' walk from Porthkidney beach and the coast path, two minutes from a bus stop and Lelant station. Breakfast included, 7.30–9.30am in the conservatory; a packed breakfast if leaving earlier, asked for the night before. Car park; guests can leave the car there and take the train or bus to St Ives. Bar 11am–10.30pm daily. Lunch and dinner Monday–Saturday; Sunday carvery, booking required. Book rooms online direct",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "No pets in the rooms, the owner says",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "mount-douglas-campsite",
    name: "Mount Douglas Campsite",
    kind: "stay",
    // Centre of OSM way 297779508. The TR26 3HE postcode centroid, which the
    // owner gives, is 140 m south-west.
    lat: 50.18679, lon: -5.46488,
    address: "Mount Douglas Farm, Trencrom Lane, Carbis Bay, St Ives, TR26 3HE",
    phone: "07816 320849",
    email: "mdcamping@outlook.com",
    url: "https://www.mountdouglascampsite.co.uk/faqs",
    notes: "Family campsite across two fields on a small farm at Carbis Bay, now mostly grazing horses; about 20 minutes' walk to the coast, and a bus to St Ives five minutes' walk. Electric grass pitches, 12 A. Separate men's and women's toilets and showers, washing-up area, washing machine and tumble dryer, fridges and freezers, sockets for charging. Campfires and BBQs allowed; fire pits and wood for hire. No caravans; roof tents welcome. The owner's site doesn't say whether campervans or motorhomes are taken. Book by email or the online form, not by phone. Arrivals from noon, out by 11am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 a night; on a lead at all times and never left alone",
      // Prices are given for July–September 2027; the first bookable night of
      // 2027 is still to be confirmed.
      season: null,
      price_per_night: 25,
      price_note: "two adults at £8 each, hookup £7 and one vehicle £2, 2027 prices; child 4–12 £4. Single people staying more than seven nights pay £2 a night more from the eighth",
      hookup: true,
    },
  },
  {
    slug: "hellesveor-holidays",
    name: "Hellesveor Holidays",
    kind: "stay",
    // Centre of OSM way 832723048. The TR26 3AD postcode centroid, which the
    // owner gives, is 8 m west.
    lat: 50.20789, lon: -5.50101,
    address: "Hellesveor Farm, St Ives, TR26 3AD",
    phone: "01736 795738",
    // The owner's pages also link info@hellesveorholidays.co.uk.
    email: "info@hellesveorholidays.com",
    url: "https://www.hellesveorholidays.com/accommodation/touring-caravan-pitches",
    notes: "Small, quiet family-run campsite on a farm in the Penwith AONB on the western edge of St Ives: 30 pitches, 25 with hookup; grass, fully serviced and hardstanding. No clubhouse or entertainment. Unisex toilets and showers, washing and laundry, waste and water disposal. Coast path 5–10 minutes' walk; St Ives 40 minutes by the coast path, 25 by the main road, or by bus. Awnings on hardstanding pitches only. Weekly bookings only in the school summer holidays, arriving Friday or Saturday. Book online, and ring or email first as a walker or backpacker: limited space. £75 non-refundable deposit, balance six weeks before, or pay in full; debit cards, no credit cards. Arrivals from noon, out by 10am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per booking, £3 each a night; under close control. Say when booking",
      // The 2025 tariff runs from 3 March to early January, grass pitches from
      // 13 April to 19 December; no 2026 tariff is published.
      season: null,
      price_per_night: 33,
      price_note: "grass pitch with hookup, two people and one campervan, 11–23 May and 5 October–19 December, 2025 tariff; £40 13 April–10 May, 24 May–25 July and 7 September–4 October, £45 26 July–6 September. Hardstanding with hookup £40–48, £50 over Christmas. Extra adult £12, child £9",
      hookup: true,
    },
  },
  {
    slug: "ayr-holiday-park",
    name: "Ayr Holiday Park",
    kind: "stay",
    // Centre of OSM way 475584701. The TR26 1EJ postcode centroid, which the
    // owner gives, is 240 m south-east.
    lat: 50.21376, lon: -5.49200,
    address: "Alexandra Road, St Ives, TR26 1EJ",
    phone: "01736 795855",
    email: "recept@ayrholidaypark.co.uk",
    url: "https://www.ayrholidaypark.co.uk/touring-camping/",
    notes: "Holiday park of caravans, apartments and lodges on the hill above Porthmeor, the only campsite in St Ives itself: ten minutes' walk down to the town and beaches, and a bus back up from the entrance. Touring pitches terraced level on a sloping site, most with views over St Ives Bay; hardstanding and grass, almost all with 16 A hookup and water. Underfloor-heated shower block with family and accessible rooms, dishwashing and laundry rooms, waste disposal points, free wifi. Quarterdeck restaurant from 8.30am, last food orders 8pm, with dogs allowed on its terrace; indoor pool £4 a swim. Touring bookable by phone only: £100 deposit, balance on arrival; in quiet periods you may get a pitch on spec. Pitches from 11.30am, no arrivals after 9pm, out by 11am; changeover Friday–Sunday in the busy season. No generators, disposable BBQs or fire pits; no music after 10pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Small to medium dogs: all year in the main touring park, September–June in the camping area. Tell the park before arrival. On a short lead or tethered, exercised in the dog field or off site, never left alone",
      season: "all-year",
      price_per_night: 38,
      price_note: "hookup pitch with a van and two adults, January–March and 3 October–15 December 2026: pitch £13.50, adults £7.75 each, serviced supplement £9. £46 28 March–22 May and 19 September–2 October; £55.75 23 May–10 July, 5–18 September and over Christmas; £70 11 July–4 September. Dog £3.50–6.50 a night",
      hookup: true,
    },
  },
  {
    slug: "polmanter",
    name: "Polmanter Touring Park",
    kind: "stay",
    // OSM node 1789141109, "Polmanter Tourist Park"; an unnamed caravan site,
    // way 1033540738, is centred 95 m east. The TR26 3LX postcode centroid,
    // which the owner gives, is 45 m north-east.
    lat: 50.19622, lon: -5.49142,
    address: "Halsetown, St Ives, TR26 3LX",
    phone: "01736 795640",
    email: "reception@polmanter.com",
    url: "https://www.polmanter.com/prices/",
    notes: "Family-run five-star touring park at Halsetown, a mile and a half by road above St Ives, with country footpaths down to the town. Grass and hardstanding pitches, electric or multi-serviced with water, drainage and TV socket; 16 A hookup with a round-pin lead. Most pitches take units up to 8 m; no American RVs, gazebos or day tents. Shop with fresh bread, Stable Bar and restaurant, outdoor heated pool mid-May to mid-September, tennis, pitch and putt, indoor play area. Shuttle bus to St Ives in the main season, very limited in the shoulder months, none November–April. Book online, by phone or in person. Usually three nights minimum, five with Friday–Sunday changeover in the peak of the summer holidays; one- and two-night stays sometimes online, without choice of pitch. Pitches ready by 12.30pm, move on by 10pm; out by 11am. A late-arrivals field by the entrance opens only after 2am. Barriers open 6.30am–midnight. £50 non-refundable deposit a week, balance 42 days before. No fire pits or generators",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, charged per night; on a 2 m lead on the park, never left alone. Exercise field and dog shower. Dangerous Dogs Act breeds and XL Bullys refused",
      // The 2026 tariff runs to 31 October; 2027 opens 28 March. The FAQs give
      // both "April till the end of October" and "late March to early November".
      season: { from: "03-28", to: "10-31" },
      price_per_night: 31.5,
      price_note: "electric grass pitch with two adults, one unit and one car, 20 September–31 October 2026; £43 7–19 September, £62.50 18 July–30 August. Electric hardstanding £35, multi-serviced hardstanding £38.50 in the autumn weeks. 2027 from £33.50, 28 March–14 May. Extra adult £9.50–17; dog £5.50–6.50 each",
      hookup: true,
    },
  },
  {
    slug: "trevalgan-touring-park",
    name: "Trevalgan Touring Park",
    kind: "stay",
    // OSM node 448306241, "Trevalgan Holiday Farm", tagged as a camp site. The
    // TR26 3BJ postcode centroid, which the owner gives, is 90 m south-west.
    lat: 50.20774, lon: -5.51868,
    address: "Trevalgan, St Ives, TR26 3BJ",
    phone: "01736 791892",
    email: "reception@trevalgantouringpark.co.uk",
    url: "https://www.trevalgantouringpark.co.uk/tariff",
    notes: "Family-run five-star touring park in open farmland in the hamlet of Trevalgan, two miles west of St Ives. From the coast path, footpaths lead up from Hellesveor Cliff or Carn Naun Point; the owner asks walkers to book first. Non-electric, electric (16 A) and multi-serviced grass pitches, and gravel multi-serviced hardstandings hedged on three sides; units up to 8 m; no American motorhomes, lorry conversions or generators. Underfloor-heated toilets and showers, family rooms, laundry, indoor dishwashing, wetsuit wash, motorhome service point with drive-over drain; green chemical toilet fluids only. Shop with bread and pastries baked to order, no alcohol. Bus to St Ives from the entrance. Book online, any number of nights, five minimum at Whitsun; pitch requests only for five nights or more. Arrivals noon–8pm, no late-arrivals area; out by 11am. Barrier locked 11.30pm–7am. Families and couples only. 10% deposit, minimum £75; balance 28 days before. No fires",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, on pitches 1–107 only; 108–135 are dog free. On a short lead, 2 m at most. Enclosed off-lead area and warm dog shower. Dogs ride the bus to St Ives for a fee. Dangerous Dogs Act breeds and American XL Bullys refused",
      season: { from: "05-01", to: "09-21" },
      price_per_night: 32,
      price_note: "grass electric pitch with one unit, one car and two adults, 1–22 May 2026; £46 31 May–17 July and 1–21 September, £51.50 at Whitsun, £56.50 18 July–31 August. Multi-serviced hardstanding £36–62.50. Extra adult £8.50–15.50. Dog £1 a night, £4.50 18 July–31 August. 10% off the pitch for three nights or more booked a week ahead, outside high season",
      hookup: true,
    },
  },
  {
    slug: "higher-penderleath",
    name: "Higher Penderleath Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 1382590967. The TR26 3AF postcode centroid, which the
    // owner gives, is 175 m west.
    lat: 50.18397, lon: -5.50768,
    address: "Higher Penderleath, St Ives, TR26 3AF",
    phone: "01736 798403",
    email: "penderleath@gmail.com",
    url: "https://penderleath.co.uk/prices-and-special-offers/",
    notes: "Ten acres of landscaped parkland in the countryside above St Ives near Towednack, looking over the north coast; level and gently sloping, well-spaced pitches; St Ives five minutes' drive, and a footpath to the coast path. Grass pitches for tents, caravans and motorhomes, 10 A hookup; units up to 8 m, superpitches up to 10 m. Toilets with free hot showers, dishwashing room, launderette, children's play area in converted granite barns; wifi, barrier entry and CCTV new for 2026. Arrivals noon–7pm, out by 10am. £50 non-refundable deposit per pitch per week, balance six weeks before; no refunds within six weeks. Quiet by 11pm. No generators. Out-of-season motorhome enquiries by email or phone. From the A30, the A3074, left at the second mini roundabout on the holiday route, about 3 miles to a T junction, left, first right towards Towednack, then the left fork",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £4 a night; well behaved, on a short lead at all times, mess picked up",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 26,
      price_note: "electric grass pitch with two people, a car and a unit up to 8 m, 1 April–13 May 2026; £33 14 May–15 July and 7–30 September, £42 16 July–6 September. Non-electric £18, £25, £34. Superpitch £6 more. Extra adult £8, child 3–15 £2.50",
      hookup: true,
    },
  },
  {
    slug: "penrose-house-cl",
    name: "Penrose House",
    kind: "stay",
    // Postcode centroid (TR26 3JA), from the Club's listing, whose GPS is 5 m
    // from it. OSM has no feature for it; OSM's Balnoon Campsite, way
    // 1413041014, is 70 m south. Position unconfirmed.
    lat: 50.19060, lon: -5.49312,
    // The Caravan and Motorhome Club's listing.
    address: "Balnoon, St Ives, TR26 3JA",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-ives/penrose-house/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a meadow on a smallholding at Balnoon, in the countryside near St Ives. Lawned grass pitches with hookup and room for awnings; up to five units. Dog walk on site; the listing says a pub and restaurant is nearly at the bottom of the garden. On the St Michael's Way footpath network; Carbis Bay beach and supermarket 2 miles. Wifi and battery charging. Arrivals from noon. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "amalwhidden-farm-cl",
    name: "Amalwhidden Farm",
    kind: "stay",
    // Postcode centroid (TR26 3AR), from the Club's listing; the Club's GPS is
    // 225 m north-east. OSM has no feature for it. Position unconfirmed.
    lat: 50.18057, lon: -5.51899,
    // The Caravan and Motorhome Club's listing.
    address: "Towednack, St Ives, TR26 3AR",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-ives/amalwhidden-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a one-acre level grass field on a family smallholding at Towednack, on the edge of the Penwith moors, three miles from St Ives. Hookup, water point, grey water and chemical disposal, rubbish and recycling; no toilets. Coarse fishery with two lakes, day tickets on site. Footpaths from the site; the nearest pub about 20 minutes' walk, mostly on footpaths. Bus stop within a mile for St Ives and Penzance. Arrivals from noon. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open 1 May–30 September 2026.
      season: { from: "05-01", to: "09-30" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "trenwith-car-park",
    name: "Trenwith car park",
    kind: "stay",
    // Centre of OSM way 67037913, "Trenwith Long Stay Car Park". The TR26 1DD
    // postcode centroid is 400 m south-west.
    lat: 50.20918, lon: -5.48473,
    address: "Trenwith, St Ives, TR26 1DD",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/trenwith-st-ives-tr26-1dd/",
    // Rules from the car park's page, Cornwall Council's motorhome parking page
    // and each St Ives, Carbis Bay and Lelant car park's own page. The Rugby
    // Club from park4night reviews (place 118242), the latest September 2026.
    notes: "Cornwall Council long-stay car park on the hill above St Ives town centre: 311 spaces in winter, 759 in summer with its grass fields; tarmac, open 24 hours, no height or weight limit. The only council car park in St Ives, and one of eleven in Cornwall, where self-contained motorhomes with their own toilet may stay overnight. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. No motorhome bays or facilities; pay for every bay you cover. Touring caravans on the tarmac only. Every other council car park in St Ives and Carbis Bay takes cars only or bans motorhomes and campers 11pm–8am, as does Lelant Saltings. St Ives Rugby Club's park-and-ride field bans overnight sleeping, park4night reviewers say. Pay station, JustPark location 8414",
    verified: "2026-09-15",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "harbour-hotel-st-ives",
    name: "Harbour Hotel St Ives",
    kind: "stay",
    // Centre of OSM way 436526173, "St Ives Harbour Hotel". The TR26 2BN
    // postcode centroid, which the owner gives, is 15 m north.
    lat: 50.20785, lon: -5.47811,
    address: "The Terrace, St Ives, TR26 2BN",
    phone: "01736 795221",
    email: "stives@harbourhotels.co.uk",
    url: "https://www.harbourhotels.co.uk/our-hotels/cornwall/harbour-hotel-st-ives/faqs",
    notes: "Victorian hotel above Porthminster Beach, two minutes' walk from St Ives station. Harbour Kitchen, Bar & Terrace; HarSPA with indoor pool, hydrotherapy pool, steam room, sauna and gym, free to hotel guests. Family rooms with a connected second bedroom. Not accessible, though some rooms with walk-in showers are reached by lift. No air conditioning. Check-in from 3pm, ring if arriving after 10pm; out by 11am. Limited residents' parking, first come first served, £10 a night",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Specific rooms only; ask the reservations team. £20 per dog a night. On a lead on the terrace and in the bar; not in the restaurant or other public areas",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "pedn-olva",
    name: "Pedn Olva",
    kind: "stay",
    // Centre of OSM way 1556764502. The TR26 2EA postcode centroid, which the
    // owner gives, is 75 m north-west.
    lat: 50.21080, lon: -5.47743,
    address: "Porthminster Beach, St Ives, TR26 2EA",
    phone: "01736 796222",
    email: "pednolva@staustellbrewery.co.uk",
    url: "https://www.pednolva.co.uk/our-rooms/",
    // The Station car park's ban from its council page.
    notes: "St Austell Brewery hotel on granite rocks above Porthminster Beach, looking over the harbour and bay; refreshed rooms, bar and restaurant. Cosy cabin, cosy, standard and view doubles, twins, family rooms sleeping three, and a deluxe suite, all en suite; breakfast included. Four floors, hard going with limited mobility. Open 8am–11pm, to midnight Friday and Saturday; food 8–11am and noon–9.30pm. Check-in from 3pm, out by 10am. Parking for 14 rooms, £15 a day, in reserved bays in the Station long-stay car park, which bans motorhomes and campers 11pm–8am. Reservations also on 0345 241 1133",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay, with a welcome pack. On a lead in public areas and never left alone in the room; not in the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "lifeboat-inn-st-ives",
    name: "Lifeboat Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 10800409478. The TR26 1LF postcode centroid, which the owner
    // gives, is 16 m north.
    lat: 50.21328, lon: -5.47990,
    address: "Wharf Road, St Ives, TR26 1LF",
    phone: "01736 794123",
    email: "lifeboat@staustellbrewery.co.uk",
    url: "https://www.lifeboatinnstives.co.uk/our-rooms/",
    notes: "St Austell Brewery pub beside the lifeboat house on St Ives harbour, with a log fire and harbour views. Five rooms, standard and view doubles and twins and a view family room, on the first and second floors up narrow, steep stairs; two self-catering apartments too. Breakfast included, 9–10am. No extra beds or cots. Check-in 3–10pm at the bar, out by 11am. Open 8.30am–11pm, Sunday to 10.30pm. No car park; the owner says nearby car parks charge about £10 for 24 hours. Reservations also on 0345 241 1133",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay. On a lead in public areas and never left alone in the room; everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "sloop-inn",
    name: "The Sloop Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 651240378. The TR26 1LP postcode centroid, which the
    // owner gives, is 16 m south-west.
    lat: 50.21518, lon: -5.47915,
    address: "The Wharf, St Ives, TR26 1LP",
    phone: "01736 796584",
    email: "info@sloop-inn.co.uk",
    url: "https://sloop-inn.co.uk/our-rooms/",
    notes: "One of Cornwall's oldest inns, believed to date from around 1312, on the harbour front at St Ives. Twenty rooms: doubles and twins above the pub, some with sea views, studio rooms along from the pub, rooms in Park House, and fishermen's cottages behind. Pub, the Captain's Table restaurant with 15% off for staying guests, and the Upper Deck terrace; breakfast menu. Open 9am–11pm, to midnight Friday and Saturday. Book direct online",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, among them the Bosun's and Lower Deck studios and the Courtyard king room. £10 per pet a night, not in the online price: contact the inn",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-vicarage-st-ives",
    name: "The Old Vicarage",
    kind: "stay",
    // Centre of OSM way 230746446. The TR26 2ES postcode centroid, which the
    // owner gives, is 185 m east.
    lat: 50.20842, lon: -5.49525,
    address: "Parc-an-Creet, St Ives, TR26 2ES",
    phone: "01736 796124",
    email: "stay@oldvicarage.com",
    url: "https://www.oldvicarage.com/faq.php",
    notes: "Four-star guest house in a Victorian former rectory in wooded grounds, in a quiet residential area on the western edge of St Ives near the Leach Pottery; just over half a mile to the town centre and beaches, uphill on the way back. All rooms en suite, on the upper floor; no lift, no sea views. Licensed bar. Breakfast 8.30–9.30am, ordered the night before, or room only. Free parking in the grounds. Children five and over. Book online; deposit of one night's rate for two, non-refundable. Arrivals from 1pm, out by 10am. A summer shuttle bus runs from the Rugby Club next door to Porthmeor Beach",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      // True October to April only, so neither true nor false all year.
      dogs: null,
      dogs_note: "October to April only, the quieter months; a small charge per dog a night. Owners fully responsible for their dogs",
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
    },
  },
];
