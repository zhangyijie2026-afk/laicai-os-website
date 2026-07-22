import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CallToAction } from "@/components/call-to-action";
import { capabilities, flywheel } from "@/content/capabilities";

export const metadata: Metadata = { title: "Capabilities — Laicai OS", description: "Four connected capabilities for brand intelligence, content, knowledge and growth." };

export default function Capabilities() {
  return <>
    <PageHero eyebrow="CAPABILITIES" title="Four capabilities. One connected operating model." copy="Each capability solves a distinct operating problem. Together, they create a loop that can learn and improve." primary={{ href: "/contact", label: "Discuss a use case" }} secondary={{ href: "/projects/maple-leaf-edu-travel", label: "See Project 001 in practice" }} />
    <section className="section shell capability-details">{capabilities.map((item) => <article key={item.number}><div className="capability-title"><span>{item.number}</span><h2>{item.title}</h2><p>{item.summary}</p></div><div className="detail-grid"><div><strong>Problem</strong><p>{item.problem}</p></div><div><strong>System response</strong><p>{item.response}</p></div><div><strong>Representative outputs</strong><ul>{item.outputs.map((output) => <li key={output}>{output}</li>)}</ul></div><div><strong>Evidence signal</strong><p>{item.signal}</p></div></div></article>)}</section>
    <section className="section shell"><div className="flywheel-panel"><div><div className="section-label">CONNECTED OPERATING MODEL</div><h2>The output of one capability becomes the input to another.</h2><p>No capability is designed to operate as an isolated service. The loop connects decisions, execution, signals and learning.</p></div><div className="flywheel-list">{flywheel.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></div></section>
    <CallToAction label="DISCUSS A USE CASE" title="Where is your operating system fragmented?" copy="Start with the decisions, workflows or knowledge that are currently disconnected." href="/contact" action="Start a conversation" />
  </>;
}
