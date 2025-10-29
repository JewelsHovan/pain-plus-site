# Art Therapy Plus - Website

A modern, responsive marketing website for Art Therapy Plus, built with React, TypeScript, Vite, and Tailwind CSS.

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2E3780` (Headers, buttons, primary elements)
- **Secondary Pink**: `#F0BEBA` (CTAs, highlights, accents)
- **Accent Orange**: `#FF7500` (Active states, secondary accents)
- **Black**: `#000000` (Text)
- **White**: `#FFFFFF` (Backgrounds)

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (ExtraBold)

## 📄 Pages

1. **Home** (`/`)
   - Hero section with gradient background
   - Problem statement
   - 4 feature cards (Identify, Guide, Empower, Measure)

2. **How It Works** (`/how-it-works`)
   - 3-step process with alternating layout
   - Icons: ClipboardCheck, Palette, TrendingUp
   - Call-to-action section

3. **About** (`/about`)
   - Mission statement
   - Vision & Values cards
   - Team section (3 members with avatars)

4. **News & Media** (`/news-media`)
   - Filterable article list (All, Blog, News, Media)
   - 8 hardcoded articles
   - Load More functionality with skeleton loaders

5. **Contact** (`/contact`)
   - Contact form with mailto functionality
   - Form fields: Name, Email, Organization, Role, Message
   - Contact information cards (Email, Phone, Location)

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode support with toggle
- ✅ Smooth scroll behavior
- ✅ Loading skeletons for better UX
- ✅ Accessible (keyboard navigation, ARIA labels)
- ✅ Sticky header with active state indicators
- ✅ Wave divider SVG for visual separation
- ✅ shadcn-ui components (Button, Card, Input, etc.)
- ✅ TypeScript for type safety
- ✅ ESLint + Prettier configured

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4
- **Components**: shadcn-ui
- **Icons**: Lucide React
- **Routing**: React Router 7

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Management

All content is centralized in `/src/constants/`:

- **`content.ts`**: Page content (hero text, features, mission, etc.)
- **`articles.ts`**: News & media articles
- **`routes.ts`**: Application routes

To update content, simply edit these files - no need to touch components!

## 🎯 Key Components

### Layout
- **Header**: Sticky navigation with logo, links, CTA, and dark mode toggle
- **Footer**: Contact info, social links, privacy policy, HIPAA badge
- **WaveDivider**: Reusable SVG wave separator

### Home
- **HeroSection**: Gradient background with CTA
- **FeaturesSection**: 4-column grid of feature cards
- **ProblemStatement**: Centered content with icon

### Common
- **PageHero**: Reusable hero banner for all pages
- **DarkModeToggle**: Theme switcher with localStorage persistence

## 🎨 Customization

### Colors
Edit `/src/index.css` to customize the color palette:

```css
--color-primary: 235 59% 34%;      /* Art Blue */
--color-secondary: 6 48% 83%;       /* Art Pink */
--color-accent: 28 100% 50%;        /* Art Orange */
```

### Fonts
The site uses Inter from Google Fonts. To change:

1. Update the `@import` in `/src/index.css`
2. Update the `--font-sans` and `--font-heading` variables

### Logo
The "p+" logo is currently a text-based placeholder. To replace:

Edit the logo in `Header.tsx` and `Footer.tsx`:

```tsx
<div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
  <span className="text-2xl font-bold text-primary">p+</span>
</div>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn-ui components
│   ├── layout/                # Header, Footer, WaveDivider
│   ├── home/                  # Home page components
│   ├── how-it-works/          # How It Works components
│   ├── about/                 # About page components
│   ├── news/                  # News & Media components
│   ├── contact/               # Contact page components
│   └── common/                # Shared components
├── pages/                     # Page components
├── constants/                 # App constants and content
├── layouts/                   # Layout wrappers
└── types/                     # TypeScript types
```

## 🌐 Deployment

The built files in `/dist` can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Configure build output to `dist`
- **AWS S3**: Upload `dist` contents

## 📄 License

This project is private and proprietary to Art Therapy Plus.

## 🤝 Support

For questions or issues, contact: contact@arttherapyplus.com
