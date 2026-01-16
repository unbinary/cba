# CBA - Canadians for Broadcast Accountability

Website for Canadians for Broadcast Accountability, a nonprofit focused on holding Canadian broadcasters accountable to their CRTC licence obligations.

**Domain:** cba-tv.ca

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Vercel KV (Redis) for petition signatures and email subscriptions
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

**Required for forms to work:**
- `KV_URL` - Vercel KV connection URL
- `KV_REST_API_URL` - Vercel KV REST API URL
- `KV_REST_API_TOKEN` - Vercel KV API token
- `KV_REST_API_READ_ONLY_TOKEN` - Vercel KV read-only token

These are automatically configured when you link a KV database in the Vercel dashboard.

## Deployment

1. Push to GitHub
2. Import project in Vercel
3. Add a KV database (Storage > KV > Create)
4. Link KV to the project
5. Configure custom domain: cba-tv.ca

## Site Structure

```
/                          Home
/about                     About CBA
/issues                    Issues overview
/issues/pay-audio          Pay audio bundling campaign (active)
/take-action               Sign petitions, join email list
/resources                 CRTC guides
/resources/how-to-complain How to file a CRTC complaint
/resources/how-to-intervene How to intervene in hearings
/contact                   Contact form
```

## API Routes

- `POST /api/petition/sign` - Sign petition (stores in KV)
- `GET /api/petition/count` - Get signature count
- `POST /api/subscribe` - Email signup
- `POST /api/contact` - Contact form submission
