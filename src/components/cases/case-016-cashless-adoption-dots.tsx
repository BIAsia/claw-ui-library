const dots = Array.from({ length: 100 }, (_, index) => index);

export function Case016CashlessAdoptionDots() {
  return (
    <main className="min-h-screen bg-[#e8e7e5] px-4 py-10 text-white sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1240px] items-center justify-center">
        <article className="w-full max-w-[1100px] bg-[#080808] px-6 py-6 shadow-[0_22px_48px_rgba(0,0,0,0.14)] sm:px-10 sm:py-8 lg:px-11 lg:py-9">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-[clamp(4.3rem,10vw,6.9rem)] leading-[0.78] font-[700] tracking-[-0.1em] text-white">84%</p>
            <div className="max-w-[39rem] pt-2 sm:pt-1">
              <h1 className="max-w-[28ch] text-[clamp(1.25rem,2.6vw,2.45rem)] leading-[0.94] font-[600] tracking-[-0.06em] text-white">
                of people prefer using digital payment methods over traditional cash
              </h1>
              <p className="mt-4 max-w-[36ch] text-[0.86rem] leading-[1.15] tracking-[-0.03em] text-white/48 sm:text-[0.96rem]">
                making it essential for businesses to adapt to modern, secure, and efficient transaction platforms.
              </p>
            </div>
          </header>

          <div className="mt-10 grid grid-cols-10 gap-[0.35rem] sm:mt-14 sm:grid-cols-20 sm:gap-[0.5rem]">
            {dots.map((index) => {
              const filled = index < 84;
              return (
                <span
                  key={index}
                  aria-hidden
                  className="aspect-square rounded-full"
                  style={{
                    background: filled ? "#ff5c0a" : "#d8d8d8",
                    boxShadow: filled ? "0 0 0 1px rgba(255,92,10,0.12)" : "0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                />
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}
