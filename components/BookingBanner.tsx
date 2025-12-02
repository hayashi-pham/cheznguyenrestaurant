import { CalendarDaysIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BookingBanner() {
  return (
    <div className="section-card card-border flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-300">Visit Us</p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-white">Reserve your table</h3>
        <p className="text-sm text-white/70">Join us downtown Calgary for lunch, dinner, or celebrations.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="tel:+14037618085"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10"
        >
          <PhoneIcon className="h-4 w-4" />
          Call now
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-[#0f1317] shadow-lg shadow-brand-900/40 transition hover:bg-brand-400"
        >
          <CalendarDaysIcon className="h-4 w-4" />
          Book online
        </Link>
        <a
          href="https://maps.google.com/?q=Chez+Nguyen+Restaurant"
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:border-brand-300/70"
        >
          <MapPinIcon className="h-4 w-4" />
          Directions
        </a>
      </div>
    </div>
  );
}
