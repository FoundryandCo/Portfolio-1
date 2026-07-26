import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, Phone, CheckCircle, Gift, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: '2026-10-26',
    time: '10:30 AM',
    guests: '2 Guests',
    name: '',
    email: '',
    requests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '7:30 AM', '8:30 AM', '9:30 AM', '10:30 AM', 
    '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM'
  ];

  const guestOptions = [
    '1 Guest', '2 Guests', '3 Guests', '4 Guests', 
    '5 Guests', '6 Guests', '7 Guests', '8+ Guests'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out your name and email address so we can secure your reservation.');
      return;
    }
    // Generate a beautiful mock booking reference code (e.g., GH-9241)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingRef(`GH-${randomNum}`);
    setSubmitted(true);
  };

  return (
    <div id="reservations-page" className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-terracotta uppercase block mb-2">
            Secure Your Spot
          </span>
          <h1 className="font-script text-5xl md:text-6xl font-bold text-terracotta mb-4">
            Table Reservations
          </h1>
          <p className="text-espresso/70 text-sm max-w-md mx-auto">
            Book your spot for slow mornings and strong coffee in East Austin. We look forward to welcoming you!
          </p>
        </div>

        {/* HERO SCENE IMAGE */}
        <div className="relative aspect-[21/9] w-full rounded-[32px] overflow-hidden border-4 border-terracotta shadow-md mb-12">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200"
            alt="Table set by window"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-terracotta text-cream p-8 md:p-10 rounded-[32px] shadow-xl max-w-2xl mx-auto relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-burnt-orange/10 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="font-script text-3xl font-bold text-cream text-center mb-8">
                Find a Table
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* DATE & TIME (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* DATE FIELD */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-cream/90 flex items-center gap-1.5">
                      <Calendar size={14} className="text-cream" /> Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                      required
                    />
                  </div>

                  {/* TIME SELECTOR */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-cream/90 flex items-center gap-1.5">
                      <Clock size={14} className="text-cream" /> Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                      required
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* PARTY SIZE & PERSONAL FIELDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* PARTY SIZE */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-cream/90 flex items-center gap-1.5">
                      <Users size={14} className="text-cream" /> Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                    >
                      {guestOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* NAME */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-cream/90">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Maya Chen"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                      required
                    />
                  </div>

                </div>

                {/* EMAIL ADDRESS */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-cream/90">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                    required
                  />
                </div>

                {/* SPECIAL REQUESTS */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-cream/90 flex items-center gap-1.5">
                    <MessageSquare size={14} /> Special Requests (optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Honeymoon brunch, high chair required, tree nut allergy..."
                    value={formData.requests}
                    onChange={(e) => handleInputChange('requests', e.target.value)}
                    className="w-full px-4 py-3 bg-cream text-espresso rounded-2xl border border-cream/25 placeholder-espresso/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange font-medium text-sm"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="find-table-submit-btn"
                    className="w-full py-4 bg-burnt-orange hover:bg-burnt-orange/95 text-cream font-bold text-base rounded-full shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                  >
                    Find a Table
                  </button>
                </div>

              </form>

              {/* MOCK CALL OUT */}
              <p className="text-center text-cream/70 text-[11px] mt-6 flex items-center justify-center gap-1">
                <Phone size={11} /> Need help? Call us directly at (512) 555-0148
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream border-4 border-sage p-8 md:p-10 rounded-[32px] shadow-xl max-w-lg mx-auto text-center"
            >
              <div className="w-16 h-16 bg-sage/15 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} />
              </div>

              <h2 className="font-script text-3xl md:text-4xl font-bold text-terracotta mb-2">
                Table Reserved!
              </h2>
              <p className="text-espresso/70 text-xs mb-6 uppercase tracking-widest font-bold">
                Confirmation Ref: <span className="text-terracotta">{bookingRef}</span>
              </p>

              {/* RECEIPT BOX */}
              <div className="bg-sage/10 p-5 rounded-2xl text-left border border-sage/20 space-y-3 mb-8">
                <div className="flex justify-between border-b border-espresso/5 pb-2">
                  <span className="text-xs text-espresso/60">Guest Name</span>
                  <span className="text-xs font-bold text-espresso">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-espresso/5 pb-2">
                  <span className="text-xs text-espresso/60">Date</span>
                  <span className="text-xs font-bold text-espresso">{formData.date}</span>
                </div>
                <div className="flex justify-between border-b border-espresso/5 pb-2">
                  <span className="text-xs text-espresso/60">Time</span>
                  <span className="text-xs font-bold text-espresso">{formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-espresso/5 pb-2">
                  <span className="text-xs text-espresso/60">Party Size</span>
                  <span className="text-xs font-bold text-espresso">{formData.guests}</span>
                </div>
                {formData.requests && (
                  <div className="text-xs">
                    <span className="text-espresso/60 block mb-1">Special Requests:</span>
                    <span className="text-espresso italic bg-cream/80 p-2.5 rounded-lg border border-espresso/5 block">
                      "{formData.requests}"
                    </span>
                  </div>
                )}
              </div>

              {/* CUTE TIP GREETING */}
              <div className="flex items-center gap-3 bg-terracotta/5 border border-terracotta/10 p-4 rounded-xl text-left mb-8">
                <Gift size={20} className="text-terracotta shrink-0" />
                <p className="text-[11px] text-espresso/80 leading-relaxed">
                  We have noted down your preferences! Since it is golden hour, we are keeping a cozy window table ready for you with freshly plucked wildflowers.
                </p>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData(prev => ({ ...prev, name: '', email: '', requests: '' }));
                }}
                className="px-6 py-2.5 bg-terracotta text-cream font-bold text-xs uppercase tracking-wider rounded-full shadow hover:bg-terracotta/90 transition-all cursor-pointer"
              >
                Book Another Table
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
