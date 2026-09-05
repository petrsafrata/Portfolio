import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { portfolioByLanguage } from "../data";
import { translations } from "../i18n/translations";
import type { Language } from "../types/language";
import { LanguageContext } from "./languageContextValue";
import type { LanguageContextValue } from "./languageContextValue";

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE: Language = "cs";

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "cs" || stored === "en" ? stored : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      portfolio: portfolioByLanguage[language],
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
