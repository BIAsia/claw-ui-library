export type AgentStyleSpec = {
  slug: string;
  caseSlug: string;
  code: "003" | "004" | "005";
  name: string;
  category: string;
  intent: string;
  fitForAgents: string;
  visualRules: string[];
  componentRules: string[];
  pageConstraints: string[];
  avoid: string[];
  promptSeed: string;
  evalTask: string;
};

export const agentStyleSpecs: AgentStyleSpec[] = [
  {
    slug: "003-julie-doucet",
    caseSlug: "case-003-julie-doucet",
    code: "003",
    name: "Julie Doucet / Emil Ferris",
    category: "Illustrated editorial chaos",
    intent:
      "A highly opinionated collage-like visual language for expressive storytelling, weird cultural interfaces, and anti-corporate narrative surfaces.",
    fitForAgents:
      "Useful when an agent needs to generate something unmistakably authored instead of clean/productized UI. Strong stylistic bias, low ambiguity.",
    visualRules: [
      "Off-white paper background with warm reds and hand-drawn pink accent shapes.",
      "Heavy condensed uppercase display type contrasted with smaller informational sans text.",
      "Asymmetric composition, overlapping illustrated forms, visible personality over neat alignment.",
      "Feels printed, authored, slightly chaotic, and intentionally imperfect.",
    ],
    componentRules: [
      "Prefer poster blocks, captions, labels, notes, stickers, callouts over standard SaaS cards.",
      "Text can bend around composition; hierarchy comes from scale and placement rather than containers.",
      "Interactive affordances should feel embedded into the artwork, not detached UI chrome.",
    ],
    pageConstraints: [
      "Works best for one strong story surface at a time: manifesto, feature editorial, culture page, launch note.",
      "Do not turn it into a dashboard or dense settings surface.",
      "Preserve breathing room for large shapes and diagonals; avoid uniform grids.",
    ],
    avoid: [
      "Rounded SaaS cards",
      "Blue/purple AI gradients",
      "Center-aligned hero templates",
      "Over-clean component spacing",
    ],
    promptSeed:
      "Use an illustrated editorial collage style with warm paper tones, condensed red headlines, hand-drawn pink callout shapes, asymmetry, and authored print energy. Avoid generic product UI and keep the composition expressive.",
    evalTask:
      "Generate a one-page interface for an AI agent that summarizes a difficult research topic for humans in an authored, surprising, editorial voice.",
  },
  {
    slug: "004-boookin-shop",
    caseSlug: "case-004-boookin-shop",
    code: "004",
    name: "Booookin Shop Grid",
    category: "Structured catalog grid",
    intent:
      "A disciplined merchandising-style layout system for presenting many equally important items with strong scanability and light visual framing.",
    fitForAgents:
      "Useful when an agent needs a stable display format for selectable outputs, assets, prompt packs, or style candidates without over-explaining each item.",
    visualRules: [
      "Strict grid-first layout with consistent item rhythm and restrained typography.",
      "Editorial retail energy: image-led, object-led, browsable.",
      "Low decoration, clear separation, high scan speed.",
      "Hierarchy comes from grouping and repetition, not dramatic hero sections.",
    ],
    componentRules: [
      "Cards should behave like catalog entries, not marketing panels.",
      "Meta text stays compact and quiet; thumbnails carry the first impression.",
      "Use filters, sort controls, grouping headers, and inventory-like labels naturally.",
    ],
    pageConstraints: [
      "Best for collections, style pickers, references, prompt libraries, and agent-selectable packs.",
      "Do not overload each item with long descriptions or too many actions.",
      "Keep page logic listable and predictable; users should scan before reading.",
    ],
    avoid: [
      "Big splash hero sections",
      "Oversized metrics",
      "Nested cards inside cards",
      "Excess animation or decorative chrome",
    ],
    promptSeed:
      "Use a precise editorial catalog grid with restrained typography, consistent image modules, compact metadata, and strong browseability. Prioritize scanning and selection over storytelling.",
    evalTask:
      "Generate an AI-agent-facing library where the agent can choose between multiple style packs and prompt recipes quickly and confidently.",
  },
  {
    slug: "005-self-esteem-editorial",
    caseSlug: "case-005-self-esteem-editorial",
    code: "005",
    name: "Self Esteem Editorial",
    category: "Narrative magazine layout",
    intent:
      "A refined editorial system for long-form storytelling, layered visual pacing, and serious cultural or conceptual presentation.",
    fitForAgents:
      "Useful when an agent needs to present a result with narrative sequence, section pacing, and a stronger sense of human-readable publication quality.",
    visualRules: [
      "Magazine-like pacing with strong section rhythm and typographic contrast.",
      "Image and text carry equal weight; layout alternates between immersion and structure.",
      "Feels curated, thoughtful, and culturally aware rather than utilitarian.",
      "Whitespace and crop decisions matter more than UI ornament.",
    ],
    componentRules: [
      "Use chapter-like sections, pull quotes, feature blocks, supporting captions, and structured copy modules.",
      "Interactions should remain understated and publication-like.",
      "Navigation should feel like moving through an editorial artifact, not app chrome.",
    ],
    pageConstraints: [
      "Best for reports, explainers, curated outputs, deep-dive summaries, and guided presentation of agent work.",
      "Do not compress into tiny cards or dashboard widgets.",
      "Needs deliberate rhythm; avoid filling every space with controls.",
    ],
    avoid: [
      "Dense admin tables",
      "Product-led conversion sections",
      "Loud UI badges everywhere",
      "Mechanical spacing with no pacing",
    ],
    promptSeed:
      "Use a refined editorial magazine system with section rhythm, strong typography, thoughtful image-text balance, and understated interaction. Prioritize narrative pacing and publication quality.",
    evalTask:
      "Generate a long-form AI-generated briefing page that explains a complex design system decision to a human stakeholder with clarity and editorial polish.",
  },
];

export function getAgentStyleSpecs() {
  return agentStyleSpecs;
}

export function getAgentStyleSpec(slug: string) {
  return agentStyleSpecs.find((item) => item.slug === slug);
}
