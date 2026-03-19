"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const filters = ["all", "brief", "run", "output", "review", "build", "asset"] as const;

const statusTone = {
  queued: { label: "queued", className: "border-[#1c1814] bg-[#1c1814] text-[#f6f2ea]" },
  running: { label: "running", className: "border-[#17328d]/25 text-[#17328d]" },
  review: { label: "review", className: "border-black/12 text-black/56" },
  delivered: { label: "delivered", className: "border-[#315d32]/25 text-[#315d32]" },
} as const;

type FilterValue = (typeof filters)[number];
type SortValue = "latest" | "queue" | "status" | "title";

type RunItem = {
  id: string;
  title: string;
  type: Exclude<FilterValue, "all">;
  queue: string;
  owner: string;
  date: string;
  status: keyof typeof statusTone;
  runtime?: string;
  destination: string;
  format: string;
  tone: string;
  ink: string;
  accent?: string;
  cover: "folder" | "receipt" | "packet" | "ledger" | "stack" | "wave" | "grid" | "frame";
};

const items: RunItem[] = [
  {
    id: "founder-intake",
    title: "Founder Intake",
    type: "brief",
    queue: "Q1",
    owner: "ops desk",
    date: "19 mar 26",
    status: "queued",
    destination: "product team",
    format: "2-page brief",
    tone: "#ddd5c9",
    ink: "#171513",
    accent: "#b8aea0",
    cover: "folder",
  },
  {
    id: "release-run",
    title: "Release Run",
    type: "run",
    queue: "Q2",
    owner: "build agent",
    date: "19 mar 26",
    status: "running",
    runtime: "14m",
    destination: "staging",
    format: "tool chain",
    tone: "#d7d6cf",
    ink: "#111111",
    accent: "#bfb8af",
    cover: "grid",
  },
  {
    id: "support-summary",
    title: "Support Summary",
    type: "output",
    queue: "Q4",
    owner: "service desk",
    date: "18 mar 26",
    status: "delivered",
    destination: "client inbox",
    format: "memo packet",
    tone: "#d77d58",
    ink: "#101010",
    accent: "#7d4128",
    cover: "receipt",
  },
  {
    id: "copy-review",
    title: "Copy Review",
    type: "review",
    queue: "Q3",
    owner: "editor",
    date: "18 mar 26",
    status: "review",
    destination: "brand desk",
    format: "markup sheet",
    tone: "#ece8e1",
    ink: "#474747",
    accent: "#d4cdc3",
    cover: "ledger",
  },
  {
    id: "night-build",
    title: "Night Build",
    type: "build",
    queue: "Q5",
    owner: "runtime",
    date: "17 mar 26",
    status: "running",
    runtime: "31m",
    destination: "preview host",
    format: "build log",
    tone: "#cbc5bc",
    ink: "#1a1a1a",
    accent: "#aea69b",
    cover: "stack",
  },
  {
    id: "asset-packet",
    title: "Asset Packet",
    type: "asset",
    queue: "Q1",
    owner: "media desk",
    date: "17 mar 26",
    status: "delivered",
    destination: "campaign team",
    format: "zip bundle",
    tone: "#ddd2c2",
    ink: "#17328d",
    accent: "#d6c2a5",
    cover: "wave",
  },
  {
    id: "handoff-frame",
    title: "Handoff Frame",
    type: "output",
    queue: "Q2",
    owner: "operator",
    date: "16 mar 26",
    status: "review",
    destination: "lead reviewer",
    format: "delivery deck",
    tone: "#f1eee8",
    ink: "#1d1a16",
    accent: "#d8d2c7",
    cover: "frame",
  },
  {
    id: "memory-sync",
    title: "Memory Sync",
    type: "brief",
    queue: "Q6",
    owner: "agent desk",
    date: "15 mar 26",
    status: "queued",
    destination: "knowledge base",
    format: "log sheet",
    tone: "#e8e2d9",
    ink: "#171513",
    accent: "#b8aea0",
    cover: "packet",
  },
];

