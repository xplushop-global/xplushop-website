"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    if (password.length < 6) {
      setIsError(true);
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });

    if (error) {
      setIsError(true);
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      router.replace("/");
      router.refresh();
      return;
    }

    setMessage("Account created. Check your email to confirm your account, then log in.");
    setLoading(false);
  }

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 p-4 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">XPLUS SHOP GLOBAL</p>
        <h1 className="mb-6 text-2xl font-bold">Create your account</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="register-name" className="mb-1.5 block text-sm font-medium">Full name</label>
            <input id="register-name" type="text" required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Alex Smith" className="w-full rounded-lg border border-black/15 bg-transparent p-3 outline-none focus:border-foreground dark:border-white/15" />
          </div>
          <div>
            <label htmlFor="register-email" className="mb-1.5 block text-sm font-medium">Email</label>
            <input id="register-email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-lg border border-black/15 bg-transparent p-3 outline-none focus:border-foreground dark:border-white/15" />
          </div>
          <div>
            <label htmlFor="register-password" className="mb-1.5 block text-sm font-medium">Password</label>
            <input id="register-password" type="password" required minLength={6} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 6 characters" className="w-full rounded-lg border border-black/15 bg-transparent p-3 outline-none focus:border-foreground dark:border-white/15" />
          </div>
          {message && <p role="status" className={`rounded-lg p-3 text-sm ${isError ? "bg-red-500/10 text-red-600 dark:text-red-400" : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"}`}>{message}</p>}
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-foreground p-3 font-semibold text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50">{loading ? "Creating account…" : "Create account"}</button>
        </form>
        <p className="mt-4 text-center text-sm text-foreground/70">Already have an account? <Link href="/login" className="font-medium underline underline-offset-4">Log in</Link></p>
      </div>
    </div>
  );
}
