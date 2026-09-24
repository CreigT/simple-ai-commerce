# Simple AI Commerce

A complete, small digital store you can deploy today.

You do not operate the store day to day. You change a few variables and publish.

- Clean landing page
- Shop and product pages
- Fair Stripe paywall (or demo checkout)
- Instant file unlock with a signed token
- Agent status page
- Privacy and terms pages

## What you change

1. Copy `.env.example` to `.env.local`
2. Set the store name, emails, and public URL
3. Add Stripe keys when you are ready to take real payments
4. Edit `config/products.json`
5. Replace files in `public/downloads/`

That is the owner job.

## Local run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

With empty Stripe keys, checkout uses **demo mode** and still unlocks the sample file.

## Deploy on Vercel

1. Import this GitHub repo in Vercel
2. Add the same variables from `.env.example`
3. Set `NEXT_PUBLIC_STORE_URL` to your live domain
4. Deploy

Live Stripe later:

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- Webhook URL: `https://YOUR-DOMAIN/api/webhook`

Also set a long random `ACCESS_SECRET`.

## Prices

Default catalog is intentionally cheap and clear:

| Product | Price |
|---|---|
| Starter Kit | $9 |
| Commerce Prompt Pack | $19 |
| Member Pass | $29 / month |

Edit amounts in `config/products.json` (`price` is in cents).

## Owner rules

- The human is the legal owner and emergency override
- High-impact live charges only happen when Stripe keys exist
- Every checkout path is logged by Vercel / Stripe
- Access tokens expire and can be re-checked at `/unlock`
