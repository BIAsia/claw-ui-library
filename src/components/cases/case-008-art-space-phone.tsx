"use client";

import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { useState, type MouseEvent } from "react";

const displayFace = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-case-008-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFace = Manrope({
  subsets: ["latin"],
  variable: "--font-case-008-body",
  weight: ["400", "500", "600", "700", "800"],
});

type PointerState = {
  x: number;
  y: number;
};

type Release = {
  id: string;
  label: string;
  title: string;
  artist: string;
  year: string;
  format: string;
  price: string;
  edition: string;
  summary: string;
  notes: string[];
  width: string;
  height: string;
  bottom: string;
  color: string;
  edge: string;
  textColor: string;
  embossColor: string;
  coverLines: string[];
  align: "left" | "center";
  variant: "hero" | "band" | "caption";
  shadow: string;
  accent: string;
};

const releases: Release[] = [
  {
    id: "design-by-accident",
    label: "Floor edition 01",
    title: "Design by Accident",
    artist: "Main-room oversized release",
    year: "2026",
    format: "Oversized softcover / cloth spine",
    price: "¥148",
    edition: "Edition of 60",
    summary:
      "The foundation of Chapter 4: a cobalt volume on improvisation, spatial rhythm, and the productive accidents that make an art room feel awake.",
    notes: ["320 pages / matte varnish", "Opening-week signed copies", "Ships with chapter poster"],
    width: "94%",
    height: "18%",
    bottom: "0%",
    color: "linear-gradient(180deg, oklch(0.49 0.11 272) 0%, oklch(0.39 0.1 268) 100%)",
    edge: "oklch(0.68 0.04 268)",
    textColor: "oklch(0.28 0.04 268 / 0.82)",
    embossColor: "oklch(0.27 0.05 272 / 0.42)",
    coverLines: ["DESIGN", "BY ACCIDENT", "FOR A NEW"],
    align: "left",
    variant: "hero",
    shadow: "0 30px 56px rgba(33, 39, 87, 0.28)",
    accent: "oklch(0.71 0.07 276)",
  },
  {
    id: "hey",
    label: "Pocket insert",
    title: "HEY",
    artist: "Conversation prompts + visit notes",
    year: "2026",
    format: "Folded note pack",
    price: "¥36",
    edition: "Open edition",
    summary:
      "A bright interruption tucked into the stack — half invitation card, half curatorial dare for people who like to linger between rooms.",
    notes: ["24 tear-away notes", "Works as a gallery pass insert", "Pairs with espresso and gossip"],
    width: "82%",
    height: "14%",
    bottom: "18.4%",
    color: "linear-gradient(180deg, oklch(0.89 0.08 346) 0%, oklch(0.83 0.07 346) 100%)",
    edge: "oklch(0.94 0.06 342)",
    textColor: "oklch(0.53 0.06 336 / 0.85)",
    embossColor: "oklch(0.52 0.06 336 / 0.36)",
    coverLines: ["HEY"],
    align: "center",
    variant: "band",
    shadow: "0 22px 42px rgba(205, 132, 168, 0.22)",
    accent: "oklch(0.87 0.07 346)",
  },
  {
    id: "david-crow",
    label: "Conversation volume",
    title: "David Crow",
    artist: "Lecture transcript / annotated",
    year: "2026",
    format: "Thread-sewn paperback",
    price: "¥96",
    edition: "Edition of 120",
    summary:
      "A compact midnight-blue transcript that turns one long lecture into a precise object: notes in the margins, diagrams in the pauses, no dead pages.",
    notes: ["112 pages / uncoated stock", "Transcript + image plates", "Released after the 18:30 talk"],
    width: "76%",
    height: "10.8%",
    bottom: "32.9%",
    color: "linear-gradient(180deg, oklch(0.36 0.08 271) 0%, oklch(0.31 0.08 271) 100%)",
    edge: "oklch(0.44 0.07 270)",
    textColor: "oklch(0.72 0.03 267 / 0.74)",
    embossColor: "oklch(0.82 0.02 268 / 0.18)",
    coverLines: ["DAVID CROW"],
    align: "center",
    variant: "caption",
    shadow: "0 18px 30px rgba(47, 55, 110, 0.2)",
    accent: "oklch(0.64 0.07 274)",
  },
  {
    id: "material-index",
    label: "Shelf proof",
    title: "Material Index",
    artist: "Texture studies / room copy",
    year: "2026",
    format: "Wrapped board sample",
    price: "¥58",
    edition: "Edition of 90",
    summary:
      "A pale, almost architectural proof containing cover stocks, binding tests, and photographs of white walls before the crowd softens them.",
    notes: ["Material swatches included", "Embossed chapter stamp", "Available only on-site"],
    width: "71%",
    height: "9.2%",
    bottom: "43.8%",
    color: "linear-gradient(180deg, oklch(0.84 0.02 86) 0%, oklch(0.79 0.02 86) 100%)",
    edge: "oklch(0.9 0.02 86)",
    textColor: "oklch(0.63 0.01 84 / 0.52)",
    embossColor: "oklch(0.7 0.01 84 / 0.22)",
    coverLines: ["MATERIAL", "INDEX"],
    align: "center",
    variant: "caption",
    shadow: "0 14px 28px rgba(130, 122, 104, 0.18)",
    accent: "oklch(0.9 0.03 88)",
  },
  {
    id: "chapter-slip",
    label: "Entry slip",
    title: "Chapter Slip",
    artist: "Printed at the desk",
    year: "2026",
    format: "Foil-stamped ribbon book",
    price: "¥18",
    edition: "Open edition",
    summary:
      "A thin scarlet topper that behaves like a receipt, bookmark, and threshold marker all at once. Small, sharp, slightly ceremonial.",
    notes: ["Foil line on top edge", "Desk-printed throughout the day", "Free with opening-night bundle"],
    width: "57%",
    height: "5.5%",
    bottom: "53.6%",
    color: "linear-gradient(180deg, oklch(0.49 0.18 27) 0%, oklch(0.44 0.16 24) 100%)",
    edge: "oklch(0.79 0.08 62)",
    textColor: "oklch(0.93 0.02 65 / 0.82)",
    embossColor: "oklch(0.95 0.02 65 / 0.14)",
    coverLines: ["CHAPTER 4"],
    align: "center",
    variant: "caption",
    shadow: "0 10px 18px rgba(149, 43, 23, 0.2)",
    accent: "oklch(0.72 0.13 36)",
  },
];

