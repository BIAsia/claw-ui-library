import Link from "next/link";
import { getCaseGroups } from "@/lib/cases";

const statusLabel = {
  queued: "Queued",
  "in-progress": "In progress",
  done: "Done",
} as const;

const sectionAccent = {
  "batch-2026-03-18-b": "border border-white/16 bg-white/[0.06] text-white",
  archive: "border border-white/12 bg-white/[0.03] text-white/78",
} as const;

const featuredSlugs = new Set([
  "case-003-julie-doucet",
  "case-004-boookin-shop",
  "case-005-self-esteem-editorial",
  "case-010-dev-agency-hero",
  "case-019-bbbank-mobile-dashboard",
  "case-020-radinal-pixel-font",
  "case-021-cygnito-mono-poster",
]);

export default function Home() {
  const groups = getCaseGroups();
  const allCases = groups.flatMap((group) => group.cases);
  const featuredCases = allCases.filter((item) => featuredSlugs.has(item.slug));

  return (
    <main className="min-h-screen bg-black px-4 py-6 text-white md:px-8 md:py-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-4xl">
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/42">
                claw-ui-library
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Pixel-accurate UI reconstruction cases
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/68 md:text-[15px]">
                首页先回到高效阅览：更高密度、更稳定的黑白灰、更清楚的优先级。上方展示精选案例，下方保留按批次浏览。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/72">
              <span className="rounded-full border border-white/10 px-3 py-2 text-white/52">
                {allCases.length} cases
              </span>
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className={`rounded-full px-4 py-2 transition hover:border-white/28 hover:bg-white/[0.08] ${sectionAccent[group.id]}`}
                >
                  {group.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        {featuredCases.length > 0 ? (
          <section className="scroll-mt-10 border border-white/10 bg-white/[0.025] p-4 md:p-5">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex border border-white/14 bg-white/[0.06] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/88">
                  Highlight selection
                </div>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
                  Recommended first look
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-white/60">
                先看这 7 个：003 / 004 / 005 / 010 / 019 / 020 / 021。它们单独放在顶部，方便快速 review 风格质量和完成度。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
              {featuredCases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/ui/${item.slug}`}
                  className="group border border-white/10 bg-black transition hover:border-white/28 hover:bg-white/[0.03]"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-white/[0.04]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2 border-t border-white/10 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-medium leading-5 text-white/92">
                        {item.title}
                      </h3>
                      <span className="shrink-0 border border-white/12 px-2 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/66">
                        {statusLabel[item.status]}
                      </span>
                    </div>
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/42">
                      {item.slug.replace("case-", "").replace(/-/g, " ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-10">
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <div
                    className={`inline-flex px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] ${sectionAccent[group.id]}`}
                  >
                    {group.label}
                  </div>
                  <h2 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
                    {group.id === "batch-2026-03-18-b"
                      ? "Fresh Pinterest intake"
                      : "Previous production wave"}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/56">{group.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
                {group.cases.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/ui/${item.slug}`}
                    className="group overflow-hidden border border-white/10 bg-white/[0.02] transition hover:border-white/25 hover:bg-white/[0.04]"
                  >
                    <div className="aspect-[16/11] w-full bg-white/[0.04]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-3 border-t border-white/10 p-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-medium text-white/92">
                          {item.title}
                        </h3>
                        <p className="mt-1 truncate text-[0.68rem] uppercase tracking-[0.22em] text-white/42">
                          {item.slug}
                        </p>
                      </div>
                      <span className="shrink-0 border border-white/12 px-2 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/66">
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
