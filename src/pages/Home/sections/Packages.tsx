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
    <section className="w-full bg-[#050d0e] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Ways to work together
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            The right support for{" "}
            <span className="font-serif italic text-[#FFB84A]">
              your next stage.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/50">
            Every content operation is different. Start with a direction and we
            will shape the scope around your goals.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid min-w-0 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex min-w-0 flex-col justify-between rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-[#E32132]/50 bg-[#E32132]/[0.05] shadow-[0_0_40px_rgba(227,33,50,0.12)]"
                  : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div>
                {plan.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#E32132] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(227,33,50,0.5)]">
                    Popular direction
                  </span>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                  {plan.intro}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                  Potential inclusions
                </p>

                <ul className="mt-4 space-y-3.5">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#FFB84A]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-[#E32132] text-white hover:bg-white hover:text-[#030809] shadow-[0_0_20px_rgba(227,33,50,0.35)]"
                    : "border border-white/20 text-white hover:border-[#FFB84A]/50 hover:text-[#FFB84A]"
                }`}
              >
                <span>Discuss this package</span>
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/35">
          These are starting engagement directions, not fixed-price packages.
          Final scope and pricing are agreed after discovery.
        </p>
      </div>
    </section>
  );
}
