"use client";

import Link from "next/link";
import { useMemo, useState, type PointerEvent } from "react";
import { Archivo } from "next/font/google";

const face = Archivo({
  subsets: ["latin"],
  variable: "--font-case-012",
  weight: ["400", "500", "600", "700"],
});

type ArchiveKind = "archive" | "image" | "audio" | "folder" | "document" | "video" | "font";

type ArchiveItem = {
  id: string;
  label: string;
  kind: ArchiveKind;
  note: string;
  meta: string;
  savedFor: string;
};

type PointerState = {
  x: number;
  y: number;
};

const rows: ArchiveItem[][] = [
  [
    {
      id: "screenshots",
      label: "screeeeeenshots.zip",
      kind: "archive",
      note: "Loose captures, half-finished ideas, and proof that some messy drafts still mattered.",
      meta: "Archive · 482 captures · 2.3 GB",
      savedFor: "Process",
    },
    {
      id: "memories",
      label: "memories.jpeg",
      kind: "image",
      note: "A compressed image folder pretending it can hold an entire year by itself.",
      meta: "Image set · 118 stills",
      savedFor: "People",
    },
    {
      id: "demos",
      label: "demos.mp3",
      kind: "audio",
      note: "Rough recordings with room noise left in because the room noise is part of it.",
      meta: "Audio · 13 takes · 41 min",
      savedFor: "Sound",
    },
  ],
  [
    {
      id: "family-heritage",
      label: "family-heritage.zip",
      kind: "archive",
      note: "Scans, names, receipts, and tiny records that only become precious after they almost disappear.",
      meta: "Archive · scanned records",
      savedFor: "Family",
    },
    {
      id: "smileys",
      label: "☺☺☺.jpg",
      kind: "image",
      note: "A joke file that survived long enough to become a timestamp of its own era.",
      meta: "Image · 1 still",
      savedFor: "Internet debris",
    },
    {
      id: "pandemic-art",
      label: "pandemic-art",
      kind: "folder",
      note: "The folder where isolation turned into output instead of just duration.",
      meta: "Folder · sketches + drafts",
      savedFor: "Making",
    },
    {
      id: "meme-2021",
      label: "2021-meme.gif",
      kind: "image",
      note: "A reminder that some years are easier to archive as loops than as summaries.",
      meta: "Animated image · loop",
      savedFor: "Comedy",
    },
  ],
  [
    {
      id: "business-plan",
      label: "business-plan-2021.paper",
      kind: "document",
      note: "An earnest document from a version of the future that did not happen exactly as written.",
      meta: "Document · strategy draft",
      savedFor: "Ambition",
    },
    {
      id: "autotune-poem",
      label: "autotune_poem.wav",
      kind: "audio",
      note: "Voice memo turned accidental song, still too strange to delete.",
      meta: "Wave file · 2:14",
      savedFor: "Experiments",
    },
    {
      id: "odyssey-edit",
      label: "odyssey_edit.mov",
      kind: "video",
      note: "An edit export that kept the name of a much bigger feeling than the cut itself.",
      meta: "Video · workprint",
      savedFor: "Motion",
    },
  ],
  [
    {
      id: "cars-that-float",
      label: "cars-that-float.zip",
      kind: "archive",
      note: "Reference collecting at its most specific and therefore somehow most believable.",
      meta: "Archive · references",
      savedFor: "Research",
    },
    {
      id: "img-2428",
      label: "IMG-2428.jpeg",
      kind: "image",
      note: "The kind of camera roll frame that means nothing to most people and everything to the right one.",
      meta: "Image · phone capture",
      savedFor: "Witness",
    },
    {
      id: "cosmic-sans",
      label: "cosmic-sans.ttf",
      kind: "font",
      note: "A truly unnecessary typeface, which is exactly why it earns a permanent place.",
      meta: "Font · single weight",
      savedFor: "Taste",
    },
    {
      id: "life-stuff",
      label: "life-stuff",
      kind: "folder",
      note: "The folder name of someone admitting structure lost the argument that week.",
      meta: "Folder · unsorted but important",
      savedFor: "Overflow",
    },
  ],
  [
    {
      id: "ultrasound",
      label: "6wks-ultrasound.tiff",
      kind: "image",
      note: "One of those files whose technical format matters less than the fact it exists at all.",
      meta: "Scan · medical image",
      savedFor: "Beginning",
    },
    {
      id: "dad-voicemails",
      label: "dad-voicemails",
      kind: "folder",
      note: "Not clean, not loud, not replaceable. Kept because some voices should never rely on memory alone.",
      meta: "Folder · 18 recordings",
      savedFor: "Voice",
    },
  ],
];

const allItems = rows.flat();

