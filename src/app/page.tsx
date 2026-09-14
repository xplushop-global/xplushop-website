import Link from "next/link";
import ProductCard from "@/components/product-card";
import { games } from "@/lib/games";
import { products } from "@/lib/products";

const featured = products.filter((product) => product.popular).slice(0, 6);

export default function Home() {
  return (
    <div className="noise min-h-full overflow-x-hidden bg-[#08070f] text-[#f5f3ff]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="absolute -left-48 -top-44 h-[620px] w-[620px] rounded-full bg-violet-700/20 blur-[130px]" /><div className="absolute right-[-210px] top-[24%] h-[560px] w-[560px] rounded-full bg-cyan-600/10 blur-[130px]" /><div className="grid-noise absolute inset-0 opacity-40" /></div>
      <main className="relative z-10">
        <section className="mx-auto max-w-[1320px] px-4 pb-16 pt-14 sm:px-7 sm:pt-20 lg:pb-24 lg:pt-28">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/[.1] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[.13em] text-violet-200"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" /> The fast lane for gamers</div>
            <h1 className="max-w-[760px] text-[clamp(3.5rem,8vw,7rem)] font-black leading-[.88] tracking-[-.075em]">Power up.<br /><span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Play harder.</span></h1>
            <p className="mt-7 max-w-[530px] text-[16px] leading-relaxed text-white/55 sm:text-[18px]">Top up instantly with the best rates. From PUBG UC to MLBB Diamonds, every transaction is encrypted, verified, and on its way in 1–5 minutes.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3"><Link href="/shop" className="button-shine flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 text-[14px] font-extrabold text-[#0b0912] shadow-[0_14px_36px_rgba(139,92,246,.26)] transition hover:-translate-y-0.5">Browse games <span>→</span></Link><a href="#featured" className="flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[.045] px-6 text-[14px] font-semibold text-white transition hover:border-violet-300/50 hover:bg-white/[.08]">✨ Featured drops</a></div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-mono uppercase tracking-[.11em] text-white/40"><span className="flex items-center gap-2"><span className="text-cyan-300">◷</span> 1–5 min delivery</span><span className="flex items-center gap-2"><span className="text-violet-300">◈</span> ID encrypted</span><span className="flex items-center gap-2"><span className="text-fuchsia-300">◉</span> 24/7 support</span></div>
          </div>
        </section>

        <section className="border-y border-white/[.07] bg-white/[.02]"><div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-white/[.08] px-4 py-5 sm:grid-cols-4 sm:px-7"><Stat value="10" label="Games ready" /><Stat value="1–5m" label="Delivery time" /><Stat value="24/7" label="Support online" /><Stat value="$0.30" label="Starting price" /></div></section>

        <section id="featured" className="mx-auto max-w-[1320px] px-4 py-20 sm:px-7 lg:py-28"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="mb-3 text-[11px] font-mono uppercase tracking-[.2em] text-violet-300">What’s hot right now</p><h2 className="text-4xl font-black tracking-[-.05em]">Featured drops</h2></div><Link href="/shop" className="hidden text-sm font-bold text-cyan-300 hover:text-cyan-200 sm:block">View all games →</Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>

        <section className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-7 lg:pb-28"><div className="mb-8 flex items-end justify-between"><div><p className="mb-3 text-[11px] font-mono uppercase tracking-[.2em] text-cyan-300">Choose your arena</p><h2 className="text-4xl font-black tracking-[-.05em]">Games & top ups</h2></div><Link href="/shop" className="text-sm font-bold text-cyan-300 hover:text-cyan-200">Browse catalog →</Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{games.map((game) => <Link key={game.slug} href={`/shop?game=${game.slug}`} className="group rounded-2xl border border-white/[.09] bg-white/[.035] p-4 transition hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/[.08]"><span className={`flex h-11 w-11 items-center justify-center rounded-xl ${game.color} text-2xl shadow-lg`}>{game.icon}</span><p className="mt-4 text-sm font-bold text-white/85 group-hover:text-white">{game.name}</p><p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-white/35">Top up now →</p></Link>)}</div></section>
      </main>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="px-3 text-center first:pl-0 last:pr-0"><div className="text-xl font-black text-cyan-200 sm:text-2xl">{value}</div><div className="mt-1 text-[10px] font-mono uppercase tracking-[.12em] text-white/35">{label}</div></div>; }
