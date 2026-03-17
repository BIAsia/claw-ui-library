"use client";

import { useState } from "react";
import { Instrument_Sans, League_Spartan } from "next/font/google";
import { case001StrokePaths } from "@/components/cases/case-001-beginning.paths";

const displayFace = League_Spartan({
  subsets: ["latin"],
  variable: "--font-case-001-display",
  weight: ["700", "800"],
});

const uiFace = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-case-001-ui",
  weight: ["400", "500", "600", "700"],
});

type Point = readonly [number, number];

type PointerState = {
  x: number;
  y: number;
};

type PhraseBlockProps = {
  className?: string;
  emphasis?: "none" | "last";
  align?: "left" | "center";
};

type OutlineBlobProps = {
  points: Point[];
};

type LayerNote = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  bullets: string[];
  badge: string;
};

const navigation = [
  { label: "Poster memory", href: "#hero" },
  { label: "Layer notes", href: "#notes" },
  { label: "Working parts", href: "#parts" },
  { label: "Footer ritual", href: "#footer" },
] as const;

const layerNotes: LayerNote[] = [
  {
    id: "origin",
    title: "The beginning becomes a live landing surface.",
    kicker: "01 / origin",
    body:
      "The repeated phrase stays as true text nodes inside the interface, so the composition can breathe, wrap, and obscure itself without collapsing into a static poster export.",
    bullets: ["DOM headline clusters", "vector scribble masks", "cursor depth kept gentle"],
    badge: "live text",
  },
  {
    id: "memory",
    title: "Occlusion is handled as a web layer, not a baked foreground image.",
    kicker: "02 / memory",
    body:
      "Black filled forms sit above the copy like movable UI curtains. Their white traced edges keep the feral hand-drawn energy from the reference while preserving editable content underneath.",
    bullets: ["mask-like fills", "editable outlines", "true stacking order"],
    badge: "occlusion",
  },
  {
    id: "ritual",
    title: "The site adds hierarchy around the poster logic.",
    kicker: "03 / ritual",
    body:
      "A utility bar, live note rail, working-part cards, and footer actions turn the composition into a complete editorial webpage rather than a poster framed inside one.",
    bullets: ["issue bar", "note rail", "content modules"],
    badge: "site mode",
  },
];

const workingParts = [
  {
    title: "Headline field",
    text: "Seven repeated phrase groups echo the original rhythm, but each remains semantic text that can reflow on smaller screens.",
  },
  {
    title: "Scribble cover",
    text: "The central black forms are rebuilt as SVG layers with white traced strokes, so the obscuring gesture stays controllable and crisp.",
  },
  {
    title: "Sticker system",
    text: "Rosette badges, route chips, and the crossed-eye smiley keep the playful print-language alive inside a stricter product shell.",
  },
];

const footerChecks = [
  "black / warm white palette only",
  "reference phrasing preserved",
  "poster energy translated into a site",
  "route architecture unchanged",
] as const;

const topBlob: Point[] = [
  [76, 36],
  [92, 18],
  [110, 45],
  [126, 20],
  [146, 50],
  [166, 24],
  [183, 60],
  [202, 30],
  [224, 74],
  [245, 33],
  [267, 93],
  [289, 41],
  [306, 108],
  [338, 66],
  [365, 111],
  [345, 128],
  [360, 146],
  [332, 153],
  [319, 176],
  [289, 166],
  [270, 193],
  [240, 183],
  [214, 196],
  [186, 181],
  [154, 181],
  [128, 159],
  [96, 162],
  [74, 140],
  [81, 112],
  [67, 89],
  [77, 64],
];

const leftRosette: Point[] = [
  [20, 244],
  [28, 216],
  [47, 197],
  [74, 189],
  [100, 193],
  [124, 206],
  [139, 226],
  [139, 253],
  [127, 279],
  [105, 296],
  [78, 301],
  [50, 294],
  [28, 277],
  [18, 252],
];

