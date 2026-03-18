const blocks = ["SÁB. 11.05 | 15:00", "COUNTER", "COOKIE-CUTTER", "CULTURE"];

export function Case023CookieCutterPoster() {
  return (
    <main className="min-h-screen bg-[#efede8] px-4 py-10 text-[#111] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1200px] items-center justify-center">
        <article className="relative w-full max-w-[940px] overflow-hidden bg-[#ff4f22] px-6 py-6 shadow-[0_20px_38px_rgba(0,0,0,0.12)] sm:px-8 sm:py-8">
          <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
            <div>
              {blocks.map((block, index) => (
                <div key={block} className={`mb-2 inline-block bg-white px-3 py-1 ${index === 0 ? "text-[clamp(2rem,4.5vw,4rem)]" : "text-[clamp(2.4rem,5.8vw,5.2rem)]"} leading-[0.92] tracking-[-0.09em] text-[#ff4f22]`}>
                  {block}
                </div>
              ))}
            </div>
            <div className="pt-1 text-right text-[0.96rem] leading-[1.2] uppercase tracking-[0.08em] sm:text-[1.2rem]">
              <p>Bienal de Arte Contemporanea da Maia &apos;19</p>
              <p className="mt-7">Maia Biennial of Contemporary Art &apos;19</p>
            </div>
          </div>

          <div className="mt-24 flex items-end justify-between gap-4 sm:mt-28">
            <p className="text-[clamp(1.8rem,4vw,3.3rem)] leading-none tracking-[-0.07em] text-[#121212]">Orlando Lovell</p>
            <div className="flex flex-col items-end gap-2 text-[0.9rem] uppercase tracking-[0.08em] sm:text-[1.05rem]">
              <span className="border border-[#111] bg-[#ff7f4f] px-3 py-1 text-[#111]">Performance</span>
              <span className="bg-[#111] px-3 py-1 text-[#f1efe8]">PÇ. DR. VIEIRA DE CARVALHO</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
