# MJAMV General Cleaning Services

Kitchen exhaust cleaning & HVAC services landing page. Built with **React + Vite + Tailwind CSS**,
backed by **Firebase** (Firestore + Hosting), with an optional Google Sheets mirror.

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
firebase.json            Firebase Hosting + Firestore + Storage config
firestore.rules          Validates writes to the `leads` collection
storage.rules             Public-read/admin-write rules for the `gallery` bucket
src/
  main.jsx               React mount point
  App.jsx                Page composition
  index.css              Tailwind directives + the site's design tokens/styles
  components/             One component per section (Header, Hero, Services, ...)
  hooks/                   Shared behavior (scroll reveal, count-up, magnetic buttons, reduced motion)
  lib/firebase.js          Firebase app + Firestore init
  lib/submitLead.js        Writes a lead to Firestore, and optionally mirrors it to a Google Sheet
apps-script/Code.gs        Optional Google Apps Script that appends form submissions to a Sheet
legacy/index.html          The original static single-file HTML version, kept for reference
```

## Form submissions

Both forms on the site (the main contact form and the "Get a Free Quote" popup) call
`submitLead()` in [`src/lib/submitLead.js`](./src/lib/submitLead.js), which:

1. **Writes to Firestore** — adds a document to the `leads` collection. This is the backend
   the site depends on; `firestore.rules` validates the shape of every write (required fields,
   string lengths, allowed `source` values) and denies all reads/updates/deletes from the client,
   so submitted leads are only visible via the Firebase Console.
2. **Optionally mirrors to a Google Sheet** — if `VITE_GOOGLE_SCRIPT_URL` is set, the same
   submission is also POSTed to a Google Apps Script Web App that appends a row to a Sheet. This
   is best-effort: a failed Firestore write blocks the "sent" state and shows an error, but a
   failed Sheet mirror only logs a console warning.

### 1. Set up Firebase

```bash
cp .env.example .env
```

In the [Firebase Console](https://console.firebase.google.com/), open your project (or create
one) > **Project settings > General > Your apps**, add a Web app if you haven't, and copy its
config values into `.env`:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Deploy the security rules once (requires the [Firebase CLI](https://firebase.google.com/docs/cli)):

```bash
firebase deploy --only firestore:rules,storage:rules
```

Restart `npm run dev` after editing `.env`. In production, set the same environment variables in
your hosting provider's dashboard so the production build has them at build time.

### 2. (Optional) Set up the Google Sheets mirror

1. Open (or create) the Google Sheet you want submissions mirrored into.
2. **Extensions > Apps Script**.
3. Delete the starter code and paste in the contents of [`apps-script/Code.gs`](./apps-script/Code.gs).
4. **Deploy > New deployment**, type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the script when prompted, and copy the **Web app URL** into `.env`
   as `VITE_GOOGLE_SCRIPT_URL`.

Whenever you edit `Code.gs`, you must create a new version (**Manage deployments > Edit (pencil) >
New version > Deploy**) for the changes to take effect — saving the file alone does not update the
live endpoint. Submissions land in a sheet tab named **"Form Submissions"** with columns:
Timestamp, Form, Name, Phone, Email, Service, Preferred Date, Preferred Time, Message.

Leave `VITE_GOOGLE_SCRIPT_URL` blank to skip the mirror entirely — leads still save to Firestore.

## Deploying the site

`firebase.json` is configured to build the Vite app (`npm run build` → `dist/`) as a predeploy
step, so:

```bash
firebase deploy
```

builds and deploys Hosting, Firestore rules, and Storage rules together. Make sure
`VITE_FIREBASE_*` (and optionally `VITE_GOOGLE_SCRIPT_URL`) are available in the shell that runs
the build, since Vite bakes `VITE_*` env vars in at build time.
