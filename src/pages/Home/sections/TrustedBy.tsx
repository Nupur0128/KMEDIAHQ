
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
    <section className="w-full border-y border-white/[.07] bg-[#030809] px-5 py-16 text-white sm:px-8 lg:px-12 box-border">
      <div
        className="w-full"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <p className="text-center text-[10px] font-bold uppercase tracking-[.22em] text-white/35">
          Built to support ambitious teams
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 lg:justify-between"
        >
          {audiences.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-sm font-medium text-white/55"
            >
              <Icon
                size={19}
                className="shrink-0 text-[#FFB84A]/80"
                strokeWidth={1.5}
              />
              {label}
            </div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-[11px] text-white/25">
          Add approved client logos here when brand permissions and final assets
          are available.
        </p>
      </div>
    </section>
  );
}
