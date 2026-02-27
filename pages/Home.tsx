import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import engineering from '../images/engineering.png';
import urban from '../images/urban interchage.jpg';
import grandparking from '../images/grand parking way.jpg';
import postoak from '../images/post oak boulevard.jpg';
import metropolitan from '../images/metropoliten.png';
import River from '../images/river crossing.png';

// Import reusable components and data
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import CertificateCard from '../components/CertificateCard';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data/services';
import { clients } from '../data/clients';
import { primaryCertifications, allCertifications } from '../data/certifications';

const taglines = [
  'Civil engineering excellence delivering precision, safety, and innovation in modern infrastructure projects across the nation.',
  'Building resilient infrastructure with precision, safety, and innovation.',
  'Engineering modern infrastructure that stands the test of time.',
  'Delivering reliable civil engineering solutions for a growing nation.',
  'Where precision engineering meets safe, sustainable construction.',
  'Shaping the future through innovative civil engineering excellence.'
]

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
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              From Concept to Completion:{' '}
              <span className="text-blue-400">
                <Typewriter
                  words={['Turning Ideas to Reality']}
                  typeSpeed={60}
                />
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl min-h-[3.5rem]">
              <Typewriter
                words={taglines}
                loop={0}
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
                Explore Our Services
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

      {/* Firm Overview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="About KAVI"
            title="Engineering Excellence Since 2010"
            subtitle="A Houston-based firm specializing in multi-disciplinary civil engineering and construction management"
            centered={true}
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'calendar_today', label: 'Founded', value: '2010' },
              { icon: 'location_on', label: 'Headquartered In', value: 'Houston, TX' },
              { icon: 'verified', label: 'Certified', value: 'MBE / DBE / HUB' },
              { icon: 'groups', label: 'Combined Experience', value: '80+ Years' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: false }}
              >
                <span className="material-symbols-outlined text-primary text-3xl block mb-4">
                  {item.icon}
                </span>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                  {item.label}
                </div>
                <div className="text-2xl font-bold text-slate-900">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

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
                KAVI Consulting Inc. is a premier civil engineering and construction firm.
                We focus on authority, technical precision, and premium results for every infrastructure challenge.
                From urban transportation networks to sustainable water management, we bring decades of expertise to the table.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
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

            <div className="relative perspective-1000">
              <motion.div
                className="bg-slate-50 p-4 rounded-2xl shadow-2xl relative z-10"
                initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateY: -5, rotateX: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  alt="Technical plan"
                  className="rounded-xl w-full"
                  src={engineering}
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl shadow-xl max-w-[240px] z-20"
                initial={{ opacity: 0, x: 60, y: -60, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                viewport={{ once: false }}
              >
                <div className="text-4xl font-extrabold mb-1">15+</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                  Years of Industry Leadership
                </div>
              </motion.div>

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
              <StatsCounter
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths - Services Grid (8 Cards) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900">Our Core Services</h2>
              <p className="text-lg text-slate-600">
                We provide comprehensive engineering services tailored to modern infrastructural requirements, ensuring every project is built on a foundation of excellence.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Explore All Services
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>

          {/* 8-Card Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                description={service.overview || service.description}
                features={service.features}
                featured={false}
                linkTo="/services"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Certifications & Qualifications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              KAVI Consulting Inc. holds industry-leading certifications demonstrating our commitment to excellence and regulatory compliance.
            </p>
          </div>

          {/* Primary Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Primary Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {primaryCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white p-8 rounded-2xl border-2 border-primary shadow-lg text-center"
                >
                  <span
                    className="material-symbols-outlined text-5xl text-primary block mb-4"
                  >
                    {cert.icon}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h4>
                  <p className="text-sm text-slate-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Carousel (Scrollable - Placeholder Certification Cards) */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Additional Professional Certifications</h3>
            <p className="text-sm text-slate-500 mb-6 italic">
              (15+ Industry Certifications)
            </p>
            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-4 flex-nowrap">
                  {allCertifications.slice(3).map((cert) => (
                    <div key={cert.id} className="flex-shrink-0 w-[280px]">
                      <CertificateCard
                        title={cert.title}
                        issuer={cert.issuer}
                        year={cert.year}
                        category={cert.category}
                        icon={cert.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Featured Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Featured Clients</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted by federal, state, and municipal agencies across Texas and the nation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.slice(0, 12).map((client) => (
              <motion.div
                key={client.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center h-24 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
              >
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-2xl block mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    apartment
                  </span>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
                    {client.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-24 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900">Featured Projects</h2>
        </div>

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
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-hidden carousel-track pb-6 md:pb-0 hide-scrollbar">
                {projects.map((project, idx) => (
                  <div
                    key={`original-${idx}`}
                    className="relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[460px] h-[220px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden snap-center group shadow-lg"
                  >
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.img}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 whitespace-normal">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-slate-300 text-xs sm:text-sm">{project.category}</p>
                    </div>
                  </div>
                ))}

                {projects.map((project, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="hidden md:block relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[460px] h-[220px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden snap-center group shadow-lg"
                    aria-hidden="true"
                  >
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.img}
                      loading="lazy"
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
                width: max-content;
                animation: scroll-left-loop 40s linear infinite;
              }
              .carousel-track:hover {
                animation-play-state: paused;
              }
            }

            @media (max-width: 767px) {
              .carousel-track {
                width: 100%;
                animation: none;
              }
            }
          `}
        </style>
      </section>

      {/* Contact Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader
                label="Let's Connect"
                title="Have a Project in Mind?"
                subtitle="Our expert engineering team is ready to discuss your infrastructure and development needs. Contact us today for a consultation."
              />

              <div className="space-y-4">
                {[
                  { icon: 'location_on', label: 'Houston Office', value: '1200 Smith Street, Suite 1600, Houston, TX 77002' },
                  { icon: 'phone', label: 'Phone', value: '+1 (713) 555-0198' },
                  { icon: 'mail', label: 'Email', value: 'contact@kaviconsulting.com'}
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary mt-1">{item.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                alt="Houston office location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqSfdbPKboTLF1TWSgTAfkO4yfCvmYMwvn-vjlqXmSiIWDaQ0ftQ-tbXh0BmEw4LXjZoC2hHnan9TJimmpDBNXk6TTN3fxDH402l7tKasYL9re_L0iFL7J977CWMj7QBhkBrudo_WdjPvFDzSbR-Qqh4Oj4tXttcLZr28DXpLsae4tuLXJhOn_10sNJn6h14GkkdKdTyJGvG8KpeW3iDM8YK_9S1-eAqPf-2huO0MT2zE5Z2us7KJK0i_5Qwb7ljy-tYQDLYR2KA"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                  <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
