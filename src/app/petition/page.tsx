import type { Metadata } from 'next';
import Link from 'next/link';
import { EmailSignup } from '@/components';

export const metadata: Metadata = {
  title: 'Sign the Petition - Consumer Choice in Broadcasting',
  description: 'Join thousands of Canadians demanding the right to choose what services appear on their cable bills. Sign our petition for consumer choice.',
  keywords: ['petition', 'consumer choice', 'cable bills', 'CRTC', 'broadcasting', 'unwanted services'],
  alternates: {
    canonical: 'https://cba-tv.ca/petition',
  },
};

export default function PetitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Canadians Deserve Choice
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Millions of cable subscribers are paying for services they never asked for and cannot
              remove. It&apos;s time to demand real consumer choice.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Reminder */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-4 border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)]">81%</div>
              <p className="mt-1 text-sm text-[var(--muted)]">wouldn&apos;t pay if given a choice</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)]">61%</div>
              <p className="mt-1 text-sm text-[var(--muted)]">have never used the service</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)]">46%</div>
              <p className="mt-1 text-sm text-[var(--muted)]">didn&apos;t know they were paying</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)]">4%</div>
              <p className="mt-1 text-sm text-[var(--muted)]">would choose it over alternatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Petition Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: The Ask */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">
                What We&apos;re Asking For
              </h2>
              <div className="mt-6 space-y-6 text-[var(--muted)]">
                <p>
                  In 2015, the CRTC promised Canadians a new era of consumer choice in television.
                  The &quot;Let&apos;s Talk TV&quot; decision was supposed to give subscribers more control
                  over what they pay for.
                </p>
                <p>
                  But loopholes in the regulations have allowed certain services to be bundled into
                  cable packages without subscriber consent. Canadians are paying for services they
                  never requested, don&apos;t use, and cannot remove.
                </p>
                <p className="font-semibold text-[var(--foreground)]">
                  We&apos;re calling on the CRTC to close these loopholes and deliver on the promise
                  of real consumer choice.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[var(--foreground)]">Our Demands:</h3>
                <ul className="mt-4 space-y-3 text-[var(--muted)]">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No service should appear on a bill without explicit subscriber consent</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Subscribers must be able to remove any optional service from their package</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Close the regulatory loopholes that allow forced bundling</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enforce transparency in cable billing practices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Sign Up Form */}
            <div>
              <div className="sticky top-8">
                <div className="bg-[var(--primary)] text-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold">Sign the Petition</h2>
                  <p className="mt-2 text-gray-200">
                    Add your name to show the CRTC that Canadians demand real choice.
                  </p>
                  <div className="mt-6">
                    <EmailSignup
                      heading="Add Your Name"
                      description="We'll keep you updated on the campaign and let you know when there are opportunities to take action."
                      showPostalCode={true}
                      source="petition"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-[var(--muted)]">
                  <p>
                    <strong>Your privacy:</strong> We will never sell or share your information.
                    Your postal code helps us show geographic support across Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">What Happens Next</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">We Gather Support</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Every signature strengthens our case. We&apos;ll build a coalition of Canadians
                who want real consumer choice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">We Intervene</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                When relevant CRTC proceedings occur, we&apos;ll submit formal interventions
                backed by the support of petition signers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">We Win Choice</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Our goal is to close the loopholes and give Canadians the consumer choice
                they were promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Other Ways to Help</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Link
              href="/resources/how-to-complain"
              className="block p-6 bg-gray-50 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--foreground)]">File a Complaint</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                If you&apos;re being charged for services you don&apos;t want, file a complaint with the CCTS.
                Every complaint creates an official record.
              </p>
              <span className="mt-3 inline-block text-[var(--primary)] font-medium">
                Learn how &rarr;
              </span>
            </Link>
            <Link
              href="/resources/consumer-choice"
              className="block p-6 bg-gray-50 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--foreground)]">Know Your Rights</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Learn about consumer protection in Canadian broadcasting and what the CRTC
                has promised subscribers.
              </p>
              <span className="mt-3 inline-block text-[var(--primary)] font-medium">
                Read more &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
