import { ReactNode } from 'react';

export default function HighlightCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="section-card card-border flex flex-col gap-3 p-6">
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/70">{children}</p>
    </div>
  );
}
