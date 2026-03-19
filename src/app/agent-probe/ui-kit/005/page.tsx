"use client";

import Link from "next/link";
import { useState } from "react";
import { Archivo, Cormorant_Garamond } from "next/font/google";

const sansFace = Archivo({
  subsets: ["latin"],
  variable: "--font-ui-kit-005-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const serifFace = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-ui-kit-005-serif",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

type PointerState = {
  x: number;
  y: number;
};

type BoardSpec = {
  left: number;
  top: number;
  scale: number;
  depth: number;
  width: number;
  height: number;
};

type IssueBlock = {
  number: string;
  date: string;
  title: string;
  excerpt: string;
};

const navigation = ["Issue", "Archive", "Release", "Letters"];

const issueBlocks: IssueBlock[] = [
  {
    number: "1",
    date: "19.03.2026",
    title: "Publishing the starter kit without flattening the voice",
    excerpt: "A release issue that turns tokens, components, and layout studies into an authored publication instead of another product dashboard.",
  },
  {
    number: "2",
    date: "19.03.2026",
    title: "Why the library still needs editorial framing",
    excerpt: "A UI kit becomes more legible when launches, principles, and assembly notes are published as a desk rather than buried in utility chrome.",
  },
];

const boards: BoardSpec[] = [
  { left: 14, top: 19, scale: 0.92, depth: 0.7, width: 96, height: 124 },
  { left: 29, top: 17, scale: 0.82, depth: 0.9, width: 88, height: 112 },
  { left: 45, top: 18, scale: 0.86, depth: 0.65, width: 92, height: 118 },
  { left: 60, top: 18, scale: 0.8, depth: 1, width: 84, height: 108 },
  { left: 75, top: 16, scale: 0.94, depth: 1.1, width: 100, height: 128 },
];

function Board({ spec, pointer, hovered, index }: { spec: BoardSpec; pointer: PointerState; hovered: boolean; index: number }) {
  const translateX = (pointer.x - 0.5) * spec.depth * -18;
  const translateY = (pointer.y - 0.5) * spec.depth * -10;
  const scale = spec.scale * (hovered ? 1.02 : 1);

  return (
    <div
      aria-hidden
      className="absolute overflow-visible transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        left: `${spec.left}%`,
        top: `${spec.top}%`,
        width: spec.width,
        height: spec.height,
        transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
      }}
    >
      <div className="absolute inset-0 border border-black/12 bg-[#f5f1ea]/88 shadow-[0_16px_24px_rgba(38,34,31,0.08)]" />
      <div className="absolute left-[12%] top-[12%] h-[12%] w-[52%] bg-black/12" />
      <div className="absolute left-[12%] top-[31%] h-[8%] w-[64%] bg-black/8" />
      <div className="absolute left-[12%] top-[45%] h-[24%] w-[76%] border border-black/10 bg-white/35" />
      <div className="absolute left-[12%] bottom-[11%] text-[0.45rem] uppercase tracking-[0.16em] text-black/58">board {index + 1}</div>
    </div>
  );
}

