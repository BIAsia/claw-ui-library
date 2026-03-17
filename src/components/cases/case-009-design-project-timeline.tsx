"use client";

import { useMemo, useState } from "react";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";

const displayFace = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-case-009-display",
  weight: ["400", "500", "600"],
});

const bodyFace = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-case-009-body",
  weight: ["400", "500", "600"],
});

type PhaseCard = {
  number: string;
  title: string;
  key: string;
  listLabel: string;
  description: string;
  icon: "research" | "strategy" | "motion" | "graphic" | "illustration";
};

const phaseCards: PhaseCard[] = [
  {
    number: "02",
    title: "Research",
    key: "research",
    listLabel: "RESEARCH PHASE",
    description:
      "We map the visual language, constraints, and benchmarks early so the rest of the project moves with fewer revisions and clearer intent.",
    icon: "research",
  },
  {
    number: "03",
    title: "Strategy",
    key: "strategy",
    listLabel: "STRATEGY PHASE",
    description:
      "A sharp direction keeps the team aligned on priorities, pacing, and decisions before the more visible design work begins.",
    icon: "strategy",
  },
  {
    number: "04",
    title: "3D / Motion",
    key: "motion",
    listLabel: "3D / MOTION",
    description:
      "Our outstanding content, expertly crafted, has the ability to stand out from the competition and deeply connect with viewers. This is where we excel. Our unparalleled photographic expertise and top-notch creative abilities have kept us at the forefront of the industry since our inception.",
    icon: "motion",
  },
  {
    number: "05",
    title: "Graphic Design",
    key: "graphic-design",
    listLabel: "GRAPHIC DESIGN",
    description:
      "Layout systems, brand surfaces, and supporting assets are refined here so every visible touchpoint feels consistent and production-ready.",
    icon: "graphic",
  },
  {
    number: "06",
    title: "Illustration",
    key: "illustration",
    listLabel: "ILLUSTRATIONS",
    description:
      "Custom illustration adds a final authored layer, helping the project feel distinct without pulling attention away from the overall system.",
    icon: "illustration",
  },
];

const phaseList = [
  "DISCOVERY PHASE",
  "RESEARCH PHASE",
  "STRATEGY PHASE",
  "3D / MOTION",
  "GRAPHIC DESIGN",
  "ILLUSTRATIONS",
  "HANDOFF PHASE",
];

function PhaseIcon({ type }: { type: PhaseCard["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "research":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <circle cx="20" cy="20" r="9.5" {...common} />
          <path d="m27 27 8.5 8.5" {...common} />
          <path d="M20 15.2v9.6" {...common} />
          <path d="M15.2 20h9.6" {...common} />
        </svg>
      );
    case "strategy":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <circle cx="24" cy="24" r="11" {...common} />
          <circle cx="24" cy="24" r="4.5" {...common} />
          <path d="M24 8.5v5.5" {...common} />
          <path d="M24 34v5.5" {...common} />
          <path d="M8.5 24H14" {...common} />
          <path d="M34 24h5.5" {...common} />
        </svg>
      );
    case "motion":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="M24 9v30" {...common} />
          <path d="M9 24h30" {...common} />
          <path d="m13.4 13.4 21.2 21.2" {...common} />
          <path d="m34.6 13.4-21.2 21.2" {...common} />
          <path d="M24 24 38 18" {...common} />
        </svg>
      );
    case "graphic":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="M18.5 13.5c-6.5 0-10 4.7-10 10.5 0 4.7 2.6 8.5 6.8 9.8" {...common} />
          <path d="M29.5 34.5c6.5 0 10-4.7 10-10.5 0-4.7-2.6-8.5-6.8-9.8" {...common} />
          <path d="M18 34.8 30 13.2" {...common} />
          <path d="M14 18h8" {...common} />
          <path d="M26 30h8" {...common} />
        </svg>
      );
    case "illustration":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="m13 31.5 16.8-16.8 4.7 4.7L17.7 36.2H13Z" {...common} />
          <path d="M28.5 16 31 13.5c1.4-1.4 3.6-1.4 5 0l1 1c1.4 1.4 1.4 3.6 0 5L34.5 22" {...common} />
          <path d="M11.5 36.5h25" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

