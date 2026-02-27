
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Contact Hero */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="City planning" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1JYgoF7E4QTwNW1BRNtIQ47zWWQJ0IEyGD2Vj7umwa-59XAfaWnsNOAXnV4I1XHxnmUTegJZzenDky2Ro0sWyYLbA8-rEuP82iHf-xgsmmQLilqTt94pR2cVlnIFWmEW5cOI4Zz6jfOwwr181hXYw67K2f05t11scjbHft_qzfMRA0UrdEhQ5wMC2fDr_RDul_3O3F7wc9AkWfw8_axFU7eM3J9PnuLexAbVLjmQljqVS9s1dkHFVOaUeaPNeH49hk_Z1QkIjg" />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? Our expert team is ready to discuss your civil engineering and infrastructure needs.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Office Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  Visit our headquarters or reach out via phone or email. Our technical team is available for consultations Monday through Friday.
                </p>
              </div>
              <div className="grid gap-8">
                {[
                  { icon: 'location_on', title: 'Houston Office', val: '1200 Smith Street, Suite 1600\nHouston, Texas 77002' },
                  { icon: 'call', title: 'Phone', val: '+1 (713) 555-0198' },
                  { icon: 'mail', title: 'Email Address', val: 'contact@kaviconsulting.com' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 mt-1 whitespace-pre-line">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Fake Map */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 relative shadow-inner group">
                <img 
                  alt="Map" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqSfdbPKboTLF1TWSgTAfkO4yfCvmYMwvn-vjlqXmSiIWDaQ0ftQ-tbXh0BmEw4LXjZoC2hHnan9TJimmpDBNXk6TTN3fxDH402l7tKasYL9re_L0iFL7J977CWMj7QBhkBrudo_WdjPvFDzSbR-Qqh4Oj4tXttcLZr28DXpLsae4tuLXJhOn_10sNJn6h14GkkdKdTyJGvG8KpeW3iDM8YK_9S1-eAqPf-2huO0MT2zE5Z2us7KJK0i_5Qwb7ljy-tYQDLYR2KA" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-2xl animate-bounce">
                    <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="full-name">Full Name</label>
                    <input className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-primary focus:border-primary transition-all" id="full-name" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="email-address">Email Address</label>
                    <input className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-primary focus:border-primary transition-all" id="email-address" placeholder="john@example.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="subject">Subject</label>
                  <input className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-primary focus:border-primary transition-all" id="subject" placeholder="Project Inquiry" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-primary focus:border-primary transition-all" id="message" placeholder="Tell us about your project..." rows={6}></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                  Send Message
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </form>
              <p className="text-xs text-slate-400 mt-6 text-center">
                Our team typically responds within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
