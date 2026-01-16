import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, EmailSignup } from '@/components';
import PetitionForm from './PetitionForm';
import FAQ from './FAQ';

export const metadata: Metadata = {
  title: 'Forced to Pay for Stingray Music?',
  description: 'Millions of Canadians pay for Stingray Music through their cable bill - but can\'t remove it. Learn about pay audio bundling and sign the petition for consumer choice.',
  keywords: ['Stingray Music', 'cable bundling', 'CRTC', 'consumer choice', 'pay audio', 'Canada'],
  openGraph: {
    title: 'Forced to Pay for Stingray Music? | CBA',
    description: 'Millions of Canadians pay for Stingray Music through their cable bill - but can\'t remove it.',
  },
};

const stats = [
  { value: '10M+', label: 'Canadian households with Stingray Music in their cable package' },
  { value: '~784K', label: 'People who actually chose to subscribe directly' },
  { value: '$47M+', label: 'Estimated annual Canadian pay audio revenue' },
  { value: '4%', label: 'Amount Stingray contributes to Canadian music development' },
  { value: '$0', label: 'What you save by asking to remove it (you can\'t)' },
];

export default function PayAudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Paying for Music Channels You Never Use?
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              If you have cable TV in Canada, you&apos;re probably paying for Stingray Music -
              even if you&apos;ve never tuned in.
            </p>
            <div className="mt-8">
              <Button href="#petition" variant="accent" size="lg">
                Sign the Petition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">What is Pay Audio?</h2>
            <div className="mt-6 prose prose-lg text-[var(--muted)]">
              <p>
                Stingray Music is a service that plays commercial-free music channels through your TV.
                It&apos;s bundled into most cable packages in Canada - Rogers, Bell, Telus, Shaw, and
                others all include it.
              </p>
              <p>
                The catch? You can&apos;t remove it. If you&apos;re on anything above the bare-bones $25
                basic package, Stingray Music is baked into your bill. You pay for it whether you
                listen or not.
              </p>
              <p>
                This isn&apos;t a small add-on. Stingray collects tens of millions of dollars annually
                from Canadian cable subscribers. Most of those &quot;subscribers&quot; never chose the
                service - they just can&apos;t opt out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">It&apos;s Your Money</h2>
            <div className="mt-6 prose prose-lg text-[var(--muted)]">
              <p>
                In 2016, the CRTC promised Canadians more choice over their cable bills. They
                introduced pick-and-pay options and a slimmed-down basic package.
              </p>
              <p>
                But here&apos;s what actually happened: cable companies made the cheap package
                unattractive. Switch to basic and your internet bill goes up. Your equipment fees
                increase. You lose bundle discounts. For most people, &quot;choice&quot; is an illusion.
              </p>
              <p>
                Meanwhile, services like Stingray Music stay embedded in packages - guaranteed
                revenue from millions of households that never asked for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">By the Numbers</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-lg p-6 border border-[var(--border)]"
              >
                <p className="text-3xl font-bold text-[var(--primary)]">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Asking For */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">The Fix is Simple</h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              We&apos;re asking the CRTC to give Canadians a real choice:
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Let us opt out</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    If I don&apos;t use Stingray Music, I shouldn&apos;t have to pay for it. Cable
                    companies should offer it as an add-on, not a forced inclusion.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Make pricing transparent</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    Consumers deserve to know what portion of their cable bill goes to services
                    they never requested.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hold broadcasters accountable</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    When the CRTC reviews Stingray&apos;s license in 2027, they should consider
                    whether bundling unwilling subscribers serves the public interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Petition Section */}
      <section id="petition" className="py-16 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] text-center">
              Add Your Voice
            </h2>
            <p className="mt-4 text-center text-[var(--muted)]">
              The CRTC reviews Stingray Music&apos;s broadcast license in 2027. Before that happens,
              we&apos;re building a record of Canadians who want the right to choose.
            </p>
            <div className="mt-8">
              <PetitionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <EmailSignup
              heading="Stay Updated"
              description="Get notified when the CRTC opens public comments on pay audio."
              showPostalCode={true}
              source="pay-audio"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50 border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/resources/how-to-complain" className="text-[var(--primary)] hover:underline">
              How to file a CRTC complaint
            </Link>
            <Link href="/about" className="text-[var(--primary)] hover:underline">
              About CBA
            </Link>
            <Link href="/take-action" className="text-[var(--primary)] hover:underline">
              Other ways to take action
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
