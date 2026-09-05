import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Database,
  Github,
  Layers,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { useLanguage } from "../context/useLanguage";
import type { IconName } from "../types/portfolio";

const icons: Record<IconName, typeof Mail> = {
  Mail,
  Github,
  Briefcase,
  Server,
  Code2,
  Database,
  Wrench,
  Layers,
  ShieldCheck,
  Terminal,
};

export function HeroSection() {
  const { portfolio, t } = useLanguage();
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
      >
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-purple-500">
            {portfolio.headline}
          </h1>
          <p className="mt-4 text-zinc-300/80">{portfolio.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {portfolio.heroBadges.map((badge) => {
              const Icon = icons[badge.icon];
              return (
                <Chip key={badge.label}>
                  <Icon size={14} className="mr-2 opacity-80" />
                  {badge.label}
                </Chip>
              );
            })}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {portfolio.links.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.label}</span>
                  <span className="text-zinc-300/70">{link.value}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="grid gap-4">
          <ProfilePhoto />
          <Card>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Briefcase size={18} />
              {t.hero.currently}
            </div>
            <p className="mt-3 text-sm text-zinc-300/80">
              {portfolio.experience[0].company} •{" "}
              <span className="font-bold text-purple-500">
                {portfolio.experience[0].role}
              </span>
            </p>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

