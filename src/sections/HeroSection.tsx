import { motion } from "framer-motion";
import {
  Briefcase,
  Database,
  Github,
  Mail,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { portfolio } from "../data/portfolio";

export function HeroSection() {
  const linkIcons = { Mail, Github, Briefcase };
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
            Backendové systémy v Javě. Od dat po nasazení.
          </h1>
          <p className="mt-4 text-zinc-300/80">{portfolio.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>
              <ShieldCheck size={14} className="mr-2 opacity-80" />
              Spring Boot
            </Chip>
            <Chip>
              <Database size={14} className="mr-2 opacity-80" />
              MongoDB / Oracle
            </Chip>
            <Chip>
              <Wrench size={14} className="mr-2 opacity-80" />
              Docker
            </Chip>
            <Chip>
              <Terminal size={14} className="mr-2 opacity-80" />
              JS/TS automatizace
            </Chip>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {portfolio.links.map((link) => {
              const Icon = linkIcons[link.icon];
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
              Aktuálně
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
