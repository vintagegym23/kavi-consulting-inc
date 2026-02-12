

// // // // // // // export default ChatBot;
// // // // // // import React, { useState, useRef, useEffect } from 'react';

// // // // // // interface Message {
// // // // // //   role: 'user' | 'model';
// // // // // //   text: string;
// // // // // // }

// // // // // // // Simple local fallback response
// // // // // // const getLocalResponse = (message: string): string => {
// // // // // //   return (
// // // // // //     "Thanks for reaching out! Our engineering team at Kavi Consulting Inc. would be happy to help. " +
// // // // // //     "Please use the contact form on our website to book a consultation or request a quote."
// // // // // //   );
// // // // // // };

// // // // // // const ChatBot: React.FC = () => {
// // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // //   const [input, setInput] = useState('');
// // // // // //   const [messages, setMessages] = useState<Message[]>([
// // // // // //     {
// // // // // //       role: 'model',
// // // // // //       text: "Hello! I'm Kavi's AI Assistant. How can I help you with your infrastructure project today?"
// // // // // //     }
// // // // // //   ]);
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const scrollRef = useRef<HTMLDivElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     if (scrollRef.current) {
// // // // // //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
// // // // // //     }
// // // // // //   }, [messages, isOpen]);

// // // // // //   const handleSend = async () => {
// // // // // //     if (!input.trim()) return;

// // // // // //     const userMessage = input.trim();
// // // // // //     setInput('');
// // // // // //     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
// // // // // //     setIsLoading(true);

// // // // // //     // Simulate response delay (optional, for UX)
// // // // // //     setTimeout(() => {
// // // // // //       const response = getLocalResponse(userMessage);
// // // // // //       setMessages(prev => [...prev, { role: 'model', text: response }]);
// // // // // //       setIsLoading(false);
// // // // // //     }, 600);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
// // // // // //       {isOpen && (
// // // // // //         <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
// // // // // //           <div className="bg-primary p-4 text-white flex justify-between items-center">
// // // // // //             <div className="flex items-center gap-3">
// // // // // //               <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
// // // // // //                 <span className="material-symbols-outlined text-sm">engineering</span>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <h3 className="font-bold text-sm">Engineering Assistant</h3>
// // // // // //                 <p className="text-[10px] opacity-80">Online | Kavi Consulting Inc</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <button
// // // // // //               onClick={() => setIsOpen(false)}
// // // // // //               className="hover:bg-white/10 p-1 rounded transition-colors"
// // // // // //             >
// // // // // //               <span className="material-symbols-outlined">close</span>
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
// // // // // //             {messages.map((msg, i) => (
// // // // // //               <div
// // // // // //                 key={i}
// // // // // //                 className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
// // // // // //               >
// // // // // //                 <div
// // // // // //                   className={`max-w-[85%] p-3 rounded-2xl text-sm ${
// // // // // //                     msg.role === 'user'
// // // // // //                       ? 'bg-primary text-white rounded-tr-none'
// // // // // //                       : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   {msg.text}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}

// // // // // //             {isLoading && (
// // // // // //               <div className="flex justify-start">
// // // // // //                 <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
// // // // // //                   <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
// // // // // //                   <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
// // // // // //                   <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={input}
// // // // // //               onChange={(e) => setInput(e.target.value)}
// // // // // //               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
// // // // // //               placeholder="Ask a question..."
// // // // // //               className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
// // // // // //             />
// // // // // //             <button
// // // // // //               onClick={handleSend}
// // // // // //               disabled={isLoading}
// // // // // //               className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
// // // // // //             >
// // // // // //               <span className="material-symbols-outlined">send</span>
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <button
// // // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // // //         className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
// // // // // //       >
// // // // // //         <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
// // // // // //           {isOpen ? 'expand_more' : 'chat'}
// // // // // //         </span>
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ChatBot;


// // // // // import React, { useState, useRef, useEffect } from 'react';
// // // // // import emailjs from '@emailjs/browser';

// // // // // interface Message {
// // // // //   role: 'user' | 'model';
// // // // //   text: string;
// // // // // }

// // // // // const ChatBot: React.FC = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [input, setInput] = useState('Hello!'); // Default input as requested
// // // // //   const [messages, setMessages] = useState<Message[]>([
// // // // //     {
// // // // //       role: 'model',
// // // // //       text: "Hello! I'm Kavi's AI Assistant. How can I help you with your infrastructure project today?"
// // // // //     }
// // // // //   ]);
// // // // //   const [step, setStep] = useState(0); 
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const scrollRef = useRef<HTMLDivElement>(null);

// // // // //   useEffect(() => {
// // // // //     if (scrollRef.current) {
// // // // //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
// // // // //     }
// // // // //   }, [messages, isOpen]);

// // // // //   const handleSend = async () => {
// // // // //     if (!input.trim()) return;

// // // // //     const userMessage = input.trim();
// // // // //     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
// // // // //     setInput(''); 
// // // // //     setIsLoading(true);

// // // // //     setTimeout(async () => {
// // // // //       let response = "";
// // // // //       if (step === 0) {
// // // // //         response = "Thanks for reaching us out. Provide your details: email, phone number, and message";
// // // // //         setStep(1);
// // // // //       } else {
// // // // //         response = "Thanks! One of our team member will contact you in the next 24 hours";
        
// // // // //         // EmailJS Integration
// // // // //         const templateParams = { message: userMessage, to_email: 'dineshb07143@gmail.com' };
// // // // //         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
// // // // //       }
      
// // // // //       setMessages(prev => [...prev, { role: 'model', text: response }]);
// // // // //       setIsLoading(false);
// // // // //     }, 800);
// // // // //   };

// // // // //   return (
// // // // //     <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
// // // // //       {isOpen && (
// // // // //         <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
// // // // //           <div className="bg-primary p-4 text-white flex justify-between items-center">
// // // // //             <div className="flex items-center gap-3">
// // // // //               <span className="material-symbols-outlined">engineering</span>
// // // // //               <div>
// // // // //                 <h3 className="font-bold text-sm">Engineering Assistant</h3>
// // // // //                 <p className="text-[10px] opacity-80">Online | Kavi Consulting Inc</p>
// // // // //               </div>
// // // // //             </div>
// // // // //             <button onClick={() => setIsOpen(false)}><span className="material-symbols-outlined">close</span></button>
// // // // //           </div>

// // // // //           <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
// // // // //             {messages.map((msg, i) => (
// // // // //               <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
// // // // //                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'}`}>
// // // // //                   {msg.text}
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
// // // // //             <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary" />
// // // // //             <button onClick={handleSend} className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700">
// // // // //               <span className="material-symbols-outlined">send</span>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //       <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all">
// // // // //         <span className="material-symbols-outlined text-2xl">{isOpen ? 'expand_more' : 'chat'}</span>
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ChatBot;

// // // // import React, { useState, useRef, useEffect } from 'react';
// // // // import emailjs from '@emailjs/browser';

// // // // interface Message {
// // // //   role: 'user' | 'model';
// // // //   text: string;
// // // // }

// // // // const ChatBot: React.FC = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [input, setInput] = useState('Hello!'); 
// // // //   const [messages, setMessages] = useState<Message[]>([
// // // //     {
// // // //       role: 'model',
// // // //       text: "Hello! I'm Kavi's AI Assistant. How can I help you with your infrastructure project today?"
// // // //     }
// // // //   ]);
// // // //   const [step, setStep] = useState(0); 
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const scrollRef = useRef<HTMLDivElement>(null);

// // // //   useEffect(() => {
// // // //     if (scrollRef.current) {
// // // //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
// // // //     }
// // // //   }, [messages, isOpen]);

// // // //   const handleSend = async () => {
// // // //     if (!input.trim()) return;

// // // //     const userMessage = input.trim();
// // // //     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
// // // //     setInput(''); 
// // // //     setIsLoading(true);

// // // //     setTimeout(async () => {
// // // //       let response = "";
// // // //       if (step === 0) {
// // // //         response = "Thanks for reaching us out. Provide your details: email, phone number, and message";
// // // //         setStep(1);
// // // //       } else {
// // // //         response = "Thanks! One of our team member will contact you in the next 24 hours";
        
// // // //         // EmailJS: Send chatbot transcript/details to owner
// // // //         const templateParams = {
// // // //           from_name: "Chatbot Lead",
// // // //           message: userMessage,
// // // //           to_email: 'dineshb07143@gmail.com'
// // // //         };

// // // //         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
// // // //           .then(() => console.log('Chatbot details sent to owner.'))
// // // //           .catch((err) => console.error('EmailJS Error:', err));
// // // //       }
      
// // // //       setMessages(prev => [...prev, { role: 'model', text: response }]);
// // // //       setIsLoading(false);
// // // //     }, 800);
// // // //   };

// // // //   return (
// // // //     <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
// // // //       {isOpen && (
// // // //         <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
// // // //           <div className="bg-primary p-4 text-white flex justify-between items-center">
// // // //             <div className="flex items-center gap-3">
// // // //               <span className="material-symbols-outlined">engineering</span>
// // // //               <div>
// // // //                 <h3 className="font-bold text-sm">Engineering Assistant</h3>
// // // //                 <p className="text-[10px] opacity-80">Online | Kavi Consulting Inc</p>
// // // //               </div>
// // // //             </div>
// // // //             <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
// // // //               <span className="material-symbols-outlined">close</span>
// // // //             </button>
// // // //           </div>

// // // //           <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
// // // //             {messages.map((msg, i) => (
// // // //               <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
// // // //                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'}`}>
// // // //                   {msg.text}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
// // // //             <input
// // // //               type="text"
// // // //               value={input}
// // // //               onChange={(e) => setInput(e.target.value)}
// // // //               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
// // // //               className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
// // // //             />
// // // //             <button onClick={handleSend} className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 transition-colors">
// // // //               <span className="material-symbols-outlined">send</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <button
// // // //         onClick={() => setIsOpen(!isOpen)}
// // // //         className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
// // // //       >
// // // //         <span className="material-symbols-outlined text-2xl">{isOpen ? 'expand_more' : 'chat'}</span>
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ChatBot;

// // // import React, { useState, useRef, useEffect } from 'react';
// // // import emailjs from '@emailjs/browser';

// // // interface Message {
// // //   role: 'user' | 'model';
// // //   text: string;
// // // }

// // // const ChatBot: React.FC = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [input, setInput] = useState('Hello!'); 
// // //   const [messages, setMessages] = useState<Message[]>([
// // //     {
// // //       role: 'model',
// // //       text: "Hello! I'm Kavi's AI Assistant. How can I help you with your infrastructure project today?"
// // //     }
// // //   ]);
// // //   const [step, setStep] = useState(0); 
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const scrollRef = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     if (scrollRef.current) {
// // //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
// // //     }
// // //   }, [messages, isOpen]);

// // //   const handleSend = async () => {
// // //     if (!input.trim()) return;

// // //     const userMessage = input.trim();
// // //     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
// // //     setInput(''); 
// // //     setIsLoading(true);

// // //     // Simulate response delay
// // //     setTimeout(async () => {
// // //       let response = "";
      
// // //       if (step === 0) {
// // //         // Step 1: Request contact details
// // //         response = "Thanks for reaching us out. Provide your details: email, phone number (optional), and message";
// // //         setStep(1);
// // //       } else {
// // //         // Step 2: Final response and send email
// // //         response = "Thanks! One of our team member will contact you in the next 24 hours";
        
// // //         // Prepare data for your EmailJS Template
// // //         const templateParams = {
// // //           from_name: "Chatbot Lead",
// // //           message: userMessage, // This contains the user's email, phone, and message string
// // //           to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'dineshb07143@gmail.com'
// // //         };

// // //         try {
// // //           await emailjs.send(
// // //             import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
// // //             import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
// // //             templateParams,
// // //             import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
// // //           );
// // //           console.log('Chatbot inquiry sent successfully');
// // //         } catch (err) {
// // //           console.error('EmailJS Chatbot Error:', err);
// // //         }
// // //       }
      
// // //       setMessages(prev => [...prev, { role: 'model', text: response }]);
// // //       setIsLoading(false);
// // //     }, 800);
// // //   };

// // //   return (
// // //     <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
// // //       {isOpen && (
// // //         <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
// // //           {/* Header */}
// // //           <div className="bg-primary p-4 text-white flex justify-between items-center">
// // //             <div className="flex items-center gap-3">
// // //               <span className="material-symbols-outlined">engineering</span>
// // //               <div>
// // //                 <h3 className="font-bold text-sm">Engineering Assistant</h3>
// // //                 <p className="text-[10px] opacity-80">Online | Kavi Consulting Inc</p>
// // //               </div>
// // //             </div>
// // //             <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
// // //               <span className="material-symbols-outlined">close</span>
// // //             </button>
// // //           </div>

// // //           {/* Messages Area */}
// // //           <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
// // //             {messages.map((msg, i) => (
// // //               <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
// // //                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
// // //                   msg.role === 'user' 
// // //                     ? 'bg-primary text-white rounded-tr-none' 
// // //                     : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
// // //                 }`}>
// // //                   {msg.text}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //             {isLoading && (
// // //               <div className="flex justify-start">
// // //                 <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
// // //                   <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
// // //                   <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
// // //                   <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Input Area */}
// // //           <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
// // //             <input
// // //               type="text"
// // //               value={input}
// // //               onChange={(e) => setInput(e.target.value)}
// // //               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
// // //               placeholder="Type your details..."
// // //               className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
// // //             />
// // //             <button 
// // //               onClick={handleSend} 
// // //               disabled={isLoading}
// // //               className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
// // //             >
// // //               <span className="material-symbols-outlined">send</span>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Toggle Button */}
// // //       <button
// // //         onClick={() => setIsOpen(!isOpen)}
// // //         className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
// // //       >
// // //         <span className="material-symbols-outlined text-2xl">{isOpen ? 'expand_more' : 'chat'}</span>
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default ChatBot;


// // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // import emailjs from '@emailjs/browser';

// // // --- Types ---
// // interface FormData {
// //   name: string;
// //   phone: string;
// //   email: string;
// //   message: string;
// // }

// // interface FormErrors {
// //   name?: string;
// //   phone?: string;
// //   email?: string;
// //   message?: string;
// // }

// // interface ServiceCategory {
// //   title: string;
// //   icon: string;
// //   features: string[];
// // }

// // type NotificationType = 'success' | 'error' | null;

// // // --- Data (Existing technical points preserved) ---
// // const serviceCategories: ServiceCategory[] = [
// //   { 
// //     title: 'Transportation', 
// //     icon: 'traffic', 
// //     features: [
// //       'Roadway & Intersection Geometrics', 
// //       'Traffic Signal Impact Analysis', 
// //       'ADA-Compliant Pedestrian Infrastructure', 
// //       'Construction Sequencing'
// //     ] 
// //   },
// //   { 
// //     title: 'Drainage Design', 
// //     icon: 'waves', 
// //     features: [
// //       'H&H Modeling', 
// //       'Floodplain Analysis', 
// //       'Storm Water Management Modeling', 
// //       'Bridge Hydraulics & Scour Analysis', 
// //       'Drainage Facilities & Detention Design'
// //     ] 
// //   },
// //   { 
// //     title: 'Utility Design', 
// //     icon: 'plumbing', 
// //     features: [
// //       'Water & Sewer Systems', 
// //       'Underground Infrastructure', 
// //       'Utility Coordination (Public/Private)'
// //     ] 
// //   },
// //   { 
// //     title: 'Feasibility Studies', 
// //     icon: 'query_stats', 
// //     features: [
// //       'Preliminary Design', 
// //       'Site Selection Audits', 
// //       'Environmental Constraints', 
// //       'Stakeholder Coordination and Public Impact'
// //     ] 
// //   },
// //   { 
// //     title: 'Permitting', 
// //     icon: 'verified', 
// //     features: [
// //       'Right-of-way and Easement Coordination', 
// //       'Local, State & Federal Compliance', 
// //       'Regulatory Agency Liaison', 
// //       'Entitlement Support'
// //     ] 
// //   },
// //   { 
// //     title: 'Construction Phase', 
// //     icon: 'imagesearch_roller', 
// //     features: [
// //       'Shop Drawing Reviews', 
// //       'Material Submittals', 
// //       'Site/Construction Inspections'
// //     ] 
// //   },
// //   { 
// //     title: 'Construction Management', 
// //     icon: 'engineering', 
// //     features: [
// //       'Quality Assurance/Control', 
// //       'Schedule Optimization', 
// //       'Safety Compliance Audits'
// //     ] 
// //   },
// //   { 
// //     title: 'Program Management', 
// //     icon: 'account_tree', 
// //     features: [
// //       'Portfolio-wide Strategy', 
// //       'Capital Planning', 
// //       'Stakeholder Integration'
// //     ] 
// //   },
// //   { 
// //     title: 'Site Development', 
// //     icon: 'foundation', 
// //     features: [
// //       'Grading & Drainage Plans', 
// //       'Erosion & Sediment Control', 
// //       'Commercial & Industrial'
// //     ] 
// //   },
// // ];

// // const Services: React.FC = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isSending, setIsSending] = useState(false);
// //   const [notification, setNotification] = useState<NotificationType>(null);
// //   const [formData, setFormData] = useState<FormData>({ name: '', phone: '', email: '', message: '' });
// //   const [formErrors, setFormErrors] = useState<FormErrors>({});
  
// //   const modalRef = useRef<HTMLDivElement>(null);
// //   const firstInputRef = useRef<HTMLInputElement>(null);

// //   const closeModal = useCallback(() => {
// //     setIsModalOpen(false);
// //     setFormData({ name: '', phone: '', email: '', message: '' });
// //     setFormErrors({});
// //   }, []);

// //   useEffect(() => {
// //     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
// //     emailjs.init(publicKey);
// //   }, []);

// //   const validateForm = (): boolean => {
// //     const errors: FormErrors = {};
// //     if (!formData.name.trim()) errors.name = 'Name is required';
// //     if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
// //       errors.phone = 'Please enter a valid phone number';
// //     }
// //     if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       errors.email = 'Valid email is required';
// //     }
// //     if (!formData.message.trim() || formData.message.trim().length < 10) {
// //       errors.message = 'Message must be at least 10 characters';
// //     }
// //     setFormErrors(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;
// //     setIsSending(true);

// //     const templateParams = {
// //       name: formData.name,
// //       phone: formData.phone || 'Not provided',
// //       email: formData.email,
// //       message: formData.message,
// //       to_email: 'dineshb07143@gmail.com'
// //     };

// //     try {
// //       await emailjs.send(
// //         import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
// //         import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
// //         templateParams
// //       );
// //       setNotification('success');
// //       closeModal();
// //     } catch (err) {
// //       console.error('EmailJS Error:', err);
// //       setNotification('error');
// //     } finally { setIsSending(false); }
// //   };

// //   return (
// //     <div className="bg-white">
// //       {/* Toast Notification */}
// //       {notification && (
// //         <div className={`fixed top-4 right-4 z-[60] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-5 duration-300 ${notification === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
// //           <span className="material-symbols-outlined">{notification === 'success' ? 'check_circle' : 'error'}</span>
// //           <p className="font-medium">{notification === 'success' ? 'Message sent! Our team will contact you soon.' : 'Failed to send message.'}</p>
// //         </div>
// //       )}

// //       {/* Hero */}
// //       <section className="relative py-24 md:py-32 flex items-center overflow-hidden bg-slate-950">
// //         <div className="absolute inset-0 z-0 opacity-15">
// //           <img alt="Blueprints" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI2oItfvWX0uFD2JRRCNXeoEHogJlYCJbn8tHhRKMPGDNaZ2u4nNInWGIMGuJmXAlCx_8YJI808y3k12fsTZSrl2DJSyhRDoQ6-tg4eOZbnqP9Ed0iwCcSKUVkq2LkW6f0WjKL6dD-oNcL3sFpbaYTqckfW8yyF2GADYWkrfZ7HQ6OdZnsLpRSEypextz-lQd6FaM8NXYVDSa2qNUEuOCThPymbuk2w5xSBatJE-H5iuDBl1itZ8K0oHfbQDpcN7-NbwjRtt05Qg" />
// //         </div>
// //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
// //           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Comprehensive Engineering Solutions</h1>
// //           <p className="text-lg text-slate-300 max-w-2xl">Precision engineering solutions across the entire infrastructure lifecycle.</p>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-24 bg-slate-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {serviceCategories.map((service, idx) => (
// //               <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
// //                 <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
// //                   <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
// //                 </div>
// //                 <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                
// //                 {/* Dynamic Card Scrolling: 
// //                    If features > 3, it adds a max-height and scrolling
// //                 */}
// //                 <div className={`pr-2 custom-scrollbar ${service.features.length > 3 ? 'max-h-36 overflow-y-auto' : ''}`}>
// //                   <ul className="space-y-3">
// //                     {service.features.map((feature, i) => (
// //                       <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
// //                         <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">check_circle</span>
// //                         <span className="leading-relaxed">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 relative z-20">
// //         <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
// //           <h2 className="text-2xl md:text-3xl font-bold">Looking for a specialized solution?</h2>
// //           <button onClick={() => setIsModalOpen(true)} className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95 whitespace-nowrap">Talk to an Expert</button>
// //         </div>
// //       </section>

// //       {/* Modal Form */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={(e) => e.target === e.currentTarget && closeModal()}>
// //           <div ref={modalRef} className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl relative animate-in zoom-in-95">
// //             <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-slate-500 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined">close</span></button>
// //             <h3 className="text-2xl font-bold text-slate-900 mb-6">Talk to an Expert</h3>
// //             <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //               <input ref={firstInputRef} required name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-3 rounded-xl border ${formErrors.name ? 'border-red-400' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Full Name *" />
// //               <input name="phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full px-4 py-3 rounded-xl border ${formErrors.phone ? 'border-red-400' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Phone Number (+1 123-456-7890)" />
// //               <input required name="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full px-4 py-3 rounded-xl border ${formErrors.email ? 'border-red-400' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-primary/20`} placeholder="Email Address *" />
// //               <textarea required name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className={`w-full px-4 py-3 rounded-xl border ${formErrors.message ? 'border-red-400' : 'border-slate-200'} outline-none resize-none focus:ring-2 focus:ring-primary/20`} placeholder="How can we help you? *"></textarea>
// //               <button type="submit" disabled={isSending} className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg transition-all disabled:opacity-50">
// //                 {isSending ? 'Sending...' : 'Send Message'}
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* Global Style for the scrollbar */}
// //       <style>{`
// //         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
// //         .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 10px; }
// //         .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
// //         .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Services;

// import React, { useState, useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser';

// interface Message {
//   role: 'user' | 'model';
//   text: string;
// }

// const ChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState('Hello!'); 
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: 'model',
//       text: "Hello! I'm Kavi's AI Assistant. How can I help you with your infrastructure project today?"
//     }
//   ]);
//   const [step, setStep] = useState(0); 
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
//     emailjs.init(publicKey);
//   }, []);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages, isOpen]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = input.trim();
//     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
//     setInput(''); 
//     setIsLoading(true);

//     setTimeout(async () => {
//       let response = "";
//       if (step === 0) {
//         // Task 2: Updated instruction to show phone is optional
//         response = "Thanks for reaching us out. Provide your details: email, phone number (optional), and message";
//         setStep(1);
//       } else {
//         response = "Thanks! One of our team member will contact you in the next 24 hours";
        
//         const templateParams = {
//           from_name: "Chatbot Lead",
//           message: userMessage, 
//           to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'dineshb07143@gmail.com'
//         };

//         try {
//           await emailjs.send(
//             import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
//             import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
//             templateParams
//           );
//         } catch (err) {
//           console.error('EmailJS Chatbot Error:', err);
//         }
//       }
//       setMessages(prev => [...prev, { role: 'model', text: response }]);
//       setIsLoading(false);
//     }, 800);
//   };

//   // Task 3: Keydown handler for Shift+Enter logic
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault(); // Prevent new line
//       handleSend(); // Send message
//     }
//     // If shiftKey is true, default behavior (new line) happens automatically
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
//       {isOpen && (
//         <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
//           <div className="bg-primary p-4 text-white flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <span className="material-symbols-outlined">engineering</span>
//               <div>
//                 <h3 className="font-bold text-sm">Engineering Assistant</h3>
//                 <p className="text-[10px] opacity-80">Online | Kavi Consulting Inc</p>
//               </div>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
//               <span className="material-symbols-outlined">close</span>
//             </button>
//           </div>

//           <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
//             {messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
//                   msg.role === 'user' 
//                     ? 'bg-primary text-white rounded-tr-none' 
//                     : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
//                 }`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
//             {/* Switched to Textarea for Task 3 */}
//             <textarea
//               rows={1}
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Type your details..."
//               className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary resize-none overflow-y-auto max-h-32"
//             />
//             <button 
//               onClick={handleSend} 
//               disabled={isLoading}
//               className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 self-end"
//             >
//               <span className="material-symbols-outlined">send</span>
//             </button>
//           </div>
//         </div>
//       )}

//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
//       >
//         <span className="material-symbols-outlined text-2xl">{isOpen ? 'expand_more' : 'chat'}</span>
//       </button>
//     </div>
//   );
// };

// export default ChatBot;

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface Message {
  role: 'user' | 'model';
  text: string;
}

type NotificationType = 'success' | 'error' | null;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('Hello!'); 
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm Kavi's AI Assistant. How can I help you with your infrastructure project today?"
    }
  ]);
  const [step, setStep] = useState(0); 
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    emailjs.init(publicKey);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Task: Auto-hide notification toast after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput(''); 
    setIsLoading(true);

    setTimeout(async () => {
      let response = "";
      if (step === 0) {
        response = "Thanks for reaching us out. Provide your details: email, phone number (optional), and message";
        setStep(1);
      } else {
        response = "Thanks! One of our team member will contact you in the next 24 hours";
        
        const templateParams = {
          from_name: "Chatbot Lead",
          message: userMessage, 
          to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'dineshb07143@gmail.com'
        };

        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
            templateParams
          );
          setNotification('success'); // Trigger the toast notification
        } catch (err) {
          console.error('EmailJS Chatbot Error:', err);
          setNotification('error');
        }
      }
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSend(); 
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Toast Notification Container */}
      {notification && (
        <div className={`fixed top-4 right-4 z-[110] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-5 duration-300 ${
          notification === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`}>
          <span className="material-symbols-outlined">
            {notification === 'success' ? 'check_circle' : 'error'}
          </span>
          <p className="font-medium text-sm">
            {notification === 'success' 
              ? 'Message sent! Our team will contact you soon.' 
              : 'Failed to send message.'}
          </p>
          <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">engineering</span>
              <div>
                <h3 className="font-bold text-sm">Engineering Assistant</h3>
                <p className="text-[10px] opacity-80">Online | Kavi Consulting Inc</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your details..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary resize-none overflow-y-auto max-h-32"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 self-end"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-2xl">{isOpen ? 'expand_more' : 'chat'}</span>
      </button>
    </div>
  );
};

export default ChatBot;