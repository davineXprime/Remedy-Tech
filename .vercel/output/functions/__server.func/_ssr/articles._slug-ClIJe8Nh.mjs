import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-mGtvs1KV.mjs";
import { n as Badge, r as MediaFrame, t as ArticleCard } from "./article-card-CBGtH-FK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-ClIJe8Nh.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { article, related } = Route.useLoaderData();
	const published = (/* @__PURE__ */ new Date(article.published + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/articles",
				className: "inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All articles"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: article.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground tabular-nums",
							children: [
								published,
								" · ",
								article.readMinutes,
								" min"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display text-[clamp(1.85rem,4vw,3.1rem)] font-medium",
						children: article.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-lg leading-relaxed text-muted-foreground",
						children: article.dek
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
				image: article.image,
				video: article.video,
				alt: article.title,
				autoPlay: true,
				priority: true,
				className: "rounded-xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex max-w-2xl flex-col gap-5 text-[1.05rem] leading-relaxed text-foreground",
				children: article.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 32)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "max-w-2xl rounded-xl bg-secondary/70 p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-[0.2em] text-emerald uppercase",
					children: "Takeaways"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2 text-sm leading-relaxed",
					children: article.takeaways.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-jade" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl font-medium",
					children: "More Articles"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: related.slice(0, 2).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article: item }, item.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { ArticlePage as component };
