import React from 'react';
import type { ProjectItem } from '../content/data';
import { ArrowRight, Cpu } from './Icons';
import { SpecChip } from './SpecChip';

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(project.slug)}
      className="instrument-card p-6 cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] font-semibold">
            {project.pillar.toUpperCase()} DOMAIN
          </span>
          <span className="text-xs font-mono text-[var(--muted)]">{project.year}</span>
        </div>

        <h3 className="font-display font-semibold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
          {project.summary}
        </p>

        {/* Spec Chips Row */}
        {project.specs && project.specs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.specs.slice(0, 2).map((sp, idx) => (
              <SpecChip key={idx} label={sp.label} value={sp.value} />
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Cpu size={14} className="text-[var(--muted)]" />
          <span className="text-[11px] font-mono text-[var(--muted)]">
            {project.tools.slice(0, 2).join(' · ')}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
          <span>Read Specs</span>
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
};
