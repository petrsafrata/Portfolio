import { Database, ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import type { Certification } from "../../types/portfolio";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

const certIcon: Record<string, ReactNode> = {
  Oracle: <Database size={16} />,
  Cisco: <ShieldCheck size={16} />,
  "University of Helsinki": <GraduationCap size={16} />,
};

export function CertificateCard({ certification, onPreview }: { certification: Certification; onPreview: (certification: Certification, trigger: HTMLButtonElement) => void }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-purple-500">
          {certIcon[certification.org]}
          {certification.org}
        </div>
        <Chip>{certification.year}</Chip>
      </div>
      <div className="mt-2 text-sm font-semibold text-zinc-100">{certification.name}</div>
      {certification.issuer && <div className="mt-0.5 text-xs text-zinc-300/70">{certification.issuer}</div>}
      {certification.tags && <div className="mt-2.5 flex flex-wrap gap-1.5">{certification.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}</div>}
      {certification.certificate && (
        <button type="button" onClick={(event) => onPreview(certification, event.currentTarget)} className="mt-2.5 inline-flex items-center gap-1 text-xs font-medium text-purple-500 hover:text-purple-200">
          Zobrazit certifikát <ExternalLink size={12} />
        </button>
      )}
    </Card>
  );
}