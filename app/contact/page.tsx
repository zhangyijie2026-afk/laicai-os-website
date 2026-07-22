import type { Metadata } from "next";
import { whatsappUrl } from "@/content/navigation";

export const metadata: Metadata = { title: "Contact — Laicai OS", description: "Start a conversation with Laicai OS about projects, operating systems or partnerships." };

export default function Contact() {
  return <>
    <section className="page-hero shell"><div className="eyebrow">CONTACT</div><h1>Start with what you are building.</h1><p>We welcome focused conversations about project incubation, operating-system design, brand and content systems, and partnerships.</p><div className="actions"><a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Message Laicai OS on WhatsApp</a></div></section>
    <section className="section shell contact-grid"><div><div className="section-label">SUITABLE CONVERSATIONS</div><h2>Where we can begin.</h2></div><div className="numbered-list"><article><span>01</span><div><h3>Project incubation</h3><p>Turning an early thesis into a structured project and learning plan.</p></div></article><article><span>02</span><div><h3>Operating-system design</h3><p>Connecting strategy, execution, knowledge and feedback.</p></div></article><article><span>03</span><div><h3>Brand and content systems</h3><p>Creating repeatable decisions and workflows across channels.</p></div></article><article><span>04</span><div><h3>Partnerships</h3><p>Exploring aligned capabilities, distribution or project opportunities.</p></div></article></div></section>
    <section className="section shell email-panel"><div><div className="section-label">EMAIL ALTERNATIVE</div><h2>zhangyijie2026@gmail.com</h2><p>Email remains available as an alternative for project, operating-system and partnership conversations.</p></div><a className="primary-button inverted" href="mailto:zhangyijie2026@gmail.com">Send an email</a></section>
  </>;
}
