import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, ArrowRight, LayoutDashboard, Building2, BarChart3, Users, Compass, TrendingUp, Briefcase, Cpu } from 'lucide-react';
import { TOPICS } from '../data/topicsData';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutDashboard,
  Building2,
  BarChart3,
  Users,
  Compass,
  TrendingUp,
  Briefcase,
  Cpu,
};

export default function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400">
              EXECUTIVE NAVIGATION
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Role of Management in CX
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) =>
              `group flex items-start gap-3.5 p-3.5 rounded-xl transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`p-2 rounded-lg shrink-0 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span
                      className={`text-[11px] font-mono font-medium ${
                        isActive ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      LANDING
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                        isActive ? 'text-white' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                  <h4
                    className={`text-sm font-semibold truncate ${
                      isActive ? 'text-white' : 'text-slate-900 dark:text-slate-100'
                    }`}
                  >
                    Home Executive Dashboard
                  </h4>
                  <p
                    className={`text-xs truncate ${
                      isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Main Platform Portal &amp; Roadmap
                  </p>
                </div>
              </>
            )}
          </NavLink>
          {TOPICS.map((topic, index) => {
            const Icon = ICON_MAP[topic.iconName] || LayoutDashboard;
            const stepNum = `0${index + 1}`.slice(-2);

            return (
              <NavLink
                key={topic.id}
                to={topic.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-start gap-3.5 p-3.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span
                          className={`text-[11px] font-mono font-semibold ${
                            isActive ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'
                          }`}
                        >
                          TOPIC {stepNum} &middot; 7 Pages
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                            isActive ? 'text-white' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                          }`}
                        />
                      </div>
                      <h4
                        className={`text-sm font-semibold truncate ${
                          isActive ? 'text-white' : 'text-slate-900 dark:text-slate-100'
                        }`}
                      >
                        {topic.title}
                      </h4>
                      <p
                        className={`text-xs truncate ${
                          isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {topic.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Role of Management in Improving Customer Satisfaction &middot; Business Intelligence &amp; Practice Guide
          </p>
        </div>
      </div>
    </div>
  );
}
