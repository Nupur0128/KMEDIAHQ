
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative w-full box-border overflow-hidden bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.055) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,74,.12),transparent_65%)]" />

      {/* Centered Content Container */}
      <div
        className="relative w-full"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-[1000px] rounded-[28px] border border-[#FFB84A]/20 bg-[#071011]/85 px-6 py-16 text-center shadow-[0_20px_100px_rgba(0,0,0,.25)] sm:px-12 sm:py-20"
        >
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Your next chapter starts here
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-medium leading-[1.08] tracking-[-.05em] sm:text-5xl lg:text-6xl">
            Ready to make your content{" "}
            <span className="font-serif italic text-[#FFB84A]">
              go further?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
            Tell us what you are building. We’ll help you find the right content
            direction and the support to bring it to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#FFB84A] px-7 text-sm font-semibold text-[#080808] transition hover:-translate-y-1 hover:bg-[#FFD078]"
            >
              Book a Discovery Call
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:bg-white/[.04]"
            >
              Explore Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
