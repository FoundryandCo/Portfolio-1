import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, Utensils, Sandwich, Leaf } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'all' | 'coffee' | 'brunch' | 'lunch'>('all');

  const categories = [
    { id: 'all', label: 'All Goodies', icon: Coffee },
    { id: 'coffee', label: 'Coffee & Drinks', icon: Coffee },
    { id: 'brunch', label: 'Brunch Specials', icon: Utensils },
    { id: 'lunch', label: 'Lunch Plates', icon: Sandwich },
  ];

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const getCategoryLabel = (cat: 'coffee' | 'brunch' | 'lunch') => {
    switch (cat) {
      case 'coffee': return 'Coffee & Drinks';
      case 'brunch': return 'Brunch';
      case 'lunch': return 'Lunch';
    }
  };

  return (
    <div id="menu-page" className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-terracotta uppercase block mb-2">
            Mouthwatering Choices
          </span>
          <h1 className="font-script text-5xl md:text-6xl font-bold text-terracotta mb-4">
            Café Menu
          </h1>
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            Everything is prepared with love, local ingredients, and served fresh daily in East Austin.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                id={`menu-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm border focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-sage border-sage text-cream shadow-md scale-105'
                    : 'bg-cream border-terracotta/20 text-espresso hover:border-terracotta hover:text-terracotta'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-cream' : 'text-sage'} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* MENU LIST GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-cream rounded-[28px] overflow-hidden shadow-sm border border-terracotta/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Frame with Double Borders representing the cute mockup aesthetic */}
              <div className="relative aspect-[4/3] m-3 overflow-hidden rounded-[20px] border-4 border-terracotta shadow-inner">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Ribbon Tag */}
                {item.tag && (
                  <span className="absolute top-3 left-3 bg-sage text-cream text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                )}

                {/* Tag for category in 'all' view */}
                {activeTab === 'all' && (
                  <span className="absolute bottom-3 left-3 bg-espresso/80 backdrop-blur-sm text-cream text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {getCategoryLabel(item.category)}
                  </span>
                )}
              </div>

              {/* Text Description Block */}
              <div className="p-5 pt-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline gap-2 mb-2">
                    <h3 className="font-sans text-base font-bold text-espresso group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-sans text-sm font-extrabold text-terracotta shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-espresso/70 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Small indicator / decorative leaf for organic feel */}
                <div className="flex items-center gap-1.5 mt-4 text-[10px] text-sage font-medium">
                  <Leaf size={10} className="fill-current" />
                  <span>Fresh & Locally Sourced</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DIETARY NOTE BANNER (using terracotta background and high rounding) */}
        <div className="mt-20 bg-terracotta text-cream p-8 rounded-[32px] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-script text-2xl font-bold text-cream">
              Dietary preferences or allergies?
            </h3>
            <p className="text-cream/90 text-xs max-w-md">
              We have oat, almond, and soy milk alternatives available. Most of our brunch dishes can be prepared gluten-free or vegan upon request.
            </p>
          </div>
          <span className="bg-burnt-orange text-cream text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow shrink-0">
            Ask your friendly Barista
          </span>
        </div>

      </div>
    </div>
  );
}
