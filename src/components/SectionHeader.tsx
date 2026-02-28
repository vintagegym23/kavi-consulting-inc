import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  labelColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  centered = false,
  labelColor = 'text-primary'
}) => {
  const containerClass = centered ? 'text-center' : '';
  const labelContainerClass = centered ? 'justify-center' : '';

  return (
    <div className={`space-y-4 ${containerClass}`}>
      {/* Label with accent line */}
      {label && (
        <div className={`flex items-center gap-3 ${labelContainerClass}`}>
          <div className={`w-12 h-[2px] bg-primary ${centered ? '' : ''}`}></div>
          <span
            className={`${labelColor} font-bold tracking-widest text-xs uppercase`}
          >
            {label}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-lg text-slate-600 leading-relaxed ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
