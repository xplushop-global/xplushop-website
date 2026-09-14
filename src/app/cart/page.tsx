"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  return (
    <div className="min-h-full bg-[#060816] px-6 py-12 text-slate-100 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Your top-ups</p>
        <h1 className="mt-3 text-4xl font-black text-white">Shopping Cart</h1>
        {!items.length ? <div className="mt-10 rounded-2xl border border-dashed border-white/15 p-16 text-center"><p className="text-5xl">🛒</p><h2 className="mt-5 text-2xl font-bold">Your cart is empty</h2><p className="mt-2 text-slate-500">Choose a game credit package to get started.</p><Link href="/shop" className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950">Browse top-ups</Link></div> : <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {items.map((item, index) => <div key={`${item.product.id}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="flex gap-4"><div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-indigo-950 text-3xl">🎮</div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-300">{item.product.game}</p><h2 className="mt-1 text-lg font-bold text-white">{item.product.name}</h2></div><button type="button" onClick={() => removeItem(index)} className="text-sm text-slate-500 hover:text-red-300">Remove</button></div><div className="mt-3 grid gap-1 text-sm text-slate-400 sm:grid-cols-2"><p><span className="text-slate-500">Player ID:</span> <strong className="text-slate-200">{item.playerId}</strong></p><p><span className="text-slate-500">Email:</span> <strong className="break-all text-slate-200">{item.email}</strong></p>{item.serverId && <p><span className="text-slate-500">Server ID:</span> {item.serverId}</p>}</div><div className="mt-4 flex items-center justify-between"><div className="flex items-center gap-2"><label htmlFor={`quantity-${index}`} className="text-xs text-slate-500">Qty</label><input id={`quantity-${index}`} type="number" min={1} value={item.quantity} onChange={(event) => updateQuantity(index, Number(event.target.value))} className="w-16 rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-center text-sm" /></div><p className="text-lg font-black text-white">${(item.product.price * item.quantity).toFixed(2)}</p></div></div></div></div>)}
          </div>
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-lg font-bold text-white">Order summary</h2><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-slate-400">Total</span><span className="text-2xl font-black text-cyan-300">${total.toFixed(2)}</span></div><Link href="/checkout" className="mt-6 block rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3 text-center font-black text-slate-950">Continue to checkout</Link><p className="mt-4 text-center text-xs text-slate-500">Secure payment · Instant delivery</p></aside>
        </div>}
      </div>
    </div>
  );
}
