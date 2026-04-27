import { BuildBowlPreview } from "@/components/build-bowl-preview";
import { FinalCTA } from "@/components/final-cta";
import { FoodCard } from "@/components/food-card";
import { HeroVisual } from "@/components/hero-visual";
import { ClockIcon, LeafIcon, SparkIcon } from "@/components/icons";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { brand, popularItems, signatureFavorites, trustPoints } from "@/lib/data";

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
              <ButtonLink href="/menu" size="lg">
                Order Now
              </ButtonLink>
              <ButtonLink href="/build-your-bowl" size="lg" variant="secondary">
                Build Your Bowl
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="surface-card px-4 py-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <ClockIcon className="text-saffron" />
                  12-15 min pickup
                </div>
                <p className="mt-2 text-sm text-muted">Fast enough for lunch, refined enough for dinner.</p>
              </div>
              <div className="surface-card px-4 py-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <LeafIcon className="text-moss" />
                  Fresh chutneys daily
                </div>
                <p className="mt-2 text-sm text-muted">Bright coconut, mint, and tomato built in-house.</p>
              </div>
              <div className="surface-card px-4 py-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <SparkIcon className="text-saffron" />
                  Mobile-first ordering
                </div>
                <p className="mt-2 text-sm text-muted">Signature plates and custom bowls in a clear flow.</p>
              </div>
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
              The dishes that define Ahara at first glance.
            </h2>
          </div>
          <p className="section-copy">
            Crisp dosa, aromatic biryani, and house chai anchor the brand before you ever touch the bowl
            builder.
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
            <span className="eyebrow">Popular now</span>
            <h2 className="section-title mt-4 text-balance">A few easy wins if you want to order quickly.</h2>
          </div>
          <p className="section-copy">
            Built for first-time visitors, repeat regulars, and anyone deciding between comfort and
            customization.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {popularItems.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="surface-card-strong px-6 py-8 sm:px-8 sm:py-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-title mt-4 text-balance">
              Quick enough for everyday, layered enough to feel worth craving.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <article key={point.title} className="rounded-[28px] border border-white/75 bg-white/80 p-5">
                <h3 className="text-xl font-semibold text-ink">{point.title}</h3>
                <p className="mt-3 text-sm sm:text-base">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <FinalCTA />
      </SectionShell>
    </>
  );
}
