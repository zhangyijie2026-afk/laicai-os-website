"use client";

import { usePathname } from "next/navigation";

export function SiteAtmosphere() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="cloud-layer cloud-layer-back" />
      <div className="cloud-layer cloud-layer-front" />
      <div className="orange-aurora" />
      <div className="gold-dust" />
    </div>
  );
}
