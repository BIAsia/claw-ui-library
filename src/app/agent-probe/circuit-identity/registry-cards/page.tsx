const cards = [
  {
    name: "Ari Song",
    role: "speaker / relay systems",
    code: "SPK-04-11",
    tier: "all-access",
    network: "Hall C / latency track",
    status: "verified",
  },
  {
    name: "Mika Osei",
    role: "builder / ingest tooling",
    code: "BLD-07-03",
    tier: "maker",
    network: "Lab Deck / capture line",
    status: "checked-in",
  },
  {
    name: "Noor Petrescu",
    role: "device steward",
    code: "OPS-12-14",
    tier: "ops-core",
    network: "Patch Bay / unit 08",
    status: "issued",
  },
  {
    name: "Toma Vale",
    role: "guest faculty",
    code: "GST-03-09",
    tier: "stage",
    network: "Forum / keynote bus",
    status: "verified",
  },
] as const;

export default function RegistryCardsPage() {
  return (
    <main className="min-h-screen bg-[#071018] px-4 py-4 text-[#e5f2fb] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1320px] rounded-[2rem] border border-[#8fd4ff]/12 bg-[#0c1720] p-5 shadow-[0_34px_110px_rgba(0,0,0,0.46)] sm:p-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#73b6d9]">Registry Cards / signal pass deck</p>
            <h1 className="mt-3 text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.08em] text-[#f2fbff]">Conference identities routed like hardware.</h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#a4c0d1]">Every pass shares the same anatomy: code, role, network lane, tier, and live issuance state. Trace lines are structure, not decoration.</p>
        </header>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <article key={card.code} className="relative overflow-hidden rounded-[1.7rem] border border-[#8fd4ff]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,transparent_0,transparent_18%,rgba(143,212,255,0.15)_18%,rgba(143,212,255,0.15)_19%,transparent_19%,transparent_52%,rgba(143,212,255,0.12)_52%,rgba(143,212,255,0.12)_53%,transparent_53%),linear-gradient(transparent_0,transparent_26%,rgba(143,212,255,0.14)_26%,rgba(143,212,255,0.14)_27%,transparent_27%,transparent_68%,rgba(143,212,255,0.12)_68%,rgba(143,212,255,0.12)_69%,transparent_69%)]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#73b6d9]">node 0{index + 1}</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-[#f2fbff]">{card.name}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b2cada]">{card.role}</p>
                  </div>
                  <div className="rounded-full border border-[#8fd4ff]/18 bg-[#112433] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[#a5d9f6]">{card.status}</div>
                </div>

                <div className="mt-8 grid gap-3 text-sm text-[#d4e8f4] sm:grid-cols-2">
                  {[
                    ["pass code", card.code],
                    ["tier", card.tier],
                    ["network", card.network],
                    ["issuer", "Signal Pass Registry"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1rem] border border-[#8fd4ff]/10 bg-[#0f1d29]/70 p-3">
                      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#6ea4c0]">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-[#eff9ff]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
