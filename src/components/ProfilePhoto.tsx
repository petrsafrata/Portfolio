import { useState } from "react";
import { User } from "lucide-react";

import profileImage from "../assets/images/profile.jpg";

export function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {!errored && <img src={profileImage} alt="Portrét Petra Šafraty" className="h-full w-full object-cover" onError={() => setErrored(true)} />}
      {errored && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-500">
          <User size={48} strokeWidth={1.25} />
          <span className="text-xs">Foto brzy doplním</span>
        </div>
      )}
    </div>
  );
}