export interface Project {
  id: string;
  title: string;
  client: string;
  category: string[];
  description: string;
  image: string;
  tools: string[];
  deliverables?: string[];
}

export const projects: Project[] = [
  {
    id: 'us-69-corridor',
    title: 'US 69 Corridor Improvement',
    client: 'TxDOT',
    category: ['Transportation'],
    description: 'Strategic expansion and modernization of the primary urban corridor with traffic pattern optimization and safety improvements.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqSfdbPKboTLF1TWSgTAfkO4yfCvmYMwvn-vjlqXmSiIWDaQ0ftQ-tbXh0BmEw4LXjZoC2hHnan9TJimmpDBNXk6TTN3fxDH402l7tKasYL9re_L0iFL7J977CWMj7QBhkBrudo_WdjPvFDzSbR-Qqh4Oj4tXttcLZr28DXpLsae4tuLXJhOn_10sNJn6h14GkkdKdTyJGvG8KpeW3iDM8YK_9S1-eAqPf-2huO0MT2zE5Z2us7KJK0i_5Qwb7ljy-tYQDLYR2KA',
    tools: ['Civil 3D', 'Synchro', 'HCS+', 'ArcGIS']
  },
  {
    id: 'kirkwood-briar-forest',
    title: 'Kirkwood/Briar Forest Drainage',
    client: 'City of Houston',
    category: ['Drainage', 'Transportation'],
    description: 'Comprehensive storm-water management system to mitigate regional flooding and improve drainage infrastructure.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI2oItfvWX0uFD2JRRCNXeoEHogJlYCJbn8tHhRKMPGDNaZ2u4nNInWGIMGuJmXAlCx_8YJI808y3k12fsTZSrl2DJSyhRDoQ6-tg4eOZbnqP9Ed0iwCcSKUVkq2LkW6f0WjKL6dD-oNcL3sFpbaYTqckfW8yyF2GADYWkrfZ7HQ6OdZnsLpRSEypextz-lQd6FaM8NXYVDSa2qNUEuOCThPymbuk2w5xSBatJE-H5iuDBl1itZ8K0oHfbQDpcN7-NbwjRtt05Qg',
    tools: ['HEC-RAS', 'XP-SWMM', 'HEC-HMS', 'Civil 3D', 'ArcGIS']
  },
  {
    id: 'post-oak-boulevard',
    title: 'Post Oak Boulevard Reconstruction',
    client: 'City of Houston',
    category: ['Transportation', 'Utility'],
    description: 'Modern transit-oriented development and reconstruction of iconic Uptown boulevard with utility relocation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTTbIZJuQcMqNabEBeeT4eEi-dCn-AyXpqW8M9MVhvAY8uj_VfSjrN_rC2WkDY_woj0qIii0DaHiawKSTLghXIexRrgnSeBLniJkC5hrObCrzqCM6sw7jEQabzXuIhT09KPkf-cQtVTS0H3Sp_XT8Z7YjJb0m4q7xn0bGpHfjCLEQqcjjA6oVeqIUnF8PrIsKweLK6DZz26H33SOJcEebEgN5iF7cBz5mD-UaWqQ9H8USd5xZnxLB6Ub558q6V8PO_MUL09wjtg',
    tools: ['Civil 3D', 'WaterCAD', 'SewerCAD', 'GEOPAK']
  },
  {
    id: 'grand-parkway-e',
    title: 'Grand Parkway Segment E',
    client: 'HCTRA / TxDOT',
    category: ['Transportation', 'Utility'],
    description: 'Infrastructure design and utility coordination for major highway outer loop expansion project.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt1JYgoF7E4QTwNW1BRNtIQ47zWWQJ0IEyGD2Vj7umwa-59XAfaWnsNOAXnV4I1XHxnmUTegJZzenDky2Ro0sWyYLbA8-rEuP82iHf-xgsmmQLilqTt94pR2cVlnIFWmEW5cOI4Zz6jfOwwr181hXYw67K2f05t11scjbHft_qzfMRA0UrdEhQ5wMC2fDr_RDul_3O3F7wc9AkWfw8_axFU7eM3J9PnuLexAbVLjmQljqVS9s1dkHFVOaUeaPNeH49hk_Z1QkIjg',
    tools: ['Civil 3D', 'WaterCAD', 'SewerCAD', 'HEC-RAS', 'Bentley OpenRoads']
  },
  {
    id: 'transit-center-hub',
    title: 'Transit Center Hub',
    client: 'METRO',
    category: ['Transportation'],
    description: 'Intermodal transportation facility design and pedestrian accessibility improvements for regional transit center.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBieqw-z75VL-pV2xZFQD6-h_xu_9ZbWLgKYh2ibmAXX3KUMW9i_n3TQ3-C6Pz30phaYd116pbNy4TyQ-23tgmb21FzbuXwbqig_a9syJ0gUF54TmZ0_di842BchNdCL_IcHCvCa0GbSzfK-rvRenPHYBsaPUaUYP-wbXG1f-vDBr6bdNRroYQsewg0VhM95eisGBi1r5G1DoD1cWassj9vsTUfL_MFIjTyHYrSp6PUCLlMhyd2FiaDcrEFvdIipXEYRNJZ_ew72g',
    tools: ['Civil 3D', 'Revit', 'Synchro', 'AutoCAD']
  },
  {
    id: 'cartwright-roadway',
    title: 'Cartwright Roadway Improvements',
    client: 'Fort Bend County',
    category: ['Transportation', 'Drainage'],
    description: 'Reconstruction of 4-lane roadway with associated hydrologic and hydraulic analysis with TxDOT coordination.',
    image: 'https://images.unsplash.com/photo-1545147418-409e4573bc2b?auto=format&fit=crop&q=80&w=1200',
    tools: ['Civil 3D', 'HEC-RAS', 'HEC-HMS', 'Synchro']
  },
  {
    id: 'bissonnet-paving',
    title: 'Bissonnet Paving & Drainage',
    client: 'City of Houston',
    category: ['Drainage', 'Transportation'],
    description: 'Roadway reconstruction and drainage impact analysis with federal FEMA compliance coordination.',
    image: 'https://images.unsplash.com/photo-1541888941259-7907ff14e944?auto=format&fit=crop&q=80&w=1200',
    tools: ['Civil 3D', 'HEC-RAS', 'XP-SWMM', 'SWPPP Design Software']
  },
  {
    id: 'q134-basin',
    title: 'Q-134 Basin Analysis',
    client: 'Harris County Flood Control District',
    category: ['Drainage'],
    description: 'Regional detention and channel design utilizing advanced 2D hydraulic modeling and Atlas 14 hydrology.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    tools: ['HEC-RAS 2D', 'HEC-HMS', 'XP-SWMM', 'ArcGIS', 'Atlas 14']
  },
  {
    id: 'wycliffe-drainage',
    title: 'Wycliffe Drainage Improvements',
    client: 'City of Houston',
    category: ['Drainage', 'Transportation'],
    description: 'Comprehensive drainage, paving, and utility design including traffic control and SWPPP implementation.',
    image: 'https://images.unsplash.com/photo-1590486803833-ffc6f98fb17a?auto=format&fit=crop&q=80&w=1200',
    tools: ['Civil 3D', 'HEC-RAS', 'WaterCAD', 'SewerCAD']
  },
  {
    id: 'bridge-scour-analysis',
    title: 'Bridge Scour Analysis Program',
    client: 'TxDOT',
    category: ['Transportation', 'Drainage'],
    description: 'Hydraulic modeling and inspections for 200+ bridges with mitigation recommendations and technical reports.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200',
    tools: ['HEC-RAS', 'Civil 3D', 'AutoCAD', 'GIS Analysis']
  },
  {
    id: 'shepherd-durham',
    title: 'Shepherd & Durham Reconstruction',
    client: 'City of Houston',
    category: ['Transportation', 'Utility'],
    description: 'Major intersection and corridor reconstruction with utility relocation and traffic analysis.',
    image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&q=80&w=1200',
    tools: ['Civil 3D', 'WaterCAD', 'Synchro', 'HCS+']
  },
  {
    id: 'wallisville-road',
    title: 'Wallisville Road Reconstruction',
    client: 'Harris County',
    category: ['Transportation', 'Drainage'],
    description: 'Complete roadway reconstruction with new drainage systems and intersection improvements.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    tools: ['Civil 3D', 'HEC-RAS', 'XP-SWMM', 'Synchro']
  },
  {
    id: 'bellaire-utilities',
    title: 'Bellaire Utility Infrastructure',
    client: 'City of Bellaire',
    category: ['Utility'],
    description: 'Water distribution and sanitary sewer system design for municipal infrastructure upgrade.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200',
    tools: ['WaterCAD', 'SewerCAD', 'Civil 3D', 'ArcGIS']
  },
  {
    id: 'spring-creek-detention',
    title: 'Spring Creek Detention Basin',
    client: 'Harris County Flood Control District',
    category: ['Drainage'],
    description: 'Large-scale detention basin design for regional stormwater management and flood mitigation.',
    image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&q=80&w=1200',
    tools: ['HEC-RAS', 'HEC-HMS', 'Civil 3D', 'GIS Mapping']
  },
  {
    id: 'uptown-development',
    title: 'Uptown Development Master Plan',
    client: 'Uptown TIRZ',
    category: ['Transportation', 'Site Development', 'Utility'],
    description: 'Comprehensive master planning for mixed-use development with infrastructure coordination.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
    tools: ['Civil 3D', 'WaterCAD', 'SewerCAD', 'Synchro', 'Revit']
  }
];
