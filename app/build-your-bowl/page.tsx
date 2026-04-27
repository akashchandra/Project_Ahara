import type { Metadata } from "next";
import { BowlBuilder } from "@/components/bowl-builder";
import { BowlIcon, SparkIcon } from "@/components/icons";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Build Your Bowl | Ahara",
  description: "Customize a modern Indian bowl with a polished multi-step ordering flow."
};

export default function BuildYourBowlPage() {
  return (
    <>
      <SectionShell className="pt-8 sm:pt-10 lg:pt-14">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <BowlIcon className="h-4 w-4 text-saffron" />
            Build your bowl
          </span>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.96] text-ink sm:text-6xl">
            Designed to feel clear on mobile and effortless on repeat.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg">
            Move step by step, watch the total update live, and review everything before adding your
            custom bowl to the cart.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <BowlBuilder />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="surface-card-strong grid gap-5 px-6 py-7 sm:px-8 lg:grid-cols-3">
          <article className="rounded-[28px] border border-white/75 bg-white/80 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <SparkIcon className="text-saffron" />
              Balanced pricing
            </div>
            <p className="mt-3 text-sm sm:text-base">
              Bases and proteins set the foundation, while veggies add just enough flexibility without
              complicating the flow.
            </p>
          </article>
          <article className="rounded-[28px] border border-white/75 bg-white/80 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <SparkIcon className="text-moss" />
              Easy edits
            </div>
            <p className="mt-3 text-sm sm:text-base">
              Jump between steps, change any selection, and keep the summary visible the whole time.
            </p>
          </article>
          <article className="rounded-[28px] border border-white/75 bg-white/80 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <SparkIcon className="text-clay" />
              Cart-first flow
            </div>
            <p className="mt-3 text-sm sm:text-base">
              Add your completed bowl to the shared cart, then finish through the demo order drawer.
            </p>
          </article>
        </div>
      </SectionShell>
    </>
  );
}
