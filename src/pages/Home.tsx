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
import { ArrowRight, Download, Mail } from '../components/Icons';

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
      <section className="hero-wrapper">
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

        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="hero-badge-pill">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
            <span>RF SYSTEMS · WIRELESS POWER · NONLINEAR ENERGY MODELLING</span>
          </div>

          <h1 className="hero-title">
            {site.title} {site.name}
          </h1>

          <p className="hero-headline">
            {site.headline}
          </p>

          <p className="hero-description">
            {site.heroSentence}
          </p>

          {/* Credential line */}
          <div className="hero-credential-pill">
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>🎓</span>
            <span style={{ fontWeight: 600 }}>{site.credential}</span>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span style={{ color: 'var(--muted)' }}>{site.phdInstitution}</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-button-row">
            <button
              onClick={() => onNavigate('/research')}
              className="btn-primary"
            >
              <span>View Research Pillars</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={site.links.cv}
              download
              className="btn-ghost"
            >
              <Download size={15} />
              <span>Download CV (PDF)</span>
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              className="btn-ghost"
            >
              <Mail size={15} />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Signature RF -> DC Animated Trace */}
          <RFWaveHero />

          {/* Digital Metric Strip */}
          <StatStrip />
        </div>
      </section>

      <RFDivider />

      {/* 2. Core Pillars */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="section-header">
          <div>
            <span className="eyebrow">01 / CAPABILITIES &amp; FOUNDATIONS</span>
            <h2 className="section-title">
              Core Research Pillars
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/research')}
            className="btn-pill-subtle"
          >
            <span>Explore Full Framework</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="pillar-grid">
          <PillarCard
            id="rf"
            title="RF &amp; Microwave Systems"
            summary="Antennas, rectennas, native matching geometries, and harmonic suppression filters reaching >60% PCE at -10 dBm."
            terms={['Dual-Band Rectenna', 'Harmonic Suppression', 'Nonlinear Co-Simulation', 'Circular Polarisation']}
            onSelect={() => onNavigate('/research')}
          />

          <PillarCard
            id="energy"
            title="Energy Storage &amp; Power Management"
            summary="Supercapacitor charging dynamics under intermittent micro-watt budgets, self-powered PMICs, and state-space equivalent models."
            terms={['Supercapacitor Charging', 'Cold-Start PMIC', 'State-Space Modeling', 'Impedance Tracking']}
            onSelect={() => onNavigate('/research')}
          />

          <PillarCard
            id="wsn"
            title="Wireless Sensor Networks &amp; Control"
            summary="Simultaneous Wireless Information & Power Transfer (SWIPT), battery-free duty-cycled sensor telemetry, and Cooja network simulation."
            terms={['SWIPT Protocols', 'Zero-Battery IoT', 'Duty-Cycling', 'Cooja Simulator']}
            onSelect={() => onNavigate('/research')}
          />
        </div>
      </section>

      <RFDivider />

      {/* 3. Featured Hardware Projects */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="section-header">
          <div>
            <span className="eyebrow">02 / HARDWARE BUILDS &amp; PROTOTYPES</span>
            <h2 className="section-title">
              Featured RF Projects
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="btn-pill-subtle"
          >
            <span>All Projects</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="project-grid">
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

      {/* 4. Engineering Notes & Lab Log */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="section-header">
          <div>
            <span className="eyebrow">03 / LAB LOG &amp; DERIVATIONS</span>
            <h2 className="section-title">
              Engineering Notes
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/notes')}
            className="btn-pill-subtle"
          >
            <span>Browse All Notes</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="pillar-grid">
          {latestNotes.map((note) => (
            <NoteCard
              key={note.slug}
              note={note}
              onOpen={(slug) => onNavigate(`/notes/${slug}`)}
            />
          ))}
        </div>
      </section>

      <RFDivider />

      {/* 5. Selected Publications */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="section-header">
          <div>
            <span className="eyebrow">04 / PEER-REVIEWED RESEARCH</span>
            <h2 className="section-title">
              Selected Publications
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/publications')}
            className="btn-pill-subtle"
          >
            <span>All 9+ Publications</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="pub-list">
          {featuredPubs.map((pub) => (
            <PublicationRow key={pub.id} pub={pub} />
          ))}
        </div>
      </section>

      {/* 6. Collaboration CTA */}
      <section className="container max-w-4xl mx-auto px-4 my-16 text-center">
        <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px 24px', boxShadow: 'var(--shadow-md)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent-2), var(--accent))' }} />
          <span className="eyebrow">COLLABORATION &amp; CONSULTING</span>
          <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>
            Working on an RF or energy-harvesting challenge?
          </h3>
          <p style={{ color: 'var(--muted)', maxWidth: '580px', margin: '0 auto 28px', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Available for technical discussions, peer collaboration, RF design reviews, or consultation under the Wavemind Systems research initiative.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onNavigate('/contact')}
              className="btn-primary"
            >
              <span>Initiate Contact</span>
              <Mail size={15} />
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="btn-ghost"
            >
              <span>Read Full Bio</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
