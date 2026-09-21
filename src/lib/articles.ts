export type Category = "Power" | "Prep" | "Tech";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: Category;
  readMinutes: number;
  published: string;
  image: string;
  video?: string;
  takeaways: string[];
  bodyHtml: string;
};

const CATEGORIES: Category[] = ["Power", "Prep", "Tech"];

const articleFiles = import.meta.glob("../../public/content/articles/*.html", {
  query: "?raw",
  eager: true,
  import: "default",
}) as Record<string, string>;

function attr(html: string, name: string): string {
  const match = html.match(new RegExp(`data-${name}="([^"]*)"`));
  return decode(match?.[1] ?? "");
}

function decode(value: string): string {
  return value.replaceAll("&#39;", "'");
}

function inner(html: string, marker: string): string {
  const match = html.match(
    new RegExp(`<(?:div|ul)[^>]*${marker}[^>]*>([\\s\\S]*?)</(?:div|ul)>`, "i"),
  );
  return match?.[1]?.trim() ?? "";
}

function stripTags(value: string): string {
  return decode(value.replace(/<[^>]+>/g, "").trim());
}

function slugFromPath(path: string): string {
  return (path.split("/").pop() ?? "").replace(/\.html$/, "");
}

function parseArticle(html: string, slug: string): Article | null {
  if (slug.startsWith("_")) return null;
  const title = attr(html, "title");
  const dek = attr(html, "dek");
  const categoryRaw = attr(html, "category");
  const category = CATEGORIES.includes(categoryRaw as Category)
    ? (categoryRaw as Category)
    : null;
  const image = attr(html, "image");
  const published = attr(html, "published");
  if (!title || !dek || !category || !image || !published) return null;

  const video = attr(html, "video");
  const takeaways = [...inner(html, "data-takeaways").matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(
    (item) => stripTags(item[1] ?? ""),
  );
  const bodyHtml = inner(html, "data-body").replace(/<script[\s\S]*?<\/script>/gi, "");

  return {
    slug,
    title,
    dek,
    category,
    readMinutes: Number(attr(html, "read-minutes")) || 5,
    published,
    image,
    video: video || undefined,
    takeaways,
    bodyHtml,
  };
}

let cache: Article[] | null = null;

export function loadAllArticles(): Article[] {
  if (cache) return cache;
  cache = Object.entries(articleFiles)
    .map(([path, html]) => parseArticle(html, slugFromPath(path)))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => b.published.localeCompare(a.published));
  return cache;
}

export function getArticle(slug: string) {
  return loadAllArticles().find((article) => article.slug === slug);
}

export function relatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  const rest = loadAllArticles().filter((article) => article.slug !== slug);
  if (!current) return rest.slice(0, limit);
  const same = rest.filter((article) => article.category === current.category);
  const other = rest.filter((article) => article.category !== current.category);
  return [...same, ...other].slice(0, limit);
}
