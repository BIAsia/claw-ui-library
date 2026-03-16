import Link from "next/link";
import { getAllCases } from "@/lib/cases";

const statusLabel = {
  queued: "Queued",
  "in-progress": "In progress",
  done: "Done",
} as const;

export default function Home() {
  const cases = getAllCases();

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-3 border-b border-white/10 pb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
            claw-ui-library
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Pixel-accurate UI reconstruction cases
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-white/65 md:text-base">
            One image in, one deployed page out. Every case keeps its own source
            reference, implementation route, and reconstruction status.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {cases.map((item) => (
            <Link
              key={item.slug}
              href={`/ui/${item.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="aspect-[4/5] w-full bg-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">
                    {item.slug}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  {statusLabel[item.status]}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
