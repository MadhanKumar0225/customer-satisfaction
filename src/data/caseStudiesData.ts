import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'retail-waiting-time',
    sector: 'Omnichannel & Brick-and-Mortar Retail',
    title: 'Reducing Customer Waiting Time through Dynamic Staffing & Mobile POS',
    companyProfile: 'A high-volume lifestyle retail network with 42 urban locations handling over 180,000 monthly transactions.',
    customerProblem: 'Long peak-hour checkout lines (averaging 14.5 minutes on weekend afternoons) resulted in a 22% cart abandonment rate, frustrated shopper disputes, and plummeting store-level CSAT scores.',
    managementChallenge: 'Store managers adhered to rigid, static shift schedules without real-time foot-traffic forecasting. Floor staff were discouraged from leaving restocking tasks to assist cashier counters due to contradictory departmental KPIs.',
    managementDecision: 'The executive leadership team transitioned from static scheduling to demand-driven labor allocation and equipped floor associates with mobile point-of-sale (mPOS) terminals to eliminate physical queue constraints.',
    operationalChanges: [
      'Implemented foot-traffic sensor analytics predicting rush periods 45 minutes in advance.',
      'Trained all 350 floor associates to operate hand-held mobile checkout devices.',
      'Re-aligned store metrics: checkout speed and customer satisfaction weighted equal to sales volume in manager bonuses.',
      'Introduced a "Code Blue" protocol: whenever queues exceed 3 customers, designated floor staff immediately initiate line-busting mobile checkout.',
    ],
    cxOutcome: {
      csatBefore: 64,
      csatAfter: 91,
      retentionBefore: '58% repeat shoppers',
      retentionAfter: '79% repeat shoppers',
      keyMetric: 'Peak wait time slashed from 14.5 min to 2.4 min (-83%)',
    },
    keyLessons: [
      'Customer wait time is a direct consequence of managerial workflow design, not customer volume alone.',
      'Breaking down operational silos between floor restocking and checkout operations eliminates artificial capacity bottlenecks.',
      'Technology (mPOS) is only effective when paired with managerial authority and cultural training.',
    ],
  },
  {
    id: 'ecommerce-complaint-resolution',
    sector: 'Digital Commerce & Direct-to-Consumer',
    title: 'Transforming Complaint Resolution with First-Contact Frontline Authority',
    companyProfile: 'A rapidly scaling multi-category e-commerce platform servicing 1.2 million active digital consumers.',
    customerProblem: 'Damaged or misdelivered packages triggered a convoluted 5-step return approval process taking an average of 9 business days. Customers endured repetitive inquiries and 38% reported leaving negative public reviews.',
    managementChallenge: 'Customer support agents had zero financial discretion. Every refund or reshipment request above $25 required supervisor sign-off, resulting in 4,500 backlogged escalation tickets per month and high agent turnover.',
    managementDecision: 'Management instituted a radical "Trust-First" Frontline Resolution Charter, granting customer advocates immediate unilateral authority to refund, reship, or credit up to $200 per incident on first contact.',
    operationalChanges: [
      'Created a single-click resolution dashboard eliminating manual ticket transfers across logistics and billing.',
      'Granted frontline staff instant $200 discretion without managerial pre-approval.',
      'Instituted an algorithmic fraud detection layer that flags high-risk accounts passively, freeing agents to focus entirely on customer empathy.',
      'Established daily cross-functional feedback standups between Customer Support and Warehouse Logistics to fix root-cause packaging flaws.',
    ],
    cxOutcome: {
      csatBefore: 58,
      csatAfter: 94,
      retentionBefore: '41% 90-day repeat order rate',
      retentionAfter: '74% 90-day repeat order rate',
      keyMetric: 'Mean resolution time collapsed from 9 days to 18 minutes',
    },
    keyLessons: [
      'Managerial control mechanisms that prioritize minor fraud prevention often cost far more in destroyed customer lifetime value.',
      'Frontline empowerment dramatically boosts employee pride and retention while instantly turning upset clients into loyal brand champions.',
      'Complaints provide the most accurate real-time telemetry on supply chain and packaging failures.',
    ],
  },
  {
    id: 'hospitality-service-quality',
    sector: 'Premium Hospitality & Guest Services',
    title: 'Elevating Service Quality via Servant Leadership & Total Guest Immersion',
    companyProfile: 'A boutique luxury hotel collection comprising 8 properties catering to business executives and discerning leisure travelers.',
    customerProblem: 'Online ratings had plateaued at 3.6/5 stars with repeated guest comments highlighting robotic, disinterested staff, inflexible check-in policies, and lack of personalized attention during stay disruptions.',
    managementChallenge: 'A traditional command-and-control hierarchy discouraged staff initiative. Housekeeping, concierge, and food & beverage teams operated in complete isolation with zero cross-departmental communication.',
    managementDecision: 'The managing director dismantled traditional hierarchical oversight, adopting a Servant Leadership model where general managers actively support frontline teams, paired with a $2,000 annual personal guest delight fund per department.',
    operationalChanges: [
      'Replaced 40-page rigid policy rulebooks with 4 core service principles centered on guest comfort and proactive empathy.',
      'Instituted daily 15-minute cross-departmental "Guest Story Huddles" to share specific guest preferences and upcoming VIP milestones.',
      'Authorized all staff—from room attendants to front desk clerks—to deploy up to $150 instantly to solve any guest inconvenience.',
      'Tied executive quarterly bonuses directly to Net Promoter Scores and guest recognition mentions of frontline personnel.',
    ],
    cxOutcome: {
      csatBefore: 71,
      csatAfter: 96,
      retentionBefore: '34% annual corporate rebooking',
      retentionAfter: '68% annual corporate rebooking',
      keyMetric: 'Average TripAdvisor / Google rating climbed from 3.6 to 4.9 stars',
    },
    keyLessons: [
      'Customer satisfaction cannot be mandated by top-down directives; it is an emotional outcome cultivated through team trust and psychological safety.',
      'When leadership serves the frontline staff, frontline staff naturally serve the customers with authentic warmth.',
      'Small, spontaneous personalized gestures generate disproportionate emotional resonance and lifelong customer loyalty.',
    ],
  },
];

