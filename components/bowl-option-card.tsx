import { CheckIcon } from "@/components/icons";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

type BowlOptionCardProps = {
  name: string;
  description: string;
  price: number;
  selected: boolean;
  tone: "saffron" | "moss" | "clay";
  onClick: () => void;
  type?: "single" | "multi";
};

export function BowlOptionCard({
  name,
  description,
  price,
  selected,
  tone,
  onClick,
  type = "single"
}: BowlOptionCardProps) {
  const toneStyles = {
    saffron: "from-[rgba(209,138,44,0.14)] to-white/80",
    moss: "from-[rgba(88,114,74,0.14)] to-white/80",
    clay: "from-[rgba(155,90,58,0.14)] to-white/80"
  };

  return (
    <button
      type="button"
      onClick={onClick}
      role={type === "single" ? "radio" : undefined}
      aria-checked={type === "single" ? selected : undefined}
      aria-pressed={type === "multi" ? selected : undefined}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border p-5 text-left shadow-soft transition duration-300 ease-out",
        selected
          ? "border-ink bg-[rgba(255,255,255,0.98)] ring-1 ring-ink/8"
          : "border-white/75 bg-white/80 hover:-translate-y-0.5 hover:border-white hover:bg-white"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", toneStyles[tone])} />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-ink">{name}</h3>
            <p className="mt-3 text-sm text-muted">{description}</p>
          </div>
          <span
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition",
              selected
                ? "border-ink bg-ink text-white"
                : "border-line bg-white/85 text-muted group-hover:border-white/80 group-hover:bg-white"
            )}
          >
            {selected ? <CheckIcon className="h-5 w-5" /> : type === "multi" ? "+" : "•"}
          </span>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-muted">
            {price > 0 ? `+ ${formatCurrency(price)}` : "Included"}
          </span>
          <span className="text-sm font-semibold text-ink">{selected ? "Selected" : "Tap to choose"}</span>
        </div>
      </div>
    </button>
  );
}
