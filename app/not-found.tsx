import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero shell">
      <div className="eyebrow">404 — PAGE NOT FOUND</div>
      <h1>This page is outside the system.</h1>
      <p>The address may have changed, or the page may no longer be available.</p>
      <div className="actions">
        <Link className="primary-button" href="/">Return home</Link>
        <Link className="text-link" href="/projects">Explore projects →</Link>
      </div>
    </section>
  );
}
