
import React from 'react';

const Services: React.FC = () => {
  const serviceCategories = [
    { title: 'Transportation', icon: 'directions_car', features: ['Highway & Roadway Design', 'Traffic Impact Analysis', 'Multi-modal Transit Systems'] },
    { title: 'H&H Modeling', icon: 'water_drop', features: ['Floodplain Analysis', 'Stormwater Modeling', 'Watershed Management'] },
    { title: 'Utility Design', icon: 'settings_input_component', features: ['Water & Sewer Systems', 'Underground Infrastructure', 'Utility Coordination'] },
    { title: 'Site Development', icon: 'foundation', features: ['Grading & Drainage Plans', 'Erosion & Sediment Control', 'Commercial & Industrial'] },
    { title: 'Feasibility Studies', icon: 'analytics', features: ['Cost-Benefit Analysis', 'Site Selection Audits', 'Environmental Constraints'] },
    { title: 'Permitting', icon: 'description', features: ['Local & Federal Compliance', 'Regulatory Agency Liaison', 'Entitlement Support'] },
    { title: 'Construction Phase', icon: 'architecture', features: ['Shop Drawing Reviews', 'Material Submittals', 'Site Inspections'] },
    { title: 'Construction Management', icon: 'engineering', features: ['Quality Assurance/Control', 'Schedule Optimization', 'Safety Compliance Audits'] },
    { title: 'Program Management', icon: 'assignment_turned_in', features: ['Portfolio-wide Strategy', 'Capital Planning', 'Stakeholder Integration'] }
  ];

  return (
    <div>
      {/* Blueprint Hero */}
      <section className="relative py-24 md:py-32 flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            alt="Technical engineering blueprints" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI2oItfvWX0uFD2JRRCNXeoEHogJlYCJbn8tHhRKMPGDNaZ2u4nNInWGIMGuJmXAlCx_8YJI808y3k12fsTZSrl2DJSyhRDoQ6-tg4eOZbnqP9Ed0iwCcSKUVkq2LkW6f0WjKL6dD-oNcL3sFpbaYTqckfW8yyF2GADYWkrfZ7HQ6OdZnsLpRSEypextz-lQd6FaM8NXYVDSa2qNUEuOCThPymbuk2w5xSBatJE-H5iuDBl1itZ8K0oHfbQDpcN7-NbwjRtt05Qg" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Our Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Comprehensive <span className="text-blue-400">Engineering Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              From conceptual studies to final construction management, we deliver technical precision across the entire infrastructure lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 relative z-20">
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Looking for a specialized solution?</h2>
            <p className="text-blue-100 opacity-90">Our engineers are ready to tackle your most complex infrastructure challenges.</p>
          </div>
          <button className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 whitespace-nowrap">
            Talk to an Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
