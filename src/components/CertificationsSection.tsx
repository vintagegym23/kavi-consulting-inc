import React from 'react';

type PrimaryCertification = {
  id: string;
  title: string;
};

type CertificatePlaceholder = {
  id: string;
  title: string;
};

interface CertificationsSectionProps {
  primaryCertifications: PrimaryCertification[];
  placeholders?: CertificatePlaceholder[];
}

const defaultPlaceholders: CertificatePlaceholder[] = Array.from({ length: 15 }, (_, index) => ({
  id: `placeholder-${index + 1}`,
  title: `Certificate Placeholder ${index + 1}`
}));

const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  primaryCertifications,
  placeholders = defaultPlaceholders
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900">Certifications</h2>
            <p className="text-lg text-slate-600">
              Verified qualifications and agency-recognized certifications that reinforce our delivery standards.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-10">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Primary</div>
            <div className="space-y-4">
              {primaryCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white border border-slate-200 rounded-xl px-4 py-4 shadow-sm flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                  <div>
                    <div className="text-base font-bold text-slate-900">{cert.title}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Certification</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Certificates (Placeholders)
              </div>
              <div className="text-xs text-slate-500">Scroll to view</div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {placeholders.map((placeholder) => (
                <div
                  key={placeholder.id}
                  className="min-w-[200px] max-w-[220px] snap-start bg-white border border-dashed border-slate-300 rounded-xl p-4 shadow-sm"
                >
                  <div className="h-24 w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 uppercase">
                    Thumbnail Placeholder
                  </div>
                  <div className="mt-4 text-sm font-bold text-slate-900">{placeholder.title}</div>
                  <div className="mt-1 text-xs text-slate-500 uppercase tracking-widest">Placeholder</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