const programMoments = [
  {
    time: "11:00",
    title: "Doors open / shelf warmed",
    note: "Paper scent, quiet music, first handling copies placed under the lamp.",
  },
  {
    time: "14:30",
    title: "Binding table demo",
    note: "A short walkthrough of folded signatures, exposed thread, and material swatches.",
  },
  {
    time: "18:30",
    title: "David Crow live reading",
    note: "One microphone, one blue spine, annotations projected onto the wall.",
  },
  {
    time: "20:15",
    title: "Night stack reset",
    note: "The phone composition sinks into a dimmer palette as the room turns more social.",
  },
];

const visitPanels = [
  {
    label: "Reading room",
    title: "Handle every layer",
    text: "Each object in the stack resolves into a real release card, edition note, and handling instruction — the sculpture behaves like a catalogue you can navigate.",
  },
  {
    label: "Light study",
    title: "Soft depth, not glossy chrome",
    text: "Paper neutrals, tinted shadows, and slow pointer motion replace the usual shiny-device treatment. It feels like a room first, a screen second.",
  },
  {
    label: "Visit planning",
    title: "Make the page useful",
    text: "Below the hero, the interface turns into an actual exhibition site: program timing, release details, visit notes, and a direct path back to the archive index.",
  },
];

function BookLayer({
  release,
  index,
  active,
  pointer,
  onSelect,
}: {
  release: Release;
  index: number;
  active: boolean;
  pointer: PointerState;
  onSelect: () => void;
}) {
  const depth = releases.length - index;
  const x = pointer.x * depth * 9;
  const y = pointer.y * depth * 5 - (active ? 10 : 0);
  const z = active ? 32 : 0;
  const scale = active ? 1.015 : 1;

  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      aria-pressed={active}
      className="group absolute left-1/2 rounded-[0.45rem] transition duration-300 ease-out focus-visible:outline-none"
      style={{
        width: release.width,
        height: release.height,
        bottom: release.bottom,
        transform: `translate3d(calc(-50% + ${x}px), ${y}px, ${z}px) scale(${scale})`,
        transformStyle: "preserve-3d",
        zIndex: active ? 30 : index + 1,
      }}
    >
      <span
        className="absolute inset-x-[2.4%] top-[-0.46rem] h-[0.7rem] rounded-t-[0.25rem] border border-black/10"
        style={{
          background: `linear-gradient(180deg, color-mix(in oklab, ${release.edge} 90%, white 10%) 0%, ${release.edge} 100%)`,
          boxShadow: active ? "0 10px 16px rgba(18, 18, 16, 0.08)" : "none",
        }}
      />
      <span
        className="absolute inset-0 rounded-[0.45rem] border border-black/10"
        style={{
          background: release.color,
          boxShadow: `${release.shadow}, inset 0 1px 0 rgba(255,255,255,0.28)`,
        }}
      />
      <span
        className="absolute inset-x-[3.5%] bottom-[7%] top-[15%] rounded-[0.32rem] border border-black/6"
        style={{
          background: `linear-gradient(180deg, color-mix(in oklab, ${release.color} 88%, white 12%) 0%, ${release.color} 100%)`,
        }}
      />
      <span
        className="pointer-events-none absolute inset-x-[8%] top-[18%]"
        style={{
          color: release.textColor,
          textAlign: release.align,
          textShadow: `0 1px 0 ${release.embossColor}`,
        }}
      >
        {release.variant === "hero" ? (
          <span
            className="block leading-[0.84] tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-case-008-display)", fontSize: "clamp(1.4rem, 2.8vw, 2.9rem)" }}
          >
            {release.coverLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        ) : release.variant === "band" ? (
          <span
            className="block tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-case-008-body)", fontSize: "clamp(1.4rem, 2vw, 2rem)", fontWeight: 500 }}
          >
            {release.coverLines[0]}
          </span>
        ) : (
          <span
            className="block uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--font-case-008-body)", fontSize: "clamp(0.52rem, 0.74vw, 0.82rem)", fontWeight: 600 }}
          >
            {release.coverLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        )}
      </span>
    </button>
  );
}

