// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Footer: React.FC = () => {
// // //   return (
// // //     <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// // //           <div className="space-y-6">
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
// // //                 <div className="w-3 h-3 bg-white"></div>
// // //               </div>
// // //               <span className="text-lg font-extrabold text-slate-900 uppercase">
// // //                 Kavi Consulting Inc
// // //               </span>
// // //             </div>
// // //             <p className="text-slate-500 text-sm leading-relaxed">
// // //               Excellence in civil engineering and construction management. Precision-built infrastructure for the next generation.
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">
// // //               Services
// // //             </h4>
// // //             <ul className="space-y-4">
// // //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Transportation Planning</Link></li>
// // //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Water Management</Link></li>
// // //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Structural Analysis</Link></li>
// // //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Land Development</Link></li>
// // //             </ul>
// // //           </div>

// // //           <div>
// // //             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">
// // //               Company
// // //             </h4>
// // //             <ul className="space-y-4">
// // //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Our Team</Link></li>
// // //               <li><Link to="/projects" className="text-sm text-slate-500 hover:text-primary transition-colors">Project Portfolio</Link></li>
// // //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
// // //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">News & Press</Link></li>
// // //             </ul>
// // //           </div>

// // //           <div className="space-y-6">
// // //             <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">
// // //               Connect
// // //             </h4>

// // //             <div className="flex items-stretch shadow-sm">
// // //               <input 
// // //                 className="flex-1 bg-slate-50 border-none rounded-l-lg focus:ring-1 focus:ring-primary text-sm px-4 py-3 placeholder:text-slate-400" 
// // //                 placeholder="Email" 
// // //                 type="email" 
// // //               />
// // //               <button className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center">
// // //                 <span className="material-symbols-outlined text-xl">send</span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>


// // //         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
// // //   <p className="text-xs text-slate-400">
// // //     © 2026 Kavi Consulting Inc. All rights reserved.
// // //   </p>



// // //   {/* Designed & Developed */}
// // //   <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-xs text-slate-400">
// // //     <span>Designed and Developed by</span>
// // //     <a 
// // //       href="https://www.claratechitsolutions.com/" 
// // //       target="_blank" 
// // //       rel="noopener noreferrer"
// // //       className="hover:text-primary font-semibold"
// // //     >
// // //       Claratech IT Solutions Pvt Ltd
// // //     </a>
// // //   </div>
// // //     {/* Links */}
// // //   <div className="flex gap-6">
// // //     <a href="#" className="text-xs text-slate-400 hover:text-primary">Privacy Policy</a>
// // //     <a href="#" className="text-xs text-slate-400 hover:text-primary">Terms of Service</a>
// // //     <a href="#" className="text-xs text-slate-400 hover:text-primary">Sitemap</a>
// // //   </div>
// // // </div>

// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import emailjs from '@emailjs/browser';

// // const Footer: React.FC = () => {
// //   const [email, setEmail] = useState('');

// //   const handleSubscribe = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!email) return;

// //     const templateParams = { user_email: email, to_email: 'dineshb07143@gmail.com' };
    
// //     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
// //       .then(() => {
// //         alert('Thank you for connecting!');
// //         setEmail('');
// //       });
// //   };

// //   return (
// //     <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// //           <div className="space-y-6">
// //              <div className="flex items-center gap-2">
// //                <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
// //                  <div className="w-3 h-3 bg-white"></div>
// //                </div>
// //                <span className="text-lg font-extrabold text-slate-900 uppercase">Kavi Consulting Inc</span>
// //              </div>
// //              [cite_start]<p className="text-slate-500 text-sm leading-relaxed">Excellence in civil engineering and construction management[cite: 1].</p>
// //           </div>

// //           <div>
// //             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
// //             <ul className="space-y-4">
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Transportation Planning</Link></li>
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Water Management</Link></li>
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Structural Analysis</Link></li>
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Land Development</Link></li>
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
// //             <ul className="space-y-4">
// //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Our Team</Link></li>
// //               <li><Link to="/projects" className="text-sm text-slate-500 hover:text-primary transition-colors">Project Portfolio</Link></li>
// //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
// //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">News & Press</Link></li>
// //             </ul>
// //           </div>

