"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { Archivo, Public_Sans } from "next/font/google";

const displayFace = Archivo({
  subsets: ["latin"],
  variable: "--font-case-010-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyFace = Public_Sans({
  subsets: ["latin"],
  variable: "--font-case-010-body",
  weight: ["400", "500", "600", "700"],
});

type PointerState = {
  x: number;
  y: number;
};

type ServiceItem = {
  id: string;
  label: string;
  eyebrow: string;
  detail: string;
  note: string;
};

type HeadlinePiece = {
  label: string;
  className: string;
  textClassName: string;
  depth: number;
  align?: CSSProperties["textAlign"];
};

const services: ServiceItem[] = [
  {
    id: "web-design",
    label: "Web design",
    eyebrow: "Landing pages",
    detail: "Clear product pages and launch-ready marketing surfaces with a visual system that already feels shipped.",
    note: "Structure, art direction, UI polish",
  },
  {
    id: "mail-hosting",
    label: "Mail & hosting",
    eyebrow: "Infrastructure",
    detail: "Personalized mailboxes, stable hosting, domains, and delivery plumbing handled without adding noise to the brand layer.",
    note: "Email, DNS, hosting, deliverability",
  },
  {
    id: "cdn-ops",
    label: "CDN & speed",
    eyebrow: "Performance",
    detail: "Caching, edge delivery, and lightweight optimization choices that keep the hero fast instead of merely dramatic.",
    note: "Caching, image handling, page weight",
  },
  {
    id: "it-support",
    label: "IT support",
    eyebrow: "Aftercare",
    detail: "Small-business support for the messy bits after launch: access, handoff, upkeep, and calm troubleshooting.",
    note: "Access, upkeep, operational help",
  },
];

const headlinePieces: HeadlinePiece[] = [
  {
    label: "Crafting",
    className: "left-[31%] top-[10.1%]",
    textClassName: "text-[clamp(4.9rem,6.2vw,6rem)]",
    depth: 0.8,
  },
  {
    label: "innovative",
    className: "left-[40.2%] top-[21.1%]",
    textClassName: "text-[clamp(4.5rem,5.8vw,5.5rem)]",
    depth: 1.05,
  },
  {
    label: "applications",
    className: "left-[11.8%] top-[33.1%]",
    textClassName: "text-[clamp(4.9rem,6.2vw,6rem)]",
    depth: 1.15,
  },
  {
    label: "that",
    className: "left-[27.9%] top-[45.4%]",
    textClassName: "text-[clamp(4.3rem,5.2vw,5rem)]",
    depth: 0.95,
  },
  {
    label: "captivate",
    className: "left-[61.3%] top-[56.3%]",
    textClassName: "text-[clamp(4.8rem,6.1vw,5.8rem)]",
    depth: 1.15,
  },
  {
    label: "your",
    className: "left-[55.8%] top-[67.7%]",
    textClassName: "text-[clamp(4.3rem,5.2vw,5.1rem)]",
    depth: 1.05,
  },
  {
    label: "audience",
    className: "left-[50.4%] top-[79.2%]",
    textClassName: "text-[clamp(4.7rem,6vw,5.7rem)]",
    depth: 0.9,
  },
];

const backgroundBlocks = [
  {
    className: "left-[3.2%] top-[47.4%] h-[23.8%] w-[31%] md:left-[4%] md:top-[46.8%] md:h-[24.5%] md:w-[30.8%]",
    color: "rgba(255,255,255,0.07)",
  },
  {
    className: "left-[56.8%] top-[43.6%] h-[26.5%] w-[17.6%] md:left-[58%] md:top-[43.6%] md:h-[27.6%] md:w-[15.2%]",
    color: "rgba(255,255,255,0.07)",
  },
  {
    className: "left-[67.5%] top-[44.1%] h-[26.2%] w-[17.2%] md:left-[70.2%] md:top-[44.2%] md:h-[27.4%] md:w-[12.2%]",
    color: "rgba(255,255,255,0.1)",
  },
  {
    className: "left-[78.8%] top-[44.3%] h-[25.8%] w-[17.2%] md:left-[81.6%] md:top-[44.1%] md:h-[27.5%] md:w-[10.4%]",
    color: "rgba(255,255,255,0.08)",
  },
];

