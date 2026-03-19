"use client";

import Link from "next/link";
import { useState } from "react";

const labels = ["living archive", "pointer-reactive card", "fragments stay loose"];

const glyphs = [
  { left: "10%", top: "12%", w: 120, h: 92, rotate: -14, color: "#efbfd6", border: "#cf2934" },
  { left: "78%", top: "10%", w: 86, h: 124, rotate: 17, color: "#f0b8d8", border: "#cf2934" },
  { left: "82%", top: "72%", w: 128, h: 78, rotate: -12, color: "#efbfd6", border: "#cf2934" },
];

export default function SignalCabinet003Page() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);

  const rotateX = (pointer.y - 0.5) * -12;
  const rotateY = (pointer.x - 0.5) * 14;
  const shiftX = (pointer.x - 0.5) * 20;
  const shiftY = (pointer.y - 0.5) * 14;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe8] text-[#7f131d]">
      <section className="relative mx-auto flex min-h-screen max-w-[1480px] items-center justify-center px-5 py-8 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.7),transparent_28%)]" />

        {glyphs.map((glyph, index) => (
          <div
            key={index}
            aria-hidden
            className="pointer-events-none absolute rounded-[42%_58%_63%_37%/39%_39%_61%_61%] border-2 opacity-95"
            style={{
              left: glyph.left,
              top: glyph.top,
              width: glyph.w,
              height: glyph.h,
              background: glyph.color,
              borderColor: glyph.border,
              transform: `translate3d(${shiftX * (0.2 + index * 0.12)}px, ${shiftY * (0.2 + index * 0.1)}px, 0) rotate(${glyph.rotate}deg)`,
              transition: "transform 220ms ease-out",
            }}
          />
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
          className="relative w-full max-w-[780px] border-2 border-[#cf2934] bg-[#f8f2eb] p-5 shadow-[0_24px_60px_rgba(98,27,32,0.08)] md:p-8"
          style={{
            transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${shiftX}px, ${shiftY}px, 0) scale(${hovered ? 1.01 : 1})`,
            transformStyle: "preserve-3d",
            transition: hovered ? "none" : "transform 260ms ease",
          }}
        >
          <div className="flex items-start justify-between gap-4 border-b-2 border-[#cf2934] pb-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#aa5c60]">signal cabinet / 003</p>
            <Link href="/agent-probe/signal-cabinet" className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#cf2934] transition hover:opacity-70">
              compare all
            </Link>
          </div>

          <div className="relative grid gap-8 pt-6 md:grid-cols-[1.15fr_0.85fr] md:pt-8">
            <div>
              <h1 className="max-w-[8ch] text-[clamp(3.8rem,10vw,7.6rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
                Signal Cabinet
              </h1>
              <p className="mt-5 max-w-[18ch] text-[1rem] leading-7 text-[#944e52] md:text-[1.05rem]">
                Keep scraps, scans, screenshots, and overheard phrases in motion until the pattern becomes visible.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-5">
              <div className="space-y-3">
                {labels.map((label) => (
                  <div key={label} className="border border-[#cf2934] px-3 py-2 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#a15b61]">
                    {label}
                  </div>
                ))}
              </div>

              <div className="border-2 border-dashed border-[#cf2934] bg-[#f1d6e4] px-4 py-4">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#9b5258]">interaction note</p>
                <p className="mt-3 text-[1.1rem] font-black uppercase leading-[0.95] tracking-[-0.04em]">
                  The card follows the hand because the archive is still unstable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 border-t-2 border-[#cf2934] pt-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#a15b61] md:grid-cols-3">
            <div>raw fragments first</div>
            <div>AI names recurrence later</div>
            <div>not a normal filing system</div>
          </div>
        </article>
      </section>
    </main>
  );
}
