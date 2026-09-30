// Site content — taken from prima-africa.com (page copy + infographics).
// All editorial changes happen here.

const img = (name) => `/images/${name}.webp`

export const company = {
  name: 'PRIMA AFRICA',
  tagline: 'Research, data & consulting',
  offices: [
    { city: 'Kinshasa', country: 'Democratic Republic of the Congo' },
    { city: 'Bangui', country: 'Central African Republic' },
  ],
  copyrightSince: 2022,
}

export const stats = [
  { value: '7', label: 'Integrated Business Units', note: 'One group, one shared view of the market' },
  { value: '2', label: 'Offices in Central Africa', note: 'Kinshasa & Bangui' },
  { value: '8', label: 'Industries served', note: 'From food to pharma' },
  { value: '24/7', label: 'AI-powered assistance', note: '365 days a year' },
]

export const methods = [
  {
    code: 'CATI',
    icon: 'Phone',
    image: img('cati-agent'),
    title: 'Telephone interviewing',
    text: 'Computer-assisted interviews run from our call floor, with real-time supervision, managed quotas and quality call-backs.',
  },
  {
    code: 'CAPI',
    icon: 'Tablet',
    image: img('field-interviewer'),
    title: 'Face-to-face on tablet',
    text: 'Geo-located, time-stamped fieldwork in urban and rural areas, with consistency checks at the point of entry.',
  },
  {
    code: 'CAWI',
    icon: 'MonitorSmartphone',
    image: img('mobile-user'),
    title: 'Online surveys',
    text: 'Web and mobile questionnaires to reach connected audiences quickly, both B2C and B2B.',
  },
  {
    code: 'QUAL',
    icon: 'MessagesSquare',
    image: img('focus-group'),
    title: 'Focus groups & in-depth interviews',
    text: 'Cross-disciplinary qualitative research: group discussions, one-to-one in-depth interviews and ethnography.',
  },
  {
    code: 'RETAIL',
    icon: 'Store',
    image: img('market-vendor'),
    title: 'Retail audits & mystery shopping',
    text: 'We analyse shopper journeys, consumer needs and behaviour at the point of sale.',
  },
  {
    code: 'DIGITAL',
    icon: 'Radio',
    image: img('data-analysis'),
    title: 'Web & social listening',
    text: 'Innovative, platform-aided approaches to web listening and decoding.',
  },
]

export const process = [
  { step: '01', title: 'Scoping', text: 'Understanding the business question, setting objectives and the study plan.' },
  { step: '02', title: 'Design & sampling', text: 'Choosing the method, building the sample and the questionnaire.' },
  { step: '03', title: 'Fieldwork', text: 'Deploying CATI / CAPI / qualitative teams with daily production tracking.' },
  { step: '04', title: 'Quality & processing', text: 'Quality control, data cleaning, weighting and structuring.' },
  { step: '05', title: 'Analysis & reporting', text: 'Statistical analysis, actionable recommendations and dashboards.' },
]

