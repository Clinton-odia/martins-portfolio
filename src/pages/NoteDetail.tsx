import React, { useState } from 'react';
import { notes } from '../content/data';
import { Calendar, Clock, Copy, Check } from '../components/Icons';
import { RFDivider } from '../components/RFDivider';

interface NoteDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const NoteDetail: React.FC<NoteDetailProps> = ({ slug, onNavigate }) => {
  const note = notes.find((n) => n.slug === slug);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!note) {
    return (
      <div className="container py-24 text-center">
        <h2 className="font-display font-bold text-2xl text-[var(--text)] mb-3">Lab Note Not Found</h2>
        <p className="text-sm text-[var(--muted)] mb-6 font-mono">Slug: {slug}</p>
        <button onClick={() => onNavigate('/notes')} className="btn-primary">
          Back to Engineering Notes
        </button>
      </div>
    );
  }

  // Find prev/next notes
  const currentIndex = notes.findIndex((n) => n.slug === slug);
  const prevNote = currentIndex > 0 ? notes[currentIndex - 1] : null;
  const nextNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null;

  const pythonSnippet = `import math

def dbm_to_watts(p_dbm: float) -> float:
    return 1e-3 * 10 ** (p_dbm / 10)

def pce(v_out: float, r_load: float, p_in_dbm: float) -> float:
    p_dc = (v_out ** 2) / r_load
    return p_dc / dbm_to_watts(p_in_dbm)

# Example: 0.25 V into 1 kOhm load at -10 dBm input
print(f"PCE at -10 dBm: {pce(v_out=0.25, r_load=1000, p_in_dbm=-10):.1%}")`;

  const copyPython = () => {
    navigator.clipboard.writeText(pythonSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/notes')}
            className="text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
          >
            <span>← Back to All Lab Notes</span>
          </button>
        </div>

        {/* Note Header */}
        <header className="mb-10 pb-6 border-b border-[var(--border)]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--muted)] mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} />
              <span>{note.date}</span>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} />
              <span>{note.readingTime}</span>
            </span>
            {note.pillar && (
              <>
                <span>·</span>
                <span className="uppercase text-[var(--accent)] font-semibold">{note.pillar} Domain</span>
              </>
            )}
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-4 leading-tight">
            {note.title}
          </h1>

          <p className="text-base text-[var(--muted)] leading-relaxed">
            {note.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {note.tags.map((t, idx) => (
              <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--border)]">
                #{t}
              </span>
            ))}
          </div>
        </header>

        {/* Main Article Content */}
        <article className="space-y-8 text-[var(--text)] leading-relaxed text-sm sm:text-base">
          {/* Section 1: Definition */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] border-b border-[var(--border)] pb-2">
              1. Mathematical Definition
            </h2>
            <p>
              The RF-to-DC power conversion efficiency (PCE) of an energy harvesting rectenna is defined as the ratio of usable DC output power delivered to a load resistance R_L divided by incident RF power P_in:
            </p>

            <div className="my-4 p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] font-mono text-center text-sm md:text-base text-[var(--accent)] font-bold">
              {'PCE = P_DC / P_RF,in = (V_out² / R_L) / P_RF,in'}
            </div>

            <p>
              In microwave engineering practice, input power is quoted in logarithmic decibel-milliwatts (dBm):
            </p>

            <div className="my-4 p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] font-mono text-center text-sm md:text-base text-[var(--accent-2)] font-bold">
              {'P_dBm = 10 · log₁₀(P / 1 mW)'}
            </div>

            <p className="text-sm text-[var(--muted)] font-mono">
              Key benchmarks: 0 dBm = 1.0 mW, -10 dBm = 100 µW, -20 dBm = 10 µW.
            </p>
          </section>

          {/* Section 2: Matching */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] border-b border-[var(--border)] pb-2">
              2. Impedance Matching &amp; Reflection Losses
            </h2>
            <p>
              Power reflected from the front-end never excites the semiconductor depletion region. For an antenna with characteristic impedance Z₀ = 50 Ω and diode complex load Z_L = R_L + jX_L:
            </p>

            <div className="my-4 p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] font-mono text-center text-xs md:text-sm text-[var(--accent)] overflow-x-auto font-bold">
              {'Γ = (Z_L - Z₀) / (Z_L + Z₀)  |  VSWR = (1 + |Γ|) / (1 - |Γ|)  |  RL = -20·log₁₀|Γ| dB'}
            </div>

            {/* Callout alert */}
            <div className="p-4 rounded-xl border-l-4 border-l-[var(--accent)] bg-[var(--surface)] border border-[var(--border)] text-sm">
              <span className="font-mono text-xs font-bold uppercase text-[var(--accent)] block mb-1">
                Instrument Note
              </span>
              <p className="text-[var(--text)]">
                A return loss of 10 dB means roughly 10% of incident RF energy is reflected. At -10 dBm (100 µW), a 10% mismatch loss costs 10 µW, which directly drops the output voltage beneath the CMOS gate threshold.
              </p>
            </div>
          </section>

          {/* Section 3: Diode Nonlinearity */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] border-b border-[var(--border)] pb-2">
              3. Why Efficiency Collapses at Micro-Power Levels
            </h2>
            <p>
              Schottky diodes follow the Shockley exponential current equation:
            </p>

            <div className="my-4 p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] font-mono text-center text-sm md:text-base text-[var(--accent-2)] font-bold">
              {'I_D = I_s · (exp(V_D / nV_T) - 1)'}
            </div>

            <p>
              When input RF peak voltage V_RF is much smaller than nV_T (approx 26 mV at room temperature), the junction resistance R_j surges into tens of kilo-ohms. Consequently, the junction capacitance C_j shunts the majority of the high-frequency displacement current to ground before it can overcome the barrier potential, collapsing PCE at powers below -15 dBm.
            </p>
          </section>

          {/* Section 4: Python Script */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)]">
                4. Numerical Calculation in Python
              </h2>
              <button
                onClick={copyPython}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] cursor-pointer"
              >
                {copiedCode ? <Check size={13} className="text-[var(--accent)]" /> : <Copy size={13} />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-2)]">
              <div className="px-4 py-2 border-b border-[var(--border)] bg-[var(--surface)] text-xs font-mono text-[var(--muted)] flex items-center justify-between">
                <span>pce_calculator.py</span>
                <span>Python 3</span>
              </div>
              <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto text-[var(--text)]">
                <code>{pythonSnippet}</code>
              </pre>
            </div>
          </section>

          {/* Client Placeholder Note */}
          <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)] text-xs font-mono text-[var(--muted)]">
            <code>TODO(martins): add a figure of a PCE-vs-input-power curve from his own published experimental results.</code>
          </div>
        </article>

        <RFDivider />

        {/* Prev / Next Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          {prevNote ? (
            <div
              onClick={() => onNavigate(`/notes/${prevNote.slug}`)}
              className="instrument-card p-4 cursor-pointer text-left group"
            >
              <span className="text-[10px] font-mono uppercase text-[var(--muted)]">← Previous Note</span>
              <div className="font-display font-semibold text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mt-1">
                {prevNote.title}
              </div>
            </div>
          ) : <div />}

          {nextNote ? (
            <div
              onClick={() => onNavigate(`/notes/${nextNote.slug}`)}
              className="instrument-card p-4 cursor-pointer text-right group"
            >
              <span className="text-[10px] font-mono uppercase text-[var(--muted)]">Next Note →</span>
              <div className="font-display font-semibold text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mt-1">
                {nextNote.title}
              </div>
            </div>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};
