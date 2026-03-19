import Link from "next/link";

const chapters = [
  {
    title: "Why keep fragments uncompressed?",
    copy:
      "Because the most useful materials usually arrive before they know what they are. A screenshot, a sentence, a note on paper, a failed crop — Signal Cabinet keeps them intact long enough for pattern and context to emerge.",
  },
  {
    title: "How the AI helps",
    copy:
      "It tags lightly, notices recurring forms, drafts thematic labels, and proposes issue structures. But it never erases the source fragment or forces early certainty.",
  },
  {
    title: "What the public sees",
    copy:
      "A living publication made from archives still in motion: collections with captions, research trails, annotated sources, and carefully paced visual essays.",
  },
];

export default function SignalCabinet005Page() {
  return (
    <main className="min-h-screen bg-[#f4efe8] text-[#121212]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1480px] flex-col px-5 py-6 md:px-8 md:py-8 lg:px-12">
        <header className="grid gap-10 border-b border-[#181818] pb-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#666]">agent probe / style 005</p>
            <h1 className="mt-4 max-w-[12ch] text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Signal Cabinet
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#353535]">
              A public-facing research publication shaped by an AI assistant that knows how to keep fragments alive before they become conclusions.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 border-l border-[#181818] pl-0 lg:pl-8">
            <p className="max-w-sm text-sm leading-7 text-[#4c4c4c]">
              The same product concept is treated here as a paced editorial object: less like a tool catalog, more like a magazine introducing its method, values, and publishing rhythm.
            </p>
            <Link href="/agent-probe/signal-cabinet" className="inline-flex w-fit border border-[#181818] px-4 py-3 text-[0.72rem] uppercase tracking-[0.2em] transition hover:bg-[#181818] hover:text-[#f4efe8]">
              compare all
            </Link>
          </div>
        </header>

        <section className="grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
          <aside className="space-y-6 border-r border-[#181818] pr-0 lg:pr-8">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">issue 01</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">On materials that resist filing</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-[#474747]">
              <p>
                Signal Cabinet began as a private attempt to stop references from disappearing into screenshots and unsorted folders. The archive is still private at its core, but the website turns selected clusters into readable public issues.
              </p>
              <p>
                Each issue starts with raw fragments, not polished insight. The AI assistant proposes threads, but the editorial rhythm remains human: sequence, omission, emphasis, caption, and release.
              </p>
            </div>
          </aside>

          <div className="space-y-10">
            {chapters.map((chapter, index) => (
              <article key={chapter.title} className="grid gap-4 border-b border-[#1a1a1a] pb-8 last:border-b-0 last:pb-0 md:grid-cols-[0.18fr_0.82fr]">
                <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#777]">0{index + 1}</div>
                <div>
                  <h3 className="text-[clamp(1.8rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#3f3f3f]">{chapter.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-auto grid gap-6 border-t border-[#181818] pt-8 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#666]">What ships on the site</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#474747]">
              The home page does not attempt to explain every feature. Instead it introduces a point of view: fragments are worth preserving, sequence matters, and AI is most valuable when it helps surface patterns without flattening the source material.
            </p>
          </div>
          <div className="grid gap-3 text-sm leading-7 text-[#454545]">
            <div className="border border-[#181818] px-4 py-4">Published issues with annotated fragments and source trails.</div>
            <div className="border border-[#181818] px-4 py-4">Cabinet notes that explain why a cluster exists now, not later.</div>
            <div className="border border-[#181818] px-4 py-4">Quiet invitations to subscribe to future releases, not aggressive conversion blocks.</div>
          </div>
        </section>
      </section>
    </main>
  );
}
