'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-[#0b1013]/95 via-[#0b1013]/75 to-transparent backdrop-blur-xl">
      <div className="container-default flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <span className="text-gradient text-xl font-bold">CN</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60">Chez Nguyen</div>
            <div className="font-display text-xl">Restaurant</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+14037618085"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" />
            (403) 761-8085
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-[#0f1317] shadow-lg shadow-brand-900/40 transition hover:bg-brand-400"
          >
            <CalendarDaysIcon className="h-4 w-4" />
            Reserve
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0b1013]/95 backdrop-blur">
          <div className="container-default flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-white/80 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+14037618085"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                (403) 761-8085
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-[#0f1317] shadow-lg shadow-brand-900/40 transition hover:bg-brand-400"
              >
                <CalendarDaysIcon className="h-4 w-4" />
                Reserve
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
