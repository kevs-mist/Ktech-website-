import { Resend } from 'resend';

// PRD Section 11 — Contact Form Success Criteria
// Uses Resend API for email delivery
export const resend = new Resend(process.env.RESEND_API_KEY);
