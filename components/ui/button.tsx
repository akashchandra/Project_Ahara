import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "soft";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className
}: SharedButtonProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.02em] transition duration-300 ease-out focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] disabled:cursor-not-allowed disabled:opacity-45",
    size === "sm" && "h-10 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-[0.95rem]",
    size === "lg" && "h-12 px-6 text-sm sm:h-14 sm:px-7 sm:text-base",
    variant === "primary" &&
      "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#24241f]",
    variant === "secondary" &&
      "border border-line bg-white/80 text-ink hover:-translate-y-0.5 hover:border-white/90 hover:bg-white",
    variant === "ghost" && "text-ink hover:bg-white/60",
    variant === "soft" &&
      "bg-saffron-soft text-ink hover:-translate-y-0.5 hover:bg-[rgba(209,138,44,0.18)]",
    fullWidth && "w-full",
    className
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedButtonProps;

export function Button({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        variant,
        size,
        fullWidth,
        className
      })}
      {...props}
    />
  );
}

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  SharedButtonProps;

export function ButtonLink({
  href,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonStyles({
        variant,
        size,
        fullWidth,
        className
      })}
      {...props}
    />
  );
}
