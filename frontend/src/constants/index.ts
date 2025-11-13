/**
 * Application constants
 */

export * from './routes';
export * from './content';
export * from './articles';

export const APP_NAME = 'Pain+';

// For production: uses '/api' (Azure SWA proxy)
// For local dev: set VITE_API_BASE_URL in .env.local to 'http://localhost:7071/api'
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const STORAGE_KEYS = {
  THEME: 'theme',
  USER_PREFERENCES: 'user_preferences',
} as const;
