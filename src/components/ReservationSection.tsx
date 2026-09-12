import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Phone, MessageSquare, Calendar, Clock, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationSubmission } from '../types';

export function ReservationSection() {
  const [formData, setFormData] = useState<ReservationSubmission>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: 2,
    seatingPreference: 'Main Dining Salon',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const seatingOptions = [
    'Main Dining Salon',
    'The Hearth Counter (Chef View)',
    'Intimate Corner Booth',
    'Private Dining Room (6+ Guests)',
  ];

  const times = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  return (
    <section id="reservations" className="py-28 sm:py-36 bg-[#070708] border-t border-white/[0.05] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-3">
            Table Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-light tracking-[0.05em]">
            YOUR TABLE AWAITS.
          </h2>
          <p className="mt-4 font-sans text-xs sm:text-sm text-[#9C988F] font-light tracking-wide leading-relaxed">
            Seating at ICE & STEAK is paced to preserve quiet intimacy. We invite you to share your preferred evening details with our reservations concierge.
          </p>
        </div>

        {/* The Luxury Booking Experience */}
        <div className="bg-[#0d0d10] border border-white/[0.08] p-8 sm:p-14 lg:p-16">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* Guest Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  
                  {/* Name */}
                  <div className="relative group">
                    <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Obinna Clement"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans placeholder-[#9C988F]/40"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans placeholder-[#9C988F]/40"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans placeholder-[#9C988F]/40"
                    />
                  </div>

                </div>

                {/* Reservation Details Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                  
                  {/* Date */}
                  <div className="relative group">
                    <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  {/* Time */}
                  <div className="relative group">
                    <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                      Preferred Time *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#0d0d10] border-b border-white/20 pb-3 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans cursor-pointer"
                    >
                      {times.map((t) => (
                        <option key={t} value={t} className="bg-[#141417] text-[#F4F1EA]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="relative group">
                    <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#0d0d10] border-b border-white/20 pb-3 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num} className="bg-[#141417] text-[#F4F1EA]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Seating Preference */}
                <div className="pt-2">
                  <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-3">
                    Seating Environment
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {seatingOptions.map((opt) => {
                      const isSelected = formData.seatingPreference === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingPreference: opt })}
                          className={`p-3 text-left text-xs tracking-wider transition-all border cursor-pointer ${
                            isSelected
                              ? 'border-[#C5A880] bg-[#C5A880]/10 text-[#F4F1EA]'
                              : 'border-white/10 text-[#9C988F] hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="pt-2">
                  <label className="block text-[10px] font-sans tracking-[0.25em] text-[#9C988F] uppercase mb-2">
                    Dietary Notes / Special Occasion / Specific Cut Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g. Celebrating an anniversary, dry-aged tomahawk preorder, champagne on arrival..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-[#F4F1EA] focus:border-[#C5A880] focus:outline-none transition-colors font-sans placeholder-[#9C988F]/40 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/[0.08]">
                  <p className="text-[11px] text-[#9C988F] max-w-md">
                    * Reservation confirmation is provided via telephone or WhatsApp by our dining captain within two hours.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-[#F4F1EA] text-[#070708] hover:bg-[#C5A880] hover:text-[#070708] text-xs font-sans font-medium tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'PROCESSING...' : 'REQUEST A TABLE'}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Refined Confirmation View */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <div className="w-12 h-12 rounded-full border border-[#C5A880] flex items-center justify-center mx-auto mb-6 text-[#C5A880]">
                  <Check size={20} />
                </div>

                <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C5A880] block mb-2">
                  Request Received
                </span>
                
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA] mb-4">
                  We look forward to welcoming you, {formData.name}.
                </h3>

                <p className="text-sm font-sans text-[#9C988F] max-w-lg mx-auto leading-relaxed mb-8">
                  Your table request for <strong className="text-[#F4F1EA]">{formData.guests} guests</strong> on{' '}
                  <strong className="text-[#F4F1EA]">{formData.date || 'selected date'}</strong> at{' '}
                  <strong className="text-[#F4F1EA]">{formData.time}</strong> ({formData.seatingPreference}) has been dispatched to our Owerri dining room host.
                </p>

                {/* Direct Connect Options */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-white/[0.08] max-w-md mx-auto">
                  <a
                    href={RESTAURANT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#C5A880] hover:text-[#F4F1EA] uppercase"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <span className="text-white/20 hidden sm:inline">·</span>

                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#E8E4DC] hover:text-[#C5A880] uppercase"
                  >
                    <Phone size={14} />
                    <span>{RESTAURANT_INFO.phone}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-[11px] font-sans tracking-[0.2em] text-[#9C988F] hover:text-[#E8E4DC] underline underline-offset-4 uppercase"
                >
                  Make Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
