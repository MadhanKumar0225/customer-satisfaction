import { StrategyItem } from '../types';

export const STRATEGIES_LIST: StrategyItem[] = [
  {
    id: 'strat-1',
    name: 'Frontline Empowerment Charter',
    category: 'Resolution',
    businessProblem: 'Customer issues stall across multiple approval tiers, causing multi-day delays and escalating frustration.',
    recommendedAction: 'Institute a tiered discretionary resolution threshold allowing frontline agents to immediately issue refunds, replacements, or priority upgrades without supervisory escalation.',
    expectedBenefit: 'Reduces first-contact resolution cycle time by 65%; restores customer confidence immediately at point of failure.',
    kpi: 'First-Contact Resolution Rate (FCR) > 85%',
    difficulty: 'Quick Win',
    timeline: '2–4 weeks',
  },
  {
    id: 'strat-2',
    name: 'Omnichannel Customer Queue Optimization',
    category: 'Speed',
    businessProblem: 'Disjointed communication channels create repetitive explanations, long queues, and fragmented customer histories.',
    recommendedAction: 'Consolidate email, live chat, phone, and messaging into a single unified customer profile dashboard with skill-based intelligent routing.',
    expectedBenefit: 'Customers never repeat context; wait times drop sharply as inquiries automatically reach appropriate specialist teams.',
    kpi: 'Average Queue Waiting Time < 90 seconds',
    difficulty: 'Medium',
    timeline: '6–8 weeks',
  },
  {
    id: 'strat-3',
    name: 'Total Quality Management (TQM) Service Audits',
    category: 'Quality',
    businessProblem: 'Service quality varies widely between branch locations, shifts, and individual account teams.',
    recommendedAction: 'Establish standard operating service benchmarks, weekly peer calibration sessions, and random double-blind interaction reviews by quality leads.',
    expectedBenefit: 'Standardizes high-touch experience consistency across all customer touchpoints and geographic regions.',
    kpi: 'Service Quality Consistency Score >= 94%',
    difficulty: 'Strategic',
    timeline: '8–12 weeks',
  },
  {
    id: 'strat-4',
    name: 'Contextual Lifecycle Personalization',
    category: 'Personalization',
    businessProblem: 'Generic, transactional communications make long-standing clients feel undervalued and treated like ticket numbers.',
    recommendedAction: 'Equip relationship managers with behavioral milestones, customer preferences, and customized milestone checkpoints tailored to client industry.',
    expectedBenefit: 'Deepens emotional brand loyalty, elevates Net Promoter Score, and accelerates account expansion.',
    kpi: 'Customer Lifetime Value (LTV) + 24%',
    difficulty: 'Medium',
    timeline: '4–6 weeks',
  },
  {
    id: 'strat-5',
    name: 'Closed-Loop Voice-of-Customer (VoC) Engine',
    category: 'Culture',
    businessProblem: 'Survey data is collected into siloed reports without directly prompting corrective operational changes.',
    recommendedAction: 'Implement an automated trigger that mandates a senior manager contact every customer providing a score <= 6 within 24 hours, alongside monthly root-cause cross-department reviews.',
    expectedBenefit: 'Converts 40% of dissatisfied clients into brand advocates; prevents recurring systemic operational defects.',
    kpi: 'Detractor Recovery Rate >= 45%',
    difficulty: 'Quick Win',
    timeline: '3–5 weeks',
  },
  {
    id: 'strat-6',
    name: 'Continuous Service Kaizen & Micro-Sprints',
    category: 'Quality',
    businessProblem: 'Large quarterly overhaul projects suffer from organizational inertia, slow implementation, and high team resistance.',
    recommendedAction: 'Empower cross-functional pods (Product, Operations, Support) to execute bi-weekly micro-sprints aimed at eliminating single specific friction points.',
    expectedBenefit: 'Fosters a pervasive culture of continuous improvement with measurable cumulative gains each sprint.',
    kpi: 'Friction Touchpoint Reduction: 12 fixes/quarter',
    difficulty: 'Strategic',
    timeline: 'Ongoing',
  },
];

