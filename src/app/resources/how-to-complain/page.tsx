import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'How to File a CRTC Complaint',
  description: 'Step-by-step guide to filing broadcasting complaints with the CRTC. Learn when to use CRTC vs CCTS, what information you need, and what to expect.',
  keywords: ['CRTC complaint', 'how to complain CRTC', 'file complaint CRTC', 'broadcasting complaint Canada', 'CRTC complaint process', 'CCTS vs CRTC'],
  alternates: {
    canonical: 'https://cba-tv.ca/resources/how-to-complain',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a CRTC complaint take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CRTC typically acknowledges complaints within 10 business days and forwards them to the broadcaster. Full resolution can take weeks to months depending on complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my name shared with the broadcaster when I file a CRTC complaint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, broadcasters have the right to know who filed a complaint and to respond. You can request privacy protections under the Privacy Act, but this may limit the CRTC\'s ability to pursue your complaint.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between CRTC and CCTS complaints?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CRTC handles broadcasting content and regulatory issues. CCTS (Commission for Complaints for Telecom-television Services) handles billing disputes, contract issues, and service quality problems with TV service providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I complain about loud TV commercials in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The CRTC has rules requiring commercials to be broadcast at similar volume to adjacent programming. If you\'ve contacted your provider first, you can file a complaint with the CRTC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my CRTC complaint is successful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on the issue, the CRTC may require the broadcaster to address the problem, note it in their compliance record, or in serious cases, take enforcement action.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to file a CRTC complaint within a certain time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For content complaints, file within 4 weeks of broadcast because broadcasters only keep recordings for 4 weeks.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to File a CRTC Complaint',
  description: 'Step-by-step guide to filing a complaint with the CRTC about broadcasting issues in Canada.',
  totalTime: 'PT30M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Contact Your Provider First',
      text: 'Before filing with the CRTC, attempt to resolve the issue directly with your broadcaster or service provider. Document the date, who you spoke with, and the response.',
    },
    {
      '@type': 'HowToStep',
      name: 'Gather Your Information',
      text: 'Collect your account number, dates and times of incidents, names of the broadcaster or service, documentation of your complaint to the provider, and any relevant screenshots or bills.',
    },
    {
      '@type': 'HowToStep',
      name: 'File Your Complaint Online',
      text: 'Go to the CRTC online complaint form at applications.crtc.gc.ca. Select the type of complaint and provide details about your issue.',
      url: 'https://crtc.gc.ca/eng/contact/question.htm',
    },
    {
      '@type': 'HowToStep',
      name: 'Write a Clear Description',
      text: 'Be specific about what happened, include dates and times, explain how it violates regulations if you know, and state what resolution you are seeking. Keep it factual.',
    },
    {
      '@type': 'HowToStep',
      name: 'Submit and Track',
      text: 'After submitting, save your confirmation number. The CRTC will review your complaint and may contact you for additional information.',
    },
  ],
};

