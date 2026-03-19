"use client";

import Link from "next/link";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import { useMemo, useState } from "react";

const displayFace = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-signal-cabinet-003-display",
  weight: ["400", "500", "600", "700"],
});

const infoFace = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-signal-cabinet-003-info",
  weight: ["400", "500", "600", "700"],
});

const labels = [
  { text: "signal drift", left: "10%", top: "15%", rotate: -10, tone: "paper" as const },
  { text: "cabinet note", left: "74%", top: "12%", rotate: 12, tone: "pink" as const },
  { text: "pattern pending", left: "70%", top: "77%", rotate: -8, tone: "paper" as const },
  { text: "unstable index", left: "7%", top: "74%", rotate: 7, tone: "pink" as const },
];

const wirePaths = [
  "M 82 154 C 152 111, 257 106, 346 146",
  "M 522 164 C 575 142, 637 153, 672 197 C 693 224, 695 264, 671 298",
  "M 130 742 C 212 780, 287 796, 372 806 C 457 815, 542 808, 620 770",
  "M 520 500 C 566 472, 626 481, 654 527 C 673 561, 666 606, 628 634",
];

const markPaths = [
  "M 214 116 L 260 174",
  "M 247 101 L 265 140",
  "M 118 625 L 158 647",
  "M 576 675 L 620 694",
  "M 548 714 L 591 727",
  "M 228 844 L 269 834",
];

function labelToneClasses(tone: "paper" | "pink") {
  return tone === "pink"
    ? "border-[#cc2a36] bg-[#efbfd8] text-[#8e4047]"
    : "border-[#cc2a36] bg-[#f6efe8] text-[#9a545a]";
}

