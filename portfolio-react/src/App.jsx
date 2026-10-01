import { useEffect, useState } from "react";

const profile = {
  name: "Rounak Abraham",
  role: "Senior Associate Consultant · Java Backend Engineer",
  email: "rounabraham@gmail.com",
  github: "https://github.com/Rounak-09",
  linkedin: "https://www.linkedin.com/in/rounakabraham",
};

const projects = [
  { category: "Enterprise", year: "2026", number: "01", title: "Laboratory information management", description: "Improving an enterprise LIMS through Java service enhancements, query tuning, and careful handling of complex workflows and data integrity.", tags: ["Java", "Maven", "SQL Server"] },
  { category: "Platform", year: "2025", number: "02", title: "Application observability platform", description: "Built OpenSearch dashboards and automated alerts that helped teams see application health, investigate production issues, and diagnose root causes.", tags: ["Spring Boot", "OpenSearch", "ELK", "Docker", "Kubernetes"] },
  { category: "Data", year: "2024", number: "03", title: "Search for MongoDB Atlas", description: "Implemented Atlas Search indexing and optimized aggregation pipelines for large datasets and business-critical workflows.", tags: ["Java", "Play Framework", "MongoDB"] },
  { category: "Integrations", year: "2023", number: "04", title: "SAP logistics integration", description: "Connected SAP with a multimodal logistics platform, synchronizing SKU, inventory, shipment, and transportation data across road and rail operations.", tags: ["Spring Boot", "MongoDB", "REST APIs"] },
  { category: "Enterprise", year: "2023", number: "05", title: "Container indenting system", description: "Delivered backend workflows for container loading, allocation, and shipment tracking, giving logistics teams a clearer view of truck and rail movements.", tags: ["Java", "Play Framework", "MongoDB"] },
  { category: "Integrations", year: "2022", number: "06", title: "Multimodal indenting system", description: "Built services for SKU movement across road and rail, including loading, vehicle allocation, shipment tracking, and inventory reconciliation.", tags: ["Java", "Spring Boot", "MongoDB"] },
];

const experience = [
  { dates: "APR 2026 — NOW", company: "Infosys", title: "Senior Associate Consultant", description: "Designing and improving Java backend solutions for enterprise LIMS workflows, with a focus on SQL efficiency, application reliability, and production support." },
  { dates: "SEP 2024 — MAR 2026", company: "Infosys", title: "Associate Consultant", description: "Built observability dashboards and proof of concept solutions, partnered with global clients, and supported production diagnosis and root cause analysis." },
  { dates: "JUL 2023 — AUG 2024", company: "Caliper Business Solutions", title: "Software Engineer", description: "Developed backend features with Java, Spring Boot, Play Framework, REST APIs, and MongoDB across implementation, testing, and deployment." },
  { dates: "AUG 2022 — JUN 2023", company: "Opel Consulting", title: "Backend Developer", description: "Led backend development for a multimodal logistics system, building REST APIs and transactional MongoDB workflows through the full SDLC." },
];

const skillGroups = [
  { label: "Backend", items: "Java · Spring Boot · Microservices · REST APIs · Play Framework · Kafka · Redis" },
  { label: "Data", items: "MongoDB · SQL Server · MySQL · Atlas Search · Query optimization" },
  { label: "Quality", items: "JUnit · Mockito · Code reviews · SOLID · Design patterns" },
  { label: "Delivery", items: "Git · Bitbucket · Docker · Kubernetes · AWS · Azure · Agile / Scrum" },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const links = [["Work", "work"], ["Approach", "approach"], ["Experience", "experience"], ["Contact", "contact"]];
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label={`${profile.name}, home`}><span className="brand-mark">RA</span><span>Rounak Abraham<span className="brand-period">.</span></span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Main navigation">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk <Arrow diagonal /></a>
      </nav>
    </header>
  );
}

