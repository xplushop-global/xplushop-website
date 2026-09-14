"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart, type CartItem } from "@/context/cart-context";

const payments = [
  { id: "paypal", label: "PayPal", icon: "🅿️", description: "Pay with your PayPal balance" },
  { id: "stripe", label: "Stripe Card", icon: "💳", description: "Visa, Mastercard, Amex" },
  { id: "crypto", label: "Crypto (USDT)", icon: "₮", description: "Pay securely with USDT" },
  { id: "local", label: "Touch 'n Go / GrabPay", icon: "📱", description: "Malaysia local payment" },
];

const trustBadges = [
  ["⚡", "Instant Delivery"],
  ["🛟", "24/7 Support"],
  ["🔒", "Secure Payment"],
  ["🛡️", "No Ban Risk"],
];

type StoredOrder = {
  orderId: string;
  items: CartItem[];
  payment: string;
  total: number;
  createdAt: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState("stripe");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!items.length) router.replace("/cart");
  }, [items.length, router]);

  function validateStepOne() {
    if (items.some((item) => item.playerId.trim().length < 5)) {
      setError("Every Player ID must be at least 5 characters.");
      return false;
    }
    if (items.some((item) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.email))) {
      setError("Please check the email address on every item.");
      return false;
    }
    setError("");
    return true;
  }

  function nextStep() {
    if (step === 1 && !validateStepOne()) return;
    if (step === 2 && !payment) {
      setError("Select a payment method to continue.");
      return;
    }
    setError("");
    setStep((current) => Math.min(3, current + 1));
  }

  async function submitOrder() {
    if (!verified) {
      setError("Please confirm that you verified the Player ID.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items, payment, total }) });
      const data = await response.json() as { orderId?: string; error?: string };
      if (!response.ok || !data.orderId) throw new Error(data.error || "Unable to create order.");
      const order: StoredOrder = { orderId: data.orderId, items, payment, total, createdAt: new Date().toISOString() };
      window.localStorage.setItem("xplus-last-order", JSON.stringify(order));
      const existingOrders = JSON.parse(window.localStorage.getItem("xplus-orders") || "[]") as StoredOrder[];
      window.localStorage.setItem("xplus-orders", JSON.stringify([order, ...existingOrders]));
      clearCart();
      router.replace(`/checkout/success?order=${encodeURIComponent(data.orderId)}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to create order.");
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-full bg-[#060816] px-6 py-12 text-slate-100 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Secure top-up checkout</p>
        <h1 className="mt-3 text-center text-4xl font-black text-white">Complete your order</h1>
        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-between"><Step number={1} label="Review Order" active={step >= 1} /><Step number={2} label="Payment Method" active={step >= 2} /><Step number={3} label="Confirm" active={step >= 3} /></div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
          {step === 1 && <section><Header title="Review your order" subtitle="Confirm your game account details before continuing." /> <div className="space-y-3">{items.map((item, index) => <div key={`${item.product.id}-${index}`} className="rounded-2xl border border-white/10 bg-black/20 p-4"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-300">🎮 {item.product.game}</p><h2 className="mt-1 font-bold text-white">{item.product.name}</h2></div><p className="font-black text-cyan-300">${(item.product.price * item.quantity).toFixed(2)}</p></div><div className="mt-3 grid gap-1 text-sm text-slate-400 sm:grid-cols-2"><p>Player ID: <strong className="text-slate-200">{item.playerId}</strong></p><p>Email: <strong className="break-all text-slate-200">{item.email}</strong></p>{item.serverId && <p>Server ID: <strong className="text-slate-200">{item.serverId}</strong></p>}<p>Quantity: <strong className="text-slate-200">{item.quantity}</strong></p></div></div>)}</div><div className="mt-6 flex justify-between border-t border-white/10 pt-5 text-lg"><span className="text-slate-400">Total</span><strong className="text-2xl text-white">${total.toFixed(2)} USD</strong></div></section>}
          {step === 2 && <section><Header title="Choose payment method" subtitle="Select how you would like to pay. Payment processing will be connected next." /><div className="grid gap-3 sm:grid-cols-2">{payments.map((method) => <button key={method.id} type="button" onClick={() => setPayment(method.id)} className={`rounded-2xl border p-4 text-left transition ${payment === method.id ? "border-cyan-400 bg-cyan-400/10" : "border-white/10 bg-black/20 hover:border-purple-400/60"}`}><span className="text-2xl">{method.icon}</span><span className="mt-2 block font-bold text-white">{method.label}</span><span className="mt-1 block text-xs text-slate-500">{method.description}</span></button>)}</div><div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm text-cyan-100">🔒 Your payment details are handled securely by our payment provider.</div></section>}
          {step === 3 && <section><Header title="Confirm your top-up" subtitle="One final check before your order is created." /><div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-amber-100"><p className="font-bold">⚠️ Important: Top-ups are delivered to the Player ID you provide.</p><p className="mt-2 text-sm text-amber-200/80">Double-check every digit. Wrong Player ID means no refund.</p></div><label className="mt-6 flex cursor-pointer gap-3 rounded-xl border border-white/10 bg-black/20 p-4"><input type="checkbox" checked={verified} onChange={(event) => setVerified(event.target.checked)} className="mt-1 h-5 w-5 accent-cyan-400" /><span className="text-sm font-semibold text-slate-200">I verified Player ID is correct - no refund for wrong ID</span></label><div className="mt-6 flex justify-between border-t border-white/10 pt-5"><span className="text-slate-400">Payable total</span><strong className="text-2xl text-cyan-300">${total.toFixed(2)} USD</strong></div></section>}
          {error && <p role="alert" className="mt-5 rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
          <div className="mt-8 flex justify-between gap-3"><button type="button" onClick={() => { setError(""); setStep((current) => Math.max(1, current - 1)); }} disabled={step === 1} className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 disabled:invisible">Back</button>{step < 3 ? <button type="button" onClick={nextStep} className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 font-black text-slate-950">Continue</button> : <button type="button" onClick={submitOrder} disabled={submitting} className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 font-black text-slate-950 disabled:opacity-50">{submitting ? "Creating order…" : "Confirm & Place Order"}</button>}</div>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">{trustBadges.map(([icon, label]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center text-xs font-semibold text-slate-400"><span className="block text-xl">{icon}</span><span className="mt-1 block">{label}</span></div>)}</div>
        <p className="mt-6 text-center text-sm text-slate-500">Need help? <Link href="/" className="text-cyan-300 hover:underline">Contact support</Link></p>
      </div>
    </div>
  );
}

function Step({ number, label, active }: { number: number; label: string; active: boolean }) { return <div className="flex flex-1 items-center gap-2"><span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-black ${active ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-500"}`}>{number}</span><span className={`hidden text-xs font-bold sm:block ${active ? "text-white" : "text-slate-500"}`}>{label}</span></div>; }
function Header({ title, subtitle }: { title: string; subtitle: string }) { return <div className="mb-6"><h2 className="text-2xl font-black text-white">{title}</h2><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div>; }
