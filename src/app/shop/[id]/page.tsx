"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/cart-context";
import { products } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { addItem } = useCart();
  const product = products.find((item) => item.id === params.id);
  const [playerId, setPlayerId] = useState("");
  const [email, setEmail] = useState("");
  const [serverId, setServerId] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  if (!product) {
    return <div className="min-h-full bg-[#060816] px-6 py-24 text-center text-white"><h1 className="text-3xl font-black">Top-up not found</h1><Link href="/shop" className="mt-6 inline-block text-cyan-300 underline">Return to store</Link></div>;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!product) return;
    if (!playerId.trim() || !email.trim()) {
      setError("Player ID and email are required.");
      return;
    }
    addItem({ product, playerId: playerId.trim(), email: email.trim(), serverId: serverId.trim() || undefined, note: note.trim() || undefined });
    router.push("/cart");
  }

  return (
    <div className="min-h-full bg-[#060816] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
        <Link href="/shop" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">← Back to top-up store</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover opacity-80" />
            <span className="absolute text-8xl drop-shadow-2xl" aria-hidden="true">🎮</span>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{product.game} · {product.category}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">{product.name}</h1>
            {product.bonus && <p className="mt-3 inline-block rounded-full bg-fuchsia-500/15 px-3 py-1 text-sm font-bold text-fuchsia-300">{product.bonus}</p>}
            <p className="mt-6 text-4xl font-black text-white">${product.price.toFixed(2)} <span className="text-base font-medium text-slate-500">USD</span></p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div><label htmlFor="player-id" className="mb-2 block text-sm font-semibold text-slate-200">Player ID <span className="text-cyan-300">*</span></label><input id="player-id" required value={playerId} onChange={(event) => setPlayerId(event.target.value)} placeholder="Enter your in-game Player ID" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/70" /></div>
              <div><label htmlFor="topup-email" className="mb-2 block text-sm font-semibold text-slate-200">Email <span className="text-cyan-300">*</span></label><input id="topup-email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="For order delivery updates" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/70" /></div>
              <div><label htmlFor="server-id" className="mb-2 block text-sm font-semibold text-slate-200">Server ID <span className="text-slate-500">(optional)</span></label><input id="server-id" value={serverId} onChange={(event) => setServerId(event.target.value)} placeholder="Required for some games" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/70" /></div>
              <div><label htmlFor="topup-note" className="mb-2 block text-sm font-semibold text-slate-200">Note <span className="text-slate-500">(optional)</span></label><textarea id="topup-note" value={note} onChange={(event) => setNote(event.target.value)} rows={3} placeholder="Anything we should know?" className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/70" /></div>
              <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm font-semibold text-amber-200">⚠️ Double check Player ID, wrong ID no refund</div>
              {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3.5 font-black text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.2)] transition hover:brightness-110">Add to Cart · ${product.price.toFixed(2)}</button>
            </form>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-slate-400"><div className="rounded-xl border border-white/10 p-3"><span className="block text-xl">🪪</span><span className="mt-2 block">1. Enter ID</span></div><div className="rounded-xl border border-white/10 p-3"><span className="block text-xl">💳</span><span className="mt-2 block">2. Pay securely</span></div><div className="rounded-xl border border-white/10 p-3"><span className="block text-xl">⚡</span><span className="mt-2 block">3. Instant delivery</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
