import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const budgetOptions = [
  "Under $2,000 / mo",
  "$2,000 – $5,000 / mo",
  "$5,000 – $10,000 / mo",
  "$10,000+ / mo",
];

const serviceOptions = [
  "Short-form Video Editing",
  "Long-form YouTube Editing",
  "Podcast Production",
  "UGC Performance Ads",
  "Omnichannel Distribution",
  "Full Content Engine",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Short-form Video Editing",
  ]);
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[1]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

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
            DIRECT INQUIRY & ONBOARDING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Let’s build something{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              remarkable together.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Tell us about your brand, channel, and timeline. Our production
            directors review inquiries multiple times a day and respond with
            clear next steps.
          </motion.p>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="w-full pb-24 sm:pb-28 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
            {/* Left Column: Direct Contact & Quick Booking */}
            <div>
              <div className="rounded-[28px] border border-white/10 bg-[#0a1113] p-8 sm:p-10 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
                  Direct Channels
                </span>
                <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl text-white">
                  Fast, direct responses.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  We don't hide behind automated ticketing queues. Reach our team directly by email or phone anytime.
                </p>

                <div className="mt-8 space-y-6">
                  <a
                    href="mailto:info@kodandamedia.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A] group-hover:bg-[#E32132] group-hover:text-white transition">
                      <Mail size={19} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">Email Us</span>
                      <p className="mt-0.5 text-base font-semibold text-white group-hover:text-[#FFB84A] transition">
                        info@kodandamedia.com
                      </p>
                      <p className="text-xs text-white/45">Typical reply: under 4 hours</p>
                    </div>
                  </a>

                  <a
                    href="tel:+918085082069"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A] group-hover:bg-[#E32132] group-hover:text-white transition">
                      <Phone size={19} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">Call or WhatsApp</span>
                      <p className="mt-0.5 text-base font-semibold text-white group-hover:text-[#FFB84A] transition">
                        +91 8085082069
                      </p>
                      <p className="text-xs text-white/45">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/70">
                      <MapPin size={19} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">Studio Entity</span>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        Kodanda Media Private Limited
                      </p>
                      <p className="text-xs text-white/45">Serving clients worldwide across US, UK & India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-[#05090b] p-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                    <Sparkles size={14} /> Prefer a live video meeting?
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Skip email back-and-forth and jump straight to our live schedule.
                  </p>
                  <Link
                    to="/booking"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-[#030809] hover:bg-[#FFB84A] transition"
                  >
                    <span>Open Calendar Scheduler</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="rounded-[28px] border border-white/10 bg-[#0a1113]/95 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E32132]/20 text-[#E32132]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold sm:text-3xl text-white">
                    Inquiry Received!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our creative
                    director has received your brief and will review your requirements. Expect an email
                    at <strong className="text-white">{formData.email}</strong> shortly.
                  </p>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold hover:bg-white/10"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                      Select Services Needed
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                              isSelected
                                ? "bg-[#E32132] text-white shadow-[0_0_12px_rgba(227,33,50,0.4)]"
                                : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-white/70">
                        Your Name <span className="text-[#E32132]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
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
                        placeholder="sarah@brand.com"
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70">
                      Company / Channel / Social Handle
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. YouTube @sarahcreates or SarahBrand.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                      Monthly Content Budget
                    </label>
                    <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedBudget(opt)}
                          className={`rounded-xl border py-2.5 px-2 text-center text-xs font-medium transition ${
                            selectedBudget === opt
                              ? "border-[#FFB84A] bg-[#FFB84A] text-[#030809] font-bold"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70">
                      Project Details & Current Workflow Challenges
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current video frequency, what formats you record, and what you are looking to improve..."
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E32132] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(227,33,50,0.4)] transition hover:bg-white hover:text-[#030809] sm:text-sm"
                  >
                    <span>Submit Project Brief</span>
                    <Send size={15} />
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
