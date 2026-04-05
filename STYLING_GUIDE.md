# UI/UX STYLING & ANIMATION GUIDE

## 🎨 Design System Overview

This portfolio implements a **dual visual identity** with theme-aware animations and interactions.

---

## 📊 Color System

### AI Profile Theme (Dark)

```
Background:      #050a14 (near-black navy)
Surface:         #0d1f35 (dark slate)
Primary Accent:  #22d3ee (cyan-400) - Main interactive color
Secondary:       #0ea5e9 (sky-500) - Hover/accent state
Text Primary:    #e2e8f0 (light slate)
Text Secondary:  #94a3b8 (muted gray)
Border:          rgba(34, 211, 238, 0.2) with glow on hover
```

**Visual Feel:** Futuristic, neon glow, "AI dashboard" aesthetic

### Web Dev Profile Theme (Light)

```
Background:      #fafafa (off-white)
Surface:         #ffffff (pure white)
Primary Accent:  #10b981 (emerald-500) - Modern, fresh green
Secondary:       #059669 (emerald-600) - Darker interaction state
Text Primary:    #111827 (near-black)
Text Secondary:  #6b7280 (mid gray)
Border:          rgba(16, 185, 129, 0.15) with subtle shadow
```

**Visual Feel:** Clean, professional, SaaS product style

---

## 🎭 Animation Strategy

### Core Animation Principles

1. **Duration:** Keep animations between 200ms-600ms
2. **Easing:** Use `ease-out` for entrances, `cubic-bezier` for bouncy effects
3. **Accessibility:** Respect `prefers-reduced-motion` media query
4. **Performance:** Use `transform` and `opacity` for smooth 60fps animations

### Animation Library

All animations are pre-built in `src/styles/animations.css` and Tailwind config.

#### Page Transitions

```html
<!-- Pages automatically get fade-in + slide-in animation -->
<div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
  Content appears on page load
</div>
```

#### Entrance Animations

```html
<!-- Fade in slowly -->
<div className="animate-fade-in-slow">...</div>

<!-- Staggered list items (1-6 stages) -->
<div className="animate-stagger-1">First item</div>
<div className="animate-stagger-2">Second item</div>
<div className="animate-stagger-3">Third item</div>
```

#### Interactive Animations

```html
<!-- Glow pulse (AI theme) -->
<div className="animate-glow-pulse">Pulsing cyan glow</div>

<!-- Glow pulse (Web theme) -->
<div className="animate-glow-pulse-emerald">Pulsing emerald glow</div>

<!-- Float effect -->
<div className="animate-float">Subtle up-down movement</div>

<!-- Shimmer/loading -->
<div className="animate-shimmer rounded">Loading skeleton</div>

<!-- Bounce -->
<div className="animate-bounce-small">Subtle bounce</div>
```

---

## 🔘 Animated Components

### 1. AnimatedButton

**Location:** `src/components/ui/AnimatedButton.tsx`

#### Usage

```tsx
import { AnimatedButton, PrimaryButton, SecondaryButton } from '@/components/ui/AnimatedButton'

// Basic button
<AnimatedButton>Click me</AnimatedButton>

// With variant
<PrimaryButton href="/projects">View Projects</PrimaryButton>
<SecondaryButton variant="secondary">Learn More</SecondaryButton>

// Loading state
<AnimatedButton isLoading={true}>Processing...</AnimatedButton>

// With click handler
<AnimatedButton onClick={() => console.log('clicked')}>
  Action Button
</AnimatedButton>
```

#### Variants

- **primary:** Gradient background with glow shadow (AI: cyan/sky, Web: emerald/teal)
- **secondary:** Light background with border (muted color with hover activation)
- **outline:** Border only with hover fill

#### Sizes

- **sm:** Small padding, text-sm
- **md:** Standard padding, text-base (default)
- **lg:** Large padding, text-lg

#### Visual Effects

- ✨ Gradient background with color shift on hover
- 🌟 Glow shadow that intensifies on hover
- ⚡ Click press animation (scale down then back)
- 🎯 Focus ring (theme-aware)
- ⏳ Loading spinner state

---

### 2. AnimatedCard

