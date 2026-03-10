import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
      { name: 'Our Story', path: '/about#overview' },
      { name: 'Core Values', path: '/about#core-values' },
      { name: 'Why Choose KAVI', path: '/about#why-choose-kavi' },
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  // Tracks previous pathname so we only auto-scroll to a hash on cross-page navigation
  const prevPathnameRef = useRef<string>('');

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));

  const scrollToHashTarget = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

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
  };

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  // Close mobile nav entirely on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
  }, [location.pathname]);

  // Handle scrolling when navigating to a new page that has a hash.
  // For same-page hash changes, handleSubLinkClick scrolls directly so we
  // deliberately skip this effect to prevent a double-scroll.
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | undefined;

    const pathChanged = prevPathnameRef.current !== location.pathname;
    prevPathnameRef.current = location.pathname;

    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (pathChanged) {
        // Cross-page navigation: wait for the new page's DOM (including any
        // sticky sub-navs) to fully render before scrolling.
        scrollTimeout = setTimeout(() => {
          scrollToHashTarget(id);
        }, 300);
      }
      // Same-page hash change: scrolling is handled directly by
      // handleSubLinkClick (or by the page's own subnav via scrollToSection).
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [location.pathname, location.hash]);

  const handleSubLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const [targetPath, targetHash] = path.split('#');

    // If we're already on the same page, scroll directly without relying on
    // the useEffect (which now only fires on cross-page navigation to avoid
    // double-scrolling with pages that have their own subnav).
    if (location.pathname === targetPath && targetHash) {
      e.preventDefault();

      // Always scroll immediately so the user sees the response right away
      scrollToHashTarget(targetHash);

      // Update the URL hash if it changed (keeps the back button and
      // dropdown active-state in sync, but does NOT trigger another scroll
      // because pathChanged will be false in the useEffect)
      if (location.hash !== `#${targetHash}`) {
        navigate({ pathname: targetPath, hash: `#${targetHash}` });
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
                          const [subPath, subHash] = sub.path.split('#');
                          const subActive = location.pathname === subPath && (subHash ? location.hash === `#${subHash}` : !location.hash);
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
