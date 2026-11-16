import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Notes } from './pages/Notes';
import { NoteDetail } from './pages/NoteDetail';
import { Publications } from './pages/Publications';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CV } from './pages/CV';
import { NotFound } from './pages/NotFound';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(path);
  };

  // Route matching
  const renderRoute = () => {
    // Base URL or exact home
    if (currentPath === '/' || currentPath === '') {
      return <Home onNavigate={navigate} />;
    }

    if (currentPath === '/research') {
      return <Research onNavigate={navigate} />;
    }

    if (currentPath === '/projects') {
      return <Projects onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').split('?')[0];
      return <ProjectDetail slug={slug} onNavigate={navigate} />;
    }

    if (currentPath === '/notes') {
      return <Notes onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/notes/')) {
      const slug = currentPath.replace('/notes/', '').split('?')[0];
      return <NoteDetail slug={slug} onNavigate={navigate} />;
    }

    if (currentPath === '/publications') {
      return <Publications onNavigate={navigate} />;
    }

    if (currentPath === '/about') {
      return <About onNavigate={navigate} />;
    }

    if (currentPath === '/contact') {
      return <Contact />;
    }

    if (currentPath === '/cv') {
      return <CV onNavigate={navigate} />;
    }

    return <NotFound onNavigate={navigate} />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">
      <Nav currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">
        {renderRoute()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
