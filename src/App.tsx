import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopicPageView from './pages/TopicPageView';

// Specialized redirects or fallbacks
function TopicRedirect() {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  return <Navigate to={`/${topicSlug}/page-1`} replace />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Home />} />

            {/* 8 Topics x 7 Pages each (56 connected pages) */}
            <Route path="/:topicSlug/:pageSlug" element={<TopicPageView />} />
            <Route path="/:topicSlug/:pageSlug/concept/:conceptId" element={<TopicPageView />} />

            {/* Redirect /:topicSlug directly to /:topicSlug/page-1 */}
            <Route path="/management-foundations" element={<Navigate to="/management-foundations/page-1" replace />} />
            <Route path="/customer-satisfaction" element={<Navigate to="/customer-satisfaction/page-1" replace />} />
            <Route path="/leadership-performance" element={<Navigate to="/leadership-performance/page-1" replace />} />
            <Route path="/experience-strategies" element={<Navigate to="/experience-strategies/page-1" replace />} />
            <Route path="/communication-relationships" element={<Navigate to="/communication-relationships/page-1" replace />} />
            <Route path="/service-quality" element={<Navigate to="/service-quality/page-1" replace />} />
            <Route path="/case-studies" element={<Navigate to="/case-studies/page-1" replace />} />
            <Route path="/improvement-plan" element={<Navigate to="/improvement-plan/page-1" replace />} />

            {/* Legacy alias redirects */}
            <Route path="/customer-insights" element={<Navigate to="/customer-satisfaction/page-1" replace />} />
            <Route path="/business-impact" element={<Navigate to="/service-quality/page-1" replace />} />
            <Route path="/action-lab" element={<Navigate to="/improvement-plan/page-1" replace />} />
            <Route path="/platform-overview" element={<Navigate to="/management-foundations/page-1" replace />} />

            {/* Generic topic redirect fallback */}
            <Route path="/:topicSlug" element={<TopicRedirect />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
