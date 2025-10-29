# Features Directory

This directory is for organizing your application by feature/domain rather than by technical layer.

## When to Use Feature-Based Organization

Use feature-based organization when you have:
- Complex, self-contained features
- Multiple related components, hooks, and utilities for a specific domain
- Team members working on different features simultaneously

## Structure Example

```
features/
├── authentication/
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── services/
│   │   └── auth.service.ts
│   └── index.ts
├── dashboard/
│   ├── components/
│   │   ├── DashboardCard.tsx
│   │   └── StatsWidget.tsx
│   ├── hooks/
│   │   └── useDashboardData.ts
│   └── index.ts
└── profile/
    ├── components/
    │   └── ProfileForm.tsx
    ├── hooks/
    │   └── useProfile.ts
    └── index.ts
```

## Benefits

- **Cohesion**: Related code stays together
- **Scalability**: Easy to add new features without affecting others
- **Maintainability**: Clear boundaries between features
- **Reusability**: Shared components go in `/components`, feature-specific ones stay in features

## Guidelines

- Each feature should export its public API through `index.ts`
- Keep feature-specific code private to the feature
- Move truly shared code to the root-level directories
- Consider splitting large features into sub-features
