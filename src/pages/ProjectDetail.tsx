import React from 'react';
import { projects } from '../content/data';
import { SpecChip } from '../components/SpecChip';
import { RFDivider } from '../components/RFDivider';
import { ArrowRight, ExternalLink, Cpu, Tag } from '../components/Icons';

interface ProjectDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug, onNavigate }) => {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container py-24 text-center">
        <h2 className="font-display font-bold text-2xl text-[var(--text)] mb-3">Project Not Found</h2>
        <p className="text-sm text-[var(--muted)] mb-6 font-mono">Slug: {slug}</p>
        <button onClick={() => onNavigate('/projects')} className="btn-primary">
          Back to Projects Grid
        </button>
      </div>
    );
  }

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/projects')}
            className="text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
          >
            <span>← Back to All Projects</span>
          </button>
        </div>

        {/* Title Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] font-semibold">
              {project.pillar.toUpperCase()} DOMAIN
            </span>
            <span className="text-xs font-mono text-[var(--muted)]">{project.year}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-3 leading-tight">
            {project.title}
          </h1>

          <p className="text-base text-[var(--muted)] leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Spec Chips Bar */}
        {project.specs && project.specs.length > 0 && (
          <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] mb-10 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono uppercase text-[var(--muted)] font-bold mr-2">Key Specs:</span>
            {project.specs.map((sp, idx) => (
              <SpecChip key={idx} label={sp.label} value={sp.value} />
            ))}
          </div>
        )}

        {/* Structured Engineering Sections */}
        <div className="space-y-10">
          {/* 1. Problem */}
          <section className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[var(--accent)] font-bold">01</span>
              <h3 className="font-display font-bold text-xl text-[var(--text)]">The Engineering Problem</h3>
            </div>
            <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* 2. Approach */}
          <section className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[var(--accent)] font-bold">02</span>
              <h3 className="font-display font-bold text-xl text-[var(--text)]">Research Approach</h3>
            </div>
            <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
              {project.approach}
            </p>
          </section>

          {/* 3. Design */}
          <section className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[var(--accent)] font-bold">03</span>
              <h3 className="font-display font-bold text-xl text-[var(--text)]">Circuit &amp; EM Architecture</h3>
            </div>
            <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
              {project.design}
            </p>
          </section>

          {/* 4. Results */}
          <section className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[var(--accent)] font-bold">04</span>
              <h3 className="font-display font-bold text-xl text-[var(--text)]">Experimental &amp; Simulated Results</h3>
            </div>
            <p className="text-sm md:text-base text-[var(--text)] leading-relaxed mb-4">
              {project.results}
            </p>
            <div className="p-3 bg-[var(--surface-2)] rounded border border-[var(--border)] text-xs font-mono text-[var(--muted)]">
              <code>TODO(martins): confirm whether published figures are simulated or measured before labelling.</code>
            </div>
          </section>
        </div>

        {/* Tools Used */}
        <div className="mt-10 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cpu size={18} className="text-[var(--accent)]" />
            <span className="text-xs font-mono font-semibold uppercase text-[var(--muted)]">Tools &amp; Solvers:</span>
            <div className="flex flex-wrap gap-1.5 ml-2">
              {project.tools.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-2">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-[var(--accent)] text-[#0A0F1A] font-semibold text-decoration-none hover:opacity-90 transition-opacity"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          )}
        </div>

        <RFDivider />

        {/* Back Link */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('/projects')}
            className="btn-ghost"
          >
            <span>← Back to All Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};

