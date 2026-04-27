import { bowlBases, bowlProteins, bowlVeggies } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { BowlIcon, ChevronRightIcon } from "@/components/icons";
import { formatCurrency } from "@/lib/utils";

const previewSelection = {
  base: bowlBases[1],
  protein: bowlProteins[1],
  veggies: [bowlVeggies[1], bowlVeggies[2]]
};

export function BuildBowlPreview() {
  const total =
    previewSelection.base.price +
    previewSelection.protein.price +
    previewSelection.veggies.reduce((sum, veggie) => sum + veggie.price, 0);

  return (
    <div className="surface-card-strong grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <span className="eyebrow">
          <BowlIcon className="h-4 w-4 text-saffron" />
          Build your bowl
        </span>
        <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
          A clearer, faster way to customize lunch.
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg">
          Choose a base, pick your protein, finish with crisp vegetables, and review everything in a
          live-updating summary before checkout.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/build-your-bowl" size="lg">
            Start Building
          </ButtonLink>
          <ButtonLink href="/menu" size="lg" variant="secondary">
            Explore Menu
          </ButtonLink>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/75 bg-[linear-gradient(165deg,rgba(255,252,247,0.96),rgba(245,238,225,0.9))] p-5 shadow-soft">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[24px] border border-white/75 bg-white/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Base</p>
            <p className="mt-3 text-base font-semibold text-ink">{previewSelection.base.name}</p>
            <p className="mt-1 text-sm text-muted">{previewSelection.base.description}</p>
          </div>
          <div className="rounded-[24px] border border-white/75 bg-white/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Protein</p>
            <p className="mt-3 text-base font-semibold text-ink">{previewSelection.protein.name}</p>
            <p className="mt-1 text-sm text-muted">{previewSelection.protein.description}</p>
          </div>
          <div className="rounded-[24px] border border-white/75 bg-white/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Veggies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {previewSelection.veggies.map((veggie) => (
                <Badge key={veggie.id} tone="default">
                  {veggie.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-[26px] border border-white/80 bg-white/90 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted">Preview total</p>
              <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-ink">
                {formatCurrency(total)}
              </p>
            </div>
            <div className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
              Review ready
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted">
            Customize in four quick steps
            <ChevronRightIcon className="text-saffron" />
          </div>
        </div>
      </div>
    </div>
  );
}
