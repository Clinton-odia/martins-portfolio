import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Download } from './Icons';
import { site } from '../content/site.config';

interface NavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Nav: React.FC<NavProps> = ({ currentPath, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Research', path: '/research' },
    { label: 'Projects', path: '/projects' },
    { label: 'Notes', path: '/notes' },
    { label: 'Publications', path: '/publications' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md transition-colors">
      <div className="container flex items-center justify-between h-16">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 text-left group bg-transparent border-0 cursor-pointer p-0"
        >
          <span className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center font-mono font-bold text-sm text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
            ⚡
          </span>
          <div>
            <div className="font-display font-semibold text-[var(--text)] tracking-tight text-base leading-tight group-hover:text-[var(--accent)] transition-colors">
              {site.title} {site.name}
            </div>
            <div className="font-mono text-[10px] text-[var(--muted)] tracking-wider">
              RF → DC ENGINEERING
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer border-0 bg-transparent ${
                  isActive
                    ? 'text-[var(--accent)] bg-[var(--surface-2)] border-b-2 border-[var(--accent)]'
                    : 'text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--surface-2)]/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={site.links.cv}
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-decoration-none"
          >
            <Download size={14} />
            <span>CV</span>
          </a>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] cursor-pointer flex items-center justify-center"
            aria-label="Toggle navigation drawer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium border-0 cursor-pointer ${
                  isActive
                    ? 'text-[var(--accent)] bg-[var(--surface-2)] font-semibold'
                    : 'text-[var(--text)] bg-transparent hover:bg-[var(--surface-2)]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between">
            <a
              href={site.links.cv}
              download
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)]"
            >
              <Download size={14} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

