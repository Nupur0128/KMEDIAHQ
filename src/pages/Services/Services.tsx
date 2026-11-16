import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clapperboard,
  Film,
  Headphones,
  Megaphone,
  Share2,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const serviceCategories = [
  {
    id: "short-form-video-editing",
    name: "Short-form Video Editing",
    tagline: "Reels, TikToks & YouTube Shorts engineered for high retention",
    icon: Film,
    description:
      "We turn raw smartphone recordings, podcast snippets, or webinar highlights into hyper-engaging vertical videos that stop thumbs in the first 2 seconds.",
    deliverables: [
      "Custom branded kinetic captions & animated typography",
      "Dynamic zooms, punch-ins, sound effects & foley design",
      "Curated B-roll, memes, motion graphics, and illustrative overlays",
      "3-5 hook variations per video for algorithmic A/B testing",
      "Ready-to-post 9:16 vertical exports with burned-in subtitles",
    ],
    idealFor: "Founders, personal brands, educators, and e-commerce companies.",
    turnaround: "24 – 48 Hours",
    channels: [FaInstagram, FaTiktok, FaYoutube],
  },
  {
    id: "long-form-video-editing",
    name: "Long-form Video Editing",
    tagline: "Cinematic YouTube essays, deep dives & documentary-style stories",
    icon: Clapperboard,
    description:
      "Transform long recordings into captivating visual narratives. We structure your story, control pacing, and incorporate motion graphics to elevate average view duration (AVD).",
    deliverables: [
      "Full narrative assembly, trimming dead air, and pacing control",
      "Cinema-grade color grading and multi-track audio leveling",
      "Custom 2D/3D motion graphics, charts, and screen mockups",
      "Platform chapter markers, lower thirds, and call-to-action cards",
      "Clean source exports, XML project archive, and thumbnail concept drafts",
    ],
    idealFor: "YouTube creators, software demos, thought leaders, and business podcasts.",
    turnaround: "3 – 5 Days",
    channels: [FaYoutube, FaLinkedin],
  },
  {
    id: "podcast-editing",
    name: "Podcast Editing & Production",
    tagline: "Multi-cam switching, broadcast audio & viral snippet extraction",
    icon: Headphones,
    description:
      "A complete post-production suite for video and audio podcasts. We handle multi-angle camera switching, background noise cleanup, and cut each episode into a viral asset flywheel.",
    deliverables: [
      "Multi-camera angle switching matching speaker cadence",
      "Studio audio cleanup: hum reduction, EQ balancing, de-essing, loudness norm",
      "Episode intro/outro title motion design and sponsor integration",
      "3 to 6 platform-ready short-form teaser reels per episode",
      "Full RSS-ready audio master (.WAV/.MP3) + 4K YouTube video master",
    ],
    idealFor: "Interview shows, executive roundtables, and branded audio series.",
    turnaround: "48 – 72 Hours",
    channels: [FaYoutube, FaLinkedin, FaInstagram],
  },
  {
    id: "ugc-video-services",
    name: "UGC Video & Performance Ads",
    tagline: "Direct-response creative crafted to drive purchases and installs",
    icon: Megaphone,
    description:
      "Combine authentic creator-style user generated content with battle-tested direct response advertising frameworks. Perfect for Meta, TikTok Spark, and Pinterest ad campaigns.",
    deliverables: [
      "Problem-agitation-solution storyboard alignment",
      "Direct-response visual hooks tested for sub-1% drop-off",
      "Engaging text overlays, feature callouts, and testimonial call-cards",
      "Multiple CTA ending variants tailored for prospecting vs. retargeting",
      "1:1 and 9:16 ad variants optimized for paid media ad managers",
    ],
    idealFor: "D2C brands, mobile apps, SaaS founders, and e-commerce agencies.",
    turnaround: "48 Hours",
    channels: [FaInstagram, FaTiktok],
  },
  {
    id: "content-distribution",
    name: "Content Distribution & Growth",
    tagline: "End-to-end publishing, thumbnail optimization & omnichannel syndication",
    icon: Share2,
    description:
      "Creating great video is only half the battle. We package, schedule, and distribute your content across all relevant channels so every asset achieves its full reach.",
    deliverables: [
      "High-CTR YouTube thumbnail design (A/B testing package)",
      "SEO-optimized titles, video descriptions, and keyword tags",
      "Platform-native caption copywriting for LinkedIn and Instagram",
      "Weekly distribution scheduling and automated workflow publishing",
      "Monthly performance scorecard analyzing views, retention, and conversions",
    ],
    idealFor: "Busy teams seeking a hands-off, fully managed content engine.",
    turnaround: "Continuous Weekly Rhythm",
    channels: [FaYoutube, FaInstagram, FaLinkedin, FaTiktok],
  },
];

