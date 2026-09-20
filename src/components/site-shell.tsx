import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Toaster } from "sonner";
import { Mark, Wordmark } from "@/components/logo";
import { StayInTouch } from "@/components/stay-in-touch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/articles" as const, label: "Articles" },
  { to: "/about" as const, label: "About" },
  { to: "/privacy" as const, label: "Privacy and Compliance" },
];

function NavLinks({
  onNavigate,
  stacked = false,
}: {
  onNavigate?: () => void;
  stacked?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav aria-label="Primary" className={cn(stacked ? "flex flex-col" : "flex flex-col gap-1")}>
      {NAV.map((item) => {
        const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "flex min-h-11 items-center border-b border-border py-2 text-[0.95rem] font-medium tracking-wide text-foreground no-underline outline-none transition-[color,padding] duration-150 ease-out hover:text-jade focus-visible:ring-2 focus-visible:ring-ring/50",
              stacked && "pl-3",
              active && "border-jade text-emerald",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-[15.5rem] shrink-0 flex-col justify-between border-r border-border bg-card/70 px-6 py-8 backdrop-blur-sm lg:flex">
      <div className="flex flex-col gap-10">
        <Wordmark />
        <div className="relative border-l-2 border-jade/70 pl-1">
          <NavLinks stacked />
        </div>
      </div>
      <p className="text-[0.7rem] leading-relaxed tracking-[0.18em] text-muted-foreground uppercase">
        Power · Prep · Tech
      </p>
    </aside>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="holo-field relative min-h-dvh">
      <div className="grain" aria-hidden="true" />
      <div className="holo-sheen pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <div className="relative z-10 flex min-h-dvh">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-3 border-b border-border bg-card/80 px-4 py-3 backdrop-blur-sm lg:hidden">
            <Wordmark />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Mark className="size-7" />
                    Remedy Tech Zone
                  </SheetTitle>
                  <SheetDescription>Power. Prep. Tech.</SheetDescription>
                </SheetHeader>
                <div className="mt-8">
                  <NavLinks stacked onNavigate={() => setMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </header>

          <main id="main" className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-5 py-8 sm:px-8 sm:py-12">
            {children}
          </main>

          <footer className="mx-auto w-full max-w-4xl px-5 pb-10 sm:px-8">
            <Separator className="mb-8" />
            <StayInTouch />
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Remedy Tech Zone · Field notes for a quieter house.
            </p>
          </footer>
        </div>
      </div>

      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "font-sans",
        }}
      />
    </div>
  );
}
