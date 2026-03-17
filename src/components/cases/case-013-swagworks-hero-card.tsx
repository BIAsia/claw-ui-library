"use client";

import Link from "next/link";
import { Archivo, Manrope } from "next/font/google";
import { useState, type PointerEvent as ReactPointerEvent } from "react";

const displayFace = Archivo({
  subsets: ["latin"],
  variable: "--font-case-013-display",
  weight: ["700", "800", "900"],
});

const bodyFace = Manrope({
  subsets: ["latin"],
  variable: "--font-case-013-body",
  weight: ["400", "500", "600", "700", "800"],
});

type PointerState = {
  x: number;
  y: number;
};

type SetupStep = {
  number: string;
  title: string;
  detail: string;
  kicker: string;
};

type Assurance = {
  label: string;
  value: string;
};

const setupSteps: SetupStep[] = [
  {
    number: "01",
    title: "Create the spend account",
    detail: "Start with the company spend account so card issuing, controls, and balance all live in one place.",
    kicker: "Foundation",
  },
  {
    number: "02",
    title: "Confirm the card setup",
    detail: "Choose who needs access and how the card should behave before any physical mail step enters the picture.",
    kicker: "Controls",
  },
  {
    number: "03",
    title: "Start spending instantly",
    detail: "A digital Visa debit card appears right away, ready for wallets, subscriptions, and team purchases.",
    kicker: "Instant issue",
  },
];

const assurances: Assurance[] = [
  { label: "Issue time", value: "Instant digital card" },
  { label: "Network", value: "Visa Debit" },
  { label: "Controls", value: "Freeze, replace, limit" },
];

function SwagClimberMark() {
  return (
    <svg viewBox="0 0 120 110" aria-hidden className="h-24 w-24 text-[#4a2262]">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
        <path d="M20 89h26" />
        <path d="M46 89v-17h14V57h13V40h12" />
        <path d="M66 16l18 16-16 5-17-16z" />
        <path d="M72 21l6 15" />
        <path d="M81 18l5 11" />
        <path d="M59 30l7 10-5 14" />
        <path d="M62 54l-10 12" />
        <path d="M51 66l-10-2-7 10" />
        <path d="M57 53l14 8" />
        <path d="M71 61l12 9" />
        <path d="M81 45l18 12-4 23" />
        <path d="M64 71v18" />
        <path d="M52 71v18" />
        <path d="M36 76l-6 11" />
      </g>
    </svg>
  );
}

