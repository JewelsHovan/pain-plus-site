/**
 * Application constants
 */

export * from './routes';
export * from './content';
export * from './articles';

export const APP_NAME = 'Art Therapy Plus';

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const STORAGE_KEYS = {
  THEME: 'theme',
  USER_PREFERENCES: 'user_preferences',
} as const;
