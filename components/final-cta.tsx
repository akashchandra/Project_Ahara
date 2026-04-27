"use client";

import { useCart } from "@/components/cart-provider";
import { Button, ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  const { itemCount, openCart } = useCart();

  return (
    <div className="overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(150deg,rgba(255,250,242,0.96),rgba(247,226,190,0.82))] px-6 py-8 shadow-depth sm:px-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Hungry now? Start with a favorite or build your own.
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg">
            Crisp dosa, layered biryani, cozy chai, and custom bowls are all one tap from the cart.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          <ButtonLink href="/menu" size="lg" variant="secondary">
            View Menu
          </ButtonLink>
          <ButtonLink href="/build-your-bowl" size="lg" variant="soft">
            Build Your Bowl
          </ButtonLink>
          {itemCount > 0 ? (
            <Button type="button" size="lg" onClick={openCart}>
              Order Now
            </Button>
          ) : (
            <ButtonLink href="/menu" size="lg">
              Order Now
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
