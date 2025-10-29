# Modern Minimal Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the React TypeScript boilerplate into a modern minimal professional application using shadcn-ui components with improved styling, layout, and user experience.

**Architecture:** Full replacement of custom components with shadcn-ui equivalents. Install shadcn-ui components via CLI, remove custom Button and Card components, update all pages to use new components with modern minimal styling (clean, whitespace, subtle shadows, neutral colors with blue accent).

**Tech Stack:** React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, shadcn-ui 3.4, React Router 7

---

## Task 1: Initialize shadcn-ui Configuration

**Files:**
- Create: `components.json`
- No tests needed (configuration file)

**Step 1: Initialize shadcn-ui**

Run the shadcn-ui init command to create the configuration file:

```bash
npx shadcn@latest init -d
```

When prompted, use these answers:
- Style: Default
- Base color: Slate
- CSS variables: Yes
- Import alias: @/components
- React Server Components: No
- Path for components: src/components/ui
- Path for utils: src/lib/utils
- Tailwind config: tailwind.config.ts
- Components.json location: ./components.json

**Step 2: Verify configuration file created**

Check that `components.json` exists and contains proper paths:

```bash
cat components.json
```

Expected: File exists with `"ui": "src/components/ui"` and `"utils": "src/lib/utils"`

**Step 3: Commit**

```bash
git add components.json src/lib/utils.ts
git commit -m "chore: initialize shadcn-ui configuration"
```

---

## Task 2: Install Required shadcn-ui Components

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/ui/badge.tsx`
- Create: `src/components/ui/separator.tsx`
- Create: `src/lib/utils.ts` (if not created by init)
- No tests needed (third-party components)

**Step 1: Install Button component**

```bash
npx shadcn@latest add button
```

Expected: Creates `src/components/ui/button.tsx`

**Step 2: Install Card component**

```bash
npx shadcn@latest add card
```

Expected: Creates `src/components/ui/card.tsx` with Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter exports

**Step 3: Install Badge component**

```bash
npx shadcn@latest add badge
```

Expected: Creates `src/components/ui/badge.tsx`

**Step 4: Install Separator component**

```bash
npx shadcn@latest add separator
```

Expected: Creates `src/components/ui/separator.tsx`

**Step 5: Verify all components installed**

```bash
ls -la src/components/ui/
```

Expected: Shows button.tsx, card.tsx, badge.tsx, separator.tsx

**Step 6: Commit**

```bash
git add src/components/ui/ src/lib/
git commit -m "feat: add shadcn-ui components (button, card, badge, separator)"
```

---

## Task 3: Create Component Barrel Export

**Files:**
- Create: `src/components/ui/index.ts`

**Step 1: Create barrel export file**

Create `src/components/ui/index.ts`:

```typescript
export { Button } from './button';
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';
export { Badge } from './badge';
export { Separator } from './separator';
```

**Step 2: Verify exports work**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors

**Step 3: Commit**

```bash
git add src/components/ui/index.ts
git commit -m "feat: add barrel export for ui components"
```

---

## Task 4: Update Home Page with Modern Minimal Design

**Files:**
- Modify: `src/pages/Home.tsx` (entire file)

**Step 1: Replace Home page content**

Replace the entire contents of `src/pages/Home.tsx`:

```typescript
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { APP_NAME } from '@/constants';

/**
 * Home page component with modern minimal design
 */
