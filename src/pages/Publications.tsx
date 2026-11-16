import React, { useState } from 'react';
import { publications } from '../content/data';
import { PublicationRow } from '../components/PublicationRow';
import { Download, ExternalLink } from '../components/Icons';

interface PublicationsProps {
  onNavigate?: (path: string) => void;
}

export const Publications: React.FC<PublicationsProps> = () => {
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [copiedAll, setCopiedAll] = useState(false);

  const filteredPubs = typeFilter === 'all'
    ? publications
    : publications.filter((p) => p.type === typeFilter);

  // Group by year descending
  const years = Array.from(new Set(filteredPubs.map((p) => p.year))).sort((a, b) => b - a);

  const handleDownloadAllBibTeX = () => {
    const allBib = publications.map((p) => {
      const authorStr = p.authors.join(' and ');
      return `@article{${p.id},
  title={${p.title}},
  author={${authorStr}},
  journal={${p.venue}},
  year={${p.year}}${p.doi ? `,\n  doi={${p.doi}}` : ''}
}`;
    }).join('\n\n');

    const blob = new Blob([allBib], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'martins-odiamenhi-publications.bib';
    link.click();
    URL.revokeObjectURL(url);

    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="eyebrow">PEER-REVIEWED SCIENTIFIC LITERATURE</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-3">
            Publications &amp; Research Outputs
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
            Verified journal articles, book chapters, and symposium proceedings in radio-frequency energy harvesting, SWIPT, rectenna synthesis, and nonlinear energy modeling.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleDownloadAllBibTeX}
              className="btn-primary text-xs py-2 px-4 font-mono"
            >
              <Download size={14} />
              <span>{copiedAll ? 'BibTeX File Exported' : 'Download All as BibTeX (.bib)'}</span>
            </button>

            <a
              href="https://napier.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2 px-4 font-mono"
            >
              <ExternalLink size={14} />
              <span>Napier University Repository</span>
            </a>
          </div>

          <div className="mt-3 text-xs font-mono text-(--muted)">
            <code>TODO(martins): add direct Google Scholar and ORCID profile links</code>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Outputs' },
            { id: 'journal', label: 'Journal Articles' },
            { id: 'conference', label: 'Conference Proceedings' },
            { id: 'book-chapter', label: 'Book Chapters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTypeFilter(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer border ${
                typeFilter === tab.id
                  ? 'border-[var(--accent)] bg-[var(--surface-2)] text-[var(--accent)]'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--muted)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Publications Grouped by Year */}
        <div className="space-y-10">
          {years.map((yr) => {
            const pubsInYear = filteredPubs.filter((p) => p.year === yr);
            return (
              <section key={yr} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-2">
                  <h3 className="font-display font-bold text-2xl text-[var(--accent)]">
                    {yr}
                  </h3>
                  <span className="text-xs font-mono text-[var(--muted)]">
                    ({pubsInYear.length} {pubsInYear.length === 1 ? 'output' : 'outputs'})
                  </span>
                </div>

                <div className="space-y-3">
                  {pubsInYear.map((pub) => (
                    <PublicationRow key={pub.id} pub={pub} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {filteredPubs.length === 0 && (
          <div className="text-center py-16 text-[var(--muted)] font-mono text-sm">
            No publication outputs found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

