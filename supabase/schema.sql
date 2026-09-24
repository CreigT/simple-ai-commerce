create extension if not exists "uuid-ossp";
create table businesses (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),
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
  name text, phone text not null, email text, address text,
  created_at timestamp with time zone default now()
);
create table jobs (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  customer_id uuid references customers(id),
  status text default 'quote_sent',
  service_type text, bedrooms int, bathrooms int, sqft int, photos text[],
  ai_estimate numeric, final_price numeric, deposit_paid boolean default false,
  stripe_payment_id text, scheduled_at timestamp with time zone, ai_notes text,
  created_at timestamp with time zone default now()
);
create table conversations (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  customer_id uuid references customers(id),
  channel text, direction text, body text, ai_handled boolean default true,
  created_at timestamp with time zone default now()
);
create table reviews (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid references businesses(id) on delete cascade,
  job_id uuid references jobs(id), rating int, feedback text,
  google_review_clicked boolean default false,
  created_at timestamp with time zone default now()
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
