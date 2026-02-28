import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

// Using provided images
import vijaya from "../images/Vijaya Rapolu.png";
import aravind from "../images/Aravind Nimma.png";

// Schema Markup Component for SEO
const SEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KAVI Consulting, Inc.",
    "url": "https://www.kaviinc.com",
    "logo": "https://www.kaviinc.com/logo.png",
    "description": "Full-service engineering consulting firm specializing in transportation, site development, and infrastructure solutions.",
    "foundingDate": "2010",
    "founders": [
      {
        "@type": "Person",
        "name": "Vijaya Rapolu",
        "jobTitle": "CEO & Principal Engineer"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Engineering Way",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "Customer Service",
      "email": "info@kaviinc.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/kavi-consulting"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Reflect URL hash in sidebar active state on initial load
    const hash = window.location.hash.replace('#', '');
    if (hash) setActiveSection(hash);
  }, []);

  const [expandedValues, setExpandedValues] = useState<Record<number, boolean>>({});
  const toggleValue = (idx: number) => {
    setExpandedValues(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const [expandedExpertise, setExpandedExpertise] = useState<Record<number, boolean>>({});
  const toggleExpertise = (idx: number) => {
    setExpandedExpertise(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const [certModal, setCertModal] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const isScrollingRef = useRef<boolean>(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileTabsRef = useRef<HTMLDivElement>(null);

  // Section definitions for the sidebar — mapped to actual page sections
  const sections = [
    { id: 'overview', label: 'Our Story', icon: 'auto_stories' },
    { id: 'history', label: 'Timeline', icon: 'timeline' },
    { id: 'our-numbers', label: 'By The Numbers', icon: 'bar_chart' },
    { id: 'core-values', label: 'Core Values', icon: 'emoji_objects' },
    { id: 'leadership', label: 'Leadership', icon: 'groups' },
    { id: 'certifications', label: 'Certifications', icon: 'verified' },
    { id: 'content-end-marker', label: 'Trusted By', icon: 'handshake' },
  ];

  // Track which section is in the viewport & handle sidebar scroll visibility
  useEffect(() => {
    // 1. Intersection Observer for active sections
    // Track all currently-intersecting sections in a Set so we can always
    // resolve to the topmost visible one when entries change in either direction.
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Set<string>();

    sections.forEach(({ id }) => {
      // 'history' (Timeline) is a sibling div inside the 'overview' section.
      // Both always intersect simultaneously, so the observer can't distinguish them.
      // The handleScroll function resolves this split via scroll-progress instead.
      if (id === 'history') return;
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              visibleSections.add(entry.target.id);
            } else {
              visibleSections.delete(entry.target.id);
            }
          });
          // Always resolve to the topmost section currently in the viewport.
          // Skip updates while a programmatic scroll is in progress to prevent
          // intermediate sections from overriding the clicked target.
          const topmost = sections.find(s => visibleSections.has(s.id));
          if (topmost && !isScrollingRef.current) setActiveSection(topmost.id);
        },
        { rootMargin: '-80px 0px -15% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // 2. Scroll tracking for floating sidebar visibility constraints
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();

        // Hide sidebar ONLY when the physical footer comes up to overlap it
        const isBeforeFooter = footerRect.top > (window.innerHeight * 0.75);

        setShowSidebar(isBeforeFooter);
      } else {
        setShowSidebar(true);
      }

      // 'history' (Timeline) lives inside the 'overview' section div, so the
      // IntersectionObserver always sees them together. Resolve which one is
      // active by measuring how far we've scrolled through that shared section.
      if (!isScrollingRef.current) {
        const overviewEl = document.getElementById('overview');
        const nextEl = document.getElementById('our-numbers');
        if (overviewEl) {
          const r = overviewEl.getBoundingClientRect();
          const nextTop = nextEl ? nextEl.getBoundingClientRect().top : Infinity;
          // Only handle this split while we're inside the section and before the next one
          if (r.top < window.innerHeight * 0.85 && r.bottom > 80 && nextTop > 80) {
            // progress = how much of the section has scrolled past the trigger line
            const progress = Math.max(0, 80 - r.top) / r.height;
            setActiveSection(progress >= 0.45 ? 'history' : 'overview');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially setup calculations
    handleScroll();

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    // Lock observer updates for the duration of the smooth scroll so
    // intermediate sections don't override the intended active item.
    isScrollingRef.current = true;
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  // Auto-scroll mobile tab bar to keep active tab visible
  useEffect(() => {
    const activeEl = mobileTabsRef.current?.querySelector(`[data-id="${activeSection}"]`) as HTMLElement | null;
    activeEl?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [activeSection]);



  const historyMilestones = [
    {
      year: '2010',
      title: 'Company Founded',
      icon: 'foundation',
      desc: 'KAVI Consulting, Inc. was established in Houston, TX by Vijaya Rapolu, P.E., with a vision to deliver precision-driven civil engineering solutions to both public and private sectors.',
      aosDelay: 0
    },
    {
      year: '2013',
      title: 'First State Contracts',
      icon: 'handshake',
      desc: 'Secured first major state-level contracts in transportation planning and drainage design, establishing KAVI as a trusted DBE/MBE partner for TxDOT and municipal agencies.',
      aosDelay: 100
    },
    {
      year: '2016',
      title: 'HUB & DBE Certifications',
      icon: 'verified',
      desc: 'Achieved Historically Underutilized Business (HUB) and Disadvantaged Business Enterprise (DBE) certifications, expanding access to state and federal infrastructure programs.',
      aosDelay: 200
    },
    {
      year: '2020',
      title: 'Full-Service Expansion',
      icon: 'trending_up',
      desc: 'Expanded service offerings to include H&H Modeling, Construction Management, and Program Management — growing from a specialized consultancy to a full-spectrum civil engineering firm.',
      aosDelay: 300
    },
    {
      year: '2024',
      title: 'Nationwide Recognition',
      icon: 'public',
      desc: 'Celebrated 14+ years of excellence with 250+ completed projects, recognized as a Minority Business Enterprise (MBE) and trusted partner to government agencies, developers, and community organizations.',
      aosDelay: 400
    },
  ];

  const coreValues = [
    { title: 'Safety First', icon: 'security', color: '#0066cc', shortDesc: 'Prioritizing safety measures for quality excellence and environmental responsibility.', fullDesc: 'Safety is the foundation of everything we do. Our comprehensive safety program exceeds OSHA requirements and includes weekly safety training, site-specific safety plans for every project, a zero-tolerance policy for safety violations, and regular third-party safety audits. Our commitment has resulted in 1000+ consecutive days without a lost-time incident.' },
    { title: 'Quality Excellence', icon: 'verified', color: '#28a745', shortDesc: 'Commitment to technical precision and producing infrastructure that stands the test of time.', fullDesc: 'We maintain a rigorous quality assurance framework. From peer-reviewed engineering models to elite building materials, our continuous pursuit of excellence ensures zero-defect deliverables and long-lasting community assets.' },
    { title: 'Environmental Responsibility', icon: 'eco', color: '#10b981', shortDesc: 'Integrating sustainable construction practices to protect local habitats.', fullDesc: 'We are committed to preserving ecological integrity. We implement green infrastructure, comprehensive stormwater management, and sustainable material sourcing on every project, reducing our carbon footprint and promoting community well-being.' },
    { title: 'Client Partnership', icon: 'handshake', color: '#8b5cf6', shortDesc: 'Collaborating closely with stakeholders to ensure perfectly aligned goals.', fullDesc: 'We view clients as vital partners. Through proactive communication, transparent reporting, and collaborative decision workflows, we mitigate project risks and bring our clients\' visions to life perfectly.' },
    { title: 'Innovation & Efficiency', icon: 'lightbulb', color: '#ff6b35', shortDesc: 'Leveraging cutting-edge tech and processes to resolve complex civil challenges.', fullDesc: 'By integrating BIM (Building Information Modeling), drone surveying, and advanced hydrologic software, we continuously push the boundaries of civil engineering efficiency, reducing timelines and minimizing overhead costs.' },
    { title: 'Community Impact', icon: 'diversity_3', color: '#14b8a6', shortDesc: 'Designing roads, transit, and utilities that genuinely improve lives.', fullDesc: 'Our structural works aren\'t just concrete and steel; they\'re the arteries of thriving neighborhoods. We engage with local leaders and residents throughout our projects to ensure our designs bring maximum positive impact.' }
  ];

  const leaders = [
    {
      name: 'Vijaya Rapolu, P.E.',
      role: 'President & Principal Engineer',
      bio: 'With over 29 years of dynamic experience in construction management and civil engineering, Vijaya has directed dozens of multi-million dollar infrastructure projects across the state. Her strategic vision drives Kavi Consulting\'s technical authority.',
      exp: '29+ Years',
      projects: '150+',
      img: vijaya,
      social: '#',
      specialties: ['Transportation Engineering', 'Hydrologic & Hydraulic Design', 'Program Management', 'Strategic Planning']
    },
    {
      name: 'Aravind Nimma, P.E., CFM',
      role: 'Director of Operations',
      bio: 'Aravind brings 17 years of specialized expertise in municipal engineering and flood management. His certified leadership ensures that every operational phase—from drainage design to site development—is executed perfectly.',
      exp: '17+ Years',
      projects: '85+',
      img: aravind,
      social: '#',
      specialties: ['Drainage & Stormwater', 'Certified Floodplain Mgmt', 'Construction Services', 'Municipal Engineering']
    }
  ];

  const certifications = [
    {
      id: 'MBE', name: 'Minority Business Enterprise', code: 'MBE-2024-101', expiry: 'December 2025', auth: 'National Council', desc: 'Officially certified MBE, recognizing our diverse ownership and allowing us to fulfill municipal diversity quotas.', benefits: ['Eligible for government diversity contracts', 'Committed to inclusion', 'Annual compliance audits']
    },
    {
      id: 'DBE', name: 'Disadvantaged Business Enterprise', code: 'DBE-2024-304', expiry: 'January 2026', auth: 'Department of Transportation', desc: 'Federally recognized DBE aimed at providing a level playing field for highly-capable diverse firms in transportation contracting.', benefits: ['Federal project eligibility', 'State DOT preference', 'Transportation funding programs']
    },
    {
      id: 'HUB', name: 'Historically Underutilized Business', code: 'HUB-2024-508', expiry: 'July 2025', auth: 'State Government', desc: 'Certified HUB enabling us to foster strong economic relationships with state sectors and enhance diverse contracting.', benefits: ['State vendor preference', 'Economic development alignment', 'Strategic public partnerships']
    },
    {
      id: 'ISO', name: 'ISO 9001:2015', code: 'ISO-9001-2023', expiry: 'March 2026', auth: 'International Organization for Standardization', desc: 'Certified for our Quality Management Systems, ensuring consistent delivery of excellent engineering services.', benefits: ['Global quality standard', 'Rigorous internal audits', 'Continuous improvement workflow']
    },
    {
      id: 'OSHA', name: 'OSHA Safety Certification', code: 'OSH-411-998', expiry: 'Ongoing', auth: 'Occupational Safety and Health Administration', desc: 'Recognized for excellent workplace and site safety standards across all physical civil deployments.', benefits: ['Zero-incident commitment', 'Regular site inspections', 'Dedicated safety officers']
    },
    {
      id: 'LEED', name: 'LEED Accredited', code: 'LED-PRO-123', expiry: 'November 2025', auth: 'U.S. Green Building Council', desc: 'Accredited professional status for implementing highly sustainable, energy-efficient building strategies.', benefits: ['Eco-friendly design capability', 'Energy conservation planning', 'Green building compliance']
    }
  ];




  return (
    <>
      <SEO />

      {/* Required Embedded Styles for advanced animations & layouts not easily done by Tailwind standard utility */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .blueprint-pattern {
          background-image: linear-gradient(rgba(43, 108, 176, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(43, 108, 176, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(43, 108, 176, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(43, 108, 176, 0.03) 1px, transparent 1px);
          background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
        }
        
        .animated-pulse-dot {
          animation: pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(43, 108, 176, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(43, 108, 176, 0); }
          100% { box-shadow: 0 0 0 0 rgba(43, 108, 176, 0); }
        }

        .bg-shapes {
          position: absolute; top:0; left:0; width:100%; height:100%; overflow:hidden; z-index:0; pointer-events:none;
        }
        .shape {
          position: absolute; border-radius: 50%; background: linear-gradient(135deg, rgba(43,108,176,0.1), rgba(43,108,176,0));
          animation: float 12s infinite ease-in-out alternate;
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-40px) rotate(15deg); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .sidebar-btn, .mobile-tab { transition: none; }
          .sidebar-btn:hover .sb-icon { transform: none; }
        }

        /* ── Cert Grid Specific ── */
        .cert-card {
          background: #fff;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1.5rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.01);
        }
        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .cert-card-blue {
          background: #2b6cb0;
          color: #fff;
          border: none;
        }
        .cert-card h3 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #2b6cb0;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .cert-card p {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #718096;
          max-width: 160px;
          line-height: 1.5;
        }
        .cert-card-blue h3, .cert-card-blue p {
          color: #fff;
        }
        .cert-card-blue .material-symbols-outlined {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        /* ── About Us Page Sidebar ── */
        .about-sidebar {
          position: fixed;
          top: 50%;
          left: 24px;
          transform: translateY(-50%);
          z-index: 80;
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 8px;
          /* Pure glass morphism */
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 18px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          width: 190px;
          max-height: 80vh;
          overflow-x: hidden;
          overflow-y: auto;
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-sidebar.sidebar-collapsed {
          width: 58px;
          padding: 10px 6px;
        }

        .about-sidebar.sidebar-hidden {
          opacity: 0;
          transform: translateY(-50%) translateX(-20px);
          pointer-events: none;
        }

        /* Desktop only sidebar */
        @media (max-width: 1279px) { .about-sidebar { display: none !important; } }

        /* Header label inside sidebar */
        .about-sidebar-header {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1e293b;
          padding: 4px 6px 8px 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 12px;
          cursor: pointer;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
          color: #334155;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .sidebar-btn:hover {
          background: rgba(255, 255, 255, 0.6);
          color: #0f172a;
          transform: translateX(4px);
        }
        .sidebar-btn.sidebar-active {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37,99,235,0.25);
          transform: none;
        }
        .sidebar-btn .sb-icon {
          flex-shrink: 0;
          font-size: 17px;
          transition: transform 0.2s ease;
        }
        .sidebar-btn:hover .sb-icon { transform: scale(1.15); }
        .sidebar-btn.sidebar-active .sb-icon { transform: none; }

        /* Active indicator bar */
        .sidebar-btn.sidebar-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 60%;
          background: rgba(255,255,255,0.5);
          border-radius: 0 2px 2px 0;
        }
        .sidebar-btn { position: relative; }

        /* ── Mobile horizontal tab bar ── */
        .about-mobile-tabs {
          display: none;
        }
        @media (max-width: 1279px) {
          .about-mobile-tabs {
            display: flex;
            position: sticky;
            top: 72px;
            z-index: 70;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 1px 4px rgba(0,0,0,0.06);
            overflow-x: auto;
            gap: 4px;
            padding: 8px 12px;
            scrollbar-width: none;
          }
          .about-mobile-tabs::-webkit-scrollbar { display: none; }
        }
        .mobile-tab {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .mobile-tab:hover {
          background: #f1f5f9;
          color: #2b6cb0;
        }
        .mobile-tab.mobile-tab-active {
          background: #2b6cb0;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(43,108,176,0.3);
        }
        .mobile-tab .mt-icon { font-size: 13px; flex-shrink: 0; }
      `}} />
      {/* ── DESKTOP Floating Sidebar — rendered OUTSIDE the overflow-x-hidden div so position:fixed works correctly ── */}
      <nav className={`about-sidebar hidden xl:flex ${!showSidebar ? 'sidebar-hidden' : ''} ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`} aria-label="Page sections">
        <div className={`about-sidebar-header ${isSidebarCollapsed ? '!justify-center !px-0' : ''}`}>
          <span className={isSidebarCollapsed ? 'hidden' : ''}>On This Page</span>
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="flex items-center justify-center p-1 rounded-full text-slate-400 hover:bg-slate-200/50 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Sidebar"
            title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
              {isSidebarCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
        </div>
        {sections.map(({ id, label, icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
              }}
              className={`sidebar-btn flex-shrink-0 ${isActive ? 'sidebar-active' : ''} ${isSidebarCollapsed ? '!justify-center !px-1' : ''}`}
              aria-label={`Go to ${label}`}
              aria-current={isActive ? 'true' : 'false'}
              title={isSidebarCollapsed ? label : undefined}
            >
              <span
                className="material-symbols-outlined sb-icon flex-shrink-0"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {icon}
              </span>
              <span className={`truncate ${isSidebarCollapsed ? 'hidden' : ''}`}>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="bg-slate-50 min-h-screen font-sans [overflow-x:clip]">

        {/* ── MOBILE Horizontal Tab Bar ── */}
        <nav ref={mobileTabsRef} className="about-mobile-tabs" aria-label="Page sections">
          <div className="max-w-7xl mx-auto flex gap-1 w-full">
          {sections.map(({ id, label, icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                data-id={id}
                onClick={() => scrollToSection(id)}
                className={`mobile-tab ${isActive ? 'mobile-tab-active' : ''}`}
                aria-label={`Go to ${label}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <span
                  className="material-symbols-outlined mt-icon"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {icon}
                </span>
                {label}
              </button>
            );
          })}
          </div>
        </nav>

        {/* 1.1 Hero Section Enhancement */}
        <section id="hero-section" className="relative h-[55vh] min-h-[380px] sm:min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b-4 border-primary">
          <div className="bg-shapes">
            <div className="shape w-96 h-96 -top-20 -left-20"></div>
            <div className="shape w-[500px] h-[500px] top-40 -right-40" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="absolute inset-0 blueprint-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-10 bg-cover bg-center parallax-bg"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center" data-aos="fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(43,108,176,0.5)]">Dedicated to Excellence</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Our Story & Legacy
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Engineering a better future through <strong className="text-white font-semibold">technical precision</strong> and <strong className="text-white font-semibold">community-focused</strong> infrastructure solutions.
            </p>
          </div>
        </section>

        {/* 8.1 Company Story Enhancement & 1.2 Timeline Enhancement */}
        <section id="overview" className="py-16 md:py-24 bg-white relative overflow-hidden" aria-label="Company History">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
              <div className="space-y-8" data-aos="fade-right">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[3px] bg-primary rounded-full"></div>
                  <span className="text-primary font-bold tracking-widest text-xs uppercase">Our History</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  From Concept to Industry Leader
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-bold bg-primary/10 px-2 py-1 rounded">Founded in 2010</strong>, KAVI Consulting, Inc. was born from a vision to revolutionize infrastructure engineering through technical precision and unwavering commitment to community impact.
                  </p>
                  <p>
                    What began as a small team of passionate engineers has grown into a full-service consulting firm trusted by government agencies, private developers, and community organizations across the region.
                  </p>
                  <p>
                    Our journey is marked by milestone projects that have transformed communities: from major transit hubs that improved traffic flow for 50,000 daily commuters, to green infrastructure projects setting new standards for sustainable urban development.
                  </p>
                  <p>
                    Today, we're proud to be recognized as a <strong className="text-slate-800">Minority Business Enterprise (MBE)</strong>, reflecting our commitment to diversity, equity, and opportunity in the construction industry.
                  </p>
                </div>
              </div>

              {/* 1.2 Enhanced Vertical Timeline */}
              <div id="history" className="relative pt-4 pb-4 px-4 md:px-12 flex flex-col justify-center">
                <div className="absolute left-[39px] md:left-[71px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-blue-400 to-transparent rounded-full shadow-[0_0_10px_rgba(43,108,176,0.5)] hidden sm:block"></div>

                <div className="space-y-12 relative z-10" role="region" aria-label="Company History Timeline">
                  {historyMilestones.map((milestone, idx) => (
                    <div key={idx} className="relative sm:pl-28 group" data-aos="fade-up" data-aos-delay={milestone.aosDelay}>
                      {/* Year badge — centered on the line, no overlap with dot */}
                      <div className="hidden sm:flex absolute left-[7px] md:left-[39px] top-1 flex-col items-center justify-center z-20">
                        <div className="w-16 py-1 bg-primary text-white text-sm font-extrabold rounded-lg shadow-lg text-center tracking-wide group-hover:bg-primary-dark transition-colors duration-300 whitespace-nowrap">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                            <span className="material-symbols-outlined">{milestone.icon}</span>
                          </div>
                          <div>
                            <span className="sm:hidden text-primary font-black text-sm block mb-1">{milestone.year}</span>
                            <h3 className="text-xl font-bold text-slate-800">{milestone.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.1 By The Numbers Stats Section */}
        <section id="our-numbers" className="py-20 bg-primary relative overflow-hidden text-white scroll-mt-24" aria-label="Our impact by the numbers">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590586767908-20d6d1b6db58?auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-10 bg-cover bg-fixed"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light opacity-90"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">Our Impact By The Numbers</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">Delivering measurable results and scaling robust infrastructure.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: 'calendar_month', value: 15, suffix: '+', label: 'Years of Excellence', delay: 0 },
                { icon: 'architecture', value: 250, suffix: '+', label: 'Projects Completed', delay: 100 },
                { icon: 'workspace_premium', value: 12, suffix: '', label: 'Industry Awards', delay: 200 },
                { icon: 'thumb_up', value: 95, suffix: '%', label: 'Client Satisfaction', delay: 300 }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2" data-aos="zoom-in" data-aos-delay={stat.delay}>
                  <span className="material-symbols-outlined text-4xl text-blue-200 mb-4">{stat.icon}</span>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-sm flex items-center justify-center">
                    <CountUp end={stat.value} duration={3} enableScrollSpy={true} scrollSpyOnce={true} separator="," />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1.3 Core Values Section Enhancement */}
        <section id="core-values" className="py-16 md:py-24 bg-white border-y border-slate-100 relative z-10 scroll-mt-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 transform origin-top-right pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

            <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Drive & Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Mission, Vision & Core Values</h2>
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left relative z-10">
                {/* Mission Card */}
                <div className="bg-white p-5 sm:p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden flex items-center group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative z-10 w-full">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 border-b border-slate-100 pb-2 inline-block">Our Mission</h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      To engineer sustainable, precise, and safe infrastructure solutions that continuously elevate modern communities and foster profound economic growth.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="bg-white p-5 sm:p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden flex items-center group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative z-10 w-full">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 border-b border-slate-100 pb-2 inline-block">Our Vision</h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      To be the nation's most trusted and reliable partner in civil engineering, renowned for technical excellence and uncompromising safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Core Company Values">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  tabIndex={0}
                  className="group relative bg-white p-5 md:p-8 rounded-2xl border border-slate-100 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] shadow-sm"
                  style={{ '--val-color': val.color } as React.CSSProperties}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  role="listitem"
                >


                  {/* Glowing Top Border indicator based on color */}
                  <div className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ backgroundColor: val.color }}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 inline-flex overflow-hidden rounded-xl bg-slate-50 shadow-inner p-3 border border-slate-100 group-hover:border-transparent transition-colors duration-300" style={{ ...((expandedValues[idx]) ? { borderBottom: `2px solid ${val.color}` } : {}) }}>
                      <span className="material-symbols-outlined text-4xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" style={{ color: val.color }}>{val.icon}</span>
                    </div>

                    <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[var(--val-color)] transition-colors">{val.title}</h4>

                    <div className="flex-1">
                      <p className={`text-slate-600 text-sm leading-relaxed transition-all duration-300 ${expandedValues[idx] ? 'hidden' : 'block'}`}>
                        {val.shortDesc}
                      </p>
                      <p className={`text-slate-600 text-sm leading-relaxed transition-all duration-300 ${expandedValues[idx] ? 'block' : 'hidden'}`}>
                        {val.fullDesc}
                      </p>
                    </div>

                    <button
                      className="mt-6 text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors focus:no-outline"
                      style={{ color: expandedValues[idx] ? '#0f172a' : val.color }}
                      onClick={(e) => { e.stopPropagation(); toggleValue(idx); }}
                      aria-expanded={expandedValues[idx]}
                    >
                      {expandedValues[idx] ? 'Read Less' : 'Read More'}
                      <span className={`material-symbols-outlined text-sm transform transition-transform ${expandedValues[idx] ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5.2 Why Choose Us / Our Approach section */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200" aria-label="Why Choose Us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Why Industry Leaders Choose KAVI</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Our comprehensive approach combines technical excellence with collaborative partnership to deliver superior infrastructure solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {[
                { title: 'Strategic Planning', desc: 'We begin every project with thorough feasibility analysis and strategic planning to ensure optimal outcomes and risk mitigation.', icon: 'analytics' },
                { title: 'Technical Excellence', desc: 'Our team of licensed engineers brings decades of specialized expertise to every project phase, utilizing cutting-edge methodologies.', icon: 'engineering' },
                { title: 'Collaborative Partnership', desc: 'We work as an extension of your team, maintaining open communication and alignment throughout the project lifecycle.', icon: 'groups' },
                { title: 'Quality Assurance', desc: 'Rigorous quality control processes and strict compliance with industry standards ensure exceptional deliverables.', icon: 'fact_check' },
                { title: 'On-Time Delivery', desc: 'Advanced project management methodologies and proactive communication keep projects on schedule and within budget.', icon: 'schedule' },
                { title: 'Sustainable Solutions', desc: 'We integrate environmental responsibility and long-term sustainability into every design and construction decision.', icon: 'energy_savings_leaf' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-white hover:shadow-lg rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-100" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shadow-inner">
                      0{idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2.1 Leadership Section Improvements */}
        <section id="leadership" className="py-16 md:py-24 bg-white" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
              <h2 id="leadership-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Executive Leadership</h2>
              <div className="w-20 h-[3px] bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Leading with profound industry knowledge, unyielding integrity, and a dedication to engineering excellence.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  tabIndex={0}
                  className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col sm:flex-row hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 w-full"
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  {/* Photo — full width on mobile, fixed on sm+ */}
                  <div className="relative w-full sm:w-[200px] lg:w-[240px] flex-shrink-0 overflow-hidden">
                    <img
                      alt={`Portrait of ${leader.name}`}
                      className="w-full h-64 sm:h-full object-cover object-top"
                      src={leader.img}
                      loading="lazy"
                      style={{ minHeight: '240px' }}
                    />
                    {/* Exp badge at bottom */}
                    <div className="absolute bottom-4 left-4 bg-primary text-white text-[12px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                      {leader.exp} Exp.
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-[22px] font-bold text-slate-900 leading-snug mb-1">{leader.name}</h3>
                    <p className="text-primary font-bold text-[13px] mb-6">{leader.role}</p>

                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.12em] mb-3">Specialties</p>
                    <ul className="space-y-2">
                      {leader.specialties.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-[14px] text-primary">
                          <span className="mt-[3px] w-[6px] h-[6px] rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-slate-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.1 Certifications Section Improvements */}
        <section id="certifications" className="py-16 md:py-24 bg-[#f8faff]" aria-label="Official Certifications">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12" data-aos="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Certifications</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

              {/* LEFT SIDE: 2x2 Grid */}
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="bg-[#eef2f8] p-6 rounded-[2rem] border border-[#dde6f0] grid grid-cols-2 gap-4 h-full">

                  {/* MBE Card */}
                  <div
                    className="bg-white rounded-[18px] flex flex-col items-center justify-center py-10 px-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={() => setCertModal(certifications[0])}
                  >
                    <h3 className="text-[2rem] font-extrabold text-[#2b6cb0] mb-2 tracking-tight">MBE</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#718096] leading-tight">Minority Business<br />Enterprise</p>
                  </div>

                  {/* DBE Card */}
                  <div
                    className="bg-white rounded-[18px] flex flex-col items-center justify-center py-10 px-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={() => setCertModal(certifications[1])}
                  >
                    <h3 className="text-[2rem] font-extrabold text-[#2b6cb0] mb-2 tracking-tight">DBE</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#718096] leading-tight">Disadvantaged<br />Business Enterprise</p>
                  </div>

                  {/* HUB Card */}
                  <div
                    className="bg-white rounded-[18px] flex flex-col items-center justify-center py-10 px-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={() => setCertModal(certifications[2])}
                  >
                    <h3 className="text-[2rem] font-extrabold text-[#2b6cb0] mb-2 tracking-tight">HUB</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#718096] leading-tight">Historically<br />Underutilized<br />Business</p>
                  </div>

                  {/* Certified Performance Card — Blue */}
                  <div className="bg-[#2b6cb0] rounded-[18px] flex flex-col items-center justify-center py-10 px-4 text-center">
                    <span className="material-symbols-outlined text-white text-[3rem] mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>verified</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white leading-tight">Certified Performance</p>
                  </div>

                </div>
              </div>

              {/* RIGHT SIDE: All Certifications List Card */}
              <div className="w-full lg:w-1/2" data-aos="fade-left">
                <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm flex flex-col h-full min-h-[440px] overflow-hidden">

                  {/* Header */}
                  <div className="px-7 py-5 border-b border-[#f1f5f9] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 500" }}>verified</span>
                    </div>
                    <h3 className="text-[#0f172a] text-[17px] font-bold">All Certifications</h3>
                  </div>

                  {/* Scrollable rows */}
                  <div className="flex-1 overflow-y-auto divide-y divide-[#f1f5f9]">
                    {certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCertModal(cert)}
                        className="flex items-center gap-4 px-7 py-4 hover:bg-slate-50 cursor-pointer transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#f0f4f8] flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-[#2b6cb0] text-[16px]" style={{ fontVariationSettings: "'wght' 500" }}>check</span>
                        </div>
                        <div>
                          <h4 className="text-[#0f172a] font-semibold text-[14px]">{cert.name}</h4>
                          <p className="text-[#94a3b8] text-[12px] mt-0.5">Issued by Regulating Authority</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modal for Certificate Verification */}
        {certModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm shadow-2xl animate-[fadeIn_0.2s_ease-out]">
            <div
              className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col md:flex-row relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                onClick={() => setCertModal(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="w-full md:w-2/5 bg-slate-100 flex items-center justify-center p-6 md:p-12 border-r border-slate-200">
                <div className="w-full aspect-[3/4] bg-white border-2 border-slate-200 shadow-md flex items-center justify-center relative inner-shadow-lg">
                  <div className="text-primary font-black text-4xl opacity-20 transform -rotate-45">{certModal.id} Verify</div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-yellow-500 rounded-full opacity-50 flex items-center justify-center"><div className="w-8 h-8 rounded-full border border-yellow-500"></div></div>
                </div>
              </div>

              <div className="w-full md:w-3/5 p-5 sm:p-8 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full w-max text-xs font-bold mb-4 border border-green-200">
                  <span className="material-symbols-outlined text-sm">verified</span> Verified Active
                </div>
                <h3 id="modal-title" className="text-2xl font-black text-slate-900 mb-6">{certModal.name}</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex border-b border-slate-100 pb-3">
                    <strong className="w-1/3 text-sm text-slate-500">Issued By:</strong>
                    <span className="w-2/3 text-sm text-slate-800 font-medium">{certModal.auth}</span>
                  </div>
                  <div className="flex border-b border-slate-100 pb-3">
                    <strong className="w-1/3 text-sm text-slate-500">Cert ID:</strong>
                    <span className="w-2/3 text-sm text-slate-800 font-mono">{certModal.code}</span>
                  </div>
                  <div className="flex pb-3">
                    <strong className="w-1/3 text-sm text-slate-500">Valid Until:</strong>
                    <span className="w-2/3 text-sm text-slate-800 font-medium">{certModal.expiry}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Certification Benefits</h4>
                  <ul className="space-y-2">
                    {certModal.benefits.map((ben: string, i: number) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="mt-8 text-primary font-bold text-sm hover:underline flex items-center gap-1 w-max">
                  Verify on Official Website <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Partners Marquee */}
        <section id="content-end-marker" className="py-16 md:py-32 bg-white border-t border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Trusted By Industry Leaders</h2>
          </div>
          <div className="relative overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-24 animate-marquee grayscale opacity-50">
              {['HARRIS COUNTY', 'METRO', 'FEMA', 'CITY OF HOUSTON', 'TxDOT', 'Uptown TIRZ'].map((p, i) => (
                <span key={i} className="text-2xl font-black text-slate-900 whitespace-nowrap">{p}</span>
              ))}
              {['HARRIS COUNTY', 'METRO', 'FEMA', 'CITY OF HOUSTON', 'TxDOT', 'Uptown TIRZ'].map((p, i) => (
                <span key={`dup-${i}`} className="text-2xl font-black text-slate-900 whitespace-nowrap">{p}</span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