const packages = [
  {
    name: "Content Essentials",
    description: "Ideal for founders and creators establishing their baseline cadence.",
    features: [
      "12-16 Short-form edited videos per month",
      "Dedicated editor & creative project manager",
      "48-hour standard turnaround time",
      "Full captioning, foley & motion typography",
      "Unlimited revisions within scope",
    ],
    popular: false,
  },
  {
    name: "Growth Partner",
    description: "The complete content engine for scaling brands and serious creators.",
    features: [
      "24-30 Short-form videos + 4 Long-form episodes",
      "Omnichannel distribution & thumbnail design",
      "Multi-cam podcast or interview editing",
      "Weekly editorial strategy & retention audits",
      "Priority 24-hour turnaround on urgent drops",
      "Direct dedicated Slack/Discord channel",
    ],
    popular: true,
  },
  {
    name: "Full Media Ops",
    description: "Comprehensive end-to-end media operations for corporate teams.",
    features: [
      "Unlimited video editing requests (active queue)",
      "Custom 2D/3D motion graphics & title sequences",
      "Performance UGC ad creative & A/B variants",
      "Complete channel management & multi-platform publishing",
      "Quarterly on-site shoot planning & strategy direction",
    ],
    popular: false,
  },
];

export default function Services() {
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState(serviceId || "all");

  const displayedServices =
    activeTab === "all"
      ? serviceCategories
      : serviceCategories.filter((s) => s.id === activeTab);

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

        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,184,74,0.06),transparent_65%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            END-TO-END CREATIVE SERVICES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Precision video editing &{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              omnichannel distribution.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Whether you need daily high-retention short clips or deep-dive
            cinematic YouTube films, our specialized post-production teams turn
            your content into a high-converting growth asset.
          </motion.p>

          {/* Quick Filter Navigation */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                activeTab === "all"
                  ? "bg-white text-[#030809]"
                  : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              All Services
            </button>

            {serviceCategories.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(s.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                  activeTab === s.id
                    ? "bg-[#E32132] text-white shadow-[0_0_15px_rgba(227,33,50,0.5)]"
                    : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`relative grid gap-10 rounded-[32px] border border-white/10 bg-[#0a1113]/90 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 shadow-[0_20px_70px_rgba(0,0,0,0.4)] ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={isReversed ? "lg:col-start-2" : ""}>
                  <div className="inline-flex items-center gap-2 rounded-xl bg-[#E32132]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E32132]">
                    <Icon size={15} />
                    <span>0{index + 1} / Service</span>
                  </div>

                  <h2 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl lg:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-[#FFB84A]">{service.tagline}</p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Target Channels
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      {service.channels.map((ChannelIcon, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70"
                        >
                          <ChannelIcon size={18} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#E32132] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(227,33,50,0.35)] transition hover:bg-white hover:text-[#030809]"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight size={15} />
                    </Link>

                    <div className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-white/60">
                      <Zap size={14} className="text-[#FFB84A]" />
                      <span>Turnaround: <strong className="text-white">{service.turnaround}</strong></span>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-2xl border border-white/10 bg-[#05090b] p-6 sm:p-8 ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                      Key Deliverables & Inclusions
                    </span>
                    <Sparkles size={16} className="text-[#FFB84A]" />
                  </div>

                  <ul className="mt-6 space-y-4">
                    {service.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-white/75">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E32132]/20 text-[#E32132]">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="leading-relaxed">{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/50">
                    <span className="font-semibold text-white/80">Ideal for: </span>
                    {service.idealFor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PACKAGES COMPARISON SECTION */}
      <section className="w-full bg-[#060c0e] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Engagement Models
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Flexible scopes, <span className="font-serif italic text-[#FFB84A]">predictable monthly pricing.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55">
              Choose a starting tier or let us tailor a bespoke scope to fit your exact weekly production volume.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between rounded-3xl border p-8 transition-all ${
                  pkg.popular
                    ? "border-[#E32132]/60 bg-[#0c1417] shadow-[0_0_50px_rgba(227,33,50,0.15)]"
                    : "border-white/10 bg-[#080f11] hover:border-white/20"
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="absolute -top-3.5 right-8 rounded-full bg-[#E32132] px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(227,33,50,0.6)]">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{pkg.description}</p>

                  <div className="my-6 h-px bg-white/10" />

                  <p className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                    Scope Inclusions
                  </p>

                  <ul className="mt-4 space-y-3.5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-white/70">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#E32132]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-wider transition ${
                    pkg.popular
                      ? "bg-[#E32132] text-white shadow-[0_0_20px_rgba(227,33,50,0.4)] hover:bg-white hover:text-[#030809]"
                      : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
                  }`}
                >
                  <span>Select Plan Direction</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-20 sm:py-24 lg:py-28 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Have a custom workflow in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/55">
            We frequently build tailored production pods for agencies, creator networks, and enterprise teams. Tell us your goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E32132] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(227,33,50,0.4)] transition hover:bg-white hover:text-[#030809] sm:text-sm"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
