import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ─────────────────────────────────────────────
// Service Data
// ─────────────────────────────────────────────
const services = [
  {
    id: 'feasibility-studies',
    title: 'Feasibility Studies',
    icon: 'query_stats',
    tagline: 'Evaluate. Strategize. Decide.',
    overview: 'Comprehensive analysis and evaluation to determine project viability, risk factors, and optimization strategies. Our feasibility studies provide the critical insights needed to make informed decisions before committing significant resources to infrastructure development.',
    capabilities: [
      'Preliminary Design & Site Selection Audits',
      'Economic Viability & Financial Modeling',
      'Risk Assessment & Mitigation Planning',
      'Regulatory Compliance Review',
      'Environmental Constraints Analysis',
      'Stakeholder Coordination & Public Impact Studies',
    ],
    img: '/images/feasiblity_studies.png',
    imgAlt: 'Engineers reviewing site plans and blueprints for feasibility',
    accent: '#2B6CB0',
    flip: false,
  },
  {
    id: 'transport-engineering',
    title: 'Transport Engineering',
    icon: 'traffic',
    tagline: 'Moving Communities Forward.',
    overview: 'Innovative solutions for urban transit networks, highway design, and mobility infrastructure. We create transportation systems that move communities efficiently while prioritising safety, accessibility, and long-term environmental sustainability.',
    capabilities: [
      'Roadway & Intersection Geometrics Design',
      'Traffic Signal Impact Analysis',
      'ADA-Compliant Pedestrian Infrastructure',
      'Pavement Design & Asset Management',
      'Intelligent Transportation Systems (ITS)',
      'Construction Sequencing & Phasing Plans',
    ],
    img: '/images/transport_engineering.jpeg',
    imgAlt: 'Transportation planning and design team',
    accent: '#0066cc',
    flip: false,
  },
  {
    id: 'drainage-design',
    title: 'Drainage Design',
    icon: 'waves',
    tagline: 'Mastering Water. Protecting Infrastructure.',
    overview: 'Sustainable stormwater management and advanced drainage systems designed to protect infrastructure from water-related risks. Our hydrology and hydraulics expertise ensures effective flow management and compliance with all applicable environmental regulations.',
    capabilities: [
      'H&H Modeling (HEC-RAS / HEC-HMS)',
      'Floodplain Analysis & FEMA LOMA Support',
      'Stormwater Management & SWMM Modeling',
      'Bridge Hydraulics & Scour Analysis',
      'Detention / Retention Basin Design',
      'Erosion, Sediment Control & Green Infrastructure',
    ],
    img: '/images/drainage_design.png',
    imgAlt: 'Hydrologic modeling and drainage design team',
    accent: '#0891b2',
    flip: true,
  },
  {
    id: 'utility-design',
    title: 'Utility Design',
    icon: 'plumbing',
    tagline: 'The Backbone of Every Build.',
    overview: "Designing resilient, functional utility systems that power, supply, and support modern communities. Our comprehensive utility infrastructure planning integrates water, sewer, storm, and telecommunication systems seamlessly with each project's unique requirements.",
    capabilities: [
      'Water Distribution & Pressure System Design',
      'Sanitary Sewer & Lift Station Design',
      'Storm Sewer & Underground Infrastructure',
      'Utility Coordination (Public & Private)',
      'Utility Relocation & Conflict Resolution',
      'Utility Mapping & GIS Services',
    ],
    img: '/images/utility_design.png',
    imgAlt: 'Engineers working on utility infrastructure design',
    accent: '#7c3aed',
    flip: false,
  },
  {
    id: 'construction',
    title: 'Construction',
    icon: 'engineering',
    tagline: 'On Time. On Budget. No Exceptions.',
    overview: 'Comprehensive construction phase services and management delivering projects on-time, within budget, and to the highest quality standards. Our integrated approach coordinates all stakeholders, manages risks proactively, and ensures seamless project execution from start to finish.',
    capabilities: [
      'Construction Observation & Site Inspections',
      'Project Planning, Scheduling & Sequencing',
      'Contractor & Subcontractor Management',
      'RFI Management & Field Engineering',
      'Quality Assurance & Quality Control Programs',
      'Punch List Management & Project Closeout',
    ],
    img: '/images/construction_engineering.png',
    imgAlt: 'Construction team overseeing a large infrastructure project site',
    accent: '#e11d48',
    flip: true,
  },
  {
    id: 'district-engineering',
    title: 'District Engineering',
    icon: 'account_balance',
    tagline: 'Empowering Local Communities.',
    overview: 'Providing comprehensive engineering solutions for municipal utility districts, water control districts, and levee improvement groups. We act as your engineering arm, ensuring compliance, optimized system performance, and community-focused infrastructure planning.',
    capabilities: [
      'Municipal Utility District (MUD) Support',
      'Bond Application & Feasibility Reports',
      'Capital Improvement Plan Development',
      'Agency Coordination & Permitting',
      'Infrastructure Condition Assessments',
      'Public Board Meeting Representation',
    ],
    img: '/images/district_engineering.png',
    imgAlt: 'District engineering team reviewing capital improvement plans',
    accent: '#059669',
    flip: false,
  },
  {
    id: 'site-development',
    title: 'Site Development',
    icon: 'landscape',
    tagline: 'From Raw Land to Thriving Community.',
    overview: 'Transforming raw land into functional, code-compliant, and fully optimized sites. From residential subdivisions to large-scale commercial/industrial complexes, we provide end-to-end design engineering that maximizes land value and navigates complex zoning hurdles.',
    capabilities: [
      'Site Planning, Grading & Earthwork Design',
      'Commercial, Industrial & Residential Development',
      'Platting & Zoning Entitlements',
      'Erosion & Sediment Control Plans',
      'Right-of-Way & Easement Coordination',
      'Master Planned Community Engineering',
    ],
    img: '/images/site_development.png',
    imgAlt: 'Site development team reviewing master planned community plans',
    accent: '#0f766e',
    flip: true,
  },
  {
    id: 'program-management',
    title: 'Program Management',
    icon: 'account_tree',
    tagline: 'Strategic Execution at Scale.',
    overview: 'Strict strategic oversight from feasibility to completion, ensuring budgets and timelines are met seamlessly. Our program management services coordinate multiple concurrent projects, optimise resource allocation, and maintain alignment with your organizational goals.',
    capabilities: [
      'Multi-Project Portfolio & Capital Planning',
      'Strategic Program Execution & Governance',
      'Cost Control & Budget Administration',
      'Risk Assessment & Mitigation Planning',
      'Stakeholder Communication & Reporting',
      'Performance Monitoring, KPIs & Reporting',
    ],
    img: '/images/program_management.png',
    imgAlt: 'Program management team overseeing global infrastructure portfolio',
    accent: '#2B6CB0',
    flip: false,
  },
];

