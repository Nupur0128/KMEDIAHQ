import { motion } from "framer-motion";
import {
  Building2,
  BriefcaseBusiness,
  Clapperboard,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const audiences = [
  { icon: Building2, label: "Growing businesses" },
  { icon: UserRound, label: "Founders & creators" },
  { icon: ShoppingBag, label: "D2C & e-commerce brands" },
  { icon: BriefcaseBusiness, label: "Professional teams" },
  { icon: Clapperboard, label: "Media-led brands" },
];

export default function TrustedBy() {
  return (
    <section className="w-full border-y border-white/10 bg-[#030809] py-14 sm:py-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]/70">
          Built to support ambitious teams
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:justify-between"
        >
          {audiences.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-white/60"
            >
              <Icon
                size={18}
                className="shrink-0 text-[#FFB84A]"
                strokeWidth={1.5}
              />
              {label}
            </div>
          ))}
        </motion.div>

        <p className="mt-7 text-center text-[11px] text-white/30">
          Add approved client logos here when brand permissions and final assets
          are available.
        </p>
      </div>
    </section>
  );
}
