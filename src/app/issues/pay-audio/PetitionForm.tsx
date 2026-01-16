'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components';

export default function PetitionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    postalCode: '',
    shareStory: '',
  });
  const [signatureCount, setSignatureCount] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch current signature count
    fetch('/api/petition/count')
      .then((res) => res.json())
      .then((data) => setSignatureCount(data.count))
      .catch(() => setSignatureCount(null));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/petition/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus('success');
        setMessage('Thank you for signing! Your voice matters.');
        setSignatureCount(data.count);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          postalCode: '',
          shareStory: '',
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to sign petition');
      }
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'postalCode' ? value.toUpperCase() : value,
    }));
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-green-800">{message}</h3>
        {signatureCount && (
          <p className="mt-2 text-green-700">
            You are one of <strong>{signatureCount.toLocaleString()}</strong> Canadians demanding choice.
          </p>
        )}
        <p className="mt-4 text-sm text-green-600">
          Share this petition with friends and family to amplify your voice.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--border)] rounded-lg p-6 md:p-8 shadow-sm">
      {/* Signature Counter */}
      {signatureCount !== null && signatureCount > 0 && (
        <div className="mb-6 text-center pb-6 border-b border-[var(--border)]">
          <p className="text-4xl font-bold text-[var(--primary)]">
            {signatureCount.toLocaleString()}
          </p>
          <p className="text-sm text-[var(--muted)]">Canadians have signed</p>
        </div>
      )}

      <h3 className="text-xl font-semibold text-[var(--foreground)]">
        Sign the Petition
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Give Canadians the right to remove pay audio from their cable bills.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[var(--foreground)]">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[var(--foreground)]">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">
            We&apos;ll keep you updated on this campaign. Unsubscribe anytime.
          </p>
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-[var(--foreground)]">
            Postal code <span className="text-[var(--muted)]">(optional)</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            maxLength={7}
            placeholder="A1A 1A1"
            className="mt-1 w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">
            Helps us show geographic support across Canada.
          </p>
        </div>

        <div>
          <label htmlFor="shareStory" className="block text-sm font-medium text-[var(--foreground)]">
            Share your story <span className="text-[var(--muted)]">(optional)</span>
          </label>
          <textarea
            id="shareStory"
            name="shareStory"
            rows={3}
            value={formData.shareStory}
            onChange={handleChange}
            placeholder="Have you tried to remove Stingray Music from your bill? What happened?"
            className="mt-1 w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
          />
        </div>

        {status === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{message}</p>
          </div>
        )}

        <Button type="submit" variant="accent" size="lg" className="w-full" disabled={status === 'loading'}>
          {status === 'loading' ? 'Signing...' : 'Sign the Petition'}
        </Button>

        <p className="text-xs text-center text-[var(--muted)]">
          By signing, you agree to receive email updates from CBA. You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
