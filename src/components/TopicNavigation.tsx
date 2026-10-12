import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
import { getAdjacentTopics } from '../data/topicsData';

interface TopicNavigationProps {
  currentPath?: string;
}

export default function TopicNavigation({ currentPath }: TopicNavigationProps) {
  const location = useLocation();
  const path = currentPath || location.pathname;
  const { prev, next } = getAdjacentTopics(path);

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 no-print">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Back to Topics Button */}
        <Link
          to="/"
          className="order-2 sm:order-1 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          title="Return to the Topics Dashboard"
        >
          <LayoutGrid className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Back to Topics</span>
        </Link>

        {/* Previous and Next Navigation Buttons */}
        <div className="order-1 sm:order-2 flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {prev ? (
            <Link
              to={prev.path}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left hidden xs:block">
                <span className="block text-[10px] uppercase text-slate-400 font-mono">Previous Topic</span>
                <span className="font-semibold text-xs truncate max-w-[140px] block">{prev.title}</span>
              </div>
              <span className="xs:hidden">Previous</span>
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left hidden xs:block">
                <span className="block text-[10px] uppercase text-slate-400 font-mono">Platform</span>
                <span className="font-semibold text-xs truncate max-w-[140px] block">Home Landing</span>
              </div>
              <span className="xs:hidden">Home</span>
            </Link>
          )}

          {next ? (
            <Link
              to={next.path}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xs"
            >
              <div className="text-right hidden xs:block">
                <span className="block text-[10px] uppercase text-blue-200 font-mono">Next Topic</span>
                <span className="font-semibold text-xs truncate max-w-[140px] block">{next.title}</span>
              </div>
              <span className="xs:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xs"
            >
              <span>Return to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
