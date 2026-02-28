export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  category: 'primary' | 'professional' | 'technical' | 'compliance';
  icon?: string;
  color?: string;
}

// Primary Certifications
export const primaryCertifications: Certification[] = [
  {
    id: 'mbe',
    title: 'Minority Business Enterprise',
    issuer: 'State of Texas',
    category: 'primary',
    icon: 'verified',
    color: '#2B6CB0'
  },
  {
    id: 'dbe',
    title: 'Disadvantaged Business Enterprise',
    issuer: 'Federal Highway Administration',
    category: 'primary',
    icon: 'verified',
    color: '#2B6CB0'
  },
  {
    id: 'hub',
    title: 'Historically Underutilized Business',
    issuer: 'State of Texas / City of Houston',
    category: 'primary',
    icon: 'verified',
    color: '#2B6CB0'
  }
];

// Additional Professional Certifications
export const allCertifications: Certification[] = [
  ...primaryCertifications,
  {
    id: 'pe-license',
    title: 'Professional Engineer License',
    issuer: 'Texas Board of Professional Engineers',
    year: 2010,
    category: 'professional'
  },
  {
    id: 'cfm-certification',
    title: 'Certified Floodplain Manager',
    issuer: 'Association of State Floodplain Managers',
    year: 2012,
    category: 'professional'
  },
  {
    id: 'aicp-certification',
    title: 'AICP - American Institute of Certified Planners',
    issuer: 'American Planning Association',
    year: 2014,
    category: 'professional'
  },
  {
    id: 'cfe-certification',
    title: 'Certified Flood Damage Estimator',
    issuer: 'Academy of Hazard Mitigation',
    year: 2015,
    category: 'professional'
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Certified',
    issuer: 'International Organization for Standardization',
    year: 2018,
    category: 'compliance'
  },
  {
    id: 'heca-member',
    title: 'HECA Member - Hydraulic Engineering',
    issuer: 'Houston Engineering Council Alliance',
    year: 2016,
    category: 'professional'
  },
  {
    id: 'asce-member',
    title: 'ASCE - American Society of Civil Engineers',
    issuer: 'American Society of Civil Engineers',
    year: 2008,
    category: 'professional'
  },
  {
    id: 'texeng-member',
    title: 'Texas Society of Professional Engineers',
    issuer: 'Texas Society of Professional Engineers',
    year: 2008,
    category: 'professional'
  },
  {
    id: 'storm-cert',
    title: 'Stormwater Management Specialist',
    issuer: 'Storm Water Management Institute',
    year: 2017,
    category: 'technical'
  },
  {
    id: 'hec-training',
    title: 'HEC-RAS & HEC-HMS Expert Certification',
    issuer: 'USACE Hydraulic Engineering Center',
    year: 2016,
    category: 'technical'
  },
  {
    id: 'xp-swmm',
    title: 'XP-SWMM Modeling Specialist',
    issuer: 'XP Corporation',
    year: 2015,
    category: 'technical'
  },
  {
    id: 'civil3d-cert',
    title: 'Autodesk Civil 3D Expert',
    issuer: 'Autodesk Certified Instructor',
    year: 2018,
    category: 'technical'
  },
  {
    id: 'gis-cert',
    title: 'GIS Professional Certification',
    issuer: 'Esri GIS Training Alliance',
    year: 2017,
    category: 'technical'
  },
  {
    id: 'project-mgmt',
    title: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    year: 2014,
    category: 'professional'
  },
  {
    id: 'osha-30',
    title: 'OSHA 30-Hour Construction Safety',
    issuer: 'Occupational Safety and Health Administration',
    year: 2019,
    category: 'compliance'
  }
];
