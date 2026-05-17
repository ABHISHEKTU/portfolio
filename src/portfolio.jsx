import { useState, useEffect, useRef } from "react";

const T = {
  bg: "#f8f9ff",
  border: "rgba(0,0,0,0.07)",
  text: "#1a1a2e",
  muted: "#5f6b8a",
  faint: "#8892a4",
  blue: "#1a73e8",
  teal: "#00b4d8",
  purple: "#7c3aed",
  grad1: "linear-gradient(135deg, #1a73e8 0%, #00b4d8 50%, #7c3aed 100%)",
  gradText: "linear-gradient(135deg, #1a73e8 0%, #7c3aed 60%, #00b4d8 100%)",
};

const NAV = ["About", "Skills", "Projects", "Education", "Certifications", "Contact"];

const SKILLS = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Django", icon: "🎸", color: "#092E20" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Machine Learning", icon: "🤖", color: "#FF6F00" },
  { name: "NLP", icon: "🧠", color: "#7c3aed" },
  { name: "CNN / ResNet", icon: "🔬", color: "#F7931E" },
  { name: "PostgreSQL", icon: "🗄️", color: "#336791" },
  { name: "REST APIs", icon: "🔗", color: "#00b4d8" },
  { name: "TypeScript", icon: "📘", color: "#3178C6" },
  { name: "Git & GitHub", icon: "🌿", color: "#F05032" },
  { name: "Node.js", icon: "🟩", color: "#68A063" },
  { name: "LLM Integration", icon: "✨", color: "#7c3aed" },
];

const PROJECTS = [
  {
    title: "TalentTrace – AI Resume Screener",
    desc: "AI-powered recruitment platform that analyzes resumes against job descriptions using NLP. Features resume parsing, keyword matching, skill gap analysis, and a full dashboard with scoring & analytics.",
    tags: ["NLP", "Python", "Django", "React", "REST APIs"],
    emoji: "📄",
    from: "#1a73e8",
    to: "#00b4d8",
    github: "https://github.com/ABHISHEKTU/TalentTrace",
    live: "https://talent-trace-eight.vercel.app/",
  },
  {
    title: "Landslide Prediction System",
    desc: "Full-stack ML web app integrating real-time weather APIs and CNN models for geospatial landslide risk prediction. Built modular Django backend with optimized preprocessing and responsive frontend visualization.",
    tags: ["CNN", "Django", "Python", "REST APIs", "ML"],
    emoji: "🏔️",
    from: "#7c3aed",
    to: "#1a73e8",
    github: "https://github.com/ABHISHEKTU/Landslide-Prediction-System",
    live: "https://landslide-prediction.up.railway.app/",
  },
];

const EDUCATION = [
  {
    year: "2024 – 2026",
    title: "Master of Computer Application (Pursuing)",
    org: "Cochin University College of Engineering Kuttanad, CUSAT, Kerala",
    desc: "Specializing in AI/ML systems, full-stack development, and intelligent application design.",
    color: "#7c3aed",
  },
  {
    year: "2020 – 2024",
    title: "Bachelor of Science in Physics",
    org: "Sree Krishna College Guruvayur, University of Calicut, Kerala",
    desc: "Strong foundation in analytical thinking, mathematics, and computational problem-solving.",
    color: "#1a73e8",
  },
];

