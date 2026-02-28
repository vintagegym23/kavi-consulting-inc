import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import logo from '../images/kavilogo.png';

type NotificationType = 'success' | 'error' | null;

/* ── Inline SVG social icons (no external icon lib needed) ── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);



const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');
  }, []);

  useEffect(() => {
    if (notification) {
      const t = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(t);
    }
  }, [notification]);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSending) return;
    setIsSending(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
      {
        user_email: email,
        message: 'Newsletter subscription request from footer.',
        to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'dineshb07143@gmail.com',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    )
      .then(() => { setNotification('success'); setSubscribed(true); setEmail(''); })
      .finally(() => setIsSending(false));
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Feasibility Studies', to: '/services#feasibility-studies' },
    { label: 'Transport Engineering', to: '/services#transport-engineering' },
    { label: 'Drainage Design', to: '/services#drainage-design' },
    { label: 'Utility Design', to: '/services#utility-design' },
    { label: 'Construction', to: '/services#construction' },
    { label: 'District Engineering', to: '/services#district-engineering' },
    { label: 'Site Development', to: '/services#site-development' },
    { label: 'Program Management', to: '/services#program-management' },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/company/kavi-consulting', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0d1b2e] text-white relative overflow-hidden">

      {/* Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-[200] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 text-white ${notification === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          <span className="material-symbols-outlined">{notification === 'success' ? 'check_circle' : 'error'}</span>
          <p className="font-semibold text-sm">
            {notification === 'success' ? "You're subscribed! We'll keep you updated." : 'Failed to subscribe. Please try again.'}
          </p>
          <button onClick={() => setNotification(null)} aria-label="Dismiss" className="ml-2 hover:opacity-70">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 justify-items-start md:justify-items-center">

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

            {/* Certification badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs font-semibold">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              MBE Certified · DBE Certified
            </div>

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

          {/* COL 2 — Quick Navigation
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-blue-500 rounded-full inline-block" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="material-symbols-outlined text-xs text-blue-500/40 group-hover:text-blue-400 transition-colors" style={{ fontSize: 12 }}>
                      chevron_right
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* COL 3 — Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-blue-500 rounded-full inline-block" />
              Contact
            </h4>
            <ul className="space-y-5">
              {[
                {
                  icon: 'location_on',
                  lines: ['1200 Smith Street, Suite 1600', 'Houston, Texas 77002'],
                  href: 'https://maps.google.com/?q=1200+Smith+Street+Houston+TX',
                },
                {
                  icon: 'call',
                  lines: ['+1 (713) 555-0198'],
                  href: 'tel:+17135550198',
                },
                {
                  icon: 'mail',
                  lines: ['contact@kaviconsulting.com'],
                  href: 'mailto:contact@kaviconsulting.com',
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

          {/* COL 4 — Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-blue-500 rounded-full inline-block" />
              Stay Updated
            </h4>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Get the latest infrastructure insights, project highlights, and industry news straight to your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm font-semibold">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                You're subscribed!
              </div>
            ) : (
              <form onSubmit={handleConnect} className="space-y-3">
                <label htmlFor="footer-email" className="sr-only">Email address for updates</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" style={{ fontSize: 17 }}>
                    mail
                  </span>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-bold py-3 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                >
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">send</span>
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Services quick links below subscribe
            <div className="mt-8">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">Our Services</p>
              <ul className="space-y-2">
                {serviceLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-500 text-xs hover:text-blue-300 transition-colors leading-relaxed"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
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