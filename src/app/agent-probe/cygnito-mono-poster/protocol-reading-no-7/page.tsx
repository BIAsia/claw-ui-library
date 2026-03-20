const blocks = [
  ["SESSION", "Protocol Reading No. 7"],
  ["TOPIC", "machine language, synthetic literature, executable syntax"],
  ["TIME", "2026-09-14 19:30 UTC+1"],
  ["SITE", "Terminal Room / Block C / GDN relay"],
] as const;

const speakers = [
  "MARTA KAZIMIERSKA — writer / parser studies",
  "LEV ORLOV — software essays / terminal dramaturgy",
  "INES BAUER — machine poetics / release systems",
] as const;

export default function CygnitoMonoPosterProtocolReadingPage() {
  return (
    <main className="min-h-screen bg-[#030303] px-3 py-3 text-[#f2f2f0] sm:px-5 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[900px] items-center justify-center">
        <article className="relative aspect-[0.74] w-full overflow-hidden border border-white/50 bg-[#050505] shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
          <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:100%_120px,120px_100%]" />
          <div className="relative z-10 flex h-full flex-col font-mono">
            <header className="grid border-b border-white/35 px-4 py-4 text-[10px] uppercase tracking-[0.28em] text-white/82 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:px-6">
              <p>CYGNITO MONO POSTER</p>
              <p>ISSUE: 007 / FIELD: READINGS</p>
              <p className="text-left sm:text-right">STATUS: PUBLIC BULLETIN</p>
            </header>

            <section className="grid border-b border-white/35 lg:grid-cols-[1.22fr_0.78fr]">
              <div className="border-b border-white/35 px-4 py-5 sm:px-6 lg:border-b-0 lg:border-r">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/56">primary statement</p>
                <h1 className="mt-4 text-[clamp(2.8rem,7vw,5.9rem)] uppercase leading-[0.88] tracking-[-0.11em] text-white">
                  PROTOCOL
                  <br />
                  READING
                  <br />
                  No. 7
                </h1>
                <p className="mt-6 max-w-[30ch] text-[0.82rem] uppercase leading-6 tracking-[0.16em] text-white/68 sm:text-sm">
                  A writer-developer salon on coded literature, command syntax, and machine form. Three readings. One serial bulletin. No ornamental layer.
                </p>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/56">serial metadata</p>
                <div className="mt-4 space-y-0 border border-white/35">
                  {blocks.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[96px_1fr] border-b border-white/20 px-3 py-3 text-[0.72rem] uppercase tracking-[0.16em] last:border-b-0 sm:text-[0.75rem]">
                      <p className="text-white/44">{label}</p>
                      <p className="text-white/88">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid flex-1 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-white/35 px-4 py-5 sm:px-6 lg:border-b-0 lg:border-r">
                <div className="border border-white/35 p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/56">transmission</p>
                  <div className="mt-4 space-y-4 text-[0.72rem] uppercase leading-6 tracking-[0.16em] text-white/78 sm:text-[0.77rem]">
                    <p>ENTRY 19:00 / READING START 19:30 / CLOSE 21:40</p>
                    <p>RELAY FEED ACTIVE AT cycgnito.net/reading-07</p>
                    <p>PRINT HANDOUT 12pp / MONO STOCK / ISSUE STAMPED ONSITE</p>
                    <p>ADMISSION BY RSVP / 80 CHAIRS / WALK-IN RELEASE AFTER 19:20</p>
                  </div>
                </div>
                <div className="mt-4 border border-white/35 p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/56">coordinates</p>
                  <p className="mt-4 text-[1.35rem] uppercase leading-none tracking-[-0.08em] text-white">54.3520°N</p>
                  <p className="mt-1 text-[1.35rem] uppercase leading-none tracking-[-0.08em] text-white">18.6466°E</p>
                  <p className="mt-4 text-[0.72rem] uppercase leading-6 tracking-[0.16em] text-white/74">Bulletin format preserved for posting, relay, and archive issue indexing.</p>
                </div>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <div className="border border-white/35">
                  <div className="grid grid-cols-[84px_1fr] border-b border-white/35 px-3 py-3 text-[10px] uppercase tracking-[0.3em] text-white/56">
                    <p>SLOT</p>
                    <p>PARTICIPANTS / MATERIAL</p>
                  </div>
                  <div className="divide-y divide-white/20">
                    {speakers.map((item, index) => (
                      <div key={item} className="grid grid-cols-[84px_1fr] px-3 py-4 text-[0.74rem] uppercase leading-6 tracking-[0.16em] text-white/84 sm:text-[0.8rem]">
                        <p className="text-white/42">0{index + 1}</p>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="border border-white/35 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/56">issue protocol</p>
                    <p className="mt-4 text-[0.78rem] uppercase leading-6 tracking-[0.16em] text-white/78">
                      01 opening checksum
                      <br />
                      02 readings / interrupted fragments
                      <br />
                      03 salon exchange log
                      <br />
                      04 annotated release card
                    </p>
                  </div>
                  <div className="border border-white/35 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/56">classification</p>
                    <p className="mt-4 text-[0.78rem] uppercase leading-6 tracking-[0.16em] text-white/78">
                      audience: writer / developer / translator / theorist
                      <br />
                      format: public bulletin
                      <br />
                      palette: mono only
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <footer className="grid border-t border-white/35 px-4 py-4 text-[10px] uppercase tracking-[0.28em] text-white/58 sm:grid-cols-[1fr_auto] sm:px-6">
              <p>CYGNITO / READING SERIES / ARCHIVE SERIAL 2026.07</p>
              <p className="text-left text-white/82 sm:text-right">NO IMAGE LAYER / TYPE DOES THE WORK</p>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
