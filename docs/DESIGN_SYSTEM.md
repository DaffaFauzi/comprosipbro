# SIP BRO Design System

This design system outlines the visual guidelines and UI tokens for the SIP BRO corporate website revamp. It is built to ensure a modern, professional, trustworthy, and premium corporate identity, avoiding overly flashy or cryptocurrency-style elements.

---

## 1. Brand & Theme Colors

The color palette is derived from SIP BRO's existing branding assets and upgraded to meet modern contrast and accessibility guidelines.

### Logo & Theme Color (Base)
- **Current Corporate Blue**: `#1359b6` (Medium Dark Blue) — used as the main signature brand color.
- **Current Accent Gold**: `#FFB823` (Vibrant Amber) — used for accents and key highlights.

### Proposed Color Palette (Revamp)

| Color Token | Hex Code | Usage | Tailwind / CSS Equivalent |
| :--- | :--- | :--- | :--- |
| **Primary (Brand Blue)** | `#1359b6` | Main brand identity, headers, primary buttons, links | `brand-blue` |
| **Secondary (Deep Cyan/Teal)**| `#128494` | Subheadings, feature icons, secondary interactive items | `brand-cyan` |
| **Accent (Gold/Amber)** | `#FFB823` | High-contrast highlights, active indicators, ratings | `brand-accent` |
| **Dark Primary** | `#0f4896` | Primary hover states | `brand-blue-dark` |
| **Light BG (Canvas)** | `#ffffff` | Page background, cards, main content wrapper | `white` |
| **Light BG Secondary** | `#f8fafc` | Alternating sections, card containers | `slate-50` |
| **Dark BG (Footer/Contrast)**| `#0f172a` | Footer, dark-mode sections, hero headers | `slate-900` |
| **Dark BG Secondary** | `#1e293b` | Footer inputs, dark card backgrounds | `slate-800` |
| **Text Primary** | `#0f172a` | Main headings, body text in high-contrast light sections | `slate-900` |
| **Text Secondary** | `#334155` | General body copy, descriptions, subtexts | `slate-700` |
| **Text Muted** | `#64748b` | Captions, copyright, disabled states | `slate-500` |

---

## 2. Typography

We recommend using **Plus Jakarta Sans** for headings to deliver a premium, modern geometric appearance, paired with **Inter** for exceptional readability on body text.

- **Primary Font Family (Headings)**: `'Plus Jakarta Sans', system-ui, sans-serif`
- **Secondary Font Family (Body/Interface)**: `'Inter', system-ui, sans-serif`
- **Alternative Font Family (Legacy Match)**: `'Poppins', sans-serif` (Can be used as a single unified font if keeping current Phlox settings).

### Heading Scale
- **H1 (Hero)**: `48px` (3rem) | Line Height: `1.2` | Weight: Bold (`700`)
- **H2 (Section Heading)**: `36px` (2.25rem) | Line Height: `1.3` | Weight: Semibold (`600`)
- **H3 (Sub-section / Card Title)**: `24px` (1.5rem) | Line Height: `1.4` | Weight: Semibold (`600`)
- **H4 (Small UI Heading)**: `20px` (1.25rem) | Line Height: `1.4` | Weight: Medium (`500`) / Semibold (`600`)
- **H5 (Category / Badge Label)**: `16px` (1rem) | Line Height: `1.5` | Weight: Medium (`500`)

### Body Text Scale
- **Lead / Intro Text**: `18px` (1.125rem) | Line Height: `1.6` | Weight: Normal (`400`)
- **Base / Standard Copy**: `16px` (1rem) | Line Height: `1.6` | Weight: Normal (`400`)
- **Small / Captions**: `14px` (0.875rem) | Line Height: `1.5` | Weight: Normal (`400`)
- **Micro / Subtext**: `12px` (0.75rem) | Line Height: `1.5` | Weight: Normal (`400`)

---

## 3. Layout & Structure

### Container Widths
- **Standard Container**: Max-width `1200px` (75rem) — Centered with `padding: 0 1.5rem (24px)`.
- **Wide Container (Hero/Showcases)**: Max-width `1440px` (90rem).
- **Ultra-Wide Container (Header/Footer)**: Max-width `1680px` (105rem).

### Spacing Scale (4px Base)
- **xs**: `4px` (0.25rem)
- **sm**: `8px` (0.5rem)
- **md**: `12px` (0.75rem)
- **lg**: `16px` (1rem)
- **xl**: `24px` (1.5rem)
- **2xl**: `32px` (2rem)
- **3xl**: `48px` (3rem)
- **4xl**: `64px` (4rem)
- **5xl**: `96px` (6rem)