// //           <div className="space-y-6">
// //             <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">Connect</h4>
// //             <form onSubmit={handleSubscribe} className="flex items-stretch shadow-sm">
// //               <input className="flex-1 bg-slate-50 border-none rounded-l-lg focus:ring-1 focus:ring-primary text-sm px-4 py-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //               <button type="submit" className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors">
// //                 <span className="material-symbols-outlined text-xl">send</span>
// //               </button>
// //             </form>
// //           </div>
// //         </div>
        
// //         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
// //           <p>© 2026 Kavi Consulting Inc. All rights reserved.</p>
// //           <div className="flex gap-6">
// //             <a href="#" className="hover:text-primary">Privacy Policy</a>
// //             <a href="#" className="hover:text-primary">Terms of Service</a>
// //             <a href="#" className="hover:text-primary">Sitemap</a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import emailjs from '@emailjs/browser';

// // const Footer: React.FC = () => {
// //   const [email, setEmail] = useState('');

// //   const handleConnect = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!email) return;

// //     // EmailJS: Send "Hello!" from the user's email to owner
// //     const templateParams = {
// //       user_email: email,
// //       message: "Hello!",
// //       to_email: 'dineshb07143@gmail.com'
// //     };

// //     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
// //       .then(() => {
// //         alert('Thank you! Your message has been sent to our team.');
// //         setEmail('');
// //       })
// //       .catch((err) => console.error('Failed to send:', err));
// //   };

// //   return (
// //     <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
// //           <div className="space-y-6">
// //             <span className="text-lg font-extrabold text-slate-900 uppercase">Kavi Consulting Inc</span>
// //             <p className="text-slate-500 text-sm leading-relaxed">Excellence in civil engineering and construction management.</p>
// //           </div>

// //           <div>
// //             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
// //             <ul className="space-y-4">
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Transportation Planning</Link></li>
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Water Management</Link></li>
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Structural Analysis</Link></li>
// //               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Land Development</Link></li>
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
// //             <ul className="space-y-4">
// //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Our Team</Link></li>
// //               <li><Link to="/projects" className="text-sm text-slate-500 hover:text-primary transition-colors">Project Portfolio</Link></li>
// //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
// //               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">News & Press</Link></li>
// //             </ul>
// //           </div>

// //           <div className="space-y-6">
// //             <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">Connect</h4>
// //             <form onSubmit={handleConnect} className="flex items-stretch shadow-sm">
// //               <input 
// //                 className="flex-1 bg-slate-50 border-none rounded-l-lg focus:ring-1 focus:ring-primary text-sm px-4 py-3" 
// //                 placeholder="Email" 
// //                 type="email" 
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //               <button type="submit" className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center">
// //                 <span className="material-symbols-outlined text-xl">send</span>
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
// //           <p>© 2026 Kavi Consulting Inc. All rights reserved.</p>
// //           <div className="flex gap-6">
// //             <a href="#" className="hover:text-primary">Privacy Policy</a>
// //             <a href="#" className="hover:text-primary">Terms of Service</a>
// //             <a href="#" className="hover:text-primary">Sitemap</a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import emailjs from '@emailjs/browser';

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [isSending, setIsSending] = useState(false);

//   const handleConnect = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || isSending) return;

//     setIsSending(true);

//     // Prepare data for your EmailJS Template
//     // Ensure your template body contains {{user_email}} and {{message}}
//     const templateParams = {
//       user_email: email,
//       message: "Hello! A new user wants to connect with Kavi Consulting Inc.",
//       to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'dineshb07143@gmail.com'
//     };

//     emailjs.send(
//       import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
//       import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
//       templateParams,
//       import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
//     )
//       .then(() => {
//         alert('Thank you! Your message has been sent to our team.');
//         setEmail('');
//       })
//       .catch((err) => {
//         console.error('Failed to send:', err);
//         alert('Failed to send request. Please try again.');
//       })
//       .finally(() => {
//         setIsSending(false);
//       });
//   };

