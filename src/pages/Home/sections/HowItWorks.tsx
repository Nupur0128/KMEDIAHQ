
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
    <section className="w-full bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32 box-border">
      <div
        className="w-full"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="w-full md:max-w-[650px]">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
              How it works
            </p>

            <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl lg:text-6xl">
              A clear path from{" "}
              <span className="font-serif italic text-[#FFB84A]">
                idea to impact.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45">
            A straightforward partnership, built around a repeatable process
            and clear communication.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text], i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative min-w-0 rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl italic text-[#FFB84A]">
                  {number}
                </span>

                {i < 3 && (
                  <ArrowDownRight
                    className="text-white/25 md:hidden"
                    size={20}
                  />
                )}
              </div>

              <h3 className="mt-9 text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {text}
              </p>

              {i < 3 && (
                <div className="absolute -right-3 top-10 z-10 hidden h-px w-6 bg-[#FFB84A]/40 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
