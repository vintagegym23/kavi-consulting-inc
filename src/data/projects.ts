export type ProjectCategory =
  | 'Transportation & Roadway'
  | 'Drainage & Stormwater'
  | 'Hydraulic Engineering'
  | 'Infrastructure Assessment'
  | 'Capital Improvement';

export const FILTER_CATEGORIES: string[] = [
  'All Projects',
  'Transportation & Roadway',
  'Drainage & Stormwater',
  'Hydraulic Engineering',
  'Infrastructure Assessment',
  'Capital Improvement',
];

export interface Project {
  id: string;
  title: string;
  client: string;
  categories: ProjectCategory[];
  description: string;
  deliverables: string[];
}

export const projects: Project[] = [
  {
    id: 'us-69-corridor',
    title: 'US 69 Corridor',
    client: 'TxDOT',
    categories: ['Transportation & Roadway', 'Hydraulic Engineering'],
    description:
      'Provided extensive civil engineering services including roadway reconstruction, hydrologic and hydraulic modeling, utility design, storm drainage improvements, and construction support.',
    deliverables: [
      'Conducted H&H analysis for 30 stream crossings',
      'Evaluated and designed culverts and bridges using HEC-HMS, HY-8, XP-SWMM, and HEC-RAS 2D',
      'Full compliance with TxDOT\'s Hydraulic Design Manual',
    ],
  },
  {
    id: 'kirkwood-briar-forest',
    title: 'Kirkwood-Briar Forest Neighborhood Improvements',
    client: 'City of Houston',
    categories: ['Drainage & Stormwater'],
    description:
      'Comprehensive drainage and paving improvements involving 200,000 linear feet of storm sewer infrastructure to address chronic flooding issues.',
    deliverables: [
      'Hydrologic modeling using XP-SWMM, HEC-RAS, and HEC-HMS',
      'Evaluated outfall impacts to Buffalo Bayou',
      'Completed Phase I & II design and construction documents',
    ],
  },
  {
    id: 'cartwright-roadway',
    title: 'Cartwright Roadway Improvements',
    client: 'Fort Bend County',
    categories: ['Transportation & Roadway'],
    description:
      'Designed reconstruction of over half a mile of 4-lane roadway with associated drainage improvements, including two right-turn lanes.',
    deliverables: [
      'H&H analysis using EPA SWMM and HEC-RAS',
      'Coordination with TxDOT for FM 1092 integration',
      'Full construction phase services provided',
    ],
  },
  {
    id: 'post-oak-boulevard',
    title: 'Post Oak Boulevard Reconstruction',
    client: 'City of Houston',
    categories: ['Transportation & Roadway'],
    description:
      "Total roadway and utility reconstruction for one of Houston's premier corridors, funded in part by the Federal Transit Administration (FTA) and built to federal compliance standards.",
    deliverables: [
      'Dedicated bus lanes design',
      '90-inch storm pipe installations',
      'Complete water and sewer system upgrades',
      'Federal compliance standards implementation',
    ],
  },
  {
    id: 'grand-parkway-segment-e',
    title: 'Grand Parkway Segment E',
    client: 'Harris County Toll Road Authority (HCTRA)',
    categories: ['Transportation & Roadway'],
    description:
      'Designed 6,700 feet of toll road infrastructure with comprehensive stormwater management systems and full intersection improvements.',
    deliverables: [
      '13 cross-drainage culverts',
      'Regional detention systems',
      'Retaining wall design',
      'Utility coordination and intersection design for West Road',
    ],
  },
  {
    id: 'wallisville-road',
    title: 'Wallisville Road Reconstruction',
    client: 'City of Houston',
    categories: ['Transportation & Roadway'],
    description:
      'Delivered full design services for 1.6-mile roadway reconstruction in a complex urban environment involving multiple agency coordination.',
    deliverables: [
      'Drainage improvements and geometric design',
      'Railroad and HCFCD coordination',
      'Construction traffic control plans (TCP)',
      'Storm Water Pollution Prevention Plan (SWPPP)',
    ],
  },
  {
    id: 'shepherd-durham',
    title: 'Shepherd-Durham Reconstruction',
    client: 'City of Houston',
    categories: ['Transportation & Roadway'],
    description:
      'Designed reconstruction of 8,200 linear feet of roadway northwest of downtown Houston, incorporating multimodal and complete streets elements.',
    deliverables: [
      'Dedicated bike lanes',
      'Bus stop improvements',
      'Storm sewer and waterline upgrades',
      'Traffic control design and street lighting system',
    ],
  },
  {
    id: 'inwood-forest',
    title: 'Inwood Forest Area Subprojects 1 & 2',
    client: 'City of Houston',
    categories: ['Transportation & Roadway', 'Capital Improvement'],
    description:
      'Comprehensive reconstruction design for 18 streets totaling 20,500 linear feet of neighborhood infrastructure.',
    deliverables: [
      'Roadway geometry improvements',
      'Storm sewer system design',
      'Water and wastewater system upgrades',
      'ADA-compliant ramps and street lighting',
    ],
  },
  {
    id: 'q134-basin',
    title: 'Q-134 Basin Analysis',
    client: 'Harris County Flood Control District (HCFCD)',
    categories: ['Drainage & Stormwater', 'Hydraulic Engineering'],
    description:
      'Designed regional detention facilities and channel improvements for comprehensive flood mitigation in the Q-134 drainage basin.',
    deliverables: [
      'HEC-RAS 2D hydraulic modeling',
      'Updated Atlas 14 hydrology',
      'Revised existing conditions models',
      'Future phase structure sizing',
    ],
  },
  {
    id: 'bridge-scour-analysis',
    title: 'Bridge Scour Analysis',
    client: 'TxDOT – Austin District',
    categories: ['Hydraulic Engineering', 'Infrastructure Assessment'],
    description:
      'Analyzed 200 bridges for scour vulnerability using advanced hydraulic modeling and FEMA/TxDOT methodologies.',
    deliverables: [
      'HEC-RAS hydraulic modeling',
      'FEMA/TxDOT methodology compliance',
      'Field inspections for all 200 bridges',
      'Scour mitigation recommendations',
    ],
  },
  {
    id: 'bissonnet-paving',
    title: 'Bissonnet Paving & Drainage Improvements',
    client: 'City of Houston',
    categories: ['Drainage & Stormwater', 'Transportation & Roadway'],
    description:
      'Developed comprehensive drainage impact analysis and designed major infrastructure upgrades with full federal compliance.',
    deliverables: [
      'Storm sewer improvements (2,454 pipes)',
      'Water and sanitary system upgrades',
      'Roadway reconstruction',
      'Federal standards compliance',
    ],
  },
  {
    id: 'wycliffe-drainage',
    title: 'Wycliffe Drainage Improvements',
    client: 'City of Houston',
    categories: ['Drainage & Stormwater'],
    description:
      'Delivered comprehensive drainage, paving, and utility design to improve neighborhood resilience and quality of life.',
    deliverables: [
      'Sidewalk improvements',
      'Street lighting design',
      'Traffic control plans and SWPPP',
      'Urban forestry coordination',
    ],
  },
  {
    id: 'pre-engineering-cip',
    title: 'Pre-Engineering for Paving & Drainage',
    client: 'City of Houston',
    categories: ['Capital Improvement'],
    description:
      'Developed schematic-level street and drainage solutions for areas targeted for Capital Improvement Program (CIP) inclusion, supporting planning-level decisions.',
    deliverables: [
      'Field investigations and site assessments',
      'Traffic and right-of-way (ROW) analysis',
      '2-year/100-year hydrodynamic modeling',
      'Planning decision support documentation',
    ],
  },
  {
    id: 'neighborhood-drainage-wd83-wd112',
    title: 'Neighborhood Drainage Improvements (WD83 & WD112)',
    client: 'City of Houston',
    categories: ['Drainage & Stormwater'],
    description:
      'Evaluated storm sewer capacity and recommended system upgrades for two drainage wards using advanced modeling tools per City of Houston HPW design standards.',
    deliverables: [
      'XP-SWMM capacity modeling',
      'System upgrade recommendations',
      'Full HPW design standards compliance',
    ],
  },
];
