# Ktech Website — Product Requirements Document
> Version 2.0 · April 2026 · Design Revision Sprint

---

## 0. Executive Summary

The current Ktech website has strong copy and a solid design system but suffers from three compounding problems: **spatial clustering** (elements are too dense with no breathing room), **layout scaling failures** (sections don't transition gracefully between breakpoints), and **structural gaps** (missing GitHub link, broken CTA hierarchy). This PRD defines the exact fixes needed — nothing is being rebuilt from scratch, everything is surgical.

**Reference sites:**
- **icomat.co.uk** → Animation philosophy: staggered entrance, smooth scroll-linked transforms, text masking, fluid motion with `cubic-bezier(0.22, 1, 0.36, 1)`
- **vercel.com** → Layout philosophy: 1400px wide container, extreme whitespace, sparse grid, typographic hierarchy, generous padding between sections

---

## 1. Problem Statements

### P1 — Text Reveal Section is Visually Overwhelming
**Current state:** The `ENGINEERING EXTRAORDINARY DIGITAL EXPERIENCES…` text block uses a massive `clamp(56px, 10vw, 128px)` size with no margin relief. At 1440px it renders as ~144px — three lines of brutal grey text that feel like a wall, not a statement.

**Expected:** The text should feel like a cinematic moment — large yes, but with generous vertical padding, reduced max size, and a subtle gradient fade-in from the bottom. Reference: icomat.co.uk's opening text treatments.

### P2 — Projects Section is Clustered and Confusing
**Current state:** The horizontal scroll carousel uses `90vw` card width, meaning cards bleed off screen with no clear visual affordance that more cards exist. Project titles (`LOW-LEVEL NEURAL NW`) are truncated on `bg-bg-secondary` with no hierarchy separation between tag, title, date, and body text. The layout looks like a dump of content rather than a curated showcase.

**Expected:** Cards should be fixed-width (`680px` max, `520px` min), with clear internal grid — tag top-left, badge top-right, massive title, then a divider line, then metadata row, then description. Visible "next card" peek of `160px` at viewport edge to signal scrollability. Reference: Vercel's feature showcase grid for spacing discipline.

### P3 — No GitHub Link / CTA Hierarchy Broken
**Current state:** Projects show no external link. The CTA section at the bottom jumps from project carousel to "READY TO BUILD?" with no transition section. There is no social proof layer.

**Expected:** Each project card gets a subtle `↗ View on GitHub` link (opens in new tab). A thin stats/social-proof bar is inserted between the projects section and the CTA — e.g. `3 Projects · 2 Languages · 1 Production App`. The CTA section gets a visual separator (full-width hairline) before it.

### P4 — Mobile Scaling Failures
**Current state:** The hero headline at mobile (`< 640px`) likely renders at 56px+ which for 3 lines = 168px+ of just headline text, pushing CTAs below the fold on all mobile viewports.

**Expected:** Headline clamp retuned: `clamp(40px, 9vw, 96px)`. Sub-description font size reduced to `clamp(15px, 2vw, 18px)`. CTA buttons must be visible without scrolling on any iPhone 13+ viewport.

---

## 2. Design Principles (Non-negotiable)

| Principle | Implementation Rule |
|---|---|
| **Breathe First** | Minimum `py-32` between any two sections. `py-48 md:py-80` for major sections. Never let content touch section edges. |
| **One Thing at a Time** | Each scroll position should communicate exactly one idea. No section competes for attention with its neighbor. |
| **Motion has Meaning** | Animations reveal hierarchy, not decoration. Text enters word-by-word top-to-bottom. Cards enter left-to-right with `60ms` stagger between items. |
| **Scale Communicates Value** | Ghost numbers (`220px`) are background texture — not the message. Real titles get `clamp(32px, 6vw, 64px)`, not larger. |
| **Dark is Depth, Not Weight** | `bg-bg-primary (#020617)` sections must have at least one ambient element (grid texture, radial glow, or grain) to avoid feeling flat. |

---

## 3. Section-by-Section Requirements

### 3.1 Navbar — No Change
Navbar is visually correct. No work needed here.

---

### 3.2 Hero — Minor Tuning

**Change:** Reduce `hero-headline` max size from `128px` to `96px`.
```css
/* BEFORE */
.hero-headline { font-size: clamp(56px, 10vw, 128px); }

/* AFTER */
.hero-headline { font-size: clamp(40px, 9vw, 96px); }
```

**Change:** Increase gap between headline and sub-description. Add `mt-8` to the serif italic paragraph.

**Change:** CTA button group — add `gap-6` (currently too close), ensure both buttons are on one line at 375px.

**No change:** Eyebrow, copy, dot grid background, scroll indicator.

---

### 3.3 Marquee Ticker — No Change
Working well.

---

### 3.4 Text Reveal Section — Major Rework

**Current problems:** Text size too large, no vertical rhythm, the word-by-word reveal fires too fast, gray color makes it feel like placeholder text.

**Required changes:**

1. **Reduce font size:**
```css
/* Target class inside ScrollTextReveal for this section */
font-size: clamp(32px, 5vw, 64px);
line-height: 1.1;
```

2. **Change text color progression:** Words start at `#1E293B` (near-invisible) and animate to `#94A3B8` (text-secondary), NOT `#F8FAFC`. The statement is architectural — it shouldn't be the loudest thing on the page.

3. **Add section framing:**
```
[Section Label: — PHILOSOPHY]
[36px vertical space]
[Reveal text block, max-width: 900px, not full-bleed]
[36px vertical space]
[Thin accent line, 120px wide, left-aligned]
```

4. **Slow the reveal:** Scroll scrub duration should require ~300px of scroll travel per line (currently fires too fast).

5. **Padding:** Change from `py-48 md:py-80` to `py-32 md:py-64` — this section should feel like a breath, not a chapter.

---

### 3.5 Services — Minor Tuning

**Change:** Sticky column label font — reduce to `11px` tracking `0.3em`, all uppercase. Too competing with card titles currently.

**Change:** Cards — add `max-width: 560px` to prevent them stretching full width on ultrawide screens.

**Change:** Stack pills at bottom of card — pill border-radius to `4px` (currently too round for the brand voice), gap between pills `8px`.

**No change:** Card copy, icons, hover states, section structure.

---

### 3.6 Process — Minor Tuning

**Change:** Ghost numbers — reduce opacity from apparent `0.05` to `0.03`. They're competing too much with step titles.

**Change:** Step descriptions — add `max-width: 260px` per column to prevent text from running into adjacent columns on wide screens.

**Change:** Add a thin `border-t border-white/5` between process section and work section.

---

### 3.7 Work / Projects — FULL REWORK (Critical Path)

This is the most broken section. Full spec below.

#### Layout Architecture

```
[Section Label: SELECTED WORK]          ← top, left-aligned, section-label class
[Title: PROJECTS]                       ← clamp(56px, 8vw, 96px), directly below
[Sub: 3 projects · open source]        ← text-secondary, 14px, mt-4
[Horizontal drag carousel]             ← mt-16
[Pagination dots / drag hint]          ← mt-8, centered
```

#### Card Spec (per card)

```
Width:     min(680px, 85vw)   ← NOT 90vw, allows peek of next card
Height:    auto (min 480px)
Padding:   48px
Radius:    8px (was 12px — sharper = more premium)
Gap:       32px between cards
```

**Card internal layout (grid):**
```
┌─────────────────────────────────────────────────┐
│  TAG (11px, accent, tracking 0.3em)   [BADGE]   │
│                                                  │
│  PROJECT TITLE                                   │  ← clamp(40px, 6vw, 72px)
│  (2 lines max, truncate)                        │
│                                                  │
│  ─────────────────────────────────── (divider)  │
│                                                  │
│  LOCATION        PERIOD                          │  ← 12px, text-secondary
│                                                  │
│  Description paragraph                           │  ← 15px, line-height 1.6
│                                                  │
│  • Bullet 1                                      │
│  • Bullet 2                                      │
│                                                  │
│  ─────────────────────────────────── (divider)  │
│                                                  │
│  [Stack tags row]         [↗ GitHub]             │  ← bottom row
└─────────────────────────────────────────────────┘
```

#### GitHub Links (New)

Each project card gets a `↗ GitHub` link in the bottom-right. Spec:
- Text: `View Source ↗` or `GitHub ↗`
- Style: `11px, weight 600, tracking 0.15em, text-secondary`
- Hover: `text-accent` with `0.3s` transition
- Opens `target="_blank" rel="noopener noreferrer"`
- URLs: Add to project data object (even if placeholder `#` until repos are public)

**Project GitHub URLs (placeholder — update when repos go public):**
```
Project 01 (Neural NW):  https://github.com/[username]/neural-network-cpp
Project 02 (RetroCode):  https://github.com/[username]/retrocode-editor
Project 03 (MyOfficeHub): https://github.com/[username]/myofficehub
```

#### Drag/Scroll Affordance

Add a persistent drag hint below the carousel:
```
← DRAG TO EXPLORE →         (12px, text-secondary, centered)
[●  ○  ○]                   (pagination dots, 6px diameter)
```
Dots update as cards scroll. Active dot: `bg-accent`. Inactive: `bg-white/20`.

#### Animation on Enter

Cards should not all appear at once. On section enter:
- Card 1: `opacity 0 → 1`, `translateX(-40px → 0)`, 400ms, delay 0ms
- Card 2: same, delay 120ms
- Card 3: same, delay 240ms

---

### 3.8 Social Proof Bar (New Section)

Insert between Projects and CTA. Thin, full-width, dark background.

**Layout:**
```
────────────────────────────────────────────── (hairline, white/10)

    3          ·          2          ·          1
PROJECTS      LANGUAGES        PRODUCTION APP

────────────────────────────────────────────── (hairline, white/10)
```

**Styling:**
- Numbers: `clamp(40px, 5vw, 64px)`, Barlow Condensed 900, `text-accent`
- Labels: `11px`, tracking `0.3em`, `text-secondary`, uppercase
- Padding: `py-24`
- Animation: Numbers count up from 0 on scroll enter (`StatCounter` component already exists)

---

### 3.9 CTA Section — Minor Tuning

**Change:** Add `border-t border-white/5 mb-24` above section.

**Change:** Add a third button option — `View GitHub →` that links to `https://github.com/[username]` (profile-level link, not project-specific). Style: ghost, secondary.

**Change:** The radial glow — increase opacity from current value to `rgba(59,130,246,0.12)` for more presence.

**No change:** Title copy, layout, existing buttons.

---

### 3.10 Footer — No Change

---

## 4. Animation System (icomat.co.uk Reference)

### 4.1 Core Philosophy
icomat uses **scroll-linked** transforms rather than just intersection-observer triggers. Motion feels tied to the user's hand, not independent. Apply this to:

- Text reveal section: each word's opacity tied to `scrollYProgress` — feels like the user is "painting" the text as they scroll.
- Project cards: subtle `translateY` parallax as user scrolls past — cards at `+8px` offset when entering viewport, settle to `0`.

### 4.2 Easing Standard
All transitions use `--ease-premium: cubic-bezier(0.22, 1, 0.36, 1)` (already defined). No exceptions. No `ease-in-out`, no `linear`.

### 4.3 Duration Standards
| Type | Duration |
|---|---|
| Micro-interactions (hover) | `200–300ms` |
| Element entrances | `600–800ms` |
| Section transitions | `1000–1200ms` |
| Scroll-linked | Tied to scroll (no duration) |

### 4.4 What NOT to Animate
- Do NOT animate background colors
- Do NOT use bouncing/elastic easing
- Do NOT chain more than 3 animations on a single element
- Do NOT animate layout properties (`width`, `height`, `padding`) — only `transform` and `opacity`

---

## 5. Layout System (Vercel Reference)

### 5.1 Container Hierarchy
```
Page max-width: 1400px
Section padding: 0 48px (desktop) → 0 24px (tablet) → 0 16px (mobile)
Content max-width: 1200px (for text-heavy sections)
Card grids: 1200px max within section
```

### 5.2 Vertical Rhythm
```
Between sections (major):   py-24 md:py-32  (section-divider)
Within a section (elements): gap-8 to gap-16
Between text blocks:         mb-6 to mb-12
Between headline + sub:      mt-6
Between sub + CTA:           mt-12
```

### 5.3 Responsive Breakpoints
| Breakpoint | Container Padding | Columns |
|---|---|---|
| Mobile (< 640px) | 16px | 1 |
| Tablet (640–1024px) | 24px | 2 |
| Desktop (1024–1400px) | 48px | 3–4 |
| Ultrawide (> 1400px) | Centered, no change | max 1400px |

---

## 6. Typography Corrections

| Element | Current | Required |
|---|---|---|
| Hero headline max | 128px | 96px |
| Text reveal section | 128px | 64px |
| Project card title | Unconstrained | clamp(40px, 6vw, 72px) |
| Section heading | 72px | 72px (no change) |
| Body text | 300 weight | 400 weight (more legible on dark bg) |
| Caption/tags | 11px | 11px, tracking 0.3em (increase from 0.2em) |

---

## 7. Color Corrections

| Element | Current | Required |
|---|---|---|
| Text reveal words | Animates to #F8FAFC | Animates to #94A3B8 |
| Ghost process numbers | ~5% opacity | 3% opacity |
| Project card bg (01, 03) | `bg-bg-secondary` | `bg-bg-secondary` + subtle dot texture |
| Stats bar numbers | N/A (new) | `text-accent (#3B82F6)` |
| GitHub link | N/A (new) | `text-secondary`, hover `text-accent` |

---

## 8. Component Changes Summary

| Component | Change Type | Priority |
|---|---|---|
| `HorizontalScroll.tsx` | Card width, gap, drag hint, pagination dots | 🔴 Critical |
| `ScrollTextReveal.tsx` | Font size, color, scroll speed, container width | 🔴 Critical |
| `page.tsx` (homepage) | Stats bar section (new), GitHub links, CTA changes | 🔴 Critical |
| `globals.css` | `.hero-headline` size, body weight, ghost number opacity | 🟠 High |
| `StickySection.tsx` | Label font size, card max-width | 🟡 Medium |
| Project data (inline or separate file) | Add `githubUrl` field to each project | 🟡 Medium |

---

## 9. Accessibility Requirements

- All animated elements must respect `prefers-reduced-motion: reduce` — fallback to instant opacity change
- GitHub links must have `aria-label="View [Project Name] on GitHub"` 
- Drag carousel must be keyboard-navigable (arrow keys)
- Color contrast: all body text against dark backgrounds must pass WCAG AA (`#94A3B8` on `#020617` = 5.9:1 ✓)
- Focus states: all interactive elements must have visible focus ring (`outline: 2px solid var(--accent)`)

---

## 10. Out of Scope (Do Not Touch)

- Contact page — not broken, no changes
- Navbar — working well
- Marquee ticker — working well  
- Footer — working well
- Backend / API routes
- SEO metadata
- Font loading

---

## 11. Success Criteria

The revision is complete when:
- [ ] No section feels visually cramped or text-heavy on a 1440px screen
- [ ] Project cards show a clear "next card" peek at viewport edge
- [ ] GitHub links are present on all 3 project cards
- [ ] Stats bar renders between Projects and CTA
- [ ] Text reveal section animates at half the previous speed
- [ ] Hero CTAs are visible without scrolling on iPhone 13 (390px viewport)
- [ ] `prefers-reduced-motion` disables all scroll-linked animations gracefully
- [ ] Lighthouse score ≥ 90 on Performance (no regressions from animation additions)
