import React, { useEffect, useRef } from 'react';
import { ConceptDetailedContent } from '../types';
import ConceptDetail from './ConceptDetail';

interface ConceptDetailModalProps {
  concept: ConceptDetailedContent | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectConcept?: (index: number) => void;
  totalConcepts?: number;
}

export default function ConceptDetailModal({
  concept,
  isOpen,
  onClose,
  onSelectConcept,
  totalConcepts = 3,
}: ConceptDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Scroll to top of modal when concept changes
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [concept?.id]);

  if (!isOpen || !concept) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-modal-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col my-auto transition-all text-slate-900 dark:text-slate-100"
      >
        <ConceptDetail
          concept={concept}
          isModal={true}
          onBack={onClose}
          onClose={onClose}
          onSelectConcept={onSelectConcept}
          totalConcepts={totalConcepts}
        />
      </div>
    </div>
  );
}
