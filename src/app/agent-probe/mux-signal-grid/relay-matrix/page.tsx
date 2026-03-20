"use client";

import { useEffect, useMemo, useState } from "react";

type SignalState = "LIVE" | "IDLE" | "DEGRADED" | "LOST";
type SignalType = "VIDEO" | "AUDIO" | "DATA";

type MatrixCell = {
  id: string;
  channel: string;
  signalType: SignalType;
  source: string;
  bitrate: number;
  state: SignalState;
  cols?: string;
  rows?: string;
  band?: "dense" | "wide" | "tall";
};

const stateStyles: Record<
  SignalState,
  {
    block: string;
    border: string;
    glow: string;
    text: string;
    label: string;
    meter: string;
  }
> = {
  LIVE: {
    block: "#00FF41",
    border: "rgba(0,255,65,0.4)",
    glow: "0 0 26px rgba(0,255,65,0.22)",
    text: "#021b08",
    label: "UPLINK LOCK",
    meter: "linear-gradient(90deg, rgba(0,255,65,0.25) 0%, rgba(0,255,65,0.95) 100%)",
  },
  DEGRADED: {
    block: "#FFB800",
    border: "rgba(255,184,0,0.42)",
    glow: "0 0 22px rgba(255,184,0,0.22)",
    text: "#221600",
    label: "ERROR RATE HIGH",
    meter: "linear-gradient(90deg, rgba(255,184,0,0.2) 0%, rgba(255,184,0,0.96) 100%)",
  },
  LOST: {
    block: "#FF2D2D",
    border: "rgba(255,45,45,0.4)",
    glow: "0 0 26px rgba(255,45,45,0.22)",
    text: "#220404",
    label: "CARRIER LOST",
    meter: "linear-gradient(90deg, rgba(255,45,45,0.18) 0%, rgba(255,45,45,0.96) 100%)",
  },
  IDLE: {
    block: "#1A3A5C",
    border: "rgba(77,133,183,0.28)",
    glow: "0 0 18px rgba(26,58,92,0.3)",
    text: "#d6e8ff",
    label: "STANDBY PATH",
    meter: "linear-gradient(90deg, rgba(93,151,202,0.22) 0%, rgba(39,101,155,0.88) 100%)",
  },
};

const possibleStates: SignalState[] = ["LIVE", "IDLE", "DEGRADED", "LOST"];

const initialCells: MatrixCell[] = [
  { id: "north-feed", channel: "CH-01", signalType: "VIDEO", source: "NORTH SAT", bitrate: 22.4, state: "LIVE", cols: "md:col-span-2", rows: "md:row-span-2", band: "wide" },
  { id: "aux-audio", channel: "CH-02", signalType: "AUDIO", source: "FLOOR BUS", bitrate: 3.2, state: "LIVE" },
  { id: "telemetry", channel: "CH-03", signalType: "DATA", source: "MUX CTRL", bitrate: 1.1, state: "IDLE" },
  { id: "stadium-a", channel: "CH-04", signalType: "VIDEO", source: "STAGE CAM", bitrate: 18.7, state: "DEGRADED", rows: "md:row-span-2", band: "tall" },
  { id: "return-a", channel: "CH-05", signalType: "AUDIO", source: "IFB RETURN", bitrate: 2.4, state: "LIVE" },
  { id: "wireless-1", channel: "CH-06", signalType: "DATA", source: "RF BRIDGE", bitrate: 0.9, state: "LOST" },
  { id: "south-feed", channel: "CH-07", signalType: "VIDEO", source: "SOUTH LINK", bitrate: 16.3, state: "LIVE", cols: "md:col-span-2", band: "wide" },
  { id: "iso-rec", channel: "CH-08", signalType: "VIDEO", source: "ISO REC", bitrate: 14.1, state: "IDLE" },
  { id: "commentary", channel: "CH-09", signalType: "AUDIO", source: "COMM A", bitrate: 1.8, state: "DEGRADED" },
  { id: "router", channel: "CH-10", signalType: "DATA", source: "ROUTER BUS", bitrate: 1.3, state: "LIVE" },
  { id: "drone", channel: "CH-11", signalType: "VIDEO", source: "AERIAL RX", bitrate: 19.4, state: "LIVE", rows: "md:row-span-2", band: "tall" },
  { id: "latency-a", channel: "CH-12", signalType: "DATA", source: "TIMECODE", bitrate: 0.7, state: "IDLE" },
  { id: "backup-a", channel: "CH-13", signalType: "VIDEO", source: "BACKUP SAT", bitrate: 17.2, state: "LIVE" },
  { id: "crowd", channel: "CH-14", signalType: "AUDIO", source: "AMB FX", bitrate: 2.1, state: "LIVE" },
  { id: "ad-insert", channel: "CH-15", signalType: "DATA", source: "ADS CTRL", bitrate: 0.8, state: "DEGRADED" },
  { id: "remote-b", channel: "CH-16", signalType: "VIDEO", source: "REMOTE B", bitrate: 15.6, state: "LOST" },
];

