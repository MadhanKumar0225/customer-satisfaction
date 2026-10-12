import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Repeat,
  Shield,
  Zap,
  CheckCircle2,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Sliders
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line
} from 'recharts';
import KpiCard from '../components/KpiCard';
import TopicNavigation from '../components/TopicNavigation';

interface ImprovementOption {
  id: string;
  title: string;
  description: string;
  simulatedRetentionGain: string;
  simulatedLtvLift: string;
  simulatedChurReduction: string;
  qualitativeOutcomes: string[];
}

const IMPROVEMENT_OPTIONS: ImprovementOption[] = [
  {
    id: 'empowerment',
    title: 'Frontline Discretion & Immediate Resolution',
    description: 'Granting support representatives instant budget authority up to $250 to settle complaints without managerial approval tiers.',
    simulatedRetentionGain: '+14.2%',
    simulatedLtvLift: '+22.5%',
    simulatedChurReduction: '-38.0%',
    qualitativeOutcomes: [
      'Eliminates customer anxiety during critical failure moments, turning frustrated clients into vocal brand advocates.',
      'Slashes management escalation time by 60%, freeing team leads for proactive performance coaching.',
      'Dramatically reduces agent burnout and frontline turnover.',
    ],
  },
  {
    id: 'omnichannel',
    title: 'Unified Customer Profile & Omnichannel Routing',
    description: 'Integrating CRM, billing, and communication channels into a single unified customer record.',
    simulatedRetentionGain: '+11.8%',
    simulatedLtvLift: '+18.0%',
    simulatedChurReduction: '-29.5%',
    qualitativeOutcomes: [
      'Eliminates repetitive explanations across phone, chat, and email touchpoints.',
      'Reduces average customer handle time (AHT) while increasing first-contact resolution.',
      'Enables proactive outreach before customers experience billing or delivery friction.',
    ],
  },
  {
    id: 'feedback-loop',
    title: 'Closed-Loop Voice of Customer & Root-Cause Kaizen',
    description: 'Mandating 24-hour executive outreach to all survey detractors and bi-weekly cross-functional bug remediation sprints.',
    simulatedRetentionGain: '+16.5%',
    simulatedLtvLift: '+26.0%',
    simulatedChurReduction: '-44.0%',
    qualitativeOutcomes: [
      'Converts up to 40% of dissatisfied customers into loyal long-term accounts.',
      'Permanently eradicates repeated systemic product and service bugs at the root cause.',
      'Builds pervasive customer-centric accountability across engineering and operations.',
    ],
  },
];

const COMPARISON_CHART_DATA = [
  { metric: 'Annual Retention Rate', before: 74, after: 91 },
  { metric: 'Repeat Purchase Ratio', before: 42, after: 68 },
  { metric: 'First-Contact Resolution', before: 56, after: 86 },
  { metric: 'Brand Trust Score', before: 61, after: 89 },
  { metric: 'Employee Retention', before: 65, after: 84 },
];

export default function BusinessImpact() {
  const [selectedImprovementId, setSelectedImprovementId] = useState<string>('empowerment');

  const activeImprovement =
    IMPROVEMENT_OPTIONS.find((opt) => opt.id === selectedImprovementId) || IMPROVEMENT_OPTIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 05 &middot; Economic ROI &amp; Value Realization</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Business Impact &amp; Financial Performance
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Customer satisfaction is not merely an ethical priority—it is the single highest-yield financial driver of customer lifetime value, organic acquisition, and sustainable market valuation.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Disclaimer: All projections and benchmarks below reflect simulated illustrative models for executive strategic evaluation and do not represent guaranteed commercial outcomes.
        </p>
      </div>

      {/* CORE KPI SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <KpiCard
          label="Simulated Retention Lift"
          value="+17.0%"
          change="Simulated"
          changeType="positive"
          subtext="Net retention post-management alignment"
          icon={Repeat}
        />
        <KpiCard
          label="Customer Lifetime Value (LTV)"
          value="+28.4%"
          change="Simulated"
          changeType="positive"
          subtext="Higher repurchase frequency"
          icon={DollarSign}
        />
        <KpiCard
          label="Customer Acquisition Cost (CAC)"
          value="-31.5%"
          change="Simulated"
          changeType="positive"
          subtext="Organic word-of-mouth expansion"
          icon={TrendingUp}
        />
        <KpiCard
          label="Service Cost per Ticket"
          value="-42.0%"
          change="Simulated"
          changeType="positive"
          subtext="First-contact resolution gains"
          icon={Zap}
        />
      </div>

      {/* BEFORE AND AFTER COMPARISON DASHBOARD */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Comparative Analysis
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Before vs. After Management Transformation
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Simulated comparison across 5 core operational dimensions.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">Illustrative Benchmarks</span>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={COMPARISON_CHART_DATA}
              margin={{ top: 10, right: 20, left: -20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis dataKey="metric" stroke="#94a3b8" fontSize={11} interval={0} />
              <YAxis domain={[0, 100]} stroke="#94a3b8" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderColor: '#1e293b',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar dataKey="before" name="Traditional Siloed Management (%)" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="after" name="Customer-Centric Management (%)" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* INTERACTIVE MANAGEMENT IMPROVEMENT OUTCOME SELECTOR */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800 text-xs font-semibold mb-2">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span>Scenario Outcome Explorer</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Select a Management Initiative to Evaluate Business Outcomes
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Choose an operational transformation below to examine projected qualitative and quantitative organizational impacts.
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {IMPROVEMENT_OPTIONS.map((opt) => {
            const isSelected = opt.id === selectedImprovementId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedImprovementId(opt.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md ring-1 ring-blue-400'
                    : 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <span className="text-[10px] font-mono font-bold block mb-1 text-blue-200">
                  INITIATIVE
                </span>
                <h4 className="text-sm font-bold leading-snug">{opt.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Dynamic Details Box */}
        <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase">
              Operational Scope
            </span>
            <h3 className="text-lg font-bold text-white">{activeImprovement.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeImprovement.description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block mb-2">
                Qualitative Organizational Impacts:
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeImprovement.qualitativeOutcomes.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/80 p-5 rounded-xl border border-slate-700/80 self-center">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 block">Retention Lift</span>
              <div className="text-2xl font-extrabold text-blue-400 font-mono tabular-nums">
                {activeImprovement.simulatedRetentionGain}
              </div>
              <span className="text-[10px] text-slate-500">Simulated Trajectory</span>
            </div>

            <div className="text-center space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 block">LTV Expansion</span>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
                {activeImprovement.simulatedLtvLift}
              </div>
              <span className="text-[10px] text-slate-500">Simulated Trajectory</span>
            </div>

            <div className="text-center space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 block">Churn Reduction</span>
              <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                {activeImprovement.simulatedChurReduction}
              </div>
              <span className="text-[10px] text-slate-500">Simulated Trajectory</span>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY & MANAGEMENT RECOMMENDATIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Summary &amp; Executive Business Case
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Investing in customer satisfaction through improved management systems generates compound returns. Organizations that align inter-departmental incentives, empower frontline staff, and systematically resolve recurring complaint patterns capture significant retention gains and enjoy lower customer acquisition costs via organic referrals.
        </p>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/business-impact" />
    </div>
  );
}
