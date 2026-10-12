import React, { useEffect, useRef } from 'react';
import {
  X,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Building2,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Target,
  Sparkles,
  HelpCircle,
  FileText
} from 'lucide-react';
import { ConceptDetailedContent } from '../types';

interface ConceptDetailModalProps {
  concept: ConceptDetailedContent | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectConcept?: (index: number) => void;
  totalConcepts?: number;
}

export default function ConceptDetailModal({
  concept,
  isOpen,
  onClose,
  onSelectConcept,
  totalConcepts = 3,
}: ConceptDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Scroll to top of modal when concept changes
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [concept?.id]);

  if (!isOpen || !concept) return null;

  const currentIdx = concept.conceptNumber - 1;
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < totalConcepts - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-modal-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col my-auto transition-all text-slate-900 dark:text-slate-100"
      >
        {/* STICKY MODAL HEADER */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Return to Core Principles cards"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Back to Core Principles</span>
            </button>

            <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>

            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              CONCEPT 0{concept.conceptNumber} OF 0{totalConcepts}
            </span>

            <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:inline truncate max-w-xs">
              {concept.topicTitle} &middot; Page {concept.pageNumber}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* 1. TITLE & EXECUTIVE BANNER */}
          <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Detailed Executive Concept Briefing</span>
            </div>

            <h2 id="concept-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {concept.conceptTitle}
            </h2>

            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {concept.tagline}
            </p>

            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Executive Overview:</strong> {concept.overview}
            </div>
          </div>

          {/* 2. DEFINITION & EXPLANATION */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Definition &amp; Operational Explanation</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Understanding the Foundation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {concept.definitionAndExplanation}
            </p>
          </section>

          {/* 3. KEY PRINCIPLES & THEORETICAL BACKGROUND */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Key Principles &amp; Theoretical Background</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Theoretical Pillars &amp; Behavioral Mechanisms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {concept.theoreticalBackground.map((theory, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700/80 space-y-2"
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase block">
                    PILLAR 0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {theory.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {theory.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. IMPORTANCE IN MANAGEMENT & RELATIONSHIP TO CUSTOMER SATISFACTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Importance in Management</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {concept.importanceInManagement}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Relationship to Customer Satisfaction</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {concept.relationshipToCustomerSatisfaction}
              </p>
            </div>
          </section>

          {/* 5. REAL-WORLD BUSINESS EXAMPLES */}
          <section className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-blue-400" />
              <span>Real-World Business Case Evidence</span>
            </div>

            <div className="space-y-4">
              {concept.realWorldBusinessExamples.map((example, i) => (
                <div
                  key={i}
                  className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-3"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold text-blue-300 uppercase">
                      CASE STUDY #{i + 1}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {example.company}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
                    <div className="space-y-1">
                      <span className="font-bold text-rose-400 uppercase block">The Challenge:</span>
                      <p className="text-slate-300 leading-relaxed">{example.scenario}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-blue-400 uppercase block">Management Action:</span>
                      <p className="text-slate-300 leading-relaxed">{example.intervention}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-emerald-400 uppercase block">Customer Result:</span>
                      <p className="text-slate-300 leading-relaxed">{example.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. PRACTICAL MANAGEMENT STRATEGIES */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Practical Management Strategies</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Executive Implementation Playbook
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {concept.practicalManagementStrategies.map((strat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{strat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. CUSTOMER & OPERATIONAL IMPACTS */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Customer &amp; Operational Impacts</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Measurable Outcomes &amp; Performance KPIs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              {concept.customerAndOperationalImpacts.map((impact, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5"
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase block">
                    {impact.metricOrArea}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                    {impact.impactDescription}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. ADVANTAGES & EXPECTED OUTCOMES */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Advantages &amp; Expected Outcomes</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {concept.advantagesAndExpectedOutcomes.map((adv, i) => (
                <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{adv}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 9. IMPLEMENTATION CHALLENGES & POSSIBLE SOLUTIONS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Implementation Challenges &amp; Strategic Solutions</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concept.implementationChallengesAndSolutions.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-xs"
                >
                  <div className="flex items-start gap-2 text-xs text-rose-600 dark:text-rose-400 font-semibold">
                    <span className="px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 font-mono text-[10px]">
                      CHALLENGE
                    </span>
                    <span className="leading-snug">{item.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-emerald-700 dark:text-emerald-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 font-mono text-[10px] shrink-0 font-bold">
                      SOLUTION
                    </span>
                    <span className="leading-relaxed">{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. KEY TAKEAWAYS */}
          <section className="bg-blue-50/70 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-800/80 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Executive Key Takeaways</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              {concept.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* MODAL FOOTER WITH PROMINENT BACK BUTTON & SIBLING NAVIGATION */}
        <div className="sticky bottom-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Core Principles</span>
          </button>

          {/* SIBLING CONCEPT SWITCHER */}
          {onSelectConcept && (
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <button
                type="button"
                disabled={!hasPrev}
                onClick={() => onSelectConcept(currentIdx - 1)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  hasPrev
                    ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'border-transparent text-slate-400 dark:text-slate-600 opacity-40 cursor-not-allowed'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Concept</span>
              </button>

              <button
                type="button"
                disabled={!hasNext}
                onClick={() => onSelectConcept(currentIdx + 1)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  hasNext
                    ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'border-transparent text-slate-400 dark:text-slate-600 opacity-40 cursor-not-allowed'
                }`}
              >
                <span>Next Concept</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
