// Where sections begin and end. A section references these by slug, so the end
// of one section and the start of the next are the same record rather than the
// same words typed twice — and `npm run validate` can check the GPX really
// does start where the section claims.
export default [
  {
    slug: "minehead",
    name: "Minehead",
    kind: "endpoint",
    lat: 51.21104, lon: -3.47360,
    notes: "The official start of the path, on the seafront",
  },
  {
    slug: "porlock-weir",
    name: "Porlock Weir",
    kind: "endpoint",
    lat: 51.21911, lon: -3.62809,
    notes: "Small harbour; pebble beach, pub and a public car park",
  },
  {
    slug: "lynmouth",
    name: "Lynmouth",
    kind: "endpoint",
    lat: 51.23080, lon: -3.83058,
    notes: "Harbour village at the foot of the cliff railway up to Lynton",
  },
];
