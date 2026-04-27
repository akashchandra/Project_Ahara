import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  className,
  innerClassName,
  children
}: SectionShellProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className={cn("shell", innerClassName)}>{children}</div>
    </section>
  );
}
