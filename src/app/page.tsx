import Link from 'next/link';
import { Button, EmailSignup } from '@/components';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--primary)] text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Holding Canadian Broadcasters Accountable
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Broadcasters operate on public airwaves. We make sure they keep their promises.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/take-action" variant="accent" size="lg">
                Take Action
              </Button>
              <Button href="/issues/pay-audio" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                Learn About Pay Audio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">The Problem</h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Canadian broadcasters make promises to the CRTC in exchange for their licences - 
              commitments to Canadian content, community benefits, and fair practices. Too often, 
              these promises go unfulfilled while Canadians foot the bill.
            </p>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Right now, millions of cable subscribers are paying for services they never asked for 
              and cannot remove. The CRTC promised Canadians choice. We&apos;re here to make sure that 
              promise is kept.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">What We Do</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Monitor Compliance</h3>
              <p className="mt-2 text-[var(--muted)]">
                We track broadcaster commitments and hold them accountable to their CRTC licence conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">File Interventions</h3>
              <p className="mt-2 text-[var(--muted)]">
                We participate in CRTC proceedings to ensure the public interest is represented.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[var(--border)]">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Build Coalitions</h3>
              <p className="mt-2 text-[var(--muted)]">
                We bring together Canadians who want a fairer broadcasting system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Campaign Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--primary)] rounded-2xl p-8 md:p-12 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Current Campaign
                </span>
                <h2 className="mt-2 text-3xl font-bold">Stop Forced Pay Audio Bundling</h2>
                <p className="mt-4 text-gray-200">
                  Millions of Canadians pay for Stingray Music through their cable bill - 
                  whether they use it or not. We&apos;re asking the CRTC to give consumers a real choice.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <Button href="/issues/pay-audio" variant="accent" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] text-center">Join Us</h2>
            <p className="mt-4 text-center text-[var(--muted)]">
              Sign up to receive updates on our campaigns and opportunities to take action.
            </p>
            <div className="mt-8">
              <EmailSignup
                heading="Get Campaign Updates"
                description="We'll let you know when there are opportunities to make your voice heard."
                showPostalCode={true}
                source="homepage"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
