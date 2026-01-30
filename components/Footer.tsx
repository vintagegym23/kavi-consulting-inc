import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-white"></div>
              </div>
              <span className="text-lg font-extrabold text-slate-900 uppercase">
                Kavi Consulting Inc
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Excellence in civil engineering and construction management. Precision-built infrastructure for the next generation.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">
              Services
            </h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Transportation Planning</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Water Management</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Structural Analysis</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Land Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Our Team</Link></li>
              <li><Link to="/projects" className="text-sm text-slate-500 hover:text-primary transition-colors">Project Portfolio</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">News & Press</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">
              Connect
            </h4>
            <p className="text-sm text-slate-500">
              Subscribe to our technical insights newsletter.
            </p>
            <div className="flex items-stretch shadow-sm">
              <input 
                className="flex-1 bg-slate-50 border-none rounded-l-lg focus:ring-1 focus:ring-primary text-sm px-4 py-3 placeholder:text-slate-400" 
                placeholder="Email" 
                type="email" 
              />
              <button className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </div>
        </div>


        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
  <p className="text-xs text-slate-400">
    © 2026 Kavi Consulting Inc. All rights reserved.
  </p>



  {/* Designed & Developed */}
  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-xs text-slate-400">
    <span>Designed and Developed by</span>
    <a 
      href="https://www.claratechitsolutions.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-primary font-semibold"
    >
      Claratech IT Solutions Pvt Ltd
    </a>
  </div>
    {/* Links */}
  <div className="flex gap-6">
    <a href="#" className="text-xs text-slate-400 hover:text-primary">Privacy Policy</a>
    <a href="#" className="text-xs text-slate-400 hover:text-primary">Terms of Service</a>
    <a href="#" className="text-xs text-slate-400 hover:text-primary">Sitemap</a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
