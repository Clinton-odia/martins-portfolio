import React from 'react';
import type { ProjectItem } from '../content/data';
import { ArrowRight, Cpu } from './Icons';
import { SpecChip } from './SpecChip';

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  // Render a subtle schematic pattern based on pillar
  const renderVisualHeader = () => {
    return (
      <div className="h-28 w-full bg-[var(--surface-2)] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center p-4">
        {/* Background micro grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:12px_12px]" />

        {project.pillar === 'rf' && (
          <svg className="w-full h-16 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 60" fill="none">
            <path d="M 0 30 Q 25 5, 50 30 T 100 30 T 150 30 T 200 30 T 250 30 T 300 30" stroke="var(--accent-2)" strokeWidth="1.8" />
            <path d="M 150 30 L 300 30" stroke="var(--accent)" strokeWidth="2.5" />
            <circle cx="150" cy="30" r="4" fill="var(--accent)" />
            <text x="15" y="52" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">3.5 / 5.8 GHz DUAL-BAND</text>
            <text x="210" y="52" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">DC RECTIFIED</text>
          </svg>
        )}

        {project.pillar === 'energy' && (
          <svg className="w-full h-16 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 60" fill="none">
            <path d="M 10 50 Q 80 48, 140 25 T 280 12" stroke="var(--accent)" strokeWidth="2" />
            <line x1="140" y1="10" x2="140" y2="50" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="15" y="20" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">STATE-SPACE DYNAMICS</text>
            <text x="170" y="52" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">NONLINEAR STORAGE</text>
          </svg>
        )}

        {project.pillar === 'wsn' && (
          <svg className="w-full h-16 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 300 60" fill="none">
            <rect x="20" y="18" width="50" height="24" rx="4" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <rect x="230" y="18" width="50" height="24" rx="4" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
            <path d="M 70 30 L 230 30" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="105" y="24" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">SWIPT TELEMETRY</text>
            <text x="115" y="44" fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">BATTERYLESS</text>
          </svg>
        )}
      </div>
    );
  };

  return (
    <div
      onClick={() => onOpen(project.slug)}
      className="instrument-card cursor-pointer flex flex-col justify-between group h-full shadow-md"
    >
      <div>
        {renderVisualHeader()}

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] font-semibold">
              {project.pillar.toUpperCase()} DOMAIN
            </span>
            <span className="text-xs font-mono text-[var(--muted)]">{project.year}</span>
          </div>

          <h3 className="font-display font-semibold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Spec Chips Row */}
          {project.specs && project.specs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.specs.slice(0, 2).map((sp, idx) => (
                <SpecChip key={idx} label={sp.label} value={sp.value} />
              ))}
            </div>
          )}
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
