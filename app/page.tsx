import { BuildBowlPreview } from "@/components/build-bowl-preview";
import { FinalCTA } from "@/components/final-cta";
import { FoodCard } from "@/components/food-card";
import { HeroVisual } from "@/components/hero-visual";
import { SparkIcon } from "@/components/icons";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { brand, cravingCards, signatureFavorites } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <SectionShell className="pt-8 sm:pt-10 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow">
              <SparkIcon className="h-4 w-4 text-saffron" />
              {brand.label}
            </span>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.94] text-ink sm:text-6xl lg:text-[5rem]">
              {brand.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg">{brand.heroCopy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#favorites" size="lg">
                Order Signature Dishes
              </ButtonLink>
              <ButtonLink href="/build-your-bowl" size="lg" variant="secondary">
                Build Your Bowl
              </ButtonLink>
            </div>
          </div>
          <HeroVisual />
        </div>
      </SectionShell>

      <SectionShell id="favorites">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Signature favorites</span>
            <h2 className="section-title mt-4 text-balance">
              Dosa, biryani, and chai are the heart of the kitchen.
            </h2>
          </div>
          <p className="section-copy">
            Order the classics directly, then add a custom bowl if the craving wants something fresher.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <FoodCard {...signatureFavorites[0]} className="lg:col-span-2 lg:row-span-2" />
          <FoodCard {...signatureFavorites[1]} />
          <FoodCard {...signatureFavorites[2]} />
        </div>
      </SectionShell>

      <SectionShell>
        <BuildBowlPreview />
      </SectionShell>

      <SectionShell>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Choose your craving</span>
            <h2 className="section-title mt-4 text-balance">Pick by mood, then add it to your order.</h2>
          </div>
          <p className="section-copy">
            Crispy, rich, warm, or fresh. The menu is easier when your appetite gets the first vote.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cravingCards.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <FinalCTA />
      </SectionShell>
    </>
  );
}
