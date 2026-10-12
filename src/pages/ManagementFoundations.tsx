import React, { useState } from 'react';
import {
  Building2,
  Target,
  Network,
  Compass,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  FileCheck2,
  Layers
} from 'lucide-react';
import WorkflowVisualizer from '../components/WorkflowVisualizer';
import TopicNavigation from '../components/TopicNavigation';

interface FunctionCard {
  id: string;
  name: string;
  classicalConcept: string;
  customerExperienceApplication: string;
  executiveExample: string;
  directImpact: string;
  kpi: string;
}

const MANAGEMENT_FUNCTIONS: FunctionCard[] = [
  {
    id: 'planning',
    name: '1. Customer-Focused Planning & Objective Setting',
    classicalConcept: 'Defining organizational mission, forecasting conditions, and establishing strategic targets.',
    customerExperienceApplication: 'Translating corporate goals into customer-centric Service Level Agreements (SLAs), capacity forecasting for peak hours, and setting explicit CSAT/NPS targets across departments.',
    executiveExample: 'An enterprise SaaS company models peak customer onboarding surges during Q4 and proactively provisions dedicated customer success architects 60 days in advance.',
    directImpact: 'Eliminates resource bottlenecks before customers encounter them; establishes clear commitments that marketing and operations both honor.',
    kpi: 'Service SLA Compliance >= 99.2%',
  },
  {
    id: 'organizing',
    name: '2. Organizing Teams & Resource Allocation',
    classicalConcept: 'Structuring organizational roles, authority lines, task delegations, and physical/digital resources.',
    customerExperienceApplication: 'Eliminating functional silos by establishing cross-functional "Customer Journey Pods" combining product, technical support, and account management under shared customer outcomes.',
    executiveExample: 'A logistics carrier redesigns regional dispatch so customer reps sit alongside fleet controllers, cutting shipment delay notification latency from 4 hours to 12 minutes.',
    directImpact: 'Customers receive unified answers rather than getting passed between detached departments.',
    kpi: 'Cross-Department Handoff Time < 5 mins',
  },
  {
    id: 'leading',
    name: '3. Leadership & Decisive Governance',
    classicalConcept: 'Guiding, inspiring, and directing employees toward organizational objectives.',
    customerExperienceApplication: 'Cultivating servant leadership where managers remove operational roadblocks for frontline workers and model radical empathy toward customer concerns.',
    executiveExample: 'Executive leadership conducts weekly "Voice of Customer" listening sessions where C-suite executives listen directly to customer service recordings alongside frontline reps.',
    directImpact: 'Inspires authentic frontline pride, reduces staff cynicism, and drives proactive problem resolution.',
    kpi: 'Employee Net Promoter Score (eNPS) >= 48',
  },
  {
    id: 'coordinating',
    name: '4. Inter-Departmental Coordination',
    classicalConcept: 'Synchronizing disparate activities and operations into a harmonious unified workflow.',
    customerExperienceApplication: 'Harmonizing Product, Engineering, Sales, and Support on a centralized customer CRM record so updates, tickets, and feedback are universally visible in real time.',
    executiveExample: 'When Engineering introduces an API change, customer support documentation and training are automatically triggered 14 days before customer deployment.',
    directImpact: 'Prevents customer confusion and guarantees support reps are thoroughly prepared before client inquiries arrive.',
    kpi: 'First-Contact Ticket Resolution Rate >= 86%',
  },
  {
    id: 'monitoring',
    name: '5. Monitoring & Controlling Service Performance',
    classicalConcept: 'Measuring actual performance against predefined benchmarks and executing corrective action.',
    customerExperienceApplication: 'Tracking real-time metrics (CSAT, Customer Effort Score, First Response Time, Resolution Time) through executive dashboards to catch degrading trends immediately.',
    executiveExample: 'An operations manager receives an automated alert when average call wait time exceeds 90 seconds, instantly triggering dynamic overflow routing to secondary support tiers.',
    directImpact: 'Guarantees service quality consistency and catches localized service degradations before they damage brand reputation.',
    kpi: 'Mean Time to Detect (MTTD) Service Slump < 15 mins',
  },
  {
    id: 'improving',
    name: '6. Continuous Quality Improvement (Kaizen)',
    classicalConcept: 'Systematic, ongoing efforts to enhance products, services, or processes.',
    customerExperienceApplication: 'Establishing weekly root-cause review councils where customer complaints are decomposed into systemic process bugs, resulting in permanent operational patches.',
    executiveExample: 'A banking app discovers 35% of customer support calls stem from password reset timeouts; management redesigns the cryptographic token flow, permanently eliminating 18,000 monthly support calls.',
    directImpact: 'Continuously strips friction out of the customer journey and prevents repeated grievances.',
    kpi: 'Recurring Complaint Defect Rate -55%',
  },
];