---

## 4. UI Elements & Components

### Border Radius
- **xs (Input fields/Badges)**: `4px` (0.25rem)
- **sm (Buttons/Thumbnails)**: `8px` (0.5rem)
- **md (Standard Cards)**: `12px` (0.75rem)
- **lg (Modals/Hero Sections)**: `16px` (1rem)
- **Full (Pills/Switches)**: `9999px`

### Shadow Rules
- **Subtle (sm)**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Standard (md)**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Elevated (lg)**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`

### Button Variants

1. **Primary Button (Action)**
   - **Style**: Solid `#1359b6` with white text.
   - **Hover**: Background shifts to `#0f4896` with subtle translateY scale lift.
   - **Border Radius**: Pill (`9999px`) or `8px` rounded.
2. **Secondary Button (Outline)**
   - **Style**: Border `#1359b6` (`2px`), transparent background, `#1359b6` text.
   - **Hover**: Background fills with `#1359b6` (10% opacity).
3. **Accent Button (Highlight)**
   - **Style**: Solid `#FFB823` with `#0f172a` text.
   - **Hover**: Background shifts to `#e09f1b`.
4. **Dark Button (Footer / Alternative)**
   - **Style**: Solid `#0f172a` with white text.
   - **Hover**: Background shifts to `#1e293b`.

### Card Variants

1. **Service Listing Card**
   - **Base**: White background, `16px` border radius, standard shadow (`md`).
   - **Layout**: Image on top (fixed ratio e.g., 4:3), details text container with padding (`24px`).
   - **Hover**: Subtle zoom on image (`scale-105`) and slight lift on the card container.
2. **Value / Icon Card**
   - **Base**: Left border accent color line (`4px solid #1359b6`), light background (`#f8fafc`), no border, `12px` border radius.
   - **Layout**: Top-left aligned icon, followed by heading (H4) and body copy (Base).

---

## 5. Visual Asset Guidelines

### Image Style
- **Photography**: Professional corporate style. Real-life business context, clean lighting, optimistic tones. Avoid generic or overly processed stock images.
- **Styling**: Corner radius `12px` minimum on standalone images. No aggressive filters.
- **Asset Split**: In the revamped website, logo sets (e.g. partner insurance logos) must be isolated into individual crisp PNG or SVG logo files, rendered in a CSS flexbox/grid layout rather than using a single compiled image banner.

### Icon Style
- **Library**: Recommend **Lucide Icons** (lightweight, SVG native, customizable line weights) or **Heroicons**.
- **Coloring**: Primary brand blue (`#1359b6`) or secondary teal (`#128494`) to denote importance or section context.
- **Sizing**: Default size `24px` for UI components, `48px` for highlight/hero icon cards.

---

## 6. Layout Breakpoints (Responsive)

Following Next.js/Tailwind CSS standard responsive breakpoints:
- **Mobile (sm)**: `up to 767px`
- **Tablet (md)**: `768px` to `1024px`
- **Desktop (lg)**: `1025px` to `1439px`
- **Wide Desktop (xl)**: `1440px` and above

---

## 7. Interactive & Animation Guidelines

- **Standard Hover Transition**: `transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Entrance Animation**: Subtle fade-in-up for sections when scrolled into view.
  - *Keyframes*: `opacity: 0; transform: translateY(15px) -> opacity: 1; transform: translateY(0)`.
  - *Duration*: `0.5s`.
- **Micro-interactions**: Subtle scale-up (`scale(1.02)`) or background shifts on hover for cards and buttons. Avoid aggressive, spinning, or sliding animations.

---

## 8. Accessibility (a11y) Guidelines

- **Color Contrast**: Main body copy (`#334155`) on white background satisfies the WCAG AA minimum contrast ratio of `4.5:1`. High contrast header elements use `#0f172a` (ratio `15.8:1`).
- **Semantic Structure**: Every page must have exactly one `h1` element, with sections defined by `h2`, `h3`, etc.
- **Bilingual SEO**: The bilingual switcher should route through proper subdirectories (e.g. `/` for ID and `/en` for EN) with appropriate `hreflang` tags, instead of relying on client-side translator widget cookies.
- **Image Attributes**: All images must contain semantic `alt="..."` descriptions. Decorative images should use `alt=""`.
- **Keyboard Access**: Interactive buttons and inputs must have visible focus indicators (`outline: 2px solid #1359b6` with `outline-offset: 2px` on focus-visible).
