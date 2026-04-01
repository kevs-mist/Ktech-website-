# KTECH WEBSITE — AGENT TASKFILE
> Sprint: Layout & Scaling Revision · April 2026
> Companion to: `KTECH_PRD.md`
> Execute tasks IN ORDER. Each task has acceptance criteria — do not move to the next task until current task passes.

---

## CONTEXT FOR AGENT

You are working on a Next.js 14+ website with:
- Tailwind CSS (custom tokens in `globals.css`)
- Framer Motion for animations
- `src/app/page.tsx` as the homepage
- `src/components/` for shared components
- Design tokens defined as CSS variables in `globals.css`

The existing code, copy, and design system are CORRECT. You are fixing **spacing, scaling, layout clustering, and missing features only**. Do not rewrite working sections.

---

## TASK 01 — Fix Typography Scale in globals.css

**File:** `src/app/globals.css`

**Changes:**

1. Find `.hero-headline` and update font-size:
```css
/* BEFORE */
font-size: clamp(56px, 10vw, 128px);

/* AFTER */
font-size: clamp(40px, 9vw, 96px);
```

2. Find `body` base styles and update font-weight:
```css
/* BEFORE */
font-weight: 300;

/* AFTER */
font-weight: 400;
```

3. Find the ghost number class (likely `.card-number` or similar large background number) and reduce opacity:
```css
/* BEFORE */
opacity: 0.05;

/* AFTER */
opacity: 0.03;
```

**Acceptance criteria:**
- [ ] Hero headline never exceeds 96px at any viewport width
- [ ] Body text is weight 400 globally
- [ ] Process section ghost numbers are barely visible (3% opacity)

---

## TASK 02 — Fix Hero Section Spacing

**File:** `src/app/page.tsx` (or dedicated hero component if extracted)

**Changes:**

1. Add `mt-8` to the serif italic sub-description paragraph below the headline.

2. Find the CTA button group container and ensure it has `gap-6 flex-wrap`:
```tsx
<div className="flex items-center gap-6 flex-wrap mt-12">
  {/* buttons */}
</div>
```

3. Verify the CTA section appears within the visible viewport at 390px width — if not, reduce the top padding of the hero section on mobile using `pt-24 md:pt-32`.

**Acceptance criteria:**
- [ ] There is visible breathing room between headline, sub-description, and CTAs
- [ ] Both CTA buttons are visible without scrolling on 390px × 844px viewport (iPhone 13)
- [ ] Buttons do not wrap to 3+ lines on any screen

---

## TASK 03 — Rework ScrollTextReveal Section

**File:** `src/components/ScrollTextReveal.tsx` + `src/app/page.tsx`

### 3a — Update the component's font output

Inside `ScrollTextReveal.tsx`, find where the text style is set and add a size constraint:

```tsx
// Add to the container or word span styles
style={{
  fontSize: 'clamp(28px, 4.5vw, 56px)',
  lineHeight: 1.15,
  maxWidth: '900px',
}}
```

### 3b — Change word animation target color

The words should animate from near-invisible to `text-secondary` (muted), not full white. Find the scroll-progress interpolation and change the target:

```tsx
// BEFORE (likely something like)
const color = useTransform(wordProgress, [0, 1], ['#1E293B', '#F8FAFC']);

// AFTER
const color = useTransform(wordProgress, [0, 1], ['#1E293B', '#94A3B8']);
```

### 3c — Slow down the reveal

The scroll range for full reveal should be expanded. If the current implementation uses a scroll range like `[0, 0.5]`, change to `[0, 0.8]` so it requires more scroll travel.

### 3d — Add section wrapper in page.tsx

Find the text reveal section and add:
- A `section-label` eyebrow above it: `— PHILOSOPHY`
- A `max-w-[900px] mx-auto` container around the reveal text
- A 120px accent line below: `<div className="w-[120px] h-[1px] bg-accent mt-12" />`
- Change padding: `py-32 md:py-56`

**Acceptance criteria:**
- [ ] Text reveal section text maxes at 56px on any screen
- [ ] Words animate to `#94A3B8`, not white
- [ ] Section has a `— PHILOSOPHY` eyebrow label
- [ ] Requires at least 2× more scroll to fully reveal than before
- [ ] There is a 120px accent underline below the revealed text

---

## TASK 04 — Rework Project Card Layout

**File:** `src/components/HorizontalScroll.tsx` + project card component/inline JSX in `page.tsx`

### 4a — Fix card dimensions

Find the card width definition and update:
```tsx
// BEFORE
className="w-[90vw] md:w-[75vw]"

// AFTER  
style={{ width: 'min(680px, 85vw)', minHeight: '480px' }}
```

Update the gap between cards:
```tsx
// container gap
className="gap-8"  // was likely gap-4 or gap-6
```

### 4b — Add githubUrl to each project data object

In wherever the project data is defined (inline in page.tsx or a separate data file), add a `githubUrl` field:

