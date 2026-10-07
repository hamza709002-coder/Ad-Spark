create extension if not exists pgcrypto;

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text,
  description text,
  features jsonb default '[]'::jsonb,
  image_url text,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists verified_bms (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  reference_id text unique not null,
  description text,
  price numeric not null default 0,
  status text not null default 'available' check (status in ('available','reserved','sold')),
  image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  client text,
  category text,
  description text,
  results text,
  image_url text,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text,
  status text not null default 'new' check (status in ('new','contacted','in_progress','converted','closed')),
  created_at timestamptz default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  business text,
  testimonial text not null,
  photo_url text,
  rating int default 5,
  published boolean default true,
  created_at timestamptz default now()
);

alter table services enable row level security;
alter table verified_bms enable row level security;
alter table portfolio_projects enable row level security;
alter table leads enable row level security;
alter table testimonials enable row level security;

create policy "public read published services" on services for select using (published = true);
create policy "public read available bm" on verified_bms for select using (status = 'available');
create policy "public read published portfolio" on portfolio_projects for select using (published = true);
create policy "public read published testimonials" on testimonials for select using (published = true);

create policy "public insert leads" on leads for insert with check (true);

insert into services (title,slug,short_description,description,features)
values
('Meta Business Manager','meta-business-manager','Business Manager related solutions.','Professional Meta Business Manager related services.','["Setup","Business verification assistance","Asset organization"]'),
('Facebook & Instagram Ads','facebook-instagram-ads','Conversion-focused Meta advertising.','Campaign setup and optimization.','["Campaign setup","Audience research","Optimization"]'),
('Google Ads','google-ads','Search, Display and YouTube advertising.','Google Ads strategy and management.','["Keyword research","Campaign setup","Tracking"]')
on conflict (slug) do nothing;

insert into portfolio_projects(title,client,category,description,results)
values
('Meta Ads Campaign','Sample Client','Meta Ads','Sample portfolio project.','Replace this with your real result.')
on conflict do nothing;