const CERTIFICATIONS = [
  {
    year: "July 2025",
    title: "Agentic AI Agent Architect",
    org: "IBM SkillsBuild",
    desc: "Advanced certification in designing and deploying autonomous AI agents and agentic workflows.",
    color: "#1a73e8",
    badge: "🤖",
  },
  {
    year: "July 2025",
    title: "Artificial Intelligence Fundamentals",
    org: "IBM",
    desc: "Core AI concepts including machine learning, neural networks, and practical AI applications.",
    color: "#00b4d8",
    badge: "🧠",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, y = 32, className = "" }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : `translateY(${y}px)`,
      transition: `opacity 0.75s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

function SectionLabel({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
      <div style={{ width: "32px", height: "3px", borderRadius: "2px", background: T.grad1 }} />
      <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: T.blue }}>{label}</span>
    </div>
  );
}

function Blobs() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-15%", right: "-10%", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(26,115,232,0.10) 0%, transparent 70%)", filter: "blur(60px)", animation: "blobDrift1 12s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)", filter: "blur(80px)", animation: "blobDrift2 15s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", top: "40%", left: "30%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)", filter: "blur(60px)", animation: "blobDrift1 18s ease-in-out infinite alternate-reverse" }} />
    </div>
  );
}

function Nav({ scrolled, active }) {
  const [open, setOpen] = useState(false);
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 32px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(248,249,255,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "none",
        transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
      }}>
        <div style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px", background: T.gradText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ABHISHEK T U
        </div>
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }} className="desk-nav">
          {NAV.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              padding: "8px 14px", borderRadius: "999px", border: "none",
              background: active === l.toLowerCase() ? "rgba(26,115,232,0.1)" : "transparent",
              color: active === l.toLowerCase() ? T.blue : T.muted,
              fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (active !== l.toLowerCase()) { e.currentTarget.style.background = "rgba(0,0,0,0.04)"; e.currentTarget.style.color = T.text; } }}
              onMouseLeave={e => { if (active !== l.toLowerCase()) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.muted; } }}
            >{l}</button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{
            marginLeft: "6px", padding: "9px 18px", borderRadius: "999px", border: "none",
            background: T.grad1, color: "#fff", fontSize: "13px", fontWeight: 700,
            cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(26,115,232,0.3)", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 28px rgba(26,115,232,0.45)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,115,232,0.3)"}
          >Hire Me</button>
        </div>
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: T.text }} className="mob-btn">
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99, background: "rgba(248,249,255,0.97)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${T.border}`, padding: "16px 0" }}>
          {NAV.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ display: "block", width: "100%", padding: "14px 32px", border: "none", background: "none", color: T.text, fontSize: "16px", fontWeight: 500, textAlign: "left", cursor: "pointer", fontFamily: "inherit" }}>{l}</button>
          ))}
        </div>
      )}
    </>
  );
}

