import { DishVisual } from "@/components/dish-visual";
import { Badge } from "@/components/ui/badge";
import { BowlIcon, ClockIcon } from "@/components/icons";
import { cravingCards, signatureFavorites } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export function HeroVisual() {
  const bowl = cravingCards[3];

  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(150deg,rgba(255,250,242,0.96),rgba(245,224,192,0.78))] p-4 shadow-depth sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <DishVisual
          type="dosa"
          label="Masala Dosa"
          className="min-h-52 sm:col-span-2 sm:aspect-[16/8]"
        />
        <DishVisual type="biryani" label="Chicken Biryani" className="min-h-44" />
        <DishVisual type="chai" label="House Chai" className="min-h-44" />
      </div>

      <div className="mt-3 rounded-[26px] border border-white/80 bg-white/[0.82] p-4 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron-soft text-saffron">
              <BowlIcon />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{bowl.name}</p>
              <p className="text-xs font-medium text-muted">Fresh & Custom</p>
            </div>
          </div>
          <Badge tone="moss">12-15 min pickup</Badge>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {signatureFavorites.map((item) => (
            <div key={item.id} className="rounded-[18px] bg-[rgba(23,23,20,0.04)] px-3 py-2">
              <p className="truncate text-xs font-semibold text-ink">{item.name}</p>
              <p className="mt-1 text-xs text-muted">{formatCurrency(item.price)}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted">
          <ClockIcon className="h-4 w-4 text-moss" />
          Built for pickup, lunch, dinner, and second helpings.
        </div>
      </div>
    </div>
  );
}
