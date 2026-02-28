import React from 'react';
import { motion } from 'framer-motion';

const overviewData = [
  {
    icon: 'flag',
    title: 'Founded in 2010',
    description: 'A decade of engineering excellence.',
  },
  {
    icon: 'location_city',
    title: 'Houston-Based',
    description: 'Proudly serving the heart of Texas.',
  },
  {
    icon: 'verified',
    title: 'Certified MBE / DBE / HUB',
    description: 'Committed to diversity and inclusion.',
  },
  {
    icon: 'groups',
    title: '80+ Years Combined Experience',
    description: 'Expertise you can trust.',
  },
  {
    icon: 'corporate_fare',
    title: 'Public Agency Specialization',
    description: 'Delivering results for the public sector.',
  },
];

const FirmOverview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            A Foundation of Trust and Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Kavi Consulting at a glance.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {overviewData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirmOverview;