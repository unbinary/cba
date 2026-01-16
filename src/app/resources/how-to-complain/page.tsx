import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'How to File a CRTC Complaint',
  description: 'Step-by-step guide to filing a complaint with the CRTC about your broadcaster, cable provider, or telecommunications company.',
  keywords: ['CRTC complaint', 'how to complain CRTC', 'file complaint CRTC', 'broadcasting complaint Canada'],
};

export default function HowToComplainPage() {
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
              <span>How to Complain</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold">How to File a CRTC Complaint</h1>
            <p className="mt-6 text-xl text-gray-200">
              A step-by-step guide to making your voice heard with Canada&apos;s broadcasting regulator.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* What CRTC Handles */}
            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                What the CRTC Handles
              </h2>
              <p className="text-[var(--muted)]">
                The Canadian Radio-television and Telecommunications Commission (CRTC) regulates
                broadcasting and telecommunications in Canada. They handle complaints about:
              </p>
              <ul className="text-[var(--muted)] space-y-2 mt-4">
                <li>Television and radio broadcasters</li>
                <li>Cable, satellite, and IPTV providers</li>
                <li>Internet service providers</li>
                <li>Phone and wireless services</li>
                <li>Unsolicited telecommunications (spam calls, texts)</li>
              </ul>
              <p className="text-[var(--muted)] mt-4">
                <strong>Note:</strong> For billing disputes with your provider, you may want to
                start with the{' '}
                <a
                  href="https://www.ccts-cprst.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Commission for Complaints for Telecom-television Services (CCTS)
                </a>
                , which handles individual consumer complaints.
              </p>
            </div>

            {/* Step by Step */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Step-by-Step Process
              </h2>
              <div className="mt-6 space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Contact Your Provider First
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      Before filing with the CRTC, attempt to resolve the issue directly with
                      your broadcaster or service provider. Document the date, who you spoke
                      with, and the response. This shows you&apos;ve made a good-faith effort.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Gather Your Information
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">Before filing, collect:</p>
                    <ul className="mt-2 text-[var(--muted)] list-disc pl-5 space-y-1">
                      <li>Your account number (if applicable)</li>
                      <li>Dates and times of the incidents</li>
                      <li>Names of the broadcaster, channel, or service</li>
                      <li>Documentation of your complaint to the provider</li>
                      <li>Any relevant screenshots, bills, or recordings</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      File Your Complaint Online
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      The easiest way to file is through the CRTC&apos;s online complaint form.
                      You&apos;ll need to select the type of complaint and provide details about
                      your issue.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://applications.crtc.gc.ca/RapidCCM/en/Support"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
                      >
                        Go to CRTC Complaint Form
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Write a Clear Description
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      When describing your complaint:
                    </p>
                    <ul className="mt-2 text-[var(--muted)] list-disc pl-5 space-y-1">
                      <li>Be specific about what happened</li>
                      <li>Include dates, times, and channel/service names</li>
                      <li>Explain how it violates regulations (if you know)</li>
                      <li>State what resolution you&apos;re seeking</li>
                      <li>Keep it factual - avoid emotional language</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">
                      Submit and Track
                    </h3>
                    <p className="mt-2 text-[var(--muted)]">
                      After submitting, you&apos;ll receive a confirmation number. Keep this for
                      your records. The CRTC will review your complaint and may contact you
                      for additional information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens After */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                What Happens After You File
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  The CRTC reviews all complaints but doesn&apos;t resolve individual disputes
                  like a court would. Instead, they:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Track patterns:</strong> Multiple complaints about the same issue
                    can trigger investigations or policy changes
                  </li>
                  <li>
                    <strong>Inform licence renewals:</strong> Complaints become part of a
                    broadcaster&apos;s record when their licence is reviewed
                  </li>
                  <li>
                    <strong>Enforce regulations:</strong> Serious or repeated violations can
                    result in penalties or licence conditions
                  </li>
                </ul>
                <p>
                  Even if you don&apos;t get an immediate resolution, your complaint matters. It
                  creates an official record and contributes to the CRTC&apos;s understanding
                  of industry practices.
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-[var(--foreground)]">Tips for Effective Complaints</h2>
              <ul className="mt-4 space-y-3 text-[var(--muted)]">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reference specific CRTC regulations if you can - it shows you understand the rules</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keep copies of everything you submit</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Be patient - regulatory processes take time</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Encourage others with similar issues to file their own complaints</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                href="https://applications.crtc.gc.ca/RapidCCM/en/Support"
                variant="primary"
                size="lg"
              >
                File a Complaint
              </Button>
              <Button href="/resources/how-to-intervene" variant="secondary" size="lg">
                Learn About Interventions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
