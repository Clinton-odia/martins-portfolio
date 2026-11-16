import React from 'react';
import { publications } from '../content/data';
import { site } from '../content/site.config';

export const StatStrip: React.FC = () => {
  const pubCount = publications.length;

  const stats = [
    {
      label: 'Peer-Reviewed Outputs',
      value: `${pubCount}+ Papers`,
      sub: 'Journals & Conferences'
    },
    {
      label: 'Target Frequencies',
      value: '3.5 / 5.8 GHz',
      sub: 'Dual-Band 5G & ISM SWIPT'
    },
    {
      label: 'Peak Rectifier PCE',
      value: '>60% Eff.',
      sub: 'At -10 dBm (100 µW) input'
    },
    {
      label: 'Doctoral Credential',
      value: 'PhD (EEE)',
      sub: 'Edinburgh Napier Univ.'
    }
  ];

  return (
    <div className="w-full my-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)] transition-all shadow-md flex flex-col justify-between"
          >
            {/* Top Precision Instrument Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)]/80 via-[var(--accent)]/30 to-transparent" />

            <div>
              <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider mb-2.5 font-semibold">
                {s.label}
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors whitespace-nowrap">
                {s.value}
              </div>
            </div>
            <div className="text-xs text-[var(--muted)] mt-2 font-mono border-t border-[var(--border)]/60 pt-2">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