export interface ApproachComparison {
  dimension: string;
  traditionalManagement: string;
  customerCentricManagement: string;
  impactOnSatisfaction: string;
}

export const APPROACH_COMPARISONS: ApproachComparison[] = [
  {
    dimension: 'Decision-Making Speed',
    traditionalManagement: 'Multi-tiered managerial approvals required for minor customer concessions.',
    customerCentricManagement: 'Decentralized frontline discretion backed by clear guiding guardrails.',
    impactOnSatisfaction: 'Instant issue resolution eliminates customer friction and anxiety.',
  },
  {
    dimension: 'Performance Metrics',
    traditionalManagement: 'Call handling duration, cost minimization, transaction count per hour.',
    customerCentricManagement: 'First-contact resolution, customer sentiment, repeat retention.',
    impactOnSatisfaction: 'Staff prioritize solving the human problem rather than ending the call quickly.',
  },
  {
    dimension: 'Inter-Departmental Flow',
    traditionalManagement: 'Siloed departments blame adjacent teams for delays and defects.',
    customerCentricManagement: 'Cross-functional service pods with shared end-to-end customer journey SLAs.',
    impactOnSatisfaction: 'Seamless handoffs ensure customers never repeat context or fall through cracks.',
  },
  {
    dimension: 'Handling Feedback',
    traditionalManagement: 'Annual surveys filed into static executive reports with minimal follow-up.',
    customerCentricManagement: 'Real-time closed-loop outreach to detractors within 24 hours plus continuous kaizen.',
    impactOnSatisfaction: 'Dissatisfied customers feel heard and respected, converting up to 45% into advocates.',
  },
  {
    dimension: 'Frontline Culture',
    traditionalManagement: 'Rigid scripted interactions with punitive audits for slight procedural deviance.',
    customerCentricManagement: 'Empowered, empathetic problem solvers supported by servant leadership.',
    impactOnSatisfaction: 'Authentic care and proactive service elevate emotional brand connection.',
  },
];
