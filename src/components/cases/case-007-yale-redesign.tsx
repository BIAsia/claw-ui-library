"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Cormorant_Garamond, Public_Sans } from "next/font/google";

const serifFace = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-case-007-serif",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const sansFace = Public_Sans({
  subsets: ["latin"],
  variable: "--font-case-007-sans",
  weight: ["400", "500", "600", "700", "800"],
});

type PointerState = {
  x: number;
  y: number;
};

type SectionLink = {
  id: string;
  number: string;
  label: string;
};

type HeroStrip = {
  left: number;
  top: number;
  width: number;
  rotation: number;
  depth: number;
};

type FactRow = {
  label: string;
  value: string;
};

type ProcessStep = {
  number: string;
  title: string;
  detail: string;
  output: string;
};

type NewsStory = {
  section: string;
  title: string;
  excerpt: string;
  date: string;
};

type SchoolItem = {
  code: string;
  school: string;
  focus: string;
  format: string;
};

type ContactItem = {
  label: string;
  value: string;
  hint: string;
};

const sectionLinks: SectionLink[] = [
  { id: "introduction", number: "01", label: "Introduction" },
  { id: "home-page", number: "02", label: "Home page" },
  { id: "design-process", number: "03", label: "Design process" },
  { id: "about-yale", number: "04", label: "About Yale page" },
  { id: "design-system", number: "05", label: "Design system" },
  { id: "selected-news", number: "06", label: "Selected news page" },
  { id: "academics", number: "07", label: "The academics page" },
  { id: "contacts", number: "08", label: "Contacts page" },
];

const heroStrips: HeroStrip[] = [
  { left: -4, top: 42, width: 12, rotation: 2, depth: 0.45 },
  { left: 7, top: 41, width: 10, rotation: -1, depth: 0.65 },
  { left: 22, top: 40, width: 10, rotation: 3, depth: 0.8 },
  { left: 36, top: 39, width: 9, rotation: -2, depth: 1 },
  { left: 46, top: 41, width: 11, rotation: 0, depth: 0.92 },
  { left: 59, top: 38, width: 10, rotation: 5, depth: 1.08 },
  { left: 73, top: 40, width: 10, rotation: -1, depth: 0.82 },
  { left: 85, top: 39, width: 9, rotation: 2, depth: 0.64 },
  { left: 95, top: 41, width: 12, rotation: -3, depth: 0.48 },
];

const introductionFacts: FactRow[] = [
  {
    label: "The product",
    value: "A Yale University redesign concept framed as a modular editorial website rather than a static institutional brochure.",
  },
  {
    label: "My role",
    value: "UI/UX designer building navigation, hierarchy, page systems, and visual language for a more legible campus presence.",
  },
  {
    label: "The problem",
    value: "Prestige was present, but discoverability, story flow, and consistency between departments felt scattered across disconnected templates.",
  },
  {
    label: "The goal",
    value: "Create a modern, intuitive, deeply structured experience that keeps Yale’s seriousness while improving movement between admissions, academics, research, and news.",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit the current layers",
    detail: "Catalogued top tasks, page redundancies, and repeated navigation decisions across news, schools, and admissions.",
    output: "Information inventory + duplicated module map",
  },
  {
    number: "02",
    title: "Define a campus grid",
    detail: "Established a three-speed hierarchy: utility navigation, editorial headlines, and dense factual support blocks.",
    output: "Shared page scaffold for all content types",
  },
  {
    number: "03",
    title: "Rebuild the Yale voice",
    detail: "Paired a formal serif headline system with crisp public-information sans labels and restrained Yale blue accents.",
    output: "Typography, color, and spacing tokens",
  },
  {
    number: "04",
    title: "Prototype editorial tasks",
    detail: "Turned poster-like compositions into real browseable sections with anchors, article previews, and program finding tools.",
    output: "Responsive web interactions + stateful layers",
  },
];

