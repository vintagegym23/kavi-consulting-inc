import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState, useCallback } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import engineering from '../images/engineering.png';

// 1. IMPORT YOUR NEW COMPONENT
import Hero from '../components/Hero';

// 2. YOUR IMAGE IMPORTS
import hero1 from '../images/home1.jpeg';
import hero2 from '../images/home2.jpeg';
import hero3 from '../images/home3.jpeg';
import hero4 from '../images/home4.jpeg';
import hero5 from '../images/home5.jpeg';
import logo from '../images/logo.png';

import urban from '../images/urban interchage.jpg';
import grandparking from '../images/grand parking way.jpg';
import postoak from '../images/post oak boulevard.jpg';
import metropolitan from '../images/metropoliten.png';
import River from '../images/river crossing.png';

// import logo from '../images/kavilogo.png';

const heroSlides = [hero1, hero2, hero3, hero4, hero5];


const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1600;
          const stepTime = 20;
          const increment = end / (duration / stepTime);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl font-extrabold text-slate-900 mb-2">
      {count}
      {suffix}
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);




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

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Certifications</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized through industry-leading certifications and structural standards.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Div (Certificates Display) */}
            <div className="flex-1 space-y-8">
              {/* 2x2 Certifications Grid */}
              <div className="bg-[#f8faff] p-6 sm:p-10 rounded-[2.5rem] border border-[#edf2f7] shadow-sm grid grid-cols-2 gap-4 sm:gap-6 relative overflow-hidden w-full max-w-2xl h-full min-h-[300px] flex-1">
                {/* Background blob for texture */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                {/* MBE Card */}
                <div className="bg-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-3xl sm:text-[2.25rem] font-extrabold text-[#2b6cb0] mb-2 sm:mb-3 tracking-tight leading-none">MBE</h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-[#718096] max-w-[160px] leading-relaxed">Minority Business Enterprise</p>
                </div>

                {/* DBE Card */}
                <div className="bg-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-3xl sm:text-[2.25rem] font-extrabold text-[#2b6cb0] mb-2 sm:mb-3 tracking-tight leading-none">DBE</h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-[#718096] max-w-[160px] leading-relaxed">Disadvantaged Business Enterprise</p>
                </div>

                {/* HUB Card */}
                <div className="bg-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h3 className="text-3xl sm:text-[2.25rem] font-extrabold text-[#2b6cb0] mb-2 sm:mb-3 tracking-tight leading-none">HUB</h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-[#718096] max-w-[160px] leading-relaxed">Historically Underutilized Business</p>
                </div>

                {/* Blue Highlight Card */}
                <div className="bg-[#2b6cb0] text-white rounded-[24px] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-[3rem] sm:text-[3.5rem] mb-4 sm:mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>verified</span>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-white leading-relaxed">Certified Performance</p>
                </div>
              </div>
            </div>

            {/* Right Div (Scrollable Certificate List) */}
            <div className="flex-1 lg:max-w-[450px] relative mt-8 lg:mt-0 min-h-[400px] lg:min-h-[500px]">
              <div className="lg:absolute lg:inset-0 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full lg:h-auto max-h-[500px] lg:max-h-none">
                <div className="bg-slate-50 px-8 py-5 border-b border-slate-100 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <h3 className="text-xl font-bold text-slate-900">TxDOT Certifications</h3>
                </div>

                {/* Scrollable Container */}
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <ul className="space-y-2">
                    {Array.from({ length: 15 }).map((_, idx) => (
                      <li key={idx} className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100 cursor-default">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-sm font-bold">check</span>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Certificate Placeholder {(idx + 1).toString().padStart(2, '0')}</p>
                          <p className="text-xs text-slate-500 mt-1">Issued by Regulating Authority</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

            {/* Contact Info Sidebar */}
            <div className="md:w-1/3 bg-primary text-white p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Contact Us</h2>
                <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                  Ready to start your next project? Reach out to our engineering technical staff today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue-300">location_on</span>
                    <div>
                      <p className="font-semibold text-sm">Headquarters</p>
                      <p className="text-blue-100 text-sm mt-1">123 Engineering Blvd<br />Suite 400<br />Houston, TX 77001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue-300">mail</span>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-blue-100 text-sm mt-1">info@kaviconsulting.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue-300">call</span>
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <p className="text-blue-100 text-sm mt-1">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="md:w-2/3 p-6 sm:p-10">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your inquiry has been sent.'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      placeholder="123-456-7890"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-semibold text-slate-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                    placeholder="Provide your location or project address"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        <style>
          {`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cbd5e1;
              border-radius: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #94a3b8;
            }
          `}
        </style>
      </section>

    </div>
  );
};

export default Home;