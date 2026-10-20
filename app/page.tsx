const SHARK_DEFS = (
  <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
    <defs>
      <linearGradient id="counter" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#031923" />
        <stop offset="0.55" stopColor="#0f3b4b" />
        <stop offset="1" stopColor="#7fb3b8" />
      </linearGradient>
      <symbol id="shark" viewBox="0 0 400 130">
        <g className="tail">
          <path d="M74 58C54 48 34 30 12 10c10 24 22 44 30 54-8 12-16 28-8 46 16-14 30-30 40-40z" fill="#04202c" />
        </g>
        <path d="M398 67C374 46 318 35 262 35 200 35 130 46 70 58v12c60 10 130 22 192 20 58-2 112-10 136-23z" fill="url(#counter)" />
        <path d="M204 37C226 8 250 3 264 8c-9 9-13 19-14 29z" fill="#04202c" />
        <path d="M300 86c-10 20-30 34-56 40 14-16 22-28 24-38z" fill="#06293a" />
        <path d="M122 54c-8-8-16-12-24-12 4 6 6 10 8 14z" fill="#04202c" />
        <path d="M322 52q6 8 2 18M334 52q6 8 2 18M346 54q6 8 2 16" stroke="#7fb3b8" strokeOpacity=".35" strokeWidth="1.5" fill="none" />
        <circle cx="368" cy="58" r="2.4" fill="#cfe7e8" />
      </symbol>
    </defs>
  </svg>
);

const projects = [
  {
    name: "GrantCurrent",
    sub: "Funding intelligence for WaterAid Canada",
    body: "Built at The Foundry hackathon for a two-person fundraising team that can't chase every grant. I wrote the decision engine: it scores each Canadian funder on hard eligibility gates and weighted strategic fit, attaches a source link and confidence level to every claim, and flags unknowns instead of guessing.",
    extra: "I also analyzed a synthetic history of 104 applications. 59% of fundraising hours went to lost bids, and one award made up 74% of all funding, so I added a check that excludes it.",
    stats: [["8", "eligibility gates"], ["7", "fit criteria"], ["28", "public sources"]],
    tags: "Python, FastAPI, SQLite, Nginx, Docker, Railway",
    href: "https://tinyurl.com/GrantCurrent",
    cta: "Open the live demo",
  },
  {
    name: "duels.io",
    sub: "Real-time multiplayer browser game",
    body: "An authoritative Node.js server keeps every player's state in sync, while the TypeScript and PixiJS client holds 60 FPS. Game state travels as binary over WebRTC DataChannels, with WebSockets handling signaling.",
    extra: "",
    stats: [["30%", "smaller packets than JSON"], ["25%", "less server overhead"], ["20%", "lower latency"]],
    tags: "TypeScript, Node.js, WebSockets, WebRTC, PixiJS, Vite",
    href: "https://github.com/ieatpiYT/duels.io",
    cta: "Read the source",
  },
];

const jobs = [
  {
    when: "Sep 2026 to now",
    role: "Curriculum Development Intern",
    org: "Cuddles Learning",
    points: [
      "Cut resource development time by 30% by evaluating educational tools and AI-powered workflows.",
      "Raised student engagement by 50% with project-based lessons built around problem-solving and logic.",
      "Improved resource reuse by 25% by building reusable materials with instructors and staff.",
    ],
  },
  {
    when: "Aug 2025 to Jun 2026",
    role: "Lead Software Developer",
    org: "Lunamics",
    points: [
      "Led programmers, 3D artists, and designers to launch a Roblox game with 10,000+ monthly visits.",
      "Built the gameplay logic, player interaction, and progression systems in Lua.",
    ],
  },
];

export default function Home() {
  return (
    <>
      {SHARK_DEFS}
      <div className="sea" />
      <div className="caustics" />
      <div className="abyss" />
      <div className="shark s1" aria-hidden="true"><svg viewBox="0 0 400 130"><use href="#shark" /></svg></div>
      <div className="shark s2" aria-hidden="true"><svg viewBox="0 0 400 130"><use href="#shark" /></svg></div>

      <main className="wrap">
        <nav className="nav">
          <a href="#top" className="brand">Eric Liu</a>
          <div className="links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="top" className="hero">
          <div className="copy">
            <h1>
              <span className="line"><span style={{ ["--i" as string]: 0 }}>Real-time systems,</span></span>
              <span className="line"><span style={{ ["--i" as string]: 1 }}>and tools people</span></span>
              <span className="line"><span style={{ ["--i" as string]: 2 }}>can trust.</span></span>
            </h1>
            <p className="intro">
              I&apos;m Eric Zitai Liu, a computer science student at McMaster University. I build multiplayer
              games, low-latency networking, and decision tools, most recently GrantCurrent for WaterAid Canada.
            </p>
            <div className="cta">
              <a className="btn solid" href="#work">See my work</a>
              <a className="btn" href="https://github.com/ieatpiYT" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="porthole">
            <div className="tick" />
            <div className="brass">
              <div className="glass">
                <span className="mono">EL</span>
                <div className="photo" role="img" aria-label="Portrait of Eric Liu" />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="sec">
          <h2 className="head">Work</h2>
          {projects.map((p) => (
            <article className="proj" key={p.name}>
              <div>
                <h3>{p.name}</h3>
                <p className="sub">{p.sub}</p>
                <p className="tags">{p.tags}</p>
                <a className="link" href={p.href} target="_blank" rel="noreferrer">{p.cta}</a>
              </div>
              <div>
                <p>{p.body}</p>
                {p.extra && <p>{p.extra}</p>}
                <dl className="stats">
                  {p.stats.map(([n, l]) => (
                    <div key={l}><dt>{n}</dt><dd>{l}</dd></div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </section>

        <section id="experience" className="sec">
          <h2 className="head">Experience</h2>
          {jobs.map((j) => (
            <article className="job" key={j.org}>
              <p className="when">{j.when}</p>
              <div>
                <h3>{j.role}, {j.org}</h3>
                <ul>{j.points.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
          <article className="job">
            <p className="when">Graduating Jun 2030</p>
            <div>
              <h3>McMaster University</h3>
              <ul><li>Bachelor of Applied Science in Computer Science.</li></ul>
            </div>
          </article>
          <p className="skills">
            <b>Languages</b> TypeScript, JavaScript, Python, Java, Lua, C++, C, SQL, HTML5, CSS3, Haskell<br />
            <b>Frameworks</b> Node.js, Express.js, React, Socket.io, PixiJS, WebRTC, FastAPI, Nginx<br />
            <b>Tools</b> PostgreSQL, SQLite, Docker, Railway, Vite, WebSockets, REST APIs, Binary Serialization
          </p>
        </section>

        <footer id="contact" className="foot">
          <h2>Let&apos;s talk.</h2>
          <div className="links">
            <a href="mailto:ericzitailiu@gmail.com">ericzitailiu@gmail.com</a>
            <a href="https://www.linkedin.com/in/eric-liu-b0694442a/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ieatpiYT" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </footer>
      </main>
    </>
  );
}