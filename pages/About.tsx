
import React from 'react';
import vijaya from "../images/Vijaya Rapolu.png";
import aravind from "../images/Aravind Nimma.png";

const About: React.FC = () => {
  return (
    <div>
      {/* Sub Hero */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Engineering background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1JYgoF7E4QTwNW1BRNtIQ47zWWQJ0IEyGD2Vj7umwa-59XAfaWnsNOAXnV4I1XHxnmUTegJZzenDky2Ro0sWyYLbA8-rEuP82iHf-xgsmmQLilqTt94pR2cVlnIFWmEW5cOI4Zz6jfOwwr181hXYw67K2f05t11scjbHft_qzfMRA0UrdEhQ5wMC2fDr_RDul_3O3F7wc9AkWfw8_axFU7eM3J9PnuLexAbVLjmQljqVS9s1dkHFVOaUeaPNeH49hk_Z1QkIjg" />
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Our Story & Leadership
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Engineering a better future through technical precision and community-focused infrastructure solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Company Overview</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                A Decade of Engineering Excellence
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2010, Kavi Consulting Inc. has grown from a specialized engineering firm into a multi-disciplinary powerhouse in the civil engineering and construction management sectors.
                </p>
                <p>
                  With over 80 years of combined professional experience within our leadership team, we bring a wealth of knowledge to every project. We are proud to be a certified Minority Business Enterprise (MBE), Disadvantaged Business Enterprise (DBE), and Historically Underutilized Business (HUB).
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-100">
                  <div className="text-primary font-bold text-2xl">2010</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Year Founded</div>
                </div>
                <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-100">
                  <div className="text-primary font-bold text-2xl">80+</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Combined Years Exp.</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              {['MBE', 'DBE', 'HUB'].map((cert) => (
                <div key={cert} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center aspect-square border border-slate-100">
                  <span className="text-primary font-black text-3xl mb-2">{cert}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {cert === 'MBE' ? 'Minority Business Enterprise' : cert === 'DBE' ? 'Disadvantaged Business Enterprise' : 'Historically Underutilized Business'}
                  </span>
                </div>
              ))}
              <div className="bg-primary p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center aspect-square text-white">
                <span className="material-symbols-outlined text-4xl mb-2">verified</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Certified Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Executive Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our team is led by industry veterans dedicated to technical excellence and client success.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
                { 
    name: 'Vijaya Rapolu, P.E.', 
    role: 'President & Principal Engineer', 
    exp: '29 Years Exp.', 
    img: vijaya,
    specialties: [
      'Transportation Engineering',
      'Hydrologic & Hydraulic Design',
      'Program Management',
      'Strategic Planning'
    ]
  },
  { 
    name: 'Aravind Nimma, P.E., CFM', 
    role: 'Director of Operations', 
    exp: '17 Years Exp.', 
    img: aravind,
    specialties: [
      'Drainage & Stormwater Management',
      'Certified Floodplain Management',
      'Construction Services',
      'Municipal Engineering'
    ]
  }
            ].map((leader, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row group">
                <div className="lg:w-1/2 relative overflow-hidden h-72 lg:h-auto">
                  <img alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={leader.img} />
                  {/* <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    {leader.exp}
                  </div> */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
  <span className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
    {leader.exp}
  </span>
</div>

                </div>
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-primary font-semibold mb-6">{leader.role}</p>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Specialties</h4>
                  <ul className="space-y-3">
                    {leader.specialties.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide our projects and define our reputation in the industry.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: 'handshake', title: 'Collaborative', text: 'We work hand-in-hand with stakeholders, agencies, and communities to ensure transparent communication and aligned objectives.' },
              { icon: 'precision_manufacturing', title: 'Technical Excellence', text: 'Unwavering commitment to engineering precision, leveraging the latest modeling software and technical standards.' },
              { icon: 'diversity_3', title: 'Community Focused', text: 'Building infrastructure that doesn\'t just function, but enhances the quality of life for the communities it serves.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 group hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-blue-50 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
