import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Film, Search } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    tag: "DISCOVER",
    title: "Discover",
    text: "We learn about your business, audience, goals and current content workflow to build your custom strategy.",
    metric: "Week 01",
    type: "discovery",
  },
  {
    number: "02",
    tag: "PLAN",
    title: "Plan",
    text: "We shape the content direction, formats, priorities and a practical delivery plan that your team can count on.",
    metric: "Action Plan",
    type: "planning",
  },
  {
    number: "03",
    tag: "CREATE",
    title: "Create",
    text: "Our team handles the creative execution, editing and asset preparation with obsessive attention to craft.",
    metric: "Master Files",
    type: "creation",
  },
  {
    number: "04",
    tag: "DISTRIBUTE",
    title: "Distribute",
    text: "We prepare content for the right channels and keep the system moving every week without dropping quality.",
    metric: "Omnichannel",
    type: "distribution",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  return (
    <section id="how-it-works" className="w-full bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Workflow
          </p>

          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            How it works<span className="text-[#E32132]">.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            Four steps, then it runs every week.
          </p>
        </div>

        {/* Reference UI Step Card */}
        <div className="relative mx-auto w-full max-w-4xl rounded-[28px] border border-white/10 bg-[#0a1113]/95 p-6 sm:rounded-[36px] sm:p-10 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {/* Top Row: Step Indicator & Dash Bars */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 sm:pb-8">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E32132]">
              Step {activeStep + 1} of 4
            </span>

            {/* Dash indicator bars */}
            <div className="flex items-center gap-2 sm:gap-3">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === i
                      ? "w-8 sm:w-12 bg-[#E32132] shadow-[0_0_12px_rgba(227,33,50,0.7)]"
                      : activeStep > i
                      ? "w-6 sm:w-8 bg-[#E32132]/50 hover:bg-[#E32132]/70"
                      : "w-6 sm:w-8 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="py-6 sm:py-8"
            >
              <h3 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {currentStep.title}
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60 sm:mt-4 sm:text-lg">
                {currentStep.text}
              </p>

              {/* Middle Interactive Track corresponding to each step */}
              {activeStep === 0 && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-[#05090b] p-4 sm:mt-10 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-white/75">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E32132]/30 bg-[#E32132]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E32132]">
                      <Search size={13} /> DISCOVERY
                    </span>

                    <div className="hidden flex-1 items-center justify-between px-4 sm:flex">
                      <span className="font-medium text-white/90">Goals & Positioning</span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#E32132] to-[#FFB84A]" />
                      <span className="font-medium text-white/90">Audience Audit</span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFB84A] to-white/40" />
                      <span className="font-medium text-white/90">Workflow Map</span>
                    </div>

                    <span className="font-mono text-xs text-[#FFB84A]">Phase 01</span>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-[#05090b] p-4 sm:mt-10 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-white/75">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFB84A]/30 bg-[#FFB84A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FFB84A]">
                      <Calendar size={13} /> BLUEPRINT
                    </span>

                    <div className="hidden flex-1 items-center justify-between px-4 sm:flex">
                      <span className="font-medium text-white/90">Format Selection</span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFB84A] to-[#E32132]" />
                      <span className="font-medium text-white/90">Content Pillars</span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#E32132] to-white/40" />
                      <span className="font-medium text-white/90">Weekly Scope</span>
                    </div>

                    <span className="font-mono text-xs text-[#FFB84A]">Phase 02</span>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-[#05090b] p-4 sm:mt-10 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-white/75">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E32132]/30 bg-[#E32132]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E32132]">
                      <Film size={13} /> PRODUCTION
                    </span>

                    <div className="hidden flex-1 items-center justify-between px-4 sm:flex">
                      <span className="font-medium text-white/90">Story Cut</span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#E32132] to-[#FFB84A]" />
                      <span className="font-medium text-white/90">Motion & Captions</span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFB84A] to-white/40" />
                      <span className="font-medium text-white/90">Audio & Polish</span>
                    </div>

                    <span className="font-mono text-xs text-[#FFB84A]">Phase 03</span>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                /* Matches reference UI track with LIVE badge and social platform nodes */
                <div className="mt-8 rounded-2xl border border-white/10 bg-[#05090b] px-4 py-3.5 sm:mt-10 sm:rounded-full sm:px-6 sm:py-4">
                  <div className="flex items-center justify-between gap-3 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E32132]">
                        LIVE
                      </span>
                      <FaYoutube size={16} className="text-[#E32132]" />
                    </div>

                    {/* Rail with glowing nodes */}
                    <div className="flex flex-1 items-center justify-between px-2 sm:px-4">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132]" />
                      <div className="mx-2 h-px flex-1 bg-white/15" />
                      <FaInstagram size={17} className="text-white/70 transition hover:text-white" />
                      <div className="mx-2 h-px flex-1 bg-white/15" />
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FFB84A] shadow-[0_0_8px_#FFB84A]" />
                      <div className="mx-2 h-px flex-1 bg-white/15" />
                      <FaLinkedin size={16} className="text-white/70 transition hover:text-white" />
                      <div className="mx-2 h-px flex-1 bg-white/15" />
                      <div className="h-1.5 w-1.5 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132]" />
                      <div className="mx-2 h-px flex-1 bg-white/15" />
                      <FaTiktok size={15} className="text-white/70 transition hover:text-white" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white sm:text-sm"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-3">
              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-[#030809] transition hover:bg-[#FFB84A] sm:text-sm"
                >
                  <span>Next</span>
                  <ArrowRight size={16} />
                </button>
              ) : null}

              {/* Book a call button styled exactly as in the reference screenshot */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E32132] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#030809] shadow-[0_0_25px_rgba(227,33,50,0.4)] sm:text-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#E32132] transition group-hover:bg-[#E32132] group-hover:text-white">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </span>
                <span>Book a call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
