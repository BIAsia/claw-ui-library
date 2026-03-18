import Link from "next/link";
import { getCaseGroups } from "@/lib/cases";

const statusLabel = {
  queued: "Queued",
  "in-progress": "In progress",
  done: "Done",
} as const;

const sectionAccent = {
  "batch-2026-03-18-b": "bg-[#18ff17] text-black",
  archive: "border border-white/12 bg-white/[0.04] text-white/80",
} as const;

export default function Home() {
  const groups = getCaseGroups();

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
            claw-ui-library
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Pixel-accurate UI reconstruction cases
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
                One image in, one deployed page out. Each Pinterest wave keeps its own viewing lane so review stays clean and batch-to-batch drift stays obvious.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em]">
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className={`rounded-full px-4 py-2 transition hover:opacity-100 ${sectionAccent[group.id]}`}
                >
                  {group.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-10">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] ${sectionAccent[group.id]}`}>
                    {group.label}
                  </div>
                  <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                    {group.id === "batch-2026-03-18-b" ? "Fresh Pinterest intake" : "Previous production wave"}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/55">{group.description}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.cases.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/ui/${item.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-white/25 hover:bg-white/[0.05]"
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
                        <h3 className="text-lg font-medium">{item.title}</h3>
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
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
