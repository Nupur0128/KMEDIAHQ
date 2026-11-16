
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
    <section className="w-full box-border bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div
        className="mx-auto grid w-full min-w-0 gap-12 lg:grid-cols-[.85fr_1.15fr]"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            The people behind the process
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl">
            A connected team for{" "}
            <span className="font-serif italic text-[#FFB84A]">
              every moving part.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50">
            Great content takes different skills working in sync. Our model
            brings strategic thinking, creative craft and reliable execution
            together around your brand.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#FFB84A] transition-all hover:gap-5"
          >
            Get to know us
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {roles.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[.03] p-7"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={21} />
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