export function Home() {
  const features = [
    {
      title: 'Vite',
      badge: 'Fast',
      description:
        'Lightning-fast build tool with HMR for instant feedback during development.',
    },
    {
      title: 'React 19',
      badge: 'Modern',
      description:
        'Latest React with modern hooks and best practices built-in.',
    },
    {
      title: 'TypeScript',
      badge: 'Type-Safe',
      description:
        'Type-safe development with excellent IDE support and fewer runtime errors.',
    },
    {
      title: 'Tailwind CSS',
      badge: 'Flexible',
      description:
        'Utility-first CSS framework for rapid UI development with consistent design.',
    },
    {
      title: 'React Router',
      badge: 'Declarative',
      description: 'Declarative routing for navigation and code splitting.',
    },
    {
      title: 'ESLint & Prettier',
      badge: 'Quality',
      description:
        'Code quality and consistent formatting automatically enforced.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-24 text-center shadow-sm">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {APP_NAME}
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            A modern, production-ready React TypeScript starter template with
            best practices and professional styling
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-2">
                <Badge variant="secondary">{feature.badge}</Badge>
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex justify-center gap-4">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">
          View Docs
        </Button>
      </div>
    </div>
  );
}
```

**Step 2: Verify no TypeScript errors**

```bash
npm run build
```

Expected: Build succeeds, no errors about missing imports

**Step 3: Run dev server and verify visually**

```bash
npm run dev
```

Expected: Home page displays with:
- Hero section with gradient background
- 6 feature cards in grid with badges
- Hover effects on cards (lift and shadow)
- Two CTA buttons at bottom

**Step 4: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: redesign home page with shadcn-ui and modern minimal style"
```

---

## Task 5: Update MainLayout Navigation

**Files:**
- Modify: `src/layouts/MainLayout.tsx` (entire file)

**Step 1: Replace MainLayout content**

Replace the entire contents of `src/layouts/MainLayout.tsx`:

```typescript
import { Link, Outlet, useLocation } from 'react-router-dom';
import { APP_NAME } from '@/constants';

/**
 * Main layout component with navigation
 */
export function MainLayout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600"
            >
              {APP_NAME}
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/')
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </Link>
              <Link
                to="/about"
                className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/about')
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}
              >
                About
                {isActive('/about') && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}
```

**Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors

**Step 3: Run dev server and verify navigation**

```bash
npm run dev
```

Expected:
- Sticky header with logo and nav links
- Active route shows blue text and underline
- Hover states work on links
- Logo clickable to home
- Backdrop blur effect on scroll

**Step 4: Commit**

```bash
git add src/layouts/MainLayout.tsx
git commit -m "feat: redesign navigation with modern minimal style"
```

---

## Task 6: Update About Page

**Files:**
- Modify: `src/pages/About.tsx` (entire file)

**Step 1: Replace About page content**

Replace the entire contents of `src/pages/About.tsx`:

```typescript
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

/**
 * About page component with two-column layout
 */
export function About() {
  const technologies = [
    'React 19',
    'TypeScript 5.9',
    'Vite 7',
    'Tailwind CSS 4',
    'React Router 7',
    'shadcn-ui',
  ];

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Main Content */}
      <div className="space-y-8 md:col-span-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            About This Project
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            A comprehensive, production-ready starter template for building
            modern web applications with React and TypeScript.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>
          <p className="leading-relaxed text-gray-600">
            This boilerplate comes preconfigured with everything you need to
            start building professional applications immediately. From build
            tooling to code quality enforcement, we've got you covered.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Modern Development Stack
          </h3>
          <p className="leading-relaxed text-gray-600">
            Built with the latest versions of industry-standard tools and
            libraries. Vite provides lightning-fast development experience with
            hot module replacement, while React 19 brings the newest features
            and performance improvements.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Type Safety & Code Quality
          </h3>
          <p className="leading-relaxed text-gray-600">
            TypeScript ensures type safety throughout your codebase, catching
            errors at compile time. ESLint and Prettier work together to
            maintain consistent code style and catch potential issues before
            they become problems.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>
              Core technologies powering this template
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
            <Separator />
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong className="text-gray-900">Build Tool:</strong> Vite 7
              </p>
              <p>
                <strong className="text-gray-900">Framework:</strong> React 19
              </p>
              <p>
                <strong className="text-gray-900">Language:</strong> TypeScript
                5.9
              </p>
              <p>
                <strong className="text-gray-900">Styling:</strong> Tailwind CSS
                4
              </p>
              <p>
                <strong className="text-gray-900">Components:</strong> shadcn-ui
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

**Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors

**Step 3: Run dev server and verify About page**

```bash
npm run dev
```

Navigate to `/about` and verify:
- Two-column layout (main content + sidebar)
- Proper typography hierarchy
- Sticky sidebar card
- Technology badges in sidebar
- Separator lines between sections

**Step 4: Commit**

```bash
git add src/pages/About.tsx
git commit -m "feat: redesign about page with two-column layout"
```

---

## Task 7: Update NotFound Page

**Files:**
- Modify: `src/pages/NotFound.tsx` (entire file)

**Step 1: Replace NotFound page content**

Replace the entire contents of `src/pages/NotFound.tsx`:

```typescript
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

/**
 * 404 Not Found page component
 */
export function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mb-4">
            <h1 className="text-8xl font-bold text-blue-600">404</h1>
          </div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
          <CardDescription className="text-base">
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/">
            <Button size="lg" className="w-full">
              Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
```

**Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors

**Step 3: Run dev server and verify 404 page**

```bash
npm run dev
```

Navigate to `/nonexistent-page` and verify:
- Centered card layout
- Large blue "404" text
- Friendly message
- "Return Home" button
- Proper vertical centering

**Step 4: Commit**

```bash
git add src/pages/NotFound.tsx
git commit -m "feat: redesign 404 page with centered card layout"
```

---

## Task 8: Remove Old Custom Components

**Files:**
- Delete: `src/components/Button/`
- Delete: `src/components/Card/`
- Modify: `src/components/index.ts`

**Step 1: Delete Button component directory**

```bash
rm -rf src/components/Button
```

Expected: Directory removed

**Step 2: Delete Card component directory**

```bash
rm -rf src/components/Card
```

Expected: Directory removed

**Step 3: Update components barrel export**

Replace the entire contents of `src/components/index.ts`:

```typescript
// Re-export shadcn-ui components
export { Button } from './ui/button';
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
export { Badge } from './ui/badge';
export { Separator } from './ui/separator';
```

**Step 4: Verify build succeeds**

```bash
npm run build
```

Expected: Build succeeds, no TypeScript errors about missing modules

**Step 5: Run dev server and verify all pages work**

```bash
npm run dev
```

Test each page:
- Home page loads correctly
- About page loads correctly
- 404 page loads correctly (visit `/test`)
- Navigation works between pages

Expected: All pages render correctly with no console errors

**Step 6: Commit**

```bash
git add -A
git commit -m "refactor: remove old custom components, use shadcn-ui exclusively"
```

---

## Task 9: Final Verification and Polish

**Files:**
- No file changes
- Verification only

**Step 1: Run linter**

```bash
npm run lint
```

Expected: No linting errors

**Step 2: Run formatter check**

```bash
npm run format:check
```

Expected: All files properly formatted

**Step 3: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors or warnings

**Step 4: Test production preview**

```bash
npm run preview
```

Visit the preview URL and test:
- All pages load correctly
- Navigation works smoothly
- Hover effects work on cards
- Active navigation indicators work
- Responsive design works (test mobile/tablet/desktop)

Expected: Everything works in production mode

**Step 5: Final commit (if any formatting changes made)**

```bash
npm run format
git add -A
git commit -m "style: apply code formatting"
```

---

## Verification Checklist

After completing all tasks, verify:

- [ ] Home page displays with hero section, feature cards with badges, and CTA buttons
- [ ] Feature cards have hover effects (lift and shadow increase)
- [ ] Navigation shows active route with underline and blue color
- [ ] About page has two-column layout with sticky sidebar
- [ ] 404 page displays centered card with large "404" text
- [ ] All pages use shadcn-ui components exclusively
- [ ] No custom Button or Card components remain in codebase
- [ ] Build completes with no TypeScript errors
- [ ] Linter passes with no errors
- [ ] Code is properly formatted
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] All navigation links work correctly
- [ ] Modern minimal aesthetic (clean, whitespace, subtle shadows)

---

## Notes

- **shadcn-ui CLI:** Use `npx shadcn@latest add [component]` to add components
- **Path alias:** `@/` maps to `./src/` (configured in vite.config.ts and tsconfig.app.json)
- **Tailwind CSS:** Using version 4.1.15 with PostCSS configuration
- **Color scheme:** Gray-50 to Gray-900 with Blue-600 accent
- **Spacing:** Consistent scale using Tailwind's default spacing (4, 8, 12, 16, 24px)
- **Typography:** Bold headings, relaxed body text, gray-600 for secondary text
- **Transitions:** All interactive elements use `transition-all duration-200`
