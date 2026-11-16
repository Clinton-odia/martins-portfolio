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
        <div className="instrument-card p-6 md:p-8 mb-12">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar / Lab Instrument Monogram */}
            <div className="w-24 h-24 rounded-2xl bg-[var(--surface-2)] border-2 border-[var(--border)] flex flex-col items-center justify-center shrink-0 text-center shadow-inner">
              <span className="text-2xl font-mono font-bold text-[var(--accent)]">MO</span>
              <span className="text-[9px] font-mono text-[var(--muted)] tracking-wider mt-0.5">RF → DC</span>
            </div>

            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="font-display font-bold text-2xl text-[var(--text)]">
                    {site.title} {site.name}
                  </h2>
                  <p className="text-xs font-mono text-[var(--accent)]">
                    {site.credential} · {site.phdInstitution}
                  </p>
                </div>
                <a
                  href={site.links.cv}
                  download
                  className="btn-primary text-xs py-1.5 px-3 font-mono"
                >
                  <Download size={13} />
                  <span>Download CV</span>
                </a>
              </div>

              <p className="text-sm text-[var(--text)] leading-relaxed">
                Dr. Martins Odiamenhi is a specialist in RF energy harvesting, microwave antennas, and nonlinear energy modeling. Having completed his PhD at Edinburgh Napier University's School of Computing, Engineering and the Built Environment, his investigations center on transforming minuscule ambient electromagnetic fields into reliable electric power for batteryless IoT devices and healthcare wireless telemetry.
              </p>

              <p className="text-sm text-[var(--text)] leading-relaxed">
                His research philosophy blends rigorous analytical state-space derivations with full-wave 3D electromagnetic co-simulation in CST Microwave Studio and Keysight ADS, ensuring mathematical theory bridges directly into manufacturable planar hardware.
              </p>

              <div className="pt-2 text-xs font-mono text-[var(--muted)]">
                <code>TODO(martins): attach formal square headshot (1200px+) and current employer/role if desired.</code>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Professional Timeline */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-[var(--accent)]" />
            <h3 className="font-display font-bold text-xl text-[var(--text)]">
              Academic &amp; Research Timeline
            </h3>
          </div>

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 pb-6 border-l-2 border-[var(--border)] last:border-l-transparent last:pb-0"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--surface-2)] border-2 border-[var(--accent)]" />

                <div className="text-xs font-mono font-semibold text-[var(--accent)] mb-1">
                  {item.period}
                </div>
                <h4 className="font-display font-bold text-base text-[var(--text)]">
                  {item.role}
                </h4>
                <div className="text-xs font-mono text-[var(--muted)] mb-2">
                  {item.institution} · {item.location}
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <RFDivider />

        {/* Skills & Instrumentation Matrix */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Cpu size={20} className="text-[var(--accent)]" />
            <h3 className="font-display font-bold text-xl text-[var(--text)]">
              Technical Competencies &amp; Lab Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="instrument-card p-5">
                <h4 className="font-display font-bold text-sm text-[var(--accent)] uppercase tracking-wider mb-3 font-mono">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Philosophy Note */}
        <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]/60">
          <span className="eyebrow">RESEARCH PASSION</span>
          <h4 className="font-display font-bold text-lg text-[var(--text)] mb-2">
            Why RF Energy Harvesting?
          </h4>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            "The invisible spectrum that connects our smartphones and computers also carries unharvested electromagnetic energy. Turning microwatts of dispersed radiation into continuous autonomous operation for sensor nodes is one of the most intellectually rewarding engineering challenges of our time. It requires mastering the physics of Maxwell's equations alongside nonlinear semiconductor behaviour at microscopic power thresholds."
          </p>
        </section>
      </div>
    </div>
  );
};
