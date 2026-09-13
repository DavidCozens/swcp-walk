// Things worth stopping for. Matched like everything else — by position, near
// the route — so a section picks up whatever it passes.
//
// `poi.type` groups them — ancient, viewpoint, monument, church, lighthouse,
// nature, machine. All share one colour; the glyph says what sort of thing it
// is, the colour says it's worth stopping for.
//
// Kept to things you'd actually divert for: all of these are within 750 m of
// the path, most within 250 m. A landmark you can't reach on the day isn't a
// point of interest, it's trivia.
export default [
  {
    slug: "swcp-start-sculpture",
    poi: { type: "monument" },
    name: "South West Coast Path start marker",
    kind: "poi",
    lat: 51.21103, lon: -3.47369,
    address: "Minehead seafront",
    notes: "Mile zero. A pair of hands holding a map — the official start of all 630 miles",
    verified: null,
  },
  {
    slug: "furzebury-brake",
    poi: { type: "ancient" },
    name: "Furzebury Brake",
    kind: "poi",
    lat: 51.22393, lon: -3.52522,
    notes: "Archaeological site up on North Hill, a little above the path",
    verified: null,
  },
  {
    slug: "hurlstone-point",
    poi: { type: "viewpoint" },
    name: "Hurlstone Point",
    kind: "poi",
    lat: 51.23254, lon: -3.57934,
    notes: "The corner where the coast turns away west, looking back over Porlock Bay",
    verified: null,
  },
  {
    slug: "bossington-hill",
    poi: { type: "viewpoint" },
    name: "Bossington Hill",
    kind: "poi",
    lat: 51.22471, lon: -3.57197,
    notes: "Viewpoint over Porlock Vale and the bay",
    verified: null,
  },
  {
    slug: "liberator-monument",
    poi: { type: "monument" },
    name: "Liberator Monument",
    kind: "poi",
    lat: 51.21724, lon: -3.60250,
    notes: "Memorial to a wartime aircraft crash, right beside the path. What it commemorates needs checking on the ground",
    verified: null,
  },
  {
    slug: "culbone-church",
    poi: { type: "church" },
    name: "Culbone Church (St Beuno's)",
    kind: "poi",
    lat: 51.22143, lon: -3.65933,
    notes: "Said to be the smallest complete parish church in England — 35 feet long, seats 33, in the Domesday Book and almost certainly pre-Norman. No road reaches it; you can only arrive on foot, which is what makes passing it on the path worth the detour",
    verified: null,
  },
  {
    slug: "old-burrow-roman-fort",
    poi: { type: "ancient" },
    name: "Old Burrow Roman Fort",
    kind: "poi",
    lat: 51.23039, lon: -3.73721,
    notes: "A Roman fortlet on the moor above the path, set here to watch the Bristol Channel. About as remote as Roman Britain gets",
    verified: null,
  },
  {
    slug: "foreland-lighthouse",
    poi: { type: "lighthouse" },
    name: "Lynmouth Foreland Lighthouse",
    kind: "poi",
    lat: 51.24553, lon: -3.78660,
    notes: "Out on the Foreland, below the path — the most northerly point in Devon",
    verified: null,
  },
  {
    slug: "glen-lyn-gorge",
    poi: { type: "nature" },
    name: "Glen Lyn Gorge",
    kind: "poi",
    lat: 51.22919, lon: -3.82940,
    address: "Lynmouth",
    notes: "The gorge behind Lynmouth. The 1952 flood came down these rivers and destroyed much of the village",
    verified: null,
  },
  {
    slug: "cliff-railway",
    poi: { type: "machine" },
    name: "Lynton & Lynmouth Cliff Railway",
    kind: "poi",
    lat: 51.23147, lon: -3.83392,
    url: "https://www.cliffrailwaylynton.co.uk/",
    notes: "Opened 1890 and still entirely water-powered — the highest and steepest fully water-powered railway in the world. 862 feet of track, 500 feet of lift. Also the painless way up to Lynton if you're staying there",
    verified: null,
  },
];
