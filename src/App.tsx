import "./App.css";

import { Star } from "lucide-react";

import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useLanguage } from "./context/useLanguage";
import { AboutSection } from "./sections/AboutSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export default function App() {
  const { portfolio, t } = useLanguage();

  const navigation: [string, string][] = [
    [t.nav.about, "about"],
    [t.nav.skills, "skills"],
    [t.nav.projects, "projects"],
    [t.nav.experience, "experience"],
    [t.nav.education, "education"],
    [t.nav.certifications, "certs"],
    [t.nav.contact, "contact"],
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[90px]" />
        <div className="absolute right-[-120px] top-[180px] h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[90px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
              <Star size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">{portfolio.name}</div>
              <div className="text-xs text-zinc-300/70">{portfolio.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10">
                  {label}
                </a>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />

        <footer className="py-10 text-center text-sm text-zinc-400/70">
          © {new Date().getFullYear()} {portfolio.name} • {t.footer.builtWith}
          <span className="hidden"> • IČO: 1234 • DIČ: 1234</span>
        </footer>
      </main>
    </div>
  );
}
