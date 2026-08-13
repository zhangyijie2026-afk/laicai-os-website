import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/"><img src="/laicai-logo-mark.png" alt="" /><span>LAICAI <em>OS</em></span></Link>
          <p>An AI operating system that turns ideas into lasting value.</p>
        </div>
        <div className="footer-links"><strong>Explore</strong><Link href="/about">About</Link><Link href="/capabilities">Capabilities</Link><Link href="/projects">Projects</Link></div>
        <div className="footer-links"><strong>Workbench</strong><Link href="/projects/maple-leaf-edu-travel/youtube">YouTube overview</Link><Link href="/projects/maple-leaf-edu-travel/youtube/videos">Videos</Link><Link href="/projects/maple-leaf-edu-travel/youtube/retention">Retention</Link></div>
        <div className="footer-links"><strong>Connect</strong><Link href="/contact">Contact</Link><a href="mailto:zhangyijie2026@gmail.com">Email</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Laicai OS</span><span>Turn Ideas Into Wealth.</span></div>
    </footer>
  );
}
