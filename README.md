# Mouaad Essaghir — Dual-Profile Portfolio

A complete redesign and rebuild of the portfolio website using Next.js 14 with App Router, featuring two distinct profiles: **Data/AI** and **Web Dev**. Each profile has its own visual identity, content, and user experience.

## Architecture Overview

### Route Structure

The portfolio uses Next.js App Router with route groups for clean separation:

```
/                               → Landing page (profile selector)
/data-ai/*                      → AI & ML profile routes
└─ /data-ai                     → AI home
   /data-ai/skills              → ML/DL/NLP skills
   /data-ai/projects            → AI & academic projects
   /data-ai/research            → From-scratch model implementations

/web-dev/*                      → Web Development profile routes
└─ /web-dev                     → Web Dev home
   /web-dev/skills              → Full-stack tech skills
   /web-dev/projects            → Full-stack applications

/about                          → Shared biography & education
/contact                        → Shared contact form & links
```

### Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom theme extensions
- **State Management**: React Context API (ProfileContext)
- **Font**: Geist and Geist Mono (via next/font)
- **Persistence**: Cookie-based profile selection
- **Routing**: Next.js middleware for redirect on re-visit

## Project Structure

```
src/
├── app/
│   ├── page.tsx                      # Landing page
│   ├── layout.tsx                    # Root layout with ProfileProvider
│   ├── (ai-profile)/                 # Route group for AI profile
│   │   ├── layout.tsx                # AI theme wrapper + AINavbar
│   │   └── data-ai/
│   │       ├── page.tsx              # AI home
│   │       ├── skills/page.tsx
│   │       ├── projects/page.tsx
│   │       └── research/page.tsx
│   ├── (web-profile)/                # Route group for Web profile
│   │   ├── layout.tsx                # Web theme wrapper + WebNavbar
│   │   └── web-dev/
│   │       ├── page.tsx              # Web Dev home
│   │       ├── skills/page.tsx
│   │       └── projects/page.tsx
│   ├── about/
│   │   └── page.tsx                  # Shared, theme-aware
│   └── contact/
│       └── page.tsx                  # Shared, theme-aware
│
├── components/
│   ├── ai/
│   │   └── AINavbar.tsx              # AI profile navigation
│   └── web/
│       └── WebNavbar.tsx             # Web profile navigation
│
├── contexts/
│   └── ProfileContext.tsx            # Profile state ('data-ai' | 'web-dev')
│
├── lib/
│   ├── data.ts                       # All structured content (typed)
│   └── types.ts                      # TypeScript interfaces
│
└── styles/
    └── globals.css                   # Tailwind configuration
```

## Key Features

### 1. Dual Profile System

- **Landing Page**: Choose between Data/AI or Web Dev profile
- **Profile Context**: Global state for active profile
- **Cookie Persistence**: Selected profile saved in browser cookie
- **Automatic Redirect**: Middleware redirects to last-used profile on revisit

### 2. Visual Design System

#### AI Profile Theme (Dark Mode)

```
Background:      #050a14  (near-black navy)
Primary:         #22d3ee  (cyan-400)
Secondary:       #0ea5e9  (sky-500)
Surface:         #0d1f35
Text Primary:    #e2e8f0
Text Secondary:  #94a3b8
```

#### Web Dev Profile Theme (Light Mode)

```
Background:      #fafafa
Primary:         #10b981  (emerald-500)
Secondary:       #059669  (emerald-600)
Surface:         #ffffff
Text Primary:    #111827
Text Secondary:  #6b7280
```

Themes are applied via CSS custom properties using `data-theme` attribute on `<html>` element.

### 3. Navigation

- **Profile-Specific Navbars**: AINavbar and WebNavbar with theme-appropriate styling
- **Profile Switch Buttons**: Easy toggle between AI and Web profiles
- **Active Link Indicators**: Visual feedback for current page
- **Responsive Design**: Mobile-optimized navigation

### 4. Profile Content

#### AI Profile

- Hero section with unique tagline and CTAs
- Quick stats (4 from-scratch models, 6 projects, 3+ frameworks, 1 internship)
- Featured project showcase
- Dedicated skills breakdown (ML/DL, NLP, Languages, DevOps)
- Research section displaying from-scratch implementations
- 6 AI/ML projects with full technical details

#### Web Dev Profile

