import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects as projectData } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  // Get unique categories from projects
  const uniqueCategories = ['All', ...Array.from(
    new Set(projectData.flatMap(p => p.category))
  ).sort()];

  // Filter projects based on selected category
  const filteredList = filter === 'All'
    ? projectData
    : projectData.filter(p => p.category.includes(filter));

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  // Load more projects
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="bg-white">
      {/* Portfolio Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Bridge crossing project"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBieqw-z75VL-pV2xZFQD6-h_xu_9ZbWLgKYh2ibmAXX3KUMW9i_n3TQ3-C6Pz30phaYd116pbNy4TyQ-23tgmb21FzbuXwbqig_a9syJ0gUF54TmZ0_di842BchNdCL_IcHCvCa0GbSzfK-rvRenPHYBsaPUaUYP-wbXG1f-vDBr6bdNRroYQsewg0VhM95eisGBi1r5G1DoD1cWassj9vsTUfL_MFIjTyHYrSp6PUCLlMhyd2FiaDcrEFvdIipXEYRNJZ_ew72g"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex mb-4 text-blue-400 text-sm font-bold uppercase tracking-widest gap-2 items-center">
            <span>Home</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>Project Portfolio</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Infrastructure <span className="text-blue-400">Portfolio</span>
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === cat ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.slice(0, visibleCount).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                client={project.client}
                description={project.description}
                image={project.image}
                tags={project.category}
                tools={project.tools}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredList.length && (
            <div className="mt-20 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                Load More Projects
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Partners/Clients Marquee */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Trusted By Industry Leaders
          </h2>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-24 animate-marquee grayscale opacity-50">
            {['Harris County', 'METRO', 'FEMA', 'City of Houston', 'TxDOT', 'Uptown TIRZ'].map((p, i) => (
              <span key={i} className="text-2xl font-black text-slate-900 whitespace-nowrap">
                {p}
              </span>
            ))}
            {['Harris County', 'METRO', 'FEMA', 'City of Houston', 'TxDOT', 'Uptown TIRZ'].map((p, i) => (
              <span key={`dup-${i}`} className="text-2xl font-black text-slate-900 whitespace-nowrap">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
