import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  CheckCircle2,
  Users2,
  Compass,
  FileCheck2,
  Building2
} from 'lucide-react';
import TopicNavigation from '../components/TopicNavigation';

interface GovernancePillar {
  id: string;
  title: string;
  leadershipMandate: string;
  operationalEnactment: string;
  customerExperienceDividend: string;
  keyMetric: string;
}

const GOVERNANCE_PILLARS: GovernancePillar[] = [
  {
    id: 'vision',
    title: '1. Executive Vision & Customer-Centric Purpose',
    leadershipMandate: 'C-suite leadership must frame customer satisfaction as an existential business strategy, not a delegated department.',
    operationalEnactment: 'Translating brand promises into quantifiable Customer Journey OKRs that bind executive compensation to customer satisfaction scores.',
    customerExperienceDividend: 'Eliminates contradictory policies; customer feels a unified, trustworthy organization that values long-term relationships over short-term transaction extraction.',
    keyMetric: 'Executive Compensation Tied to CSAT >= 25%',
  },
  {
    id: 'cross-functional',
    title: '2. Cross-Functional Journey Governance',
    leadershipMandate: 'Dismantle departmental friction between Product, Marketing, Sales, Billing, and Frontline Customer Support.',
    operationalEnactment: 'Establishing Cross-Functional Journey Ownership councils with single-threaded accountability for end-to-end customer lifecycles.',
    customerExperienceDividend: 'Eliminates fragmented handoffs, conflicting messaging, and customer frustration from repeating context across departments.',
    keyMetric: 'Inter-Departmental SLA Adherence >= 98%',
  },
  {
    id: 'empowerment',
    title: '3. Frontline Operational Enablement',
    leadershipMandate: 'Treat the customer-facing frontline as the primary brand ambassador, backed by total organizational support and authority.',
    operationalEnactment: 'Equipping frontline teams with real-time customer data platforms, coaching pipelines, and unilateral resolution budgets.',
    customerExperienceDividend: 'Immediate, empathetic resolution at point of friction; turning potential brand detractors into lifelong loyalists.',
    keyMetric: 'First-Contact Resolution Rate (FCR) >= 88%',
  },
  {
    id: 'closed-loop',
    title: '4. Closed-Loop Voice-of-Customer (VoC) Kaizen',
    leadershipMandate: 'Create systemic mechanisms where customer criticism directly drives rapid operational and engineering remediation.',
    operationalEnactment: 'Automated detractor escalation protocols requiring managerial outreach within 24 hours, paired with bi-weekly root-cause sprints.',
    customerExperienceDividend: 'Customer feels genuinely respected and heard; systemic operational defects are eliminated before impacting future clients.',
    keyMetric: 'Detractor Recovery Outreach Rate: 100% in 24h',
  },
];

const SERVICE_PROFIT_CHAIN_STEPS = [
  {
    step: '01',
    name: 'Internal Service Quality',
    desc: 'Supportive management, modern digital tooling, psychological safety, and clear job design.',
  },
  {
    step: '02',
    name: 'Employee Satisfaction & Morale',
    desc: 'Empowered frontline staff take genuine pride and ownership in delivering excellence.',
  },
  {
    step: '03',
    name: 'External Service Value',
    desc: 'Consistent, empathetic, high-velocity customer interactions across all touchpoints.',
  },
  {
    step: '04',
    name: 'Customer Satisfaction & Trust',
    desc: 'Exceeded client expectations, low customer effort, and immediate dispute resolution.',
  },
  {
    step: '05',
    name: 'Customer Loyalty & Sustainable ROI',
    desc: 'High net retention, expansion revenue, organic brand advocacy, and resilient profitability.',
  },
];