export default function HowToComplainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            {/* Introduction */}
            <div className="prose prose-lg">
              <p className="text-[var(--muted)] text-lg">
                As a Canadian consumer, you have the right to complain when broadcasters and
                service providers don&apos;t meet their obligations. This guide explains when and
                how to file a complaint, and what you can expect from the process.
              </p>
            </div>

            {/* Which Organization */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Which Organization Should You Contact?
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                Different organizations handle different types of complaints. Choosing the right
                one ensures your issue gets to people who can actually address it.
              </p>
              <div className="mt-6 space-y-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    CRTC (Canadian Radio-television and Telecommunications Commission)
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    The broadcasting regulator. Contact them for:
                  </p>
                  <ul className="mt-2 text-[var(--muted)] list-disc pl-5 space-y-1">
                    <li>Content issues (offensive material, accuracy concerns)</li>
                    <li>Licence condition violations</li>
                    <li>Canadian content requirements</li>
                    <li>Accessibility issues</li>
                    <li>Loud commercials</li>
                    <li>Systemic or regulatory concerns</li>
                  </ul>
                  <div className="mt-3">
                    <a
                      href="https://crtc.gc.ca/eng/contact/question.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      CRTC Complaint Form
                    </a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    CCTS (Commission for Complaints for Telecom-television Services)
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Handles individual consumer disputes with service providers. Contact them for:
                  </p>
                  <ul className="mt-2 text-[var(--muted)] list-disc pl-5 space-y-1">
                    <li>Billing disputes and incorrect charges</li>
                    <li>Contract issues and cancellation problems</li>
                    <li>Service quality problems</li>
                    <li>Equipment issues</li>
                    <li>Credit and collection disputes</li>
                  </ul>
                  <div className="mt-3">
                    <a
                      href="https://www.ccts-cprst.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      CCTS Website
                    </a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    CBSC (Canadian Broadcast Standards Council)
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Industry self-regulatory body for content standards. Contact them for:
                  </p>
                  <ul className="mt-2 text-[var(--muted)] list-disc pl-5 space-y-1">
                    <li>Offensive or inappropriate content on member stations</li>
                    <li>Violence or sexual content concerns</li>
                    <li>Portrayal of minorities or stereotypes</li>
                    <li>News accuracy and fairness</li>
                  </ul>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Note: Only covers member broadcasters. Check their website to confirm membership.
                  </p>
                  <div className="mt-3">
                    <a
                      href="https://www.cbsc.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      CBSC Website
                    </a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Other Organizations
                  </h3>
                  <ul className="mt-2 text-[var(--muted)] space-y-2">
                    <li>
                      <strong>Advertising Standards Canada:</strong> For misleading or deceptive
                      advertising content
                    </li>
                    <li>
                      <strong>Competition Bureau:</strong> For false or misleading business claims
                    </li>
                    <li>
                      <strong>Provincial consumer protection offices:</strong> For general consumer
                      rights issues
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Complaint Types */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Common Types of Broadcasting Complaints
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  The CRTC receives thousands of complaints each year. Here are some of the most
                  common issues Canadians raise:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Loud commercials:</strong> The CRTC has rules requiring commercials
                    to be broadcast at similar volume to adjacent programming. This is one of
                    the most frequent complaints.
                  </li>
                  <li>
                    <strong>Offensive content:</strong> Violence, sexual content, or discriminatory
                    material that you believe violates broadcasting standards.
                  </li>
                  <li>
                    <strong>Canadian content:</strong> Concerns that broadcasters aren&apos;t meeting
                    their Canadian content requirements.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Lack of closed captioning, described video,
                    or other accessibility features.
                  </li>
                  <li>
                    <strong>Licence violations:</strong> When broadcasters don&apos;t meet conditions
                    set out in their licences.
                  </li>
                  <li>
                    <strong>Unsolicited calls:</strong> Violations of the National Do Not Call List
                    or unwanted telemarketing.
                  </li>
                </ul>
              </div>
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
                        href="https://crtc.gc.ca/eng/contact/question.htm"
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
                What to Expect After Filing
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <h3 className="font-semibold text-lg text-[var(--foreground)]">Timeline</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Within 10 business days:</strong> The CRTC acknowledges your complaint
                    and assigns a file number
                  </li>
                  <li>
                    <strong>Forwarded to broadcaster:</strong> Your complaint is sent to the
                    broadcaster or provider, who has an opportunity to respond
                  </li>
                  <li>
                    <strong>Weeks to months:</strong> Full resolution can take weeks or even months
                    depending on the complexity of the issue
                  </li>
                </ul>

                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  Privacy Considerations
                </h3>
                <p>
                  Be aware that your name and complaint details will be shared with the
                  broadcaster. They have the right to know who complained and to respond. If
                  you have serious privacy concerns, you can request protections under the
                  Privacy Act, though this may limit the CRTC&apos;s ability to fully pursue
                  your complaint.
                </p>

                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  How the CRTC Uses Complaints
                </h3>
                <p>
                  The CRTC doesn&apos;t resolve individual disputes like a court would. Instead,
                  they use complaints to:
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

            {/* FAQ Prose Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    How long does a CRTC complaint take?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    The CRTC typically acknowledges complaints within 10 business days and forwards
                    them to the broadcaster. Full resolution can take weeks to months depending on
                    the complexity of the issue and whether it requires investigation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    What&apos;s the difference between CRTC and CCTS complaints?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    The CRTC handles broadcasting content and regulatory issues - things like loud
                    commercials, offensive content, or licence violations. The CCTS handles billing
                    disputes, contract issues, and service quality problems with your TV service
                    provider. If you&apos;re having trouble getting a refund or cancelling service,
                    start with the CCTS. If you&apos;re concerned about what&apos;s being broadcast,
                    contact the CRTC.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Is my name shared with the broadcaster?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Yes. Broadcasters have the right to know who filed a complaint and to respond.
                    This is part of procedural fairness. You can request privacy protections under
                    the Privacy Act, but this may limit the CRTC&apos;s ability to pursue your
                    complaint effectively.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Can I complain about loud TV commercials?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Yes. The CRTC has rules requiring commercials to be broadcast at similar volume
                    to adjacent programming. This is actually one of the most common complaints they
                    receive. Document when the loud commercial aired and on what channel, then file
                    your complaint. It helps to contact your provider first.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Do I have to file within a certain time?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    For content complaints, file within 4 weeks of broadcast. This is important
                    because broadcasters are only required to keep recordings for 4 weeks. If you
                    wait longer, the evidence may no longer be available.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    What happens if my complaint is successful?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Depending on the issue, the CRTC may require the broadcaster to address the
                    problem, note it in their compliance record, or in serious cases, take
                    enforcement action. Complaints also become part of the record when broadcasters
                    apply to renew their licences.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-[var(--foreground)]">Related Resources</h2>
              <ul className="mt-4 space-y-2 text-[var(--muted)]">
                <li>
                  <Link href="/resources/how-to-intervene" className="text-[var(--primary)] hover:underline">
                    How to Intervene in CRTC Hearings
                  </Link>
                  {' '}- Go beyond complaints and influence policy decisions
                </li>
                <li>
                  <Link href="/resources" className="text-[var(--primary)] hover:underline">
                    All Resources
                  </Link>
                  {' '}- Browse all CBA guides and tools
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                href="https://crtc.gc.ca/eng/contact/question.htm"
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
