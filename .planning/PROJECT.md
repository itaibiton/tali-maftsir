# Tali Maftsir - Landing Page

## What This Is

A Hebrew (RTL) landing page for Tali Maftsir, a personal development coach using the Satir method. The page serves Hebrew speakers worldwide (focus: Israel, Europe, Australia/NZ) and converts visitors into discovery call bookings via WhatsApp. Two audience paths: individuals seeking personal coaching and companies seeking B2B retainer services for employee wellness.

## Core Value

**Convert visitors into discovery call bookings** — everything else (design, copy, sections) serves this single goal. The page must convey Tali's unique blend of professional sophistication and warm containment.

## Requirements

### Validated

- [x] Hero section with professional photo, headline, and primary CTA — v1.0
- [x] "About Tali" section conveying her unique qualities and approach — v1.0
- [x] Main service: 1:1 Satir coaching process presentation — v1.0
- [x] Secondary service: "Clear Way" one-time sessions as lower-commitment entry — v1.0
- [x] B2B section for companies seeking employee coaching retainer — v1.0
- [x] Two CTAs: individuals → WhatsApp discovery call, companies → business inquiry — v1.0
- [x] Testimonials section (placeholder structure, content TBD) — v1.0
- [x] FAQ section addressing common questions (session count, pricing, process) — v1.0
- [x] Responsive design (mobile-first for Israeli audience) — v1.0
- [x] RTL Hebrew typography and layout — v1.0
- [x] Green color palette (light green base with complementary tones) — v1.0
- [x] Facebook link in footer — v1.0

### Active

- [ ] Replace placeholder testimonials with real client feedback
- [ ] Configure actual WhatsApp number (currently placeholder)
- [ ] Domain purchase and deployment setup

### Out of Scope

- Blog/content section — not needed for v1 conversion focus
- Online booking system (Calendly) — WhatsApp preferred for personal touch
- LinkedIn link — account not active/relevant yet
- Logo design — Tali unsure of its purpose, skip for now
- Domain purchase/setup — separate task after landing page built
- CRM/email marketing integration — simple WhatsApp flow for now
- English version — Hebrew only for target audience
- Reservist-specific page — mention eligibility in FAQ, no separate section

## Context

### About Tali
- Lives in Amsterdam, works online via Zoom
- Almost 1 year in business, ~10 coaching processes completed
- Advanced practitioner level (post-internship, pre-certified)
- Pricing: ₪250 per session, processes ideally ~40 sessions/1 year
- Works with ages 30-60, men and women
- Also works with IDF reservists (eligible for state reimbursement)

### Her Unique Value (USP)
- Highly intelligent with deep understanding across many domains
- Exceptional listening and containment abilities
- Direct and focused vibe — NOT spiritual/hippie, but ethical and responsible
- Challenging yet loving and soft approach
- Fun, humor, and joy in sessions
- Strong presence — someone clients can lean on
- No pretense or pose
- Personal relocation experience (relevant to expat clients)
- Expertise areas: eating disorders, sexual trauma, addiction, chronic illness, rehabilitation

### Target Audience Pain Points
- "היחסים שלי עם... לא עובדים"
- "אני לא יכולה יותר להמשיך להרגיש לא טוב עם עצמי לגבי..."
- "אני רוצה לפרוץ ולא מצליח/לא יודע איך"
- "נפגעתי בעבר ואני לא יכול להמשיך ככה"
- "כנראה שיש בי יותר ממה שכרגע קורה בחיים שלי"

### Design Direction
- **Luxurious**: Sophisticated, organized, mature, high-level, excellence
- **Warm**: Humanity, good eyes, lightness, softness
- **Containing**: Experience, seniority, acceptance, solutions exist, boundaries respected
- Simple, clean, calm aesthetic
- Future-oriented consciousness
- NOT: spiritual/new-age/huggy-touchy vibes

### Color Palette
- Primary: Light green base (צמיחה, טבע, רוגע)
- Complementary tones to be determined
- Clean whites and neutral beiges (matching her photo aesthetic)

### Inspirations
- https://danielcoach.me/
- https://www.emotion.co.il/שיטת-סאטיה/

### Assets Available
- 2 professional photos (IMG_3648.JPG, IMG_3649.JPG) — white shirt, beige pants, clean background
- More photos possible via AI generation
- Facebook page: https://www.facebook.com/tali.maftsir/
- Testimonials for Clear Way sessions available, full process testimonials TBD

### Services Detail
1. **Main: 1:1 Coaching Process** — Long-term Satir method coaching (~40 sessions ideal)
2. **Clear Way Sessions** — One-time 1.5hr sessions before important events (₪150-250 or donation)
3. **B2B Retainer** — Companies hire Tali for employee personal coaching as wellness benefit

## Constraints

- **Language**: Hebrew only, full RTL support required
- **Tech Stack**: Next.js + Tailwind CSS — modern, fast, excellent RTL support
- **CTA Method**: WhatsApp buttons only (no Calendly integration in v1)
- **Hosting**: TBD — needs to be simple for Tali to maintain
- **No Domain Yet**: Landing page built first, domain purchased separately

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| WhatsApp over Calendly | Tali prefers personal touch, multi-step process improves conversion | ✓ Good - 4 WhatsApp CTAs placed throughout page |
| Two audience paths on one page | Serves both individuals and B2B without separate pages | ✓ Good - B2B section has distinct business CTA |
| Green color palette | Tali's strong preference, conveys growth/calm | ✓ Good - Sage green (#8FBC8F) with warm beige accent |
| Include Clear Way as secondary | Lower-commitment entry point to main coaching | ✓ Good - Card styling differentiates from main service |
| Next.js + Tailwind | Modern stack with excellent RTL support | ✓ Good - Next.js 16, Tailwind v4, no RTL issues |
| Skip logo for v1 | Tali unsure of purpose, can add later | ✓ Good - Brand name text works well |
| Framer Motion for animations | React-native, simpler than GSAP, smaller bundle | ✓ Good - Smooth entrance and scroll animations |
| Tailwind v4 CSS-based theming | Uses @theme directive instead of config file | ✓ Good - Clean CSS variables approach |

## Context

**Shipped:** v1.0 MVP (2026-01-16)
**Tech stack:** Next.js 16.1.2, React 19, Tailwind CSS v4, Framer Motion, TypeScript
**Codebase:** 1,045 LOC across 55 files
**Status:** Landing page complete, ready for deployment

---
*Last updated: 2026-01-16 after v1.0 milestone*
