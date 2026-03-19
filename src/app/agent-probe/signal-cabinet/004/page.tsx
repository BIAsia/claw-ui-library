import Link from "next/link";

const shelves = [
  {
    name: "Unsorted arrivals",
    count: 128,
    note: "Fresh finds from phones, tabs, screenshots, and field notes.",
  },
  {
    name: "Recurring textures",
    count: 42,
    note: "Fragments repeatedly resurfacing across different topics.",
  },
  {
    name: "Issue candidates",
    count: 16,
    note: "Clusters almost coherent enough to publish as a themed issue.",
  },
  {
    name: "Released cabinets",
    count: 7,
    note: "Finished public collections with notes, captions, and source lineage.",
  },
];

const entries = [
  ["Metro signage grid", "image", "2 annotations", "held for issue 03"],
  ["Book margin scan", "scan", "1 annotation", "linked to memory thread"],
  ["Night market receipt", "photo", "4 annotations", "recurs in money cluster"],
  ["Sentence fragment: public softness", "note", "2 annotations", "paired with poster study"],
  ["Corner-store awning", "image", "0 annotations", "new arrival"],
  ["Voice memo / rain against shutter", "audio", "transcribed", "linked to texture shelf"],
];

export default function SignalCabinet004Page() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] text-[#161616]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-4 md:px-8 md:py-6">
        <header className="grid gap-4 border border-[#1f1f1f] bg-[#f8f5ef] p-4 md:grid-cols-[1.3fr_0.7fr] md:p-6">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#616161]">agent probe / style 004</p>
            <h1 className="mt-3 text-[clamp(2.3rem,5vw,4.7rem)] font-semibold tracking-[-0.05em]">Signal Cabinet</h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#4b4b4b] md:text-[15px]">
              A browseable research archive where an AI assistant helps sort fragments, expose hidden recurrences, and package rough material into coherent public collections.
            </p>
          </div>
          <div className="grid gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-[#555] md:justify-items-end">
            <span className="border border-[#1f1f1f] px-3 py-2">4 shelves</span>
            <span className="border border-[#1f1f1f] px-3 py-2">193 active fragments</span>
            <Link href="/agent-probe/signal-cabinet" className="border border-[#1f1f1f] px-3 py-2 transition hover:bg-[#1f1f1f] hover:text-[#f8f5ef]">
              compare all
            </Link>
          </div>
        </header>

        <section className="mt-4 grid flex-1 gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="border border-[#1f1f1f] bg-[#fbf8f3] p-4 md:p-5">
            <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-3">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">shelves</p>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">status: open</p>
            </div>
            <div className="mt-4 grid gap-3">
              {shelves.map((shelf) => (
                <article key={shelf.name} className="border border-[#1f1f1f] bg-[#f5f1ea] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-medium tracking-[-0.03em]">{shelf.name}</h2>
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[#666]">{shelf.count}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#535353]">{shelf.note}</p>
                </article>
              ))}
            </div>
          </aside>

          <div className="grid gap-4">
            <section className="border border-[#1f1f1f] bg-[#fffdfa] p-4 md:p-5">
              <div className="flex items-end justify-between gap-4 border-b border-[#1f1f1f] pb-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">active shelf view</p>
                  <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">Unsorted arrivals</h2>
                </div>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#666]">scan / tag / route</p>
              </div>

              <div className="mt-4 overflow-hidden border border-[#1f1f1f]">
                {entries.map((row, index) => (
                  <div
                    key={`${row[0]}-${index}`}
                    className="grid gap-2 border-b border-[#1f1f1f] bg-[#faf7f2] px-4 py-3 text-sm leading-6 last:border-b-0 md:grid-cols-[1.5fr_0.45fr_0.55fr_0.8fr]"
                  >
                    <div>{row[0]}</div>
                    <div className="uppercase tracking-[0.18em] text-[#666]">{row[1]}</div>
                    <div className="text-[#4f4f4f]">{row[2]}</div>
                    <div className="text-[#4f4f4f]">{row[3]}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <article className="border border-[#1f1f1f] bg-[#f5f1ea] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">assistant behavior</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4f4f4f]">
                  <li>• classifies lightly before summarizing</li>
                  <li>• keeps provenance attached to every fragment</li>
                  <li>• suggests clusters only after repeated recurrence</li>
                  <li>• exports themed cabinets without destroying the raw shelf</li>
                </ul>
              </article>
              <article className="border border-[#1f1f1f] bg-[#fffdfa] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">public promise</p>
                <p className="mt-4 text-sm leading-7 text-[#4f4f4f]">
                  The website does not ask users to pre-decide structure. It behaves like a calm inventory system that can tolerate ambiguity until a collection is strong enough to be shown.
                </p>
              </article>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
