import React from 'react';

export const RFDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center my-12 w-full select-none ${className}`} aria-hidden="true">
      <div className="w-full border-t border-[var(--border)]" />
      <div className="absolute px-4 bg-[var(--bg)] flex items-center gap-1.5 text-[var(--accent)] font-mono text-xs">
        <svg width="24" height="12" viewBox="0 0 40 16" fill="none" className="stroke-current">
          <path d="M0 8 Q 5 0, 10 8 T 20 8 T 30 8 T 40 8" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] tracking-widest text-[var(--muted)] font-semibold">RF → DC</span>
      </div>
    </div>
  );
};
