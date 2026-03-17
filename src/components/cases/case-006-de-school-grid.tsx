"use client";

import { useEffect, useMemo, useState } from "react";
import { Barlow_Condensed, Instrument_Sans } from "next/font/google";

const displayFace = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-case-006-display",
  weight: ["400", "500", "600", "700", "800"],
});

const uiFace = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-case-006-ui",
  weight: ["400", "500", "600", "700"],
});

type PointerState = {
  x: number;
  y: number;
};

type Track = "All" | "Club" | "Talk" | "Live" | "Screen";

type Session = {
  id: string;
  code: string;
  time: string;
  room: string;
  floor: string;
  title: string;
  track: Exclude<Track, "All">;
  status: "Live" | "Next" | "Later";
  duration: string;
  note: string;
  line1: string;
  line2: string;
  tags: string[];
};

type RoomLayer = {
  name: string;
  level: string;
  open: string;
  vibe: string;
};

const sessions: Session[] = [
  {
    id: "entrance-grid",
    code: "DS-01",
    time: "20:00",
    room: "Entrance Grid",
    floor: "Ground",
    title: "Threshold Instructions",
    track: "Talk",
    status: "Live",
    duration: "25 min",
    note: "A spoken welcome built from venue rules, fragments, and timing cards.",
    line1: "Threshold",
    line2: "Instructions",
    tags: ["spoken text", "wayfinding", "warm-up"],
  },
  {
    id: "hall-01",
    code: "DS-02",
    time: "20:45",
    room: "Hall 01",
    floor: "Basement",
    title: "Rigid Bodies, Loose Crowd",
    track: "Club",
    status: "Next",
    duration: "60 min",
    note: "Percussive club set with dry low-end, clipped voice loops, and minimal light shifts.",
    line1: "Rigid Bodies,",
    line2: "Loose Crowd",
    tags: ["club", "percussion", "strobe-safe"],
  },
  {
    id: "gallery-stack",
    code: "DS-03",
    time: "21:15",
    room: "Gallery Stack",
    floor: "Level 1",
    title: "Poster as Interface",
    track: "Screen",
    status: "Later",
    duration: "38 min",
    note: "Short moving-image loop on grids, signage systems, and municipal typography.",
    line1: "Poster as",
    line2: "Interface",
    tags: ["screening", "archive", "graphic design"],
  },
  {
    id: "music-room",
    code: "DS-04",
    time: "22:00",
    room: "Music Room",
    floor: "Level 1",
    title: "Voice Memo Ensemble",
    track: "Live",
    status: "Later",
    duration: "45 min",
    note: "Live collage for strings, sampler, and compressed field recordings from tram platforms.",
    line1: "Voice Memo",
    line2: "Ensemble",
    tags: ["live", "strings", "field recording"],
  },
  {
    id: "hall-02",
    code: "DS-05",
    time: "23:10",
    room: "Hall 02",
    floor: "Basement",
    title: "Angle of Release",
    track: "Club",
    status: "Later",
    duration: "90 min",
    note: "Linear techno session with strict pacing, no filler, and carefully timed pressure changes.",
    line1: "Angle of",
    line2: "Release",
    tags: ["club", "techno", "peak"],
  },
  {
    id: "roof-notes",
    code: "DS-06",
    time: "00:30",
    room: "Roof Notes",
    floor: "Top",
    title: "Afterimage for Small Speakers",
    track: "Talk",
    status: "Later",
    duration: "20 min",
    note: "A compact closing transmission: notes on city rhythms, departure routes, and morning light.",
    line1: "Afterimage for",
    line2: "Small Speakers",
    tags: ["closing", "essay", "ambient"],
  },
];

const roomLayers: RoomLayer[] = [
  { name: "Entrance Grid", level: "G", open: "19:30", vibe: "signage / tickets / lockers" },
  { name: "Hall 01", level: "B1", open: "20:45", vibe: "club pressure / long room" },
  { name: "Gallery Stack", level: "L1", open: "21:15", vibe: "screening / white wall" },
  { name: "Music Room", level: "L1", open: "22:00", vibe: "seated live set" },
  { name: "Hall 02", level: "B1", open: "23:10", vibe: "late floor / harder edge" },
  { name: "Roof Notes", level: "T", open: "00:30", vibe: "wind / small speakers" },
];

