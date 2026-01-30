

import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import React, { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import engineering from '../images/engineering.png';

import urban from '../images/urban interchage.jpg';
import grandparking from '../images/grand parking way.jpg';
import postoak from '../images/post oak boulevard.jpg';
import metropolitan from '../images/metropoliten.png';
import River from '../images/river crossing.png';




const taglines = [
  'Civil engineering excellence delivering precision, safety, and innovation in modern infrastructure projects across the nation.',
  'Building resilient infrastructure with precision, safety, and innovation.',
  'Engineering modern infrastructure that stands the test of time.',
  'Delivering reliable civil engineering solutions for a growing nation.',
  'Where precision engineering meets safe, sustainable construction.',
  'Shaping the future through innovative civil engineering excellence.'
]

const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1600; // ⏱ medium speed (not slow, not fast)
          const stepTime = 20;
          const increment = end / (duration / stepTime);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl font-extrabold text-slate-900 mb-2">
      {count}
      {suffix}
    </div>
  );
};




const Home: React.FC = () => {
  return (
    <div>
{/* Hero Section */}
<section className="relative h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img 
      alt="Construction site" 
      className="w-full h-full object-cover scale-105" 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1JYgoF7E4QTwNW1BRNtIQ47zWWQJ0IEyGD2Vj7umwa-59XAfaWnsNOAXnV4I1XHxnmUTegJZzenDky2Ro0sWyYLbA8-rEuP82iHf-xgsmmQLilqTt94pR2cVlnIFWmEW5cOI4Zz6jfOwwr181hXYw67K2f05t11scjbHft_qzfMRA0UrdEhQ5wMC2fDr_RDul_3O3F7wc9AkWfw8_axFU7eM3J9PnuLexAbVLjmQljqVS9s1dkHFVOaUeaPNeH49hk_Z1QkIjg" 
    />
    <div className="absolute inset-0 bg-slate-950/60"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
        From Concept to Completion:{' '}
        <span className="text-blue-400">
          <Typewriter
            words={['Turning Ideas to Reality']}
            typeSpeed={60}
            cursor
            cursorStyle="|"
          />
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl min-h-[3.5rem]">
        <Typewriter
          words={[
            'Civil engineering excellence delivering precision, safety, and innovation in modern infrastructure projects across the nation.',
            'Building resilient infrastructure with precision, safety, and innovation.',
            'Engineering modern infrastructure that stands the test of time.',
            'Delivering reliable civil engineering solutions for a growing nation.',
            'Where precision engineering meets safe, sustainable construction.',
            'Shaping the future through innovative civil engineering excellence.'
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={25}
          delaySpeed={3000}
        />
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/services" 
          className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold 
          flex items-center justify-center gap-2 
          transition-all duration-300 ease-out 
          transform will-change-transform hover:scale-105 hover:-translate-y-1
          shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40"
        >
          Our Services
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </Link>

        <Link 
          to="/projects" 
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 
          text-white px-8 py-4 rounded-lg font-bold text-center
          transition-all duration-300 ease-out 
          transform will-change-transform hover:scale-105 hover:-translate-y-1
          hover:shadow-xl hover:shadow-black/30"
        >
          View Projects
        </Link>
      </div>

    </div>
  </div>
</section>


      {/* Engineering Excellence Section */}
 
<section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-blue-600"></div>
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                Excellence in Engineering
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Committed to Precision and Technical Authority
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kavi Consulting Inc. is a premier civil engineering and construction firm. 
              We focus on authority, technical precision, and premium results for every infrastructure challenge. 
              From urban transportation networks to sustainable water management, we bring decades of expertise to the table.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {/* Feature 1 */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: false }}
              >
                <span className="material-symbols-outlined text-blue-600 text-3xl">verified_user</span>
                <h4 className="font-bold text-lg">Safety First</h4>
                <p className="text-sm text-slate-500">
                  Uncompromising standards for public safety and operational integrity.
                </p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: false }}
              >
                <span className="material-symbols-outlined text-blue-600 text-3xl">architecture</span>
                <h4 className="font-bold text-lg">Innovation</h4>
                <p className="text-sm text-slate-500">
                  Modern solutions for complex systems using cutting-edge technology.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: ANIMATED IMAGE & BLOB --- */}
          <div className="relative perspective-1000"> {/* Added perspective wrapper */}
            
            {/* The Main Image - Tilts on scroll */}
            <motion.div
              className="bg-slate-50 p-4 rounded-2xl shadow-2xl relative z-10"
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: -5, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              viewport={{ once: false, amount: 0.3 }} // amount: 0.3 triggers when 30% visible
              style={{ transformStyle: "preserve-3d" }}
            >
              <img 
                alt="Technical plan" 
                className="rounded-xl w-full" 
                // Using a placeholder that looks like your blueprint
                src= {engineering}
              />
            </motion.div>

            {/* The Blue Blob (Stats Box) - Slides OUT from behind */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl shadow-xl max-w-[240px] z-20"
              initial={{ opacity: 0, x: 60, y: -60, scale: 0.8 }} // Starts inside/behind
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}  // Moves to corner
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }} // Slight delay makes it look like it's reacting to the image
              viewport={{ once: false }}
            >
              <div className="text-4xl font-extrabold mb-1">15+</div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                Years of Industry Leadership
              </div>
            </motion.div>
            
            {/* Optional Decorative Element (Background Shape) */}
             <motion.div
              className="absolute top-10 right-10 w-full h-full bg-blue-50 rounded-2xl -z-10"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 20, y: -20 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: false }}
            />

          </div>
        </div>
      </div>
    </section>

