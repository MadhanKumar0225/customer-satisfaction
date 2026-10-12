export interface TopicItem {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  iconName: string;
  order: number;
}

export interface MetricCardData {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  subtext: string;
}

export interface StrategyItem {
  id: string;
  name: string;
  category: 'Quality' | 'Speed' | 'Personalization' | 'Resolution' | 'Culture';
  businessProblem: string;
  recommendedAction: string;
  expectedBenefit: string;
  kpi: string;
  difficulty: 'Quick Win' | 'Medium' | 'Strategic';
  timeline: string;
}

export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  companyProfile: string;
  customerProblem: string;
  managementChallenge: string;
  managementDecision: string;
  operationalChanges: string[];
  cxOutcome: {
    csatBefore: number;
    csatAfter: number;
    retentionBefore: string;
    retentionAfter: string;
    keyMetric: string;
  };
  keyLessons: string[];
}

export interface SearchResultItem {
  id: string;
  title: string;
  snippet: string;
  category: string;
  path: string;
}

export interface ConceptDetailedContent {
  id: string;
  conceptNumber: number;
  conceptTitle: string;
  tagline: string;
  topicTitle: string;
  pageTitle: string;
  pageNumber: number;
  overview: string;
  definitionAndExplanation: string;
  theoreticalBackground: {
    title: string;
    description: string;
  }[];
  importanceInManagement: string;
  relationshipToCustomerSatisfaction: string;
  realWorldBusinessExamples: {
    company: string;
    scenario: string;
    intervention: string;
    outcome: string;
  }[];
  practicalManagementStrategies: string[];
  customerAndOperationalImpacts: {
    metricOrArea: string;
    impactDescription: string;
  }[];
  advantagesAndExpectedOutcomes: string[];
  implementationChallengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  keyTakeaways: string[];
}

