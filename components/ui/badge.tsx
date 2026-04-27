import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "saffron" | "moss" | "clay";
  className?: string;
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[-0.01em]",
        tone === "default" && "border-line bg-white/80 text-muted",
        tone === "saffron" && "border-[rgba(209,138,44,0.18)] bg-saffron-soft text-ink",
        tone === "moss" && "border-[rgba(88,114,74,0.16)] bg-[rgba(88,114,74,0.12)] text-ink",
        tone === "clay" && "border-[rgba(155,90,58,0.16)] bg-[rgba(155,90,58,0.12)] text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
