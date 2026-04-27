import { DishVisual } from "@/components/dish-visual";
import { BowlIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

const steps = ["Base", "Protein", "Veggies", "Review"];

export function BuildBowlPreview() {
  return (
    <div className="grid gap-8 rounded-[34px] border border-white/80 bg-[linear-gradient(150deg,rgba(255,252,247,0.96),rgba(236,244,224,0.74))] p-5 shadow-depth sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <DishVisual type="bowl" label="Custom Bowl" className="min-h-64 lg:order-2" />
      <div>
        <span className="eyebrow">
          <BowlIcon className="h-4 w-4 text-saffron" />
          Build your bowl
        </span>
        <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
          Start with rice, finish with the bowl you actually want.
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg">
          Pick a base, choose chicken, paneer, or lamb, then add crisp vegetables before reviewing your
          bowl in the cart.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {steps.map((step, index) => (
            <Badge key={step} tone={index === 3 ? "saffron" : "default"}>
              {index + 1}. {step}
            </Badge>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/build-your-bowl" size="lg">
            Build Your Bowl
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
