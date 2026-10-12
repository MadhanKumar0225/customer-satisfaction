import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users2,
  TrendingUp,
  BarChart3,
  Sparkles,
  CheckCircle,
  Building2,
  Compass,
  Briefcase,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { TOPICS } from '../data/topicsData';

const RETENTION_PREVIEW_DATA = [
  { month: 'M1', retention: 82 },
  { month: 'M2', retention: 84 },
  { month: 'M3', retention: 86 },
  { month: 'M4', retention: 89 },
  { month: 'M5', retention: 91 },
  { month: 'M6', retention: 94 },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Executive Management Consulting &amp; CX Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Better Management.{' '}
                <span className="text-blue-600 dark:text-blue-400 block sm:inline">
                  Exceptional Customer Experiences.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Discover how effective leadership, strategic decisions, employee engagement, and service innovation create lasting customer satisfaction.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/experience-strategies/page-1"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>Explore Management Strategies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/customer-satisfaction/page-1"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Discover Customer Satisfaction</span>
                </Link>
              </div>

              {/* Statistics Strip */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                    94.2%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    CSAT Peak Benchmark
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                    -68%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Resolution Delay Drop
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                    +42%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Repeat Retention Gain
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset + Interactive Floating Data Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 aspect-16/10">
                <img
                  src="/src/assets/images/hero_executive_consulting_1791796789802.jpg"
                  alt="Executive boardroom consulting session on customer experience strategy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Executive Boardroom Briefing</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 font-medium">
                    Aligning strategic leadership with frontline customer excellence.
                  </p>
                </div>
              </div>

              {/* Floating Card 1: CSAT Score Card */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3.5 shadow-lg max-w-[210px] hidden sm:block">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    CSAT Index
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                    +14.8%
                  </span>
                </div>
                <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                  92.4 <span className="text-xs font-normal text-slate-400">/ 100</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  Verified post-management intervention
                </p>
              </div>

              {/* Floating Card 2: Mini Retention Chart Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3.5 shadow-lg max-w-[230px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    Annual Retention Rate
                  </span>
                  <span className="text-[11px] font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                    94%
                  </span>
                </div>
                <div className="h-12 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={RETENTION_PREVIEW_DATA}>
                      <Area
                        type="monotone"
                        dataKey="retention"
                        stroke="#2563eb"
                        fill="#3b82f6"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-[10px] text-slate-400 font-mono text-right">
                  Illustrative Trajectory
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONNECTION: HOW MANAGEMENT DRIVES CUSTOMER SATISFACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            The Executive Thesis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5">
            Customer Experience is an Operational Reflection of Management
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Frontline customer representatives do not operate in a vacuum. Service consistency, responsiveness, and problem resolution speed are direct outputs of executive resource allocation, inter-departmental harmony, and managerial support.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-800 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Leadership Excellence
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Transformational and servant leaders cultivate psychological safety, customer-first core values, and empower frontline staff to prioritize customer delight over restrictive administrative bureaucracy.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <Link
                to="/leadership-performance/page-1"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Explore Leadership Frameworks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-800 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Service Quality &amp; Systems
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard operating procedures, cross-functional service level agreements (SLAs), and modern digital tooling ensure that every customer interaction meets stringent reliability and speed standards.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <Link
                to="/service-quality/page-1"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>View Quality Strategies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-800 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Customer Loyalty &amp; Growth
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Satisfied clients exhibit higher lifetime value, lower price sensitivity, and higher organic referral rates, converting customer experience investment directly into commercial return on equity.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <Link
                to="/customer-satisfaction/page-1"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Analyze Retention &amp; Expectations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE TOPIC HUB: 8 MAIN TOPICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Multi-Page Sequential Navigation Structure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Eight Main Topics
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS.map((topic, index) => {
            const stepNum = `0${index + 1}`.slice(-2);
            return (
              <div
                key={topic.id}
                onClick={() => navigate(topic.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(topic.path);
                  }
                }}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-blue-500 dark:hover:border-blue-600 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      TOPIC {stepNum}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 leading-snug">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={topic.path}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Start Sequence (Page 1)</span>
                  </Link>
                  <div className="p-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROADMAP SECTION: 4-STAGE CUSTOMER EXPERIENCE IMPROVEMENT ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Executive Implementation Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 mb-4">
              4-Phase Management Transformation Pathway
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              A structured operational blueprint for executive leaders seeking to transition from reactive dispute resolution to proactive customer delight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/60">
              <span className="text-xs font-mono text-blue-400 font-bold block mb-2">PHASE 1 (Days 1–30)</span>
              <h4 className="text-base font-bold text-white mb-2">Diagnostic Alignment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Audit existing customer touchpoints, establish cross-departmental CSAT/NPS baselines, and catalog top 10 recurring customer complaints.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/60">
              <span className="text-xs font-mono text-blue-400 font-bold block mb-2">PHASE 2 (Days 31–60)</span>
              <h4 className="text-base font-bold text-white mb-2">Frontline Empowerment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Grant frontline staff discretionary budget thresholds for immediate customer issue resolution, cutting escalation queues by 70%.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/60">
              <span className="text-xs font-mono text-blue-400 font-bold block mb-2">PHASE 3 (Days 61–90)</span>
              <h4 className="text-base font-bold text-white mb-2">Systems Integration</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect CRM, billing, and support queues into a unified view. Implement closed-loop customer feedback outreach for all detractor scores.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/60">
              <span className="text-xs font-mono text-blue-400 font-bold block mb-2">PHASE 4 (Ongoing)</span>
              <h4 className="text-base font-bold text-white mb-2">Continuous Kaizen</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Execute bi-weekly operational micro-sprints to permanently eradicate root causes of service failure and celebrate employee achievements.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <span className="text-xs text-slate-400">
              Ready to evaluate your organization&apos;s current customer experience maturity?
            </span>
            <Link
              to="/improvement-plan/page-1"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <span>Explore Improvement Plan Sequence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
