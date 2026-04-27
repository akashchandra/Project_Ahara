import { signatureFavorites } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BowlIcon, ClockIcon, SparkIcon } from "@/components/icons";
import { formatCurrency } from "@/lib/utils";

function DishPlate({
  label,
  tone
}: {
  label: string;
  tone: "saffron" | "moss" | "clay";
}) {
  const toneMap = {
    saffron: "from-[#f0d2a4] via-[#fff1d8] to-[#d18a2c]",
    moss: "from-[#d6e1d0] via-[#eff6ec] to-[#58724a]",
    clay: "from-[#e6c7b7] via-[#f7ece6] to-[#9b5a3a]"
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-4 rounded-full bg-white/65 blur-xl" />
      <div
        className={`relative flex h-28 w-28 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br ${toneMap[tone]} shadow-soft sm:h-36 sm:w-36`}
      >
        <div className="absolute inset-[18%] rounded-full border border-white/55 bg-white/30" />
        <span className="relative text-sm font-semibold tracking-[-0.02em] text-ink">{label}</span>
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="surface-card-strong subtle-grid relative overflow-hidden p-5 sm:p-7">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(209,138,44,0.18),transparent_65%)]" />
      <div className="relative flex items-start justify-between">
        <div className="eyebrow">
          <SparkIcon className="h-4 w-4 text-saffron" />
          Fresh to pickup in minutes
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-medium text-muted sm:flex">
          <ClockIcon className="h-4 w-4 text-moss" />
          12-15 min avg.
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-[0.95fr_1.05fr] sm:gap-5">
        <div className="rounded-[28px] border border-white/75 bg-white/70 p-4 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Tonight&apos;s favorites</p>
          <div className="mt-4 grid gap-3">
            {signatureFavorites.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-[22px] border border-white/75 bg-white/80 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-xs text-muted">{item.tag}</p>
                </div>
                <span className="text-sm font-semibold text-ink">{formatCurrency(item.price)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-white/75 bg-[linear-gradient(160deg,rgba(255,252,247,0.96),rgba(249,240,226,0.82))] p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <Badge tone="saffron">Designed for mobile ordering</Badge>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(23,23,20,0.06)] text-ink">
              <BowlIcon />
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <DishPlate label="Dosa" tone="saffron" />
            <DishPlate label="Biryani" tone="clay" />
            <div className="col-span-2">
              <DishPlate label="House Chai" tone="moss" />
            </div>
          </div>
          <div className="mt-6 rounded-[24px] border border-white/80 bg-white/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Build your bowl</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="default">1. Base</Badge>
              <Badge tone="default">2. Protein</Badge>
              <Badge tone="default">3. Veggies</Badge>
              <Badge tone="saffron">4. Review</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
