import { Link } from 'react-router-dom';
import React from 'react';
import { categoriesOfWork } from '../src/data/categoriesOfWork';

import Hero from '../components/Hero';

import hero1 from '../images/home1.jpeg';
import hero2 from '../images/home2.jpeg';
import hero3 from '../images/home3.jpeg';
import hero4 from '../images/home4.jpeg';
import hero5 from '../images/home5.jpeg';
import logo from '../images/logo.png';

const heroSlides = [hero1, hero2, hero3, hero4, hero5];

const Home: React.FC = () => {




  return (
    <div>
      {/* 3. USE THE NEW HERO COMPONENT HERE */}
      <Hero images={heroSlides} logo={logo} />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive engineering services tailored to modern infrastructural requirements, ensuring every project is built on a foundation of excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { title: 'Feasibility Studies', path: 'feasibility-studies', icon: 'query_stats', desc: 'Comprehensive analysis and evaluation to determine project viability, risk factors, and optimization.' },
              { title: 'Transport Engineering', path: 'transport-engineering', icon: 'traffic', desc: 'Innovative solutions for urban transit networks, highway design, and moving communities efficiently.' },
              { title: 'Drainage Design', path: 'drainage-design', icon: 'waves', desc: 'Sustainable storm water management and drainage systems designed to protect infrastructure.' },
              { title: 'Utility Design', path: 'utility-design', icon: 'plumbing', desc: 'Designing resilient, functional utility systems that power, supply, and support modern communities.' },
              { title: 'Construction', path: 'construction', icon: 'engineering', desc: 'Expert construction services delivering safety, technical precision, and premium quality at every phase.' },
              { title: 'District Engineering', path: 'district-engineering', icon: 'account_balance', desc: 'Providing comprehensive engineering solutions for municipal utility districts and levee improvement groups.' },
              { title: 'Site Development', path: 'site-development', icon: 'landscape', desc: 'Transforming raw land into functional, code-compliant, and fully optimized sites.' },
              { title: 'Program Management', path: 'program-management', icon: 'account_tree', desc: 'Strategic oversight from feasibility to completion, ensuring budgets and timelines are met seamlessly.' },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={`/services#${item.path}`}
                className="group bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform will-change-transform flex flex-col h-full text-left"
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="mt-auto h-1 w-12 bg-slate-200 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Categories of Work Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Certifications & Categories of Work</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              KAVI Consulting holds key business certifications and is qualified across a broad range of TxDOT engineering categories.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left — Business Certifications (MBE / DBE / HUB) */}
            <div className="flex-1 space-y-8">
              <div className="bg-[#f8faff] p-6 sm:p-10 rounded-[2.5rem] border border-[#edf2f7] shadow-sm grid grid-cols-2 gap-4 sm:gap-6 relative overflow-hidden w-full max-w-2xl h-full min-h-[300px] flex-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                {/* MBE */}
                <div className="bg-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-3xl sm:text-[2.25rem] font-extrabold text-[#2b6cb0] mb-2 sm:mb-3 tracking-tight leading-none">MBE</h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-[#718096] max-w-[160px] leading-relaxed">Minority Business Enterprise</p>
                </div>

                {/* DBE */}
                <div className="bg-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-3xl sm:text-[2.25rem] font-extrabold text-[#2b6cb0] mb-2 sm:mb-3 tracking-tight leading-none">DBE</h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-[#718096] max-w-[160px] leading-relaxed">Disadvantaged Business Enterprise</p>
                </div>

                {/* HUB */}
                <div className="bg-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-3xl sm:text-[2.25rem] font-extrabold text-[#2b6cb0] mb-2 sm:mb-3 tracking-tight leading-none">HUB</h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-[#718096] max-w-[160px] leading-relaxed">Historically Underutilized Business</p>
                </div>

                {/* Accent card */}
                <div className="bg-[#2b6cb0] text-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-[3rem] sm:text-[3.5rem] mb-4 sm:mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>verified</span>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-white leading-relaxed">Certified Performance</p>
                </div>
              </div>
            </div>

            {/* Right — Categories of Work (scrollable compact list) */}
            <div className="flex-1 lg:max-w-[450px] relative mt-8 lg:mt-0 min-h-[400px] lg:min-h-[500px]">
              <div className="lg:absolute lg:inset-0 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full lg:h-auto max-h-[500px] lg:max-h-none">
                <div className="bg-slate-50 px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">list_alt</span>
                  <h3 className="text-xl font-bold text-slate-900">TxDOT Pre Certifications</h3>
                </div>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <ul className="space-y-1.5">
                    {categoriesOfWork.map((item) => (
                      <li
                        key={item.code}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                      >
                        <span className="flex-shrink-0 font-mono text-[11px] font-bold text-primary bg-blue-50 px-2 py-1 rounded-md min-w-[52px] text-center">
                          {item.code}
                        </span>
                        <span className="text-sm text-slate-700 leading-snug">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;