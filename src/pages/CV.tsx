import React from 'react';
import { site } from '../content/site.config';
import { Download, FileText, ArrowRight } from '../components/Icons';

interface CVProps {
  onNavigate: (path: string) => void;
}

export const CV: React.FC<CVProps> = ({ onNavigate }) => {
  return (
    <div className="blueprint-grid min-h-screen py-16">
      <div className="container max-w-3xl mx-auto text-center">
        <span className="eyebrow">CURRICULUM VITAE</span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-3">
          Curriculum Vitae &amp; Research Record
        </h1>
        <p className="text-sm text-[var(--muted)] max-w-xl mx-auto mb-8 leading-relaxed">
          Comprehensive academic and technical CV for Dr. Martins Odiamenhi detailing doctoral credentials, publications, RF design competencies, and experimental methodologies.
        </p>

        {/* Download Box */}
        <div className="instrument-card p-8 mb-8 max-w-md mx-auto text-center">
          <FileText size={36} className="text-[var(--accent)] mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[var(--text)] mb-1">
            Download Complete PDF CV
          </h3>
          <p className="text-xs text-[var(--muted)] font-mono mb-5">
            File: martins-odiamenhi-cv.pdf
          </p>

          <a
            href={site.links.cv}
            download
            className="btn-primary w-full justify-center text-xs py-2.5 font-mono"
          >
            <Download size={14} />
            <span>Download Document (PDF)</span>
          </a>

          <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-mono text-[var(--muted)]">
            <code>TODO(martins): provide updated PDF file to replace placeholder at public/martins-odiamenhi-cv.pdf</code>
          </div>
        </div>

        {/* Quick Summary Box */}
        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-left max-w-xl mx-auto space-y-4">
          <h4 className="font-display font-bold text-base text-[var(--text)]">
            Executive Summary
          </h4>
          <ul className="text-xs sm:text-sm text-[var(--muted)] space-y-2 list-disc pl-5">
            <li><strong>Degree:</strong> PhD in Electrical &amp; Electronic Engineering, Edinburgh Napier University</li>
            <li><strong>Core Competence:</strong> Dual-band circularly polarized rectennas, 3.5 GHz &amp; 5.8 GHz SWIPT front-ends</li>
            <li><strong>Simulation Mastery:</strong> CST Microwave Studio, Keysight ADS, COMSOL Multiphysics, Cooja WSN</li>
            <li><strong>Mathematical Depth:</strong> Nonlinear diode equivalent circuits, state-space energy storage formulations</li>
          </ul>

          <div className="pt-2 flex justify-between items-center">
            <button
              onClick={() => onNavigate('/publications')}
              className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
            >
              <span>View Full Publication List</span>
              <ArrowRight size={13} />
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="text-xs font-mono font-semibold text-[var(--muted)] hover:text-[var(--text)] bg-transparent border-0 cursor-pointer p-0"
            >
              <span>View Detailed Timeline →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

