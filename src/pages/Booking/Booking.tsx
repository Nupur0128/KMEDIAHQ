import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "08:00 PM",
];

const availableDays = [
  { day: "Mon", date: "Nov 17" },
  { day: "Tue", date: "Nov 18" },
  { day: "Wed", date: "Nov 19" },
  { day: "Thu", date: "Nov 20" },
  { day: "Fri", date: "Nov 21" },
];

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("02:00 PM");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channelUrl: "",
    goal: "Scaling YouTube & Reels",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-[#030809] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "76px 76px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(227,33,50,0.08),transparent_65%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            SCHEDULE A STRATEGY SESSION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Let’s map out your next{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              content breakthrough.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Pick a time for a 30-minute private video strategy call. We'll audit
            your channels, analyze your retention bottlenecks, and present a
            tailored production roadmap.
          </motion.p>
        </div>
      </section>

      {/* BOOKING INTERFACE SECTION */}
      <section className="w-full pb-24 sm:pb-28 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            {/* Left Column: Call Benefits & Agenda */}
            <div>
              <div className="rounded-[28px] border border-white/10 bg-[#0a1113] p-8 sm:p-10 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
                  What We Cover
                </span>
                <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
                  In this 30-minute session:
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E32132]/10 text-[#E32132]">
                      <Video size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Channel & Hook Audit</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        We review your existing long-form or short-form videos to pinpoint where viewer drop-offs occur and how to fix them.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A]">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Repurposing Strategy</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        We outline how to turn 1 hour of recording into 8-12 platform-native assets across YouTube, Instagram, and LinkedIn.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E32132]/10 text-[#E32132]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">Capacity & Turnaround Plan</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        Clear delivery schedules, dedicated Slack communication, and transparent monthly pricing tailored to your goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex flex-col gap-2.5 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-[#E32132]" />
                      <span>Zero high-pressure sales tactics — 100% practical strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#FFB84A]" />
                      <span>Same-day call recording and action summary provided</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#05090b] p-6 text-sm">
                <p className="font-semibold text-white">Prefer email or phone directly?</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/70">
                  <a
                    href="mailto:info@kodandamedia.com"
                    className="flex items-center gap-2 hover:text-[#FFB84A] transition"
                  >
                    <Mail size={14} className="text-[#FFB84A]" /> info@kodandamedia.com
                  </a>
                  <a
                    href="tel:+918085082069"
                    className="flex items-center gap-2 hover:text-[#FFB84A] transition"
                  >
                    <Phone size={14} className="text-[#FFB84A]" /> +91 8085082069
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Widget */}
            <div className="rounded-[28px] border border-white/10 bg-[#0a1113]/95 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E32132]/20 text-[#E32132]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold sm:text-3xl text-white">
                    Discovery Call Scheduled!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We have
                    booked your 30-minute session for{" "}
                    <strong className="text-[#FFB84A]">
                      {availableDays[selectedDay].day}, {availableDays[selectedDay].date} at {selectedSlot}
                    </strong>
                    . A Google Meet invitation has been dispatched to{" "}
                    <strong className="text-white">{formData.email}</strong>.
                  </p>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold hover:bg-white/10"
                    >
                      Book Another Time Slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                      Step 1 • Select Date
                    </span>
                    <div className="mt-3 grid grid-cols-5 gap-2">
                      {availableDays.map((d, idx) => (
                        <button
                          key={d.date}
                          type="button"
                          onClick={() => setSelectedDay(idx)}
                          className={`flex flex-col items-center justify-center rounded-2xl border py-3 transition ${
                            selectedDay === idx
                              ? "border-[#E32132] bg-[#E32132] text-white shadow-[0_0_15px_rgba(227,33,50,0.5)]"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold tracking-wider">
                            {d.day}
                          </span>
                          <span className="mt-0.5 text-xs font-extrabold">{d.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                      Step 2 • Select Time Slot
                    </span>
                    <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`rounded-xl border py-2.5 text-center text-xs font-semibold transition ${
                            selectedSlot === slot
                              ? "border-[#FFB84A] bg-[#FFB84A] text-[#030809] font-bold"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                      Step 3 • Your Details
                    </span>

                    <div>
                      <label className="block text-xs font-medium text-white/70">
                        Full Name <span className="text-[#E32132]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70">
                        Work Email <span className="text-[#E32132]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70">
                        Channel, Podcast, or Website URL
                      </label>
                      <input
                        type="text"
                        value={formData.channelUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, channelUrl: e.target.value })
                        }
                        placeholder="https://youtube.com/@channel or company.com"
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70">
                        Primary Goal
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-[#E32132] focus:outline-none"
                      >
                        <option value="Scaling YouTube & Reels" className="bg-[#0a1113]">
                          Scaling YouTube & Reels
                        </option>
                        <option value="Multi-Camera Podcast Editing" className="bg-[#0a1113]">
                          Multi-Camera Podcast Editing
                        </option>
                        <option value="UGC Performance Ads" className="bg-[#0a1113]">
                          UGC Performance Ads
                        </option>
                        <option value="End-to-End Content Engine" className="bg-[#0a1113]">
                          End-to-End Content Engine
                        </option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E32132] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(227,33,50,0.4)] transition hover:bg-white hover:text-[#030809] sm:text-sm"
                  >
                    <span>Confirm 30-Min Discovery Call</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
