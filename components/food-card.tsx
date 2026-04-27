import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

type FoodCardProps = {
  name: string;
  description: string;
  price: number;
  tag?: string;
  badge?: string;
  href?: string;
  accent?: "saffron" | "moss" | "clay";
  className?: string;
};

export function FoodCard({
  name,
  description,
  price,
  tag,
  badge,
  href = "/menu",
  accent = "saffron",
  className
}: FoodCardProps) {
  const accentStyle = {
    saffron: "from-[rgba(209,138,44,0.2)] to-white/80",
    moss: "from-[rgba(88,114,74,0.18)] to-white/80",
    clay: "from-[rgba(155,90,58,0.18)] to-white/80"
  };

  const tone = accent === "saffron" ? "saffron" : accent === "moss" ? "moss" : "clay";

  return (
    <article
      className={cn(
        "interactive-card relative overflow-hidden rounded-[30px] border border-white/70 p-5 sm:p-6",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accentStyle[accent])} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            {tag ? <Badge tone={tone}>{tag}</Badge> : null}
            <div>
              <h3 className="text-2xl font-semibold text-ink">{name}</h3>
              <p className="mt-3 max-w-md text-sm sm:text-base">{description}</p>
            </div>
          </div>
          <div className="rounded-full border border-white/80 bg-white/90 px-4 py-2 text-sm font-semibold text-ink shadow-soft">
            {formatCurrency(price)}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          {badge ? <Badge>{badge}</Badge> : <span />}
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-saffron"
          >
            View details
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
