import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${brand.name} | Modern Indian Kitchen`,
  description:
    "Premium mobile-first ordering experience for dosa, biryani, chai, and a polished build-your-bowl flow.",
  applicationName: brand.name
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas bg-halo font-sans text-ink antialiased">
        <CartProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[linear-gradient(180deg,rgba(252,238,214,0.72),transparent_70%)]" />
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
