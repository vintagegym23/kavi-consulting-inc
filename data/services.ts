export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  tools?: string[];
  overview?: string;
}

export const services: Service[] = [
  {
    id: 'feasibility-studies',
    title: 'Feasibility Studies',
    icon: 'query_stats',
    description: 'Comprehensive preliminary analysis to evaluate project viability, costs, and constraints.',
    overview: 'Feasibility studies provide the foundation for project decision-making, evaluating technical, environmental, financial, and regulatory aspects before significant investment.',
    features: [
      'Preliminary Design & Conceptual Planning',
      'Site Selection Audits & Analysis',
      'Environmental Constraints Assessment',
      'Stakeholder Coordination & Public Impact Analysis',
      'Cost-Benefit Analysis',
      'Regulatory Compliance Evaluation'
    ],
    tools: ['AutoCAD', 'Civil 3D', 'HEC-HMS', 'ArcGIS']
  },
  {
    id: 'transportation-planning',
    title: 'Transportation Planning & Design',
    icon: 'traffic',
    description: 'Expert roadway and intersection design optimized for safety, efficiency, and modern infrastructure standards.',
    overview: 'From urban corridors to regional networks, we design transportation systems that move communities forward with precision and safety.',
    features: [
      'Roadway & Intersection Geometrics',
      'Traffic Signal Impact Analysis',
      'Capacity & Level of Service Studies',
      'ADA-Compliant Pedestrian Infrastructure',
      'Pavement Design & Specifications',
      'Access Management & Sight Distance Analysis',
      'Construction Sequencing & Phasing'
    ],
    tools: ['Civil 3D', 'Synchro', 'HCS+', 'SIDRA', 'TRAFVU']
  },
  {
    id: 'hh-modeling-drainage',
    title: 'H&H Modeling & Drainage Design',
    icon: 'waves',
    description: 'Advanced hydrologic and hydraulic analysis with state-of-the-art modeling for flood mitigation and stormwater management.',
    overview: 'We employ industry-leading models including HEC-RAS and XP-SWMM to design resilient drainage systems that protect communities from flooding.',
    features: [
      'Hydrologic & Hydraulic (H&H) Modeling',
      'Floodplain Analysis & Mapping',
      'Storm Water Management System Design',
      'Bridge Hydraulics & Scour Analysis',
      'Detention & Retention Facility Design',
      'Channel & Culvert Design',
      'FEMA Compliance & Coordination',
      'Climate Resilience Planning'
    ],
    tools: ['HEC-RAS', 'HEC-HMS', 'XP-SWMM', 'EPASWMM', 'HEC-GeoRAS']
  },
  {
    id: 'utility-design',
    title: 'Utility Design',
    icon: 'plumbing',
    description: 'Complete utility infrastructure design including water, sewer, and coordination of public and private systems.',
    overview: 'Critical utility systems demand precision. We design water, sewer, and utility networks that serve communities reliably for decades.',
    features: [
      'Water Distribution System Design',
      'Sanitary & Wastewater Collection Design',
      'Water Quality Analysis & Treatment',
      'Underground Infrastructure Planning',
      'Utility Relocation & Coordination',
      'Public/Private Utility Coordination',
      'Pressure Regulating Valve Systems',
      'Lift Station Design'
    ],
    tools: ['WaterCAD', 'SewerCAD', 'Civil 3D', 'MicroStorm']
  },
  {
    id: 'permitting-agency-coordination',
    title: 'Permitting & Agency Coordination',
    icon: 'verified',
    description: 'Navigate complex regulatory requirements with expert coordination across federal, state, and local agencies.',
    overview: 'Successful projects require seamless coordination with multiple regulatory bodies. Our team champions projects through the entire permitting process.',
    features: [
      'Environmental Permit Applications (NPDES, CWA, etc.)',
      'Right-of-Way & Easement Coordination',
      'Local, State & Federal Compliance',
      'Regulatory Agency Liaison & Negotiations',
      'Entitlement Support & Public Hearings',
      'Floodplain Development Permits',
      'Drainage Easement Acquisition',
      'Field Surveys & Boundary Studies'
    ],
    tools: ['GIS Mapping', 'Plan Review Standards', 'Permit Management Software']
  },
  {
    id: 'construction-phase',
    title: 'Construction Phase Services',
    icon: 'imagesearch_roller',
    description: 'Rigorous oversight during construction ensuring quality, compliance, and adherence to specifications.',
    overview: 'The construction phase is critical. Our engineers provide detailed review and field inspection to ensure projects are built to specification.',
    features: [
      'Shop Drawing Reviews & Approvals',
      'Material Submittals & Testing Verification',
      'Site Inspections & Construction Observation',
      'Quality Control & Quality Assurance',
      'Field Condition Documentation',
      'Change Order Review & Analysis',
      'Progress Monitoring & Reporting',
      'Safety Compliance Audits'
    ]
  },
  {
    id: 'construction-management',
    title: 'Construction Management',
    icon: 'engineering',
    description: 'Full-service construction management delivering projects on schedule, within budget, and with superior quality.',
    overview: 'Expert project management from pre-construction planning through final closeout, ensuring success across all project aspects.',
    features: [
      'Pre-Construction Planning & Estimates',
      'Quality Assurance/Control Programs',
      'Schedule Development & Optimization',
      'Budget Management & Cost Control',
      'Safety Compliance & Risk Management',
      'Contractor Performance Monitoring',
      'Project Scheduling & CPM Updates',
      'Closeout & Punch List Coordination'
    ]
  },
  {
    id: 'program-management',
    title: 'Program Management',
    icon: 'account_tree',
    description: 'Strategic oversight of multi-project portfolios with coordinated delivery across entire programs.',
    overview: 'Large infrastructure programs demand sophisticated management. We coordinate multiple projects, budgets, and stakeholders for unified success.',
    features: [
      'Portfolio-wide Strategy & Planning',
      'Capital Planning & Prioritization',
      'Multi-Project Scheduling & Coordination',
      'Budget Forecasting & Management',
      'Stakeholder Integration & Communication',
      'Risk Assessment & Mitigation',
      'Performance Metrics & Reporting',
      'Resource Allocation & Optimization'
    ]
  },
  {
    id: 'site-development',
    title: 'Site Development',
    icon: 'foundation',
    description: 'Complete site development services for commercial, industrial, and mixed-use projects.',
    overview: 'From concept to final grading, we develop sites that are safe, efficient, and compliant with all regulations.',
    features: [
      'Site Grading & Drainage Plans',
      'Erosion & Sediment Control Design',
      'Stormwater Pollution Prevention Plans (SWPPP)',
      'Commercial & Industrial Pad Design',
      'Utility Infrastructure Layout',
      'ADA Compliance & Accessibility',
      'Parking Lot Design & Layout',
      'Landscape Coordination & Grading'
    ]
  }
];
