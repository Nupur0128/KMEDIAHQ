import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    q: "What kind of content does KMEDIAHQ work on?",
    a: "We support content operations across long-form video, podcasts, short-form clips, social-first assets, editing and distribution workflows. The exact mix depends on your goals and audience.",
  },
  {
    q: "Can you work with footage we already have?",
    a: "Yes. We can work with existing footage and assets, understand what is available, and plan edits or repurposed content around them.",
  },
  {
    q: "Do you only work with YouTube content?",
    a: "No. YouTube can be one part of the plan, but content can also be prepared for Instagram, LinkedIn and other relevant platforms.",
  },
  {
    q: "How does the engagement start?",
    a: "We begin with a discovery conversation to understand your business, goals, content needs and current workflow. From there, we recommend a suitable scope.",
  },
  {
    q: "How is pricing decided?",
    a: "Pricing depends on the scope, formats, volume, complexity and level of ongoing support. We confirm the details after understanding what you need.",
  },
  {
    q: "Can you support ongoing monthly content?",
    a: "Yes. We can discuss a recurring workflow with agreed deliverables, timelines, review steps and communication.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        {/* Left Content */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Frequently asked questions
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            A few things you may{" "}
            <span className="font-serif italic text-[#FFB84A]">
              want to know.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-white/50">
            Still have a question? Start a conversation and tell us what you
            are looking to build.
          </p>
        </div>

        {/* Right Content - FAQ Accordion */}
        <div className="min-w-0 divide-y divide-white/10 border-y border-white/10">
          {questions.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-[#FFB84A]"
              >
                <span className="text-base font-medium text-white/90">
                  {item.q}
                </span>

                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#FFB84A] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-5 pr-4 sm:pr-6 text-sm leading-relaxed text-white/50">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