function RunCover({ item, active }: { item: RunItem; active: boolean }) {
  return (
    <div
      className={`relative aspect-[0.78] w-[43%] overflow-hidden border transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[44%] ${active ? "-translate-y-1 scale-[1.035] shadow-[0_20px_38px_rgba(22,18,15,0.12)]" : "shadow-[0_10px_24px_rgba(22,18,15,0.08)]"}`}
      style={{ background: item.tone, color: item.ink, borderColor: `${item.ink}22` }}
    >
      <div className="absolute left-[8%] top-[7%] text-[0.34rem] uppercase tracking-[0.22em] opacity-72 sm:text-[0.38rem]">
        traditional agent
      </div>

      {item.cover === "folder" && (
        <>
          <div className="absolute inset-x-[10%] top-[16%] h-[22%] border border-current/25 bg-current/8" />
          <div className="absolute left-[16%] top-[12%] h-[9%] w-[34%] border border-current/25 bg-current/14" />
          <div className="absolute inset-x-[11%] bottom-[12%] text-[0.82rem] font-medium leading-[0.88] tracking-[-0.06em] sm:text-[0.96rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "grid" && (
        <>
          <div className="absolute inset-[11%] grid grid-cols-4 gap-[4.2%] opacity-70">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border border-current/45" />
            ))}
          </div>
          <div className="absolute inset-x-[10%] bottom-[11%] text-[0.82rem] font-medium leading-[0.88] tracking-[-0.06em] sm:text-[0.96rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "receipt" && (
        <>
          <div className="absolute inset-[11%] border border-current/20 bg-black/5" />
          <div className="absolute inset-x-[16%] top-[17%] space-y-[7%] text-[0.3rem] uppercase tracking-[0.18em] opacity-82 sm:text-[0.35rem]">
            <div>deliverable</div>
            <div>reply packet</div>
            <div>19:40</div>
            <div>signed off</div>
            <div>return sent</div>
          </div>
          <div className="absolute inset-x-[15%] bottom-[12%] h-[20%] bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.22))]" />
        </>
      )}

      {item.cover === "ledger" && (
        <>
          <div className="absolute left-[17%] top-[16%] h-[56%] w-px bg-current/45" />
          <div className="absolute right-[16%] top-[16%] h-[56%] w-px bg-current/18" />
          <div className="absolute inset-x-[12%] top-[22%] space-y-[7%] text-[0.3rem] uppercase tracking-[0.18em] opacity-75 sm:text-[0.34rem]">
            <div>review marks</div>
            <div>owner / editor</div>
            <div>copy / tone / fix</div>
            <div>return comments</div>
          </div>
        </>
      )}

      {item.cover === "stack" && (
        <>
          <div className="absolute inset-[13%] border border-current/20" />
          <div className="absolute inset-[18%] border border-current/25" />
          <div className="absolute inset-[23%] border border-current/30" />
          <div className="absolute inset-x-[14%] bottom-[10%] text-[0.76rem] font-medium tracking-[-0.06em] sm:text-[0.9rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "wave" && (
        <>
          <div className="absolute inset-x-[8%] top-[28%] h-[24%] opacity-70 [background-image:radial-gradient(circle_at_0%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_25%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_50%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_75%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px),radial-gradient(circle_at_100%_50%,transparent_0_18px,currentColor_19px_20px,transparent_21px)]" />
          <div className="absolute inset-x-[10%] bottom-[12%] text-[0.7rem] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[0.84rem]">
            Asset
            <br />
            Packet
          </div>
        </>
      )}

      {item.cover === "frame" && (
        <>
          <div className="absolute inset-[12%] border border-current/35" />
          <div className="absolute inset-[21%] border border-current/25" />
          <div className="absolute inset-x-[12%] bottom-[11%] text-[0.76rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[0.9rem]">
            {item.title}
          </div>
        </>
      )}

      {item.cover === "packet" && (
        <>
          <div className="absolute inset-[12%] border border-current/28 bg-current/5" />
          <div className="absolute left-[18%] top-[22%] h-[8%] w-[48%] bg-current/15" />
          <div className="absolute left-[18%] top-[36%] h-[6%] w-[56%] bg-current/30" />
          <div className="absolute left-[18%] top-[49%] h-[6%] w-[42%] bg-current/16" />
          <div className="absolute inset-x-[14%] bottom-[12%] text-[0.7rem] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[0.84rem]">
            Memory
            <br />
            Sync
          </div>
        </>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: RunItem["status"] }) {
  const tone = statusTone[status];

  return (
    <span className={`inline-flex rounded-full border px-2 py-1 text-[0.5rem] uppercase tracking-[0.16em] ${tone.className}`}>
      {tone.label}
    </span>
  );
}

