# MJAMV General Cleaning Services

Kitchen exhaust cleaning & HVAC services landing page. Built with **React + Vite + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
index.html              Vite entry HTML
src/
  main.jsx               React mount point
  App.jsx                Page composition
  index.css              Tailwind directives + the site's design tokens/styles
  components/             One component per section (Header, Hero, Services, ...)
  hooks/                   Shared behavior (scroll reveal, count-up, magnetic buttons, reduced motion)
  lib/submitToSheet.js     POSTs form submissions to the Google Apps Script endpoint
apps-script/Code.gs        Google Apps Script that appends form submissions to a Sheet
legacy/index.html          The original static single-file HTML version, kept for reference
```

## Saving form submissions to Google Sheets

Both forms on the site (the main contact form and the "Get a Free Quote" popup) submit to a
Google Apps Script Web App, which appends a row to a Google Sheet. No backend server required.

**1. Deploy the Apps Script:**

1. Open (or create) the Google Sheet you want submissions saved into.
2. **Extensions > Apps Script**.
3. Delete the starter code and paste in the contents of [`apps-script/Code.gs`](./apps-script/Code.gs).
4. **Deploy > New deployment**, type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the script when prompted, and copy the **Web app URL**.

**2. Point the site at it:**

```bash
cp .env.example .env
```

Edit `.env` and set:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/your-deployment-id/exec
```

Restart `npm run dev` after editing `.env`. In production, set this same environment variable
in your hosting provider's dashboard (Vercel/Netlify/etc. — see below).

**3. Re-deploying the script:** whenever you edit `Code.gs`, you must create a new version
(**Manage deployments > Edit (pencil) > New version > Deploy**) for the changes to take effect —
saving the file alone does not update the live endpoint.

Submissions land in a sheet tab named **"Form Submissions"** with columns: Timestamp, Form, Name,
Phone, Email, Service, Preferred Date, Preferred Time, Message.

## Deploying the site

This is a standard Vite app — `npm run build` outputs static files to `dist/`, deployable to
Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host. Remember to set the
`VITE_GOOGLE_SCRIPT_URL` environment variable in your host's project settings so the production
build has it at build time.
