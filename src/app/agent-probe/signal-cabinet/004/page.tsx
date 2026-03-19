import Link from "next/link";

const filters = ["all", "image", "note", "scan", "audio"];

const items = [
  { id: "metro-grid", title: "Metro Grid", meta: "image / issue 03", tone: "#ded6ca", ink: "#171513" },
  { id: "book-margin", title: "Book Margin", meta: "scan / annotated", tone: "#7fa36e", ink: "#111111" },
  { id: "night-receipt", title: "Night Receipt", meta: "photo / recurring", tone: "#d77e59", ink: "#111111" },
  { id: "public-softness", title: "Public Softness", meta: "note / paired", tone: "#ece9e4", ink: "#474747" },
  { id: "awning", title: "Awning", meta: "image / new", tone: "#cfc8bf", ink: "#161616" },
  { id: "rain-shutter", title: "Rain / Shutter", meta: "audio / transcribed", tone: "#ddd2c2", ink: "#17328d" },
];

function CabinetCover({ title, tone, ink }: { title: string; tone: string; ink: string }) {
  return (
    <div className="relative aspect-[0.78] w-full border" style={{ background: tone, borderColor: "rgba(0,0,0,0.12)", color: ink }}>
      <div className="absolute left-[8%] top-[8%] text-[0.54rem] uppercase tracking-[0.16em] opacity-70">signal cabinet</div>
      <div className="absolute inset-x-[10%] bottom-[12%] text-[1.2rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[1.4rem]">
        {title}
      </div>
      <div className="absolute inset-x-[8%] top-[20%] h-[46%] border opacity-30" style={{ borderColor: ink }} />
    </div>
  );
}

export default function SignalCabinet004Page() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] text-[#171717]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1520px] flex-col px-4 py-4 md:px-8 md:py-6">
        <header className="border border-[#1f1f1f] bg-[#f8f5ef] p-4 md:p-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#616161]">agent probe / style 004</p>
              <h1 className="mt-3 text-[clamp(2.4rem,5vw,4.8rem)] font-semibold tracking-[-0.05em]">Signal Cabinet</h1>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#4b4b4b] md:text-[15px]">
                A browse-first public archive where fragments are surfaced as collectible entries and grouped into shelves before they become fixed stories.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#555]">
              <span className="border border-[#1f1f1f] px-3 py-2">193 active fragments</span>
              <span className="border border-[#1f1f1f] px-3 py-2">4 shelves</span>
              <Link href="/agent-probe/signal-cabinet" className="border border-[#1f1f1f] px-3 py-2 transition hover:bg-[#1f1f1f] hover:text-[#f8f5ef]">
                compare all
              </Link>
            </div>
          </div>
        </header>

        <div className="mt-4 flex flex-wrap gap-2 border border-[#1f1f1f] bg-[#fbf8f3] p-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#5b5b5b]">
          {filters.map((filter, index) => (
            <span key={filter} className={`border px-3 py-2 ${index === 0 ? "border-[#1f1f1f] bg-[#1f1f1f] text-[#f8f5ef]" : "border-[#1f1f1f]"}`}>
              {filter}
            </span>
          ))}
        </div>

        <section className="mt-4 grid flex-1 gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-[#1f1f1f] bg-[#fbf8f3] p-4 md:p-5">
            <div className="mb-4 flex items-end justify-between gap-4 border-b border-[#1f1f1f] pb-3">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">open shelf</p>
                <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">Unsorted arrivals</h2>
              </div>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#666]">scan / choose / route</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <article key={item.id} className="space-y-3">
                  <CabinetCover title={item.title} tone={item.tone} ink={item.ink} />
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium tracking-[-0.03em]">{item.title}</h3>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#666]">{item.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <section className="border border-[#1f1f1f] bg-[#fffdfa] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">why this mode fits</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4f4f]">
                Signal Cabinet behaves like a catalog before it behaves like a thesis. The public website should let people browse entries, feel the shelf logic, and understand that fragments stay collectible even before they resolve into a finished issue.
              </p>
            </section>
            <section className="border border-[#1f1f1f] bg-[#f5f1ea] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">assistant behavior</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4f4f4f]">
                <li>• preserve provenance on every entry</li>
                <li>• propose shelves only after recurrence appears</li>
                <li>• keep annotation lightweight and inventory-friendly</li>
                <li>• publish issues as grouped selections, not total restructures</li>
              </ul>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
