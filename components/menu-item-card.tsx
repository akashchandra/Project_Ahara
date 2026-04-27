"use client";

import { useCart } from "@/components/cart-provider";
import { DishVisual } from "@/components/dish-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DishVisual as DishVisualType } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

type MenuItemCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: readonly string[];
  category: string;
  visual: DishVisualType;
};

export function MenuItemCard({
  id,
  name,
  description,
  price,
  tags,
  category,
  visual
}: MenuItemCardProps) {
  const { addMenuItem } = useCart();

  return (
    <article className="interactive-card grid gap-5 rounded-[30px] border border-white/70 p-4 sm:grid-cols-[11rem_1fr] sm:p-5">
      <DishVisual type={visual} label={name} className="aspect-[5/4] min-h-40 sm:min-h-0" />
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-ink">{name}</h3>
            <p className="mt-3 max-w-xl text-sm sm:text-base">{description}</p>
          </div>
          <div className="rounded-full border border-white/75 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft">
            {formatCurrency(price)}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium text-muted">Made to order</span>
          <Button type="button" size="sm" onClick={() => addMenuItem({ id, name, price, category })}>
            Add to Order
          </Button>
        </div>
      </div>
    </article>
  );
}
