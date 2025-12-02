import SectionTitle from '@/components/SectionTitle';
import MenuGrid from '@/components/MenuGrid';
import { menuCategories } from '@/data/menu';
import BookingBanner from '@/components/BookingBanner';

export const metadata = {
  title: 'Menu | Chez Nguyen Restaurant',
  description: 'Explore the full menu at Chez Nguyen with chef specials, noodles, small plates, and cocktails.',
};

export default function MenuPage() {
  return (
    <div className="container-default space-y-10">
      <div className="space-y-4 text-center">
        <SectionTitle eyebrow="Menu" title="Elevated Vietnamese classics" />
        <p className="mx-auto max-w-3xl text-base text-white/70">
          Crafted with local ingredients, bright herbs, and house-made sauces. We proudly accommodate vegetarian,
          gluten-friendly, and zero-proof preferences.
        </p>
      </div>

      <MenuGrid categories={menuCategories} />

      <div className="pt-4">
        <BookingBanner />
      </div>
    </div>
  );
}
