// Getting to and from a section.
//
// Three things, not one:
//   providers  an operator's contact details, entered once
//   routes     a service and the set of locations it calls at
//   (legs)     to come: taxi, walk, baggage transfer — whatever a scheduled
//              route can't express
//
// Because a route names locations by slug, a section derives its options
// instead of restating them: any route calling at two of the places a section
// touches is offered on that section. Enter the coast bus once and it appears
// wherever it's relevant.
import providers from "../../lib/transport/providers.js";
import routes from "../../lib/transport/routes.js";

export default { providers, routes };
