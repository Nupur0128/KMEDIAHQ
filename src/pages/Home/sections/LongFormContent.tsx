
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
    <section className="w-full box-border bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div
        className="mx-auto grid w-full min-w-0 gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1516] p-5 sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,184,74,.12),transparent_48%)]" />

          <div className="relative flex aspect-[4/3] flex-col justify-between rounded-2xl border border-white/10 bg-[#101b1b] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/60">
                <FaYoutube size={14} className="text-[#FFB84A]" />
                Long-form studio
              </span>

              <span className="text-xs text-white/30">01 / 04</span>
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#FFB84A]/50 bg-[#FFB84A] text-[#080808] shadow-[0_0_55px_rgba(255,184,74,.2)]">
              <Play size={22} fill="currentColor" />
            </div>

            <div>
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[62%] rounded-full bg-[#FFB84A]" />
              </div>

              <div className="flex justify-between text-[10px] uppercase tracking-[.14em] text-white/35">
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

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Long-form content
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.08] tracking-[-.045em] sm:text-5xl">
            Turn your ideas into{" "}
            <span className="font-serif italic text-[#FFB84A]">
              watch-worthy stories.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/55">
            From YouTube videos and podcasts to interviews and educational
            content, we shape longer stories into polished viewing experiences
            that keep your audience with you.
          </p>

          <ul className="mt-7 space-y-3">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-white/70"
              >
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#FFB84A]"
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/services"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold transition hover:border-[#FFB84A]/50 hover:text-[#FFB84A]"
          >
            Explore long-form editing
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
