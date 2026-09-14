"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { useCart } from "@/context/cart-context";

const links = [
  { href: "/shop", label: "Games" },
  { href: "/shop", label: "Top Up" },
  { href: "/#featured", label: "Featured" },
  { href: "/orders", label: "Orders" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { itemCount: cartCount } = useCart();

  return (
    <header className="glass sticky top-0 z-50 border-b border-white/[.07] text-white">
      <nav className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-7" aria-label="Main navigation">
        <Link href="/" className="inline-flex shrink-0 items-center rounded-md bg-black px-2 py-1" onClick={() => setMenuOpen(false)} aria-label="XPLUSHOP home">
          <Image src="/xplushop-logo.png" alt="XPLUSHOP" width={150} height={67} priority className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <Link key={`${link.href}-${link.label}`} href={link.href} className="group relative text-[13px] font-medium text-white/55 transition hover:text-white">{link.label}<span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-300 transition-all group-hover:w-full" /></Link>)}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/shop" className="hidden h-10 items-center gap-2 rounded-full border border-white/[.1] bg-white/[.045] px-4 text-[13px] text-white/55 transition hover:border-violet-400/70 hover:text-white md:flex">⌕ <span>Search games</span></Link>
          <Link href="/cart" aria-label="Open cart" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[.05] transition hover:border-violet-400/60 hover:bg-violet-500/15">🛍️{cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-1 text-[10px] font-bold text-[#090712]">{cartCount}</span>}</Link>
          <div className="relative hidden sm:block">
            <button type="button" onClick={() => setUserMenuOpen((open) => !open)} aria-expanded={userMenuOpen} aria-haspopup="menu" className="h-10 rounded-full bg-white px-4 text-[13px] font-bold text-[#0b0912] transition hover:bg-cyan-200">Log in</button>
            {userMenuOpen && <div className="absolute right-0 top-12 z-20 w-40 rounded-2xl border border-white/10 bg-[#100e1a] p-2 shadow-2xl" role="menu"><Link href="/login" className="block rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" role="menuitem" onClick={() => setUserMenuOpen(false)}>Log in</Link><Link href="/register" className="block rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" role="menuitem" onClick={() => setUserMenuOpen(false)}>Create account</Link></div>}
          </div>
          <ThemeToggle />
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[.05] lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? "✕" : "☰"}</button>
        </div>
      </nav>
      {menuOpen && <div className="border-t border-white/[.07] bg-[#0c0a16]/95 px-4 py-3 backdrop-blur lg:hidden"><div className="grid gap-1">{links.map((link) => <Link key={`${link.href}-${link.label}`} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/65 hover:bg-white/[.05] hover:text-white">{link.label}</Link>)}<Link href="/login" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/65 hover:bg-white/[.05] hover:text-white">Log in</Link><Link href="/register" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/65 hover:bg-white/[.05] hover:text-white">Create an account</Link></div></div>}
    </header>
  );
}
