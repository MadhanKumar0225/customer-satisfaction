import React, { useState } from 'react';
import {
  Cpu,
  Printer,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sliders,
  Target,
  FileText,
  Calendar,
  Layers,
  ShieldCheck
} from 'lucide-react';
import TopicNavigation from '../components/TopicNavigation';

interface DimensionRating {
  id: string;
  label: string;
  description: string;
  rating: number; // 1 to 5
}

interface ComplaintSimulationResponse {
  id: string;
  name: string;
  actionSummary: string;
  strengths: string;
  weaknesses: string;
  projectedCsatImpact: string;
  riskLevel: 'Low' | 'Medium' | 'High';
}

const INITIAL_RATINGS: DimensionRating[] = [
  {
    id: 'quality',
    label: '1. Service Quality & Consistency',
    description: 'Do services meet high standards uniformly across all locations, channels, and team shifts?',
    rating: 4,
  },
  {
    id: 'responsiveness',
    label: '2. Operational Responsiveness & Speed',
    description: 'How quickly do teams respond to initial customer inquiries and escalations?',
    rating: 3,
  },
  {
    id: 'behavior',
    label: '3. Frontline Empathy & Professionalism',
    description: 'Do employees show genuine empathy, active listening, and ownership of client problems?',
    rating: 4,
  },
  {
    id: 'communication',
    label: '4. Inter-Departmental Communication',
    description: 'Do Product, Operations, and Billing share context seamlessly without customer repetition?',
    rating: 3,
  },
  {
    id: 'complaints',
    label: '5. Complaint Resolution & Empowerment',
    description: 'Can frontline reps immediately authorize refunds or replacements without multi-tier approvals?',
    rating: 2,
  },
];

const SIMULATION_RESPONSES: ComplaintSimulationResponse[] = [
  {
    id: 'response-a',
    name: 'Option A: Strict Policy Enforcement',
    actionSummary: 'Quote Section 4.2 of the client contract stating shipments are non-refundable once dispatched from the warehouse. Offer a 5% discount on the next contract renewal.',
    strengths: 'Protects immediate company cash flow; requires zero managerial deviation.',
    weaknesses: 'Alienates the customer during their moment of crisis; guarantees defection upon contract expiration and severe online reputation harm.',
    projectedCsatImpact: 'CSAT: 12% (Extreme Detractor)',
    riskLevel: 'High',
  },
  {
    id: 'response-b',
    name: 'Option B: Multi-Tier Managerial Escalation',
    actionSummary: 'Inform the customer their request has been logged and submitted to the Regional Director for review within 3–5 business days.',
    strengths: 'Maintains administrative oversight over financial concessions.',
    weaknesses: 'Forces the client to endure anxiety and operational halt; client perceives the business as bureaucratic and indifferent.',
    projectedCsatImpact: 'CSAT: 45% (Neutral-Negative)',
    riskLevel: 'Medium',
  },
  {
    id: 'response-c',
    name: 'Option C: Empowered Instant Resolution (Recommended)',
    actionSummary: 'Frontline agent apologizes empathetically, immediately issues a priority replacement via courier, credits $250 to their invoice, and schedules a 24-hour verification follow-up.',
    strengths: 'Instantly de-escalates crisis; transforms an operational breakdown into an emotional demonstration of company integrity.',
    weaknesses: 'Incurs modest immediate operating cost ($250 credit + priority freight).',
    projectedCsatImpact: 'CSAT: 96% (Promoter & Lifetime Brand Advocate)',
    riskLevel: 'Low',
  },
];

