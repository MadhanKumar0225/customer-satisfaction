import React, { useState } from 'react';
import {
  Users,
  Award,
  BookOpen,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  ArrowRight,
  Sliders,
  CheckCircle2,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import KpiCard from '../components/KpiCard';
import TopicNavigation from '../components/TopicNavigation';

interface LeadershipStyle {
  id: string;
  name: string;
  description: string;
  frontlinePsychology: string;
  cxImpact: string;
  verdict: 'Recommended' | 'Conditional' | 'Detrimental';
}

const LEADERSHIP_STYLES: LeadershipStyle[] = [
  {
    id: 'servant',
    name: 'Servant Leadership',
    description: 'The leader focuses on removing operational roadblocks, listening to frontline challenges, and serving employee needs so they can excel at serving customers.',
    frontlinePsychology: 'High psychological safety, high loyalty, willingness to go the extra mile for customers.',
    cxImpact: 'Proactive customer care, authentic warmth, high problem ownership, low employee turnover.',
    verdict: 'Recommended',
  },
  {
    id: 'transformational',
    name: 'Transformational Leadership',
    description: 'The leader inspires teams through a compelling customer-centric vision, intellectual stimulation, and individual mentoring.',
    frontlinePsychology: 'Staff see customer satisfaction as their personal mission rather than a mere hourly job.',
    cxImpact: 'Innovative service solutions, rapid adoption of new digital tools, pride in brand reputation.',
    verdict: 'Recommended',
  },
  {
    id: 'democratic',
    name: 'Democratic / Participative',
    description: 'Involves frontline staff in operational policy formulation, service design, and procedural improvements.',
    frontlinePsychology: 'Frontline staff feel valued and respected because their feedback shapes daily workflows.',
    cxImpact: 'Practical, friction-free customer policies that reflect real-world frontline realities.',
    verdict: 'Conditional',
  },
  {
    id: 'authoritarian',
    name: 'Authoritarian / Command & Control',
    description: 'Strict hierarchical adherence to rigid scripts, micro-monitoring handling seconds, and punitive appraisals for slight variances.',
    frontlinePsychology: 'Anxiety, defensive behavior, cynical adherence to rules over customer needs, high turnover.',
    cxImpact: 'Robotic customer interactions, escalated disputes, refusal to grant common-sense remedies.',
    verdict: 'Detrimental',
  },
];

interface TeamMemberMetric {
  team: string;
  lead: string;
  serviceQualityScore: number;
  trainingCompletion: number;
  fcrRate: number;
  csatScore: number;
}

const TEAMS_PERFORMANCE: TeamMemberMetric[] = [
  { team: 'Enterprise Solutions Pod', lead: 'Sarah Jenkins', serviceQualityScore: 96, trainingCompletion: 100, fcrRate: 91, csatScore: 95.2 },
  { team: 'Direct Consumer Care', lead: 'Marcus Vance', serviceQualityScore: 91, trainingCompletion: 92, fcrRate: 86, csatScore: 91.8 },
  { team: 'Technical Escalations Desk', lead: 'Elena Rostova', serviceQualityScore: 89, trainingCompletion: 88, fcrRate: 84, csatScore: 89.4 },
  { team: 'Onboarding & Activation', lead: 'David Chen', serviceQualityScore: 94, trainingCompletion: 95, fcrRate: 88, csatScore: 93.6 },
];

export default function LeadershipPerformance() {
  const [empowermentBudget, setEmpowermentBudget] = useState<number>(200);
  const [trainingHours, setTrainingHours] = useState<number>(12);

  // Simulated metrics based on interactive controls
  const simulatedFcr = Math.min(96, Math.round(62 + (empowermentBudget / 250) * 22 + (trainingHours / 20) * 12));
  const simulatedCsat = Math.min(98, Math.round(65 + (empowermentBudget / 250) * 18 + (trainingHours / 20) * 15));
  const simulatedEscalationDrop = Math.min(85, Math.round(20 + (empowermentBudget / 250) * 45 + (trainingHours / 20) * 20));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 03 &middot; People Operations &amp; Cultural Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Leadership &amp; Employee Performance
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          The customer experience mirrors the employee experience. When leadership motivates, equips, and genuinely empowers frontline personnel, customer satisfaction surges naturally.
        </p>
      </div>

      {/* LEADERSHIP STYLES COMPARISON */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Leadership Frameworks
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Impact of Leadership Paradigms on Customer Perception
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            How different management styles directly influence frontline morale and customer interaction outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEADERSHIP_STYLES.map((style) => (
            <div
              key={style.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      style.verdict === 'Recommended'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : style.verdict === 'Conditional'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    {style.verdict}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {style.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {style.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Employee Mindset:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 mt-0.5">{style.frontlinePsychology}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Customer Experience Result:
                  </span>
                  <p className="text-blue-700 dark:text-blue-400 font-medium mt-0.5">{style.cxImpact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SCENARIO SIMULATOR: EMPOWERMENT & TRAINING IMPACT */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800 text-xs font-semibold mb-2">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Leadership Lab</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Simulate the Impact of Frontline Empowerment &amp; Training
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Adjust the frontline discretionary refund budget and monthly soft-skills training hours to observe simulated effects on resolution speed, CSAT, and managerial escalation load.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6 bg-slate-800/80 p-6 rounded-xl border border-slate-700/60">
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-200">
                  Frontline Discretionary Resolution Budget (per agent/ticket):
                </label>
                <span className="text-sm font-extrabold font-mono text-blue-400 tabular-nums">
                  ${empowermentBudget}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="300"
                step="25"
                value={empowermentBudget}
                onChange={(e) => setEmpowermentBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>$0 (Strict Approval Required)</span>
                <span>$150 (Moderate)</span>
                <span>$300 (Maximum Autonomy)</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-200">
                  Monthly Empathy &amp; Conflict De-escalation Training:
                </label>
                <span className="text-sm font-extrabold font-mono text-blue-400 tabular-nums">
                  {trainingHours} hrs / agent
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="2"
                value={trainingHours}
                onChange={(e) => setTrainingHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>0 hrs (No formal training)</span>
                <span>10 hrs (Standard)</span>
                <span>20 hrs (Intensive Coaching)</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              Demonstration Model: Calculations show estimated outcomes modeled on empirical frontline empowerment research.
            </p>
          </div>

          {/* Simulated Outcomes */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 text-center space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">First-Contact Resolution</span>
              <div className="text-3xl font-extrabold text-blue-400 tabular-nums">
                {simulatedFcr}%
              </div>
              <p className="text-[10px] text-slate-400">Baseline was 62%</p>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 text-center space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Projected CSAT</span>
              <div className="text-3xl font-extrabold text-emerald-400 tabular-nums">
                {simulatedCsat}%
              </div>
              <p className="text-[10px] text-slate-400">Baseline was 65%</p>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 text-center space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Escalation Drop</span>
              <div className="text-3xl font-extrabold text-amber-400 tabular-nums">
                -{simulatedEscalationDrop}%
              </div>
              <p className="text-[10px] text-slate-400">Managerial overhead cut</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE PERFORMANCE & SERVICE QUALITY DASHBOARD */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Operations Telemetry
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Departmental Service Quality &amp; Training Indicators
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Cross-team indicators tracking how coaching completion correlates with customer satisfaction.
          </p>
        </div>

        <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">Department / Team Pod</th>
                <th className="py-3.5 px-4">Team Lead</th>
                <th className="py-3.5 px-4 text-right">Service Quality Audit</th>
                <th className="py-3.5 px-4 text-right">Training Progress</th>
                <th className="py-3.5 px-4 text-right">FCR Rate</th>
                <th className="py-3.5 px-4 text-right">CSAT Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {TEAMS_PERFORMANCE.map((team) => (
                <tr key={team.team} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    {team.team}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                    {team.lead}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                    {team.serviceQualityScore}%
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-blue-600 dark:text-blue-400 font-bold tabular-nums">
                    {team.trainingCompletion}%
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-slate-700 dark:text-slate-300 tabular-nums">
                    {team.fcrRate}%
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                    {team.csatScore}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SUMMARY & MANAGEMENT RECOMMENDATIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Summary &amp; Executive Recommendations
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          High customer satisfaction is virtually impossible with demoralized or micromanaged staff. Management must replace punitive surveillance with servant leadership, arm personnel with financial empowerment parameters to solve customer problems on the spot, and celebrate frontline empathy through transparent appraisal frameworks.
        </p>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/leadership-performance" />
    </div>
  );
}
