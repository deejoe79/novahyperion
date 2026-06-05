// Central content source for the Nova Hyperion Kft site.
// Keeping copy here keeps pages consistent with the architecture in CLAUDE.md.

export const company = {
  name: 'Nova Hyperion Kft',
  short: 'Nova Hyperion',
  tagline: 'Build smarter. Ship faster.',
  blurb:
    'Nova Hyperion is a product engineering studio building AI, web, mobile and cloud software for ambitious teams — from first working demo to scaled platform.',
  address: '1036 Budapest, Cserszömörce út 32',
  vat: 'Adószám HU12345678 · Cégjegyzékszám 01-09-123456',
  email: 'hello@novahyperion.hu',
  phone: '+36 70 280 9179',
}

export const nav = [
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
]

export const services = [
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    summary:
      'From generative AI agents to production ML, we build models that move real business metrics.',
    items: [
      'Generative AI development',
      'AI agent & automation development',
      'ML model development & MLOps',
      'AI consulting & strategy',
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    summary:
      'Full-stack product teams that turn ideas into resilient, well-tested software.',
    items: [
      'Web development',
      'Mobile development (iOS / Android)',
      'SaaS & product development',
      'Enterprise software',
      'UI/UX design',
    ],
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    summary: 'Trustworthy data pipelines and analytics that feed every decision and model.',
    items: ['Data analytics & BI', 'Data pipelines & ETL', 'Data annotation & labeling'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    summary: 'Reliable infrastructure, fast pipelines, and observable systems by default.',
    items: ['DevOps & CI/CD', 'Cloud migration', 'Infrastructure as code', 'SRE & monitoring'],
  },
  {
    slug: 'web3-blockchain',
    title: 'Web3 & Blockchain',
    summary: 'Secure smart contracts and decentralized apps audited for the real world.',
    items: ['Blockchain development', 'Smart contracts', 'dApps & wallets'],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    summary: 'Security woven through the lifecycle, from threat modeling to compliance.',
    items: ['Security assessments', 'Compliance (SOC 2, GDPR)', 'AI-powered threat detection'],
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    summary: 'Automated and manual quality engineering that catches issues before users do.',
    items: ['Test automation', 'Performance testing', 'Manual & exploratory QA'],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    summary: 'Pragmatic technical strategy, architecture reviews and team enablement.',
    items: ['Architecture & audits', 'Tech due diligence', 'Team enablement'],
  },
]

export const solutions = [
  {
    title: 'Flaree — Employee Engagement',
    type: 'SaaS Platform',
    summary:
      'A white-label rewards and recognition platform that lifts retention with gamified engagement.',
  },
  {
    title: 'MR. Agent — AI Sales Consultant',
    type: 'AI Product',
    summary:
      'A 24/7 conversational agent that qualifies leads, books calls and answers product questions.',
  },
  {
    title: 'LedgerFlow — Payments Toolkit',
    type: 'Accelerator',
    summary:
      'Pre-built money-movement primitives: KYC, ledgers and reconciliation to launch fintech faster.',
  },
  {
    title: 'AssetIQ — Proptech Suite',
    type: 'Accelerator',
    summary:
      'Property and tenant management building blocks with dashboards, billing and IoT hooks.',
  },
]

export const industries = [
  {
    slug: 'fintech',
    title: 'Fintech & Banking',
    summary: 'Compliant payments, lending and wealth platforms built for scale and trust.',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    summary: 'HIPAA-aware telehealth, patient apps and clinical data tooling.',
  },
  {
    slug: 'proptech',
    title: 'Proptech / Real Estate',
    summary: 'Property management, marketplaces and smart-building platforms.',
  },
  {
    slug: 'retail',
    title: 'Retail & E-commerce',
    summary: 'Storefronts, loyalty and personalization that convert.',
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    summary: 'Routing, visibility and warehouse automation in real time.',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    summary: 'Industrial IoT, predictive maintenance and digital twins.',
  },
  {
    slug: 'startups',
    title: 'Startups',
    summary: 'From MVP to Series-B scale, with a demo in your first week.',
  },
]

export const technologies = [
  {
    group: 'Languages & Frameworks',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    group: 'Platforms & Cloud',
    items: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Vercel'],
  },
  {
    group: 'AI / ML Tooling',
    items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Anthropic', 'Hugging Face', 'pgvector'],
  },
  {
    group: 'Data & Storage',
    items: ['PostgreSQL', 'Snowflake', 'BigQuery', 'Kafka', 'Redis', 'dbt'],
  },
]

export const work = [
  {
    title: 'Flaree',
    industry: 'HR Tech',
    summary: 'Rewards platform that grew to 120k monthly active employees across 40 companies.',
    result: '+32% retention',
    tags: ['React', 'Node.js', 'AWS'],
  },
  {
    title: 'PulseDate',
    industry: 'Social',
    summary: 'A dating app with on-device matching and a sub-second realtime chat layer.',
    result: '1.2M downloads',
    tags: ['React Native', 'Go', 'Redis'],
  },
  {
    title: 'SendWise',
    industry: 'Fintech',
    summary: 'Cross-border money transfer app with KYC, multi-currency wallets and fraud scoring.',
    result: '$80M moved / mo',
    tags: ['TypeScript', 'PostgreSQL', 'ML'],
  },
  {
    title: 'AssetIQ',
    industry: 'Proptech',
    summary: 'Property management system unifying leases, billing and maintenance for 9k units.',
    result: '-40% admin time',
    tags: ['Next.js', 'Python', 'GCP'],
  },
  {
    title: 'RouteCast',
    industry: 'Logistics',
    summary: 'Real-time fleet routing that cut average delivery time with predictive ETAs.',
    result: '-18% fuel cost',
    tags: ['Go', 'Kafka', 'Kubernetes'],
  },
  {
    title: 'MR. Agent',
    industry: 'AI',
    summary: 'A generative sales agent embedded on client sites, qualifying leads 24/7.',
    result: '3x booked calls',
    tags: ['LangChain', 'OpenAI', 'pgvector'],
  },
]

export const engagementModels = [
  {
    title: 'Dedicated Team',
    summary:
      'A cross-functional squad that owns your roadmap end-to-end, embedded as part of your company.',
  },
  {
    title: 'Team Extension',
    summary:
      'Senior engineers who plug into your existing team and processes to add capacity fast.',
  },
  {
    title: 'Project-Based',
    summary:
      'A fixed-scope build with a clear milestone plan, ideal for MVPs and well-defined products.',
  },
]

export const testimonials = [
  {
    quote:
      'Nova Hyperion delivered a working demo in the first week and a production launch in three months. They felt like our own team.',
    name: 'Marta K.',
    role: 'VP Product, fintech scale-up',
  },
  {
    quote:
      'The AI agent they built now handles the majority of our inbound qualification. The engineering quality is genuinely high.',
    name: 'David L.',
    role: 'CEO, B2B SaaS',
  },
  {
    quote:
      'Clear communication, sensible architecture, no drama. We have shipped together for two years and counting.',
    name: 'Priya S.',
    role: 'CTO, proptech platform',
  },
]

export const stats = [
  { num: '120+', label: 'Products shipped' },
  { num: '7 days', label: 'To first working demo' },
  { num: '4.9/5', label: 'Average client rating' },
  { num: '10+ yrs', label: 'Engineering experience' },
]

export const clients = ['Flaree', 'SendWise', 'PulseDate', 'AssetIQ', 'RouteCast', 'meet2more']

export const faqs = [
  {
    q: 'What services does Nova Hyperion offer?',
    a: 'We cover the full product lifecycle: AI & machine learning, web and mobile development, data engineering, cloud & DevOps, Web3, cybersecurity, QA, and technical consulting.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on scope and engagement model. Most projects start with a fixed-price discovery sprint; ongoing work is billed monthly per dedicated team or team-extension seat. You always get a written estimate before we begin.',
  },
  {
    q: 'How big is the team you assign?',
    a: 'A typical squad is 3–6 people — a product engineer or two, a designer, a QA engineer and a tech lead — scaling up or down as the roadmap demands.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'TypeScript, React, Next.js and Node.js on the web; React Native, Swift and Kotlin on mobile; Python and Go on the backend; and a modern AI stack including PyTorch, LangChain and the OpenAI and Anthropic APIs.',
  },
  {
    q: 'How long does a project take?',
    a: 'You will see a working demo within 7 days of kick-off. A focused MVP usually ships in 8–12 weeks, while larger platforms run as continuous, milestone-based engagements.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We offer maintenance, monitoring and iteration plans, and most clients keep a dedicated or extension team in place to keep evolving the product.',
  },
  {
    q: 'Who owns the code and IP?',
    a: 'You do — fully. All source code, designs and intellectual property are yours, and we are happy to sign an NDA before any conversation.',
  },
]
