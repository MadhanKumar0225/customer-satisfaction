import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  BookOpen,
  Award,
  Building2,
  TrendingUp,
  Lightbulb,
  Target,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
  FileText,
  CheckCircle2,
  X
} from 'lucide-react';
import { ConceptDetailedContent } from '../types';
import { getTopicSequenceBySlug, getTopicPage } from '../data/topicSequencesData';
import { getDetailedConceptData } from '../data/conceptDetailsData';

export interface ConceptDetailProps {
  concept?: ConceptDetailedContent | null;
  onBack?: () => void;
  onClose?: () => void;
  isModal?: boolean;
  onSelectConcept?: (index: number) => void;
  totalConcepts?: number;
}

export default function ConceptDetail({
  concept: propConcept,
  onBack,
  onClose,
  isModal = false,
  onSelectConcept,
  totalConcepts: propTotalConcepts,
}: ConceptDetailProps) {
  const params = useParams<{ topicSlug?: string; pageSlug?: string; conceptId?: string }>();
  const navigate = useNavigate();

  const topicSlug = params.topicSlug;
  const pageSlug = params.pageSlug;
  const conceptId = params.conceptId;

  // Resolve sequence and page data if rendered via route
  const sequence = topicSlug ? getTopicSequenceBySlug(topicSlug) : null;
  const pageData = topicSlug && pageSlug ? getTopicPage(topicSlug, pageSlug) : null;

  // Resolve concept data
  let concept: ConceptDetailedContent | null = propConcept || null;

  if (!concept && topicSlug && pageData && conceptId) {
    const conceptNum = parseInt(conceptId, 10);
    const conceptIdx = !isNaN(conceptNum) ? conceptNum - 1 : 0;
    concept = getDetailedConceptData(topicSlug, pageData.pageNumber, conceptIdx);
  }

  const totalConcepts = propTotalConcepts || pageData?.keyConcepts?.length || 3;

  const handleBackToCorePrinciples = () => {
    if (onBack) {
      onBack();
      return;
    }
    if (onClose) {
      onClose();
      return;
    }
    if (topicSlug && pageSlug) {
      navigate(`/${topicSlug}/${pageSlug}`);
    } else {
      navigate(-1);
    }
  };

  const currentConceptIdx = concept ? concept.conceptNumber - 1 : 0;
  const hasPrev = currentConceptIdx > 0;
  const hasNext = currentConceptIdx < totalConcepts - 1;

  const handleNavigateSibling = (newIdx: number) => {
    if (onSelectConcept) {
      onSelectConcept(newIdx);
      return;
    }
    if (topicSlug && pageSlug) {
      navigate(`/${topicSlug}/${pageSlug}/concept/${newIdx + 1}`);
      window.scrollTo(0, 0);
    }
  };

  if (!concept) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Concept Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400">
          The requested management concept could not be retrieved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const containerClasses = isModal
    ? 'space-y-8 p-6 sm:p-8'
    : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10';

  return (
    <div className={containerClasses}>
      {/* 1. TOP BREADCRUMB & CONTEXT (Only in full page mode) */}
      {!isModal && (
        <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <nav
            className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            {sequence && (
              <>
                <Link
                  to={`/${sequence.slug}/page-1`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 font-medium text-slate-700 dark:text-slate-300"
                >
                  {sequence.title}
                </Link>
                <span>/</span>
              </>
            )}
            {topicSlug && pageSlug && pageData && (
              <>
                <Link
                  to={`/${topicSlug}/${pageSlug}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 font-medium text-slate-700 dark:text-slate-300"
                >
                  Page {pageData.pageNumber}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono">
              Concept 0{concept.conceptNumber}
            </span>
          </nav>
        </div>
      )}

      {/* 2. TOP ACTION BAR WITH PROMINENT "BACK TO CORE PRINCIPLES" BUTTON */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleBackToCorePrinciples}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs sm:text-sm font-bold shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Back to Core Principles</span>
          </button>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>

          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-100/70 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            CONCEPT 0{concept.conceptNumber} OF 0{totalConcepts}
          </span>
        </div>

        {/* Sibling navigation controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={!hasPrev}
            onClick={() => handleNavigateSibling(currentConceptIdx - 1)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              hasPrev
                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer'
                : 'border-transparent text-slate-400 dark:text-slate-600 opacity-40 cursor-not-allowed'
            }`}
            title="Previous Concept"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            type="button"
            disabled={!hasNext}
            onClick={() => handleNavigateSibling(currentConceptIdx + 1)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              hasNext
                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer'
                : 'border-transparent text-slate-400 dark:text-slate-600 opacity-40 cursor-not-allowed'
            }`}
            title="Next Concept"
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {isModal && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 3. HERO CONCEPT TITLE & EXECUTIVE OVERVIEW */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Detailed Management Concept Briefing &middot; {concept.topicTitle}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {concept.conceptTitle}
        </h1>

        <p className="text-base sm:text-lg text-blue-700 dark:text-blue-300 font-medium leading-relaxed">
          {concept.tagline}
        </p>

        <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed shadow-xs">
          <strong className="font-bold text-blue-900 dark:text-blue-300">Executive Overview:</strong>{' '}
          {concept.overview}
        </div>
      </div>

      {/* 4. DEFINITION & OPERATIONAL EXPLANATION */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Definition &amp; Operational Explanation</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Theoretical Core &amp; Practical Foundation
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {concept.definitionAndExplanation}
        </p>
      </section>

      {/* 5. KEY PRINCIPLES & THEORETICAL BACKGROUND */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Key Principles &amp; Theoretical Background</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Theoretical Pillars &amp; Behavioral Mechanisms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {concept.theoreticalBackground.map((theory, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-2 hover:border-blue-300 dark:hover:border-blue-800 transition-all"
            >
              <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                PILLAR 0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {theory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {theory.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. IMPORTANCE IN MANAGEMENT & RELATIONSHIP TO CUSTOMER SATISFACTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Importance in Management</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Leadership &amp; Governance Mandate
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {concept.importanceInManagement}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Relationship to Customer Satisfaction</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Impact on Client Trust &amp; Retention
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {concept.relationshipToCustomerSatisfaction}
          </p>
        </div>
      </section>

      {/* 7. REAL-WORLD BUSINESS EXAMPLES */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-blue-400" />
          <span>Real-World Business Case Evidence</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Empirical Case Studies &amp; Operational Interventions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Documented outcomes demonstrating how corporate leadership applied this concept in active service environments.
          </p>
        </div>

        <div className="space-y-4">
          {concept.realWorldBusinessExamples.map((example, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-5 sm:p-6 rounded-xl border border-slate-700/80 space-y-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-700/60">
                <span className="text-xs font-mono font-bold text-blue-300 uppercase">
                  CASE STUDY #{idx + 1}
                </span>
                <span className="text-xs font-bold text-white bg-slate-700/80 px-2.5 py-1 rounded">
                  {example.company}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs pt-1">
                <div className="space-y-1.5">
                  <span className="font-bold text-rose-400 uppercase block tracking-wider">
                    The Challenge / Friction:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{example.scenario}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="font-bold text-blue-400 uppercase block tracking-wider">
                    Management Action Executed:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{example.intervention}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="font-bold text-emerald-400 uppercase block tracking-wider">
                    Measurable Customer Result:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{example.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PRACTICAL MANAGEMENT STRATEGIES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <Target className="w-4 h-4" />
          <span>Practical Management Strategies</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Executive Implementation Playbook
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {concept.practicalManagementStrategies.map((strat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-xs"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{strat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CUSTOMER & OPERATIONAL IMPACTS */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Customer &amp; Operational Impacts</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Measurable Outcomes &amp; Performance KPIs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {concept.customerAndOperationalImpacts.map((impact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
            >
              <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                {impact.metricOrArea}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug font-medium">
                {impact.impactDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. ADVANTAGES & EXPECTED OUTCOMES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Advantages &amp; Expected Outcomes</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Strategic Business Dividends
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {concept.advantagesAndExpectedOutcomes.map((adv, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
              <span className="leading-relaxed font-medium">{adv}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 11. IMPLEMENTATION CHALLENGES & POSSIBLE SOLUTIONS */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4" />
          <span>Implementation Challenges &amp; Strategic Solutions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Navigating Execution Friction &amp; Roadblocks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {concept.implementationChallengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
            >
              <div className="flex items-start gap-2.5 text-xs text-rose-600 dark:text-rose-400 font-semibold">
                <span className="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 font-mono text-[10px] shrink-0 font-bold border border-rose-200 dark:border-rose-900">
                  CHALLENGE
                </span>
                <span className="leading-snug">{item.challenge}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-emerald-700 dark:text-emerald-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 font-mono text-[10px] shrink-0 font-bold border border-emerald-200 dark:border-emerald-900">
                  SOLUTION
                </span>
                <span className="leading-relaxed font-medium">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. EXECUTIVE KEY TAKEAWAYS */}
      <section className="bg-blue-50/80 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-800/80 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
          <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Executive Key Takeaways</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Strategic Summary for Executive Leadership
        </h2>
        <ul className="space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
          {concept.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-semibold">{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 13. BOTTOM NAVIGATION: PROMINENT "BACK TO CORE PRINCIPLES" BUTTON & SIBLING NAVIGATION */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={handleBackToCorePrinciples}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 ring-offset-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Core Principles</span>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            type="button"
            disabled={!hasPrev}
            onClick={() => handleNavigateSibling(currentConceptIdx - 1)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
              hasPrev
                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer shadow-xs'
                : 'border-transparent text-slate-400 dark:text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous Concept</span>
          </button>

          <button
            type="button"
            disabled={!hasNext}
            onClick={() => handleNavigateSibling(currentConceptIdx + 1)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
              hasNext
                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer shadow-xs'
                : 'border-transparent text-slate-400 dark:text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            <span>Next Concept</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
