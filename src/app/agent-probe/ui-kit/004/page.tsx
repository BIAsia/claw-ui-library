"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const filters = ["all", "component", "token", "pattern", "template", "motion"] as const;

const statusTone = {
  new: { label: "new", className: "border-[#1c1814] bg-[#1c1814] text-[#f6f2ea]" },
  ready: { label: "ready", className: "border-black/12 text-black/56" },
  linked: { label: "linked", className: "border-[#17328d]/25 text-[#17328d]" },
} as const;

type FilterValue = (typeof filters)[number];
type SortValue = "latest" | "shelf" | "status" | "title";

type KitItem = {
  id: string;
  title: string;
  type: Exclude<FilterValue, "all">;
  issue: string;
  shelf: string;
  date: string;
  status: keyof typeof statusTone;
  source: string;
  format: string;
  duration?: string;
  tone: string;
  ink: string;
  accent?: string;
  cover: "sheet" | "swatches" | "stack" | "grid" | "layout" | "arc" | "rail" | "blocks";
};

const items: KitItem[] = [
  {
    id: "button-sheet",
    title: "Button Sheet",
    type: "component",
    issue: "issue 03",
    shelf: "A1",
    date: "19 mar 26",
    status: "ready",
    source: "foundation set",
    format: "12 variants",
    tone: "#ded5c8",
    ink: "#171513",
    accent: "#bbb1a5",
    cover: "sheet",
  },
  {
    id: "semantic-swatches",
    title: "Semantic Swatches",
    type: "token",
    issue: "paired",
    shelf: "B3",
    date: "18 mar 26",
    status: "linked",
    source: "brand palette",
    format: "16 tones",
    tone: "#7aa16d",
    ink: "#121212",
    accent: "#d8d7cf",
    cover: "swatches",
  },
  {
    id: "elevation-stack",
    title: "Elevation Stack",
    type: "pattern",
    issue: "recurring",
    shelf: "C2",
    date: "18 mar 26",
    status: "new",
    source: "surface studies",
    format: "4 steps",
    tone: "#d77d58",
    ink: "#101010",
    accent: "#7d4128",
    cover: "stack",
  },
  {
    id: "input-grid",
    title: "Input Grid",
    type: "component",
    issue: "paired",
    shelf: "D4",
    date: "17 mar 26",
    status: "ready",
    source: "form set",
    format: "6 fields",
    tone: "#ece8e1",
    ink: "#474747",
    accent: "#d4cdc3",
    cover: "grid",
  },
  {
    id: "page-frame",
    title: "Page Frame",
    type: "template",
    issue: "new",
    shelf: "A4",
    date: "17 mar 26",
    status: "new",
    source: "landing scaffold",
    format: "desktop shell",
    tone: "#cfc7be",
    ink: "#161616",
    accent: "#a89f95",
    cover: "layout",
  },
  {
    id: "motion-arc",
    title: "Motion Arc",
    type: "motion",
    issue: "transcribed",
    shelf: "E1",
    date: "16 mar 26",
    status: "linked",
    duration: "380 ms",
    source: "timing spec",
    format: "ease ladder",
    tone: "#ddd2c2",
    ink: "#17328d",
    accent: "#d6c2a5",
    cover: "arc",
  },
  {
    id: "navigation-rail",
    title: "Navigation Rail",
    type: "pattern",
    issue: "issue 02",
    shelf: "B1",
    date: "15 mar 26",
    status: "ready",
    source: "chrome study",
    format: "rail system",
    tone: "#f1eee8",
    ink: "#1d1a16",
    accent: "#d8d2c7",
    cover: "rail",
  },
  {
    id: "hero-blocks",
    title: "Hero Blocks",
    type: "template",
    issue: "field cut",
    shelf: "C5",
    date: "14 mar 26",
    status: "new",
    source: "campaign module",
    format: "4 blocks",
    tone: "#cbc5bc",
    ink: "#1a1a1a",
    accent: "#aea69b",
    cover: "blocks",
  },
];

