# Ad Spark Full-Stack Starter

## Stack
Next.js App Router + TypeScript + Tailwind + Supabase + Vercel.

## Local setup
1. Install Node.js.
2. Run `npm install`.
3. Create a Supabase project.
4. Open Supabase SQL Editor and run `supabase/schema.sql`.
5. Copy `.env.example` to `.env.local`.
6. Fill `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
7. Create an admin user in Supabase Authentication > Users.
8. Run `npm run dev`.
9. Open http://localhost:3000 and `/admin/login`.

## GitHub + Vercel
Push this folder to GitHub, import the repository into Vercel, and add the same environment variables in Vercel Project Settings. Vercel will build/deploy the Next.js app.

## Important
This starter intentionally does not store or expose passwords, cookies, access tokens, or other sensitive credentials for Business Manager listings. The BM area is a listing/request system only.

The admin CRUD can be expanded next into full Services, BM, Portfolio, Testimonials and Lead management screens.
