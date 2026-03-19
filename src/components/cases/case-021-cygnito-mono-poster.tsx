"use client";

import { useEffect, useState } from "react";

const scrambleCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789↠/+.-";

function useScrambleText(text: string, delay = 0, stepMs = 34) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let iteration = 0;
    const target = text;

    const tick = () => {
      iteration += 0.42;
      const next = target
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\n") return char;
          if (index < iteration) return target[index];
          return scrambleCharset[Math.floor(Math.random() * scrambleCharset.length)];
        })
        .join("");

      setDisplay(next);
      if (iteration < target.length) {
        timeout = setTimeout(() => {
          frame = requestAnimationFrame(tick);
        }, stepMs);
      } else {
        setDisplay(target);
      }
    };

    setDisplay(target);
    timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      cancelAnimationFrame(frame);
      if (timeout) clearTimeout(timeout);
    };
  }, [text, delay, stepMs]);

  return display;
}

function ScrambleText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const display = useScrambleText(text, delay);
  return <span className={className}>{display}</span>;
}

export function Case021CygnitoMonoPoster() {
  return (
    <main className="min-h-screen bg-[#a6a6a6] px-4 py-10 text-[#111] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1280px] items-center justify-center">
        <article className="w-full max-w-[1040px] space-y-10 font-mono uppercase tracking-[0.14em]">
          <div className="overflow-hidden border border-[#686868] bg-[#fe4b1f]">
            <div className="border-b border-[#686868] px-5 py-5 sm:px-8 sm:py-7">
              <h1 className="text-[clamp(4rem,11vw,7.6rem)] leading-[0.85] tracking-[0.08em] text-[#111]">
                <ScrambleText text="Cygnito" delay={120} />
              </h1>
            </div>
            <div className="px-5 py-5 sm:px-8 sm:py-7">
              <h2 className="text-[clamp(4rem,11vw,7.6rem)] leading-[0.85] tracking-[0.08em] text-[#111]">
                <ScrambleText text="Mono" delay={420} />
                <span className="align-top text-[0.36em]">TM</span>
              </h2>
            </div>
          </div>

          <div className="border border-[#686868] bg-[#a6a6a6]">
            <div className="border-b border-[#686868] bg-[#fe4b1f] px-5 py-4 text-[clamp(1.05rem,2.1vw,1.9rem)] leading-none sm:px-8">
              <ScrambleText text="TypeFace ↠ Modular TTF / OTF ↠ Regular V1.0 / 2019" delay={720} />
            </div>

            <div className="grid md:grid-cols-[0.95fr_1.75fr_1fr]">
              <div className="border-b border-r border-[#686868] px-5 py-6 md:border-b-0 sm:px-8">
                <p className="text-[clamp(1.8rem,3.3vw,2.9rem)] leading-[1.25] tracking-[0.12em]">
                  <ScrambleText text="Cygnito" delay={860} />
                  <br />
                  <br />
                  <ScrambleText text="Monospaced" delay={1060} />
                </p>
              </div>

              <div className="border-b border-r border-[#686868] px-5 py-6 md:border-b-0 sm:px-8">
                <p className="text-[clamp(1rem,1.7vw,1.42rem)] leading-[1.5] tracking-[0.16em]">
                  <ScrambleText text="Published by ATK Studio" delay={980} />
                  <br />
                  <ScrambleText text="Designer ↠ Radinal R M" delay={1180} />
                </p>
                <p className="mt-10 max-w-[44ch] text-[0.84rem] leading-[1.55] tracking-[0.08em] normal-case sm:text-[0.98rem]">
                  Inspired by modernism and industrial graphic design, this is a solid industrial monospaced font with octagon angles (+45°) and octagon structure. Determine the grid and create a complete set of cohesive characters (A-Z) and multilanguage characters (latin based) in either lowercase or uppercase, with consideration for scale, proportion, and balance between the letterform.
                </p>
                <p className="mt-8 text-[0.84rem] leading-[1.55] tracking-[0.08em] normal-case sm:text-[0.98rem]">
                  <ScrambleText text="Contains 506 glyphs | Support for ±138 Languages (latin-Extended)" delay={1320} />
                </p>
              </div>

              <div className="relative min-h-[18rem]">
                <div className="absolute inset-0 border-[#686868] md:border-l">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.6%,#686868_50%,transparent_50.4%)]" />
                </div>
              </div>
            </div>

            <div className="grid border-t border-[#686868] md:grid-cols-[2.2fr_1fr]">
              <div className="border-b border-r border-[#686868] px-5 py-5 text-[clamp(1.5rem,3vw,2.6rem)] leading-none md:border-b-0 sm:px-8">
                <ScrambleText text="More Info ↠ HALLO.ATKSTUDIO@GMAIL.COM" delay={1500} />
              </div>
              <div className="px-5 py-5 text-right text-[clamp(1.5rem,3vw,2.6rem)] leading-none sm:px-8">
                <ScrambleText text="All Ages" delay={1660} />
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
