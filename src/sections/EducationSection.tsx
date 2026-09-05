import { GraduationCap } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/useLanguage";
export function EducationSection() {
  const { portfolio, t } = useLanguage();
  return <Section id="education" title={t.education.title} subtitle={t.education.subtitle}><div className="grid gap-4">{portfolio.education.map((education) => <Card key={education.school}><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex items-center gap-2 text-sm font-semibold text-zinc-100"><GraduationCap size={18} />{education.school}</div><div className="mt-1 text-sm"><span className="font-medium text-purple-500">{education.program}</span> <span className="text-zinc-400">• {education.degree}</span></div></div><Chip>{education.period}</Chip></div><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300/80 text-left">{education.notes.map((note) => <li key={note}>{note}</li>)}</ul></Card>)}</div></Section>;
}