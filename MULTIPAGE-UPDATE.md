# GROW SOFTS multipage update

The site is now configured as a static multi-page Vite app.

Pages:
- `index.html` — Home
- `products.html` — Products only
- `services.html` — Services only
- `about.html` — About Us
- `contact.html` — Contact Us

The header and footer use real page links, and the product catalog is no longer mixed into the Services/About section.

Build with:
`npm install`
`npm run build`

The generated `dist/` folder will contain the separate HTML pages and assets.