{/* Stats Section */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: 'Projects Completed', value: 80, suffix: '+', icon: 'apartment' },
        { label: 'Expert Engineers', value: 24, suffix: '', icon: 'groups' },
        { label: 'States Served', value: 12, suffix: '', icon: 'public' },
        { label: 'Client Satisfaction', value: 100, suffix: '%', icon: 'thumb_up' },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-10 rounded-2xl text-center shadow-sm border border-slate-100
          hover:-translate-y-2 transition-transform duration-300"
        >
          <span className="material-symbols-outlined text-primary mb-4 block text-3xl">
            {stat.icon}
          </span>

          <Counter end={stat.value} suffix={stat.suffix} />

          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900">Our Core Expertise</h2>
              <p className="text-lg text-slate-600">
                We provide comprehensive engineering services tailored to modern infrastructural requirements, ensuring every project is built on a foundation of excellence.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Explore All Services
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Transportation', icon: 'directions_car', desc: 'Urban planning, highway design, and transit solutions that move communities forward with efficiency and safety.' },
              { title: 'Drainage', icon: 'water_drop', desc: 'Sustainable storm water management and drainage systems designed to protect infrastructure and environment.' },
              { title: 'Project Management', icon: 'assignment_turned_in', desc: 'Precision oversight from feasibility to completion, ensuring timelines and budgets are met with zero compromise.', featured: true },
            ].map((item, idx) => (
              <div 
  key={idx} 
  className={`group p-8 rounded-2xl border transition-all transform will-change-transform duration-300 ${
    item.featured 
    ? 'bg-white border-primary/10 shadow-xl ring-1 ring-primary/5 hover:scale-105' 
    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:scale-105'
  }`}
>

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${item.featured ? 'bg-primary text-white' : 'bg-blue-100 text-primary'}`}>
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{item.desc}</p>
                <div className={`h-1 transition-all duration-300 ${item.featured ? 'w-full bg-primary' : 'w-12 bg-slate-200 group-hover:w-full group-hover:bg-primary'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Featured Projects Carousel */}
<section className="py-24 bg-slate-50/50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
    <h2 className="text-4xl font-extrabold text-slate-900">Featured Projects</h2>
  </div>

  {/* Define Data Source Once */}
  {(() => {
    const projects = [
      { title: 'Metropolitan Center', category: 'Structural Design & Management', img: metropolitan },
      { title: 'River Crossing', category: 'Bridge Engineering', img: River },
      { title: 'Urban Interchange', category: 'Traffic Systems Design', img: urban },
      { title: 'Grand Parkway Segment E', category: 'Toll Road Infrastructure', img: grandparking },
      { title: 'Post Oak Boulevard', category: 'Urban Transit Reconstruction', img: postoak },
    ];

    return (
      <div className="relative w-full">
        <div 
          className="
            flex gap-6 
            overflow-x-auto snap-x snap-mandatory 
            md:overflow-hidden 
            carousel-track 
            pb-6 md:pb-0 
            hide-scrollbar
          "
        >
          {/* ORIGINAL LIST (Visible on ALL devices) */}
          {projects.map((project, idx) => (
            <div 
              key={`original-${idx}`} 
              className="relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[460px] h-[220px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden snap-center group shadow-lg"
            >
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={project.img} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 whitespace-normal">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm">{project.category}</p>
              </div>
            </div>
          ))}

          {/* DUPLICATE LIST (HIDDEN on Mobile, Visible on Desktop for Animation) */}
          {projects.map((project, idx) => (
            <div 
              key={`duplicate-${idx}`} 
              className="
                hidden md:block 
                relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[460px] h-[220px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden snap-center group shadow-lg
              "
              aria-hidden="true" 
            >
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={project.img} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 whitespace-normal">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  })()}

  <style>
    {`
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

      @keyframes scroll-left-loop {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } 
      }

      @media (min-width: 768px) {
        .carousel-track {
          width: max-content; /* Critical: Forces container to be wide enough for all items */
          animation: scroll-left-loop 40s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      }
      
      @media (max-width: 767px) {
        .carousel-track {
          width: 100%; /* Mobile: Fits screen width */
          animation: none;
        }
      }
    `}
  </style>
</section>


    </div>
  );
};

export default Home;
