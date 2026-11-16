
import { motion } from "framer-motion";
import { Aperture, AudioLines, Captions, WandSparkles } from "lucide-react";

const capabilities = [
  {
    icon: Aperture,
    title: "Visual direction",
    text: "A clear visual language that makes your content feel recognisable and intentional.",
  },
  {
    icon: AudioLines,
    title: "Sound & pacing",
    text: "Music, sound design and rhythm that keep the story moving.",
  },
  {
    icon: Captions,
    title: "Motion & detail",
    text: "Titles, captions, transitions and graphics that support the message.",
  },
  {
    icon: WandSparkles,
    title: "Platform polish",
    text: "The finishing details that help each asset feel native to its destination.",
  },
];

export default function CreativeExecution() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050d0e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32 box-border">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#FFB84A]/[.06] blur-[120px]" />

      {/* Centered Content Container */}
      <div
        className="relative w-full"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        {/* Section Heading */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Creative execution
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Thoughtful craft.{" "}
            <span className="font-serif italic text-[#FFB84A]">
              Distinctive output.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55">
            Good content is more than a clean edit. We bring together story,
            design and detail to make every deliverable feel considered.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-0 rounded-2xl border border-white/10 bg-[#030809]/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FFB84A]/40"
            >
              <Icon
                className="mb-9 text-[#FFB84A]"
                size={25}
                strokeWidth={1.5}
              />

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
