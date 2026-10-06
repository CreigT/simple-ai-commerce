# Harbor — Vercel deploy checklist

Repo: https://github.com/CreigT/simple-ai-commerce
Live: https://simple-ai-commerce.vercel.app

Owner changes only: Vercel env vars and config/products.json.

## 1. Confirm the commit

- Branch: main
- Catalog: config/products.json has 4 products
- Product page: /product/starter-kit
- Shop: /shop

## 2. Import or keep the project

1. Open https://vercel.com/new
2. Import CreigT/simple-ai-commerce if it is not already connected
3. Framework: Next.js
4. Root directory: ./
5. Build command: npm run build
6. Output: leave default

## 3. Environment variables

Vercel → Project → Settings → Environment Variables
Add these for Production and Preview. Leave blank keys empty until you have them.

```
NEXT_PUBLIC_APP_URL=https://simple-ai-commerce.vercel.app
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_STARTER_PRICE_ID=
STRIPE_PRO_PRICE_ID=
```

Demo checkout works with STRIPE_SECRET_KEY blank. Buy sends the customer to /success?demo=1.

## 4. Deploy

1. Deployments → Redeploy latest main
2. Uncheck "Use existing Build Cache"
3. Wait for Ready

## 5. Click these URLs

- https://simple-ai-commerce.vercel.app/
- https://simple-ai-commerce.vercel.app/shop
- https://simple-ai-commerce.vercel.app/product/starter-kit
- https://simple-ai-commerce.vercel.app/product/member-pass
- https://simple-ai-commerce.vercel.app/pricing

Pass: each product page shows name, price, and Continue to paywall.

## 6. Live cards later

1. Stripe → Developers → API keys → secret key into STRIPE_SECRET_KEY
2. Webhook endpoint: https://simple-ai-commerce.vercel.app/api/stripe/webhook
3. Events: checkout.session.completed
4. Put the signing secret in STRIPE_WEBHOOK_SECRET
5. Redeploy

Plans on /pricing stay $0 / $97 / $197. Harbor kits are separate one-time and $9/mo products.
