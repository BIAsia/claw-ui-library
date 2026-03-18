"use client";

import { useState, type CSSProperties } from "react";
import { Archivo, Public_Sans } from "next/font/google";

const displayFace = Archivo({
  subsets: ["latin"],
  variable: "--font-case-010-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyFace = Public_Sans({
  subsets: ["latin"],
  variable: "--font-case-010-body",
  weight: ["400", "500", "600", "700"],
});

type PointerState = {
  x: number;
  y: number;
};

type HeadlinePiece = {
  label: string;
  className: string;
  textClassName: string;
  depth: number;
  align?: CSSProperties["textAlign"];
};

const headlinePieces: HeadlinePiece[] = [
  {
    label: "Crafting",
    className: "left-[28.5%] top-[9.2%]",
    textClassName: "text-[clamp(4.8rem,6vw,5.9rem)]",
    depth: 0.8,
  },
  {
    label: "innovative",
    className: "left-[39.8%] top-[20.4%]",
    textClassName: "text-[clamp(4.3rem,5.6vw,5.45rem)]",
    depth: 0.95,
  },
  {
    label: "applications",
    className: "left-[12.2%] top-[33.1%]",
    textClassName: "text-[clamp(4.9rem,6.2vw,6rem)]",
    depth: 1.05,
  },
  {
    label: "that",
    className: "left-[31.4%] top-[44.5%]",
    textClassName: "text-[clamp(4.35rem,5.3vw,5rem)]",
    depth: 1,
  },
  {
    label: "captivate",
    className: "left-[59.2%] top-[57.2%]",
    textClassName: "text-[clamp(4.55rem,5.9vw,5.65rem)]",
    depth: 1.05,
  },
  {
    label: "your",
    className: "left-[55.1%] top-[68.7%]",
    textClassName: "text-[clamp(4.35rem,5.4vw,5.05rem)]",
    depth: 0.95,
  },
  {
    label: "audience",
    className: "left-[47.9%] top-[80.2%]",
    textClassName: "text-[clamp(4.7rem,6vw,5.75rem)]",
    depth: 0.82,
  },
];

const backgroundBlocks = [
  {
    className: "left-[4.4%] top-[46.6%] h-[25.2%] w-[29.6%]",
    color: "rgba(255,255,255,0.055)",
    depth: 12,
  },
  {
    className: "left-[58.5%] top-[43.4%] h-[26.8%] w-[14.7%]",
    color: "rgba(255,255,255,0.07)",
    depth: 16,
  },
  {
    className: "left-[69.6%] top-[43.8%] h-[26.4%] w-[13.4%]",
    color: "rgba(255,255,255,0.1)",
    depth: 20,
  },
  {
    className: "left-[80.5%] top-[44.2%] h-[26.2%] w-[11.4%]",
    color: "rgba(255,255,255,0.078)",
    depth: 24,
  },
];

