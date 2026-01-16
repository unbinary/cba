import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'Issues',
  description: 'Learn about the broadcasting accountability issues CBA is working on, including pay audio bundling, tangible benefits compliance, and Canadian content obligations.',
};

const issues = [
  {
    title: 'Pay Audio Bundling',
    description:
      'Millions of Canadians pay for Stingray Music through their cable bill - whether they use it or not. We\'re asking the CRTC to give consumers a real choice.',
    href: '/issues/pay-audio',
    status: 'Active Campaign',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    title: 'Tangible Benefits Compliance',
    description:
      'When broadcasters are sold or merged, they commit to "tangible benefits" for Canadian content. Too often, these promises go unfulfilled.',
    href: '/issues/tangible-benefits',
    status: 'Coming Soon',
    statusColor: 'bg-gray-100 text-gray-600',
  },
  {
    title: 'Canadian Content Obligations',
    description:
      'Broadcasters are required to air Canadian content as a condition of their licence. Are they meeting their commitments?',
    href: '/issues/canadian-content',
    status: 'Coming Soon',
    statusColor: 'bg-gray-100 text-gray-600',
  },
];

export default function IssuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Issues</h1>
            <p className="mt-6 text-xl text-gray-200">
              We focus on holding Canadian broadcasters accountable to their licence conditions
              and the promises they make to the public.
            </p>
          </div>
        </div>
      </section>

      {/* Issues List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {issues.map((issue) => (
              <div
                key={issue.title}
                className="border border-[var(--border)] rounded-lg p-6 md:p-8 hover:border-[var(--primary)]/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-bold text-[var(--foreground)]">
                        {issue.title}
                      </h2>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${issue.statusColor}`}
                      >
                        {issue.status}
                      </span>
                    </div>
                    <p className="mt-3 text-[var(--muted)]">{issue.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {issue.status === 'Active Campaign' ? (
                      <Button href={issue.href} variant="primary">
                        Learn More
                      </Button>
                    ) : (
                      <span className="text-sm text-[var(--muted)]">Details coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest an Issue */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Know of Another Issue?
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              If you&apos;re aware of broadcaster non-compliance or consumer harm that we should
              be tracking, we want to hear from you.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
