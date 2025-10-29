# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Code Quality

Before committing, ensure your code passes all quality checks:

```bash
# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Check code formatting
npm run format:check

# Format code
npm run format
```

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Coding Standards

### File Structure

- Use PascalCase for component files (e.g., `Button.tsx`)
- Use camelCase for utility files (e.g., `formatDate.ts`)
- Each component should be in its own directory with an `index.ts` export file

### Component Guidelines

- Use functional components with hooks
- Document components with JSDoc comments
- Use TypeScript for type safety
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

### Code Style

- Follow the ESLint and Prettier configurations
- Use meaningful variable and function names
- Write self-documenting code
- Add comments for complex logic
- Keep functions small and focused

### Import Organization

1. React and third-party libraries
2. Type imports (using `import type`)
3. Internal imports using `@/` aliases
4. Relative imports

Example:
```typescript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from 'react';

import { Button } from '@/components';
import { ROUTES } from '@/constants';
import type { ApiResponse } from '@/types';

import { helperFunction } from './utils';
```

## Pull Request Process

1. Update documentation if you're adding new features
2. Ensure all tests pass and code is properly formatted
3. Update the README.md if needed
4. Write a clear PR description explaining your changes
5. Link any relevant issues

### PR Title Format

Use conventional commit format:
- `feat: Add new feature`
- `fix: Fix bug description`
- `docs: Update documentation`
- `style: Code style changes`
- `refactor: Code refactoring`
- `test: Add or update tests`
- `chore: Maintenance tasks`

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Ask in pull request comments
- Reach out to maintainers

Thank you for contributing!
