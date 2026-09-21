import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as Button, r as Route$1 } from "./router-CVsIDYYc.mjs";
import { t as ArticleCard } from "./article-card-B1qVq-W_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.index-rGKoSEzz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"Power",
	"Prep",
	"Tech"
];
function ArticlesIndex() {
	const { articles } = Route$1.useLoaderData();
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => filter === "All" ? articles : articles.filter((a) => a.category === filter), [articles, filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase",
						children: "Desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display text-4xl font-medium md:text-5xl",
						children: "Articles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-muted-foreground",
						children: "Practical notes on the systems that keep a house running — power, prep, and the quiet tech in between."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Filter by topic",
				children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: filter === item ? "default" : "outline",
					onClick: () => setFilter(item),
					"aria-pressed": filter === item,
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: list.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article }, article.slug))
			})
		]
	});
}
//#endregion
export { ArticlesIndex as component };
