import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";

import { useLanguage } from "../../context/useLanguage";
import type { Certification } from "../../types/portfolio";

export function CertificateModal({ certification, onClose, returnFocusRef }: { certification: Certification | null; onClose: () => void; returnFocusRef: React.RefObject<HTMLButtonElement | null> }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!certification) return;
    const trigger = returnFocusRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [certification, onClose, returnFocusRef]);

  if (!certification?.certificate) return null;
  const isImage = /\.(png|jpe?g|webp)(?:[?#].*)?$/i.test(certification.certificate);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" className="flex max-h-[90dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-500">{certification.org}</div>
            <h3 id="certificate-modal-title" className="mt-1 text-sm font-semibold text-zinc-100">{certification.name}</h3>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={t.certifications.closeModalLabel} className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"><X size={18} /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-zinc-950 p-3 sm:p-4">
          {isImage ? <img src={certification.certificate} alt={t.certifications.certificateAlt(certification.name, certification.org)} className="mx-auto h-auto max-w-full rounded-lg" /> : <iframe title={t.certifications.certificatePreviewTitle(certification.name)} src={certification.certificate} className="h-[65dvh] min-h-[380px] w-full rounded-lg border border-white/10 bg-white" />}
        </div>
        <div className="border-t border-white/10 px-4 py-3 sm:px-5">
          <a href={certification.certificate} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-purple-500 hover:text-purple-200">{t.certifications.openInNewWindow} <ExternalLink size={12} /></a>
        </div>
      </div>
    </div>
  );
}