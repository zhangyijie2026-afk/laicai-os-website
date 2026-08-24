import Link from "next/link";
import { CinematicVideo } from "@/components/cinematic-video";

const delay = (milliseconds: number) => ({ animationDelay: `${milliseconds}ms` });

export default function Home() {
  return (
    <div className="cinematic-home">
      <CinematicVideo />
      <div className="bottom-blur-overlay" aria-hidden="true" />
      <section className="home-hero">
        <div className="hero-main">
          <div className="hero-meta animate-blur-fade-up" style={delay(200)}>
            <span>● Project 001 Live</span>
            <span>▱ 16 Published Assets</span>
            <span>↗ 5,326 Verified Views</span>
          </div>
          <h1 className="animate-blur-fade-up" style={delay(300)}>Turn Ideas<br className="mobile-break" /> Into Wealth.</h1>
          <p className="animate-blur-fade-up" style={delay(400)}>Laicai OS connects strategy, content, knowledge, data and automation—turning every idea into lasting, compounding value.</p>
          <div className="hero-actions">
            <Link className="solid-cta animate-blur-fade-up" style={delay(500)} href="/projects/maple-leaf-edu-travel">▶ Explore Project 001</Link>
            <Link className="glass-cta liquid-glass animate-blur-fade-up" style={delay(600)} href="/about">Discover Laicai OS →</Link>
          </div>
        </div>
        <div className="hero-shortcuts animate-blur-fade-up" style={delay(700)}>
          <Link className="liquid-glass" href="/capabilities">✦ Capabilities</Link>
          <Link className="liquid-glass" href="/projects/maple-leaf-edu-travel/youtube">↗ Open Workbench</Link>
        </div>
      </section>
    </div>
  );
}
