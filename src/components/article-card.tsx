import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/articles";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-card p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-250 ease-[var(--ease-smooth-out)] hover:shadow-[var(--shadow-border-hover)]",
        featured && "md:p-2.5",
      )}
    >
      <MediaFrame
        image={article.image}
        video={article.video}
        alt={article.title}
        autoPlay={featured}
        priority={featured}
        className={featured ? "rounded-[14px]" : undefined}
      />
      <div className={cn("flex flex-1 flex-col gap-3 px-3 pt-4 pb-3", featured && "px-4 pt-5 pb-4")}>
        <div className="flex items-center gap-2">
          <Badge>{article.category}</Badge>
          <span className="text-xs text-muted-foreground tabular-nums">
            {article.readMinutes} min read
          </span>
        </div>
        <h2
          className={cn(
            "display font-medium tracking-tight text-foreground",
            featured ? "text-2xl md:text-[1.85rem]" : "text-xl",
          )}
        >
          <Link
            to="/articles/$slug"
            params={{ slug: article.slug }}
            className="rounded-sm outline-none hover:text-emerald focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {article.title}
          </Link>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{article.dek}</p>
        <div className="mt-auto pt-1">
          <Link
            to="/articles/$slug"
            params={{ slug: article.slug }}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary outline-none hover:text-jade focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            Read more
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
