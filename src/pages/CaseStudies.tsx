import React, { useState } from 'react';
import {
  Briefcase,
  Store,
  ShoppingBag,
  Hotel,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  FileText,
  Clock,
  Layers
} from 'lucide-react';
import { CASE_STUDIES, APPROACH_COMPARISONS } from '../data/caseStudiesData';
import { CaseStudy } from '../types';
import TopicNavigation from '../components/TopicNavigation';

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase =
    CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 06 &middot; Empirical Turnarounds &amp; Case Method</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Executive Business Case Studies
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          In-depth analyses of strategic management interventions, frontline operational pivots, and measurable customer satisfaction transformations across three distinctive industry environments.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Pedagogical Notice: The following scenarios are illustrative case studies synthesized from documented business turnarounds to demonstrate core management principles.
        </p>
      </div>

      {/* CASE STUDY SELECTOR TABS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CASE_STUDIES.map((cs) => {
          const isSelected = cs.id === selectedCaseId;
          const Icon =
            cs.id === 'retail-waiting-time'
              ? Store
              : cs.id === 'ecommerce-complaint-resolution'
              ? ShoppingBag
              : Hotel;

          return (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseId(cs.id)}
              className={`text-left p-5 rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-50/60 dark:bg-blue-950/50 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-500'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                    {cs.sector.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {cs.companyProfile}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {isSelected ? 'Viewing Full Case' : 'Explore Case Study'}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </button>
          );
        })}
      </div>

      {/* EXPANDED CASE STUDY DETAIL VIEW */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
        {/* Case Banner */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {activeCase.sector}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {activeCase.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Organizational Profile:</strong> {activeCase.companyProfile}
          </p>
        </div>

        {/* 2-Column Split: Customer Problem vs Management Decision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Problem Side */}
          <div className="space-y-4 bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              The Customer Experience Breakdown
            </h4>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {activeCase.customerProblem}
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Root Management Challenge:
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeCase.managementChallenge}
              </p>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-4 bg-blue-50/50 dark:bg-blue-950/20 p-6 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Executive Management Decision
            </h4>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {activeCase.managementDecision}
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Operational &amp; Employee Interventions:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {activeCase.operationalChanges.map((change, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Measurable CX Outcome Strip */}
        <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 space-y-4">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            Quantifiable Transformation Outcome
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">CSAT Evolution</span>
              <div className="text-2xl font-extrabold text-white flex items-baseline gap-2">
                <span className="text-slate-400 font-normal line-through text-lg">{activeCase.cxOutcome.csatBefore}%</span>
                <span className="text-emerald-400 font-mono">{activeCase.cxOutcome.csatAfter}%</span>
              </div>
            </div>

            <div>
              <span className="text-xs text-slate-400 block mb-0.5">Customer Retention</span>
              <div className="text-sm font-semibold text-slate-200">
                Shifted from <span className="text-slate-400">{activeCase.cxOutcome.retentionBefore}</span> to{' '}
                <span className="text-emerald-400 font-bold">{activeCase.cxOutcome.retentionAfter}</span>
              </div>
            </div>

            <div>
              <span className="text-xs text-slate-400 block mb-0.5">Key Operational Benchmark</span>
              <div className="text-sm font-bold text-blue-300 leading-snug">
                {activeCase.cxOutcome.keyMetric}
              </div>
            </div>
          </div>
        </div>

        {/* Key Lessons Learned */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Key Management Lessons &amp; Transferable Takeaways
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeCase.keyLessons.map((lesson, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block mb-1">
                  LESSON 0{idx + 1}
                </span>
                {lesson}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVE APPROACH TABLE */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Cross-Paradigm Comparison
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Traditional Management vs. Customer-Centric Management
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Comparing how different managerial operational models resolve customer satisfaction challenges.
          </p>
        </div>

        <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4 w-1/4">Operational Dimension</th>
                <th className="py-3.5 px-4 w-1/3">Traditional Management</th>
                <th className="py-3.5 px-4 w-1/3">Customer-Centric Management</th>
                <th className="py-3.5 px-4">Satisfaction Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {APPROACH_COMPARISONS.map((row) => (
                <tr key={row.dimension} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    {row.dimension}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                    {row.traditionalManagement}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-blue-600 dark:text-blue-400">
                    {row.customerCentricManagement}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 dark:text-slate-400">
                    {row.impactOnSatisfaction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Summary &amp; Executive Synthesis
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Across retail, digital commerce, and luxury hospitality, the identical pattern emerges: operational friction is born from disconnected managerial policies, and customer delight is unlocked when leadership establishes frontline trust, provides modern digital tools, and aligns corporate incentives with customer welfare.
        </p>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/case-studies" />
    </div>
  );
}
