
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
            The workflow
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl">
            A process designed to keep{" "}
            <span className="font-serif italic text-[#FFB84A]">
              work flowing.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-white/50">
            You always know what is happening, what is needed and what comes
            next.
          </p>
        </div>

        <div className="relative mt-16 grid min-w-0 gap-8 md:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#FFB84A]/35 to-transparent md:block" />

          {phases.map(({ icon: Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative min-w-0"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFB84A]/30 bg-[#101817] text-[#FFB84A]">
                <Icon size={22} />
              </div>

              <p className="mt-7 text-xs font-bold tracking-[.16em] text-[#FFB84A]">
                PHASE 0{i + 1}
              </p>

              <h3 className="mt-3 text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
