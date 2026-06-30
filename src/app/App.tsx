import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Github, Facebook, Workflow, Code2, Zap, Database, Bot, Settings, Menu, X } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?w=1800&h=900&fit=crop&auto=format";
const ABOUT_IMG = "/profile.png";

// Honest "focus areas" — the repetitive workflows John is learning to automate.
// These are areas of focus, NOT delivered client projects.
const focusAreas = [
  {
    title: "Lead & Form Intake",
    tag: "Learning to Build",
    year: "Focus",
    impact: "Less copy-paste",
    impactColor: "#4f6d5a",
    desc: "Mapping how a contact form or sign-up could flow straight into a spreadsheet or CRM, send an auto-acknowledgement, and notify the team — instead of being re-keyed by hand. Practising this with Zapier and Make on sample workflows.",
    tools: ["Zapier", "Make", "Google Sheets", "Forms"],
  },
  {
    title: "Content & Post Scheduling",
    tag: "From Real Experience",
    year: "Focus",
    impact: "Consistent posting",
    impactColor: "#c08a2d",
    desc: "Building on hands-on social media work: using scheduling tools to plan posts ahead, and exploring how to connect a content calendar to auto-reminders and cross-posting so nothing is published late or forgotten.",
    tools: ["Scheduling tools", "Google Calendar", "Zapier"],
  },
  {
    title: "Data Entry & Tidy-Up",
    tag: "Learning to Build",
    year: "Focus",
    impact: "Fewer errors",
    impactColor: "#a8341f",
    desc: "Turning manual data-entry routines into structured templates and exploring no-code steps that move, clean, and sync records between sheets and apps — reducing duplicate typing and the mistakes that come with it.",
    tools: ["Google Sheets", "Excel", "Make"],
  },
  {
    title: "Admin Notifications & Follow-ups",
    tag: "Learning to Build",
    year: "Focus",
    impact: "Nothing slips",
    impactColor: "#3c5a78",
    desc: "Studying how to set up automated email/Slack reminders for scheduling, approvals, and client follow-ups so routine admin nudges send themselves. Practising with n8n and Zapier on practice scenarios.",
    tools: ["n8n", "Zapier", "Gmail", "Slack"],
  },
];

const capabilities = [
  { icon: Workflow, label: "Process Coordination", items: ["Task & workflow coordination", "Scheduling & calendar mgmt", "Process documentation", "Team coordination"] },
  { icon: Database, label: "Data & Organisation", items: ["Data entry & accuracy", "Google Sheets & Excel", "Web research", "Record keeping"] },
  { icon: Settings, label: "Admin & Marketing Ops", items: ["Email & follow-ups", "Content scheduling tools", "Client communication", "Recruitment / HR support"] },
  { icon: Zap, label: "No-Code Automation", learning: true, items: ["Zapier (learning)", "Make (learning)", "n8n (learning)", "Workflow mapping"] },
  { icon: Code2, label: "App & API Connecting", learning: true, items: ["Connecting apps no-code", "Webhooks & triggers", "Integrating marketing tools", "Basic API concepts"] },
  { icon: Bot, label: "AI-Assisted Tasks", learning: true, items: ["ChatGPT & Claude", "AI-assisted drafting", "AI-assisted data tidy-up", "Prompting for automation"] },
];

const timeline = [
  { year: "2025", role: "Assistant Marketing Coordinator / Admin Staff", org: "LetzMarket", note: "Digital Marketing · Canada (Remote)" },
  { year: "2024–2025", role: "Social Media Manager", org: "No Boundaries Marketing Group", note: "Digital Marketing · USA (Remote)" },
  { year: "2023–2024", role: "Human Resource Staff", org: "Toyota Butuan City", note: "Butuan City, PH" },
  { year: "2022", role: "BS Information System", org: "Caraga State University", note: "Graduated" },
];

