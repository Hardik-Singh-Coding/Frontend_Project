# Mood Guesser

A lightweight **sentiment-style mood analyzer** for short text. Enter a phrase, click **Analyze**, and the page updates a label, emoji, and **background color** based on whether the wording leans positive, negative, or neutral.

Built as a small frontend exercise using plain **HTML**, **CSS**, and **JavaScript** (no framework).

---

## Features

- Text input with one-click analysis
- Lexicon-based scoring over positive and negative word lists
- Visual feedback: mood label, emoji, and full-page background color
- Static site suitable for **GitHub Pages**

---

## How it works

1. User text is normalized (lowercased; punctuation is stripped for matching).
2. The string is split into words.
3. Each word is checked against **positive** and **negative** word lists; matches adjust a running score.
4. The final score maps to **positive**, **negative**, or **neutral**, which drives the UI and `document.body` background color.

This is a simple, explainable baseline—not a trained machine-learning model—so it is easy to reason about and extend (e.g. negation or stronger weighting later).

---

## Project structure

| Path | Role |
|------|------|
| `index.html` | Markup: input, button, result area |
| `style.css` | Layout and styling |
| `script.js` | Sentiment logic and DOM updates |
| `.github/workflows/static-site.yml` | CI validation and deployment |

---

## Run locally

Clone the repository, then open `index.html` in your browser (double-click the file or use a local static server if you prefer).

No build step or package install is required for the app itself.

---

## CI/CD

**GitHub Actions** runs on every push to `main`:

1. **Validate HTML** — `html5validator` checks `index.html` (HTML5-oriented validation).
2. **Deploy** — If validation succeeds, the site is published to **GitHub Pages** using the official Pages actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`).

Repository **Settings → Pages** should use **GitHub Actions** as the source for deployment.

---

## Live site

After a successful workflow run, the published URL appears on the workflow summary and under **Settings → Pages**. It typically follows:

`https://hardik-singh-coding.github.io/Frontend_Project/`