**Location:** `src/components/ui/AnimatedCard.tsx`

#### Usage - Basic Card

```tsx
import { AnimatedCard } from "@/components/ui/AnimatedCard";

<AnimatedCard hover="lift" index={0} stagger={true}>
  <div className="p-6">Content here</div>
</AnimatedCard>;
```

#### Usage - Project Card

```tsx
import { ProjectCard } from "@/components/ui/AnimatedCard";

<ProjectCard
  title="Waste Sorting Module"
  description="ML classification model for waste types..."
  tags={["Python", "TensorFlow", "React"]}
  image="/projects/waste-sorting.jpg"
  link="https://github.com/mouaad/waste-sorting"
  badge="Featured"
  index={0}
/>;
```

#### Usage - Skill Badge

```tsx
import { SkillBadge } from "@/components/ui/AnimatedCard";

<SkillBadge name="Python" icon={<PythonIcon />} level="expert" index={0} />;
```

#### Usage - Stat Card

```tsx
import { StatCard } from "@/components/ui/AnimatedCard";

<StatCard
  value="6+"
  label="AI Projects Built"
  icon={<BrainIcon />}
  index={0}
/>;
```

#### Hover Effects

- **lift:** Card translates up with enhanced glow shadow
- **glow:** Glowing box shadow effect intensifies (theme-aware)
- **scale:** Card scales up 105%
- **tilt:** 3D perspective tilt (subtle)

#### Stagger Animation

When `stagger={true}`, each card in a list appears sequentially:

```
Index 0: animates at 0.1s delay
Index 1: animates at 0.2s delay
Index 2: animates at 0.3s delay
...up to 6 items
```

---

### 3. Page Transitions

**Location:** `src/components/ui/PageTransition.tsx`

#### PageTransition Wrapper

Wraps page content to provide entrance animation:

```tsx
import { PageTransition } from "@/components/ui/PageTransition";

// In a page.tsx
export default function Page() {
  return (
    <PageTransition>
      <h1>Page content</h1>
    </PageTransition>
  );
}
```

**Provides:**

- Fade-in + slide-up animation on page load
- Loading bar appears during transition
- Smooth theme change detection

#### AnimatedSection

```tsx
import { AnimatedSection } from '@/components/ui/PageTransition'

<AnimatedSection delay={0}>
  Hero section appears first
</AnimatedSection>

<AnimatedSection delay={200}>
  Projects section appears after 200ms
</AnimatedSection>
```

#### StaggeredList

```tsx
import { StaggeredList } from "@/components/ui/PageTransition";

<StaggeredList staggerDelay={100}>
  <div>Item 1 - appears immediately</div>
  <div>Item 2 - appears at 100ms</div>
  <div>Item 3 - appears at 200ms</div>
</StaggeredList>;
```

#### BlurDivider

```tsx
import { BlurDivider } from "@/components/ui/PageTransition";

<BlurDivider animated={true} />;
```

Creates a horizontal divider with gradient color that matches theme.

#### ContentReveal

```tsx
import { ContentReveal } from "@/components/ui/PageTransition";

<ContentReveal delay={300}>
  This content slides in from bottom after 300ms
</ContentReveal>;
```

---

## 🎯 CSS Utility Classes

All custom classes are defined in `src/styles/animations.css` and are
component-scoped for theme-awareness.

### Glow Effects (AI Theme)

```css
.glow-cyan              /* Text glow with cyan shadow */
.glow-cyan-box          /* Box shadow glow */
.border-glow            /* Border with inner glow, hover effect */
.glass-ai               /* Glassmorphism + blur + border glow */
.gradient-border        /* Animated gradient border */
.neural-bg              /* Neural network background pattern */
.card-lift              /* Card hover lift effect */
.code-block             /* Monospace code styling */
.skeleton               /* Shimmer loading state */
```

### Light Effects (Web Theme)

```css
.glow-emerald           /* Text glow with emerald */
.glow-emerald-box       /* Emerald box shadow */
.glass-web              /* Clean glass + emerald border */
.product-card           /* Product-like card with subtle shadow */
.badge-emerald          /* Emerald badge styling */
```

