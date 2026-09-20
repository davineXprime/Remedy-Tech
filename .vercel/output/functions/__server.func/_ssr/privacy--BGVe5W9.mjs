import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy--BGVe5W9.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		title: "What we collect",
		body: "The newsletter form stores the address you type in your own browser so this preview can remember you signed up. We do not run a shared mailing database from this page. If you deploy this desk with a real list provider, that provider’s terms apply."
	},
	{
		title: "Cookies and local storage",
		body: "This site uses local storage only for the stay-in-touch form. There are no advertising pixels, no third-party analytics cookies, and no cross-site trackers in the editorial pages themselves. Hosting and preview infrastructure may set their own technical cookies."
	},
	{
		title: "Compliance stance",
		body: "Editorial content is for household planning. It is not legal, medical, or electrical-code advice. Permits, interconnection, radio licenses, and building rules still belong to you and the people who stamp the drawings. We do not sell personal information. We do not share newsletter addresses with brokers."
	},
	{
		title: "Your choices",
		body: "Clear this site’s local storage to remove a saved email from the preview. If you contacted us through a live list in production, ask that list’s operator for deletion. Do not send medical details, account passwords, or children’s information through the form."
	},
	{
		title: "Contact",
		body: "Questions about this notice can be sent to the address you would use to stay in touch. We will treat privacy notes as operational, not marketing."
	}
];
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-medium tracking-[0.28em] text-jade uppercase",
					children: "Legal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-4xl font-medium md:text-5xl",
					children: "Privacy and Compliance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-muted-foreground",
					children: "A short, plain notice — no bunker of footnotes. Last updated September 2026."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex max-w-2xl flex-col divide-y divide-border",
			children: SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-6 first:pt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-2xl font-medium",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-foreground",
					children: section.body
				})]
			}, section.title))
		})]
	});
}
//#endregion
export { Privacy as component };
