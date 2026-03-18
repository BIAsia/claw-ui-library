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
  key: string;
  title: string;
  listLabel: string;
  description: string;
  icon: "research" | "strategy" | "motion" | "graphic" | "illustration";
};

const phaseCards: PhaseCard[] = [
  {
    number: "02",
    key: "research",
    title: "Research",
    listLabel: "RESEARCH PHASE",
    description:
      "We collect references, benchmark adjacent categories, and pin down the visual rules before design momentum takes over.",
    icon: "research",
  },
  {
    number: "03",
    key: "strategy",
    title: "Strategy",
    listLabel: "STRATEGY PHASE",
    description:
      "A clear strategic direction helps the work stay coherent, fast, and easier to approve as the timeline unfolds.",
    icon: "strategy",
  },
  {
    number: "04",
    key: "motion",
    title: "3D / Motion",
    listLabel: "3D / MOTION",
    description:
      "Our outstanding content, expertly crafted, has the ability to stand out from the competition and deeply connect with viewers. This is where we excel. Our unparalleled photographic expertise and top-notch creative abilities have kept us at the forefront of the industry since our inception.",
    icon: "motion",
  },
  {
    number: "05",
    key: "graphic-design",
    title: "Graphic Design",
    listLabel: "GRAPHIC DESIGN",
    description:
      "We refine the project language into layouts, assets, and brand surfaces that feel consistent without becoming generic.",
    icon: "graphic",
  },
  {
    number: "06",
    key: "illustration",
    title: "Illustration",
    listLabel: "ILLUSTRATIONS",
    description:
      "Selective illustration brings authored character to the system while preserving the clean hierarchy of the overall presentation.",
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
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "research":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="M14 12.5v23" {...strokeProps} />
          <path d="M19.5 12.5H14" {...strokeProps} />
          <path d="M19.5 35.5H14" {...strokeProps} />
          <path d="M28.5 12.5v23" {...strokeProps} />
          <path d="M28.5 12.5H34" {...strokeProps} />
          <path d="M28.5 35.5H34" {...strokeProps} />
        </svg>
      );
    case "strategy":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <circle cx="24" cy="24" r="11.4" {...strokeProps} />
          <circle cx="24" cy="24" r="4.3" {...strokeProps} />
          <path d="M24 8.2v5.4" {...strokeProps} />
          <path d="M24 34.4v5.4" {...strokeProps} />
          <path d="M8.2 24h5.4" {...strokeProps} />
          <path d="M34.4 24h5.4" {...strokeProps} />
        </svg>
      );
    case "motion":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="M24 9v30" {...strokeProps} />
          <path d="M9 24h30" {...strokeProps} />
          <path d="m14 14 20 20" {...strokeProps} />
          <path d="m34 14-20 20" {...strokeProps} />
          <path d="M32.2 10.8 29.5 18" {...strokeProps} />
          <path d="M37.2 17.6 29.8 20" {...strokeProps} />
        </svg>
      );
    case "graphic":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="M17.5 12.5c-4.7 0-7.8 3.5-7.8 8.1 0 4.1 2.3 7.1 6.4 8" {...strokeProps} />
          <path d="M30.5 35.5c4.7 0 7.8-3.5 7.8-8.1 0-4.1-2.3-7.1-6.4-8" {...strokeProps} />
          <path d="M18.5 35.5 29.5 12.5" {...strokeProps} />
          <path d="M14.5 18.7h7.8" {...strokeProps} />
          <path d="M25.8 29.3h7.7" {...strokeProps} />
        </svg>
      );
    case "illustration":
      return (
        <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12">
          <path d="m14 31.8 15-15 5.2 5.1-15 15H14Z" {...strokeProps} />
          <path d="M28.8 17l2.5-2.5c1.3-1.3 3.4-1.3 4.7 0l1.1 1.1c1.3 1.3 1.3 3.4 0 4.7L34.6 23" {...strokeProps} />
          <path d="M11.5 36.8h25.5" {...strokeProps} />
        </svg>
      );
    default:
      return null;
  }
}

