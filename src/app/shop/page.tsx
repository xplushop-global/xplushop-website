"use client";

import { useMemo, useState } from "react";
import GameCard from "@/components/game-card";
import ProductCard from "@/components/product-card";
import { games } from "@/lib/games";
import { products } from "@/lib/products";

const categories = ["All", "UC", "Diamonds", "Robux", "V-Bucks", "Chips", "Packs", "Membership", "Tokens", "Pass", "Subscription", "CP"];

export default function ShopPage() {
  const [selectedGame, setSelectedGame] = useState(games[0].slug);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const visibleProducts = useMemo(() => products.filter((product) => {
    const gameMatch = product.gameSlug === selectedGame;
    const categoryMatch = category === "All" || product.category === category;
    const searchMatch = product.game.toLowerCase().includes(search.toLowerCase()) || product.name.toLowerCase().includes(search.toLowerCase());
    return gameMatch && categoryMatch && searchMatch;
  }), [category, search, selectedGame]);

  const selectedGameInfo = games.find((game) => game.slug === selectedGame);

  return (
    <div className="min-h-full bg-[#060816] text-slate-100">
      <section className="border-b border-cyan-400/10 bg-gradient-to-r from-indigo-950/60 via-[#0b1027] to-purple-950/50 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">⚡ Instant delivery · Secure checkout</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Gaming Top-Up Store</h1>
          <p className="mt-4 max-w-2xl text-slate-400">Power up your favorite games with fast, reliable digital credits. Enter your player details at checkout and receive your top-up instantly.</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[250px_1fr] lg:px-8">
        <aside>
          <div className="sticky top-6">
            <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Select game</h2><span className="text-xs text-slate-500">{games.length} games</span></div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {games.map((game) => <GameCard key={game.slug} game={game} selected={selectedGame === game.slug} onClick={() => { setSelectedGame(game.slug); setCategory("All"); }} />)}
            </div>
          </div>
        </aside>

        <main>
          <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:flex-row lg:items-center lg:justify-between">
            <div><p className="text-sm text-slate-500">Showing products for</p><h2 className="text-2xl font-black text-white">{selectedGameInfo?.icon} {selectedGameInfo?.name}</h2></div>
            <label className="relative block lg:w-72"><span className="sr-only">Search by game or product</span><span className="pointer-events-none absolute left-3 top-2.5 text-slate-500">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search game or top-up" className="w-full rounded-xl border border-white/10 bg-black/20 py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/60" /></label>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition-colors ${category === item ? "border-cyan-400 bg-cyan-400 text-slate-950" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/50 hover:text-white"}`}>{item}</button>)}
          </div>

          {visibleProducts.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-2xl border border-dashed border-white/15 p-16 text-center"><p className="text-4xl">🎮</p><h3 className="mt-4 text-xl font-bold">No top-ups found</h3><p className="mt-2 text-sm text-slate-500">Try another category or search term.</p></div>}
        </main>
      </div>
    </div>
  );
}
