# Boxing Media + Apparel Website

A Next.js 16 website for a boxing media + apparel brand with a cinematic, documentary-style aesthetic.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── routine/           # Content feed page
│   ├── apparel/           # Shop page
│   ├── access/            # Email capture page
│   └── globals.css        # Global styles + grain overlay
├── components/
│   ├── layout/            # Header & Footer
│   ├── FullscreenHeroVideo.tsx
│   ├── Section.tsx
│   ├── ContentGrid.tsx
│   └── EmailCaptureForm.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## Adding Content

### Videos
Place hero videos in `/public/videos/`:
- `hero.mp4` - Main landing page video
- `during-1.mp4`, `after-1.mp4` - Content clips for routine page

### Images
Place images in `/public/images/`:
- `hero-poster.jpg` - Poster image for hero video
- `routine/` - Before/During/After content images
- `apparel/` - Product images

## Features

- **Dark Theme**: Deep blacks, charcoal grays, minimal color palette
- **Grain Overlay**: Subtle film grain texture for documentary feel
- **Responsive**: Mobile-first design, works on all screen sizes
- **Performance**: Optimized images/videos, minimal JavaScript
- **Typography**: System fonts only for clean, readable text

## Next Steps

1. Add your video and image assets to `/public/`
2. Update placeholder content in pages
3. Connect email form to your backend/API
4. Customize colors and spacing in `tailwind.config.ts`
5. Add analytics if needed

## Notes

- Email capture form currently uses a placeholder API - replace with your endpoint
- Product pages are placeholders - no checkout functionality included
- All components are optimized for performance and accessibility
