import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "rtz-newsletter";

export function StayInTouch({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Enter a valid email to stay in touch.");
      return;
    }
    setSending(true);
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
      const next = Array.from(new Set([...existing, value]));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setEmail("");
      toast.success("You're on the list. Quiet notes, no noise.");
    } catch {
      toast.error("Could not save that just now. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      aria-labelledby="stay-in-touch-heading"
      className={
        compact
          ? "flex flex-col gap-4"
          : "rounded-xl bg-card px-5 py-6 shadow-[var(--shadow-border)] sm:px-7 sm:py-7"
      }
    >
      <div className="flex flex-col gap-1">
        <h2
          id="stay-in-touch-heading"
          className="display text-2xl font-medium tracking-tight text-foreground"
        >
          Stay in Touch!
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          New field notes on power, prep, and the tech that keeps a house quiet when the grid is not.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-end"
      >
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <Label htmlFor="newsletter-email">Email</Label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={sending} className="sm:w-auto">
          Submit
        </Button>
      </form>
    </section>
  );
}
