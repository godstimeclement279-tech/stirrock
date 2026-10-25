import { useState, FormEvent } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';
import { ReservationEnquiry } from '../types';
import { LineRevealHeadline, EditorialFadeUp } from './ScrollReveal';

export function ReservationSection() {
  const [formData, setFormData] = useState<ReservationEnquiry>({
    name: '',
    phone: '',
    date: '',
    guests: '2 Guests',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [submittedDemo, setSubmittedDemo] = useState<ReservationEnquiry | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setErrorMsg('Please enter your name, phone number, and preferred date.');
      return;
    }
    setErrorMsg('');
    setSubmittedDemo({ ...formData });
  };

  const handleCopySummary = () => {
    if (!submittedDemo) return;
    const summary = `STIRROCK RESTAURANT — TABLE ENQUIRY\nName: ${submittedDemo.name}\nPhone: ${submittedDemo.phone}\nPreferred Date: ${submittedDemo.date}\nGuests: ${submittedDemo.guests}\nNote: ${submittedDemo.message || 'None'}`;
    navigator.clipboard?.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="reservations"
      className="py-24 sm:py-32 lg:py-40 bg-[#722F45] text-[#FAF7F3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Invitation */}
          <div className="lg:col-span-5 space-y-6">
            <EditorialFadeUp>
              <p className="text-xs font-sans font-medium tracking-[0.24em] uppercase text-[#E9E0DF]">
                05. Table Enquiry · Agbor
              </p>
            </EditorialFadeUp>

            <LineRevealHeadline
              lines={["LET'S SAVE", 'YOU A SEAT.']}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F3] font-normal leading-[1.06]"
              delay={0.06}
            />

            <EditorialFadeUp delay={0.16}>
              <p className="font-sans text-base text-[#FAF7F3]/90 leading-relaxed">
                Planning a relaxed afternoon meal, an evening dinner, or a
                celebration with family and friends in Agbor? Share your
                preferred date and party size below.
              </p>
            </EditorialFadeUp>

            <EditorialFadeUp delay={0.24}>
              <div className="pt-6 border-t border-[#FAF7F3]/20 space-y-3 text-xs font-sans text-[#E9E0DF]/85 leading-relaxed">
                <p className="font-semibold uppercase tracking-[0.18em] text-[#FAF7F3]">
                  Interactive Demonstration Form
                </p>
                <p>
                  This enquiry module is an interactive concept preview for
                  Stirrock Restaurant. Submitting the form generates a formatted
                  reservation request ready to be connected to the restaurant’s
                  official WhatsApp line or reservation desk upon launch.
                </p>
              </div>
            </EditorialFadeUp>
          </div>

          {/* Right Column: Reservation Enquiry Form or Demo Dispatch Preview */}
          <EditorialFadeUp
            delay={0.14}
            className="lg:col-span-7 bg-[#481B2B] p-6 sm:p-10 lg:p-12 border border-[#FAF7F3]/20 shadow-xl"
          >
            {submittedDemo ? (
              <div className="space-y-6">
                <div className="border-b border-[#FAF7F3]/20 pb-4">
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#E9E0DF]">
                    Demonstration Mode · Formatted Request Preview
                  </p>
                  <h3 className="font-serif text-3xl text-[#FAF7F3] mt-1">
                    Enquiry Ready for Dispatch
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#E9E0DF]/90 leading-relaxed">
                  Because this is a website concept demonstration, no live
                  reservation has been transmitted yet. Below is the structured
                  booking message that will be routed directly to Stirrock
                  Restaurant’s team once their preferred contact channel is
                  connected:
                </p>

                <div className="bg-[#722F45]/60 p-5 border border-[#FAF7F3]/20 space-y-2.5 text-sm font-sans">
                  <div className="flex justify-between gap-4 border-b border-[#FAF7F3]/15 pb-2">
                    <span className="text-[#E9E0DF]/75">Guest Name</span>
                    <span className="font-medium text-[#FAF7F3]">
                      {submittedDemo.name}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#FAF7F3]/15 pb-2">
                    <span className="text-[#E9E0DF]/75">Phone Number</span>
                    <span className="font-medium text-[#FAF7F3] tabular-nums">
                      {submittedDemo.phone}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#FAF7F3]/15 pb-2">
                    <span className="text-[#E9E0DF]/75">Preferred Date</span>
                    <span className="font-medium text-[#FAF7F3] tabular-nums">
                      {submittedDemo.date}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#FAF7F3]/15 pb-2">
                    <span className="text-[#E9E0DF]/75">Party Size</span>
                    <span className="font-medium text-[#FAF7F3]">
                      {submittedDemo.guests}
                    </span>
                  </div>
                  {submittedDemo.message && (
                    <div className="pt-1">
                      <span className="text-[#E9E0DF]/75 block mb-1">
                        Guest Note
                      </span>
                      <p className="text-[#FAF7F3]">{submittedDemo.message}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="editorial-btn inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF7F3] text-[#481B2B] hover:bg-[#FFFFFF] text-xs font-sans font-semibold tracking-[0.18em] uppercase cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    <span>
                      {copied ? 'Enquiry Text Copied' : 'Copy Enquiry Summary'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmittedDemo(null)}
                    className="editorial-btn inline-flex items-center gap-2 px-6 py-3.5 border border-[#FAF7F3]/40 text-[#FAF7F3] hover:bg-[#FAF7F3]/10 text-xs font-sans font-medium tracking-[0.18em] uppercase cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <RotateCcw size={14} />
                    <span>Edit or Test Again</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-sans tracking-[0.18em] uppercase text-[#E9E0DF] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="e.g. Chidi Okafor"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#722F45]/40 border border-[#FAF7F3]/30 px-4 py-3 text-sm text-[#FAF7F3] placeholder:text-[#E9E0DF]/45 focus:outline-none focus:border-[#FAF7F3]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-sans tracking-[0.18em] uppercase text-[#E9E0DF] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="e.g. +234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#722F45]/40 border border-[#FAF7F3]/30 px-4 py-3 text-sm text-[#FAF7F3] placeholder:text-[#E9E0DF]/45 focus:outline-none focus:border-[#FAF7F3] tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-sans tracking-[0.18em] uppercase text-[#E9E0DF] mb-2"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-[#722F45]/40 border border-[#FAF7F3]/30 px-4 py-3 text-sm text-[#FAF7F3] focus:outline-none focus:border-[#FAF7F3] tabular-nums"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-sans tracking-[0.18em] uppercase text-[#E9E0DF] mb-2"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-[#481B2B] border border-[#FAF7F3]/30 px-4 py-3 text-sm text-[#FAF7F3] focus:outline-none focus:border-[#FAF7F3]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="5–6 Guests">5–6 Guests</option>
                      <option value="7+ Guests (Group Table)">
                        7+ Guests (Group Table)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="res-message"
                    className="block text-xs font-sans tracking-[0.18em] uppercase text-[#E9E0DF] mb-2"
                  >
                    Optional Message
                  </label>
                  <textarea
                    id="res-message"
                    rows={3}
                    placeholder="Preferred time, dish requests, or special occasion notes..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#722F45]/40 border border-[#FAF7F3]/30 px-4 py-3 text-sm text-[#FAF7F3] placeholder:text-[#E9E0DF]/45 focus:outline-none focus:border-[#FAF7F3]"
                  />
                </div>

                {errorMsg && (
                  <p
                    role="alert"
                    className="text-xs font-sans text-[#FAF7F3] bg-[#722F45] px-4 py-2.5 border border-[#FAF7F3]/40"
                  >
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="editorial-btn px-8 py-4 bg-[#FAF7F3] text-[#481B2B] hover:bg-[#FFFFFF] text-xs font-sans font-semibold tracking-[0.2em] uppercase cursor-pointer whitespace-nowrap shrink-0"
                  >
                    REQUEST A TABLE
                  </button>

                  <span className="text-[11px] font-sans text-[#E9E0DF]/75">
                    Demo Preview · Ready for WhatsApp or Direct Desk Integration
                  </span>
                </div>
              </form>
            )}
          </EditorialFadeUp>
        </div>
      </div>
    </section>
  );
}
