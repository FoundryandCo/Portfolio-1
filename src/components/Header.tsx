import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-md border-b border-terracotta/10 py-3'
          : 'bg-cream py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <button
          id="header-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-cream shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="font-script text-3xl font-bold leading-none select-none mt-1">G</span>
          </div>
          <div>
            <span className="block font-script text-2xl font-bold text-terracotta leading-none">
              Golden Hour
            </span>
            <span className="block text-[10px] tracking-[0.25em] font-bold text-espresso/70 uppercase">
              Coffee Co.
            </span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none ${
                currentPage === link.id
                  ? 'text-terracotta font-bold'
                  : 'text-espresso/80 hover:text-terracotta'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button
            id="header-reserve-btn"
            onClick={() => handleNavClick('reservations')}
            className="px-6 py-2.5 bg-burnt-orange hover:bg-burnt-orange/90 text-cream font-medium text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Reserve a Table
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-espresso hover:text-terracotta transition-colors rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-cream border-t border-terracotta/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    currentPage === link.id
                      ? 'bg-terracotta text-cream font-bold'
                      : 'text-espresso hover:bg-terracotta/5 hover:text-terracotta'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-nav-reserve-btn"
                  onClick={() => handleNavClick('reservations')}
                  className="w-full py-3 bg-burnt-orange hover:bg-burnt-orange/90 text-cream font-medium rounded-full shadow text-center block"
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
