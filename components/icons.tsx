import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function SparkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M12 2L13.6 8.4L20 10L13.6 11.6L12 18L10.4 11.6L4 10L10.4 8.4L12 2Z"
        fill="currentColor"
      />
      <path
        d="M18.2 16.2L18.9 18.8L21.5 19.5L18.9 20.2L18.2 22.8L17.5 20.2L14.9 19.5L17.5 18.8L18.2 16.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BowlIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M4 11C5.25 7 8.35 5 12 5C15.65 5 18.75 7 20 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.2 13.5C7.4 16.9 9.4 18.8 12 18.8C14.6 18.8 16.6 16.9 17.8 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8.4" cy="9.2" r="1.2" fill="currentColor" opacity="0.75" />
      <circle cx="15.8" cy="8.8" r="1.2" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M6 12.5L10 16.5L18 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5V12L15 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-6 w-6", className)}>
      <path d="M4 7H20M4 12H20M4 17H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-6 w-6", className)}>
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M18.5 5.5C14.7 5.3 11.2 6.5 8.8 8.9C6.6 11.1 5.4 14.1 5.5 18.5C9.9 18.6 12.9 17.4 15.1 15.2C17.5 12.8 18.7 9.3 18.5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M8 16L16 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
