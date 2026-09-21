import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Button, i as Route$4 } from "./router-CVsIDYYc.mjs";
import { t as ArticleCard } from "./article-card-B1qVq-W_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B2Ar0I5p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { articles } = Route$4.useLoaderData();
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const featured = articles[0];
	const rest = articles.slice(1);
	const visible = showAll ? rest : rest.slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "stagger-in flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase",
					children: "Field notes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display mt-3 text-[clamp(2.6rem,8vw,4.4rem)] font-medium leading-[0.95] text-foreground",
					children: ["Remedy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-[0.72em] text-emerald",
						children: "Tech Zone"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-sm text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase",
					children: "Power · Prep · Tech"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-24 bg-jade/50" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "articles-heading",
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "articles-heading",
						className: "display text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase",
						children: "— Articles —"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articles",
						className: "text-xs font-medium tracking-wide text-primary hover:text-jade",
						children: "Browse all"
					})]
				}),
				featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, {
					article: featured,
					featured: true
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: visible.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article }, article.slug))
				}),
				!showAll && rest.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "lg",
						onClick: () => setShowAll(true),
						children: "More Articles"
					})
				}) : rest.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/articles",
							children: "Open the full desk"
						})
					})
				}) : null
			]
		})]
	});
}
//#endregion
export { Home as component };
