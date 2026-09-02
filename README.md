# ReimagineHome Ecommerce Demo

React script-embed demo for **ecommerce mode** — structured like [Otodom Integration/React](../Otodom%20Integration%20code/React).

## Critical: dev vs prod

| | **Dev (default)** | **Production CDN** |
|---|---|---|
| Widget script | `reimaginehome-embed-widget-app-git-dev-styldod.vercel.app/widget.js` | `widget.styldod.com/widget.js` |
| Session API | `oetb78o6i5.execute-api.us-west-2.amazonaws.com/dev` | `ep-api.styldod.com` |
| `public_key` | Works (`public_key`) | **Unknown public key** |
| `mode: ecommerce` | Supported | **Rejected** |
| `media: []` + `allow_upload` | Supported | **Rejected** |

This demo defaults to **dev** — same as Otodom Vue agentic / Vanilla script-embed.

## Stage build

Same app and `public_key`, pointed at the **stage** CDN + API (like Otodom Staging):

| | **Stage** |
|---|---|
| Widget script | `stage-widget.styldod.com/widget.js` |
| Session API | `stage-ep-api.styldod.com` |
| Public key | `public_key` (unchanged) |

```bash
npm run dev:stage      # local stage
npm run build:stage    # production bundle for stage
```

Vercel stage deploy uses `vercel.stage.json` (`npm run build:stage`).

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

## Widget open (ecommerce)

```ts
await reihWidget.open({
  media: [],
  allow_upload: true,
  mode: 'ecommerce',
  products: [/* optional preselect */],
});
```

## Project layout

```
src/
├── pages/EcommerceEmbedPage.tsx   # Script inject + open (like ScriptEmbedPage)
├── widgetEnv.ts                   # Dev/prod URLs
├── widgetConfig.ts                # Catalog + openReihEcommerce()
└── components/CatalogPage.tsx     # UI only
```
