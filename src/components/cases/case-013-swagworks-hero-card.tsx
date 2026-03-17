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
    <svg viewBox="0 0 120 110" aria-hidden className="h-20 w-20 text-[#4f2369] sm:h-24 sm:w-24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
        <path d="M20 89h26" />
        <path d="M46 89v-17h14V57h13V40h12" />
        <path d="M66 16l18 16-16 5-17-16z" />
        <path d="M72 21l6 15" />
        <path d="M81 18l5 11" />
        <path d="M59 30l7 10-5 14" />
        <path d="M62 54l-10 12" />
        <path d="M51 66l-10-2-7 10" />
        <path d="M57 53l14 8" />
        <path d="M71 61l12 9" />
        <path d="M81 45l18 12-4 23" />
        <path d="M64 71v18" />
        <path d="M52 71v18" />
        <path d="M36 76l-6 11" />
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
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen overflow-hidden text-[#2c103f]`}
      style={{
        backgroundColor: "#f5eef5",
        fontFamily: "var(--font-case-013-body)",
      }}
    >
      <style jsx global>{`
        @keyframes case013Float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -7px, 0);
          }
        }

        .case013-float {
          animation: case013Float 12s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .case013-float {
            animation: none !important;
          }

          * {
            scroll-behavior: auto !important;
            transition-duration: 0ms !important;
            animation-duration: 0ms !important;
          }
        }
      `}</style>

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
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.75) 18%, rgba(255,255,255,0) 42%), linear-gradient(180deg, #f7f1f8 0%, #f5eef5 55%, #f2e9f4 100%)",
          }}
        />

        <div
          aria-hidden
          className="absolute left-1/2 top-[15%] h-[16rem] w-[32rem] max-w-[90vw] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 72%)",
          }}
        />

        <div className="relative flex w-full max-w-[1380px] items-center justify-center">
          <h1
            aria-label="How it Works"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[clamp(4.75rem,15.5vw,9.75rem)] leading-[0.82] tracking-[-0.1em] text-[#43125f]"
            style={{
              fontFamily: "var(--font-case-013-display)",
              fontWeight: 900,
              transform: `translate3d(calc(-50% + ${depthX * -24}px), calc(-50% + ${depthY * -5}px), 0)`,
            }}
          >
            How it Works
          </h1>

          <div className="relative z-10 flex items-center justify-center [perspective:1500px]">
            <div
              aria-hidden
              className="absolute left-1/2 top-[86%] h-14 w-[16rem] -translate-x-1/2 rounded-full bg-[#52206b]/14 blur-2xl sm:w-[20rem]"
              style={{
                transform: `translate3d(calc(-50% + ${depthX * 14}px), ${depthY * 6}px, 0)`,
              }}
            />

            <div
              aria-hidden
              className="absolute h-[20.8rem] w-[16rem] rounded-[1.9rem] border border-white/70 bg-[rgba(255,255,255,0.7)] shadow-[0_20px_42px_rgba(104,67,130,0.12)] sm:h-[24.8rem] sm:w-[19rem]"
              style={{
                transform: `translate3d(${-16 + depthX * 8}px, ${15 + depthY * 4}px, -80px) rotate(-8deg)`,
              }}
            />

            <div
              aria-hidden
              className="absolute h-[20.8rem] w-[16rem] rounded-[1.9rem] border border-white/85 bg-[rgba(255,255,255,0.88)] shadow-[0_20px_42px_rgba(104,67,130,0.11)] sm:h-[24.8rem] sm:w-[19rem]"
              style={{
                transform: `translate3d(${14 + depthX * 10}px, ${6 + depthY * 4}px, -36px) rotate(7deg)`,
              }}
            />

            <article
              className="case013-float relative flex h-[22rem] w-[16.9rem] flex-col rounded-[1.9rem] border border-[#ba90d7]/46 bg-[#c89ce4] px-5 py-5 text-[#361048] shadow-[0_28px_60px_rgba(87,34,113,0.2),inset_0_1px_0_rgba(255,255,255,0.34)] sm:h-[26.2rem] sm:w-[20.1rem] sm:px-6 sm:py-6"
              style={{
                transform: `translate3d(${depthX * 8}px, ${depthY * 6}px, 0) rotate(${-4 + depthX * 2.2}deg) rotateX(${depthY * -3}deg) rotateY(${depthX * 4}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 38%, rgba(86,34,112,0.08) 100%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <SwagClimberMark />

                <p
                  className="mt-auto max-w-[11.3ch] text-[clamp(1.65rem,3.8vw,2.85rem)] leading-[0.9] tracking-[-0.085em] text-[#361048]"
                  style={{
                    fontFamily: "var(--font-case-013-display)",
                    fontWeight: 800,
                  }}
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
