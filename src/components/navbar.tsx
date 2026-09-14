"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/cart", label: "Cart" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const cartCount = 0;

  return (
    <header className="border-b border-black/10 bg-background/95 text-foreground backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <Link href="/" className="inline-flex items-center rounded-md bg-black px-2 py-1" onClick={() => setMenuOpen(false)} aria-label="XPLUSHOP home">
          <Image src="/xplushop-logo.png" alt="XPLUSHOP" width={150} height={67} priority className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm transition-opacity hover:opacity-60">
              {link.label}
              {link.label === "Cart" && (
                <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 py-0.5 text-xs text-background">
                  {cartCount}
                </span>
              )}
            </Link>
          ))}
          <ThemeToggle />
          <div className="relative">
            <button
              type="button"
              onClick={() => setUserMenuOpen((open) => !open)}
              aria-expanded={userMenuOpen}
              aria-haspopup="menu"
              className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              Account
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 top-12 z-20 w-40 rounded-xl border border-black/10 bg-background p-2 shadow-lg dark:border-white/10" role="menu">
                <Link href="/login" className="block rounded-lg px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10" role="menuitem" onClick={() => setUserMenuOpen(false)}>
                  Log in
                </Link>
                <Link href="/register" className="block rounded-lg px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10" role="menuitem" onClick={() => setUserMenuOpen(false)}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg border p-2 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/10 px-6 py-4 dark:border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center justify-between rounded-lg px-3 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setMenuOpen(false)}>
                {link.label}
                {link.label === "Cart" && <span className="rounded-full bg-foreground px-2 py-0.5 text-xs text-background">{cartCount}</span>}
              </Link>
            ))}
            <div className="flex items-center justify-between border-t border-black/10 pt-3 dark:border-white/10">
              <ThemeToggle />
              <div className="flex gap-3 text-sm">
                <Link href="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
                <Link href="/register" onClick={() => setMenuOpen(false)}>Register</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
