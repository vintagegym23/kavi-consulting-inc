
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/kavilogo.png';


const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Who We Are', path: '/about' },
    
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="Kavi Consulting Inc Logo"
    className="h-10 w-auto object-contain"
  />


</Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact"
              className="hidden sm:block bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Get a Quote
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-600 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
