# Road2Care – Professional NDIS Disability Support Website

Welcome to the official web project for **Road2Care** ([https://road2care.com](https://road2care.com/)), an Australian disability support service dedicated to empowering NDIS participants across Melbourne, Victoria.

> **Tagline:** *Empowering Abilities. Enriching Lives.*  
> **Mission:** *Support That Helps You Move Forward.*

---

## 📋 Table of Contents
1. [Project Overview & Tech Stack](#-project-overview--tech-stack)
2. [Local Setup & Development](#-local-setup--development)
3. [Central Business Configuration (`siteConfig.ts`)](#-central-business-configuration-siteconfigts)
4. [Testing Deployment: GitHub Pages](#-testing-deployment-github-pages)
5. [Production Deployment: Cloudflare Pages (Free)](#-production-deployment-cloudflare-pages-free)
6. [Domain & DNS Configuration: Crazy Domains ➔ Cloudflare](#-domain--dns-configuration-crazy-domains--cloudflare)
7. [Google Search Console & SEO Submission](#-google-search-console--seo-submission)
8. [Enquiry Form Backend Integration](#-enquiry-form-backend-integration)
9. [Information Required Before Launch](#-information-required-before-launch)

---

## 🛠 Project Overview & Tech Stack

The website is engineered for speed, WCAG 2.2 AA accessibility, zero monthly hosting costs, and optimal SEO.

* **Frontend Framework:** React 19 + TypeScript
* **Build Tool:** Vite
* **Routing:** Hash-based SPA routing with custom SPA redirect fallbacks (compatible with both GitHub Pages subpaths and Cloudflare Pages apex domains)
* **Icons:** Lucide React
* **Styling:** Custom CSS design system (Navy `#0B3954`, Warm Amber `#E59500`, high contrast, typography via Google Fonts *Plus Jakarta Sans* and *Inter*)
* **Accessibility Features:**
  * Skip to main content link for screen readers
  * On-page Accessibility Bar (Normal, Large, X-Large text scaling + High Contrast mode)
  * Visible focus indicators (`:focus-visible`)
  * Full keyboard navigability & ARIA attributes
* **SEO & Compliance:**
  * Clean semantic HTML5
  * OpenGraph and Twitter card metadata
  * Valid XML Sitemap (`/sitemap.xml`) and `robots.txt`
  * Accurate JSON-LD structured data (`LocalBusiness`) without fabricated ratings

---

## 💻 Local Setup & Development

### Prerequisites
* **Node.js** v20+ or v22+
* **npm** v10+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
This compiles and validates all TypeScript types and generates the static bundle into the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```
Runs a local web server serving the exact production files from `dist/` on [http://localhost:4173](http://localhost:4173).

---

## ⚙️ Central Business Configuration (`siteConfig.ts`)

All business details, contact information, service offerings, operating areas, and NDIS registration status are managed in **one central file**:

📁 `src/config/siteConfig.ts`

### What You Can Edit in One Place:
* **Business Info:** Name, phone number, email address, ABN placeholder, operating hours.
* **NDIS Compliance:** Toggle `isRegisteredProvider: true/false`, customize registration notice.
* **Services:** Enable/disable any of the 9 support categories (`enabled: true/false`), update descriptions, suitability guidelines, and sample activities.
* **Operating Areas:** Update confirmed suburbs and regions.
* **Social Media Links:** Add links for Facebook, Instagram, LinkedIn.

---

## 🚀 Testing Deployment: GitHub Pages

The project includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "feat: complete Road2Care website with branding, services, and accessibility"
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository: [https://github.com/roykpallab/road2care](https://github.com/roykpallab/road2care)
2. Click **Settings** ➔ **Pages** (under Code and automation in the left sidebar).
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. GitHub will automatically trigger the workflow and publish the site to:
   ```
   https://roykpallab.github.io/road2care/
   ```
5. Any new push to `main` will automatically build and update the live test site within ~1 minute.

---

## ☁️ Production Deployment: Cloudflare Pages (Free)

Cloudflare Pages provides global CDN static hosting with free automatic SSL certificates, HTTP/3, and unlimited bandwidth.

### Step-by-Step Setup:
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, select **Workers & Pages** ➔ **Create application** ➔ **Pages** tab.
3. Select **Connect to Git** and choose the `roykpallab/road2care` repository.
4. Configure the build settings:
   * **Project name:** `road2care`
   * **Production branch:** `main`
   * **Framework preset:** `Vite`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
5. Click **Save and Deploy**. Cloudflare will build the site and provide a free `*.pages.dev` preview URL (e.g., `https://road2care.pages.dev`).

---

## 🌐 Domain & DNS Configuration: Crazy Domains ➔ Cloudflare

The domain **road2care.com** was registered through **Crazy Domains**. Follow these steps to connect your custom domain to Cloudflare Pages while preserving any active email hosting:

### Step 1: Review & Back Up Existing DNS Records (Crucial for Email!)
Before changing anything:
1. Log into your **Crazy Domains Account Manager**.
2. Go to **Domain Management** ➔ select **road2care.com** ➔ **DNS Settings**.
3. **Take a screenshot or export all existing DNS records**, especially:
   * **MX records** (e.g., Google Workspace, Microsoft 365, or Crazy Domains Webmail)
   * **TXT records** (SPF, DKIM, DMARC records for email authentication)
   * **CNAME records** (autodiscover, mail, etc.)

### Step 2: Add Domain to Cloudflare
1. In Cloudflare, click **Add a site** and enter `road2care.com`.
2. Select the **Free** plan.
3. Cloudflare will automatically scan for existing DNS records. **Verify that your email MX and TXT records are present in the list**. If any are missing, add them manually based on your backup.
4. Cloudflare will display two assigned nameservers (e.g., `aria.ns.cloudflare.com` and `jax.ns.cloudflare.com`).

### Step 3: Update Nameservers at Crazy Domains
1. In Crazy Domains, select **road2care.com** ➔ **Nameservers**.
2. Switch from Crazy Domains default nameservers to **Custom Nameservers**.
3. Enter the two Cloudflare nameservers provided.
4. Save changes. *(DNS propagation typically takes 1 to 24 hours).*

### Step 4: Connect Custom Domain to Cloudflare Pages
1. In Cloudflare Pages, go to your `road2care` project ➔ **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Add `road2care.com`. Cloudflare will automatically create the necessary CNAME/Apex DNS record.
4. Repeat for `www.road2care.com`. Cloudflare will automatically provision free SSL/TLS certificates for both.

---

## 🔍 Google Search Console & SEO Submission

### 1. Verification
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property and enter `road2care.com`.
3. Copy the TXT verification record provided by Google.
4. In Cloudflare Dashboard ➔ **DNS** ➔ **Records**, add:
   * **Type:** `TXT`
   * **Name:** `@` (or `road2care.com`)
   * **Content:** Google verification token
5. Click **Verify** in Search Console.

### 2. Submit Sitemap
1. In Search Console, click **Sitemaps** on the left menu.
2. Enter the URL:
   ```
   https://road2care.com/sitemap.xml
   ```
3. Click **Submit**. Google will begin indexing your public pages.

---

## 📬 Enquiry Form Backend Integration

The contact form currently validates inputs and provides an immediate **"Open in Email & Send Now"** (`mailto:`) fallback that pre-fills the recipient (`info@road2care.com`), subject, and formatted body.

### Recommended Free Backend Options:
To receive submissions directly without opening the user's email client:

1. **Formspree (Free tier: 50 submissions/month):**
   * Create an account on [formspree.io](https://formspree.io).
   * Update the form `action` URL in `src/pages/ContactPage.tsx` with your Formspree endpoint.
2. **Cloudflare Workers (100% Free):**
   * Deploy a lightweight Cloudflare Worker with SendGrid or Resend to forward form POST requests directly to `info@road2care.com`.

---

## 📝 Information Required Before Launch

Every placeholder used across the website is transparently documented below. The business owner should complete this checklist prior to public promotion:

- [ ] **ABN (Australian Business Number):** Provide genuine ABN to replace `XX XXX XXX XXX` in `siteConfig.ts` and footer.
- [ ] **Phone Number:** Confirm business telephone number to replace placeholder `0400 000 000`.
- [ ] **Email Address:** Verify active email address (`info@road2care.com`) where enquiries will be received.
- [ ] **NDIS Registration Status:** Verify current status with the NDIS Quality and Safeguards Commission. (Currently configured as *Unregistered Provider / Supporting Self-Managed & Plan-Managed Participants*).
- [ ] **Service Offerings Confirmation:** Review the 9 services configured in `src/config/siteConfig.ts` and disable (`enabled: false`) any services that Road2Care does not currently offer.
- [ ] **Operating Regions & Suburbs:** Review the listed Melbourne suburbs in `siteConfig.ts` and confirm specific coverage areas and travel limits.
- [ ] **Staff Profiles & Leadership:** Supply genuine team member names, roles, and accredited qualifications to replace the placeholders on the About Us page.
- [ ] **Privacy Policy Review:** Have the business owner or legal counsel review and approve the draft Privacy Policy template at `src/pages/PrivacyPage.tsx`.
- [ ] **DNS Email Records:** Confirm that existing Crazy Domains email records (MX, SPF, DKIM) are copied to Cloudflare before switching nameservers.