function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Microservices architecture: clients connect through an API gateway to independent Java services. Services communicate through an event bus and own their data stores, while telemetry flows to observability tools.">
      <div className="visual-topline"><span><i /> SYSTEMS / 01</span><span>MICROSERVICES</span></div>
      <div className="micro-map">
        <div className="micro-clients"><span>WEB APP</span><span>MOBILE</span></div>
        <div className="micro-connector clients-to-gateway" aria-hidden="true"><i /></div>
        <div className="micro-node gateway-node"><small>EDGE</small><strong>API Gateway</strong></div>
        <div className="micro-fanout" aria-hidden="true"><i /><i /><i /></div>
        <div className="micro-services">
          <div className="micro-node"><small>SERVICE / 01</small><strong>Orders</strong><em>Java · Spring</em></div>
          <div className="micro-node"><small>SERVICE / 02</small><strong>Inventory</strong><em>Java · Spring</em></div>
          <div className="micro-node"><small>SERVICE / 03</small><strong>Shipments</strong><em>Java · Spring</em></div>
        </div>
        <div className="micro-data-lines" aria-hidden="true"><i /><i /><i /></div>
        <div className="micro-stores">
          <span>Orders DB</span><span>Inventory DB</span><span>Shipments DB</span>
        </div>
        <div className="micro-bus-link" aria-hidden="true"><i /></div>
        <div className="micro-bus"><span className="bus-signal">↔</span><span><small>ASYNC MESSAGING</small><strong>Event bus</strong></span></div>
        <div className="micro-observe-link" aria-hidden="true"><i /></div>
        <div className="micro-observe"><span className="observe-pulse" /><span><small>METRICS · LOGS · TRACES</small><strong>Observability</strong></span><b>↗</b></div>
        <span className="map-tag">LOOSELY COUPLED · independently deployable</span>
      </div>
      <div className="visual-foot"><span>Services own their data.</span><span>DESIGN FOR CHANGE <Arrow /></span></div>
    </div>
  );
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span className="availability-dot" /> JAVA BACKEND ENGINEER <span className="eyebrow-divider">/</span> INDIA</p>
        <h1>Thoughtful code.<br /><span>Dependable</span> systems.</h1>
        <p className="hero-description">I’m Rounak — a backend engineer building and improving the services behind complex, real-world products.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href={`mailto:${profile.email}`}>Get in touch <Arrow diagonal /></a></div>
        <div className="hero-proof"><span>4+ YEARS BACKEND EXPERIENCE</span><span>JAVA · SPRING BOOT · REST APIs</span><span>ENTERPRISE · LOGISTICS · OBSERVABILITY</span></div>
      </div>
      <SystemVisual />
    </div>
    <a className="scroll-cue" href="#approach"><span /> SCROLL TO EXPLORE</a>
  </section>;
}

function SectionIntro({ index, eyebrow, title, copy }) {
  return <div className="section-intro"><span className="section-index">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div></div>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="card-top"><span className="project-number">{project.number} / 06</span><span className="project-year">{project.year}</span></div>
    <div className="project-category">{project.category}</div>
    <h3>{project.title}</h3><p className="project-description">{project.description}</p>
    <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    <span className="card-corner" aria-hidden="true"><Arrow diagonal /></span>
  </article>;
}

function App() {
  const [filter, setFilter] = useState("All work");
  const [copied, setCopied] = useState(false);
  const filters = ["All work", "Enterprise", "Platform", "Data", "Integrations"];
  const visibleProjects = filter === "All work" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".hero-copy, .system-visual, .approach-inner > *, .principles > *, .section-intro, .project-toolbar, .project-card, .skill-row, .experience-item, .contact-inner > *, .contact-actions > *, .social-links > *",
    );
    targets.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`);
    });

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
    targets.forEach((element) => {
      if (!element.classList.contains("is-revealed")) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [filter]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return <>
    <Header />
    <main>
      <Hero />
      <section className="approach-section" id="approach">
        <div className="approach-inner"><div className="approach-label"><span className="section-index">01</span><p className="eyebrow">HOW I WORK</p></div><h2>Good backend engineering is <span>felt in the details.</span></h2><p className="approach-copy">Clear interfaces. Careful data decisions. Useful observability. I like making systems easier to understand, safer to change, and more dependable in production.</p><div className="principles"><div><span>01</span><strong>Make complexity legible</strong></div><div><span>02</span><strong>Protect the data</strong></div><div><span>03</span><strong>Learn from production</strong></div></div></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="content-width"><SectionIntro index="02" eyebrow="SELECTED WORK" title="Systems built around real work." copy="A selection of enterprise, logistics, search, and observability work from across my career." />
          <div className="project-toolbar"><span>PROJECTS <b>({String(visibleProjects.length).padStart(2, "0")})</b></span><div className="filter-list" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={filter === item ? "filter-button active" : "filter-button"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
          <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills"><div className="content-width skills-layout"><SectionIntro index="03" eyebrow="TOOLKIT" title="The right tool for the job." copy="A practical toolkit shaped by the realities of building, shipping, and supporting backend software." /><div className="skill-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.label}><span className="skill-index">0{index + 1}</span><h3>{group.label}</h3><p>{group.items}</p></div>)}</div></div></section>

      <section className="experience-section section-pad" id="experience"><div className="content-width"><SectionIntro index="04" eyebrow="EXPERIENCE" title="Growing through the work." copy="From logistics platforms to enterprise services, I’ve worked close to the systems people rely on every day." /><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.dates}`}><span className="experience-date">{item.dates}</span><div className="experience-role"><h3>{item.title}</h3><span>{item.company}</span></div><p>{item.description}</p></article>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="contact-grid" aria-hidden="true" /><div className="contact-inner"><p className="eyebrow">HAVE A GOOD PROBLEM?</p><h2>Let’s build something <span>that lasts.</span></h2><p className="contact-copy">Open to thoughtful conversations about backend engineering, software roles, and building better systems.</p><div className="contact-actions"><a href={`mailto:${profile.email}`} className="button button-light">Start a conversation <Arrow diagonal /></a><button className="copy-button" onClick={copyEmail} type="button">{copied ? "Email copied ✓" : "Copy email address"}</button></div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div></div><span className="contact-side-note">GOOD SYSTEMS ARE A TEAM SPORT.</span></section>
    </main>
    <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">RA</span><span>Rounak Abraham<span className="brand-period">.</span></span></a><span>Java backend engineer · India</span><span>© {new Date().getFullYear()} Rounak Abraham</span></footer>
  </>;
}

export default App;
