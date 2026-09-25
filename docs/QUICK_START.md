# Service AI In-A-Box — 1-page Quick Start

Creignificent Cleaning. Phone checklist. Full SQL is in NEXT_STEPS.md.

Live: https://simple-ai-commerce.vercel.app/

Prices: Free $0 / Starter $97 / Pro $197 / $50 deposit.

## 1. Vercel env vars

Settings → Environment Variables → Production + Preview

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

Then Deployments → Redeploy (uncheck cache).

## 2. Where to get keys

- Supabase: SQL from NEXT_STEPS.md + public bucket `job-photos`
- OpenAI: platform.openai.com → API keys
- Twilio: buy number → SID + Token → inbound webhook below
- Stripe: Starter $97/mo + Pro $197/mo Price IDs + webhook below

## 3. Webhooks

- Twilio: https://simple-ai-commerce.vercel.app/api/twilio/inbound
- Stripe: https://simple-ai-commerce.vercel.app/api/stripe/webhook

## 4. Creignificent Cleaning

1. /signup — name Creignificent Cleaning, slug creignificent-cleaning
2. /onboarding — phone, default price sheet, Google review link, logo
3. Send customers /quote/creignificent-cleaning
4. Work from /inbox and /dashboard

## 5. Live test

Text your Twilio number:

`Hi, can you clean my 2 bed 2 bath Saturday? 123 Main St Fontana`

Pass = AI asks for photos.