function ArchiveIcon({ kind }: { kind: ArchiveKind }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.85,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "archive":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <rect x="4.1" y="2.9" width="11.8" height="14.2" rx="2.15" {...common} />
          <path d="M7 6.1h6" {...common} />
          <path d="M10 6.1v7" {...common} />
          <path d="M7.35 10.65 10 13.25l2.65-2.6" {...common} />
        </svg>
      );
    case "image":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <rect x="3.2" y="4" width="13.6" height="12" rx="1.8" {...common} />
          <circle cx="8" cy="8.2" r="1.25" {...common} />
          <path d="m5.2 13.8 3.6-3.8 2.8 2.7 2.9-3.1 1.3 1.5" {...common} />
        </svg>
      );
    case "audio":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <path d="M10 4.1a2.2 2.2 0 0 1 2.2 2.2v3.5a2.2 2.2 0 1 1-4.4 0V6.3A2.2 2.2 0 0 1 10 4.1Z" {...common} />
          <path d="M5.2 9.8a4.8 4.8 0 0 0 9.6 0" {...common} />
          <path d="M10 14.6v2.2" {...common} />
          <path d="M7.2 16.8h5.6" {...common} />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <path d="M3.4 6.5h4.2l1.4 1.8h7.6v6a1.8 1.8 0 0 1-1.8 1.8H5.2a1.8 1.8 0 0 1-1.8-1.8Z" {...common} />
          <path d="M3.4 6.5V5.8A1.8 1.8 0 0 1 5.2 4h2.1l1.3 1.6" {...common} />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <rect x="3.2" y="5" width="10.8" height="10" rx="1.9" {...common} />
          <path d="m14 8.2 2.8-1.6v6.8L14 11.8" {...common} />
        </svg>
      );
    case "font":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <path d="M5.2 16.1V4.1h7.3" {...common} />
          <path d="M5.2 4.1 15 13.9" {...common} />
          <path d="M5.2 16.1H15" {...common} />
        </svg>
      );
    case "document":
    default:
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.05rem] w-[1.05rem]">
          <path d="M6 2.9h5.6l3 3v11.2H6Z" {...common} />
          <path d="M11.6 2.9v3h3" {...common} />
          <path d="M7.6 10.1h4.8" {...common} />
          <path d="M7.6 13.1h4.8" {...common} />
        </svg>
      );
  }
}

function ArchiveChip({
  item,
  active,
  onActivate,
  pointer,
  depth,
}: {
  item: ArchiveItem;
  active: boolean;
  onActivate: (id: string) => void;
  pointer: PointerState;
  depth: number;
}) {
  const shiftX = pointer.x * depth * 7;
  const shiftY = pointer.y * depth * 4;

  return (
    <button
      type="button"
      onMouseEnter={() => onActivate(item.id)}
      onFocus={() => onActivate(item.id)}
      onClick={() => onActivate(item.id)}
      aria-pressed={active}
      className="group inline-flex h-13 items-center gap-3 rounded-full border px-5 text-[clamp(1.08rem,1.85vw,1.22rem)] tracking-[-0.04em] text-[#1f1d1b] transition duration-300 ease-out focus-visible:outline-none"
      style={{
        background: active ? "rgba(255,255,252,0.98)" : "rgba(249,248,243,0.9)",
        borderColor: active ? "rgba(35,32,28,0.18)" : "rgba(35,32,28,0.06)",
        boxShadow: active
          ? "0 14px 34px rgba(34, 31, 27, 0.08), inset 0 1px 0 rgba(255,255,255,0.95)"
          : "0 1px 0 rgba(255,255,255,0.72), 0 8px 22px rgba(34,31,27,0.03)",
        transform: `translate3d(${shiftX}px, ${shiftY}px, 0) ${active ? "scale(1.018)" : "scale(1)"}`,
      }}
    >
      <span className="flex h-6 w-6 items-center justify-center text-[#1f1d1b]">
        <ArchiveIcon kind={item.kind} />
      </span>
      <span>{item.label}</span>
    </button>
  );
}

function RowLayer({
  items,
  activeId,
  onActivate,
  pointer,
  depth,
}: {
  items: ArchiveItem[];
  activeId: string;
  onActivate: (id: string) => void;
  pointer: PointerState;
  depth: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 md:gap-4">
      {items.map((item, index) => (
        <ArchiveChip
          key={item.id}
          item={item}
          active={item.id === activeId}
          onActivate={onActivate}
          pointer={pointer}
          depth={depth + index * 0.08}
        />
      ))}
    </div>
  );
}

