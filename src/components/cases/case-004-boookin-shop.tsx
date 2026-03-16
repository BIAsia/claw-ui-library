"use client";

import { useEffect, useMemo, useState } from "react";
import { Archivo, Questrial } from "next/font/google";

const displayFace = Archivo({
  subsets: ["latin"],
  variable: "--font-case-004-display",
  weight: ["400", "500", "600", "700"],
});

const uiFace = Questrial({
  subsets: ["latin"],
  variable: "--font-case-004-ui",
  weight: ["400"],
});

type Product = {
  id: string;
  artist: string;
  title: string;
  price: number;
  category: "all" | "painting" | "photography" | "editorial" | "used";
  year: number;
  location: string;
  note: string;
  palette: {
    paper: string;
    ink: string;
    accent: string;
    border?: string;
  };
  cover: "paintings" | "green-essay" | "fliri" | "bastard" | "capital" | "caption" | "davison" | "today";
  size: "tall" | "medium" | "square";
};

const inventory: Product[] = [
  {
    id: "paintings",
    artist: "Hayley Vey",
    title: "Paintings",
    price: 50,
    category: "painting",
    year: 2022,
    location: "Shelf A2",
    note: "Gallery softback",
    palette: { paper: "#ebe6df", ink: "#171310", accent: "#e8ddd4", border: "#d8d1c9" },
    cover: "paintings",
    size: "tall",
  },
  {
    id: "something-free",
    artist: "Sarah Megoy Espiyon",
    title: "Something Free",
    price: 22,
    category: "editorial",
    year: 2019,
    location: "Shelf B1",
    note: "Humanism / essay",
    palette: { paper: "#76a86a", ink: "#161616", accent: "#d2d3ca", border: "#b9c3b3" },
    cover: "green-essay",
    size: "medium",
  },
  {
    id: "replace-me",
    artist: "Michael Fliri",
    title: "Replace Me As The Substitute",
    price: 19,
    category: "used",
    year: 2011,
    location: "Shelf C4",
    note: "Rare used copy",
    palette: { paper: "#f0efed", ink: "#181818", accent: "#d8d4cf", border: "#d2cecb" },
    cover: "fliri",
    size: "tall",
  },
  {
    id: "bastard-countryside",
    artist: "Robin Friend",
    title: "Bastard Countryside",
    price: 70,
    category: "used",
    year: 2020,
    location: "Shelf D2",
    note: "Signed edition",
    palette: { paper: "#d97d58", ink: "#101010", accent: "#285a6e", border: "#ae5b39" },
    cover: "bastard",
    size: "medium",
  },
  {
    id: "capital-is-dead",
    artist: "Mckenzie Wark",
    title: "Capital Is Dead Is This Something Worse?",
    price: 17,
    category: "editorial",
    year: 2019,
    location: "Shelf A4",
    note: "Theory paperback",
    palette: { paper: "#ececec", ink: "#363636", accent: "#d5d5d5", border: "#d8d8d8" },
    cover: "capital",
    size: "medium",
  },
  {
    id: "caption",
    artist: "Alberto Garutti",
    title: "Didascalia / Caption",
    price: 35,
    category: "painting",
    year: 2016,
    location: "Shelf B3",
    note: "Exhibition reader",
    palette: { paper: "#f5f3ef", ink: "#1c1a18", accent: "#c6d0b0", border: "#ddd6ca" },
    cover: "caption",
    size: "medium",
  },
  {
    id: "photographs",
    artist: "Jack Davison",
    title: "Photographs",
    price: 50,
    category: "photography",
    year: 2021,
    location: "Shelf C2",
    note: "Studio monograph",
    palette: { paper: "#cecbc7", ink: "#101010", accent: "#b4afa8", border: "#beb9b3" },
    cover: "davison",
    size: "square",
  },
  {
    id: "painting-today",
    artist: "Tony Godfrey",
    title: "Painting Today",
    price: 29,
    category: "painting",
    year: 2009,
    location: "Shelf D5",
    note: "Reference survey",
    palette: { paper: "#ddd2c2", ink: "#17328d", accent: "#ede1cf", border: "#d6c8b8" },
    cover: "today",
    size: "medium",
  },
];