export function Case010DevAgencyHero() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0.5, y: 0.5 });

  return (
    <main
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen bg-[#151515] px-3 py-3 text-[#111111] sm:px-5 sm:py-5 lg:px-10 lg:py-9`}
      style={{ fontFamily: "var(--font-case-010-body)" }}
    >
      <section
        className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1220px] flex-col overflow-hidden border border-black/25 bg-[#d9d6d1] shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[min(860px,calc(100vh-4.5rem))]"
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          setPointer({
            x: (event.clientX - bounds.left) / bounds.width,
            y: (event.clientY - bounds.top) / bounds.height,
          });
        }}
        onPointerLeave={() => setPointer({ x: 0.5, y: 0.5 })}
      >
        <div className="relative flex min-h-full flex-1 flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-8 lg:py-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_54%_29%,rgba(255,255,255,0.34),transparent_56%)] opacity-70"
          />

          {backgroundBlocks.map((block) => (
            <div
              key={block.className}
              aria-hidden
              className={`absolute rounded-[1.8rem] ${block.className}`}
              style={{
                background: block.color,
                transform: `translate3d(${(pointer.x - 0.5) * -block.depth}px, ${(pointer.y - 0.5) * -block.depth * 0.7}px, 0)`,
                transition: "transform 220ms ease-out",
              }}
            />
          ))}

          <header className="relative z-20 flex items-start justify-between gap-6 text-[0.62rem] font-medium tracking-[-0.03em] text-black/72 sm:text-[0.68rem]">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="text-[0.85rem] leading-none">
                ✺
              </span>
              <span>Describe</span>
            </div>

            <p className="max-w-[7.5rem] text-right leading-[1.45] text-black/46 sm:max-w-[8.5rem]">
              We want to make sure you always have someone you can trust to help.
            </p>
          </header>

          <div className="relative flex flex-1 flex-col justify-between gap-10 pb-2 pt-7 sm:pt-10 lg:pt-0">
            <div className="relative min-h-[22rem] flex-1 lg:min-h-0">
              <div className="lg:hidden">
                <h1
                  className="max-w-[9ch] text-[clamp(3.6rem,13vw,6.2rem)] font-extrabold leading-[0.84] tracking-[-0.085em] text-black"
                  style={{ fontFamily: "var(--font-case-010-display)" }}
                >
                  Crafting innovative applications that captivate your audience
                </h1>
              </div>

              <div className="absolute inset-0 hidden lg:block">
                {headlinePieces.map((piece) => {
                  const shiftX = (pointer.x - 0.5) * piece.depth * -18;
                  const shiftY = (pointer.y - 0.5) * piece.depth * -10;
                  return (
                    <span
                      key={piece.label}
                      className={`absolute ${piece.className} ${piece.textClassName} font-bold leading-[0.86] tracking-[-0.075em] text-black`}
                      style={{
                        fontFamily: "var(--font-case-010-display)",
                        textAlign: piece.align,
                        transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
                        transition: "transform 220ms ease-out",
                      }}
                    >
                      {piece.label}
                    </span>
                  );
                })}
              </div>

              <div className="relative z-20 mt-8 lg:absolute lg:left-[39.2%] lg:top-[36.2%] lg:mt-0">
                <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-5">
                  <article
                    className="relative w-[14.3rem] overflow-hidden bg-[#ff5542] px-4 py-4 text-black shadow-[0_24px_44px_rgba(255,81,63,0.2)] sm:w-[14.8rem] sm:px-5 sm:py-5"
                    style={{
                      transform: `translate3d(${(pointer.x - 0.5) * -12}px, ${(pointer.y - 0.5) * -10}px, 0)`,
                      transition: "transform 240ms ease-out",
                    }}
                  >
                    <div className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-[-0.04em]">
                      <span aria-hidden className="text-[0.8rem] leading-none">
                        ◒◒◒
                      </span>
                      <span>dc-dev</span>
                    </div>

                    <p className="mt-5 max-w-[9.5rem] text-[1.02rem] font-semibold leading-[1.08] tracking-[-0.055em] text-black/92">
                      We have all the services you need to look after your online presence.
                    </p>
                    <p className="mt-4 max-w-[10.3rem] text-[0.72rem] leading-[1.45] tracking-[-0.04em] text-black/78">
                      From web design, personalized email addresses, hosting, CDNs to business IT support.
                    </p>

                    <a
                      href="#details"
                      className="mt-8 inline-flex items-center gap-1.5 text-[0.94rem] font-semibold tracking-[-0.05em] text-black underline underline-offset-4 transition duration-200 hover:translate-x-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
                    >
                      <span>Details</span>
                      <span aria-hidden>↗</span>
                    </a>
                  </article>

                  <a
                    href="mailto:hello@dc-dev.example"
                    className="group inline-flex items-center gap-3 rounded-full border border-black/8 bg-white/82 px-3 py-2 text-[0.82rem] font-medium tracking-[-0.04em] text-black shadow-[0_12px_24px_rgba(17,17,17,0.08)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
                    style={{
                      transform: `translate3d(${(pointer.x - 0.5) * -6}px, ${(pointer.y - 0.5) * -4}px, 0)`,
                      transition: "transform 240ms ease-out, background-color 200ms ease, box-shadow 200ms ease",
                    }}
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#151515] text-white transition duration-200 group-hover:translate-x-0.5">
                      ↗
                    </span>
                    <span className="pr-2">Build with us</span>
                  </a>
                </div>
              </div>
            </div>

            <footer className="relative z-20 mt-6 grid gap-6 pt-3 text-black/76 lg:mt-0 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-0">
              <div className="grid gap-5 sm:grid-cols-[8rem_5rem_11rem] sm:gap-7">
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-black/48">Est.</p>
                  <p
                    className="mt-1 text-[1.8rem] font-semibold leading-none tracking-[-0.08em]"
                    style={{ fontFamily: "var(--font-case-010-display)" }}
                  >
                    2017 //
                  </p>
                </div>
                <div className="self-end text-[0.7rem] font-medium tracking-[-0.04em] text-black/72">dc-dev′</div>
                <div id="details" className="text-[1.05rem] font-semibold leading-[1.05] tracking-[-0.055em] text-black/88">
                  Web &amp; App
                  <br />
                  Development
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
