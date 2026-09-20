import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-primary", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.15" />
      <path
        d="M16 9.2v6.1l4.2 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 text-foreground no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <Mark className="size-9 shrink-0 transition-transform duration-150 ease-out group-hover:scale-[1.04]" />
      <span className="leading-none">
        <span className="display block text-[1.35rem] font-medium tracking-tight">
          Remedy
        </span>
        {!compact ? (
          <span className="mt-0.5 block text-[0.7rem] font-medium tracking-[0.22em] text-jade uppercase">
            Tech Zone
          </span>
        ) : (
          <span className="mt-0.5 block text-[0.7rem] font-medium tracking-[0.18em] text-jade uppercase">
            Tech
          </span>
        )}
      </span>
    </Link>
  );
}
