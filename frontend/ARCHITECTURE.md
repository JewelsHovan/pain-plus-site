# Architecture Overview

This document provides an overview of the application architecture and design decisions.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Code Quality**: ESLint + Prettier

## Project Structure Philosophy

This boilerplate follows a **hybrid architecture** that supports both:

1. **Layer-based organization** (for shared/generic code)
2. **Feature-based organization** (for domain-specific code)

### Layer-Based Directories

Located at the root of `src/`:

```
src/
├── components/     # Shared UI components
├── hooks/          # Shared custom hooks
├── layouts/        # Layout wrapper components
├── pages/          # Top-level route pages
├── services/       # External service integrations
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── constants/      # Application constants
```

**Use these for**:
- Code shared across multiple features
- Generic, reusable utilities and components
- Application-wide configurations

### Feature-Based Directory

```
src/features/       # Feature/domain modules
```

**Use this for**:
- Self-contained business features
- Domain-specific logic and components
- Code that belongs to a specific feature

## Design Patterns

### Component Pattern

Components are organized in folders with barrel exports:

```typescript
// components/Button/Button.tsx
export function Button() { ... }

// components/Button/index.ts
export { Button } from './Button';

// Import from anywhere
import { Button } from '@/components';
```

**Benefits**:
- Clean imports
- Easy to add related files (tests, styles, stories)
- Encapsulation

### Path Aliases

Use `@/` prefix for absolute imports:

```typescript
import { Button } from '@/components';
import { apiService } from '@/services';
import { ROUTES } from '@/constants';
import type { User } from '@/types';
```

**Benefits**:
- No relative path hell (`../../../../components`)
- Easy refactoring
- Clear code origins

### Type Organization

Types are organized by domain and exported through a central index:

```typescript
// types/user.types.ts
export interface User { ... }

// types/index.ts
export type * from './user.types';

// Import
import type { User } from '@/types';
```

### Service Layer

Services encapsulate external interactions (APIs, localStorage, etc.):

```typescript
// services/api.service.ts
class ApiService {
  async get<T>(endpoint: string): Promise<T> { ... }
}

export const apiService = new ApiService(API_BASE_URL);
```

**Benefits**:
- Centralized API logic
- Easy to mock in tests
- Type-safe requests
- Consistent error handling

## State Management

This boilerplate doesn't include state management by default. Choose based on your needs:

- **Local state**: Use `useState`, `useReducer`
- **Shared state**: Consider Zustand, Redux Toolkit, or Context API
- **Server state**: Consider TanStack Query

## Routing Strategy

Using React Router with:
- Centralized route definitions in `constants/`
- Layout wrapper for shared UI
- 404 fallback route

## Styling Approach

Using Tailwind CSS with:
- Utility-first approach
- Component-level styling
- Responsive design built-in
- Dark mode ready (can be added)

### Custom Components

Wrap Tailwind utilities in reusable components:

```typescript
<Button variant="primary" size="lg">
  Click me
</Button>
```

Instead of:
```typescript
<button className="bg-blue-600 text-white px-6 py-3...">
  Click me
</button>
```

## Build and Deployment

### Development

```bash
npm run dev
```

- Fast HMR with Vite
- TypeScript checking in IDE
- ESLint warnings in terminal

### Production

```bash
npm run build
```

Outputs to `dist/`:
- Optimized bundles
- Tree-shaking
- Code splitting
- Minification

## Best Practices

### TypeScript

- Enable strict mode
- Use `type` imports for types
- Define interfaces for props
- Avoid `any` type

### Components

- Keep components small and focused
- Extract business logic to hooks
- Use composition over inheritance
- Document complex components

### Performance

- Lazy load routes with `React.lazy()`
- Memoize expensive computations with `useMemo`
- Optimize re-renders with `memo` when needed
- Code split large features

### Testing (When Added)

- Unit test utilities and hooks
- Integration test features
- E2E test critical user flows
- Aim for meaningful coverage, not 100%

## Scalability Considerations

### When to Refactor

**Move to feature-based structure when**:
- A feature has 5+ related files
- Multiple developers work on the same feature
- Code is tightly coupled to a domain

**Keep in shared structure when**:
- Used by 3+ different features
- Generic and reusable
- Part of design system

### Code Splitting

Consider splitting:
- Large features
- Heavy libraries
- Routes/pages
- Components below the fold

### Monitoring and Logging

Add when needed:
- Error boundary for crash reporting
- Analytics for user behavior
- Performance monitoring
- API error logging

## Security

- Never commit secrets to git
- Use environment variables
- Validate user input
- Sanitize HTML content
- Keep dependencies updated

## Next Steps

As your application grows, consider:
- Adding automated tests
- Setting up CI/CD
- Adding git hooks
- Implementing feature flags
- Adding monitoring tools
