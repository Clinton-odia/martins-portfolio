import React from 'react';
import { ArrowRight, Radio } from '../components/Icons';

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  return (
    <div className="blueprint-grid min-h-[70vh] flex items-center justify-center py-20">
      <div className="container max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mx-auto mb-6 text-[var(--accent-2)]">
          <Radio size={32} />
        </div>

        <span className="eyebrow text-xs">STATUS 404 / ZERO CARRIER</span>

        <h1 className="font-display font-extrabold text-4xl text-[var(--text)] mb-3">
          Signal Not Detected
        </h1>

        <p className="text-sm text-[var(--muted)] mb-8 leading-relaxed font-mono">
          The requested coordinate or frequency band does not exist in the current transceiver map.
        </p>

        <button
          onClick={() => onNavigate('/')}
          className="btn-primary mx-auto"
        >
          <span>Return to Primary Base Station</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
