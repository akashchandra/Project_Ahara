import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

type SelectionSummary = {
  label: string;
  value?: string;
  missingText: string;
  onEdit: () => void;
};

type OrderSummaryCardProps = {
  selections: SelectionSummary[];
  veggies: string[];
  subtotal: number;
  estimatedReady: string;
  canCheckout: boolean;
  onPrimaryAction: () => void;
  primaryLabel: string;
};

export function OrderSummaryCard({
  selections,
  veggies,
  subtotal,
  estimatedReady,
  canCheckout,
  onPrimaryAction,
  primaryLabel
}: OrderSummaryCardProps) {
  return (
    <aside className="surface-card-strong sticky top-28 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Order summary</p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">Your bowl</h3>
        </div>
        <Badge tone="moss">{estimatedReady}</Badge>
      </div>

      <div className="mt-6 space-y-3">
        {selections.map((selection) => (
          <button
            key={selection.label}
            type="button"
            onClick={selection.onEdit}
            className="flex w-full items-start justify-between rounded-[22px] border border-white/75 bg-white/80 px-4 py-4 text-left transition hover:bg-white"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{selection.label}</p>
              <p className="mt-1 text-base font-semibold text-ink">
                {selection.value ?? selection.missingText}
              </p>
            </div>
            <span className="text-sm font-medium text-muted">Edit</span>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[24px] border border-white/75 bg-white/85 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Veggies</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {veggies.length > 0 ? (
            veggies.map((veggie) => (
              <Badge key={veggie} tone="default">
                {veggie}
              </Badge>
            ))
          ) : (
            <p className="text-sm text-muted">Optional. Add any combination you like.</p>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-[26px] border border-white/75 bg-ink p-5 text-white shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/70">Total</p>
            <p className="mt-1 text-3xl font-semibold tracking-[-0.04em]">{formatCurrency(subtotal)}</p>
          </div>
          <div className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium">
            No payment yet
          </div>
        </div>
        <Button
          type="button"
          onClick={onPrimaryAction}
          disabled={!canCheckout}
          fullWidth
          size="lg"
          className="mt-5 bg-white text-ink hover:bg-[#f7f1e6]"
        >
          {primaryLabel}
        </Button>
        {!canCheckout ? (
          <p className="mt-3 text-sm text-white/70">Select a base and protein to unlock checkout.</p>
        ) : (
          <p className="mt-3 text-sm text-white/70">Mock checkout only. No payment is processed.</p>
        )}
      </div>
    </aside>
  );
}
