import React from 'react';
import type { ProjectItem } from '../content/data';
import { ArrowRight, Cpu } from './Icons';
import { SpecChip } from './SpecChip';

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  // Render distinct technical schematic blueprints per project
  const renderVisualHeader = () => {
    return (
      <div className="h-32 w-full bg-[var(--surface-2)] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center p-4">
        {/* Background micro grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:12px_12px]" />

        {project.slug === 'dual-band-cp-swipt-rectenna' && (
          <svg className="w-full h-20 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 70" fill="none">
            {/* 4-port patch with circular polarisation arrows */}
            <rect x="110" y="10" width="80" height="50" rx="4" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" fill="rgba(45, 226, 197, 0.05)" />
            <circle cx="150" cy="35" r="16" stroke="var(--accent-2)" strokeWidth="1.5" />
            <path d="M 140 35 A 10 10 0 0 1 160 35" stroke="var(--accent-2)" strokeWidth="1.5" strokeLinecap="round" />
            <polygon points="160,32 163,38 157,37" fill="var(--accent-2)" />
            {/* 4 ports */}
            <circle cx="110" cy="22" r="3" fill="var(--accent)" />
            <circle cx="110" cy="48" r="3" fill="var(--accent)" />
            <circle cx="190" cy="22" r="3" fill="var(--accent-2)" />
            <circle cx="190" cy="48" r="3" fill="var(--accent-2)" />
            <text x="15" y="38" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">P1, P2: COMMS</text>
            <text x="210" y="38" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">P3, P4: HARVEST</text>
            <text x="110" y="66" fill="var(--muted)" fontSize="8" fontFamily="var(--font-mono)">CP RECTENNA APERTURE</text>
          </svg>
        )}

        {project.slug === 'three-port-swipt-front-end' && (
          <svg className="w-full h-20 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 70" fill="none">
            {/* Filter S-parameters with harmonic rejection */}
            <line x1="30" y1="55" x2="270" y2="55" stroke="var(--border)" strokeWidth="1" />
            {/* Passband at f0 */}
            <path d="M 40 50 Q 80 12, 100 12 T 120 50" stroke="var(--accent)" strokeWidth="2" fill="none" />
            {/* Harmonic rejection deep notch at 2f0 and 3f0 */}
            <path d="M 120 50 Q 150 55, 170 55 T 220 55" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="100" cy="12" r="3" fill="var(--accent)" />
            <text x="75" y="66" fill="var(--accent)" fontSize="8" fontFamily="var(--font-mono)">f₀ PASSBAND</text>
            <text x="160" y="35" fill="var(--danger)" fontSize="8" fontFamily="var(--font-mono)">2f₀/3f₀ REJECTION &gt;35dB</text>
          </svg>
        )}

        {project.slug === 'triple-band-rectifier' && (
          <svg className="w-full h-20 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 70" fill="none">
            {/* Multi-stage transmission line matching network */}
            <line x1="20" y1="35" x2="80" y2="35" stroke="var(--accent-2)" strokeWidth="3" />
            <rect x="80" y="25" width="40" height="20" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <line x1="120" y1="35" x2="160" y2="35" stroke="var(--accent)" strokeWidth="2" />
            <rect x="160" y="20" width="30" height="30" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <line x1="190" y1="35" x2="230" y2="35" stroke="var(--accent)" strokeWidth="3.5" />
            {/* Open shunt stub */}
            <line x1="100" y1="45" x2="100" y2="62" stroke="var(--accent)" strokeWidth="2" strokeDasharray="2 2" />
            <polygon points="230,32 238,35 230,38" fill="var(--accent)" />
            <text x="25" y="20" fill="var(--accent-2)" fontSize="8" fontFamily="var(--font-mono)">TRIPLE-BAND TL</text>
            <text x="225" y="55" fill="var(--accent)" fontSize="8" fontFamily="var(--font-mono)">DC LOAD</text>
          </svg>
        )}

        {project.slug !== 'dual-band-cp-swipt-rectenna' && project.slug !== 'three-port-swipt-front-end' && project.slug !== 'triple-band-rectifier' && (
          <svg className="w-full h-20 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 70" fill="none">
            <path d="M 20 55 Q 100 50, 160 22 T 280 12" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <line x1="160" y1="10" x2="160" y2="55" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="25" y="20" fill="var(--muted)" fontSize="8" fontFamily="var(--font-mono)">STATE-SPACE</text>
            <text x="180" y="50" fill="var(--accent)" fontSize="8" fontFamily="var(--font-mono)">STORAGE DYNAMICS</text>
          </svg>
        )}
      </div>
    );
  };

  return (
    <div
      onClick={() => onOpen(project.slug)}
      className="instrument-card cursor-pointer flex flex-col justify-between group h-full shadow-lg hover:shadow-2xl transition-all"
    >
      <div>
        {renderVisualHeader()}

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] font-semibold">
              {project.pillar === 'rf' ? 'RF & MICROWAVE' : project.pillar === 'energy' ? 'ENERGY SYSTEMS' : 'SWIPT & WSN'}
            </span>
            <span className="text-xs font-mono text-[var(--muted)]">{project.year}</span>
          </div>

          <h3 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Standardized 2-Column Key Metrics (Aligned across all cards) */}
          <div className="grid grid-cols-2 gap-2 my-4">
            {project.specs.slice(0, 2).map((sp, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-wider truncate">{sp.label}</div>
                <div className="text-xs font-mono font-bold text-[var(--accent)] mt-0.5 truncate">{sp.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Cpu size={14} className="text-[var(--muted)]" />
            <span className="text-[11px] font-mono text-[var(--muted)]">
              {project.tools.slice(0, 2).join(' · ')}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform">
            <span>Read Specs</span>
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );
};
