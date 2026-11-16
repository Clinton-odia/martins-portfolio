import React, { useState, useEffect } from 'react';
import { Sun, Moon } from './Icons';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] transition-colors cursor-pointer flex items-center justify-center"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-[var(--accent-2)]" />
      ) : (
        <Moon size={18} className="text-[var(--accent)]" />
      )}
    </button>
  );
};

