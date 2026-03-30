import { useState, useEffect, useRef } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const student = {
  name: "Varad Alshi",
  title: "Data Science & ML Engineer",
  tagline: "Building intelligent systems with explainable AI, deep learning, and real-world impact.",
  avatar: "VA",
  email: "varadalshi7@gmail.com",
  github: "github.com/VaradCodes31",
  linkedin: "linkedin.com/in/varadalshi",
  location: "Pune, India",
  phone: "+91 84218 28974",
  about:
    "I'm a Computer Science graduate from MIT World Peace University passionate about Data Science, Machine Learning, and AI-powered security systems. I love building explainable, production-ready ML systems that turn complex data into actionable insights — from intrusion detection to smart contract vulnerability analysis.",
  skills: [
    { name: "Python", level: 92, category: "Languages" },
    { name: "Java", level: 75, category: "Languages" },
    { name: "SQL", level: 78, category: "Languages" },
    { name: "C / C++", level: 68, category: "Languages" },
    { name: "Scikit-learn", level: 88, category: "ML / AI" },
    { name: "XGBoost / SHAP", level: 85, category: "ML / AI" },
    { name: "TensorFlow / LSTM", level: 78, category: "ML / AI" },
    { name: "Pandas / NumPy", level: 90, category: "ML / AI" },
    { name: "Flask / FastAPI", level: 76, category: "Frameworks" },
    { name: "Streamlit", level: 88, category: "Frameworks" },
    { name: "Matplotlib / Seaborn", level: 84, category: "Frameworks" },
    { name: "MySQL / MongoDB", level: 78, category: "Databases" },
    { name: "Git / VS Code", level: 85, category: "Tools" },
  ],
  projects: [
    {
      id: 1,
      title: "Netsage IDS",
      description:
        "Explainable Intrusion Detection System using CICIDS2017 (2.8M+ flows) with XGBoost achieving 99.88% accuracy. SHAP-powered global & local explainability with a Streamlit SOC-style cybersecurity dashboard.",
      tags: ["Python", "XGBoost", "SHAP", "Streamlit"],
      color: "#4ADE80",
      emoji: "🛡️",
      link: "#",
      github: "https://github.com/VaradCodes31",
      featured: true,
    },
    {
      id: 2,
      title: "BlockGuard",
      description:
        "AI-powered Ethereum smart contract vulnerability detector using opcode-level analysis and LSTM deep learning with 83% classification accuracy. Hybrid XAI framework with gradient attribution & opcode heatmaps.",
      tags: ["Python", "TensorFlow", "Streamlit", "Scikit-learn"],
      color: "#60A5FA",
      emoji: "⛓️",
      link: "#",
      github: "https://github.com/VaradCodes31",
      featured: true,
    },
    {
      id: 3,
      title: "Finlatics DS Projects",
      description:
        "A collection of data analysis projects built during the Finlatics Data Science Program — translating business goals into data-driven solutions using Python, statistical methods, and rich visualisations.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      color: "#FBBF24",
      emoji: "📊",
      link: "#",
      github: "https://github.com/VaradCodes31",
      featured: false,
    },
    {
      id: 4,
      title: "GDGoC Content Hub",
      description:
        "Led the Design & Content Team for GDGoC, creating developer-focused technical content, managing social media outreach, and driving community engagement among student developers.",
      tags: ["Technical Writing", "Community", "Branding"],
      color: "#F472B6",
      emoji: "✍️",
      link: "#",
      github: "#",
      featured: false,
    },
  ],
  experience: [
    {
      role: "Data Science & ML Work Experience",
      company: "Finlatics",
      period: "Feb 2025 – Apr 2025",
      desc: "Completed the Finlatics Data Science with Python program. Executed data analysis projects translating business goals into data-driven solutions using Python, statistical methods, and advanced visualisations.",
    },
    {
      role: "Design & Content Team Lead",
      company: "GDGoC (Google Developer Groups on Campus)",
      period: "Jun 2025 – Present",
      desc: "Leading technical communication and visual branding for the club. Authored developer-focused content on official platforms, driving higher engagement and outreach among student developers.",
    },
    {
      role: "Volunteer — WOW Pune",
      company: "City-Wide Developer Conference",
      period: "2024",
      desc: "Supported content creation and event coordination at WOW Pune, a large-scale city-wide developer conference.",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science",
    institution: "MIT World Peace University (Dr. Vishwanath Karad)",
    year: "Jun 2020 – Jun 2023",
    gpa: "8.72 / 10",
  },
};

const skillCategories = [...new Set(student.skills.map((s) => s.category))];

// ── NAV ───────────────────────────────────────────────────────────────────────
function NavBar({ active, setActive }) {
  const links = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(10,10,20,0.92)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none", transition: "all 0.4s ease" }}>
      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.5px" }}>
        varad<span style={{ color: "#4ADE80" }}>.dev</span>
      </span>
      <div style={{ display: "flex", gap: "0.25rem" }} className="nav-links">
        {links.map((l) => (
          <button key={l} onClick={() => setActive(l.toLowerCase())} style={{ background: active === l.toLowerCase() ? "rgba(74,222,128,0.12)" : "transparent", border: "none", color: active === l.toLowerCase() ? "#4ADE80" : "rgba(255,255,255,0.6)", padding: "0.4rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem", fontFamily: "'DM Mono',monospace", cursor: "pointer", transition: "all 0.2s" }}>
            {l}
          </button>
        ))}
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}>
        {menuOpen ? "✕" : "☰"}
      </button>
      {menuOpen && (
        <div style={{ position: "fixed", top: "64px", left: 0, right: 0, background: "rgba(10,10,20,0.97)", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {links.map((l) => (
            <button key={l} onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }} style={{ background: "none", border: "none", color: active === l.toLowerCase() ? "#4ADE80" : "#fff", padding: "0.75rem 1rem", textAlign: "left", fontSize: "1rem", fontFamily: "'DM Mono',monospace", cursor: "pointer", borderRadius: "6px" }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function HeroSection({ setActive }) {
  const [typed, setTyped] = useState("");
  const titles = ["Data Science Engineer", "ML Systems Builder", "XAI Specialist", "Open Source Contributor"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = titles[titleIdx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
        else setCharIdx((c) => c + 1);
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setTitleIdx((i) => (i + 1) % titles.length); setCharIdx(0); }
        else setCharIdx((c) => c - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, titleIdx]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
      <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />
      <div style={{ textAlign: "center", maxWidth: "720px", position: "relative", zIndex: 2 }}>
        <div style={{ width: "88px", height: "88px", borderRadius: "50%", background: "linear-gradient(135deg,#4ADE80,#22D3EE)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", fontWeight: 800, fontFamily: "'Syne',sans-serif", color: "#0a0a14", margin: "0 auto 2rem", boxShadow: "0 0 40px rgba(74,222,128,0.35)", animation: "float 3s ease-in-out infinite" }}>
          {student.avatar}
        </div>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.8rem", color: "#4ADE80", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "1rem" }}>✦ Student Portfolio ✦</p>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.8rem,7vw,5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: "1.25rem", letterSpacing: "-2px" }}>{student.name}</h1>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(1rem,2.5vw,1.3rem)", color: "#4ADE80", marginBottom: "1.5rem", minHeight: "2rem" }}>
          {typed}<span style={{ display: "inline-block", width: "2px", height: "1.2em", background: "#4ADE80", marginLeft: "2px", verticalAlign: "middle", animation: "blink 0.8s step-end infinite" }} />
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>{student.tagline}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setActive("projects")} className="btn-primary">View Projects →</button>
          <button onClick={() => setActive("contact")} className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section style={{ padding: "6rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <SectionHeading label="01" title="About Me" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="about-grid">
        <div>
          <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.5rem" }}>{student.about}</p>
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", color: "#4ADE80", letterSpacing: "1.5px", marginBottom: "0.6rem" }}>LANGUAGES SPOKEN</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["English", "Marathi", "Hindi", "German"].map((lang) => (
                <span key={lang} style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "6px", padding: "3px 10px", fontSize: "0.78rem", fontFamily: "'DM Mono',monospace", color: "rgba(255,255,255,0.6)" }}>{lang}</span>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "12px", padding: "1.25rem 1.5rem" }}>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.8rem", color: "#4ADE80", marginBottom: "0.75rem", letterSpacing: "1px" }}>EDUCATION</p>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>{student.education.degree}</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}>{student.education.institution}</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginTop: "0.3rem" }}>{student.education.year} &nbsp;·&nbsp; CGPA: {student.education.gpa}</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            { icon: "🤖", label: "ML Projects", value: "4+" },
            { icon: "🎯", label: "Best Accuracy", value: "99.88%" },
            { icon: "📊", label: "Data Flows Analysed", value: "2.8M+" },
            { icon: "🏅", label: "CGPA", value: "8.72" },
          ].map((s) => (
            <div key={s.label} className="stat-card" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "1.5rem 1rem", textAlign: "center", transition: "transform 0.2s" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#4ADE80" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: "0.2rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function ProjectCard({ project, delay }) {
  return (
    <div className="project-card" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${project.color}22`, borderRadius: "18px", padding: "2rem", position: "relative", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s,box-shadow 0.3s", animationDelay: `${delay}ms` }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: `radial-gradient(circle at top right,${project.color}18,transparent 70%)`, pointerEvents: "none" }} />
      {project.featured && <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", color: project.color, border: `1px solid ${project.color}55`, borderRadius: "4px", padding: "2px 8px", letterSpacing: "1px", display: "inline-block", marginBottom: "1rem" }}>★ FEATURED</span>}
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{project.emoji}</div>
      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>{project.title}</h3>
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{project.description}</p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {project.tags.map((t) => <span key={t} style={{ background: `${project.color}15`, color: project.color, borderRadius: "6px", padding: "3px 10px", fontSize: "0.75rem", fontFamily: "'DM Mono',monospace" }}>{t}</span>)}
      </div>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <a href={project.link} style={{ color: "#fff", fontSize: "0.85rem", textDecoration: "none", opacity: 0.7 }}>Live ↗</a>
        <a href={project.github} style={{ color: "#fff", fontSize: "0.85rem", textDecoration: "none", opacity: 0.7 }}>GitHub ↗</a>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Python", "XGBoost", "SHAP", "TensorFlow", "Streamlit"];
  const filtered = filter === "All" ? student.projects : student.projects.filter((p) => p.tags.includes(filter));
  return (
    <section style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionHeading label="02" title="Projects" />
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
        {tags.map((t) => <button key={t} onClick={() => setFilter(t)} style={{ background: filter === t ? "#4ADE80" : "rgba(255,255,255,0.05)", color: filter === t ? "#0a0a14" : "rgba(255,255,255,0.6)", border: "1px solid", borderColor: filter === t ? "#4ADE80" : "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.4rem 1rem", fontSize: "0.82rem", fontFamily: "'DM Mono',monospace", cursor: "pointer", fontWeight: filter === t ? 700 : 400, transition: "all 0.2s" }}>{t}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem" }}>
        {filtered.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 80} />)}
      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function SkillBar({ skill, animate }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{skill.name}</span>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.78rem", color: "#4ADE80" }}>{skill.level}%</span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.07)", borderRadius: "99px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: animate ? `${skill.level}%` : "0%", background: "linear-gradient(90deg,#4ADE80,#22D3EE)", borderRadius: "99px", transition: "width 1s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </div>
    </div>
  );
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("ML / AI");
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => { setAnimate(false); const t = setTimeout(() => setAnimate(true), 50); return () => clearTimeout(t); }, [activeCategory]);
  const filtered = student.skills.filter((s) => s.category === activeCategory);
  return (
    <section style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }} ref={ref}>
      <SectionHeading label="03" title="Skills" />
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
        {skillCategories.map((c) => <button key={c} onClick={() => setActiveCategory(c)} style={{ background: activeCategory === c ? "rgba(74,222,128,0.15)" : "transparent", border: `1px solid ${activeCategory === c ? "#4ADE80" : "rgba(255,255,255,0.1)"}`, color: activeCategory === c ? "#4ADE80" : "rgba(255,255,255,0.5)", borderRadius: "8px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontFamily: "'DM Mono',monospace", cursor: "pointer", transition: "all 0.2s" }}>{c}</button>)}
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "18px", padding: "2rem 2.5rem" }}>
        {filtered.map((s) => <SkillBar key={s.name} skill={s} animate={animate} />)}
      </div>
    </section>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function ExperienceSection() {
  return (
    <section style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <SectionHeading label="04" title="Experience" />
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "15px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom,#4ADE80,transparent)" }} />
        {student.experience.map((exp, i) => (
          <div key={i} style={{ paddingLeft: "3rem", paddingBottom: "2.5rem", position: "relative", animation: "fadeUp 0.5s ease both", animationDelay: `${i * 120}ms` }}>
            <div style={{ position: "absolute", left: "8px", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 10px rgba(74,222,128,0.5)" }} />
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#fff", fontSize: "1.05rem" }}>{exp.role}</h3>
                  <p style={{ color: "#4ADE80", fontSize: "0.88rem", marginTop: "2px" }}>{exp.company}</p>
                </div>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7 }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); setForm({ name: "", email: "", message: "" }); };
  const contactItems = [
    { icon: "✉️", label: student.email },
    { icon: "📞", label: student.phone },
    { icon: "🐙", label: student.github },
    { icon: "💼", label: student.linkedin },
    { icon: "📍", label: student.location },
  ];
  return (
    <section style={{ padding: "6rem 2rem 8rem", maxWidth: "720px", margin: "0 auto" }}>
      <SectionHeading label="05" title="Contact" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="contact-grid">
        <div>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "2rem" }}>Open to internship opportunities, ML collaborations, and developer community projects. Let's connect!</p>
          {contactItems.map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
              <span style={{ fontSize: "1.1rem" }}>{c.icon}</span>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>{c.label}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[{ key: "name", placeholder: "Your Name", type: "text" }, { key: "email", placeholder: "Your Email", type: "email" }].map((f) => (
            <input key={f.key} type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} required style={inputStyle} />
          ))}
          <textarea placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required style={{ ...inputStyle, resize: "vertical" }} />
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>{sent ? "✓ Sent!" : "Send Message"}</button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "0.8rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none", fontFamily: "'DM Mono',monospace", width: "100%", boxSizing: "border-box" };

function SectionHeading({ label, title }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", color: "#4ADE80", letterSpacing: "2.5px", marginBottom: "0.6rem" }}>{label} ——</p>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-1.5px" }}>{title}</h2>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("home");
  const sections = {
    home: <HeroSection setActive={setActive} />,
    about: <AboutSection />,
    projects: <ProjectsSection />,
    skills: <SkillsSection />,
    experience: <ExperienceSection />,
    contact: <ContactSection />,
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#0a0a14;color:#fff;font-family:'DM Mono',monospace;overflow-x:hidden}
        .orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;animation:drift 8s ease-in-out infinite alternate}
        .orb1{width:500px;height:500px;background:rgba(74,222,128,0.08);top:-100px;left:-100px;animation-duration:9s}
        .orb2{width:400px;height:400px;background:rgba(34,211,238,0.06);top:100px;right:-80px;animation-duration:11s;animation-delay:-3s}
        .orb3{width:300px;height:300px;background:rgba(244,114,182,0.05);bottom:0;left:40%;animation-duration:13s;animation-delay:-5s}
        @keyframes drift{from{transform:translate(0,0)}to{transform:translate(30px,40px)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .btn-primary{display:inline-flex;align-items:center;gap:6px;background:#4ADE80;color:#0a0a14;border:none;border-radius:10px;padding:0.75rem 1.75rem;font-size:0.9rem;font-weight:700;font-family:'Syne',sans-serif;cursor:pointer;transition:all 0.2s}
        .btn-primary:hover{background:#22c55e;transform:translateY(-2px);box-shadow:0 8px 25px rgba(74,222,128,0.3)}
        .btn-secondary{display:inline-flex;align-items:center;background:transparent;color:rgba(255,255,255,0.75);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:0.75rem 1.75rem;font-size:0.9rem;font-family:'Syne',sans-serif;cursor:pointer;transition:all 0.2s}
        .btn-secondary:hover{border-color:rgba(255,255,255,0.35);color:#fff;transform:translateY(-2px)}
        .project-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,0.3)}
        .stat-card:hover{transform:translateY(-4px)}
        input:focus,textarea:focus{border-color:rgba(74,222,128,0.5)!important}
        @media(max-width:700px){.nav-links{display:none!important}.hamburger{display:block!important}.about-grid{grid-template-columns:1fr!important}.contact-grid{grid-template-columns:1fr!important}}
      `}</style>
      <NavBar active={active} setActive={setActive} />
      <main style={{ animation: "fadeUp 0.5s ease both" }}>{sections[active]}</main>
      <footer style={{ textAlign: "center", padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)", fontFamily: "'DM Mono',monospace", fontSize: "0.78rem" }}>
        Built with React · © 2025 {student.name} · Pune, India
      </footer>
    </>
  );
}