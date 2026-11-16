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
    <section className="relative w-full overflow-hidden bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
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
      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="min-w-0"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            One idea. More impact.
          </p>

          <h2 className="mt-3 sm:mt-4 max-w-xl font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Make every piece of content{" "}
            <span className="font-serif italic text-[#FFB84A]">
              work harder.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-white/55">
            We turn your core content into a connected library of platform-ready
            assets—so your best ideas reach more people without starting from
            scratch every time.
          </p>

          <Link
            to="/services"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 text-sm font-semibold text-[#E32132] transition-all hover:gap-3.5 hover:text-white"
          >
            <span>Explore content services</span>
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* Right Content Cards */}
        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
          {formats.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#FFB84A]/40 hover:bg-[#FFB84A]/[0.05]"
            >
              <div className="mb-5 sm:mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFB84A]/25 bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={20} />
              </div>

              <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

              <p className="mt-2 sm:mt-2.5 text-sm leading-relaxed text-white/50">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
