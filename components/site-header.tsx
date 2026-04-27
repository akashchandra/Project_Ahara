"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { MobileNav } from "@/components/mobile-nav";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/build-your-bowl", label: "Build Your Bowl" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-shell items-center justify-between rounded-[28px] border border-white/70 bg-[rgba(255,250,244,0.82)] px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
        <BrandMark />
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-white/70 p-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium tracking-[-0.02em] transition",
                  active ? "bg-ink text-white" : "text-muted hover:bg-white hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center lg:flex">
          <ButtonLink href="/menu" size="md">
            Order Now
          </ButtonLink>
        </div>
        <MobileNav
          open={open}
          onToggle={() => setOpen((current) => !current)}
          onClose={() => setOpen(false)}
          links={links}
        />
      </div>
    </header>
  );
}
