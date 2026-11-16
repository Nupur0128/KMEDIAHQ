import { motion } from "framer-motion";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const benefits = [
  "Story-led editing and clear pacing",
  "Motion graphics, captions and sound design",
  "Platform-ready exports and organised delivery",
  "A consistent visual style across episodes",
];

export default function LongFormContent() {
  return (
    <section className="w-full bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-12">
        {/* Left Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1516] p-5 sm:p-7"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,184,74,.1),transparent_48%)]" />

          <div className="relative flex aspect-[4/3] flex-col justify-between rounded-xl border border-white/10 bg-[#101b1b] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                <FaYoutube size={13} className="text-[#FFB84A]" />
                Long-form studio
              </span>

              <span className="text-xs text-white/40">01 / 04</span>
            </div>

            <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-[#FFB84A]/50 bg-[#FFB84A] text-[#030809] shadow-[0_0_40px_rgba(255,184,74,.25)]">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </div>

            <div>
              <div className="mb-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[62%] rounded-full bg-[#FFB84A]" />
              </div>

              <div className="flex justify-between text-[10px] uppercase tracking-[0.14em] text-white/40">
                <span>Story</span>
                <span>Editing</span>
                <span>Delivery</span>
              </div>
            </div>
          </div>

          <p className="relative mt-4 text-center text-xs text-white/35">
            Replace this visual with an approved showreel or project preview.
          </p>
        </motion.div>

        {/* Right Info Column */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Long-form content
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Turn your ideas into{" "}
            <span className="font-serif italic text-[#FFB84A]">
              watch-worthy stories.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/55">
            From YouTube videos and podcasts to interviews and educational
            content, we shape longer stories into polished viewing experiences
            that keep your audience with you.
          </p>

          <ul className="mt-6 space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                <Check
                  size={16}
                  className="shrink-0 text-[#FFB84A]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/services"
            className="mt-8 inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 px-6 text-sm font-semibold transition hover:border-[#FFB84A]/50 hover:text-[#FFB84A]"
          >
            <span>Explore long-form editing</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
