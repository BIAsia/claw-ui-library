"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const filters = ["all", "image", "note", "scan", "audio", "tape"] as const;

type FilterValue = (typeof filters)[number];
type SortValue = "latest" | "shelf" | "status";

type CabinetItem = {
  id: string;
  title: string;
  type: Exclude<FilterValue, "all">;
  issue: string;
  shelf: string;
  date: string;
  status: "new" | "indexed" | "paired";
  duration?: string;
  tone: string;
  ink: string;
  cover: "grid" | "orb" | "receipt" | "band" | "stack" | "wave" | "ledger" | "frame";
};

const items: CabinetItem[] = [
  {
    id: "metro-grid",
    title: "Metro Grid",
    type: "image",
    issue: "issue 03",
    shelf: "A1",
    date: "19 mar 26",
    status: "indexed",
    tone: "#ddd5c9",
    ink: "#171513",
    cover: "grid",
  },
  {
    id: "book-margin",
    title: "Book Margin",
    type: "scan",
    issue: "annotated",
    shelf: "B3",
    date: "18 mar 26",
    status: "paired",
    tone: "#79a16a",
    ink: "#121212",
    cover: "orb",
  },
  {
    id: "night-receipt",
    title: "Night Receipt",
    type: "image",
    issue: "recurring",
    shelf: "C2",
    date: "18 mar 26",
    status: "new",
    tone: "#d77d58",
    ink: "#101010",
    cover: "receipt",
  },
  {
    id: "public-softness",
    title: "Public Softness",
    type: "note",
    issue: "paired",
    shelf: "D4",
    date: "17 mar 26",
    status: "indexed",
    tone: "#ece8e1",
    ink: "#474747",
    cover: "band",
  },
  {
    id: "awning",
    title: "Awning",
    type: "scan",
    issue: "new",
    shelf: "A4",
    date: "17 mar 26",
    status: "new",
    tone: "#cfc7be",
    ink: "#161616",
    cover: "stack",
  },
  {
    id: "rain-shutter",
    title: "Rain / Shutter",
    type: "audio",
    issue: "transcribed",
    shelf: "E1",
    date: "16 mar 26",
    status: "paired",
    duration: "02:14",
    tone: "#ddd2c2",
    ink: "#17328d",
    cover: "wave",
  },
  {
    id: "counter-note",
    title: "Counter Note",
    type: "note",
    issue: "issue 02",
    shelf: "B1",
    date: "15 mar 26",
    status: "indexed",
    tone: "#f1eee8",
    ink: "#1d1a16",
    cover: "ledger",
  },
  {
    id: "door-frame",
    title: "Door Frame",
    type: "tape",
    issue: "field cut",
    shelf: "C5",
    date: "14 mar 26",
    status: "new",
    duration: "00:48",
    tone: "#cbc5bc",
    ink: "#1a1a1a",
    cover: "frame",
  },
];

