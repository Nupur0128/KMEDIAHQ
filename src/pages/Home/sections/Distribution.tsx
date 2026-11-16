
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
    <section className="w-full box-border bg-[#030809] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

      {/* Centered Content Container */}
      <div
        className="grid w-full min-w-0 gap-12 lg:grid-cols-2 lg:items-center"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >

        {/* Left Content */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Distribution that connects
          </p>

          <h2 className="mt-5 max-w-xl font-heading text-4xl font-medium leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            The right story,{" "}
            <span className="font-serif italic text-[#FFB84A]">
              in the right place.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
            Publishing is not the finish line. We shape each asset for the
            platform, audience and moment it is meant to reach—then help keep
            your content moving consistently.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFB84A] px-6 py-3.5 text-sm font-semibold text-[#080808] transition hover:-translate-y-1 hover:bg-[#FFD078]"
          >
            Build your content system
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Right Content */}
        <div className="min-w-0 space-y-3">
          {channels.map(({ icon: Icon, name, note }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex min-w-0 items-center gap-5 rounded-2xl border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:border-[#FFB84A]/40 hover:bg-[#FFB84A]/[.04] sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A]">
                <Icon size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-white/45">
                  {note}
                </p>
              </div>

              <ArrowUpRight
                className="ml-auto shrink-0 text-white/30"
                size={19}
              />
            </motion.div>
          ))}

          <p className="pt-3 text-xs leading-6 text-white/35">
            Channel mix is tailored to your audience and goals—not every
            platform needs to be part of every plan.
          </p>
        </div>

      </div>
    </section>
  );
}
