import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  copy: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function PageHero({ eyebrow, title, copy, primary, secondary }: Props) {
  return (
    <section className="page-hero shell">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{copy}</p>
      <div className="actions">
        <Link className="primary-button" href={primary.href}>{primary.label}</Link>
        {secondary && <Link className="text-link" href={secondary.href}>{secondary.label} →</Link>}
      </div>
    </section>
  );
}
