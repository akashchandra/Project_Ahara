import type { Metadata } from "next";
import { FinalCTA } from "@/components/final-cta";
import { FoodCard } from "@/components/food-card";
import { MenuItemCard } from "@/components/menu-item-card";
import { SparkIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { menuSections, signatureFavorites } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu | Ahara",
  description: "Explore signature dosa, biryani, chai, bowls, and drinks from Ahara."
};

export default function MenuPage() {
  return (
    <>
      <SectionShell className="pt-8 sm:pt-10 lg:pt-14">
        <div className="surface-card-strong overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="eyebrow">
                <SparkIcon className="h-4 w-4 text-saffron" />
                Menu
              </span>
              <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.96] text-ink sm:text-6xl">
                Signature dishes, calm ordering flow, no filler.
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg">
                Start with the classics or move into a customizable bowl. Every section is designed to feel
                quick to scan and easy to act on.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/build-your-bowl" size="lg">
                  Build Your Bowl
                </ButtonLink>
                <ButtonLink href="/" size="lg" variant="secondary">
                  Back Home
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4">
              <FoodCard
                {...signatureFavorites[0]}
                href={`#${menuSections[0].id}`}
              />
              <FoodCard
                {...signatureFavorites[1]}
                href={`#${menuSections[0].id}`}
              />
              <FoodCard
                {...signatureFavorites[2]}
                href={`#${menuSections[2].id}`}
              />
            </div>
          </div>
        </div>
      </SectionShell>

      {menuSections.map((section) => (
        <SectionShell key={section.title} id={section.id}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">{section.title}</span>
              <h2 className="section-title mt-4 text-balance">{section.title}</h2>
            </div>
            <p className="section-copy">{section.description}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {section.items.map((item) => (
              <MenuItemCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </SectionShell>
      ))}

      <SectionShell className="pt-0">
        <FinalCTA />
      </SectionShell>
    </>
  );
}
