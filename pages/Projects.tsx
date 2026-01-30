
import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Transportation', 'Drainage', 'Utilities', 'TxDOT'];
  
  const allProjects = [
    { 
      title: 'US 69 Corridor Improvement', 
      client: 'TxDOT', 
      tags: ['TxDOT', 'Transportation'], 
      desc: 'Strategic expansion and modernization of the primary urban corridor.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqSfdbPKboTLF1TWSgTAfkO4yfCvmYMwvn-vjlqXmSiIWDaQ0ftQ-tbXh0BmEw4LXjZoC2hHnan9TJimmpDBNXk6TTN3fxDH402l7tKasYL9re_L0iFL7J977CWMj7QBhkBrudo_WdjPvFDzSbR-Qqh4Oj4tXttcLZr28DXpLsae4tuLXJhOn_10sNJn6h14GkkdKdTyJGvG8KpeW3iDM8YK_9S1-eAqPf-2huO0MT2zE5Z2us7KJK0i_5Qwb7ljy-tYQDLYR2KA' 
    },
    { 
      title: 'Kirkwood/Briar Forest Drainage', 
      client: 'City of Houston', 
      tags: ['City of Houston', 'Drainage'], 
      desc: 'Comprehensive storm-water management system to mitigate regional flooding.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI2oItfvWX0uFD2JRRCNXeoEHogJlYCJbn8tHhRKMPGDNaZ2u4nNInWGIMGuJmXAlCx_8YJI808y3k12fsTZSrl2DJSyhRDoQ6-tg4eOZbnqP9Ed0iwCcSKUVkq2LkW6f0WjKL6dD-oNcL3sFpbaYTqckfW8yyF2GADYWkrfZ7HQ6OdZnsLpRSEypextz-lQd6FaM8NXYVDSa2qNUEuOCThPymbuk2w5xSBatJE-H5iuDBl1itZ8K0oHfbQDpcN7-NbwjRtt05Qg' 
    },
    { 
      title: 'Post Oak Boulevard', 
      client: 'Uptown TIRZ', 
      tags: ['Uptown Houston', 'Transportation'], 
      desc: 'Modern transit-oriented development and reconstruction of iconic Uptown boulevard.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTTbIZJuQcMqNabEBeeT4eEi-dCn-AyXpqW8M9MVhvAY8uj_VfSjrN_rC2WkDY_woj0qIii0DaHiawKSTLghXIexRrgnSeBLniJkC5hrObCrzqCM6sw7jEQabzXuIhT09KPkf-cQtVTS0H3Sp_XT8Z7YjJb0m4q7xn0bGpHfjCLEQqcjjA6oVeqIUnF8PrIsKweLK6DZz26H33SOJcEebEgN5iF7cBz5mD-UaWqQ9H8USd5xZnxLB6Ub558q6V8PO_MUL09wjtg' 
    },
    { 
      title: 'Grand Parkway Segment E', 
      client: 'TxDOT', 
      tags: ['TxDOT', 'Utilities'], 
      desc: 'Infrastructure design and utility coordination for major highway outer loop.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt1JYgoF7E4QTwNW1BRNtIQ47zWWQJ0IEyGD2Vj7umwa-59XAfaWnsNOAXnV4I1XHxnmUTegJZzenDky2Ro0sWyYLbA8-rEuP82iHf-xgsmmQLilqTt94pR2cVlnIFWmEW5cOI4Zz6jfOwwr181hXYw67K2f05t11scjbHft_qzfMRA0UrdEhQ5wMC2fDr_RDul_3O3F7wc9AkWfw8_axFU7eM3J9PnuLexAbVLjmQljqVS9s1dkHFVOaUeaPNeH49hk_Z1QkIjg' 
    },
    { 
      title: 'Transit Center Hub', 
      client: 'METRO', 
      tags: ['METRO', 'Transportation'], 
      desc: 'Intermodal transportation facility design and pedestrian accessibility project.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBieqw-z75VL-pV2xZFQD6-h_xu_9ZbWLgKYh2ibmAXX3KUMW9i_n3TQ3-C6Pz30phaYd116pbNy4TyQ-23tgmb21FzbuXwbqig_a9syJ0gUF54TmZ0_di842BchNdCL_IcHCvCa0GbSzfK-rvRenPHYBsaPUaUYP-wbXG1f-vDBr6bdNRroYQsewg0VhM95eisGBi1r5G1DoD1cWassj9vsTUfL_MFIjTyHYrSp6PUCLlMhyd2FiaDcrEFvdIipXEYRNJZ_ew72g' 
    }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.tags.includes(filter));

  return (
    <div>
      {/* Portfolio Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Bridge" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBieqw-z75VL-pV2xZFQD6-h_xu_9ZbWLgKYh2ibmAXX3KUMW9i_n3TQ3-C6Pz30phaYd116pbNy4TyQ-23tgmb21FzbuXwbqig_a9syJ0gUF54TmZ0_di842BchNdCL_IcHCvCa0GbSzfK-rvRenPHYBsaPUaUYP-wbXG1f-vDBr6bdNRroYQsewg0VhM95eisGBi1r5G1DoD1cWassj9vsTUfL_MFIjTyHYrSp6PUCLlMhyd2FiaDcrEFvdIipXEYRNJZ_ew72g" />
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex mb-4 text-blue-400 text-sm font-bold uppercase tracking-widest gap-2 items-center">
            <span>Home</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>Portfolio</span>
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
              {categories.map((cat) => (
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
            <div className="relative max-w-xs w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Search projects..." type="text"/>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="break-inside-avoid group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.img} />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-lg">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-primary px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-xs font-bold text-slate-400 uppercase">Client: {project.client}</span>
                    <a className="text-primary text-sm font-bold inline-flex items-center gap-1 hover:underline" href="#">
                      Details <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              Load More Projects
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Trusted By Industry Leaders</h2>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-24 animate-marquee grayscale opacity-50">
            {['HARRIS COUNTY', 'METRO', 'FEMA', 'CITY OF HOUSTON', 'TxDOT', 'Uptown TIRZ'].map((p, i) => (
              <span key={i} className="text-2xl font-black text-slate-900 whitespace-nowrap">{p}</span>
            ))}
            {/* Repeat for continuous marquee */}
            {['HARRIS COUNTY', 'METRO', 'FEMA', 'CITY OF HOUSTON', 'TxDOT', 'Uptown TIRZ'].map((p, i) => (
              <span key={`dup-${i}`} className="text-2xl font-black text-slate-900 whitespace-nowrap">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
