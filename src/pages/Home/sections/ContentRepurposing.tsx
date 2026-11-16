
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Film,
  Layers3,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const formats = [
  {
    icon: Film,
    title: "Long-form videos",
    text: "Turn raw footage and ideas into polished, story-led videos.",
  },
  {
    icon: Smartphone,
    title: "Short-form clips",
    text: "Create platform-native reels, shorts and vertical edits.",
  },
  {
    icon: Clapperboard,
    title: "Social-first assets",
    text: "Build cutdowns, teasers and supporting creative from every shoot.",
  },
  {
    icon: Layers3,
    title: "Content libraries",
    text: "Organise reusable assets so every idea has more room to travel.",
  },
];

export default function ContentRepurposing() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32 box-border">
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.045) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      {/* Centered Content Container */}
      <div
        className="relative grid w-full min-w-0 gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="min-w-0"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            One idea. More impact.
          </p>

          <h2 className="max-w-xl font-heading text-4xl font-medium leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Make every piece of content{" "}
            <span className="font-serif italic text-[#FFB84A]">
              work harder.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-white/55">
            We turn your core content into a connected library of platform-ready
            assets—so your best ideas reach more people without starting from
            scratch every time.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#FFB84A] transition hover:gap-5"
          >
            Explore content services <ArrowUpRight size={17} />
          </Link>
        </motion.div>

        {/* Right Content Cards */}
        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {formats.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group min-w-0 rounded-2xl border border-white/10 bg-white/[.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FFB84A]/40 hover:bg-[#FFB84A]/[.055]"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFB84A]/25 bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={20} />
              </div>

              <h3 className="text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
