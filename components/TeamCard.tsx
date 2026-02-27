import React from 'react';

interface TeamCardProps {
  name: string;
  credentials: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  bio?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  credentials,
  role,
  experience,
  image,
  specialties,
  bio
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row group">
      {/* Image Section */}
      <div className="lg:w-1/2 relative overflow-hidden h-72 lg:h-auto">
        <img
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          loading="lazy"
        />
        {/* Experience Badge */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
            {experience} Exp.
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
        {/* Title & Credentials */}
        <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
        <span className="text-sm font-semibold text-slate-500 mb-4 block">
          {credentials && <span className="text-primary font-bold">{credentials}</span>}
        </span>

        {/* Role */}
        <p className="text-primary font-semibold mb-6 text-lg">{role}</p>

        {/* Bio */}
        {bio && <p className="text-sm text-slate-600 mb-6 leading-relaxed">{bio}</p>}

        {/* Specialties Section */}
        <div className="pt-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Specialties
          </h4>
          <ul className="space-y-3">
            {specialties.map((specialty, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                {specialty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
