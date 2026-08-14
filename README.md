# AC Paint Center — Website

Informational / product-showcase website for AC Paint Center. Static site: HTML5 + Tailwind CSS + vanilla JavaScript, no backend.

## Folder structure

```
ac-paint-center/
├── index.html              # Homepage
├── package.json
├── tailwind.config.js      # Brand colors (red/black/white) pulled from the logo
├── postcss.config.js
├── pages/
│   ├── about.html
│   ├── products.html       # Has search + category filter UI
│   ├── services.html
│   ├── gallery.html
│   └── contact.html        # Inquiry form (front-end only for now)
├── src/
│   ├── css/
│   │   └── input.css       # Tailwind entry point — edit this, not public/css/style.css
│   └── js/
│       ├── main.js         # Shared: mobile nav toggle, footer year
│       ├── filter.js       # Product category filter buttons
│       ├── search.js       # Product search box
│       ├── contact-form.js # Contact form success-message handling
│       └── products.json   # Sample product data (swap in real products)
├── public/
│   ├── css/style.css       # Compiled Tailwind output (generated, don't hand-edit)
│   └── js/                 # (reserved for any bundled/minified JS later)
└── assets/
    ├── images/
    │   ├── logo/ac-logo.jpg
    │   ├── products/
    │   └── gallery/
    └── icons/
```

## Getting started

```bash
npm install
npm run dev      # watches src/css/input.css and rebuilds public/css/style.css
```

For a production build:

```bash
npm run build     # minified CSS output
```

Then just open `index.html` in a browser (no server required), or serve the
folder with any static file host (Netlify, Vercel, GitHub Pages, etc.).

## Brand colors

Pulled from the logo:

| Name        | Hex       | Usage                          |
|-------------|-----------|---------------------------------|
| brand-red   | `#E31E24` | Primary accent, CTAs, headings  |
| brand-red-dark | `#B3151A` | Hover states                |
| brand-black | `#111111` | Text, dark sections, nav        |
| brand-white | `#FFFFFF` | Backgrounds                     |
| brand-gray  | `#F4F4F4` | Section backgrounds / cards     |

## Next steps

- Replace placeholder product cards in `pages/products.html` with real data
  (either hand-write cards, or extend `filter.js`/`search.js` to render
  from `src/js/products.json`).
- Drop real product photos into `assets/images/products/` and gallery shots
  into `assets/images/gallery/`.
- Wire `contact-form.js` up to a form backend (Formspree, EmailJS, Google
  Forms, or a real server) to actually receive messages — right now it only
  shows a front-end success message.
- If you later want a shopping cart or online ordering, that will need a
  backend/payment integration — flag it and we can plan that separately.
