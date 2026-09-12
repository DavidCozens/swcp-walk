// Everything in this folder is a "section": it gets the section layout,
// joins the `sections` collection, and lives under /sections/<slug>/.
export default {
  layout: "layouts/section.njk",
  tags: ["section"],
  permalink: "/sections/{{ page.fileSlug }}/",
};
