import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, X } from 'lucide-react';
import { GALLERY_ITEMS, INSTAGRAM_POSTS } from '../data';

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div id="gallery-page" className="bg-cream py-16">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-16 px-4">
        <span className="text-xs font-bold tracking-widest text-terracotta uppercase block mb-2">
          A Visual Journey
        </span>
        <h1 className="font-script text-5xl md:text-6xl font-bold text-terracotta mb-4">
          Café Gallery
        </h1>
        <p className="text-espresso/80 text-sm max-w-md mx-auto">
          A visual taste of our East Austin neighborhood café. Sunshine, rich espresso, and slow cozy mornings.
        </p>
      </div>

      {/* PICTURE FRAME GALLERY COLLAGE (Grid layout) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // Alternate some custom heights to simulate a gorgeous organic layout or bento structure
            const isTall = index === 1 || index === 2 || index === 7;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Frame Container: outer double-border frame effect
                className={`p-2 border border-sage/60 rounded-[28px] bg-cream shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                  isTall ? 'row-span-2' : ''
                }`}
              >
                <div className="h-full border border-sage/15 rounded-[20px] overflow-hidden p-1 bg-cream flex flex-col">
                  <div className="relative flex-1 rounded-[16px] overflow-hidden min-h-[220px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setLightboxImage({ src: item.image, alt: item.alt })}
                    />
                    {/* Shadow highlight on hover */}
                    <div className="absolute inset-0 bg-espresso/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-cream font-script text-lg">Golden Hour</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* INSTAGRAM RIBBON */}
      <section className="bg-terracotta text-cream py-14 overflow-hidden border-t-4 border-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <Instagram size={32} className="mx-auto text-cream mb-4" />
          <h2 className="font-script text-3xl md:text-4xl font-bold text-cream mb-2">
            Follow us on Instagram
          </h2>
          <a
            href="https://instagram.com/goldenhourcoffeeco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/90 hover:text-cream hover:underline text-sm font-medium tracking-wide"
          >
            @goldenhourcoffeeco
          </a>
        </div>

        {/* INSTAGRAM GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-cream/30"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Instagram hover overlay */}
                <div className="absolute inset-0 bg-espresso/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://instagram.com/goldenhourcoffeeco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream font-script text-lg hover:underline"
                  >
                    View on Instagram
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-cream hover:text-terracotta transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
