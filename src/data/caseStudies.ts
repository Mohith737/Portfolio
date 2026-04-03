export interface Section {
  type: 'overview' | 'problem' | 'users' | 'flow' | 'decisions' | 'challenges' | 'outcome';
  title: string;
  content: string;
  items?: string[];
  tags?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  tags: string[];
  color: string;
  accent: string;
  github: string;
  overview: string;
  sections: Section[];
  designSystem: string;
  techStack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hospital-dietetics',
    title: 'Hospital Dietetics Delivery System',
    subtitle: 'Safety-critical meal ordering & ward delivery for patients',
    category: 'HealthTech · UX Platform',
    year: '2026',
    duration: '6 weeks',
    role: 'UI/UX Designer & Frontend Engineer',
    tags: ['Healthcare', 'Safety-Critical UI', 'Real-time', 'Design System'],
    color: '#0f2027',
    accent: '#34D399',
    github: 'https://github.com/Mohith737/Hospital-Patient-Dietetics-Delivery',
    designSystem: 'Dialect Design System',
    techStack: ['React.js', 'TypeScript', 'Dialect DS', 'WebSockets', 'requestAnimationFrame'],
    overview: 'Designed and built a safety-critical meal ordering and delivery platform for hospital wards — where a wrong meal delivered to a post-surgery or allergy-risk patient is not a UX inconvenience but a medical emergency.',
    sections: [
      {
        type: 'problem',
        title: 'The Problem',
        content: 'Hospital kitchens serve hundreds of patients across multiple wards daily. Each patient has a unique set of dietary constraints pulled from a Hospital Information System (HIS): allergies, dietary restrictions, and scheduled surgeries. Existing workflows relied on printed sheets updated once per shift — meaning a newly added allergy mid-shift could result in a dangerous meal delivery.',
        items: [
          'No real-time sync between HIS and meal ordering',
          'No visual differentiation between safe, flagged, and blocked meals',
          'No conditional controls preventing staff from ordering for pre-surgery patients',
          'Ward delivery status tracked on paper across 100+ patients'
        ]
      },
      {
        type: 'users',
        title: 'Users & Context',
        content: 'Three distinct user types interact with the system under different pressures:',
        items: [
          'Dietitian Staff — select and approve meals per patient, must act on medical constraints instantly',
          'Ward Nurses — confirm delivery, scan QR codes at bedside, flag issues',
          'Kitchen Coordinators — monitor dispatch timers, handle 30-min delay thresholds and medical risk alerts'
        ]
      },
      {
        type: 'decisions',
        title: 'Key Design Decisions',
        content: 'Every design decision was made with medical safety as the primary constraint:',
        items: [
          'Safe / Flagged / Blocked states — each menu item is cross-validated against allergies, restrictions, AND surgery schedule simultaneously. Blocked items are visually suppressed, not hidden, so staff understand why.',
          'Reactive mid-session updates — when HIS data changes (e.g. allergy added), the menu re-evaluates without page reload. Changed items are highlighted in amber for 8 seconds to catch attention.',
          'Disabled order button with tooltip — for pre-surgery patients, the order button is disabled with a contextual tooltip explaining the surgical schedule, preventing accidental orders without leaving staff confused.',
          'Single rAF loop for 100+ timers — one requestAnimationFrame loop drives all ward delivery countdowns. No 100 separate setIntervals. Rows update only when urgency band shifts (green → amber → red), keeping renders minimal.',
          'Dialect Design System — built a reusable component library ensuring consistent colour semantics (green = safe, amber = caution, red = danger) across every screen.'
        ]
      },
      {
        type: 'challenges',
        title: 'Engineering Challenges',
        content: 'The hardest technical problem was the ward dashboard at scale:',
        items: [
          'Virtualised ward list — only visible rows render, enabling smooth scrolling across 100+ patients',
          'Conditional UI logic — order button state derived from three independent data sources (allergy list, diet flags, surgical schedule) evaluated simultaneously',
          'QR scan → patient-meal verification — bedside scan matches meal ID against patient record before confirming delivery state'
        ]
      },
      {
        type: 'outcome',
        title: 'Outcomes & Learnings',
        content: 'Building for healthcare taught me that UX is not about delight — it is about precision. Every ambiguous state, every missing tooltip, every slow render has a real cost. The Dialect Design System emerged from this project as a way to enforce colour semantics and interaction patterns consistently across all modules.',
        items: [
          'Designed and shipped Dialect Design System with 12+ reusable components',
          'Ward dashboard handles 100+ concurrent patient timers at 60fps',
          'Zero full-page reloads during mid-session HIS data updates',
          'Conditional UI patterns adopted across all three user flows'
        ]
      }
    ]
  },
  {
    id: 'stockbridge',
    title: 'StockBridge',
    subtitle: 'B2B inventory & procurement platform replacing spreadsheet chaos',
    category: 'B2B SaaS · Inventory Management',
    year: '2026',
    duration: '5 weeks',
    role: 'UI/UX Designer & Full Stack Engineer',
    tags: ['B2B', 'RBAC', 'Procurement', 'State Machines', 'Carbon DS'],
    color: '#0d1b2a',
    accent: '#38BDF8',
    github: 'https://github.com/Mohith737/B2B-Warehouse-Management-System',
    designSystem: 'Carbon Design System',
    techStack: ['React.js', 'TypeScript', 'Carbon DS', 'PostgreSQL', 'Spring Boot'],
    overview: 'StockBridge replaces spreadsheet-driven inventory chaos for small warehouses with a real-time, role-aware procurement system that enforces business rules at every stage — from supplier catalog to goods receipt.',
    sections: [
      {
        type: 'problem',
        title: 'The Problem',
        content: 'Small warehouses run procurement on a patchwork of spreadsheets, emails, and verbal agreements. This creates stock-outs, duplicate purchase orders, and zero visibility into supplier credit limits. There is no single source of truth, and staff at different levels have no clear boundaries on what they can or cannot do.',
        items: [
          'No real-time stock level visibility — teams discover stock-outs at point of need',
          'Purchase orders created without credit limit checks',
          'Warehouse staff accidentally overwriting procurement manager decisions',
          'No audit trail for stock movements — "who changed this and why?" unanswerable',
          'Goods receipt entirely manual — barcode matching done by eye against printed PO sheets'
        ]
      },
      {
        type: 'users',
        title: 'Personas & RBAC Design',
        content: 'Designed three distinct role-differentiated interfaces — same system, different affordances:',
        items: [
          'Warehouse Staff — GRN-only view. Can scan barcodes, receive goods, create partial receipt records. Cannot touch PO creation or supplier data.',
          'Procurement Manager — Full PO lifecycle. Manages suppliers, raises purchase orders, tracks acknowledgements, handles backorders.',
          'Admin — Full access plus configuration, user management, reporting, and 3-year audit log export.'
        ]
      },
      {
        type: 'flow',
        title: 'PO Lifecycle State Machine',
        content: 'The most complex UX challenge was representing a 6-stage Purchase Order lifecycle clearly enough that a Procurement Manager could act on it without training:',
        items: [
          'Draft → Submitted → Acknowledged → Shipped → Received → Closed',
          'Each stage transition has a distinct visual treatment and contextual action set',
          'Credit limit enforcement happens at Submitted stage — blocks submission if total exceeds supplier credit',
          'Multi-step PO creation wizard breaks a complex form into 4 focused steps, reducing input errors'
        ]
      },
      {
        type: 'decisions',
        title: 'Key Design Decisions',
        content: 'Every decision focused on reducing cognitive load for time-pressured warehouse workers:',
        items: [
          'Live stock badges (In Stock / Low / Out) on every SKU row — colour-coded, updated in real time. No need to open a product detail to know stock health.',
          'Barcode-driven GRN form — keyboard-simulated barcode scan auto-fills product name, expected quantity, and PO reference. Partial receipts automatically generate backorder records.',
          'Auto-reorder alerts surface on the dashboard when background job detects stock below threshold — actionable cards with one-click PO creation.',
          'Carbon Design System applied throughout — ensures accessibility compliance and component consistency without building from scratch.'
        ]
      },
      {
        type: 'challenges',
        title: 'Engineering Challenges',
        content: 'StockBridge required solving several hard transactional and concurrency problems:',
        items: [
          'Atomic stock updates — optimistic locking prevents two concurrent GRN submissions from creating phantom stock',
          'Partial receipt tracking — each GRN line item tracks received vs ordered quantity, auto-generating backorder state',
          'Temporal auto-reorder cron — background job monitors all SKUs against reorder thresholds and raises draft POs automatically',
          'Credit limit validation across multi-line POs — total computed dynamically as lines are added in the wizard'
        ]
      },
      {
        type: 'outcome',
        title: 'Outcomes & Learnings',
        content: 'StockBridge taught me how RBAC shapes interface design from the ground up — the same data model renders entirely differently depending on who is looking at it. Applying Carbon Design System forced me to think in components and tokens rather than one-off styles.',
        items: [
          'Three fully differentiated role-based interfaces from one data model',
          'Multi-step PO wizard with inline credit limit validation',
          'Barcode GRN interface with automatic backorder generation',
          'Full stock movement ledger with actor, reason, and timestamp for every change'
        ]
      }
    ]
  },
  {
    id: 'hirelogic',
    title: 'HireLogic',
    subtitle: 'AI-powered recruitment platform with explainable candidate ranking',
    category: 'AI · Recruitment Tech',
    year: '2026',
    duration: 'Feb 2026 – Present',
    role: 'Full Stack Engineer (Think41)',
    tags: ['AI Agents', 'LLM', 'Explainability', 'Recruitment', 'Google ADK'],
    color: '#0f0a1e',
    accent: '#C084FC',
    github: 'https://github.com/Mohith737/HireLogic-Agentic',
    designSystem: 'Custom Component System',
    techStack: ['Python', 'Google ADK', 'LLM API', 'PostgreSQL', 'Docker', 'React.js'],
    overview: 'Built at Think41, HireLogic is an AI-powered recruitment evaluation platform that automates resume analysis and candidate ranking — with explainable scoring so recruiters understand why a candidate ranked the way they did.',
    sections: [
      {
        type: 'problem',
        title: 'The Problem',
        content: 'Recruiters at scale face an impossible task: reviewing hundreds of unstructured resumes against structured job competency frameworks. Manual screening is slow, inconsistent, and unconsciously biased. But pure AI black-box scoring is untrustworthy — recruiters need to see why a candidate ranked the way they did.',
        items: [
          'Hundreds of PDF/DOCX resumes reviewed manually per role',
          'No standardised competency mapping across resume formats',
          'AI-only ranking without reasoning creates distrust',
          'No concurrent processing — evaluations ran sequentially'
        ]
      },
      {
        type: 'decisions',
        title: 'System & Interface Design',
        content: 'The core design challenge was making AI decisions legible and trustworthy:',
        items: [
          'Google ADK multi-agent orchestration — dedicated agents for parsing, skills extraction, competency mapping, and scoring. Each agent has a single responsibility.',
          'Explainable JSON scorecards — every candidate score includes structured reasoning: which competencies were found, where in the resume they were evidenced, and what was missing.',
          'Competency framework mapping — extracted skills are mapped to role-specific frameworks stored in PostgreSQL, enabling consistent evaluation across all candidates.',
          'Concurrent evaluation pipeline — system processes multiple candidates simultaneously with deterministic, reproducible LLM-based scoring.',
          'Dashboard interface — visual breakdown of candidate scores per competency dimension, making comparison across candidates intuitive for recruiters.'
        ]
      },
      {
        type: 'challenges',
        title: 'Engineering Challenges',
        content: 'The hardest problems were around consistency and explainability at scale:',
        items: [
          'Unstructured input normalisation — PDF and DOCX resumes with wildly different formats normalised into a consistent schema before evaluation',
          'Prompt engineering for structured output — LLM reliably returns valid JSON scorecards with reasoning, not freeform text',
          'Concurrent agent coordination via Google ADK — multiple evaluations run in parallel without cross-contamination',
          'Deterministic scoring — same resume against same framework produces consistent results across runs'
        ]
      },
      {
        type: 'outcome',
        title: 'Outcomes & Learnings',
        content: 'HireLogic taught me that AI product design is fundamentally about trust. The technical capability to rank candidates automatically is easy to build — the hard part is designing the explainability layer that gives recruiters confidence to act on it.',
        items: [
          'End-to-end pipeline: PDF/DOCX input → structured competency scorecard',
          'Concurrent multi-candidate evaluation with Google ADK orchestration',
          'Explainable scoring with per-competency reasoning in structured JSON',
          'Deployed and actively used at Think41, Bengaluru'
        ]
      }
    ]
  }
];
