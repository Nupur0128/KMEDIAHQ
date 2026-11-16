
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
    <section className="relative w-full box-border overflow-hidden bg-[#050d0e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,184,74,.07),transparent_55%)]" />

      <div
        className="relative mx-auto w-full min-w-0"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <div className="w-full max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Why KMEDIAHQ
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl lg:text-6xl">
            More than content.{" "}
            <span className="font-serif italic text-[#FFB84A]">
              A growth partner.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
            We bring the moving parts of content together, giving your brand the
            clarity and consistency to show up with confidence.
          </p>
        </div>

        <div className="mt-14 grid min-w-0 gap-4 md:grid-cols-2">
          {values.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex min-w-0 gap-5 rounded-2xl border border-white/10 bg-[#030809]/60 p-6 sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#FFB84A]/25 bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <Check size={15} className="shrink-0 text-[#FFB84A]" />
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
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
