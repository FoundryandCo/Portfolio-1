import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div id="about-page" className="bg-cream">
      
      {/* OUR STORY MAIN SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: TEXT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold tracking-widest text-terracotta uppercase block">
              Our Story
            </span>
            <h1 className="font-script text-5xl md:text-6xl font-bold text-terracotta">
              Our Story
            </h1>
            <div className="text-espresso/90 text-sm leading-relaxed space-y-4">
              <p>
                Golden Hour Coffee Co. was born from the shared dream of Maya Chen & Jordan Ellis. After years in the bustling coffee scenes of Seattle and Portland, they found their true home in the warm, sun-drenched streets of East Austin.
              </p>
              <p>
                They envisioned a place that wasn't just about the coffee, but about the slow, golden moments of connection that happen over a perfectly brewed cup.
              </p>
              <p>
                In 2023, they opened their doors, inviting the neighborhood to linger, brunch, and bask in the light.
              </p>
            </div>

            {/* Core Values / Small Accents */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-terracotta/10">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center text-sage mx-auto mb-2">
                  <Leaf size={16} />
                </div>
                <span className="font-bold text-xs text-espresso block">100% Organic</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta mx-auto mb-2">
                  <Award size={16} />
                </div>
                <span className="font-bold text-xs text-espresso block">Locally Roasted</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-burnt-orange/10 flex items-center justify-center text-burnt-orange mx-auto mb-2">
                  <Heart size={16} />
                </div>
                <span className="font-bold text-xs text-espresso block">Austin Owned</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: TALL SUNLIT INTERIOR PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] max-w-md mx-auto w-full rounded-[40px] overflow-hidden border-8 border-terracotta shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
              alt="Sun-drenched Golden Hour Cafe space"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* CHEF LEO BIO CARD (Sage-tinted background, custom photo and text) */}
      <section className="bg-sage/10 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-sage/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sage text-cream rounded-[32px] overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-8 items-center">
            
            {/* CHEF PHOTO WITH ROUNDED CORNERS */}
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden border-4 border-cream/50 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400"
                alt="Chef Leo Chef portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CHEF DESCRIPTION */}
            <div className="md:col-span-8 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-cream/75 bg-cream/10 px-2.5 py-1 rounded-full inline-block">
                Culinary Director
              </span>
              <h2 className="font-script text-4xl font-bold text-cream">
                Chef Leo
              </h2>
              <p className="text-cream/90 text-sm leading-relaxed font-light">
                Chef Leo brings passion to every plate. With a focus on fresh, local ingredients, he crafts dishes that are as comforting as they are creative, blending traditional techniques with modern flavors.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cream/80 bg-espresso/20 p-3 rounded-xl inline-block">
                ✨ Signature Special: Cinnamon Roll Skillet
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GREEN INFO BANNER */}
      <div className="bg-sage text-cream py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-medium tracking-wider flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span>Open Daily 7AM-3PM</span>
            <span className="hidden sm:inline">•</span>
            <a href="https://maps.google.com/?q=1214+E+6th+St+East+Austin+TX" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">1214 E 6th St, Austin, TX</a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+15125550148" className="hover:underline transition-colors">(512) 555-0148</a>
            <span className="hidden sm:inline">•</span>
            <span>🐶 Dog Friendly</span>
          </p>
        </div>
      </div>

    </div>
  );
}