const heroBlob: Point[] = [
  [208, 154],
  [246, 142],
  [293, 140],
  [343, 137],
  [396, 141],
  [447, 149],
  [497, 162],
  [542, 176],
  [580, 196],
  [607, 225],
  [619, 260],
  [615, 295],
  [624, 327],
  [613, 351],
  [584, 368],
  [546, 374],
  [504, 376],
  [463, 372],
  [423, 377],
  [382, 375],
  [340, 378],
  [300, 381],
  [261, 380],
  [225, 371],
  [194, 352],
  [175, 321],
  [174, 286],
  [164, 255],
  [170, 224],
  [185, 198],
  [198, 173],
];

const lowerBloom: Point[] = [
  [95, 409],
  [123, 392],
  [162, 405],
  [196, 387],
  [231, 399],
  [257, 378],
  [282, 397],
  [296, 369],
  [317, 403],
  [341, 372],
  [355, 413],
  [384, 389],
  [390, 432],
  [422, 416],
  [413, 452],
  [449, 452],
  [432, 483],
  [467, 498],
  [439, 525],
  [470, 549],
  [434, 561],
  [451, 594],
  [416, 592],
  [412, 630],
  [376, 618],
  [360, 655],
  [327, 626],
  [307, 664],
  [280, 627],
  [250, 660],
  [231, 621],
  [196, 648],
  [187, 607],
  [153, 626],
  [155, 587],
  [119, 591],
  [137, 555],
  [103, 535],
  [132, 507],
  [100, 478],
  [139, 461],
  [110, 432],
];

const lowerRightSticker: Point[] = [
  [498, 666],
  [518, 655],
  [542, 660],
  [563, 655],
  [580, 667],
  [585, 688],
  [594, 708],
  [590, 731],
  [597, 753],
  [590, 774],
  [575, 791],
  [554, 799],
  [538, 814],
  [516, 811],
  [500, 798],
  [494, 776],
  [499, 753],
  [491, 731],
  [497, 706],
  [491, 685],
];

