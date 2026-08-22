# Landing Page

The creative marketing/showcase page for **Wire**, a real-time 1-to-1 and group chat feature built for a take-home assignment. This is a standalone project — it does not share code with the chat app itself, only a visual identity and a link to it.

**Live demo:** `https://chatt-app-landing-page.vercel.app`
**Chat app demo:** `https://chat-app-phi-one-54.vercel.app/login`
**Chat app repository:** `https://github.com/SHARIFULALAM2025/chatApp` — full architecture notes, API documentation, and the Part 3 write-up live there.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | JetBrains Mono (display) · Manrope (body), via `next/font/google` |

---

## Design Direction

A dark "dispatch / teleprinter" aesthetic — ink-navy background, a teal signal accent, monospace display type — built around the idea of a message in transit rather than a generic SaaS template. The hero section features a looping, animated two-way conversation (typing indicators, timestamps, delivery ticks) instead of a static screenshot, so the page demonstrates the product's real-time behavior directly rather than describing it in prose.

---

## Getting Started

```bash
git clone <your-landing-page-repo-url>
cd landing-page
npm install
npm run dev
```

Runs at `http://localhost:3000`.

### Build for production

```bash
npm run build
npm run start
```

---

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Font setup, metadata
│   ├── page.tsx          # Full landing page content
│   └── globals.css       # Design tokens (colors, fonts) as CSS variables
└── components/
    └── HeroConversation.tsx   # Animated hero conversation demo
```

---

## License

Built for a take-home technical assessment. Not licensed for reuse.