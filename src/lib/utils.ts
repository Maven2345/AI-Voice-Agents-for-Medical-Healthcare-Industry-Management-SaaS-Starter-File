import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines dynamically conditional Tailwind CSS class names 
 * and cleanly resolves conflicting style choices.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}