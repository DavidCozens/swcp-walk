// Food, drink and supplies.
//
// The selection problem: there are over a hundred cafés, pubs and shops within
// reach of these first two sections, and almost all of them are in Minehead or
// Lynmouth where you don't need telling. What matters is the isolated ones —
// Kitnors at Bossington has nothing within a mile and a half of it.
//
// So sections rank these by *isolation* (how far to the next food stop) rather
// than by distance from the route, and show the most isolated few. Town
// clusters sort themselves to the bottom; a lone tea room on a headland rises
// to the top. Record generously on remote stretches and sparingly in towns.
//
//   food: { type: "cafe" | "pub" | "restaurant" }
//   shop: { type: "convenience" | "supermarket" | "butcher" | "bakery" }
//
// A pub that also has rooms carries both a `stay` and a `food` block — the
// Bottom Ship and the Blue Ball are both, and appear in both lists.
export default [
  {
    slug: "kitnors",
    name: "Kitnors Tea Room",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.22002, lon: -3.57943,
    address: "Bossington",
    notes: "On the path at Bossington, with nothing else for a mile and a half either side",
    verified: null,
  },
  {
    slug: "porlock-weir-cafe",
    name: "The Cafe, Porlock Weir",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.21832, lon: -3.62703,
    address: "Porlock Weir",
    verified: null,
  },
  {
    slug: "millers-porlock-weir",
    name: "Millers at the Anchor",
    kind: "food",
    food: { type: "restaurant" },
    lat: 51.21885, lon: -3.62774,
    address: "Porlock Weir",
    verified: null,
  },
  {
    slug: "harbour-house-coffee",
    name: "Harbour House Coffee Shop",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.21923, lon: -3.62813,
    address: "Porlock Weir",
    verified: null,
  },
  {
    slug: "harbour-stores",
    name: "Harbour Stores",
    kind: "shop",
    shop: { type: "convenience" },
    lat: 51.21920, lon: -3.62818,
    address: "Porlock Weir",
    notes: "Effectively on the path at the Weir — the only supplies between Minehead and Porlock village",
    verified: null,
  },
  {
    slug: "corner-house-stores",
    name: "Corner House Stores",
    kind: "shop",
    shop: { type: "convenience" },
    lat: 51.20190, lon: -3.48102,
    address: "Minehead",
    verified: null,
  },
  {
    slug: "stuart-lowen-butchers",
    name: "Stuart Lowen Butchers",
    kind: "shop",
    shop: { type: "butcher" },
    lat: 51.20189, lon: -3.46510,
    address: "Alcombe, Minehead",
    verified: null,
  },
  {
    slug: "whortleberry-tearoom",
    name: "Whortleberry Tearoom",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.20900, lon: -3.59771,
    address: "Porlock",
    verified: null,
  },
  {
    slug: "lyndale-tea-rooms",
    name: "Lyndale Tea Rooms",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.22950, lon: -3.82863,
    address: "Lynmouth",
    verified: null,
  },
  {
    slug: "lynmouth-bay-cafe",
    name: "Lynmouth Bay Café",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.23019, lon: -3.83011,
    address: "Lynmouth",
    verified: null,
  },
  {
    slug: "cliff-top-cafe",
    name: "Cliff Top Cafe",
    kind: "food",
    food: { type: "cafe" },
    lat: 51.23123, lon: -3.83535,
    address: "Lynton, by the cliff railway",
    verified: null,
  },
];
