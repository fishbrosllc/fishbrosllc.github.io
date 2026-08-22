# fishbrosllc.github.io

Public homepage for **Fishbros, LLC** — a static Next.js site published to GitHub
Pages. It exists to satisfy Stripe's requirement that a business have a public
website describing the business, its pricing, and its policies.

Built with Next.js (App Router, static export), React, TypeScript, and the
[Geist](https://vercel.com/geist) design system. Node 24.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
```

`npm run build` writes a fully static site to `out/`.

## Editing the content

**Everything you need to change lives in [`site.config.ts`](site.config.ts).**
Business name, description, contact details, currency, services and pricing,
and engagement terms are all read from that one file by every page. Values
marked `PLACEHOLDER` must be replaced before the site goes live.

Two fields there are deliberately optional:

- **`address`** — Stripe does not require a street address; an email address
  satisfies their contact requirement, and your country is shown either way.
  Leave `line1` empty and the contact card reads "Located in / United States".
  Fill it in and the full address renders instead.
- **`phone`** — leave `""` to hide the row entirely.

### Email addresses

The support address is stored as two halves (`emailUser`, `emailDomain`) and
joined in the browser after hydration by
[`app/components/email.tsx`](app/components/email.tsx). The exported HTML
contains no `mailto:` link and no joined address — harvesters reading markup
see `support (at) example.com`, while real visitors get a working link. The
joined string appears nowhere in the build output, only the two halves. A
scraper that executes JavaScript can still assemble it; this raises the cost
rather than making the address private. Edit the two halves, never paste a
whole address into the config.

The legal pages (`app/terms`, `app/privacy`, `app/refunds`) are written as
templates and pull business details from the same config. Read them end to end
and edit the wording to match how the business actually operates — they are a
starting point, not legal advice.

## Deploying

The site deploys on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup: in the repository, go to **Settings → Pages** and set
**Source** to **GitHub Actions**. Because the repository is named
`fishbrosllc.github.io`, the site serves from the domain root, so no `basePath`
configuration is needed.

## Stripe checklist

Stripe reviews a business website for the following. Each item has a home here:

| Requirement | Where |
| --- | --- |
| Legal business name | Header, footer, home page, contact page |
| Description of goods or services | Home page, "What we do" |
| Pricing | Home page, "Services and pricing" |
| Currency of transactions | Home page and footer |
| Fulfillment / delivery policy | Home page, "How delivery works" |
| Refund and cancellation policy | `/refunds` |
| Terms of service | `/terms` |
| Privacy policy | `/privacy` |
| Customer service contact | `/contact`, plus footer on every page |
| Country of the business | Home page eyebrow and contact card |

Make sure the business name and contact details here match exactly what was
submitted in the Stripe Dashboard — a mismatch is the most common reason a
website review fails.

Pricing is the item most often missed. Custom, individually scoped work is
fine, but Stripe expects a customer to see what something costs before buying,
so keep a rate, a starting price, or a range on the page rather than removing
pricing altogether.