export interface ComplaintWorkflowStep {
  stepNumber: number;
  title: string;
  department: string;
  sla: string;
  description: string;
  bestPractice: string;
}

export const COMPLAINT_WORKFLOW_STEPS: ComplaintWorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Complaint Received',
    department: 'Frontline Customer Service',
    sla: 'Immediate (< 15 mins)',
    description: 'Acknowledge receipt with empathetic, clear human confirmation and unique reference ID.',
    bestPractice: 'Never use generic robotic auto-replies; confirm understanding of emotional impact.',
  },
  {
    stepNumber: 2,
    title: 'Issue Categorized',
    department: 'Intake & Triage Desk',
    sla: 'Under 30 mins',
    description: 'Tag issue by severity, root cause (Billing, Product, Delivery, Service), and business impact.',
    bestPractice: 'Apply standardized taxonomy to feed ongoing organizational continuous improvement audits.',
  },
  {
    stepNumber: 3,
    title: 'Responsible Team Assigned',
    department: 'Functional Department Head',
    sla: 'Under 1 hour',
    description: 'Direct dispatch to the domain expert with complete historical context and SLA timer active.',
    bestPractice: 'Avoid departmental passing; single assigned owner holds responsibility until resolved.',
  },
  {
    stepNumber: 4,
    title: 'Solution Provided',
    department: 'Resolution Specialist',
    sla: 'Under 4 hours (High Priority)',
    description: 'Deliver actionable, transparent resolution with immediate compensation or rectification where warranted.',
    bestPractice: 'Over-deliver on remedy: provide both the fix and reassurance preventing future reoccurrence.',
  },
  {
    stepNumber: 5,
    title: 'Customer Feedback Collected',
    department: 'Quality Assurance Lead',
    sla: '24–48 hours post-resolution',
    description: 'Verify customer satisfaction with the outcome via a 1-click micro-survey and personal follow-up.',
    bestPractice: 'Close the loop inside CRM; record root-cause insights for monthly leadership reviews.',
  },
];

export interface ChallengeOption {
  id: string;
  title: string;
  description: string;
  recommendedStrategies: string[];
  immediateAction: string;
  suggestedKpi: string;
}

export const BUSINESS_CHALLENGES: ChallengeOption[] = [
  {
    id: 'ch-1',
    title: 'High Customer Churn After Onboarding',
    description: 'New accounts cancel or disengage during the first 90 days due to steep learning curves and slow initial value realization.',
    recommendedStrategies: ['strat-4', 'strat-5'],
    immediateAction: 'Implement proactive Day-7 and Day-30 check-in calls led by dedicated onboarding managers.',
    suggestedKpi: 'First-90-Day Retention Rate: target >= 92%',
  },
  {
    id: 'ch-2',
    title: 'Long Resolution Latency & Support Bottlenecks',
    description: 'Service tickets sit in queue for days awaiting multi-tiered managerial sign-offs.',
    recommendedStrategies: ['strat-1', 'strat-2'],
    immediateAction: 'Empower frontline supervisors with a $300 immediate customer goodwill compensation budget.',
    suggestedKpi: 'Mean Time to Resolution (MTTR): target < 3.5 hours',
  },
  {
    id: 'ch-3',
    title: 'Inconsistent Service Quality Across Branches / Shifts',
    description: 'Customers report outstanding experiences in primary centers, but severe service degradation in satellite locations.',
    recommendedStrategies: ['strat-3', 'strat-6'],
    immediateAction: 'Launch centralized service standard operating procedures and mandatory weekly calibration reviews.',
    suggestedKpi: 'Inter-branch Quality Variance: target < 5%',
  },
  {
    id: 'ch-4',
    title: 'Negative Feedback Loops Ignored by Operations',
    description: 'Dissatisfied feedback sits in customer support databases without executive visibility or operational remediation.',
    recommendedStrategies: ['strat-5', 'strat-6'],
    immediateAction: 'Mandate bi-weekly C-suite review of all detractor tickets with cross-functional departmental leaders.',
    suggestedKpi: 'Detractor Outreach Rate: 100% within 24 hours',
  },
];
