import React from 'react';

export const RFDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rf-divider-wrap ${className}`} aria-hidden="true">
      <div className="rf-divider-line" />
      <div className="rf-divider-badge">
        <svg width="24" height="12" viewBox="0 0 40 16" fill="none" stroke="currentColor">
          <path d="M0 8 Q 5 0, 10 8 T 20 8 T 30 8 T 40 8" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'var(--muted)', fontWeight: 700 }}>
          RF → DC
        </span>
      </div>
    </div>
  );
};
