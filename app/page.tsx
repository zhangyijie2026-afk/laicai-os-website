import Link from "next/link";
import { CallToAction } from "@/components/call-to-action";
import { capabilities, flywheel } from "@/content/capabilities";
import { project001 } from "@/content/projects";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="eyebrow">AI OPERATING SYSTEM FOR ORGANIZATIONS</div>
        <h1>Build brands.<br />Operate growth.<br /><span>Learn continuously.</span></h1>
        <p className="hero-copy">Laicai OS integrates strategy, content, knowledge, data and automation into one continuous operating system for long-term growth.</p>
        <div className="actions">
          <Link className="primary-button" href="/projects/maple-leaf-edu-travel">Explore Project 001</Link>
          <Link className="text-link" href="/about">Discover Laicai OS →</Link>
        </div>
        <div className="hero-grid" aria-hidden="true">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="loop-card"><div className="loop-center">L</div>{flywheel.map((item, index) => <span className="loop-label" style={{ "--i": index } as React.CSSProperties} key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section shell two-col">
        <div><div className="section-label">WHAT IS LAICAI OS</div><h2>An operating system, not another AI tool.</h2></div>
        <div className="large-copy"><p>Laicai OS helps organizations transform fragmented ideas, content, knowledge and data into a system that can learn, improve and grow.</p><Link className="text-link" href="/about">Read our thesis →</Link></div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div className="section-label">CORE CAPABILITIES</div><h2>One system. Four connected capabilities.</h2></div>
        <div className="capability-grid">{capabilities.map((item) => <Link className="capability-card" href="/capabilities" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.summary}</p></Link>)}</div>
      </section>

      <section className="section shell"><div className="flywheel-panel"><div><div className="section-label">THE GROWTH FLYWHEEL</div><h2>Every output becomes new intelligence.</h2><p>Knowledge drives strategy. Strategy creates content. Content generates distribution and data. Data improves learning and automation, creating the next cycle of growth.</p></div><div className="flywheel-list">{flywheel.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></div></section>

      <section className="section shell"><div className="section-label">PROJECT SYSTEM</div><article className="project-card"><div className="project-meta"><span>{project001.number}</span><span>{project001.category}</span></div><div className="project-content"><div><h2>{project001.name}</h2><p className="project-statement">{project001.positioning}</p></div><div><p>{project001.thesis}</p><Link className="text-link light" href="/projects/maple-leaf-edu-travel">View incubation thesis →</Link></div></div></article></section>
      <CallToAction label="BUILD WITH LAICAI" title="Turn your next idea into an operating system." copy="Start a conversation about a project, operating challenge or partnership." href="/contact" action="Start a conversation" />
    </>
  );
}