function randomStateExcluding(current: SignalState) {
  const options = possibleStates.filter((state) => state !== current);
  return options[Math.floor(Math.random() * options.length)] ?? current;
}

function formatClock(now: Date) {
  return now.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  });
}

export default function RelayMatrixPage() {
  const [cells, setCells] = useState(initialCells);
  const [clock, setClock] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClock(formatClock(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let timeoutId: number;

    const schedule = () => {
      const delay = 800 + Math.floor(Math.random() * 401);

      timeoutId = window.setTimeout(() => {
        setCells((current) => {
          const next = [...current];
          const flipCount = 2 + Math.floor(Math.random() * 2);
          const indexes = new Set<number>();

          while (indexes.size < flipCount) {
            indexes.add(Math.floor(Math.random() * next.length));
          }

          indexes.forEach((index) => {
            const cell = next[index];
            const nextState = randomStateExcluding(cell.state);
            const bitrateShift = Math.random() * 4 - 2;
            const nextBitrate = Math.max(0.2, Number((cell.bitrate + bitrateShift).toFixed(1)));

            next[index] = {
              ...cell,
              state: nextState,
              bitrate: nextState === "LOST" ? 0 : nextBitrate,
            };
          });

          return next;
        });

        schedule();
      }, delay);
    };

    schedule();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const totals = useMemo(() => {
    return cells.reduce(
      (acc, cell) => {
        acc[cell.state] += 1;
        return acc;
      },
      { LIVE: 0, IDLE: 0, DEGRADED: 0, LOST: 0 },
    );
  }, [cells]);

  return (
    <main className="min-h-screen bg-[#080808] px-3 py-3 text-white sm:px-4 lg:px-5">
      <section className="mx-auto max-w-[1560px] border border-white/10 bg-[#080808] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:p-4 lg:p-5">
        <div className="relative overflow-hidden border border-white/12 bg-[#0b0b0b] px-4 py-3 font-mono sm:px-5">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_100%,100%_22px]" />
          <div className="absolute inset-y-0 left-[34%] w-px bg-[#00FF41]/20" />
          <div className="absolute inset-y-0 right-[18%] w-px bg-[#FFB800]/10" />

          <div className="relative flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.36em] text-white/45">
                <span className="h-2 w-2 rounded-full bg-[#00FF41] shadow-[0_0_12px_rgba(0,255,65,0.9)]" />
                <span>Relay matrix</span>
                <span>Primary control wall</span>
              </div>
              <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
                <h1 className="text-[clamp(2rem,4vw,4.2rem)] font-semibold uppercase tracking-[0.32em] text-white">
                  RELAY MATRIX
                </h1>
                <div className="pb-1 text-[0.7rem] uppercase tracking-[0.34em] text-white/45">
                  {cells.length.toString().padStart(2, "0")} channels online
                </div>
              </div>
            </div>

            <div className="grid gap-2 text-[0.68rem] uppercase tracking-[0.26em] sm:grid-cols-3 lg:min-w-[520px]">
              <div className="border border-white/12 bg-black/35 px-3 py-2 text-white/75">
                <div className="mb-1 text-white/35">UTC clock</div>
                <div className="text-[1.2rem] text-[#00FF41]">{clock}</div>
              </div>
              <div className="border border-white/12 bg-black/35 px-3 py-2 text-white/75">
                <div className="mb-1 text-white/35">Signal split</div>
                <div className="flex gap-3 text-[0.72rem]">
                  <span className="text-[#00FF41]">L {totals.LIVE}</span>
                  <span className="text-[#1f7dbf]">I {totals.IDLE}</span>
                  <span className="text-[#FFB800]">D {totals.DEGRADED}</span>
                  <span className="text-[#FF2D2D]">X {totals.LOST}</span>
                </div>
              </div>
              <div className="border border-white/12 bg-black/35 px-3 py-2 text-white/75">
                <div className="mb-1 text-white/35">Wall mode</div>
                <div className="text-white">MUX / BROADCAST / LIVE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid auto-rows-[130px] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[140px] xl:auto-rows-[150px]">
          {cells.map((cell) => {
            const style = stateStyles[cell.state];
            const meterWidth =
              cell.state === "LIVE" ? 88 : cell.state === "IDLE" ? 36 : cell.state === "DEGRADED" ? 58 : 7;

            return (
              <article
                key={cell.id}
                className={`group relative overflow-hidden border p-3 font-mono transition-transform duration-300 hover:-translate-y-0.5 ${cell.cols ?? ""} ${cell.rows ?? ""}`}
                style={{
                  backgroundColor: style.block,
                  color: style.text,
                  borderColor: style.border,
                  boxShadow: `${style.glow}, inset 0 0 0 1px rgba(255,255,255,0.06)`,
                }}
              >
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:100%_18px,18px_100%]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.11)_0%,transparent_34%,rgba(0,0,0,0.18)_100%)]" />
                <div
                  className="absolute inset-x-0 top-0 h-[3px] opacity-90"
                  style={{
                    background:
                      cell.state === "LIVE"
                        ? "repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0 10px, rgba(255,255,255,0.75) 10px 18px)"
                        : cell.state === "DEGRADED"
                          ? "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 6px, rgba(255,255,255,0.55) 6px 12px)"
                          : cell.state === "LOST"
                            ? "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0 4px, rgba(0,0,0,0.15) 4px 10px)"
                            : "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 14px, rgba(255,255,255,0.32) 14px 20px)",
                  }}
                />
                <div
                  className="absolute inset-y-0 right-0 w-[14%] opacity-50"
                  style={{
                    background:
                      cell.state === "LOST"
                        ? "linear-gradient(180deg, rgba(0,0,0,0.34), rgba(255,255,255,0.08), rgba(0,0,0,0.34))"
                        : "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.22), rgba(255,255,255,0.04))",
                  }}
                />

                <div className="relative flex h-full flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[0.56rem] uppercase tracking-[0.3em] opacity-70">{cell.signalType} route</div>
                      <div className="mt-1 text-[1.35rem] font-semibold tracking-[0.12em]">{cell.channel}</div>
                      <div className="mt-1 text-[0.62rem] uppercase tracking-[0.24em] opacity-75">{cell.source}</div>
                    </div>
                    <div className="text-right text-[0.55rem] uppercase tracking-[0.28em] opacity-72">
                      <div>node</div>
                      <div className="mt-1 text-[0.82rem] opacity-100">{cell.id.slice(0, 4)}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.26em]">
                      <span>{style.label}</span>
                      <span>{cell.state}</span>
                    </div>
                    <div className="h-3 overflow-hidden border border-black/25 bg-black/20 p-[2px]">
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${meterWidth}%`,
                          background: style.meter,
                          boxShadow:
                            cell.state === "LIVE"
                              ? "0 0 12px rgba(0,255,65,0.55)"
                              : cell.state === "DEGRADED"
                                ? "0 0 10px rgba(255,184,0,0.45)"
                                : cell.state === "LOST"
                                  ? "0 0 12px rgba(255,45,45,0.45)"
                                  : "0 0 8px rgba(83,135,184,0.35)",
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[0.56rem] uppercase tracking-[0.22em] opacity-82">
                      <div>
                        <div className="opacity-60">bitrate</div>
                        <div className="mt-1 text-[0.76rem] opacity-100">{cell.bitrate.toFixed(1)} Mb</div>
                      </div>
                      <div>
                        <div className="opacity-60">carrier</div>
                        <div className="mt-1 text-[0.76rem] opacity-100">{cell.state === "LOST" ? "--" : "LOCK"}</div>
                      </div>
                      <div>
                        <div className="opacity-60">path</div>
                        <div className="mt-1 text-[0.76rem] opacity-100">{cell.band === "wide" ? "DUAL" : cell.band === "tall" ? "STACK" : "SGL"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
