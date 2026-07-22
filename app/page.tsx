const capabilities = [
  {
    number: "01",
    title: "Brand Intelligence",
    text: "Turn positioning, identity and market insight into a coherent brand system.",
  },
  {
    number: "02",
    title: "Content Operations",
    text: "Build repeatable content workflows across channels, languages and teams.",
  },
  {
    number: "03",
    title: "Knowledge Systems",
    text: "Capture decisions, processes and data so the organization learns continuously.",
  },
  {
    number: "04",
    title: "Growth Automation",
    text: "Connect strategy, execution and feedback into an operating loop that compounds.",
  },
];

const flywheel = [
  "Knowledge",
  "Strategy",
  "Content",
  "Distribution",
  "Data",
  "Learning",
  "Automation",
  "Growth",
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Laicai OS home">
          <span className="mark">L</span>
          <span>Laicai OS</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow">AI OPERATING SYSTEM FOR ORGANIZATIONS</div>
        <h1>
          Build brands.
          <br />
          Operate growth.
          <br />
          <span>Learn continuously.</span>
        </h1>
        <p className="hero-copy">
          Laicai OS integrates strategy, content, knowledge, data and automation
          into one continuous operating system for long-term growth.
        </p>
        <div className="actions">
          <a className="primary-button" href="#projects">Explore Project 001</a>
          <a className="text-link" href="#about">Discover Laicai OS →</a>
        </div>
        <div className="hero-grid" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="loop-card">
            <div className="loop-center">L</div>
            {flywheel.map((item, index) => (
              <span
                className="loop-label"
                style={{ "--i": index } as React.CSSProperties}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell two-col" id="about">
        <div>
          <div className="section-label">WHAT IS LAICAI OS</div>
          <h2>An operating system, not another AI tool.</h2>
        </div>
        <div className="large-copy">
          <p>
            Laicai OS helps organizations transform fragmented ideas, content,
            knowledge and data into a system that can learn, improve and grow.
          </p>
          <p>
            It is designed for businesses, founders, creators and teams building
            long-term brand value.
          </p>
        </div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-heading">
          <div className="section-label">CORE CAPABILITIES</div>
          <h2>One system. Four connected capabilities.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="flywheel-panel">
          <div>
            <div className="section-label">THE GROWTH FLYWHEEL</div>
            <h2>Every output becomes new intelligence.</h2>
            <p>
              Knowledge drives strategy. Strategy creates content. Content
              generates distribution and data. Data improves learning and
              automation, creating the next cycle of growth.
            </p>
          </div>
          <div className="flywheel-list">
            {flywheel.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-label">PROJECT SYSTEM</div>
        <article className="project-card">
          <div className="project-meta">
            <span>PROJECT 001</span>
            <span>INTERNATIONAL EDUCATION</span>
          </div>
          <div className="project-content">
            <div>
              <h2>Maple Leaf Edu Travel</h2>
              <p className="project-statement">
                把孩子送到中国研学，首选 Maple Leaf Edu Travel，定义中国 K12
                研学的教育品牌。
              </p>
            </div>
            <div>
              <p>
                Project 001 is not simply about creating social media accounts.
                It is the first real-world validation of whether Laicai OS can
                incubate an international brand from zero.
              </p>
              <a className="text-link light" href="#contact">
                View incubation thesis →
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="section shell contact" id="contact">
        <div className="section-label">BUILD WITH LAICAI</div>
        <h2>Turn your next idea into an operating system.</h2>
        <p>
          Laicai OS is currently building its first project and long-term
          platform foundation.
        </p>
        <a className="primary-button" href="mailto:zhangyijie2026@gmail.com">
          Start a conversation
        </a>
      </section>

      <footer className="footer shell">
        <div className="brand">
          <span className="mark">L</span>
          <span>Laicai OS</span>
        </div>
        <p>Build systems that learn. Build growth that compounds.</p>
        <span>© 2026 Laicai OS</span>
      </footer>
    </main>
  );
}