function About() {
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, padding: "80px 24px 60px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,115,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,115,232,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.8 }} />
      <div style={{ maxWidth: "1100px", width: "100%", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">
        <div>
          <div style={{ animation: "fadeUp 0.8s ease both" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "999px", background: "rgba(26,115,232,0.08)", border: "1px solid rgba(26,115,232,0.2)", color: T.blue, fontSize: "13px", fontWeight: 700, marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }} />
              Open to opportunities · Kerala, India
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2.5px", color: T.text, marginBottom: "12px", animation: "fadeUp 0.8s ease 0.1s both" }}>
            Hi, I'm{" "}<span style={{ background: T.gradText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Abhishek</span>
          </h1>
          <h2 style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 700, color: T.muted, marginBottom: "24px", letterSpacing: "-0.5px", animation: "fadeUp 0.8s ease 0.18s both" }}>
            Building{" "}<span style={{ background: T.gradText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Intelligent Solutions</span>
          </h2>
          <p style={{ fontSize: "16px", color: T.muted, lineHeight: 1.8, marginBottom: "32px", animation: "fadeUp 0.8s ease 0.26s both" }}>
            Software developer with hands-on experience building full-stack web applications, ML-powered systems, and REST APIs using Python and Django. Pursuing MCA at CUSAT Kerala, I'm passionate about creating scalable AI tools — from intelligent recruitment pipelines to geospatial disaster prediction.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px", animation: "fadeUp 0.8s ease 0.32s both" }}>
            {[["📍", "Kerala, India"], ["🎓", "MCA @ CUSAT"], ["💼", "Full-Stack + AI/ML"], ["🚀", "Open to Work"]].map(([icon, label]) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, background: "rgba(255,255,255,0.7)", border: `1px solid ${T.border}`, color: T.text, backdropFilter: "blur(8px)" }}>{icon} {label}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.38s both" }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "14px 32px", borderRadius: "999px", border: "none", background: T.grad1, color: "#fff", fontWeight: 700, fontSize: "15px", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 8px 32px rgba(26,115,232,0.35)", transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,115,232,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,115,232,0.35)"; }}
            >View Projects ↓</button>
            <a href="https://github.com/ABHISHEKTU" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", borderRadius: "999px", border: "1.5px solid rgba(26,115,232,0.3)", background: "rgba(26,115,232,0.05)", color: T.blue, fontWeight: 700, fontSize: "15px", textDecoration: "none", transition: "all 0.25s", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,115,232,0.1)"; e.currentTarget.style.borderColor = "rgba(26,115,232,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(26,115,232,0.05)"; e.currentTarget.style.borderColor = "rgba(26,115,232,0.3)"; }}
            >⚙️ GitHub</a>
          </div>
        </div>
        <div style={{ animation: "fadeUp 0.8s ease 0.2s both" }}>
          <div style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(20px)", borderRadius: "28px", padding: "40px", border: `1px solid ${T.border}`, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: T.grad1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "44px", marginBottom: "24px", boxShadow: "0 8px 32px rgba(26,115,232,0.3)" }}>👨‍💻</div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: T.text, marginBottom: "4px" }}>Abhishek T U</h3>
            <p style={{ color: T.blue, fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Software Developer · AI/ML Engineer</p>
            <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[["✉️", "abhishektu123@gmail.com"], ["📞", "+91 7594009262"], ["🎓", "MCA @ CUSAT, Kerala"], ["🌐", "github.com/ABHISHEKTU"]].map(([icon, val]) => (
                <div key={val} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: T.muted }}>
                  <span style={{ fontSize: "16px" }}>{icon}</span>
                  <span style={{ fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px", borderTop: `1px solid ${T.border}`, paddingTop: "20px" }}>
              {[["2+", "Projects Live"], ["2", "IBM Certs"], ["5+", "Tech Stack"], ["Agile", "Methodology"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center", padding: "12px", borderRadius: "12px", background: "rgba(26,115,232,0.04)", border: "1px solid rgba(26,115,232,0.08)" }}>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: T.text, letterSpacing: "-0.5px" }}>{n}</div>
                  <div style={{ fontSize: "11px", color: T.faint, fontWeight: 500, marginTop: "2px" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal><SectionLabel label="Expertise" /><h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: T.text, letterSpacing: "-1.5px", marginBottom: "16px" }}>Skills & Technologies</h2><p style={{ color: T.muted, fontSize: "17px", marginBottom: "52px", maxWidth: "500px" }}>Full-stack development meets intelligent systems.</p></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "16px" }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div style={{ padding: "24px 16px", borderRadius: "20px", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: `1px solid ${T.border}`, textAlign: "center", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", cursor: "default", transition: "all 0.28s cubic-bezier(.22,1,.36,1)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px ${s.color}30`; e.currentTarget.style.borderColor = `${s.color}50`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = T.border; }}
              >
                <div style={{ fontSize: "30px", marginBottom: "10px" }}>{s.icon}</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: T.text }}>{s.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.75)", backdropFilter: "blur(20px)", border: `1px solid ${hov ? `${p.from}40` : T.border}`, boxShadow: hov ? `0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px ${p.from}20` : "0 4px 24px rgba(0,0,0,0.06)", transition: "all 0.35s cubic-bezier(.22,1,.36,1)", transform: hov ? "translateY(-6px)" : "none", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "140px", background: `linear-gradient(135deg, ${p.from}, ${p.to})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.1)" }} />
        <span style={{ position: "relative", zIndex: 1 }}>{p.emoji}</span>
        <div style={{ position: "absolute", top: "-50%", left: hov ? "120%" : "-60%", width: "60%", height: "200%", background: "rgba(255,255,255,0.15)", transform: "skewX(-20deg)", transition: "left 0.6s ease" }} />
      </div>
      <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 800, color: T.text, marginBottom: "12px", letterSpacing: "-0.3px" }}>{p.title}</h3>
        <p style={{ color: T.muted, fontSize: "14px", lineHeight: 1.75, flex: 1 }}>{p.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "20px 0 24px" }}>
          {p.tags.map(t => (<span key={t} style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "999px", background: `${p.from}12`, color: p.from, border: `1px solid ${p.from}25`, fontWeight: 600 }}>{t}</span>))}
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          {[["↗ GitHub", p.github], ["⚡ Live Demo", p.live]].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: "10px", borderRadius: "12px", textAlign: "center", border: `1px solid ${T.border}`, color: T.muted, fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s", background: "rgba(0,0,0,0.02)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = p.from; e.currentTarget.style.color = p.from; e.currentTarget.style.background = `${p.from}08`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.muted; e.currentTarget.style.background = "rgba(0,0,0,0.02)"; }}
            >{label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal><SectionLabel label="Portfolio" /><h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: T.text, letterSpacing: "-1.5px", marginBottom: "16px" }}>Featured Projects</h2><p style={{ color: T.muted, fontSize: "17px", marginBottom: "52px", maxWidth: "500px" }}>Real-world AI systems built to solve complex problems at scale.</p></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {PROJECTS.map((p, i) => (<Reveal key={p.title} delay={i * 0.15}><ProjectCard p={p} /></Reveal>))}
        </div>
      </div>
    </section>
  );
}

