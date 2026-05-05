# CS2 Weekly Drop Reset Timer

A static Vite/React web app for GitHub Pages. It shows the Counter-Strike 2 weekly drop reset countdown, detects the visitor timezone by IP with a browser fallback, includes an interactive timezone map, and provides a sortable Steam Market drop catalog.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is written to `dist/`.

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Push the project to GitHub, enable Pages with "GitHub Actions" as the source, and the site will deploy on every push to `main`.

## Data Notes

The reset timer uses Tuesday 18:00 Pacific time as the reset reference. Steam Market item prices and images are a static snapshot; the frontend links each row back to the Steam Market listing for live inspection.
