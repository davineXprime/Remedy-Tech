import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { MediaFrame } from "@/components/media-frame";
import { Badge } from "@/components/ui/badge";
import { getArticle, relatedArticles } from "@/data/articles";

export const Route = createFileRoute("/articles/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, related: relatedArticles(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.article.title} · Remedy Tech Zone` : "Remedy Tech Zone" },
      loaderData
        ? { name: "description", content: loaderData.article.dek }
        : { name: "description", content: "Field notes from Remedy Tech Zone." },
    ],
  }),
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();
  const published = new Date(article.published + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="flex flex-col gap-8">
      <Link
        to="/articles"
        className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All articles
      </Link>

      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{article.category}</Badge>
          <span className="text-xs text-muted-foreground tabular-nums">
            {published} · {article.readMinutes} min
          </span>
        </div>
        <h1 className="display text-[clamp(1.85rem,4vw,3.1rem)] font-medium">{article.title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{article.dek}</p>
      </header>

      <MediaFrame
        image={article.image}
        video={article.video}
        alt={article.title}
        autoPlay
        priority
        className="rounded-xl"
      />

      <div className="flex max-w-2xl flex-col gap-5 text-[1.05rem] leading-relaxed text-foreground">
        {article.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <aside className="max-w-2xl rounded-xl bg-secondary/70 p-5 sm:p-6">
        <h2 className="text-xs font-medium tracking-[0.2em] text-emerald uppercase">Takeaways</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
          {article.takeaways.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-jade" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>

      {related.length > 0 ? (
        <section className="flex flex-col gap-4 pt-4">
          <h2 className="display text-2xl font-medium">More Articles</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {related.slice(0, 2).map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