/* ─── EDUCATION (separate) ─────────────────────────────────────────────────── */
function Education() {
  return (
    <section id="education" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Reveal>
          <SectionLabel label="Academic Background" />
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: T.text, letterSpacing: "-1.5px", marginBottom: "16px" }}>Education</h2>
          <p style={{ color: T.muted, fontSize: "17px", marginBottom: "52px" }}>From physics to full-stack AI — a non-traditional path to software engineering.</p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {EDUCATION.map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                {/* Icon block */}
                <div style={{ minWidth: "64px", height: "64px", borderRadius: "18px", background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`, border: `1.5px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", boxShadow: `0 4px 20px ${item.color}15` }}>🎓</div>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.8)", backdropFilter: "blur(16px)", borderRadius: "20px", padding: "24px 28px", border: `1px solid ${T.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.09), 0 0 0 1px ${item.color}30`; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 800, color: T.text }}>{item.title}</h3>
                    <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "999px", background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25`, fontWeight: 700 }}>{item.year}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: T.blue, fontWeight: 600, marginBottom: "10px" }}>{item.org}</p>
                  <p style={{ fontSize: "14px", color: T.muted, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CERTIFICATIONS (separate) ────────────────────────────────────────────── */
function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Reveal>
          <SectionLabel label="Credentials" />
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: T.text, letterSpacing: "-1.5px", marginBottom: "16px" }}>Certifications</h2>
          <p style={{ color: T.muted, fontSize: "17px", marginBottom: "52px" }}>Industry-recognized credentials from world-class institutions.</p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {CERTIFICATIONS.map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                {/* Badge */}
                <div style={{ minWidth: "64px", height: "64px", borderRadius: "18px", background: `linear-gradient(135deg, ${item.color}, ${item.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", boxShadow: `0 8px 24px ${item.color}30` }}>{item.badge}</div>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.8)", backdropFilter: "blur(16px)", borderRadius: "20px", padding: "24px 28px", border: `1px solid ${T.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.09), 0 0 0 1px ${item.color}30`; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 800, color: T.text }}>{item.title}</h3>
                    <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "999px", background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25`, fontWeight: 700 }}>{item.year}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: item.color, fontWeight: 700, marginBottom: "10px" }}>🏢 {item.org}</p>
                  <p style={{ fontSize: "14px", color: T.muted, lineHeight: 1.65 }}>{item.desc}</p>
                  {/* Verified badge */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "14px", padding: "5px 12px", borderRadius: "999px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", fontSize: "12px", fontWeight: 700, color: "#16a34a" }}>
                    ✅ Verified Certification
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
 const submit = async () => {
  if (!form.name || !form.email || !form.message) return;
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(https://formspree.io/f/xzdwpqjz),
  });
  setSent(true);
};
  const inputStyle = { width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", border: `1.5px solid ${T.border}`, borderRadius: "14px", color: T.text, fontSize: "15px", outline: "none", fontFamily: "inherit", boxSizing: "border-box", transition: "border-color 0.2s" };
  return (
    <section id="contact" style={{ padding: "100px 24px 140px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <Reveal><SectionLabel label="Get In Touch" /><h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: T.text, letterSpacing: "-1.5px", marginBottom: "16px" }}>Let's Work Together</h2><p style={{ color: T.muted, fontSize: "17px", marginBottom: "48px" }}>Open to full-time roles, freelance projects, and AI/ML research collaborations.</p></Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
            {[{ label: "GitHub", icon: "⚙️", href: "https://github.com/ABHISHEKTU", color: "#24292e" }, { label: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/abhishek-t-u-318b432a0/", color: "#0077b5" }, { label: "Email", icon: "✉️", href: "mailto:abhishektu123@gmail.com", color: T.blue }].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 22px", borderRadius: "12px", background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", border: `1px solid ${T.border}`, color: T.text, textDecoration: "none", fontSize: "14px", fontWeight: 700, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.boxShadow = `0 8px 28px ${s.color}20`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = T.text; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "none"; }}
              >{s.icon} {s.label}</a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(20px)", borderRadius: "24px", padding: "40px", border: `1px solid ${T.border}`, boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "52px", marginBottom: "16px" }}>✅</div>
                <p style={{ fontSize: "22px", fontWeight: 800, color: T.text }}>Message Sent!</p>
                <p style={{ color: T.muted, marginTop: "8px" }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid">
                  {[{ name: "name", placeholder: "Your Name", type: "text" }, { name: "email", placeholder: "Email Address", type: "email" }].map(f => (
                    <input key={f.name} {...f} value={form[f.name]} onChange={handle} style={inputStyle} onFocus={e => e.target.style.borderColor = T.blue} onBlur={e => e.target.style.borderColor = T.border} />
                  ))}
                </div>
                <textarea name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handle} style={{ ...inputStyle, resize: "vertical" }} onFocus={e => e.target.style.borderColor = T.blue} onBlur={e => e.target.style.borderColor = T.border} />
                <button onClick={submit} style={{ padding: "15px", borderRadius: "14px", border: "none", background: T.grad1, color: "#fff", fontWeight: 700, fontSize: "16px", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 24px rgba(26,115,232,0.35)", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 10px 36px rgba(26,115,232,0.45)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,115,232,0.35)"; e.currentTarget.style.transform = "none"; }}
                >Send Message →</button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV.map(n => n.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: T.bg, color: T.text, minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <Blobs />
      <Nav scrolled={scrolled} active={active} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: `1px solid ${T.border}`, color: T.faint, fontSize: "13px", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)" }}>
        Built with React · Abhishek T U · © 2026
      </footer>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
        @keyframes blobDrift1 { from { transform:translate(0,0) scale(1); } to { transform:translate(40px,-30px) scale(1.08); } }
        @keyframes blobDrift2 { from { transform:translate(0,0) scale(1); } to { transform:translate(-30px,40px) scale(1.1); } }
        * { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#f8f9ff; }
        ::-webkit-scrollbar-thumb { background:linear-gradient(#1a73e8,#7c3aed); border-radius:3px; }
        .desk-nav { display:flex !important; }
        .mob-btn { display:none !important; }
        .about-grid { grid-template-columns:1fr 1fr !important; }
        @media (max-width:768px) {
          .desk-nav { display:none !important; }
          .mob-btn { display:block !important; }
          .form-grid { grid-template-columns:1fr !important; }
          .about-grid { grid-template-columns:1fr !important; gap:40px !important; }
        }
      `}</style>
    </div>
  );
}