// Real, honest foundation facts (no invented metrics)
const factsData = [
  { label: "Marketing & ops experience", value: "3 yrs", color: "#4f6d5a" },
  { label: "Real roles held", value: "3 roles", color: "#c08a2d" },
  { label: "Automation tools learning", value: "Zapier · Make · n8n", color: "#a8341f" },
];

// No-code tools John is currently learning (focus, not usage share)
const learningTools = [
  { tool: "Zapier", color: "#a8341f" },
  { tool: "Make", color: "#c08a2d" },
  { tool: "n8n", color: "#4f6d5a" },
  { tool: "AI-assisted (ChatGPT / Claude)", color: "#3c5a78" },
];

// SVG pipeline flow diagram
function PipelineFlow() {
  const nodes = [
    { id: "trigger", label: "Trigger", sub: "Webhook / Form", x: 40, color: "#a8341f" },
    { id: "process", label: "Process", sub: "Transform & route", x: 160, color: "#c08a2d" },
    { id: "action", label: "Action", sub: "API / DB write", x: 280, color: "#4f6d5a" },
    { id: "notify", label: "Notify", sub: "Slack / Email", x: 400, color: "#3c5a78" },
  ];
  const nodeW = 80; const nodeH = 48; const cy = 60;

  return (
    <div className="rounded-[0.4rem] p-7" style={{ background: "rgba(251,246,238,0.03)", border: "1px solid rgba(241,233,219,0.1)" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c08a2d" }} className="mb-5">
        How a no-code workflow flows (what I'm learning)
      </p>
      <svg viewBox="0 0 480 120" className="w-full">
        {/* connector lines */}
        {nodes.slice(0, -1).map((n, i) => (
          <g key={n.id + "-line"}>
            <line
              x1={n.x + nodeW} y1={cy}
              x2={nodes[i + 1].x} y2={cy}
              stroke="rgba(241,233,219,0.15)" strokeWidth="1.5" strokeDasharray="4 3"
            />
            <polygon
              points={`${nodes[i + 1].x},${cy} ${nodes[i + 1].x - 7},${cy - 4} ${nodes[i + 1].x - 7},${cy + 4}`}
              fill="rgba(241,233,219,0.25)"
            />
          </g>
        ))}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect x={n.x} y={cy - nodeH / 2} width={nodeW} height={nodeH} rx="3" fill={n.color + "22"} stroke={n.color + "55"} strokeWidth="1" />
            <text x={n.x + nodeW / 2} y={cy - 7} textAnchor="middle" fontSize="9" fontFamily="'Roboto Slab', serif" fontWeight="700" fill="#f1e9db">
              {n.label}
            </text>
            <text x={n.x + nodeW / 2} y={cy + 9} textAnchor="middle" fontSize="7" fontFamily="'JetBrains Mono', monospace" fill="#b3a48d">
              {n.sub}
            </text>
          </g>
        ))}
        {/* error branch */}
        <line x1={160 + nodeW / 2} y1={cy + nodeH / 2} x2={160 + nodeW / 2} y2={105} stroke="rgba(168,52,31,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <rect x={110} y={98} width={80} height={18} rx="2" fill="#a8341f18" stroke="#a8341f44" strokeWidth="1" />
        <text x={150} y={110} textAnchor="middle" fontSize="7" fontFamily="'JetBrains Mono', monospace" fill="#a8341f">error handler</text>
      </svg>
    </div>
  );
}

