import { useLanguage } from "../context/useLanguage";
import type { Language } from "../types/language";

const options: { code: Language; label: string }[] = [
  { code: "cs", label: "CZ" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm"
    >
      {options.map((option) => {
        const isActive = option.code === language;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1 font-medium transition-colors ${
              isActive
                ? "bg-purple-500/20 text-purple-200"
                : "text-zinc-300/70 hover:text-zinc-100"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
