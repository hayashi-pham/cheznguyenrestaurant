import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonial() {
  return (
    <div className="section-card card-border p-6">
      <div className="flex items-center gap-2 text-brand-300">
        {Array.from({ length: 5 }).map((_, idx) => (
          <StarIcon key={idx} className="h-4 w-4" />
        ))}
      </div>
      <p className="mt-3 text-lg font-medium text-white">
        “An elegant take on Vietnamese comfort food. The pho broth alone is worth the visit, but the service and cocktails
        make every evening feel celebratory.”
      </p>
      <div className="mt-4 text-sm font-semibold text-white/70">— Calgary Diner Magazine</div>
    </div>
  );
}
