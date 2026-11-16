import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Lightbulb,
  MonitorPlay,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    icon: Lightbulb,
    title: "Strategy & direction",
    text: "Connect the content plan to your audience, positioning and business goals.",
  },
  {
    icon: Clapperboard,
    title: "Creative & storytelling",
    text: "Find the strongest angle and shape it into a compelling narrative.",
  },
  {
    icon: MonitorPlay,
    title: "Editing & production",
    text: "Bring each asset to life with considered pacing, design and detail.",
  },
  {
    icon: Workflow,
    title: "Delivery & distribution",
    text: "Keep files, formats and publishing workflows organised and consistent.",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            The people behind the process
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            A connected team for{" "}
            <span className="font-serif italic text-[#FFB84A]">
              every moving part.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/50">
            Great content takes different skills working in sync. Our model
            brings strategic thinking, creative craft and reliable execution
            together around your brand.
          </p>

          <Link
            to="/about"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 text-sm font-semibold text-[#FFB84A] transition-all hover:gap-3.5"
          >
            <span>Get to know us</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
          {roles.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition duration-300 hover:border-[#FFB84A]/30 hover:bg-white/[0.04]"
            >
              <div className="mb-5 sm:mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={20} />
              </div>

              <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
