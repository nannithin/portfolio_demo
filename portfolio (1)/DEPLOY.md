# Deploy to Vercel via GitHub

## 1. Push to GitHub from Lovable

1. In the Lovable editor, open the **GitHub** panel (top-right).
2. Click **Connect to GitHub** and choose the repository owner/account.
3. Name the repo (e.g. `maren-holt-portfolio`) and push.
4. Lovable will keep the repo in sync with future edits.

## 2. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel should auto-detect the framework as **Other** or **TanStack Start**.
3. Use these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** leave empty (Nitro writes to `.vercel/output` automatically)
   - **Install Command:** `npm install`
4. Click **Deploy**.

## 3. Environment variables (only if needed)

This portfolio uses a public Lanyard endpoint for Discord status and does not require secrets. If you later add Lovable Cloud / Supabase features, copy the environment variables from Lovable Project Settings → Environment into Vercel's Environment Variables page.

## 4. Custom domain

After the first deploy, open the project in Vercel and go to **Settings → Domains** to add your custom domain.
