import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const skills = [
    { label: 'Figma', cat: 'Design' },
    { label: 'Adobe CC', cat: 'Design' },
    { label: 'Mural', cat: 'Design' },
    { label: 'Wireframing', cat: 'UX' },
    { label: 'Prototyping', cat: 'UX' },
    { label: 'Usability Testing', cat: 'UX' },
    { label: 'Interaction Design', cat: 'UX' },
    { label: 'User Research', cat: 'UX' },
    { label: 'React.js', cat: 'Frontend' },
    { label: 'Next.js', cat: 'Frontend' },
    { label: 'TypeScript', cat: 'Frontend' },
    { label: 'Carbon DS', cat: 'Design System' },
    { label: 'Dialect DS', cat: 'Design System' },
    { label: 'Accessibility', cat: 'Concepts' },
    { label: 'RBAC', cat: 'Concepts' },
    { label: 'Information Architecture', cat: 'Concepts' },
  ];

  const catColors: Record<string, string> = {
    'Design': 'var(--accent)',
    'UX': 'var(--accent2)',
    'Frontend': 'var(--accent3)',
    'Design System': 'var(--green)',
    'Concepts': 'var(--amber)',
  };

  return (
    <div className="home">
      {/* Ambient glow follows mouse */}
      <div
        className="ambient"
        style={{ left: mousePos.x - 300, top: mousePos.y - 300 }}
      />

      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo">NM</span>
        <div className="nav-links">
          <a href="https://github.com/Mohith737" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mohith-nandika/" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          <a href="mailto:nandikamohith@gmail.com">
            <Mail size={18} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-tag">UI/UX Designer · Frontend Engineer · Open to 2026 Roles</div>
        <h1 className="hero-title">
          <span className="hero-line">Nandika</span>
          <span className="hero-line accent-line">Mohith</span>
        </h1>
        <p className="hero-desc">
          I design interfaces where constraints <em>are</em> the design problem —
          healthcare systems, B2B procurement platforms, AI recruitment tools.
          Previously at <strong>Think41, Bengaluru</strong> (Feb–Mar 2026).
        </p>
        <div className="hero-actions">
          <a
            href="https://github.com/Mohith737"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub <ExternalLink size={14} />
          </a>
          <a href="mailto:nandikamohith@gmail.com" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="projects-section">
        <div className="section-label">Selected Work</div>
        <div className="projects-grid">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className="project-card"
              onClick={() => navigate(`/case/${cs.id}`)}
              style={{ '--card-accent': cs.accent } as React.CSSProperties}
            >
              <div className="card-top">
                <div className="card-number">0{i + 1}</div>
                <div className="card-category">{cs.category}</div>
              </div>
              <div
                className="card-visual"
                style={{ background: cs.color }}
              >
                <MockUI id={cs.id} accent={cs.accent} />
              </div>
              <div className="card-body">
                <h2 className="card-title">{cs.title}</h2>
                <p className="card-subtitle">{cs.subtitle}</p>
                <div className="card-tags">
                  {cs.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <span className="card-ds">{cs.designSystem}</span>
                  <span className="card-cta">
                    View Case Study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="section-label">Skills & Tools</div>
        <div className="skills-cloud">
          {skills.map(s => (
            <span
              key={s.label}
              className="skill-pill"
              style={{ '--pill-color': catColors[s.cat] } as React.CSSProperties}
            >
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="section-label">About</div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science undergraduate at VIT Amaravati (2026),
              previously a Full Stack Engineer Intern at <strong>Think41, Bengaluru</strong> (Feb–Mar 2026).
              My work lives at the intersection of design systems, interaction design,
              and frontend engineering.
            </p>
            <p>
              I'm drawn to complex problem spaces — systems where a wrong UI state
              has real consequences. That's what led me to build a safety-critical
              hospital meal delivery platform and a B2B procurement system with
              strict transactional rules.
            </p>
            <p>
              I'm targeting <strong>UX Designer roles</strong> for 2026, particularly
              in product companies and consultancies where design meets engineering depth.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-num">4</div>
              <div className="stat-label">Production Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num">2</div>
              <div className="stat-label">Design Systems Built</div>
            </div>
            <div className="stat">
              <div className="stat-num">8.08</div>
              <div className="stat-label">CGPA · VIT</div>
            </div>
            <div className="stat">
              <div className="stat-num">2026</div>
              <div className="stat-label">Available From</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>Nandika Mohith · UI/UX Designer · Bengaluru</div>
        <div className="footer-links">
          <a href="mailto:nandikamohith@gmail.com">nandikamohith@gmail.com</a>
          <a href="https://github.com/Mohith737" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mohith-nandika/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

/* Inline mock UI illustrations per project */
const MockUI: React.FC<{ id: string; accent: string }> = ({ id, accent }) => {
  if (id === 'hospital-dietetics') {
    return (
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="mock-svg">
        <rect width="400" height="200" fill="transparent" />
        {/* Header bar */}
        <rect x="16" y="16" width="368" height="32" rx="6" fill="rgba(255,255,255,0.06)" />
        <rect x="28" y="25" width="80" height="14" rx="3" fill={accent} opacity="0.9" />
        <rect x="300" y="25" width="60" height="14" rx="3" fill="rgba(255,255,255,0.15)" />
        {/* Meal rows */}
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <rect x="16" y={60 + i * 32} width="320" height="26" rx="5" fill="rgba(255,255,255,0.04)" />
            <rect x="26" y={67 + i * 32} width="120" height="12" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect
              x="310" y={66 + i * 32} width="48" height="14" rx="7"
              fill={i === 0 ? '#34D399' : i === 1 ? '#FBBF24' : i === 2 ? '#F87171' : '#34D399'}
              opacity="0.85"
            />
          </g>
        ))}
        {/* Disabled button */}
        <rect x="16" y="162" width="120" height="26" rx="6" fill="rgba(255,255,255,0.08)" />
        <rect x="24" y="170" width="80" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
        {/* Tooltip */}
        <rect x="148" y="152" width="180" height="38" rx="6" fill="rgba(251,191,36,0.15)" stroke="#FBBF24" strokeWidth="1" />
        <rect x="158" y="161" width="120" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="158" y="174" width="80" height="7" rx="2" fill="rgba(255,255,255,0.15)" />
      </svg>
    );
  }
  if (id === 'stockbridge') {
    return (
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="mock-svg">
        <rect width="400" height="200" fill="transparent" />
        {/* Sidebar */}
        <rect x="16" y="16" width="70" height="168" rx="8" fill="rgba(255,255,255,0.05)" />
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="24" y={28 + i * 28} width="54" height="16" rx="4"
            fill={i === 1 ? accent : 'rgba(255,255,255,0.1)'} opacity={i === 1 ? 0.9 : 1} />
        ))}
        {/* Main content */}
        <rect x="98" y="16" width="286" height="36" rx="6" fill="rgba(255,255,255,0.06)" />
        <rect x="110" y="25" width="100" height="18" rx="3" fill="rgba(255,255,255,0.25)" />
        {/* Stock badges row */}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <rect x="98" y={64 + i * 32} width="286" height="26" rx="5" fill="rgba(255,255,255,0.04)" />
            <rect x="110" y={71 + i * 32} width="100" height="12" rx="2" fill="rgba(255,255,255,0.18)" />
            <rect x="340" y={70 + i * 32} width="36" height="14" rx="7"
              fill={i === 0 ? '#34D399' : i === 1 ? '#34D399' : i === 2 ? '#FBBF24' : '#F87171'}
              opacity="0.85" />
          </g>
        ))}
        {/* Wizard steps */}
        <rect x="98" y="165" width="286" height="14" rx="3" fill="rgba(255,255,255,0.04)" />
        {[0,1,2,3].map(i => (
          <circle key={i} cx={128 + i * 72} cy={172} r="6"
            fill={i <= 1 ? accent : 'rgba(255,255,255,0.15)'} opacity="0.9" />
        ))}
        <rect x="134" y="169" width="60" height="2" rx="1" fill={accent} opacity="0.5" />
        <rect x="206" y="169" width="60" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
        <rect x="278" y="169" width="60" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
      </svg>
    );
  }
  // hirelogic
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="mock-svg">
      <rect width="400" height="200" fill="transparent" />
      {/* Top bar */}
      <rect x="16" y="16" width="368" height="30" rx="6" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="23" width="120" height="16" rx="3" fill={accent} opacity="0.8" />
      {/* Candidate cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="16" y={58 + i * 42} width="240" height="36" rx="7" fill="rgba(255,255,255,0.05)" />
          <circle cx="36" cy={76 + i * 42} r="10" fill="rgba(255,255,255,0.12)" />
          <rect x="54" y={68 + i * 42} width="90" height="10" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="54" y={82 + i * 42} width="60" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
          {/* Score bar */}
          <rect x="200" y={72 + i * 42} width="48" height="14" rx="7"
            fill={i === 0 ? accent : i === 1 ? '#34D399' : '#38BDF8'} opacity="0.85" />
        </g>
      ))}
      {/* Scorecard panel */}
      <rect x="268" y="58" width="116" height="130" rx="8" fill="rgba(255,255,255,0.05)" stroke={accent} strokeWidth="1" strokeOpacity="0.4" />
      <rect x="278" y="70" width="60" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
      {['Technical', 'Domain', 'Communication', 'Leadership'].map((_, i) => (
        <g key={i}>
          <rect x="278" y={90 + i * 22} width="96" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
          <rect x="278" y={90 + i * 22} width={40 + i * 12} height="6" rx="3" fill={accent} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
};

export default Home;