const categoryOptions = [
  { value: "all", label: "All" },
  { value: "painting", label: "Painting" },
  { value: "photography", label: "Photography" },
  { value: "editorial", label: "Editorial" },
  { value: "used", label: "Used" },
] as const;

type CategoryValue = (typeof categoryOptions)[number]["value"];
type SortValue = "featured" | "price-low" | "price-high" | "title" | "year";

function euro(value: number) {
  return `€ ${value}`;
}

function CoverArt({ product, active }: { product: Product; active: boolean }) {
  const commonStyle = {
    backgroundColor: product.palette.paper,
    color: product.palette.ink,
    borderColor: product.palette.border ?? product.palette.accent,
    boxShadow: active ? "0 22px 36px rgba(25, 18, 13, 0.12)" : "0 12px 24px rgba(25, 18, 13, 0.08)",
  };

  const sizeClass =
    product.size === "square"
      ? "aspect-square w-[66%]"
      : product.size === "tall"
        ? "aspect-[0.72] w-[42%]"
        : "aspect-[0.78] w-[44%]";

  return (
    <div
      className={`relative mx-auto border transition duration-500 ease-out ${sizeClass} ${active ? "-translate-y-1 scale-[1.035]" : "scale-100"}`}
      style={commonStyle}
    >
      {product.cover === "paintings" && (
        <div className="flex h-full items-center justify-center text-[0.48rem] uppercase tracking-[0.16em] text-[#2d2622] sm:text-[0.56rem]">
          Paintings
        </div>
      )}

      {product.cover === "green-essay" && (
        <>
          <div className="absolute inset-x-0 top-0 h-[22%] overflow-hidden border-b border-black/20 bg-[#d1d1ce]">
            <div className="absolute left-[9%] top-[28%] h-[40%] w-[42%] rounded-full bg-[radial-gradient(circle_at_35%_40%,rgba(255,255,255,0.35),rgba(0,0,0,0.92)_70%)] opacity-80" />
            <div className="absolute right-[10%] top-[24%] h-[45%] w-[34%] rounded-full bg-[radial-gradient(circle_at_40%_45%,rgba(255,255,255,0.3),rgba(0,0,0,0.9)_72%)] opacity-85" />
          </div>
          <div className="absolute left-[9%] top-[7%] text-[0.35rem] uppercase tracking-[0.18em] text-black/75 sm:text-[0.42rem]">
            Something free
          </div>
          <div className="absolute inset-x-[10%] bottom-[12%] text-[0.34rem] leading-[1.15] uppercase tracking-[0.08em] text-black/70 sm:text-[0.42rem]">
            Humanisme
            <br />
            of error
          </div>
        </>
      )}

      {product.cover === "fliri" && (
        <>
          <div className="absolute left-[7%] top-[8%] text-[0.45rem] font-medium uppercase tracking-[0.14em] sm:text-[0.56rem]">
            Michael Fliri
          </div>
          <div className="absolute inset-x-[18%] top-[24%] h-[36%] overflow-hidden bg-[#222]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,rgba(255,255,255,0.78),transparent_18%),linear-gradient(180deg,#2e2e2e_0%,#050505_65%,#2b2b2b_100%)]" />
            <div className="absolute left-[38%] top-[10%] h-[72%] w-[24%] rounded-[40%] border border-white/25 bg-[linear-gradient(180deg,#d8d8d8_0%,#7e7e7e_45%,#f4f4f4_100%)] opacity-95" />
          </div>
          <div className="absolute left-[7%] bottom-[15%] text-[0.34rem] uppercase leading-[1.1] tracking-[0.08em] text-black/65 sm:text-[0.42rem]">
            Replace me
            <br />
            as the substitute
          </div>
        </>
      )}

      {product.cover === "bastard" && (
        <>
          <div className="absolute inset-[8%] border border-black/35 bg-[#d78a67] p-[5%]">
            <div className="relative h-full w-full border border-black/30 bg-[#2a6072]">
              <div className="absolute inset-[6%] bg-[radial-gradient(circle_at_50%_70%,rgba(255,215,153,0.55),transparent_18%),linear-gradient(180deg,#8894a6_0%,#346076_42%,#5a7b4d_78%,#7a6a49_100%)]" />
              <div className="absolute inset-[15%] opacity-80 [background-image:linear-gradient(145deg,transparent_0_35%,rgba(255,255,255,0.22)_36%,transparent_38%),linear-gradient(35deg,transparent_0_55%,rgba(255,255,255,0.18)_56%,transparent_58%)]" />
            </div>
          </div>
          <div className="absolute left-[12%] top-[10%] text-[0.36rem] uppercase tracking-[0.18em] text-[#7c1820] sm:text-[0.45rem]">
            Bastard Countryside
          </div>
          <div className="absolute inset-x-[12%] bottom-[11%] text-center text-[0.38rem] uppercase tracking-[0.16em] sm:text-[0.48rem]">
            Robin Friend
          </div>
        </>
      )}

      {product.cover === "capital" && (
        <div className="flex h-full flex-col gap-[4%] px-[12%] py-[9%] text-[0.5rem] leading-none font-medium tracking-[-0.04em] text-[#696969] sm:text-[0.62rem]">
          {[
            "capital × is ×",
            "dead ×",
            "is × this ×",
            "something ×",
            "worse? ×",
            "mckenzie ×",
            "wark ×",
          ].map((line) => (
            <div key={line} className="flex items-center gap-[0.18rem]">
              <span className="inline-flex rounded-full border border-[#d6d6d6] px-[0.32rem] py-[0.16rem]">{line}</span>
            </div>
          ))}
        </div>
      )}

      {product.cover === "caption" && (
        <>
          <div className="absolute inset-[12%] overflow-hidden bg-[#f4f4ef]">
            <div className="absolute inset-[8%] bg-[linear-gradient(180deg,#ebebe5_0%,#f6f6f1_52%,#d1d2ca_100%)]" />
            <div className="absolute left-[40%] top-[18%] h-[45%] w-[16%] rounded-t-full rounded-b-[35%] bg-[linear-gradient(180deg,#7d9f54_0%,#436a2c_100%)]" />
            <div className="absolute left-[34%] top-[6%] h-[16%] w-[28%] rounded-b-full bg-[radial-gradient(circle_at_50%_40%,#7ea162_0%,#4e6f33_55%,transparent_56%)]" />
            <div className="absolute left-[27%] top-[18%] h-[14%] w-[20%] rounded-full bg-[radial-gradient(circle_at_50%_50%,#718b4a_0%,#425928_60%,transparent_62%)]" />
            <div className="absolute right-[26%] top-[20%] h-[16%] w-[18%] rounded-full bg-[radial-gradient(circle_at_50%_50%,#7d9752_0%,#46612c_60%,transparent_62%)]" />
            <div className="absolute inset-x-[18%] bottom-[15%] h-[7%] bg-[linear-gradient(90deg,#beb9b1,#cbc4bb,#b3aea6)]" />
          </div>
        </>
      )}

      {product.cover === "davison" && (
        <div className="flex h-full flex-col justify-start px-[9%] py-[8%] text-[0.9rem] font-semibold leading-[0.92] tracking-[-0.06em] text-[#111] sm:text-[1.1rem]">
          <span>Jack</span>
          <span>Davison</span>
          <span className="mt-[10%]">Photo</span>
          <span>graphs</span>
        </div>
      )}

      {product.cover === "today" && (
        <div className="flex h-full items-center justify-center px-[10%] text-center text-[0.95rem] font-normal leading-[0.84] tracking-[-0.08em] text-[#17328d] sm:text-[1.18rem]">
          <div>
            PAI^T
            <br />
            / ing
            <br />
            tOdAY
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  active,
  favorite,
  inCart,
  onToggleFavorite,
  onAddToCart,
}: {
  product: Product;
  active: boolean;
  favorite: boolean;
  inCart: boolean;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
}) {
  return (
    <article className="group relative flex min-h-[18rem] flex-col justify-between bg-[#f4f1ea] transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:z-10 hover:bg-[#f7f3ed] sm:min-h-[22rem] lg:min-h-[23rem]">
      <div className="absolute inset-x-0 top-0 h-px bg-black/18" />
      <div className="absolute inset-y-0 right-0 w-px bg-black/18 group-last:hidden" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.85), transparent 38%)" }} />

      <div className="relative z-10 flex items-start justify-between gap-3 px-3 pb-3 pt-2 text-[0.5rem] uppercase tracking-[0.12em] text-black/78 sm:px-4 sm:pt-3 sm:text-[0.56rem]">
        <span className="max-w-[48%]">{product.artist}</span>
        <span className="max-w-[44%] text-right">{product.title}</span>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-3 pt-1 sm:px-8">
        <CoverArt product={product} active={active} />

        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={favorite ? `Remove ${product.title} from favourites` : `Add ${product.title} to favourites`}
          className={`absolute right-3 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border text-[0.72rem] transition duration-300 sm:right-4 sm:top-3 ${favorite ? "border-[#f0a64a] bg-[#f0a64a] text-[#17120d]" : "border-black/16 bg-white/85 text-black/55 hover:border-black/30 hover:text-black"}`}
        >
          ★
        </button>

        <div className="pointer-events-none absolute inset-x-6 bottom-2 flex translate-y-3 items-center justify-center opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-8 sm:bottom-4">
          <button
            type="button"
            onClick={onAddToCart}
            className={`pointer-events-auto inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.18em] transition duration-300 sm:text-[0.62rem] ${inCart ? "border-[#17120d] bg-[#17120d] text-[#f5f1e9]" : "border-black/18 bg-[#f8f5ef]/95 text-[#17120d] hover:bg-white"}`}
          >
            <span>{inCart ? "Added" : "Quick add"}</span>
            <span>+</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-3 px-3 pb-3 text-[0.56rem] uppercase tracking-[0.14em] text-black/72 sm:px-4 sm:pb-4 sm:text-[0.6rem]">
        <div>
          <div className="text-[0.88rem] tracking-[-0.06em] text-[#19130f] sm:text-[1rem]">{euro(product.price)}</div>
          <div className="mt-1 text-black/45">{product.location}</div>
        </div>
        <div className="text-right text-black/45">
          <div>{product.note}</div>
          <div className="mt-1">{product.year}</div>
        </div>
      </div>
    </article>
  );
}

