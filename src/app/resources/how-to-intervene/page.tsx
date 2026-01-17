import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'How to Participate in CRTC Public Hearings',
  description: 'Learn how to submit interventions, appear at CRTC hearings, and have your voice heard in Canadian broadcasting decisions. Plain-language guide for everyday Canadians.',
  keywords: ['CRTC intervention', 'CRTC hearing participation', 'CRTC public consultation', 'submit comments CRTC', 'broadcasting hearing Canada'],
  alternates: {
    canonical: 'https://cba-tv.ca/resources/how-to-intervene',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can anyone participate in CRTC hearings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any Canadian can submit written comments to CRTC consultations. You can also request to appear at oral hearings if you explain why written comments aren\'t sufficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a CRTC intervention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An intervention is a formal submission to a CRTC proceeding where you share your views, support or oppose an application, or provide information to help the Commission make a decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lawyer to participate in CRTC proceedings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While lawyers often participate on behalf of organizations, individual Canadians can and do participate without legal representation. The CRTC provides assistance for those who need help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there funding available to participate in CRTC hearings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Broadcasting Participation Fund provides funding to public interest groups for broadcasting proceedings. For telecommunications proceedings, costs may be awarded by the CRTC directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my intervention be public?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All interventions become part of the public record and are posted on the CRTC website. You cannot file anonymous interventions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find out about upcoming CRTC consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit the CRTC\'s "Consultations and Hearings: Have Your Say" page at crtc.gc.ca. You can also subscribe to CRTC updates or join CBA\'s email list for alerts about important proceedings.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Submit a CRTC Intervention',
  description: 'Step-by-step guide to participating in CRTC public hearings and consultations in Canada.',
  totalTime: 'PT2H',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Read the Notice of Consultation',
      text: 'Each proceeding has a Notice that explains what is being decided, the deadline for interventions, and specific questions the CRTC wants addressed. Read it carefully.',
    },
    {
      '@type': 'HowToStep',
      name: 'Review the Application',
      text: 'For licence renewals and applications, the broadcaster\'s submission is usually available on the CRTC website. This tells you what they are promising and requesting.',
    },
    {
      '@type': 'HowToStep',
      name: 'Write Your Intervention',
      text: 'Include your name and contact information, the proceeding number, whether you support or oppose the application, your specific concerns or comments, and any requests for conditions or changes.',
    },
    {
      '@type': 'HowToStep',
      name: 'Submit Before the Deadline',
      text: 'Interventions can be submitted through the CRTC online portal. Make sure you submit before the deadline as late interventions are not accepted.',
      url: 'https://services.crtc.gc.ca/pub/instances-proceedings/Default-Defaut.aspx?Lang=eng',
    },
    {
      '@type': 'HowToStep',
      name: 'Consider Appearing at a Hearing',
      text: 'For major proceedings, the CRTC holds oral hearings where interveners can present in person. When you file your intervention, indicate if you want to appear.',
    },
  ],
};

