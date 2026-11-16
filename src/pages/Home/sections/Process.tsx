import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  MessagesSquare,
} from "lucide-react";

const phases = [
  {
    icon: MessagesSquare,
    title: "Kick-off & alignment",
    detail:
      "Agree on goals, stakeholders, communication and what success should look like.",
  },
  {
    icon: CalendarDays,
    title: "Content planning",
    detail:
      "Set priorities, formats, timelines and the upcoming production schedule.",
  },
  {
    icon: FileCheck2,
    title: "Production & review",
    detail:
      "Create the assets, share review links and refine against the agreed direction.",
  },
  {
    icon: CheckCircle2,
    title: "Delivery & learning",
    detail:
      "Organise final files, prepare publishing assets and use feedback to improve the next cycle.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-[#050d0e] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            The workflow
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            A process designed to keep{" "}
            <span className="font-serif italic text-[#FFB84A]">
              work flowing.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/50">
            You always know what is happening, what is needed and what comes
            next.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 grid min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#FFB84A]/30 to-transparent lg:block" />

          {phases.map(({ icon: Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative min-w-0 rounded-2xl border border-white/10 bg-[#030809]/60 p-6 transition duration-300 hover:border-white/20"
            >
              <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[#FFB84A]/30 bg-[#101817] text-[#FFB84A]">
                <Icon size={22} />
              </div>

              <p className="mt-5 sm:mt-6 text-xs font-bold tracking-[0.16em] text-[#FFB84A]">
                PHASE 0{i + 1}
              </p>

              <h3 className="mt-2 text-base sm:text-lg font-semibold">{title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
