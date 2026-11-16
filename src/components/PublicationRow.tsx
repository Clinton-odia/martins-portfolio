import React, { useState } from 'react';
import type { Publication } from '../content/schemas';
import { ChevronDown, ChevronUp, Copy, Check, ExternalLink } from './Icons';

interface PublicationRowProps {
  pub: Publication;
}

export const PublicationRow: React.FC<PublicationRowProps> = ({ pub }) => {
  const [expanded, setExpanded] = useState(false);
  const [copiedBib, setCopiedBib] = useState(false);
  const [copiedCit, setCopiedCit] = useState(false);

  // Generate clean BibTeX format
  const generateBibTeX = () => {
    if (pub.bibtex) return pub.bibtex;
    const authorStr = pub.authors.join(' and ');
    return `@article{${pub.id},
  title={${pub.title}},
  author={${authorStr}},
  journal={${pub.venue}},
  year={${pub.year}}${pub.doi ? `,\n  doi={${pub.doi}}` : ''}
}`;
  };

  const citationText = `${pub.authors.join(', ')} (${pub.year}). "${pub.title}". ${pub.venue}.${pub.doi ? ` DOI: ${pub.doi}` : ''}`;

  const copyToClipboard = (text: string, type: 'bib' | 'cit') => {
    navigator.clipboard.writeText(text);
    if (type === 'bib') {
      setCopiedBib(true);
      setTimeout(() => setCopiedBib(false), 2000);
    } else {
      setCopiedCit(true);
      setTimeout(() => setCopiedCit(false), 2000);
    }
  };

  // Bold Martins in author list
  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isMartins = author.includes('M. Odiamenhi') || author.includes('Martins') || author.includes('Odiamenhi');
      return (
        <span key={index}>
          {isMartins ? (
            <strong className="text-[var(--accent)] font-semibold">{author}</strong>
          ) : (
            author
          )}
          {index < authors.length - 1 ? ', ' : ''}
        </span>
      );
    });
  };

  return (
    <div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]/40">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
        <div className="space-y-1">
          {/* Tags / Year */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] font-semibold">
              {pub.type}
            </span>
            <span className="text-xs font-mono text-[var(--muted)]">{pub.year}</span>
            {pub.pillar && (
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--surface-2)] text-[var(--muted)]">
                {pub.pillar}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="font-display font-semibold text-base md:text-lg text-[var(--text)] leading-snug">
            {pub.title}
          </h4>

          {/* Authors */}
          <div className="text-xs md:text-sm text-[var(--muted)]">
            {formatAuthors(pub.authors)}
          </div>

          {/* Venue */}
          <div className="text-xs font-mono text-[var(--muted)] pt-0.5">
            {pub.venue}
          </div>
        </div>

        {/* DOI / External Link */}
        <div className="flex items-center gap-2 shrink-0">
          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)] hover:border-[var(--accent)] transition-colors text-decoration-none"
            >
              <span>DOI</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Accordion Toggle Actions */}
      <div className="pt-3 mt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--text)] bg-transparent border-0 cursor-pointer p-0"
        >
          <span>{expanded ? 'Hide Abstract & BibTeX' : 'View Abstract & BibTeX'}</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => copyToClipboard(citationText, 'cit')}
            className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--accent)] bg-transparent border-0 cursor-pointer p-0"
          >
            {copiedCit ? <Check size={13} className="text-[var(--accent)]" /> : <Copy size={13} />}
            <span>{copiedCit ? 'Citation Copied' : 'Copy Citation'}</span>
          </button>

          <span className="text-[var(--border)]">|</span>

          <button
            onClick={() => copyToClipboard(generateBibTeX(), 'bib')}
            className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--accent)] bg-transparent border-0 cursor-pointer p-0"
          >
            {copiedBib ? <Check size={13} className="text-[var(--accent)]" /> : <Copy size={13} />}
            <span>{copiedBib ? 'BibTeX Copied' : 'Copy BibTeX'}</span>
          </button>
        </div>
      </div>

      {/* Expanded Abstract & BibTeX Drawer */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-[var(--border)] space-y-4">
          {pub.abstract && (
            <div>
              <div className="text-[11px] font-mono uppercase text-[var(--muted)] mb-1">
                Abstract
              </div>
              <p className="text-sm text-[var(--text)] leading-relaxed bg-[var(--surface-2)]/60 p-3.5 rounded-lg border border-[var(--border)]">
                {pub.abstract}
              </p>
            </div>
          )}

          <div>
            <div className="text-[11px] font-mono uppercase text-[var(--muted)] mb-1">
              BibTeX Entry
            </div>
            <pre className="text-xs font-mono p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] overflow-x-auto">
              <code>{generateBibTeX()}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
