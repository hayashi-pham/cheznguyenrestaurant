import SectionTitle from '@/components/SectionTitle';
import BookingBanner from '@/components/BookingBanner';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Contact | Chez Nguyen Restaurant',
  description: 'Contact Chez Nguyen Restaurant for reservations, events, and hours in Calgary.',
};

const details = [
  {
    title: 'Visit us',
    icon: <MapPinIcon className="h-6 w-6 text-brand-400" />,
    content: '608 Centre St S, #2200, Calgary, AB T2G 1C2',
    href: 'https://maps.google.com/?q=Chez+Nguyen+Restaurant',
  },
  {
    title: 'Call the team',
    icon: <PhoneIcon className="h-6 w-6 text-brand-400" />,
    content: '(403) 761-8085',
    href: 'tel:+14037618085',
  },
  {
    title: 'Email',
    icon: <EnvelopeIcon className="h-6 w-6 text-brand-400" />,
    content: 'hello@cheznguyenrestaurant.ca',
    href: 'mailto:hello@cheznguyenrestaurant.ca',
  },
  {
    title: 'Hours',
    icon: <ClockIcon className="h-6 w-6 text-brand-400" />,
    content: 'Lunch 11:30am - 2:30pm · Dinner 5pm - 10pm · Weekend lounge until 11pm',
  },
];

export default function ContactPage() {
  return (
    <div className="container-default space-y-12">
      <SectionTitle eyebrow="Contact" title="We would love to host you">
        Reach out for reservations, celebrations, or catering inquiries. Our team responds promptly during business hours.
      </SectionTitle>

      <div className="grid gap-4 md:grid-cols-2">
        {details.map((detail) => (
          <div key={detail.title} className="section-card card-border flex gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              {detail.icon}
            </div>
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-300">{detail.title}</p>
              {detail.href ? (
                <Link href={detail.href} className="text-lg font-semibold text-white hover:text-brand-100">
                  {detail.content}
                </Link>
              ) : (
                <p className="text-lg font-semibold text-white">{detail.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section-card card-border grid gap-8 p-6 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-white">Private dining & events</h3>
          <p className="text-sm text-white/70">
            Host your celebrations, corporate dinners, or cocktail receptions in our semi-private lounge. We offer curated
            set menus, beverage pairings, and dedicated service.
          </p>
          <Link href="mailto:events@cheznguyenrestaurant.ca" className="text-sm font-semibold text-brand-100 hover:text-brand-50">
            events@cheznguyenrestaurant.ca
          </Link>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-white">Catering inquiries</h3>
          <p className="text-sm text-white/70">
            Bring Chez Nguyen to your office or home gathering. We craft custom menus for groups of any size with delivery or
            on-site service options.
          </p>
          <Link href="mailto:catering@cheznguyenrestaurant.ca" className="text-sm font-semibold text-brand-100 hover:text-brand-50">
            catering@cheznguyenrestaurant.ca
          </Link>
        </div>
      </div>

      <BookingBanner />
    </div>
  );
}
