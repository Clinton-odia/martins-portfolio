import React, { useState } from 'react';
import { projects } from '../content/data';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsProps {
  initialPillar?: string;
  onNavigate: (path: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ initialPillar, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialPillar || 'all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.pillar === activeFilter);

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow">HARDWARE &amp; SIMULATION PORTFOLIO</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-3">
            Engineering Projects &amp; Prototypes
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Instrument-grade microwave architectures, multi-band rectennas, defected ground structures, and nonlinear power management simulations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'rf', label: 'RF & Microwave' },
            { id: 'energy', label: 'Energy Storage & Modelling' },
            { id: 'wsn', label: 'SWIPT & WSN' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer border ${
                activeFilter === tab.id
                  ? 'border-[var(--accent)] bg-[var(--surface-2)] text-[var(--accent)] shadow-sm'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--muted)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onOpen={(slug) => onNavigate(`/projects/${slug}`)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[var(--muted)] font-mono text-sm">
            No projects found matching the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};
