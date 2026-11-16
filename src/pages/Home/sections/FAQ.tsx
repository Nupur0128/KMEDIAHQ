
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
    <section className="w-full box-border bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

      {/* Centered Content Container */}
      <div
        className="grid w-full min-w-0 gap-12 lg:grid-cols-[.75fr_1.25fr]"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >

        {/* Left Content */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Frequently asked questions
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl">
            A few things you may{" "}
            <span className="font-serif italic text-[#FFB84A]">
              want to know.
            </span>
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
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
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
              >
                <span className="text-base font-medium text-white/85 sm:text-lg">
                  {item.q}
                </span>

                <ChevronDown
                  size={19}
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-white/50">
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
