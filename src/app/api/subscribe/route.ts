import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

interface Subscriber {
  email: string;
  firstName?: string;
  postalCode?: string;
  source: string;
  subscribedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, postalCode, source = 'general' } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if already subscribed
    const existing = await kv.hget('email:subscribers', normalizedEmail);
    if (existing) {
      // Already subscribed is fine, just return success
      return NextResponse.json({ success: true, message: 'Already subscribed' });
    }

    // Create subscriber record
    const subscriber: Subscriber = {
      email: normalizedEmail,
      firstName: firstName?.trim() || undefined,
      postalCode: postalCode?.trim() || undefined,
      source,
      subscribedAt: new Date().toISOString(),
    };

    // Store subscriber
    await kv.hset('email:subscribers', { [normalizedEmail]: JSON.stringify(subscriber) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