```tsx
const projects = [
  {
    tag: 'PROJECT 01 / C++ / ML',
    title: 'LOW-LEVEL NEURAL NW',
    // ... existing fields
    githubUrl: 'https://github.com/kevalmistry/neural-network-cpp', // update username
  },
  {
    tag: 'PROJECT 02 / JAVA / IDE',
    title: 'RETROCODE EDITOR',
    // ... existing fields
    githubUrl: 'https://github.com/kevalmistry/retrocode-editor',
  },
  {
    tag: 'PROJECT 03 / FLUTTER / ERP',
    title: 'MYOFFICEHUB PLATFORM',
    // ... existing fields
    githubUrl: 'https://github.com/kevalmistry/myofficehub',
  },
]
```
> ⚠️ Replace `kevalmistry` with the actual GitHub username. If repos are private, use `#` as placeholder.

### 4c — Rework card internal layout

Each project card should use this structure:

```tsx
<div style={{ width: 'min(680px, 85vw)', minHeight: '480px', padding: '48px' }}
     className="bg-bg-secondary rounded-lg flex-shrink-0 flex flex-col">
  
  {/* Top row */}
  <div className="flex items-start justify-between mb-8">
    <span className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase">
      {project.tag}
    </span>
    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase 
                     border border-white/20 px-3 py-1 rounded-sm text-text-secondary">
      {project.badge}
    </span>
  </div>

  {/* Title */}
  <h3 style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0 }}
      className="font-display font-black uppercase mb-8 line-clamp-2">
    {project.title}
  </h3>

  {/* Divider */}
  <div className="w-full h-[1px] bg-white/10 mb-6" />

  {/* Metadata */}
  <div className="flex gap-8 mb-6">
    <span className="text-[12px] text-text-secondary tracking-[0.1em] uppercase">
      Ahmedabad, Gujarat
    </span>
    <span className="text-[12px] text-text-secondary tracking-[0.1em] uppercase">
      {project.period}
    </span>
  </div>

  {/* Description */}
  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
    {project.description}
  </p>

  {/* Bullets */}
  <ul className="space-y-2 mb-auto">
    {project.bullets.map((b, i) => (
      <li key={i} className="text-[13px] text-text-secondary flex gap-3">
        <span className="text-accent mt-1">—</span>
        <span>{b}</span>
      </li>
    ))}
  </ul>

  {/* Bottom row */}
  <div className="w-full h-[1px] bg-white/10 mt-8 mb-6" />
  <div className="flex items-center justify-between">
    <div className="flex gap-2 flex-wrap">
      {project.stack.map((s, i) => (
        <span key={i} className="text-[11px] text-text-secondary border border-white/10 
                                  px-2 py-1 rounded-[4px] tracking-[0.1em]">
          {s}
        </span>
      ))}
    </div>
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
       aria-label={`View ${project.title} on GitHub`}
       className="text-[11px] font-semibold tracking-[0.15em] text-text-secondary 
                  hover:text-accent transition-colors duration-300 uppercase flex-shrink-0 ml-4">
      GitHub ↗
    </a>
  </div>
</div>
```

### 4d — Add drag hint and pagination dots

Below the carousel container in `page.tsx`, add:

```tsx
{/* Drag hint */}
<div className="flex flex-col items-center gap-4 mt-8">
  <p className="text-[11px] text-text-secondary tracking-[0.3em] uppercase">
    ← Drag to Explore →
  </p>
  <div className="flex gap-2">
    {projects.map((_, i) => (
      <div key={i}
           className={`w-[6px] h-[6px] rounded-full transition-all duration-300 
                       ${activeCard === i ? 'bg-accent scale-125' : 'bg-white/20'}`} />
    ))}
  </div>
</div>
```

You will need to track `activeCard` state in the parent. Wire it to the `HorizontalScroll` component via an `onActiveChange` callback prop.

**Acceptance criteria:**
- [ ] Cards are `min(680px, 85vw)` wide — a visible "peek" of the next card is visible at viewport edge
- [ ] Each card has a GitHub link in the bottom-right corner
- [ ] GitHub link opens in new tab
- [ ] Card internal layout matches the spec: tag/badge top row → title → divider → metadata → description → bullets → divider → stack/github
- [ ] Drag hint text appears below carousel
- [ ] Pagination dots appear and update as cards scroll (at minimum they appear — live update is a bonus)

---

## TASK 05 — Add Stats / Social Proof Bar

**File:** `src/app/page.tsx`

Insert a new section **after** the Work/Projects section and **before** the CTA section.

```tsx
{/* Stats Bar */}
<section className="section-dark py-24 border-t border-b border-white/5">
  <div className="container mx-auto px-12">
    <div className="grid grid-cols-3 gap-8 text-center">
      {[
        { value: 3, label: 'Projects' },
        { value: 2, label: 'Languages' },
        { value: 1, label: 'Production App' },
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <StatCounter 
            end={stat.value}
            className="font-display font-black text-accent"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          />
          <span className="text-[11px] text-text-secondary tracking-[0.3em] uppercase">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
```

