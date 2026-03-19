export const case012StyleFamily = {
  slug: "worth-saving-chips",
  name: "Worth Saving File Chips",
  tagline: "A compact saveboard grammar for references, file fragments, and curated snippets that stay lightweight under heavy quantity.",
  summary:
    "Case 012 is strongest when translated into a saveboard utility: a curation surface built from chip-scale file objects, tiny metadata fragments, and visible grouping logic. The family should preserve a selective, editorial feeling so the page reads as a smart locker for things worth revisiting rather than as cloud storage or a feed.",
  positioning:
    "Case 012 works best as a curated save surface: a dense but controlled board for references, screenshots, quotes, links, and PDFs where chip objects, tag rows, and lightweight resurfacing matter more than document previews.",
  fixedConstraints: [
    "Chip-scale objects must dominate the interface; large preview cards should stay secondary or absent.",
    "The composition must handle many saved objects comfortably without becoming a drive or inbox UI.",
    "Metadata stays compressed into tiny fragments like source, type, date, owner, or project thread.",
    "Grouping and filtering need to feel effortless through clusters, shelves, or tag-led sections.",
    "The tone must feel curated and selective rather than administrative or enterprise-heavy.",
  ],
  desiredSignals: [
    "The page reads immediately as a saveboard or creative locker, not generic file management.",
    "High item count feels intentional, sortable, and calm.",
    "Users can imagine triaging and resurfacing useful fragments in seconds.",
  ],
} as const;

export const case012StyleFamilyRoutes = [
  {
    concept: "Saveboard",
    slug: "saveboard",
    route: "/agent-probe/worth-saving-chips/saveboard",
    title: "Worth Saving File Chips / Saveboard",
    frame: "curated file-chip collection utility",
  },
] as const;
