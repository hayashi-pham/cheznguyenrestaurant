import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Terms of Service | Chez Nguyen Restaurant',
};

export default function TermsPage() {
  return (
    <div className="container-default space-y-6">
      <SectionTitle eyebrow="Terms" title="Guest experience guidelines" />
      <div className="prose prose-invert max-w-3xl">
        <p>
          Reservations may be modified up to 24 hours in advance. Parties arriving late without notice are subject to
          cancellation. Service charges may apply to large groups or private events.
        </p>
        <p>
          By dining with us you agree to respectful conduct toward our team and guests. For questions, please contact
          hello@cheznguyenrestaurant.ca.
        </p>
      </div>
    </div>
  );
}
