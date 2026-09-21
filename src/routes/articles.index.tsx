import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { loadAllArticles, type Category } from "@/lib/articles";

export const Route = createFileRoute("/articles/")({
  loader: () => ({ articles: loadAllArticles() }),
  component: ArticlesIndex,
  head: () => ({
    meta: [
      { title: "Articles · Remedy Tech Zone" },
      {
        name: "description",
        content: "Field notes on power, prep, and the quiet tech that keeps a house running.",
      },
    ],
  }),
});

const FILTERS: Array<"All" | Category> = ["All", "Power", "Prep", "Tech"];

function ArticlesIndex() {
  const { articles } = Route.useLoaderData();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? articles : articles.filter((a) => a.category === filter)),
    [articles, filter],
  );

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase">Desk</p>
        <h1 className="display text-4xl font-medium md:text-5xl">Articles</h1>
        <p className="max-w-xl text-muted-foreground">
          Practical notes on the systems that keep a house running — power, prep, and the quiet tech in between.
        </p>
      </header>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by topic">
        {FILTERS.map((item) => (
          <Button
            key={item}
            size="sm"
            variant={filter === item ? "default" : "outline"}
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {list.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
