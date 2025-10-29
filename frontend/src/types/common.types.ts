/**
 * Common types used throughout the application
 */

export interface User {
  id: string;
  name: string;
  email: string;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}
