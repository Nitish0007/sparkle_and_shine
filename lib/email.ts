import { Resend } from 'resend';
import { config } from './data';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to = config.site.email,
  subject,
  react,
}: {
  to?: string | string[];
  subject: string;
  react: React.ReactNode;
}) {
  try {
    console.log(`[Email] Sending email to ${to} with subject: ${subject}`);
    const { data, error } = await resend.emails.send({
      from: `Sparkle & Shine <${config.site.from_email}>`,
      to,
      subject,
      react,
    });

    if (error) {
      console.error('[Email] Resend error:', error);
      return { success: false, error };
    }

    console.log(`[Email] Resend success:`, JSON.stringify(data));
    return { success: true, data };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}
