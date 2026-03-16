import { notFound } from "next/navigation";
import { getAllCases, getCaseBySlug } from "@/lib/cases";
import { renderCase } from "@/components/cases/registry";

export function generateStaticParams() {
  return getAllCases().map((item) => ({ slug: item.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) notFound();

  const implementation = renderCase(slug);

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-6 py-8 text-white md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-white/40">
              reconstruction case
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
              {item.title}
            </h1>
            <p className="mt-2 text-sm text-white/55">/{item.slug}</p>
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/65">
            {item.status}
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.26em] text-white/40">
              reference
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={`${item.title} reference`}
              className="w-full rounded-2xl border border-white/10"
            />
          </aside>

          <section className="rounded-3xl border border-dashed border-white/15 bg-black/40 p-5 md:p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-white/40">
              live implementation
            </p>
            <div className="mt-4 min-h-[70vh] rounded-[28px] border border-white/10 bg-[#111] p-4 md:p-6">
              {implementation ?? (
                <div className="flex min-h-[60vh] items-center justify-center text-center text-white/35">
                  <div>
                    <p className="text-xl font-medium text-white/80">Work in progress</p>
                    <p className="mt-2 max-w-md text-sm leading-6">
                      This case shell is ready. The pixel-accurate implementation for{" "}
                      <span className="text-white">{item.title}</span>
                      {" "}will be mounted here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
