export const case020StyleFamily = {
  slug: "radinal-pixel-font",
  name: "Radinal Pixel Font Poster",
  tagline: "A bitmap announcement language for code-art drops, game-jam bulletins, and digital-publication posters.",
  summary:
    "Case 020 is strongest when treated as a public digital artifact: a bold pixel-type poster where chunky bitmap letters, snapped spacing, and hard contrast carry the entire announcement. The family should preserve the low-resolution declaration energy of the source while translating it into real release posters for code culture, tiny software editions, and internet-native events.",
  positioning:
    "Case 020 works best as a digital-publication poster: a concise, public-facing announcement sheet for software-art launches, pixel festivals, and code-poetry drops rather than a smooth product landing page.",
  fixedConstraints: [
    "Pixel or bitmap typography must dominate the identity rather than appearing as a decorative accent.",
    "Spacing, blocks, and alignment should feel discrete, snapped, and poster-like instead of fluid modern minimalism.",
    "Content must stay concise and announcement-shaped: title, edition, date, host, subtitle, and short supporting lines.",
    "Contrast must stay bold so the page still feels like a designed digital artifact that could be printed or shared as a poster.",
  ],
  desiredSignals: [
    "The first read is typographic digital poster, not landing page or app shell.",
    "Bitmap letterforms are doing the majority of the expressive work.",
    "The concept feels native to code, games, or experimental internet culture.",
  ],
} as const;

export const case020StyleFamilyRoutes = [
  {
    concept: "Digital Dispatch",
    slug: "digital-dispatch",
    route: "/agent-probe/radinal-pixel-font/digital-dispatch",
    title: "Radinal Pixel Font Poster / Digital Dispatch",
    frame: "pixel typography publication",
  },
] as const;