//   return (
//     <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
//           {/* Company Identity */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
//                 <div className="w-3 h-3 bg-white"></div>
//               </div>
//               <span className="text-lg font-extrabold text-slate-900 uppercase">
//                 Kavi Consulting Inc
//               </span>
//             </div>
//             <p className="text-slate-500 text-sm leading-relaxed">
//               Excellence in civil engineering and construction management. Precision-built infrastructure for the next generation.
//             </p>
//           </div>

//           {/* Services Links */}
//           <div>
//             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">
//               Services
//             </h4>
//             <ul className="space-y-4">
//               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Transportation Planning</Link></li>
//               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Water Management</Link></li>
//               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Structural Analysis</Link></li>
//               <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Land Development</Link></li>
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">
//               Company
//             </h4>
//             <ul className="space-y-4">
//               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Our Team</Link></li>
//               <li><Link to="/projects" className="text-sm text-slate-500 hover:text-primary transition-colors">Project Portfolio</Link></li>
//               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
//               <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">News & Press</Link></li>
//             </ul>
//           </div>

//           {/* Connect Section */}
//           <div className="space-y-6">
//             <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">
//               Connect
//             </h4>
//             <form onSubmit={handleConnect} className="flex items-stretch shadow-sm">
//               <input 
//                 className="flex-1 bg-slate-50 border-none rounded-l-lg focus:ring-1 focus:ring-primary text-sm px-4 py-3 placeholder:text-slate-400 outline-none" 
//                 placeholder="Email" 
//                 type="email" 
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button 
//                 type="submit" 
//                 disabled={isSending}
//                 className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center disabled:opacity-50"
//               >
//                 <span className="material-symbols-outlined text-xl">
//                   {isSending ? 'hourglass_empty' : 'send'}
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
//           <p>© 2026 Kavi Consulting Inc. All rights reserved.</p>
          
//           <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
//             <span>Designed and Developed by</span>
//             <a 
//               href="https://www.claratechitsolutions.com/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="hover:text-primary font-semibold"
//             >
//               Claratech IT Solutions Pvt Ltd
//             </a>
//           </div>

//           <div className="flex gap-6">
//             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
//             <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

type NotificationType = 'success' | 'error' | null;

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(null);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    emailjs.init(publicKey);
  }, []);

  // Auto-hide toast notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSending) return;

    setIsSending(true);

    const templateParams = {
      user_email: email,
      message: "Hello! A new user wants to connect with Kavi Consulting Inc.",
      to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'dineshb07143@gmail.com'
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setNotification('success'); // Replaces standard alert
        setEmail('');
      })
      .catch((err) => {
        console.error('Failed to send:', err);
        setNotification('error'); // Replaces standard alert
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100 relative">
      {/* Toast Notification Container */}
      {notification && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${
          notification === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`}>
          <span className="material-symbols-outlined">
            {notification === 'success' ? 'check_circle' : 'error'}
          </span>
          <p className="font-medium">
            {notification === 'success' 
              ? 'Thank you! Your message has been sent.' 
              : 'Failed to send request. Please try again.'}
          </p>
          <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Identity */}
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

          {/* Services Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Transportation Planning</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Water Management</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Structural Analysis</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-primary transition-colors">Land Development</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Our Team</Link></li>
              <li><Link to="/projects" className="text-sm text-slate-500 hover:text-primary transition-colors">Project Portfolio</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">News & Press</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">Connect</h4>
            <form onSubmit={handleConnect} className="flex items-stretch shadow-sm">
              <input 
                className="flex-1 bg-slate-50 border-none rounded-l-lg focus:ring-1 focus:ring-primary text-sm px-4 py-3 placeholder:text-slate-400 outline-none" 
                placeholder="Email" 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={isSending}
                className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-xl">
                  {isSending ? 'refresh' : 'send'} 
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Kavi Consulting Inc. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <span>Designed and Developed by</span>
            <a href="https://www.claratechitsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-semibold">
              Claratech IT Solutions Pvt Ltd
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;