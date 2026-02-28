import React from 'react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  year?: number;
  icon?: string;
  color?: string;
  category: 'primary' | 'professional' | 'technical' | 'compliance';
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  year,
  icon = 'badge',
  color = '#2B6CB0',
  category
}) => {
  const categoryColors = {
    primary: 'bg-amber-50 border-yellow-200',
    professional: 'bg-blue-50 border-blue-200',
    technical: 'bg-emerald-50 border-green-200',
    compliance: 'bg-violet-50 border-purple-200'
  };

  const categoryLabels = {
    primary: 'Primary',
    professional: 'Professional',
    technical: 'Technical',
    compliance: 'Compliance'
  };

  return (
    <div
      className={`p-6 rounded-2xl border flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1 ${categoryColors[category]}`}
      style={{
        borderColor: color ? `${color}30` : undefined
      }}
    >
      {/* Icon Section */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{
          backgroundColor: `${color}20`,
          color: color
        }}
      >
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>

      {/* Title */}
      <h4 className="text-sm font-bold text-slate-900 mb-1 line-clamp-2">{title}</h4>

      {/* Issuer */}
      <p className="text-xs text-slate-600 mb-4 line-clamp-1">{issuer}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50">
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">
          {categoryLabels[category]}
        </span>
        {year && <span className="text-xs text-slate-500 font-medium">{year}</span>}
      </div>
    </div>
  );
};

export default CertificateCard;
