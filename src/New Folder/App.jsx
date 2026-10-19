import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Phone,
  Code2,
  Database,
  Workflow,
  Sparkles
} from "lucide-react";
import "./App.css";
import portrait from "../images/portrait-480.webp";

const projects = [
  {
    number: "01",
    type: "PROFESSIONAL CASE STUDY",
    category: "Enterprise data · Revenue intelligence",
    name: "Aviso",
    description:
      "Worked on an enterprise revenue-intelligence platform, moving data-heavy processing from a Django monolith into Databricks workflows and helping split legacy functionality into services.",
    detail:
      "PostgreSQL handled authentication, tenant-user and project-oriented data; MongoDB stored clients’ forecasting data. I also built session-signing compatibility to support authentication across legacy and newer services.",
    stack: ["Python", "Django", "Databricks", "Redis", "PostgreSQL", "MongoDB"],
    featured: true,
    link: "#contact",
  },
  {
    number: "02",
    type: "PROFESSIONAL CASE STUDY",
    category: "Risk intelligence · Data ingestion",
    name: "Dragonfly Intelligence",
    description:
      "Built a news-ingestion and data-processing pipeline for a risk-intelligence product, preparing global news data into structured records, using BigQuery in the processing flow, and persisting cleaned data to PostgreSQL through APIs.",
    stack: ["Python", "BigQuery", "PostgreSQL", "REST APIs", "RAG pipeline"],
    featured: false,
    link: "#contact",
  },
  {
    number: "03",
    type: "PROFESSIONAL CASE STUDY",
    category: "Healthcare · Integrations",
    name: "HottoCare",
    description:
      "Built core Flask backend functionality for a hospital-management system, including Google OAuth2 sign-in, reusable Pydantic-based CRUD patterns, two-way Google Calendar appointment sync, and patient-report generation.",
    stack: ["Flask", "Firestore", "Pydantic", "Google Calendar", "python-docx"],
    featured: false,
    link: "#contact",
  },
];

const experiments = [
  {
    number: "A",
    status: "PERSONAL PROJECT",
    title: "AI Support Engineer",
    description:
      "A Django demo combining document retrieval, ChromaDB, LLM tool calling, customer-data tools, and a support chat interface.",
    tags: ["RAG", "LangChain", "ChromaDB"],
  },
  {
    number: "B",
    status: "LEARNING / PROTOTYPES",
    title: "Agent workflows",
    description:
      "Exploring structured tool use, agent orchestration, LangGraph, and MCP integrations through small practical builds.",
    tags: ["LangGraph", "MCP", "Tool calling"],
  },
  {
    number: "C",
    status: "EXPLORING",
    title: "Workflow automation",
    description:
      "Experimenting with n8n and API-connected workflows to understand where automation can remove repetitive work.",
    tags: ["n8n", "APIs", "Automation"],
  },
];

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

// Brand icons: lucide-react no longer ships GitHub/LinkedIn marks.
function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
      <div className="project-meta">
        <span>{project.type} / {project.number}</span>
        <span>{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.detail && <p>{project.detail}</p>}
      <div className="tag-list">
        {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <a className="text-link" href={project.link}>
        Project notes <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      {project.featured && <span className="margin-scribble">lots of moving parts!</span>}
    </article>
  );
}

