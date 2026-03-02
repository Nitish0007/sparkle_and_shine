/**
 * Form Submission Utilities
 * 
 * Since this is a static site, form submissions are stored in localStorage.
 * For production, you would want to:
 * 1. Set up a backend API endpoint
 * 2. Use a service like Formspree, Netlify Forms, or similar
 * 3. Set up email/SMS notifications via services like:
 *    - SendGrid, Resend, or AWS SES for emails
 *    - Twilio for SMS
 *    - Or use a service like Zapier/Make.com to connect forms to notifications
 * 
 * For hourly notifications, you could:
 * - Use a cron job service (Vercel Cron, GitHub Actions, etc.) to check for new submissions
 * - Use a serverless function to batch process submissions
 * - Integrate with a notification service
 */

export interface QuoteSubmission {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  message: string;
  timestamp: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEYS = {
  QUOTES: "quoteSubmissions",
  CONTACTS: "contactSubmissions",
} as const;

export function saveQuoteSubmission(submission: Omit<QuoteSubmission, "timestamp">): void {
  if (typeof window === "undefined") return;
  
  const submissions = getQuoteSubmissions();
  submissions.push({
    ...submission,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(submissions));
}

export function getQuoteSubmissions(): QuoteSubmission[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEYS.QUOTES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveContactSubmission(submission: Omit<ContactSubmission, "timestamp">): void {
  if (typeof window === "undefined") return;
  
  const submissions = getContactSubmissions();
  submissions.push({
    ...submission,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(submissions));
}

export function getContactSubmissions(): ContactSubmission[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Get submissions from the last hour
 * Useful for hourly notification batching
 */
export function getRecentSubmissions(hours: number = 1): {
  quotes: QuoteSubmission[];
  contacts: ContactSubmission[];
} {
  const now = new Date();
  const cutoff = new Date(now.getTime() - hours * 60 * 60 * 1000);
  
  const quotes = getQuoteSubmissions().filter(
    (sub) => new Date(sub.timestamp) >= cutoff
  );
  
  const contacts = getContactSubmissions().filter(
    (sub) => new Date(sub.timestamp) >= cutoff
  );
  
  return { quotes, contacts };
}
