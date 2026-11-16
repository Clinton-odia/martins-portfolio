import React from 'react';
import { site } from '../content/site.config';
import { RFDivider } from '../components/RFDivider';
import { Download, GraduationCap, Cpu, Activity, ExternalLink } from '../components/Icons';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const skillCategories = [
    {
      category: 'RF & Microwave Engineering',
      skills: ['Microstrip Rectenna Synthesis', 'Impedance Matching Networks', 'Circular Polarisation (RHCP/LHCP)', 'Defected Ground Structures (DGS)', 'Harmonic Suppression Filters', 'Multi-Port Front-Ends']
    },
    {
      category: 'Simulation & EDA Tools',
      skills: ['CST Microwave Studio Suite', 'Keysight ADS (Harmonic Balance & Co-simulation)', 'COMSOL Multiphysics', 'Cooja Wireless Sensor Simulator', 'Sonnet EM']
    },
    {
      category: 'Power Conditioning & Modelling',
      skills: ['Nonlinear Diode Modelling', 'Continuous-Time State-Space Formulations', 'Electrochemical Energy Storage Dynamics', 'Ultra-low-power PMIC Design', 'SWIPT Energy Budgeting']
    },
    {
      category: 'Scientific Programming & Measurement',
      skills: ['Python (NumPy, SciPy, Matplotlib)', 'MATLAB & Simulink', 'Vector Network Analyzers (VNA)', 'Spectrum Analyzers', 'RF Power Meters & Anechoic Chamber Calibration']
    }
  ];

  const timeline = [
    {
      period: '2022 — 2025',
      role: 'Doctor of Philosophy (PhD) in Electrical & Electronic Engineering',
      institution: 'Edinburgh Napier University',
      location: 'Edinburgh, United Kingdom',
      description: 'Doctoral research focused on high-efficiency dual-band rectennas for simultaneous wireless information and power transfer (SWIPT). Formulated native impedance matching geometries eliminating discrete lumped loss elements; engineered harmonic-suppressing microwave front-ends reaching >60% PCE at -10 dBm.'
    },
    {
      period: 'Postgraduate & Prior',
      role: 'TODO(martins): Undergraduate / Masters Degrees and prior positions',
      institution: 'TODO(martins): Prior university / engineering institutions',
      location: 'TODO(martins): Location',
      description: 'TODO(martins): Provide prior engineering background, degrees earned, or corporate engineering experience.'
    }
  ];

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow">CURRICULUM &amp; BACKGROUND</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-3">
            About Dr. Martins Odiamenhi
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Microwave engineer, doctoral researcher, and creator of the Wavemind Systems research vision.
          </p>
        </div>

        {/* Profile Card */}
        <div className="instrument-card p-6 md:p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Laboratory Badge / Monogram */}
            <div className="w-24 h-28 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex flex-col items-center justify-between p-3 shrink-0 text-center shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 to-transparent pointer-events-none" />
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-2xl font-mono font-extrabold text-[var(--accent)] tracking-wider">MO</span>
              <span className="text-[10px] font-mono text-[var(--muted)] tracking-widest uppercase border-t border-[var(--border)] pt-1 w-full">
                RF → DC
              </span>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[var(--border)]">
                <div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)]">
                    {site.title} {site.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[var(--accent)] mt-0.5">
                    {site.credential} · {site.phdInstitution}
                  </p>
                </div>
                <a
                  href={site.links.cv}
                  download
                  className="btn-primary text-xs py-2 px-4 font-mono shrink-0"
                >
                  <Download size={14} />
                  <span>Download CV (PDF)</span>
                </a>
              </div>

              <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                Dr. Martins Odiamenhi is a specialist in RF energy harvesting, microwave antennas, and nonlinear energy modeling. Having completed his PhD at Edinburgh Napier University's School of Computing, Engineering and the Built Environment, his investigations center on transforming minuscule ambient electromagnetic fields into reliable electric power for batteryless IoT devices and healthcare wireless telemetry.
              </p>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                His research philosophy blends rigorous analytical state-space derivations with full-wave 3D electromagnetic co-simulation in CST Microwave Studio and Keysight ADS, ensuring mathematical theory bridges directly into manufacturable planar hardware.
              </p>

              <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-xs font-mono text-[var(--muted)] flex items-center gap-2">
                <span className="text-[var(--accent-2)] font-bold">ℹ</span>
                <span>TODO(martins): attach formal square headshot (1200px+) and current employer/role if desired.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Professional Timeline */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[var(--border)]">
            <GraduationCap size={22} className="text-[var(--accent)]" />
            <h3 className="font-display font-bold text-xl text-[var(--text)]">
              Academic &amp; Research Timeline
            </h3>
          </div>

          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 sm:gap-6 group"
              >
                {/* Dedicated Timeline Track (immune to text collision) */}
                <div className="flex flex-col items-center shrink-0 w-6 pt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--surface-2)] flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[var(--border)] my-1" />
                  )}
                </div>

                {/* Content Box */}
                <div className="flex-1 pb-6">
                  <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] group-hover:border-[var(--accent)]/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)]">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-[var(--muted)]">
                        {item.location}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base sm:text-lg text-[var(--text)] mb-1">
                      {item.role}
                    </h4>
                    <div className="text-xs font-mono text-[var(--muted)] mb-3">
                      {item.institution}
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <RFDivider />

        {/* Skills & Instrumentation Matrix */}
        <section className="my-12">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[var(--border)]">
            <Cpu size={22} className="text-[var(--accent)]" />
            <h3 className="font-display font-bold text-xl text-[var(--text)]">
              Technical Competencies &amp; Lab Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="instrument-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[var(--accent)]">
                      {cat.category}
                    </h4>
                    <span className="text-[10px] font-mono text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)]">
                      {cat.skills.length} COMPETENCIES
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-3 py-1.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-default select-none shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Philosophy Note */}
        <section className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]" />
          <span className="eyebrow">RESEARCH PASSION &amp; METHODOLOGY</span>
          <h4 className="font-display font-bold text-lg sm:text-xl text-[var(--text)] mb-3">
            Why RF Energy Harvesting?
          </h4>
          <blockquote className="text-sm sm:text-base text-[var(--muted)] leading-relaxed italic border-l-2 border-[var(--border)] pl-4 my-2">
            "The invisible spectrum that connects our smartphones and computers also carries unharvested electromagnetic energy. Turning microwatts of dispersed radiation into continuous autonomous operation for sensor nodes is one of the most intellectually rewarding engineering challenges of our time. It requires mastering the physics of Maxwell's equations alongside nonlinear semiconductor behaviour at microscopic power thresholds."
          </blockquote>
          <div className="mt-4 text-xs font-mono text-[var(--accent)]">
            — Dr. Martins Odiamenhi, PhD
          </div>
        </section>
      </div>
    </div>
  );
};

