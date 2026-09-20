import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CNztRrYk.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase",
						children: "The desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display text-4xl font-medium md:text-5xl",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-lg text-muted-foreground",
						children: "A small editorial zone for people who want their house to stay quiet when the grid does not."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/workshop.jpg",
				alt: "A preparedness workshop bench with radios, testers, and morning light",
				className: "aspect-[4/3] w-full rounded-xl object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-2xl flex-col gap-5 text-[1.05rem] leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Remedy Tech Zone is not a bunker catalog and not a gadget blog. It is a set of field notes on three things that actually keep a household together: power you can store, prep you would carry, and tech that still works when the towers do not." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We write like installers and editors, not influencers. Specs when they matter. Habits when they matter more. If a product only looks ready in a photograph, it does not belong here." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					{
						title: "Power",
						copy: "Batteries, solar, and the unglamorous wiring that makes them last."
					},
					{
						title: "Prep",
						copy: "Kits, water, and the boring medicine you will be glad you packed."
					},
					{
						title: "Tech",
						copy: "Radios, mesh, and the small shields worth keeping in a metal box."
					}
				].map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "display text-xl font-medium text-emerald",
						children: pillar.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: pillar.copy
					})]
				}, pillar.title))
			})
		]
	});
}
//#endregion
export { About as component };