function CabinetCover({ item }: { item: CabinetItem }) {
  return (
    <div
      className="relative aspect-[0.78] w-full overflow-hidden border border-black/15"
      style={{ background: item.tone, color: item.ink }}
    >
      <div className="absolute left-[8%] top-[7%] text-[0.5rem] uppercase tracking-[0.16em] opacity-70">
        signal cabinet
      </div>

      {item.cover === "grid" && (
        <>
          <div className="absolute inset-[12%] grid grid-cols-4 gap-[4%] opacity-70">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-current/45" />
            ))}
          </div>
          <div className="absolute inset-x-[10%] bottom-[11%] text-[1.18rem] font-medium leading-[0.88] tracking-[-0.06em] sm:text-[1.38rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "orb" && (
        <>
          <div className="absolute inset-x-0 top-0 h-[24%] border-b border-black/15 bg-[#d6d6d1]" />
          <div className="absolute left-[12%] top-[14%] h-[24%] w-[28%] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.45),rgba(0,0,0,0.92)_72%)] opacity-85" />
          <div className="absolute right-[12%] top-[12%] h-[28%] w-[24%] rounded-full bg-[radial-gradient(circle_at_42%_40%,rgba(255,255,255,0.36),rgba(0,0,0,0.92)_74%)] opacity-90" />
          <div className="absolute inset-x-[10%] bottom-[13%] text-[0.42rem] uppercase leading-[1.2] tracking-[0.15em] opacity-80 sm:text-[0.48rem]">
            margin / human
            <br />
            marks / repeat
          </div>
        </>
      )}

      {item.cover === "receipt" && (
        <>
          <div className="absolute inset-[11%] border border-current/20 bg-black/5" />
          <div className="absolute inset-x-[16%] top-[18%] space-y-[7%] text-[0.42rem] uppercase tracking-[0.18em] opacity-80 sm:text-[0.48rem]">
            <div>night receipt</div>
            <div>22:48</div>
            <div>line 4</div>
            <div>corner shop</div>
            <div>repeat sighting</div>
          </div>
          <div className="absolute inset-x-[15%] bottom-[12%] h-[20%] bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.22))]" />
        </>
      )}

      {item.cover === "band" && (
        <>
          <div className="absolute left-[10%] top-[17%] h-[10%] w-[62%] bg-current/15" />
          <div className="absolute left-[10%] top-[33%] h-[8%] w-[50%] bg-current/35" />
          <div className="absolute left-[10%] top-[46%] h-[8%] w-[66%] bg-current/18" />
          <div className="absolute left-[10%] top-[62%] h-[8%] w-[42%] bg-current/28" />
          <div className="absolute inset-x-[10%] bottom-[12%] text-[1rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[1.22rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "stack" && (
        <>
          <div className="absolute inset-[13%] border border-current/20" />
          <div className="absolute inset-[18%] border border-current/25" />
          <div className="absolute inset-[23%] border border-current/30" />
          <div className="absolute inset-x-[14%] bottom-[10%] text-[1rem] font-medium tracking-[-0.06em] sm:text-[1.18rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "wave" && (
        <>
          <div className="absolute inset-x-[8%] top-[28%] h-[24%] opacity-70 [background-image:radial-gradient(circle_at_0%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_25%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_50%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_75%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_100%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px)]" />
          <div className="absolute inset-x-[10%] bottom-[12%] text-[0.92rem] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[1.14rem]">
            Rain /<br />Shutter
          </div>
        </>
      )}

      {item.cover === "ledger" && (
        <>
          <div className="absolute left-[17%] top-[16%] h-[56%] w-px bg-current/45" />
          <div className="absolute right-[16%] top-[16%] h-[56%] w-px bg-current/18" />
          <div className="absolute inset-x-[12%] top-[22%] space-y-[7%] text-[0.42rem] uppercase tracking-[0.18em] opacity-75 sm:text-[0.48rem]">
            <div>counter note</div>
            <div>fragment / cash / queue</div>
            <div>voice under awning</div>
            <div>receipt crease</div>
          </div>
        </>
      )}

      {item.cover === "frame" && (
        <>
          <div className="absolute inset-[12%] border border-current/35" />
          <div className="absolute inset-[21%] border border-current/25" />
          <div className="absolute inset-x-[12%] bottom-[11%] text-[1rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[1.18rem]">
            {item.title}
          </div>
        </>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: CabinetItem["status"] }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-1 text-[0.52rem] uppercase tracking-[0.16em] ${
        status === "new"
          ? "border-[#1c1814] bg-[#1c1814] text-[#f6f2ea]"
          : status === "paired"
            ? "border-[#17328d]/25 text-[#17328d]"
            : "border-black/12 text-black/56"
      }`}
    >
      {status}
    </span>
  );
}

export default function SignalCabinet004Page() {
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
          : `${item.title} ${item.type} ${item.issue} ${item.shelf}`.toLowerCase().includes(lowered);

      return matchesFilter && matchesQuery;
    });

    const sorted = [...filtered];

    if (sortBy === "latest") {
      sorted.sort((a, b) => b.date.localeCompare(a.date));
    }

    if (sortBy === "shelf") {
      sorted.sort((a, b) => a.shelf.localeCompare(b.shelf));
    }

    if (sortBy === "status") {
      const rank = { new: 0, indexed: 1, paired: 2 } as const;
      sorted.sort((a, b) => rank[a.status] - rank[b.status]);
    }

    return sorted;
  }, [activeFilter, query, sortBy]);

  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#171513]">
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
                  Signal Cabinet
                </button>
                <span className="hidden border-l border-black/12 pl-3 text-black/42 sm:inline">
                  browse mode / 004
                </span>
              </div>

              <nav className="flex items-center gap-4 justify-self-end text-[0.66rem] uppercase tracking-[0.18em] text-black/62 sm:justify-self-center sm:text-[0.74rem]">
                <span className="text-[#181512]">Cabinet</span>
                <span>Open shelf</span>
                <Link href="/agent-probe/signal-cabinet" className="transition hover:text-black">
                  all probes
                </Link>
              </nav>

              <div className="hidden justify-self-end text-[0.58rem] uppercase tracking-[0.16em] text-black/42 sm:block">
                {visibleItems.length.toString().padStart(2, "0")} visible / 08 total
              </div>
            </div>

            <div className="grid gap-3 border-t border-black/18 px-4 py-2 sm:grid-cols-[1.3fr_1fr_1fr] sm:px-5 lg:px-6">
              <label className="flex items-center justify-between gap-3 text-[0.58rem] uppercase tracking-[0.16em] text-black/56">
                <span>filter</span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {filters.map((filter) => {
                    const active = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full border px-2.5 py-1 transition ${
                          active
                            ? "border-[#1d1916] bg-[#1d1916] text-[#f7f3ec]"
                            : "border-black/12 text-[#1d1916] hover:border-black/28"
                        }`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </label>

              <label className="flex items-center justify-between gap-3 text-[0.58rem] uppercase tracking-[0.16em] text-black/56 sm:border-l sm:border-black/12 sm:pl-4">
                <span>sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortValue)}
                  className="bg-transparent text-right text-[#1d1916] outline-none"
                >
                  <option value="latest">latest</option>
                  <option value="shelf">shelf</option>
                  <option value="status">status</option>
                </select>
              </label>

              <label className="flex items-center justify-between gap-3 text-[0.58rem] uppercase tracking-[0.16em] text-black/56 sm:border-l sm:border-black/12 sm:pl-4">
                <span>search</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="title / shelf"
                  className="w-28 bg-transparent text-right text-[#1d1916] placeholder:text-black/28 outline-none sm:w-36"
                />
              </label>
            </div>
          </header>

          <section>
            <div className="grid grid-cols-2 border-b border-black/18 px-4 py-2 text-[0.56rem] uppercase tracking-[0.16em] text-black/42 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:px-5 lg:px-6">
              <span>open shelf / signal fragments</span>
              <span className="hidden text-center sm:block">cover-led / inventory view</span>
              <span className="hidden text-center sm:block">scan before reading</span>
              <span className="text-right">updated 19 mar 26</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {visibleItems.map((item) => (
                <article
                  key={item.id}
                  className="group relative flex min-h-[21rem] flex-col justify-between bg-[#f4f1ea] transition duration-300 hover:bg-[#f7f3ec] sm:min-h-[23rem]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-black/18" />
                  <div className="absolute inset-y-0 right-0 w-px bg-black/18 group-last:hidden" />

                  <div className="relative z-10 flex items-start justify-between gap-3 px-3 pb-2 pt-2 text-[0.52rem] uppercase tracking-[0.14em] text-black/68 sm:px-4 sm:text-[0.56rem]">
                    <span>{item.type}</span>
                    <span>{item.issue}</span>
                  </div>

                  <div className="relative z-10 flex flex-1 items-center justify-center px-5 py-2 sm:px-7">
                    <CabinetCover item={item} />
                  </div>

                  <div className="relative z-10 flex items-end justify-between gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
                    <div>
                      <h2 className="text-[0.98rem] font-medium tracking-[-0.05em] text-[#181512] sm:text-[1.08rem]">
                        {item.title}
                      </h2>
                      <div className="mt-1 text-[0.54rem] uppercase tracking-[0.16em] text-black/42">
                        shelf {item.shelf} / {item.date}
                        {item.duration ? ` / ${item.duration}` : ""}
                      </div>
                    </div>
                    <StatusPill status={item.status} />
                  </div>
                </article>
              ))}
            </div>

            {visibleItems.length === 0 && (
              <div className="flex min-h-[16rem] flex-col items-center justify-center border-t border-black/18 px-6 text-center">
                <p className="text-[0.58rem] uppercase tracking-[0.18em] text-black/42">no shelf results</p>
                <p className="mt-2 text-sm text-black/56">Try another filter or search by title and shelf code.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
