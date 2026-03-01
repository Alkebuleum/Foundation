# Alkebuleum Foundation Website

React + Vite site with GitHub-hosted JSON content for dynamic sections.

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

---

## 📁 Project Structure

```
alkebuleum-foundation/
├── public/
│   └── content/              ← EDIT THESE to update dynamic content
│       ├── news.json         → News & Updates section
│       ├── programs.json     → Programs section
│       ├── team.json         → Team section
│       └── ecosystem.json    → Ecosystem protocol grid (status, descriptions)
│
├── src/
│   ├── data/
│   │   └── static.js         ← Edit for hero, mission, governance, grants, footer
│   ├── hooks/
│   │   └── useContent.js     ← Fetches JSON files (don't edit unless changing infra)
│   ├── components/           ← One file per section
│   └── App.jsx               ← Root layout
```

---

## ✏️ How to Update Content

### Dynamic sections (edit JSON, no code needed)

**News** → `public/content/news.json`
```json
{
  "id": "unique-slug",
  "title": "Article title",
  "excerpt": "Short summary shown on card.",
  "category": "Program",
  "date": "March 2026",
  "image_gradient": ["#1A6B3C", "#0D3D22"],
  "url": "https://link-to-full-article"
}
```

**Programs** → `public/content/programs.json`
- Set `"featured": true` on exactly ONE item — it becomes the large amber card.
- All others render as standard cards in two columns.

**Team** → `public/content/team.json`
- Add members in order. The "Join the Foundation" card is always appended automatically.
- `avatar_initial` can be a letter, emoji, or symbol.
- `avatar_gradient` is a 2-color array `["#start", "#end"]`.

**Ecosystem** → `public/content/ecosystem.json`
- `status` must be one of: `"live"` | `"building"` | `"soon"`
- `icon_bg` is a CSS color string for the icon background.

### Static sections (edit `src/data/static.js`)

These sections rarely change — hero headline, mission text, governance steps, tokenomics, grants categories, footer links:
- Open `src/data/static.js`
- Find the exported constant for the section you want to edit
- Save and commit

---

## 🔄 Content Update Workflow (GitHub-based CMS)

1. Edit the JSON file in `public/content/`
2. Open a PR (or push directly to `main` if you have rights)
3. GitHub Pages / Vercel / Netlify redeploys automatically
4. The live site fetches fresh JSON on every page load (5-min cache)

No redeploy is needed for JSON-only content changes on most hosting platforms.

---

## 🌐 Deployment

### GitHub Pages
```bash
npm run build
# Push the dist/ folder to your gh-pages branch
# Or use the gh-pages npm package:
npx gh-pages -d dist
```

If the repo is at `github.com/Alkebuleum/Foundation`, set in `vite.config.js`:
```js
base: '/Foundation/'
```

### Vercel / Netlify
Connect the repo. Build command: `npm run build`. Output dir: `dist`.

---

## 🔌 Connecting the Grants Form

The form in `src/components/Grants.jsx` has a `handleSubmit` function with clear comments for three options:

**Option A — Your own API:**
```js
await fetch('/api/grants', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option B — Formspree (free tier available):**
```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option C — GitHub Issue via API:**
Creates a GitHub Issue in your Foundation repo for each application.
```js
await fetch('https://api.github.com/repos/Alkebuleum/Foundation/issues', {
  method: 'POST',
  headers: {
    'Authorization': `token YOUR_PAT`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: `Grant Application: ${form.project}`,
    body: `**Name:** ${form.name}\n**Email:** ${form.email}\n**Category:** ${form.category}\n\n${form.description}`,
    labels: ['grant-application'],
  }),
})
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Dev server + bundler |
| Plain CSS | Styling (no Tailwind dependency) |
| GitHub JSON | Headless CMS for dynamic content |
| `useContent` hook | Fetches + caches JSON files |

No database. No backend server. No CMS subscription.