const newsStories: NewsStory[] = [
  {
    section: "Research",
    title: "Yale in New Haven: Architecture and Urbanism",
    excerpt: "A long-form story format pairing archival context with contemporary campus planning, maps, and faculty commentary.",
    date: "April 18",
  },
  {
    section: "Community",
    title: "The stones of Yale as a living material archive",
    excerpt: "Shorter feature modules let readers jump between preservation notes, student reporting, and related collections.",
    date: "May 02",
  },
  {
    section: "Admissions",
    title: "How prospective students move through schools, majors, and residential life",
    excerpt: "Task-first cards reduce the cognitive load of institutional language and clarify where the next click should lead.",
    date: "May 26",
  },
];

const schools: SchoolItem[] = [
  {
    code: "YC",
    school: "Yale College",
    focus: "Undergraduate liberal arts, residential life, and major exploration.",
    format: "Programs / student life / admissions",
  },
  {
    code: "GSAS",
    school: "Graduate School of Arts and Sciences",
    focus: "Research pathways, faculty, labs, and cross-disciplinary study.",
    format: "Programs / faculty / funding",
  },
  {
    code: "SOM",
    school: "School of Management",
    focus: "Mission-led management education with public and private sector lenses.",
    format: "Degrees / outcomes / events",
  },
  {
    code: "SOA",
    school: "School of Architecture",
    focus: "Studios, public exhibitions, visiting critics, and campus urban context.",
    format: "Studios / archive / faculty",
  },
];

const contactItems: ContactItem[] = [
  {
    label: "General inquiries",
    value: "hello@yale-redesign.study",
    hint: "Project communication, overview requests, and design rationale.",
  },
  {
    label: "Admissions support",
    value: "+1 (203) 432-9300",
    hint: "Prospective student pathways, timelines, and contact routing.",
  },
  {
    label: "Campus visit desk",
    value: "Visitor Center · New Haven, CT",
    hint: "Tours, accessibility accommodations, and local arrival information.",
  },
];

const stripCopy =
  "Yale University redesign concept editorial navigation design system campus news academics public information research archives New Haven admissions schools directories architecture and urbanism ";

