# Road 2 Care Pty Ltd — Project Guidelines & Rules

## Business Data (Never Hardcode Elsewhere)
- **Legal Entity:** Road 2 Care Pty Ltd
- **ABN:** 44 701 064 235
- **Phone:** 0482 043 737 (`+61482043737`)
- **Email:** admin@road2care.com.au
- **Domain:** road2care.com
- **Central Config File:** All contact, service, suburb, and compliance configs belong exclusively in `src/config/siteConfig.ts`.

## Compliance Standards
- Road 2 Care Pty Ltd is an **unregistered NDIS provider**.
- Support is strictly available for **Plan-Managed** and **Self-Managed** participants only.
- Never claim or suggest NDIA-registered status.

## Logo & Asset Standards
- High-definition assets: `public/images/road2care-logo-4k.png`, `public/images/road2care-logo-hd.png`, `public/images/road2care-logo-transparent.png`, and `public/images/road2care-logo-white-hd.png`.
- Because official brand text is dark navy (`#073B63`), always mount the logo on a white container/badge (`variant="badge"`) when displayed on dark backgrounds to ensure WCAG 2.2 contrast compliance.

## Deployment Workflows
- **Build:** `npm run build`
- **GitHub Pages Deploy:** `npm run deploy`
- **Production Target:** Cloudflare Pages (connects to Git `main` branch).