function App() {
  const email = "faaizalitariq@gmail.com";
  const phone = "+92 301 2808120";

  return (
    <div className="paper">
      <header className="site-header page-width">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">F.</span>
          <span>developer's notebook</span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#lab">Lab notes</a>
          <a className="nav-contact" href="#contact">Say hello ↗</a>
        </nav>
      </header>

      <main>
        <div className="portrait-break page-width" aria-label="Portrait of Faaiz Ali Tariq">
          <div className="portrait-stack">
            <div className="portrait-frame">
              <img
                src={portrait}
                alt="Portrait photo of Faaiz Ali Tariq"
              />
            </div>
            <p className="portrait-note">
              <span className="handwritten">hi, I'm Faaiz</span>
              <span className="portrait-sub">the human behind the notebook ✎</span>
            </p>
          </div>
        </div>

        <section className="hero page-width" id="top">
          <span className="margin-note">a few things I've built ↙</span>
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="ink-dot" /> Python backend developer · AI engineering</p>
            <h1>Building useful<br />things with <span className="handwritten underline-ink">thought</span><br />and code.</h1>
            <p className="intro">
              I turn messy data, complicated workflows, and real business problems into reliable software — from production APIs and data pipelines to practical experiments with retrieval-augmented generation and AI agents.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-light" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <aside className="sketch-sheet reveal" aria-label="Notebook sketch of a software system">
            <div className="sheet-heading"><span>FIELD NOTES / 001</span><span>build · test · improve</span></div>
            <svg className="system-sketch" viewBox="0 0 300 220" role="img" aria-label="Sketch of connected software components">
              <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M35 40 Q31 34 39 32 L111 31 Q119 32 117 40 L116 78 Q115 84 107 83 L40 84 Q33 83 34 76Z" />
                <path d="M48 48 L103 48 M48 59 L91 59 M48 70 L98 70" />
                <path d="M184 40 Q180 34 188 32 L260 31 Q268 32 266 40 L265 78 Q264 84 256 83 L189 84 Q182 83 183 76Z" />
                <path d="M197 48 L252 48 M197 59 L240 59 M197 70 L247 70" />
                <path d="M117 59 C140 59 158 59 183 59" strokeDasharray="4 5" />
                <path d="M175 53 L183 59 L175 65" />
                <path d="M150 85 L150 117 M144 109 L150 117 L156 109" />
                <path d="M61 135 Q57 129 65 127 L235 127 Q243 128 241 136 L240 178 Q239 184 231 183 L66 184 Q59 183 60 176Z" />
                <path d="M78 145 L222 145 M78 157 L194 157 M78 169 L211 169" />
                <path d="M27 113 Q8 103 18 91" stroke="var(--accent)" />
                <path d="M11 98 L18 91 L24 99" stroke="var(--accent)" />
                <path d="M260 111 Q285 97 285 119 Q285 132 266 135" stroke="var(--accent)" />
                <path d="M273 127 L266 135 L276 137" stroke="var(--accent)" />
                <path d="M112 204 Q149 196 188 204" stroke="var(--accent)" />
              </g>
            </svg>
            <p className="sheet-caption">“Make the complex feel simple.”</p>
            <div className="tag-list tag-list-center">
              <span className="tag">Python</span><span className="tag">APIs</span><span className="tag">Data systems</span><span className="tag">RAG / LLMs</span>
            </div>
          </aside>
        </section>

        <section className="section page-width" id="work">
          <div className="section-heading reveal">
            <div><SectionLabel>01 / selected work</SectionLabel><h2>Real systems.<br /><span className="handwritten">Real problems.</span></h2></div>
            <p>A few projects from my professional work, focused on the engineering decisions behind the product — not just a list of technologies.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="section page-width about-section" id="about">
          <aside className="note-card reveal">
            <h3>What I keep coming back to <span>✎</span></h3>
            <ul>
              <li>Make APIs predictable and maintainable.</li>
              <li>Move heavy work to the right place.</li>
              <li>Keep data flows understandable.</li>
              <li>Use AI where it solves a real problem.</li>
              <li>Learn by building, testing, and refining.</li>
            </ul>
            <span className="note-stamp">NOTES TO SELF</span>
          </aside>
          <div className="about-copy reveal">
            <SectionLabel>02 / a little about me</SectionLabel>
            <h2>Backend first.<br /><span className="handwritten">Curious by default.</span></h2>
            <p>I have around three years of professional experience building Python backend systems. My work has included APIs, multi-tenant data models, distributed processing, legacy-system modernization, and third-party integrations.</p>
            <p>Alongside production engineering, I’m expanding into AI engineering: retrieval-augmented generation, embeddings and vector search, LLM tool calling, and agent workflows. I distinguish professional delivery from skills I’m developing through personal projects.</p>
            <div className="skills-grid">
              <div className="skill-item"><Code2 size={19} /><div><strong>Backend engineering</strong><span>Python · Django · Flask · FastAPI · REST</span></div></div>
              <div className="skill-item"><Database size={19} /><div><strong>Data & infrastructure</strong><span>PostgreSQL · MongoDB · Redis · BigQuery</span></div></div>
              <div className="skill-item"><Workflow size={19} /><div><strong>Integrations</strong><span>OAuth2 · Google Calendar · Firestore · Celery</span></div></div>
              <div className="skill-item"><Sparkles size={19} /><div><strong>AI engineering</strong><span>RAG · embeddings · ChromaDB · LangChain</span></div></div>
            </div>
          </div>
        </section>

        <section className="section page-width" id="lab">
          <div className="section-heading reveal">
            <div><SectionLabel>03 / lab notes</SectionLabel><h2>Things I'm <span className="handwritten">exploring.</span></h2></div>
            <p>Experiments, prototypes, and skills I’m actively sharpening — clearly separated from production experience.</p>
          </div>
          <div className="lab-grid">
            {experiments.map((item) => (
              <article className="lab-card reveal" key={item.number}>
                <div className="lab-status">{item.status} / {item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width reveal">
            <SectionLabel>04 / your turn</SectionLabel>
            <h2>Have a tricky backend problem?<br /><span className="handwritten">Let's work it out.</span></h2>
            <p>I’m open to backend engineering, data-heavy applications, and practical AI/LLM projects.</p>
            <div className="hero-actions contact-actions">
              <a className="button button-dark" href={`mailto:${email}`}>Email me <Mail size={16} /></a>
              <a className="button button-light" href={`tel:${phone.replace(/\s/g, "")}`}>Call me <Phone size={16} /></a>
              <a className="button button-light" href="#top">Back to the top ↑</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/FaaizAlii/" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a href="https://www.linkedin.com/in/faaiz-ali-tariq/" target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} · Faaiz Ali Tariq</span>
        <span>Made with curiosity, care, and a few scribbles.</span>
        <a href="#top">Back to first page ↑</a>
      </footer>
    </div>
  );
}

export default App;
