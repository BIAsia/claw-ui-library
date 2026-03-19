const lines = [
  ["ATK", "STD", "PRESENT"],
  ["TRONICA", "MONO", "VE.001"],
  ["INCL. 386 GLYPHS", "SIZE"],
  ["28KB", "REGULAR", "SINGLE"],
  ["WEIGHT", "PIXEL"],
  ["FONT", "+", "D:"],
  ["RADINAL", "R", "(C) 2021"],
] as const;

const decodeLines = [
  "01010010 01000001 01000100 01001001 01001110 01000001 01001100",
  "R4D1N4L // PIXEL FONT // GLYPH CACHE READY",
  "[SCAN] [LOAD] [INDEX] [RENDER]",
] as const;

export function Case020RadinalPixelFont() {
  return (
    <main className="min-h-screen bg-[#b2b2b2] px-4 py-10 text-[#151515] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1120px] items-center justify-center">
        <article className="relative aspect-[1.25/1] w-full max-w-[760px] overflow-hidden bg-[#b2b2b2] px-4 py-6 sm:px-8 sm:py-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.36),rgba(255,255,255,0))] [animation:mona-scanline_5.4s_linear_infinite]" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[12rem] w-[17rem] -translate-x-1/2 -translate-y-[8%] rotate-[-8deg] blur-[1px] sm:h-[15rem] sm:w-[21rem]"
            style={{
              background:
                "radial-gradient(circle at 45% 40%, rgba(255,175,58,0.7) 0%, rgba(255,131,35,0.94) 32%, rgba(245,84,35,0.98) 58%, rgba(225,48,24,0.9) 78%, rgba(225,48,24,0) 100%)",
              clipPath:
                "polygon(5% 42%, 14% 20%, 41% 13%, 65% 5%, 85% 17%, 96% 39%, 89% 58%, 100% 78%, 81% 90%, 51% 85%, 29% 95%, 10% 78%, 0% 58%)",
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between font-mono uppercase tracking-[0.12em] text-[#161616] [animation:mona-flicker_6.2s_steps(1,end)_infinite]">
            <div className="space-y-3 text-[clamp(1.7rem,4vw,3rem)] leading-[0.88] sm:space-y-2">
              {lines.map((line, index) => (
                <div key={index} className="relative flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 overflow-hidden">
                  {line.map((part) => (
                    <span key={part} className={part === "REGULAR" ? "text-[#c63a18] transition duration-300 hover:text-[#9a2208]" : "transition duration-300 hover:translate-x-0.5"}>
                      {part}
                    </span>
                  ))}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 text-[#f3f3f3]/20 [animation:mona-decode_6.8s_steps(2,end)_infinite]"
                    style={{ animationDelay: `${index * 220}ms` }}
                  >
                    {decodeLines[index % decodeLines.length]}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid gap-4 text-[0.55rem] leading-[1.35] tracking-[0.18em] text-[#2f2f2f] sm:grid-cols-3 sm:text-[0.65rem]">
              <p>
                PXL TYPE FACE MODULE
                <br />
                SERIAL NP-01030
                <br />
                RELEASE: 2021 06
              </p>
              <p className="text-center">
                PRINT: MULTI USER (1-3)
                <br />
                FILE:
                <br />
                D/FONTS/NEW
              </p>
              <p className="text-right">
                PIXEL FONT
                <br />
                <br />
                PIXEL FONT
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
