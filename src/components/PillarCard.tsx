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
    <div className="instrument-card p-6 flex flex-col justify-between group">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
            {renderIcon()}
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">
            PILLAR {id === 'rf' ? '01' : id === 'energy' ? '02' : '03'}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="font-display font-semibold text-xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
          {summary}
        </p>
      </div>

      <div>
        {/* Key Term Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {terms.map((t, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <button
          onClick={() => onSelect(id)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] hover:underline border-0 bg-transparent cursor-pointer p-0"
        >
          <span>View Related Projects</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
