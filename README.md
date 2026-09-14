# Royal Belgium Hotel — Final Overflow Fixed

Next.js 14 hotel website rebuild.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Final UI fixes

- Hero slide counter moved above the overlapping booking bar.
- Hero navigation controls moved above the booking bar and kept inside the hero bounds.
- Mobile/tablet hero controls use responsive safe positioning.
- Horizontal page overflow is clipped at the root to prevent accidental horizontal scrolling.
- Booking float has a safe maximum width so it cannot exceed the viewport.
- Existing routes and hotel functionality are preserved.
