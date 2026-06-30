/**
 * Simple, robust helper to validate incoming email formats.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Standard data check structure for incoming voice registration payloads.
 */
export interface IdentityValidationPayload {
  phoneNumber: string;
  fullName: string;
}

export function validateIdentityPayload(payload: Partial<IdentityValidationPayload>): boolean {
  return !!(payload.phoneNumber && payload.phoneNumber.length >= 8 && payload.fullName);
}