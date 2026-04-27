import { cn } from "@/lib/utils";

type StepIndicatorProps = {
  steps: readonly string[];
  currentStep: number;
  isStepComplete: (step: number) => boolean;
  isStepUnlocked: (step: number) => boolean;
  onStepChange: (step: number) => void;
};

export function StepIndicator({
  steps,
  currentStep,
  isStepComplete,
  isStepUnlocked,
  onStepChange
}: StepIndicatorProps) {
  return (
    <div className="rounded-[30px] border border-white/75 bg-white/75 p-3 shadow-soft">
      <div className="grid gap-2 sm:grid-cols-4">
        {steps.map((step, index) => {
          const active = index === currentStep;
          const complete = isStepComplete(index);
          const unlocked = isStepUnlocked(index);

          return (
            <button
              key={step}
              type="button"
              onClick={() => unlocked && onStepChange(index)}
              disabled={!unlocked}
              aria-current={active ? "step" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-[22px] px-4 py-3 text-left transition",
                active && "bg-ink text-white shadow-soft",
                !active && unlocked && "bg-white/80 text-ink hover:bg-white",
                !active && !unlocked && "bg-transparent text-muted/60"
              )}
            >
              <span
                className={cn(
                  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
                  active && "border-white/30 bg-white/10 text-white",
                  !active && complete && "border-transparent bg-saffron text-white",
                  !active && !complete && unlocked && "border-line bg-white text-ink",
                  !active && !unlocked && "border-line/50 bg-transparent text-muted/60"
                )}
              >
                {complete ? "✓" : index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-[0.7rem] uppercase tracking-[0.16em] opacity-70">Step {index + 1}</span>
                <span className="mt-0.5 block truncate text-sm font-semibold tracking-[-0.02em]">{step}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
