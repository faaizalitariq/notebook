import {
  ArrowDownRight,
  Download,
  ArrowUpRight,
  Code2,
  Database,
  Workflow,
  Sparkles,
  UserRound,
  Phone,
  Plus,
} from "lucide-react";
import "./App.css";
import portrait from "./images/portrait-480.webp";
import { headline } from "./data/headlines";

// The download appears automatically once the approved CV PDF is added.
const cvFiles = import.meta.glob("./assets/Faaiz_Main_Resume.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});
const cvUrl = cvFiles["./assets/Faaiz_Main_Resume.pdf"];

function CvDownload() {
  if (!cvUrl) return null;
  return (
    <a className="button button-light" href={cvUrl} download="Faaiz-Ali-Tariq-CV.pdf">
      Download CV <Download size={17} aria-hidden="true" />
    </a>
  );
}

const projects = [
  {
    number: "01",
    name: "Aviso AI",
    category: "Revenue intelligence",
    role: "Backend developer · ~1.5 years on the project",
    headline: "Moving beyond a monolith. Keeping both sides talking.",
    description:
      "An enterprise revenue forecasting platform with a large Django codebase. I worked on moving background tasks to Databricks and extracting services while the existing application stayed in use.",
    contributions: [
      [
        "Event-driven job dispatch",
        "Built a continuously running Databricks job that reads Redis events and triggers the corresponding job using the event’s job ID.",
      ],
      [
        "Authentication across old and new",
        "Implemented the auth service with compatible session signing so users could move between the legacy Django application and the new services.",
      ],
      [
        "Shared foundations",
        "Contributed to the move toward auth, admin, and deal services, with common functionality in a shared library.",
      ],
    ],
    note: "A single page could call both legacy and new APIs. Session compatibility mattered throughout the migration; sharing the signing secret was part of making that work.",
    flow: ["Redis events", "Databricks dispatcher", "Target job"],
    stack: ["Python", "Django", "Databricks", "Redis", "Microservices"],
    featured: true,
  },
  {
    number: "02",
    name: "HottoCare",
    category: "Healthcare management",
    role: "Primary backend developer · New system",
    headline: "A backend built to be extended.",
    description:
      "I shaped the Flask backend for a new healthcare management system, taking a layered architecture I’d learned on Dragonfly and adapting it to Firestore.",
    contributions: [
      [
        "Structure on top of NoSQL",
        "Used Pydantic models to validate data before it reached Firestore. Shared core classes and controllers centralized common behavior, with overrides where needed.",
      ],
      [
        "Workflows for the care team",
        "Built role-based access for doctors and nurses, patient assignments, and a Google Calendar integration showing doctors their daily meetings.",
      ],
    ],
    note: "The useful lesson from Dragonfly was reuse at the right level: core behavior in one place, with room for individual APIs to differ.",
    flow: ["API classes", "Controllers", "Validated core models"],
    stack: ["Flask", "Pydantic", "Firestore", "Google Calendar"],
  },
  {
    number: "03",
    name: "Dragonfly Intelligence",
    category: "Geopolitical risk intelligence",
    role: "Backend developer · Risk data workflows",
    headline: "Keeping global risk intelligence up to date.",
    description:
      "Worked on an established global risk intelligence platform, taking ownership of backend components for risk data processing and rating updates.",
    contributions: [
      [
        "Risk data workflows",
        "Built backend workflows that brought processed intelligence into PostgreSQL and kept risk-rating data up to date, integrating with the platform’s existing BigQuery data ecosystem.",
      ],
    ],
    note: "Worked within an established architecture to connect processed intelligence with the data used for risk assessments, following the platform’s shared backend patterns.",
    flow: ["Processed intelligence", "Risk data workflows", "PostgreSQL"],
    stack: ["Python", "Data processing", "PostgreSQL", "BigQuery ecosystem"],
  },
];

const experiments = [
  {
    number: "A",
    status: "PERSONAL PROJECT",
    title: "StreamForge",
    subtitle: "An AI assistant with an actual application behind it.",
    description:
      "A Django streaming-platform project with a support assistant that looks up subscriptions, searches the catalogue, and retrieves policy documents. Customer tools use the authenticated user’s context; chat history is stored in the database.",
    takeaway:
      "Database tools for account facts. Retrieval for support documents.",
    tags: ["Django", "LangChain", "ChromaDB", "Ollama"],
    link: "https://github.com/faaizalitariq/StreamForge",
    linkText: "Explore StreamForge",
  },
  {
    number: "B",
    status: "LEARNING PROJECT",
    title: "Tool-using support agent",
    subtitle: "Working through how agents make decisions.",
    description:
      "A local LangChain and LangGraph experiment with shop database tools, structured output, conversation checkpoints, and human approval before tools that change data.",
    takeaway: "Exploring where an agent should pause and ask for approval.",
    tags: ["LangChain", "LangGraph", "SQLite", "Ollama"],
    link: "https://github.com/faaizalitariq/Langchain-Learning",
    linkText: "Read the code & notes",
  },
  {
    number: "C",
    status: "LEARNING NOTEBOOKS",
    title: "RAG, step by step",
    subtitle: "Understanding what happens before the answer.",
    description:
      "Experiments taking structured records and PDFs through chunking, embeddings, ChromaDB retrieval, and an LLM. Includes notes on why semantic similarity alone can miss an exact customer record.",
    takeaway:
      "Learning when to retrieve documents and when to query a database.",
    tags: ["RAG", "Embeddings", "ChromaDB", "Pydantic"],
    link: "https://github.com/faaizalitariq/RAG_learning",
    linkText: "Open the notebooks",
  },
];

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}
function Flow({ steps }) {
  return (
    <ol className="system-flow" aria-label="Simplified system flow">
      {steps.map((step, i) => (
        <li key={step}>
          {i > 0 && <span aria-hidden="true">→</span>}
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
    >
      <div className="project-meta">
        <span>PROFESSIONAL WORK / {project.number}</span>
        <span>{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-role">{project.role}</p>
      <h4>{project.headline}</h4>
      <p>{project.description}</p>
      <Flow steps={project.flow} />
      <dl className="contributions">
        {project.contributions.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
      <details className="engineering-note">
        <summary>
          One engineering detail <Plus size={15} aria-hidden="true" />
        </summary>
        <p>{project.note}</p>
      </details>
      <div className="tag-list">
        {project.stack.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="paper">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header page-width">
        <a
          className="brand"
          href="#top"
          aria-label="Faaiz Ali’s notebook, back to top"
        >
          <span className="brand-mark">F.</span>
          <span>Faaiz Ali’s notebook</span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#lab">Lab notes</a>
          <a className="nav-contact" href="#contact">
            Say hello ↗
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero page-width" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <span className="ink-dot" /> Faaiz Ali Tariq · Python backend
              developer
            </p>
            <h1>
              {headline.line}
              <br />
              {headline.lead}
              <span className="handwritten underline-ink">{headline.emphasis}</span>
            </h1>
            <p className="intro">
              The systems behind risk intelligence. The job that keeps data moving. The
              login that still works while a monolith becomes services.
            </p>
            <p className="hero-footnote">
              That’s the work I’ve done. These days, I’m also bringing that
              backend experience to AI agents and retrieval systems.
            </p>
            <div className="hero-actions">
              <CvDownload />
              <a className="button button-dark" href="#work">
                See the work <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a
                className="button button-light"
                href="https://github.com/faaizalitariq"
                target="_blank"
                rel="noreferrer"
              >
                Browse my GitHub <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="sketch-sheet reveal" aria-label="About Faaiz">
            <div className="sheet-heading">
              <span>THE PERSON / 001</span>
              <span>backend, mostly.</span>
            </div>
            <div className="portrait-wrap">
              <img
                className="portrait"
                src={portrait}
                alt="Faaiz Ali Tariq"
                width="240"
                height="240"
                fetchPriority="high"
              />
              <span className="portrait-caption handwritten">
                Hi, I’m Faaiz.
              </span>
            </div>
            <p className="sheet-caption">
              A good backend leaves room
              <br />
              for the next person to build.
            </p>
            <div className="sheet-signoff">
              <span>Writing Python since 2023</span>
              <span className="handwritten">still taking notes ↗</span>
            </div>
          </aside>
        </section>
        <div className="experience-strip page-width">
          <span className="handwritten">A few pages from the job →</span>
          <a href="#project-aviso">Enterprise migrations</a>
          <span aria-hidden="true">/</span>
          <a href="#project-hottocare">Backend architecture</a>
          <span aria-hidden="true">/</span>
          <a href="#project-dragonfly">Risk data systems</a>
        </div>
        <section className="section page-width" id="work">
          <div className="section-heading reveal">
            <div>
              <SectionLabel>01 / from the day job</SectionLabel>
              <h2>
                What I worked on.
                <br />
                <span className="handwritten">And what it took.</span>
              </h2>
            </div>
            <p>
              Three projects, at different stages: contributing to an
              established platform, shaping a new backend, and helping a large
              application evolve.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <div
                className={
                  project.featured
                    ? "project-slot project-slot--featured"
                    : "project-slot"
                }
                id={`project-${project.number === "01" ? "aviso" : project.number === "02" ? "hottocare" : "dragonfly"}`}
                key={project.number}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
        <section className="section page-width about-section" id="about">
          <aside className="note-card reveal">
            <h3>A few things the work taught me ✎</h3>
            <ul>
              <li>A migration is also a compatibility problem.</li>
              <li>NoSQL still needs a data contract.</li>
              <li>Shared code should make the next API easier.</li>
              <li>An agent needs the right tools and boundaries.</li>
            </ul>
            <span className="note-stamp">LEARNED BY DOING</span>
          </aside>
          <div className="about-copy reveal">
            <SectionLabel>02 / how I got here</SectionLabel>
            <h2>
              Learn it. Build it.
              <br />
              <span className="handwritten">Keep going.</span>
            </h2>
            <p>
              I started as an intern in November 2023, learning Python and
              Django and building an e-commerce backend. On 9 March 2024, I
              joined the same company as a backend developer.
            </p>
            <p>
              Since then, I’ve worked inside a mature risk intelligence
              platform, taken primary responsibility for a new healthcare
              backend, and spent around a year and a half on Aviso’s background
              processing and service migration.
            </p>
            <p>
              Now I’m exploring LangChain, LangGraph, and retrieval systems
              through personal projects. I like the part where an AI feature has
              to connect to real application data, respect a user’s access, and
              do something useful.
            </p>
            <div className="skills-grid">
              <div className="skill-item">
                <Code2 size={19} aria-hidden="true" />
                <div>
                  <strong>Backend</strong>
                  <span>Python · Django · Flask · Pydantic</span>
                </div>
              </div>
              <div className="skill-item">
                <Database size={19} aria-hidden="true" />
                <div>
                  <strong>Data & processing</strong>
                  <span>PostgreSQL · Firestore · Redis · Databricks</span>
                </div>
              </div>
              <div className="skill-item">
                <Workflow size={19} aria-hidden="true" />
                <div>
                  <strong>Systems & integrations</strong>
                  <span>REST APIs · sessions · Google Calendar</span>
                </div>
              </div>
              <div className="skill-item">
                <Sparkles size={19} aria-hidden="true" />
                <div>
                  <strong>Currently building with</strong>
                  <span>LangChain · LangGraph · ChromaDB · Ollama</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section page-width" id="lab">
          <div className="section-heading reveal">
            <div>
              <SectionLabel>03 / after hours</SectionLabel>
              <h2>
                Code you can <span className="handwritten">look through.</span>
              </h2>
            </div>
            <p>
              Personal projects and learning notebooks. A place to try ideas,
              understand the moving parts, and leave a record of what I learned.
            </p>
          </div>
          <div className="lab-grid">
            {experiments.map((item) => (
              <article className="lab-card reveal" key={item.number}>
                <div className="lab-status">
                  {item.status} / {item.number}
                </div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                <p className="lab-takeaway">{item.takeaway}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.linkText}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <a
            className="text-link github-link"
            href="https://github.com/faaizalitariq"
            target="_blank"
            rel="noreferrer"
          >
            The rest of my notebooks live on GitHub{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </section>
        <section className="contact-section" id="contact">
          <div className="page-width reveal">
            <SectionLabel>04 / next page</SectionLabel>
            <h2>
              Need someone who’ll
              <br />
              <span className="handwritten">work through the details?</span>
            </h2>
            <p>
              I’m interested in Python backend roles and practical AI
              applications.
              <br />
              Tell me what you’re building.
            </p>
            <div className="hero-actions contact-actions">
              <CvDownload />
              <a
                className="contact-email"
                href="mailto:faaizalitariq@gmail.com"
              >
                faaizalitariq@gmail.com
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/faaizalitariq"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/faaiz-ali-tariq"
                target="_blank"
                rel="noreferrer"
              >
                <UserRound size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a href="tel:+923012808120">
                <Phone size={16} aria-hidden="true" />
                +92 301 2808120
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} · Faaiz Ali Tariq</span>
        <span className="handwritten">Always room for another page.</span>
        <a href="#top">Back to first page ↑</a>
      </footer>
    </div>
  );
}
export default App;
