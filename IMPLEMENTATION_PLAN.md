# Implementation Plan: Boxing Night Documentary Portal

## Core Positioning

**Brand Identity:**
- Boxraw shows boxing as a moment. We show boxing as a life loop at night.
- The website is a controlled entry point into a boxing world. Store is secondary.
- Tone: cold, factual, slightly intimidating. Minimal words. No exclamation points.

**Anti-Positioning:**
- Not motivational
- Not glossy
- Not Gymshark
- Not a generic clothing brand website
- This is a documentary boxing portal

## Copy Rules (Strict)

**DO:**
- Short lines only (max 6 words for microcopy)
- Factual statements
- Cold, minimal tone
- Write less if unsure

**DON'T:**
- "brotherhood", "warrior", "rise", "grindset", "dog in him", "family", "join"
- Emojis
- Hype words
- Sales-y phrases
- Discounts
- Exclamation points
- Marketing cringe

## Technical Architecture

**Stack:**
- Next.js 16 (App Router, src/app)
- TypeScript
- Tailwind CSS
- Minimal dependencies

**Performance Requirements:**
- Fast load times
- Lazy media loading
- Poster fallbacks for videos
- Respects `prefers-reduced-motion`
- No scroll-jacking

**Data Model:**
- Local JSON files for content (public/data/)
- Type-safe content interfaces
- No external CMS for MVP

**Media Strategy:**
- Local placeholders in public/
- Optimized formats (WebP for images, MP4/WebM for video)
- Responsive image sizing
- Video poster images required

## Page Specifications

### 1. Landing Page (/)

**Structure:**
1. Fullscreen looping HERO VIDEO (night footage)
   - Autoplay, loop, muted
   - Poster fallback
   - Mobile-optimized handling
   - Minimal overlay text (brand name only, no tagline)
   - Two CTAs: "Routine" and "Access" (bottom overlay or below fold)

2. Before/During/After Tiles Section
   - Three tiles in a row (mobile: stack)
   - Each tile: image/video + microcopy (max 6 words)
   - Click navigates to /routine with filter applied
   - Example copy: "wraps. 23:14." or "sparring. 01:32."

3. Featured Clips/Stills Grid
   - 6-9 items in responsive grid
   - Mix of videos and images
   - Click opens ContentModal with timestamp caption
   - Vertical-friendly aspect ratios

4. Apparel Teaser
   - Single product preview
   - Image + minimal info
   - CTA: "View Uniform" → /apparel

5. Minimal Footer
   - Links: Routine, Apparel, Access
   - Copyright
   - No social icons (unless specifically requested)

### 2. Routine Page (/routine)

**Structure:**
- Tab/Filter system: Before / During / After
- Active filter highlights current view
- Grid of clips & stills (vertical-friendly)
- Click any item → opens ContentModal
- Modal shows:
  - Full media (video/image)
  - Timestamp-style caption (e.g., "wraps. 23:14.")
  - Navigation to prev/next
  - Close button
- Accessible: keyboard navigation, focus management, ARIA labels

**Content Model:**
- Each item has: id, type (video/image), src, caption, timestamp, phase (before/during/after)
- Loaded from local JSON

### 3. Apparel Page (/apparel)

**Structure:**
- Single product focus: "Training Tee"
- Layout: Image left, details right (mobile: stack)
- Copy sections (factual only):
  - Fit
  - Fabric
  - Use
  - Care
  - Availability
- CTA: "Access" or "Notify" (links to /access)
- No price display (unless specifically requested)
- No "add to cart" (placeholder only)

**Tone:**
- Technical specifications
- No marketing language
- No "premium" or "essential" descriptors

### 4. Access Page (/access)

**Structure:**
- Centered email capture form
- Fields:
  - Email (required)
  - "I train" checkbox (optional)
  - "Gym name" text input (optional, shown if "I train" checked)
- Submit button (minimal styling)
- Confirmation state after submit
- Privacy line: "No spam. No discounts."
- No thank you page redirect (inline confirmation)

**Form Behavior:**
- Client-side validation
- API route for submission (placeholder/mocked)
- Loading state
- Error handling

## Component Architecture

### Layout Components
- **Header**: Minimal nav (logo, Routine, Apparel, Access)
- **Footer**: Minimal (links, copyright)

### Feature Components
- **FullscreenHeroVideo**: 
  - Autoplay, loop, muted
  - Poster fallback
  - Mobile handling (pause on scroll, reduced motion support)
  - Overlay text positioning
  - CTA buttons

- **ContentGrid**: 
  - Responsive grid (1 col mobile, 2-3 cols desktop)
  - Mix of video and image items
  - Lazy loading
  - Click handler for modal

- **ContentModal**: 
  - Full-screen or large modal
  - Video/image viewer
  - Timestamp caption display
  - Navigation (prev/next)
  - Keyboard controls (arrow keys, ESC)
  - Focus trap
  - Accessible

- **EmailCaptureForm**: 
  - Client component
  - Form validation
  - Conditional field display
  - API integration
  - Loading/success/error states

- **PhaseFilter** (for /routine):
  - Tab-style filter
  - Before / During / After
  - Active state
  - URL state management

## Data Model

### Content JSON Structure

**public/data/content.json:**
```typescript
{
  "hero": {
    "video": "/videos/hero.mp4",
    "poster": "/images/hero-poster.jpg"
  },
  "phases": {
    "before": [...items],
    "during": [...items],
    "after": [...items]
  },
  "featured": [...items],
  "apparel": {
    "teaser": {...},
    "product": {...}
  }
}
```

**Item Structure:**
```typescript
{
  "id": string,
  "type": "video" | "image",
  "src": string,
  "poster"?: string, // for videos
  "caption": string, // timestamp-style: "wraps. 23:14."
  "phase": "before" | "during" | "after",
  "alt": string
}
```

## Accessibility Requirements

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation (tabs, arrows, ESC)
- Focus management in modals
- Screen reader support
- Respect `prefers-reduced-motion`
- Color contrast (WCAG AA minimum)
- Alt text for all images
- Video captions (if available)

## Performance Optimizations

- Next.js Image component for all images
- Video lazy loading
- Code splitting (automatic with App Router)
- Static generation where possible
- Minimal JavaScript bundle
- Optimized media formats
- Poster images for videos
- Intersection Observer for lazy loading

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Mobile Considerations:**
- Vertical-friendly content grid
- Stack layouts
- Touch-friendly targets
- Video autoplay disabled on mobile (or user-initiated)
- Reduced motion on mobile
