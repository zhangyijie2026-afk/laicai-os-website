"use client";

import Link from "next/link";
import { ChevronDown, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";

const groups = [
  {
    label: "About",
    href: "/about",
    items: [
      ["Overview", "/about"],
      ["The thesis", "/about#the-problem"],
      ["Operating principles", "/about#principles"],
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    items: [
      ["All capabilities", "/capabilities"],
      ["Brand Intelligence", "/capabilities#brand-intelligence"],
      ["Content Operations", "/capabilities#content-operations"],
      ["Knowledge Systems", "/capabilities#knowledge-systems"],
      ["Growth Automation", "/capabilities#growth-automation"],
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    items: [
      ["Project index", "/projects"],
      ["Project 001", "/projects/maple-leaf-edu-travel"],
      ["Maple Leaf Edu Travel", "/projects/maple-leaf-edu-travel"],
    ],
  },
  {
    label: "Workbench",
    href: "/projects/maple-leaf-edu-travel/youtube",
    items: [
      ["YouTube overview", "/projects/maple-leaf-edu-travel/youtube"],
      ["Video library", "/projects/maple-leaf-edu-travel/youtube/videos"],
      ["Daily momentum", "/projects/maple-leaf-edu-travel/youtube/daily"],
      ["Retention diagnosis", "/projects/maple-leaf-edu-travel/youtube/retention"],
    ],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="site-header">
      <div className="site-nav-shell">
        <Link className="brand" href="/" aria-label="Laicai OS home" onClick={() => setMobileOpen(false)}>
          <img src="/laicai-logo-mark.png" alt="" />
          <span>LAICAI <em>OS</em></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {groups.map((group) => (
            <div className="nav-group" key={group.label} onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
              <Link href={group.href}>{group.label}<ChevronDown size={14} /></Link>
              <div className={`nav-dropdown liquid-glass ${openGroup === group.label ? "open" : ""}`}>
                <span>{group.label}</span>
                {group.items.map(([label, href]) => <Link key={href + label} href={href}>{label}</Link>)}
              </div>
            </div>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="search-pill liquid-glass" href="/projects/maple-leaf-edu-travel/youtube/videos"><span>Search</span><Search size={17} /></Link>
          <Link className="profile-pill liquid-glass" href="/contact" aria-label="Contact Laicai OS"><User size={17} /></Link>
          <button className="mobile-toggle liquid-glass" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {groups.map((group) => (
          <div key={group.label}>
            <Link className="mobile-parent" href={group.href} onClick={() => setMobileOpen(false)}>{group.label}</Link>
            <div>{group.items.map(([label, href]) => <Link key={href + label} href={href} onClick={() => setMobileOpen(false)}>{label}</Link>)}</div>
          </div>
        ))}
        <Link className="mobile-parent" href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
