"use client";

import { useEffect, useMemo, useState } from "react";

const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const days = Array.from({ length: 31 }, (_, index) => index + 1);
const statements = [
  ["31.01.24", "DOWNLOAD"],
  ["28.02.24", "DOWNLOAD"],
  ["31.03.24", "DOWNLOAD"],
] as const;
const debits = [
  ["Rent", "£930.00"],
  ["Bills", "£67.00"],
  ["Wifi", "£29.00"],
] as const;
const spend = [
  ["Groceries", 0.74],
  ["Bills", 0.66],
  ["Eating Out", 0.58],
  ["Shopping", 0.5],
  ["Transport", 0.62],
] as const;

function useCountUp(target: number, duration = 1800, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = target * eased;
      setValue(Number(next.toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, decimals]);

  return value;
}

function formatCurrency(value: number, decimals = 0) {
  return `£${value.toLocaleString("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={`rounded-[1.9rem] p-5 shadow-[0_18px_30px_rgba(0,0,0,0.18)] ${className ?? ""}`}>{children}</article>;
}

function AnimatedAmount({ value, decimals = 0, className = "" }: { value: number; decimals?: number; className?: string }) {
  const animated = useCountUp(value, 1800, decimals);
  return <span className={className}>{formatCurrency(animated, decimals)}</span>;
}

function AnimatedPercent({ value, className = "" }: { value: number; className?: string }) {
  const animated = useCountUp(value, 1500, 2);
  return <span className={className}>+{animated.toFixed(2)}%</span>;
}

function AnimatedRatioBar({ ratio }: { ratio: number }) {
  const animated = useCountUp(ratio * 100, 1600, 1);
  return (
    <div className="h-1.5 rounded-full bg-black/12">
      <span className="block h-full rounded-full bg-[#101010] transition-[width] duration-150" style={{ width: `${animated}%` }} />
    </div>
  );
}

export function Case019BBBankMobileDashboard() {
  const monthly = useCountUp(259, 1600, 2);
  const remaining = useCountUp(156784, 2100, 0);
  const savings = useCountUp(13667, 1900, 0);
  const goalProgress = useMemo(() => Math.min((savings / 15000) * 100, 100), [savings]);
  const sliderProgress = useCountUp(58, 1600, 1);

  return (
    <main className="min-h-screen bg-[#070707] px-4 py-8 text-[#0f0f0f] sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1120px] items-center justify-center">
        <div className="grid w-full max-w-[900px] gap-4 lg:grid-cols-[1fr_1.1fr_1.05fr]">
          <div className="grid gap-4">
            <Panel className="bg-[#040404] text-white">
              <h1 className="text-[clamp(2.8rem,7vw,4.3rem)] leading-[0.86] font-[600] tracking-[-0.09em]">Monday</h1>
              <p className="mt-1 text-[1.7rem] tracking-[-0.06em] text-white/35">March 17th</p>
            </Panel>

            <Panel className="bg-[#c4b6df] text-[#101010]">
              <p className="max-w-[9ch] text-[clamp(1.7rem,3.6vw,2.3rem)] leading-[0.95] font-[600] tracking-[-0.07em]">
                We changed how the world moves its money. But that was just the start.
              </p>
              <p className="mt-3 max-w-[11ch] text-[1.8rem] leading-[0.95] font-[600] tracking-[-0.07em]">
                Making money do more, for more people is next.
              </p>
            </Panel>

            <Panel className="bg-[#050505] text-white">
              <div className="flex justify-between text-[0.62rem] tracking-[0.18em] text-white/40">
                {weekdays.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-7 gap-y-2 text-center text-[1.8rem] tracking-[-0.05em]">
                {days.map((day) => (
                  <span
                    key={day}
                    className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full ${day === 15 ? "bg-[#ff5a2b] text-black" : "text-white"}`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </Panel>

            <Panel className="bg-[#a89f00] text-[#111]">
              <div className="inline-flex rounded-full border border-[#111] px-4 py-1.5 text-[1rem]">Growth</div>
              <p className="mt-5 max-w-[18ch] text-[1rem] leading-[1.1]">Calculated on average engagement, we use AI to get the numbers.</p>
              <div className="mt-8 grid h-40 grid-cols-12 items-end gap-2">
                {Array.from({ length: 12 }, (_, index) => 30 + ((index * 17) % 68)).map((height, index) => (
                  <span key={index} className="rounded-t-full bg-[#101010] transition-[height] duration-200" style={{ height: `${height}%` }} />
                ))}
              </div>
            </Panel>
          </div>

          <div className="grid gap-4">
            <Panel className="bg-[#f8ea2c] text-[#111]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.9rem] uppercase tracking-[0.14em] text-black/55">Monthly</p>
                  <p className="mt-1 text-[2.1rem] leading-none font-[700] tracking-[-0.08em]">{formatCurrency(monthly, 2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.9rem] uppercase tracking-[0.14em] text-black/55">Remaining</p>
                  <p className="mt-1 text-[2.1rem] leading-none font-[700] tracking-[-0.08em]">{formatCurrency(remaining, 0)}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-[0.85rem] text-black/55">
                <span>0</span>
                <div className="relative h-2 flex-1 rounded-full bg-black/20">
                  <span className="absolute left-0 top-0 h-full rounded-full bg-black/15 transition-[width] duration-150" style={{ width: `${sliderProgress}%` }} />
                  <span className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#111] bg-[#f8ea2c] transition-[left] duration-150" style={{ left: `${sliderProgress}%` }} />
                </div>
                <span>500</span>
              </div>
            </Panel>

            <Panel className="bg-[#9e9300] text-[#111]">
              <div className="flex items-center justify-between text-[0.9rem] uppercase tracking-[0.12em]">
                <span>Statements</span>
                <span>•••</span>
              </div>
              <div className="mt-4 space-y-3">
                {statements.map(([date, action]) => (
                  <div key={date} className="flex items-center justify-between gap-4">
                    <span className="text-[2rem] leading-none tracking-[-0.08em]">{date}</span>
                    <span className="text-[0.9rem] tracking-[0.1em]">{action}</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel className="bg-[#eef2e7] text-[#101010]">
              <div className="flex items-center justify-between text-[0.9rem] uppercase tracking-[0.12em]">
                <span>Direct Debits</span>
                <span>•••</span>
              </div>
              <div className="mt-4 space-y-2.5 text-[2rem] leading-none tracking-[-0.08em]">
                {debits.map(([name, amount]) => (
                  <div key={name} className="flex items-center justify-between gap-4">
                    <span>{name}</span>
                    <span>{amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-black/10 pt-4">
                <p className="text-[0.9rem] uppercase tracking-[0.12em] text-black/55">Spending Limits</p>
                <div className="mt-4 space-y-3">
                  {spend.map(([label, ratio]) => (
                    <div key={label} className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <span className="text-[1rem] tracking-[-0.04em]">{label}</span>
                      <AnimatedRatioBar ratio={ratio} />
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel className="bg-[#bfb1db] text-[#111]">
              <p className="text-[0.9rem] uppercase tracking-[0.12em] text-black/55">Savings</p>
              <p className="mt-6 text-[clamp(3rem,7vw,4.4rem)] leading-none font-[700] tracking-[-0.1em]">
                <AnimatedAmount value={13667} decimals={0} />
              </p>
              <div className="mt-6 flex items-center justify-between text-[0.88rem] text-black/55">
                <span>Your Goal</span>
                <span>£15000</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-black/10">
                <span className="block h-full rounded-full bg-[#111] transition-[width] duration-150" style={{ width: `${goalProgress}%` }} />
              </div>
            </Panel>
          </div>

          <div className="grid gap-4">
            <Panel className="bg-[#050505] text-white">
              <div className="flex flex-wrap gap-2 text-[0.95rem]">
                {["Wallet", "Account", "EN"].map((label) => (
                  <span key={label} className="rounded-full border border-white/55 px-4 py-1.5 tracking-[-0.03em]">
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-full bg-[#eef2e7] px-5 py-3 text-[#111]">
                  <span className="text-[1.8rem]">₿</span>
                  <span className="text-[2rem] leading-none tracking-[-0.08em]">TRADE CRYPTO</span>
                </div>
                <div className="flex items-center justify-between rounded-full bg-[#ff5a2b] px-5 py-3 text-[#111]">
                  <span className="text-[1.8rem]">#</span>
                  <span className="text-[2rem] leading-none tracking-[-0.08em]">BANKWITHBBBANK</span>
                </div>
              </div>
            </Panel>

            <Panel className="bg-[#f8ea2c] text-[#111]">
              <div className="inline-flex rounded-full border border-[#111] px-4 py-1.5 text-[1rem]">Engagement</div>
              <p className="mt-5 text-[clamp(3rem,8vw,5rem)] leading-none font-[700] tracking-[-0.1em]">
                <AnimatedPercent value={17.43} />
              </p>
              <p className="mt-2 text-[1rem]">Compared to last year</p>
              <div className="mt-6 grid grid-cols-[1.1fr_0.8fr] gap-3">
                <div className="h-28 bg-black" />
                <div className="flex flex-col justify-between">
                  <div className="h-10 bg-black/22" />
                  <p className="text-[0.78rem] leading-[1.1] text-black/55">Estimated +15.78%</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-full border border-[#111] px-4 py-3 text-[1.4rem] tracking-[-0.06em]">
                <span>←</span>
                <span>February 2024</span>
                <span>→</span>
              </div>
            </Panel>

            <Panel className="bg-[#ff5a2b] text-[#111]">
              <div className="flex items-center justify-between text-[2rem] leading-none tracking-[-0.08em]">
                <span>Account</span>
                <span>⌘</span>
              </div>
              <div className="mt-5 space-y-3 text-[2rem] leading-none tracking-[-0.08em]">
                {["Learn", "Refer a Friend", "Activity", "Account", "Transfer", "Help"].map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </Panel>

            <Panel className="bg-[#eef2e7] text-[#111]">
              <div className="flex items-center justify-between text-[0.9rem] text-black/55">
                <span>Fabio XM</span>
                <span>21pt ⊕</span>
              </div>
              <p className="mt-4 text-[2.5rem] leading-[0.9] tracking-[-0.09em]">
                ABCDEFGHIJKLMN
                <br />
                OPQRSTUVWXYZ
                <br />
                abcdefghijklmn
                <br />
                opqrstuvwxyz
                <br />
                0123456789?!
              </p>
            </Panel>

            <Panel className="flex items-center justify-center bg-[#bfb1db] text-[#111]">
              <p className="text-[2.6rem] leading-none tracking-[-0.08em]">i BBBANK.DE</p>
            </Panel>
          </div>
        </div>
      </section>
    </main>
  );
}
