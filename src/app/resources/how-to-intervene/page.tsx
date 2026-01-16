import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'How to Intervene in CRTC Hearings',
  description: 'Learn how to participate in CRTC proceedings, file interventions during licence renewals, and make your voice heard on broadcasting policy.',
  keywords: ['CRTC intervention', 'how to intervene CRTC hearing', 'CRTC licence renewal', 'broadcasting hearing Canada'],
};

export default function HowToIntervenePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-300 mb-4">
              <Link href="/resources" className="hover:text-white">
                Resources
              </Link>
              <span className="mx-2">/</span>
              <span>How to Intervene</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold">How to Intervene in CRTC Hearings</h1>
            <p className="mt-6 text-xl text-gray-200">
              Your guide to participating in CRTC proceedings and shaping broadcasting policy.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* What is an Intervention */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                What is an Intervention?
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  An intervention is a formal submission to the CRTC during a public proceeding.
                  When broadcasters apply for new licences, renewals, or changes to their
                  operations, the CRTC opens a window for public comment.
                </p>
                <p>
                  Your intervention becomes part of the official record. The CRTC is required
                  to consider all interventions when making their decision. Unlike a complaint,
                  an intervention directly influences regulatory outcomes.
                </p>
              </div>
            </div>

            {/* When You Can Intervene */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                When You Can Intervene
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>The CRTC accepts interventions during:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Licence renewals:</strong> When a broadcaster&apos;s licence expires
                    (typically every 5-7 years), they must apply for renewal
                  </li>
                  <li>
                    <strong>New licence applications:</strong> When someone wants to start a
                    new broadcasting service
                  </li>
                  <li>
                    <strong>Ownership transfers:</strong> When broadcasters are bought or sold
                  </li>
                  <li>
                    <strong>Policy consultations:</strong> When the CRTC is developing new
                    regulations or reviewing existing ones
                  </li>
                  <li>
                    <strong>Amendments:</strong> When broadcasters request changes to their
                    licence conditions
                  </li>
                </ul>
              </div>
            </div>

            {/* How to Find Proceedings */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                How to Find Open Proceedings
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  The CRTC publishes all open proceedings on their website. Each Notice of
                  Consultation includes the deadline for interventions and instructions for
                  participating.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <a
                    href="https://crtc.gc.ca/eng/consultation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
                  >
                    View Open CRTC Consultations
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p>
                  You can also sign up for CBA&apos;s email list. We monitor CRTC proceedings and
                  alert our community when important opportunities arise.
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Step-by-Step Filing Process
              </h2>
              <div className="mt-6 space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Read the Notice of Consultation
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      Each proceeding has a Notice that explains what&apos;s being decided, the
                      deadline for interventions, and specific questions the CRTC wants
                      addressed. Read it carefully.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Review the Application
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      For licence renewals and applications, the broadcaster&apos;s submission is
                      usually available on the CRTC website. This tells you what they&apos;re
                      promising and requesting.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Write Your Intervention
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">Your intervention should include:</p>
                    <ul className="mt-2 text-[var(--muted)] list-disc pl-5 space-y-1">
                      <li>Your name and contact information</li>
                      <li>The proceeding number (from the Notice)</li>
                      <li>Whether you support or oppose the application</li>
                      <li>Your specific concerns or comments</li>
                      <li>Any requests you have for conditions or changes</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Submit Before the Deadline
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      Interventions can be submitted through the CRTC&apos;s online portal. Make
                      sure you submit before the deadline - late interventions are not accepted.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://services.crtc.gc.ca/pub/instances-proceedings/Default-Defaut.aspx?Lang=eng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
                      >
                        CRTC Intervention Portal
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Consider Appearing at a Hearing
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      For major proceedings, the CRTC holds oral hearings where interveners
                      can present in person. When you file your intervention, indicate if
                      you want to appear. This is optional but can be more impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                Tips for Effective Interventions
              </h2>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Be specific:</strong> General concerns are less persuasive than
                    concrete examples and data
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Reference the regulations:</strong> Cite relevant CRTC policies
                    and Broadcasting Act objectives
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Propose solutions:</strong> Don&apos;t just criticize - suggest
                    specific conditions or requirements
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Stay factual:</strong> Emotional appeals are less effective than
                    documented evidence
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Coordinate with others:</strong> Multiple aligned interventions
                    demonstrate broader public concern
                  </span>
                </li>
              </ul>
            </div>

            {/* What Happens */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                What Happens to Your Intervention
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  All interventions are published on the CRTC website (unless you request
                  confidentiality for sensitive information). The applicant has an opportunity
                  to respond to interventions.
                </p>
                <p>
                  CRTC commissioners review all interventions before making their decision.
                  While they don&apos;t respond individually, interventions directly influence
                  outcomes - especially when multiple people raise the same concerns.
                </p>
                <p>
                  The final decision will reference significant interventions and explain
                  how the CRTC considered public input.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                href="https://crtc.gc.ca/eng/consultation/"
                variant="primary"
                size="lg"
              >
                View Open Proceedings
              </Button>
              <Button href="/take-action" variant="secondary" size="lg">
                Join Our Email List
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
