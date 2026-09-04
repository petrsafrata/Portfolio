import type { ReactNode } from "react";

export function Chip({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${accent ? "border-purple-400/30 bg-purple-400/10 text-purple-200" : "border-white/10 bg-white/5 text-zinc-200"}`}>
      {children}
    </span>
  );
}