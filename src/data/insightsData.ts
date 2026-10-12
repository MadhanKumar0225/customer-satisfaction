export interface CategorySatisfaction {
  category: string;
  score: number;
  benchmark: number;
  volume: number;
}

export interface FeedbackDistribution {
  name: string;
  value: number;
  color: string;
}

export interface ComplaintCategory {
  category: string;
  count: number;
  resolutionTimeHours: number;
  severity: 'Low' | 'Medium' | 'High';
}

export interface MonthlyTrend {
  month: string;
  csat: number;
  retention: number;
  nps: number;
  complaintCount: number;
}

export interface JourneyStage {
  step: string;
  stageName: string;
  touchpoint: string;
  satisfactionRate: number;
  dropoffRisk: 'Low' | 'Moderate' | 'Elevated';
  keyManagementAction: string;
}

export const MONTHLY_TRENDS_DATA: Record<string, MonthlyTrend[]> = {
  '30d': [
    { month: 'Week 1', csat: 86.2, retention: 89.0, nps: 58, complaintCount: 142 },
    { month: 'Week 2', csat: 87.5, retention: 89.8, nps: 61, complaintCount: 128 },
    { month: 'Week 3', csat: 88.1, retention: 90.6, nps: 63, complaintCount: 115 },
    { month: 'Week 4', csat: 89.4, retention: 91.4, nps: 66, complaintCount: 98 },
  ],
  'q1': [
    { month: 'Jan', csat: 82.5, retention: 86.4, nps: 51, complaintCount: 220 },
    { month: 'Feb', csat: 83.8, retention: 87.2, nps: 54, complaintCount: 204 },
    { month: 'Mar', csat: 85.1, retention: 88.0, nps: 57, complaintCount: 185 },
  ],
  'q2': [
    { month: 'Apr', csat: 86.0, retention: 88.7, nps: 60, complaintCount: 172 },
    { month: 'May', csat: 87.4, retention: 89.9, nps: 63, complaintCount: 151 },
    { month: 'Jun', csat: 88.9, retention: 91.0, nps: 66, complaintCount: 130 },
  ],
  'year': [
    { month: 'Jan', csat: 82.5, retention: 86.4, nps: 51, complaintCount: 220 },
    { month: 'Feb', csat: 83.8, retention: 87.2, nps: 54, complaintCount: 204 },
    { month: 'Mar', csat: 85.1, retention: 88.0, nps: 57, complaintCount: 185 },
    { month: 'Apr', csat: 86.0, retention: 88.7, nps: 60, complaintCount: 172 },
    { month: 'May', csat: 87.4, retention: 89.9, nps: 63, complaintCount: 151 },
    { month: 'Jun', csat: 88.9, retention: 91.0, nps: 66, complaintCount: 130 },
    { month: 'Jul', csat: 89.2, retention: 91.3, nps: 67, complaintCount: 122 },
    { month: 'Aug', csat: 88.8, retention: 90.8, nps: 65, complaintCount: 134 },
    { month: 'Sep', csat: 90.1, retention: 92.0, nps: 69, complaintCount: 110 },
    { month: 'Oct', csat: 91.0, retention: 92.8, nps: 71, complaintCount: 95 },
    { month: 'Nov', csat: 91.5, retention: 93.4, nps: 73, complaintCount: 88 },
    { month: 'Dec', csat: 92.4, retention: 94.1, nps: 75, complaintCount: 76 },
  ],
};

export const CATEGORY_SATISFACTION_DATA: CategorySatisfaction[] = [
  { category: 'Customer Support', score: 89, benchmark: 76, volume: 1840 },
  { category: 'Service Speed', score: 84, benchmark: 71, volume: 2420 },
  { category: 'Product Reliability', score: 92, benchmark: 82, volume: 3100 },
  { category: 'Account Onboarding', score: 88, benchmark: 78, volume: 950 },
  { category: 'Billing & Transparency', score: 86, benchmark: 74, volume: 1420 },
  { category: 'Post-Sale Followup', score: 81, benchmark: 68, volume: 1260 },
];

export const FEEDBACK_SENTIMENT_DATA: FeedbackDistribution[] = [
  { name: 'Delighted (Positive)', value: 68, color: '#2563eb' },
  { name: 'Satisfied (Neutral-Positive)', value: 21, color: '#3b82f6' },
  { name: 'Neutral / Ambivalent', value: 7, color: '#94a3b8' },
  { name: 'Dissatisfied (Negative)', value: 4, color: '#ef4444' },
];

export const COMPLAINT_DISTRIBUTION_DATA: ComplaintCategory[] = [
  { category: 'Response Latency', count: 320, resolutionTimeHours: 3.4, severity: 'Medium' },
  { category: 'Staff Knowledge Gap', count: 180, resolutionTimeHours: 5.1, severity: 'High' },
  { category: 'Billing Discrepancy', count: 145, resolutionTimeHours: 2.2, severity: 'Medium' },
  { category: 'Technical Glitch', count: 125, resolutionTimeHours: 6.8, severity: 'High' },
  { category: 'Delivery Delay', count: 95, resolutionTimeHours: 4.0, severity: 'Low' },
  { category: 'Unclear Policies', count: 65, resolutionTimeHours: 1.5, severity: 'Low' },
];

export const CUSTOMER_JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    stageName: 'Initial Inquiry & Discovery',
    touchpoint: 'Website, sales consult, initial phone query',
    satisfactionRate: 88,
    dropoffRisk: 'Low',
    keyManagementAction: 'Align marketing messaging with service capacity; set realistic lead expectations.',
  },
  {
    step: '02',
    stageName: 'Contract & Onboarding',
    touchpoint: 'Contract signing, account provisioning, welcome orientation',
    satisfactionRate: 85,
    dropoffRisk: 'Moderate',
    keyManagementAction: 'Deploy standard operating onboarding procedures; assign single point of contact.',
  },
  {
    step: '03',
    stageName: 'Active Service Delivery',
    touchpoint: 'Daily service usage, operational interactions',
    satisfactionRate: 91,
    dropoffRisk: 'Low',
    keyManagementAction: 'Institute weekly departmental quality checks and cross-functional SLA audits.',
  },
  {
    step: '04',
    stageName: 'Issue & Complaint Escalation',
    touchpoint: 'Support tickets, escalation desk, billing review',
    satisfactionRate: 79,
    dropoffRisk: 'Elevated',
    keyManagementAction: 'Empower frontline supervisors with instantaneous resolution authority (up to $250 credit).',
  },
  {
    step: '05',
    stageName: 'Renewal & Relationship Review',
    touchpoint: 'Annual executive review, feedback surveys, contract expansion',
    satisfactionRate: 92,
    dropoffRisk: 'Low',
    keyManagementAction: 'Executive sponsor meetings, customer advisory councils, closed-loop feedback surveys.',
  },
];
