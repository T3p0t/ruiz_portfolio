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
    document.querySelectorAll(".reveal, .reveal-item").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const progressBar = document.querySelector<HTMLElement>(".scroll-progress");
    let frame = 0;
    const updateProgress = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        progressBar?.style.setProperty("transform", `scaleX(${progress})`);
        frame = 0;
      });
    };
    const magneticElements = window.matchMedia("(hover: hover) and (pointer: fine)").matches
      ? document.querySelectorAll<HTMLElement>(".circle-link, .skybound-project")
      : [];
    const moveMagnetic = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const bounds = element.getBoundingClientRect();
      element.style.setProperty("--magnetic-x", `${(event.clientX - (bounds.left + bounds.width / 2)) * 0.08}px`);
      element.style.setProperty("--magnetic-y", `${(event.clientY - (bounds.top + bounds.height / 2)) * 0.08}px`);
    };
    const resetMagnetic = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      element.style.setProperty("--magnetic-x", "0px");
      element.style.setProperty("--magnetic-y", "0px");
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    magneticElements.forEach((element) => {
      element.addEventListener("pointermove", moveMagnetic);
      element.addEventListener("pointerleave", resetMagnetic);
    });
    updateProgress();
    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (frame) cancelAnimationFrame(frame);
      magneticElements.forEach((element) => {
        element.removeEventListener("pointermove", moveMagnetic);
        element.removeEventListener("pointerleave", resetMagnetic);
      });
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["top", "Home"], ["about", "About"], ["skills", "Skills"], ["journey", "Journey"], ["projects", "Projects"], ["beyond", "Beyond code"], ["contact", "Contact"]];

  return (
    <div className="site-shell" id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <style>{`.hero-reveal{opacity:0;transform:translateY(16px);animation:hero-enter .7s ease forwards}.hero-reveal-1{animation-delay:.05s}.hero-reveal-2{animation-delay:.14s}.hero-reveal-3{animation-delay:.23s}.hero-reveal-4{animation-delay:.34s}.reveal:not(.is-visible){transform:translateY(24px) scale(.985)}.reveal.is-visible{transform:translateY(0) scale(1)}.main-nav a{position:relative}.main-nav a::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1px;background:var(--purple);transition:right .25s ease}.main-nav a:hover::after{right:0}.skybound-project{display:grid;grid-template-columns:.7fr 1.6fr .7fr;align-items:center;gap:5vw;padding:70px 0 10px;border-top:1px solid var(--line);transition:opacity .7s ease,transform .7s ease,box-shadow .25s ease}.skybound-project.reveal{opacity:0;transform:translateY(-80px)}.skybound-project.reveal.is-visible{opacity:1;transform:translateY(0)}.skybound-project.is-visible:hover{transform:translateY(-4px);box-shadow:0 12px 24px color-mix(in srgb,var(--ink) 10%,transparent)}.skybound-project:hover .skybound-visual{border-color:var(--purple);transform:scale(1.025) rotate(-22deg)}.skybound-visual{width:150px;height:150px;border:1px dashed var(--purple);border-radius:50%;display:grid;place-items:center;color:var(--purple);font:54px var(--serif);transform:rotate(-22deg);animation:skybound-float 4.5s ease-in-out infinite;animation-play-state:paused;transition:transform .25s ease,border-color .25s ease}.skybound-project.is-visible .skybound-visual{animation-play-state:running}.skybound-copy h2{font-size:clamp(48px,6.5vw,92px)}.skybound-copy p:last-child{max-width:340px;line-height:1.5;font-size:16px;margin:22px 0 0;color:var(--muted)}@keyframes hero-enter{to{opacity:1;transform:translateY(0)}}@keyframes skybound-float{0%,100%{transform:translateY(0) rotate(-22deg)}50%{transform:translateY(-9px) rotate(-18deg)}}@media(max-width:700px){.skybound-project{grid-template-columns:1fr;min-height:570px;padding-top:55px;gap:35px}.skybound-visual{width:115px;height:115px;font-size:42px}.skybound-copy h2{font-size:56px}.skybound-project .placeholder-note{justify-self:start;align-self:auto}}@media(prefers-reduced-motion:reduce){.hero-reveal{opacity:1;transform:none;animation:none}.reveal:not(.is-visible),.reveal.is-visible{opacity:1;transform:none;transition:none}.main-nav a::after{display:none}.skybound-project.reveal,.skybound-project.reveal.is-visible{opacity:1;transform:none;transition:none}.skybound-visual,.skybound-project.is-visible .skybound-visual{animation:none;transition:none}}`}</style>
      <style>{`.scroll-progress{position:fixed;top:0;left:0;right:0;height:2px;background:var(--purple);transform:scaleX(0);transform-origin:left center;z-index:10;pointer-events:none}.hero::before{content:"";position:absolute;inset:8% -12%;background:radial-gradient(circle at 30% 35%,color-mix(in srgb,var(--purple) 18%,transparent),transparent 34%);opacity:.32;pointer-events:none;animation:hero-atmosphere 14s ease-in-out infinite alternate}.hero-reveal-3{filter:blur(5px);animation-name:hero-enter-sharp}.reveal-item{opacity:0;transform:translateY(14px);transition:opacity .55s ease,transform .55s ease}.reveal-item.is-visible{opacity:1;transform:translateY(0)}.skill-row.reveal-item{transition-delay:var(--stagger,0ms)}.reveal-item:nth-child(2){transition-delay:.08s}.reveal-item:nth-child(3){transition-delay:.16s}.reveal-item:nth-child(4){transition-delay:.24s}.reveal-item:nth-child(5){transition-delay:.32s}.reveal-item:nth-child(6){transition-delay:.4s}.circle-link,.skybound-project{translate:var(--magnetic-x,0) var(--magnetic-y,0)}.circle-link:active,.skybound-project:active{scale:.98}.skybound-project.is-visible:hover .skybound-visual{animation-duration:3.2s}@keyframes hero-enter-sharp{from{opacity:0;transform:translateY(16px) scale(.98);filter:blur(5px)}to{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}@keyframes hero-atmosphere{to{transform:translate3%,-2%}}@media(prefers-reduced-motion:reduce){.scroll-progress{display:none}.hero::before{animation:none}.hero-reveal-3{filter:none}.reveal-item{opacity:1;transform:none;transition:none}.circle-link,.skybound-project{translate:none}.circle-link:active,.skybound-project:active{scale:1}}`}</style>
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
          <div className="hero-line hero-reveal hero-reveal-1" aria-hidden="true"><span>01</span><i /></div>
          <p className="eyebrow hero-reveal hero-reveal-2">BSIT student · Malaybalay City, Philippines</p>
          <h1 className="hero-reveal hero-reveal-3" id="hero-title">Learning.<br /><em>Building.</em><br />Becoming.</h1>
          <div className="hero-bottom hero-reveal hero-reveal-4"><p className="hero-intro">I'm Stephen Ruiz, a 3rd-year IT student growing my skills in backend and web development, with the goal of becoming a capable full-stack developer.</p><a className="circle-link" href="#about"><span>↓</span>Explore<br />my journey</a></div>
          <div className="scribble scribble-arrow" aria-hidden="true">↳</div>
        </section>

        <section className="about-section reveal" id="about" aria-labelledby="about-title"><div className="section-label"><span>02</span><i /> About me</div><div className="about-layout reveal-item"><h2 id="about-title">A developer<br /><em>in progress.</em></h2><div className="about-detail"><p>I'm a detail-oriented BSIT student at San Isidro College. I enjoy solving problems, exploring how things work, and turning what I learn into something practical.</p><p>Backend development has my attention right now, while I steadily work toward full-stack development. I am still learning, and that is an important part of how I see myself.</p></div></div></section>

        <section className="skills-section reveal" id="skills" aria-labelledby="skills-title"><div className="section-label"><span>03</span><i /> Skills & tools</div><div className="skills-layout"><div><h2 id="skills-title">Curious by<br /><em>default.</em></h2><p className="section-note">Some are familiar. Some are new. All are part of the work.</p></div><div className="skill-content"><div className="skill-list">{skills.map((skill, index) => <div className="skill-row reveal-item" key={skill.name}><span className="skill-index">0{index + 1}</span><strong>{skill.name}</strong><span>{skill.note}</span></div>)}</div><div className="tools-block"><p className="mini-label">Tools I use</p><p className="tools">{tools.map((tool) => <span className={tool === "VS Code" ? "preferred" : ""} key={tool}>{tool}</span>)}</p></div></div></div><div className="hardware-note"><span className="bracket">[</span><p><strong>Also hands-on</strong><br />PC building · Hardware troubleshooting · Basic networking</p><span className="bracket">]</span></div></section>

        <section className="journey-section reveal" id="journey" aria-labelledby="journey-title"><div className="section-label"><span>04</span><i /> The journey</div><div className="journey-heading reveal-item"><h2 id="journey-title">Still learning.<br /><em>Still building.</em></h2><p>Growth is the project. Right now, I am focusing on the foundations that will help me build useful things with confidence.</p></div><div className="journey-grid"><article className="reveal-item"><span>01</span><h3>Backend development</h3><p>Understanding the logic behind the interface and how systems connect.</p></article><article className="reveal-item"><span>02</span><h3>Full-stack web development</h3><p>Bringing front-end and back-end pieces together, one step at a time.</p></article><article className="reveal-item"><span>03</span><h3>Databases & networking</h3><p>Currently learning MySQL and building a stronger foundation in networking.</p></article></div><div className="journey-quote">learning <span>→</span> building <span>→</span> improving</div></section>

        <section className="projects-section reveal" id="projects" aria-labelledby="projects-title"><div className="section-label"><span>05</span><i /> Work in progress</div><div className="projects-placeholder reveal-item"><div className="project-mark" aria-hidden="true"><span>+</span><span>+</span><span>+</span></div><div><h2 id="projects-title">Projects<br /><em>coming soon.</em></h2><p>I'm currently working on and refining several projects as I continue developing my skills in web and backend development. Selected projects will be showcased here in the future.</p></div><span className="placeholder-note">in progress / 2026</span></div><a className="skybound-project reveal" href="https://sky-bound-chi.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Skybound game"><div className="skybound-visual" aria-hidden="true"><span>↗</span></div><div className="skybound-copy"><p className="mini-label">01 / Featured project</p><h2>Skybound<br /><em>play the climb.</em></h2><p>A game about finding your way higher, one jump at a time.</p></div><span className="placeholder-note">open game ↗</span></a></section>

        <section className="beyond-section reveal" id="beyond" aria-labelledby="beyond-title"><div className="section-label"><span>06</span><i /> Beyond code</div><div className="beyond-heading reveal-item"><h2 id="beyond-title">More than<br /><em>the screen.</em></h2><p>Technology is one way I think and make. Music and hardware give me different ways to stay curious.</p></div><div className="interest-grid"><article className="interest-card reveal-item music-card"><div className="interest-icon">♪</div><p className="mini-label">01 / Creative outlet</p><h3>Music & music<br />arrangement</h3><p>Outside of technology, I enjoy arranging songs for marching bands and exploring different musical ideas.</p><span className="staff-lines" aria-hidden="true" /></article><article className="interest-card reveal-item hardware-card"><div className="interest-icon">⌘</div><p className="mini-label">02 / Hands-on</p><h3>PC building<br />& hardware</h3><p>I enjoy building PCs and troubleshooting hardware-related problems. It is one of my stronger practical skills.</p><span className="chip-shape" aria-hidden="true" /></article></div></section>

        <section className="experience-section reveal" aria-labelledby="experience-title"><div className="section-label"><span>07</span><i /> Experience</div><div className="experience-row reveal-item"><div><p className="mini-label">Senior high school work immersion</p><h2 id="experience-title">Printing &<br /><em>document services</em></h2></div><div><p>Malaybalay City, Philippines</p><p className="muted">Approximately three weeks of workplace experience involving document printing, photo editing, document preparation, and basic computer-based tasks.</p></div></div></section>
      </main>

      <footer className="site-footer reveal" id="contact"><div className="section-label"><span>08</span><i /> Get in touch</div><div className="footer-layout reveal-item"><div><h2>Let's<br /><em>connect.</em></h2><p>I'm open to learning, creating, and connecting with people interested in technology and creative work.</p></div><div className="footer-right"><a className="email-link" href="mailto:Nephets.ziur@gmail.com">Nephets.ziur@gmail.com <span>↗</span></a><div className="footer-bottom"><span>Stephen Ruiz · BSIT Student</span><a href="#top">Back to top ↑</a></div></div></div></footer>
    </div>
  );
}

export default App;