function Mark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-[#121212]">
      <path
        d="M8.4 4.7c-2 0-3.8 1.7-3.8 3.8 0 1.5.8 2.7 2.1 3.3.8.4 1.2 1 1.2 1.8v.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7 6.2c0 2-1.6 3.6-3.6 3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.7" cy="6.1" r="1.4" fill="currentColor" />
      <path d="M9 17.8h6.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhaseCardButton({
  card,
  active,
  onActivate,
}: {
  card: PhaseCard;
  active: boolean;
  onActivate: (key: string) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onActivate(card.key)}
      onMouseEnter={() => onActivate(card.key)}
      onFocus={() => onActivate(card.key)}
      className={[
        "group relative flex h-full min-h-[11.3rem] w-[9.75rem] shrink-0 flex-col justify-between border px-4 pb-4 pt-3 text-left transition-colors duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f7f4]",
        active
          ? "border-[#cfd5ec] bg-[#dfe5f8] text-[#101010]"
          : "border-[#eceae4] bg-[#f2f0ed] text-[#161616] hover:border-[#d9d5ce] hover:bg-[#f0eeea]",
      ].join(" ")}
    >
      <span className="text-[0.62rem] font-medium tracking-[0.08em] text-[#111111]/78">{card.number}</span>

      <div className="flex flex-1 items-center justify-center text-[#989898] group-aria-[pressed=true]:text-[#141414]/82">
        <PhaseIcon type={card.icon} />
      </div>

      <div className="space-y-2">
        <p className="text-[1rem] leading-none tracking-[-0.04em] text-[#111111]">{card.title}</p>
        <div className="flex items-center justify-center text-[1rem] text-[#111111]/76">
          <span aria-hidden>↗</span>
        </div>
      </div>
    </button>
  );
}

