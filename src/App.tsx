import React, { useState, useEffect } from 'react';
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

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'menu', 'reservations', 'gallery', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Run once on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      {/* Sticky Header */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main Content Area with gorgeous fade transitions */}
      <main className="flex-grow">
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
    </div>
  );
}
