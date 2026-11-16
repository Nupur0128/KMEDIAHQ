import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const steps = [
  [
    "01",
    "Discover",
    "We learn about your business, audience, goals and current content workflow.",
  ],
  [
    "02",
    "Plan",
    "We shape the content direction, formats, priorities and a practical delivery plan.",
  ],
  [
    "03",
    "Create",
    "Our team handles the creative execution, editing and asset preparation.",
  ],
  [
    "04",
    "Distribute",
    "We prepare content for the right channels and keep the system moving.",
  ],
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="w-full md:max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              How it works
            </p>

            <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              A clear path from{" "}
              <span className="font-serif italic text-[#FFB84A]">
                idea to impact.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm sm:text-base leading-relaxed text-white/50 md:pb-1">
            A straightforward partnership, built around a repeatable process
            and clear communication.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text], i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative min-w-0 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#FFB84A]/30 hover:bg-white/[0.04]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-4xl italic text-[#FFB84A]">
                    {number}
                  </span>

                  {i < 3 && (
                    <ArrowDownRight
                      className="text-white/25 sm:hidden"
                      size={20}
                    />
                  )}
                </div>

                <h3 className="mt-6 sm:mt-7 text-lg sm:text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-2.5 sm:mt-3 text-sm leading-relaxed text-white/55">
                  {text}
                </p>
              </div>

              {i < 3 && (
                <div className="absolute -right-3 top-10 z-10 hidden h-px w-6 bg-[#FFB84A]/40 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
