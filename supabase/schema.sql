-- InnovateX CMS schema. Run this in the Supabase SQL Editor.
create extension if not exists pgcrypto;
create table if not exists public.admin_profiles(id uuid primary key references auth.users(id) on delete cascade,role text not null default 'admin' check(role='admin'),created_at timestamptz not null default now());
create table if not exists public.issues(id uuid primary key default gen_random_uuid(),title text not null,edition text,description text,cover_url text,pdf_url text,published boolean not null default false,published_at timestamptz,created_at timestamptz not null default now(),updated_at timestamptz not null default now());
create table if not exists public.articles(id uuid primary key default gen_random_uuid(),title text not null,slug text not null unique,category text,excerpt text,body text,author text,read_time text,image_url text,published boolean not null default false,published_at timestamptz,created_at timestamptz not null default now(),updated_at timestamptz not null default now());
create table if not exists public.team_members(id uuid primary key default gen_random_uuid(),name text not null,role text,bio text,photo_url text,linkedin_url text,sort_order integer not null default 0,published boolean not null default true,created_at timestamptz not null default now(),updated_at timestamptz not null default now());
create table if not exists public.site_settings(key text primary key,value jsonb not null default '{}'::jsonb,updated_at timestamptz not null default now());
create or replace function public.is_innovatex_admin() returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.admin_profiles where id=auth.uid() and role='admin'); $$;
revoke all on function public.is_innovatex_admin() from public; grant execute on function public.is_innovatex_admin() to authenticated;
alter table public.admin_profiles enable row level security; alter table public.issues enable row level security; alter table public.articles enable row level security; alter table public.team_members enable row level security; alter table public.site_settings enable row level security;
create policy "admin reads own profile" on public.admin_profiles for select to authenticated using(id=auth.uid() and role='admin');
create policy "public reads published issues" on public.issues for select to anon,authenticated using(published=true);
create policy "admins manage issues" on public.issues for all to authenticated using(public.is_innovatex_admin()) with check(public.is_innovatex_admin());
create policy "public reads published articles" on public.articles for select to anon,authenticated using(published=true);
create policy "admins manage articles" on public.articles for all to authenticated using(public.is_innovatex_admin()) with check(public.is_innovatex_admin());
create policy "public reads published team" on public.team_members for select to anon,authenticated using(published=true);
create policy "admins manage team" on public.team_members for all to authenticated using(public.is_innovatex_admin()) with check(public.is_innovatex_admin());
create policy "public reads site settings" on public.site_settings for select to anon,authenticated using(key='site');
create policy "admins manage site settings" on public.site_settings for all to authenticated using(public.is_innovatex_admin()) with check(public.is_innovatex_admin());
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values
('covers','covers',true,10485760,array['image/jpeg','image/png','image/webp']),('magazines','magazines',true,52428800,array['application/pdf']),('article-images','article-images',true,10485760,array['image/jpeg','image/png','image/webp']),('team-photos','team-photos',true,10485760,array['image/jpeg','image/png','image/webp']) on conflict(id) do nothing;
create policy "public reads publication media" on storage.objects for select to anon,authenticated using(bucket_id in('covers','magazines','article-images','team-photos'));
create policy "admins upload publication media" on storage.objects for insert to authenticated with check(bucket_id in('covers','magazines','article-images','team-photos') and public.is_innovatex_admin());
create policy "admins update publication media" on storage.objects for update to authenticated using(bucket_id in('covers','magazines','article-images','team-photos') and public.is_innovatex_admin()) with check(bucket_id in('covers','magazines','article-images','team-photos') and public.is_innovatex_admin());
create policy "admins delete publication media" on storage.objects for delete to authenticated using(bucket_id in('covers','magazines','article-images','team-photos') and public.is_innovatex_admin());
-- Create an admin: create a user in Supabase Authentication > Users, then insert its UUID:
-- insert into public.admin_profiles(id,role) values('AUTH-USER-UUID','admin');

-- Initial editable homepage copy. Change it later from /admin.
insert into public.site_settings(key, value) values ('site', '{
  "hero_eyebrow":"THE IDEAS SHAPING WHAT’S NEXT",
  "hero_title":"Curiosity is the spark. Innovation is the future.",
  "hero_description":"A closer look at the breakthroughs, bold thinkers and emerging technologies moving our world forward.",
  "about_title":"The future, unpacked.",
  "about_description":"InnovateX is a digital space for curious minds, bringing technology, engineering, artificial intelligence and human ingenuity into one thoughtful conversation.",
  "vision":"Make the next wave of innovation easier to understand, question and imagine.",
  "mission":"Explore meaningful ideas through clear stories, useful context and fresh perspectives.",
  "footer_description":"Ideas. Research. Perspective.",
  "focus_areas":[
    {"title":"Emerging technology","detail":"Understand the tools and ideas redefining what is possible."},
    {"title":"Research & discovery","detail":"Make complex breakthroughs easier to explore and discuss."},
    {"title":"Human ingenuity","detail":"Meet the people turning ambitious questions into real progress."},
    {"title":"Ideas in perspective","detail":"Look beyond the headlines to the impact that matters."}
  ]
}'::jsonb) on conflict(key) do nothing;
