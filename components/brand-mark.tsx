import Link from "next/link";
import { BowlIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="Ahara home">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-saffron shadow-soft">
        <BowlIcon className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-lg font-semibold tracking-[-0.04em] text-ink">Ahara</span>
        <span className="-mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Modern Indian
        </span>
      </span>
    </Link>
  );
}
