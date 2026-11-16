import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.045) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,74,.1),transparent_65%)]" />

      {/* Centered Content Container */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-4xl rounded-[24px] sm:rounded-[32px] border border-[#FFB84A]/25 bg-[#071011]/90 px-6 py-14 text-center shadow-[0_20px_80px_rgba(0,0,0,.4)] sm:px-12 sm:py-18 md:py-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Your next chapter starts here
          </p>

          <h2 className="mx-auto mt-3 sm:mt-4 max-w-2xl font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.12]">
            Ready to make your content{" "}
            <span className="font-serif italic text-[#FFB84A]">
              go further?
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/60">
            Tell us what you are building. We’ll help you find the right content
            direction and the support to bring it to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 sm:h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#E32132] px-7 sm:px-8 text-sm font-semibold text-white shadow-[0_0_30px_rgba(227,33,50,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#030809]"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/services"
              className="inline-flex h-12 sm:h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white/20 px-7 sm:px-8 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/[0.05]"
            >
              <span>Explore Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
