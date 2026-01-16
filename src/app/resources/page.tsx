import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Guides and resources for engaging with the CRTC, filing complaints, and participating in broadcast licence hearings.',
};

const resources = [
  {
    title: 'How to File a CRTC Complaint',
    description:
      'Step-by-step guide to filing a complaint with the CRTC about your broadcaster or cable provider.',
    href: '/resources/how-to-complain',
  },
  {
    title: 'How to Intervene in CRTC Hearings',
    description:
      'Learn how to participate in CRTC proceedings and make your voice heard during licence renewals.',
    href: '/resources/how-to-intervene',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
            <p className="mt-6 text-xl text-gray-200">
              Guides and tools to help you engage with Canada&apos;s broadcasting regulator.
            </p>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="block border border-[var(--border)] rounded-lg p-6 hover:border-[var(--primary)]/50 hover:shadow-md transition-all"
              >
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                  {resource.title}
                </h2>
                <p className="mt-2 text-[var(--muted)]">{resource.description}</p>
                <span className="mt-4 inline-block text-[var(--primary)] font-medium">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">External Resources</h2>
          <div className="mt-6 space-y-4">
            <a
              href="https://crtc.gc.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
            >
              <h3 className="font-semibold text-[var(--foreground)]">CRTC Official Website</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                The Canadian Radio-television and Telecommunications Commission
              </p>
            </a>
            <a
              href="https://crtc.gc.ca/eng/consultation/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
            >
              <h3 className="font-semibold text-[var(--foreground)]">CRTC Open Consultations</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                View current CRTC proceedings open for public comment
              </p>
            </a>
            <a
              href="https://applications.crtc.gc.ca/RapidCCM/en/Support"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white border border-[var(--border)] rounded-lg hover:border-[var(--primary)]/50"
            >
              <h3 className="font-semibold text-[var(--foreground)]">CRTC Complaint Form</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Submit a complaint directly to the CRTC
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
