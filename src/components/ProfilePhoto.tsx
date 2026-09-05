import { useState } from "react";
import { User } from "lucide-react";

import profileImage from "../assets/images/profile.jpg";
import { useLanguage } from "../context/useLanguage";

export function ProfilePhoto() {
  const [errored, setErrored] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {!errored && <img src={profileImage} alt={t.profilePhoto.alt} className="h-full w-full object-cover" onError={() => setErrored(true)} />}
      {errored && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-500">
          <User size={48} strokeWidth={1.25} />
          <span className="text-xs">{t.profilePhoto.fallback}</span>
        </div>
      )}
    </div>
  );
}