export default function ManagementFoundations() {
  const [selectedFunction, setSelectedFunction] = useState<string>('planning');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* HEADER SECTION */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Topic 01 &middot; Structural Management Theory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Management Foundations in Customer Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Customer satisfaction is not merely a byproduct of charismatic sales reps or polite support agents. It is the direct architectural outcome of how executive leadership plans, organizes, coordinates, and controls operational resources.
        </p>
      </div>

      {/* CORE FRAMEWORK: 6 MANAGEMENT FUNCTIONS */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Interactive Analysis
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            How the Six Classical Functions of Management Drive Satisfaction
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Click through each management discipline below to explore classical administrative principles applied directly to modern customer experience excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANAGEMENT_FUNCTIONS.map((fn) => {
            const isSelected = selectedFunction === fn.id;
            return (
              <div
                key={fn.id}
                onClick={() => setSelectedFunction(fn.id)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/50 dark:bg-blue-950/40 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      FUNCTION {fn.id.toUpperCase()}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">
                        Active Focus
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {fn.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {fn.customerExperienceApplication}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                      Direct Customer Impact:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {fn.directImpact}
                    </span>
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                      Target Metric: {fn.kpi}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VISUAL WORKFLOW: END-TO-END VALUE CHAIN */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Operational Blueprint
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            The Five-Stage Management Workflow
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Management Planning &rarr; Team Coordination &rarr; Service Delivery &rarr; Customer Feedback &rarr; Continuous Improvement
          </p>
        </div>

        <WorkflowVisualizer />
      </section>

      {/* REAL-WORLD BUSINESS SCENARIO: REDUCING SERVICE DELAYS THROUGH ORGANIZED MANAGEMENT */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800 text-xs font-semibold mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-blue-400" />
            <span>Executive Field Scenario</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Case Study Scenario: Eliminating 72-Hour Service Backlogs in B2B Fleet Management
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Examine how a nationwide commercial vehicle leasing firm with 24 service branches replaced ad-hoc chaos with disciplined managerial coordination, cutting service delays from 72 hours down to 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 bg-slate-800/60 p-6 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>The Unorganized Management Baseline (Before)</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">&times;</span>
                <span><strong>No Capacity Planning:</strong> Service centers accepted client maintenance bookings without verifying mechanical technician availability or parts stock.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">&times;</span>
                <span><strong>Departmental Silos:</strong> Customer support promised 24-hour turnaround, while parts procurement had a 3-day lead time with no communication channel between them.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">&times;</span>
                <span><strong>Outcome:</strong> CSAT plummeted to 48%, customer complaint escalations required 18% of executive time, and corporate fleet accounts began defecting to competitors.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-slate-800/60 p-6 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Structured Management Interventions (After)</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&check;</span>
                <span><strong>Predictive Demand Planning:</strong> Management deployed dynamic capacity scheduling that restricted bookings to verified bay and technician availability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&check;</span>
                <span><strong>Synchronized Coordination:</strong> Parts inventory was linked directly to booking intake, ensuring required components arrived 2 hours before the vehicle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&check;</span>
                <span><strong>Outcome:</strong> Average service delay dropped by 94%, CSAT rebounded to 91%, and contract renewals reached an all-time high of 98%.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TOPIC SUMMARY & EXECUTIVE RECOMMENDATIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Executive Synthesis
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Key Points &amp; Management Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Core Foundational Principles</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              Management cannot treat customer satisfaction as an isolated department or marketing catchphrase. It is an end-to-end system where strategic planning sets the baseline, organizational architecture removes friction, and continuous control maintains standards.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Top 3 Actionable Recommendations</span>
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <li>Align departmental bonuses directly to cross-functional customer retention and CSAT rather than isolated output silos.</li>
              <li>Enforce weekly cross-functional customer journey reviews between Support, Engineering, and Operations.</li>
              <li>Establish real-time operational thresholds that trigger dynamic resource reallocation before customer wait times spike.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* DEDICATED TOPIC NAVIGATION (BACK TO TOPICS, PREV, NEXT) */}
      <TopicNavigation currentPath="/management-foundations" />
    </div>
  );
}
