# عمّان درايف / Amman Drive

Arabic RTL multi-company car rental marketplace prototype for Amman, Jordan.

[Private hosted preview](https://amman-drive-arena.y27qbdznb6.chatgpt.site/) · [GitHub repository](https://github.com/benomarh224-prog/aman-dirve)

## Run locally

Install Node.js, then run:

```sh
git clone https://github.com/benomarh224-prog/aman-dirve.git
cd aman-dirve
npm run dev
```

Visit http://127.0.0.1:4173. No dependency installation or build step is required. Run `npm run check` to check the application JavaScript syntax.

## Deploy

The complete static website is in `dist/`. Upload that directory to a static hosting provider. The GitHub export is independent of the existing private Sites deployment and contains no Sites project identity or credentials.

## Features and demo data

Includes 18 explicitly fictional companies and 36 illustrative listings, location/category/budget/company/text filtering, sorting, date selection, saved favorites, comparison of up to three vehicles, company directory, car details, date-based price calculation, and locally saved/exportable rental and company application drafts. Forms never send data or confirm bookings. The privacy dialog clears local data.

Production requires real verified company inventory, live availability, company onboarding, authentication, a database, notifications and booking integrations. This prototype has no payment processor or reservation backend.

Images: Unsplash. Amman photo by Daniel Qura: https://unsplash.com/photos/MHzsbAYKkv0. Vehicle photos illustrate categories and do not guarantee model matches. `download-assets.mjs` retains asset source IDs. Google Fonts: Noto Sans Arabic, Manrope.