export function Case012WorthSavingFiles() {
  const [activeId, setActiveId] = useState("dad-voicemails");
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });

  const activeItem = useMemo(() => allItems.find((item) => item.id === activeId) ?? allItems[0], [activeId]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }

  return (
    <main
      className={`${face.variable} min-h-screen overflow-hidden bg-[#d9d8d5] text-[#1d1b18]`}
      style={{ fontFamily: "var(--font-case-012)" }}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          * {
            animation: none !important;
            transition-duration: 0ms !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.42),transparent_26%),radial-gradient(circle_at_82%_82%,rgba(255,255,255,0.2),transparent_30%),linear-gradient(180deg,#dbdad7_0%,#d6d5d2_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(30,28,24,0.26)_1px,transparent_0)] [background-size:14px_14px]" />

      <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-5 pb-2 pt-5 text-[0.68rem] uppercase tracking-[0.28em] text-[#1f1d1b]/48 md:px-8 md:pt-7 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#1f1d1b]/70" />
          <span>Worth saving archive</span>
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <span>15 kept items</span>
          <span className="h-3.5 w-px bg-[#1f1d1b]/14" />
          <span>Hover or tab to inspect</span>
        </div>

        <Link
          href="/"
          className="rounded-full border border-[#1f1d1b]/10 px-3 py-2 text-[#1f1d1b]/62 transition hover:border-[#1f1d1b]/18 hover:bg-white/45 hover:text-[#1f1d1b]"
        >
          Archive index
        </Link>
      </header>

      <section
        className="relative z-10 mx-auto flex min-h-[calc(100vh-5.25rem)] w-full max-w-[1400px] flex-col justify-center px-5 pb-8 pt-4 md:px-8 lg:px-10"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[11%] top-[12%] h-36 rounded-full blur-3xl transition duration-500"
          style={{
            background: `radial-gradient(circle at ${50 + pointer.x * 18}% ${40 + pointer.y * 22}%, rgba(255,255,255,0.5), transparent 34%)`,
          }}
        />

        <div className="relative flex flex-1 flex-col justify-center gap-4 md:gap-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1
              className="text-[clamp(3.5rem,8vw,5.7rem)] leading-[0.86] tracking-[-0.08em] text-[#191715] transition duration-500"
              style={{ transform: `translate3d(${pointer.x * -10}px, ${pointer.y * -6}px, 0)` }}
            >
              For all
            </h1>
            <div className="md:flex-1 md:justify-end">
              <RowLayer items={rows[0]} activeId={activeId} onActivate={setActiveId} pointer={pointer} depth={0.35} />
            </div>
          </div>

          <div
            className="transition duration-500"
            style={{ transform: `translate3d(${pointer.x * 6}px, ${pointer.y * -4}px, 0)` }}
          >
            <RowLayer items={rows[1]} activeId={activeId} onActivate={setActiveId} pointer={pointer} depth={0.45} />
          </div>

          <div
            className="transition duration-500"
            style={{ transform: `translate3d(${pointer.x * -5}px, ${pointer.y * 4}px, 0)` }}
          >
            <RowLayer items={rows[2]} activeId={activeId} onActivate={setActiveId} pointer={pointer} depth={0.58} />
          </div>

          <div
            className="transition duration-500"
            style={{ transform: `translate3d(${pointer.x * 7}px, ${pointer.y * -3}px, 0)` }}
          >
            <RowLayer items={rows[3]} activeId={activeId} onActivate={setActiveId} pointer={pointer} depth={0.7} />
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div
              className="transition duration-500"
              style={{ transform: `translate3d(${pointer.x * -4}px, ${pointer.y * 5}px, 0)` }}
            >
              <RowLayer items={rows[4]} activeId={activeId} onActivate={setActiveId} pointer={pointer} depth={0.82} />
            </div>

            <h2
              className="text-left text-[clamp(3.4rem,8vw,6.3rem)] leading-[0.84] tracking-[-0.08em] text-[#191715] transition duration-500 md:text-right"
              style={{ transform: `translate3d(${pointer.x * 12}px, ${pointer.y * 8}px, 0)` }}
            >
              worth saving.
            </h2>
          </div>
        </div>

        <aside className="mt-10 grid gap-4 border-t border-[#1f1d1b]/12 pt-5 md:grid-cols-[minmax(0,1.2fr)_auto_auto] md:items-end md:gap-6">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#1f1d1b]/42">Selected item</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#1f1d1b]/10 bg-white/60 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-[#1f1d1b]/55">
                {activeItem.savedFor}
              </span>
              <p className="text-[clamp(1.15rem,2vw,1.45rem)] leading-[1.05] tracking-[-0.04em] text-[#1d1b18]">{activeItem.label}</p>
            </div>
            <p className="mt-3 max-w-[54rem] text-[0.98rem] leading-[1.65] tracking-[-0.02em] text-[#1f1d1b]/64">{activeItem.note}</p>
          </div>

          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#1f1d1b]/42">Index</p>
            <p className="mt-3 text-[0.94rem] tracking-[-0.02em] text-[#1f1d1b]/72">{activeItem.meta}</p>
          </div>

          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#1f1d1b]/42">Layer state</p>
            <p className="mt-3 text-[0.94rem] tracking-[-0.02em] text-[#1f1d1b]/72">Interactive file chips with stable hover and keyboard focus</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
