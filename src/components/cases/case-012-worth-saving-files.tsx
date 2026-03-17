"use client";

import { useMemo, useState } from "react";
import { Instrument_Sans } from "next/font/google";

const face = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-case-012",
  weight: ["400", "500", "600", "700"],
});

type FileKind = "archive" | "image" | "audio" | "folder" | "document" | "video" | "font";

type FileItem = {
  id: string;
  label: string;
  kind: FileKind;
};

const rows: FileItem[][] = [
  [
    { id: "screenshots", label: "screeeeeenshots.zip", kind: "archive" },
    { id: "memories", label: "memories.jpeg", kind: "image" },
    { id: "demos", label: "demos.mp3", kind: "audio" },
  ],
  [
    { id: "family-heritage", label: "family-heritage.zip", kind: "archive" },
    { id: "smileys", label: "☻☻☻.jpg", kind: "image" },
    { id: "pandemic-art", label: "pandemic-art", kind: "folder" },
    { id: "meme-2021", label: "2021-meme.gif", kind: "image" },
  ],
  [
    { id: "business-plan", label: "business-plan-2021.paper", kind: "document" },
    { id: "autotune-poem", label: "autotune_poem.wav", kind: "audio" },
    { id: "odyssey-edit", label: "odyssey_edit.mov", kind: "video" },
  ],
  [
    { id: "cars-that-float", label: "cars-that-float.zip", kind: "archive" },
    { id: "img-2428", label: "IMG-2428.jpeg", kind: "image" },
    { id: "cosmic-sans", label: "cosmic-sans.ttf", kind: "font" },
    { id: "life-stuff", label: "life-stuff", kind: "folder" },
  ],
  [
    { id: "ultrasound", label: "6wks-ultrasound.tiff", kind: "image" },
    { id: "dad-voicemails", label: "dad-voicemails", kind: "folder" },
  ],
];

const allItems = rows.flat();

function FileIcon({ kind }: { kind: FileKind }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "archive":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <path d="M6 3.2h8a1.8 1.8 0 0 1 1.8 1.8v10A1.8 1.8 0 0 1 14 16.8H6A1.8 1.8 0 0 1 4.2 15V5A1.8 1.8 0 0 1 6 3.2Z" {...common} />
          <path d="M7.6 6.2h4.8" {...common} />
          <path d="M10 6.2v6.1" {...common} />
          <path d="m8.1 10.7 1.9 1.9 1.9-1.9" {...common} />
        </svg>
      );
    case "image":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <rect x="3.2" y="4.2" width="13.6" height="11.6" rx="1.7" {...common} />
          <circle cx="7.9" cy="8.3" r="1.1" {...common} />
          <path d="m5.3 13.5 3.1-3.1 2.4 2.2 3.2-3.3 1.3 1.4" {...common} />
        </svg>
      );
    case "audio":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <path d="M10 4.1a2.1 2.1 0 0 1 2.1 2.1v3.8a2.1 2.1 0 1 1-4.2 0V6.2A2.1 2.1 0 0 1 10 4.1Z" {...common} />
          <path d="M5.5 9.7a4.5 4.5 0 0 0 9 0" {...common} />
          <path d="M10 14.2v2.6" {...common} />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <path d="M3.8 6.6h4.4l1.5 1.6h6.5v5.9a1.7 1.7 0 0 1-1.7 1.7H5.5a1.7 1.7 0 0 1-1.7-1.7Z" {...common} />
          <path d="M3.8 6.6v-.9A1.7 1.7 0 0 1 5.5 4h2.1l1.3 1.4" {...common} />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <rect x="3.2" y="5.2" width="10.6" height="9.6" rx="1.7" {...common} />
          <path d="m13.8 8.5 3-1.7v6.4l-3-1.7" {...common} />
        </svg>
      );
    case "font":
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <path d="M6 16.4V3.8h6.4" {...common} />
          <path d="M6 3.8 14 16.4" {...common} />
          <path d="M6 16.4h8" {...common} />
        </svg>
      );
    case "document":
    default:
      return (
        <svg viewBox="0 0 20 20" aria-hidden className="h-[1.08rem] w-[1.08rem]">
          <path d="M6 3.1h5.3l2.9 2.9v10H6Z" {...common} />
          <path d="M11.3 3.1V6h2.9" {...common} />
          <path d="M7.8 9.6h4.7" {...common} />
          <path d="M7.8 12.6h4.7" {...common} />
        </svg>
      );
  }
}

