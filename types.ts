
export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  image: string;
}
