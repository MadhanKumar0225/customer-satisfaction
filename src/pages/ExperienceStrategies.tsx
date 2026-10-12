import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import {
  STRATEGIES_LIST,
  COMPLAINT_WORKFLOW_STEPS,
  BUSINESS_CHALLENGES
} from '../data/strategiesData';
import { StrategyItem } from '../types';
import TopicNavigation from '../components/TopicNavigation';

export default function ExperienceStrategies() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(BUSINESS_CHALLENGES[0].id);

  const filteredStrategies =
    selectedCategory === 'All'
      ? STRATEGIES_LIST
      : STRATEGIES_LIST.filter((s) => s.category === selectedCategory);

  const activeChallenge =
    BUSINESS_CHALLENGES.find((c) => c.id === selectedChallengeId) || BUSINESS_CHALLENGES[0];

  const matchedStrategies = STRATEGIES_LIST.filter((s) =>
    activeChallenge.recommendedStrategies.includes(s.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 04 &middot; Operational CX Playbooks</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Customer Experience Strategies &amp; Resolution Protocols
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Tactical frameworks designed to eliminate customer friction points, compress waiting times, personalize high-stakes interactions, and institutionalize customer satisfaction.
        </p>
      </div>

      {/* PRACTICAL ACTION PLANNER: SELECT BUSINESS CHALLENGE */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800 text-xs font-semibold mb-2">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Strategy Matrix</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Practical Business Challenge Planner
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Select an operational roadblock below to view recommended management actions, suggested immediate remedies, and target performance indicators.
          </p>
        </div>

        {/* Challenge Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BUSINESS_CHALLENGES.map((challenge) => {
            const isSelected = challenge.id === selectedChallengeId;
            return (
              <button
                key={challenge.id}
                onClick={() => setSelectedChallengeId(challenge.id)}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md ring-1 ring-blue-400'
                    : 'bg-slate-800/70 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold block mb-1 ${
                      isSelected ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    CHALLENGE
                  </span>
                  <h4 className="text-sm font-bold leading-snug">{challenge.title}</h4>
                </div>
                <p className={`text-xs mt-2 line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                  {challenge.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Challenge Detail Card */}
        <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase">
              Operational Diagnosis
            </span>
            <h3 className="text-lg font-bold text-white">{activeChallenge.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeChallenge.description}
            </p>
            <div className="pt-2 text-xs text-blue-300 font-mono">
              <strong>Target Metric:</strong> {activeChallenge.suggestedKpi}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/80">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block mb-1">
                Immediate Management Action
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeChallenge.immediateAction}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wide block mb-2">
                Recommended Strategic Interventions ({matchedStrategies.length})
              </span>
              <div className="space-y-2">
                {matchedStrategies.map((strat) => (
                  <div
                    key={strat.id}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/60 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>{strat.name}</span>
                      <span className="text-blue-400 font-mono text-[10px]">{strat.timeline}</span>
                    </div>
                    <p className="text-slate-300">{strat.recommendedAction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLAINT RESOLUTION WORKFLOW */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Standard Operating Protocol
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Five-Step Customer Complaint Resolution Workflow
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Complaint Received &rarr; Issue Categorized &rarr; Responsible Team Assigned &rarr; Solution Provided &rarr; Customer Feedback Collected
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {COMPLAINT_WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    STEP 0{step.stepNumber}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {step.sla}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {step.department}
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-blue-700 dark:text-blue-400">
                <strong>Best Practice:</strong> {step.bestPractice}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGY CARDS GALLERY */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Strategy Repository
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              High-Impact Management Strategy Cards
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Detailed playbooks outlining problems, actions, benefits, and target performance indicators.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            {['All', 'Quality', 'Speed', 'Personalization', 'Resolution', 'Culture'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStrategies.map((strat) => (
            <div
              key={strat.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-800 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                    {strat.category} &middot; {strat.timeline}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {strat.difficulty}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {strat.name}
                </h3>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">
                      Business Problem:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">{strat.businessProblem}</p>
                  </div>

                  <div>
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                      Recommended Action:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">{strat.recommendedAction}</p>
                  </div>

                  <div>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                      Expected Customer Benefit:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300">{strat.expectedBenefit}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  KPI: {strat.kpi}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUMMARY & MANAGEMENT RECOMMENDATIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Summary &amp; Strategic Key Takeaways
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Operational customer experience strategies succeed when management connects frontline empowerment with systematic root-cause remediation. A robust complaint resolution workflow not only saves dissatisfied customers in the moment, but also generates direct operational feedback that prevents future service breakdowns across the enterprise.
        </p>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/experience-strategies" />
    </div>
  );
}
