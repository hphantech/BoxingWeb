# Design System: Night Documentary Aesthetic

## Visual Identity

**Core Principle:** Quiet, raw, minimal, confident. Video-first. Not motivational, not glossy.

**Mood:** Night documentary footage. Controlled entry point into a boxing world.

## Color Palette

### Primary Colors
- **Black**: `#000000` - Primary background
- **Near Black**: `#0a0a0a` - Secondary backgrounds, subtle variations
- **Charcoal**: `#1a1a1a` - Cards, elevated surfaces
- **Dark Gray**: `#2a2a2a` - Borders, dividers

### Text Colors
- **White**: `#ffffff` - Primary text
- **White 90%**: `rgba(255, 255, 255, 0.9)` - Secondary text
- **White 60%**: `rgba(255, 255, 255, 0.6)` - Tertiary text, captions
- **White 40%**: `rgba(255, 255, 255, 0.4)` - Disabled, subtle labels
- **White 20%**: `rgba(255, 255, 255, 0.2)` - Borders, dividers
- **White 10%**: `rgba(255, 255, 255, 0.1)` - Hover states, subtle backgrounds

### Accent Color (Optional)
- **Single Accent Maximum**: Only if specifically requested
- **No Neon**: Unless explicitly requested
- **Suggested**: Deep red `#8b0000` or muted blue `#1a3a52` (if needed)

### Usage Rules
- Backgrounds: Black and near-black only
- Text: White with opacity variations
- Borders: White 5-20% opacity
- No bright colors
- No gradients (unless subtle vignette)
- No color coding or status colors

## Typography

