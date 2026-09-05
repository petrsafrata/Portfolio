import { Code2, Github } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/useLanguage";
export function ProjectsSection() {
  const { portfolio, t } = useLanguage();
  return <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}><div className="grid gap-4 md:grid-cols-2">{portfolio.projects.map((project) => <Card key={project.title}><div className="flex flex-wrap items-start justify-between gap-3"><div className="flex items-center gap-2 text-sm font-semibold text-zinc-100"><Code2 size={18} className="text-purple-500" />{project.title}</div><a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"><Github size={16} /><span className="text-purple-500">{t.projects.githubLabel}</span></a></div><div className="mt-3 flex flex-wrap gap-2">{project.stack.map((technology) => <Chip key={technology}>{technology}</Chip>)}</div><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300/80 text-left">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>{project.note && <p className="mt-4 text-sm text-zinc-200">{project.note}</p>}</Card>)}</div></Section>;
}