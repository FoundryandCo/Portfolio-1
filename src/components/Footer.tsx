import React, { useState } from 'react';
import { Instagram, Facebook, Heart } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-espresso text-cream pt-16 pb-8 border-t-4 border-terracotta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-cream/10">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="md:col-span-5 space-y-6">
            <button
              id="footer-logo-btn"
              onClick={() => onPageChange('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-cream shadow-md group-hover:scale-105 transition-transform duration-300">
                <span className="font-script text-3xl font-bold mt-1">G</span>
              </div>
              <div>
                <span className="block font-script text-2xl font-bold text-cream leading-none">
                  Golden Hour
                </span>
                <span className="block text-[10px] tracking-[0.25em] font-bold text-cream/70 uppercase">
                  Coffee Co.
                </span>
              </div>
            </button>
            <p className="text-cream/80 text-sm leading-relaxed max-w-sm">
              A cozy neighborhood café where locals linger over pour-overs, catch up over brunch, and watch the light change through the front window all day long.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#instagram"
                id="social-instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-cream/20 hover:border-terracotta bg-cream/5 hover:bg-terracotta flex items-center justify-center text-cream hover:text-cream transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#facebook"
                id="social-facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-cream/20 hover:border-terracotta bg-cream/5 hover:bg-terracotta flex items-center justify-center text-cream hover:text-cream transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#twitter"
                id="social-twitter"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full border border-cream/20 hover:border-terracotta bg-cream/5 hover:bg-terracotta flex items-center justify-center text-cream hover:text-cream transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: EXPLORE */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => onPageChange('home')}
                  className="text-cream/80 hover:text-terracotta transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-menu"
                  onClick={() => onPageChange('menu')}
                  className="text-cream/80 hover:text-terracotta transition-colors text-left"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  id="footer-link-gallery"
                  onClick={() => onPageChange('gallery')}
                  className="text-cream/80 hover:text-terracotta transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => onPageChange('about')}
                  className="text-cream/80 hover:text-terracotta transition-colors text-left"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: VISIT US */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
              Visit Us
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-reservations"
                  onClick={() => onPageChange('reservations')}
                  className="text-cream/80 hover:text-terracotta transition-colors text-left"
                >
                  Reservations
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => onPageChange('contact')}
                  className="text-cream/80 hover:text-terracotta transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <span className="text-cream/40 cursor-not-allowed block">
                  Careers <span className="text-[9px] border border-cream/20 px-1.5 py-0.5 rounded-full ml-1">We're hiring!</span>
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
              Stay in the Loop
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Sign up to the stir or our newsletter for seasonal specials and neighborhood news.
            </p>
            {subscribed ? (
              <div className="p-3.5 bg-sage/20 border border-sage/30 rounded-2xl text-cream text-xs">
                ✨ Thanks for joining! Look out for fresh updates soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <label htmlFor="newsletter-email-input" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email-input"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-cream/10 border border-cream/20 rounded-full text-cream text-sm placeholder-cream/50 focus:outline-none focus:border-terracotta w-full"
                  required
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  className="px-5 py-2 bg-burnt-orange hover:bg-burnt-orange/90 text-espresso text-sm font-semibold rounded-full shadow hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/55">
          <div>
            &copy; {new Date().getFullYear()} Golden Hour Coffee Co. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-terracotta fill-terracotta animate-pulse" /> in East Austin
          </div>
        </div>

      </div>
    </footer>
  );
}
