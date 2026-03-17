"use client";

import { M_PLUS_Rounded_1c } from "next/font/google";
import { useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent } from "react";

const face = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-case-014",
  weight: ["500", "700", "800", "900"],
});

type TagId =
  | "marketing"
  | "seo"
  | "social-media"
  | "email-marketing"
  | "conversions"
  | "ads";

type TagItem = {
  id: TagId;
  label: string;
  width: string;
  fontSize: string;
  x: number;
  y: number;
  rotate: number;
  depth: number;
  zIndex: number;
  background: string;
  shadow: string;
};

const tags: TagItem[] = [
  {
    id: "marketing",
    label: "marketing",
    width: "clamp(15.5rem, 36vw, 18rem)",
    fontSize: "clamp(1.02rem, 3.15vw, 1.78rem)",
    x: -10,
    y: -101,
    rotate: -11,
    depth: 0.6,
    zIndex: 10,
    background: "linear-gradient(180deg, #ffd24f 0%, #ffc339 100%)",
    shadow: "0 22px 34px rgba(255, 188, 63, 0.25)",
  },
  {
    id: "social-media",
    label: "social media",
    width: "clamp(15.6rem, 37vw, 17.8rem)",
    fontSize: "clamp(1.15rem, 3.6vw, 1.9rem)",
    x: 8,
    y: -34,
    rotate: 3,
    depth: 0.9,
    zIndex: 20,
    background: "linear-gradient(180deg, #ff9957 0%, #ff8648 100%)",
    shadow: "0 24px 36px rgba(255, 132, 81, 0.24)",
  },
  {
    id: "seo",
    label: "SEO",
    width: "clamp(8.4rem, 21vw, 10.2rem)",
    fontSize: "clamp(1.3rem, 4vw, 2.15rem)",
    x: 99,
    y: -60,
    rotate: 12,
    depth: 1.1,
    zIndex: 30,
    background: "linear-gradient(180deg, #ff8450 0%, #ff7143 100%)",
    shadow: "0 24px 36px rgba(255, 118, 77, 0.26)",
  },
  {
    id: "email-marketing",
    label: "email marketing",
    width: "clamp(22rem, 49vw, 25.6rem)",
    fontSize: "clamp(1.48rem, 4.1vw, 2.28rem)",
    x: -3,
    y: 9,
    rotate: -3.8,
    depth: 1.2,
    zIndex: 40,
    background: "linear-gradient(180deg, #f8b2c0 0%, #f0a4b5 100%)",
    shadow: "0 28px 42px rgba(240, 164, 181, 0.32)",
  },
  {
    id: "conversions",
    label: "conversions",
    width: "clamp(13rem, 31vw, 16.5rem)",
    fontSize: "clamp(1.18rem, 3.7vw, 2rem)",
    x: 22,
    y: 74,
    rotate: 4.6,
    depth: 0.9,
    zIndex: 18,
    background: "linear-gradient(180deg, #4c8ffd 0%, #3f7dee 100%)",
    shadow: "0 24px 38px rgba(72, 131, 247, 0.28)",
  },
  {
    id: "ads",
    label: "ads",
    width: "clamp(7.2rem, 17vw, 8.7rem)",
    fontSize: "clamp(1.28rem, 3.8vw, 2rem)",
    x: 27,
    y: 120,
    rotate: -5.2,
    depth: 1.35,
    zIndex: 50,
    background: "linear-gradient(180deg, #31c6ff 0%, #19b2f5 100%)",
    shadow: "0 24px 38px rgba(34, 186, 247, 0.28)",
  },
];

export function Case014MarketingTagCluster() {
  const [activeId, setActiveId] = useState<TagId>("email-marketing");
  const [hoveredId, setHoveredId] = useState<TagId | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);

    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  const highlightedId = hoveredId ?? activeId;
  const activeLabel = useMemo(
    () => tags.find((item) => item.id === activeId)?.label ?? "email marketing",
    [activeId],
  );

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    setPointer({
      x: Number(x.toFixed(3)),
      y: Number(y.toFixed(3)),
    });
  }

  function resetPointer() {
    setPointer({ x: 0, y: 0 });
    setHoveredId(null);
  }

  return (
    <main
      className={`${face.variable} min-h-screen overflow-hidden bg-[#ece8e5] text-[#2f2322]`}
      style={{ fontFamily: "var(--font-case-014), system-ui, sans-serif" }}
    >
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .case014-tag {
            transition-duration: 0ms !important;
          }
        }
      `}</style>

      <section
        aria-label="Marketing tag cluster"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 34%, rgba(255,255,255,0.98) 0%, rgba(247,244,241,0.96) 20%, rgba(236,232,229,1) 58%)",
          }}
        />

        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[8rem] w-[18rem] max-w-[56vw] -translate-x-1/2 translate-y-[7.8rem] rounded-full blur-[34px]"
          style={{
            background: "radial-gradient(circle, rgba(44, 36, 34, 0.13) 0%, rgba(44, 36, 34, 0) 76%)",
            transform: `translate(-50%, 0) translate3d(${pointer.x * 15}px, ${pointer.y * 8}px, 0)`,
          }}
        />

        <h1 className="sr-only">Marketing tag cluster</h1>
        <p className="sr-only" aria-live="polite">
          Selected tag: {activeLabel}
        </p>

        <div className="relative w-full max-w-[40rem] [perspective:1200px]">
          <div className="relative mx-auto aspect-[1.25/1] w-full max-w-[36rem] min-w-[18rem]">
            {tags.map((tag) => {
              const isHighlighted = tag.id === highlightedId;
              const isSelected = tag.id === activeId;
              const shiftX = reducedMotion ? 0 : pointer.x * tag.depth * -14;
              const shiftY = reducedMotion ? 0 : pointer.y * tag.depth * -9;
              const liftY = isHighlighted ? -10 : 0;
              const liftZ = isHighlighted ? 56 : 0;
              const tilt = reducedMotion ? 0 : pointer.x * tag.depth * 1.8;
              const scale = isHighlighted ? 1.018 : 1;

              return (
                <button
                  key={tag.id}
                  type="button"
                  aria-label={tag.label}
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(tag.id)}
                  onMouseEnter={() => setHoveredId(tag.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(tag.id)}
                  onBlur={() => setHoveredId(null)}
                  className="case014-tag absolute left-1/2 top-1/2 flex min-h-[3.35rem] items-center justify-center rounded-[1.3rem] px-5 pb-[0.48rem] pt-[0.4rem] text-center font-[800] tracking-[-0.085em] whitespace-nowrap text-[#2f2322] shadow-[inset_0_1px_0_rgba(255,255,255,0.46)] outline-none transition-[transform,box-shadow,filter] duration-200 ease-out focus-visible:ring-4 focus-visible:ring-[#2f2322]/15"
                  style={{
                    width: tag.width,
                    fontSize: tag.fontSize,
                    lineHeight: 0.92,
                    zIndex: isHighlighted ? 99 : tag.zIndex,
                    background: tag.background,
                    boxShadow: `${tag.shadow}, inset 0 1px 0 rgba(255, 255, 255, 0.48)`,
                    filter: isSelected ? "saturate(1.03)" : "none",
                    transform: `translate(-50%, -50%) translate3d(${tag.x + shiftX}px, ${tag.y + liftY + shiftY}px, ${liftZ}px) rotate(${tag.rotate + tilt}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
