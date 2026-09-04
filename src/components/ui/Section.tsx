import type { ReactNode } from "react";

export function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-7">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-zinc-300/80">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}