export function Case013SwagworksHeroCard() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0 });

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({ x: Number(x.toFixed(3)), y: Number(y.toFixed(3)) });
  }

  function resetPointer() {
    setPointer({ x: 0, y: 0 });
  }

  return (
    <main
      className={`${displayFace.variable} ${bodyFace.variable} min-h-screen overflow-x-hidden text-[#2a1438]`}
      style={{
        backgroundColor: "#f5eff7",
        fontFamily: "var(--font-case-013-body)",
      }}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes case013Float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        .case013-float {
          animation: case013Float 13s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .case013-float {
            animation: none !important;
          }

          * {
            transition-duration: 0ms !important;
            animation-duration: 0ms !important;
          }
        }
      `}</style>

      <div className="relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.72) 18%, rgba(255,255,255,0) 42%), linear-gradient(180deg, #f7f2f8 0%, #f5eff7 48%, #f1e8f4 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(93, 62, 117, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(93, 62, 117, 0.06) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <header className="relative z-30 px-4 pt-4 sm:px-6 lg:px-10 lg:pt-6">
          <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-4 rounded-full border border-[#5f3774]/10 bg-white/65 px-4 py-3 shadow-[0_10px_40px_rgba(88,47,110,0.08)] backdrop-blur-md sm:px-6">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#5d4470]/48">claw ui library / case 013</p>
              <p className="mt-1 text-sm text-[#3a214d]/78">Swagworks hero card</p>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-[#4a2a5f]/58 md:flex">
              <a href="#hero" className="transition hover:text-[#2a1438]">
                Hero
              </a>
              <a href="#steps" className="transition hover:text-[#2a1438]">
                Steps
              </a>
              <a href="#details" className="transition hover:text-[#2a1438]">
                Details
              </a>
            </nav>

            <Link
              href="/"
              className="rounded-full border border-[#5f3774]/12 px-4 py-2 text-sm text-[#45275a]/78 transition hover:border-[#5f3774]/22 hover:bg-[#341347] hover:text-white"
            >
              Back to archive
            </Link>
          </div>
        </header>

        <section
          id="hero"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="relative z-10 px-4 pb-10 pt-6 sm:px-6 md:pb-14 lg:px-10 lg:pt-8"
        >
          <div className="mx-auto flex max-w-[96rem] flex-col gap-8">
            <div className="grid gap-3 text-[0.68rem] uppercase tracking-[0.26em] text-[#56356a]/56 md:grid-cols-3">
              <p>Digital spend onboarding</p>
              <p className="text-left md:text-center">Centered card reconstruction</p>
              <p className="text-left md:text-right">Website-ready, not poster-only</p>
            </div>

            <div className="relative flex min-h-[78svh] items-center justify-center overflow-hidden rounded-[2.25rem] border border-[#6a4180]/10 bg-white/28 px-4 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:px-6 lg:min-h-[82svh] lg:px-10">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[14%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full blur-3xl transition duration-300"
                style={{
                  background: "radial-gradient(circle, rgba(194, 142, 226, 0.28) 0%, rgba(194, 142, 226, 0.14) 32%, rgba(194,142,226,0) 74%)",
                  transform: `translate3d(calc(-50% + ${pointer.x * 18}px), ${pointer.y * 12}px, 0)`,
                }}
              />

              <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden">
                <div className="relative flex items-center justify-between px-[2%] sm:px-[3%]">
                  <span
                    className="block text-[clamp(5rem,18vw,12rem)] leading-none tracking-[-0.09em] text-[#42135f]"
                    style={{
                      fontFamily: "var(--font-case-013-display)",
                      fontWeight: 900,
                      transform: `translate3d(${pointer.x * -22}px, ${pointer.y * -6}px, 0)`,
                    }}
                  >
                    How
                  </span>
                  <span
                    className="block text-[clamp(5rem,18vw,12rem)] leading-none tracking-[-0.09em] text-[#42135f]"
                    style={{
                      fontFamily: "var(--font-case-013-display)",
                      fontWeight: 900,
                      transform: `translate3d(${pointer.x * -34}px, ${pointer.y * -6}px, 0)`,
                    }}
                  >
                    Works
                  </span>
                </div>
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(1.75rem,4.8vw,3.5rem)] uppercase tracking-[-0.08em] text-[#42135f]/14"
                  style={{
                    fontFamily: "var(--font-case-013-display)",
                    fontWeight: 800,
                    transform: `translate3d(calc(-50% + ${pointer.x * -10}px), calc(-50% + ${pointer.y * -4}px), 0)`,
                  }}
                >
                  it
                </span>
              </div>

              <div className="relative z-10 flex w-full flex-col items-center justify-center gap-7 lg:gap-9">
                <div className="flex flex-wrap items-center justify-center gap-3 text-[0.68rem] uppercase tracking-[0.26em] text-[#543069]/58">
                  <span className="rounded-full border border-[#6a4180]/12 bg-white/54 px-3 py-2">Swag Spend Account</span>
                  <span className="rounded-full border border-[#6a4180]/12 bg-white/54 px-3 py-2">Digital Visa Debit</span>
                </div>

                <div className="relative flex items-center justify-center [perspective:1600px]">
                  <div
                    aria-hidden
                    className="case013-float absolute h-14 w-[16rem] rounded-full bg-[#55246d]/14 blur-2xl transition duration-300 sm:w-[22rem]"
                    style={{ transform: `translate3d(${pointer.x * 16}px, 10.5rem, 0)` }}
                  />

                  <div
                    aria-hidden
                    className="absolute h-[25.6rem] w-[18.9rem] rounded-[2rem] border border-white/60 bg-[rgba(255,255,255,0.72)] shadow-[0_24px_48px_rgba(141,112,166,0.16)] transition duration-300 sm:h-[29.2rem] sm:w-[21.4rem]"
                    style={{
                      transform: `translate3d(${-24 + pointer.x * 10}px, ${16 + pointer.y * 4}px, -90px) rotate(-11deg)`,
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute h-[25.8rem] w-[19rem] rounded-[2rem] border border-white/75 bg-[rgba(255,255,255,0.86)] shadow-[0_24px_48px_rgba(141,112,166,0.14)] transition duration-300 sm:h-[29.4rem] sm:w-[21.6rem]"
                    style={{
                      transform: `translate3d(${18 + pointer.x * 12}px, ${8 + pointer.y * 5}px, -50px) rotate(8deg)`,
                    }}
                  />

                  <article
                    className="relative h-[27.4rem] w-[19.4rem] rounded-[2rem] border border-[#af82c4]/40 bg-[#c79de4] px-6 py-6 text-[#3b124e] shadow-[0_30px_70px_rgba(95,44,126,0.22),inset_0_1px_0_rgba(255,255,255,0.35)] transition duration-300 ease-out sm:h-[31.2rem] sm:w-[22.2rem] sm:px-7 sm:py-7"
                    style={{
                      transform: `translate3d(${pointer.x * 10}px, ${pointer.y * 8}px, 0) rotate(${pointer.x * 4 - 3.5}deg) rotateX(${pointer.y * -4}deg) rotateY(${pointer.x * 7}deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-[2rem] opacity-75"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.02) 42%, rgba(95,44,126,0.08) 100%)",
                      }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-6 sm:mb-8">
                        <SwagClimberMark />
                      </div>

                      <div className="mt-auto">
                        <p
                          className="max-w-[10.8ch] text-[clamp(1.95rem,4.35vw,3.18rem)] leading-[0.92] tracking-[-0.08em] text-[#38104c]"
                          style={{ fontFamily: "var(--font-case-013-display)", fontWeight: 800 }}
                        >
                          Set up your Swag Spend Account and instantly set up your digital Visa Debit card.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="max-w-[54rem] text-center">
                  <p className="mx-auto max-w-[42rem] text-[0.98rem] leading-7 text-[#4f2e65]/68 sm:text-[1.03rem]">
                    The original composition is rebuilt as a real onboarding landing page: oversized background type becomes an actual heading layer, the purple card becomes usable product messaging, and the rest of the screen supports the setup flow instead of framing it like a poster.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="#steps"
                      className="rounded-full bg-[#42135f] px-5 py-3 text-sm text-white transition hover:bg-[#341047]"
                    >
                      See setup flow
                    </a>
                    <a
                      href="#details"
                      className="rounded-full border border-[#5f3774]/16 bg-white/58 px-5 py-3 text-sm text-[#45265a] transition hover:border-[#5f3774]/26 hover:bg-white/80"
                    >
                      Why this works
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="grid gap-4 sm:grid-cols-3">
                {assurances.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.6rem] border border-[#5f3774]/10 bg-white/56 p-5 shadow-[0_14px_34px_rgba(95,55,116,0.05)]"
                  >
                    <p className="text-[0.64rem] uppercase tracking-[0.3em] text-[#5b3c70]/42">{item.label}</p>
                    <p className="mt-4 text-[1.1rem] leading-[1.2] tracking-[-0.05em] text-[#321046]">{item.value}</p>
                  </article>
                ))}
              </div>

              <div className="rounded-[1.7rem] border border-[#5f3774]/10 bg-[rgba(202,157,228,0.18)] p-5 text-[#45265a] shadow-[0_14px_34px_rgba(95,55,116,0.05)]">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-[#5b3c70]/44">Hero behavior</p>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#45265a]/72">
                  Pointer depth is intentionally restrained: the headline drifts a touch, the back-card stack separates, and the front card tilts without ever shifting layout or hurting readability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="relative z-10 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto grid max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="rounded-[2rem] border border-[#5f3774]/10 bg-white/56 p-6 shadow-[0_16px_36px_rgba(95,55,116,0.06)] sm:p-7">
              <p className="text-[0.64rem] uppercase tracking-[0.32em] text-[#5b3c70]/44">Setup flow</p>
              <h2
                className="mt-4 max-w-[8ch] text-[clamp(2.5rem,4.2vw,4.6rem)] leading-[0.88] tracking-[-0.08em] text-[#321046]"
                style={{ fontFamily: "var(--font-case-013-display)", fontWeight: 800 }}
              >
                The same idea, turned into actual interface steps.
              </h2>
              <p className="mt-5 max-w-[34rem] text-[1rem] leading-7 text-[#4f2e65]/68">
                Instead of leaving the reference as a single hero image, the page continues into a simple product explanation layer. It stays sparse, but it now answers what happens next.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {setupSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.8rem] border border-[#5f3774]/10 bg-white/58 p-5 shadow-[0_16px_36px_rgba(95,55,116,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(95,55,116,0.08)]"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#5b3c70]/42">{step.kicker}</p>
                  <p
                    className="mt-4 text-[2rem] leading-none tracking-[-0.09em] text-[#42135f]"
                    style={{ fontFamily: "var(--font-case-013-display)", fontWeight: 800 }}
                  >
                    {step.number}
                  </p>
                  <h3 className="mt-4 text-[1.15rem] leading-[1.1] tracking-[-0.05em] text-[#321046]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4f2e65]/68">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="relative z-10 px-4 pb-18 pt-4 sm:px-6 lg:px-10 lg:pb-24 lg:pt-6">
          <div className="mx-auto grid max-w-[96rem] gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
            <div className="rounded-[2.2rem] border border-[#5f3774]/10 bg-[#42135f] p-6 text-[#f7effc] shadow-[0_24px_54px_rgba(67,19,95,0.18)] sm:p-8">
              <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/54">Why it reads like a website now</p>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {[
                  ["Oversized type", "A real heading layer sitting behind the card instead of flattened artwork."],
                  ["Floating card", "A product message module with depth, stack, and motion — still centered like the source."],
                  ["Support content", "A small but functional explanation layer so the hero leads somewhere meaningful."],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <h3 className="text-[1.08rem] leading-[1.08] tracking-[-0.05em] text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="grid gap-4">
              <div className="rounded-[1.8rem] border border-[#5f3774]/10 bg-white/58 p-5 shadow-[0_16px_36px_rgba(95,55,116,0.05)]">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-[#5b3c70]/42">Source fidelity</p>
                <p className="mt-4 text-sm leading-7 text-[#4f2e65]/68">
                  The palette, giant type, centered purple card, stacked white backers, and airy composition stay intentionally close to the reference. Added content is limited to the minimal navigation and product explanation needed to make it behave like a real landing page.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-[#5f3774]/10 bg-white/58 p-5 shadow-[0_16px_36px_rgba(95,55,116,0.05)]">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-[#5b3c70]/42">Interaction model</p>
                <p className="mt-4 text-sm leading-7 text-[#4f2e65]/68">
                  Motion uses transforms only. No hover state changes size, no selected state jumps the layout, and reduced-motion users get the same hierarchy without the depth effect.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
