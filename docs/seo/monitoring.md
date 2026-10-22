# Search Console SEO Monitoring & Query Analysis Guide
**Project**: AB Removals – Man and Van (`https://abremovals.co.uk`)  
**Purpose**: Practical procedures for auditing Google Search Console (GSC) Performance data, mining partial and misspelled search impressions, and expanding natural on-page semantic coverage based on verified real-world UK search behaviour.

---

## 1. Why Search Console Query Data Matters

Google's search algorithms automatically map common misspellings (e.g. *"furnature"*, *"man & van"*, *"rubish removal"*) to canonical topics. However, human searchers often use conversational, fragmented, or hyper-local queries that Keyword Planner tools miss.

By monitoring the **Performance > Search results > Queries** report in GSC, you can identify:
1. High-impression, low-CTR queries where your page is ranking on page 2 or 3 (positions 11–30).
2. Natural question phrasing customers type when looking for removals in specific UK towns.
3. Actual colloquial variants (e.g., *"two men with a van"*, *"van hire with man"*) that indicate intent for specific fleet or crew sizes.

---

## 2. Step-by-Step: Monthly Search Console Query Review

Follow this 20-minute procedure on the 1st of every month:

### Step 1: Filter to Last 28 Days
1. Log in to [Google Search Console](https://search.google.com/search-console).
2. Select property `https://abremovals.co.uk`.
3. Navigate to **Performance** &rarr; **Search results**.
4. Set the date range to **Most recent 28 days** (compare with previous period).
5. Ensure **Total clicks**, **Total impressions**, **Average CTR**, and **Average position** are all checked.

### Step 2: Identify "Striking Distance" Opportunities (Positions 8–20)
1. In the Queries table, click the **Filter** icon &rarr; **Position** &rarr; Greater than `7.9` and Smaller than `21.0`.
2. Sort by **Impressions** descending.
3. These represent high-volume searches where a small optimization (e.g., adding an FAQ entry, strengthening internal links with descriptive anchor text, or clarifying pricing) can quickly lift the page into the top 5 positions.

### Step 3: Filter for Long-Tail Question Queries
1. Click **+ New** filter &rarr; **Query** &rarr; *Queries containing*:
   * `how much`
   * `can you`
   * `do you`
   * `what size`
   * `near me`
2. Note any specific customer questions not currently addressed in `src/content/faqs.ts` or on the relevant service page.

### Step 4: Audit Misspelling & Punctuation Patterns
1. Sort queries alphabetically or search for roots like `man`, `van`, `remov`, `furn`.
2. Look for patterns such as:
   * Singular vs plural: `house removal` vs `house removals`
   * Ampersand vs word: `man & van` vs `man and van`
   * Punctuation omissions: `two man van`, `van and driver`
3. **Crucial Rule**: Do **not** inject misspelled words into visible page headings, `<title>` tags, or meta descriptions. Search engines already understand the spelling correction. Instead, ensure the natural, properly spelled sentence answering that query exists on your `/faq` or service page.

---

## 3. How to Turn Query Insights into Code Updates Safely

When you discover an unaddressed query bringing 50+ impressions:

| Discovered Query Pattern | Safe Action in Codebase | What NEVER to Do |
| :--- | :--- | :--- |
| *"can I hire a van with driver for 1 hour"* | Add an FAQ item to `faqs.ts` under `pricing` explaining the standard 2-hour minimum hire and why it applies. | Do not create a thin doorway page called `/1-hour-van-hire`. |
| *"man and van with tail lift near me"* | Add a bullet to `/the-van` and `/services/man-and-van` highlighting hydraulic tail-lift availability for bulky sofas. | Do not repeat "man and van with tail lift near me" multiple times. |
| *"how many boxes fit in a 3.5 tonne luton van"* | Expand the fleet specs table in `/the-van` to mention standard carton capacity (approx. 80–120 medium boxes). | Do not stuff keywords into image alt tags. |
| Misspelled query like *"matress removal"* | Verify `/services/furniture-removals-and-delivery` mentions mattress and bed frame disposal/collection in natural English. | Do not deliberately misspell "mattress" anywhere. |

---

## 4. Monthly SEO Health Checklist

- [ ] **Coverage / Indexing**: Check the **Pages** tab for 404 errors, redirect errors, or unexpectedly excluded pages.
- [ ] **Core Web Vitals**: Verify all pages stay in the "Good" zone (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- [ ] **Sitemap Status**: Confirm `https://abremovals.co.uk/sitemap.xml` was read successfully with no parse errors.
- [ ] **Mobile Usability**: Confirm zero mobile layout errors across smartphones.
- [ ] **Security & Manual Actions**: Check that the manual actions tab remains "No issues detected".
