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
    <section className="relative w-full overflow-hidden bg-[#050d0e] py-20 sm:py-24 lg:py-28 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#FFB84A]/[0.05] blur-[120px]" />

      {/* Centered Content Container */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Creative execution
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Thoughtful craft.{" "}
            <span className="font-serif italic text-[#FFB84A]">
              Distinctive output.
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/55">
            Good content is more than a clean edit. We bring together story,
            design and detail to make every deliverable feel considered.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-0 rounded-2xl border border-white/10 bg-[#030809]/80 p-6 sm:p-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#FFB84A]/40"
            >
              <div className="mb-5 sm:mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFB84A]/25 bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={22} strokeWidth={1.5} />
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
