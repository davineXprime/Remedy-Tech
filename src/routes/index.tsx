import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [showAll, setShowAll] = useState(false);
  const featured = articles[0];
  const rest = articles.slice(1);
  const visible = showAll ? rest : rest.slice(0, 2);

  return (
    <div className="flex flex-col gap-10">
      <header className="stagger-in flex flex-col items-center text-center">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase">
          Field notes
        </p>
        <h1 className="display mt-3 text-[clamp(2.6rem,8vw,4.4rem)] font-medium leading-[0.95] text-foreground">
          Remedy
          <span className="mt-1 block text-[0.72em] text-emerald">Tech Zone</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Power · Prep · Tech
        </p>
        <div className="mt-6 h-px w-24 bg-jade/50" />
      </header>

      <section aria-labelledby="articles-heading" className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="articles-heading"
            className="display text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase"
          >
            — Articles —
          </h2>
          <Link
            to="/articles"
            className="text-xs font-medium tracking-wide text-primary hover:text-jade"
          >
            Browse all
          </Link>
        </div>

        <ArticleCard article={featured} featured />

        <div className="grid gap-5 sm:grid-cols-2">
          {visible.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {!showAll ? (
          <div className="flex justify-center">
            <Button variant="outline" size="lg" onClick={() => setShowAll(true)}>
              More Articles
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button variant="ghost" asChild>
              <Link to="/articles">Open the full desk</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
