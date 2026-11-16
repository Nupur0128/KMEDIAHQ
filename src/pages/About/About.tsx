import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  Flame,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "50M+", label: "Organic views driven for clients" },
  { value: "1,500+", label: "Videos produced & distributed" },
  { value: "99.4%", label: "On-time delivery rate" },
  { value: "24-48h", label: "Average short-form turnaround" },
];

const values = [
  {
    icon: Flame,
    title: "Story First, Retention Always",
    text: "Viral hooks get the click, but real narrative depth builds authority. We engineer every edit so viewers watch to the end and remember who made it.",
  },
  {
    icon: Sparkles,
    title: "Uncompromising Editorial Craft",
    text: "From microscopic audio cleanup and kinetic typography to cinematic pacing and color grading, no amateur shortcuts ever leave our timeline.",
  },
  {
    icon: Clock,
    title: "Speed Without Chaos",
    text: "Our async production system ensures steady, predictable delivery every single week. No missed deadlines, no disappearing editors, no guesswork.",
  },
  {
    icon: Layers,
    title: "Omnichannel Distribution Engine",
    text: "Great ideas deserve maximum surface area. We repurpose one core recording into platform-native YouTube, Reels, Shorts, and LinkedIn assets.",
  },
];

const teamMembers = [
  {
    name: "Creative Direction",
    role: "Narrative & Visual Identity",
    bio: "Setting the cinematic tone, pacing rules, and branding standards for every creator and company we partner with.",
  },
  {
    name: "Long-Form & YouTube Leads",
    role: "Storytelling & Retention Editing",
    bio: "Structuring YouTube essays, podcasts, and deep dives to maintain high average percentage viewed (APV).",
  },
  {
    name: "Short-Form Motion Team",
    role: "Vertical Dynamics & Animation",
    bio: "Crafting platform-native Reels, Shorts, and TikTok cutdowns equipped with kinetic motion and custom sound design.",
  },
  {
    name: "Distribution & Growth Ops",
    role: "Packaging, Metadata & Scheduling",
    bio: "A/B testing titles, packaging thumbnails, and coordinating multi-platform scheduling so content reaches the right audience.",
  },
];

export default function About() {
  return (
    <main className="w-full bg-[#030809] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "76px 76px",
          }}
        />

        {/* Radial Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(227,33,50,0.08),transparent_60%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            ABOUT KMEDIAHQ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            A dedicated content engine built for{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              high-growth brands.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            We are the production and distribution team behind ambitious
            founders, fast-moving creators, and modern digital businesses. We turn
            raw thoughts and recordings into a predictable, high-impact media presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10"
          >
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E32132] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(227,33,50,0.4)] transition-all duration-300 hover:bg-white hover:text-[#030809] sm:text-sm"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 text-xs font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/[0.08] sm:text-sm"
            >
              <span>View Client Work</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="w-full border-y border-white/10 bg-[#060c0e] py-14 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="font-heading text-3xl font-extrabold tracking-tight text-[#FFB84A] sm:text-4xl lg:text-5xl">
                  {item.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50 sm:text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY / MISSION SECTION */}
      <section className="w-full py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Our Mission
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
              Eliminating the friction between{" "}
              <span className="font-serif italic text-[#FFB84A]">
                having great ideas
              </span>{" "}
              and publishing them.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
              Most leaders and creators face the exact same bottleneck: you have
              deep expertise, unique insights, and great stories to share, but the
              endless hours required to cut, color, subtitle, package, and distribute
              prevent you from staying consistent.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
              Traditional agencies are too bureaucratic, bloated, and slow. Freelance
              marketplaces deliver inconsistent quality and disappear unexpectedly.
              KMEDIAHQ was engineered from day one as a streamlined, dedicated
              growth partner that operates with relentless reliability.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                "Direct Slack/Discord communication with your dedicated editing team",
                "Asynchronous review workflows powered by Frame.io",
                "Full ownership of all raw project files and rendered exports",
                "Agile production sprints with guaranteed delivery windows",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 size={17} className="shrink-0 text-[#E32132]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-[#0a1113] p-8 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E32132]/10 text-[#E32132]">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">The KMEDIAHQ Standard</h3>
                <p className="text-xs text-white/45">Enterprise-grade creative operations</p>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/60">
              <p>
                “We believe the best media brand wins. In 2026 and beyond, authority
                isn't bought through display banners—it is earned through honest,
                compelling video that respects the viewer's time.”
              </p>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs">
                <span className="font-bold text-[#FFB84A]">Kodanda Media Private Limited</span>
                <span className="block mt-1 text-white/40">Registered Media & Content Production Agency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OPERATING VALUES */}
      <section className="w-full bg-[#050a0c] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Operating Principles
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              How we approach every <span className="font-serif italic text-[#FFB84A]">single frame.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55">
              Four fundamental values guide our editing suites, distribution strategies, and client relationships.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/10 bg-[#0a1113]/90 p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FFB84A]/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A] transition group-hover:bg-[#E32132]/10 group-hover:text-[#E32132]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{val.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">{val.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW OUR TEAM IS STRUCTURED */}
      <section className="w-full py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
                The Specialists
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Dedicated talent, <span className="font-serif italic text-[#FFB84A]">zero outsourcing chaos.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/50">
              When you work with KMEDIAHQ, you don't get a random generalist. You get specialized editors, motion designers, and strategists working in sync.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#E32132]">
                  <Users size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-[#060c0e] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 text-center">
          <div className="rounded-[32px] border border-white/10 bg-[#0a1113] p-8 sm:p-14 shadow-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Get Started Today
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to elevate your <span className="font-serif italic text-[#FFB84A]">content operation?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/60">
              Book a 30-minute discovery call to review your current media workflows and learn how we can take over your production.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E32132] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(227,33,50,0.4)] transition hover:bg-white hover:text-[#030809] sm:text-sm"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white sm:text-sm"
              >
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