function createSplinePath(points: Point[], closed = false, tension = 0.9) {
  if (points.length < 2) return "";

  const getPoint = (index: number) => {
    if (closed) return points[(index + points.length) % points.length];
    if (index < 0) return points[0];
    if (index >= points.length) return points[points.length - 1];
    return points[index];
  };

  let path = `M ${points[0][0]} ${points[0][1]}`;
  const lastIndex = closed ? points.length : points.length - 1;

  for (let index = 0; index < lastIndex; index += 1) {
    const current = getPoint(index);
    const next = getPoint(index + 1);
    const previous = getPoint(index - 1);
    const nextNext = getPoint(index + 2);

    const cp1x = current[0] + ((next[0] - previous[0]) / 6) * tension;
    const cp1y = current[1] + ((next[1] - previous[1]) / 6) * tension;
    const cp2x = next[0] - ((nextNext[0] - current[0]) / 6) * tension;
    const cp2y = next[1] - ((nextNext[1] - current[1]) / 6) * tension;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next[0]} ${next[1]}`;
  }

  return closed ? `${path} Z` : path;
}

function PhraseBlock({ className = "", emphasis = "none", align = "left" }: PhraseBlockProps) {
  const lines = ["always", "remember", "the", "beginning"];

  return (
    <div
      className={`leading-[0.88] tracking-[-0.08em] text-[#f3efe8] ${align === "center" ? "text-center" : "text-left"} ${className}`}
      style={{ fontFamily: "var(--font-case-001-display)" }}
    >
      {lines.map((line, index) => {
        const highlighted = emphasis === "last" && index === lines.length - 1;

        return (
          <div
            key={`${line}-${index}`}
            className={highlighted ? "text-[1.12em] capitalize" : "lowercase"}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
}

function OutlineBlob({ points }: OutlineBlobProps) {
  return <path d={createSplinePath(points, true)} fill="#050505" />;
}

function ScribbleCover({ pointer, activeIndex }: { pointer: PointerState; activeIndex: number }) {
  const driftX = (pointer.x - 0.5) * 20;
  const driftY = (pointer.y - 0.5) * 18;
  const accentShift = activeIndex * 6;

  return (
    <svg
      viewBox="0 0 636 899"
      className="absolute inset-0 h-full w-full"
      aria-hidden
      preserveAspectRatio="none"
    >
      <g transform={`translate(${driftX * -0.35} ${driftY * -0.3})`}>
        <OutlineBlob points={topBlob} />
        <OutlineBlob points={leftRosette} />
        <OutlineBlob points={heroBlob} />
        <OutlineBlob points={lowerBloom} />
        <OutlineBlob points={lowerRightSticker} />
      </g>

      <g
        fill="#f3efe8"
        fillRule="evenodd"
        transform={`translate(${driftX * 0.8} ${driftY * 0.75}) rotate(${(pointer.x - 0.5) * 2.4} 318 450)`}
      >
        <path d={case001StrokePaths.primary} />
        <path d={case001StrokePaths.lowerLeft} />
        <path d={case001StrokePaths.upperRight} />
        <path d={case001StrokePaths.midRight} />
        <path d={case001StrokePaths.rosette} />
        <path d={case001StrokePaths.lowerRightSticker} />
        <path d={case001StrokePaths.lowerTail} />
      </g>

      <g transform={`translate(${driftX * 0.45} ${driftY * 0.6})`}>
        <circle cx="478" cy="607" r="34" fill="#f3efe8" />
        <path
          d="M 465 617 C 473 625, 483 625, 492 617"
          fill="none"
          stroke="#111111"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path d="M 468 595 L 475 603 M 475 595 L 468 603" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 487 596 L 494 604 M 494 596 L 487 604" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" />
      </g>

      <g transform={`translate(${accentShift} ${-accentShift * 0.6})`} opacity="0.92">
        <path d={createSplinePath(leftRosette, true)} fill="none" stroke="#f3efe8" strokeWidth="4" strokeLinejoin="round" />
        <path d={createSplinePath(lowerRightSticker, true)} fill="none" stroke="#f3efe8" strokeWidth="4" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function HeroField({ pointer, activeIndex }: { pointer: PointerState; activeIndex: number }) {
  const glowX = `${pointer.x * 100}%`;
  const glowY = `${pointer.y * 100}%`;

  return (
    <div className="relative aspect-[636/899] min-h-[32rem] w-full overflow-hidden bg-[#050505] sm:min-h-[38rem] lg:min-h-[46rem] xl:min-h-[54rem]">
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(243,239,232,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,232,0.12)_1px,transparent_1px)] [background-size:68px_68px]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(243,239,232,0.12), transparent 18%), radial-gradient(circle at 50% 20%, rgba(243,239,232,0.05), transparent 24%)`,
        }}
      />

      <div className="absolute inset-0 z-10 text-[clamp(2.25rem,5.8vw,4.7rem)]">
        <PhraseBlock className="absolute left-[5.8%] top-[4.7%]" />
        <PhraseBlock className="absolute left-[67.6%] top-[4.7%]" />
        <PhraseBlock className="absolute left-[5.8%] top-[42.4%]" />
        <PhraseBlock className="absolute left-[72.4%] top-[43%]" emphasis="last" />
        <PhraseBlock className="absolute left-1/2 top-[61.2%] -translate-x-1/2" align="center" />
        <PhraseBlock className="absolute left-[5.8%] top-[82.8%]" />
        <PhraseBlock className="absolute left-[67.6%] top-[82.5%]" />
      </div>

      <div
        aria-hidden
        className="absolute left-[4%] top-[3%] z-30 rounded-full border border-[#f3efe8]/24 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/72"
      >
        beginning / issue 001
      </div>
      <div
        aria-hidden
        className="absolute bottom-[5.5%] left-[6%] z-30 rounded-full border border-[#f3efe8]/24 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/72"
      >
        {layerNotes[activeIndex].badge}
      </div>

      <ScribbleCover pointer={pointer} activeIndex={activeIndex} />
    </div>
  );
}

export function Case001Beginning() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0.5, y: 0.34 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main
      className={`${displayFace.variable} ${uiFace.variable} min-h-screen bg-[#050505] text-[#f3efe8]`}
      style={{ fontFamily: "var(--font-case-001-ui)" }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,#080808_0%,#050505_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-screen [background-image:radial-gradient(circle_at_1px_1px,rgba(243,239,232,0.75)_1px,transparent_0)] [background-size:14px_14px]" />

      <div className="relative mx-auto max-w-[1620px] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
        <div className="overflow-hidden border border-[#f3efe8]/12 bg-[#050505] shadow-[0_32px_120px_rgba(0,0,0,0.45)]">
          <header className="grid border-b border-[#f3efe8]/12 text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/56 md:grid-cols-[1.1fr_1fr_1fr_auto]">
            <div className="border-b border-[#f3efe8]/12 px-4 py-3 md:border-b-0 md:border-r lg:px-5">
              Case 001 / website mode
            </div>
            <div className="border-b border-[#f3efe8]/12 px-4 py-3 md:border-b-0 md:border-r lg:px-5">
              expressive memory / editable layers
            </div>
            <div className="border-b border-[#f3efe8]/12 px-4 py-3 md:border-b-0 md:border-r lg:px-5">
              black field / white trace / real text
            </div>
            <div className="px-4 py-3 text-right lg:px-5">/ui/case-001-beginning</div>
          </header>

          <section id="hero" className="grid lg:grid-cols-[240px_minmax(0,1fr)_320px] xl:grid-cols-[260px_minmax(0,1fr)_340px]">
            <aside className="border-b border-[#f3efe8]/12 px-4 py-5 lg:border-r lg:border-b-0 lg:px-5 lg:py-6">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/48">Issue rail</p>
                  <h1
                    className="mt-4 max-w-[8ch] text-[clamp(2.25rem,4vw,4.1rem)] leading-[0.86] tracking-[-0.09em] text-[#f3efe8]"
                    style={{ fontFamily: "var(--font-case-001-display)" }}
                  >
                    Always remember the beginning.
                  </h1>
                  <p className="mt-4 max-w-[22ch] text-[0.95rem] leading-[1.45] text-[#f3efe8]/72">
                    A poster-born composition rebuilt as a functioning editorial webpage, with real headlines, obscuring vector forms, and a calmer information hierarchy.
                  </p>
                </div>

                <nav aria-label="Case sections" className="space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between border-t border-[#f3efe8]/10 py-2.5 text-[0.62rem] uppercase tracking-[0.18em] text-[#f3efe8]/62 transition hover:text-[#f3efe8]"
                    >
                      <span>{item.label}</span>
                      <span className="transition group-hover:translate-x-1">↗</span>
                    </a>
                  ))}
                </nav>

                <div className="space-y-3 border-t border-[#f3efe8]/10 pt-4 text-[0.62rem] uppercase tracking-[0.18em] text-[#f3efe8]/52">
                  <div className="flex items-center justify-between gap-3">
                    <span>Reference mode</span>
                    <span>Poster → Site</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Type treatment</span>
                    <span>Live DOM</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Motion</span>
                    <span>Mouse drift</span>
                  </div>
                </div>
              </div>
            </aside>

            <section
              className="relative border-b border-[#f3efe8]/12 lg:border-r lg:border-b-0"
              onPointerMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setPointer({
                  x: (event.clientX - rect.left) / rect.width,
                  y: (event.clientY - rect.top) / rect.height,
                });
              }}
              onPointerLeave={() => setPointer({ x: 0.5, y: 0.34 })}
            >
              <HeroField pointer={pointer} activeIndex={activeIndex} />
            </section>

            <aside className="px-4 py-5 lg:px-5 lg:py-6">
              <div className="flex h-full flex-col gap-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/48">Live note rail</p>
                    <span className="rounded-full border border-[#f3efe8]/12 px-2.5 py-1 text-[0.54rem] uppercase tracking-[0.18em] text-[#f3efe8]/72">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {layerNotes.map((item, index) => {
                      const active = index === activeIndex;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() => setActiveIndex(index)}
                          onFocus={() => setActiveIndex(index)}
                          onClick={() => setActiveIndex(index)}
                          className={`w-full border p-3 text-left transition duration-300 ${
                            active
                              ? "border-[#f3efe8]/28 bg-[#0d0d0d] text-[#f3efe8]"
                              : "border-[#f3efe8]/10 bg-transparent text-[#f3efe8]/62 hover:border-[#f3efe8]/22 hover:text-[#f3efe8]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.18em]">
                            <span>{item.kicker}</span>
                            <span>{item.badge}</span>
                          </div>
                          <div className="mt-3 text-[1rem] leading-[1.15] tracking-[-0.04em]">{item.title}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border border-[#f3efe8]/10 bg-[#0a0a0a] p-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/45">Selected layer</p>
                  <h2 className="mt-3 text-[1.45rem] leading-[0.98] tracking-[-0.06em] text-[#f3efe8]">
                    {layerNotes[activeIndex].title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-[1.45] text-[#f3efe8]/72">
                    {layerNotes[activeIndex].body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layerNotes[activeIndex].bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-[#f3efe8]/12 px-3 py-1 text-[0.56rem] uppercase tracking-[0.18em] text-[#f3efe8]/74"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#f3efe8]/10 p-3">
                    <p className="text-[0.56rem] uppercase tracking-[0.18em] text-[#f3efe8]/45">Density</p>
                    <p className="mt-3 text-[2rem] leading-none tracking-[-0.08em] text-[#f3efe8]">07</p>
                    <p className="mt-2 text-[0.76rem] text-[#f3efe8]/58">phrase clusters</p>
                  </div>
                  <div className="border border-[#f3efe8]/10 p-3">
                    <p className="text-[0.56rem] uppercase tracking-[0.18em] text-[#f3efe8]/45">Sticker cues</p>
                    <p className="mt-3 text-[2rem] leading-none tracking-[-0.08em] text-[#f3efe8]">03</p>
                    <p className="mt-2 text-[0.76rem] text-[#f3efe8]/58">badges kept live</p>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section id="notes" className="grid border-t border-[#f3efe8]/12 lg:grid-cols-[1.05fr_1.25fr]">
            <div className="border-b border-[#f3efe8]/12 px-4 py-5 lg:border-r lg:border-b-0 lg:px-5 lg:py-6">
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/48">Layer notes</p>
              <p
                className="mt-4 max-w-[14ch] text-[clamp(2.4rem,5vw,4rem)] leading-[0.88] tracking-[-0.085em] text-[#f3efe8]"
                style={{ fontFamily: "var(--font-case-001-display)" }}
              >
                Poster instinct,
                <br />
                site discipline.
              </p>
              <p className="mt-4 max-w-[31ch] text-[0.98rem] leading-[1.5] text-[#f3efe8]/72">
                The page keeps the raw repetition and scribbled interruption from the source image, then wraps it inside an editorial structure that actually behaves like a website.
              </p>
            </div>

            <div className="grid md:grid-cols-3" id="parts">
              {workingParts.map((part) => (
                <article key={part.title} className="border-b border-[#f3efe8]/12 px-4 py-5 last:border-b-0 md:border-b-0 md:border-l lg:px-5 lg:py-6">
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/45">working part</p>
                  <h3 className="mt-4 text-[1.35rem] leading-[1] tracking-[-0.05em] text-[#f3efe8]">{part.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.45] text-[#f3efe8]/68">{part.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid border-t border-[#f3efe8]/12 lg:grid-cols-[1fr_340px]" id="footer">
            <div className="px-4 py-5 lg:border-r lg:px-5 lg:py-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/48">Footer ritual</p>
                  <p
                    className="mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.86] tracking-[-0.09em] text-[#f3efe8]"
                    style={{ fontFamily: "var(--font-case-001-display)" }}
                  >
                    Start where the page began.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="#hero"
                    className="rounded-full border border-[#f3efe8]/14 px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#f3efe8] transition hover:border-[#f3efe8]/32 hover:bg-[#0e0e0e]"
                  >
                    back to hero
                  </a>
                  <a
                    href="#notes"
                    className="rounded-full border border-[#f3efe8]/14 px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#f3efe8] transition hover:border-[#f3efe8]/32 hover:bg-[#0e0e0e]"
                  >
                    read notes
                  </a>
                </div>
              </div>
            </div>

            <aside className="border-t border-[#f3efe8]/12 px-4 py-5 lg:border-t-0 lg:px-5 lg:py-6">
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-[#f3efe8]/48">Checks</p>
              <div className="mt-4 space-y-2">
                {footerChecks.map((item) => (
                  <div key={item} className="flex items-center justify-between gap-3 border-t border-[#f3efe8]/10 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-[#f3efe8]/68 first:border-t-0 first:pt-0">
                    <span>{item}</span>
                    <span>✓</span>
                  </div>
                ))}
              </div>
            </aside>
          </section>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0ms !important;
            animation-duration: 0ms !important;
          }
        }
      `}</style>
    </main>
  );
}
