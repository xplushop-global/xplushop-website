"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Order = { orderId: string; total: number; createdAt: string; items?: Array<{ product: { game: string; name: string } }> };

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => { setOrders(JSON.parse(window.localStorage.getItem("xplus-orders") || "[]") as Order[]); }, []);
  return <div className="min-h-full bg-[#060816] px-6 py-14 text-slate-100 lg:px-8 lg:py-20"><div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Your account</p><h1 className="mt-3 text-4xl font-black text-white">Order history</h1>{!orders.length ? <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-12 text-center"><p className="text-slate-400">Your completed orders will appear here.</p><Link href="/shop" className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950">Browse top-ups</Link></div> : <div className="mt-8 space-y-3">{orders.map((order) => <div key={order.orderId} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="flex items-center justify-between"><div><p className="font-black text-cyan-300">{order.orderId}</p><p className="mt-1 text-sm text-slate-400">{order.items?.[0]?.product.game} · {order.items?.[0]?.product.name}</p></div><p className="font-bold text-white">${order.total.toFixed(2)}</p></div></div>)}</div>}</div></div>;
}
