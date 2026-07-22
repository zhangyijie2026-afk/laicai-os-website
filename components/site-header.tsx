import Link from "next/link";
import { navigation } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/" aria-label="Laicai OS home">
          <span className="mark">L</span>
          <span>Laicai OS</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link className="nav-cta" href="/contact">Start a conversation</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
