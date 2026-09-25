# Next steps — Service AI In-A-Box

Saved 2026-09-24. Do not run this today. This is the checklist for later so nothing is forgotten.

Product: Service AI In-A-Box  
First customer model: Creignificent Cleaning  
Live URL: https://simple-ai-commerce.vercel.app/

Goal: turn the landing page into a working front desk (missed-call text-back, photo quotes, $50 deposit, inbox, reviews). Free $0 / Starter $97 / Pro $197.

---

## Phase 1 — Keys in Vercel (~30 min)

Vercel → project `simple-ai-commerce` → Settings → Environment Variables. Add for Production and Preview:

```text
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
STRIPE_STARTER_PRICE_ID=
STRIPE_PRO_PRICE_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Where to get them

**Supabase** — supabase.com → new project → SQL Editor → paste SQL below → Run.  
Storage → New bucket `job-photos` → public.

**OpenAI** — platform.openai.com → API keys.

**Twilio** — twilio.com → buy a number → copy SID + Token.  
Phone Numbers → your number → When a message comes in →  
`https://simple-ai-commerce.vercel.app/api/twilio/inbound`

**Stripe** — dashboard.stripe.com → Products → Starter $97/mo and Pro $197/mo → copy Price IDs.  
Webhooks → Add endpoint  
`https://simple-ai-commerce.vercel.app/api/stripe/webhook`  
→ copy signing secret.

Then Vercel → Deployments → Redeploy (uncheck cache).

---

## Phase 2 — Create Creignificent Cleaning (~5 min)

1. https://simple-ai-commerce.vercel.app/signup
2. Sign up — business row in Supabase, slug `creignificent-cleaning`
3. `/onboarding`:
   - Business name: Creignificent Cleaning
   - Phone
   - Price sheet (default cleaning prices below)
   - Google review link
   - Logo

Default price sheet:

```json
{
  "standard": {"1b1b":130,"2b1b":150,"2b2b":175,"3b2b":205,"3b3b":250,"4b3b":295},
  "deep": {"1b1b":190,"2b1b":220,"2b2b":260,"3b2b":310,"3b3b":365,"4b3b":420},
  "move_in_out": {"1b1b":210,"2b1b":250,"2b2b":300,"3b2b":360,"3b3b":420,"4b3b":480},
  "addons": {"fridge":35,"oven":35,"baseboards":30,"interior_windows":60,"laundry":35,"dishes":25}
}
```

---

## Phase 3 — Use it

**Owner screens**

- `/quote/creignificent-cleaning` — send this to customers (beds/baths + photos → quote + $50 deposit)
- `/inbox` — chats, photo jobs, deposits
- `/dashboard` — usage bar on FREE $0 (example: 2/10 chats used)

**Customer flow**

1. Missed call → Twilio texts back in 3 seconds
2. Customer sends photos → AI estimate → Stripe $50 hold
3. Job appears in inbox → confirm
4. 14 days later → reply 1–5 → 4–5 gets Google link, 1–3 alerts owner

**Live test text to your Twilio number**

```text
Hi, can you clean my 2 bed 2 bath Saturday? 123 Main St Fontana
```

AI should ask for photos. That is the pass/fail test.

---

## SQL to run in Supabase

```sql
create extension if not exists "uuid-ossp";

create table businesses (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  owner_id uuid references auth.users(id),
  slug text unique not null,
  business_name text not null,
  phone text,
  twilio_number text,
  logo_url text,
  primary_color text default '#0F6B5F',
  google_review_link text,
  price_sheet jsonb not null,
  service_area text[],
  working_hours jsonb,
  faq jsonb,
  ai_tone text default 'Friendly, professional, concise, local service business owner',
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text default 'free',
  usage_chats int default 0,
  usage_estimates int default 0,
  usage_limit_chats int default 10,
  usage_limit_estimates int default 5
);

create table customers (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  name text,
  phone text not null,
  email text,
  address text,
  created_at timestamptz default now()
);

create table jobs (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  customer_id uuid references customers(id),
  status text default 'quote_sent',
  service_type text,
  bedrooms int,
  bathrooms int,
  sqft int,
  photos text[],
  ai_estimate numeric,
  final_price numeric,
  deposit_paid boolean default false,
  stripe_payment_id text,
  scheduled_at timestamptz,
  ai_notes text,
  created_at timestamptz default now()
);

create table conversations (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  customer_id uuid references customers(id),
  channel text,
  direction text,
  body text,
  ai_handled boolean default true,
  created_at timestamptz default now()
);

create table reviews (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  job_id uuid references jobs(id),
  rating int,
  feedback text,
  google_review_clicked boolean default false,
  created_at timestamptz default now()
);

alter table businesses enable row level security;
alter table customers enable row level security;
alter table jobs enable row level security;
alter table conversations enable row level security;
alter table reviews enable row level security;

create policy "owner can do all" on businesses for all using (auth.uid() = owner_id);
create policy "business related access" on customers for all using (business_id in (select id from businesses where owner_id = auth.uid()));
create policy "business related access" on jobs for all using (business_id in (select id from businesses where owner_id = auth.uid()));
create policy "business related access" on conversations for all using (business_id in (select id from businesses where owner_id = auth.uid()));
create policy "business related access" on reviews for all using (business_id in (select id from businesses where owner_id = auth.uid()));

insert into storage.buckets (id, name, public) values ('job-photos', 'job-photos', true) on conflict do nothing;
```

Same SQL also lives in `supabase/schema.sql` if that file is on main.

---

## Later (optional)

One-page Quick Start PDF: ENV checklist + SQL + Twilio/Stripe webhook URLs, phone-friendly. Not built in this commit.
