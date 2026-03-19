"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const programme = {
  talks: {
    label: "Talks",
    kicker: "Main Stage / live broadcast",
    accent: "#f4cf5b",
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
    accent: "#7be0c3",
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
    accent: "#f08b67",
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
    accent: "#d8c5ff",
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
    accent: "#ffffff",
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
    <main className="min-h-screen bg-[#11111a] px-3 py-3 text-white sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1240px] items-center justify-center">
        <article className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#171724] shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,207,91,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(123,224,195,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_6.2rem,6.2rem_100%]" />

          <div className="relative z-10 px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
            <header className="grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/44">Signals Festival / programme hub / 14–18 May 2026</p>
                <h1 className="mt-3 max-w-[12ch] text-[clamp(3rem,6vw,5.4rem)] font-semibold uppercase leading-[0.86] tracking-[-0.08em] text-white">
                  Festival Hub
                </h1>
                <p className="mt-4 max-w-[42rem] text-sm leading-7 text-white/70 sm:text-[15px]">
                  One tab set, five distinct slices of the same festival week. Move between talks, workshops, installations, routes, and passes without collapsing into a long-scroll brochure.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">Now previewing</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">{activePanel.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">{activePanel.kicker}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-white/62">
                  <Link href="/agent-probe/dad-festival-tabs" className="border border-white/14 px-3 py-2 transition hover:border-white/32 hover:text-white">
                    Family page
                  </Link>
                  <Link href="/agent-probe" className="border border-white/14 px-3 py-2 transition hover:border-white/32 hover:text-white">
                    Agent probe index
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
                        className={`group min-w-[160px] rounded-[24px] border px-4 py-4 text-left transition duration-300 ease-out lg:min-w-0 ${
                          isActive ? "border-white/20 bg-white/[0.08] text-white" : "border-white/10 bg-white/[0.02] text-white/62 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[0.64rem] uppercase tracking-[0.28em] text-white/42">0{index + 1}</p>
                            <p className="mt-2 text-xl font-semibold tracking-[-0.05em]">{tab.label}</p>
                          </div>
                          <span className="mt-1 h-3 w-3 rounded-full" style={{ backgroundColor: tab.accent }} />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-inherit/80">{tab.kicker}</p>
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="min-w-0 flex-1 rounded-[28px] border border-white/10 bg-[#11131d] p-5 sm:p-6">
                <div className="grid gap-5 border-b border-white/10 pb-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">{activePanel.kicker}</p>
                    <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.6rem)] font-semibold tracking-[-0.07em] text-white">{activePanel.label}</h2>
                    <p className="mt-3 max-w-[42rem] text-sm leading-7 text-white/72 sm:text-[15px]">{activePanel.intro}</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">Section status</p>
                    <div className="mt-4 flex items-end gap-4">
                      <p className="text-5xl font-semibold tracking-[-0.08em] text-white">{activePanel.items.length}</p>
                      <p className="pb-1 text-sm leading-6 text-white/62">scheduled highlights in this tab pane right now</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/8">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(tabKeys.indexOf(activeTab) + 1) * 18}%`, backgroundColor: activePanel.accent }} />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-4">
                    {activePanel.items.map((item) => (
                      <article key={item.title} className="grid gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[120px_1fr]">
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">time</p>
                          <p className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-white">{item.time}</p>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{item.title}</h3>
                            <span className="inline-flex rounded-full border border-white/12 px-3 py-1 text-[0.64rem] uppercase tracking-[0.24em] text-white/54">{item.meta}</span>
                          </div>
                          <p className="mt-3 max-w-[42rem] text-sm leading-7 text-white/72">{item.note}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <aside className="space-y-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">Festival pulse</p>
                      <p className="mt-3 text-4xl font-semibold tracking-[-0.08em] text-white">12 venues</p>
                      <p className="mt-2 text-sm leading-6 text-white/68">Walkable clusters connected by harbour ferry, tram loop, and late-night shuttle.</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">Fast planner</p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                        <li>• Pin one anchor event before noon and one after sunset.</li>
                        <li>• Pair a seated talk with a standing installation to reset attention.</li>
                        <li>• Leave 20 minutes between Lab Quarter and Harbour Stage.</li>
                      </ul>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-[#f4cf5b] p-5 text-[#171724]">
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#171724]/54">Need a route?</p>
                      <p className="mt-3 text-2xl font-semibold tracking-[-0.05em]">Build a one-day path from any tab and keep context while you switch.</p>
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
