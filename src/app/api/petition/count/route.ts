import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const count = await kv.get<number>('petition:count') || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Petition count error:', error);
    return NextResponse.json({ count: 0 });
  }
}