export function Case008ArtSpacePhone() {
  const [activeId, setActiveId] = useState<string>(releases[0].id);
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });

  const activeRelease = releases.find((release) => release.id === activeId) ?? releases[0];

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const nextY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({
      x: Number(nextX.toFixed(3)),
      y: Number(nextY.toFixed(3)),
    });
  }

  function resetPointer() {
    setPointer({ x: 0, y: 0 });
  }

  return (
    <main
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen overflow-hidden text-[#201d1a]`}
      style={{ backgroundColor: "oklch(0.965 0.012 86)" }}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes case008Float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes case008Drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -14px, 0) scale(1.02); }
        }

        @keyframes case008Pulse {
          0%, 100% { opacity: 0.22; }
          50% { opacity: 0.4; }
        }

        .case008-float {
          animation: case008Float 8s ease-in-out infinite;
        }

        .case008-drift {
          animation: case008Drift 14s ease-in-out infinite;
        }

        .case008-pulse {
          animation: case008Pulse 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .case008-float,
          .case008-drift,
          .case008-pulse {
            animation: none !important;
          }

          * {
            transition-duration: 0ms !important;
          }
        }
      `}</style>

      <div className="relative isolate">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(103, 93, 83, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(103, 93, 83, 0.04) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              `radial-gradient(circle at ${48 + pointer.x * 10}% ${14 + pointer.y * 8}%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.42) 17%, rgba(255,255,255,0) 44%), radial-gradient(circle at 8% 18%, rgba(220, 205, 188, 0.48) 0%, rgba(220,205,188,0) 36%), radial-gradient(circle at 92% 10%, rgba(155, 141, 197, 0.16) 0%, rgba(155,141,197,0) 26%), linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(243,237,230,0.88) 100%)`,
          }}
        />

        <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-10 lg:pt-6">
          <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 rounded-full border border-black/8 bg-white/55 px-4 py-3 shadow-[0_10px_30px_rgba(95,82,63,0.08)] backdrop-blur-sm sm:px-6">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-black/40">claw ui library / case 008</p>
              <p className="mt-1 text-sm text-black/70">Art Space Phone Stack</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-black/58 md:flex">
              <a href="#overview" className="transition hover:text-black">Overview</a>
              <a href="#releases" className="transition hover:text-black">Releases</a>
              <a href="#visit" className="transition hover:text-black">Visit</a>
            </nav>
            <Link
              href="/"
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70 transition hover:border-black/20 hover:bg-black hover:text-[#f6f0e9]"
            >
              Back to archive
            </Link>
          </div>
        </header>

        <section
          id="overview"
          onMouseMove={handleMove}
          onMouseLeave={resetPointer}
          className="relative z-10 px-4 pb-18 pt-8 sm:px-6 md:pb-24 lg:px-10 lg:pt-10"
        >
          <div className="mx-auto grid max-w-[92rem] gap-10 xl:grid-cols-[1.08fr_minmax(18rem,28rem)_0.92fr] xl:items-start">
            <div className="max-w-2xl xl:pt-8">
              <p className="text-[0.72rem] uppercase tracking-[0.4em] text-black/38">Soft gallery / layered mobile object / real site reconstruction</p>
              <h1
                className="mt-5 max-w-[9ch] text-[clamp(3.75rem,9vw,8.8rem)] leading-[0.84] tracking-[-0.06em] text-black/84"
                style={{ fontFamily: "var(--font-case-008-display)" }}
              >
                Art space as a living phone stack.
              </h1>
              <p className="mt-6 max-w-xl text-[1.03rem] leading-7 text-black/62 sm:text-[1.08rem]">
                The reference image becomes a full exhibition page instead of a poster shell: the phone is rebuilt as a controllable device sculpture, every book layer becomes navigable release metadata, and the surrounding layout behaves like a quiet gallery website.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["05", "Controllable stack layers"],
                  ["03", "Site sections beyond the hero"],
                  ["∞", "Soft pointer depth moments"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.6rem] border border-black/8 bg-white/55 p-4 shadow-[0_12px_28px_rgba(113,99,75,0.08)]"
                  >
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/38">{label}</p>
                    <p className="mt-3 text-3xl tracking-[-0.08em] text-black/82">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#releases"
                  className="rounded-full bg-black px-5 py-3 text-sm text-[#f5efe6] transition hover:bg-black/82"
                >
                  Browse releases
                </a>
                <a
                  href="#visit"
                  className="rounded-full border border-black/12 px-5 py-3 text-sm text-black/68 transition hover:border-black/24 hover:bg-white/75"
                >
                  Visit notes
                </a>
              </div>
            </div>

            <div className="relative xl:sticky xl:top-24">
              <div className="relative mx-auto flex w-full max-w-[29rem] items-center justify-center py-6 [perspective:1900px] sm:py-10">
                <div
                  className="case008-pulse absolute h-[24rem] w-[24rem] rounded-full blur-3xl"
                  style={{
                    background: "radial-gradient(circle, rgba(108, 96, 144, 0.22) 0%, rgba(108, 96, 144, 0.08) 32%, rgba(108,96,144,0) 72%)",
                    transform: `translate3d(${pointer.x * 14}px, ${pointer.y * 10}px, 0)`,
                  }}
                />
                <div
                  className="case008-drift absolute h-[36rem] w-[18.5rem] rounded-[3.7rem] border border-black/7 bg-white/55 shadow-[0_24px_70px_rgba(100,88,72,0.11)]"
                  style={{
                    transform: `translate3d(${-34 + pointer.x * 12}px, 12px, -100px) rotate(-9deg)`,
                  }}
                />
                <div
                  className="case008-drift absolute h-[34rem] w-[16rem] rounded-[3.3rem] border border-black/8 bg-[rgba(82,90,139,0.09)] shadow-[0_24px_70px_rgba(83,88,142,0.14)]"
                  style={{
                    animationDelay: "-4s",
                    transform: `translate3d(${30 + pointer.x * 16}px, 30px, -60px) rotate(8deg)`,
                  }}
                />

                <div
                  className="relative aspect-[0.56] w-[min(72vw,25rem)] max-w-[25rem] transition duration-300 ease-out"
                  style={{
                    transform: `rotateX(${pointer.y * -7}deg) rotateY(${pointer.x * 10}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute -bottom-10 left-1/2 h-16 w-[76%] -translate-x-1/2 rounded-full bg-[rgba(60,54,48,0.18)] blur-2xl" />
                  <div className="absolute inset-0 rounded-[3.9rem] bg-[#111112] shadow-[0_28px_60px_rgba(31,29,37,0.3)]" />
                  <div className="absolute inset-y-[20%] -left-[0.2rem] w-[0.18rem] rounded-full bg-black/70" />
                  <div className="absolute left-[-0.24rem] top-[24%] h-[12%] w-[0.22rem] rounded-full bg-black/80" />
                  <div className="absolute left-[-0.24rem] top-[39%] h-[9%] w-[0.22rem] rounded-full bg-black/80" />
                  <div className="absolute right-[-0.24rem] top-[32%] h-[16%] w-[0.22rem] rounded-full bg-black/80" />
                  <div className="absolute inset-[0.28rem] rounded-[3.55rem] bg-[#151517] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

                  <div className="absolute inset-[0.58rem] overflow-hidden rounded-[3.2rem] border border-black/10 bg-[#f6f0e9] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(246,240,233,0.95) 36%, rgba(237,229,219,0.98) 100%), radial-gradient(circle at 50% 10%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0) 28%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(117, 102, 89, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(117, 102, 89, 0.06) 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />

                    <div className="absolute left-1/2 top-4 z-20 h-8 w-[7.5rem] -translate-x-1/2 rounded-full bg-black shadow-[0_2px_12px_rgba(0,0,0,0.24)]">
                      <div className="absolute right-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(54,208,255,0.8)_0%,_rgba(17,74,125,1)_60%,_rgba(0,0,0,0)_68%)]" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col px-7 pb-7 pt-12 text-center sm:px-8">
                      <div>
                        <p
                          className="text-[clamp(3.7rem,10vw,5.8rem)] leading-[0.82] tracking-[-0.07em] text-black/22"
                          style={{ fontFamily: "var(--font-case-008-display)" }}
                        >
                          ART
                          <br />
                          SPACE
                        </p>
                        <p className="mt-2 text-[0.76rem] tracking-[0.18em] text-black/64">CHAPTER 4</p>
                        <h2
                          className="mx-auto mt-3 max-w-[8ch] text-[clamp(2.15rem,5.4vw,3.2rem)] leading-[0.88] tracking-[-0.05em] text-black/88"
                          style={{ fontFamily: "var(--font-case-008-display)" }}
                        >
                          Upcoming releases
                        </h2>
                      </div>

                      <div className="relative mt-auto h-[54%] min-h-[18rem]">
                        <div
                          className="absolute inset-x-[7%] bottom-[2%] h-[1.15rem] rounded-full blur-md"
                          style={{ background: "rgba(75, 68, 64, 0.22)" }}
                        />
                        {releases.map((release, index) => (
                          <BookLayer
                            key={release.id}
                            release={release}
                            index={index}
                            active={activeRelease.id === release.id}
                            pointer={pointer}
                            onSelect={() => setActiveId(release.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="grid gap-4 xl:pt-16">
              <div className="rounded-[2rem] border border-black/8 bg-white/65 p-6 shadow-[0_14px_34px_rgba(103,92,73,0.08)] backdrop-blur-sm">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-black/40">Currently surfaced</p>
                <h2
                  className="mt-3 text-[clamp(2.1rem,4vw,3.2rem)] leading-[0.9] tracking-[-0.05em] text-black/84"
                  style={{ fontFamily: "var(--font-case-008-display)" }}
                >
                  {activeRelease.title}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-black/42">
                  {activeRelease.artist} · {activeRelease.year}
                </p>
                <p className="mt-5 text-[1rem] leading-7 text-black/62">{activeRelease.summary}</p>

                <dl className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                  {[
                    ["Format", activeRelease.format],
                    ["Edition", activeRelease.edition],
                    ["Price", activeRelease.price],
                    ["Layer", activeRelease.label],
                  ].map(([term, detail]) => (
                    <div key={term} className="rounded-[1.25rem] bg-[rgba(243,236,228,0.92)] p-4">
                      <dt className="text-[0.62rem] uppercase tracking-[0.26em] text-black/35">{term}</dt>
                      <dd className="mt-2 text-sm leading-6 text-black/70">{detail}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 space-y-2 text-sm leading-6 text-black/58">
                  {activeRelease.notes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-black/8 bg-[rgba(55,63,103,0.92)] p-6 text-[#f5f0ea] shadow-[0_16px_36px_rgba(52,58,92,0.18)]">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-white/55">Today in the room</p>
                <div className="mt-4 space-y-4">
                  {programMoments.map((moment) => (
                    <div key={moment.time} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/12 pt-4 first:border-t-0 first:pt-0">
                      <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/50">{moment.time}</div>
                      <div>
                        <p className="text-lg tracking-[-0.04em] text-white">{moment.title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/64">{moment.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="releases" className="relative z-10 px-4 pb-10 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2.2rem] border border-black/8 bg-white/65 p-6 shadow-[0_14px_34px_rgba(103,92,73,0.08)]">
              <p className="text-[0.66rem] uppercase tracking-[0.34em] text-black/40">Release matrix</p>
              <h2
                className="mt-4 max-w-[10ch] text-[clamp(2.35rem,4vw,4.25rem)] leading-[0.9] tracking-[-0.06em] text-black/84"
                style={{ fontFamily: "var(--font-case-008-display)" }}
              >
                Every layer is clickable, not decorative.
              </h2>
              <p className="mt-5 max-w-lg text-[1rem] leading-7 text-black/60">
                The composition still reads like the source image, but now every slab can drive content. Hover or tap through the stack to switch the release narrative, pricing, material notes, and visit context.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {visitPanels.map((panel) => (
                  <article key={panel.title} className="rounded-[1.5rem] bg-[rgba(243,236,228,0.9)] p-4">
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/35">{panel.label}</p>
                    <h3 className="mt-3 text-lg tracking-[-0.04em] text-black/82">{panel.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/58">{panel.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {releases
                .slice()
                .reverse()
                .map((release) => {
                  const active = activeRelease.id === release.id;

                  return (
                    <button
                      key={release.id}
                      type="button"
                      onMouseEnter={() => setActiveId(release.id)}
                      onFocus={() => setActiveId(release.id)}
                      onClick={() => setActiveId(release.id)}
                      aria-pressed={active}
                      className={`group rounded-[1.8rem] border p-5 text-left transition duration-300 focus-visible:outline-none ${
                        active
                          ? "border-black/14 bg-[rgba(255,255,255,0.74)] shadow-[0_18px_42px_rgba(100,88,72,0.11)]"
                          : "border-black/8 bg-[rgba(247,241,233,0.78)] hover:border-black/14 hover:bg-white/72"
                      }`}
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-black/38">{release.label}</p>
                          <h3
                            className="mt-3 text-[clamp(1.9rem,3vw,2.8rem)] leading-[0.9] tracking-[-0.05em] text-black/84"
                            style={{ fontFamily: "var(--font-case-008-display)" }}
                          >
                            {release.title}
                          </h3>
                          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-black/42">{release.artist}</p>
                        </div>
                        <div className="flex items-center gap-3 md:pt-1">
                          <span className="rounded-full border border-black/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-black/52">
                            {release.year}
                          </span>
                          <span
                            className="h-4 w-4 rounded-full border border-black/10"
                            style={{ background: release.accent }}
                          />
                        </div>
                      </div>
                      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                        <p className="max-w-2xl text-sm leading-6 text-black/58">{release.summary}</p>
                        <div className="text-sm text-black/52 md:text-right">
                          <p>{release.format}</p>
                          <p className="mt-1">{release.price}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </section>

        <section id="visit" className="relative z-10 px-4 pb-20 pt-6 sm:px-6 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="rounded-[2.4rem] border border-black/8 bg-[rgba(31,32,42,0.96)] p-6 text-[#f5efe6] shadow-[0_22px_50px_rgba(24,24,30,0.22)] sm:p-8">
              <p className="text-[0.64rem] uppercase tracking-[0.3em] text-white/48">Visit the room</p>
              <h2
                className="mt-4 max-w-[9ch] text-[clamp(2.6rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.06em] text-white"
                style={{ fontFamily: "var(--font-case-008-display)" }}
              >
                A quiet exhibition site around the object.
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-white/70">
                This page is meant to be used like a real art-space microsite: you can land on the stack, understand the chapter, inspect releases, plan a visit, then step back out to the archive without losing the softness of the original composition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.55rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.26em] text-white/48">Opening window</p>
                  <p className="mt-3 text-2xl tracking-[-0.04em] text-white">Tue–Sun / 11:00–20:00</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">Late access until 21:00 on talk nights. Handling copies return to the desk at 19:45.</p>
                </div>
                <div className="rounded-[1.55rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.26em] text-white/48">Address</p>
                  <p className="mt-3 text-2xl tracking-[-0.04em] text-white">Room 4, Lane 88</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">Small front desk, back wall projection, shelf stack near the window — hard to miss, impossible to rush.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-black/8 bg-white/65 p-6 shadow-[0_14px_34px_rgba(103,92,73,0.08)]">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-black/40">What was rebuilt</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-black/62">
                  <li className="flex gap-3"><span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-black/35" />Phone bezel, dynamic island, side keys, layered back-panels, and soft screen typography.</li>
                  <li className="flex gap-3"><span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-black/35" />Stacked books as discrete interactive slabs with depth, tint, and synchronized content states.</li>
                  <li className="flex gap-3"><span className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-black/35" />Supporting exhibition-site sections: program timing, release catalogue, visit notes, and archive navigation.</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-black/8 bg-[rgba(243,236,228,0.85)] p-6 shadow-[0_14px_34px_rgba(103,92,73,0.08)]">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-black/40">Approximation notes</p>
                <p className="mt-4 text-sm leading-7 text-black/60">
                  The exact book typography, material texture, and proportions are interpreted rather than traced one-to-one. The goal here is to preserve the composition, atmosphere, and layered-device feeling while turning the reference into an actual living webpage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
