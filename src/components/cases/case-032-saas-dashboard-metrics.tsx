"use client";

import { useEffect, useState } from "react";

function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

const kpis = [
  { label: "Monthly Revenue", value: 284500, prefix: "$", suffix: "", change: "+12.4%", up: true },
  { label: "Active Users", value: 18342, prefix: "", suffix: "", change: "+8.1%", up: true },
  { label: "Churn Rate", value: 2.3, prefix: "", suffix: "%", change: "-0.4%", up: false },
  { label: "Avg Session", value: 4.7, prefix: "", suffix: "m", change: "+0.6m", up: true },
] as const;

const channels = [
  { name: "Organic Search", pct: 42, color: "#2563eb" },
  { name: "Direct", pct: 28, color: "#7c3aed" },
  { name: "Referral", pct: 18, color: "#059669" },
  { name: "Social", pct: 12, color: "#d97706" },
] as const;

const tableRows = [
  { page: "/dashboard", views: "24,810", bounce: "18%", time: "4:32" },
  { page: "/pricing", views: "18,205", bounce: "34%", time: "2:14" },
  { page: "/features", views: "12,440", bounce: "22%", time: "3:08" },
  { page: "/blog/launch", views: "9,330", bounce: "41%", time: "1:55" },
  { page: "/docs", views: "7,820", bounce: "15%", time: "6:47" },
] as const;

function KpiCard({ label, value, prefix, suffix, change, up }: typeof kpis[number]) {
  const animated = useCountUp(typeof value === "number" && value > 10 ? Math.round(value) : 0, 1800);
  const display = value > 10 ? `${prefix}${animated.toLocaleString()}${suffix}` : `${prefix}${value}${suffix}`;
  return (
    <div className="rounded-[1.1rem] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6b7280]">{label}</p>
      <p className="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-none tracking-[-0.04em] text-[#111827]">
        {display}
      </p>
      <p className={`mt-2 text-[0.75rem] font-semibold ${up ? "text-[#059669]" : "text-[#dc2626]"}`}>
        {change} vs last month
      </p>
    </div>
  );
}

export function Case032SaasDashboardMetrics() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        {/* Top nav */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[1.1rem] font-bold tracking-[-0.03em] text-[#111827]">Analytics Overview</h1>
            <p className="text-[0.75rem] text-[#6b7280]">March 2024 · Updated just now</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-[0.75rem] font-semibold text-[#374151] shadow-sm">
              Last 30 days
            </button>
            <button className="rounded-lg bg-[#111827] px-4 py-2 text-[0.75rem] font-semibold text-white shadow-sm">
              Export
            </button>
          </div>
        </header>

        {/* KPI row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => <KpiCard key={k.label} {...k} />)}
        </div>

        {/* Charts row */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
          {/* Sparkline-style bar chart */}
          <div className="rounded-[1.1rem] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6b7280]">Revenue Trend</p>
                <p className="mt-1 text-[1.6rem] font-semibold tracking-[-0.04em] text-[#111827]">$284,500</p>
              </div>
              <span className="rounded-full bg-[#dcfce7] px-2.5 py-1 text-[0.68rem] font-semibold text-[#059669]">+12.4%</span>
            </div>
            <div className="mt-6 flex h-28 items-end gap-1.5">
              {[55,62,48,71,68,82,76,90,84,88,94,100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-[#2563eb] transition-all duration-700"
                  style={{ height: `${h}%`, opacity: i === 11 ? 1 : 0.25 + (i / 11) * 0.45 }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[0.6rem] text-[#9ca3af]">
              {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Channel breakdown */}
          <div className="rounded-[1.1rem] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#6b7280]">Traffic Sources</p>
            <div className="space-y-4">
              {channels.map(({ name, pct, color }) => (
                <div key={name}>
                  <div className="flex justify-between text-[0.78rem]">
                    <span className="font-medium text-[#374151]">{name}</span>
                    <span className="font-semibold text-[#111827]">{pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-[#f3f4f6]">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, backgroundColor: color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 rounded-[1.1rem] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between border-b border-[#f3f4f6] px-6 py-4">
            <p className="text-[0.75rem] font-semibold text-[#111827]">Top Pages</p>
            <span className="text-[0.68rem] font-semibold text-[#2563eb]">View all →</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f9fafb]">
                {["Page","Views","Bounce Rate","Avg Time"].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#9ca3af]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ page, views, bounce, time }, i) => (
                <tr key={page} className={i < tableRows.length - 1 ? "border-b border-[#f9fafb]" : ""}>
                  <td className="px-6 py-3.5 font-mono text-[0.78rem] text-[#374151]">{page}</td>
                  <td className="px-6 py-3.5 text-[0.78rem] font-semibold text-[#111827]">{views}</td>
                  <td className="px-6 py-3.5 text-[0.78rem] text-[#6b7280]">{bounce}</td>
                  <td className="px-6 py-3.5 text-[0.78rem] text-[#6b7280]">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
