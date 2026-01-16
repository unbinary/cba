import type { Metadata } from 'next';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Canadians for Broadcast Accountability monitors Canadian broadcasters to ensure they meet their CRTC licence obligations.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">About CBA</h1>
            <p className="mt-6 text-xl text-gray-200">
              Working to ensure Canadian broadcasters keep their promises to the public.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">Our Mission</h2>
            <div className="mt-6 prose prose-lg text-[var(--muted)]">
              <p>
                Canadians for Broadcast Accountability monitors Canadian broadcasters to ensure
                they meet their CRTC licence obligations. We believe public airwaves belong to
                the public, and broadcasters must be held to their promises on Canadian content,
                community benefits, and fair consumer practices.
              </p>
              <p>
                Broadcasting licences are a privilege, not a right. In exchange for access to
                the public airwaves, broadcasters make commitments to serve Canadian communities.
                Too often, these commitments are quietly abandoned while regulators look the
                other way.
              </p>
              <p>
                We exist to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">What We Do</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Monitor Broadcaster Compliance</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    We track conditions of licence, tangible benefits commitments, and Canadian
                    content obligations across major Canadian broadcasters.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">File Interventions</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    We participate in CRTC licence renewals and policy proceedings to ensure
                    the public interest is represented.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Educate Canadians</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    We help Canadians understand their rights and how to participate in the
                    regulatory process through guides and resources.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Build Coalitions</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    We bring together consumer advocates, artists, and community groups to
                    amplify our collective voice.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Are - Placeholder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">Who We Are</h2>
            <p className="mt-6 text-lg text-[var(--muted)]">
              CBA was founded by Canadians who believe that our broadcasting system should serve
              the public, not just corporate shareholders. Our team includes policy researchers,
              former industry professionals, and engaged citizens.
            </p>
            <p className="mt-4 text-lg text-[var(--muted)]">
              We are a non-partisan, non-profit organization. We are not affiliated with any
              political party, broadcaster, or telecommunications company.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">Join the Movement</h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto">
            Help us hold Canadian broadcasters accountable. Sign our petition, join our email
            list, or contact us to get involved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/take-action" variant="accent" size="lg">
              Take Action
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
