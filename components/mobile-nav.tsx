"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
};

export function MobileNav({ open, onToggle, onClose, links }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink shadow-soft transition hover:bg-white lg:hidden"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(23,23,20,0.16)] backdrop-blur-md transition duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[min(90vw,24rem)] border-l border-white/70 bg-[rgba(255,250,244,0.95)] px-5 pb-8 pt-24 shadow-depth backdrop-blur-xl transition duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "rounded-3xl border px-4 py-3 text-base font-medium tracking-[-0.02em] transition",
                  active
                    ? "border-white/70 bg-white text-ink shadow-soft"
                    : "border-transparent bg-white/55 text-muted hover:border-white/70 hover:bg-white/80 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6">
          <ButtonLink href="/menu" onClick={onClose} size="lg" fullWidth>
            Order Now
          </ButtonLink>
        </div>
      </aside>
    </>
  );
}
