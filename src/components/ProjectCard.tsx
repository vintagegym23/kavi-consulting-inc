import React from 'react';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  tools?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  client,
  description,
  image,
  tags,
  tools = []
}) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full group">
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-primary px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tools */}
        {tools && tools.length > 0 && (
          <div className="mb-4 pb-4 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight mb-2">
              Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-1">
              {tools.slice(0, 4).map(tool => (
                <span
                  key={tool}
                  className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                >
                  {tool}
                </span>
              ))}
              {tools.length > 4 && (
                <span className="text-[10px] font-medium text-slate-400 px-1">
                  +{tools.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Client Info */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            Client: {client}
          </span>
          <span className="material-symbols-outlined text-slate-300 text-lg group-hover:text-primary transition-colors">
            arrow_outward
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
