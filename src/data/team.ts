import vijaya from '../../images/Vijaya Rapolu.png';
import aravind from '../../images/Aravind Nimma.png';

export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'vijaya-rapolu',
    name: 'Vijaya Rapolu',
    credentials: 'P.E.',
    role: 'President & Principal Engineer',
    experience: '29 Years',
    image: vijaya,
    specialties: [
      'Transportation Engineering',
      'Hydrologic & Hydraulic Design',
      'Program Management',
      'Strategic Planning',
      'Public Sector Coordination'
    ],
    bio: 'Vijaya leads KAVI Consulting with nearly three decades of experience in civil engineering and infrastructure delivery. His expertise spans transportation systems, complex drainage design, and large-scale project management. Vijaya has successfully shepherded numerous major projects through feasibility, design, and construction phases.'
  },
  {
    id: 'aravind-nimma',
    name: 'Aravind Nimma',
    credentials: 'P.E., CFM',
    role: 'Director of Operations',
    experience: '17 Years',
    image: aravind,
    specialties: [
      'Drainage & Stormwater Management',
      'Certified Floodplain Management',
      'Construction Services',
      'Municipal Engineering',
      'Regulatory Compliance'
    ],
    bio: 'Aravind brings extensive operational expertise and floodplain management certification to KAVI\'s team. With 17 years of experience, he specializes in complex drainage systems, municipal projects, and construction phase services. His CFM certification demonstrates his commitment to floodplain management excellence.'
  }
];
