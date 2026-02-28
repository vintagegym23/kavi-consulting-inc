import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/kavilogo.png';

interface SubLink {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '/about',
    subLinks: [
      { name: 'Company Overview', path: '/about#overview' },
      { name: 'History', path: '/about#history' },
      { name: 'Leadership', path: '/about#leadership' },
      { name: 'Certifications', path: '/about#certifications' },
      { name: 'Trusted By', path: '/about#content-end-marker' },
    ]
  },
  {
    name: 'Services',
    path: '/services',
    subLinks: [
      { name: 'Feasibility Studies', path: '/services#feasibility-studies' },
      { name: 'Transport Engineering', path: '/services#transport-engineering' },
      { name: 'Drainage Design', path: '/services#drainage-design' },
      { name: 'Utility Design', path: '/services#utility-design' },
      { name: 'Construction', path: '/services#construction' },
      { name: 'District Engineering', path: '/services#district-engineering' },
      { name: 'Site Development', path: '/services#site-development' },
      { name: 'Program Management', path: '/services#program-management' },
    ]
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  // Close mobile nav entirely on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
  }, [location.pathname]);

  // Handle scrolling when hash changes or page loads with a hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      // Longer delay to allow the new page's DOM (including sticky sub-navs) to fully render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // On /services the page has an extra sticky sub-nav (~52px), account for it
          const subNavEl = document.querySelector('[data-subnav]') as HTMLElement | null;
          const subNavHeight = subNavEl ? subNavEl.offsetHeight : 0;
          const navHeight = 80 + subNavHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight - 8;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Accessibility focus
          element.setAttribute('tabindex', '-1');
          element.focus({ preventScroll: true });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  const handleSubLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const [targetPath, targetHash] = path.split('#');

    // If we're already on the same page, manually handle the smooth scroll
    if (location.pathname === targetPath && targetHash) {
      e.preventDefault();

      // Update URL hash without causing a page jump
      window.history.pushState(null, '', path);

      const element = document.getElementById(targetHash);
      if (element) {
        // Account for any sticky sub-nav present on the current page
        const subNavEl = document.querySelector('[data-subnav]') as HTMLElement | null;
        const subNavHeight = subNavEl ? subNavEl.offsetHeight : 0;
        const navHeight = 80 + subNavHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight - 8;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        element.setAttribute('tabindex', '-1');
        element.focus({ preventScroll: true });
      }

      setIsOpen(false);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-transform hover:scale-[1.02]">
            <img src={logo} alt="Kavi Consulting Inc Logo" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary
                      ${active ? 'text-primary' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}
                    aria-haspopup={link.subLinks ? "true" : "false"}
                  >
                    {link.name}
                    {link.subLinks && (
                      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-180">
                        keyboard_arrow_down
                      </span>
                    )}
                  </Link>

                  {/* Dropdown Menu (Desktop CSS-Based for Zero Layout Shift & Flicker Prevention) */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-300 ease-out z-[110] before:absolute before:top-0 before:left-0 before:w-full before:h-4">
                      {/* ^ "before:" pseudo-element bridges the gap to prevent cursor flicker when transitioning from link to dropdown */}
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-3 flex flex-col max-h-[70vh] overflow-y-auto custom-dropdown-scrollbar">
                        {link.subLinks.map((sub, idx) => {
                          const subActive = location.hash === sub.path.split('#')[1] || location.pathname === sub.path;
                          return (
                            <Link
                              key={idx}
                              to={sub.path}
                              onClick={(e) => handleSubLinkClick(e, sub.path)}
                              className={`block px-5 py-2.5 text-sm font-medium transition-colors outline-none focus-visible:bg-slate-50 focus-visible:text-primary ${subActive ? 'text-primary bg-blue-50/50 border-l-2 border-primary' : 'text-slate-600 hover:text-primary hover:bg-slate-50 border-l-2 border-transparent'
                                }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 rounded-xl hover:bg-slate-50 outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95 transition-all"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl z-[90] ${isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col py-4 px-4 overflow-y-auto max-h-[80vh] custom-dropdown-scrollbar">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-50 last:border-0 relative">
              {link.subLinks ? (
                <>
                  <div className="flex flex-col w-full">
                    {/* Container separating Name and Toggle */}
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex-1 py-4 text-base font-bold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-slate-800 active:bg-slate-50'
                          }`}
                      >
                        {link.name}
                      </Link>

                      {/* Wide clickable zone for the toggler */}
                      <button
                        onClick={(e) => toggleMobileDropdown(link.name, e)}
                        className={`p-4 mx-[-1rem] px-6 text-slate-500 hover:text-primary outline-none transition-colors ${mobileDropdownOpen === link.name ? 'text-primary bg-slate-50/50 rounded-lg' : ''
                          }`}
                        aria-expanded={mobileDropdownOpen === link.name}
                      >
                        <span className={`material-symbols-outlined transition-transform duration-300 ${mobileDropdownOpen === link.name ? 'rotate-180 text-primary font-bold' : ''
                          }`}>
                          expand_more
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Sublinks Accordion */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdownOpen === link.name ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="flex flex-col pl-4 border-l-2 border-primary/20 space-y-1 mt-1">
                      {link.subLinks.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          onClick={(e) => handleSubLinkClick(e, sub.path)}
                          className="block py-3 px-3 text-sm font-semibold text-slate-500 hover:text-primary hover:bg-slate-50 rounded-xl transition-all active:scale-[0.98]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 text-base font-bold transition-all active:scale-[0.99] ${isActive(link.path) ? 'text-primary' : 'text-slate-800 hover:text-primary active:bg-slate-50 rounded-xl'
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .custom-dropdown-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 8px;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
