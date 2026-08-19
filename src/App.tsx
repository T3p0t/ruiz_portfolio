import { useEffect, useState } from "react";
import "./index.css";

const skills = [
  { name: "HTML / CSS", note: "Familiar" },
  { name: "JavaScript", note: "Familiar" },
  { name: "PHP", note: "Exploring" },
  { name: "Java", note: "Familiar" },
  { name: "Python", note: "Basic" },
  { name: "C++", note: "Basic" },
];

const tools = ["VS Code", "Visual Studio", "Git", "GitHub", "Figma", "Photoshop"];

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["top", "Home"], ["about", "About"], ["skills", "Skills"], ["journey", "Journey"], ["projects", "Projects"], ["beyond", "Beyond code"], ["contact", "Contact"]];

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>Stephen Ruiz<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([id, label]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
        </nav>
        <button className="theme-toggle" type="button" aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} onClick={() => setDarkMode(!darkMode)}><span className="theme-icon">{darkMode ? "sun" : "moon"}</span></button>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-line" aria-hidden="true"><span>01</span><i /></div>
          <p className="eyebrow">BSIT student · Malaybalay City, Philippines</p>
          <h1 id="hero-title">Learning.<br /><em>Building.</em><br />Becoming.</h1>
          <div className="hero-bottom"><p className="hero-intro">I'm Stephen Ruiz, a 3rd-year IT student growing my skills in backend and web development, with the goal of becoming a capable full-stack developer.</p><a className="circle-link" href="#about"><span>↓</span>Explore<br />my journey</a></div>
          <div className="scribble scribble-arrow" aria-hidden="true">↳</div>
        </section>

        <section className="about-section reveal" id="about" aria-labelledby="about-title"><div className="section-label"><span>02</span><i /> About me</div><div className="about-layout"><h2 id="about-title">A developer<br /><em>in progress.</em></h2><div className="about-detail"><p>I'm a detail-oriented BSIT student at San Isidro College. I enjoy solving problems, exploring how things work, and turning what I learn into something practical.</p><p>Backend development has my attention right now, while I steadily work toward full-stack development. I am still learning, and that is an important part of how I see myself.</p></div></div></section>

        <section className="skills-section reveal" id="skills" aria-labelledby="skills-title"><div className="section-label"><span>03</span><i /> Skills & tools</div><div className="skills-layout"><div><h2 id="skills-title">Curious by<br /><em>default.</em></h2><p className="section-note">Some are familiar. Some are new. All are part of the work.</p></div><div className="skill-content"><div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill.name}><span className="skill-index">0{index + 1}</span><strong>{skill.name}</strong><span>{skill.note}</span></div>)}</div><div className="tools-block"><p className="mini-label">Tools I use</p><p className="tools">{tools.map((tool) => <span className={tool === "VS Code" ? "preferred" : ""} key={tool}>{tool}</span>)}</p></div></div></div><div className="hardware-note"><span className="bracket">[</span><p><strong>Also hands-on</strong><br />PC building · Hardware troubleshooting · Basic networking</p><span className="bracket">]</span></div></section>

        <section className="journey-section reveal" id="journey" aria-labelledby="journey-title"><div className="section-label"><span>04</span><i /> The journey</div><div className="journey-heading"><h2 id="journey-title">Still learning.<br /><em>Still building.</em></h2><p>Growth is the project. Right now, I am focusing on the foundations that will help me build useful things with confidence.</p></div><div className="journey-grid"><article><span>01</span><h3>Backend development</h3><p>Understanding the logic behind the interface and how systems connect.</p></article><article><span>02</span><h3>Full-stack web development</h3><p>Bringing front-end and back-end pieces together, one step at a time.</p></article><article><span>03</span><h3>Databases & networking</h3><p>Currently learning MySQL and building a stronger foundation in networking.</p></article></div><div className="journey-quote">learning <span>→</span> building <span>→</span> improving</div></section>

        <section className="projects-section reveal" id="projects" aria-labelledby="projects-title"><div className="section-label"><span>05</span><i /> Work in progress</div><div className="projects-placeholder"><div className="project-mark" aria-hidden="true"><span>+</span><span>+</span><span>+</span></div><div><h2 id="projects-title">Projects<br /><em>coming soon.</em></h2><p>I'm currently working on and refining several projects as I continue developing my skills in web and backend development. Selected projects will be showcased here in the future.</p></div><span className="placeholder-note">in progress / 2026</span></div></section>

        <section className="beyond-section reveal" id="beyond" aria-labelledby="beyond-title"><div className="section-label"><span>06</span><i /> Beyond code</div><div className="beyond-heading"><h2 id="beyond-title">More than<br /><em>the screen.</em></h2><p>Technology is one way I think and make. Music and hardware give me different ways to stay curious.</p></div><div className="interest-grid"><article className="interest-card music-card"><div className="interest-icon">♪</div><p className="mini-label">01 / Creative outlet</p><h3>Music & music<br />arrangement</h3><p>Outside of technology, I enjoy arranging songs for marching bands and exploring different musical ideas.</p><span className="staff-lines" aria-hidden="true" /></article><article className="interest-card hardware-card"><div className="interest-icon">⌘</div><p className="mini-label">02 / Hands-on</p><h3>PC building<br />& hardware</h3><p>I enjoy building PCs and troubleshooting hardware-related problems. It is one of my stronger practical skills.</p><span className="chip-shape" aria-hidden="true" /></article></div></section>

        <section className="experience-section reveal" aria-labelledby="experience-title"><div className="section-label"><span>07</span><i /> Experience</div><div className="experience-row"><div><p className="mini-label">Senior high school work immersion</p><h2 id="experience-title">Printing &<br /><em>document services</em></h2></div><div><p>Malaybalay City, Philippines</p><p className="muted">Approximately three weeks of workplace experience involving document printing, photo editing, document preparation, and basic computer-based tasks.</p></div></div></section>
      </main>

      <footer className="site-footer reveal" id="contact"><div className="section-label"><span>08</span><i /> Get in touch</div><div className="footer-layout"><div><h2>Let's<br /><em>connect.</em></h2><p>I'm open to learning, creating, and connecting with people interested in technology and creative work.</p></div><div className="footer-right"><a className="email-link" href="mailto:Nephets.ziur@gmail.com">Nephets.ziur@gmail.com <span>↗</span></a><div className="footer-bottom"><span>Stephen Ruiz · BSIT Student</span><a href="#top">Back to top ↑</a></div></div></div></footer>
    </div>
  );
}

export default App;