export default function PlatformOverview() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('vision');

  const activePillar =
    GOVERNANCE_PILLARS.find((p) => p.id === selectedPillarId) || GOVERNANCE_PILLARS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <LayoutDashboard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 01 &middot; Strategic CX Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Executive Platform Overview: Strategic Management in CX
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Customer satisfaction is not accidental—it is the structural reflection of leadership priorities, resource allocation, and operational discipline. Discover the executive architecture behind market-leading customer experiences.
        </p>
      </div>

      {/* CORE THESIS HERO BANNER */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            The Fundamental Management Thesis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
            Organizations Cannot Deliver Experiences That Their Management Architecture Does Not Support
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            When customer satisfaction slips, traditional organizations reflexively blame customer-facing staff. Sophisticated leadership recognizes that frontline behavior is merely a mirror of executive systems: metrics, incentives, cross-departmental coordination, and frontline authority.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Leadership Sets The Culture</strong>
              <span>Frontline empathy starts with how leaders treat frontline teams.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Systems Dictate Velocity</strong>
              <span>Resolution speed is governed by managerial approval chains.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Feedback Drives Evolution</strong>
              <span>Without executive loops, customer complaints recur endlessly.</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE SERVICE-PROFIT CHAIN FRAMEWORK */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Academic &amp; Empirical Framework
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            The Executive Service-Profit Chain
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Originating from Harvard Business School research (Heskett et al.), the Service-Profit Chain proves that commercial profitability and customer loyalty originate inside executive managerial practices.
          </p>
        </div>

        {/* Chain Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {SERVICE_PROFIT_CHAIN_STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 block mb-1">
                  LINK {s.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {s.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-700/60 text-[10px] text-slate-400 font-mono text-right">
                {idx < 4 ? 'Leads directly to →' : 'Ultimate Commercial ROI'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE 4 PILLARS OF EXECUTIVE CX ARCHITECTURE */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Strategic Governance Model
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Four Pillars of Customer-Centric Management Architecture
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Select a pillar below to inspect the leadership mandate, operational mechanics, and customer dividend.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOVERNANCE_PILLARS.map((p) => {
            const isSelected = p.id === selectedPillarId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillarId(p.id)}
                className={`text-left p-5 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md ring-1 ring-blue-400'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold block mb-1 ${
                      isSelected ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    GOVERNANCE PILLAR
                  </span>
                  <h4 className="text-sm font-bold leading-snug">{p.title}</h4>
                </div>
                <div className="pt-4 border-t border-slate-200/40 dark:border-slate-800 text-xs font-mono font-medium truncate">
                  {p.keyMetric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detail Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
              Pillar Deep-Dive
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {activePillar.title}
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Executive Leadership Mandate:
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activePillar.leadershipMandate}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Operational Enactment &amp; Policy:
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activePillar.operationalEnactment}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50/70 dark:bg-blue-950/30 p-5 rounded-xl border border-blue-200/80 dark:border-blue-900/50 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block">
                Direct Customer Experience Dividend:
              </span>
              <p className="text-sm text-blue-950 dark:text-blue-100 font-medium leading-relaxed">
                {activePillar.customerExperienceDividend}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block mb-1">
                Boardroom Performance Target:
              </span>
              <div className="text-sm font-mono font-bold text-slate-900 dark:text-white">
                {activePillar.keyMetric}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL BUSINESS EXAMPLE */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Executive Field Example</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Real-World Application: The Turnaround of Global Tech Logistics
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          When a multi-national cloud hardware distributor suffered a drop in CSAT from 82% to 54%, executive management initially attributed the breakdown to customer support inefficiencies. However, a structural operational audit revealed that hardware shipping delays were triggered by sales rep quota rushes at end-of-month, without notifying procurement.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          By reforming management coordination—synchronizing CRM pipeline forecasts directly with assembly bay capacities and granting frontline support agents a $500 expediting budget—CSAT rebounded to 92% in 90 days and client churn dropped by 34%.
        </p>
      </section>

      {/* TOPIC SUMMARY & RECOMMENDATIONS */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Summary &amp; Executive Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">Key Takeaway</h5>
            <p className="leading-relaxed">
              Customer satisfaction is a lagging indicator of management effectiveness. To permanently elevate customer satisfaction, leadership must shift from inspecting individual transactions to designing resilient, cross-functional organizational architectures.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-1">C-Suite Directives</h5>
            <ul className="list-disc pl-4 space-y-1">
              <li>Tie executive performance incentives directly to customer net retention and CSAT.</li>
              <li>Eliminate approval bureaucracy for customer recovery under predefined thresholds.</li>
              <li>Institutionalize bi-weekly operational kaizen reviews across Product, Ops, and Support.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/platform-overview" />
    </div>
  );
}
