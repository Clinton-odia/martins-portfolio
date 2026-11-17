import React from 'react';
import { publications } from '../content/data';

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
    <div className="stat-grid" style={{ marginBottom: '40px' }}>
      {stats.map((s, idx) => (
        <div key={idx} className="stat-card">
          <div className="stat-card-accent" />
          <div>
            <div className="stat-card-label">
              {s.label}
            </div>
            <div className="stat-card-value">
              {s.value}
            </div>
          </div>
          <div className="stat-card-sub">
            {s.sub}
          </div>
        </div>
      ))}
    </div>
  );
};
