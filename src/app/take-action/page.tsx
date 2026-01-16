import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, EmailSignup } from '@/components';

export const metadata: Metadata = {
  title: 'Take Action',
  description: 'Join Canadians demanding accountability from broadcasters. Sign petitions, contact the CRTC, and make your voice heard.',
};

export default function TakeActionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Take Action</h1>
            <p className="mt-6 text-xl text-gray-200">
              Your voice matters. Here&apos;s how you can help hold Canadian broadcasters accountable.
            </p>
          </div>
        </div>
      </section>

      {/* Current Campaign */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
              Current Campaign
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--foreground)]">
              Stop Forced Pay Audio Bundling
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Millions of Canadians pay for Stingray Music through their cable bill - whether
              they use it or not. We&apos;re asking the CRTC to give consumers a real choice.
            </p>
            <div className="mt-6">
              <Button href="/issues/pay-audio#petition" variant="accent" size="lg">
                Sign the Petition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Other Ways to Help</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                File a CRTC Complaint
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                Have a specific issue with your broadcaster or cable provider? The CRTC accepts
                complaints from the public. We&apos;ve created a guide to help you through the process.
              </p>
              <div className="mt-4">
                <Link
                  href="/resources/how-to-complain"
                  className="text-[var(--primary)] font-medium hover:underline"
                >
                  Learn how to file a complaint &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Intervene in CRTC Hearings
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                When broadcasters apply to renew their licences, the public can submit comments.
                Your intervention becomes part of the official record.
              </p>
              <div className="mt-4">
                <Link
                  href="/resources/how-to-intervene"
                  className="text-[var(--primary)] font-medium hover:underline"
                >
                  Learn how to intervene &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Share Your Story
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                Have you tried to remove unwanted services from your cable bill? Encountered
                misleading practices? Your story helps us document patterns of non-compliance.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-[var(--primary)] font-medium hover:underline"
                >
                  Contact us &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Spread the Word
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                Share our petition with friends and family. The more Canadians who speak up,
                the harder it is for regulators to ignore us.
              </p>
              <div className="mt-4">
                <Link
                  href="/issues/pay-audio"
                  className="text-[var(--primary)] font-medium hover:underline"
                >
                  Get shareable link &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] text-center">
              Stay Informed
            </h2>
            <p className="mt-4 text-center text-[var(--muted)]">
              Get updates on campaigns, CRTC proceedings, and opportunities to take action.
            </p>
            <div className="mt-8">
              <EmailSignup
                heading="Join Our Email List"
                description="We'll let you know when there are opportunities to make your voice heard."
                showPostalCode={true}
                source="take-action"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tip Line */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--primary)] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold">Know Something?</h2>
              <p className="mt-4 text-gray-200">
                Do you have information about broadcaster misconduct, broken promises, or
                regulatory violations? We want to hear from you. All tips are treated
                confidentially.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="accent">
                  Contact Us Confidentially
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
