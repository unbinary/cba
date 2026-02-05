import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'Consumer Choice in Canadian Broadcasting',
  description: 'Learn about your rights as a Canadian cable subscriber. Understand what the CRTC promised with consumer choice regulations and how to exercise your rights.',
  keywords: ['consumer choice', 'CRTC', 'cable TV', 'broadcasting rights', 'pick and pay', 'skinny basic', 'TV packages'],
  alternates: {
    canonical: 'https://cba-tv.ca/resources/consumer-choice',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is skinny basic in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skinny basic is a low-cost entry-level TV package that Canadian cable and satellite providers must offer. It includes local channels, educational channels, and some basic services for a maximum of $25/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pick individual TV channels in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, since 2016 the CRTC requires providers to offer channels on a pick-and-pay basis, allowing you to add individual channels to your basic package. However, some services may still be bundled in ways that limit true choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my cable company won\'t remove a service from my bill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, ask your provider directly to remove the service. If they refuse, you can file a complaint with the CCTS (Commission for Complaints for Telecom-television Services), which handles billing disputes between consumers and TV providers.',
      },
    },
  ],
};

export default function ConsumerChoicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-300 mb-4">
              <Link href="/resources" className="hover:text-white">
                Resources
              </Link>
              <span className="mx-2">/</span>
              <span>Consumer Choice</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold">
              Your Rights as a Cable Subscriber
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Understanding consumer choice in Canadian broadcasting and how to exercise your rights.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg">
              <p className="text-[var(--muted)] text-lg">
                In 2015, the CRTC announced sweeping changes to how Canadians buy television
                services. The &quot;Let&apos;s Talk TV&quot; decision was supposed to give you more
                control over what you pay for. Here&apos;s what you need to know about your rights
                and how to exercise them.
              </p>
            </div>

            {/* What Was Promised */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                What the CRTC Promised
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                The 2015 &quot;Let&apos;s Talk TV&quot; decision (Broadcasting Regulatory Policy CRTC 2015-96)
                established several consumer protections:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Skinny Basic</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Providers must offer a low-cost entry-level package (max $25/month) with local
                      stations and basic channels. You have the right to this affordable starting point.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Pick and Pay</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      You can add individual channels to your package rather than being forced to
                      buy large bundles. Channels must be available on a standalone basis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Small Bundles</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      If providers offer bundles, they must also offer smaller packages (max 10 channels)
                      so you can build a package that fits your needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Clear Billing</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Your bill should clearly show what you&apos;re paying for. Services should be
                      itemized so you can see where your money goes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Gap */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                The Gap Between Promise and Reality
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                While the 2015 decision was a step forward, implementation has fallen short in
                several areas:
              </p>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Regulatory loopholes</strong> allow certain services to be bundled into
                    packages without explicit subscriber consent
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Difficult removal processes</strong> make it hard for subscribers to
                    remove services they don&apos;t want
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Confusing billing</strong> can hide the cost of individual services
                    within package prices
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Lack of awareness</strong> means many subscribers don&apos;t know what
                    they&apos;re paying for or that they can request changes
                  </span>
                </li>
              </ul>
            </div>

            {/* Know Your Rights */}
            <div className="mt-12 p-6 bg-[var(--primary)]/5 rounded-lg border border-[var(--primary)]/20">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Know Your Rights
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                As a Canadian cable or satellite TV subscriber, you have the right to:
              </p>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Request the skinny basic package at $25/month or less</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Add channels individually rather than in large bundles</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Know exactly what services you&apos;re paying for</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Request removal of services you didn&apos;t explicitly choose</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>File a complaint if your provider doesn&apos;t honour your choices</span>
                </li>
              </ul>
            </div>

            {/* How to Exercise Your Rights */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                How to Exercise Your Rights
              </h2>
              <div className="mt-6 space-y-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Step 1: Review Your Bill
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Look carefully at your monthly statement. Identify every service you&apos;re being
                    charged for. Do you use all of them? Did you explicitly request each one?
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Step 2: Contact Your Provider
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Call your cable or satellite provider. Ask about switching to skinny basic or
                    removing services you don&apos;t want. Document who you spoke with, when, and what
                    they said.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Step 3: Escalate If Needed
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    If your provider refuses to remove a service or make requested changes, you can
                    file a complaint with the CCTS. They handle disputes between consumers and TV
                    service providers.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="/resources/how-to-complain"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      Learn how to file a complaint &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    What is skinny basic?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Skinny basic is a low-cost entry-level TV package that Canadian cable and
                    satellite providers must offer. It includes local channels, educational
                    channels, and some basic services for a maximum of $25/month. It&apos;s designed
                    to give you an affordable starting point from which you can add only the
                    channels you want.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Can I pick individual TV channels?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Yes. Since 2016, the CRTC requires providers to offer channels on a pick-and-pay
                    basis. You can add individual channels to your basic package. However, some
                    services may still be bundled in ways that limit true choice, which is why
                    we&apos;re advocating for stronger consumer protections.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    What if my provider won&apos;t remove a service?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    First, document your request and their refusal. Then file a complaint with the
                    CCTS. They can investigate and may be able to help resolve the dispute. Even if
                    your individual complaint doesn&apos;t result in immediate change, it creates an
                    official record that can support broader regulatory action.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Why are some services impossible to remove?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Some services have negotiated distribution arrangements that allow them to be
                    bundled into packages without individual subscriber consent. This is a loophole
                    in the current regulations that we&apos;re working to close.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                Help Us Strengthen Consumer Choice
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                The current regulations have gaps that limit real consumer choice. Join us in
                calling on the CRTC to close the loopholes and deliver on the promise of true
                pick-and-pay television.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button href="/petition" variant="primary">
                  Sign the Petition
                </Button>
                <Button href="/resources/how-to-complain" variant="secondary">
                  File a Complaint
                </Button>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[var(--foreground)]">Related Resources</h2>
              <ul className="mt-4 space-y-2 text-[var(--muted)]">
                <li>
                  <Link href="/resources/how-to-complain" className="text-[var(--primary)] hover:underline">
                    How to File a Complaint
                  </Link>
                  {' '}- Step-by-step guide to CRTC and CCTS complaints
                </li>
                <li>
                  <Link href="/resources/how-to-intervene" className="text-[var(--primary)] hover:underline">
                    How to Intervene in CRTC Hearings
                  </Link>
                  {' '}- Make your voice heard in regulatory proceedings
                </li>
                <li>
                  <a
                    href="https://crtc.gc.ca/eng/archive/2015/2015-96.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    CRTC 2015-96 Decision
                  </a>
                  {' '}- The original Let&apos;s Talk TV decision (external link)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
