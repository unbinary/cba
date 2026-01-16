import Link from 'next/link';

const footerLinks = {
  issues: [
    { name: 'Pay Audio Bundling', href: '/issues/pay-audio' },
    { name: 'All Issues', href: '/issues' },
  ],
  resources: [
    { name: 'How to Complain to CRTC', href: '/resources/how-to-complain' },
    { name: 'How to Intervene', href: '/resources/how-to-intervene' },
  ],
  organization: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Take Action', href: '/take-action' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h2 className="text-lg font-bold">Canadians for Broadcast Accountability</h2>
            <p className="mt-2 text-sm text-gray-300">
              Holding Canadian broadcasters accountable to their CRTC licence obligations.
            </p>
          </div>

          {/* Issues */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Issues</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.issues.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Organization</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Canadians for Broadcast Accountability. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
