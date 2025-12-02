import { ReactNode } from 'react';

export default function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">{eyebrow}</span>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {children && <p className="max-w-3xl text-base text-white/70">{children}</p>}
    </div>
  );
}
