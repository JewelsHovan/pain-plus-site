# Vite React TypeScript Boilerplate

A modern, production-ready frontend boilerplate built with Vite, React 19, and TypeScript. This template provides a solid foundation for building scalable web applications with best practices and popular tools pre-configured.

## Features

- ⚡ **Vite** - Lightning-fast build tool with HMR
- ⚛️ **React 19** - Latest React with modern hooks
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router** - Declarative routing
- 📏 **ESLint** - Code quality rules
- 💅 **Prettier** - Code formatting
- 📁 **Path Aliases** - Clean imports with `@/` prefix

## Project Structure

```
src/
├── assets/           # Static assets (images, icons, etc.)
│   ├── images/
│   └── icons/
├── components/       # Reusable UI components
│   ├── Button/
│   ├── Card/
│   └── index.ts
├── constants/        # Application constants and config
├── features/         # Feature-based modules (optional)
├── hooks/            # Custom React hooks
│   ├── useLocalStorage.ts
│   └── index.ts
├── layouts/          # Layout components
│   ├── MainLayout.tsx
│   └── index.ts
├── pages/            # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── NotFound.tsx
│   └── index.ts
├── services/         # API services and external integrations
│   ├── api.service.ts
│   └── index.ts
├── types/            # TypeScript type definitions
│   ├── common.types.ts
│   ├── api.types.ts
│   └── index.ts
├── utils/            # Utility functions
│   └── index.ts
├── App.tsx           # Root application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd vite-react-typescript-boiler
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Development Guidelines

### Component Structure

Each component should be in its own folder with an index file for exports:

```typescript
// components/Button/Button.tsx
export function Button() { ... }

// components/Button/index.ts
export { Button } from './Button';
```

### Path Aliases

Use the `@/` prefix for clean imports:

```typescript
import { Button } from '@/components';
import { apiService } from '@/services';
import { ROUTES } from '@/constants';
```

### Type Definitions

Define types in the `types/` directory and export them via the index file:

```typescript
// types/user.types.ts
export interface User {
  id: string;
  name: string;
}

// types/index.ts
export type * from './user.types';
```

### Custom Hooks

Follow the `use` prefix convention and document your hooks:

```typescript
/**
 * Custom hook for managing localStorage
 * @param key - Storage key
 * @param initialValue - Initial value if key doesn't exist
 */
export function useLocalStorage<T>(key: string, initialValue: T) { ... }
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Access variables in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Adding State Management

This template doesn't include state management by default. Popular options:

- **Zustand** - Minimal and modern
- **Redux Toolkit** - Opinionated Redux setup
- **Jotai** - Atomic state management

### Adding Testing

Consider adding:

- **Vitest** - Vite-native testing framework
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

### Adding More Tools

Other useful tools to consider:

- **Husky + lint-staged** - Git hooks for pre-commit checks
- **Commitlint** - Enforce commit message conventions
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
