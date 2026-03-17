import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { CaseStudy as CaseStudyType } from '../data/caseStudies';
import './CaseStudy.css';

interface Props {
  study: CaseStudyType;
}

const sectionIcons: Record<string, string> = {
  problem: '⚠',
  users: '👤',
  flow: '⇢',
  decisions: '◈',
  challenges: '⚙',
  outcome: '✦',
  overview: '○',
};

const CaseStudy: React.FC<Props> = ({ study }) => {
  const navigate = useNavigate();

  return (
    <div className="cs-page">
      {/* NAV */}
      <nav className="cs-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
        <a
          href={study.github}
          target="_blank"
          rel="noreferrer"
          className="cs-github-btn"
        >
          <Github size={15} /> GitHub <ExternalLink size={12} />
        </a>
      </nav>

      {/* HERO */}
      <header
        className="cs-hero"
        style={{ '--cs-accent': study.accent, '--cs-bg': study.color } as React.CSSProperties}
      >
        <div className="cs-hero-inner">
          <div className="cs-category">{study.category}</div>
          <h1 className="cs-title">{study.title}</h1>
          <p className="cs-subtitle">{study.subtitle}</p>

          <div className="cs-meta-row">
            <div className="cs-meta">
              <span className="meta-label">Role</span>
              <span className="meta-val">{study.role}</span>
            </div>
            <div className="cs-meta">
              <span className="meta-label">Timeline</span>
              <span className="meta-val">{study.duration}</span>
            </div>
            <div className="cs-meta">
              <span className="meta-label">Design System</span>
              <span className="meta-val">{study.designSystem}</span>
            </div>
            <div className="cs-meta">
              <span className="meta-label">Year</span>
              <span className="meta-val">{study.year}</span>
            </div>
          </div>

          <div className="cs-stack">
            {study.techStack.map(t => (
              <span key={t} className="cs-tech">{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="cs-overview">
        <div className="cs-overview-inner">
          <div className="cs-section-label">Overview</div>
          <p className="cs-overview-text">{study.overview}</p>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="cs-body">
        {study.sections.map((section, i) => (
          <section key={i} className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-icon" style={{ color: study.accent }}>
                {sectionIcons[section.type] || '◉'}
              </span>
              <h2 className="cs-section-title">{section.title}</h2>
            </div>
            <div className="cs-section-body">
              <p className="cs-section-content">{section.content}</p>
              {section.items && (
                <ul className="cs-list">
                  {section.items.map((item, j) => (
                    <li key={j} className="cs-list-item">
                      <span className="cs-list-dot" style={{ background: study.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* TAGS */}
      <div className="cs-tags-bar">
        <div className="cs-section-label">Tagged</div>
        <div className="cs-tags">
          {study.tags.map(t => (
            <span key={t} className="cs-tag" style={{ borderColor: study.accent, color: study.accent }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cs-cta">
        <a href={study.github} target="_blank" rel="noreferrer" className="cs-cta-btn">
          <Github size={16} /> View on GitHub
        </a>
        <button className="cs-back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Back to all projects
        </button>
      </div>

      {/* FOOTER */}
      <footer className="cs-footer">
        <span>Nandika Mohith · {study.year}</span>
        <a href="mailto:nandikamohith@gmail.com">nandikamohith@gmail.com</a>
      </footer>
    </div>
  );
};

export default CaseStudy;