- Hero section with product-focused messaging
- Tech stack showcase (Next.js, React, Node.js, MongoDB, etc.)
- Featured projects showcase
- Skills breakdown (Frontend, Backend, Databases, DevOps)
- 3 full-stack projects with deployment details

### 5. Shared Pages

- **About**: Bio, education timeline, internship experience, clubs, languages
- **Contact**: Form submission, direct contact info, CV downloads

### 6. Dynamic Rendering

- Profile pages use `dynamic = 'force-dynamic'` for proper context rendering
- Middleware handles cookie-based redirects
- Server-side metadata for SEO on each route

## Configuration

### Environment Files

All configuration is in standard Next.js files:

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS with theme extensions
- `tsconfig.json` - TypeScript strict configuration
- `middleware.ts` - Request routing middleware

### Theme Extension (tailwind.config.ts)

```typescript
extend: {
  colors: {
    'ai-bg': '#050a14',
    'ai-primary': '#22d3ee',
    'ai-secondary': '#0ea5e9',
    'ai-text': '#e2e8f0',
    // ... web theme colors
  }
}
```

## Development

### Running Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Data Management

All content is structured in `lib/data.ts` with full TypeScript support via `lib/types.ts`:

- `owner` - Portfolio owner identity
- `aiProjects` - 6 AI/ML projects
- `webProjects` - 3 Web Dev projects
- `aiSkills` - AI skill groups
- `webSkills` - Web Dev skill groups
- `education` - Education timeline
- `experience` - Internship/work experience
- `clubs` - Extracurricular activities

Data is imported directly into pages with no hardcoded content.

## Client vs Server Components

The architecture carefully separates client and server components:

- **Server Components (Default)**: Pages, data-heavy components
- **Client Components**: `ProfileProvider`, `ProfileContext`, components using hooks
- **Key: Layout Boundaries**: Profile group layouts marked `'use client'` to support theme navbars

## SEO

Each page includes proper metadata:

- Unique `<title>` tags
- Meta descriptions
- OpenGraph tags for social sharing
- Favicon and theme color

## Cookie Policy

- Cookie name: `mouaad_profile`
- Value: `'data-ai'` or `'web-dev'`
- Expiration: 1 year
- Set on: Profile selection
- Read on: Initial visit via middleware

## Browser Support

- Modern browsers (ES2020+)
- TypeScript strict mode enforced
- Tailwind CSS utility-first approach
- No legacy API dependencies

## Future Enhancements

Potential improvements listed as TODO comments in code:

- Email backend integration (Resend/Formspree)
- PDF CV hosting and download
- Animations and transitions (Framer Motion ready)
- Mobile menu improvements
- Dark mode toggle for web profile (currently fixed light)

## License

Personal portfolio © 2026 Mouaad Essaghir
| Magic UI | Prebuilt UI elements and design extras|

---

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Images, textures, models
│   ├── models/             # 3D Astronaut model
│   └── vite.svg
├── src/
│   ├── components/         # Reusable components
│   ├── constants/          # Reusable datas
│   ├── sections/           # Portfolio sections (Hero, About, etc.)
│   ├── App.jsx             # Main app file
│   ├── index.css           # Tailwind css
│   └── main.jsx            # Entry point
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

1. Clone the Repository

```bash
git clone https://github.com/Ali-Sanati/Portfolio.git
cd Portfolio
```

2. Install Dependencies

```bash
npm install
```

3. Run the Development Server

```bash
npm run dev
```

The app will be available at http://localhost:5173.

---

## 🔗 Assets

Assets used in the project can be found [here](https://github.com/user-attachments/files/19820923/public.zip)

---

## 📬 Contact Me

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://www.instagram.com/ali.sanatidev/reels/)
[![Static Badge](https://img.shields.io/badge/Youtube-%23FF0033?style=flat&logo=youtube)](https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ali-sanati/)

---

## 💡 Suggestions or Feedback?

Leave a comment on the [YouTube video](https://youtu.be/S9UQItTpwUQ) or open an issue here on GitHub.<br/>
👉 What should I build next?

- A beautiful Landing Page

- A complete E-commerce site

- A fun App Clone (YouTube, Netflix, etc.)

Or another interactive Portfolio

Let me know!

---

## ⭐ Like This Project?

Star the repo and [subscribe](https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA??sub_confirmation=1) to the YouTube channel for more dev content!
