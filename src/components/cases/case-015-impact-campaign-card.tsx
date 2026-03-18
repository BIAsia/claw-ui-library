const stat = 72;

export function Case015ImpactCampaignCard() {
  return (
    <main className="min-h-screen bg-[#efedea] px-4 py-10 text-[#181818] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[920px] items-center justify-center">
        <article className="grid aspect-square w-full max-w-[620px] grid-cols-[0.34fr_0.66fr] grid-rows-[0.29fr_0.71fr] overflow-hidden rounded-[2rem] border-[4px] border-[#202020] bg-[#f8f7f4] shadow-[0_18px_38px_rgba(0,0,0,0.2)] sm:rounded-[2.2rem]">
          <div className="border-b-[4px] border-r-[4px] border-[#202020] px-6 py-6 sm:px-10 sm:py-8">
            <h1 className="text-[clamp(3rem,7vw,5.5rem)] leading-[0.88] font-[700] tracking-[-0.09em] text-[#222126]">
              Impact
              <span className="text-[#ef6a24]">.</span>
            </h1>
          </div>

          <div className="relative border-b-[4px] border-[#202020] bg-[#e7e5e3]">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(250,250,250,0.96) 0%, rgba(210,210,210,0.98) 17%, rgba(155,155,155,0.9) 37%, rgba(235,235,235,0.9) 54%, rgba(120,120,120,0.88) 78%, rgba(240,240,240,0.94) 100%)",
                  "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(180,180,180,0.32))",
                ].join(","),
              }}
            />
          </div>

          <div className="grid grid-rows-[0.22fr_0.78fr] border-r-[4px] border-[#202020]">
            <div
              className="border-b-[4px] border-[#202020]"
              style={{
                backgroundColor: "#201d1d",
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,113,41,0.78) 0 2px, transparent 2px 12px)",
              }}
            />

            <div className="relative flex flex-col justify-end bg-[#ff5b06] px-5 py-5 sm:px-8 sm:py-7">
              <p className="text-[clamp(4.4rem,10vw,7.2rem)] leading-none font-[500] tracking-[-0.08em] text-[#241d1a]">
                {stat}
              </p>
              <span className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#472b23] text-[2rem] font-[500] tracking-[-0.08em] text-[#f39b67] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-16 sm:w-16 sm:text-[2.2rem]">
                %
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[#f8f7f4] px-5 py-5 sm:px-9 sm:py-7">
            <div className="flex items-center justify-between gap-3 border-b border-[#2a2a2a]/10 pb-5 text-[0.95rem] tracking-[0.08em] text-[#6b6a68] sm:text-[1.05rem]">
              <span aria-hidden>←</span>
              <p className="flex-1 text-center font-mono text-[0.95rem] lowercase tracking-[0.08em] sm:text-[1.08rem]">
                client: <span className="font-semibold text-[#232325]">NOVA</span>
              </p>
              <span aria-hidden>→</span>
            </div>

            <div className="pt-6 sm:pt-10">
              <p className="max-w-[8ch] text-[clamp(2.1rem,5.3vw,3.65rem)] leading-[0.92] font-[500] tracking-[-0.085em] text-[#161618]">
                Campaign Success
              </p>
              <p className="mt-4 max-w-[15ch] text-[clamp(1.12rem,2vw,1.6rem)] leading-[1.15] tracking-[-0.05em] text-[#8a8a87]">
                Performance score and engagement statistics for Q2.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
