import type { Metadata } from "next";
import type { ReactNode } from "react";
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
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(252,238,214,0.9),transparent_62%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[22rem] bg-[radial-gradient(circle_at_center,rgba(127,151,111,0.08),transparent_60%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
