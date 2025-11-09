# My Holidays in Morocco — Static Site (GitHub Pages Ready)

This folder contains a complete static website: HTML + CSS + JS + images + content.
You can upload the **contents** of this folder (not the folder itself) to GitHub and enable **GitHub Pages**.

## How to replace pictures
Put your own photos into: `assets/images/` and then update the `src` paths inside the HTML files.
- Example: change `<img src="assets/images/hero.png">` to your file, e.g. `assets/images/hero-agafay.jpg`

## How to change text & prices
Open these HTML files in any editor:
- `index.html` (home + featured packages)
- `about.html`
- `destinations.html`
- `sports.html`
- `events.html`
- `blog.html`
- `contact.html`

## How to update blog cards
Edit `content/blogs.json` — each object is a post card.

## Colors
Brand colors are in `assets/styles.css` at the top:
```
--brand-white: #FFFFFF;
--brand-orange: #FF6600;
--brand-gold: #FFD700;
--brand-text: #111111;
```

## Publish on GitHub Pages
1. Create a public repo and upload all files from this folder to the **repo root**.
2. Settings → Pages → Source = Deploy from a branch; Branch = main; Folder = /(root).
3. Wait ~1–2 minutes, then open the live URL.
