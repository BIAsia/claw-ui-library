const schedule = [
  ["22:00", "LIVE", "Night Frequency", "Ari Vale", "120m", "dub currents / call-ins"],
  ["00:00", "NEXT", "Orbit Letters", "Sana Riis", "60m", "midnight essays + ambient mail"],
  ["01:00", "ARCHIVE", "Tape Weather", "Jules K", "90m", "field recordings / storm cassettes"],
  ["02:30", "LIVE", "Blue Relay", "Maks Havel", "60m", "slow techno / station IDs"],
  ["03:30", "REPLAY", "Kitchen Antenna", "Mina Sol", "30m", "spoken recipes / pirate pop"],
  ["04:00", "LIVE", "Residency Loop", "Nico Aster", "120m", "guest mix / dawn transition"],
] as const;

const sideFacts = [
  ["channel", "RF-03 / web relay"],
  ["signal", "stable / 128kbps"],
  ["city", "Rotterdam night desk"],
  ["weather", "light rain over river band"],
] as const;

export default function RadiiioStationTableNightFrequencyPage() {
  return (
    <main className="min-h-screen bg-[#f3efe5] px-3 py-3 text-[#181511] sm:px-5 lg:px-8">
      <section className="mx-auto max-w-[1280px]">
        <article className="overflow-hidden border border-[#1c1712]/20 bg-[#fbf8f1] shadow-[0_28px_80px_rgba(52,43,28,0.12)]">
          <div className="grid gap-0 border-b border-[#1c1712]/15 lg:grid-cols-[0.34fr_1fr]">
            <div className="border-b border-[#1c1712]/15 bg-[#efe6d6] p-5 lg:border-b-0 lg:border-r">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6c6459]">radiiio station table</p>
              <h1 className="mt-4 text-[clamp(2rem,4vw,3.8rem)] leading-[0.92] tracking-[-0.08em] text-[#17130f]">
                Night Frequency
                <br />
                Table
              </h1>
              <p className="mt-4 max-w-[24ch] text-sm leading-6 text-[#584f42]">
                A live overnight schedule board for channel residents, drifting callers, and the listeners timing their route by what is on air now.
              </p>
              <div className="mt-6 grid gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#2b251c]">
                {sideFacts.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[70px_1fr] border border-[#1c1712]/12 bg-white/50 px-3 py-2">
                    <span className="text-[#7d756a]">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6c6459]">on-air board / thursday cycle</p>
                  <p className="mt-2 text-sm leading-6 text-[#5e564a]">Current slot is highlighted in amber. Replays stay dim. Archive picks are tucked in after 01:00 so late listeners can drift and still orient instantly.</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[0.68rem] uppercase tracking-[0.2em]">
                  <div className="border border-[#1c1712]/12 bg-[#fff2cf] px-3 py-2 text-center text-[#443411]">live</div>
                  <div className="border border-[#1c1712]/12 bg-[#f2efe8] px-3 py-2 text-center text-[#5d5447]">next</div>
                  <div className="border border-[#1c1712]/12 bg-[#ece7de] px-3 py-2 text-center text-[#7a7265]">archive / replay</div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden border border-[#1c1712]/15">
                <div className="grid grid-cols-[0.8fr_0.9fr_2fr_1.35fr_0.8fr_1.9fr] bg-[#17130f] px-4 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#f3eee4]">
                  <p>time</p>
                  <p>status</p>
                  <p>programme</p>
                  <p>host</p>
                  <p>dur</p>
                  <p>band</p>
                </div>
                <div className="divide-y divide-[#1c1712]/12 bg-[#fbf8f1]">
                  {schedule.map(([time, status, show, host, duration, band], index) => {
                    const statusStyle =
                      status === "LIVE"
                        ? "bg-[#fff2cf] text-[#2d230d]"
                        : status === "NEXT"
                          ? "bg-[#f4f0e7] text-[#5d5447]"
                          : "bg-[#ece7de] text-[#7a7265]";

                    return (
                      <div
                        key={`${time}-${show}`}
                        className={`grid grid-cols-1 gap-3 px-4 py-4 text-sm leading-6 text-[#1a1610] md:grid-cols-[0.8fr_0.9fr_2fr_1.35fr_0.8fr_1.9fr] ${index === 0 ? "bg-[#fffaf0]" : ""}`}
                      >
                        <p className="font-medium tracking-[-0.03em]">{time}</p>
                        <div>
                          <span className={`inline-flex min-w-[68px] justify-center px-2 py-1 text-[0.62rem] uppercase tracking-[0.2em] ${statusStyle}`}>{status}</span>
                        </div>
                        <p className="font-medium tracking-[-0.04em]">{show}</p>
                        <p className="text-[#5e564a]">{host}</p>
                        <p className="text-[#5e564a]">{duration}</p>
                        <p className="text-[#5e564a]">{band}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="border border-[#1c1712]/12 bg-white/70 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6c6459]">current slot notes</p>
                  <p className="mt-3 text-[1.15rem] tracking-[-0.05em] text-[#17130f]">Night Frequency carries listener voice notes between 22:40 and 23:10, then slides into a dub-current sequence stitched from residency tapes.</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#4f473b]">
                    <span className="border border-[#1c1712]/12 px-2 py-1">open line</span>
                    <span className="border border-[#1c1712]/12 px-2 py-1">vinyl delay</span>
                    <span className="border border-[#1c1712]/12 px-2 py-1">text relay active</span>
                  </div>
                </div>
                <div className="border border-[#1c1712]/12 bg-[#17130f] p-4 text-[#f3eee4]">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#b7ab98]">station ids</p>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-[#e6dfd2]">
                    <p>Desk opens 21:45 CET</p>
                    <p>Public archive updates at 04:05</p>
                    <p>Friday dawn residency announced at 05:55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
