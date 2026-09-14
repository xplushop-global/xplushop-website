import Link from "next/link";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";

const categories = [
  { name: "Style", description: "Everyday pieces, considered carefully.", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85" },
  { name: "Tech", description: "Smart tools for modern living.", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85" },
  { name: "Home", description: "Objects that make space feel yours.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" },
  { name: "Travel", description: "Go further, pack lighter.", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85" },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(129,140,248,0.2),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(244,114,182,0.15),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-36">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50">Curated globally · shipped simply</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.05em] sm:text-7xl lg:text-8xl">XPLUS SHOP GLOBAL</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-foreground/65">A considered collection of useful, beautiful things for wherever life takes you.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105">Shop Now <span aria-hidden="true">→</span></Link>
              <a href="#featured" className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-foreground/5">Explore the edit</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-200 shadow-2xl shadow-black/10 dark:bg-zinc-800">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90" alt="Curated fashion collection" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-black/10 bg-background/90 p-4 shadow-xl backdrop-blur dark:border-white/10">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">New season</p>
              <p className="mt-1 font-semibold">The everyday edit</p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground/50">Handpicked for you</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured products</h2></div>
          <Link href="/shop" className="hidden text-sm font-semibold underline-offset-4 hover:underline sm:block">View all products →</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="border-y border-black/10 bg-foreground/[0.03] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-10"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground/50">Find your next favorite</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shop by category</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => <Link href="/shop" key={category.name} className="group relative aspect-[4/5] overflow-hidden rounded-2xl"><img src={category.image} alt={category.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-5 text-white"><h3 className="text-xl font-semibold">{category.name}</h3><p className="mt-1 text-sm text-white/75">{category.description}</p></div></Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground/50">Stay in the loop</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Good things, occasionally.</h2>
        <p className="mx-auto mt-4 max-w-lg text-foreground/65">Get first access to new drops, thoughtful guides, and a little inspiration for your inbox.</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="#" method="post">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input id="newsletter-email" name="email" type="email" required placeholder="you@example.com" className="min-w-0 flex-1 rounded-full border border-foreground/20 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-foreground" />
          <button type="submit" className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
