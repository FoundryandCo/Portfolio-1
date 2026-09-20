import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ArrowRight, Star, Heart } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, TESTIMONIALS } from '../data';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  // Extract the 3 featured dishes
  const featuredDishes: MenuItem[] = [
    MENU_ITEMS.find((item) => item.id === 'm1') || MENU_ITEMS[0],
    MENU_ITEMS.find((item) => item.id === 'm8') || MENU_ITEMS[1],
    MENU_ITEMS.find((item) => item.id === 'm9') || MENU_ITEMS[2],
  ];

  return (
    <div id="home-page" className="bg-cream">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ESTABLISHED BADGE */}
          <div className="inline-block mb-6">
            <span className="bg-sage text-cream text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              Est. 2023 • East Austin, TX
            </span>
          </div>

          {/* BEAUTIFUL ARCHED INTERIOR PHOTO */}
          <div className="relative mx-auto max-w-2xl aspect-[4/3] rounded-t-[180px] md:rounded-t-[250px] overflow-hidden border-8 border-terracotta shadow-2xl mb-[-40px] z-10">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
              alt="Golden Hour Cafe Interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Sun flare overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-burnt-orange/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* HERO DISPLAY CARD (Terracotta background with rounded corners) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-terracotta text-cream px-6 py-12 md:py-16 rounded-[32px] md:rounded-[48px] shadow-xl max-w-3xl mx-auto z-20"
          >
            <h1 className="font-script text-4xl md:text-6xl font-bold text-cream mb-4 tracking-wide select-none leading-tight">
              Slow mornings, strong coffee.
            </h1>
            <p className="text-cream/90 text-sm md:text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
              A cozy neighborhood café where locals linger over pour-overs, catch up over brunch, and watch the light change through the front window all day long.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-reserve-btn"
                onClick={() => onPageChange('reservations')}
                className="w-full sm:w-auto px-8 py-3.5 bg-burnt-orange hover:bg-burnt-orange/95 text-cream font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Reserve a Table
              </button>
              <button
                id="hero-menu-btn"
                onClick={() => onPageChange('menu')}
                className="w-full sm:w-auto px-8 py-3.5 bg-cream hover:bg-cream/90 text-terracotta font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-cream cursor-pointer"
              >
                View Menu
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* HOURS & LOCATION BANNER */}
      <div className="bg-sage text-cream py-4 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-medium tracking-wider flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span>Open Daily 7AM–3PM</span>
            <span className="hidden sm:inline">•</span>
            <span>1214 E 6th St, Austin, TX</span>
            <span className="hidden sm:inline">•</span>
            <span>(512) 555-0148</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-cream/10 px-2 py-0.5 rounded-full">🐶 Dog Friendly</span>
          </p>
        </div>
      </div>

      {/* FEATURED DISHES SECTION */}
      <section className="bg-sage/10 py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-sage/10 relative">
        {/* Wavy transition on top */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-sage uppercase block mb-2">
              From the Kitchen
            </span>
            <h2 className="font-script text-4xl md:text-5xl font-bold text-terracotta mb-4">
              Featured Dishes
            </h2>
            <p className="text-espresso/80 text-sm max-w-md mx-auto">
              Made fresh daily with locally-sourced ingredients, served with a golden smile.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-cream rounded-[24px] overflow-hidden shadow-md border border-terracotta/5 hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[16px] border border-terracotta/5">
            <img
              src={dish.image}
              alt={dish.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
                  {dish.tag && (
                    <span className="absolute top-3 left-3 bg-terracotta text-cream text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {dish.tag}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 bg-espresso/80 backdrop-blur-sm text-cream font-bold text-xs px-2.5 py-1 rounded-full">
                    ${dish.price.toFixed(2)}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 pt-2">
                  <h3 className="font-sans text-lg font-bold text-espresso group-hover:text-terracotta transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-espresso/80 text-xs mt-1.5 leading-relaxed min-h-[32px]">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              id="view-full-menu-btn"
              onClick={() => onPageChange('menu')}
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-cream font-bold text-sm rounded-full transition-all duration-300 cursor-pointer"
            >
              View Full Menu <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / THE COZY VIBE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* TEXT */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-terracotta uppercase block">
              Our Vibe
            </span>
            <h2 className="font-script text-4xl md:text-5xl font-bold text-espresso leading-tight">
              A place to linger, chat, and bloom
            </h2>
            <p className="text-espresso/85 text-sm leading-relaxed">
              We believe the best memories are made in the margins of busy days. That's why we roasted our own organic beans, filled our space with sunshine and trailing ivy, and built a menu designed to be savored.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
                  <Coffee size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-espresso">Locally Roasted Single Origin</h4>
                  <p className="text-xs text-espresso/80 mt-0.5">Roasting in East Austin every Monday to ensure optimal freshness.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center text-sage shrink-0">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-espresso">Warm Friendly Baristas</h4>
                  <p className="text-xs text-espresso/80 mt-0.5">We know your name and how you take your cappuccino.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button
                id="about-us-btn"
                onClick={() => onPageChange('about')}
                className="px-6 py-3 bg-burnt-orange hover:bg-burnt-orange/90 text-cream font-semibold text-xs uppercase tracking-wider rounded-full shadow-md cursor-pointer"
              >
                Our Story
              </button>
            </div>
          </div>

          {/* TWO GRAPHICS GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-[32px] overflow-hidden border-4 border-sage shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=500"
                  alt="Cozy potted plants"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[32px] overflow-hidden border-4 border-terracotta shadow-md aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
                  alt="Friends hanging out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 pt-10">
              <div className="rounded-[32px] overflow-hidden border-4 border-terracotta shadow-md aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=500"
                  alt="Cafe bench"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[32px] overflow-hidden border-4 border-sage shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=500"
                  alt="Sunlit latte"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION (Sage tinted with curved layout) */}
      <section className="bg-sage/10 py-20 px-4 sm:px-6 lg:px-8 border-t border-sage/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-sage uppercase block mb-2">
              Kind Words
            </span>
            <h2 className="font-script text-4xl md:text-5xl font-bold text-terracotta">
              Loved by Locals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-cream p-6 rounded-[24px] shadow-sm border border-sage/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-burnt-orange mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-espresso/90 text-xs leading-relaxed italic mb-4">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex justify-between items-center text-[10px] text-espresso/50 border-t border-espresso/5 pt-3">
                  <span className="font-bold">{t.name}</span>
                  <span>{t.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
