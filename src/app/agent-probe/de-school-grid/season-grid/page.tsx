const days = ["Thu 21", "Fri 22", "Sat 23"] as const;
const rooms = [
  {
    name: "Basement",
    slots: [
      "19:00 Open foyer / residents",
      "22:00 Kian b2b Miri",
      "00:30 Sibel Kaya live",
      "03:00 Aurora freight",
    ],
  },
  {
    name: "Studio",
    slots: [
      "18:30 Type workshop / poster tools",
      "21:15 Field recording lab",
      "23:30 Drum editing clinic",
      "01:00 Community radio lounge",
    ],
  },
  {
    name: "Roof",
    slots: [
      "20:00 Sunset meal / mint tea",
      "22:45 Archive listening session",
      "00:15 Dawn choir rehearsal",
      "02:30 Closing broadcast",
    ],
  },
] as const;

export default function SeasonGridPage() {
  return (
    <main className="min-h-screen bg-[#e8e1d2] px-3 py-3 text-[#1c1813] sm:px-4 lg:px-6">
      <section className="mx-auto max-w-[980px]">
        <article className="overflow-hidden border border-[#1c1813]/20 bg-[#f4ecdc] shadow-[0_28px_72px_rgba(64,45,24,0.12)]">
          <header className="grid border-b border-[#1c1813]/20 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
            <div className="border-b border-[#1c1813]/20 p-5 md:border-b-0 md:border-r">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#1c1813]/60">night cycle board</p>
              <h1 className="mt-4 max-w-[8ch] text-[clamp(2.8rem,5.5vw,5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em]">Season grid</h1>
              <p className="mt-4 max-w-[18ch] text-sm leading-6 text-[#1c1813]/70">Three-day programme poster for rooms, workshops, and after-hours notes.</p>
            </div>
            {days.map((day) => (
              <div key={day} className="border-b border-[#1c1813]/20 p-5 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0">
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#1c1813]/58">programme day</p>
                <p className="mt-4 text-3xl font-semibold uppercase tracking-[-0.08em]">{day}</p>
              </div>
            ))}
          </header>

          <div className="grid md:grid-cols-[1.1fr_1fr_1fr_1fr]">
            <div className="border-b border-[#1c1813]/20 p-5 md:border-b-0 md:border-r">
              <div className="grid gap-8">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#1c1813]/58">scan logic</p>
                  <p className="mt-3 text-sm leading-6 text-[#1c1813]/74">Move across columns for day, down rows for room. Late-night notes appear as the final line in each cell.</p>
                </div>
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#1c1813]/58">edition</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.06em]">Spring 26 / issue 04</p>
                </div>
              </div>
            </div>

            {days.map((day, dayIndex) => (
              <div key={day} className="border-b border-[#1c1813]/20 md:border-b-0 md:border-r last:md:border-r-0">
                {rooms.map((room, roomIndex) => (
                  <div key={`${day}-${room.name}`} className="min-h-[220px] border-b border-[#1c1813]/20 p-4 last:border-b-0">
                    <div className="flex items-start justify-between gap-3 border-b border-[#1c1813]/12 pb-3">
                      <p className="text-xl font-semibold uppercase tracking-[-0.06em]">{room.name}</p>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#1c1813]/50">lane 0{roomIndex + 1}</p>
                    </div>
                    <div className="mt-4 space-y-3 text-[0.84rem] leading-5 text-[#1c1813]/78">
                      {room.slots.map((slot, slotIndex) => (
                        <p key={slot} className={slotIndex === dayIndex ? "font-semibold text-[#1c1813]" : ""}>
                          {slot}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
