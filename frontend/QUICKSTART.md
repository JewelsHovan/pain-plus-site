# Quick Start Guide

Get up and running in minutes with this Vite + React + TypeScript boilerplate.

## Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- A code editor (VS Code recommended)

## Installation

1. **Clone or use this template**:
   ```bash
   git clone <your-repo-url>
   cd vite-react-typescript-boiler
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

That's it! You should see the boilerplate running.

## Your First Changes

### 1. Update the Home Page

Edit `src/pages/Home.tsx` to customize the landing page.

### 2. Add a New Component

Create a new component:

```bash
mkdir src/components/MyComponent
```

Create `src/components/MyComponent/MyComponent.tsx`:

```typescript
export function MyComponent() {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-bold">My Component</h2>
      <p>Hello from my new component!</p>
    </div>
  );
}
```

Create `src/components/MyComponent/index.ts`:

```typescript
export { MyComponent } from './MyComponent';
```

Export from `src/components/index.ts`:

```typescript
export { MyComponent } from './MyComponent';
```

Use it in a page:

```typescript
import { MyComponent } from '@/components';

export function Home() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

### 3. Add a New Route

1. Create a new page in `src/pages/`:
   ```typescript
   // src/pages/MyPage.tsx
   export function MyPage() {
     return <h1>My New Page</h1>;
   }
   ```

2. Export it from `src/pages/index.ts`:
   ```typescript
   export { MyPage } from './MyPage';
   ```

3. Add route constant in `src/constants/index.ts`:
   ```typescript
   export const ROUTES = {
     HOME: '/',
     ABOUT: '/about',
     MY_PAGE: '/my-page', // Add this
     NOT_FOUND: '*',
   } as const;
   ```

4. Add route to `src/App.tsx`:
   ```typescript
   import { MyPage } from '@/pages';

   <Route path={ROUTES.MY_PAGE} element={<MyPage />} />
   ```

5. Add navigation link in `src/layouts/MainLayout.tsx`:
   ```typescript
   <Link to={ROUTES.MY_PAGE}>My Page</Link>
   ```

### 4. Add Environment Variables

1. Create `.env` file:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_APP_NAME=My App
   ```

2. Use in your code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_BASE_URL;
   ```

## Common Tasks

### Running Linter

Check for code issues:
```bash
npm run lint
```

Auto-fix issues:
```bash
npm run lint:fix
```

### Format Code

Check formatting:
```bash
npm run format:check
```

Auto-format:
```bash
npm run format
```

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

Preview the build:
```bash
npm run preview
```

## Folder Structure Quick Reference

```
src/
├── components/      # Shared UI components
├── pages/           # Route pages
├── layouts/         # Layout wrappers
├── hooks/           # Custom hooks
├── services/        # API services
├── types/           # TypeScript types
├── utils/           # Utility functions
├── constants/       # Constants and config
├── features/        # Feature modules (optional)
└── assets/          # Static files
```

## Pro Tips

### Path Aliases

Use `@/` for clean imports:
```typescript
import { Button } from '@/components';
// Instead of: import { Button } from '../../components';
```

### TypeScript Shortcuts

Import types separately:
```typescript
import type { ReactNode } from 'react';
```

### Tailwind Classes

Reuse common styles in components:
```typescript
const buttonClass = "px-4 py-2 bg-blue-600 text-white rounded-lg";
```

Or create component wrappers (see `src/components/Button`).

### VSCode Extensions

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Troubleshooting

### Port Already in Use

Vite will automatically find another port. Check the terminal output.

### Import Errors

Make sure path aliases are configured in:
- `vite.config.ts`
- `tsconfig.app.json`

### Build Errors

Run TypeScript check:
```bash
npx tsc --noEmit
```

## Next Steps

- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for design decisions
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines
- Check out the example components in `src/components/`
- Add tests (Vitest recommended)
- Set up CI/CD

## Need Help?

- Check the [README.md](./README.md) for detailed information
- Open an issue on GitHub
- Review React and Vite documentation

Happy coding!
