import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <div className="surface-card-strong overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Start with a signature favorite or build something entirely your own.
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg">
            Ahara is designed to feel easy on the first visit and even better on the second.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          <ButtonLink href="/menu" size="lg">
            Order Now
          </ButtonLink>
          <ButtonLink href="/menu" size="lg" variant="secondary">
            Explore Menu
          </ButtonLink>
          <ButtonLink href="/build-your-bowl" size="lg" variant="soft">
            Build Your Bowl
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
