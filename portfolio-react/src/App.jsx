import { useEffect, useState } from "react";

const profile = {
  name: "Rounak Abraham",
  role: "Senior Software Engineer",
  email: "rounabraham@gmail.com",
  github: "https://github.com/Rounak-09",
  linkedin: "https://www.linkedin.com/in/rounakabraham",
};

const projects = [
  {
    category: "Backend",
    year: "2026",
    title: "Laboratory Information Management System (LIMS)",
    description:
      "Developed and enhanced an enterprise Laboratory Information Management System (LIMS) by building scalable Java backend services, optimizing database performance, implementing complex business logic, ensuring compliance and data integrity, and providing production support in a globally distributed Agile environment.",
    tags: ["Java", "Maven", "SQL Server"],
  },
  {
    category: "Backend",
    year: "2025",
    title: "Application Monitoring & Observability Platform",
    description:
      "Developed application monitoring solutions using OpenSearch dashboards and automated alerts, built Proof-of-Concept (POC) solutions for client requirements, provided production support through debugging and root cause analysis, and collaborated with global clients to deliver enhancements in an Agile environment.",
    tags: ["Java", "Spring Boot", "Microservices", "OpenSearch", "ELK Stack", "LDAP", "Docker", "Kubernetes"],
  },
  {
    category: "Backend",
    year: "2024",
    title: "MongoDb Atlas Search",
    description:
      "Implemented MongoDB Atlas Search indexing and optimized aggregation queries. This improved search performance and reduced response times for large datasets, enhancing the overall user experience and enabling faster data retrieval for critical business operations.",
    tags: ["Java", "Play Framework", "MongoDB"],
  },
  {
    category: "Backend",
    year: "2023",
    title: "SAP Integration for Logistics Indenting System",
    description:
      "Developed Java-based backend integration services between SAP and a multimodal logistics indenting system to automate the exchange of SKU, inventory, shipment, and transportation data. Ensured seamless data synchronization, improved inventory accuracy, and enabled real-time visibility of logistics operations across road and rail transportation.",
    tags: ["Java", "Spring Boot", "MongoDB"],
  },
  {
    category: "Backend",
    year: "2023",
    title: "Container Indenting System",
    description:
      "Developed a container indenting system for FMCG companies to enable real-time tracking of container movement from manufacturing plants to depots via road (trailer trucks) and rail transport. Designed and implemented backend services to manage container loading and unloading, vehicle and wagon allocation, shipment tracking, and inventory movement. Delivered end-to-end logistics visibility through interactive dashboards, enabling users to monitor truck and train movements, track container locations, and ensure accurate inventory reconciliation across the supply chain.",
    tags: ["Java", "Play Framework", "MongoDB"],
  },
  {
    category: "Backend",
    year: "2022",
    title: "Multimodal Indenting System",
    description:
      "Developed a multimodal logistics indenting system for FMCG companies to enable real-time tracking of SKU movement from manufacturing plants to depots across multiple transportation modes, including road (trucks) and rail (trains). Built backend services to manage SKU loading and unloading operations, vehicle and wagon allocations, shipment tracking, and inventory movement. Enabled end-to-end visibility through interactive dashboards, allowing users to monitor truck movements, track the SKUs carried by each vehicle, view wagon-wise loading details, and ensure accurate inventory reconciliation throughout the logistics lifecycle.",
    tags: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
  },
  
];

const skills = [
  {
    title: "Frontend",
    description:
      "React, TypeScript, HTML, CSS, JavaScript.",
  },
  {
    title: "Backend",
    description:
      "Java, Spring Boot, Microservices, Kafka, Redis, REST APIs, Play Framework.",
  },
  {
    title: "Database",
    description:
      "MySQL, MongoDB.",
  },
  {
    title: "Testing",
    description:
      "Mockito, JUnit.",
  },
  {
    title: "Version Control",
    description:
      "Git, Bitbucket.",
  },
  {
    title: "Cloud",
    description:
      "AWS(Basics), Azure(Basics).",
  },
  {
    title: "DevOps",
    description:
      "Docker(Basics), Kubernetes(Basics).",
  },
  {
    title: "Development Practices",
    description:
      "Agile Scrum, SDLC, Code Reviews, Design Patterns, SOLID Principles, Production Support.",
  },
];

const experience = [
  {
    dates: "APR 2026 - Present",
    title: "Senior Associate Consultant, Infosys",
    description:
      "Design, develop, and optimize scalable Java backend solutions, improving application performance, SQL efficiency, and LIMS reliability while collaborating with global teams and supporting Agile development and production operations.",
  },
  {
    dates: "SEP 2024 - MAR 2026",
    title: "Associate Consultant, Infosys",
    description:
      "Built OpenSearch dashboards and POC solutions, collaborated with global clients, provided production support and root cause analysis, and delivered enhancements following Agile practices.",
  },
  {
    dates: "JUL 2023 - AUG 2024",
    title: "Software Engineer, Caliper Business Solutions",
    description:
      "Developed and optimized backend features using Java, Spring Boot, Play Framework, REST APIs, and MongoDB, improving API performance while collaborating in Agile development, code reviews, testing, and production deployments.",
  },
  {
    dates: "AUG 2022 - JUN 2023",
    title: "Backend Developer, Opel Consulting",
    description:
      "Led backend development of a multimodal logistics indenting system by developing REST APIs, implementing transactional MongoDB operations, collaborating with stakeholders, and supporting the application throughout the SDLC.",
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function syncHeader() {
      setScrolled(window.scrollY > 18);
    }

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span className="brand-mark">{profile.name.charAt(0)}</span>
        <span>{profile.name}</span>
      </a>

      <nav className="nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <img
        className="hero-image"
        src="/assets/engineering-workspace.png"
        alt="A modern software engineering workspace with a laptop and architecture notes."
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{profile.role}</p>
        <h1>Building dependable software with product sense and engineering depth.</h1>
        <p className="hero-copy">
          I design and ship full-stack systems that are fast, maintainable, and useful.
          My work sits where clean architecture, thoughtful user experience, and pragmatic
          execution meet.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#work">
            View projects
          </a>
          <a className="button secondary" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

function SectionHeading({ kicker, title }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />

        <section className="section intro-band" aria-label="Professional summary">
          <div className="section-inner intro-grid">
            <div>
              <p className="section-kicker">What I do</p>
              <h2>I turn ambiguous ideas into resilient, testable products.</h2>
            </div>
            <p>
              I enjoy the whole path from early product shape to production polish:
              decomposing unclear problems, choosing stable interfaces, writing readable code,
              and tightening the feedback loop with metrics, tests, and iteration.
            </p>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-inner">
            <SectionHeading
              kicker="Selected work"
              title="Projects that show the way I think and build."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section muted" id="skills">
          <div className="section-inner skills-layout">
            <SectionHeading
              kicker="Capabilities"
              title="Comfortable across product, platform, and delivery."
            />
            <div className="skill-columns">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-inner">
            <SectionHeading
              kicker="Experience"
              title="A practical track record of shipping and improving systems."
            />
            <ol className="timeline">
              {experience.map((item) => (
                <li key={item.title}>
                  <span className="timeline-date">{item.dates}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <p className="section-kicker">Contact</p>
            <h2>Have a product, platform, or engineering problem worth untangling?</h2>
            <p>
              I am open to software engineering roles, consulting conversations, and thoughtful
              collaborations.
            </p>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>Designed and built as a fast React portfolio.</span>
      </footer>
    </>
  );
}

export default App;
