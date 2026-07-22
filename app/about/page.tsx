import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "About — Laicai OS", description: "The thesis, principles and long-term vision behind Laicai OS." };

const principles = [
  ["System over task", "Design the operating loop, not only the next output."],
  ["Knowledge over memory", "Capture decisions and context so capability survives handoffs."],
  ["Compounding over campaigns", "Make every cycle improve the system that produces the next one."],
  ["Human judgment with AI leverage", "Use AI to extend thoughtful operators, not to remove accountability."],
];

export default function About() {
  return <>
    <PageHero eyebrow="ABOUT LAICAI OS" title="Organizations need a system for AI-enabled work." copy="Laicai OS connects strategy, execution, knowledge and feedback so an organization becomes more capable with every project." primary={{ href: "/capabilities", label: "Explore capabilities" }} secondary={{ href: "/projects", label: "View our projects" }} />
    <section className="section shell split-list"><div><div className="section-label">THE PROBLEM</div><h2>Fragmentation prevents learning.</h2></div><div><p>Strategy, content, knowledge, tools and data often live in separate places. Teams repeat decisions, lose context and automate isolated tasks without improving the whole organization.</p><p>More AI tools do not solve that operating problem by themselves.</p></div></section>
    <section className="section shell"><div className="section-heading"><div className="section-label">THE RESPONSE</div><h2>One continuous learning and execution loop.</h2><p className="section-intro">Laicai OS turns knowledge into strategy, strategy into execution, and real-world feedback into the next cycle of better decisions.</p></div></section>
    <section className="section shell"><div className="section-heading"><div className="section-label">WHO IT IS FOR</div><h2>Teams building durable value.</h2></div><div className="tile-grid"><article><h3>Businesses</h3><p>Connect brand, content and growth work around shared decisions.</p></article><article><h3>Founders</h3><p>Turn a thesis into an operating model that can be tested and improved.</p></article><article><h3>Creators</h3><p>Build repeatable systems around knowledge and distribution.</p></article><article><h3>Content teams</h3><p>Replace fragmented production with a learning workflow.</p></article></div></section>
    <section className="section shell"><div className="section-heading"><div className="section-label">OPERATING PRINCIPLES</div><h2>How the system is designed.</h2></div><div className="numbered-list">{principles.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
    <section className="section shell vision-panel"><div className="section-label">LONG-TERM VISION</div><h2>An organization that becomes more capable with every project.</h2><p>Each operating cycle should leave behind clearer knowledge, stronger systems and better judgment for the next one.</p><a className="primary-button" href="/capabilities">Explore capabilities</a></section>
  </>;
}
