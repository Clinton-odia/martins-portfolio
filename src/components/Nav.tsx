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
    <header className="site-header">
      <div className="nav-container">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="nav-brand"
        >
          <div className="brand-icon">
            <span>⚡</span>
          </div>
          <div>
            <div className="brand-title">
              {site.title} {site.name}
            </div>
            <div className="brand-sub">
              RF → DC Systems
            </div>
          </div>
        </button>

        {/* Desktop Nav - Beautifully spaced modern pills */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          <a
            href={site.links.cv}
            download
            className="btn-nav-cv"
          >
            <Download size={13} />
            <span>CV (PDF)</span>
          </a>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] cursor-pointer flex items-center justify-center transition-colors"
            style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', display: 'inline-flex' }}
            aria-label="Toggle navigation drawer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{ width: '100%', textAlign: 'left', padding: '10px 16px' }}
              >
                {link.label}
              </button>
            );
          })}
          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
            <a
              href={site.links.cv}
              download
              className="btn-ghost"
              style={{ fontSize: '12px', padding: '8px 16px', width: '100%' }}
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
