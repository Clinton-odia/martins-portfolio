import React from 'react';
import { site } from '../content/site.config';
import { RFDivider } from '../components/RFDivider';
import { Download, GraduationCap, Cpu } from '../components/Icons';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = () => {
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
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span className="eyebrow">CURRICULUM &amp; BACKGROUND</span>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
            About Dr. Martins Odiamenhi
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Microwave engineer, doctoral researcher, and creator of the Wavemind Systems research vision.
          </p>
        </div>

        {/* Profile Card */}
        <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', marginBottom: '48px', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '28px', alignItems: 'flex-start' }}>
            {/* Laboratory Badge */}
            <div style={{ width: '90px', height: '110px', borderRadius: '12px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '12px 8px', flexShrink: 0, textAlign: 'center' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ fontSize: '24px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent)' }}>MO</span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '0.1em', borderTop: '1px solid var(--border)', paddingTop: '4px', width: '100%' }}>
                RF → DC
              </span>
            </div>

            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>
                    {site.title} {site.name}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', marginTop: '2px' }}>
                    {site.credential} · {site.phdInstitution}
                  </p>
                </div>
                <a
                  href={site.links.cv}
                  download
                  className="btn-primary"
                  style={{ fontSize: '12px', padding: '8px 16px' }}
                >
                  <Download size={14} />
                  <span>Download CV (PDF)</span>
                </a>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.65' }}>
                Dr. Martins Odiamenhi is a specialist in RF energy harvesting, microwave antennas, and nonlinear energy modeling. Having completed his PhD at Edinburgh Napier University's School of Computing, Engineering and the Built Environment, his investigations center on transforming minuscule ambient electromagnetic fields into reliable electric power for batteryless IoT devices and healthcare wireless telemetry.
              </p>

              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.65' }}>
                His research philosophy blends rigorous analytical state-space derivations with full-wave 3D electromagnetic co-simulation in CST Microwave Studio and Keysight ADS, ensuring mathematical theory bridges directly into manufacturable planar hardware.
              </p>

              <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-2)', fontWeight: 700 }}>ℹ</span>
                <span>TODO(martins): attach formal square headshot (1200px+) and current employer/role if desired.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Professional Timeline */}
        <section style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
            <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)' }}>
              Academic &amp; Research Timeline
            </h3>
          </div>

          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-date">
                  {item.period}
                </div>
                <div className="timeline-role">
                  {item.role}
                </div>
                <div className="timeline-institution">
                  {item.institution} · {item.location}
                </div>
                <div className="timeline-desc">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <RFDivider />

        {/* Skills & Instrumentation Matrix */}
        <section style={{ margin: '48px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
            <Cpu size={22} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)' }}>
              Technical Competencies &amp; Lab Tools
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'var(--shadow-sm)' }}
              >
                <div>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '16px' }}>
                    {cat.category}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="badge-tag"
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
      </div>
    </div>
  );
};
