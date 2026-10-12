import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, Compass, Mail, Globe, MapPin } from 'lucide-react';
import { TOPICS } from '../data/topicsData';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Role of Management in Improving Customer Satisfaction
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A comprehensive executive intelligence framework dedicated to examining how leadership,
              operational coordination, frontline empowerment, and continuous quality improvement
              drive sustainable customer loyalty and business growth.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>Demo Data Notice: All charts, CSAT metrics, and case scenarios represent illustrative benchmarks designed for executive analysis.</p>
            </div>
          </div>

          {/* Quick Navigation: Pages 1-4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Foundational Topics
            </h4>
            <ul className="space-y-2 text-sm">
              {TOPICS.slice(0, 4).map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{topic.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation: Pages 5-8 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Strategy &amp; Impact
            </h4>
            <ul className="space-y-2 text-sm">
              {TOPICS.slice(4).map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{topic.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Contact &amp; Governance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Executive CX Practice</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>cx-management@consulting.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Global Business Institute</span>
              </li>
            </ul>
            <div className="pt-3">
              <Link
                to="/improvement-plan/page-1"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Launch Improvement Plan</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Role of Management in Improving Customer Satisfaction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Corporate Governance</span>
            <span>Customer Experience Standards</span>
            <span>Total Quality Management</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