export const expertises = [
  {
    slug: 'market-research',
    icon: 'ChartColumn',
    name: 'Market Research',
    tone: 'green',
    image: img('field-interviewer'),
    summary: 'Added-value market research supporting our clients’ marketing strategies.',
    intro:
      'PRIMA Market Research provides added-value market research supporting our Clients’ Marketing Strategies — from fieldwork to statistical analysis, we turn data into decisions.',
    columns: [
      {
        title: 'Expertise',
        items: [
          { t: 'Product & service innovation', d: 'We provide you insights on your innovation process.' },
          { t: 'Loyalty & customer experience', d: 'We help you understand and improve the relationship with your stakeholders.' },
          { t: 'Media & brand communication strategy', d: 'We check the status of your brand and help you optimise your communication activities.' },
          { t: 'Social media research', d: 'We monitor the web, intercepting content, behaviours and opinions, searching for new insights on brands and products.' },
          { t: 'Retail & shopping experience', d: 'We support your selling processes by analysing consumer needs and behaviours.' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { t: 'Quantitative studies', d: 'Detection tools for data collection and statistical analysis methods.' },
          { t: 'Qualitative studies', d: 'Cross-disciplinary research methods.' },
          { t: 'Digital', d: 'Innovative, platform-aided approaches to web listening and decoding.' },
          { t: 'Customer data analysis', d: 'Geomarketing, estimation models of geographic potential, customer base segmentation.' },
          { t: 'International studies', d: 'International partners for both qualitative and quantitative surveys.' },
        ],
      },
    ],
  },
  {
    slug: 'business-consulting',
    icon: 'Briefcase',
    name: 'Business Consulting',
    tone: 'sage',
    image: img('business-team'),
    summary: 'Supporting the growth of our clients’ turnover and profit.',
    intro:
      'PRIMA Business Consulting supports the development of its Clients (turnover and profit). We work with our Clients like partners and colleagues to improve their business processes.',
    columns: [
      {
        title: 'Sectors',
        chips: true,
        items: [
          { t: 'Food' }, { t: 'Retail' }, { t: 'Luxury' }, { t: 'Automotive' },
          { t: 'Tourism' }, { t: 'Services' }, { t: 'Logistics' }, { t: 'Pharma' },
        ],
      },
      {
        title: 'Solutions',
        items: [
          { t: 'Baby Future', d: 'Identification of future consumption trends.' },
          { t: 'New Business Scouting', d: 'National and international search for new business opportunities.' },
          { t: 'Customer Networking Management', d: 'Growth in turnover, loyalty and enthusiasm, through both traditional and digital tools.' },
          { t: 'Value Added', d: 'Strategy and growth of corporate value.' },
          { t: 'Design Thinking', d: 'Idea generation, design and implementation of new products and services.' },
          { t: 'Agile Management', d: 'Process and organisational innovation to anticipate and manage changes in the competitive arena.' },
          { t: 'Impact Marketing', d: 'Innovation in marketing processes to align profit objectives, satisfaction and environmental sustainability.' },
        ],
      },
    ],
  },
  {
    slug: 'strategy',
    icon: 'Leaf',
    name: 'Strategy & ESG',
    tone: 'slate',
    image: img('solar'),
    summary: 'Implementing the “Roadmap to ESG” to evaluate and steer responsible investment.',
    intro:
      'The PRIMA Strategy Business Unit supports companies in implementing the “Roadmap to ESG”, used to evaluate responsible investments from a financial management point of view, with reference to Environmental, Social and Corporate Governance international best practices.',
    columns: [
      {
        title: 'Expertise',
        chips: true,
        items: [
          { t: 'ESG strategy' }, { t: 'Climate strategy' }, { t: 'Sustainable finance' }, { t: 'Carbon risk' },
          { t: 'Environmental impact & GHG' }, { t: 'Diversity & inclusion' },
          { t: 'Social impact on labour & human rights' }, { t: 'Green procurement' },
          { t: 'Sustainable supply chain' }, { t: 'Green marketing' }, { t: 'Lifecycle thinking' },
          { t: 'Circular economy transformation' },
        ],
      },
      {
        title: 'Tools',
        chips: true,
        items: [
          { t: 'Sustainability assessment' }, { t: 'Stakeholder engagement' },
          { t: 'Internal carbon pricing' }, { t: 'ESG scoring' }, { t: 'Sustainability reporting (GRI)' },
          { t: 'GHG Protocol (ISO 14064:2018)' }, { t: 'EPD, PEF, OEF' }, { t: 'Circularity assessment' },
          { t: 'Waste reduction & reuse' }, { t: 'Ecodesign & packaging revolution' }, { t: 'Zero plastic' },
          { t: 'Governance & ESG risk assessment' }, { t: 'Due diligence for M&A' },
        ],
      },
    ],
  },
  {
    slug: 'economics-policy',
    icon: 'Landmark',
    name: 'Economics & Policy',
    tone: 'teal',
    image: img('agriculture'),
    summary: 'One of the leading public policy consultancies in Africa, based in Kinshasa and Bangui.',
    intro:
      'PRIMA Economics & Policy — based in Kinshasa & Bangui — is one of the leading public policy consultancies in Africa. All our projects contribute to the development of an effective and efficient public policy system that delivers a better life for African citizens.',
    columns: [
      {
        title: 'Core sectors',
        items: [
          { t: 'Telecoms, digital & space', d: 'We support the assessment of markets, policies and impacts to foster the successful uptake of space, digital and telecommunication programmes.' },
          { t: 'Consumers & the single market', d: 'We support market integration for the benefit of consumers, industry and society.' },
          { t: 'Research & innovation', d: 'We help deliver ambitious growth and jobs targets by fostering innovation and entrepreneurship potential.' },
          { t: 'Social policy', d: 'We help build and evaluate equal opportunity policies, fair working conditions and social protection.' },
          { t: 'Sector expertise', d: 'We have keen knowledge in the fields of energy, transport, environment and agrofood.' },
        ],
      },
      {
        title: 'Services',
        items: [
          { t: 'Impact assessment', d: 'We analyse the impact of policy, regulatory and technological change for business, society and public authorities.' },
          { t: 'Market assessment', d: 'We analyse markets, from the definition of the value chain and of the competitive environment to the quantification of its potential.' },
          { t: 'Cost-benefit analysis & economics', d: 'We help quantify the costs and benefits, and more generally the economic impact, of policy actions.' },
          { t: 'Legal analysis', d: 'We provide legal services to private and public sector clients.' },
          { t: 'Policy & market monitoring', d: 'We advise on policy design & implementation to ensure objectives are met.' },
        ],
      },
    ],
  },
  {
    slug: 'expert-opinion',
    icon: 'Scale',
    name: 'Expert Opinion',
    tone: 'forest',
    image: img('contract'),
    summary: 'Advising international groups on value measurement, alongside leading law firms.',
    intro:
      'PRIMA Expert Opinion, also in partnership with the most important national and international law firms, supports and advises international groups in the complex field of Value Measurement.',
    columns: [
      {
        title: 'Services',
        items: [
          { t: 'Commercial litigations', d: 'We successfully manage commercial litigations and we value economic damages.' },
          { t: 'Valuations and intangibles', d: 'We determine corporate and intangibles value.' },
          { t: 'Transfer pricing', d: 'We define the arm’s length remuneration for intercompany transactions.' },
        ],
      },
      {
        title: 'Transfer pricing expertise',
        items: [
          { t: 'Management of APA, BAPA & MAP', d: 'We negotiate agreements between tax administrations and groups.' },
          { t: 'Business restructurings', d: 'We design the structure most suitable to the business and we measure its tax impacts.' },
          { t: 'TP audits & litigations', d: 'Methodological rigour and responsiveness in dealing with tax litigation.' },
          { t: 'TP policy assessment, design & implementation', d: 'We design and implement custom-tailored TP policies that are robust and flexible.' },
          { t: 'Country file, master file & CbC reporting', d: 'A quality approach to tax burdens: not only compliance.' },
          { t: 'Patent box', d: 'We evaluate company intangibles and the benefit deriving from tax incentives.' },
        ],
      },
    ],
  },
  {
    slug: 'artificial-intelligence',
    icon: 'Cpu',
    name: 'Artificial Intelligence',
    tone: 'blue',
    image: img('ai'),
    summary: 'A conversational AI studio built on natural language processing (NLP).',
    intro:
      'PRIMA AI is part of the Group Digital Business Unit and deals with Artificial Intelligence. It’s a conversational AI studio, based on natural language processing (NLP) and artificial intelligence.',
    columns: [
      {
        title: 'Sectors',
        chips: true,
        items: [
          { t: 'Chatbots' }, { t: 'Artificial intelligence' }, { t: 'Machine learning' },
          { t: 'Marketing platforms' }, { t: 'Conversational marketing' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { t: 'Artificial intelligence platform', d: 'A proprietary AI platform built for continuous improvement: state-of-the-art AI models, a strong focus on data quality, privacy by design and powerful integrations.' },
          { t: 'Automated chat', d: 'A platform designed to offer dedicated, always-available assistance: fully automated chat and customised messages, ready to answer 24h a day, 365 days a year.' },
        ],
      },
    ],
  },
]

// The 7 Business Units of the group ("Our Group" wheel)
export const businessUnits = [
  { name: 'Business Consulting', slug: 'business-consulting' },
  { name: 'Expert Opinion', slug: 'expert-opinion' },
  { name: 'Market Research', slug: 'market-research' },
  { name: 'Economics & Policy', slug: 'economics-policy' },
  { name: 'Omnibus Projects', slug: null },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
  { name: 'Strategy', slug: 'strategy' },
]

export const sectors = [
  'Food', 'Retail', 'Luxury', 'Automotive', 'Tourism', 'Services', 'Logistics', 'Pharma',
  'Telecoms & digital', 'Energy', 'Transport', 'Environment', 'Public sector',
]

export const getExpertise = (slug) => expertises.find((e) => e.slug === slug)
