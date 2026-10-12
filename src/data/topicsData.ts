import { TopicItem } from '../types';

export const TOPICS: TopicItem[] = [
  {
    id: 'management-foundations',
    path: '/management-foundations/page-1',
    title: 'Management Foundations',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Planning, Organizing, Leading, Coordinating & Continuous Improvement',
    description: 'Explore classical management functions applied directly to customer service excellence across seven sequential deep-dive modules.',
    iconName: 'Building2',
    order: 1,
  },
  {
    id: 'customer-satisfaction',
    path: '/customer-satisfaction/page-1',
    title: 'Customer Satisfaction and Expectations',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Psychology, Measurement Frameworks & Retention Economics',
    description: 'Master expectation-disconfirmation models, customer effort minimization, satisfaction metrics (CSAT/NPS), and loyalty mechanics.',
    iconName: 'BarChart3',
    order: 2,
  },
  {
    id: 'leadership-performance',
    path: '/leadership-performance/page-1',
    title: 'Leadership and Employee Performance',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Servant Leadership, Motivation, Coaching & Frontline Empowerment',
    description: 'Discover how leadership paradigms, frontline autonomy, psychological safety, and balanced appraisals directly shape customer experiences.',
    iconName: 'Users',
    order: 3,
  },
  {
    id: 'experience-strategies',
    path: '/experience-strategies/page-1',
    title: 'Customer Experience Strategies',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Service Quality, Reducing Waiting Time & Complaint Protocols',
    description: 'Implement proven strategies to eliminate service lag, personalize customer touchpoints, and execute 5-step complaint recovery.',
    iconName: 'Compass',
    order: 4,
  },
  {
    id: 'communication-relationships',
    path: '/communication-relationships/page-1',
    title: 'Communication and Customer Relationships',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Active Listening, Transparency, Trust & Lifelong Engagement',
    description: 'Learn business communication fundamentals, conflict de-escalation, the trust equation, and executive relationship councils.',
    iconName: 'MessageSquare',
    order: 5,
  },
  {
    id: 'service-quality',
    path: '/service-quality/page-1',
    title: 'Service Quality and Business Performance',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Total Quality Standards, Operational Efficiency & Financial ROI',
    description: 'Apply SERVQUAL dimensions, Lean waste elimination, balanced scorecards, and Return on Quality (ROQ) calculations.',
    iconName: 'TrendingUp',
    order: 6,
  },
  {
    id: 'case-studies',
    path: '/case-studies/page-1',
    title: 'Business Case Studies',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Empirical Turnarounds in Retail, E-Commerce & Hospitality',
    description: 'Detailed analysis of management decisions, operational interventions, and customer satisfaction turnarounds across three distinct industries.',
    iconName: 'Briefcase',
    order: 7,
  },
  {
    id: 'improvement-plan',
    path: '/improvement-plan/page-1',
    title: 'Customer Satisfaction Improvement Plan',
    subtitle: '7-Page Connected Sequence',
    tagline: 'Diagnostic Audits, Problem Identification & 120-Day Roadmaps',
    description: 'Step-by-step executive blueprint for assessing current maturity, setting SMART targets, selecting strategies, and executing roadmaps.',
    iconName: 'Cpu',
    order: 8,
  },
];

export function getTopicByPath(path: string): TopicItem | undefined {
  return TOPICS.find((t) => t.path === path || path.startsWith(t.path.replace('/page-1', '')));
}

export function getAdjacentTopics(currentPath: string): {
  prev: TopicItem | null;
  next: TopicItem | null;
} {
  const currentIndex = TOPICS.findIndex((t) => currentPath.startsWith(t.path.replace('/page-1', '')));
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  const prev = currentIndex > 0 ? TOPICS[currentIndex - 1] : null;
  const next = currentIndex < TOPICS.length - 1 ? TOPICS[currentIndex + 1] : null;
  return { prev, next };
}
