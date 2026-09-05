import { Code2, Database, Layers, Server, Wrench } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/useLanguage";
import type { Level } from "../types/portfolio";
const levelBadge: Record<Level, string> = { basic: "border-zinc-700/60 text-zinc-300", intermediate: "border-yellow-300/60 text-yellow-200", advanced: "border-emerald-600/40 text-emerald-200" };
const skillIcons = { Server, Code2, Database, Wrench, Layers };
export function SkillsSection() {
  const { portfolio, t } = useLanguage();
  return <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}><div className="grid gap-4 md:grid-cols-2">{portfolio.skills.map((group) => { const Icon = skillIcons[group.icon]; return <Card key={group.title}><div className="flex items-center gap-2 text-sm font-semibold"><Icon size={18} />{group.title}</div><div className="mt-4 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill.name} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${levelBadge[skill.level]}`}><span className="font-medium">{skill.name}</span><span className="text-zinc-300/70">• {t.skills.levels[skill.level]}</span></span>)}</div></Card>; })}</div></Section>;
}