export function Case009DesignProjectTimeline() {
  const [activeKey, setActiveKey] = useState("motion");

  const activeCard = useMemo(
    () => phaseCards.find((card) => card.key === activeKey) ?? phaseCards[2],
    [activeKey],
  );

  const activeListIndex = phaseList.findIndex((item) => item === activeCard.listLabel);

  return (
    <main
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen overflow-hidden bg-[#a9a9e8] px-3 py-4 text-[#111111] sm:px-5 sm:py-6 lg:px-8 lg:py-8`}
      style={{ fontFamily: "var(--font-case-009-body), sans-serif" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[5%] h-28 w-56 rounded-[1.25rem] border border-white/18 bg-[#2f3042]/30 shadow-[0_24px_60px_rgba(20,18,46,0.24)] backdrop-blur-[3px] sm:h-32 sm:w-72" />
        <div className="absolute right-[10%] top-[3%] h-32 w-64 rounded-[1.5rem] border border-white/14 bg-[#27283c]/34 shadow-[0_24px_60px_rgba(20,18,46,0.22)] backdrop-blur-[4px] sm:h-36 sm:w-80" />
        <div className="absolute left-[18%] bottom-[8%] h-20 w-44 rounded-[1.15rem] border border-white/14 bg-[#3a3b51]/22 shadow-[0_24px_60px_rgba(20,18,46,0.18)] backdrop-blur-[3px] sm:h-24 sm:w-52" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1400px] items-center justify-center sm:min-h-[calc(100vh-3rem)]">
        <div className="relative w-full max-w-[1320px]">
          <div className="relative rounded-[2.9rem] border border-[#888898] bg-[linear-gradient(180deg,#a5a5b5_0%,#777785_20%,#0f1015_38%,#050609_100%)] p-[0.72rem] shadow-[0_22px_80px_rgba(19,16,42,0.38)] sm:rounded-[3.25rem] sm:p-[0.95rem]">
            <div className="relative rounded-[2.5rem] bg-[#050507] p-[0.86rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] sm:rounded-[2.85rem] sm:p-[1rem]">
              <div className="pointer-events-none absolute left-1/2 top-[0.62rem] flex -translate-x-1/2 items-center gap-2 text-white/50 sm:top-[0.72rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                <span className="h-1.5 w-12 rounded-full bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
              </div>

              <div className="relative aspect-[1.57/1] overflow-hidden rounded-[2rem] bg-[#f8f7f4] px-[clamp(1rem,2.2vw,2rem)] pb-[clamp(1rem,2vw,1.8rem)] pt-[clamp(1.1rem,2.4vw,2rem)] sm:rounded-[2.25rem]">
                <div className="flex h-full flex-col">
                  <header className="flex items-start justify-between gap-4">
                    <div className="pt-1">
                      <Mark />
                    </div>
                    <div className="flex-1 px-2 text-center">
                      <h1
                        className="text-[clamp(2rem,4.3vw,4rem)] font-normal leading-none tracking-[-0.055em] text-[#121212]"
                        style={{ fontFamily: "var(--font-case-009-display), serif" }}
                      >
                        Design Project Timeline
                      </h1>
                    </div>
                    <div className="w-6 sm:w-8" />
                  </header>

                  <div className="mt-[clamp(1rem,3.1vw,2rem)] flex items-end justify-between gap-3 border-b border-[#d7d3cb] pb-[clamp(0.55rem,1vw,0.8rem)]">
                    <span className="text-[0.54rem] font-medium uppercase tracking-[0.18em] text-[#76726a]">Phases</span>
                    <span className="text-[0.58rem] font-medium tracking-[0.16em] text-[#9f9a92]">06</span>
                  </div>

                  <div className="mt-[clamp(0.9rem,2vw,1.5rem)] overflow-hidden">
                    <div className="flex gap-[0.8rem]" style={{ transform: "translateX(-4.65rem)" }}>
                      {phaseCards.map((card) => (
                        <PhaseCardButton
                          key={card.key}
                          card={card}
                          active={card.key === activeCard.key}
                          onActivate={setActiveKey}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto grid gap-5 pt-[clamp(1rem,2.3vw,2rem)] md:grid-cols-[0.88fr_1.32fr] md:items-end">
                    <div className="grid gap-4 md:pr-4">
                      <ol className="space-y-1 text-[0.6rem] leading-[1.45] tracking-[0.05em] text-[#1a1a1a] sm:text-[0.65rem]">
                        {phaseList.map((item, index) => {
                          const isActive = index === activeListIndex;
                          return (
                            <li
                              key={item}
                              className={isActive ? "font-semibold text-[#111111]" : "text-[#1a1a1a]/82"}
                            >
                              {index + 1}. {item}
                            </li>
                          );
                        })}
                      </ol>
                    </div>

                    <div className="grid gap-5 md:justify-items-center">
                      <p className="max-w-[27rem] text-[0.68rem] leading-[1.45] tracking-[-0.01em] text-[#3f3d38] sm:text-[0.76rem]">
                        {activeCard.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                          type="button"
                          aria-label="Project tools"
                          className="grid h-8 w-8 place-items-center rounded-[0.6rem] border border-[#cbc7c0] bg-[#cfcdd0] text-[0.8rem] text-[#ffffff] shadow-[0_8px_18px_rgba(114,111,119,0.16)] transition-colors duration-150 hover:bg-[#c7c5c8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f7f4]"
                        >
                          <span aria-hidden>≡</span>
                        </button>

                        <button
                          type="button"
                          className="inline-flex min-h-8 items-center gap-2 rounded-[0.6rem] border border-[#ece7de] bg-[#fbfaf7] px-3 py-1.5 text-[0.63rem] tracking-[-0.02em] text-[#1a1a1a] shadow-[0_8px_18px_rgba(140,134,124,0.08)] transition-colors duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f7f4]"
                        >
                          <span>make a project</span>
                          <span className="text-[#5b5955]">Let&apos;s make a</span>
                          <span aria-hidden>↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
