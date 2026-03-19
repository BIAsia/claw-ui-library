const actions = [
  ["Fund transformer kits", "Equip rapid-response crews with mobile transformer sets and insulated repair stock."],
  ["Back field crews", "Cover protective gear, logistics fuel, and on-site repair rotation costs."],
  ["Sponsor school resilience", "Support backup power and heating continuity for school shelters and community rooms."],
] as const;

const proof = [
  ["42", "mobile substations delivered"],
  ["118", "repair sites supported this winter"],
  ["16", "regional utility + NGO partners"],
] as const;

export default function UkrainianPowerHeroGridForwardPage() {
  return (
    <main className="min-h-screen bg-[#0c1b43] px-3 py-3 text-white sm:px-5 lg:px-8">
      <section className="mx-auto max-w-[1320px]">
        <article className="overflow-hidden rounded-[30px] bg-[#102455] shadow-[0_28px_90px_rgba(7,16,43,0.5)]">
          <div className="relative overflow-hidden px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,210,58,0.2),transparent_34%,transparent_58%,rgba(82,158,255,0.16)_100%)]" />
            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#ffd23a]/12 blur-3xl" />
            <div className="absolute bottom-0 left-[-40px] h-64 w-64 rounded-full bg-[#4a8dff]/18 blur-3xl" />

            <div className="relative z-10 grid gap-8 xl:grid-cols-[1.22fr_0.78fr]">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/62">Grid Forward / emergency energy solidarity</p>
                <h1 className="mt-5 max-w-[10ch] text-[clamp(3rem,7vw,6.4rem)] leading-[0.9] tracking-[-0.08em] text-white">
                  Keep power
                  <br />
                  moving where
                  <br />
                  cities must hold.
                </h1>
                <p className="mt-5 max-w-[38ch] text-[1rem] leading-8 text-[#dbe6ff] sm:text-[1.08rem]">
                  Grid Forward funds rapid restoration equipment, field crews, and community backup systems across damaged energy corridors in Ukraine. The goal is practical: restore heat, lights, clinics, classrooms, and shelter continuity fast.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#ffd23a] px-5 py-3 text-sm font-semibold tracking-[0.08em] text-[#102455] transition hover:bg-[#ffe075]">
                    Donate now
                  </button>
                  <button className="rounded-full border border-white/18 bg-white/6 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-white/10">
                    Partner with crews
                  </button>
                  <button className="rounded-full border border-white/18 bg-white/6 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-white/10">
                    Read field updates
                  </button>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {proof.map(([value, label]) => (
                    <div key={label} className="rounded-[24px] border border-white/12 bg-white/[0.06] p-4 backdrop-blur-sm">
                      <p className="text-3xl font-semibold tracking-[-0.06em] text-[#ffd23a]">{value}</p>
                      <p className="mt-2 text-sm leading-6 text-[#d7e2fb]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">latest operations note</p>
                  <p className="mt-4 text-[1.28rem] leading-8 tracking-[-0.04em] text-white">
                    Crews restored one district heating feeder overnight in Kharkiv oblast and redeployed backup units toward two school shelter sites before dawn.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#dbe6ff]">Verified 06:40 UTC / utility coordination desk + volunteer logistics hub</p>
                </div>

                <div className="rounded-[28px] border border-white/12 bg-[#0d1e47] p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">urgent support paths</p>
                  <div className="mt-4 space-y-3">
                    {actions.map(([title, body]) => (
                      <div key={title} className="rounded-[22px] border border-white/10 bg-white/[0.05] p-4">
                        <p className="text-sm font-semibold tracking-[0.04em] text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-[#d3def7]">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-white/10 lg:grid-cols-[1fr_0.8fr_0.9fr]">
            <div className="bg-[#13295f] px-6 py-5 sm:px-8">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">why this matters now</p>
              <p className="mt-3 max-w-[50ch] text-sm leading-7 text-[#dce6ff]">
                Energy infrastructure is both literal support and civic continuity. Every repaired feeder and backup unit keeps neighborhoods warm, preserves medical care, and reduces the cascading pressure on already-fragile local systems.
              </p>
            </div>
            <div className="bg-[#102455] px-6 py-5 sm:px-8">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">trusted by</p>
              <p className="mt-3 text-sm leading-7 text-[#dce6ff]">Regional utility teams, municipal shelter coordinators, education recovery desks, and verified volunteer engineering groups.</p>
            </div>
            <div className="bg-[#0d1f4b] px-6 py-5 sm:px-8">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">response cadence</p>
              <p className="mt-3 text-sm leading-7 text-[#dce6ff]">Public updates twice daily. Procurement summaries weekly. Donor brief with verified deployment records every Friday.</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
