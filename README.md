# Remedy Tech Zone

Field notes on **Power · Prep · Tech**. Emerald, jade, mint, and holographic white.

The home page does not contain articles. It **pulls** them from standalone HTML files so daily posts never clutter the main page.

## Post a new article

1. Copy [`public/content/articles/_template.html`](public/content/articles/_template.html).
2. Save it as a new file in [`public/content/articles/`](public/content/articles/), named as a slug:

   `my-note-title.html` → `/articles/my-note-title`

3. Fill in the attributes and write the body. That is the whole post.

Do **not** edit the home page. Newest `data-published` date is featured first.

| Field | Notes |
| --- | --- |
| `data-title` | Headline |
| `data-dek` | Card summary |
| `data-category` | `Power`, `Prep`, or `Tech` |
| `data-read-minutes` | Number |
| `data-published` | `YYYY-MM-DD` |
| `data-image` | Path under `/media/` |
| `data-video` | Clip path, or leave empty |
| `data-body` | The article HTML |
| `data-takeaways` | Optional list |

## Where things live

```
public/content/articles/   ← add posts here (one HTML file each)
public/media/              ← images and video
src/routes/index.tsx       ← home; loads articles, no copy
src/lib/articles.ts        ← pulls and parses those HTML files
```

## Run locally

```bash
npm install
npm run dev
```

Preview is on port 8080.
