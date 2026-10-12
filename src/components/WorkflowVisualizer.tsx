import React, { useState } from 'react';
import { Target, Users2, Truck, MessageSquareQuote, RefreshCw, ChevronRight, CheckCircle2 } from 'lucide-react';

interface WorkflowStep {
  id: string;
  number: string;
  name: string;
  icon: React.ElementType;
  executiveRole: string;
  operationalOutput: string;
  customerOutcome: string;
  keyRisk: string;
}

const STEPS: WorkflowStep[] = [
  {
    id: 'planning',
    number: '01',
    name: 'Management Planning',
    icon: Target,
    executiveRole: 'Establish customer-focused vision, quantifiable CSAT/NPS targets, and SLA benchmarks.',
    operationalOutput: 'Strategic customer journey maps, capacity forecasting, and resource allocations.',
    customerOutcome: 'Predictable service standards, realistic wait estimates, transparent promises.',
    keyRisk: 'Setting unrealistic marketing expectations that operational capacity cannot fulfill.',
  },
  {
    id: 'coordination',
    number: '02',
    name: 'Team Coordination',
    icon: Users2,
    executiveRole: 'Break down departmental silos between Product, Sales, Logistics, and Frontline Support.',
    operationalOutput: 'Unified CRM customer records, cross-functional SLA agreements, synchronized handoffs.',
    customerOutcome: 'Frictionless handoffs where the customer never has to repeat their issue or account history.',
    keyRisk: 'Departmental finger-pointing when handoffs occur between billing and technical support.',
  },
  {
    id: 'delivery',
    number: '03',
    name: 'Service Delivery',
    icon: Truck,
    executiveRole: 'Equip frontline staff with tools, empowerment authority, and psychological safety.',
    operationalOutput: 'High first-contact resolution (FCR), empathetic communication, standardized high quality.',
    customerOutcome: 'Rapid problem resolution, polite and competent interactions, reliable fulfillment.',
    keyRisk: 'Excessive script adherence that prevents staff from exercising common-sense empathy.',
  },
  {
    id: 'feedback',
    number: '04',
    name: 'Customer Feedback',
    icon: MessageSquareQuote,
    executiveRole: 'Capture multi-channel voice-of-customer (surveys, tickets, social sentiment, churn logs).',
    operationalOutput: 'Real-time CSAT alerts, detractor escalation within 24 hours, granular sentiment tagging.',
    customerOutcome: 'Feeling heard, valued, and respected; negative encounters transformed through rapid recovery.',
    keyRisk: 'Collecting voluminous survey data into passive reports without operational action.',
  },
  {
    id: 'improvement',
    number: '05',
    name: 'Continuous Improvement',
    icon: RefreshCw,
    executiveRole: 'Translate operational feedback into root-cause remediation and systemic process upgrades.',
    operationalOutput: 'Bi-weekly Kaizen sprints, policy refinement, recurring defect elimination, updated training.',
    customerOutcome: 'Ever-improving product and service reliability, reduced recurring grievances.',
    keyRisk: 'Treating customer experience as a one-off initiative rather than continuous organizational discipline.',
  },
];

export default function WorkflowVisualizer() {
  const [activeStepId, setActiveStepId] = useState<string>('planning');
  const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[0];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
      <div className="mb-6">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          End-to-End Governance Model
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
          Management-to-Customer Value Chain
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Select any phase of the workflow to examine management responsibilities and their direct impact on customer perception.
        </p>
      </div>

      {/* Workflow Navigation Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pb-6 border-b border-slate-200 dark:border-slate-800">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={`text-left p-3 rounded-lg transition-all flex flex-col justify-between relative ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-mono font-bold ${
                    isActive ? 'text-blue-200' : 'text-slate-400'
                  }`}
                >
                  PHASE {step.number}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
              </div>
              <span className="text-xs font-bold leading-tight truncate">{step.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Drill-Down Panel */}
      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
              <activeStep.icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400">STAGE {activeStep.number}</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {activeStep.name}
              </h4>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200/80 dark:border-slate-800">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Executive Management Action
            </h5>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {activeStep.executiveRole}
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200/80 dark:border-slate-800">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Internal Operational Artifacts
            </h5>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {activeStep.operationalOutput}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50/60 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200/80 dark:border-blue-900/50">
            <div className="flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
                Direct Customer Outcome
              </h5>
            </div>
            <p className="text-sm text-blue-950 dark:text-blue-100 font-medium leading-relaxed">
              {activeStep.customerOutcome}
            </p>
          </div>

          <div className="bg-rose-50/60 dark:bg-rose-950/20 rounded-lg p-4 border border-rose-200/80 dark:border-rose-900/50">
            <h5 className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-400 mb-1">
              Operational Failure Mode (Without Strong Management)
            </h5>
            <p className="text-sm text-rose-950 dark:text-rose-200 leading-relaxed">
              {activeStep.keyRisk}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
