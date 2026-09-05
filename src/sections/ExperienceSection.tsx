import { Briefcase } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/useLanguage";
export function ExperienceSection() {
  const { portfolio, t } = useLanguage();
  return <Section id="experience" title={t.experience.title} subtitle={t.experience.subtitle}><div className="grid gap-4">{portfolio.experience.map((experience, index) => <Card key={experience.company + experience.role}><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex items-center gap-2 text-sm font-semibold text-zinc-100"><Briefcase size={18} />{experience.company}</div><div className="mt-1 text-sm"><span className="font-medium text-purple-500">{experience.role}</span> <span className="text-zinc-300/70">• {experience.type}</span></div></div><Chip accent={index === 0 || index === 1}>{experience.period}</Chip></div><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300/80 text-left">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></Card>)}</div></Section>;
}