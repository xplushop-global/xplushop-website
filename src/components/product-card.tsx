import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
};

export default function ProductCard({ id, name, category, price, image }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-950">
      <Link href={`/shop/${id}`} className="block">
        <div className="aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground/50">{category}</p>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold">{name}</h3>
            <span className="shrink-0 font-medium">{price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
