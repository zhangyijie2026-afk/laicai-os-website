import Link from "next/link";
import { workbenchNav, youtubeSummary } from "@/content/youtube-workbench";

export function YoutubeWorkbenchShell({ active, eyebrow, title, copy, children }: { active: string; eyebrow: string; title: string; copy: string; children: React.ReactNode }) {
  return <div className="workbench-page"><div className="workbench-shell">
    <aside className="workbench-sidebar"><Link className="workbench-back" href="/projects/maple-leaf-edu-travel">← Project 001</Link><div className="workbench-channel"><span className="youtube-icon" aria-hidden="true">▶</span><div><strong>YouTube</strong><small>{youtubeSummary.channel}</small></div></div><nav aria-label="YouTube Workbench navigation">{workbenchNav.map((item) => <Link className={active === item.label ? "active" : ""} href={item.href} key={item.href}>{item.label}<span>›</span></Link>)}</nav><div className="workbench-system-note"><span>LAICAI OS</span><p>Content → Distribution → Measurement → Learning</p></div></aside>
    <main className="workbench-main"><header className="workbench-header"><div><p className="workbench-eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div><div className="snapshot-pill"><i />{youtubeSummary.lastUpdated}</div></header>{children}</main>
  </div></div>;
}

export function MetricCard({ label, value, detail, accent = false }: { label: string; value: string; detail: string; accent?: boolean }) { return <article className={`metric-card${accent ? " accent" : ""}`}><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>; }
