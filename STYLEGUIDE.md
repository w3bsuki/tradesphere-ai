# Treido Design System & iOS-Native Styleguide

A comprehensive guide to achieving the native iOS app feel in this React/Tailwind trading platform.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Interactions & Feedback](#interactions--feedback)
7. [Navigation Patterns](#navigation-patterns)
8. [Cards & Containers](#cards--containers)
9. [Forms & Inputs](#forms--inputs)
10. [Icons](#icons)
11. [Motion & Animation](#motion--animation)
12. [Safe Areas & Mobile](#safe-areas--mobile)
13. [Dark Mode](#dark-mode)
14. [Performance](#performance)
15. [Code Examples](#code-examples)

---

## Design Philosophy

### Core Principles

```
┌─────────────────────────────────────────────────────────────┐
│  NATIVE FIRST: Design for mobile, enhance for desktop       │
│  SIMPLICITY: Every element must earn its place              │
│  SPEED: Performance over polish, function over flair        │
│  CLARITY: Information hierarchy through size, not color     │
└─────────────────────────────────────────────────────────────┘
```

### What Makes iOS Feel "Native"

1. **Consistent spacing** - Use 4px grid (0.5rem increments)
2. **Subtle depth** - Light shadows, no harsh borders
3. **Responsive touch** - Immediate feedback on every interaction
4. **Content density** - Compact but readable
5. **Frosted glass effects** - `backdrop-blur` on overlays
6. **System fonts** - SF Pro-like typography (Inter)

---

## Color System

### Semantic Tokens (index.css)

```css
:root {
  /* Base colors - light mode */
  --background: 0 0% 100%;           /* Pure white background */
  --foreground: 0 0% 3.9%;           /* Near-black text */
  
  /* Card surfaces */
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  
  /* Muted elements (secondary surfaces) */
  --muted: 0 0% 96.1%;               /* Light gray for chips, inputs */
  --muted-foreground: 0 0% 45.1%;    /* Secondary text */
  
  /* Primary accent (Coral/Orange) */
  --primary: 12 80% 55%;             /* Warm coral - main CTA */
  --primary-foreground: 0 0% 98%;    /* White text on primary */
  
  /* Borders */
  --border: 0 0% 89.8%;              /* Subtle borders */
  --ring: 0 0% 3.9%;                 /* Focus rings */
}
```

### Usage Rules

```tsx
// ✅ CORRECT - Use semantic tokens
<div className="bg-background text-foreground" />
<div className="bg-card border-border" />
<button className="bg-primary text-primary-foreground" />
<span className="text-muted-foreground" />

// ❌ WRONG - Never use raw colors
<div className="bg-white text-black" />
<div className="bg-gray-100" />
<button className="bg-orange-500" />
```

### Color Hierarchy

| Element | Token | Purpose |
|---------|-------|---------|
| Page background | `bg-background` | Main canvas |
| Cards/Surfaces | `bg-card` | Elevated content |
| Input backgrounds | `bg-muted` | Recessed elements |
| Primary text | `text-foreground` | Headlines, body |
| Secondary text | `text-muted-foreground` | Captions, metadata |
| CTAs/Actions | `bg-primary` | Buttons, highlights |
| Borders | `border-border` | Dividers, outlines |

---

## Typography

### Font Stack

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
```

### Scale

| Class | Size | Weight | Use Case |
|-------|------|--------|----------|
| `text-2xl font-bold` | 24px | 700 | Page titles |
| `text-xl font-bold` | 20px | 700 | Section headers |
| `text-lg font-semibold` | 18px | 600 | Card titles, prices |
| `text-base font-medium` | 16px | 500 | Body text, buttons |
| `text-sm` | 14px | 400 | Secondary content |
| `text-xs` | 12px | 400 | Captions, badges |
| `text-[10px]` | 10px | 500 | Nav labels, mini badges |

### Typography Patterns

```tsx
// Price display
<p className="font-bold text-lg text-foreground">
  €{price.toLocaleString()}
</p>

// Title with truncation
<h3 className="text-sm text-foreground line-clamp-1">
  {title}
</h3>

// Metadata
<span className="text-xs text-muted-foreground">
  {location}
</span>

// Section header with action
<div className="flex items-center justify-between">
  <h2 className="font-semibold text-foreground">Featured</h2>
  <button className="text-sm text-primary font-medium">See all</button>
</div>
```

---

## Spacing & Layout

### 4px Grid System

```
4px  = 1    (0.25rem) - micro spacing
8px  = 2    (0.5rem)  - tight spacing
12px = 3    (0.75rem) - compact spacing  
16px = 4    (1rem)    - standard spacing ← default
20px = 5    (1.25rem) - comfortable spacing
24px = 6    (1.5rem)  - loose spacing
```

### Common Patterns

```tsx
// Page padding
<main className="px-4 py-4">

// Card internal padding
<div className="p-3">  {/* Compact cards */}
<div className="p-4">  {/* Standard cards */}

// Section spacing
<div className="space-y-6">  {/* Between sections */}
<div className="space-y-3">  {/* Within sections */}

// Grid gaps
<div className="grid grid-cols-2 gap-3">  {/* Card grids */}
<div className="flex gap-2">               {/* Inline elements */}
```

### Layout Templates

```tsx
// Standard page structure
<div className="min-h-screen bg-background pb-20">
  <header className="sticky top-0 z-40 ...">
  <main className="px-4 py-4 space-y-6">
  <BottomNav />
</div>

// Two-column grid
<div className="grid grid-cols-2 gap-3">

// Horizontal scroll
<div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
```

---

## Components

### Button Variants

```tsx
// Primary CTA
<button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold tap-highlight">
  Continue
</button>

// Secondary action
<button className="w-full py-3 rounded-xl bg-muted text-foreground font-medium tap-highlight">
  Cancel
</button>

// Icon button (circular)
<button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center tap-highlight">
  <Icon className="w-5 h-5 text-foreground" />
</button>

// Ghost button
<button className="text-sm text-primary font-medium tap-highlight">
  See all
</button>

// Pill/Chip button
<button className={`px-3 py-1.5 rounded-full text-sm font-medium tap-highlight ${
  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
}`}>
  Filter
</button>
```

### Cards

```tsx
// Listing card
<article className="bg-card rounded-xl overflow-hidden shadow-card">
  <div className="aspect-square">
    <img className="w-full h-full object-cover" />
  </div>
  <div className="p-3">
    {/* Content */}
  </div>
</article>

// Info card
<div className="p-4 bg-card rounded-xl border border-border">
  {/* Content */}
</div>

// Muted card (recessed)
<div className="p-4 bg-muted rounded-xl">
  {/* Stats, summaries */}
</div>
```

### Badges

```tsx
// Promoted badge
<Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5">
  Promoted
</Badge>

// Secondary badge
<Badge variant="secondary" className="gap-1">
  <Icon className="w-3 h-3" />
  Label
</Badge>

// PRO badge (gradient)
<Badge className="bg-gradient-to-r from-primary to-orange-500 text-white text-[10px] px-2">
  PRO
</Badge>
```

---

## Interactions & Feedback

### Tap Highlight (Critical for iOS feel)

```css
/* In index.css */
.tap-highlight {
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.1s ease-in-out;
}

.tap-highlight:active {
  opacity: 0.7;
}
```

**Usage:** Add `tap-highlight` to ALL interactive elements:

```tsx
<button className="... tap-highlight">
<div onClick={...} className="... tap-highlight">
<a className="... tap-highlight">
```

### Focus States

```tsx
// Keyboard focus (accessibility)
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

### Loading States

```tsx
// Skeleton loading
<div className="animate-pulse rounded-md bg-muted" />

// Spinner
<div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full" />
```

---

## Navigation Patterns

### Sticky Header

```tsx
<header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border safe-top">
  <div className="flex items-center justify-between px-4 py-3">
    {/* Content */}
  </div>
</header>
```

### Bottom Navigation

```tsx
<nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border safe-bottom">
  <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
    {navItems.map(item => (
      <button className="flex flex-col items-center gap-0.5 py-2 px-4 tap-highlight">
        <Icon className={isActive ? "text-primary" : "text-muted-foreground"} />
        <span className={`text-[10px] font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
          {label}
        </span>
      </button>
    ))}
  </div>
</nav>
```

### Floating Action Button

```tsx
<button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg -mt-4">
  <Plus className="w-6 h-6 text-primary-foreground" />
</button>
```

### Back Button Pattern

```tsx
<button onClick={() => navigate(-1)} className="tap-highlight">
  <ArrowLeft className="w-6 h-6 text-foreground" />
</button>

// Floating variant (over images)
<button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight">
  <ArrowLeft className="w-5 h-5 text-foreground" />
</button>
```

---

## Cards & Containers

### Shadow System

```css
/* In tailwind.config.ts */
boxShadow: {
  'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
  'elevated': '0 4px 12px rgba(0, 0, 0, 0.1)',
}
```

### Border Radius Scale

| Class | Radius | Use Case |
|-------|--------|----------|
| `rounded-md` | 6px | Inputs, small elements |
| `rounded-lg` | 8px | Buttons, badges |
| `rounded-xl` | 12px | Cards, containers |
| `rounded-2xl` | 16px | Large cards, avatars |
| `rounded-full` | 9999px | Pills, circular buttons |

### Card Hierarchy

```
┌─────────────────────────────────────┐
│  bg-card + border-border            │  ← Standard card
│  Subtle border, white background    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  bg-card + shadow-card              │  ← Elevated card  
│  Drop shadow, no border             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  bg-muted                           │  ← Recessed card
│  Gray background, no border         │
└─────────────────────────────────────┘
```

---

## Forms & Inputs

### Input Styling

```tsx
// Standard input
<Input 
  className="bg-muted border-0 rounded-xl h-12 px-4"
  placeholder="Search..."
/>

// With icon
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
  <Input className="pl-10 bg-muted border-0" />
</div>

// Textarea
<Textarea 
  className="bg-muted border-0 rounded-xl resize-none min-h-[100px]"
/>
```

### Selection States

```tsx
// Radio-like selection
<button className={`p-3 rounded-xl border tap-highlight ${
  isSelected 
    ? "bg-primary/10 border-primary" 
    : "bg-card border-border"
}`}>
  <span className={isSelected ? "text-primary" : "text-foreground"}>
    {label}
  </span>
</button>

// Chip selection
<button className={`px-3 py-1.5 rounded-full text-sm font-medium ${
  isSelected 
    ? "bg-primary text-primary-foreground" 
    : "bg-muted text-foreground"
}`}>
  {label}
</button>
```

---

## Icons

### Lucide React Icons

```tsx
import { Heart, MapPin, Verified } from "lucide-react";

// Standard icon
<Icon className="w-5 h-5 text-foreground" />

// Muted icon
<Icon className="w-4 h-4 text-muted-foreground" />

// Primary icon
<Icon className="w-5 h-5 text-primary" />

// Filled state (for saves/likes)
<Heart className={isSaved ? "w-4 h-4 fill-primary text-primary" : "w-4 h-4 text-foreground"} />
```

### Icon Size Guide

| Size | Class | Use Case |
|------|-------|----------|
| 12px | `w-3 h-3` | Inline with small text, badges |
| 16px | `w-4 h-4` | Metadata, secondary icons |
| 20px | `w-5 h-5` | Primary actions, nav icons |
| 24px | `w-6 h-6` | Header icons, large actions |

---

## Motion & Animation

### Philosophy: Less is More

```
❌ Avoid: Bouncy animations, spring physics, decorative motion
✅ Use: Instant feedback, subtle transitions, functional animation
```

### Allowed Transitions

```css
/* Opacity changes (tap feedback) */
transition: opacity 0.1s ease-in-out;

/* Color/background changes */
transition: colors; /* Tailwind's transition-colors */

/* Sheet/drawer animations (built into Vaul) */
/* Let the component library handle these */
```

### What NOT to Animate

- Card hover effects
- Scroll animations
- Page transitions
- Decorative particles/floaters
- Loading spinners (use skeleton instead)

---

## Safe Areas & Mobile

### Safe Area Utilities

```css
/* In index.css */
.safe-top {
  padding-top: env(safe-area-inset-top);
}

.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
```

**Usage:**

```tsx
// Header
<header className="sticky top-0 ... safe-top">

// Bottom nav
<nav className="fixed bottom-0 ... safe-bottom">

// Page with bottom nav
<div className="min-h-screen pb-20">  {/* 80px for nav + safe area */}
```

### Viewport Meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### Touch Optimization

```css
/* Prevent zoom on input focus (iOS) */
input, textarea, select {
  font-size: 16px; /* Minimum to prevent zoom */
}

/* Disable pull-to-refresh where needed */
.no-overscroll {
  overscroll-behavior: none;
}

/* Hide scrollbars but keep scroll */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

---

## Dark Mode

### Token Structure

```css
.dark {
  --background: 0 0% 6%;              /* Near black */
  --foreground: 0 0% 98%;             /* Near white */
  --card: 0 0% 10%;                   /* Elevated dark */
  --muted: 0 0% 14%;                  /* Recessed dark */
  --muted-foreground: 0 0% 63.9%;     /* Subdued text */
  --border: 0 0% 18%;                 /* Subtle borders */
  --primary: 12 80% 55%;              /* Same coral accent */
}
```

### Dark Mode Tips

1. Primary accent stays the same across modes
2. Reduce shadow intensity in dark mode
3. Borders become more important for definition
4. Test contrast ratios for accessibility

---

## Performance

### Image Optimization

```tsx
// Always use lazy loading
<img loading="lazy" />

// Use object-fit for consistent sizing
<img className="w-full h-full object-cover" />

// Provide explicit dimensions
<div className="aspect-square">
  <img />
</div>
```

### List Rendering

```tsx
// Always use unique keys
{items.map(item => (
  <Component key={item.id} />
))}

// Use CSS Grid for layouts (GPU-accelerated)
<div className="grid grid-cols-2 gap-3">
```

### Bundle Optimization

```tsx
// Import only needed icons
import { Heart, MapPin } from "lucide-react";

// ❌ Never import entire icon library
import * as Icons from "lucide-react";
```

---

## Code Examples

### Complete Listing Card

```tsx
import { Heart, MapPin, Verified } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ListingCard({ listing, onSave }) {
  return (
    <article 
      onClick={() => navigate(`/listing/${listing.id}`)}
      className={`relative bg-card rounded-xl overflow-hidden shadow-card cursor-pointer tap-highlight ${
        listing.isPromoted ? "ring-1 ring-primary/20" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-square">
        <img 
          src={listing.image} 
          alt={listing.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Save button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onSave?.(listing.id); }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center tap-highlight"
        >
          <Heart className={`w-4 h-4 ${listing.isSaved ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>

        {/* Promoted badge */}
        {listing.isPromoted && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] px-2 py-0.5">
            Promoted
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="font-bold text-lg text-foreground">
          {listing.currency}{listing.price.toLocaleString()}
        </p>
        
        <h3 className="text-sm text-foreground line-clamp-1 mt-0.5">
          {listing.title}
        </h3>

        <div className="flex items-center gap-1 mt-1.5">
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{listing.location}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
          <img 
            src={listing.seller.avatar} 
            alt={listing.seller.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            {listing.seller.name}
            {listing.seller.verified && <Verified className="w-3 h-3 text-primary" />}
          </span>
        </div>
      </div>
    </article>
  );
}
```

### Complete Page Template

```tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/layout/BottomNav";
import { SellDrawer } from "@/components/sell/SellDrawer";

export default function PageTemplate() {
  const navigate = useNavigate();
  const [sellOpen, setSellOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border safe-top">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)} className="tap-highlight">
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Page Title</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-4 space-y-6">
        {/* Sections go here */}
      </main>

      {/* Bottom Navigation */}
      <BottomNav onSellClick={() => setSellOpen(true)} />
      <SellDrawer open={sellOpen} onOpenChange={setSellOpen} />
    </div>
  );
}
```

---

## Checklist

Before shipping any component, verify:

- [ ] Uses semantic color tokens (no raw colors)
- [ ] Has `tap-highlight` on all interactive elements
- [ ] Uses correct typography scale
- [ ] Follows 4px spacing grid
- [ ] Images have `loading="lazy"` and `object-cover`
- [ ] Cards use correct border radius (`rounded-xl`)
- [ ] Icons are appropriately sized
- [ ] Safe areas handled for headers/footers
- [ ] Dark mode tokens work correctly
- [ ] No decorative animations

---

*Last updated: 2026-02-02*
