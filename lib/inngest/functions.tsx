import { inngest } from "./client";
import { connectToDatabase } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { EmailDigest } from "@/components/email/EmailDigest";
import { config } from "@/lib/data";
import { ObjectId } from "mongodb";

export const sendEmailDigest = inngest.createFunction(
  { id: "send-email-digest", concurrency: 1 },
  { cron: "*/30 * * * *" }, // Every 30 minutes
  async ({ step }) => {
    const submissions = await step.run("fetch-unprocessed-submissions", async () => {
      const { db } = await connectToDatabase();

      const [quotes, contacts] = await Promise.all([
        db.collection('quotes').find({ processed: false }).toArray(),
        db.collection('contact_us_requests').find({ processed: false }).toArray(),
      ]);

      console.log(`[Inngest] Found ${quotes.length} quotes and ${contacts.length} contacts unprocessed.`);

      const merged = [
        ...quotes.map((q: any) => ({ ...q, type: 'quote' })),
        ...contacts.map((c: any) => ({ ...c, type: 'contact' })),
      ].sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

      console.log(`[Inngest] Total merged submissions: ${merged.length}`);
      return JSON.parse(JSON.stringify(merged)); // Ensure it's serializable
    });

    if (submissions.length === 0) {
      console.log('[Inngest] No new submissions. Skipping email.');
      return { message: "No new submissions to send" };
    }

    console.log(`[Inngest] Attempting to send email for ${submissions.length} submissions...`);

    await step.run("send-digest-email", async () => {
      const { success, error } = await sendEmail({
        to: config.site.email,
        subject: `[Inngest] New Service Requests Digest - ${submissions.length} new items`,
        react: <EmailDigest submissions={submissions as any} />,
      });

      console.log(`[Inngest] Email send result: success=${success}`, error ? `error=${error}` : '');

      if (!success) {
        throw new Error(error as any || "Failed to send email");
      }
    });

    console.log('[Inngest] Marking submissions as processed...');
    await step.run("mark-as-processed", async () => {
      const { db } = await connectToDatabase();

      const quoteIds = submissions
        .filter((s: any) => s.type === 'quote')
        .map((s: any) => new ObjectId(s._id));

      const contactIds = submissions
        .filter((s: any) => s.type === 'contact')
        .map((s: any) => new ObjectId(s._id));

      const markProcessedAt = new Date();

      const results = await Promise.all([
        quoteIds.length > 0 ? db.collection('quotes').updateMany(
          { _id: { $in: quoteIds as any } },
          { $set: { processed: true, processedAt: markProcessedAt } }
        ) : Promise.resolve({ modifiedCount: 0 }),
        contactIds.length > 0 ? db.collection('contact_us_requests').updateMany(
          { _id: { $in: contactIds as any } },
          { $set: { processed: true, processedAt: markProcessedAt } }
        ) : Promise.resolve({ modifiedCount: 0 }),
      ]);

      console.log(`[Inngest] Marked ${results[0].modifiedCount} quotes and ${results[1].modifiedCount} contacts as processed.`);
    });

    return {
      success: true,
      count: submissions.length
    };
  }
);
