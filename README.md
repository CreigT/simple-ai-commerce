# Service AI In-A-Box

AI front desk that never misses a job for local service businesses.

Live: https://simple-ai-commerce.vercel.app/

## Deploy Vercel
Import CreigT/simple-ai-commerce. Keep existing project. Add env from .env.example. Deploy main.

## Deploy Netlify
Import the same GitHub repo. Build command npm run build. Add the same env vars.

## Supabase
Run supabase/schema.sql. Create bucket job-photos.

## Webhooks
Twilio inbound: https://simple-ai-commerce.vercel.app/api/twilio/inbound
Stripe webhook: https://simple-ai-commerce.vercel.app/api/stripe/webhook

## SELF-CHECK
[x] package.json name = service-ai-in-a-box
[x] homepage headline locked
[x] pricing $0 / $97 / $197
[x] paywall 403 helpers present
[x] vercel.json and netlify.toml
[x] .env.example keys listed
[ ] npm run build must be confirmed on Vercel logs for this commit
