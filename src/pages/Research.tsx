import React, { useState } from 'react';
import { RFDivider } from '../components/RFDivider';
import { ArrowRight, Radio, Zap, Activity } from '../components/Icons';

interface ResearchProps {
  onNavigate: (path: string) => void;
}

export const Research: React.FC<ResearchProps> = ({ onNavigate }) => {
  const [selectedBlock, setSelectedBlock] = useState<string>('antenna');

  const blocks = [
    {
      id: 'antenna',
      label: 'Antenna Array',
      sub: 'Dual-band CP 3.5 / 5.8 GHz',
      desc: 'Receives ambient or dedicated RF electromagnetic fields. Circular polarization ensures alignment-insensitive reception from mobile transmitters with cross-polarization rejection.',
      noteLink: '/notes/rectifier-basics'
    },
    {
      id: 'matching',
      label: 'Impedance Match',
      sub: 'Native DGS / Multi-stage TL',
      desc: 'Eliminates lossy lumped inductors and capacitors by tailoring distributed microstrip geometries to provide complex conjugate matching directly at diode terminals.',
      noteLink: '/notes/smith-chart-matching-basics'
    },
    {
      id: 'rectifier',
      label: 'Nonlinear Diode',
      sub: 'Harmonic Suppression >30 dB',
      desc: 'Zero-bias Schottky diodes convert RF power to DC. Harmonic-rejecting stubs trap generated 2nd and 3rd harmonics, preventing re-radiation and recycling energy.',
      noteLink: '/notes/harmonics-in-rectifiers'
    },
    {
      id: 'pmic',
      label: 'Power Conditioning',
      sub: 'Dynamic State-Space Regulation',
      desc: 'Controls charging into electrochemical storage or ultra-capacitors under erratic ambient flux conditions, preventing battery starvation.',
      noteLink: '/projects/nonlinear-energy-storage-modelling'
    },
    {
      id: 'node',
      label: 'IoT / Sensor Node',
      sub: 'Biomedical & Environmental WSN',
      desc: 'The operational payload. Operates autonomously on an intermittent power budget, executing low-duty-cycle sensing and telemetry.',
      noteLink: '/projects/three-port-harmonic-swipt-healthcare'
    }
  ];

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="eyebrow">RESEARCH ARCHITECTURE &amp; METHODOLOGY</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text)] mb-4">
            RF Energy Harvesting &amp; SWIPT Systems
          </h1>
          <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
            From electromagnetic propagation through nonlinear diode physics to duty-cycled telemetry: engineering self-sustaining wireless nodes without battery replacement liabilities.
          </p>
        </div>

        {/* Research Statement Card */}
        <div className="instrument-card p-6 md:p-8 mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
              Research Statement
            </span>
            <span className="text-xs font-mono text-[var(--muted)]">Edinburgh Napier University Research Foundation</span>
          </div>
          <p className="text-sm md:text-base text-[var(--text)] leading-relaxed mb-4">
            Dr. Martins Odiamenhi's doctoral and postdoctoral research focuses on the intersection of nonlinear microwave circuits, antenna miniaturization, and micro-power management. Ambient radio-frequency energy is inherently low in power density (typically below -15 dBm in suburban environments), where classical linear RF assumptions break down completely due to current-voltage exponential diode nonlinearities.
          </p>
          <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
            By eliminating lossy discrete matching networks and integrating harmonic-suppressing defected ground structures directly into dual-band, circularly polarized apertures, Dr. Odiamenhi has demonstrated that compact front-ends can harvest usable DC power while simultaneously maintaining multi-channel telecommunications (SWIPT) for biomedical and industrial Internet of Things deployments.
          </p>
          <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs font-mono text-[var(--muted)]">
            <code>TODO(martins): review wording and add formal personal philosophy statement</code>
          </div>
        </div>

        {/* Interactive System Block Diagram */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="eyebrow">CLICKABLE SYSTEM SCHEMATIC</span>
              <h3 className="font-display font-bold text-xl text-[var(--text)]">
                The End-to-End Energy Harvester Architecture
              </h3>
            </div>
            <span className="text-xs font-mono text-[var(--muted)] hidden sm:block">Click any stage to inspect design</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 select-none">
            {blocks.map((b, idx) => {
              const isSelected = selectedBlock === b.id;
              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBlock(b.id)}
                  className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[var(--accent)] bg-[var(--surface-2)] shadow-md -translate-y-1'
                      : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[var(--accent)] uppercase font-bold mb-1">
                    Stage 0{idx + 1}
                  </div>
                  <div className={`font-display font-semibold text-sm mb-1 ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--text)]'}`}>
                    {b.label}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--muted)]">
                    {b.sub}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Block Detail Drawer */}
          {(() => {
            const current = blocks.find((b) => b.id === selectedBlock) || blocks[0];
            return (
              <div className="mt-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                    Stage Deep-Dive: {current.label}
                  </span>
                  <p className="text-sm text-[var(--text)] leading-relaxed">
                    {current.desc}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate(current.noteLink)}
                  className="btn-primary shrink-0 text-xs py-2 px-4"
                >
                  <span>Explore Technical Derivation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })()}
        </div>

        <RFDivider />

        {/* 3 Pillars Deep-Dive */}
        <div className="space-y-12">
          {/* Pillar 1 */}
          <div className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-[var(--surface-2)] border border-[var(--border)]">
                <Radio size={24} className="text-[var(--accent-2)]" />
              </div>
              <div>
                <span className="eyebrow">PILLAR 01</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--text)]">
                  RF &amp; Microwave Systems Engineering
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--muted)] leading-relaxed">
              <div>
                <h4 className="font-display font-semibold text-[var(--text)] mb-1">The Engineering Problem</h4>
                <p>
                  At incident power densities below -10 dBm, diode junction resistances surge nonlinearly into kilo-ohms. Standard single-stage matching networks result in steep reflection losses (VSWR &gt; 3:1) when the ambient RF excitation deviates from the single tuned operating power point.
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-[var(--text)] mb-1">Methodology &amp; Results</h4>
                <p>
                  Implemented stepped-impedance stubs and multi-stage uniform transmission lines. Incorporated Defected Ground Structures (DGS) to introduce transmission zeros that suppress the second harmonic (2f₀) and third harmonic (3f₀), recycling the energy back into DC and achieving conversion efficiencies exceeding 60%.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <span className="spec-chip"><span className="label">Bands</span><span className="val">3.5 / 5.8 GHz</span></span>
                <span className="spec-chip"><span className="label">PCE Peak</span><span className="val">&gt;60% @ -10 dBm</span></span>
              </div>
              <button
                onClick={() => onNavigate('/projects?pillar=rf')}
                className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
              >
                <span>View RF Projects</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-[var(--surface-2)] border border-[var(--border)]">
                <Zap size={24} className="text-[var(--accent)]" />
              </div>
              <div>
                <span className="eyebrow">PILLAR 02</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--text)]">
                  Energy Storage &amp; Nonlinear Power Management
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--muted)] leading-relaxed">
              <div>
                <h4 className="font-display font-semibold text-[var(--text)] mb-1">The Engineering Problem</h4>
                <p>
                  Electrochemical storage cells and supercapacitors demonstrate nonlinear impedance dynamics and internal leakage when charged by intermittent micro-power currents. Standard constant-current/constant-voltage (CC/CV) ICs fail because they draw quiescent currents that exceed the total harvested power.
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-[var(--text)] mb-1">Methodology &amp; Results</h4>
                <p>
                  Developed state-space dynamical formulations published in the <em>Journal of Power Sources</em> (2026). Models accurately predict transient electrochemical kinetics during burst charging, enabling power-conditioning circuits that consume negligible sub-microamp quiescent power.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <span className="spec-chip"><span className="label">Output</span><span className="val">J. Power Sources</span></span>
                <span className="spec-chip"><span className="label">DOI</span><span className="val">10.1016/j.jpowsour</span></span>
              </div>
              <button
                onClick={() => onNavigate('/projects?pillar=energy')}
                className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
              >
                <span>View Storage Projects</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="instrument-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-[var(--surface-2)] border border-[var(--border)]">
                <Activity size={24} className="text-[var(--accent)]" />
              </div>
              <div>
                <span className="eyebrow">PILLAR 03</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--text)]">
                  Wireless Sensor Networks &amp; SWIPT
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--muted)] leading-relaxed">
              <div>
                <h4 className="font-display font-semibold text-[var(--text)] mb-1">The Engineering Problem</h4>
                <p>
                  Deploying batteries in medical implants or structural monitoring nodes creates immense lifecycle replacement costs and toxic waste. SWIPT architectures require co-allocating the same electromagnetic beam for simultaneous data modulation and microwave power transfer without mutual interference.
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-[var(--text)] mb-1">Methodology &amp; Results</h4>
                <p>
                  Engineered 3-port and 4-port front-ends for healthcare sensors with port isolation near -30 dB, isolating the high-power rectification circuitry from sensitive low-noise data receivers. Verified through Cooja WSN simulations and hardware EM prototypes.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <span className="spec-chip"><span className="label">Isolation</span><span className="val">~ -30 dB</span></span>
                <span className="spec-chip"><span className="label">Symposium</span><span className="val">URSI UK / ICAC</span></span>
              </div>
              <button
                onClick={() => onNavigate('/projects?pillar=wsn')}
                className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
              >
                <span>View SWIPT Projects</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

