import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  PieChart as PieIcon,
  Filter,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  Compass,
  FileSpreadsheet
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import {
  MONTHLY_TRENDS_DATA,
  CATEGORY_SATISFACTION_DATA,
  FEEDBACK_SENTIMENT_DATA,
  COMPLAINT_DISTRIBUTION_DATA,
  CUSTOMER_JOURNEY_STAGES
} from '../data/insightsData';
import KpiCard from '../components/KpiCard';
import TopicNavigation from '../components/TopicNavigation';

export default function CustomerInsights() {
  const [dateRange, setDateRange] = useState<'30d' | 'q1' | 'q2' | 'year'>('year');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const trendData = MONTHLY_TRENDS_DATA[dateRange] || MONTHLY_TRENDS_DATA['year'];

  const filteredCategoryData =
    selectedCategoryFilter === 'all'
      ? CATEGORY_SATISFACTION_DATA
      : CATEGORY_SATISFACTION_DATA.filter((c) =>
          c.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase())
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 02 &middot; Customer Experience Analytics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Customer Insights &amp; Operational Analytics
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Quantitative feedback and telemetry transform subjective customer impressions into actionable management directives. Explore our interactive analytics engine below.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-blue-600 dark:text-blue-400">Note:</span>
          <span>All metrics below represent curated demonstration data for executive simulation and benchmarking.</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Filter View:
          </span>
          {/* Date Range Selector */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setDateRange('30d')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                dateRange === '30d'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Last 30 Days
            </button>
            <button
              onClick={() => setDateRange('q1')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                dateRange === 'q1'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Q1
            </button>
            <button
              onClick={() => setDateRange('q2')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                dateRange === 'q2'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Q2
            </button>
            <button
              onClick={() => setDateRange('year')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                dateRange === 'year'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Full Year Trajectory
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Service Category:</span>
          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Service Dimensions</option>
            <option value="Support">Customer Support</option>
            <option value="Speed">Service Speed</option>
            <option value="Product">Product Reliability</option>
            <option value="Billing">Billing &amp; Transparency</option>
          </select>
        </div>
      </div>

      {/* CORE KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <KpiCard
          label="Customer Satisfaction (CSAT)"
          value="91.4%"
          change="+8.9% YoY"
          changeType="positive"
          subtext="Target standard: 85.0%"
          icon={TrendingUp}
        />
        <KpiCard
          label="Net Retention Rate (NRR)"
          value="93.8%"
          change="+4.2% YoY"
          changeType="positive"
          subtext="Annual account retention"
          icon={CheckCircle2}
        />
        <KpiCard
          label="Net Promoter Score (NPS)"
          value="+72"
          change="+15 pts"
          changeType="positive"
          subtext="Promoters outnumber detractors 4:1"
          icon={BarChart3}
        />
        <KpiCard
          label="Mean Complaint Resolution"
          value="3.2 hrs"
          change="-42% time"
          changeType="positive"
          subtext="Previous baseline: 5.5 hrs"
          icon={Clock}
        />
      </div>

      {/* CHARTS GRID: 2 COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart 1: Satisfaction Trends Over Time */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Satisfaction &amp; Retention Trends
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                CSAT (%) vs Retention (%) across selected timeframe ({dateRange.toUpperCase()})
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Demo Data</span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="csatGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis domain={[75, 100]} stroke="#94a3b8" fontSize={11} />
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
                <Area
                  type="monotone"
                  dataKey="csat"
                  name="CSAT Score (%)"
                  stroke="#2563eb"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#csatGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="retention"
                  name="Customer Retention (%)"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#retGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Category Satisfaction vs Benchmark */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Satisfaction by Service Category
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Departmental performance compared to external industry benchmark
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Demo Data</span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={filteredCategoryData}
                margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                <XAxis
                  dataKey="category"
                  stroke="#94a3b8"
                  fontSize={10}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis domain={[50, 100]} stroke="#94a3b8" fontSize={11} />
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
                <Bar dataKey="score" name="Company Score (%)" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="benchmark" name="Industry Benchmark (%)" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Positive vs Negative Feedback Breakdown */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Customer Sentiment Distribution
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Qualitative sentiment analysis across all voice-of-customer channels
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Sample N=14,200</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={FEEDBACK_SENTIMENT_DATA}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={3}
                  >
                    {FEEDBACK_SENTIMENT_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val) => [`${val}%`, 'Share']}
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#1e293b',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {FEEDBACK_SENTIMENT_DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                    {item.value}%
                  </span>
                </div>
              ))}
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                89% of responses fall in positive quadrants following frontline empowerment policies.
              </p>
            </div>
          </div>
        </div>

        {/* Chart 4: Complaint Category & Resolution Time */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Customer Complaint Distribution
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Volume and average resolution latency by root-cause category
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Demo Data</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={COMPLAINT_DISTRIBUTION_DATA}
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
                <XAxis type="number" stroke="#94a3b8" fontSize={11} />
                <YAxis
                  dataKey="category"
                  type="category"
                  stroke="#94a3b8"
                  fontSize={10}
                  width={90}
                />
                <Tooltip
                  formatter={(val, name) => [
                    name === 'count' ? `${val} tickets` : `${val} hrs`,
                    name === 'count' ? 'Ticket Count' : 'Avg Resolution Time',
                  ]}
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#1e293b',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="count" name="Ticket Volume" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* CUSTOMER JOURNEY VISUALIZATION */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Journey Diagnostics
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Customer Journey Touchpoint Satisfaction Analysis
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Evaluating customer satisfaction across the five critical lifecycle milestones to pinpoint where management intervention yields maximum retention gain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {CUSTOMER_JOURNEY_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    STAGE {stage.step}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      stage.dropoffRisk === 'Low'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : stage.dropoffRisk === 'Moderate'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    {stage.dropoffRisk} Churn Risk
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {stage.stageName}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {stage.touchpoint}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">CSAT Rating:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                    {stage.satisfactionRate}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full"
                    style={{ width: `${stage.satisfactionRate}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 pt-1 leading-snug">
                  <strong>Action:</strong> {stage.keyManagementAction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUMMARY & MANAGEMENT RECOMMENDATIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Key Insights &amp; Management Directives
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          The data clearly demonstrates that complaint resolution latency (3.4 hours avg for response latency, 6.8 hours for technical glitches) accounts for over 65% of customer dissatisfaction. By shifting management attention toward first-contact resolution protocols and proactive account onboarding, organizations typically observe an 8–15% surge in overall customer retention.
        </p>
      </section>

      {/* DEDICATED TOPIC NAVIGATION */}
      <TopicNavigation currentPath="/customer-insights" />
    </div>
  );
}
