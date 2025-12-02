import Link from 'next/link';
import { SparklesIcon, FireIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';
import HighlightCard from '@/components/HighlightCard';
import Testimonial from '@/components/Testimonial';
import BookingBanner from '@/components/BookingBanner';
import MenuGrid from '@/components/MenuGrid';
import { menuCategories } from '@/data/menu';

const highlights = [
  {
    title: 'Chef-driven Vietnamese',
    description:
      'Traditional recipes elevated with Alberta-raised meats, coastal seafood, and herbs sourced from local growers.',
  },
  {
    title: 'Cocktails & Zero Proof',
    description:
      'Tea-infused spirits, pandan and lychee accents, and elegant non-alcoholic pairings for every course.',
  },
  {
    title: 'Gather Downtown',
    description:
      'Intimate booths, airy dining room, and a private lounge for celebrations and corporate dining.',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="container-default grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card card-border relative overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-0 bg-hero-pattern opacity-70" aria-hidden />
          <div className="relative z-10 flex h-full flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-100 ring-1 ring-white/20">
                Modern Vietnamese
              </span>
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                A refined take on Vietnamese comfort in downtown Calgary.
              </h1>
              <p className="max-w-2xl text-lg text-white/75">
                From lunch pho to late-night cocktails, Chez Nguyen balances heritage flavors with contemporary plating and
                warm hospitality.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-[#0f1317] shadow-lg shadow-brand-900/40 transition hover:bg-brand-400"
                >
                  Explore the Menu
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5"
                >
                  Reserve a Table
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-brand-300" />
                <span>Lunch & Dinner</span>
              </div>
              <div className="flex items-center gap-2">
                <FireIcon className="h-5 w-5 text-brand-300" />
                <span>Seasonal specials</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-brand-300" />
                <span>Centre St, Calgary</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="section-card card-border flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <SparklesIcon className="h-6 w-6 text-brand-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-default space-y-8">
        <SectionTitle eyebrow="Signature" title="The dishes our guests return for">
          Thoughtfully crafted plates, artisanal broths, and bright sauces built from scratch in our kitchen.
        </SectionTitle>
        <MenuGrid categories={menuCategories.slice(0, 2)} />
      </section>

      <section className="container-default grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <SectionTitle eyebrow="Experience" title="Where contemporary design meets Vietnamese warmth">
            Plush banquettes, ambient lighting, and curated playlists create an inviting space for date nights, business
            dinners, and family celebrations.
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            <HighlightCard title="Intimate Dining">
              Cozy booths and soft lighting with room for groups up to 12.
            </HighlightCard>
            <HighlightCard title="Open Kitchen">
              Watch our chefs char, simmer, and plate each dish with care.
            </HighlightCard>
            <HighlightCard title="Weekend Lounge">
              Elevated cocktails, modern tea service, and late-night bites.
            </HighlightCard>
          </div>
        </div>
        <Testimonial />
      </section>

      <section className="container-default space-y-6">
        <SectionTitle eyebrow="Full Menu" title="From shareables to desserts">
          Explore our complete menu, including vegetarian, gluten-friendly, and zero-proof options crafted for every palate.
        </SectionTitle>
        <MenuGrid categories={menuCategories.slice(2)} />
        <div className="flex justify-center pt-2">
          <Link
            href="/menu"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/10"
          >
            View full menu
          </Link>
        </div>
      </section>

      <section className="container-default">
        <BookingBanner />
      </section>
    </div>
  );
}
