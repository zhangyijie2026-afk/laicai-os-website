import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { project001 } from "@/content/projects";

export const metadata: Metadata = { title: "Projects — Laicai OS", description: "Controlled environments for applying and validating the Laicai OS operating model." };
const lifecycle = ["Discover", "Define", "Build", "Operate", "Learn", "Scale"];

export default function Projects() {
  return <>
    <PageHero eyebrow="PROJECT SYSTEM" title="Real projects turn the operating model into evidence." copy="Projects are controlled environments for applying Laicai OS to meaningful problems with real users and reusable learning." primary={{ href: "/projects/maple-leaf-edu-travel", label: "View Project 001" }} />
    <section className="section shell"><div className="section-heading"><div className="section-label">SELECTION PRINCIPLES</div><h2>Projects must create useful evidence.</h2></div><div className="tile-grid"><article><h3>Meaningful problem</h3><p>A real operating challenge worth solving.</p></article><article><h3>Real users</h3><p>A clear audience whose needs can shape decisions.</p></article><article><h3>Measurable outcomes</h3><p>Signals that can be defined before claims are made.</p></article><article><h3>Reusable knowledge</h3><p>Learning that improves the wider operating system.</p></article></div></section>
    <section className="section shell"><div className="section-label">PROJECT LIFECYCLE</div><div className="lifecycle">{lifecycle.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></section>
    <section className="section shell"><div className="section-label">PROJECT INDEX</div><article className="project-card"><div className="project-meta"><span>{project001.number}</span><span>{project001.status}</span></div><div className="project-content"><div><h2>{project001.name}</h2><p className="project-statement">{project001.positioning}</p></div><div><p>{project001.thesis}</p><Link className="text-link light" href="/projects/maple-leaf-edu-travel">View Project 001 →</Link></div></div></article><div className="future-project"><span>FUTURE PROJECTS</span><p>New projects will be added selectively when they provide a meaningful environment for learning and validation.</p></div></section>
  </>;
}
