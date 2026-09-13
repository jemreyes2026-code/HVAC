# MJAMV General Cleaning Services

Kitchen exhaust cleaning & HVAC services landing page. Built with **React + Vite + Tailwind CSS**,
backed by **Firebase** (Firestore + Hosting), with an optional Google Sheets mirror.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> frontend/dist/
npm run preview   # preview the production build locally
```

## Project structure

```text
frontend/
  index.html                Browser entry point
  src/components/           Website sections and reusable UI
  src/pages/                Home and service detail pages
  src/api/                  Browser-side Firebase and form/gallery clients
  src/lib/                  Browser helpers (honeypot)
  src/hooks/                React behavior
  src/data/                 Service content
  src/index.css             Site styling and palettes
  assets/images/            Photos and service icons
  assets/videos/            Original hero videos
  .env / .env.example       Vite browser configuration
  vite.config.js            Frontend build configuration
  tailwind.config.js        Design tokens and utility scanning
  postcss.config.js         CSS processing
  dist/                     Generated production site (ignored by Git)
backend/
  firebase/firestore.rules  Lead validation and database access rules
  firebase/storage.rules    Gallery access rules
  apps-script/Code.gs        Optional Google Sheets endpoint
archive/legacy/              Original static website for reference
package.json                Run all npm commands from this directory
firebase.json               Deployment paths for frontend and backend
eslint.config.js            Shared lint configuration
```

The backend runs on Firebase and Google Apps Script; there is no local Node server.
Files in `frontend/src/api/` execute in the browser and call those hosted services.
Keep server secrets out of `VITE_*` variables because those values are bundled into the website.

For UI issues, start in `frontend/src/components/` or `frontend/src/pages/`.
For failed submissions, inspect `frontend/src/api/submitLead.js`, browser network errors,
and `backend/firebase/firestore.rules`. For Sheets mirroring, inspect
`backend/apps-script/Code.gs` and its Apps Script execution logs.

After this reorganization, stop any existing Vite process and restart `npm run dev`
from `HVAC/` so it loads the new paths. Dependencies still live at the project root.


## Form submissions

Both forms on the site (the main contact form and the "Get a Free Quote" popup) call
`submitLead()` in [`frontend/src/api/submitLead.js`](./frontend/src/api/submitLead.js), which:

1. **Saves to Google Sheets** through the required `VITE_GOOGLE_SCRIPT_URL` Apps Script endpoint. Success requires a JSON `{ "ok": true }` response; missing configuration, network errors, rejected writes and requests exceeding 25 seconds show an error without clearing the form.
2. **Optionally backs up to Firestore** when Firebase is configured. This does not delay the Sheets confirmation.

### Railway / Google Sheets setup

The script targets spreadsheet `1nIyxtvcBacfJ-5tcyncfx4ChDAV8YLgEF71stXqQBmU`, tab ID `1811707627`.
Paste `backend/apps-script/Code.gs` into that spreadsheet's Apps Script project, then deploy a new web app version, executing as **Me** with access for **Anyone**.
In Railway service Variables, set `VITE_GOOGLE_SCRIPT_URL` to the deployment URL ending in `/exec` (not the spreadsheet URL), then redeploy the site. Local `frontend/.env` is ignored by Git and is not uploaded to Railway.
The target tab uses these columns: Timestamp, Form, Name, Phone, Email, Service, Preferred Date, Preferred Time, Message. Headers are added only if the tab is empty.
Test both forms after deployment and verify the new rows in that tab.

### 1. Set up Firebase

```bash
cp frontend/.env.example frontend/.env
```

In the [Firebase Console](https://console.firebase.google.com/), open your project (or create
one) > **Project settings > General > Your apps**, add a Web app if you haven't, and copy its
config values into `frontend/.env`:

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

Restart `npm run dev` after editing `frontend/.env`. In production, set the same environment variables in
your hosting provider's dashboard so the production build has them at build time.

### 2. Set up the Google Sheets destination

1. Open (or create) the Google Sheet you want submissions mirrored into.
2. **Extensions > Apps Script**.
3. Delete the starter code and paste in the contents of [`backend/apps-script/Code.gs`](./backend/apps-script/Code.gs).
4. **Deploy > New deployment**, type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the script when prompted, and copy the **Web app URL** into `frontend/.env`
   as `VITE_GOOGLE_SCRIPT_URL`.

Whenever you edit `Code.gs`, you must create a new version (**Manage deployments > Edit (pencil) >
New version > Deploy**) for the changes to take effect — saving the file alone does not update the
live endpoint. Submissions land in the configured tab (ID **1811707627**) with columns:
Timestamp, Form, Name, Phone, Email, Service, Preferred Date, Preferred Time, Message.

Leave `VITE_GOOGLE_SCRIPT_URL` blank to skip the mirror entirely — leads still save to Firestore.

## Deploying the site

`firebase.json` is configured to build the Vite app (`npm run build` → `frontend/dist/`) as a predeploy
step, so:

```bash
firebase deploy
```

builds and deploys Hosting, Firestore rules, and Storage rules together. Make sure
`VITE_FIREBASE_*` (and optionally `VITE_GOOGLE_SCRIPT_URL`) are available in the shell that runs
the build, since Vite bakes `VITE_*` env vars in at build time.