function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-[#121212]">
      <path
        d="M6.9 6.2c0 1.4-.8 2.6-2.1 3.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M10.4 5c0 2.3-1.5 4.2-3.8 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="14.9" cy="7.2" r="1.65" fill="currentColor" />
      <path
        d="M11.4 16.2c0-2.2 1.6-4.1 3.8-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M13.1 18.8h5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
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
        "group relative flex h-[10.8rem] w-[9.55rem] shrink-0 flex-col border px-3.5 pb-3.5 pt-2.5 text-left transition-[background-color,border-color,color] duration-150 ease-out sm:h-[11.25rem] sm:w-[10.45rem]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]",
        active
          ? "border-[#d5d9ea] bg-[#dde1f1] text-[#111111]"
          : "border-[#ebe7e1] bg-[#efede8] text-[#151515] hover:border-[#dfdad1] hover:bg-[#ece9e3]",
      ].join(" ")}
    >
      <span className="text-[0.6rem] font-medium tracking-[0.08em] text-[#1c1c1c]/75">{card.number}</span>

      <div
        className={[
          "flex flex-1 items-center justify-center transition-colors duration-150",
          active ? "text-[#111111]" : "text-[#b4b1aa] group-hover:text-[#97938b]",
        ].join(" ")}
      >
        <PhaseIcon type={card.icon} />
      </div>

      <div className="space-y-2 text-center">
        <p className="text-[0.96rem] leading-none tracking-[-0.045em] text-[#151515]">{card.title}</p>
        <div className="text-[0.98rem] leading-none text-[#1b1b1b]/85">
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
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen overflow-hidden bg-[#a4a3e7] px-3 py-4 text-[#111111] sm:px-5 sm:py-6 lg:px-8 lg:py-8`}
      style={{ fontFamily: "var(--font-case-009-body), sans-serif" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[18vh] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
        <div className="absolute left-[12%] top-0 h-20 w-28 rounded-b-[1.25rem] bg-[#8987c7]/28 blur-[2px]" />
        <div className="absolute left-[27%] top-0 h-16 w-40 rounded-b-[1.4rem] bg-[#7e7dbb]/24 blur-[2px]" />
        <div className="absolute right-[19%] top-0 h-18 w-36 rounded-b-[1.3rem] bg-[#7b7ab6]/20 blur-[2px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1240px] items-center justify-center sm:min-h-[calc(100vh-3rem)]">
        <div className="relative w-full">
          <div className="relative rounded-[2.5rem] border border-[#716f8b] bg-[linear-gradient(160deg,#8c899f_0%,#1a1c23_10%,#050506_22%,#040404_100%)] p-[0.45rem] shadow-[0_34px_90px_rgba(18,16,40,0.4)] sm:rounded-[2.9rem] sm:p-[0.55rem]">
            <div className="relative rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,#17191f_0%,#060607_100%)] p-[0.55rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:rounded-[2.55rem] sm:p-[0.65rem]">
              <div className="pointer-events-none absolute left-1/2 top-[0.44rem] z-10 flex -translate-x-1/2 items-center gap-2 sm:top-[0.52rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#171a25] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
                <span className="h-1.5 w-8 rounded-full bg-white/6" />
              </div>

              <div className="relative aspect-[1.47/1] overflow-hidden rounded-[1.75rem] bg-[#f7f4ef] px-[clamp(1rem,2vw,1.8rem)] pb-[clamp(1rem,2vw,1.75rem)] pt-[clamp(1rem,2.1vw,1.8rem)] sm:rounded-[2rem]">
                <div className="flex h-full flex-col">
                  <header className="grid grid-cols-[1.5rem_1fr_1.5rem] items-start gap-3 sm:grid-cols-[1.75rem_1fr_1.75rem]">
                    <div className="pt-0.5">
                      <BrandMark />
                    </div>
                    <div className="px-2 text-center">
                      <h1
                        className="text-[clamp(2rem,4.25vw,4.1rem)] font-normal leading-[0.94] tracking-[-0.055em] text-[#111111]"
                        style={{ fontFamily: "var(--font-case-009-display), serif" }}
                      >
                        Design Project Timeline
                      </h1>
                    </div>
                    <div />
                  </header>

                  <div className="mt-[clamp(1.25rem,3vw,2.3rem)] flex items-end justify-between border-b border-[#d8d2c8] pb-[0.65rem]">
                    <span className="text-[0.52rem] font-medium uppercase tracking-[0.22em] text-[#8a8378]">Phases</span>
                    <span className="text-[0.56rem] font-medium tracking-[0.18em] text-[#9b9488]">06</span>
                  </div>

                  <div className="mt-[0.95rem] overflow-hidden">
                    <div className="flex gap-3 [transform:translateX(-3.7rem)] sm:[transform:translateX(-4.35rem)]">
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

                  <div className="mt-auto grid gap-5 pt-[1.35rem] md:grid-cols-[0.55fr_1fr] md:items-end md:gap-8">
                    <ol className="space-y-0.5 pl-1 text-[0.61rem] leading-[1.48] tracking-[0.02em] text-[#3c3935] sm:text-[0.66rem]">
                      {phaseList.map((item, index) => {
                        const isActive = index === activeListIndex;
                        return (
                          <li key={item} className={isActive ? "font-semibold text-[#111111]" : "text-[#3d3a35]"}>
                            {index + 1}. {item}
                          </li>
                        );
                      })}
                    </ol>

                    <div className="grid justify-items-start gap-4 md:justify-items-center">
                      <p className="max-w-[26rem] text-[0.7rem] leading-[1.45] tracking-[-0.01em] text-[#4a4640] sm:text-[0.77rem]">
                        {activeCard.description}
                      </p>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          aria-label="Project tools"
                          className="grid h-8 w-8 place-items-center rounded-[0.45rem] border border-[#cfcbc5] bg-[#bdbabf] text-[0.78rem] text-white shadow-[0_8px_16px_rgba(120,115,124,0.18)] transition-colors duration-150 hover:bg-[#b4b1b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
                        >
                          <span aria-hidden>≡</span>
                        </button>

                        <button
                          type="button"
                          className="inline-flex min-h-8 items-center gap-1.5 rounded-[0.45rem] border border-[#ece6dd] bg-[#fcfaf6] px-3 py-1.5 text-[0.6rem] text-[#151515] shadow-[0_8px_16px_rgba(144,136,126,0.08)] transition-colors duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
                        >
                          <span>make a project</span>
                          <span className="text-[#777067]">Let&apos;s make a</span>
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
