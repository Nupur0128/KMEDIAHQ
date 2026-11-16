
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Content Essentials",
    intro: "For brands building a consistent content rhythm.",
    items: [
      "Defined monthly content scope",
      "Editing and creative execution",
      "Platform-ready deliverables",
      "Clear review and delivery workflow",
    ],
    featured: false,
  },
  {
    name: "Growth Partner",
    intro: "For teams ready to scale their content operation.",
    items: [
      "Everything in Essentials",
      "Multi-format content repurposing",
      "Content planning and coordination",
      "Ongoing creative optimisation",
    ],
    featured: true,
  },
  {
    name: "Full Content Engine",
    intro: "For brands that need an end-to-end content partner.",
    items: [
      "Strategy and production support",
      "Long-form and short-form assets",
      "Distribution workflow support",
      "Dedicated scope and reporting cadence",
    ],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section className="w-full box-border bg-[#050d0e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div
        className="mx-auto w-full min-w-0"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Ways to work together
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl lg:text-6xl">
            The right support for{" "}
            <span className="font-serif italic text-[#FFB84A]">
              your next stage.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-white/50">
            Every content operation is different. Start with a direction and we
            will shape the scope around your goals.
          </p>
        </div>

        <div className="mt-14 grid min-w-0 gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex min-w-0 flex-col rounded-2xl border p-7 sm:p-8 ${
                plan.featured
                  ? "border-[#FFB84A]/55 bg-[#FFB84A]/[.07]"
                  : "border-white/10 bg-white/[.025]"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-[#FFB84A] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-[#080808]">
                  Popular direction
                </span>
              )}

              <h3 className="pr-24 text-xl font-semibold">{plan.name}</h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-white/50">
                {plan.intro}
              </p>

              <div className="my-7 h-px bg-white/10" />

              <p className="text-xs font-bold uppercase tracking-[.15em] text-[#FFB84A]">
                Potential inclusions
              </p>

              <ul className="mt-5 flex-1 space-y-4">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-white/70"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#FFB84A]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-[#FFB84A] text-[#080808] hover:bg-[#FFD078]"
                    : "border border-white/15 text-white hover:border-[#FFB84A]/50 hover:text-[#FFB84A]"
                }`}
              >
                Discuss this package
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/35">
          These are starting engagement directions, not fixed-price packages.
          Final scope and pricing are agreed after discovery.
        </p>
      </div>
    </section>
  );
}
