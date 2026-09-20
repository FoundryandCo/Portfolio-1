import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const isInitialLoad = useRef(true);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const focusMainContent = useCallback(() => {
    requestAnimationFrame(() => {
      // Clean up previous tabindex
      const prev = mainRef.current?.querySelector('[tabindex="-1"]');
      if (prev && prev instanceof HTMLElement) {
        prev.removeAttribute('tabindex');
      }
      // Find the page heading (h1 or h2, not elements that just happen to have an id)
      const heading = mainRef.current?.querySelector('h1, h2');
      if (heading instanceof HTMLElement) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
      }
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'menu', 'reservations', 'gallery', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
        return;
      }
      focusMainContent();
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [focusMainContent]);

  const handlePageChange = (pageId: string) => {
    window.location.hash = pageId;
    setCurrentPage(pageId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'menu':
        return <Menu />;
      case 'reservations':
        return <Reservations />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-terracotta/20 selection:text-terracotta">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-terracotta focus:text-cream focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main Content Area with fade transitions */}
      <main id="main-content" ref={mainRef} className="flex-grow" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onPageChange={handlePageChange} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-terracotta text-cream rounded-full shadow-lg hover:bg-terracotta/90 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
