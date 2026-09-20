import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, r as Play } from "../_libs/lucide-react.mjs";
import { a as cn } from "./router-mGtvs1KV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article-card-CBGtH-FK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium tracking-wide uppercase", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground",
		mint: "bg-secondary text-secondary-foreground",
		jade: "bg-jade/15 text-emerald",
		outline: "border border-border text-muted-foreground"
	} },
	defaultVariants: { variant: "jade" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function MediaFrame({ image, video, alt, className, autoPlay = false, priority = false }) {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(autoPlay);
	(0, import_react.useEffect)(() => {
		const media = videoRef.current;
		if (!media || !video) return;
		const sync = () => {
			setPlaying(!media.paused && !media.ended);
		};
		media.addEventListener("play", sync);
		media.addEventListener("pause", sync);
		media.addEventListener("ended", sync);
		if (autoPlay) media.play().catch(() => setPlaying(false));
		else sync();
		return () => {
			media.removeEventListener("play", sync);
			media.removeEventListener("pause", sync);
			media.removeEventListener("ended", sync);
		};
	}, [autoPlay, video]);
	function play() {
		const node = videoRef.current;
		if (!node) return;
		node.play();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-lg bg-muted", className),
		children: [
			video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "aspect-video h-full w-full object-cover",
				poster: image,
				muted: true,
				loop: true,
				playsInline: true,
				autoPlay,
				preload: priority ? "metadata" : "none",
				"aria-label": alt,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: video,
					type: "video/mp4"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt,
				className: "aspect-video h-full w-full object-cover"
			}),
			video && !playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: play,
				className: "absolute inset-0 flex items-center justify-center bg-emerald-ink/20 transition-[background-color] duration-200 ease-out hover:bg-emerald-ink/30",
				"aria-label": `Play video: ${alt}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-14 items-center justify-center rounded-full bg-holo/92 text-emerald-ink shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5 translate-x-px fill-current" })
				})
			}) : null,
			video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 left-3 rounded-full bg-holo/88 px-2.5 py-1 text-[0.65rem] font-medium tracking-[0.14em] text-emerald-ink uppercase",
				children: "Video"
			}) : null
		]
	});
}
function ArticleCard({ article, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group flex flex-col overflow-hidden rounded-xl bg-card p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-250 ease-[var(--ease-smooth-out)] hover:shadow-[var(--shadow-border-hover)]", featured && "md:p-2.5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
			image: article.image,
			video: article.video,
			alt: article.title,
			autoPlay: featured,
			priority: featured,
			className: featured ? "rounded-[14px]" : void 0
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-1 flex-col gap-3 px-3 pt-4 pb-3", featured && "px-4 pt-5 pb-4"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: article.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground tabular-nums",
						children: [article.readMinutes, " min read"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: cn("display font-medium tracking-tight text-foreground", featured ? "text-2xl md:text-[1.85rem]" : "text-xl"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/articles/$slug",
						params: { slug: article.slug },
						className: "rounded-sm outline-none hover:text-emerald focus-visible:ring-2 focus-visible:ring-ring/50",
						children: article.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: article.dek
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/articles/$slug",
						params: { slug: article.slug },
						className: "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary outline-none hover:text-jade focus-visible:ring-2 focus-visible:ring-ring/50",
						children: ["Read more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				})
			]
		})]
	});
}
//#endregion
export { Badge as n, MediaFrame as r, ArticleCard as t };