export function Case004BoookinShop() {
  const [category, setCategory] = useState<CategoryValue>("all");
  const [sortBy, setSortBy] = useState<SortValue>("featured");
  const [search, setSearch] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(["paintings", "replace-me"]);
  const [cart, setCart] = useState<string[]>(["bastard-countryside"]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPointer({ x, y });
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const visibleProducts = useMemo(() => {
    const lowered = search.trim().toLowerCase();

    const filtered = inventory.filter((product) => {
      const matchesCategory = category === "all" ? true : product.category === category;
      const matchesSearch =
        lowered.length === 0
          ? true
          : `${product.artist} ${product.title} ${product.note}`.toLowerCase().includes(lowered);
      const matchesFavorites = showFavoritesOnly ? favorites.includes(product.id) : true;

      return matchesCategory && matchesSearch && matchesFavorites;
    });

    const sorted = [...filtered];

    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "title") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "year") sorted.sort((a, b) => b.year - a.year);

    return sorted;
  }, [category, favorites, search, showFavoritesOnly, sortBy]);

  const cartItems = useMemo(
    () => cart.map((id) => inventory.find((item) => item.id === id)).filter(Boolean) as Product[],
    [cart],
  );

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const addToCart = (id: string) => {
    setCart((current) => (current.includes(id) ? current : [...current, id]));
    setCartOpen(true);
  };

  return (
    <main className={`${displayFace.variable} ${uiFace.variable} min-h-screen bg-[#f3efe8] text-[#181310]`}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.95), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.5), rgba(243,239,232,0))`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] [background-size:12px_12px]" />

      <div className="relative mx-auto min-h-screen max-w-[1520px] px-2 py-2 sm:px-3 sm:py-3 lg:px-4">
        <div className="relative overflow-hidden border border-black/20 bg-[#f4f1ea] shadow-[0_28px_80px_rgba(24,19,16,0.08)]">
          <header className="relative border-b border-black/20 bg-[#f6f2eb]">
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[1fr_auto_1fr] sm:px-5 lg:px-6">
              <div className="flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.08em] sm:text-[0.92rem]">
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    setSearch("");
                    setShowFavoritesOnly(false);
                  }}
                  className="transition hover:opacity-65"
                >
                  BOOOKIN
                </button>
                <label className="hidden items-center gap-2 border-l border-black/15 pl-3 text-black/65 sm:flex">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M16 16l4 4" />
                  </svg>
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search shelf"
                    className="w-24 bg-transparent text-[0.72rem] uppercase tracking-[0.12em] text-black placeholder:text-black/35 outline-none lg:w-36"
                  />
                </label>
              </div>

              <nav className="flex items-center gap-4 justify-self-end text-[0.72rem] uppercase tracking-[0.12em] sm:justify-self-center sm:text-[0.86rem]">
                <button type="button" className="inline-flex items-center gap-2 text-[#1d1712]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f0a64a]" />
                  <span>Books</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategory((current) => (current === "used" ? "all" : "used"))}
                  className={`transition ${category === "used" ? "text-[#1d1712]" : "text-black/65 hover:text-black"}`}
                >
                  Used
                </button>
                <button
                  type="button"
                  onClick={() => setAboutOpen((current) => !current)}
                  className={`transition ${aboutOpen ? "text-[#1d1712]" : "text-black/65 hover:text-black"}`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => setCartOpen((current) => !current)}
                  className="transition hover:text-black"
                >
                  Cart {cart.length > 0 ? `(${cart.length})` : ""}
                </button>
              </nav>

              <div className="hidden justify-self-end text-[0.6rem] uppercase tracking-[0.14em] text-black/45 sm:block">
                Independent art book shelf
              </div>
            </div>

            <div className="grid gap-3 border-t border-black/20 px-4 py-2 text-[0.56rem] uppercase tracking-[0.14em] sm:grid-cols-[1.1fr_1fr_1fr] sm:px-5 lg:px-6">
              <label className="flex items-center justify-between gap-3 border-r-0 text-black/62 sm:border-r sm:border-black/12 sm:pr-4">
                <span>Category</span>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value as CategoryValue)}
                  className="bg-transparent text-right text-[#1d1712] outline-none"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center justify-between gap-3 text-black/62 sm:border-r sm:border-black/12 sm:px-4">
                <span>Sort by</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortValue)}
                  className="bg-transparent text-right text-[#1d1712] outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price ↑</option>
                  <option value="price-high">Price ↓</option>
                  <option value="title">Title</option>
                  <option value="year">Newest</option>
                </select>
              </label>

              <div className="flex items-center justify-between gap-3 text-black/62 sm:pl-4">
                <span>Our favourites</span>
                <button
                  type="button"
                  onClick={() => setShowFavoritesOnly((current) => !current)}
                  className={`rounded-full border px-2.5 py-1 transition ${showFavoritesOnly ? "border-[#1d1712] bg-[#1d1712] text-[#f4f1ea]" : "border-black/14 text-[#1d1712] hover:border-black/30"}`}
                >
                  {showFavoritesOnly ? "On" : "All"}
                </button>
              </div>
            </div>
          </header>

          {aboutOpen && (
            <section className="grid gap-4 border-b border-black/20 bg-[#f7f4ee] px-4 py-4 text-[0.76rem] leading-6 text-black/70 sm:grid-cols-[1.1fr_0.9fr] sm:px-5 lg:px-6">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">About the shelf</p>
                <p className="mt-2 max-w-2xl">
                  A reconstruction of the Booookin reference as a real storefront layer: searchable inventory, sortable categories, favourites, quick-add cart flow, and a responsive shelf grid that keeps the original editorial restraint.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[#1d1712]">
                <div>
                  <div className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Titles</div>
                  <div className="mt-1 text-[1.4rem] tracking-[-0.08em]">08</div>
                </div>
                <div>
                  <div className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Used finds</div>
                  <div className="mt-1 text-[1.4rem] tracking-[-0.08em]">02</div>
                </div>
                <div>
                  <div className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Favourites</div>
                  <div className="mt-1 text-[1.4rem] tracking-[-0.08em]">{favorites.length.toString().padStart(2, "0")}</div>
                </div>
              </div>
            </section>
          )}

          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
            <section>
              <div className="grid grid-cols-2 border-b border-black/20 px-4 py-2 text-[0.56rem] uppercase tracking-[0.14em] text-black/45 sm:grid-cols-[repeat(4,minmax(0,1fr))] sm:px-5 lg:px-6">
                <span>{visibleProducts[0]?.artist ?? "Shelf results"}</span>
                <span className="hidden sm:block text-center">Curated stock</span>
                <span className="hidden sm:block text-center">Independent publishing</span>
                <span className="text-right sm:text-right">{visibleProducts[visibleProducts.length - 1]?.title ?? "No titles"}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                {visibleProducts.map((product) => {
                  const favorite = favorites.includes(product.id);
                  const inCart = cart.includes(product.id);
                  const active = hoveredId === product.id;

                  return (
                    <div
                      key={product.id}
                      onPointerEnter={() => setHoveredId(product.id)}
                      onPointerLeave={() => setHoveredId(null)}
                    >
                      <ProductCard
                        product={product}
                        active={active}
                        favorite={favorite}
                        inCart={inCart}
                        onToggleFavorite={() => toggleFavorite(product.id)}
                        onAddToCart={() => addToCart(product.id)}
                      />
                    </div>
                  );
                })}
              </div>

              {visibleProducts.length === 0 && (
                <div className="flex min-h-[18rem] flex-col items-center justify-center border-t border-black/20 px-6 text-center">
                  <p className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">No matches</p>
                  <p className="mt-3 max-w-md text-sm text-black/65">
                    Try another category, clear the favourites filter, or search by artist and title.
                  </p>
                </div>
              )}
            </section>

            <aside className="border-l border-black/20 bg-[#f7f4ee]">
              <div className="sticky top-0 space-y-6 p-4 sm:p-5 lg:p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Shelf overview</p>
                    <span className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">{visibleProducts.length} shown</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-[#1d1712]">
                    <div className="border border-black/10 bg-white/45 p-3">
                      <div className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Average</div>
                      <div className="mt-2 text-[1.5rem] leading-none tracking-[-0.08em]">
                        {euro(
                          Math.round(
                            visibleProducts.reduce((sum, item) => sum + item.price, 0) /
                              Math.max(visibleProducts.length, 1),
                          ),
                        )}
                      </div>
                    </div>
                    <div className="border border-black/10 bg-white/45 p-3">
                      <div className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Favorites</div>
                      <div className="mt-2 text-[1.5rem] leading-none tracking-[-0.08em]">{favorites.length}</div>
                    </div>
                  </div>
                </div>

                <div className="border border-black/10 bg-white/55 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Cart</p>
                    <button
                      type="button"
                      onClick={() => setCartOpen((current) => !current)}
                      className="text-[0.58rem] uppercase tracking-[0.16em] text-[#1d1712]"
                    >
                      {cartOpen ? "Hide" : "Open"}
                    </button>
                  </div>

                  <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${cartOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="mt-4 space-y-3">
                        {cartItems.length === 0 ? (
                          <p className="text-sm text-black/55">Your cart is empty.</p>
                        ) : (
                          cartItems.map((item) => (
                            <div key={item.id} className="flex items-start justify-between gap-3 border-t border-black/8 pt-3 first:border-t-0 first:pt-0">
                              <div>
                                <div className="text-[0.62rem] uppercase tracking-[0.14em] text-black/42">{item.artist}</div>
                                <div className="mt-1 text-sm text-[#1d1712]">{item.title}</div>
                              </div>
                              <div className="text-sm text-[#1d1712]">{euro(item.price)}</div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-[#1d1712]">
                    <span className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Subtotal</span>
                    <span className="text-lg tracking-[-0.06em]">{euro(cartTotal)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.16em] text-black/42">Selected cues</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      category === "all" ? "all categories" : category,
                      sortBy.replace("-", " "),
                      showFavoritesOnly ? "favourites only" : "full shelf",
                    ].map((tag) => (
                      <span key={tag} className="rounded-full border border-black/12 bg-white/55 px-3 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-[#1d1712]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
