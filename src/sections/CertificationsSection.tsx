import { useRef, useState } from "react";
import { CertificateCard } from "../components/certificates/CertificateCard";
import { CertificateModal } from "../components/certificates/CertificateModal";
import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/useLanguage";
import type { Certification } from "../types/portfolio";
export function CertificationsSection() {
  const { portfolio, t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  const certificateTriggerRef = useRef<HTMLButtonElement>(null);
  const openCertificate = (certification: Certification, trigger: HTMLButtonElement) => { certificateTriggerRef.current = trigger; setSelectedCertificate(certification); };
  return <Section id="certs" title={t.certifications.title} subtitle={t.certifications.subtitle}><div className="grid gap-3 md:grid-cols-2">{portfolio.certifications.map((certification) => <CertificateCard key={certification.name} certification={certification} onPreview={openCertificate} />)}</div><div className="mt-5"><h3 className="text-sm font-semibold text-zinc-300/80">{t.certifications.moreTitle}</h3><div className="mt-2 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">{portfolio.certificationsSecondary.map((certification) => <div key={certification.name} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2.5 text-sm"><div className="text-zinc-200">{certification.name}</div><div className="text-xs text-zinc-400">{certification.org} · {certification.year}</div></div>)}</div></div><CertificateModal certification={selectedCertificate} onClose={() => setSelectedCertificate(null)} returnFocusRef={certificateTriggerRef} /></Section>;
}