const tracks: Track[] = ["All", "Club", "Talk", "Live", "Screen"];

function QueueRow({
  session,
  active,
  onSelect,
}: {
  session: Session;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      className={`group grid w-full grid-cols-[auto_1fr_auto] items-start gap-3 border-t border-black/75 px-4 py-3 text-left transition first:border-t-0 hover:bg-black hover:text-[#f4f0e8] focus-visible:bg-black focus-visible:text-[#f4f0e8] focus-visible:outline-none ${active ? "bg-black text-[#f4f0e8]" : "bg-transparent text-[#11110f]"}`}
    >
      <div className="pt-0.5 text-[0.58rem] uppercase tracking-[0.18em] opacity-60">{session.time}</div>
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.18em] opacity-60">{session.code} / {session.room}</p>
        <p className="mt-1 text-[1.05rem] leading-[0.95] tracking-[-0.04em]">{session.title}</p>
      </div>
      <div className="pt-0.5 text-[0.58rem] uppercase tracking-[0.18em] opacity-60 group-hover:opacity-100">
        {session.status}
      </div>
    </button>
  );
}

function SessionCell({
  session,
  active,
  onSelect,
}: {
  session: Session;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      className={`group relative flex min-h-[10rem] flex-col justify-between border-r border-t border-black/75 p-4 text-left transition odd:border-r-0 md:odd:border-r md:nth-[3n]:border-r-0 ${active ? "bg-[#dfff63] text-[#11110f]" : "bg-[#f4f0e8] text-[#11110f] hover:bg-[#ebe5db]"}`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 text-[0.58rem] uppercase tracking-[0.18em] text-black/60">
          <span>{session.time}</span>
          <span>{session.code}</span>
        </div>
        <h3 className="mt-4 max-w-[11ch] text-[1.65rem] leading-[0.88] font-semibold tracking-[-0.06em]">
          {session.line1}
          <br />
          {session.line2}
        </h3>
      </div>

      <div className="space-y-2">
        <p className="text-[0.62rem] uppercase tracking-[0.18em] text-black/65">
          {session.room} / {session.floor}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {session.tags.map((tag) => (
            <span
              key={tag}
              className={`border px-2 py-1 text-[0.54rem] uppercase tracking-[0.14em] ${active ? "border-black/65" : "border-black/15"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 82% 16%, rgba(255,255,255,0.38), transparent 18%)" }} />
    </button>
  );
}

function RoomMap({ activeRoom }: { activeRoom: string }) {
  return (
    <div className="grid grid-cols-2 border border-black/75 bg-[#f4f0e8]">
      {roomLayers.map((layer, index) => {
        const active = layer.name === activeRoom;
        return (
          <div
            key={layer.name}
            className={`min-h-[7.4rem] border-t border-black/75 p-3 ${index % 2 === 0 ? "border-r" : ""} ${index < 2 ? "border-t-0" : ""} ${active ? "bg-black text-[#f4f0e8]" : "bg-transparent text-[#11110f]"}`}
          >
            <div className="flex items-start justify-between gap-3 text-[0.56rem] uppercase tracking-[0.18em] opacity-65">
              <span>{layer.level}</span>
              <span>{layer.open}</span>
            </div>
            <div className="mt-5 text-[1.1rem] leading-[0.94] tracking-[-0.05em]">{layer.name}</div>
            <div className="mt-3 text-[0.58rem] uppercase tracking-[0.16em] opacity-65">{layer.vibe}</div>
          </div>
        );
      })}
    </div>
  );
}

export function Case006DeSchoolGrid() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0.52, y: 0.34 });
  const [activeTrack, setActiveTrack] = useState<Track>("All");
  const [activeId, setActiveId] = useState<string>(sessions[0].id);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const visibleSessions = useMemo(() => {
    if (activeTrack === "All") return sessions;
    return sessions.filter((session) => session.track === activeTrack);
  }, [activeTrack]);

  useEffect(() => {
    if (!visibleSessions.some((session) => session.id === activeId)) {
      setActiveId(visibleSessions[0]?.id ?? sessions[0].id);
    }
  }, [activeId, visibleSessions]);

  const activeSession =
    visibleSessions.find((session) => session.id === activeId) ??
    sessions.find((session) => session.id === activeId) ??
    sessions[0];

  const liveCount = sessions.filter((session) => session.status === "Live").length;
  const clubCount = sessions.filter((session) => session.track === "Club").length;

  return (
    <main
      className={`${displayFace.variable} ${uiFace.variable} min-h-screen bg-[#e9e3d8] text-[#11110f]`}
      style={{ fontFamily: "var(--font-case-006-ui)" }}
    >
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(17,17,15,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,15,0.2)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_38%),linear-gradient(180deg,#efe9df_0%,#e7e0d4_100%)]" />

      <div className="relative mx-auto max-w-[1620px] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
        <section
          className="relative overflow-hidden border border-black/80 bg-[#f4f0e8] shadow-[0_28px_90px_rgba(17,17,15,0.14)]"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setPointer({
              x: (event.clientX - rect.left) / rect.width,
              y: (event.clientY - rect.top) / rect.height,
            });
          }}
          onPointerLeave={() => setPointer({ x: 0.52, y: 0.34 })}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(17,17,15,0.7)_1px,transparent_0)] [background-size:10px_10px]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition duration-300"
            style={{
              background: `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(223,255,99,0.26), transparent 18%), radial-gradient(circle at ${Math.max(pointer.x * 100 - 10, 0)}% ${Math.max(pointer.y * 100 - 8, 0)}%, rgba(255,255,255,0.46), transparent 16%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-px bg-black/18 transition-[left] duration-200"
            style={{ left: `calc(${pointer.x * 100}% - 0.5px)` }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 h-px bg-black/18 transition-[top] duration-200"
            style={{ top: `calc(${pointer.y * 100}% - 0.5px)` }}
          />

          <header className="relative grid border-b border-black/80 text-[0.58rem] uppercase tracking-[0.2em] text-black/62 md:grid-cols-4">
            <div className="border-b border-black/80 px-4 py-3 md:border-b-0 md:border-r lg:px-5">De School / Web reconstruction</div>
            <div className="border-b border-black/80 px-4 py-3 md:border-b-0 md:border-r lg:px-5">17 Mar / 20:00 → 00:30</div>
            <div className="border-b border-black/80 px-4 py-3 md:border-b-0 md:border-r lg:px-5">Modular programme / motion enabled</div>
            <div className="px-4 py-3 text-right lg:px-5">/ui/case-006-de-school-grid</div>
          </header>

          <div className="relative grid lg:grid-cols-[82px_minmax(0,1.62fr)_minmax(320px,0.88fr)]">
            <aside className="hidden border-r border-black/80 lg:flex lg:min-h-[calc(100vh-96px)] lg:flex-col lg:justify-between">
              <div className="space-y-4 px-3 py-4 text-[0.56rem] uppercase tracking-[0.18em] text-black/58">
                <div className="[writing-mode:vertical-rl] rotate-180">Poster grid / site mode</div>
                <div className="[writing-mode:vertical-rl] rotate-180">Live architecture / Amsterdam</div>
              </div>

              <div className="border-t border-black/80 px-3 py-4 text-[0.56rem] uppercase tracking-[0.18em] text-black/58 [writing-mode:vertical-rl] rotate-180">
                Cursor as alignment guide
              </div>
            </aside>

            <section className="border-b border-black/80 lg:border-b-0 lg:border-r">
              <div className="grid border-b border-black/80 md:grid-cols-[1.35fr_0.9fr]">
                <div className="border-b border-black/80 px-4 py-4 md:border-b-0 md:border-r lg:px-5 lg:py-5">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Issue 006 / strict grid / editable layers</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tracks.map((track) => (
                      <button
                        key={track}
                        type="button"
                        onClick={() => setActiveTrack(track)}
                        className={`border px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.18em] transition ${activeTrack === track ? "border-black bg-black text-[#f4f0e8]" : "border-black/15 bg-[#fbf8f2] text-[#11110f] hover:border-black/55"}`}
                      >
                        {track}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-4 py-4 lg:px-5 lg:py-5">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Selected module</p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-black/58">{activeSession.code} / {activeSession.room}</p>
                      <h2 className="mt-1 text-[1.45rem] leading-[0.92] tracking-[-0.05em] text-[#11110f]">{activeSession.title}</h2>
                    </div>
                    <div className="text-right text-[0.58rem] uppercase tracking-[0.18em] text-black/58">
                      <div>{activeSession.time}</div>
                      <div className="mt-1">{activeSession.status}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid border-b border-black/80 xl:grid-cols-[1.34fr_0.96fr]">
                <div className="relative border-b border-black/80 px-4 py-5 sm:px-5 lg:px-6 lg:py-6 xl:border-b-0 xl:border-r">
                  <div className="absolute left-4 top-4 text-[0.56rem] uppercase tracking-[0.18em] text-black/50 sm:left-5 lg:left-6">De School</div>
                  <div className="absolute right-4 top-4 text-right text-[0.56rem] uppercase tracking-[0.18em] text-black/50 sm:right-5 lg:right-6">
                    Graphic system / venue transmission
                  </div>

                  <div className="grid min-h-[24rem] grid-cols-12 grid-rows-[auto_auto_1fr_auto] gap-y-2 pt-8 sm:min-h-[28rem] lg:min-h-[32rem]">
                    <div className="col-span-12 flex items-center justify-between text-[0.56rem] uppercase tracking-[0.18em] text-black/48">
                      <span>March / 17</span>
                      <span>Modular night programme</span>
                    </div>

                    <div
                      className="col-span-12 text-[clamp(5.8rem,16vw,13rem)] leading-[0.82] font-bold tracking-[-0.08em]"
                      style={{
                        fontFamily: "var(--font-case-006-display)",
                        transform: `translate3d(${(pointer.x - 0.5) * -16}px, ${(pointer.y - 0.5) * -10}px, 0)`,
                        transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <div className="grid grid-cols-12">
                        <span className="col-span-6">DE</span>
                        <span className="col-span-6 text-right">SCHOOL</span>
                      </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 items-end gap-4">
                      <div className="col-span-7 border-t border-black/80 pt-3">
                        <p className="max-w-[20ch] text-[clamp(1.15rem,2vw,1.8rem)] leading-[0.94] tracking-[-0.05em] text-[#11110f]">
                          A functioning site reconstruction of a severe modular poster: timetable, room system, live queue, and ticket layer.
                        </p>
                      </div>
                      <div className="col-span-5 border-t border-black/80 pt-3 text-right text-[0.62rem] uppercase tracking-[0.18em] text-black/58">
                        Pointer motion stays subtle to protect the rigid composition.
                      </div>
                    </div>

                    <div className="col-span-12 grid gap-3 border-t border-black/80 pt-3 sm:grid-cols-3">
                      <div>
                        <p className="text-[0.56rem] uppercase tracking-[0.18em] text-black/50">Rooms online</p>
                        <p className="mt-1 text-[2rem] leading-none tracking-[-0.08em]">06</p>
                      </div>
                      <div>
                        <p className="text-[0.56rem] uppercase tracking-[0.18em] text-black/50">Club blocks</p>
                        <p className="mt-1 text-[2rem] leading-none tracking-[-0.08em]">{clubCount.toString().padStart(2, "0")}</p>
                      </div>
                      <div>
                        <p className="text-[0.56rem] uppercase tracking-[0.18em] text-black/50">Currently live</p>
                        <p className="mt-1 text-[2rem] leading-none tracking-[-0.08em]">{liveCount.toString().padStart(2, "0")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-rows-[auto_auto_1fr]">
                  <div className="border-b border-black/80 px-4 py-4 lg:px-5 lg:py-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Active description</p>
                    <p className="mt-3 max-w-[32ch] text-[1.1rem] leading-[1.16] tracking-[-0.04em] text-[#11110f]">{activeSession.note}</p>
                  </div>

                  <div className="border-b border-black/80 px-4 py-4 lg:px-5 lg:py-5">
                    <div className="grid grid-cols-2 gap-3 text-[0.58rem] uppercase tracking-[0.18em] text-black/58">
                      <div>
                        <p className="text-black/45">Track</p>
                        <p className="mt-1 text-[#11110f]">{activeSession.track}</p>
                      </div>
                      <div>
                        <p className="text-black/45">Duration</p>
                        <p className="mt-1 text-[#11110f]">{activeSession.duration}</p>
                      </div>
                      <div>
                        <p className="text-black/45">Floor</p>
                        <p className="mt-1 text-[#11110f]">{activeSession.floor}</p>
                      </div>
                      <div>
                        <p className="text-black/45">Status</p>
                        <p className="mt-1 text-[#11110f]">{activeSession.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-4 lg:px-5 lg:py-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Layer tags</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeSession.tags.map((tag) => (
                        <span key={tag} className="border border-black/15 px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.16em] text-[#11110f]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid xl:grid-cols-[1.28fr_0.72fr]">
                <div className="border-b border-black/80 xl:border-b-0 xl:border-r">
                  <div className="flex items-center justify-between gap-4 border-b border-black/80 px-4 py-3 lg:px-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Programme matrix</p>
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">{visibleSessions.length} visible modules</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {visibleSessions.map((session) => (
                      <SessionCell
                        key={session.id}
                        session={session}
                        active={session.id === activeSession.id}
                        onSelect={() => setActiveId(session.id)}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-rows-[auto_auto]">
                  <div className="border-b border-black/80 px-4 py-4 lg:px-5 lg:py-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Subscription layer</p>
                    <form
                      className="mt-4 flex flex-col gap-3"
                      onSubmit={(event) => {
                        event.preventDefault();
                        if (email.trim()) setJoined(true);
                      }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          if (joined) setJoined(false);
                        }}
                        placeholder="Email for updates"
                        className="h-11 border border-black/80 bg-[#fbf8f2] px-3 text-sm text-[#11110f] outline-none placeholder:text-black/35 focus:border-black"
                      />
                      <button
                        type="submit"
                        className="flex h-11 items-center justify-between border border-black/80 bg-black px-3 text-[0.62rem] uppercase tracking-[0.18em] text-[#f4f0e8] transition hover:bg-[#1b1b18]"
                      >
                        <span>{joined ? "Subscribed" : "Join updates"}</span>
                        <span>↗</span>
                      </button>
                    </form>
                    <p className="mt-3 text-[0.62rem] leading-5 text-black/60">
                      {joined
                        ? "Address captured locally in the interface state. The sign-up flow is intentionally lightweight for this reconstruction."
                        : "A real form layer replaces a static poster footer so the composition behaves like a working programme page."}
                    </p>
                  </div>

                  <div className="px-4 py-4 lg:px-5 lg:py-5">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Tickets</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <button type="button" className="border border-black/80 bg-[#dfff63] px-3 py-3 text-left text-[0.62rem] uppercase tracking-[0.18em] text-[#11110f] transition hover:-translate-y-0.5">
                        <div>Full night</div>
                        <div className="mt-2 text-[1.4rem] tracking-[-0.06em]">€24</div>
                      </button>
                      <button type="button" className="border border-black/80 bg-[#fbf8f2] px-3 py-3 text-left text-[0.62rem] uppercase tracking-[0.18em] text-[#11110f] transition hover:-translate-y-0.5">
                        <div>Late entry</div>
                        <div className="mt-2 text-[1.4rem] tracking-[-0.06em]">€14</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside className="grid lg:min-h-[calc(100vh-96px)] lg:grid-rows-[auto_auto_1fr]">
              <div className="border-b border-black/80">
                <div className="flex items-center justify-between gap-4 border-b border-black/80 px-4 py-3 lg:px-5">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Live queue</p>
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Hover to sync</p>
                </div>
                <div>
                  {sessions.map((session) => (
                    <QueueRow
                      key={session.id}
                      session={session}
                      active={session.id === activeSession.id}
                      onSelect={() => setActiveId(session.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="border-b border-black/80 px-4 py-4 lg:px-5 lg:py-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Venue layers</p>
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">Active room highlighted</p>
                </div>
                <div className="mt-4">
                  <RoomMap activeRoom={activeSession.room} />
                </div>
              </div>

              <div className="px-4 py-4 lg:px-5 lg:py-5">
                <p className="text-[0.58rem] uppercase tracking-[0.2em] text-black/55">System notes</p>
                <div className="mt-4 space-y-4 border border-black/80 bg-[#fbf8f2] p-4">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.18em] text-black/45">What became web UI</p>
                    <p className="mt-2 text-[0.95rem] leading-[1.28] tracking-[-0.025em] text-[#11110f]">
                      Headlines, labels, timing strips, queue rows, room map, and footer actions are all live DOM layers rather than a flattened poster image.
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.18em] text-black/45">Motion</p>
                    <p className="mt-2 text-[0.95rem] leading-[1.28] tracking-[-0.025em] text-[#11110f]">
                      Cursor lines and slight headline drift add feedback without softening the rigid grid language.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
