import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const channels = [
  {
    icon: FaYoutube,
    name: "YouTube",
    note: "Long-form, Shorts & channel content",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    note: "Reels, stories & social-first edits",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    note: "Founder-led & authority-building content",
  },
];

export default function Distribution() {
  return (
    <section className="w-full bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
        {/* Left Content */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Distribution that connects
          </p>

          <h2 className="mt-3 sm:mt-4 max-w-xl font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            The right story,{" "}
            <span className="font-serif italic text-[#FFB84A]">
              in the right place.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/55">
            Publishing is not the finish line. We shape each asset for the
            platform, audience and moment it is meant to reach—then help keep
            your content moving consistently.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#FFB84A] px-6 text-sm font-semibold text-[#030809] transition hover:-translate-y-0.5 hover:bg-[#FFD078]"
          >
            <span>Build your content system</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Right Content */}
        <div className="min-w-0">
          <div className="space-y-4">
            {channels.map(({ icon: Icon, name, note }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex min-w-0 items-center gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 transition duration-300 hover:border-[#FFB84A]/40 hover:bg-[#FFB84A]/[0.04]"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A]">
                  <Icon size={20} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{name}</h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-white/45">
                    {note}
                  </p>
                </div>

                <ArrowUpRight
                  className="ml-auto shrink-0 text-white/30"
                  size={18}
                />
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-white/35">
            Channel mix is tailored to your audience and goals—not every
            platform needs to be part of every plan.
          </p>
        </div>
      </div>
    </section>
  );
}
