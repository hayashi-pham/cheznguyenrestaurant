import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-[#0b1013]/80 py-12 backdrop-blur">
      <div className="container-default grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-sm uppercase tracking-[0.2em] text-white/60">Chez Nguyen</div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-white">Modern Vietnamese Cuisine</h2>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            Refined recipes, fresh ingredients, and contemporary hospitality inspired by the heart of Vietnam.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <div className="flex items-start gap-2">
            <MapPinIcon className="mt-0.5 h-5 w-5 text-brand-400" />
            <span>608 Centre St S, #2200, Calgary, AB T2G 1C2</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-brand-400" />
            <a href="tel:+14037618085" className="hover:text-white">
              (403) 761-8085
            </a>
          </div>
          <div className="flex items-start gap-2">
            <ClockIcon className="mt-0.5 h-5 w-5 text-brand-400" />
            <div>
              <div>Mon - Fri: 11:30 am - 2:30 pm, 5:00 pm - 10:00 pm</div>
              <div>Sat - Sun: 5:00 pm - 11:00 pm</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-default mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row">
        <span>© {new Date().getFullYear()} Chez Nguyen Restaurant. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <span className="text-white/30">•</span>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
