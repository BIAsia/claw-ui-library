export function Case021CygnitoMonoPoster() {
  return (
    <main className="min-h-screen bg-[#a6a6a6] px-4 py-10 text-[#111] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1280px] items-center justify-center">
        <article className="relative w-full max-w-[1040px] space-y-10 overflow-hidden font-mono uppercase tracking-[0.14em]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-14 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0))] [animation:mona-scanline_6.1s_linear_infinite]" />
          <div className="overflow-hidden border border-[#686868] bg-[#fe4b1f]">
            <div className="border-b border-[#686868] px-5 py-5 sm:px-8 sm:py-7">
              <h1 className="text-[clamp(4rem,11vw,7.6rem)] leading-[0.85] tracking-[0.08em] text-[#111] [animation:mona-title-shift_7.4s_ease-in-out_infinite]">Cygnito</h1>
            </div>
            <div className="px-5 py-5 sm:px-8 sm:py-7">
              <h2 className="text-[clamp(4rem,11vw,7.6rem)] leading-[0.85] tracking-[0.08em] text-[#111] [animation:mona-title-shift_7.4s_ease-in-out_infinite]" style={{ animationDelay: '260ms' }}>
                Mono<span className="align-top text-[0.36em]">TM</span>
              </h2>
            </div>
          </div>

          <div className="border border-[#686868] bg-[#a6a6a6]">
            <div className="border-b border-[#686868] bg-[#fe4b1f] px-5 py-4 text-[clamp(1.05rem,2.1vw,1.9rem)] leading-none sm:px-8">
              TypeFace ↠ Modular TTF / OTF ↠ Regular V1.0 / 2019
            </div>

            <div className="grid md:grid-cols-[0.95fr_1.75fr_1fr]">
              <div className="border-b border-r border-[#686868] px-5 py-6 transition duration-300 hover:bg-black/[0.035] md:border-b-0 sm:px-8">
                <p className="text-[clamp(1.8rem,3.3vw,2.9rem)] leading-[1.25] tracking-[0.12em]">
                  Cygnito
                  <br />
                  <br />
                  Monospaced
                </p>
              </div>

              <div className="border-b border-r border-[#686868] px-5 py-6 transition duration-300 hover:bg-[#fe4b1f]/[0.08] md:border-b-0 sm:px-8">
                <p className="text-[clamp(1rem,1.7vw,1.42rem)] leading-[1.5] tracking-[0.16em]">
                  Published by ATK Studio
                  <br />
                  Designer ↠ Radinal R M
                </p>
                <p className="mt-10 max-w-[44ch] text-[0.84rem] leading-[1.55] tracking-[0.08em] normal-case sm:text-[0.98rem]">
                  Inspired by modernism and industrial graphic design, this is a solid industrial monospaced font with octagon angles (+45°) and octagon structure. Determine the grid and create a complete set of cohesive characters (A-Z) and multilanguage characters (latin based) in either lowercase or uppercase, with consideration for scale, proportion, and balance between the letterform.
                </p>
                <p className="mt-8 text-[0.84rem] leading-[1.55] tracking-[0.08em] normal-case sm:text-[0.98rem]">
                  Contains 506 glyphs | Support for ±138 Languages (latin-Extended)
                </p>
              </div>

              <div className="relative min-h-[18rem] overflow-hidden">
                <div className="absolute inset-0 border-[#686868] md:border-l">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.6%,#686868_50%,transparent_50.4%)] [animation:mona-diagonal-drift_5.8s_ease-in-out_infinite]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_47.8%,rgba(254,75,31,0.16)_48.5%,transparent_49.2%)] [animation:mona-diagonal-drift_5.8s_ease-in-out_infinite]" style={{ animationDelay: '220ms' }} />
                </div>
              </div>
            </div>

            <div className="grid border-t border-[#686868] md:grid-cols-[2.2fr_1fr]">
              <div className="border-b border-r border-[#686868] px-5 py-5 text-[clamp(1.5rem,3vw,2.6rem)] leading-none transition duration-300 hover:bg-black/[0.035] md:border-b-0 sm:px-8">
                More Info ↠ HALLO.ATKSTUDIO@GMAIL.COM
              </div>
              <div className="px-5 py-5 text-right text-[clamp(1.5rem,3vw,2.6rem)] leading-none transition duration-300 hover:bg-black/[0.035] sm:px-8">All Ages</div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
