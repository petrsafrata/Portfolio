import type { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur ${className ?? "p-5"}`}>
      {children}
    </div>
  );
}