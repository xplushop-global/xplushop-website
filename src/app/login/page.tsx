"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.replace("/");
    router.refresh();
  }

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 p-4 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">XPLUS SHOP GLOBAL</p>
        <h1 className="mb-6 text-2xl font-bold">Welcome back</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium">Email</label>
            <input id="login-email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-black/15 bg-transparent p-3 outline-none focus:border-foreground dark:border-white/15" />
          </div>
          <div>
            <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium">Password</label>
            <input id="login-password" type="password" required minLength={6} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Your password" className="w-full rounded-lg border border-black/15 bg-transparent p-3 outline-none focus:border-foreground dark:border-white/15" />
          </div>
          {message && <p role="alert" className="rounded-lg bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">{message}</p>}
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-foreground p-3 font-semibold text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50">{loading ? "Signing in…" : "Log in"}</button>
        </form>
        <p className="mt-4 text-center text-sm text-foreground/70">No account? <Link href="/register" className="font-medium underline underline-offset-4">Create one</Link></p>
      </div>
    </div>
  );
}
