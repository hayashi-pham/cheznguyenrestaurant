import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Privacy Policy | Chez Nguyen Restaurant',
};

export default function PrivacyPage() {
  return (
    <div className="container-default space-y-6">
      <SectionTitle eyebrow="Policy" title="Privacy at Chez Nguyen" />
      <div className="prose prose-invert max-w-3xl">
        <p>
          We respect your privacy. Information shared for reservations or inquiries is used solely to confirm bookings and
          enhance your experience. We do not sell or share personal details with third parties.
        </p>
        <p>
          For questions about data handling, contact us at privacy@cheznguyenrestaurant.ca and we will respond promptly.
        </p>
      </div>
    </div>
  );
}
