import SectionTitle from '@/components/SectionTitle';
import HighlightCard from '@/components/HighlightCard';
import BookingBanner from '@/components/BookingBanner';
import Testimonial from '@/components/Testimonial';

export const metadata = {
  title: 'About | Chez Nguyen Restaurant',
  description: 'Discover the story, philosophy, and team behind Chez Nguyen Restaurant in Calgary.',
};

const pillars = [
  {
    title: 'Inspired by Family',
    description:
      'Our recipes honor generations of Vietnamese cooking, reimagined with contemporary techniques and Alberta ingredients.',
  },
  {
    title: 'Local & Seasonal',
    description: 'We partner with nearby farms and fishers to source fresh herbs, sustainable seafood, and responsibly raised meats.',
  },
  {
    title: 'Hospitality First',
    description: 'Warm service, thoughtful pacing, and curated playlists create an atmosphere perfect for any occasion.',
  },
];

export default function AboutPage() {
  return (
    <div className="container-default space-y-12">
      <SectionTitle eyebrow="Our Story" title="Vietnamese roots, Calgary heart">
        Chef Nguyen and the team bring together classic family recipes, refined plating, and the energy of downtown Calgary.
        Expect vibrant herbs, smoky grills, and broth simmered for hours.
      </SectionTitle>

      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <HighlightCard key={pillar.title} title={pillar.title}>
            {pillar.description}
          </HighlightCard>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card card-border space-y-4 p-6">
          <SectionTitle eyebrow="Craft" title="Every bowl, every pour, every plate">
            We simmer pho broth for 48 hours, grind spices in-house, and infuse teas into both cocktails and zero-proof pours.
            The result is a menu that tastes vibrant and feels restorative.
          </SectionTitle>
          <p className="text-sm text-white/70">
            Whether you join us for a quick lunch or a celebratory dinner, our team is ready to guide you through pairings,
            course pacing, and dishes tailored to your preferences.
          </p>
        </div>
        <Testimonial />
      </div>

      <BookingBanner />
    </div>
  );
}
