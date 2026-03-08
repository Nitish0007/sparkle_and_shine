import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { db } = await connectToDatabase();

    const submission = {
      ...body,
      createdAt: new Date(),
      processed: false,
    };

    await db.collection('quotes').insertOne(submission);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 });
  }
}
