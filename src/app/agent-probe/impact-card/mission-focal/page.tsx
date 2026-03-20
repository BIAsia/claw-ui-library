export default function MissionFocalPage() {
  return (
    <main className="min-h-screen bg-[#140d0b] px-4 py-4 text-[#fff4e8] sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1180px] items-center justify-center">
        <div className="grid w-full gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#1f1612] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#d9b082]">field update</p>
              <p className="mt-4 text-sm leading-7 text-[#e8d7c8]">Storm shelters along the delta have lost battery backup. Medical coolers and charging points need replacement before the next rain band reaches the coast.</p>
            </div>
            <div className="rounded-[1.3rem] border border-white/10 bg-[#f0dfc7] p-4 text-[#24140f]">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#8b5f40]">impact proof</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">142 kits</p>
              <p className="mt-1 text-sm leading-6 text-[#604330]">funded this week / enough to reopen 11 cooling points</p>
            </div>
          </aside>

          <article className="relative overflow-hidden rounded-[2.4rem] border border-[#f1d7bb]/18 bg-[radial-gradient(circle_at_top_left,#4c2418,transparent_34%),#24130f] p-7 shadow-[0_38px_120px_rgba(0,0,0,0.44)] sm:p-10">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,244,232,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,244,232,0.05)_1px,transparent_1px)] [background-size:100%_5rem,5rem_100%]" />
            <div className="relative z-10 max-w-[52rem]">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#e3b68d]">Mission Focal / rapid relief appeal</p>
              <h1 className="mt-4 max-w-[9ch] text-[clamp(3.4rem,8vw,6.6rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-[#fff2e5]">
                Keep the shelters lit through the night.
              </h1>
              <p className="mt-5 max-w-[30ch] text-lg leading-8 text-[#ecd9c7]">
                One backup-power kit keeps refrigerated medicine safe, restores charging for displaced families, and buys responders one more night of working light.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#f1d2b0] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#28140f]">donate now</button>
                <button className="rounded-full border border-white/14 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#fff1e2]">share appeal</button>
              </div>

              <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
                {[
                  ["gift example", "$38 powers one family station"],
                  ["delivery window", "48 hours via coastal partners"],
                  ["campaign lead", "Harbor Mutual Aid Network"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#c69772]">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-[#fff2e5]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
