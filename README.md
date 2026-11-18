# InnovateX

**Ideas. Research. Perspective.**

InnovateX is a digital technology magazine. Its public content is powered by Supabase and managed through a private editorial dashboard.

## Stack
- React 19 + Vite
- Supabase Auth, Postgres, Row Level Security and Storage
- React Router

## Local setup
1. Install dependencies: `npm install`
2. Create a Supabase project.
3. Run `supabase/schema.sql` in the Supabase SQL Editor.
4. Copy `.env.example` to `.env` and add the Supabase project URL and publishable/anon key.
5. Start the site: `npm run dev`

## Admin access
- Open `/admin/login`.
- Public sign-ups are not provided. Create the administrator account from Supabase Authentication.
- Copy the Auth user's UUID and run `insert into public.admin_profiles(id, role) values ('AUTH-USER-UUID', 'admin');`.
- Only users with an `admin` profile can manage content. Database RLS policies enforce this for database and Storage operations.

## Editorial CMS
The admin dashboard manages:
- Magazine issues, cover images and PDF editions
- Articles, article images, full text and publication state
- Editorial team profiles and display order
- Homepage hero, about, mission, vision, focus areas and contact details

Public pages query published records from Supabase. Draft content is not visible to visitors. If no records have been published, the site displays an empty state rather than sample records.

## Vercel deployment
Add these environment variables in Vercel Project Settings → Environment Variables, then redeploy:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Use the Supabase publishable/anon key only in the frontend. Never expose the service-role key in a Vite environment variable.

## Scripts
- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production output
- `npm run lint` — ESLint
