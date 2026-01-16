import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Canadians for Broadcast Accountability. Share tips, ask questions, or learn how to get involved.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-6 text-xl text-gray-200">
              Have a question, tip, or want to get involved? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Get in Touch</h2>
              <p className="mt-4 text-[var(--muted)]">
                Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">General Inquiries</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    Questions about our work, campaigns, or how to get involved.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Tips & Information</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    Know about broadcaster misconduct or regulatory issues? Share your
                    information confidentially.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Media Inquiries</h3>
                  <p className="mt-1 text-[var(--muted)]">
                    Journalists seeking comment or background on broadcasting accountability
                    issues.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-[var(--muted)]">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@cba-tv.ca"
                    className="text-[var(--primary)] hover:underline"
                  >
                    info@cba-tv.ca
                  </a>
                </p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
