# The Six Yards

> A contemporary Indian fashion storefront built around considered silhouettes, textile heritage, and a calm editorial shopping experience.

[![Live demo](https://img.shields.io/badge/Live%20demo-Visit%20site-171513?style=flat-square)](https://the-six-yards-a-fashion-website.netlify.app)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react&logoColor=171513)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

## Overview

The Six Yards is a responsive, frontend-only fashion storefront for women's wear, men's wear, and special collections. It presents products, collection stories, stores, and contact information through a polished editorial interface that works across desktop and mobile screens.

The project is intentionally focused on the browsing and shopping experience. Cart and wishlist state persist in the browser with `localStorage`, while checkout, store details, and contact submission are currently presentation/demo flows.

## Features

- Editorial home page with campaign hero, featured collections, story content, reels, and testimonials
- Collection landing page with dedicated women's wear, men's wear, and special collection routes
- Product detail pages with product information, add-to-cart, and wishlist actions
- Search page for discovering products across the catalogue
- Cart with quantity controls, item removal, totals, and browser persistence
- Wishlist with browser persistence and quick product access
- Stores directory with individual demo location pages and map links
- Contact page with client-side validation and a demo submission state
- Responsive navigation with mobile menu behavior, keyboard support, and accessible touch targets
- Accessible carousel controls, live regions, labels, and focus-friendly interactions
- Skeleton loading states for content transitions
- Local image and video assets with no external image dependency
- Custom 404 page for unknown routes

## Tech stack

- React 19
- React Router 7
- Vite 8
- JavaScript (ES modules)
- CSS
- Vitest, Testing Library, and `vitest-axe`
- ESLint

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone https://github.com/SakshamJ01/THE-SIX-YARDS-A-Fashion-Website.git
cd THE-SIX-YARDS-A-Fashion-Website
npm install
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm test` | Run the Vitest test suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:coverage` | Generate a V8 coverage report |

Open the local URL printed by Vite after running `npm run dev`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home and campaign experience |
| `/collections` | All collections |
| `/collections/womens-wear` | Women's wear |
| `/collections/mens-wear` | Men's wear |
| `/collections/special-collections` | Special collections |
| `/product/:productId` | Product detail |
| `/search` | Product search |
| `/cart` | Shopping bag |
| `/wishlist` | Saved products |
| `/stores` | Store directory |
| `/stores/:slug` | Store detail |
| `/contact` | Contact form |

## Project structure

```text
.
├── public/
│   ├── images/             # Campaign, collection, product, story, and store media
│   ├── videos/             # Editorial reel videos
│   └── favicon.svg
├── src/
│   ├── components/         # Shared UI components
│   ├── context/            # Cart and wishlist state providers/hooks
│   ├── data/               # Product and store catalogue data
│   ├── pages/              # Route-level page components
│   ├── App.jsx             # Application routes and home composition
│   └── main.jsx            # React entry point and providers
├── index.html
├── package.json
├── vercel.json              # SPA fallback configuration
└── vite.config.js
```

## Data and demo limitations

This repository does not include a backend, database, authentication, payment provider, or production CMS.

- Cart data is stored locally under `sixYardsCart`.
- Wishlist data is stored locally under `sixYardsWishlist`.
- Checkout currently displays an availability message instead of processing payment.
- Contact submissions are stored on the device for the demo experience only.
- Store addresses, opening hours, and contact details are sample content.
- Social links currently point to the relevant platform homepages.

Replace these demo flows with production services before using the site for live commerce.

## Accessibility and quality checks

The project includes automated tests for cart and wishlist behavior plus axe-based accessibility checks. Before opening a pull request, run:

```bash
npm run lint
npm test
npm run build
```

When adding interactive UI, preserve semantic HTML, keyboard access, visible focus states, descriptive labels, and reduced-motion behavior already established in the project.

## Deployment

The app is a Vite single-page application. Build it with:

```bash
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider. The included `vercel.json` configures an SPA fallback so direct navigation to client-side routes resolves to `index.html`.

## Contributing

1. Create a focused branch from `main`.
2. Make the smallest complete change that addresses the issue.
3. Run lint, tests, and the production build.
4. Update documentation when behavior or setup changes.
5. Open a pull request with a concise description and verification notes.

## License

No license has been added to this repository yet. Contact the repository owner before redistributing or using the project commercially.
