"use client";

import { useCart } from "@/components/cart-provider";
import { DishVisual } from "@/components/dish-visual";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import type { DishVisual as DishVisualType } from "@/lib/data";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";

type FoodCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
  badge?: string;
  category: string;
  href?: string;
  visual: DishVisualType;
  accent?: "saffron" | "moss" | "clay";
  ctaLabel?: string;
  className?: string;
};

export function FoodCard({
  id,
  name,
  description,
  price,
  tag,
  badge,
  category,
  href = "/menu",
  visual,
  accent = "saffron",
  ctaLabel,
  className
}: FoodCardProps) {
  const { addMenuItem } = useCart();
  const accentStyle = {
    saffron: "from-[rgba(224,136,43,0.18)] to-[rgba(255,255,255,0.82)]",
    moss: "from-[rgba(88,114,74,0.16)] to-[rgba(255,255,255,0.82)]",
    clay: "from-[rgba(174,83,45,0.18)] to-[rgba(255,255,255,0.82)]"
  };

  const tone = accent === "saffron" ? "saffron" : accent === "moss" ? "moss" : "clay";
  const routesToBuilder = href === "/build-your-bowl";

  return (
    <article
      className={cn(
        "interactive-card relative overflow-hidden rounded-[30px] border border-white/70 p-4 sm:p-5",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accentStyle[accent])} />
      <div className="relative grid gap-5">
        <DishVisual type={visual} label={name} className="min-h-48" />
        <div>
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
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {badge ? <Badge>{badge}</Badge> : <span className="hidden sm:block" />}
            {routesToBuilder ? (
              <ButtonLink href={href} variant="secondary" size="sm">
                {ctaLabel ?? "Build Your Bowl"}
              </ButtonLink>
            ) : (
              <Button
                type="button"
                size="sm"
                onClick={() => addMenuItem({ id, name, price, category })}
              >
                {ctaLabel ?? "Add to Order"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
