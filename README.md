# Masaledar

React + TypeScript + Vite. Light mode only, design tokens in
`src/styles/tokens.css`.

## Run

```
npm install
npm run dev
```

## Where things live

- `src/config/brand.config.ts` — site name, tagline, categories
- `src/config/routes.config.ts` — every route, consumed by both the router and the navbar
- `src/config/adProviders.config.ts` — ad networks + zone IDs (replace placeholders with real values from each network's dashboard)
- `src/styles/tokens.css` — every color/spacing/type value used anywhere in the app
- `src/data/jokes.ts`, `src/data/stories.ts` — content