function KitCover({ item, active }: { item: KitItem; active: boolean }) {
  return (
    <div
      className={`relative aspect-[0.78] w-[43%] overflow-hidden border transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[44%] ${active ? "-translate-y-1 scale-[1.035] shadow-[0_20px_38px_rgba(22,18,15,0.12)]" : "shadow-[0_10px_24px_rgba(22,18,15,0.08)]"}`}
      style={{ background: item.tone, color: item.ink, borderColor: `${item.ink}22` }}
    >
      <div className="absolute left-[8%] top-[7%] text-[0.34rem] uppercase tracking-[0.22em] opacity-72 sm:text-[0.38rem]">
        ui kit
      </div>

      {item.cover === "sheet" && (
        <>
          <div className="absolute inset-[10%] grid grid-cols-2 gap-[6%] opacity-80">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-full border border-current/45 px-[8%] py-[7%] text-[0.34rem] uppercase tracking-[0.14em]">
                btn
              </div>
            ))}
          </div>
          <div className="absolute inset-x-[10%] bottom-[11%] text-[0.84rem] font-medium leading-[0.88] tracking-[-0.06em] sm:text-[0.98rem]">{item.title}</div>
        </>
      )}

      {item.cover === "swatches" && (
        <>
          <div className="absolute inset-[12%] grid grid-cols-4 gap-[6%]">
            {["#111", "#6c7", "#e8d4bd", "#3255aa", "#e47f59", "#f2f0e8", "#7b6a59", "#d6cbbd"].map((tone, i) => (
              <div key={i} className="aspect-square border border-black/10" style={{ background: tone }} />
            ))}
          </div>
          <div className="absolute inset-x-[10%] bottom-[12%] text-[0.3rem] uppercase leading-[1.2] tracking-[0.16em] opacity-80 sm:text-[0.34rem]">
            semantic / accent
            <br />
            neutral / state
          </div>
        </>
      )}

      {item.cover === "stack" && (
        <>
          <div className="absolute inset-[14%] rounded-[8%] border border-current/22 bg-black/6" />
          <div className="absolute inset-[20%] rounded-[8%] border border-current/22 bg-black/10" />
          <div className="absolute inset-[26%] rounded-[8%] border border-current/22 bg-black/14" />
          <div className="absolute inset-x-[14%] bottom-[12%] text-[0.74rem] font-medium tracking-[-0.06em] sm:text-[0.88rem]">{item.title}</div>
        </>
      )}

      {item.cover === "grid" && (
        <>
          <div className="absolute inset-[12%] space-y-[7%]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="grid grid-cols-[1fr_0.8fr] gap-[6%]">
                <div className="h-[0.72rem] rounded-full border border-current/25" />
                <div className="h-[0.72rem] rounded-full border border-current/15" />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-[10%] bottom-[12%] text-[0.76rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[0.92rem]">{item.title}</div>
        </>
      )}

      {item.cover === "layout" && (
        <>
          <div className="absolute inset-[12%] border border-current/25" />
          <div className="absolute left-[18%] top-[20%] h-[14%] w-[48%] bg-current/18" />
          <div className="absolute left-[18%] top-[39%] h-[7%] w-[58%] bg-current/30" />
          <div className="absolute left-[18%] top-[51%] h-[18%] w-[64%] border border-current/22" />
          <div className="absolute inset-x-[14%] bottom-[10%] text-[0.76rem] font-medium tracking-[-0.06em] sm:text-[0.9rem]">{item.title}</div>
        </>
      )}

      {item.cover === "arc" && (
        <>
          <div className="absolute inset-x-[10%] top-[28%] h-[24%] opacity-70 [background-image:radial-gradient(circle_at_0%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_25%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_50%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_75%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_100%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px)]" />
          <div className="absolute inset-x-[10%] bottom-[12%] text-[0.7rem] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[0.84rem]">
            Motion
            <br />
            Arc
          </div>
        </>
      )}

      {item.cover === "rail" && (
        <>
          <div className="absolute left-[17%] top-[14%] h-[62%] w-[18%] border border-current/25" />
          <div className="absolute right-[16%] top-[14%] h-[62%] w-[42%] space-y-[6%]">
            <div className="h-[10%] bg-current/16" />
            <div className="h-[10%] bg-current/28" />
            <div className="h-[10%] bg-current/16" />
            <div className="h-[28%] border border-current/18" />
          </div>
          <div className="absolute inset-x-[12%] bottom-[12%] text-[0.3rem] uppercase tracking-[0.18em] opacity-75 sm:text-[0.34rem]">
            rail / list / detail
          </div>
        </>
      )}

      {item.cover === "blocks" && (
        <>
          <div className="absolute inset-[12%] grid grid-cols-2 gap-[7%]">
            <div className="border border-current/18 bg-current/8" />
            <div className="border border-current/12 bg-current/18" />
            <div className="border border-current/12 bg-current/22" />
            <div className="border border-current/18 bg-current/8" />
          </div>
          <div className="absolute inset-x-[12%] bottom-[11%] text-[0.76rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[0.9rem]">{item.title}</div>
        </>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: KitItem["status"] }) {
  const tone = statusTone[status];

  return <span className={`inline-flex rounded-full border px-2 py-1 text-[0.5rem] uppercase tracking-[0.16em] ${tone.className}`}>{tone.label}</span>;
}

function KitCard({ item }: { item: KitItem }) {
  const [active, setActive] = useState(false);

  return (
    <article
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      className="group relative flex min-h-[19rem] flex-col justify-between bg-[#f4f1ea] transition duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:z-10 hover:bg-[#f7f3ec] sm:min-h-[22rem]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-black/18" />
      <div className="absolute inset-y-0 right-0 w-px bg-black/18 group-last:hidden" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 46%, color-mix(in oklab, ${item.tone} 32%, white) 0%, transparent 38%)` }} />

      <div className="relative z-10 flex items-start justify-between gap-3 px-3 pb-2 pt-2 text-[0.5rem] uppercase tracking-[0.16em] text-black/68 sm:px-4 sm:text-[0.54rem]">
        <span>{item.type}</span>
        <span>{item.issue}</span>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-1 sm:px-8">
        <KitCover item={item} active={active} />
      </div>

      <div className="relative z-10 flex items-end justify-between gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="min-w-0">
          <h2 className="truncate text-[0.96rem] font-medium tracking-[-0.05em] text-[#181512] sm:text-[1.04rem]">{item.title}</h2>
          <div className="mt-1 text-[0.52rem] uppercase tracking-[0.16em] text-black/42">
            shelf {item.shelf} / {item.date}
            {item.duration ? ` / ${item.duration}` : ""}
          </div>
          <div className="mt-1 truncate text-[0.5rem] uppercase tracking-[0.14em] text-black/32">{item.source} / {item.format}</div>
        </div>
        <StatusPill status={item.status} />
      </div>
    </article>
  );
}

export default function UiKit004Page() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [sortBy, setSortBy] = useState<SortValue>("latest");
  const [query, setQuery] = useState("");

  const visibleItems = useMemo(() => {
    const lowered = query.trim().toLowerCase();

    const filtered = items.filter((item) => {
      const matchesFilter = activeFilter === "all" || item.type === activeFilter;
      const matchesQuery =
        lowered.length === 0
          ? true
          : `${item.title} ${item.type} ${item.issue} ${item.shelf} ${item.source}`.toLowerCase().includes(lowered);

      return matchesFilter && matchesQuery;
    });

    const sorted = [...filtered];

    if (sortBy === "latest") sorted.sort((a, b) => b.date.localeCompare(a.date));
    if (sortBy === "shelf") sorted.sort((a, b) => a.shelf.localeCompare(b.shelf));
    if (sortBy === "title") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "status") {
      const rank = { new: 0, ready: 1, linked: 2 } as const;
      sorted.sort((a, b) => rank[a.status] - rank[b.status]);
    }

    return sorted;
  }, [activeFilter, query, sortBy]);

  const readyCount = items.filter((item) => item.status === "ready").length;
  const linkedCount = items.filter((item) => item.status === "linked").length;
  const visibleLabel = `${visibleItems.length.toString().padStart(2, "0")} visible / ${items.length.toString().padStart(2, "0")} total`;

  return (
    <main className="min-h-screen bg-[#f2eee7] text-[#171513]">
      <section className="mx-auto min-h-screen w-full max-w-[1520px] px-2 py-2 sm:px-3 sm:py-3 lg:px-4">
        <div className="overflow-hidden border border-black/18 bg-[#f5f1ea] shadow-[0_24px_80px_rgba(22,18,15,0.08)]">
          <header className="border-b border-black/18 bg-[#f7f3ec]">
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[1fr_auto_1fr] sm:px-5 lg:px-6">
              <div className="flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.12em] text-[#1d1916] sm:text-[0.86rem]">
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter("all");
                    setQuery("");
                    setSortBy("latest");
                  }}
                  className="transition hover:opacity-65"
                >
                  UI Kit
                </button>
                <span className="hidden border-l border-black/12 pl-3 text-black/42 sm:inline">asset browser / 004</span>
              </div>

              <nav className="flex items-center gap-4 justify-self-end text-[0.66rem] uppercase tracking-[0.18em] text-black/62 sm:justify-self-center sm:text-[0.74rem]">
                <span className="text-[#181512]">catalog</span>
                <span>parts</span>
                <span>patterns</span>
                <Link href="/agent-probe/ui-kit" className="transition hover:text-black">all probes</Link>
              </nav>

              <div className="hidden justify-self-end text-[0.58rem] uppercase tracking-[0.16em] text-black/42 sm:block">{visibleLabel}</div>
            </div>

            <div className="grid grid-cols-2 border-t border-black/18 px-4 py-2 text-[0.54rem] uppercase tracking-[0.16em] text-black/42 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:px-5 lg:px-6">
              <span>open shelf / kit holdings</span>
              <span className="hidden text-center sm:block">cover-led / asset scan</span>
              <span className="hidden text-center sm:block">browse before deep docs</span>
              <span className="text-right">updated 19 mar 26</span>
            </div>

            <div className="grid gap-3 border-t border-black/18 px-4 py-2 sm:grid-cols-[1.45fr_0.85fr_0.9fr] sm:px-5 lg:px-6">
              <label className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.16em] text-black/56">
                <span>format</span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {filters.map((filter) => {
                    const active = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full border px-2.5 py-1 transition ${active ? "border-[#1d1916] bg-[#1d1916] text-[#f7f3ec]" : "border-black/12 text-[#1d1916] hover:border-black/28"}`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </label>

              <label className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.16em] text-black/56 sm:border-l sm:border-black/12 sm:pl-4">
                <span>sort</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortValue)} className="bg-transparent text-right text-[#1d1916] outline-none">
                  <option value="latest">latest</option>
                  <option value="shelf">shelf</option>
                  <option value="status">status</option>
                  <option value="title">title</option>
                </select>
              </label>

              <label className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.16em] text-black/56 sm:border-l sm:border-black/12 sm:pl-4">
                <span>search</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="title / shelf / source" className="w-32 bg-transparent text-right text-[#1d1916] placeholder:text-black/28 outline-none sm:w-40" />
              </label>
            </div>
          </header>

          <section>
            <div className="grid grid-cols-2 border-b border-black/18 px-4 py-2 text-[0.54rem] uppercase tracking-[0.16em] text-black/42 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:px-5 lg:px-6">
              <span>{visibleLabel}</span>
              <span className="hidden text-center sm:block">{readyCount.toString().padStart(2, "0")} ready</span>
              <span className="hidden text-center sm:block">{linkedCount.toString().padStart(2, "0")} linked</span>
              <span className="text-right">shelves A–E</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {visibleItems.map((item) => (
                <KitCard key={item.id} item={item} />
              ))}
            </div>

            {visibleItems.length === 0 && (
              <div className="flex min-h-[16rem] flex-col items-center justify-center border-t border-black/18 px-6 text-center">
                <p className="text-[0.58rem] uppercase tracking-[0.18em] text-black/42">no shelf results</p>
                <p className="mt-2 text-sm text-black/56">Try another filter or search by title, shelf code, or source.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
