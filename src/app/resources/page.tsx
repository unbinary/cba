import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources for Canadian Broadcasting Consumers',
  description: 'Free guides and tools to help Canadians understand their broadcasting rights, file CRTC complaints, and participate in regulatory decisions.',
  keywords: ['CRTC resources', 'broadcasting rights Canada', 'TV consumer protection', 'CRTC guides'],
  alternates: {
    canonical: 'https://cba-tv.ca/resources',
  },
};

const resources = [
  {
    title: 'Consumer Choice in Broadcasting',
    description:
      'Understanding your rights as a cable subscriber. Learn what the CRTC promised with consumer choice regulations, how to exercise your rights, and what to do when providers refuse to remove unwanted services.',
    href: '/resources/consumer-choice',
    topics: ['consumer rights', 'skinny basic', 'pick and pay', 'unwanted services'],
  },
  {
    title: 'How to File a CRTC Complaint',
    description:
      'Complete step-by-step guide to filing a complaint with the CRTC. Learn which organization to contact (CRTC, CCTS, or CBSC), what information you need, and what to expect after filing.',
    href: '/resources/how-to-complain',
    topics: ['CRTC complaints', 'CCTS complaints', 'loud commercials', 'broadcasting violations'],
  },
  {
    title: 'How to Participate in CRTC Hearings',
    description:
      'Learn how to submit interventions and appear at CRTC hearings. This guide explains how ordinary Canadians can influence broadcasting policy during licence renewals and public consultations.',
    href: '/resources/how-to-intervene',
    topics: ['CRTC interventions', 'public hearings', 'licence renewals', 'Broadcasting Participation Fund'],
  },
];

const comingSoon = [
  {
    title: 'Broadcasting Glossary',
    description: 'Plain-language definitions of broadcasting terms like BDU, CanCon, and more.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Resources for Canadian Broadcasting Consumers</h1>
            <p className="mt-6 text-xl text-gray-200">
              Free guides and tools to help you understand your rights, file complaints, and
              participate in regulatory decisions that affect your TV and broadcasting services.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-[var(--muted)]">
              The CRTC regulates broadcasting in Canada, but navigating regulatory processes can
              be confusing. Our plain-language guides explain how to exercise your rights as a
              consumer - from filing complaints about service issues to participating in public
              hearings that shape broadcasting policy.
            </p>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="block border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)]/50 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {resource.title}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{resource.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {resource.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-gray-100 text-[var(--muted)] px-2 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-block text-[var(--primary)] font-medium">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Coming Soon</h2>
          <p className="text-[var(--muted)] mb-8">
            We&apos;re developing additional resources to help Canadian broadcasting consumers.
            Sign up for our email list to be notified when these are available.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="block border border-dashed border-gray-300 rounded-lg p-6 bg-white/50"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)] opacity-75">
                  {item.title}
                </h3>
                <p className="mt-2 text-[var(--muted)] opacity-75">{item.description}</p>
                <span className="mt-4 inline-block text-[var(--muted)] text-sm">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Official Resources</h2>
          <p className="text-[var(--muted)] mb-8">
            Links to official government and industry resources for Canadian broadcasting.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-4">CRTC Resources</h3>
              <div className="space-y-4">
                <a
                  href="https://crtc.gc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">CRTC Official Website</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    The Canadian Radio-television and Telecommunications Commission
                  </p>
                </a>
                <a
                  href="https://crtc.gc.ca/eng/consultation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">CRTC Open Consultations</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    View current CRTC proceedings open for public comment
                  </p>
                </a>
                <a
                  href="https://crtc.gc.ca/eng/contact/question.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">CRTC Complaint Form</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Submit a complaint directly to the CRTC
                  </p>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-4">Other Organizations</h3>
              <div className="space-y-4">
                <a
                  href="https://www.ccts-cprst.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">CCTS</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Commission for Complaints for Telecom-television Services - for billing and service disputes
                  </p>
                </a>
                <a
                  href="https://www.cbsc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">CBSC</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Canadian Broadcast Standards Council - for content complaints about member broadcasters
                  </p>
                </a>
                <a
                  href="https://www.bpf-fpr.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
                >
                  <h4 className="font-semibold text-[var(--foreground)]">Broadcasting Participation Fund</h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Funding for public interest groups participating in CRTC proceedings
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">Stay Informed</h2>
          <p className="mt-2 text-[var(--muted)] max-w-2xl mx-auto">
            Join our email list to receive alerts about important CRTC proceedings and new
            resources as they become available.
          </p>
          <div className="mt-6">
            <Link
              href="/take-action"
              className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary)]/90 transition-colors"
            >
              Sign Up for Updates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