function FoundationPanel() {
  return (
    <div className="rounded-[0.4rem] p-7" style={{ background: "rgba(251,246,238,0.03)", border: "1px solid rgba(241,233,219,0.1)" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c08a2d" }} className="mb-6">
        The foundation · real experience
      </p>
      <div className="flex flex-col gap-5">
        {factsData.map((d) => (
          <div key={d.label} className="flex items-baseline justify-between gap-4">
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", color: "#b3a48d" }}>{d.label}</span>
            <span style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.05rem", color: d.color, letterSpacing: "-0.01em", textAlign: "right" }}>{d.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-[rgba(241,233,219,0.08)]">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b3a48d" }}>
          Approach
        </p>
        <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.2rem", color: "#f1e9db", letterSpacing: "-0.01em", lineHeight: 1.3 }} className="mt-1">
          Organised first, automated next.
        </p>
      </div>
    </div>
  );
}

function LearningTools() {
  return (
    <div className="rounded-[0.4rem] p-7" style={{ background: "rgba(251,246,238,0.03)", border: "1px solid rgba(241,233,219,0.1)" }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c08a2d" }} className="mb-6">
        Currently learning · no-code tools
      </p>
      <div className="flex flex-col gap-3">
        {learningTools.map((t) => (
          <div key={t.tool} className="flex items-center gap-3">
            <span className="rounded-full" style={{ width: "9px", height: "9px", background: t.color, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.9rem", color: "#f1e9db" }}>{t.tool}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-[rgba(241,233,219,0.08)]">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b3a48d", lineHeight: 1.6 }}>
          Building skills on practice workflows — honestly in progress, not yet client-delivered.
        </p>
      </div>
    </div>
  );
}

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const links = ["Work", "Capabilities", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-[#1c1916]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={() => { setActive("hero"); setMenuOpen(false); }}
          style={{ fontFamily: "'Roboto Slab', serif" }}
          className="text-[#f4ece0] font-bold tracking-tight text-base"
        >
          John Louie <span style={{ color: "#c08a2d" }}>Caparoso</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l.toLowerCase())}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.65)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="mailto:johnlouiecaparoso@gmail.com"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", background: "#a8341f", color: "#fbf6ee" }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
        >
          Get in Touch <ArrowRight size={12} />
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-[0.4rem] text-[#f1e9db] hover:bg-[rgba(241,233,219,0.08)] transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-[#1c1916]/98 backdrop-blur-sm px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.65)",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
              className="py-2.5"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:johnlouiecaparoso@gmail.com"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", background: "#a8341f", color: "#fbf6ee" }}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
          >
            Get in Touch <ArrowRight size={12} />
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-20 md:pt-14 overflow-hidden" style={{ backgroundColor: "#1c1916" }}>
      <img
        src={HERO_IMG}
        alt="Computer code displayed on a dark monitor screen"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.35 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(28,25,22,0.97) 0%, rgba(28,25,22,0.62) 55%, rgba(28,25,22,0.18) 100%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.18em", color: "#c08a2d", textTransform: "uppercase" }} className="mb-6">
            &#9632; Available for projects
          </p>
          <h1 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800, fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#f4ece0", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            Streamlining
            <br />
            the
            <br />
            <span style={{ color: "#c08a2d" }}>busywork.</span>
          </h1>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "rgba(241,233,219,0.7)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "44ch" }} className="mt-6 mb-10">
            I'm John Louie — an operations-minded professional learning to
            automate repetitive admin and marketing tasks with no-code tools
            (Zapier, Make, n8n), building on hands-on experience in scheduling,
            data entry, and team coordination.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              style={{ fontFamily: "'Roboto Slab', serif", background: "#a8341f", color: "#fbf6ee", fontWeight: 600, fontSize: "0.95rem" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors"
            >
              See My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              style={{ fontFamily: "'Libre Franklin', sans-serif", border: "1px solid rgba(241,233,219,0.25)", color: "#f1e9db", fontSize: "0.95rem" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:border-[rgba(241,233,219,0.5)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 self-end pb-2">
          {[
            { num: "3 yrs", label: "Marketing & ops experience" },
            { num: "3 roles", label: "Across HR, social & marketing" },
            { num: "Learning", label: "Zapier · Make · n8n" },
          ].map((s) => (
            <div key={s.num} className="flex items-baseline gap-4">
              <span style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800, fontSize: "clamp(1.7rem, 6vw, 2.2rem)", color: "#c08a2d", letterSpacing: "-0.02em" }}>
                {s.num}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(241,233,219,0.5)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
            What I'm Building
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="text-foreground">
            Focus Areas
          </h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "52ch" }} className="mt-4">
            The repetitive admin and marketing tasks I'm learning to automate with no-code tools. These are honest focus areas I'm practising — not finished client projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-[0.4rem] p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              style={{ boxShadow: "0 2px 8px rgba(33,28,23,0.07)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div style={{ background: "rgba(168,52,31,0.08)", border: "1px solid rgba(168,52,31,0.2)", borderRadius: "0.4rem", padding: "0.5rem 0.75rem" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#a8341f" }}>
                    {p.tag}
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#6f6354", letterSpacing: "0.06em" }}>{p.year}</span>
              </div>
              <h3 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.35rem" }} className="text-foreground">
                {p.title}
              </h3>
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6f6354" }} className="mb-0.5">
                  Goal of automating it
                </p>
                <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.2rem", color: p.impactColor }}>
                  {p.impact}
                </p>
              </div>
              <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", lineHeight: 1.65, fontSize: "0.92rem" }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {p.tools.map((t) => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.08em", background: "rgba(33,28,23,0.06)", color: "#6f6354", padding: "0.2rem 0.55rem", borderRadius: "0.25rem", border: "1px solid rgba(33,28,23,0.1)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactPanel() {
  return (
    <section className="py-16 md:py-28" style={{ background: "#211c17" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c08a2d" }} className="mb-3">
            The Approach
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f4ece0" }}>
            Foundation Meets Automation
          </h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#b3a48d", fontSize: "0.88rem", marginTop: "0.5rem" }}>
            A real, organised admin and marketing background — and the no-code automation skills I'm actively building on top of it
          </p>
        </div>

        <div className="mb-6">
          <PipelineFlow />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FoundationPanel />
          <LearningTools />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "3 yrs", label: "Marketing & ops experience" },
            { num: "3 roles", label: "HR · social · marketing" },
            { num: "Learning", label: "Zapier · Make · n8n" },
            { num: "Available", label: "For projects now" },
          ].map((s) => (
            <div key={s.label} className="rounded-[0.4rem] p-6" style={{ background: "rgba(251,246,238,0.04)", border: "1px solid rgba(241,233,219,0.1)" }}>
              <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 800, fontSize: "2rem", color: "#c08a2d", letterSpacing: "-0.02em", lineHeight: 1 }} className="mb-2">
                {s.num}
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.13em", textTransform: "uppercase", color: "#b3a48d" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
            The Toolkit
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="text-foreground">
            What I Bring
            <br />& What I'm Learning
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.label} className="bg-card border border-border rounded-[0.4rem] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-[0.35rem]" style={{ background: "rgba(168,52,31,0.1)", color: "#a8341f" }}>
                  <cap.icon size={16} />
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#a8341f" }}>
                  {cap.label}
                </span>
              </div>
              {cap.learning && (
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#c08a2d", background: "rgba(192,138,45,0.12)", border: "1px solid rgba(192,138,45,0.3)", padding: "0.12rem 0.5rem", borderRadius: "0.25rem" }} className="inline-block mb-4 -mt-2">
                  Currently learning
                </span>
              )}
              <ul className="flex flex-col gap-2">
                {cap.items.map((item) => (
                  <li key={item} style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", fontSize: "0.88rem" }} className="flex items-start gap-2">
                    <span style={{ color: "#c08a2d", fontSize: "0.5rem", marginTop: "0.4rem", flexShrink: 0 }}>&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-28 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[0.4rem] overflow-hidden" style={{ background: "#2a3a35" }}>
              <img
                src={ABOUT_IMG}
                alt="John Louie Caparoso"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 rounded-[0.4rem] px-5 py-4"
              style={{ background: "#a8341f", color: "#fbf6ee", fontFamily: "'Roboto Slab', serif", fontWeight: 700, boxShadow: "0 8px 32px rgba(168,52,31,0.35)" }}
            >
              <div style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>3 yrs</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(251,246,238,0.8)" }}>
                Marketing & ops
              </div>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
              About Me
            </p>
            <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 2.6rem)" }} className="text-foreground mb-6">
              Organised by habit.
              <br />Automating
              <br />by choice.
            </h2>
            <div style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", lineHeight: 1.8, fontSize: "0.95rem" }} className="space-y-4 mb-10">
              <p>
                I'm John Louie Caparoso, based in Magallanes, Agusan del Norte.
                My background is in admin support, scheduling, data entry, and
                marketing operations across HR, social media, and marketing
                coordination roles — work that rewards being detail-oriented and
                process-minded.
              </p>
              <p>
                That foundation is exactly why I'm drawn to automation. I keep
                running into the same repetitive tasks — re-keying form data,
                manual follow-ups, copying records between apps — and I'm now
                learning to remove them with no-code tools like Zapier, Make,
                and n8n.
              </p>
              <p>
                I'm honest about where I am: I'm building these skills on practice
                workflows, not delivering large production systems yet. What I do
                bring is a reliable, organised way of working and a genuine drive
                to streamline the busywork. If you have a repetitive process worth
                tidying up, I'd love to learn alongside it.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6f6354" }} className="mb-5">
                Experience
              </p>
              <div className="space-y-5">
                {timeline.map((t) => (
                  <div key={t.year} className="flex items-start gap-5">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#c08a2d", letterSpacing: "0.06em", minWidth: "7rem", paddingTop: "0.1rem" }}>
                      {t.year}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontWeight: 600, fontSize: "0.92rem", color: "#211c17" }}>{t.role}</div>
                      <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.83rem", color: "#6f6354" }}>{t.org} · {t.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 border-t border-border" style={{ background: "#fbf6ee" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8341f" }} className="mb-3">
            Let's Talk
          </p>
          <h2 style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }} className="text-foreground mb-4">
            What busywork
            <br />could we streamline?
          </h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6f6354", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "46ch" }} className="mb-10">
            I'm available for projects and happy to talk through a repetitive
            admin or marketing task you'd like to organise or automate. I'll be
            upfront about what I can do today and what I'm still learning — no
            overpromising.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Availability", value: "Open for projects" },
              { label: "Strength", value: "Admin & ops support" },
              { label: "Learning", value: "Zapier · Make · n8n" },
            ].map((s) => (
              <div key={s.label} className="rounded-[0.4rem] p-4" style={{ border: "1px solid rgba(33,28,23,0.14)", background: "#fbf6ee" }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6f6354" }} className="mb-1">
                  {s.label}
                </p>
                <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.05rem", color: "#211c17" }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              style={{ fontFamily: "'Roboto Slab', serif", background: "#a8341f", color: "#fbf6ee", fontWeight: 600, fontSize: "0.95rem" }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href="resume.html"
              style={{ fontFamily: "'Libre Franklin', sans-serif", border: "1px solid rgba(33,28,23,0.2)", color: "#211c17", fontSize: "0.9rem" }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[0.4rem] hover:border-[rgba(33,28,23,0.4)] transition-colors"
            >
              View Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/johnlouiecaparoso" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-louie-caparoso-0a344a256/" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/louiecaparoso4" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{ color: "#6f6354" }} className="flex items-center gap-2 hover:text-foreground transition-colors">
                <s.icon size={18} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }} className="hidden sm:block">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-7" style={{ background: "#1c1916" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(241,233,219,0.35)" }}>
          © 2026 John Louie Caparoso · Magallanes, Agusan del Norte, PH
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(241,233,219,0.25)" }}>
          Admin & marketing ops · Learning no-code automation
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("hero");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <NavBar active={active} setActive={setActive} />
      <Hero />
      <Work />
      <ImpactPanel />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
