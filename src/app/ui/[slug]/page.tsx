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

  if (!implementation) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6 text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">work in progress</p>
          <h1 className="mt-3 text-2xl font-semibold">{item.title}</h1>
          <p className="mt-2 text-sm text-white/60">/{item.slug}</p>
        </div>
      </main>
    );
  }

  return implementation;
}
