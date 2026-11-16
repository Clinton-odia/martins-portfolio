import React from 'react';
import type { NoteItem } from '../content/data';
import { Calendar, Clock, ArrowRight } from './Icons';

interface NoteCardProps {
  note: NoteItem;
  onOpen: (slug: string) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(note.slug)}
      className="instrument-card p-6 cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted)] mb-2.5">
          <span className="inline-flex items-center gap-1">
            <Calendar size={13} />
            <span>{note.date}</span>
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={13} />
            <span>{note.readingTime}</span>
          </span>
        </div>

        <h3 className="font-display font-semibold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">
          {note.title}
        </h3>

        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
          {note.summary}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {note.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--border)]"
            >
              #{t}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--accent)] font-semibold">
          <span>Read Lab Note</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
