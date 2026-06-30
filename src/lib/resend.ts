import { Resend } from 'resend';

// Initializes the Resend Email client using your environment variables
export const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');