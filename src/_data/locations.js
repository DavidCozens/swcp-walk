// Every place the site knows about, in one list.
//
// Endpoints, escape points and places to stay were three different shapes
// answering the same questions — where is it, what's it called, how far along
// the route, how do I drive there. They're now one record with a `kind`, and
// only what differs sits in a nested block.
//
//   slug, name, kind          kind: endpoint | escape | stay | poi | stop
//   lat, lon                  every location has a position; distances and
//                             map pins are computed, never typed
//   address, url, phone,      optional, and meaningful for any kind
//   email, notes, maps_url,
//   verified
//   stay: { ... }             only for kind "stay"   — see locations/stays.js
//   escape: { detail }        only for kind "escape" — see locations/escapes.js
//
// Sources are split by kind so the files stay editable as this grows; they're
// merged here because a transport leg will want to reference any location by
// slug without caring which file it came from.
import endpoints from "../../lib/locations/endpoints.js";
import escapes from "../../lib/locations/escapes.js";
import stays from "../../lib/locations/stays.js";

const all = [...endpoints, ...escapes, ...stays];

// Slugs are the reference from sections and, later, from transport legs. A
// duplicate would silently shadow; fail the build instead.
const seen = new Set();
for (const loc of all) {
  if (seen.has(loc.slug)) {
    throw new Error(`Duplicate location slug "${loc.slug}" — slugs must be unique across all location files.`);
  }
  seen.add(loc.slug);
}

export default all;
