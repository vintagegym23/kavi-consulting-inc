import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects, FILTER_CATEGORIES, type Project, type ProjectCategory } from '../src/data/projects';

// ─── Category colour tokens ──────────────────────────────────────────────────
const CATEGORY_STYLES: Record<
  ProjectCategory,
  { badge: string; activeBg: string; gradient: string; icon: string }
> = {
  'Transportation & Roadway': {
    badge: 'bg-blue-100 text-blue-700',
    activeBg: 'bg-blue-600 text-white border-blue-600',
    gradient: 'from-blue-700 to-blue-900',
    icon: 'road',
  },
  'Drainage & Stormwater': {
    badge: 'bg-cyan-100 text-cyan-700',
    activeBg: 'bg-cyan-600 text-white border-cyan-600',
    gradient: 'from-cyan-600 to-cyan-900',
    icon: 'water',
  },
  'Hydraulic Engineering': {
    badge: 'bg-indigo-100 text-indigo-700',
    activeBg: 'bg-indigo-600 text-white border-indigo-600',
    gradient: 'from-indigo-600 to-indigo-900',
    icon: 'waves',
  },
  'Infrastructure Assessment': {
    badge: 'bg-amber-100 text-amber-700',
    activeBg: 'bg-amber-500 text-white border-amber-500',
    gradient: 'from-amber-500 to-amber-800',
    icon: 'search_insights',
  },
  'Feasibility Studies': {
    badge: 'bg-emerald-100 text-emerald-700',
    activeBg: 'bg-emerald-600 text-white border-emerald-600',
    gradient: 'from-emerald-600 to-emerald-900',
    icon: 'query_stats',
  },
};

// Fallback for "All Projects" filter active button
const ALL_ACTIVE = 'bg-primary text-white border-primary';

// ─── ProjectCard ─────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  onViewDetails: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const primary = project.categories[0];
  const style = CATEGORY_STYLES[primary];

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Placeholder thumbnail */}
      <div
        className={`relative flex-shrink-0 h-40 bg-gradient-to-br ${style.gradient} flex items-center justify-center overflow-hidden`}
        aria-hidden="true"
      >
        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <span
          className="material-symbols-outlined text-white opacity-30 select-none"
          style={{ fontSize: 72 }}
        >
          {style.icon}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-grow p-6">
        {/* Category badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${CATEGORY_STYLES[cat].badge}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Client */}
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Client: <span className="text-primary normal-case tracking-normal font-semibold">{project.client}</span>
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-grow mb-4">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <button
            onClick={() => onViewDetails(project)}
            className="w-full flex items-center justify-center gap-2 text-sm font-bold text-primary hover:text-white hover:bg-primary border border-primary/30 hover:border-primary px-4 py-2.5 rounded-xl transition-all duration-200"
            aria-label={`View details for ${project.title}`}
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

// ─── ProjectModal ─────────────────────────────────────────────────────────────
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const primary = project.categories[0];
  const style = CATEGORY_STYLES[primary];

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_0.2s_ease-out]">
        {/* Modal header / thumbnail */}
        <div className={`relative h-32 bg-gradient-to-br ${style.gradient} flex items-center px-8`}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10 flex-1">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/30"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h2
              id="modal-project-title"
              className="text-xl md:text-2xl font-extrabold text-white leading-tight"
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 ml-4 flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal body */}
        <div className="p-8">
          {/* Client */}
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-primary text-[18px]">business</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Client</span>
            <span className="text-sm font-semibold text-slate-800 ml-1">{project.client}</span>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Deliverables */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.12em] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[16px]">checklist</span>
              Key Deliverables
            </h3>
            <ul className="space-y-2.5">
              {project.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5 text-[16px]">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <Link
              to="/contact"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Discuss This Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main page ────────────────────────────────────────────────────────────────
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);

  // Auto-scroll filter bar to keep active button visible
  useEffect(() => {
    const activeEl = filterBarRef.current?.querySelector(`[data-filter="${activeFilter}"]`) as HTMLElement | null;
    activeEl?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) =>
          p.categories.includes(activeFilter as ProjectCategory)
        );

  // Dynamically derive per-category counts for the filter buttons
  const countForCategory = (cat: string): number =>
    cat === 'All Projects'
      ? projects.length
      : projects.filter((p) => p.categories.includes(cat as ProjectCategory)).length;

  const filterButtonClass = (cat: string): string => {
    const isActive = activeFilter === cat;
    if (!isActive) return 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300';
    if (cat === 'All Projects') return `${ALL_ACTIVE} border`;
    const style = CATEGORY_STYLES[cat as ProjectCategory];
    return style ? `${style.activeBg} border` : `${ALL_ACTIVE} border`;
  };

  return (
    <div className="bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative flex items-center min-h-[340px] md:min-h-[420px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b-4 border-primary">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(43,108,176,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(43,108,176,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(43,108,176,0.25),transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-white">Projects</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-5">
              Project Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Delivering Infrastructure{' '}
              <span className="text-blue-400">Excellence</span> Across Texas
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From transportation planning to drainage design, KAVI Consulting Inc. has successfully
              completed complex civil engineering projects for cities, counties, and agencies
              throughout Texas.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FILTER BAR ── */}
      <section className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div ref={filterBarRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-filter={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${filterButtonClass(cat)}`}
                aria-pressed={activeFilter === cat}
              >
                {cat !== 'All Projects' && (
                  <span className="material-symbols-outlined text-[13px]">
                    {CATEGORY_STYLES[cat as ProjectCategory]?.icon}
                  </span>
                )}
                {cat}
                <span className={`ml-0.5 text-[10px] font-black px-1.5 py-0.5 rounded-full ${activeFilter === cat ? 'bg-white/25' : 'bg-slate-100 text-slate-500'}`}>
                  {countForCategory(cat)}
                </span>
              </button>
            ))}
        </div>
      </section>

      {/* ── 3. PROJECTS GRID ── */}
      <section className="py-16 bg-slate-50" aria-label="Project portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-slate-500 font-medium">
              Showing{' '}
              <span className="font-bold text-slate-800">{filteredProjects.length}</span>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeFilter !== 'All Projects' && (
                <span> in <span className="text-primary font-bold">{activeFilter}</span></span>
              )}
            </p>
            {activeFilter !== 'All Projects' && (
              <button
                onClick={() => setActiveFilter('All Projects')}
                className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
                Clear filter
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <span className="material-symbols-outlined text-5xl mb-4 block">search_off</span>
              <p className="font-semibold text-lg">No projects match this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 5. CTA SECTION ── */}
      <section className="py-20 bg-primary relative overflow-hidden" aria-label="Call to action">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/15 border border-white/25 text-blue-100 text-xs font-bold tracking-widest uppercase mb-6">
            Work With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to Bring Your Project to Life?
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            With over 50 years of combined experience and a proven track record of successful project
            delivery, KAVI Consulting Inc. is ready to turn your vision into reality — from concept
            to completion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-transparent text-white font-bold px-8 py-3.5 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200 text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">engineering</span>
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
