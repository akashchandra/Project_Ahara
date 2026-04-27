import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { brand } from "@/lib/data";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/build-your-bowl", label: "Build Your Bowl" }
];

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-14 sm:pb-10 sm:pt-20">
      <div className="shell">
        <div className="surface-card-strong grid gap-10 px-6 py-8 sm:px-8 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:items-start">
          <div className="space-y-4">
            <BrandMark />
            <p className="max-w-sm text-sm text-muted">
              Premium fast-casual Indian food designed for the way people actually order today.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Navigate</h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink transition hover:text-saffron"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Visit</h3>
              <p className="mt-4 text-sm text-muted">{brand.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Hours</h3>
              <p className="mt-2 text-sm text-muted">{brand.hours}</p>
            </div>
            <p className="text-sm text-muted">Instagram / TikTok / Maps</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
