import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Code2,
  Database,
  Workflow,
  Sparkles,
  UserRound,
  Phone
} from "lucide-react";
import "./App.css";
import portrait from "./images/portrait-480.webp";

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
    status: "GITHUB · LANGCHAIN",
    title: "LangChain support agent",
    description:
      "A customer-support agent built with LangChain and LangGraph that reasons through requests and calls tools against a shop database — structured output, conversation memory, checkpointing, and human approval before any side-effect tool runs. Runs 100% local on Ollama.",
    tags: ["LangChain", "LangGraph", "Ollama", "Pydantic", "SQLite"],
    link: "https://github.com/FaaizAlii/Langchain-Learning",
    linkText: "Read the code",
  },
  {
    number: "B",
    status: "GITHUB · RAG",
    title: "RAG pipeline, built from scratch",
    description:
      "Retrieval-augmented generation learned stage by stage instead of copied from a template: SQLite → Pydantic → JSONLoader → LangChain Documents → splitting → embeddings → vector store → retriever → LLM.",
    tags: ["RAG", "Embeddings", "Vector store", "JSONLoader"],
    link: "https://github.com/FaaizAlii/RAG_learning",
    linkText: "Read the code",
  },
  {
    number: "C",
    status: "MORE ON GITHUB",
    title: "And it's all public",
    description:
      "n8n workflow automation, agent orchestration, and whatever I'm building this month — open source, documented, and free to poke around.",
    tags: ["n8n", "LangGraph", "Automation"],
    link: "https://github.com/FaaizAlii",
    linkText: "Visit my GitHub",
  },
];

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
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

  return (
    <div className="paper">
      <header className="site-header page-width">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">M.</span>
          <span>Faaiz Ali's notebook</span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#lab">Lab notes</a>
          <a className="nav-contact" href="#contact">Say hello ↗</a>
        </nav>
      </header>

      <main>
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

        <div className="portrait-divider page-width reveal">
          <img
            className="portrait-circle"
            src={portrait}
            alt="Portrait of Faaiz Ali Tariq"
          />
          <span className="portrait-note handwritten">
            <svg className="portrait-arrow" viewBox="0 0 46 36" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M43 8 C31 3 15 9 8 25" />
                <path d="M4 15 L8 26 L18 23" />
              </g>
            </svg>
            the human behind the commits
          </span>
        </div>

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
            <div><SectionLabel>03 / hands-on AI</SectionLabel><h2>Things I actually <span className="handwritten">know.</span></h2></div>
            <p>Don’t just take my word for it — my latest LangChain and RAG work is open source. Read the code, run it locally, judge for yourself.</p>
          </div>
          <div className="lab-grid">
            {experiments.map((item) => (
              <article className="lab-card reveal" key={item.number}>
                <div className="lab-status">{item.status} / {item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <a className="text-link" href={item.link} target="_blank" rel="noreferrer">
                  {item.linkText} <ArrowUpRight size={15} aria-hidden="true" />
                </a>
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
              <a className="button button-light" href="#top">Back to the top ↑</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/FaaizAlii" target="_blank" rel="noreferrer">
                <Code2 size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/faaiz-ali-tariq" target="_blank" rel="noreferrer">
                <UserRound size={16} /> LinkedIn
              </a>
              <a href="tel:+923012808120">
                <Phone size={16} /> +92 301 2808120
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} · Faaiz Ali's notebook</span>
        <span>Made with curiosity, care, and a few scribbles.</span>
        <a href="#top">Back to first page ↑</a>
      </footer>
    </div>
  );
}

export default App;