> The `StatCounter` component already exists at `src/components/StatCounter.tsx`. Import and use it.

**Acceptance criteria:**
- [ ] Stats bar appears between projects carousel and CTA section
- [ ] Numbers animate from 0 to target value when section enters viewport
- [ ] Numbers are in accent blue (`text-accent`)
- [ ] Labels are in `text-secondary`, uppercase, spaced
- [ ] Section has top and bottom border hairlines (`border-white/5`)

---

## TASK 06 — Update CTA Section

**File:** `src/app/page.tsx`

1. Add `border-t border-white/5 pt-4` wrapper div above the CTA section (or as the section's top decoration).

2. Find the CTA button group and add a third ghost button for GitHub profile:
```tsx
<a href="https://github.com/kevalmistry"  {/* update username */}
   target="_blank" rel="noopener noreferrer"
   className="btn-ghost text-sm">
  GitHub Profile ↗
</a>
```

3. Find the radial glow div and increase its opacity:
```tsx
// BEFORE (likely has low opacity)
background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)'

// AFTER
background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)'
```

**Acceptance criteria:**
- [ ] A hairline separator exists above the CTA section
- [ ] CTA section has 3 buttons: "Let's Talk", "Chat on WhatsApp →", "GitHub Profile ↗"
- [ ] GitHub Profile link opens github.com profile in new tab
- [ ] Radial glow is more visible (subtle but present at ~12% opacity)

---

## TASK 07 — Accessibility Pass

**Files:** All modified components

1. Add `prefers-reduced-motion` respect to all animations. In `globals.css`, add:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal { 
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
  .text-clip > span {
    transform: none !important;
    transition: none !important;
  }
  .marquee-track {
    animation: none !important;
  }
}
```

2. In `HorizontalScroll.tsx`, add keyboard navigation:
```tsx
onKeyDown={(e) => {
  if (e.key === 'ArrowRight') scrollRight();
  if (e.key === 'ArrowLeft') scrollLeft();
}}
tabIndex={0}
role="region"
aria-label="Project showcase carousel"
```

3. Verify all `<a>` tags with `target="_blank"` have `rel="noopener noreferrer"`.

4. Add `aria-label` to all icon-only buttons (WhatsApp FAB, etc.).

**Acceptance criteria:**
- [ ] With `prefers-reduced-motion: reduce` set, page loads with all elements visible (no animated entrance required)
- [ ] Horizontal scroll carousel responds to left/right arrow keys
- [ ] All new `target="_blank"` links have `rel="noopener noreferrer"`
- [ ] No console accessibility warnings from React

---

## TASK 08 — Visual QA Checklist

**Before marking sprint complete, verify all of the following:**

### Desktop (1440px)
- [ ] Hero: headline ≤ 96px, CTAs visible, no overflow
- [ ] Marquee: smooth, no jank
- [ ] Philosophy section: text ≤ 56px, muted color, slow reveal, has eyebrow label
- [ ] Services: cards max 560px wide, no stretching
- [ ] Process: ghost numbers barely visible, step text has max-width
- [ ] Projects: cards show "next card" peek, GitHub link visible, drag hint present
- [ ] Stats bar: numbers in blue, labels muted, hairline borders present
- [ ] CTA: 3 buttons, hairline above section, visible radial glow

### Mobile (390px — iPhone 13)
- [ ] Hero: both CTAs visible without scrolling
- [ ] Project cards: 85vw width, title readable (≥ 36px)
- [ ] Stats bar: 3-column grid or stacked gracefully
- [ ] No horizontal overflow anywhere on page

### Reduced Motion
- [ ] All elements immediately visible (no invisible/transitioning state on page load)
- [ ] Marquee stops (or runs without animation)
- [ ] Text reveal shows all text at once

---

## TASK 09 — Final Checks & Cleanup

1. Run `npm run build` — resolve any TypeScript errors.
2. Run `npm run lint` — resolve any ESLint warnings.
3. Check console for React warnings (key props, missing alt tags, etc.).
4. Verify `og-image.png` still exists at `/public/og-image.png`.
5. Test the contact form still submits to `/api/contact` (no changes were made but verify nothing broke).

**Done when:** `npm run build` completes with 0 errors and the visual QA checklist above is fully checked.

---

## QUICK REFERENCE — Files Modified in This Sprint

| File | Tasks |
|---|---|
| `src/app/globals.css` | T01 |
| `src/app/page.tsx` | T02, T03d, T04d, T05, T06 |
| `src/components/HorizontalScroll.tsx` | T04a, T07 |
| `src/components/ScrollTextReveal.tsx` | T03a, T03b, T03c |
| Project data (inline or file) | T04b |

## QUICK REFERENCE — New Imports Needed in page.tsx

```tsx
import StatCounter from '@/components/StatCounter';
// (already exists, just needs to be imported if not already)
```

---

*End of Taskfile. If any task is ambiguous, refer to KTECH_PRD.md for the full specification.*
