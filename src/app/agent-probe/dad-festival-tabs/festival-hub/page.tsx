"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const programme = {
  talks: {
    label: "Talks",
    kicker: "Main stage / live broadcast",
    accent: "#ffcf33",
    panel: "#fff1b1",
    ink: "#231800",
    stamp: "LOUD ROOM",
    intro: "Big-room sessions for design systems, creative tooling, moving-image craft, and the awkward politics of originality.",
    items: [
      { time: "10:00", title: "After the Moodboard", meta: "Ari Vale · Hall Orbit", note: "How teams move from references to authored visual grammar." },
      { time: "12:30", title: "Interfaces With Consequence", meta: "Sahar Bloom · Forum East", note: "Public infrastructure, civic trust, and why UI polish is never neutral." },
      { time: "17:15", title: "Motion as Editorial Voice", meta: "Niko Sanz · Main Stage", note: "Building transitions that carry narrative instead of default easing." },
    ],
  },
  workshops: {
    label: "Workshops",
    kicker: "Hands-on / limited seats",
    accent: "#14d89a",
    panel: "#bbffe7",
    ink: "#002518",
    stamp: "MAKE THINGS",
    intro: "Small rooms, active making, and practical sessions designed for teams who want new methods rather than inspiration alone.",
    items: [
      { time: "11:00", title: "Typography for Dense Interfaces", meta: "Studio Vanta · Lab 2", note: "Turn hard hierarchies and long data labels into elegant systems." },
      { time: "14:00", title: "Prompting Without Losing Taste", meta: "Lio Mercer · Lab 5", note: "Tooling workflows that keep judgment in human hands." },
      { time: "16:30", title: "Prototype the Venue", meta: "Kei Morris · Map Room", note: "Use spatial cues, signage, and interaction states to direct live crowds." },
    ],
  },
  installations: {
    label: "Installations",
    kicker: "Open all day / city spread",
    accent: "#ff6f3b",
    panel: "#ffd0c0",
    ink: "#331105",
    stamp: "AFTER DARK",
    intro: "Screenings, demo chambers, public prototypes, and one-night interventions threaded through the district.",
    items: [
      { time: "All day", title: "Signal Forest", meta: "Pier Warehouse", note: "Reactive light canopy shaped by the festival audio archive." },
      { time: "18:45", title: "Poster Relay", meta: "Canal Wall", note: "Rolling projection series pairing live coding with typographic takeovers." },
      { time: "20:30", title: "Open Crit Dock", meta: "South Courtyard", note: "Bring one work-in-progress and leave with five hard opinions." },
    ],
  },
  city: {
    label: "City Map",
    kicker: "Walkable clusters / hospitality",
    accent: "#7e6bff",
    panel: "#d9d1ff",
    ink: "#190f47",
    stamp: "MOVE FAST",
    intro: "Use the venue layer to plan your route between talks, workshops, food breaks, and late screenings without dropping context.",
    items: [
      { time: "Cluster A", title: "Harbour Stage", meta: "Talks / screenings / badge desk", note: "Primary hub with transit stop, lockers, and festival radio booth." },
      { time: "Cluster B", title: "Lab Quarter", meta: "Workshops / prototyping rooms", note: "Three converted studios for active sessions and sponsor demos." },
      { time: "Cluster C", title: "Night Route", meta: "Installations / after-hours", note: "Outdoor projection trail ending at the river steps bar." },
    ],
  },
  tickets: {
    label: "Tickets",
    kicker: "Passes / access / planning",
    accent: "#ff4fb0",
    panel: "#ffd0eb",
    ink: "#3a0723",
    stamp: "GET IN",
    intro: "Fast booking overview for full-week, day, and night-route access, plus what each badge unlocks across the programme.",
    items: [
      { time: "Full pass", title: "Week access", meta: "¥780 · all tracks", note: "Includes talks, installations, city map concierge, and one workshop priority window." },
      { time: "Day pass", title: "Single-day roam", meta: "¥220 · choose any day", note: "Ideal for locals attending one cluster and the evening line-up." },
      { time: "Night route", title: "After-hours only", meta: "¥120 · 18:00 onwards", note: "Projection trail, live sets, installation access, and late ferry shuttle." },
    ],
  },
} as const;

type TabKey = keyof typeof programme;
const tabKeys = Object.keys(programme) as TabKey[];

export default function DadFestivalTabsFestivalHubPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("talks");
  const activePanel = useMemo(() => programme[activeTab], [activeTab]);

  return (
    <main className="min-h-screen bg-[#f5ecd8] px-3 py-3 text-[#17130f] sm:px-4 lg:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1320px] items-center justify-center">
        <article className="relative w-full overflow-hidden border-[3px] border-[#17130f] bg-[#fff7e8] shadow-[0_30px_110px_rgba(47,29,11,0.18)]">
          <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(23,19,15,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,15,0.16)_1px,transparent_1px)] [background-size:100%_5.4rem,5.4rem_100%]" />
          <div className="absolute inset-x-0 top-0 h-3 bg-[#17130f]" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-[#17130f]" />

          <div className="relative z-10 px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
            <header className="grid gap-6 border-b-[3px] border-[#17130f] pb-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#6c5744]">Signals festival / programme sheet / 14–18 May 2026</p>
                <h1 className="mt-3 max-w-[10ch] text-[clamp(3.2rem,7vw,6rem)] font-semibold uppercase leading-[0.82] tracking-[-0.1em] text-[#17130f]">Festival Hub</h1>
                <p className="mt-4 max-w-[42rem] text-sm leading-7 text-[#4b3a2b] sm:text-[15px]">
                  Saturated tabs, printed-programme framing, and loud category cues turn a normal tab surface into something closer to a folded festival bulletin.
                </p>
              </div>

              <div className="grid gap-3 self-end sm:grid-cols-3">
                <div className="border-2 border-[#17130f] bg-[#ffcf33] p-4">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#231800]/55">Now previewing</p>
                  <p className="mt-3 text-3xl font-semibold uppercase tracking-[-0.06em] text-[#231800]">{activePanel.label}</p>
                </div>
                <div className="border-2 border-[#17130f] bg-[#17130f] p-4 text-[#fff7e8]">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#fff7e8]/54">Tab marker</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em]">{activePanel.stamp}</p>
                </div>
                <div className="border-2 border-[#17130f] bg-[#fff7e8] p-4 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#4b3a2b]">
                  <Link href="/agent-probe/dad-festival-tabs" className="block border-b border-[#17130f] pb-2 hover:text-[#17130f]">
                    Family page ↗
                  </Link>
                  <Link href="/agent-probe" className="mt-2 block hover:text-[#17130f]">
                    Probe index ↗
                  </Link>
                </div>
              </div>
            </header>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row">
              <nav className="lg:w-[300px] lg:flex-none">
                <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                  {tabKeys.map((key, index) => {
                    const tab = programme[key];
                    const isActive = key === activeTab;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveTab(key)}
                        className="group min-w-[170px] border-[3px] border-[#17130f] px-4 py-4 text-left transition duration-200 ease-out lg:min-w-0"
                        style={{ backgroundColor: isActive ? tab.accent : "#fff7e8", color: isActive ? tab.ink : "#17130f" }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] opacity-60">0{index + 1}</p>
                            <p className="mt-2 text-xl font-semibold uppercase tracking-[-0.05em]">{tab.label}</p>
                          </div>
                          <span className="border-2 border-current px-2 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.24em]">*</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 opacity-82">{tab.kicker}</p>
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="min-w-0 flex-1 border-[3px] border-[#17130f] bg-[#fff7e8] p-5 sm:p-6" style={{ boxShadow: `inset 0 0 0 8px ${activePanel.accent}` }}>
                <div className="grid gap-5 border-b-2 border-dashed border-[#17130f] pb-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6b5847]">{activePanel.kicker}</p>
                    <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.9rem)] font-semibold uppercase tracking-[-0.08em] text-[#17130f]">{activePanel.label}</h2>
                    <p className="mt-3 max-w-[42rem] text-sm leading-7 text-[#4f3c2c] sm:text-[15px]">{activePanel.intro}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="border-2 border-[#17130f] p-4" style={{ backgroundColor: activePanel.panel, color: activePanel.ink }}>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] opacity-56">Section status</p>
                      <p className="mt-3 text-5xl font-semibold leading-none tracking-[-0.08em]">{activePanel.items.length}</p>
                      <p className="mt-2 text-sm leading-6 opacity-80">highlights in this printed tab pane</p>
                    </div>
                    <div className="border-2 border-[#17130f] bg-[#17130f] p-4 text-[#fff7e8]">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#fff7e8]/52">Festival pulse</p>
                      <p className="mt-3 text-2xl font-semibold uppercase tracking-[-0.06em]">12 venues</p>
                      <p className="mt-2 text-sm leading-6 text-[#eadfca]">Talks, labs, projection walls, ferry link, and late route signage.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-4">
                    {activePanel.items.map((item, index) => (
                      <article key={item.title} className="grid gap-4 border-2 border-[#17130f] bg-[#fffdf5] p-4 sm:grid-cols-[130px_1fr]">
                        <div className="border-b-2 border-dashed border-[#17130f] pb-3 sm:border-b-0 sm:border-r-2 sm:pb-0 sm:pr-4">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#715a48]">slot 0{index + 1}</p>
                          <p className="mt-2 text-2xl font-semibold uppercase tracking-[-0.06em] text-[#17130f]">{item.time}</p>
                          <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#715a48]">— — —</p>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl font-semibold uppercase tracking-[-0.05em] text-[#17130f]">{item.title}</h3>
                            <span className="inline-flex border-2 border-[#17130f] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#574434]">{item.meta}</span>
                          </div>
                          <p className="mt-3 max-w-[42rem] text-sm leading-7 text-[#4f3c2c]">{item.note}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <aside className="space-y-4">
                    <div className="border-2 border-[#17130f] p-5" style={{ backgroundColor: activePanel.accent, color: activePanel.ink }}>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] opacity-58">Fast planner</p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 opacity-90">
                        <li>* pick one anchor event before noon.</li>
                        <li>* pair a seated room with a standing installation.</li>
                        <li>* leave twenty minutes between harbour and lab quarter.</li>
                      </ul>
                    </div>
                    <div className="border-2 border-[#17130f] bg-[#fffdf5] p-5">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#715a48]">Printed programme feel</p>
                      <p className="mt-3 text-[1.12rem] leading-8 tracking-[-0.04em] text-[#17130f]">
                        Bold rules, tab colour coding, and little stamps make the interface feel like something folded into your pocket at the badge desk.
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
