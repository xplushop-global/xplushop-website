"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import type { CartItem } from "@/context/cart-context";

type Order = { orderId: string; items: CartItem[]; total: number; createdAt: string };

export default function CheckoutSuccessPage() {
  return <Suspense fallback={<div className="min-h-full bg-[#060816] p-20 text-center text-slate-400">Loading order…</div>}><SuccessContent /></Suspense>;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("xplus-last-order");
    if (stored) setOrder(JSON.parse(stored) as Order);
  }, []);

  const orderId = searchParams.get("order") || order?.orderId || "XPLUS-PENDING";
  const firstItem = order?.items[0];

  return (
    <div className="min-h-full bg-[#060816] px-6 py-14 text-slate-100 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-5xl shadow-[0_0_45px_rgba(34,211,238,0.25)]">✓</div>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Payment received</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Order confirmed!</h1>
        <p className="mt-4 text-slate-400">Your top-up is being processed. Delivery in <strong className="text-cyan-300">5-15 mins</strong>.</p>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs uppercase tracking-wider text-slate-500">Order ID</p><p className="mt-1 text-xl font-black text-cyan-300">{orderId}</p></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Processing</span></div>
          <div className="mt-6 space-y-4 text-sm"><Detail label="Game" value={firstItem?.product.game || "Your selected game"} /><Detail label="Amount" value={firstItem?.product.name || "Top-up package"} /><Detail label="Player ID" value={firstItem?.playerId || "Provided at checkout"} /><Detail label="Receipt" value={firstItem?.email ? `Confirmation sent to ${firstItem.email}` : "Receipt email sent"} /></div>
        </div>
        <div className="mt-6 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-4 text-sm text-slate-300">Need help? If your top-up has not arrived within 30 minutes, <a href="mailto:support@xplushop.global" className="font-bold text-cyan-300 hover:underline">contact support</a> and include your Order ID.</div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/orders" className="rounded-xl border border-white/15 px-6 py-3 font-bold text-slate-200 hover:border-cyan-400/50">View order history</Link><Link href="/shop" className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 font-black text-slate-950">Shop more</Link></div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) { return <div className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 last:pb-0 sm:flex-row sm:justify-between"><span className="text-slate-500">{label}</span><span className="font-semibold text-slate-200 sm:text-right">{value}</span></div>; }
