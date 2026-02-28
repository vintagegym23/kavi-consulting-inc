import React from 'react';
import { clients } from '../data/clients';

const ClientGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Clients We've Worked With
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are proud to have partnered with a diverse range of public agencies and private firms.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-100 
                         transition-all duration-300 ease-in-out
                         filter grayscale hover:grayscale-0"
            >
              <span className="text-center font-semibold text-slate-700 group-hover:text-primary">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientGrid;
