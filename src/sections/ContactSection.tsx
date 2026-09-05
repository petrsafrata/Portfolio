import { Briefcase, Github, Mail } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Section } from "../components/ui/Section";
import { useLanguage } from "../context/useLanguage";
const linkIcons = { Mail, Github, Briefcase };
export function ContactSection() {
  const { portfolio, t } = useLanguage();
  return <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}><div className="grid gap-4 md:grid-cols-1"><Card><div className="flex items-center gap-2 text-sm font-semibold"><Mail size={18} />{t.contact.heading}</div><p className="mt-3 text-sm text-zinc-300/80 text-left">{t.contact.description}</p><div className="mt-5 flex flex-wrap gap-3">{portfolio.links.map((link) => { const Icon = linkIcons[link.icon]; return <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"><Icon size={18} /><span className="font-medium">{link.label}</span></a>; })}</div></Card></div></Section>;
}