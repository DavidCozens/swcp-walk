// A service and the locations it calls at.
//
// `serves` is a set of location slugs, not an ordered list: it answers "can I
// get from here to there on one service", which is the question a section
// actually asks. Direction and journey time would need ordering and a great
// deal more maintenance.
//
// `season` sits on the route rather than the provider — an operator can run
// year-round while one particular service is summer-only, which is exactly the
// case here.
//
// A caution learned the hard way: bus service pages move. The bustimes.org URL
// for this service, captured from a search result, already redirects to the
// operator's page because the service slug changed. Treat `url` as a fact with
// a date on it, like anything else carrying `verified`.
export default [
  {
    slug: "exmoor-coaster-300",
    number: "300",
    name: "Exmoor Coaster",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["minehead", "porlock", "county-gate", "countisbury", "lynmouth"],
    // Reported as 23 May – 31 Aug 2026, three a day, seven days a week. Unlike
    // a campsite's season this is set afresh each year, so it needs rechecking
    // annually rather than assumed to recur.
    season: { from: "05-23", to: "08-31" },
    frequency: "About three a day in season",
    url: "https://bustimes.org/operators/buses-of-somerset",
    notes: "Runs the coast road over Porlock Hill, calling at County Gate and Countisbury — the two escape points on section 2",
    verified: null,
  },
  {
    slug: "service-10",
    number: "10",
    name: "Minehead – Porlock – Porlock Weir",
    type: "bus",
    provider: "atwest",
    serves: ["minehead", "porlock", "porlock-weir"],
    // Unknown whether it runs year-round; null rather than a guess.
    season: null,
    frequency: null,
    url: null,
    notes: "The local link that reaches Porlock Weir itself, which the coast bus does not",
    verified: null,
  },
  {
    slug: "yealm-ferry",
    number: "Ferry",
    name: "Yealm ferry",
    type: "ferry",
    provider: "ycet",
    serves: ["yealm-wembury", "yealm-noss-mayo"],
    // The operator's site gives the 2026 season as ending 30 Sep, core hours
    // 10am–4pm. A directory says it starts in April, which the operator
    // doesn't confirm — so null until it does.
    season: null,
    frequency: null,
    url: "https://www.ycet.co.uk/",
    notes: "Core hours 10am–4pm, cut back in bad weather and quiet spells. Ring before relying on it",
    verified: null,
  },
];
