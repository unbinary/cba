'use client';

import { useState } from 'react';
import Button from './Button';

interface EmailSignupProps {
  heading?: string;
  description?: string;
  showPostalCode?: boolean;
  source?: string;
}

export default function EmailSignup({
  heading = 'Stay Updated',
  description = 'Get notified about campaign updates and opportunities to take action.',
  showPostalCode = false,
  source = 'general',
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, postalCode, source }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for signing up! We\'ll be in touch.');
        setEmail('');
        setPostalCode('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{heading}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{description}</p>

      {status === 'success' ? (
        <p className="mt-4 text-sm text-green-600 font-medium">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            />
          </div>

          {showPostalCode && (
            <div>
              <label htmlFor="postalCode" className="sr-only">
                Postal code (optional)
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal code (optional)"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                maxLength={7}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
            </div>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-600">{message}</p>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={status === 'loading'}>
            {status === 'loading' ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
      )}
    </div>
  );
}