function FileChip({
  item,
  active,
  onActivate,
}: {
  item: FileItem;
  active: boolean;
  onActivate: (id: string) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={item.label}
      onMouseEnter={() => onActivate(item.id)}
      onFocus={() => onActivate(item.id)}
      onClick={() => onActivate(item.id)}
      className={[
        "inline-flex h-11 items-center gap-2.5 rounded-full border px-4 text-[0.98rem] leading-none tracking-[-0.045em] text-[#171717] sm:h-12 sm:gap-3 sm:px-5 sm:text-[1.12rem]",
        "transition-[background-color,border-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none",
        active
          ? "border-black/12 bg-white text-black shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_18px_rgba(0,0,0,0.04)]"
          : "border-black/[0.045] bg-white/[0.82] shadow-[0_1px_0_rgba(255,255,255,0.6)] hover:border-black/[0.08] hover:bg-white/[0.92]",
        "focus-visible:border-black/14 focus-visible:bg-white focus-visible:shadow-[0_0_0_3px_rgba(17,17,17,0.08)]",
      ].join(" ")}
    >
      <span className="flex h-[1.05rem] w-[1.05rem] items-center justify-center text-[#181818] sm:h-[1.08rem] sm:w-[1.08rem]">
        <FileIcon kind={item.kind} />
      </span>
      <span>{item.label}</span>
    </button>
  );
}

function ChipRow({
  items,
  activeId,
  onActivate,
}: {
  items: FileItem[];
  activeId: string;
  onActivate: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
      {items.map((item) => (
        <FileChip key={item.id} item={item} active={item.id === activeId} onActivate={onActivate} />
      ))}
    </div>
  );
}

export function Case012WorthSavingFiles() {
  const [activeId, setActiveId] = useState("demos");
  const activeItem = useMemo(() => allItems.find((item) => item.id === activeId) ?? allItems[0], [activeId]);

  return (
    <main
      className={`${face.variable} min-h-screen bg-[#d8d8d7] text-[#171717]`}
      style={{ fontFamily: "var(--font-case-012), system-ui, sans-serif" }}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[1220px] items-center px-5 py-14 sm:px-8 md:px-10 lg:px-12">
        <section className="w-full" aria-label="Worth saving files composition">
          <p className="sr-only" aria-live="polite">
            Selected file: {activeItem.label}
          </p>

          <div className="flex flex-col gap-[clamp(1rem,1.9vw,1.45rem)]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
              <h1 className="text-[clamp(2.9rem,7vw,4.9rem)] leading-[0.88] font-[400] tracking-[-0.08em] text-[#151515]">
                For all
              </h1>
              <ChipRow items={rows[0]} activeId={activeId} onActivate={setActiveId} />
            </div>

            <ChipRow items={rows[1]} activeId={activeId} onActivate={setActiveId} />
            <ChipRow items={rows[2]} activeId={activeId} onActivate={setActiveId} />
            <ChipRow items={rows[3]} activeId={activeId} onActivate={setActiveId} />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
              <ChipRow items={rows[4]} activeId={activeId} onActivate={setActiveId} />
              <p className="text-[clamp(3rem,7.4vw,5.35rem)] leading-[0.84] font-[400] tracking-[-0.09em] text-[#151515] sm:pl-2">
                worth saving.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
