import React from 'react';
import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  CheckCircle2,
  Building2,
  BarChart3,
  Users,
  Compass,
  MessageSquare,
  TrendingUp,
  Briefcase,
  Cpu,
  Sparkles,
  ShieldCheck,
  Award,
  Lightbulb,
  FileText,
  AlertCircle
} from 'lucide-react';
import { getTopicSequenceBySlug, getTopicPage, TOPIC_SEQUENCES } from '../data/topicSequencesData';
import { getDetailedConceptData } from '../data/conceptDetailsData';
import ConceptDetailModal from '../components/ConceptDetailModal';

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  BarChart3,
  Users,
  Compass,
  MessageSquare,
  TrendingUp,
  Briefcase,
  Cpu,
};

export default function TopicPageView() {
  const { topicSlug, pageSlug, conceptId } = useParams<{ topicSlug: string; pageSlug: string; conceptId?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedOptionName = searchParams.get('option');

  if (!topicSlug || !pageSlug) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-slate-500">The requested topic page could not be located.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const sequence = getTopicSequenceBySlug(topicSlug);
  const pageData = getTopicPage(topicSlug, pageSlug);

  if (!sequence || !pageData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold">Topic Page Not Found</h2>
        <p className="text-slate-500">The requested sequence &ldquo;{topicSlug}&rdquo; or &ldquo;{pageSlug}&rdquo; is not available.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const Icon = ICON_MAP[sequence.iconName] || Building2;
  const isFinalPage = pageData.pageNumber === 7;
  const prevPageNumber = pageData.pageNumber - 1;
  const nextPageNumber = pageData.pageNumber + 1;

  const handleOptionClick = (optionTitle: string) => {
    navigate(`/${sequence.slug}/page-${nextPageNumber}?option=${encodeURIComponent(optionTitle)}`);
  };

  // Concept Detail Modal state synced with URL param & route param
  const conceptQuery = conceptId || searchParams.get('concept');
  const conceptNum = conceptQuery ? parseInt(conceptQuery, 10) : NaN;
  const selectedConceptIndex =
    !isNaN(conceptNum) && conceptNum >= 1 && conceptNum <= pageData.keyConcepts.length
      ? conceptNum - 1
      : null;

  const activeDetailedConcept =
    selectedConceptIndex !== null && topicSlug
      ? getDetailedConceptData(topicSlug, pageData.pageNumber, selectedConceptIndex)
      : null;

  const handleOpenConcept = (idx: number) => {
    navigate(`/${topicSlug}/${pageSlug}/concept/${idx + 1}`);
  };

  const handleCloseConcept = () => {
    if (conceptId) {
      navigate(`/${topicSlug}/${pageSlug}`);
    } else {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.delete('concept');
          return next;
        },
        { replace: true }
      );
    }
  };

  const handleSelectConcept = (newIdx: number) => {
    if (conceptId) {
      navigate(`/${topicSlug}/${pageSlug}/concept/${newIdx + 1}`);
    } else {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.set('concept', String(newIdx + 1));
          return next;
        },
        { replace: true }
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. BREADCRUMBS & SEQUENCE PROGRESSION */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link to={`/${sequence.slug}/page-1`} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium text-slate-700 dark:text-slate-300">
            {sequence.title}
          </Link>
          <span>/</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono">
            Page {pageData.pageNumber} of 7
          </span>
        </nav>

        {/* 7-STEP PROGRESS BAR */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>TOPIC {sequence.number} OF 8 &middot; {sequence.shortTitle}</span>
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              STEP {pageData.pageNumber} OF 7 ({Math.round((pageData.pageNumber / 7) * 100)}%)
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1.5 h-3">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const isPast = num < pageData.pageNumber;
              const isCurrent = num === pageData.pageNumber;
              const stepPage = sequence.pages.find((p) => p.pageNumber === num);
              return (
                <Link
                  key={num}
                  to={`/${sequence.slug}/page-${num}`}
                  className={`rounded-full transition-all block ${
                    isCurrent
                      ? 'bg-blue-600 ring-2 ring-blue-400 ring-offset-1 dark:ring-offset-slate-900'
                      : isPast
                      ? 'bg-blue-400 dark:bg-blue-700 hover:bg-blue-500'
                      : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
                  }`}
                  title={`Page ${num}: ${stepPage?.title || ''}`}
                >
                  <span className="sr-only">Page {num}: {stepPage?.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. PAGE HEADER BANNER */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{sequence.categoryTag} &middot; Topic {sequence.number}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {pageData.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {pageData.subtitle}
        </p>

        {selectedOptionName && (
          <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-xs flex items-center gap-2.5 text-blue-900 dark:text-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              <strong>Selected Exploration Track:</strong> You navigated here by choosing &ldquo;{selectedOptionName}&rdquo;. The operational analysis below focuses on this domain.
            </span>
          </div>
        )}
      </div>

      {/* 3. MULTI-PARAGRAPH OVERVIEW */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
          Executive Subject Analysis
        </h3>
        <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {pageData.overview.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* 4. KEY CONCEPTS & OPERATIONAL IMPACTS */}
      <section id="core-principles" className="space-y-4 scroll-mt-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Core Principles
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Key Management Concepts &amp; Operational Impacts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pageData.keyConcepts.map((concept, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenConcept(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenConcept(idx);
                }
              }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title={`Click to open detailed briefing for Concept 0${idx + 1}: ${concept.heading}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    CONCEPT 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 opacity-70 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                    <span>Explore Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                  {concept.heading}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {concept.details}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-1">
                  Customer &amp; Operational Impact:
                </span>
                <p className="text-blue-700 dark:text-blue-400 font-medium leading-snug">
                  {concept.operationalImpact}
                </p>
                <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span>View Detailed Briefing</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REAL-WORLD BUSINESS SCENARIO */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-blue-400" />
          <span>Real-World Business Scenario</span>
        </div>

        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-mono">Organizational Context:</span>
          <h3 className="text-lg font-bold text-white leading-snug">
            {pageData.businessScenario.companyContext}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 text-xs">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
            <span className="font-bold text-rose-400 uppercase block">The Challenge / Breakdown</span>
            <p className="text-slate-300 leading-relaxed">
              {pageData.businessScenario.problemOrInitiative}
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
            <span className="font-bold text-blue-400 uppercase block">Management Action Executed</span>
            <p className="text-slate-300 leading-relaxed">
              {pageData.businessScenario.managementAction}
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-1.5">
            <span className="font-bold text-emerald-400 uppercase block">Measurable Customer Result</span>
            <p className="text-slate-300 leading-relaxed">
              {pageData.businessScenario.customerResult}
            </p>
          </div>
        </div>
      </section>

      {/* 6. MANAGEMENT DIRECTIVES & RECOMMENDATIONS */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Key Management Directives for This Phase
          </h4>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-6 list-disc">
          {pageData.managementDirectives.map((directive, idx) => (
            <li key={idx} className="leading-relaxed">
              {directive}
            </li>
          ))}
        </ul>
      </section>

      {/* 7. IF PAGE 7: FINAL SYNTHESIS & BOARDROOM SUMMARY */}
      {isFinalPage && pageData.finalSummary && (
        <section className="bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-900/50 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Complete Topic Synthesis &middot; Final Boardroom Briefing</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Executive Summary &amp; Final Takeaways
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {pageData.finalSummary.synthesis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
            <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white uppercase block">
                Core Governing Principles
              </span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc pl-4">
                {pageData.finalSummary.corePrinciples.map((prin, i) => (
                  <li key={i}>{prin}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white uppercase block">
                Immediate Boardroom Recommendations
              </span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc pl-4">
                {pageData.finalSummary.boardroomRecommendations.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 8. CLICKABLE OPTIONS TO PROCEED TO NEXT PAGE (FOR PAGES 1-6) */}
      {!isFinalPage && pageData.optionsForNextPage && pageData.optionsForNextPage.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Next Sequential Step in This Topic
              </span>
              <span className="text-xs font-mono text-slate-400">
                Advances to Page {nextPageNumber} of 7
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Select an Option to Continue to Page {nextPageNumber}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Click any of the options below to navigate to Page {nextPageNumber} of {sequence.title}. The selected option will guide the deep-dive focus of the next page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pageData.optionsForNextPage.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleOptionClick(opt.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOptionClick(opt.title);
                  }
                }}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-blue-500 dark:hover:border-blue-600 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                      PAGE {nextPageNumber} TRACK
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {opt.previewFocus}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                    {opt.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">
                  <span>Continue to Page {nextPageNumber} &rarr;</span>
                  <div className="p-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. BOTTOM NAVIGATION CONTROLS */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Back Button (Previous Page or Home) */}
        {pageData.pageNumber > 1 ? (
          <Link
            to={`/${sequence.slug}/page-${prevPageNumber}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to Page {prevPageNumber}</span>
          </Link>
        ) : (
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <Home className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Back to All 8 Topics</span>
          </Link>
        )}

        {/* PROMINENT "BACK TO HOME" BUTTON ON PAGE 7 */}
        {isFinalPage ? (
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-extrabold shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>&larr; Back to Home</span>
          </Link>
        ) : (
          <div className="text-xs text-slate-400 font-mono">
            Step {pageData.pageNumber} of 7 &middot; Select an option above to advance
          </div>
        )}
      </div>

      {/* 10. DETAILED CONCEPT MODAL OVERLAY */}
      <ConceptDetailModal
        concept={activeDetailedConcept}
        isOpen={Boolean(activeDetailedConcept)}
        onClose={handleCloseConcept}
        onSelectConcept={handleSelectConcept}
        totalConcepts={pageData.keyConcepts.length}
      />
    </div>
  );
}