export default function HowToIntervenePage() {
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
            {/* Introduction */}
            <div className="prose prose-lg">
              <p className="text-[var(--muted)] text-lg">
                The CRTC makes decisions that affect all Canadians, and any Canadian can
                participate in these decisions. You don&apos;t need to be a lawyer or an expert -
                your perspective as a consumer matters. This guide explains how to make your
                voice heard.
              </p>
            </div>

            {/* What is an Intervention */}
            <div className="mt-12">
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
                <p>
                  The CRTC holds two main types of proceedings: those that only accept written
                  comments, and those that include oral hearings where you can present in person
                  or by video conference.
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

            {/* Requesting to Appear */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Requesting to Appear at a Hearing
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  For major proceedings, the CRTC holds oral hearings where interveners can
                  present in person or by video conference. Appearing is optional but can be
                  more impactful than written comments alone.
                </p>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  When to Request an Appearance
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>When you have unique expertise or evidence to share</li>
                  <li>When written comments don&apos;t fully convey your concerns</li>
                  <li>When you want to respond to questions from commissioners</li>
                  <li>For major proceedings with significant public interest</li>
                </ul>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  How to Request
                </h3>
                <p>
                  When filing your written intervention, indicate that you wish to appear.
                  Explain why an oral presentation would add value beyond your written comments.
                  The CRTC will review requests and confirm who will appear.
                </p>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  What to Expect
                </h3>
                <p>
                  Hearings are formal but not intimidating. You&apos;ll have a set time to present
                  (usually 5-10 minutes), followed by questions from commissioners. Hearings
                  are public and often webcast.
                </p>
              </div>
            </div>

            {/* Funding */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Getting Funding to Participate
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <p>
                  The Broadcasting Participation Fund (BPF) provides funding to help public
                  interest groups participate meaningfully in CRTC broadcasting proceedings.
                </p>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  Who Can Apply
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Non-profit organizations representing consumer or public interests</li>
                  <li>Groups that can demonstrate a track record of public interest advocacy</li>
                  <li>Organizations participating in eligible CRTC broadcasting proceedings</li>
                </ul>
                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  What Costs Are Covered
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Legal and expert consulting fees</li>
                  <li>Research costs</li>
                  <li>Travel to hearings (when applicable)</li>
                  <li>Translation and interpretation</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> The BPF is currently under review by the CRTC.
                    Check the BPF website for current eligibility and funding availability.
                  </p>
                  <a
                    href="https://www.bpf-fpr.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline mt-2"
                  >
                    Broadcasting Participation Fund
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy and Deadlines */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Important Considerations
              </h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                <h3 className="font-semibold text-lg text-[var(--foreground)]">
                  Privacy
                </h3>
                <p>
                  All interventions become part of the public record and are posted on the
                  CRTC website. Your name and contact information will be visible. You cannot
                  file anonymous interventions. If you have sensitive personal information
                  in your submission, you can request that specific portions be kept confidential,
                  but this must be justified.
                </p>

                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  Deadlines
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Intervention deadline:</strong> Specified in the Notice of
                    Consultation - usually several weeks after the notice is published
                  </li>
                  <li>
                    <strong>Reply comments:</strong> Some proceedings allow a second round
                    of comments to respond to other interventions
                  </li>
                  <li>
                    <strong>Time:</strong> All deadlines are 8:00 PM Eastern Time
                  </li>
                  <li>
                    <strong>Late submissions:</strong> The CRTC does not accept late interventions
                    - plan ahead
                  </li>
                </ul>

                <h3 className="font-semibold text-lg text-[var(--foreground)] mt-6">
                  Format Requirements
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Include &quot;***End of document***&quot; at the end of your submission</li>
                  <li>Reference the proceeding number from the Notice of Consultation</li>
                  <li>For licence applications, send a copy to the applicant</li>
                </ul>
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
                    <strong>Answer the questions:</strong> If the Notice asks specific questions,
                    address them directly in your intervention
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
                    <strong>Share personal experience:</strong> Your experience as a consumer
                    is valuable evidence
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

            {/* FAQ Prose Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Can anyone participate in CRTC hearings?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Yes. Any Canadian can submit written comments to CRTC consultations. You
                    don&apos;t need to be a lawyer, expert, or member of any organization. The
                    CRTC values input from everyday Canadians who are affected by broadcasting
                    decisions. You can also request to appear at oral hearings if you explain
                    why written comments aren&apos;t sufficient.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    What is a CRTC intervention?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    An intervention is a formal submission to a CRTC proceeding where you share
                    your views, support or oppose an application, or provide information to help
                    the Commission make a decision. Unlike a complaint about something that
                    already happened, an intervention is about influencing future regulatory
                    decisions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Do I need a lawyer to participate in CRTC proceedings?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    No. While lawyers and consultants often participate on behalf of large
                    organizations, individual Canadians can and do participate without legal
                    representation. Many effective interventions come from regular citizens
                    sharing their experiences and perspectives. The CRTC provides assistance
                    for those who need help navigating the process.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Is there funding available to participate in CRTC hearings?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    The Broadcasting Participation Fund (BPF) provides funding to public interest
                    groups for broadcasting proceedings. The fund covers costs like legal fees,
                    research, and travel. For telecommunications proceedings, costs may be awarded
                    by the CRTC directly. The BPF is currently under review, so check their
                    website for current availability.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    Will my intervention be public?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    Yes. All interventions become part of the public record and are posted on
                    the CRTC website. Your name and the content of your submission will be
                    visible. You cannot file anonymous interventions. This transparency is
                    intentional - it allows all parties to see and respond to public input.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">
                    How do I find out about upcoming CRTC consultations?
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    The CRTC publishes all open proceedings on their &quot;Consultations and
                    Hearings: Have Your Say&quot; page at crtc.gc.ca. You can also subscribe to
                    CRTC email updates or join CBA&apos;s email list for alerts about important
                    proceedings that affect consumers.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold text-[var(--foreground)]">Related Resources</h2>
              <ul className="mt-4 space-y-2 text-[var(--muted)]">
                <li>
                  <Link href="/resources/how-to-complain" className="text-[var(--primary)] hover:underline">
                    How to File a CRTC Complaint
                  </Link>
                  {' '}- For issues with content or service that has already occurred
                </li>
                <li>
                  <Link href="/resources" className="text-[var(--primary)] hover:underline">
                    All Resources
                  </Link>
                  {' '}- Browse all CBA guides and tools
                </li>
                <li>
                  <a
                    href="https://crtc.gc.ca/eng/info_sht/g4.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    CRTC Official Intervention Guide
                  </a>
                  {' '}- The CRTC&apos;s own resource on participating
                </li>
              </ul>
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