### Responsive & Accessibility

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🛠️ Implementation Examples

### Example 1: Hero Section with Animated Elements

```tsx
"use client";

import { AnimatedButton, PrimaryButton } from "@/components/ui/AnimatedButton";
import { AnimatedSection, ContentReveal } from "@/components/ui/PageTransition";

export default function Hero() {
  return (
    <AnimatedSection
      delay={0}
      className="hero-gradient min-h-screen flex items-center"
    >
      <div className="max-w-4xl">
        <ContentReveal delay={100}>
          <h1 className="text-5xl font-bold mb-4">
            Building intelligent systems
          </h1>
        </ContentReveal>

        <ContentReveal delay={200}>
          <p className="text-xl opacity-80 mb-8 max-w-2xl">
            Engineering student specializing in AI, ML, and generative systems.
          </p>
        </ContentReveal>

        <ContentReveal delay={300}>
          <div className="flex gap-4">
            <PrimaryButton href="/projects" size="lg">
              View Projects
            </PrimaryButton>
            <SecondaryButton href="/cv.pdf" size="lg">
              Download CV
            </SecondaryButton>
          </div>
        </ContentReveal>
      </div>
    </AnimatedSection>
  );
}
```

### Example 2: Projects Grid with Staggered Cards

```tsx
"use client";

import { ProjectCard } from "@/components/ui/AnimatedCard";
import { aiProjects } from "@/lib/data";

export default function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiProjects.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
    </div>
  );
}
```

### Example 3: Skills Showcase

```tsx
"use client";

import { SkillBadge } from "@/components/ui/AnimatedCard";
import { aiSkills } from "@/lib/data";

export default function SkillsShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {aiSkills.flatMap((group) =>
        group.skills.map((skill, index) => (
          <SkillBadge
            key={skill}
            name={skill}
            level="intermediate"
            index={index}
          />
        )),
      )}
    </div>
  );
}
```

### Example 4: Navbar with Active Link Animation

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/data-ai/skills", label: "Skills" },
    { href: "/data-ai/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 backdrop-blur z-40 border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-mono text-cyan-400 text-xl font-bold">ME</span>

        <div className="flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 animate-underline" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
```

---

## 📱 Responsive Design

All components are mobile-first and responsive:

```tsx
// Grid layouts adapt to screen size
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Text scales responsively
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Spacing adjusts
<div className="p-4 md:p-6 lg:p-8">
```

---

## ⚡ Performance Tips

1. **Use CSS animations over JS** - CSS is GPU-accelerated
2. **Lazy load images** - Use Next.js `Image` component
3. **Defer non-critical animations** - Use `delay` prop
4. **Use `transform` and `opacity`** - these are GPU-friendly properties
5. **Test with DevTools** - Check Performance tab for 60fps rendering

---

## 🎨 Theme Switching

Theme is automatically applied based on route:

- `/data-ai/*` → `data-theme="dark"` (AI theme)
- `/web-dev/*` → `data-theme="light"` (Web theme)
- `/about`, `/contact` → Theme adapts to last visited profile

All components automatically detect and apply correct colors via:

```tsx
const isDark = document.documentElement.getAttribute("data-theme") === "dark";
```

---

## 🚀 Integration Checklist

- [ ] Import animations CSS in globals.css ✅
- [ ] Extend Tailwind config with custom animations ✅
- [ ] Import theme CSS files (ai-theme, web-theme) ✅
- [ ] Use AnimatedButton in CTA sections
- [ ] Use ProjectCard in projects pages
- [ ] Use SkillBadge in skills sections
- [ ] Wrap pages with PageTransition
- [ ] Use AnimatedSection for major content areas
- [ ] Test animations on mobile (may disable for performance)
- [ ] Check accessibility (keyboard navigation, focus states)

---

## 📚 Additional Resources

- **Tailwind Animation Docs:** https://tailwindcss.com/docs/animation
- **CSS Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- **Easing Functions:** https://easings.net/
- **Accessibility (a11y):** https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions

---

**Built with:** Tailwind CSS + Custom CSS animations + Next.js 14+ App Router

**Last Updated:** April 2026
