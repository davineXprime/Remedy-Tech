import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-input bg-card px-3.5 text-base text-foreground shadow-[var(--shadow-border)] outline-none transition-[box-shadow,border-color] duration-150 ease-out placeholder:text-muted-foreground focus-visible:border-jade focus-visible:ring-2 focus-visible:ring-ring/40 md:text-sm",
          className,
        )}
        ref={ref}
        suppressHydrationWarning
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
