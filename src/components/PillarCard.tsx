import React from 'react';
import { Radio, Zap, Activity, ArrowRight } from './Icons';

interface PillarCardProps {
  id: 'rf' | 'energy' | 'wsn';
  title: string;
  summary: string;
  terms: string[];
  onSelect: (pillarId: string) => void;
}

export const PillarCard: React.FC<PillarCardProps> = ({ id, title, summary, terms, onSelect }) => {
  const renderIcon = () => {
    switch (id) {
      case 'rf':
        return <Radio size={28} className="text-[var(--accent-2)]" />;
      case 'energy':
        return <Zap size={28} className="text-[var(--accent)]" />;
      case 'wsn':
        return <Activity size={28} className="text-[var(--accent)]" />;
    }
  };

  return (
    <div className="instrument-card p-6 sm:p-7 flex flex-col justify-between group h-full shadow-md">
      {/* Top Precision Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)]/70 via-[var(--accent)]/20 to-transparent" />

      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors shadow-sm">
            {renderIcon()}
          </div>
          <span className="font-mono text-[11px] font-bold text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)]">
            PILLAR {id === 'rf' ? '01' : id === 'energy' ? '02' : '03'}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="font-display font-bold text-xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2.5 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
          {summary}
        </p>
      </div>

      <div>
        {/* Key Term Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {terms.map((t, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)]/40 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onSelect(id)}
          className="w-full inline-flex items-center justify-between text-xs font-mono font-semibold px-3.5 py-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all cursor-pointer"
        >
          <span>View Related Projects</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

