import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand" href="/">
            <span className="mark">L</span><span>Laicai OS</span>
          </Link>
          <p>AI operating system for organizations that want to build brands, operate growth and learn continuously.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/about">About</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/projects">Projects</Link>
        </div>
        <div className="footer-links">
          <strong>Connect</strong>
          <Link href="/contact">Contact</Link>
          <a href="mailto:zhangyijie2026@gmail.com">Email</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Laicai OS</span><span>Build systems that learn.</span></div>
    </footer>
  );
}
