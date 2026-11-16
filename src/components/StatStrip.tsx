import React from 'react';
import { publications } from '../content/data';
import { site } from '../content/site.config';

export const StatStrip: React.FC = () => {
  const pubCount = publications.length;

  const stats = [
    {
      label: 'Peer-Reviewed Outputs',
      value: `${pubCount}+`,
      sub: 'Journals & Conferences'
    },
    {
      label: 'Key Harvesting Bands',
      value: '3.5 / 5.8 GHz',
      sub: '5G n78 & Industrial ISM'
    },
    {
      label: 'Peak Conversion Efficiency',
      value: '>60%',
      sub: 'at -10 dBm (100 µW) input'
    },
    {
      label: 'Doctoral Research',
      value: 'PhD (EEE)',
      sub: site.phdInstitution
    }
  ];

  return (
    <div className="w-full my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)] transition-all shadow-sm"
          >
            {/* Top Precision Instrument Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)]/80 via-[var(--accent)]/30 to-transparent" />

            <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider mb-2 font-semibold">
              {s.label}
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
              {s.value}
            </div>
            <div className="text-xs text-[var(--muted)] mt-1.5 font-mono">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

