export interface Client {
  id: string;
  name: string;
  category: 'federal' | 'state' | 'county' | 'municipal' | 'private' | 'regional';
  description?: string;
}

export const clients: Client[] = [
  // Federal
  {
    id: 'fema',
    name: 'FEMA',
    category: 'federal',
    description: 'Federal Emergency Management Agency - Flood mapping and mitigation projects'
  },

  // State
  {
    id: 'txdot',
    name: 'TxDOT',
    category: 'state',
    description: 'Texas Department of Transportation - Highway design and corridor improvements'
  },

  // Regional
  {
    id: 'hctra',
    name: 'HCTRA',
    category: 'regional',
    description: 'Harris County Toll Road Authority - Toll road infrastructure and expansion'
  },
  {
    id: 'metro',
    name: 'METRO',
    category: 'regional',
    description: 'Houston Metropolitan Transit Authority - Transit facility design'
  },
  {
    id: 'hcfcd',
    name: 'Harris County Flood Control District',
    category: 'county',
    description: 'Flood mitigation and drainage basin analysis'
  },

  // County
  {
    id: 'harris-county',
    name: 'Harris County',
    category: 'county',
    description: 'County road projects and infrastructure'
  },
  {
    id: 'fort-bend-county',
    name: 'Fort Bend County',
    category: 'county',
    description: 'County transportation and drainage projects'
  },
  {
    id: 'brazoria-county',
    name: 'Brazoria County',
    category: 'county',
    description: 'Regional drainage and highway projects'
  },

  // Municipal
  {
    id: 'city-houston',
    name: 'City of Houston',
    category: 'municipal',
    description: 'Major city with ongoing infrastructure, transportation, and drainage projects'
  },
  {
    id: 'city-bellaire',
    name: 'City of Bellaire',
    category: 'municipal',
    description: 'Municipal utility and roadway improvements'
  },
  {
    id: 'city-spring',
    name: 'City of Spring',
    category: 'municipal',
    description: 'City infrastructure and development projects'
  },
  {
    id: 'city-katy',
    name: 'City of Katy',
    category: 'municipal',
    description: 'Transportation and drainage coordination'
  },
  {
    id: 'city-sugarland',
    name: 'City of Sugar Land',
    category: 'municipal',
    description: 'Master planning and infrastructure design'
  },

  // Regional/Private
  {
    id: 'uptown-tirz',
    name: 'Uptown TIRZ',
    category: 'private',
    description: 'Uptown Houston Tax Increment Reinvestment Zone - Mixed-use development'
  },
  {
    id: 'real-estate-dev',
    name: 'Private Development Firms',
    category: 'private',
    description: 'Commercial and residential site development'
  }
];

// Helper function to group clients by category
export const clientsByCategory = (category?: Client['category']) => {
  if (!category) return clients;
  return clients.filter(c => c.category === category);
};

// Helper to get all unique categories
export const allCategories = Array.from(
  new Set(clients.map(c => c.category))
);
