import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About · Remedy Tech Zone" },
      {
        name: "description",
        content: "Who writes Remedy Tech Zone, and what Power, Prep, and Tech mean here.",
      },
    ],
  }),
});

function About() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase">The desk</p>
        <h1 className="display text-4xl font-medium md:text-5xl">About</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A small editorial zone for people who want their house to stay quiet when the grid does not.
        </p>
      </header>

      <img
        src="/media/workshop.jpg"
        alt="A preparedness workshop bench with radios, testers, and morning light"
        className="aspect-[4/3] w-full rounded-xl object-cover"
      />

      <div className="flex max-w-2xl flex-col gap-5 text-[1.05rem] leading-relaxed">
        <p>
          Remedy Tech Zone is not a bunker catalog and not a gadget blog. It is a set of field notes
          on three things that actually keep a household together: power you can store, prep you
          would carry, and tech that still works when the towers do not.
        </p>
        <p>
          We write like installers and editors, not influencers. Specs when they matter. Habits when
          they matter more. If a product only looks ready in a photograph, it does not belong here.
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Power",
            copy: "Batteries, solar, and the unglamorous wiring that makes them last.",
          },
          {
            title: "Prep",
            copy: "Kits, water, and the boring medicine you will be glad you packed.",
          },
          {
            title: "Tech",
            copy: "Radios, mesh, and the small shields worth keeping in a metal box.",
          },
        ].map((pillar) => (
          <div key={pillar.title} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
            <dt className="display text-xl font-medium text-emerald">{pillar.title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
