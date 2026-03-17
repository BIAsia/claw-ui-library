"use client";

import { useMemo, useState } from "react";
import { Public_Sans } from "next/font/google";

type LayerMode = "full" | "type" | "badges";

type StickerSpec = {
  id: string;
  left: number;
  top: number;
  width: string;
  rotate: number;
  depth: number;
  badge: "+" | "×";
  badgeOffsetX: number;
  badgeOffsetY: number;
  wordOffset: number;
  note: string;
};

const grotesk = Public_Sans({
  subsets: ["latin"],
  variable: "--font-case-002-grotesk",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const stickers: StickerSpec[] = [
  {
    id: "north-west-a",
    left: -6,
    top: 3,
    width: "clamp(16rem, 38vw, 30rem)",
    rotate: -10,
    depth: 0.55,
    badge: "+",
    badgeOffsetX: -18,
    badgeOffsetY: -18,
    wordOffset: -8,
    note: "The first band opens the field like a pasted poster strip instead of a flat background image.",
  },
  {
    id: "north-center-a",
    left: 16,
    top: 1,
    width: "clamp(17rem, 41vw, 31rem)",
    rotate: 11,
    depth: 0.66,
    badge: "+",
    badgeOffsetX: -12,
    badgeOffsetY: -14,
    wordOffset: 2,
    note: "A second live text strip keeps the pile feeling assembled by hand, not duplicated as one merged asset.",
  },
  {
    id: "north-east-a",
    left: 53,
    top: 7,
    width: "clamp(17rem, 40vw, 32rem)",
    rotate: -7,
    depth: 0.58,
    badge: "+",
    badgeOffsetX: -14,
    badgeOffsetY: -12,
    wordOffset: 16,
    note: "The upper-right band lets the typography clip naturally against the viewport just like printed stickers running off the sheet.",
  },
  {
    id: "mid-west-a",
    left: -8,
    top: 18,
    width: "clamp(18rem, 43vw, 33rem)",
    rotate: 2,
    depth: 0.72,
    badge: "×",
    badgeOffsetX: -18,
    badgeOffsetY: -10,
    wordOffset: -3,
    note: "This strip carries the horizontal read of the pile and gives the composition its blunt editorial weight.",
  },
  {
    id: "mid-center-a",
    left: 23,
    top: 19,
    width: "clamp(16rem, 37vw, 28rem)",
    rotate: -9,
    depth: 0.8,
    badge: "+",
    badgeOffsetX: -14,
    badgeOffsetY: -16,
    wordOffset: 10,
    note: "A shorter center strip breaks the rhythm so the pile feels collaged and not evenly generated.",
  },
  {
    id: "mid-east-a",
    left: 48,
    top: 20,
    width: "clamp(16rem, 39vw, 29rem)",
    rotate: 8,
    depth: 0.84,
    badge: "+",
    badgeOffsetX: -12,
    badgeOffsetY: -18,
    wordOffset: -2,
    note: "The right-hand strip keeps the chant readable in pieces, with crop and overlap doing the composition work.",
  },
  {
    id: "center-west-a",
    left: -4,
    top: 35,
    width: "clamp(18rem, 42vw, 31rem)",
    rotate: 6,
    depth: 0.92,
    badge: "+",
    badgeOffsetX: -18,
    badgeOffsetY: -16,
    wordOffset: -6,
    note: "The dense middle layer recreates the pressure of stacked print matter rather than a single tiled texture.",
  },
  {
    id: "center-core",
    left: 24,
    top: 35,
    width: "clamp(18rem, 40vw, 31rem)",
    rotate: -5,
    depth: 1,
    badge: "×",
    badgeOffsetX: -12,
    badgeOffsetY: -18,
    wordOffset: 6,
    note: "This central sticker anchors the whole pile and acts as the default focus target in the live inspector.",
  },
  {
    id: "center-east-a",
    left: 61,
    top: 35,
    width: "clamp(16rem, 36vw, 28rem)",
    rotate: 2,
    depth: 0.9,
    badge: "+",
    badgeOffsetX: -16,
    badgeOffsetY: -16,
    wordOffset: 12,
    note: "A clipped east-side strip keeps the edge active instead of tapering off into empty whitespace.",
  },
  {
    id: "lower-west-a",
    left: -10,
    top: 50,
    width: "clamp(19rem, 44vw, 34rem)",
    rotate: 1,
    depth: 0.96,
    badge: "+",
    badgeOffsetX: -12,
    badgeOffsetY: -14,
    wordOffset: -10,
    note: "The broad lower-left layer starts the heavier base where the stickers visually accumulate toward the bottom.",
  },
  {
    id: "lower-center-a",
    left: 18,
    top: 51,
    width: "clamp(17rem, 39vw, 30rem)",
    rotate: 11,
    depth: 1.05,
    badge: "×",
    badgeOffsetX: -14,
    badgeOffsetY: -10,
    wordOffset: -3,
    note: "This angled band injects a strong diagonal so the composition still feels unstable and urgent.",
  },
  {
    id: "lower-east-a",
    left: 53,
    top: 52,
    width: "clamp(18rem, 41vw, 31rem)",
    rotate: -8,
    depth: 1.08,
    badge: "+",
    badgeOffsetX: -12,
    badgeOffsetY: -16,
    wordOffset: 6,
    note: "The right-lower band keeps the pile from reading as a neat grid; it behaves like a physically re-laid sticker.",
  },
  {
    id: "turn-west",
    left: -2,
    top: 64,
    width: "clamp(17rem, 38vw, 29rem)",
    rotate: 199,
    depth: 1.12,
    badge: "×",
    badgeOffsetX: -16,
    badgeOffsetY: -14,
    wordOffset: 4,
    note: "The first inverted band recreates the tumble of flipped stickers in the original composition.",
  },
  {
    id: "turn-center",
    left: 24,
    top: 64,
    width: "clamp(18rem, 40vw, 31rem)",
    rotate: 182,
    depth: 1.16,
    badge: "+",
    badgeOffsetX: -12,
    badgeOffsetY: -18,
    wordOffset: -7,
    note: "By turning the text live instead of flattening it, the site preserves real typography while matching the poster’s upside-down layer.",
  },
  {
    id: "turn-east",
    left: 51,
    top: 65,
    width: "clamp(18rem, 42vw, 31rem)",
    rotate: 186,
    depth: 1.2,
    badge: "×",
    badgeOffsetX: -16,
    badgeOffsetY: -12,
    wordOffset: 2,
    note: "A second inverted strip widens the lower stack and keeps the pile feeling dense from edge to edge.",
  },
  {
    id: "base-west",
    left: -7,
    top: 80,
    width: "clamp(18rem, 41vw, 31rem)",
    rotate: -6,
    depth: 1.18,
    badge: "+",
    badgeOffsetX: -18,
    badgeOffsetY: -16,
    wordOffset: -4,
    note: "The base layer acts like the table the rest of the sticker field lands on, giving the page a readable bottom weight.",
  },
  {
    id: "base-center",
    left: 25,
    top: 81,
    width: "clamp(18rem, 40vw, 32rem)",
    rotate: 7,
    depth: 1.23,
    badge: "+",
    badgeOffsetX: -14,
    badgeOffsetY: -14,
    wordOffset: 8,
    note: "The center base strip keeps the lower edge legible while still cropping the live wordmark into fragments.",
  },
  {
    id: "base-east",
    left: 58,
    top: 82,
    width: "clamp(19rem, 43vw, 34rem)",
    rotate: -3,
    depth: 1.16,
    badge: "+",
    badgeOffsetX: -12,
    badgeOffsetY: -12,
    wordOffset: 0,
    note: "A long final band pushes past the right edge so the field still feels larger than the screen.",
  },
  {
    id: "vertical-core",
    left: 38,
    top: 45,
    width: "clamp(12rem, 22vw, 16rem)",
    rotate: 63,
    depth: 1.14,
    badge: "+",
    badgeOffsetX: -10,
    badgeOffsetY: -12,
    wordOffset: 10,
    note: "A steeply rotated sticker produces the isolated letter fragments and circular badge rhythm visible near the center.",
  },
  {
    id: "vertical-east",
    left: 80,
    top: 43,
    width: "clamp(11rem, 19vw, 15rem)",
    rotate: 88,
    depth: 0.88,
    badge: "+",
    badgeOffsetX: -8,
    badgeOffsetY: -10,
    wordOffset: -8,
    note: "The far-right vertical band keeps the side edge from becoming too clean, matching the reference’s cut-off chatter.",
  },
];

const layerDescriptions: Record<LayerMode, string> = {
  full: "All live layers: typography, bands, badges, grain, and motion.",
  type: "Typography-first view: sticker bodies soften so the wordmark structure stays visible.",
  badges: "Badge-first view: circular markers and symbols rise to the front as independent layers.",
};

const stats = [
  { label: "Live stickers", value: `${stickers.length}`.padStart(2, "0") },
  { label: "Badge clusters", value: `${stickers.length}`.padStart(2, "0") },
  { label: "Route", value: "/ui/case-002-palestine" },
];

function LayerToggle({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-2 text-[0.72rem] font-medium tracking-[-0.03em] transition duration-300 ${
        active
          ? "border-[#111111] bg-[#111111] text-[#fbfaf7]"
          : "border-black/12 bg-white/78 text-black/72 hover:border-black/25 hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
}

function StickerBand({
  spec,
  active,
  pointer,
  mode,
  onFocus,
}: {
  spec: StickerSpec;
  active: boolean;
  pointer: { x: number; y: number };
  mode: LayerMode;
  onFocus: () => void;
}) {
  const driftX = (pointer.x - 0.5) * spec.depth * -26;
  const driftY = (pointer.y - 0.5) * spec.depth * -18;
  const rotation = spec.rotate + (pointer.x - 0.5) * spec.depth * 3.2;
  const scale = active ? 1.045 : 1;
  const bodyOpacity = mode === "type" ? (active ? 0.82 : 0.58) : 1;
  const textOpacity = mode === "badges" ? (active ? 0.46 : 0.16) : 1;
  const badgeOpacity = mode === "type" ? (active ? 0.42 : 0.22) : 1;

  return (
    <button
      type="button"
      onMouseEnter={onFocus}
      onFocus={onFocus}
      onClick={onFocus}
      className="absolute overflow-visible text-left outline-none"
      style={{
        left: `${spec.left}%`,
        top: `${spec.top}%`,
        width: spec.width,
        zIndex: active ? 60 : 10,
        transform: `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: "center center",
        transition: "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 320ms ease, opacity 320ms ease",
        filter: active ? "drop-shadow(0 18px 28px rgba(11, 11, 11, 0.16))" : "drop-shadow(0 10px 18px rgba(11, 11, 11, 0.08))",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-[1.25rem]"
        style={{
          background: active ? "radial-gradient(circle at 50% 50%, rgba(255, 61, 165, 0.22), transparent 66%)" : "none",
          opacity: active ? 1 : 0,
          transition: "opacity 220ms ease",
        }}
      />

      <span
        className="relative block overflow-hidden border border-black/6 bg-[#ff3da5] px-3 py-2 text-[#101010]"
        style={{
          opacity: bodyOpacity,
          boxShadow: active ? "0 1px 0 rgba(255,255,255,0.28) inset" : "0 1px 0 rgba(255,255,255,0.18) inset",
        }}
      >
        <span
          className="block whitespace-nowrap font-[900] leading-[0.82] tracking-[-0.085em]"
          style={{
            fontSize: "clamp(3.85rem, 8vw, 6.8rem)",
            transform: `translateX(${spec.wordOffset}%)`,
            opacity: textOpacity,
          }}
        >
          Palestine
        </span>
      </span>

      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full border border-black/28"
        style={{
          right: spec.badgeOffsetX,
          top: spec.badgeOffsetY,
          width: "clamp(2.8rem, 4.4vw, 3.8rem)",
          height: "clamp(2.8rem, 4.4vw, 3.8rem)",
          background: "rgba(255, 61, 165, 0.95)",
          opacity: badgeOpacity,
        }}
      >
        <span
          className="absolute inset-0 rounded-full border border-black/14"
          style={{ transform: "translate(-14%, 18%)", opacity: 0.55 }}
        />
        <span
          className="absolute inset-0 rounded-full border border-black/10"
          style={{ transform: "translate(16%, -10%)", opacity: 0.4 }}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] text-[1.35rem] font-medium text-black/88">
          {spec.badge}
        </span>
      </span>
    </button>
  );
}

export function Case002Palestine() {
  const [pointer, setPointer] = useState({ x: 0.48, y: 0.5 });
  const [layerMode, setLayerMode] = useState<LayerMode>("full");
  const [activeStickerId, setActiveStickerId] = useState("center-core");

  const activeSticker = useMemo(
    () => stickers.find((item) => item.id === activeStickerId) ?? stickers[0],
    [activeStickerId],
  );

  return (
    <main
      className={`${grotesk.variable} overflow-x-hidden bg-[#fbfaf7] text-[#111111]`}
      style={{ fontFamily: "var(--font-case-002-grotesk)" }}
    >
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(255,255,255,0.94),transparent_18%),radial-gradient(circle_at_50%_54%,rgba(255,61,165,0.14),transparent_28%),linear-gradient(180deg,#fbfaf7_0%,#fffdf8_46%,#f8f6f0_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(18,18,18,0.5)_1px,transparent_0)] [background-size:12px_12px]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition duration-300"
          style={{
            background: `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(255, 61, 165, 0.18), transparent 18%)`,
          }}
        />

        <div className="relative z-30 flex items-start justify-between gap-6 px-4 pb-2 pt-4 sm:px-6 lg:px-10 lg:pt-8">
          <div className="max-w-[14rem] text-[0.65rem] font-medium uppercase tracking-[0.24em] text-black/35">
            Case 002 · live reconstruction
          </div>
          <p className="max-w-[42rem] text-right text-[0.75rem] leading-[1.35] tracking-[-0.025em] text-black/72 sm:text-[0.82rem]">
            <strong className="font-semibold text-black/92">Free Palestine</strong> — a call for justice, dignity, and the rightful freedom of a people long oppressed.
          </p>
        </div>

        <div className="relative z-20 min-h-[92svh] px-4 pb-8 sm:px-6 lg:px-10 lg:pb-12">
          <div className="pointer-events-none absolute left-4 top-8 z-40 sm:left-6 sm:top-12 lg:left-10 lg:top-10">
            <h1 className="text-[clamp(4rem,12vw,8.5rem)] font-[900] leading-[0.84] tracking-[-0.12em] text-[#0f0f0f]">
              I’m
              <br />
              With
            </h1>
          </div>

          <div
            className="absolute inset-x-0 top-[16svh] bottom-[9.5rem] overflow-hidden sm:top-[15svh] sm:bottom-[8.5rem] lg:top-[12.5svh] lg:bottom-[7.5rem]"
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width;
              const y = (event.clientY - rect.top) / rect.height;
              setPointer({ x, y });
            }}
            onPointerLeave={() => {
              setPointer({ x: 0.48, y: 0.5 });
              setActiveStickerId("center-core");
            }}
          >
            <div className="absolute inset-0">
              {stickers.map((spec) => (
                <StickerBand
                  key={spec.id}
                  spec={spec}
                  active={activeStickerId === spec.id}
                  pointer={pointer}
                  mode={layerMode}
                  onFocus={() => setActiveStickerId(spec.id)}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4 z-40 flex flex-col gap-3 sm:inset-x-6 sm:bottom-6 lg:inset-x-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[52rem] rounded-[1.45rem] border border-black/10 bg-white/70 p-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-4">
              <div className="flex flex-wrap items-center gap-2">
                <LayerToggle active={layerMode === "full"} label="Full composition" onClick={() => setLayerMode("full")} />
                <LayerToggle active={layerMode === "type"} label="Type only" onClick={() => setLayerMode("type")} />
                <LayerToggle active={layerMode === "badges"} label="Badges only" onClick={() => setLayerMode("badges")} />
                <a
                  href="#statement"
                  className="rounded-full border border-black/12 px-3.5 py-2 text-[0.72rem] font-medium tracking-[-0.03em] text-black/72 transition hover:border-black/25 hover:bg-white"
                >
                  Read the call
                </a>
              </div>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-black/38">Layer inspector</p>
                  <p className="mt-1 text-[0.92rem] leading-6 tracking-[-0.02em] text-black/72">{layerDescriptions[layerMode]}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-full border border-black/10 bg-[#fffdf8] px-3 py-1.5 text-[0.72rem] tracking-[-0.02em] text-black/72">
                      <span className="mr-2 uppercase tracking-[0.18em] text-black/36">{stat.label}</span>
                      <span className="font-semibold text-black/88">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="max-w-[26rem] rounded-[1.45rem] border border-black/10 bg-[#111111] px-4 py-3 text-[#fbfaf7] shadow-[0_18px_40px_rgba(0,0,0,0.16)] sm:px-4.5">
              <div className="flex flex-wrap items-center gap-2 text-[0.64rem] uppercase tracking-[0.2em] text-white/46">
                <span>Selected layer</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.6rem] text-white/58">live band</span>
              </div>
              <div className="mt-2 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-[1.1rem] font-[800] tracking-[-0.06em]">{activeSticker.id.replace(/-/g, " ")}</h2>
                  <p className="mt-1 text-[0.88rem] leading-5 tracking-[-0.02em] text-white/72">{activeSticker.note}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="statement" className="border-t border-black/10 bg-[#f8f5ef]">
        <div className="mx-auto grid max-w-[1450px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.12fr_0.88fr_0.88fr_0.82fr] lg:px-10 lg:py-12">
          <article>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-black/35">Statement</p>
            <h2 className="mt-3 max-w-[18ch] text-[clamp(1.9rem,4vw,3.2rem)] font-[900] leading-[0.92] tracking-[-0.08em] text-black">
              Turn the static protest poster into a living field of language.
            </h2>
            <p className="mt-4 max-w-[44rem] text-[1rem] leading-7 tracking-[-0.025em] text-black/72">
              The reference is rebuilt here as layered web matter: a real heading, a real subtitle, twenty independent sticker bands, twenty badge clusters, and a responsive motion field that lets the pile breathe when the pointer moves through it. The political statement remains plain on purpose — freedom, justice, dignity, and the refusal to let the message be flattened into decoration.
            </p>
          </article>

          <article className="rounded-[1.45rem] border border-black/10 bg-[#111111] p-4 text-[#fbfaf7]">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/42">Active sticker note</p>
            <h3 className="mt-3 text-[1.25rem] font-[800] tracking-[-0.06em]">{activeSticker.id.replace(/-/g, " ")}</h3>
            <p className="mt-3 text-[0.95rem] leading-6 tracking-[-0.02em] text-white/74">{activeSticker.note}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/50">
              <span className="rounded-full border border-white/10 px-3 py-1.5">html text</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">independent badge</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">pointer drift</span>
            </div>
          </article>

          <article id="layers">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-black/35">Reconstructed as live UI</p>
            <ul className="mt-4 space-y-3 text-[0.98rem] leading-6 tracking-[-0.02em] text-black/72">
              <li>• Top-left headline rebuilt as editable HTML text instead of a rasterized block.</li>
              <li>• Every pink strip is its own absolutely positioned band with live, clipped typography.</li>
              <li>• Badge circles, extra outlines, and symbols are separate overlay layers that can be isolated.</li>
              <li>• Pointer motion shifts the pile at different depths so the collage reads like assembled matter.</li>
            </ul>
          </article>

          <article>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-black/35">Interaction notes</p>
            <div className="mt-4 rounded-[1.4rem] border border-black/10 bg-white/72 p-4 text-[0.95rem] leading-6 tracking-[-0.02em] text-black/72">
              Hover or tap bands to inspect them. Switch between full composition, type-only, and badge-only views. The route stays direct and clean: <span className="font-semibold text-black/88">/ui/case-002-palestine</span> opens straight into the final experience.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
