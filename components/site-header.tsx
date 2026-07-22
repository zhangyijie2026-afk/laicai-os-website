import Link from "next/link";
import { navigation, whatsappUrl } from "@/content/navigation";

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
          <a
            className="nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a conversation
          </a>
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
