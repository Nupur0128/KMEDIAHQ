import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

type ProjectCategory = "all" | "short" | "long" | "podcast" | "ads";

interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  metrics: string;
  description: string;
  tags: string[];
  platform: "youtube" | "instagram" | "tiktok" | "linkedin";
  gradient: string;
}

const projects: Project[] = [
  {
    id: "tech-deepdive",
    title: "The Architecture of Modern AI Engines",
    client: "Scale & Build Channel",
    category: "long",
    categoryLabel: "YouTube Long-form",
    metrics: "1.4M Views • 68% AVD",
    description:
      "A 28-minute video essay featuring 3D animated motion diagrams, customized sound design, and fast-paced documentary storytelling.",
    tags: ["Motion Design", "3D Modeling", "Color Grade", "Chapter Navigation"],
    platform: "youtube",
    gradient: "from-[#1a0f12] via-[#0b1516] to-[#040809]",
  },
  {
    id: "founder-reel-series",
    title: "10x Hiring Frameworks for Seed Founders",
    client: "Venture Collective",
    category: "short",
    categoryLabel: "Short-form Reel",
    metrics: "840K Views • 12K Shares",
    description:
      "Platform-native vertical cutdown from a podcast interview with custom kinetic typography, sound accents, and an attention-snapping opening 3 seconds.",
    tags: ["Viral Hook", "Sound FX", "Kinetic Subtitles", "9:16 Vertical"],
    platform: "instagram",
    gradient: "from-[#140b10] via-[#0b1216] to-[#030809]",
  },
  {
    id: "podcast-multi-cam",
    title: "Inside the Mind of an 8-Figure Founder",
    client: "The Operator Podcast",
    category: "podcast",
    categoryLabel: "Video Podcast",
    metrics: "520K Views • 4.9★ Rating",
    description:
      "3-camera angle live studio edit with automated switching, dynamic lower thirds, studio audio normalization, and 5 companion short teaser clips.",
    tags: ["Multi-cam", "Audio EQ", "Teaser Cutdowns", "Speaker Lower-Thirds"],
    platform: "youtube",
    gradient: "from-[#0c1214] via-[#081518] to-[#030809]",
  },
  {
    id: "ugc-performance-ad",
    title: "DTC Ergonomics 'A Day in My Routine'",
    client: "ErgoForm Global",
    category: "ads",
    categoryLabel: "UGC Performance Ad",
    metrics: "3.8x ROAS • $180K Ad Spend",
    description:
      "Hook-tested UGC direct response video ad with 4 variations of the first 3 seconds, leading to an immediate 40% reduction in customer acquisition cost.",
    tags: ["Direct Response", "Hook Variants", "Social Proof", "CTA Testing"],
    platform: "tiktok",
    gradient: "from-[#180a0a] via-[#101014] to-[#030809]",
  },
  {
    id: "finance-youtube-breakdown",
    title: "Why Wall Street Can't Stop Buying Data Centers",
    client: "Capital Insights",
    category: "long",
    categoryLabel: "YouTube Long-form",
    metrics: "2.1M Views • 18K Comments",
    description:
      "Documentary breakdown utilizing financial charts, custom B-roll sequencing, and rhythm-synced voiceover timing that kept viewer retention above 70%.",
    tags: ["Financial Graphics", "Soundtrack Mixing", "Documentary Pace"],
    platform: "youtube",
    gradient: "from-[#110f17] via-[#091114] to-[#030809]",
  },
  {
    id: "saas-launch-shorts",
    title: "The Problem with Traditional Project Management",
    client: "FlowState App",
    category: "short",
    categoryLabel: "Short-form Reel",
    metrics: "1.2M Views • 45K Saves",
    description:
      "High-energy vertical explainer utilizing sleek product screen UI popouts, animated cursor interactions, and branded micro-animations.",
    tags: ["App Mockups", "Rapid Editing", "Product Animation", "Vertical 9:16"],
    platform: "tiktok",
    gradient: "from-[#0a1415] via-[#071012] to-[#030809]",
  },
];

const impactStats = [
  { label: "Total Views Generated", value: "50,000,000+", detail: "Across client channels" },
  { label: "Average Retention Boost", value: "+38%", detail: "Compared to previous edits" },
  { label: "Delivery Punctuality", value: "99.4%", detail: "Met delivery deadlines" },
  { label: "Assets Shipped", value: "1,500+", detail: "High-grade master exports" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="w-full bg-[#030809] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
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

        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(227,33,50,0.07),transparent_65%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            FEATURED CLIENT WORK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Proof in the performance &{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              creative craft.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Browse selected client edits across YouTube documentaries, vertical
            TikTok & Reels engines, multi-camera studio podcasts, and direct
            response social ads.
          </motion.p>

          {/* Filter Categories */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { id: "all", label: "All Projects" },
              { id: "long", label: "YouTube Long-form" },
              { id: "short", label: "Short-form & Reels" },
              { id: "podcast", label: "Podcasts & Interviews" },
              { id: "ads", label: "Performance UGC & Ads" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                  activeCategory === cat.id
                    ? "bg-[#E32132] text-white shadow-[0_0_18px_rgba(227,33,50,0.5)]"
                    : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project, i) => {
                const PlatformIcon =
                  project.platform === "youtube"
                    ? FaYoutube
                    : project.platform === "instagram"
                    ? FaInstagram
                    : project.platform === "tiktok"
                    ? FaTiktok
                    : FaLinkedin;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1113]/90 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    {/* Visual Media Placeholder Area */}
                    <div
                      className={`relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md">
                          <PlatformIcon
                            size={13}
                            className={
                              project.platform === "youtube"
                                ? "text-[#E32132]"
                                : "text-[#FFB84A]"
                            }
                          />
                          {project.categoryLabel}
                        </span>

                        <span className="rounded-full bg-[#E32132]/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#E32132]">
                          Verified
                        </span>
                      </div>

                      {/* Play Action Trigger */}
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#E32132] group-hover:bg-[#E32132] group-hover:shadow-[0_0_30px_rgba(227,33,50,0.6)]">
                        <Play size={20} fill="currentColor" className="ml-1" />
                      </div>

                      {/* Metrics Pill */}
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span className="font-bold text-[#FFB84A]">{project.metrics}</span>
                        <span className="text-[11px] text-white/40">{project.client}</span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <h3 className="font-heading text-lg font-semibold leading-snug text-white transition group-hover:text-[#FFB84A]">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/55">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="w-full border-y border-white/10 bg-[#060c0e] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-heading text-3xl font-extrabold text-[#FFB84A] sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-white/40">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL CALLOUT */}
      <section className="w-full py-20 sm:py-24 lg:py-28 text-center">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#0a1113] p-8 sm:p-14 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Client Experience
            </span>
            <blockquote className="mt-6 font-serif text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-white/90">
              “KMEDIAHQ took our YouTube channel from 20k to over 250k subscribers in 8 months.
              Their edits don’t just look polished—they hold the audience’s attention from the
              first frame to the end screen.”
            </blockquote>
            <div className="mt-8">
              <p className="font-heading text-base font-semibold text-white">Editorial Partner</p>
              <p className="text-xs text-[#FFB84A]">Verified Creator Channel</p>
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E32132] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(227,33,50,0.4)] transition hover:bg-white hover:text-[#030809] sm:text-sm"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