### Font Stack (System Fonts Only)
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;
```

**Rationale:** System fonts are fast, familiar, and don't add weight. They feel documentary and factual.

### Type Scale

**Display (Hero)**
- Size: `4rem - 6rem` (64px - 96px)
- Weight: `700` (bold)
- Line Height: `1.1`
- Letter Spacing: `-0.02em` (tight)
- Use: Landing page hero text, major page titles

**Heading 1**
- Size: `3rem - 4rem` (48px - 64px)
- Weight: `700` (bold)
- Line Height: `1.2`
- Letter Spacing: `-0.01em`
- Use: Page titles

**Heading 2**
- Size: `2rem - 2.5rem` (32px - 40px)
- Weight: `600` (semi-bold)
- Line Height: `1.3`
- Letter Spacing: `0`
- Use: Section titles

**Heading 3**
- Size: `1.5rem` (24px)
- Weight: `600` (semi-bold)
- Line Height: `1.4`
- Letter Spacing: `0`
- Use: Subsection titles

**Body Large**
- Size: `1.125rem` (18px)
- Weight: `400` (regular)
- Line Height: `1.6`
- Letter Spacing: `0.01em`
- Use: Important body text

**Body**
- Size: `1rem` (16px)
- Weight: `400` (regular)
- Line Height: `1.6`
- Letter Spacing: `0.01em`
- Use: Standard body text

**Body Small**
- Size: `0.875rem` (14px)
- Weight: `400` (regular)
- Line Height: `1.5`
- Letter Spacing: `0.02em`
- Use: Captions, metadata, labels

**Microcopy**
- Size: `0.75rem` (12px)
- Weight: `400` (regular)
- Line Height: `1.4`
- Letter Spacing: `0.05em` (wide, uppercase)
- Use: Timestamps, phase labels, small labels

### Typography Rules
- **Headings**: Bold but not loud. No excessive weight.
- **Body**: Regular weight only. No light weights for body text.
- **Uppercase**: Only for microcopy, labels, navigation
- **No Italics**: Unless for specific emphasis (rare)
- **No Decorative Fonts**: System fonts only

## Spacing Scale

### Base Unit: 4px

**Scale:**
- `0.5` = 2px
- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `12` = 48px
- `16` = 64px
- `24` = 96px
- `32` = 128px
- `48` = 192px
- `64` = 256px

### Usage Patterns

**Section Padding:**
- Vertical: `96px - 128px` (24 - 32)
- Horizontal: `24px - 48px` (6 - 12)
- Mobile: Reduce by 50%

**Component Spacing:**
- Between elements: `24px - 48px` (6 - 12)
- Within components: `16px - 24px` (4 - 6)
- Tight spacing: `8px - 16px` (2 - 4)

**Negative Space:**
- Large margins between sections
- Generous padding around content
- Don't fill every pixel
- Let content breathe

## Layout System

### Container Widths
- **Max Content Width**: `1280px` (80rem)
- **Text Content Width**: `768px` (48rem)
- **Narrow Content**: `640px` (40rem)

### Grid System
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns (max)
- **Gap**: `16px - 32px` (4 - 8)

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## Visual Effects

### Grain Overlay
- **Opacity**: `0.03 - 0.05` (very subtle)
- **Animation**: Slow, subtle movement (8s loop)
- **Coverage**: Full screen, fixed position
- **Implementation**: CSS pseudo-element with SVG noise pattern

### Vignette (Optional)
- **Opacity**: `0.1 - 0.2` (subtle)
- **Radius**: `50% - 70%`
- **Use**: On hero video only (if needed)

### Dividers
- **Style**: Thin horizontal lines
- **Color**: `rgba(255, 255, 255, 0.05)` - `rgba(255, 255, 255, 0.1)`
- **Thickness**: `1px`
- **Spacing**: Between major sections only

### Shadows
- **None**: No drop shadows
- **No Elevation**: Flat design
- **Exception**: Subtle inner shadows for depth (rare)

## Motion & Animation

### Principles
- **Subtle**: Fades, slow transitions
- **No Scroll-Jacking**: Respect user scroll
- **Respect Reduced Motion**: Honor `prefers-reduced-motion`
- **Purposeful**: Every animation has a reason

### Transition Timing
- **Fast**: `150ms` - Hover states, micro-interactions
- **Standard**: `300ms` - Component transitions
- **Slow**: `500ms - 700ms` - Page transitions, fades

### Easing
- **Default**: `ease-out`
- **Smooth**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **No Bounce**: No elastic or bounce effects

### Animation Types
- **Fade In**: Content appears on scroll (if reduced motion off)
- **Hover**: Subtle opacity or scale changes
- **Modal**: Fade + scale (subtle)
- **No Parallax**: No scroll-based parallax effects

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component Styles

### Buttons
- **Primary**: White background, black text
- **Secondary**: Transparent, white border, white text
- **Minimal**: No rounded corners (or very subtle: `2px`)
- **Padding**: `12px - 16px` vertical, `24px - 32px` horizontal
- **Hover**: Subtle opacity change or background shift
- **No Shadows**: Flat design

### Forms
- **Inputs**: Transparent background, white border (`rgba(255, 255, 255, 0.1)`)
- **Focus**: Border color increase (`rgba(255, 255, 255, 0.3)`)
- **No Rounded Corners**: Sharp corners (or `2px` max)
- **Padding**: `16px` vertical, `24px` horizontal

### Cards/Tiles
- **Background**: `rgba(255, 255, 255, 0.02)` - `rgba(255, 255, 255, 0.05)`
- **Border**: `1px solid rgba(255, 255, 255, 0.05)`
- **No Shadows**: Flat
- **Hover**: Subtle background or border opacity increase

### Modals
- **Background**: Black with `rgba(0, 0, 0, 0.9)` overlay
- **Content**: Centered, max-width container
- **Close Button**: Top-right, minimal styling
- **No Rounded Corners**: Sharp (or `4px` max)

## Image & Video Treatment

### Images
- **Aspect Ratios**: 
  - Hero: `16:9` or `21:9`
  - Content: `4:3` or `3:4` (vertical-friendly)
  - Product: `1:1` or `3:4`
- **Treatment**: No filters, no overlays (unless grain)
- **Loading**: Lazy load, poster fallbacks

### Videos
- **Autoplay**: Yes (muted, loop)
- **Poster**: Required fallback
- **Controls**: Minimal (if visible)
- **Mobile**: Pause on scroll, respect reduced motion
- **Aspect Ratios**: Match image ratios

## Accessibility

### Color Contrast
- **Text on Black**: Minimum WCAG AA (4.5:1)
- **White on Black**: Exceeds requirements
- **Opacity Levels**: Tested for readability

### Focus States
- **Visible**: Clear focus indicators
- **Style**: White outline or border
- **Keyboard Navigation**: Full support

### Screen Readers
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Where needed
- **Alt Text**: All images
- **Video Captions**: If available

## Implementation Notes

### Tailwind Config
- Custom colors mapped to design tokens
- Custom spacing scale
- Typography scale via `fontSize` and `fontWeight`
- No default rounded corners (override with utilities)

### CSS Variables
- Colors as CSS variables for easy theming
- Spacing as Tailwind utilities
- Typography via Tailwind classes

### Responsive Strategy
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Vertical-friendly layouts on mobile
- Touch-friendly targets (min 44px)

## Anti-Patterns (What NOT to Do)

- ❌ Bright colors
- ❌ Rounded corners > 4px
- ❌ Drop shadows
- ❌ Gradients (except subtle vignette)
- ❌ Decorative fonts
- ❌ Excessive animations
- ❌ Scroll-jacking
- ❌ Parallax effects
- ❌ Glossy/shiny effects
- ❌ Marketing-y styling
- ❌ Generic ecommerce patterns