export default function ActionLab() {
  const [ratings, setRatings] = useState<DimensionRating[]>(INITIAL_RATINGS);
  const [selectedProblem, setSelectedProblem] = useState<string>('wait-time');
  const [selectedSimulation, setSelectedSimulation] = useState<string>('response-c');

  const handleRatingChange = (id: string, val: number) => {
    setRatings((prev) =>
      prev.map((r) => (r.id === id ? { ...r, rating: val } : r))
    );
  };

  const totalScore = ratings.reduce((acc, curr) => acc + curr.rating, 0);
  const maxScore = ratings.length * 5;
  const percentageScore = Math.round((totalScore / maxScore) * 100);

  let maturityTier = 'Reactive Service Operations';
  let maturityColor = 'text-rose-600 dark:text-rose-400';
  let maturityAdvice = 'Significant managerial restructuring required across frontline authority and inter-team communication.';

  if (percentageScore >= 80) {
    maturityTier = 'Customer-Centric Leadership Excellence';
    maturityColor = 'text-emerald-600 dark:text-emerald-400';
    maturityAdvice = 'High operational maturity. Focus on continuous kaizen sprints and proactive lifecycle personalization.';
  } else if (percentageScore >= 60) {
    maturityTier = 'Developing Customer Alignment';
    maturityColor = 'text-blue-600 dark:text-blue-400';
    maturityAdvice = 'Solid foundations with localized bottlenecks. Priority should be given to frontline empowerment and SLA monitoring.';
  }

  const handlePrint = () => {
    window.print();
  };

  const resetAssessment = () => {
    setRatings(INITIAL_RATINGS);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8 no-print">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Topic 07 &middot; Executive Diagnostic &amp; Simulation Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Customer Satisfaction Action Lab
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Hands-on diagnostic tools to audit organizational service maturity, simulate customer complaint resolution decisions, and generate executive board-ready action plans.
          </p>
        </div>

        {/* Print / Export Report Button */}
        <button
          onClick={handlePrint}
          className="print-include inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Export Executive Report (PDF)</span>
        </button>
      </div>

      {/* PRINT-ONLY HEADER */}
      <div className="hidden print-only mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">Role of Management in Improving Customer Satisfaction</h1>
        <p className="text-sm text-gray-600">Executive CX Assessment &amp; Operational Action Roadmap</p>
        <p className="text-xs text-gray-500 mt-1">Generated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* TOOL 1: CUSTOMER SATISFACTION ASSESSMENT */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Tool 01 &middot; Self-Diagnostic
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Five-Dimension Customer Experience Assessment
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Rate your organization across the five managerial customer experience dimensions (1 = Critical Deficit, 5 = Industry Leading).
            </p>
          </div>

          <button
            onClick={resetAssessment}
            className="no-print inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Ratings</span>
          </button>
        </div>

        {/* Rating Controls */}
        <div className="space-y-6">
          {ratings.map((dim) => (
            <div
              key={dim.id}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="max-w-xl">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {dim.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {dim.description}
                </p>
              </div>

              {/* 1-5 Numerical Selector Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleRatingChange(dim.id, val)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold font-mono transition-all ${
                      dim.rating === val
                        ? 'bg-blue-600 text-white shadow-xs scale-105'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Generated Summary Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 text-center md:text-left space-y-1">
            <span className="text-xs font-mono text-slate-400 uppercase">
              Calculated Maturity Score
            </span>
            <div className="text-4xl font-extrabold text-blue-400 tabular-nums font-mono">
              {percentageScore}%{' '}
              <span className="text-base text-slate-400 font-normal">
                ({totalScore}/{maxScore} pts)
              </span>
            </div>
            <p className={`text-sm font-bold ${maturityColor}`}>{maturityTier}</p>
          </div>

          <div className="md:col-span-8 space-y-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-white uppercase text-xs block">Executive Diagnostic Summary:</span>
            <p>{maturityAdvice}</p>
            <p className="text-slate-400 pt-1">
              Methodology note: This score is calculated dynamically from your self-reported ratings across service quality, responsiveness, staff behavior, inter-team alignment, and frontline empowerment. It serves as an exploratory operational benchmark.
            </p>
          </div>
        </div>
      </section>

      {/* TOOL 2: MANAGEMENT IMPROVEMENT PLANNER */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Tool 02 &middot; Action Planner
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Management Improvement Solution Planner
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Choose your organization&apos;s most urgent customer challenge to generate recommended management actions and suggested implementation milestones.
          </p>
        </div>

        {/* Problem Selector Dropdown / Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'wait-time', label: 'Prolonged Customer Wait & Hold Times' },
            { id: 'handoff-silos', label: 'Friction in Inter-Departmental Handoffs' },
            { id: 'complaint-escalation', label: 'Overwhelmed Multi-Tier Complaint Queue' },
            { id: 'inconsistent-quality', label: 'Inter-Branch Service Quality Variance' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedProblem(item.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedProblem === item.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Dynamic Action Plan Output */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
              PRIORITY 1: IMMEDIATE (0–14 DAYS)
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Emergency Workflow Unblocking
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProblem === 'wait-time' &&
                'Institute dynamic queue overflow routing and authorize senior team members to handle peak intake spikes.'}
              {selectedProblem === 'handoff-silos' &&
                'Deploy a unified customer ticket dashboard so Support, Billing, and Logistics share real-time customer histories.'}
              {selectedProblem === 'complaint-escalation' &&
                'Grant all frontline representatives a $200 instant discretionary goodwill budget per ticket.'}
              {selectedProblem === 'inconsistent-quality' &&
                'Issue standard operating service guidelines and conduct daily 15-minute alignment standups.'}
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Key Metric: Response Latency &lt; 3 mins
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
              PRIORITY 2: SHORT-TERM (15–60 DAYS)
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Systems &amp; Skill Development
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProblem === 'wait-time' &&
                'Implement self-service client portals and automated AI routing to filter repetitive low-complexity requests.'}
              {selectedProblem === 'handoff-silos' &&
                'Establish formal cross-departmental SLAs between Engineering, Product, and Customer Service.'}
              {selectedProblem === 'complaint-escalation' &&
                'Deliver intensive empathy and de-escalation coaching modules to customer care agents.'}
              {selectedProblem === 'inconsistent-quality' &&
                'Establish double-blind quality assurance audits and peer calibration reviews.'}
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Key Metric: FCR Rate &gt; 85%
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
              PRIORITY 3: LONG-TERM (60–120 DAYS)
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Cultural &amp; Structural Institutionalization
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProblem === 'wait-time' &&
                'Align managerial bonuses with customer satisfaction and retention rather than volume speed.'}
              {selectedProblem === 'handoff-silos' &&
                'Reorganize company into cross-functional Customer Pods sharing unified customer retention incentives.'}
              {selectedProblem === 'complaint-escalation' &&
                'Automate closed-loop Voice-of-Customer alerts for any negative survey scores with 24h follow-up.'}
              {selectedProblem === 'inconsistent-quality' &&
                'Adopt Total Quality Management (TQM) service certifications across all corporate divisions.'}
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-1">
              Key Metric: Annual Retention &gt; 92%
            </div>
          </div>
        </div>
      </section>

      {/* TOOL 3: CUSTOMER COMPLAINT SIMULATOR */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Tool 03 &middot; Crisis Management Simulator
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Real-Time Customer Complaint Simulation
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            A critical client scenario has occurred. Select from different management responses to evaluate the trade-offs, strengths, weaknesses, and customer satisfaction results.
          </p>
        </div>

        {/* Complaint Scenario Card */}
        <div className="bg-slate-800/90 rounded-xl p-5 border border-slate-700/80 space-y-2">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase">
            <AlertTriangle className="w-4 h-4" />
            <span>Scenario: Enterprise Client Urgent Escalation</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            &ldquo;We ordered 150 enterprise units for our annual conference starting tomorrow morning. Only 50 arrived, and our invoice was charged twice. Our sales team is stranded, and your phone agent said they don&apos;t have authority to issue a refund or ship replacements until the accounting manager returns on Monday!&rdquo;
          </p>
        </div>

        {/* Selection Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SIMULATION_RESPONSES.map((resp) => {
            const isSelected = resp.id === selectedSimulation;
            return (
              <button
                key={resp.id}
                onClick={() => setSelectedSimulation(resp.id)}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-400'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-200 block mb-1">
                    DECISION PATH
                  </span>
                  <h4 className="text-sm font-bold mb-2">{resp.name}</h4>
                  <p className="text-xs line-clamp-3 leading-relaxed mb-3">{resp.actionSummary}</p>
                </div>
                <div className="pt-2 border-t border-slate-700/60 text-xs font-mono font-bold">
                  {resp.projectedCsatImpact}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive into Selected Response */}
        {(() => {
          const activeResp =
            SIMULATION_RESPONSES.find((r) => r.id === selectedSimulation) ||
            SIMULATION_RESPONSES[2];
          return (
            <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-3">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                  Management Decision Analysis: {activeResp.name}
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  <strong>Executed Response:</strong> {activeResp.actionSummary}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase block mb-1">
                    Organizational Strengths:
                  </span>
                  <p className="text-xs text-slate-300">{activeResp.strengths}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase block mb-1">
                    Strategic Weaknesses &amp; Hidden Costs:
                  </span>
                  <p className="text-xs text-slate-300">{activeResp.weaknesses}</p>
                </div>
                <div className="pt-2 bg-slate-900/80 p-3.5 rounded-lg border border-slate-700">
                  <span className="text-xs font-mono font-bold text-blue-300 uppercase block mb-1">
                    Customer Experience Outcome
                  </span>
                  <p className="text-sm font-bold text-white">{activeResp.projectedCsatImpact}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {activeResp.id === 'response-c'
                      ? 'Empathy and instant resolution restore trust immediately, turning a potential disaster into a case of legendary customer care.'
                      : 'Rigid bureaucratic delay burns customer goodwill and destroys account lifetime value.'}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SUMMARY */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Summary &amp; Action Lab Takeaways
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The Action Lab proves that customer satisfaction is an active operational choice. By establishing clear diagnostic baselines, granting frontline discretion, and committing to immediate empathetic recovery during service failures, management builds an organization that consistently outpaces competitors in customer retention.
        </p>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/action-lab" />
    </div>
  );
}
