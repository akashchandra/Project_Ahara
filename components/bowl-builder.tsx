"use client";

import { useMemo, useState } from "react";
import { BowlOptionCard } from "@/components/bowl-option-card";
import { ChevronRightIcon, SparkIcon } from "@/components/icons";
import { OrderSummaryCard } from "@/components/order-summary-card";
import { StepIndicator } from "@/components/step-indicator";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { bowlBases, bowlProteins, bowlSteps, bowlVeggies } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export function BowlBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBaseId, setSelectedBaseId] = useState<string | null>(null);
  const [selectedProteinId, setSelectedProteinId] = useState<string | null>(null);
  const [selectedVeggieIds, setSelectedVeggieIds] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectedBase = useMemo(
    () => bowlBases.find((base) => base.id === selectedBaseId),
    [selectedBaseId]
  );
  const selectedProtein = useMemo(
    () => bowlProteins.find((protein) => protein.id === selectedProteinId),
    [selectedProteinId]
  );
  const selectedVeggies = useMemo(
    () => bowlVeggies.filter((veggie) => selectedVeggieIds.includes(veggie.id)),
    [selectedVeggieIds]
  );

  const total =
    (selectedBase?.price ?? 0) +
    (selectedProtein?.price ?? 0) +
    selectedVeggies.reduce((sum, veggie) => sum + veggie.price, 0);

  const canCheckout = Boolean(selectedBase && selectedProtein);

  const canAdvanceFromStep = (step: number) => {
    if (step === 0) return Boolean(selectedBase);
    if (step === 1) return Boolean(selectedProtein);
    if (step === 2) return true;
    return canCheckout;
  };

  const isStepUnlocked = (step: number) => {
    if (step === 0) return true;
    if (step === 1) return Boolean(selectedBase);
    if (step === 2) return Boolean(selectedBase && selectedProtein);
    return canCheckout;
  };

  const isStepComplete = (step: number) => {
    if (step === 0) return Boolean(selectedBase);
    if (step === 1) return Boolean(selectedProtein);
    if (step === 2) return currentStep > 2 || selectedVeggies.length > 0;
    return showConfirmation || (currentStep === 3 && canCheckout);
  };

  const summarySelections = [
    {
      label: "Base",
      value: selectedBase?.name,
      missingText: "Choose your base",
      onEdit: () => setCurrentStep(0)
    },
    {
      label: "Protein",
      value: selectedProtein?.name,
      missingText: "Choose your protein",
      onEdit: () => setCurrentStep(1)
    },
    {
      label: "Review",
      value: canCheckout ? "Ready to place" : undefined,
      missingText: "Finish required selections",
      onEdit: () => setCurrentStep(canCheckout ? 3 : selectedBase ? 1 : 0)
    }
  ];

  const nextStepLabel =
    currentStep === 0
      ? "Continue to protein"
      : currentStep === 1
        ? "Continue to veggies"
        : currentStep === 2
          ? "Continue to review"
          : "Place order";

  function handleVeggieToggle(id: string) {
    setSelectedVeggieIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function handlePrimaryAction() {
    if (currentStep < 3) {
      if (canAdvanceFromStep(currentStep)) {
        setCurrentStep((step) => Math.min(step + 1, 3));
      }
      return;
    }

    if (canCheckout) {
      setShowConfirmation(true);
    }
  }

  function resetBuilder() {
    setCurrentStep(0);
    setSelectedBaseId(null);
    setSelectedProteinId(null);
    setSelectedVeggieIds([]);
    setShowConfirmation(false);
  }

  return (
    <div className="pb-28 lg:pb-0">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-5">
          <StepIndicator
            steps={bowlSteps}
            currentStep={currentStep}
            isStepComplete={isStepComplete}
            isStepUnlocked={isStepUnlocked}
            onStepChange={setCurrentStep}
          />

          <section className="surface-card-strong overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {bowlSteps[currentStep]}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-[2.5rem]">
                  {currentStep === 0 && "Start with the bowl foundation"}
                  {currentStep === 1 && "Pick the protein profile"}
                  {currentStep === 2 && "Add as much freshness as you want"}
                  {currentStep === 3 && "Review every detail before checkout"}
                </h2>
              </div>
              <Badge tone="saffron">{formatCurrency(total || 0)} current total</Badge>
            </div>

            <p className="mt-4 max-w-2xl text-base sm:text-lg">
              {currentStep === 0 &&
                "Choose the base that sets the tone for your bowl. Both options are built to pair cleanly with warm spices and chutneys."}
              {currentStep === 1 &&
                "Proteins are finished individually, so the bowl still feels precise even when you move fast."}
              {currentStep === 2 &&
                "Veggies are optional, lightly priced, and there to sharpen contrast, texture, and brightness."}
              {currentStep === 3 &&
                "Your summary updates live. Edit anything before placing the mock order."}
            </p>

            <div className="mt-8">
              {currentStep === 0 ? (
                <div className="grid gap-4 md:grid-cols-2" role="radiogroup" aria-label="Choose base">
                  {bowlBases.map((base) => (
                    <BowlOptionCard
                      key={base.id}
                      name={base.name}
                      description={base.description}
                      price={base.price}
                      selected={selectedBaseId === base.id}
                      tone={base.tone}
                      onClick={() => setSelectedBaseId(base.id)}
                    />
                  ))}
                </div>
              ) : null}

              {currentStep === 1 ? (
                <div className="grid gap-4 md:grid-cols-3" role="radiogroup" aria-label="Choose protein">
                  {bowlProteins.map((protein) => (
                    <BowlOptionCard
                      key={protein.id}
                      name={protein.name}
                      description={protein.description}
                      price={protein.price}
                      selected={selectedProteinId === protein.id}
                      tone={protein.tone}
                      onClick={() => setSelectedProteinId(protein.id)}
                    />
                  ))}
                </div>
              ) : null}

              {currentStep === 2 ? (
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    {bowlVeggies.map((veggie) => (
                      <BowlOptionCard
                        key={veggie.id}
                        name={veggie.name}
                        description={veggie.description}
                        price={veggie.price}
                        selected={selectedVeggieIds.includes(veggie.id)}
                        tone={veggie.tone}
                        onClick={() => handleVeggieToggle(veggie.id)}
                        type="multi"
                      />
                    ))}
                  </div>
                  <div className="rounded-[26px] border border-white/75 bg-white/80 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <SparkIcon className="text-saffron" />
                      Veggies are optional
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      Keep it minimal or build in more crunch. Your bowl will still be checkout-ready with
                      just a base and protein.
                    </p>
                  </div>
                </div>
              ) : null}

              {currentStep === 3 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[28px] border border-white/75 bg-white/85 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected base</p>
                    <p className="mt-2 text-2xl font-semibold text-ink">
                      {selectedBase?.name ?? "No base selected"}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {selectedBase?.description ?? "Choose a base to continue."}
                    </p>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="mt-4"
                      onClick={() => setCurrentStep(0)}
                    >
                      Edit base
                    </Button>
                  </div>
                  <div className="rounded-[28px] border border-white/75 bg-white/85 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      Selected protein
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-ink">
                      {selectedProtein?.name ?? "No protein selected"}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {selectedProtein?.description ?? "Choose a protein to continue."}
                    </p>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="mt-4"
                      onClick={() => setCurrentStep(1)}
                    >
                      Edit protein
                    </Button>
                  </div>
                  <div className="rounded-[28px] border border-white/75 bg-white/85 p-5 md:col-span-2">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                          Veggies and finish
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-ink">
                          {selectedVeggies.length > 0
                            ? selectedVeggies.map((veggie) => veggie.name).join(", ")
                            : "No veggies selected"}
                        </p>
                      </div>
                      <Button type="button" variant="secondary" size="sm" onClick={() => setCurrentStep(2)}>
                        Edit veggies
                      </Button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedVeggies.length > 0 ? (
                        selectedVeggies.map((veggie) => (
                          <Badge key={veggie.id} tone="default">
                            {veggie.name}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-muted">You kept it clean and simple.</p>
                      )}
                    </div>
                    <div className="mt-6 flex items-center justify-between rounded-[24px] bg-[rgba(23,23,20,0.04)] px-4 py-4">
                      <div>
                        <p className="text-sm font-medium text-muted">Total</p>
                        <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-ink">
                          {formatCurrency(total)}
                        </p>
                      </div>
                      <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft">
                        Ready for mock checkout
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-line/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(23,23,20,0.05)] text-ink">
                  {currentStep + 1}
                </span>
                {currentStep === 3
                  ? "Everything can still be edited before placing the order."
                  : "Move step by step. The summary on the right updates as you go."}
              </div>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  size="md"
                  onClick={handlePrimaryAction}
                  disabled={!canAdvanceFromStep(currentStep)}
                >
                  {nextStepLabel}
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </div>

        <div className="hidden lg:block">
          <OrderSummaryCard
            selections={summarySelections}
            veggies={selectedVeggies.map((veggie) => veggie.name)}
            subtotal={total}
            estimatedReady="12-15 min"
            canCheckout={canCheckout}
            onPrimaryAction={() => setCurrentStep(3)}
            primaryLabel="Review Bowl"
          />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-white/70 bg-[rgba(255,250,244,0.92)] p-4 shadow-[0_-18px_40px_rgba(23,23,20,0.08)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex w-full max-w-shell items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Current total</p>
            <p className="truncate text-xl font-semibold tracking-[-0.03em] text-ink">
              {formatCurrency(total || 0)}
            </p>
          </div>
          <Button
            type="button"
            onClick={handlePrimaryAction}
            disabled={!canAdvanceFromStep(currentStep)}
            size="md"
            className="shrink-0"
          >
            {nextStepLabel}
          </Button>
        </div>
      </div>

      {showConfirmation ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(18,18,16,0.4)] p-4 backdrop-blur-md">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Order placed"
            className="surface-card-strong w-full max-w-xl p-6 sm:p-8"
          >
            <Badge tone="moss">Mock order placed</Badge>
            <h3 className="mt-4 text-3xl font-semibold text-ink">Your bowl is in the queue.</h3>
            <p className="mt-3 text-base sm:text-lg">
              {selectedBase?.name} with {selectedProtein?.name}
              {selectedVeggies.length > 0 ? ` and ${selectedVeggies.map((veggie) => veggie.name).join(", ")}` : ""}{" "}
              will be ready in about 12-15 minutes.
            </p>
            <div className="mt-6 rounded-[28px] border border-white/75 bg-white/85 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted">Order total</p>
                <p className="text-2xl font-semibold text-ink">{formatCurrency(total)}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedBase ? <Badge tone="default">{selectedBase.name}</Badge> : null}
                {selectedProtein ? <Badge tone="default">{selectedProtein.name}</Badge> : null}
                {selectedVeggies.map((veggie) => (
                  <Badge key={veggie.id} tone="default">
                    {veggie.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="button" size="lg" onClick={resetBuilder}>
                Build another bowl
              </Button>
              <ButtonLink href="/menu" size="lg" variant="secondary" onClick={() => setShowConfirmation(false)}>
                Explore more dishes
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
