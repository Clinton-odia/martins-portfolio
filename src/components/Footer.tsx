import React from 'react';
import { site } from '../content/site.config';
import { Github, Linkedin, Mail, ExternalLink } from './Icons';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--surface)] mt-20 transition-colors">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center font-mono font-bold text-sm text-[var(--accent)]">
                ⚡
              </span>
              <span className="font-display font-bold text-base text-[var(--text)]">
                {site.title} {site.name}
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] max-w-md leading-relaxed">
              {site.credential} · {site.phdInstitution}. Focused on high-efficiency rectennas, simultaneous wireless power and information transfer (SWIPT), and nonlinear energy modeling.
            </p>
            {/* Wavemind Systems Subtle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[var(--text)] font-semibold">{site.brand.name}</span>
              <span className="text-[var(--muted)]">· {site.brand.vision}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-3 font-semibold">
              Sitemap
            </div>
            <ul className="space-y-1.5 list-none p-0 text-sm">
              {[
                { label: 'Research Themes', path: '/research' },
                { label: 'Hardware Projects', path: '/projects' },
                { label: 'Engineering Notes', path: '/notes' },
                { label: 'Publications & DOIs', path: '/publications' },
                { label: 'About & Timeline', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-[var(--muted)] hover:text-[var(--accent)] bg-transparent border-0 cursor-pointer p-0 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Links & Social */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-3 font-semibold">
              Profiles & Academic
            </div>
            <ul className="space-y-2 list-none p-0 text-sm">
              <li>
                <a
                  href="https://napier.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 text-decoration-none"
                >
                  <ExternalLink size={13} />
                  <span>Napier Research Portal</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/publications')}
                  className="text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 bg-transparent border-0 cursor-pointer p-0 text-sm"
                >
                  <ExternalLink size={13} />
                  <span>Google Scholar / ORCID</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 bg-transparent border-0 cursor-pointer p-0 text-sm"
                >
                  <Mail size={13} />
                  <span>Direct Communication</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--muted)]">
          <div>
            © {new Date().getFullYear()} {site.name}. All research rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Fast · Pre-rendered · Precision Instrument Grade</span>
            <span>⚡</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