function ServiceRail({
  activeId,
  onChange,
}: {
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {services.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onMouseEnter={() => onChange(item.id)}
            onFocus={() => onChange(item.id)}
            onClick={() => onChange(item.id)}
            className="rounded-full border px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/75"
            style={{
              borderColor: active ? "rgba(12, 12, 12, 0.6)" : "rgba(12, 12, 12, 0.18)",
              background: active ? "rgba(12, 12, 12, 0.08)" : "rgba(255, 255, 255, 0.2)",
              color: "rgba(12, 12, 12, 0.86)",
            }}
            aria-pressed={active}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function Case010DevAgencyHero() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0.5, y: 0.5 });
  const [activeService, setActiveService] = useState<string>(services[0].id);

  const activeItem = useMemo(
    () => services.find((item) => item.id === activeService) ?? services[0],
    [activeService],
  );

  return (
    <main
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen bg-[#151515] px-3 py-3 text-[#111111] sm:px-5 sm:py-5 lg:px-10 lg:py-9`}
      style={{ fontFamily: "var(--font-case-010-body)" }}
    >
      <section
        className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1220px] flex-col overflow-hidden border border-black/25 bg-[#d8d6d2] shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[min(860px,calc(100vh-4.5rem))]"
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const nextX = (event.clientX - bounds.left) / bounds.width;
          const nextY = (event.clientY - bounds.top) / bounds.height;
          setPointer({ x: nextX, y: nextY });
        }}
        onPointerLeave={() => setPointer({ x: 0.5, y: 0.5 })}
      >
        <div className="relative flex min-h-full flex-1 flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-9 lg:py-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_55%_35%,rgba(255,255,255,0.38),transparent_55%)] opacity-70"
          />

          {backgroundBlocks.map((block, index) => (
            <div
              key={block.className}
              aria-hidden
              className={`absolute rounded-[1.6rem] ${block.className}`}
              style={{
                background: block.color,
                transform: `translate3d(${(pointer.x - 0.5) * (index + 1) * -12}px, ${(pointer.y - 0.5) * (index + 1) * -10}px, 0)`,
                transition: "transform 220ms ease-out",
              }}
            />
          ))}

          <header className="relative z-20 flex items-start justify-between gap-6 text-[0.62rem] font-medium tracking-[-0.03em] text-black/72 sm:text-[0.68rem]">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="text-[0.85rem] leading-none">✺</span>
              <span>Describe</span>
            </div>

            <p className="max-w-[7.5rem] text-right leading-[1.45] text-black/46 sm:max-w-[8.5rem]">
              We want to make sure you always have someone you can trust to help.
            </p>
          </header>

          <div className="relative flex flex-1 flex-col justify-between gap-10 pb-2 pt-7 sm:pt-10 lg:pt-0">
            <div className="relative min-h-[22rem] flex-1 lg:min-h-0">
              <div className="lg:hidden">
                <h1
                  className="max-w-[9ch] text-[clamp(3.6rem,13vw,6.2rem)] font-extrabold leading-[0.84] tracking-[-0.085em] text-black"
                  style={{ fontFamily: "var(--font-case-010-display)" }}
                >
                  Crafting innovative applications that captivate your audience
                </h1>
              </div>

              <div className="absolute inset-0 hidden lg:block">
                {headlinePieces.map((piece) => {
                  const shiftX = (pointer.x - 0.5) * piece.depth * -22;
                  const shiftY = (pointer.y - 0.5) * piece.depth * -14;
                  return (
                    <span
                      key={piece.label}
                      className={`absolute ${piece.className} ${piece.textClassName} font-bold leading-[0.88] tracking-[-0.07em] text-black`}
                      style={{
                        fontFamily: "var(--font-case-010-display)",
                        textAlign: piece.align,
                        transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
                        transition: "transform 220ms ease-out",
                      }}
                    >
                      {piece.label}
                    </span>
                  );
                })}
              </div>

              <div
                className="relative z-20 mt-8 grid max-w-[19rem] gap-3 lg:absolute lg:left-[40.1%] lg:top-[36.6%] lg:mt-0 lg:max-w-none lg:grid-cols-[13.6rem_10.2rem] lg:items-center"
                style={{
                  transform: `translate3d(${(pointer.x - 0.5) * -16}px, ${(pointer.y - 0.5) * -14}px, 0)`,
                  transition: "transform 240ms ease-out",
                }}
              >
                <article
                  id="details"
                  className="relative overflow-hidden bg-[#ff513f] px-4 py-4 text-black shadow-[0_24px_44px_rgba(255,81,63,0.23)] sm:px-5 sm:py-5"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-black/15" />
                  <div className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-[-0.04em]">
                    <span aria-hidden className="text-[0.8rem] leading-none">◒◒◒</span>
                    <span>dc-dev</span>
                  </div>

                  <p className="mt-5 max-w-[12rem] text-[1rem] font-semibold leading-[1.08] tracking-[-0.055em] text-black/90">
                    We have all the services you need to look after your online presence.
                  </p>
                  <p className="mt-4 max-w-[11.5rem] text-[0.72rem] leading-[1.45] tracking-[-0.04em] text-black/76">
                    From web design, personalized email addresses, hosting, CDNs to business IT support.
                  </p>

                  <ServiceRail activeId={activeService} onChange={setActiveService} />

                  <div className="mt-5 border-t border-black/14 pt-3.5">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-black/58">
                      {activeItem.eyebrow}
                    </p>
                    <p className="mt-2 text-[0.72rem] leading-[1.45] tracking-[-0.03em] text-black/74">
                      {activeItem.detail}
                    </p>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-3">
                    <Link
                      href="#service-notes"
                      className="inline-flex items-center gap-1.5 text-[0.94rem] font-semibold tracking-[-0.05em] text-black transition duration-200 hover:translate-x-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/75"
                    >
                      <span className="border-b border-black/75 pb-0.5">Details</span>
                      <span aria-hidden>↗</span>
                    </Link>
                    <span className="text-right text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-black/50">
                      live service card
                    </span>
                  </div>
                </article>

                <a
                  href="mailto:hello@dc-dev.example"
                  className="group inline-flex items-center justify-between gap-3 rounded-full border border-black/8 bg-white/82 px-3 py-2 text-[0.82rem] font-medium tracking-[-0.04em] text-black shadow-[0_12px_24px_rgba(17,17,17,0.08)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#151515] text-white transition duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                  <span className="pr-2">Build with us</span>
                </a>
              </div>
            </div>

            <footer className="relative z-20 mt-6 grid gap-6 pt-3 text-black/76 lg:mt-0 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-0">
              <div className="grid gap-5 sm:grid-cols-[8rem_5rem_11rem] sm:gap-7">
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-black/48">Est.</p>
                  <p
                    className="mt-1 text-[1.8rem] font-semibold leading-none tracking-[-0.08em]"
                    style={{ fontFamily: "var(--font-case-010-display)" }}
                  >
                    2017 //
                  </p>
                </div>
                <div className="self-end text-[0.7rem] font-medium tracking-[-0.04em] text-black/72">dc-dev′</div>
                <div className="text-[1.05rem] font-semibold leading-[1.05] tracking-[-0.055em] text-black/88">
                  Web &amp; App<br />
                  Development
                </div>
              </div>

              <div id="service-notes" className="max-w-[18rem] justify-self-start lg:justify-self-end">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-black/48">Selected service</p>
                <p className="mt-1 text-[0.98rem] font-semibold tracking-[-0.05em] text-black/86">{activeItem.label}</p>
                <p className="mt-1 text-[0.68rem] leading-[1.45] tracking-[-0.035em] text-black/58">{activeItem.note}</p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
