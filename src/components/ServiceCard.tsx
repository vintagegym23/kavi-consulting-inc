import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features?: string[];
  featured?: boolean;
  linkTo?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  features = [],
  featured = false,
  linkTo = '/services'
}) => {
  return (
    <div
      className={`group p-8 rounded-2xl border transition-all transform will-change-transform duration-300 flex flex-col h-full ${
        featured
          ? 'bg-white border-primary/10 shadow-xl ring-1 ring-primary/5 hover:scale-105'
          : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:scale-105'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${
          featured ? 'bg-primary text-white' : 'bg-blue-100 text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>

      <p className="text-slate-600 leading-relaxed mb-6 text-sm flex-grow">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600 text-xs">
              <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
          {features.length > 3 && (
            <li className="text-slate-500 text-xs font-semibold mt-2">
              + {features.length - 3} more
            </li>
          )}
        </ul>
      )}

      <Link
        to={linkTo}
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto"
      >
        Learn more
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>

      <div
        className={`h-1 mt-6 transition-all duration-300 ${
          featured ? 'w-full bg-primary' : 'w-12 bg-slate-200 group-hover:w-full group-hover:bg-primary'
        }`}
      ></div>
    </div>
  );
};

export default ServiceCard;