function ScenicField({ pointer, hovered }: { pointer: PointerState; hovered: boolean }) {
  return (
    <div className="relative aspect-[1.42/1] overflow-hidden border border-black/10 bg-[#dfdbd4]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f1ede7_0%,#e7e2db_26%,#dad5cd_55%,#cdc7be_100%)]" />
      <div
        aria-hidden
        className="absolute left-[8%] top-[9%] h-[30%] w-[72%] rounded-full bg-white/55 blur-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translate3d(${(pointer.x - 0.5) * -18}px, ${(pointer.y - 0.5) * -10}px, 0) scale(${hovered ? 1.02 : 1})` }}
      />
      <div
        aria-hidden
        className="absolute inset-x-[4%] top-[16%] h-[38%] rounded-[50%] bg-[#c6c1b8]/55 blur-[28px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translate3d(${(pointer.x - 0.5) * -10}px, ${(pointer.y - 0.5) * -8}px, 0)` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(180deg,rgba(196,191,184,0.16)_0%,rgba(166,160,152,0.58)_60%,rgba(146,140,132,0.74)_100%)]" />
      <div className="absolute inset-x-[8%] bottom-[14%] h-[56%] rounded-[1.2rem] border border-black/10 bg-white/20" />
      {boards.map((spec, index) => (
        <Board key={`${spec.left}-${index}`} spec={spec} pointer={pointer} hovered={hovered} index={index} />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_34%,transparent_78%,rgba(255,255,255,0.1))]" />
    </div>
  );
}

function IssueItem({ issue, active, onEnter }: { issue: IssueBlock; active: boolean; onEnter: () => void }) {
  return (
    <a href="#issue" onMouseEnter={onEnter} onFocus={onEnter} className="group block py-4 transition-colors duration-300">
      <div className="mb-3 flex items-start justify-between gap-4 text-[#161616]">
        <span className="text-[3rem] leading-none tracking-[-0.06em]">{issue.number}</span>
        <span className="pt-2 text-[0.72rem] tracking-[-0.02em] text-[#161616]/70">{issue.date}</span>
      </div>
      <div className="max-w-[17rem]">
        <h3 className="text-[1.05rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111111] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">{issue.title}</h3>
        <p className="mt-3 max-w-[16rem] text-[0.86rem] leading-[1.28] tracking-[-0.02em] text-[#111111]/74">{issue.excerpt}</p>
      </div>
      <div className="mt-4 h-px w-full overflow-hidden bg-black/10">
        <div className="h-full bg-[#101010] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: `scaleX(${active ? 1 : 0.2})`, transformOrigin: "left center" }} />
      </div>
    </a>
  );
}

export default function UiKit005Page() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0.5, y: 0.44 });
  const [hovered, setHovered] = useState(false);
  const [activeIssue, setActiveIssue] = useState(0);

  return (
    <main className={`${sansFace.variable} ${serifFace.variable} relative min-h-screen overflow-hidden bg-[#ebe7e0] text-[#111111]`} style={{ fontFamily: "var(--font-ui-kit-005-sans)" }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.7),transparent_32%),linear-gradient(180deg,#f1ede7_0%,#ebe7e0_36%,#e7e2db_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(22,22,22,0.3)_1px,transparent_0)] [background-size:12px_12px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/10" />

      <section
        className="relative mx-auto min-h-screen w-full max-w-[1580px] px-4 sm:px-6 lg:px-8"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => {
          setHovered(false);
          setPointer({ x: 0.5, y: 0.44 });
        }}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          setPointer({ x, y });
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-x-[8%] top-[8%] h-[18rem] opacity-70 blur-3xl transition duration-300" style={{ background: `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(255,255,255,0.38), transparent 24%)` }} />

        <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[11.5rem_minmax(0,1fr)_22rem] xl:grid-cols-[12rem_minmax(0,1fr)_23rem]">
          <aside className="flex flex-col justify-between border-b border-black/12 py-6 lg:border-r lg:border-b-0 lg:py-9">
            <nav aria-label="Publication" className="flex flex-col gap-3 pr-4 text-[1.08rem] tracking-[-0.03em] text-[#151515] lg:pr-6">
              {navigation.map((item) => (
                <a key={item} href="#issue" className="inline-flex w-fit items-center gap-2 text-[#151515]/92 transition duration-300 hover:translate-x-1 hover:text-[#000000] focus-visible:translate-x-1 focus-visible:text-[#000000] focus-visible:outline-none">
                  <span>{item}</span>
                </a>
              ))}
            </nav>

            <div className="mt-10 flex flex-col gap-2 pr-4 text-[1.08rem] tracking-[-0.03em] text-[#161616] lg:mt-8 lg:pr-6">
              <a href="#issue" className="w-fit transition hover:translate-x-1 focus-visible:translate-x-1 focus-visible:outline-none">@UIKitPress</a>
              <a href="#subscribe" className="flex w-fit items-center gap-2 transition hover:translate-x-1 focus-visible:translate-x-1 focus-visible:outline-none">
                <span className="inline-flex h-3 w-3 bg-[#141414]" />
                <span>Subscribe</span>
              </a>
              <Link href="/agent-probe/ui-kit" className="mt-4 w-fit text-[0.72rem] uppercase tracking-[0.22em] text-[#161616]/66 transition hover:text-[#111111]">UI Kit index</Link>
            </div>
          </aside>

          <section className="flex min-h-full flex-col border-b border-black/12 py-6 lg:border-r lg:border-b-0 lg:px-4 lg:py-9 xl:px-6">
            <header>
              <div className="flex flex-col gap-4 border-b border-black/12 pb-4 md:flex-row md:items-end md:justify-between md:gap-8">
                <h1 className="max-w-[11ch] text-[clamp(4rem,8vw,7.65rem)] font-extrabold leading-[0.88] tracking-[-0.095em] text-[#0f0f0f]">UI Kit</h1>
                <p className="pb-2 text-[1rem] tracking-[-0.03em] text-[#161616]/82">19.03.2026</p>
              </div>

              <div className="flex items-center gap-3 py-3 text-[1rem] tracking-[-0.035em] text-[#161616]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#111111]" />
                <span>Pinned Issue</span>
              </div>
            </header>

            <article id="issue" className="grid flex-1 grid-rows-[auto_auto_1fr_auto] pt-3">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(14rem,1.04fr)_minmax(18rem,1fr)] lg:items-start">
                <div className="hidden lg:block" aria-hidden />
                <div className="relative">
                  <ScenicField pointer={pointer} hovered={hovered} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 pt-4 lg:grid-cols-[minmax(14rem,1.04fr)_minmax(18rem,1fr)]">
                <div className="hidden lg:block" aria-hidden />
                <div className="space-y-2.5">
                  <h2 className="max-w-[16ch] text-[clamp(1.75rem,2.5vw,2.45rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#101010]">
                    Publishing the <span style={{ fontFamily: "var(--font-ui-kit-005-serif)", fontStyle: "italic", fontWeight: 600 }}>assembled</span>
                    <br />
                    kit before it disappears into utilitarian chrome
                  </h2>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-[0.95rem] tracking-[-0.025em] text-[#161616]/76">
                    <p>
                      By <span className="font-medium text-[#111111]">UI Kit Desk</span>
                    </p>
                    <p style={{ fontFamily: "var(--font-ui-kit-005-serif)", fontStyle: "italic" }}>6 Min Read</p>
                  </div>

                  <p className="max-w-[38ch] text-[0.99rem] leading-[1.4] tracking-[-0.02em] text-[#161616]/84">
                    A publication layer for release notes, guidance essays, and assembly narratives that frames tokens and components as a living design product rather than a silent asset dump.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-end justify-between gap-6 border-t border-black/12 pt-6">
                <div>
                  <p className="text-[clamp(3.8rem,7vw,6rem)] font-medium leading-none tracking-[-0.11em] text-[#111111]">NO.01</p>
                </div>

                <a href="#featured" className="group inline-flex items-center gap-3 self-end text-[1.1rem] tracking-[-0.04em] text-[#141414] transition duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none">
                  <span className="text-[1.18rem] transition duration-300 group-hover:-rotate-12 group-focus-visible:-rotate-12">↳</span>
                  <span>See More</span>
                </a>
              </div>
            </article>
          </section>

          <aside id="featured" className="flex flex-col py-6 lg:py-9 lg:pl-4 xl:pl-6">
            <div className="relative mb-9 h-6 overflow-hidden bg-[#121212]">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <span className="ui-kit-dot h-2.5 w-2.5 rounded-full bg-[#ebe7e0]" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-black/12 pb-3">
              <p className="text-[1.45rem] leading-none tracking-[-0.04em] text-[#141414]" style={{ fontFamily: "var(--font-ui-kit-005-serif)", fontStyle: "italic", fontWeight: 500 }}>
                Release Notes
              </p>
              <a href="#issue" className="inline-flex items-center gap-3 text-[1rem] tracking-[-0.03em] text-[#111111] transition hover:translate-x-1 focus-visible:translate-x-1 focus-visible:outline-none">
                <span className="h-2.5 w-2.5 rounded-full bg-[#111111]" />
                <span>See All</span>
              </a>
            </div>

            <div className="flex flex-1 flex-col justify-start pt-2">
              {issueBlocks.map((issue, index) => (
                <IssueItem key={issue.number} issue={issue} active={activeIssue === index} onEnter={() => setActiveIssue(index)} />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <style jsx>{`
        .ui-kit-dot {
          animation: uiKitPulse 4.6s cubic-bezier(0.45, 0, 0.25, 1) infinite;
        }

        @keyframes uiKitPulse {
          0%,
          100% {
            transform: translateX(0) scale(0.92);
            opacity: 0.72;
          }
          40% {
            transform: translateX(-10px) scale(1);
            opacity: 1;
          }
          70% {
            transform: translateX(-5px) scale(0.96);
            opacity: 0.82;
          }
        }
      `}</style>
    </main>
  );
}
