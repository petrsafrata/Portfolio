import type { Language } from "../types/language";
import type { Portfolio } from "../types/portfolio";
import { portfolioCs } from "./portfolio.cs";
import { portfolioEn } from "./portfolio.en";

export const portfolioByLanguage: Record<Language, Portfolio> = {
  cs: portfolioCs,
  en: portfolioEn,
};

export { portfolioCs, portfolioEn };
