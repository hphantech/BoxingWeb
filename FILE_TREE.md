# File Tree Structure

```
BoxingWeb/
├── public/
│   ├── data/
│   │   └── content.json              # Content data model (hero, phases, featured, apparel)
│   ├── videos/
│   │   ├── hero.mp4                  # Landing page hero video
│   │   ├── hero-poster.jpg           # Hero video poster
│   │   └── [content-clips].mp4       # Routine page videos
│   └── images/
│       ├── [content-stills].jpg      # Routine page images
│       └── apparel/
│           └── training-tee.jpg      # Apparel product image
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (Header, Footer, metadata)
│   │   ├── page.tsx                  # Landing page (hero, tiles, grid, teaser)
│   │   ├── routine/
│   │   │   └── page.tsx              # Routine page (filters, grid, modal)
│   │   ├── apparel/
│   │   │   └── page.tsx              # Apparel page (single product)
│   │   ├── access/
│   │   │   └── page.tsx              # Access page (email form)
│   │   ├── api/
│   │   │   └── access/
│   │   │       └── route.ts          # Email submission API route
│   │   └── globals.css               # Global styles, grain overlay, dark theme
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Minimal navigation header
│   │   │   └── Footer.tsx            # Minimal footer
│   │   │
│   │   ├── FullscreenHeroVideo.tsx  # Hero video component (autoplay, loop, muted)
│   │   ├── PhaseTiles.tsx            # Before/During/After tiles (landing)
│   │   ├── ContentGrid.tsx           # Responsive grid for clips/stills
│   │   ├── ContentModal.tsx          # Modal viewer with timestamp captions
│   │   ├── PhaseFilter.tsx           # Tab filter for /routine (Before/During/After)
│   │   ├── EmailCaptureForm.tsx      # Email form with conditional fields
│   │   └── ApparelTeaser.tsx         # Single product teaser (landing)
│   │
│   ├── lib/
│   │   ├── utils.ts                  # Utility functions (cn helper)
│   │   ├── content.ts                # Content loading utilities (read JSON, types)
│   │   └── types.ts                  # TypeScript interfaces for content model
│   │
│   └── hooks/
│       ├── useContentModal.ts        # Modal state management
│       └── useReducedMotion.ts       # prefers-reduced-motion hook
│
├── package.json                      # Dependencies (Next.js 16, React 19, TypeScript, Tailwind)
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts               # Tailwind config (dark theme, custom tokens)
├── next.config.ts                   # Next.js configuration
├── postcss.config.js                # PostCSS configuration
├── .gitignore                        # Git ignore rules
├── .eslintrc.json                    # ESLint configuration
├── README.md                         # Project documentation
└── IMPLEMENTATION_PLAN.md            # This file
```

## File Descriptions

### Root Configuration
- **package.json**: Next.js 16, React 19, TypeScript, Tailwind, minimal deps
- **tsconfig.json**: TypeScript config with path aliases (@/*)
- **tailwind.config.ts**: Dark theme, custom spacing, typography scale
- **next.config.ts**: Next.js 16 config, image optimization
- **postcss.config.js**: PostCSS for Tailwind processing

### App Router (src/app/)
- **layout.tsx**: Root layout with Header/Footer, metadata, global styles
- **page.tsx**: Landing page with hero video, phase tiles, featured grid, apparel teaser
- **routine/page.tsx**: Content feed with phase filters, grid, modal integration
- **apparel/page.tsx**: Single product page (Training Tee) with specs
- **access/page.tsx**: Email capture form page
- **api/access/route.ts**: API route for email submission (placeholder/mocked)
- **globals.css**: Global styles, grain overlay, dark theme variables

### Components (src/components/)
- **layout/Header.tsx**: Minimal nav (logo, Routine, Apparel, Access)
- **layout/Footer.tsx**: Minimal footer (links, copyright)
- **FullscreenHeroVideo.tsx**: Hero video with autoplay, loop, muted, poster, mobile handling
- **PhaseTiles.tsx**: Three tiles (Before/During/After) with microcopy, navigation
- **ContentGrid.tsx**: Responsive grid for clips/stills, click opens modal
- **ContentModal.tsx**: Full-screen modal with media viewer, timestamp caption, navigation
- **PhaseFilter.tsx**: Tab-style filter for Before/During/After phases
- **EmailCaptureForm.tsx**: Client component with email, checkbox, conditional gym field
- **ApparelTeaser.tsx**: Single product preview for landing page

### Utilities (src/lib/)
- **utils.ts**: cn() helper for class names (clsx + tailwind-merge)
- **content.ts**: Functions to load and parse content.json, type-safe content access
- **types.ts**: TypeScript interfaces for content model (ContentItem, Phase, etc.)

### Hooks (src/hooks/)
- **useContentModal.ts**: Modal state management (open/close, current item, navigation)
- **useReducedMotion.ts**: Hook to detect prefers-reduced-motion preference

### Public Assets (public/)
- **data/content.json**: Centralized content data (hero, phases, featured, apparel)
- **videos/**: Hero video and content clips
- **images/**: Content stills and product images

## Data Flow

1. **Content Loading**: Pages load content from `public/data/content.json` via `lib/content.ts`
2. **Type Safety**: Content is typed via `lib/types.ts` interfaces
3. **Component Props**: Components receive typed content data
4. **Modal State**: ContentModal managed via `useContentModal` hook
5. **Form Submission**: EmailCaptureForm submits to `app/api/access/route.ts`

## Key Dependencies

- **next**: ^16.0.0
- **react**: ^19.0.0
- **react-dom**: ^19.0.0
- **typescript**: ^5.6.3
- **tailwindcss**: ^3.4.17
- **clsx**: ^2.1.1
- **tailwind-merge**: ^2.5.4

No additional UI libraries, animation libraries, or heavy dependencies.
