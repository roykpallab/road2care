---
name: road2care-guide
description: >-
  Comprehensive runbook and architectural guide for developing, maintaining, and deploying the Road 2 Care Pty Ltd
  NDIS website. Use this skill whenever working on the Road 2 Care codebase, updating services or business details,
  managing branding and high-definition logo assets, or executing GitHub Pages and Cloudflare Pages deployments.
---

# Road 2 Care Pty Ltd — Website Engineering & Maintenance Skill

This skill documents all architectural decisions, compliance rules, branding standards, configuration sources, and deployment procedures for the **Road 2 Care** NDIS disability support services web application.

---

## 1. Verified Business Identity & NDIS Compliance

Always use the verified, legal details when updating any copy, metadata, or schema across the application:

| Attribute | Verified Value |
| :--- | :--- |
| **Legal Company Name** | `Road 2 Care Pty Ltd` |
| **Trading Name** | `Road 2 Care` |
| **ABN** | `44 701 064 235` |
| **Official Phone** | `0482 043 737` (International: `+61482043737`) |
| **Official Email** | `admin@road2care.com.au` |
| **Production Domain** | `https://road2care.com` (Target: Cloudflare Pages) |
| **Testing / Staging URL** | `https://roykpallab.github.io/road2care/` |
| **Primary Service Region** | Melbourne & Greater Victoria (Banyule, Darebin, Whittlesea, Hume, Manningham, Nillumbik, etc.) |

### Mandatory Compliance Rules
- **Provider Status:** Road 2 Care Pty Ltd operates as an **unregistered NDIS provider**.
- **Eligible Funding Streams:** Exclusively supports **Plan-Managed** and **Self-Managed** NDIS participants.
- **Strict Limitation:** **Never** state or imply NDIA-registered status, and **never** claim to accept NDIA-managed participants without verified registration.
- **Privacy & Intake:** Contact and referral forms do **not** store clinical medical records in unencrypted databases. Intake forms dispatch structured client inquiries directly to `admin@road2care.com.au`.

---

## 2. Codebase Structure & Central Configuration

The application is built with **React 19**, **TypeScript**, and **Vite** with **HashRouter** (`base: './'`) to allow seamless navigation across GitHub subpaths and root domains without 404 routing errors.

### Central Source of Truth: `src/config/siteConfig.ts`
To modify business details, service listings, operating suburbs, or FAQs, **always update `src/config/siteConfig.ts`**. Do not hardcode phone numbers, email addresses, or ABNs across individual components.

```typescript
// Key sections in src/config/siteConfig.ts:
siteConfig.business.name             // 'Road 2 Care Pty Ltd'
siteConfig.business.abn              // '44 701 064 235'
siteConfig.business.phone            // '+61482043737'
siteConfig.business.phoneDisplay     // '0482 043 737'
siteConfig.business.email            // 'admin@road2care.com.au'
siteConfig.services                  // 9 core NDIS support service offerings
siteConfig.serviceAreas              // Region listings and suburbs
siteConfig.faqs                      // FAQ items with honest compliance answers
```

### Key Components
- [`src/components/Navbar.tsx`](file:///Users/pallab/Documents/git/roykpallab/road2care/src/components/Navbar.tsx): Responsive top navigation, emergency callouts, mobile drawer, and accessibility controls.
- [`src/components/Footer.tsx`](file:///Users/pallab/Documents/git/roykpallab/road2care/src/components/Footer.tsx): Pre-footer CTA strip, brand card badge, Acknowledgement of Country, NDIS compliance disclaimers, and ABN display.
- [`src/components/AccessibilityBar.tsx`](file:///Users/pallab/Documents/git/roykpallab/road2care/src/components/AccessibilityBar.tsx): Font scaling (Normal, Large, X-Large) and WCAG High Contrast mode toggles.
- [`src/components/Logo.tsx`](file:///Users/pallab/Documents/git/roykpallab/road2care/src/components/Logo.tsx): High-definition logo renderer with responsive `srcSet`.

---

## 3. Brand Assets & Logo High-Definition Standards

The official Road 2 Care palette:
- **Deep Australian Navy:** `#0B3954`
- **Vibrant Golden Amber:** `#E59500` / `#F4A622`
- **Compassionate Teal:** `#0D9488`
- **Accessible Background Light:** `#F8FAFC`

### Logo Assets in `public/images/`:
- `road2care-logo-4k.png`: 4K Ultra-HD master (`2872 × 1200 px`) for high-DPI retina displays.
- `road2care-logo-hd.png`: 2x Retina master (`1436 × 600 px`).
- `road2care-logo-transparent.png`: Transparent background master preserving internal white highway dashes.
- `road2care-logo-white-hd.png`: High-definition inverted logo with crisp white lettering and vibrant gold accents for dark navy surfaces.

### Critical Display Rule for Dark Backgrounds:
The official logo features dark navy text (`#073B63`). When placed directly on dark navy containers (e.g., the footer `#072336`), navy-on-navy results in contrast failure and blurriness.
- **Rule:** In dark containers, always render the logo inside an elevated white card badge:
  ```tsx
  <Logo height={48} variant="badge" />
  ```
- On light surfaces (e.g., the header/navbar), standard rendering is used:
  ```tsx
  <Logo height={52} variant="default" />
  ```

---

## 4. Local Development Runbook

From the repository root (`road2care/`):

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with host exposure)
npm run dev -- --host

# 3. Validate TypeScript and bundle build
npm run build

# 4. Preview production build locally
npm run preview -- --port 4173 --host
```

---

## 5. Deployment Runbooks

### Method 1: GitHub Pages (Testing / Staging)
To deploy the latest build to GitHub Pages (`gh-pages` branch):

```bash
npm run deploy
```

> [!WARNING]
> **Environment Protection Rule Fix on GitHub:**
> If GitHub Pages throws:
> `Branch "main" (or "gh-pages") is not allowed to deploy to github-pages due to environment protection rules.`
> **Resolution:**
> 1. Go to: [Repository Settings > Environments](https://github.com/roykpallab/road2care/settings/environments).
> 2. Open `github-pages`.
> 3. Under **Deployment branches and tags**, change from "Selected branches" to **"No restriction"**.
> 4. Save and re-run deployment.

### Method 2: Cloudflare Pages (Recommended Free Production)
To point `road2care.com` to the site with zero hosting costs and automatic SSL:
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select repository: `roykpallab/road2care`.
3. Build Configuration:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy site and add custom domain `road2care.com`. Cloudflare manages global CDN caching, SSL certificates, and automatic builds on every push to `main`.
