const zones = [
  { name: "North Loop", fill: 86, accent: "bg-[#205ecf]" },
  { name: "River Market", fill: 73, accent: "bg-[#1e8b69]" },
  { name: "Old Depot", fill: 58, accent: "bg-[#d37b2c]" },
  { name: "Harbor Line", fill: 41, accent: "bg-[#9c4bd4]" },
] as const;

function DotField({ fill, accent }: { fill: number; accent: string }) {
  return (
    <div className="grid grid-cols-10 gap-1.5">
      {Array.from({ length: 100 }).map((_, index) => (
        <span
          key={index}
          className={`h-3.5 w-3.5 rounded-full ${index < fill ? accent : "bg-[#d8ddd8]"} ${index < fill ? "opacity-100" : "opacity-65"}`}
        />
      ))}
    </div>
  );
}

export default function TapShiftMapPage() {
  return (
    <main className="min-h-screen bg-[#f3eee6] px-4 py-4 text-[#1b2430] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] border border-[#1b2430]/10 bg-[#fbf9f5] shadow-[0_32px_90px_rgba(48,53,61,0.12)]">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-[#1b2430]/10 px-5 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#68717c]">Tap Shift Map / city adoption explainer</p>
            <h1 className="mt-3 max-w-[9ch] text-[clamp(2.8rem,5.4vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.09em]">Card and phone taps now own the trip.</h1>
            <p className="mt-5 max-w-[30ch] text-base leading-8 text-[#4b5560] sm:text-lg">
              Each dot is a verified transit payment. As the field fills, fare behavior shifts from cash counters to touch points across the network.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-[#1b2430]/10 bg-white/80 p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#68717c]">network summary</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  ["active tap share", "68%"],
                  ["stations enabled", "119 / 132"],
                  ["cash queues down", "-34% YoY"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-3xl font-semibold tracking-[-0.06em] text-[#1b2430]">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#5d6873]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 py-6 lg:px-8 lg:py-8">
            <div className="space-y-5">
              {zones.map((zone) => (
                <article key={zone.name} className="rounded-[1.4rem] border border-[#1b2430]/10 bg-white/70 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#68717c]">zone</p>
                      <h2 className="mt-1 text-2xl font-medium tracking-[-0.05em] text-[#1b2430]">{zone.name}</h2>
                    </div>
                    <p className="text-3xl font-semibold tracking-[-0.06em] text-[#1b2430]">{zone.fill}%</p>
                  </div>
                  <DotField fill={zone.fill} accent={zone.accent} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
