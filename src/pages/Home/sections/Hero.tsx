import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#030809] text-white">
      {/* Visible Square Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.075) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.075) 1px, transparent 1px)
          `,
          backgroundSize: "76px 76px",
          opacity: 0.8,
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,74,0.055),transparent_70%)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] flex-col items-center px-5 py-20 text-center sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 sm:mb-8"
        >
          <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 sm:px-7 sm:py-3 sm:text-xs sm:tracking-[0.18em]">
            <span className="mr-2.5 h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            CONTENT. STORYTELLING. DISTRIBUTION.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mx-auto max-w-[1250px] font-heading text-[clamp(40px,6.3vw,88px)] font-medium leading-[1.05] tracking-[-0.055em]"
        >
          Your content and distribution
          <span className="mt-2 block font-serif font-normal italic leading-[1.05] tracking-[-0.045em] text-[#FFB84A] sm:mt-3">
            growth partners.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-[820px] px-2 text-sm font-normal leading-7 text-white/55 sm:mt-7 sm:px-0 sm:text-base sm:leading-[2.1rem]"
        >
          We build and run the content systems that help businesses earn
          attention, build authority and grow across every platform that
          matters. From strategy and storytelling to production, editing and
          distribution, we handle the entire content operation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 flex w-full flex-col items-center justify-center gap-4 sm:mt-8 sm:w-auto sm:flex-row"
        >
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="group inline-flex min-h-[60px] min-w-[200px] items-center justify-center gap-4 whitespace-nowrap rounded-full bg-[#E32132] !px-9 py-4 text-md font-semibold text-white shadow-[0_0_30px_rgba(227,33,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#030809] sm:!px-6"
          >
            <span>Book a Discovery Call</span>

            <ArrowUpRight
              size={19}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Secondary CTA */}
          <a
            href="#our-work"
            className="group inline-flex min-h-[60px] min-w-[200px] items-center justify-center gap-4 whitespace-nowrap rounded-full border border-white/20 bg-white/[0.02] !px-9 py-4 text-md font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:text-white sm:!px-6"
          >
            <span>Explore Our Work</span>

            <ArrowRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#030809]/60 to-transparent" />
    </section>
  );
}
