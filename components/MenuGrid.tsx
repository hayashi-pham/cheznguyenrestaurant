import { MenuCategory } from '@/data/menu';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function MenuGrid({ categories }: { categories: MenuCategory[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => (
        <div key={category.title} className="section-card card-border p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-300">{category.title}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-sm text-white/70">{category.summary}</p>
            </div>
            <SparklesIcon className="h-8 w-8 text-brand-400" />
          </div>
          <div className="mt-4 space-y-4">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-inner shadow-black/20"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm font-semibold text-brand-200">
                    <span>{item.price}</span>
                    {item.badge && (
                      <span className="rounded-full bg-brand-400/15 px-3 py-1 text-xs font-semibold text-brand-100">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
