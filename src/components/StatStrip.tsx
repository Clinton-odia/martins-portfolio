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
    <div className="w-full my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)]/40 transition-colors"
          >
            <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider mb-1">
              {s.label}
            </div>
            <div className="text-2xl font-display font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
              {s.value}
            </div>
            <div className="text-xs text-[var(--muted)] mt-1 font-mono">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