function HeroPaperStrip({ spec, pointer }: { spec: HeroStrip; pointer: PointerState }) {
  const translateX = (pointer.x - 0.5) * spec.depth * -26;
  const translateY = (pointer.y - 0.5) * spec.depth * -18;

  return (
    <div
      aria-hidden
      className="absolute hidden md:block"
      style={{
        left: `${spec.left}%`,
        top: `${spec.top}%`,
        width: `${spec.width}%`,
        transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${spec.rotation}deg)`,
      }}
    >
      <div className="space-y-2 text-[0.6rem] leading-[1.18] tracking-[0.03em] text-[#18489a]/[0.08] [text-wrap:balance]">
        {Array.from({ length: 16 }).map((_, index) => (
          <p key={`${spec.left}-${index}`}>{stripCopy.repeat(2)}</p>
        ))}
      </div>
    </div>
  );
}

function SectionIndex({ activeSection }: { activeSection: string }) {
  return (
    <div className="hidden xl:flex xl:flex-col xl:gap-2">
      {sectionLinks.map((item) => {
        const active = item.id === activeSection;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`grid grid-cols-[2.2rem_minmax(0,1fr)] items-baseline gap-3 border-t border-[#171717]/10 py-2 text-right transition ${
              active ? "text-[#111111]" : "text-[#111111]/32 hover:text-[#111111]/74"
            }`}
          >
            <span className="text-[1.5rem] leading-none tracking-[-0.06em]">{item.number}</span>
            <span className="text-[0.68rem] uppercase tracking-[0.22em]">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}

function BookSpine({ label, width, height, rotate = 0 }: { label: string; width: string; height: string; rotate?: number }) {
  return (
    <div
      className="relative flex items-end justify-center overflow-hidden border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef1fd_0%,#e3e7fa_100%)] px-2 pb-4"
      style={{ width, height, transform: `rotate(${rotate}deg)` }}
    >
      <span
        className="block text-center text-[0.82rem] font-medium uppercase tracking-[0.18em] text-[#1f2d48]/70"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {label}
      </span>
    </div>
  );
}

function SectionShell({
  id,
  number,
  label,
  title,
  summary,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-section className="border-t border-[#171717]/14 scroll-mt-24">
      <div className="grid gap-8 px-5 py-10 md:px-8 lg:grid-cols-[3rem_minmax(11rem,15rem)_minmax(0,1fr)] lg:gap-10 lg:px-10 lg:py-14">
        <div className="text-[1.8rem] leading-none tracking-[-0.08em] text-[#151515] lg:pt-1">{number}</div>

        <div className="space-y-3 lg:sticky lg:top-24 lg:self-start">
          <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#111111]/46">{label}</p>
          <h2 className="max-w-[12ch] text-[clamp(2rem,3.4vw,3.35rem)] leading-[0.92] tracking-[-0.07em] text-[#121212]">
            {title}
          </h2>
          <p className="max-w-[24ch] text-[0.98rem] leading-[1.5] tracking-[-0.02em] text-[#111111]/68">{summary}</p>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}

export function Case007YaleRedesign() {
  const [pointer, setPointer] = useState<PointerState>({ x: 0.5, y: 0.42 });
  const [activeSection, setActiveSection] = useState(sectionLinks[0].id);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="top"
      className={`${serifFace.variable} ${sansFace.variable} relative min-h-screen overflow-x-hidden bg-[#f3f0ea] text-[#111111]`}
      style={{ fontFamily: "var(--font-case-007-sans)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_26%),linear-gradient(180deg,#f7f4ef_0%,#f3f0ea_35%,#efebe3_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(17,17,17,0.34)_1px,transparent_0)] [background-size:11px_11px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#171717]/12" />

      <header className="sticky top-0 z-40 border-b border-[#171717]/10 bg-[#f3f0ea]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-5 py-3 md:px-8 lg:px-10">
          <div className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.24em] text-[#111111]/58">
            <span className="text-[#111111]">Yale Redesign Concept</span>
            <span className="hidden h-3 w-px bg-[#171717]/14 md:block" />
            <span className="hidden md:block">Standalone case study</span>
          </div>

          <nav aria-label="Section navigation" className="hidden items-center gap-5 lg:flex">
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[0.72rem] uppercase tracking-[0.22em] transition ${
                  activeSection === item.id ? "text-[#0f4aa4]" : "text-[#111111]/55 hover:text-[#111111]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-between px-5 pb-8 pt-6 md:px-8 lg:px-10 lg:pt-8"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setPointer({
            x: (event.clientX - rect.left) / rect.width,
            y: (event.clientY - rect.top) / rect.height,
          });
        }}
        onPointerLeave={() => setPointer({ x: 0.5, y: 0.42 })}
      >
        <div className="grid items-start gap-3 text-[0.7rem] uppercase tracking-[0.2em] text-[#111111]/62 md:grid-cols-3">
          <p>Tetiana Prokhoda</p>
          <p className="text-left md:text-center">Uprock school</p>
          <p className="text-left md:text-right">2023</p>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-14 md:py-18 lg:py-24">
          {heroStrips.map((strip) => (
            <HeroPaperStrip key={`${strip.left}-${strip.top}`} spec={strip} pointer={pointer} />
          ))}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[18%] top-[17%] h-32 rounded-full blur-3xl transition duration-500"
            style={{
              background: `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(27,79,168,0.1), transparent 34%)`,
            }}
          />

          <div className="relative z-10 flex max-w-[62rem] flex-col items-center text-center">
            <p className="mb-6 text-[0.72rem] uppercase tracking-[0.26em] text-[#111111]/44">Editorial web reconstruction</p>
            <h1
              className="max-w-[12ch] text-[clamp(4.6rem,11.6vw,9.8rem)] leading-[0.83] tracking-[-0.075em] text-[#111111]"
              style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
            >
              Redesign
              <br />
              Concept <span className="text-[#0f4aa4] italic">of Yale</span>
              <br />
              University
            </h1>
            <p className="mt-6 max-w-[38rem] text-[1rem] leading-[1.65] tracking-[-0.02em] text-[#111111]/65 md:text-[1.05rem]">
              A real, navigable institutional landing page reconstructed from the poster composition — keeping the oversized editorial voice,
              Yale-like restraint, and system-driven structure while turning every content block into usable interface.
            </p>
          </div>

          <div
            className="absolute left-1/2 top-[60%] z-10 w-[10rem] -translate-x-1/2 border border-[#171717]/12 bg-[#f8f5ef]/90 px-4 py-5 text-center shadow-[0_12px_40px_rgba(19,30,61,0.05)] backdrop-blur-sm transition duration-500 md:w-[12rem]"
            style={{ transform: `translate3d(${(pointer.x - 0.5) * 18}px, ${(pointer.y - 0.5) * 10}px, 0)` }}
          >
            <p
              className="text-[1.08rem] leading-[0.98] tracking-[-0.05em] text-[#111111]"
              style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
            >
              All materials were used for non-commercial and educational purposes only.
            </p>
          </div>
        </div>

        <div className="grid items-end gap-4 border-t border-[#171717]/12 pt-4 text-[0.72rem] uppercase tracking-[0.24em] text-[#111111]/66 md:grid-cols-3">
          <p>UX/UI Design</p>
          <p className="text-left md:text-center">Figma</p>
          <a href="#introduction" className="text-left transition hover:text-[#0f4aa4] md:text-right">
            Scroll into site
          </a>
        </div>
      </section>

      <section className="border-t border-[#171717]/14">
        <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-5 py-8 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_8rem] lg:px-10 lg:py-10">
          <div className="relative min-h-[12rem] overflow-hidden border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef1fe_0%,#e7eafb_48%,#dfe4f7_100%)] px-5 py-4">
            <div className="absolute left-5 top-4 h-3 w-[36%] border border-[#123d8d]/12 bg-white/45" />
            <div className="absolute left-9 top-8 h-3 w-[44%] border border-[#123d8d]/12 bg-white/45" />
            <div className="absolute left-16 top-12 h-12 w-[48%] border border-[#123d8d]/12 bg-white/58 px-4 py-3">
              <p className="text-[0.74rem] tracking-[-0.02em] text-[#22324c]">Yale in New Haven: Architecture and Urbanism</p>
            </div>
            <div className="absolute bottom-4 right-4 text-[0.72rem] uppercase tracking-[0.22em] text-[#1f2d48]/58">index card study</div>
          </div>

          <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_3rem] sm:items-start">
            <div className="space-y-1">
              {sectionLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-end justify-between gap-4 border-t border-[#171717]/12 py-2.5 text-[#111111] transition first:border-t-0 hover:text-[#0f4aa4]"
                >
                  <span className="text-[clamp(1.5rem,2.4vw,2.45rem)] leading-[0.92] tracking-[-0.06em]">
                    {item.label}
                  </span>
                  <span className="text-[0.76rem] uppercase tracking-[0.24em] text-[#111111]/38 transition group-hover:text-[#0f4aa4]">
                    {item.number}
                  </span>
                </a>
              ))}
            </div>
            <SectionIndex activeSection={activeSection} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1600px]">
        <SectionShell
          id="introduction"
          number="01"
          label="Introduction"
          title="The concept translated into an actual website"
          summary="The poster’s book-stack and caption-table composition becomes a first section with a living information model and anchored facts."
        >
          <div className="grid gap-8 xl:grid-cols-[minmax(16rem,0.9fr)_minmax(0,1.1fr)] xl:items-start">
            <div className="border border-[#171717]/10 bg-[linear-gradient(180deg,#f8f6f1_0%,#f0ede7_100%)] p-4">
              <div className="flex min-h-[28rem] items-end gap-2 overflow-hidden pt-8">
                <BookSpine label="Yale: A History" width="3.5rem" height="16rem" rotate={-1.5} />
                <BookSpine label="The Stones of Yale" width="2.8rem" height="10.5rem" rotate={1} />
                <BookSpine label="Yale" width="3rem" height="14rem" />
                <BookSpine label="O. Johnson" width="1.3rem" height="8rem" rotate={-1.5} />
                <BookSpine label="Stover at Yale" width="3.8rem" height="19rem" rotate={0.7} />
                <BookSpine label="Yale in New Haven: Architecture and Urbanism" width="4.2rem" height="18rem" rotate={-2} />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#171717]/10 pt-3 text-[0.72rem] uppercase tracking-[0.22em] text-[#111111]/52">
                <span>Editorial archive reference</span>
                <span>2004</span>
              </div>
            </div>

            <div className="border-t border-[#171717]/12">
              {introductionFacts.map((row) => (
                <div key={row.label} className="grid gap-4 border-b border-[#171717]/12 py-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-6">
                  <p className="text-[0.74rem] uppercase tracking-[0.24em] text-[#111111]">{row.label}</p>
                  <p className="max-w-[42rem] text-[1rem] leading-[1.55] tracking-[-0.02em] text-[#111111]/74">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="home-page"
          number="02"
          label="Home page"
          title="A homepage that feels editorial but works like a campus index"
          summary="The landing page keeps the dramatic title treatment, then hands off to real task layers: utility links, spotlight stories, admissions paths, and school exploration."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
            <div className="overflow-hidden border border-[#171717]/10 bg-[#faf7f2] shadow-[0_20px_50px_rgba(25,35,52,0.05)]">
              <div className="border-b border-[#171717]/10 px-4 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#111111]/55 md:px-5">
                Yale redesign homepage
              </div>
              <div className="grid gap-0 lg:grid-cols-[14rem_minmax(0,1fr)]">
                <aside className="border-b border-[#171717]/10 bg-[#f3efe8] p-4 lg:border-r lg:border-b-0">
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#111111]/48">Primary navigation</p>
                  <div className="mt-4 space-y-2 text-[0.92rem] tracking-[-0.02em] text-[#111111]/78">
                    {[
                      "Admissions",
                      "Academics",
                      "Research",
                      "Campus Life",
                      "News",
                      "Visit",
                    ].map((item) => (
                      <div key={item} className="border-t border-[#171717]/10 pt-2 first:border-t-0 first:pt-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>

                <div className="p-4 md:p-5">
                  <div className="grid gap-4 border-b border-[#171717]/10 pb-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)]">
                    <div>
                      <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Lead story</p>
                      <h3
                        className="mt-3 max-w-[11ch] text-[clamp(2.5rem,5.4vw,4.6rem)] leading-[0.88] tracking-[-0.065em] text-[#111111]"
                        style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
                      >
                        Yale in New Haven
                      </h3>
                      <p className="mt-4 max-w-[34rem] text-[1rem] leading-[1.6] tracking-[-0.02em] text-[#111111]/68">
                        The homepage leads with a story, not a slogan — but immediately exposes clear paths for prospective students, faculty, and the public.
                      </p>
                    </div>
                    <div className="flex flex-col justify-between border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef1fc_0%,#e6ebfb_100%)] p-4">
                      <div className="space-y-3">
                        <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#111111]/48">Find your path</p>
                        <div className="grid gap-2 text-[0.86rem] text-[#111111]/76">
                          <div className="border-t border-[#171717]/10 pt-2">Explore majors</div>
                          <div className="border-t border-[#171717]/10 pt-2">Visit New Haven</div>
                          <div className="border-t border-[#171717]/10 pt-2">Meet the schools</div>
                        </div>
                      </div>
                      <p className="mt-8 text-[0.72rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Task-based utility layer</p>
                    </div>
                  </div>

                  <div className="grid gap-4 pt-5 md:grid-cols-3">
                    {[
                      ["Research spotlight", "Lab work, funding, and public-facing breakthroughs grouped into concise modules."],
                      ["Admissions dates", "Deadlines, visit scheduling, and document checklists stay visible without burying the story layer."],
                      ["Campus voices", "Student and faculty reporting enters as modular cards, not disconnected microsites."],
                    ].map(([title, text]) => (
                      <div key={title} className="border border-[#171717]/10 p-4">
                        <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#111111]/46">Module</p>
                        <h4 className="mt-3 text-[1.08rem] leading-[1.05] tracking-[-0.04em] text-[#111111]">{title}</h4>
                        <p className="mt-3 text-[0.93rem] leading-[1.55] tracking-[-0.015em] text-[#111111]/65">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="border border-[#171717]/10 bg-[#f7f4ed] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#111111]/45">Homepage principles</p>
                <ul className="mt-4 space-y-3 text-[0.98rem] leading-[1.55] tracking-[-0.02em] text-[#111111]/72">
                  <li>• Oversized editorial hero balanced by fast utility access.</li>
                  <li>• Reusable modules let schools and departments keep identity while sharing one grid.</li>
                  <li>• News, admissions, and academics behave like parts of one institution.</li>
                </ul>
              </div>
              <div className="border border-[#123d8d]/12 bg-[linear-gradient(180deg,#f0f3fe_0%,#eaedf8_100%)] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#0f4aa4]">Mouse motion</p>
                <p className="mt-3 text-[0.96rem] leading-[1.58] tracking-[-0.02em] text-[#111111]/68">
                  Motion stays subtle: drifting paper layers, active section highlighting, and gentle hover emphasis rather than playful transitions.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="design-process"
          number="03"
          label="Design process"
          title="Poster energy, system discipline"
          summary="The original composition suggested a graphic system. The redesign converts that system into reusable web patterns, each with a clear job."
        >
          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="flex h-full flex-col justify-between border border-[#171717]/10 bg-[#f8f5ef] p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,35,52,0.05)]">
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.24em] text-[#0f4aa4]">Step {step.number}</p>
                  <h3 className="mt-4 text-[1.28rem] leading-[1.02] tracking-[-0.05em] text-[#111111]">{step.title}</h3>
                  <p className="mt-4 text-[0.96rem] leading-[1.58] tracking-[-0.02em] text-[#111111]/68">{step.detail}</p>
                </div>
                <p className="mt-10 border-t border-[#171717]/10 pt-4 text-[0.74rem] uppercase tracking-[0.22em] text-[#111111]/48">{step.output}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="about-yale"
          number="04"
          label="About Yale page"
          title="Institutional context without institutional fog"
          summary="The About page becomes a layered profile: what Yale is, how it is organized, why New Haven matters, and where to continue."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="border border-[#171717]/10 bg-[#f8f5ef] p-5">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#111111]/46">Page stack</p>
              <div className="mt-5 space-y-3">
                {[
                  ["Overview", "A one-screen answer to what Yale is and how the university is structured."],
                  ["History + New Haven", "Geographic and civic context integrated rather than hidden in secondary pages."],
                  ["Schools + leadership", "The constellation of schools appears as one navigable system."],
                  ["Public links", "Visit, directory, and contact services remain visible on every institutional page."],
                ].map(([title, text]) => (
                  <div key={title} className="border-t border-[#171717]/10 pt-3 first:border-t-0 first:pt-0">
                    <h3 className="text-[1.05rem] tracking-[-0.04em] text-[#111111]">{title}</h3>
                    <p className="mt-2 text-[0.94rem] leading-[1.55] tracking-[-0.02em] text-[#111111]/66">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["1701", "founding year", "Displayed as a contextual marker, not a lonely statistic tile."],
                ["14", "schools and programs", "Grouped by audience: undergraduate, graduate, professional, public."],
                ["New Haven", "city relationship", "Campus identity tied to place, architecture, and public history."],
                ["Open access", "service layer", "Directories, maps, and visit details remain one click away."],
              ].map(([value, label, text]) => (
                <div key={value + label} className="flex min-h-[12rem] flex-col justify-between border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef2fd_0%,#f8f5ef_100%)] p-5">
                  <div>
                    <p
                      className="text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[-0.08em] text-[#111111]"
                      style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
                    >
                      {value}
                    </p>
                    <p className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#0f4aa4]">{label}</p>
                  </div>
                  <p className="text-[0.94rem] leading-[1.55] tracking-[-0.02em] text-[#111111]/68">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="design-system"
          number="05"
          label="Design system"
          title="Formal typography, public-service clarity"
          summary="The system pulls from editorial seriousness and administrative legibility: one expressive serif, one civic sans, one restrained blue."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="space-y-4">
              <div className="border border-[#171717]/10 bg-[#f8f5ef] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#111111]/44">Typography</p>
                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Display serif</p>
                    <p
                      className="mt-2 text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.88] tracking-[-0.07em] text-[#111111]"
                      style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
                    >
                      Yale, re-articulated.
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Interface sans</p>
                    <p className="mt-2 text-[1rem] leading-[1.65] tracking-[0.01em] text-[#111111]/72">
                      PUBLIC INFORMATION LAYERS, TABULAR LABELS, SECTION INDEXES, SCHOOL NAVIGATION, UTILITIES, DATES.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#171717]/10 bg-[#f8f5ef] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#111111]/44">Layout rules</p>
                <ul className="mt-4 space-y-3 text-[0.96rem] leading-[1.58] tracking-[-0.02em] text-[#111111]/68">
                  <li>• Horizontal rules separate chapters instead of enclosing every element in rounded cards.</li>
                  <li>• A left-side numbering rail turns the case study into a readable sequence.</li>
                  <li>• Major pages use split density: generous headline zone, compressed detail zone.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {[
                ["Paper", "#f3f0ea", "Base background tuned away from pure white for archival warmth."],
                ["Ink", "#111111", "Used for headlines, rules, and dense labels."],
                ["Yale blue", "#0f4aa4", "Reserved for emphasis, active navigation, and italic title interruption."],
                ["Mist", "#eef2fd", "Soft structural tint for previews, archives, and academic cards."],
              ].map(([name, hex, text]) => (
                <div key={name} className="border border-[#171717]/10 bg-[#f8f5ef] p-4">
                  <div className="h-28 border border-[#171717]/8" style={{ background: hex }} />
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#111111]/44">{name}</p>
                      <p className="mt-2 text-[1.1rem] tracking-[-0.04em] text-[#111111]">{hex}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.92rem] leading-[1.55] tracking-[-0.02em] text-[#111111]/66">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="selected-news"
          number="06"
          label="Selected news page"
          title="News handled as an editorial system, not a pile of cards"
          summary="Stories are grouped by topic and importance, with one lead article and lighter secondary modules that keep the browsing rhythm calm and readable."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
            <div className="border border-[#171717]/10 bg-[#faf7f2] p-5 md:p-6">
              <div className="grid gap-4 border-b border-[#171717]/10 pb-5 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-end">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Selected news</p>
                  <h3
                    className="mt-3 max-w-[10ch] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.88] tracking-[-0.07em] text-[#111111]"
                    style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
                  >
                    Stories with institutional weight
                  </h3>
                </div>
                <div className="border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef2fd_0%,#e7ebfa_100%)] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#111111]/46">Filters</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[0.74rem] uppercase tracking-[0.18em] text-[#111111]/66">
                    {[
                      "Research",
                      "Campus",
                      "Arts",
                      "Admissions",
                    ].map((chip) => (
                      <span key={chip} className="border border-[#171717]/10 px-2.5 py-1.5">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="divide-y divide-[#171717]/10">
                {newsStories.map((story) => (
                  <article key={story.title} className="grid gap-4 py-5 md:grid-cols-[8rem_minmax(0,1fr)_5rem] md:items-start">
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#0f4aa4]">{story.section}</p>
                    <div>
                      <h4 className="text-[1.34rem] leading-[1.02] tracking-[-0.05em] text-[#111111]">{story.title}</h4>
                      <p className="mt-3 max-w-[42rem] text-[0.96rem] leading-[1.6] tracking-[-0.02em] text-[#111111]/67">{story.excerpt}</p>
                    </div>
                    <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#111111]/42 md:text-right">{story.date}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="border border-[#171717]/10 bg-[#f8f5ef] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#111111]/44">Why this matters</p>
              <div className="mt-4 space-y-4 text-[0.96rem] leading-[1.58] tracking-[-0.02em] text-[#111111]/68">
                <p>Readers can scan importance, topic, and relevance in one glance.</p>
                <p>Lead stories hold cultural weight; smaller pieces maintain continuity and freshness.</p>
                <p>The page behaves like a newsroom front — with university calm rather than media noise.</p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="academics"
          number="07"
          label="The academics page"
          title="A clearer route into schools, programs, and study formats"
          summary="Instead of one undifferentiated list of units, the academics page groups schools by user intent and exposes the next action immediately."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)]">
            <div className="border border-[#171717]/10 bg-[#faf7f2]">
              <div className="border-b border-[#171717]/10 px-5 py-4 text-[0.68rem] uppercase tracking-[0.22em] text-[#111111]/48">
                Academic finder
              </div>
              <div className="divide-y divide-[#171717]/10">
                {schools.map((item) => (
                  <article key={item.code} className="grid gap-4 px-5 py-5 md:grid-cols-[5rem_minmax(0,1fr)_13rem] md:items-start">
                    <p className="text-[1.2rem] leading-none tracking-[-0.06em] text-[#0f4aa4]">{item.code}</p>
                    <div>
                      <h3 className="text-[1.22rem] leading-[1.02] tracking-[-0.05em] text-[#111111]">{item.school}</h3>
                      <p className="mt-3 max-w-[38rem] text-[0.96rem] leading-[1.6] tracking-[-0.02em] text-[#111111]/68">{item.focus}</p>
                    </div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#111111]/46 md:text-right">{item.format}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef2fd_0%,#f7f4ed_100%)] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Support tools</p>
                <div className="mt-4 grid gap-2 text-[0.92rem] tracking-[-0.02em] text-[#111111]/72">
                  <div className="border-t border-[#171717]/10 pt-2">Program filters by degree type</div>
                  <div className="border-t border-[#171717]/10 pt-2">Faculty and research crossover links</div>
                  <div className="border-t border-[#171717]/10 pt-2">Straight path to funding and requirements</div>
                </div>
              </div>
              <div className="border border-[#171717]/10 bg-[#f8f5ef] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#111111]/44">Page tone</p>
                <p className="mt-4 text-[0.96rem] leading-[1.58] tracking-[-0.02em] text-[#111111]/68">
                  The academic layer is informative first, but it still belongs to the same editorial world through shared proportions, rules, and type behavior.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="contacts"
          number="08"
          label="Contacts page"
          title="Service information kept visible and calm"
          summary="The contact layer acts like a final confidence screen: who to reach, where to go, and how the institution receives questions."
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,0.86fr)]">
            <div className="grid gap-4 md:grid-cols-3">
              {contactItems.map((item) => (
                <article key={item.label} className="flex min-h-[16rem] flex-col justify-between border border-[#171717]/10 bg-[#f8f5ef] p-5">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#111111]/44">{item.label}</p>
                    <h3 className="mt-4 text-[1.34rem] leading-[1.05] tracking-[-0.05em] text-[#111111]">{item.value}</h3>
                  </div>
                  <p className="text-[0.94rem] leading-[1.58] tracking-[-0.02em] text-[#111111]/66">{item.hint}</p>
                </article>
              ))}
            </div>

            <div className="border border-[#123d8d]/10 bg-[linear-gradient(180deg,#eef2fd_0%,#f7f4ed_100%)] p-5 md:p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#0f4aa4]">Closing notes</p>
              <h3
                className="mt-4 max-w-[11ch] text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[0.9] tracking-[-0.07em] text-[#111111]"
                style={{ fontFamily: "var(--font-case-007-serif)", fontWeight: 600 }}
              >
                Serious, editorial, and actually usable.
              </h3>
              <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.62] tracking-[-0.02em] text-[#111111]/68">
                This reconstruction keeps the source image’s hierarchy, air, and Yale-like tone — but every prominent block is now a web layer with a purpose: browse, compare, find, contact, or continue reading.
              </p>
              <div className="mt-8 grid gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#111111]/54">
                <span>Route: /ui/case-007-yale-redesign</span>
                <span>Mode: responsive editorial website</span>
                <span>Interaction: anchor nav + restrained pointer parallax</span>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>

      <footer className="border-t border-[#171717]/14">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-5 py-6 text-[0.7rem] uppercase tracking-[0.24em] text-[#111111]/52 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>Case 007 · Yale redesign concept</p>
          <a href="#top" className="transition hover:text-[#0f4aa4]">
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
