import Link from "next/link";

export function CallToAction({ label, title, copy, href, action }: { label: string; title: string; copy: string; href: string; action: string }) {
  return (
    <section className="section shell cta-panel">
      <div className="section-label">{label}</div>
      <h2>{title}</h2>
      <p>{copy}</p>
      <Link className="primary-button" href={href}>{action}</Link>
    </section>
  );
}
