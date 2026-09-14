import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} XPLUS SHOP GLOBAL. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/shop" className="hover:text-foreground">Shop</Link>
          <Link href="/cart" className="hover:text-foreground">Cart</Link>
          <Link href="/profile" className="hover:text-foreground">Profile</Link>
        </div>
      </div>
    </footer>
  );
}
