import Link from "next/link";
import type { GameProduct } from "@/lib/products";

type ProductCardProps = {
  product: GameProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.id}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-4 transition-all hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_28px_rgba(34,211,238,0.15)]">
      {product.popular && <span className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">Popular</span>}
      <div className="mb-4 flex h-28 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
        <img src={product.image} alt={`${product.game} ${product.name}`} className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-110 group-hover:opacity-100" />
        <span className="absolute text-4xl drop-shadow-lg" aria-hidden="true">🎮</span>
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-cyan-300/70">{product.game}</p>
      <h3 className="mt-1 text-lg font-bold text-white">{product.name}</h3>
      {product.bonus && <p className="mt-1 text-sm font-semibold text-fuchsia-300">{product.bonus}</p>}
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xl font-black text-white">${product.price.toFixed(2)}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300"><span aria-hidden="true">⚡</span> Instant</span>
      </div>
    </Link>
  );
}