// ─────────────────────────────────────────────
// Structured Data (SEO)
// ─────────────────────────────────────────────
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Civil Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "KAVI Consulting, Inc.",
    "url": "https://www.kaviinc.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Services",
    "itemListElement": services.map(s => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": s.title,
        "description": s.overview
      }
    }))
  }
};

// ─────────────────────────────────────────────
// Sub-Navigation (sticky services menu)
// ─────────────────────────────────────────────
const ServiceSubNav: React.FC<{ activeId: string }> = ({ activeId }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToService = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navbarH = document.querySelector('header')?.clientHeight ?? 80;
      const subNavH = document.querySelector('[data-subnav]')?.clientHeight ?? 52;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarH - subNavH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Scroll active pill into view inside the sub-nav
  useEffect(() => {
    const activeEl = navRef.current?.querySelector(`[data-id="${activeId}"]`) as HTMLElement | null;
    activeEl?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [activeId]);

  return (
    <div data-subnav className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-1 overflow-x-auto hide-scrollbar py-3">
        {services.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-id={s.id}
            onClick={e => scrollToService(e, s.id)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-200
              ${activeId === s.id
                ? 'bg-primary text-white shadow-md shadow-primary/30'
                : 'text-slate-500 hover:text-primary hover:bg-slate-100'}`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>{s.icon}</span>
            {s.title.split(' ')[0]}{s.title.split(' ')[1] ? ' ' + s.title.split(' ').slice(1, 3).join(' ') : ''}
          </a>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Individual Service Section
// ─────────────────────────────────────────────
const ServiceSection: React.FC<{
  service: typeof services[0];
  index: number;
}> = ({ service, index }) => {
  const isFlipped = service.flip;

  return (
    <section
      id={service.id}
      className={`relative py-14 sm:py-20 lg:py-28 scroll-mt-32 sm:scroll-mt-36 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Subtle accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 opacity-30" style={{ background: `linear-gradient(to right, transparent, ${service.accent}, transparent)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isFlipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 sm:gap-12 lg:gap-20 items-center`}>

          {/* ── Image Column ── */}
          <div
            className="w-full lg:w-5/12 flex-shrink-0"
            data-aos={isFlipped ? 'fade-left' : 'fade-right'}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3]">
              <img
                src={service.img}
                alt={service.imgAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Service number badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-black tracking-widest uppercase shadow-lg backdrop-blur-sm"
                style={{ background: `${service.accent}cc` }}
              >
                {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
              </div>

              {/* Icon badge */}
              <div
                className="absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-xl backdrop-blur-sm"
                style={{ background: `${service.accent}dd` }}
              >
                <span className="material-symbols-outlined text-white text-xl">{service.icon}</span>
              </div>
            </div>
          </div>

          {/* ── Content Column ── */}
          <div
            className="w-full lg:w-7/12"
            data-aos={isFlipped ? 'fade-right' : 'fade-left'}
            data-aos-delay="100"
          >
            {/* Eyebrow */}
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: service.accent }}>
              {service.tagline}
            </p>

            {/* Title */}
            <h2
              id={`service-title-${service.id}`}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-slate-900 mb-5 leading-tight"
            >
              {service.title}
            </h2>

            {/* Divider */}
            <div className="w-14 h-1 rounded-full mb-6" style={{ background: service.accent }} />

            {/* Overview */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              {service.overview}
            </p>

            {/* Capabilities */}
            <div className="mb-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Key Capabilities</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3" role="list" aria-label={`${service.title} capabilities`}>
                {service.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed group/item" role="listitem">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-transform group-hover/item:scale-110"
                      style={{ background: `${service.accent}20`, color: service.accent }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>check</span>
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2"
                style={{ borderColor: service.accent, color: service.accent }}
              >
                <span className="material-symbols-outlined text-base">folder_open</span>
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// Main Services Page
// ─────────────────────────────────────────────
const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  // ── AOS init ──
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 80 });
  }, []);

  // ── Active section tracker via Intersection Observer ──
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    services.forEach(s => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveServiceId(s.id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      {/* SEO Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .capability-check { font-variation-settings: 'FILL' 1; }
      `}} />

      <div className="bg-white min-h-screen font-sans [overflow-x:clip]">

        {/* ── Skip link (Accessibility) ── */}
        <a href="#feasibility-studies" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[300] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-br-lg focus:font-bold">
          Skip to main content
        </a>

        {/* ── HERO SECTION ── */}
        <section
          className="relative min-h-[56vh] sm:min-h-[60vh] flex items-end overflow-hidden bg-slate-950"
          aria-label="Services hero"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(66,153,225,1) 1px, transparent 1px), linear-gradient(90deg, rgba(66,153,225,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-24 sm:pt-32 w-full">
            <div data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-5 sm:mb-6 shadow-[0_0_20px_rgba(43,108,176,0.3)]">
                <span className="material-symbols-outlined text-sm">construction</span>
                Full-Spectrum Civil Engineering
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-5 sm:mb-6 max-w-4xl">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 sm:mb-10">
                KAVI Consulting delivers <strong className="text-white">full-spectrum engineering services</strong> — from initial feasibility studies to final construction management — tailored to infrastructure development, transportation systems, and site development of any scale.
              </p>
            </div>
          </div>
        </section>

        {/* ── STICKY SUB-NAV ── */}
        <ServiceSubNav activeId={activeServiceId} />

        {/* ── SERVICE SECTIONS ── */}
        <main id="main-content">
          {services.map((service, index) => (
            <ServiceSection
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </main>

      </div>
    </>
  );
};

export default Services;
