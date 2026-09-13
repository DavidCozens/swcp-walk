// Operators, entered once and referenced by routes. A phone number that's true
// for twenty sections belongs in one record, not twenty.
export default [
  {
    slug: "stagecoach-south-west",
    name: "Stagecoach South West",
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
    url: null,
    phone: null,
    notes: "Community transport operator around Minehead and Porlock",
    verified: null,
  },
];
