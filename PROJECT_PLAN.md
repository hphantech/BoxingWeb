# Boxing Media + Apparel Website - Project Plan

## Overview
A Next.js 14+ (App Router) website for a boxing media + apparel brand with a cinematic, documentary-style aesthetic. Dark theme, minimal UI, video-first approach.

## Design Philosophy
- **Dark UI**: Deep blacks, charcoal grays, minimal color palette
- **Negative Space**: Generous margins, breathing room between elements
- **Grain Overlay**: Subtle film grain texture for documentary feel
- **Typography**: System fonts only (SF Pro on macOS, Segoe UI on Windows, etc.) - clean, readable, cinematic
- **Performance**: Optimized images/videos, minimal JavaScript, fast load times
- **Responsive**: Mobile-first, works beautifully on all screen sizes

## Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Dependencies**: Minimal (only essential packages)

## File Structure

```
BoxingWeb/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata, fonts, global styles
│   │   ├── page.tsx                # Landing page (video-first hero)
│   │   ├── routine/
│   │   │   └── page.tsx            # Content feed: Before/During/After sections
│   │   ├── apparel/
│   │   │   └── page.tsx            # Minimal shop page with product placeholder
│   │   ├── access/
│   │   │   └── page.tsx            # Email capture form page
│   │   └── globals.css             # Global styles, Tailwind directives, grain overlay
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Minimal navigation header
│   │   │   └── Footer.tsx          # Minimal footer with links
│   │   ├── FullscreenHeroVideo.tsx # Full-screen video hero component
│   │   ├── Section.tsx             # Reusable section wrapper with dividers
│   │   ├── ContentGrid.tsx         # Grid layout for photos/clips
│   │   └── EmailCaptureForm.tsx    # Client component for email form
│   └── lib/
│       └── utils.ts                # Utility functions (cn helper, etc.)
├── public/
│   ├── videos/                     # Hero videos, content clips
│   ├── images/                     # Product images, content photos
│   └── favicon.ico                 # Site favicon
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── next.config.js                  # Next.js configuration
└── .gitignore                      # Git ignore rules
```

## File Descriptions

### Root Configuration Files

**package.json**
- Defines project dependencies (Next.js, React, TypeScript, Tailwind)
- Scripts for dev, build, start, lint
- Minimal dependencies: next, react, react-dom, typescript, tailwindcss, postcss, autoprefixer

**tsconfig.json**
- TypeScript compiler configuration
- Path aliases for clean imports (@/components, @/lib)
- Strict mode enabled

**tailwind.config.ts**
- Tailwind CSS configuration
- Custom theme: dark colors, typography scale, spacing
- Custom utilities for grain overlay effect
- Responsive breakpoints

**postcss.config.js**
- PostCSS configuration for Tailwind processing

**next.config.js**
- Next.js configuration
- Image optimization settings
- Performance optimizations

**.gitignore**
- Standard Next.js gitignore patterns

### App Router Files (src/app/)

**layout.tsx**
- Root layout component
- Wraps all pages
- Includes Header and Footer components
- Sets up metadata, viewport, theme
- Imports globals.css

**page.tsx** (Landing Page - `/`)
- Main landing page
- FullscreenHeroVideo component as primary hero
- Minimal text overlay or call-to-action
- Smooth scroll to content sections

**routine/page.tsx** (`/routine`)
- Content feed page
- Three main sections: Before / During / After
- Each section uses Section component
- ContentGrid components for visual content
- Chronological or thematic organization

**apparel/page.tsx** (`/apparel`)
- Minimal shop page
- Product placeholder card/grid
- No checkout functionality (placeholder only)
- Clean, gallery-like presentation

**access/page.tsx** (`/access`)
- Email capture page
- Centered EmailCaptureForm component
- Minimal copy, no discounts/hype
- Focus on exclusivity/access

**globals.css**
- Tailwind directives (@tailwind base, components, utilities)
- Global CSS variables (colors, spacing)
- Grain overlay CSS (background pattern or pseudo-element)
- Base typography styles
- Smooth scroll behavior

### Components (src/components/)

**layout/Header.tsx**
- Minimal navigation header
- Logo/brand name
- Navigation links (Home, Routine, Apparel, Access)
- Sticky or fixed positioning
- Dark theme styling

**layout/Footer.tsx**
- Minimal footer
- Social links (if applicable)
- Copyright/legal links
- Dark theme, subtle styling

**FullscreenHeroVideo.tsx**
- Full-screen video background component
- Autoplay, muted, loop
- Responsive video handling
- Optional overlay/text content
- Optimized for performance (lazy loading, poster image)

**Section.tsx**
- Reusable section wrapper component
- Subtle divider styling (thin lines, spacing)
- Consistent padding/margins
- Props for custom content
- Responsive spacing

**ContentGrid.tsx**
- Grid layout for photos and video clips
- Responsive grid (1 col mobile, 2-3 cols desktop)
- Image/video optimization
- Lazy loading
- Hover effects (subtle)
- Props for content array

**EmailCaptureForm.tsx** (Client Component)
- Client-side form component ('use client')
- Email input field
- Submit button
- Form validation
- API route integration (to be created)
- Loading states
- Success/error messaging

### Utilities (src/lib/)

**utils.ts**
- Utility functions
- `cn()` helper for conditional class names (clsx + tailwind-merge)
- Other shared utilities

### Public Assets (public/)

**videos/**
- Hero video files
- Content video clips
- Optimized formats (MP4, WebM)

**images/**
- Product images
- Content photos
- Placeholder images

## Page Flow & User Experience

1. **Landing (`/`)**: Video-first experience, immediate impact, minimal text
2. **Routine (`/routine`)**: Content feed showing the journey (Before/During/After)
3. **Apparel (`/apparel`)**: Minimal product showcase, no pressure to buy
4. **Access (`/access`)**: Simple email capture, exclusive access messaging

## Design Tokens (Tailwind Config)

- **Colors**: Deep blacks (#000, #0a0a0a), charcoal grays (#1a1a1a, #2a2a2a), minimal accent
- **Typography**: System font stack, large headings, readable body text
- **Spacing**: Generous padding/margins (negative space)
- **Effects**: Subtle grain overlay, minimal shadows, clean borders

## Performance Considerations

- Image optimization (Next.js Image component)
- Video optimization (poster images, lazy loading)
- Minimal JavaScript (client components only where needed)
- Static generation where possible
- Code splitting (automatic with App Router)

## Next Steps

1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS
3. Set up file structure
4. Create base layout and global styles
5. Build components (start with layout, then feature components)
6. Create pages (landing first, then others)
7. Add grain overlay effect
8. Optimize for performance
9. Test responsiveness
10. Polish animations and transitions
