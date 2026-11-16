import React, { useState } from 'react';
import { notes } from '../content/data';
import { NoteCard } from '../components/NoteCard';
import { Search } from '../components/Icons';

interface NotesProps {
  onNavigate: (path: string) => void;
}

export const Notes: React.FC<NotesProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(new Set(notes.flatMap((n) => n.tags)));

  const filteredNotes = notes.filter((n) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = !selectedTag || n.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="blueprint-grid min-h-screen py-12">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow">LAB LOG &amp; THEORETICAL DERIVATIONS</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-3">
            Engineering Notes
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Analytical models, non-linear diode derivations, matching network theory, and Python scripts for microwave power engineering.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="max-w-xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search derivations, tags, or topics (e.g. rectifier, smith-chart, pce)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
            />
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-xs font-mono px-2.5 py-1 rounded-md border cursor-pointer transition-colors ${
                selectedTag === null
                  ? 'border-[var(--accent)] bg-[var(--surface-2)] text-[var(--accent)]'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--muted)]'
              }`}
            >
              All Tags
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`text-xs font-mono px-2.5 py-1 rounded-md border cursor-pointer transition-colors ${
                  selectedTag === tag
                    ? 'border-[var(--accent)] bg-[var(--surface-2)] text-[var(--accent)]'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--muted)]'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((n) => (
            <NoteCard
              key={n.slug}
              note={n}
              onOpen={(slug) => onNavigate(`/notes/${slug}`)}
            />
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-16 text-[var(--muted)] font-mono text-sm">
            No engineering notes found matching your search query.
          </div>
        )}
      </div>
    </div>
  );
};

