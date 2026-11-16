import { motion } from "framer-motion";
import { Check, Compass, Gauge, MessageCircle, Target } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Strategy before output",
    text: "Every deliverable has a purpose, audience and role in the bigger picture.",
  },
  {
    icon: MessageCircle,
    title: "One connected partner",
    text: "Keep planning, creative and production moving in the same direction.",
  },
  {
    icon: Gauge,
    title: "A consistent content engine",
    text: "Build a repeatable rhythm instead of relying on one-off bursts.",
  },
  {
    icon: Target,
    title: "Built around your goals",
    text: "Focus on attention, authority and meaningful business growth.",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050d0e] py-20 sm:py-24 lg:py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,184,74,.07),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="w-full max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Why KMEDIAHQ
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            More than content.{" "}
            <span className="font-serif italic text-[#FFB84A]">
              A growth partner.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/55">
            We bring the moving parts of content together, giving your brand the
            clarity and consistency to show up with confidence.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid min-w-0 gap-5 sm:gap-6 md:grid-cols-2">
          {values.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex min-w-0 items-start gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-[#030809]/60 p-6 sm:p-7 transition duration-300 hover:border-[#FFB84A]/30"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-[#FFB84A]/25 bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={20} />
              </div>

              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                  <Check size={15} className="shrink-0 text-[#FFB84A]" />
                  <span>{title}</span>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
