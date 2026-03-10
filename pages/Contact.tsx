import React, { useState, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';

type NotificationType = 'success' | 'error' | null;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');
  }, []);

  useEffect(() => {
    if (notification) {
      const t = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(t);
    }
  }, [notification]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Valid email required';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        { from_name: formData.name, email: formData.email, subject: formData.subject, message: formData.message }
      );
      setNotification('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setNotification('error');
    } finally {
      setIsSending(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const inputCls = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${formErrors[field] ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
    }`;

  const contactItems = [
    {
      icon: 'location_on', title: 'Houston Office',
      lines: ['1011 Highway 6S #307', 'Houston, Texas 77077'],
      href: 'https://maps.google.com/?q=1011+Highway+6S+%23307+Houston+TX+77077',
      action: 'Get Directions', color: '#2563eb',
    },
    {
      icon: 'call', title: 'Phone',
      lines: ['+1 (281) 809-3043'],
      href: 'tel:+12818093043', action: 'Call Now', color: '#059669',
    },
    {
      icon: 'mail', title: 'Email',
      lines: ['info@kaviconsulting.com'],
      href: 'mailto:info@kaviconsulting.com', action: 'Send Email', color: '#7c3aed',
    },
  ];

  return (
    <div className="bg-white">

      {/* ── Toast ── */}
      {notification && (
        <div className={`fixed top-4 right-4 z-[200] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 text-white ${notification === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          <span className="material-symbols-outlined">{notification === 'success' ? 'check_circle' : 'error'}</span>
          <p className="font-semibold text-sm">{notification === 'success' ? "Message sent! We'll be in touch soon." : 'Failed to send. Please try again.'}</p>
          <button onClick={() => setNotification(null)} aria-label="Dismiss" className="ml-2 hover:opacity-70">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative py-28 md:py-36 flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            alt="Houston city at night"
            className="w-full h-full object-cover opacity-25"
            src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(66,153,225,1) 1px, transparent 1px), linear-gradient(90deg, rgba(66,153,225,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Our expert team is ready to discuss your civil engineering and infrastructure needs.
          </p>
        </div>
      </section>

      {/* ── Contact Body ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT — Info + Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Office Information</h2>
              </div>

              {/* Info Cards */}
              <div className="grid gap-4">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}15` }}
                    >
                      <span
                        className="material-symbols-outlined text-xl"
                        style={{ color: item.color, fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-slate-500 text-sm leading-relaxed">{line}</p>
                      ))}
                      {item.href && item.action && (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: item.color }}
                        >
                          {item.action}
                          <span className="material-symbols-outlined" style={{ fontSize: 13 }}>arrow_forward</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Link Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: 'work', label: 'LinkedIn', href: 'https://linkedin.com/company/kavi-consulting' },
                  { icon: 'map', label: 'Get Directions', href: 'https://maps.google.com/?q=1011+Highway+6S+%23307+Houston+TX+77077' },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-primary hover:text-primary hover:shadow-md transition-all"
                  >
                    <span className="material-symbols-outlined text-base">{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-7 relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/10" />
                  <div className="absolute -left-4 -bottom-8 w-24 h-24 rounded-full bg-blue-500/5" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-extrabold text-white mb-1">Send Us a Message</h3>
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputCls('name')} />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="contact-email">Email Address *</label>
                      <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" className={inputCls('email')} />
                      {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="contact-subject">Subject *</label>
                    <input id="contact-subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry — Drainage Design" className={inputCls('subject')} />
                    {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and scope..." className={`${inputCls('message')} resize-none`} />
                    {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-primary hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    {isSending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined text-xl">send</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>

          </div>

          {/* ── Live Google Maps Embed (Full Width) ── */}
          <div className="mt-16 relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-lg" style={{ height: 450 }}>
            {/* Map action overlay bar */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 bg-white/96 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-md border border-slate-100 min-w-0">
                <span
                  className="material-symbols-outlined text-primary flex-shrink-0"
                  style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <span className="text-sm font-bold text-slate-700 truncate">1011 Highway 6S #307 · Houston, TX</span>
              </div>
              <a
                href="https://maps.google.com/?q=1011+Highway+6S+%23307+Houston+TX+77077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-blue-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-md transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                Open in Maps
              </a>
            </div>

            {/* Actual Google Maps embed — 1011 Highway 6S #307, Houston TX 77077 */}
            <iframe
              title="KAVI Consulting Inc — Houston Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5!2d-95.6413!3d29.7388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3e1a7b5c8e7%3A0x1!2s1011%20Highway%206S%20%23307%2C%20Houston%2C%20TX%2077077!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
