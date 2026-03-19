const perks = ["48 launch-ready overlays", "Creator storefront themes", "Members-only critique drop"] as const;

export default function DropCardPage() {
  return (
    <main className="min-h-screen bg-[#140b14] px-4 py-4 text-[#fff5e8] sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1180px] items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#f2d2ff]/14 bg-[radial-gradient(circle_at_top_left,#5c214f,transparent_38%),radial-gradient(circle_at_80%_20%,#ff8d4d,transparent_24%),#1b0f1c] p-4 shadow-[0_36px_120px_rgba(0,0,0,0.45)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,245,232,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,245,232,0.06)_1px,transparent_1px)] [background-size:100%_4.5rem,4.5rem_100%]" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[0.32fr_0.68fr]">
            <div className="flex flex-col justify-between rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#f9cf8f]">swagworks / launch artifact</p>
                <p className="mt-4 text-sm leading-6 text-white/72">Crew Pass is a members-only toolkit drop for motion-heavy merch launches, pop-up pages, and creator storefront promos.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/46">window</p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">72 hours</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/46">membership drop 03</p>
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[2rem] border border-[#ffd7aa]/30 bg-[#ffe7c8] p-6 text-[#24150f] sm:p-8 lg:p-10">
              <div className="absolute right-4 top-4 rounded-full border border-[#24150f]/12 bg-[#fff5e7]/70 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[#7d4c2f]">drop card</div>
              <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr]">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.24em] text-[#8d5330]">Crew Pass</p>
                  <h1 className="mt-3 max-w-[8ch] text-[clamp(3.8rem,9vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.09em]">
                    Own the launch room.
                  </h1>
                  <p className="mt-5 max-w-[28ch] text-base leading-7 text-[#5d3925] sm:text-lg">
                    One access card. Templates, overlays, critique cues, and product-stage framing for creator drops that need more swagger than a polite landing page.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button className="rounded-full bg-[#24150f] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#fff2df]">join crew</button>
                    <button className="rounded-full border border-[#24150f]/16 px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#24150f]">see bundle</button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {perks.map((perk, index) => (
                    <div key={perk} className={`rounded-[1.2rem] border p-4 ${index === 0 ? "bg-[#24150f] text-[#fff2df] border-[#24150f]" : "bg-[#fff6ea] border-[#24150f]/10 text-[#24150f]"}`}>
                      <p className="text-[0.66rem] uppercase tracking-[0.22em] opacity-55">perk 0{index + 1}</p>
                      <p className="mt-2 text-sm leading-6">{perk}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 border-t border-[#24150f]/10 pt-5 sm:grid-cols-3">
                {[
                  ["seat cap", "300 members"],
                  ["price", "$96 / season"],
                  ["best for", "launch artists + merch teams"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#8d5330]">{label}</p>
                    <p className="mt-2 text-sm font-medium text-[#24150f]">{value}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
