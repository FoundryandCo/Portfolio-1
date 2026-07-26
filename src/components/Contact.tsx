import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all the fields before sending your message.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact-page" className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-terracotta uppercase block mb-2">
            Say Hello
          </span>
          <h1 className="font-script text-5xl md:text-6xl font-bold text-terracotta mb-4">
            Contact Us
          </h1>
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            Got questions, special requests, or just want to tell us about your morning? Drop us a line!
          </p>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMN 1: CONTACT INFO & CUSTOM MAP (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-6">
              <h2 className="font-script text-3xl font-bold text-espresso">
                Visit Us & Get in Touch
              </h2>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-espresso">Our Address</h3>
                    <p className="text-xs text-espresso/80 mt-0.5">1214 E 6th St, East Austin, TX</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center text-sage shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-espresso">Opening Hours</h3>
                    <p className="text-xs text-espresso/80 mt-0.5">Open Daily: 7AM – 3PM</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-burnt-orange/10 flex items-center justify-center text-burnt-orange shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-espresso">Phone Number</h3>
                    <p className="text-xs text-espresso/80 mt-0.5">(512) 555-0148</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ARTISTIC STYLIZED INTERACTIVE MAP */}
            <div className="relative h-[340px] rounded-[32px] overflow-hidden border-4 border-sage shadow-md bg-cream/50">
              
              {/* STYLIZED VECTOR MAP BACKGROUND USING SVG / HTML */}
              <div className="absolute inset-0 bg-[#E8E3D7] overflow-hidden select-none">
                
                {/* Lady Bird Lake / Colorado River at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#A5C3D2] border-t-2 border-[#94B3C2] flex items-center justify-center">
                  <span className="text-[9px] font-sans font-bold text-cream/70 uppercase tracking-widest">Colorado River / Lady Bird Lake</span>
                </div>

                {/* Forger Park in green */}
                <div className="absolute bottom-20 left-1/3 w-32 h-12 bg-[#B5C9A4] border border-[#A4B893] rounded-xl flex items-center justify-center">
                  <span className="text-[8px] font-sans font-semibold text-espresso/40 uppercase">Forger Park</span>
                </div>

                {/* Street Lines */}
                {/* East 6th St (Horizontal main street) */}
                <div className="absolute top-[45%] left-0 right-0 h-10 bg-[#D4CDBE] border-t border-b border-espresso/10 flex items-center justify-between px-10">
                  <span className="text-[8px] font-mono font-bold text-espresso/40 tracking-wider">E 6th Street</span>
                  <span className="text-[8px] font-mono font-bold text-espresso/40 tracking-wider">East Austin</span>
                </div>

                {/* Chicon St (Vertical street) */}
                <div className="absolute left-[30%] top-0 bottom-16 w-8 bg-[#D4CDBE] border-l border-r border-espresso/10 flex items-center justify-center">
                  <span className="text-[8px] font-mono font-bold text-espresso/40 tracking-wider rotate-90 whitespace-nowrap">Chicon Street</span>
                </div>

                {/* Waller St (Vertical street) */}
                <div className="absolute left-[75%] top-0 bottom-16 w-8 bg-[#D4CDBE] border-l border-r border-espresso/10 flex items-center justify-center">
                  <span className="text-[8px] font-mono font-bold text-espresso/40 tracking-wider rotate-90 whitespace-nowrap">Waller Street</span>
                </div>

                {/* Library and other pins */}
                <div className="absolute top-[20%] left-[10%] p-1.5 bg-cream/90 rounded border border-espresso/5 shadow-xs flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[7px] font-sans font-semibold text-espresso">East Austin Library</span>
                </div>

                <div className="absolute top-[15%] left-[60%] p-1.5 bg-cream/90 rounded border border-espresso/5 shadow-xs flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#8A9A5B]" />
                  <span className="text-[7px] font-sans font-semibold text-espresso">Community Garden</span>
                </div>

                {/* GOLDEN HOUR COFFEE CO PIN WITH PULSING EFFECT */}
                <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  
                  {/* Pin Banner */}
                  <div className="bg-espresso text-cream px-2.5 py-1 rounded-md shadow-lg border border-terracotta text-[9px] font-extrabold tracking-wide whitespace-nowrap mb-1 animate-bounce flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-burnt-orange rounded-full" />
                    <span>Golden Hour Coffee Co.</span>
                  </div>

                  {/* Red Pin and pulse */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-terracotta/40 rounded-full animate-ping scale-200" />
                    <div className="w-5 h-5 bg-terracotta rounded-full flex items-center justify-center border-2 border-cream shadow-md relative z-30">
                      <div className="w-2 h-2 bg-cream rounded-full" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Map Floating Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-cream hover:bg-cream/90 text-espresso hover:text-terracotta rounded-xl shadow-md transition-all flex items-center justify-center"
                  title="Open in Google Maps"
                >
                  <Navigation size={18} />
                </a>
              </div>

            </div>

          </div>

          {/* COLUMN 2: SEND MESSAGE FORM (Right 5 Columns) */}
          <div className="lg:col-span-5">
            <div className="bg-terracotta text-cream p-8 rounded-[32px] shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-burnt-orange/15 rounded-full blur-2xl pointer-events-none" />

              <h2 className="font-script text-3xl font-bold text-cream mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-cream/90">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jordan Ellis"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-cream/90">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jordan@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-cream/90">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ask about catering, private events, or just say hello..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                    required
                  />
                </div>

                {/* SUBMIT BUTTON WITH SAGE ACCENT */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-sage hover:bg-sage/95 disabled:bg-sage/60 text-cream font-bold text-base rounded-full shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* SUCCESS TOAST MESSAGE */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 bg-sage text-cream p-8 rounded-[32px] flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle size={48} className="animate-bounce" />
                    <h3 className="font-script text-3xl font-bold">Message Sent!</h3>
                    <p className="text-xs text-cream/90 max-w-xs leading-relaxed">
                      Thank you for reaching out! Jordan or Maya will secure a fresh reply for your inbox within 24 hours. Keep warm!
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2 bg-espresso text-cream font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm hover:bg-espresso/90 transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
