import { createContext } from "react";

import type { Translations } from "../i18n/translations";
import type { Language } from "../types/language";
import type { Portfolio } from "../types/portfolio";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  portfolio: Portfolio;
  t: Translations;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
