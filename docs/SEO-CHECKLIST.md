# Off-Site SEO & Search Engine Optimization Checklist

This operational checklist documents the off-site, local SEO, and verification actions required to maximize organic search rankings, Google Maps local pack visibility, and brand authority across the UK for **AB Removals – Man and Van**.

---

## 1. Webmaster Tools & Indexing Verification

### Google Search Console (GSC)
- [ ] **Property Ownership Verification**:
  - Add domain property `abremovals.co.uk` in [Google Search Console](https://search.google.com/search-console).
  - Verify via DNS TXT record with your domain registrar.
- [ ] **Submit XML Sitemap**:
  - Submit the primary sitemap index: `https://abremovals.co.uk/sitemap.xml`.
  - Confirm Google successfully fetches all 239 static routes.
- [ ] **URL Inspection & Indexing Request**:
  - Test the homepage (`/`), main service pages (`/services/house-removals`, `/services/man-and-van`), and top hub pages (`/areas/london`, `/pricing`).
  - Request priority indexing after deployment.
- [ ] **Structured Data / Rich Results Verification**:
  - Run key URLs through the [Google Rich Results Test](https://search.google.com/test/rich-results).
  - Confirm validation for `MovingCompany`, `WebSite`, `Service`, `FAQPage`, and `BreadcrumbList`.

### Bing Webmaster Tools
- [ ] **Import from Google Search Console**:
  - Link Bing Webmaster Tools directly to GSC for instant verification.
  - Submit `https://abremovals.co.uk/sitemap.xml`.

---

## 2. Google Business Profile (GBP) & Local 3-Pack

Google Business Profile is the #1 ranking factor for local searches like *"man and van near me"* and *"house removals London"*.

- [ ] **Claim & Verify Primary Profile**:
  - Profile Name: `AB Removals – Man and Van`
  - Primary Category: **Moving Company** (or **Removals Service**)
  - Secondary Categories: **Delivery Service**, **Transportation Service**, **Truck Rental Agency**
- [ ] **Exact NAP Consistency (Strict Requirement)**:
  Ensure your Name, Address, and Phone number exactly match the website code:
  - **Business Name**: AB Removals & Transport Ltd trading as AB Removals – Man and Van
  - **Registered Address**: Unit 4, Gateway Business Park, Silvertown Way, London, E16 1EA
  - **Direct Telephone**: `07405 328 674` (+44 7405 328 674)
  - **Website URL**: `https://abremovals.co.uk`
- [ ] **Service Areas Configuration**:
  - Select "Service Area Business" (delivers goods to customers).
  - Add all operating regions: Greater London, Birmingham, Manchester, Leeds, Bristol, and Nationwide routes.
- [ ] **Upload Authentic Media**:
  - Upload high-resolution photos of your actual Mercedes-Benz Sprinter Luton van, tail lift in operation, cargo ties, quilted blankets, and team.
  - *Do not use generic stock photos*, as Google penalizes stock imagery in GBP.
- [ ] **Operating Hours**:
  - Set hours matching website: Mon – Sat: 7:00 AM – 8:00 PM, Sun: 8:00 AM – 6:00 PM.

---

## 3. Customer Review Strategy & Reputation Management

- [ ] **Create Direct Review Shortlink**:
  - In GBP Dashboard, generate your short review URL (e.g. `https://g.page/r/abremovals/review`).
  - Update `src/app/(marketing)/reviews/page.tsx` with your live custom shortlink.
- [ ] **Post-Move Follow-Up Protocol**:
  - Send an automated WhatsApp or SMS review request within **2 hours** of job completion when the customer is most relieved and appreciative.
  - Recommended template:
    > *"Hi [Customer Name], thank you for moving with AB Removals today! Could you take 30 seconds to share your feedback on Google? It really helps our local family business: [Shortlink]"*
- [ ] **Trustpilot Business Profile**:
  - Claim your free profile at [Trustpilot for Business](https://business.trustpilot.com).
  - Verify domain `abremovals.co.uk`.
- [ ] **Review Responses**:
  - Respond to 100% of reviews (both positive and negative) within 24 hours. Include target keywords naturally (e.g., *"Thank you for trusting our Luton van crew with your flat removal in Camden..."*).

---

## 4. UK Local Citations & Directory Listings (NAP Consistency)

Citations on high-authority UK business directories validate your business legitimacy to search engines. Submit your exact NAP details to:

- [ ] **Yell.com**: Free UK business listing under "Removals & Storage".
- [ ] **Checkatrade**: Vetted trades directory (essential for homeowner trust in removals).
- [ ] **Thomson Local**: Essential UK citation source.
- [ ] **FreeIndex**: Free UK business reviews directory.
- [ ] **Scoot & The Sun / TouchLocal Network**: Major UK syndication network.
- [ ] **192.com**: Official UK business registry data sync.
- [ ] **Apple Business Connect**: Ensure Siri, Apple Maps, and iOS search display correct phone and location.
- [ ] **Waze & TomTom Places**: Critical for commercial sat-nav discovery.

---

## 5. Technical SEO Audit & Ongoing Monitoring

- [ ] **Core Web Vitals Monitoring**:
  - Test production speed on [PageSpeed Insights](https://pagespeed.web.dev/).
  - Ensure Largest Contentful Paint (LCP) < 2.5s, Cumulative Layout Shift (CLS) < 0.1, and Interaction to Next Paint (INP) < 200ms.
- [ ] **Broken Link & 404 Checks**:
  - Regularly inspect Google Search Console "Coverage / Page Indexing" reports for crawl anomalies.
- [ ] **HTTPS & Security Headers**:
  - Verify HSTS, CSP, and SSL certificates are active with grade A+ on [SSL Labs](https://www.ssllabs.com/ssltest/).
