import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

interface PetitionSignature {
  firstName: string;
  lastName: string;
  email: string;
  postalCode?: string;
  shareStory?: string;
  signedAt: string;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, postalCode, shareStory } = body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: 'First name, last name, and email are required' },
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

    // Check if email already signed
    const existingSignature = await kv.hget('petition:signatures', email.toLowerCase());
    if (existingSignature) {
      return NextResponse.json(
        { message: 'This email has already signed the petition' },
        { status: 400 }
      );
    }

    // Create signature record
    const signature: PetitionSignature = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      postalCode: postalCode?.trim() || undefined,
      shareStory: shareStory?.trim() || undefined,
      signedAt: new Date().toISOString(),
    };

    // Store signature and increment count
    await kv.hset('petition:signatures', { [signature.email]: JSON.stringify(signature) });
    const count = await kv.incr('petition:count');

    // Also add to email list for updates
    await kv.hset('email:subscribers', {
      [signature.email]: JSON.stringify({
        email: signature.email,
        firstName: signature.firstName,
        postalCode: signature.postalCode,
        source: 'petition',
        subscribedAt: signature.signedAt,
      }),
    });

    return NextResponse.json({ success: true, count });
  } catch (error) {
    console.error('Petition sign error:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
