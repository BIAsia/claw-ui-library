"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = ["Issue", "Archive", "Notes", "Subscribe"];
const features = [
  {
    number: "1",
    title: "Fragments before categories",
    excerpt: "Signal Cabinet begins with the raw material: images, notes, and scraps that do not yet know which issue they belong to.",
  },
  {
    number: "2",
    title: "An assistant for recurrence",
    excerpt: "The AI notices repeated forms and tentative pairings, but it does not flatten the archive into a dashboard.",
  },
];

function ScenicField({ pointer }: { pointer: { x: number; y: number } }) {
  return (
    <div className="relative aspect-[1.42/1] overflow-hidden border border-black/10 bg-[#d7d3cd]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#efede8_0%,#dedad3_30%,#d1ccc4_56%,#c4bfb7_100%)]" />
      <div
        className="absolute left-[8%] top-[9%] h-[30%] w-[72%] rounded-full bg-white/55 blur-3xl transition-transform duration-500"
        style={{ transform: `translate3d(${(pointer.x - 0.5) * -16}px, ${(pointer.y - 0.5) * -10}px, 0)` }}
      />
      <div
        className="absolute inset-x-[4%] top-[19%] h-[31%] rounded-[50%] bg-[#bfbab2]/55 blur-[28px] transition-transform duration-500"
        style={{ transform: `translate3d(${(pointer.x - 0.5) * -10}px, ${(pointer.y - 0.5) * -8}px, 0)` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,rgba(204,199,191,0.32)_0%,rgba(175,170,164,0.72)_58%,rgba(149,144,138,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-[28%] h-px bg-black/8" />
      {[
        { left: "18%", top: "62%", scale: 0.88 },
        { left: "35%", top: "59%", scale: 0.8 },
        { left: "58%", top: "58%", scale: 0.84 },
        { left: "74%", top: "56%", scale: 0.9 },
      ].map((boat, index) => (
        <svg
          key={index}
          viewBox="0 0 86 28"
          className="absolute overflow-visible transition-transform duration-500"
          style={{
            left: boat.left,
            top: boat.top,
            width: 86 * boat.scale,
            height: 28 * boat.scale,
            transform: `translate3d(${(pointer.x - 0.5) * -14 * boat.scale}px, ${(pointer.y - 0.5) * -7 * boat.scale}px, 0)`,
          }}
        >
          <ellipse cx="43" cy="23.5" rx="24" ry="3.2" fill="rgba(66,63,60,0.12)" />
          <path d="M18 18.5 L30 9.5 H72 L66 18.5 Z" fill="#65615d" />
          <path d="M26 10.2 H72" stroke="#96918b" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
        </svg>
      ))}
    </div>
  );
}

export default function SignalCabinet005Page() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.44 });

  return (
    <main className="min-h-screen overflow-hidden bg-[#ebe7e0] text-[#111111]">
      <section
        className="relative mx-auto min-h-screen w-full max-w-[1560px] px-4 sm:px-6 lg:px-8"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setPointer({
            x: (event.clientX - rect.left) / rect.width,
            y: (event.clientY - rect.top) / rect.height,
          });
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.68),transparent_32%),linear-gradient(180deg,#f1ede7_0%,#ebe7e0_36%,#e7e2db_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(22,22,22,0.3)_1px,transparent_0)] [background-size:12px_12px]" />

        <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[11.5rem_minmax(0,1fr)_22rem] xl:grid-cols-[12rem_minmax(0,1fr)_23rem]">
          <aside className="flex flex-col justify-between border-b border-black/12 py-6 lg:border-r lg:border-b-0 lg:py-9">
            <nav className="flex flex-col gap-3 pr-4 text-[1.02rem] tracking-[-0.03em] text-[#151515] lg:pr-6">
              {navigation.map((item) => (
                <a key={item} href="#issue" className="inline-flex w-fit transition duration-300 hover:translate-x-1">
                  {item}
                </a>
              ))}
            </nav>
            <Link href="/agent-probe/signal-cabinet" className="mt-10 w-fit pr-4 text-[0.72rem] uppercase tracking-[0.2em] text-[#161616]/72 lg:pr-6">
              compare all
            </Link>
          </aside>

          <section className="flex min-h-full flex-col border-b border-black/12 py-6 lg:border-r lg:border-b-0 lg:px-4 lg:py-9 xl:px-6">
            <header>
              <div className="flex flex-col gap-4 border-b border-black/12 pb-4 md:flex-row md:items-end md:justify-between md:gap-8">
                <h1 className="max-w-[11ch] text-[clamp(4rem,8vw,7.4rem)] font-extrabold leading-[0.88] tracking-[-0.095em] text-[#0f0f0f]">
                  Signal Cabinet
                </h1>
                <p className="pb-2 text-[1rem] tracking-[-0.03em] text-[#161616]/82">Issue 01 / Living archive</p>
              </div>
              <div className="flex items-center gap-3 py-3 text-[1rem] tracking-[-0.035em] text-[#161616]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#111111]" />
                <span>Pinned issue</span>
              </div>
            </header>

            <article id="issue" className="grid flex-1 grid-rows-[auto_auto_1fr] pt-3">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(14rem,1.04fr)_minmax(18rem,1fr)] lg:items-start">
                <div className="hidden lg:block" aria-hidden />
                <div className="relative">
                  <ScenicField pointer={pointer} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 pt-4 lg:grid-cols-[minmax(14rem,1.04fr)_minmax(18rem,1fr)]">
                <div className="hidden lg:block" aria-hidden />
                <div className="space-y-2.5">
                  <h2 className="max-w-[16ch] text-[clamp(1.75rem,2.5vw,2.45rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#101010]">
                    A publication for scraps, screenshots, and notes that should stay fluid before they turn into categories.
                  </h2>
                  <p className="max-w-[36rem] text-[0.98rem] leading-7 text-[#161616]/76">
                    This version treats the product concept as an editorial front page: one atmospheric visual field, one lead statement, and a small number of issue-like entries instead of a conventional marketing stack.
                  </p>
                </div>
              </div>
            </article>
          </section>

          <aside className="flex flex-col justify-between py-6 lg:py-9">
            <div>
              {features.map((feature, index) => (
                <article key={feature.number} className={`py-4 ${index === 0 ? "border-b border-black/12" : ""}`}>
                  <div className="mb-3 flex items-start justify-between gap-4 text-[#161616]">
                    <span className="text-[3rem] leading-none tracking-[-0.06em]">{feature.number}</span>
                    <span className="pt-2 text-[0.72rem] tracking-[-0.02em] text-[#161616]/70">featured</span>
                  </div>
                  <div className="max-w-[17rem]">
                    <h3 className="text-[1.05rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111111]">{feature.title}</h3>
                    <p className="mt-3 max-w-[16rem] text-[0.86rem] leading-[1.28] tracking-[-0.02em] text-[#111111]/74">{feature.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="max-w-[16rem] text-[0.82rem] leading-6 text-[#151515]/68">
              Publication-led navigation, a single scenic field, and issue-style entries are locked parts of this mode.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
