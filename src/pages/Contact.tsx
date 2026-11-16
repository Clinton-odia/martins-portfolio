import React, { useState } from 'react';
import { site } from '../content/site.config';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin } from '../components/Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Runtime obfuscation against email scrapers
  const user = 'martins.odiamenhi';
  const domain = 'napier.ac.uk';
  const displayEmail = `${user}@${domain}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(displayEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="blueprint-grid min-h-screen py-16">
      <div className="container max-w-3xl mx-auto text-center">
        <span className="eyebrow">COMMUNICATION CHANNELS</span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--text)] mb-4">
          Initiate Contact
        </h1>
        <p className="text-sm md:text-base text-[var(--muted)] max-w-xl mx-auto mb-10 leading-relaxed">
          Open for academic collaboration, research inquiries, technical discussions on RF &amp; microwave harvesters, or specialized consulting.
        </p>

        {/* Primary Email Box */}
        <div className="instrument-card p-8 md:p-10 mb-8 max-w-xl mx-auto text-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mx-auto mb-4 text-[var(--accent)]">
            <Mail size={24} />
          </div>

          <div className="text-xs font-mono uppercase text-[var(--muted)] mb-2">
            Direct Academic / Professional Correspondence
          </div>

          <div className="font-mono text-lg sm:text-2xl font-bold text-[var(--text)] mb-6 select-all break-all">
            {displayEmail}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${displayEmail}`}
              className="btn-primary text-xs py-2 px-5 font-mono"
            >
              <Mail size={14} />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="btn-ghost text-xs py-2 px-5 font-mono"
            >
              {copied ? <Check size={14} className="text-[var(--accent)]" /> : <Copy size={14} />}
              <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--muted)]">
            <code>TODO(martins): confirm public primary email address and preferred contact mailbox.</code>
          </div>
        </div>

        {/* Status / Availability Card */}
        <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] max-w-xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase text-[var(--text)]">Current Status &amp; Openings</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            Open for industrial RF engineering roles, academic joint research grants, postdoctoral fellowships, and specialized microwave design consulting under the Wavemind Systems initiative.
          </p>
          <div className="mt-2 text-[11px] font-mono text-[var(--muted)]">
            <code>TODO(martins): specify current availability (full-time roles, visiting researcher, consulting engagements).</code>
          </div>
        </div>

        {/* Social / Academic Network Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://napier.ac.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] transition-colors text-decoration-none"
          >
            <ExternalLink size={14} className="text-[var(--accent)]" />
            <span>Napier Research Portal</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] transition-colors text-decoration-none"
          >
            <Linkedin size={14} className="text-[var(--accent)]" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] transition-colors text-decoration-none"
          >
            <Github size={14} className="text-[var(--accent)]" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

