import React, { useState, useEffect, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';

// --- Types ---
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

interface ServiceCategory {
  title: string;
  icon: string;
  features: string[];
}

type NotificationType = 'success' | 'error' | null;

// --- Data (Exact technical points preserved) ---
const serviceCategories: ServiceCategory[] = [
  { 
    title: 'Transportation', 
    icon: 'traffic', 
    features: [
      'Roadway & Intersection Geometrics', 
      'Traffic Signal Impact Analysis', 
      'ADA-Compliant Pedestrian Infrastructure', 
      'Construction Sequencing'
    ] 
  },
  { 
    title: 'Drainage Design', 
    icon: 'waves', 
    features: [
      'H&H Modeling', 
      'Floodplain Analysis', 
      'Storm Water Management Modeling', 
      'Bridge Hydraulics & Scour Analysis', 
      'Drainage Facilities & Detention Design' 
    ] 
  },
  { 
    title: 'Utility Design', 
    icon: 'plumbing', 
    features: [
      'Water & Sewer Systems', 
      'Underground Infrastructure', 
      'Utility Coordination (Public/Private)'
    ] 
  },
  { 
    title: 'Feasibility Studies', 
    icon: 'query_stats', 
    features: [
      'Preliminary Design', 
      'Site Selection Audits', 
      'Environmental Constraints', 
      'Stakeholder Coordination and Public Impact' 
    ] 
  },
  { 
    title: 'Permitting', 
    icon: 'verified', 
    features: [
      'Right-of-way and Easement Coordination', 
      'Local, State & Federal Compliance', 
      'Regulatory Agency Liaison', 
      'Entitlement Support'
    ] 
  },
  { 
    title: 'Construction Phase', 
    icon: 'imagesearch_roller', 
    features: [
      'Shop Drawing Reviews', 
      'Material Submittals', 
      'Site/Construction Inspections'
    ] 
  },
  { 
    title: 'Construction Management', 
    icon: 'engineering', 
    features: [
      'Quality Assurance/Control', 
      'Schedule Optimization', 
      'Safety Compliance Audits'
    ] 
  },
  { 
    title: 'Program Management', 
    icon: 'account_tree', 
    features: [
      'Portfolio-wide Strategy', 
      'Capital Planning', 
      'Stakeholder Integration'
    ] 
  },
  { 
    title: 'Site Development', 
    icon: 'foundation', 
    features: [
      'Grading & Drainage Plans', 
      'Erosion & Sediment Control', 
      'Commercial & Industrial'
    ] 
  },
];

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setFormErrors({});
  }, []);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    emailjs.init(publicKey);
  }, []);

  // Task: Auto-hide notification toast after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer); // Cleanup if component unmounts or notification changes
    }
  }, [notification]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) setFormErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSending(true);

    const templateParams = {
      from_name: formData.name, 
      phone: formData.phone || 'Not provided', 
      email: formData.email, 
      message: formData.message,
      to_email: 'dineshb07143@gmail.com'
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams
      );
      setNotification('success');
      closeModal();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setNotification('error');
    } finally { setIsSending(false); }
  };

  return (
    <div className="bg-white">
      {/* Toast Notification with manual close button and auto-hide logic */}
      {notification && (
        <div className={`fixed top-4 right-4 z-[60] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-5 duration-300 ${notification === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
          <span className="material-symbols-outlined">{notification === 'success' ? 'check_circle' : 'error'}</span>
          <p className="font-medium">{notification === 'success' ? 'Message sent! Our team will contact you soon.' : 'Failed to send message.'}</p>
          <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-70 transition-opacity">
             <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* Hero */}
      <section className="relative py-24 md:py-32 flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-15">
          <img alt="Blueprints" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI2oItfvWX0uFD2JRRCNXeoEHogJlYCJbn8tHhRKMPGDNaZ2u4nNInWGIMGuJmXAlCx_8YJI808y3k12fsTZSrl2DJSyhRDoQ6-tg4eOZbnqP9Ed0iwCcSKUVkq2LkW6f0WjKL6dD-oNcL3sFpbaYTqckfW8yyF2GADYWkrfZ7HQ6OdZnsLpRSEypextz-lQd6FaM8NXYVDSa2qNUEuOCThPymbuk2w5xSBatJE-H5iuDBl1itZ8K0oHfbQDpcN7-NbwjRtt05Qg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Comprehensive Engineering Solutions</h1>
          <p className="text-lg text-slate-300 max-w-2xl">From conceptual studies to final construction management, delivering technical precision.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                
                <div className={`pr-2 custom-scrollbar ${service.features.length > 3 ? 'max-h-36 overflow-y-auto' : ''}`}>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">check_circle</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 relative z-20">
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Looking for a specialized solution?</h2>
          <button onClick={() => setIsModalOpen(true)} className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95 whitespace-nowrap">Talk to an Expert</button>
        </div>
      </section>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div ref={modalRef} className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl relative animate-in zoom-in-95">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-slate-500 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined">close</span></button>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Talk to an Expert</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input ref={firstInputRef} required name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.name ? 'border-red-400' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Full Name *" />
                {formErrors.name && <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.name}</p>}
              </div>

              <div>
                <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.phone ? 'border-red-400' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Phone Number (+1 123-456-7890)" />
                {formErrors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.phone}</p>}
              </div>

              <div>
                <input required name="email" type="email" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-xl border ${formErrors.email ? 'border-red-400' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Email Address *" />
                {formErrors.email && <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.email}</p>}
              </div>

              <div>
                <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={4} className={`w-full px-4 py-3 rounded-xl border ${formErrors.message ? 'border-red-400' : 'border-slate-200'} outline-none resize-none focus:ring-2 focus:ring-primary/20`} placeholder="How can we help you? *"></textarea>
                {formErrors.message && <p className="text-red-500 text-xs mt-1 ml-1">{formErrors.message}</p>}
              </div>

              <button type="submit" disabled={isSending} className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg transition-all disabled:opacity-50">
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
};

export default Services;