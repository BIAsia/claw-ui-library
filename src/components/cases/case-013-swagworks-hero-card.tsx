"use client";

import { Archivo, Manrope } from "next/font/google";
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

const displayFace = Archivo({
  subsets: ["latin"],
  variable: "--font-case-013-display",
  weight: ["700", "800", "900"],
});

const bodyFace = Manrope({
  subsets: ["latin"],
  variable: "--font-case-013-body",
  weight: ["500", "600", "700", "800"],
});

type PointerState = {
  x: number;
  y: number;
};

function SwagClimberMark() {
  return (
    <svg viewBox="0 0 108 102" aria-hidden className="h-14 w-14 text-[#53216b] sm:h-16 sm:w-16">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
        <path d="M19 83h23" />
        <path d="M41 83V68h13V54h12V38h11" />
        <path d="M61 18 79 34 63 39 47 24Z" />
        <path d="m66 22 6 14" />
        <path d="m75 19 4 10" />
        <path d="m52 29 8 10-4 14" />
        <path d="m59 52-10 12" />
        <path d="m48 64-10-2-7 10" />
        <path d="m55 52 14 7" />
        <path d="m69 59 12 9" />
        <path d="m79 43 17 12-4 21" />
        <path d="M61 68v15" />
        <path d="M50 68v15" />
        <path d="m35 73-6 10" />
      </g>
    </svg>
  );
}

export function Case013SwagworksHeroCard() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);

    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setPointer({
      x: Number(x.toFixed(3)),
      y: Number(y.toFixed(3)),
    });
  }

  function resetPointer() {
    setPointer({ x: 0, y: 0 });
  }

  const depthX = reducedMotion ? 0 : pointer.x;
  const depthY = reducedMotion ? 0 : pointer.y;

  return (
    <main
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen overflow-hidden text-[#3b1455]`}
      style={{
        backgroundColor: "#f5eff6",
        fontFamily: "var(--font-case-013-body)",
      }}
    >
      <section
        aria-label="How it Works"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.24) 18%, rgba(255,255,255,0) 42%), linear-gradient(180deg, #f7f1f8 0%, #f5eef5 58%, #f3edf5 100%)",
          }}
        />

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
          style={{ background: "rgba(214, 190, 224, 0.42)" }}
        />

        <div
          aria-hidden
          className="absolute left-[18%] top-[70%] h-[14rem] w-[14rem] rounded-full blur-[90px]"
          style={{ background: "rgba(238, 198, 213, 0.28)" }}
        />

        <div className="relative flex w-full max-w-[1400px] items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[2.5%] top-1/2 z-0 flex -translate-y-1/2 items-center justify-between select-none text-[clamp(5.2rem,12vw,8.6rem)] leading-[0.84] tracking-[-0.09em] text-[#4a1968]"
            style={{
              fontFamily: "var(--font-case-013-display)",
              fontWeight: 900,
              transform: `translate3d(${depthX * -12}px, calc(-50% + ${depthY * -3}px), 0)`,
              transition: "transform 180ms ease-out",
            }}
          >
            <span>How</span>
            <span>Works</span>
          </div>

          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-y-1/2 select-none text-[clamp(4.4rem,9vw,6.8rem)] leading-[0.84] tracking-[-0.09em] text-[#4a1968]"
            style={{
              fontFamily: "var(--font-case-013-display)",
              fontWeight: 900,
              transform: `translate3d(calc(-112% + ${depthX * -8}px), calc(-50% + ${depthY * -3}px), 0)`,
              transition: "transform 180ms ease-out",
            }}
          >
            it
          </span>

          <h1 className="sr-only">How it Works</h1>

          <div className="relative z-10 flex items-center justify-center [perspective:1400px]">
            <div
              aria-hidden
              className="absolute left-1/2 top-[89%] h-16 w-[18rem] -translate-x-1/2 rounded-full bg-[#5d2b79]/12 blur-[26px] sm:w-[22rem]"
              style={{
                transform: `translate3d(calc(-50% + ${depthX * 8}px), ${depthY * 4}px, 0)`,
                transition: "transform 180ms ease-out",
              }}
            />

            <div
              aria-hidden
              className="absolute h-[23rem] w-[18rem] rounded-[2rem] border border-white/60 bg-white/72 shadow-[0_18px_36px_rgba(104,67,130,0.08)] sm:h-[28rem] sm:w-[21rem]"
              style={{
                transform: `translate3d(${-16 + depthX * 6}px, ${8 + depthY * 3}px, -40px) rotate(-7deg)`,
                transition: "transform 180ms ease-out",
              }}
            />

            <div
              aria-hidden
              className="absolute h-[23rem] w-[18rem] rounded-[2rem] border border-white/74 bg-white/78 shadow-[0_18px_36px_rgba(104,67,130,0.08)] sm:h-[28rem] sm:w-[21rem]"
              style={{
                transform: `translate3d(${14 + depthX * 8}px, ${-2 + depthY * 3}px, -20px) rotate(5deg)`,
                transition: "transform 180ms ease-out",
              }}
            />

            <article
              className="relative flex h-[24rem] w-[18rem] flex-col rounded-[2rem] border border-[#be9ad7]/60 bg-[#c9a0e6] px-5 py-5 text-[#43145f] shadow-[0_28px_54px_rgba(87,34,113,0.16)] sm:h-[29rem] sm:w-[21rem] sm:px-6 sm:py-6"
              style={{
                transform: `translate3d(${depthX * 6}px, ${depthY * 5}px, 0) rotate(${-3.6 + depthX * 1.2}deg) rotateX(${depthY * -1.2}deg) rotateY(${depthX * 1.8}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 180ms ease-out",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 34%, rgba(86,34,112,0.05) 100%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <SwagClimberMark />

                <p
                  className="mt-auto max-w-[8.1ch] text-[clamp(2.2rem,4vw,3.4rem)] font-[800] leading-[0.88] tracking-[-0.08em] text-[#43145f]"
                  style={{ fontFamily: "var(--font-case-013-display)" }}
                >
                  Set up your Swag Spend Account and instantly set up your digital Visa Debit card.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
