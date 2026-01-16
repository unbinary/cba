'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Can't I just call my cable company and remove it?",
    answer:
      "No. Stingray Music is bundled at the wholesale level. Your cable company buys it as part of their programming package and passes the cost to you. Individual customers cannot opt out.",
  },
  {
    question: 'What about the $25 skinny basic package?',
    answer:
      "That package doesn't include Stingray Music, but cable companies make it economically unattractive. Customers report losing bundle discounts and seeing increases in equipment fees and internet charges when they switch.",
  },
  {
    question: 'Does Stingray Music support Canadian artists?',
    answer:
      "Stingray is required to contribute 4% of pay audio revenues to Canadian music development funds. However, this doesn't justify forcing millions of Canadians to subsidize a service they don't use.",
  },
  {
    question: 'When can I tell the CRTC about this?',
    answer:
      "Stingray Music's license expires August 31, 2027. The CRTC will issue a Notice of Consultation approximately one year before, opening a 30-day window for public comments. Sign up for our email list and we'll notify you when that window opens.",
  },
  {
    question: 'What happens to my signature?',
    answer:
      "Your signature will be included in our formal intervention to the CRTC during Stingray's licence renewal process. We may also use aggregate data (like total signatures and geographic distribution) in media communications. We will never share your personal information with third parties.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--border)]">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-start justify-between text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-[var(--foreground)] pr-4">{faq.question}</span>
            <span className="ml-4 flex-shrink-0">
              <svg
                className={`w-5 h-5 text-[var(--muted)] transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-3 text-[var(--muted)] text-sm leading-relaxed">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
