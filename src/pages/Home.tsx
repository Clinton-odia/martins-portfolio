import React from 'react';
import { site } from '../content/site.config';
import { projects, notes, publications } from '../content/data';
import { RFWaveHero } from '../components/RFWaveHero';
import { StatStrip } from '../components/StatStrip';
import { PillarCard } from '../components/PillarCard';
import { ProjectCard } from '../components/ProjectCard';
import { NoteCard } from '../components/NoteCard';
import { PublicationRow } from '../components/PublicationRow';
import { RFDivider } from '../components/RFDivider';
import { ArrowRight, Download, Mail, BookOpen } from '../components/Icons';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestNotes = notes.slice(0, 3);
  const featuredPubs = publications.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="blueprint-grid min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        {/* Background Radial Smith Chart subtle motif */}
        <div className="smith-chart-bg" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" stroke="var(--accent)" strokeWidth="0.8">
            <circle cx="100" cy="100" r="90" />
            <circle cx="145" cy="100" r="45" />
            <circle cx="160" cy="100" r="30" />
            <path d="M10 100 Q 100 20, 190 100" />
            <path d="M10 100 Q 100 180, 190 100" />
            <line x1="10" y1="100" x2="190" y2="100" />
          </svg>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-xs font-mono text-[var(--accent)] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-semibold tracking-wider uppercase">RF SYSTEMS · WIRELESS POWER · NONLINEAR ENERGY MODELLING</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[var(--text)] tracking-tight mb-4 leading-[1.08]">
            {site.title} {site.name}
          </h1>

          <p className="font-display font-medium text-lg sm:text-2xl text-[var(--accent)] mb-4 tracking-tight max-w-2xl mx-auto">
            {site.headline}
          </p>

          <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed font-body">
            {site.heroSentence}
          </p>

          {/* Credential line */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-xs font-mono text-[var(--text)] mb-8 shadow-sm">
            <span className="text-[var(--accent)] font-semibold">🎓</span>
            <span className="font-semibold">{site.credential}</span>
            <span className="text-[var(--muted)]">·</span>
            <span className="text-[var(--muted)]">{site.phdInstitution}</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-4">
            <button
              onClick={() => onNavigate('/research')}
              className="btn-primary shadow-lg"
            >
              <span>View Research Pillars</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={site.links.cv}
              download
              className="btn-ghost shadow-sm"
            >
              <Download size={15} />
              <span>Download CV (PDF)</span>
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              className="btn-ghost shadow-sm"
            >
              <Mail size={15} />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Signature RF -> DC Animated Trace */}
        <RFWaveHero />
      </section>

      {/* 2. Stat Strip */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6">
        <StatStrip />
      </section>

      <RFDivider />

      {/* 3. Core Pillars */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[var(--border)]">
          <div>
            <span className="eyebrow">01 / CAPABILITIES &amp; FOUNDATIONS</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)]">
              Core Research Pillars
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/research')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all cursor-pointer mt-3 sm:mt-0"
          >
            <span>Explore Full Framework</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <PillarCard
            id="rf"
            title="RF & Microwave Systems"
            summary="Antennas, rectennas and matching networks engineered for high efficiency at very low input power levels."
            terms={['Rectenna Design', 'Impedance Matching', 'Harmonic Suppression']}
            onSelect={(id) => onNavigate(`/projects?pillar=${id}`)}
          />
          <PillarCard
            id="energy"
            title="Energy Storage & Power Management"
            summary="Nonlinear models and power conditioning approaches making intermittent harvested electromagnetic energy dependable."
            terms={['State-Space Models', 'Power Conditioning', 'Electrochemical Storage']}
            onSelect={(id) => onNavigate(`/projects?pillar=${id}`)}
          />
          <PillarCard
            id="wsn"
            title="Wireless Sensor Networks & Control"
            summary="Battery-free, ultra-low-power nodes for IoT and healthcare telemetry, designed around real energy budgets."
            terms={['SWIPT Architecture', 'IoT / WSN Nodes', 'Power-Aware Design']}
            onSelect={(id) => onNavigate(`/projects?pillar=${id}`)}
          />
        </div>
      </section>

      <RFDivider />

      {/* 4. Featured Projects */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[var(--border)]">
          <div>
            <span className="eyebrow">02 / EXPERIMENTAL &amp; SIMULATED DESIGNS</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)]">
              Featured Engineering Projects
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all cursor-pointer mt-3 sm:mt-0"
          >
            <span>All Projects ({projects.length})</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {featuredProjects.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onOpen={(slug) => onNavigate(`/projects/${slug}`)}
            />
          ))}
        </div>
      </section>

      <RFDivider />

      {/* 5. Latest Lab Notes */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[var(--border)]">
          <div>
            <span className="eyebrow">03 / LAB LOG &amp; DERIVATIONS</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)]">
              Engineering Notes &amp; Theory
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/notes')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all cursor-pointer mt-3 sm:mt-0"
          >
            <span>Read All Notes</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {latestNotes.map((n) => (
            <NoteCard
              key={n.slug}
              note={n}
              onOpen={(slug) => onNavigate(`/notes/${slug}`)}
            />
          ))}
        </div>
      </section>

      <RFDivider />

      {/* 6. Selected Publications */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[var(--border)]">
          <div>
            <span className="eyebrow">04 / PEER-REVIEWED LITERATURE</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)]">
              Selected Publications
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/publications')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all cursor-pointer mt-3 sm:mt-0"
          >
            <span>Full Bibliography ({publications.length})</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="space-y-4">
          {featuredPubs.map((pub) => (
            <PublicationRow key={pub.id} pub={pub} />
          ))}
        </div>
      </section>

      {/* 7. Closing High-Impact Engineering Banner (Inspired by template) */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 my-16">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 border border-[#2DE2C5]/30 bg-gradient-to-br from-[#0c2e26] via-[#09211c] to-[#071714] text-center relative overflow-hidden shadow-2xl group">
          {/* Subtle radar / wave background decoration */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2DE2C5_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DE2C5]/10 border border-[#2DE2C5]/30 text-xs font-mono text-[var(--accent)] font-semibold tracking-wider uppercase">
              ⚡ COLLABORATION &amp; CONSULTING VISION
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Working on an RF or energy-harvesting challenge?
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto font-body">
              Available for technical discussions, peer collaboration, RF design reviews, or consultation under the Wavemind Systems research initiative.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3.5">
              <button
                onClick={() => onNavigate('/contact')}
                className="btn-primary py-3 px-6 text-sm font-bold shadow-lg"
              >
                <span>Initiate Contact</span>
                <Mail size={16} />
              </button>
              <button
                onClick={() => onNavigate('/about')}
                className="btn-ghost py-3 px-6 text-sm bg-white/10 text-white border-white/20 hover:border-[#2DE2C5] hover:bg-white/20 transition-all shadow-sm"
              >
                <span>Read Full Bio</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

