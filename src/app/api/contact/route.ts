import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
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

    // Create message record
    const contactMessage: ContactMessage = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject || 'general',
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Store message with timestamp-based key
    const messageId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    await kv.hset('contact:messages', { [messageId]: JSON.stringify(contactMessage) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
