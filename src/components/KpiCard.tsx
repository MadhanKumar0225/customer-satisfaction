import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  subtext?: string;
  icon?: LucideIcon;
  demoTag?: boolean;
}

export default function KpiCard({
  label,
  value,
  change,
  changeType = 'positive',
  subtext,
  icon: Icon,
  demoTag = true,
}: KpiCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:border-blue-200 dark:hover:border-blue-900 transition-all group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {label}
        </span>
        {Icon && (
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
          {value}
        </span>
        {change && (
          <span
            className={`inline-flex items-center text-xs font-semibold tabular-nums ${
              changeType === 'positive'
                ? 'text-emerald-600 dark:text-emerald-400'
                : changeType === 'negative'
                ? 'text-rose-600 dark:text-rose-400'
                : 'text-slate-500'
            }`}
          >
            {changeType === 'positive' && <TrendingUp className="w-3 h-3 mr-0.5" />}
            {changeType === 'negative' && <TrendingDown className="w-3 h-3 mr-0.5" />}
            {changeType === 'neutral' && <Minus className="w-3 h-3 mr-0.5" />}
            {change}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/60">
        <span>{subtext}</span>
        {demoTag && (
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
            Demo Benchmark
          </span>
        )}
      </div>
    </div>
  );
}