function RunCard({ item }: { item: RunItem }) {
  const [active, setActive] = useState(false);

  return (
    <article
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      className="group relative flex min-h-[19rem] flex-col justify-between bg-[#f4f1ea] transition duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:z-10 hover:bg-[#f7f3ec] sm:min-h-[22rem]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-black/18" />
      <div className="absolute inset-y-0 right-0 w-px bg-black/18 group-last:hidden" />
      <div
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 50% 46%, color-mix(in oklab, ${item.tone} 32%, white) 0%, transparent 38%)` }}
      />

      <div className="relative z-10 flex items-start justify-between gap-3 px-3 pb-2 pt-2 text-[0.5rem] uppercase tracking-[0.16em] text-black/68 sm:px-4 sm:text-[0.54rem]">
        <span>{item.type}</span>
        <span>{item.queue}</span>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-1 sm:px-8">
        <RunCover item={item} active={active} />
      </div>

      <div className="relative z-10 flex items-end justify-between gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="min-w-0">
          <h2 className="truncate text-[0.96rem] font-medium tracking-[-0.05em] text-[#181512] sm:text-[1.04rem]">
            {item.title}
          </h2>
          <div className="mt-1 text-[0.52rem] uppercase tracking-[0.16em] text-black/42">
            {item.owner} / {item.date}
            {item.runtime ? ` / ${item.runtime}` : ""}
          </div>
          <div className="mt-1 truncate text-[0.5rem] uppercase tracking-[0.14em] text-black/32">
            {item.destination} / {item.format}
          </div>
        </div>
        <StatusPill status={item.status} />
      </div>
    </article>
  );
}

export default function TraditionalAgent004Page() {
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
          : `${item.title} ${item.type} ${item.queue} ${item.owner} ${item.destination}`
              .toLowerCase()
              .includes(lowered);

      return matchesFilter && matchesQuery;
    });

    const sorted = [...filtered];

    if (sortBy === "latest") sorted.sort((a, b) => b.date.localeCompare(a.date));
    if (sortBy === "queue") sorted.sort((a, b) => a.queue.localeCompare(b.queue));
    if (sortBy === "title") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "status") {
      const rank = { queued: 0, running: 1, review: 2, delivered: 3 } as const;
      sorted.sort((a, b) => rank[a.status] - rank[b.status]);
    }

    return sorted;
  }, [activeFilter, query, sortBy]);

  const runningCount = items.filter((item) => item.status === "running").length;
  const deliveredCount = items.filter((item) => item.status === "delivered").length;
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
                  Traditional Agent
                </button>
                <span className="hidden border-l border-black/12 pl-3 text-black/42 sm:inline">
                  run browser / 004
                </span>
              </div>

              <nav className="flex items-center gap-4 justify-self-end text-[0.66rem] uppercase tracking-[0.18em] text-black/62 sm:justify-self-center sm:text-[0.74rem]">
                <span className="text-[#181512]">queue</span>
                <span>runs</span>
                <span>packets</span>
                <Link href="/agent-probe/traditional-agent" className="transition hover:text-black">
                  all probes
                </Link>
              </nav>

              <div className="hidden justify-self-end text-[0.58rem] uppercase tracking-[0.16em] text-black/42 sm:block">
                {visibleLabel}
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-black/18 px-4 py-2 text-[0.54rem] uppercase tracking-[0.16em] text-black/42 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:px-5 lg:px-6">
              <span>operator holdings / live queue</span>
              <span className="hidden text-center sm:block">browse jobs before opening them</span>
              <span className="hidden text-center sm:block">runs, packets, outputs, reviews</span>
              <span className="text-right">updated 19 mar 26</span>
            </div>

            <div className="grid gap-3 border-t border-black/18 px-4 py-2 sm:grid-cols-[1.45fr_0.85fr_0.9fr] sm:px-5 lg:px-6">
              <label className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.16em] text-black/56">
                <span>type</span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {filters.map((filter) => {
                    const active = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full border px-2.5 py-1 transition ${
                          active ? "border-[#1d1916] bg-[#1d1916] text-[#f7f3ec]" : "border-black/12 text-[#1d1916] hover:border-black/28"
                        }`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </label>

              <label className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.16em] text-black/56 sm:border-l sm:border-black/12 sm:pl-4">
                <span>sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortValue)}
                  className="bg-transparent text-right text-[#1d1916] outline-none"
                >
                  <option value="latest">latest</option>
                  <option value="queue">queue</option>
                  <option value="status">status</option>
                  <option value="title">title</option>
                </select>
              </label>

              <label className="flex items-center justify-between gap-3 text-[0.56rem] uppercase tracking-[0.16em] text-black/56 sm:border-l sm:border-black/12 sm:pl-4">
                <span>search</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="title / queue / owner"
                  className="w-32 bg-transparent text-right text-[#1d1916] placeholder:text-black/28 outline-none sm:w-40"
                />
              </label>
            </div>
          </header>

          <section>
            <div className="grid grid-cols-2 border-b border-black/18 px-4 py-2 text-[0.54rem] uppercase tracking-[0.16em] text-black/42 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:px-5 lg:px-6">
              <span>{visibleLabel}</span>
              <span className="hidden text-center sm:block">{runningCount.toString().padStart(2, "0")} running</span>
              <span className="hidden text-center sm:block">{deliveredCount.toString().padStart(2, "0")} delivered</span>
              <span className="text-right">queues Q1–Q6</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {visibleItems.map((item) => (
                <RunCard key={item.id} item={item} />
              ))}
            </div>

            {visibleItems.length === 0 && (
              <div className="flex min-h-[16rem] flex-col items-center justify-center border-t border-black/18 px-6 text-center">
                <p className="text-[0.58rem] uppercase tracking-[0.18em] text-black/42">no queue results</p>
                <p className="mt-2 text-sm text-black/56">Try another filter or search by packet title, queue, or owner.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