export default function SignalCabinet003Page() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);

  const rotateX = (pointer.y - 0.5) * -10;
  const rotateY = (pointer.x - 0.5) * 11;
  const shiftX = (pointer.x - 0.5) * 24;
  const shiftY = (pointer.y - 0.5) * 16;

  const motion = useMemo(
    () => ({
      foregroundX: shiftX * 0.9,
      foregroundY: shiftY * 0.9,
      midX: shiftX * 0.42,
      midY: shiftY * 0.42,
      backX: shiftX * -0.18,
      backY: shiftY * -0.18,
    }),
    [shiftX, shiftY],
  );

  return (
    <main
      className={`${displayFace.variable} ${infoFace.variable} min-h-screen overflow-hidden bg-[#121111] text-[#cc2a36]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,#171414_0%,#0f0e0e_100%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-8 md:px-10 md:py-14">
        <div className="relative w-full max-w-[1120px]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[76vh] w-[76vh] max-h-[880px] max-w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition duration-300"
            style={{
              background: `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(239,191,216,0.22), transparent 25%), radial-gradient(circle at 50% 42%, rgba(204,42,54,0.12), transparent 38%)`,
              opacity: hovered ? 1 : 0.68,
            }}
          />

          {labels.map((label, index) => (
            <div
              key={label.text}
              aria-hidden
              className={`pointer-events-none absolute hidden border px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] md:block ${labelToneClasses(label.tone)}`}
              style={{
                left: label.left,
                top: label.top,
                transform: `translate3d(${motion.backX * (0.8 + index * 0.08)}px, ${motion.backY * (0.8 + index * 0.08)}px, 0) rotate(${label.rotate}deg)`,
                boxShadow: "0 14px 30px rgba(0,0,0,0.16)",
              }}
            >
              {label.text}
            </div>
          ))}

          <article
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => {
              setHovered(false);
              setPointer({ x: 0.5, y: 0.5 });
            }}
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setPointer({
                x: (event.clientX - rect.left) / rect.width,
                y: (event.clientY - rect.top) / rect.height,
              });
            }}
            className="relative mx-auto aspect-[736/1051] w-full max-w-[736px] overflow-hidden rounded-[1.7rem] border border-[#cf9e97]/35 bg-[#f6f0e8] shadow-[0_36px_120px_rgba(0,0,0,0.48)]"
            style={{
              transform: `perspective(1800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${shiftX}px, ${shiftY}px, 0) scale(${hovered ? 1.008 : 1})`,
              transformStyle: "preserve-3d",
              transition: hovered ? "none" : "transform 260ms ease",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_11%,rgba(255,255,255,0.88),transparent_16%),radial-gradient(circle_at_74%_74%,rgba(255,255,255,0.44),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.06)_14%,rgba(0,0,0,0.03)_62%,rgba(255,255,255,0.18))]" />
            <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(165,129,122,0.42)_1px,transparent_0)] [background-size:13px_13px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-200"
              style={{
                opacity: hovered ? 1 : 0.52,
                background: `radial-gradient(240px 240px at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(255,255,255,0.18), transparent 42%)`,
              }}
            />

            <div
              className="absolute inset-x-[7%] top-[6.5%] flex items-start justify-between text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#a35c5f]"
              style={{ transform: `translate3d(${motion.backX}px, ${motion.backY}px, 0)` }}
            >
              <div className="space-y-1">
                <p>agent probe</p>
                <p>signal cabinet / 003</p>
              </div>
              <Link href="/agent-probe/signal-cabinet" className="transition hover:opacity-60">
                index
              </Link>
            </div>

            <svg
              viewBox="0 0 736 1051"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="Signal Cabinet poster card with oversized typography, cabinet labels, hand-drawn graphic traces, and pointer-reactive depth."
            >
              <g transform={`translate(${motion.backX} ${motion.backY})`}>
                <path
                  d="M 137 162 C 157 121, 223 116, 272 142 C 312 163, 327 212, 293 240 C 253 273, 176 271, 136 231 C 118 212, 120 183, 137 162 Z"
                  fill="#efbfd8"
                  stroke="#cc2a36"
                  strokeWidth="2.2"
                />
                <path
                  d="M 520 128 C 563 99, 626 108, 659 148 C 688 183, 684 237, 635 254 C 579 272, 504 245, 487 193 C 481 169, 492 144, 520 128 Z"
                  fill="#efbfd8"
                  stroke="#cc2a36"
                  strokeWidth="2.2"
                />
                <path
                  d="M 474 760 C 512 733, 575 739, 618 776 C 647 802, 654 846, 623 874 C 584 908, 512 902, 467 866 C 430 836, 433 789, 474 760 Z"
                  fill="#efbfd8"
                  stroke="#cc2a36"
                  strokeWidth="2.2"
                />
                <path
                  d="M 120 760 C 150 732, 198 722, 240 739 C 279 754, 306 791, 291 824 C 273 862, 213 875, 161 858 C 115 843, 92 796, 120 760 Z"
                  fill="#efbfd8"
                  stroke="#cc2a36"
                  strokeWidth="2.2"
                />
              </g>

              <g
                fill="none"
                stroke="#cc2a36"
                strokeWidth="4.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform={`translate(${motion.midX} ${motion.midY})`}
              >
                {wirePaths.map((path) => (
                  <path key={path} d={path} opacity="0.88" />
                ))}
                <path d="M 228 352 C 284 309, 376 295, 455 324 C 524 351, 561 418, 530 474 C 494 539, 394 558, 303 532 C 222 509, 166 431, 195 379" />
                <path d="M 290 545 C 315 573, 355 586, 392 577 C 437 566, 471 528, 475 480" />
                <path d="M 161 206 L 205 235 L 153 252" />
                <path d="M 574 186 L 620 198 L 588 233" />
                <path d="M 546 811 L 592 824 L 558 857" />
                {markPaths.map((path) => (
                  <path key={path} d={path} strokeWidth="3.9" />
                ))}
              </g>
            </svg>

            <div className="absolute inset-x-[7%] top-[14%] flex justify-between gap-4">
              <div
                className="max-w-[48%]"
                style={{ transform: `translate3d(${motion.foregroundX}px, ${motion.foregroundY}px, 0)` }}
              >
                <p
                  className="text-[clamp(4.5rem,10vw,7.9rem)] font-semibold uppercase leading-[0.82] tracking-[-0.08em] text-[#d12633]"
                  style={{ fontFamily: "var(--font-signal-cabinet-003-display)" }}
                >
                  Signal
                  <br />
                  Cabinet
                </p>
              </div>

              <div
                className="max-w-[29%] pt-2 text-right"
                style={{ transform: `translate3d(${motion.midX}px, ${motion.midY}px, 0)` }}
              >
                <p
                  className="text-[0.78rem] font-semibold uppercase leading-[1.25] tracking-[0.2em] text-[#a55f61]"
                  style={{ fontFamily: "var(--font-signal-cabinet-003-info)" }}
                >
                  fragments stay live
                  <br />
                  until recurrence holds
                </p>
              </div>
            </div>

            <div
              className="absolute left-[8.5%] top-[39%] max-w-[30%] border border-[#cc2a36] bg-[#f4ece4]/90 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#985156] shadow-[0_12px_24px_rgba(100,32,39,0.08)]"
              style={{
                transform: `translate3d(${motion.midX * 0.9}px, ${motion.midY * 0.9}px, 0) rotate(-6deg)`,
                fontFamily: "var(--font-signal-cabinet-003-info)",
              }}
            >
              listening stack
              <br />
              scan residue
              <br />
              rerouted evidence
            </div>

            <div
              className="absolute right-[8%] top-[43%] max-w-[36%] border border-[#cc2a36] bg-[#efbfd8] px-5 py-5 text-[#862e37] shadow-[0_20px_38px_rgba(112,32,39,0.13)]"
              style={{ transform: `translate3d(${motion.foregroundX * 0.7}px, ${motion.foregroundY * 0.7}px, 0) rotate(5deg)` }}
            >
              <p
                className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#9a4d56]"
                style={{ fontFamily: "var(--font-signal-cabinet-003-info)" }}
              >
                active note
              </p>
              <p
                className="mt-3 text-[1.22rem] font-semibold uppercase leading-[0.95] tracking-[-0.045em]"
                style={{ fontFamily: "var(--font-signal-cabinet-003-display)" }}
              >
                not a filing system.
                <br />
                a pressure surface.
              </p>
            </div>

            <div
              className="absolute left-[8%] bottom-[12%] max-w-[34%]"
              style={{ transform: `translate3d(${motion.midX * 0.8}px, ${motion.midY * 0.8}px, 0)` }}
            >
              <p
                className="text-[1rem] leading-[1.55] text-[#91555a] md:text-[1.05rem]"
                style={{ fontFamily: "var(--font-signal-cabinet-003-info)" }}
              >
                Keep scraps, scans, screenshots, and overheard phrases in motion until the hidden pattern starts naming itself.
              </p>
            </div>

            <div
              className="absolute right-[7.6%] bottom-[8.5%] flex flex-col items-end gap-2 text-right"
              style={{ transform: `translate3d(${motion.backX * 1.3}px, ${motion.backY * 1.3}px, 0)` }}
            >
              <p
                className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#a15a5f]"
                style={{ fontFamily: "var(--font-signal-cabinet-003-info)" }}
              >
                route / hold / release
              </p>
              <p
                className="text-[2rem] font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-[#cc2a36]"
                style={{ fontFamily: "var(--font-signal-cabinet-003-display)" }}
              >
                pattern
                <br />
                pending
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
