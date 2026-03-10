import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/kavilogo.png';

/* ── Inline SVG social icons (no external icon lib needed) ── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/company/kavi-consulting', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0d1b2e] text-white relative overflow-hidden">

      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Top accent gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

      {/* ── Main Footer Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 justify-items-start md:justify-items-center">

          {/* COL 1 — Logo + Tagline + Social */}
          <div className="space-y-6">
            {/* Logo */}
            <Link to="/" aria-label="KAVI Consulting Inc — Home">
              <img
                src={logo}
                alt="KAVI Consulting Inc"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-service civil engineering consultancy delivering precision-built infrastructure from concept to completion across Texas and beyond.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2 — Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-blue-500 rounded-full inline-block" />
              Contact
            </h4>
            <ul className="space-y-5">
              {[
                {
                  icon: 'location_on',
                  lines: ['1011 Highway 6S #307 Houston TX 77077'],
                  href: 'https://maps.google.com/?q=1011+Highway+6S+%23307+Houston+TX+77077',
                },
                {
                  icon: 'call',
                  lines: ['+1 281-809-3043'],
                  href: 'tel:+1 281-809-3043',
                },
                {
                  icon: 'mail',
                  lines: ['info@kaviconsultinginc.com'],
                  href: 'mailto:info@kaviconsultinginc.com',
                },
              ].map(({ icon, lines, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-blue-400 flex-shrink-0 mt-0.5"
                    style={{ fontSize: 17, fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                  <div>
                    {lines.map((line, j) =>
                      href && j === 0 ? (
                        <a
                          key={j}
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-slate-400 text-sm hover:text-blue-300 transition-colors leading-relaxed block"
                        >
                          {line}
                        </a>
                      ) : (
                        <span key={j} className="text-slate-400 text-sm leading-relaxed block">{line}</span>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">

            {/* Copyright */}
            <p>
              © {new Date().getFullYear()} KAVI Consulting, Inc. All rights reserved.
            </p>

            {/* Designed by */}
            <div className="flex items-center gap-1.5">
              <span>Designed &amp; Developed by</span>
              <a
                href="https://www.claratechitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Claratech IT Solutions Pvt Ltd
              </a>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-slate-300 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
