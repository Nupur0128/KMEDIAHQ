import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Globe2,
  Handshake,
  Layers,
  Megaphone,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What exactly does a Country Growth Partner do on a day-to-day basis?",
    answer:
      "As a Country Growth Partner, you operate as the entrepreneurial leader of K Media in your assigned territory. Your dual responsibilities include business development (reaching out to local founders, creators, D2C brands, and agencies to sign video clients) and content operations (repurposing their footage, editing high-retention vertical videos, coordinating distribution, and managing social channels).",
  },
  {
    question: "How does territory exclusivity work?",
    answer:
      "K Media is committed to protecting our partners' hard work. Subject to your partnership agreement and ongoing performance metrics, we appoint only one exclusive Country Growth Partner per approved country/territory. All inbound client inquiries and leads originating from your territory are routed directly to you.",
  },
  {
    question: "How does the revenue-sharing model work?",
    answer:
      "Partners earn a pre-agreed percentage share of all eligible revenue collected from clients acquired and serviced within their territory. Because our client engagements are typically recurring monthly retainers, partners build compounding monthly cash flow. Exact revenue splits and payment schedules are formally established in your individualized Partnership Agreement.",
  },
  {
    question: "What is the 90-Day Trial period?",
    answer:
      "Following your interview and agreement signing, you enter a structured 90-day onboarding and trial period. During these 90 days, K Media provides intensive operational training, sales playbooks, editing templates, and direct mentorship. This allows both parties to validate operational synergy, turnaround quality, and client acquisition pacing.",
  },
  {
    question: "Can I apply if I currently have freelance clients or another job?",
    answer:
      "Yes. Many of our strongest applicants are existing freelance editors or agency operators who want institutional backing, global brand power, and proven editing systems. You can specify your weekly availability (from part-time 15–20 hours/week to full-time 40+ hours/week) in the application.",
  },
  {
    question: "What resources and support does K Media provide to partners?",
    answer:
      "Partners receive access to our global brand assets, marketing collateral, pitch decks, Frame.io review licenses, standard operating procedure (SOP) libraries, contract templates, sound effects & motion graphics vaults, and a dedicated private Slack channel with K Media executive leadership.",
  },
  {
    question: "Which countries are eligible for the program?",
    answer:
      "The program is 100% borderless and open to candidates worldwide. We do not restrict applications to pre-selected markets. Whether you reside in North America, Europe, Asia, Latin America, the Middle East, or Africa, we encourage you to apply.",
  },
];

const whoCanApply = [
  {
    icon: Scissors,
    title: "Video Editors & Motion Designers",
    description:
      "Proficient in Premiere Pro, DaVinci Resolve, or After Effects with an obsessive eye for retention, pacing, sound design, and viral vertical formatting.",
  },
  {
    icon: Video,
    title: "Content Creators & Videographers",
    description:
      "Experienced with on-camera presentation, narrative storytelling, and scripting who understand what makes an audience engage and convert.",
  },
  {
    icon: Megaphone,
    title: "Social Media Managers & Strategists",
    description:
      "Experts in short-form algorithms, multi-platform publishing cadence, SEO caption copywriting, and community growth across YouTube, TikTok, and Instagram.",
  },
  {
    icon: Briefcase,
    title: "Agency Freelancers & BD Closers",
    description:
      "Hungry business developers who have experience pitching, closing retainers, and managing client accounts with professionalism and punctuality.",
  },
];

const roadmapSteps = [
  {
    step: "01",
    name: "Apply",
    timeline: "Step 1",
    title: "Application Submission",
    description:
      "Complete the comprehensive application below, showcasing your portfolio, editing craft, territory preference, and professional background.",
  },
  {
    step: "02",
    name: "Selection",
    timeline: "Step 2",
    title: "Portfolio & Craft Review",
    description:
      "Our creative and growth directors thoroughly review your work, checking for storytelling depth, technical execution, and commercial viability.",
  },
  {
    step: "03",
    name: "Interview",
    timeline: "Step 3",
    title: "Strategy Video Interview",
    description:
      "A 30-minute 1-on-1 video call with K Media leadership to discuss your local market opportunity, target clients, and mutual expectations.",
  },
  {
    step: "04",
    name: "Agreement",
    timeline: "Step 4",
    title: "Partnership Agreement",
    description:
      "We formalize your exclusive territory, revenue-share percentages, performance milestones, and client hand-off protocols in writing.",
  },
  {
    step: "05",
    name: "Onboarding",
    timeline: "Step 5",
    title: "System Onboarding & Tools",
    description:
      "Gain full access to K Media pitch assets, motion design presets, client agreement templates, Frame.io workspaces, and leadership Slack channels.",
  },
  {
    step: "06",
    name: "Trial Sprint",
    timeline: "Step 6",
    title: "90-Day Performance Sprint",
    description:
      "Work closely with our team to acquire and service your initial cohort of country clients, solidifying your permanent territory status.",
  },
];

const responsibilities = [
  {
    icon: Users,
    title: "1. Client Acquisition & Growth",
    description:
      "Identify, pitch, and sign ambitious businesses, founders, creators, D2C brands, and professional teams in your assigned country who need world-class video production.",
  },
  {
    icon: Scissors,
    title: "2. Content Repurposing",
    description:
      "Transform long-form podcasts, webinars, keynote speeches, and raw footage into platform-native short-form clips engineered for maximum organic reach.",
  },
  {
    icon: Layers,
    title: "3. Distribution & Page Management",
    description:
      "Manage social media accounts, coordinate multi-platform posting schedules, optimize thumbnails and metadata, and keep client distribution flywheels running every week.",
  },
  {
    icon: Handshake,
    title: "4. Client Communication & Care",
    description:
      "Act as the trusted primary regional contact for your clients, gathering feedback, handling revisions smoothly, and building high-retention long-term relationships.",
  },
  {
    icon: Globe2,
    title: "5. K Media Territory Footprint",
    description:
      "Build K Media's local brand presence on social media and industry communities within your country, establishing our studio as the premier video growth authority.",
  },
];

export default function Partnership() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    countryResidence: "",
    preferredTerritory: "",
    portfolioLink: "",
    videoEditingExp: "2-4 years (Advanced)",
    socialMediaExp: "1-3 years",
    salesExp: "Some experience closing deals",
    weeklyAvailability: "20-30 hours / week",
    whyJoin: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.countryResidence) return;
    setSubmitted(true);
  };

  const scrollToApply = () => {
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-[#030809] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32">
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

        {/* Radial Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(227,33,50,0.09),transparent_60%)]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#FFB84A]/[0.04] blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            GLOBAL CREATOR PARTNERSHIP PROGRAM
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-5xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl leading-[1.08]"
          >
            Create Locally{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              Grow Globally
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg sm:leading-8"
          >
            We are recruiting entrepreneurial{" "}
            <strong className="text-white">Country Growth Partners</strong> worldwide. Lead client
            acquisition, content repurposing, and distribution in your exclusive territory—backed by
            K Media&rsquo;s global brand, infrastructure, and revenue-sharing model.
          </motion.p>

          {/* Key Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-white/75"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1113] px-4 py-2">
              <Globe2 size={14} className="text-[#E32132]" />
              Open to All Countries Worldwide
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1113] px-4 py-2">
              <ShieldCheck size={14} className="text-[#FFB84A]" />
              Exclusive Territory Rights
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a1113] px-4 py-2">
              <DollarSign size={14} className="text-[#E32132]" />
              Compounding Revenue-Sharing
            </span>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={scrollToApply}
              className="inline-flex items-center gap-3 rounded-full bg-[#E32132] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(227,33,50,0.4)] transition-all duration-300 hover:bg-white hover:text-[#030809] sm:text-sm"
            >
              <span>Apply to Become a Country Growth Partner</span>
              <ArrowDownRightIcon />
            </button>

            <a
              href="#about-program"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-xs font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/[0.08] sm:text-sm"
            >
              <span>Explore Partnership Model</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT THE PROGRAM & VISION */}
      <section id="about-program" className="w-full border-t border-white/10 bg-[#060c0e] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
                The Vision
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
                Building a worldwide network of{" "}
                <span className="font-serif italic text-[#FFB84A]">creator entrepreneurs.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
                Digital media is borderless, but the most trusted commercial relationships are built
                on local presence and cultural understanding. Rather than operating as an isolated,
                centralized agency, K Media is building an international alliance of top-tier Country
                Growth Partners.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                You bring local energy, regional market access, language fluency, and creative
                execution. We provide the institutional foundation: proven video frameworks,
                enterprise pitch decks, centralized motion libraries, Frame.io review infrastructure,
                and direct mentorship from our leadership team.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-heading text-2xl font-bold text-[#FFB84A] sm:text-3xl">
                    1 Partner
                  </div>
                  <p className="mt-1 text-xs text-white/50">Appointed per approved territory</p>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-[#E32132] sm:text-3xl">
                    Global
                  </div>
                  <p className="mt-1 text-xs text-white/50">Unrestricted worldwide applications</p>
                </div>
              </div>
            </div>

            {/* Vision Right Card */}
            <div className="rounded-[32px] border border-white/10 bg-[#0a1113] p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E32132]/10 text-[#E32132]">
                  <Globe2 size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    The Country Partner Advantage
                  </h3>
                  <p className="text-xs text-white/45">Why this model outperforms solo freelancing</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "No need to build an agency brand from scratch — leverage K Media's track record",
                  "Pitch with verified client case studies, view metrics, and production frameworks",
                  "Retain client relationships in your country with recurring revenue share",
                  "Access to our private editing asset vaults, sound libraries, and motion presets",
                  "Protected territory status with all regional inquiries forwarded directly to you",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-white/75">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#E32132]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU'LL DO (CORE RESPONSIBILITIES) */}
      <section className="w-full py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Operational Ownership
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              What you&rsquo;ll do as a{" "}
              <span className="font-serif italic text-[#FFB84A]">Country Growth Partner.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55">
              Partners own both business development and content operations in their assigned country.
              Here are your five core responsibilities:
            </p>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((resp, i) => {
              const Icon = resp.icon;
              return (
                <div
                  key={resp.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0a1113]/90 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB84A]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                >
                  <div>
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#FFB84A]/10 text-[#FFB84A] transition group-hover:bg-[#E32132]/10 group-hover:text-[#E32132]">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white">{resp.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{resp.description}</p>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4 text-[11px] font-bold uppercase tracking-wider text-white/40 group-hover:text-[#FFB84A] transition">
                    Pillar 0{i + 1}
                  </div>
                </div>
              );
            })}

            {/* Bonus Card: Complete Alignment */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#E32132]/40 bg-[#0d1518] p-8 shadow-[0_0_40px_rgba(227,33,50,0.12)]">
              <div>
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#E32132] text-white shadow-[0_0_20px_rgba(227,33,50,0.5)]">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  6. High-Earning Autonomy
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  You operate with the freedom of an independent entrepreneur while benefiting from the
                  credibility, systems, and backing of a recognized international media agency.
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#E32132]">
                Guaranteed Territory Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (ROADMAP: APPLY -> 90-DAY TRIAL) */}
      <section className="w-full bg-[#05090b] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Selection Process
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              From application to{" "}
              <span className="font-serif italic text-[#FFB84A]">exclusive territory.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55">
              Our 6-stage roadmap ensures only the most committed and capable partners represent K
              Media in their nation.
            </p>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-[#0a1113] p-7 transition hover:border-white/25"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-[#E32132]">
                    {item.step}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FFB84A]">
                    {item.timeline}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL OPPORTUNITIES (WORLDWIDE UNRESTRICTED) */}
      <section className="w-full py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-[36px] border border-white/10 bg-[#070e10] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#E32132]/[0.08] blur-[120px]" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                <Globe2 size={14} /> Open to Every Country Worldwide
              </div>

              <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-[1.12]">
                We do not limit this program to selected markets.
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
                Whether you are in the United States, United Kingdom, Canada, Australia, Germany,
                Singapore, United Arab Emirates, Brazil, India, Nigeria, South Africa, or anywhere
                else—every growing market has thousands of ambitious founders and businesses eager to
                scale their content.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 text-xs text-white/70">
                {[
                  "North America",
                  "Europe & UK",
                  "Middle East & GCC",
                  "Asia-Pacific",
                  "Latin America",
                  "Africa",
                ].map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-medium"
                  >
                    {region}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs text-white/50">
                  <strong className="text-white">Note:</strong> Because we appoint only{" "}
                  <span className="text-[#E32132]">one exclusive Growth Partner</span> per approved
                  territory, early applicants receive priority review for their country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVENUE SHARING SECTION */}
      <section className="w-full bg-[#060c0e] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
                Transparent Compensation
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Earn a generous share of{" "}
                <span className="font-serif italic text-[#FFB84A]">every client dollar.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
                We believe in true partnership. You are not treated as an underpaid freelancer—you earn
                a direct, substantial percentage share of eligible revenue collected from every client
                signed and serviced in your assigned territory.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 text-sm text-white/75">
                  <Check size={18} className="mt-0.5 text-[#E32132] shrink-0" strokeWidth={2.5} />
                  <span>
                    <strong className="text-white">Monthly Retainer Compounding:</strong> Because our
                    video editing packages are recurring monthly contracts, your earnings compound as
                    you add more active accounts.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/75">
                  <Check size={18} className="mt-0.5 text-[#E32132] shrink-0" strokeWidth={2.5} />
                  <span>
                    <strong className="text-white">Defined in Individual Agreements:</strong> Exact
                    percentages, milestone bonuses, and payout schedules are locked into your formal
                    Partnership Agreement before you begin.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/75">
                  <Check size={18} className="mt-0.5 text-[#E32132] shrink-0" strokeWidth={2.5} />
                  <span>
                    <strong className="text-white">Zero Capital Investment:</strong> There are no
                    franchise fees, training paywalls, or software license costs to join.
                  </span>
                </div>
              </div>
            </div>

            {/* Compensation Card */}
            <div className="rounded-[32px] border border-white/10 bg-[#0a1113] p-8 sm:p-10 shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB84A]">
                The Economic Framework
              </span>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                How Partner Earnings Work
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#05090b] p-5">
                  <span className="text-xs font-bold text-[#E32132]">01 • Client Closes</span>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">
                    You identify and sign a monthly video editing retainer client in your territory
                    using K Media pitch collateral and contracts.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#05090b] p-5">
                  <span className="text-xs font-bold text-[#FFB84A]">02 • Creative Execution</span>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">
                    You oversee editing, motion design, and weekly distribution using K Media
                    workflows, review portals, and templates.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#05090b] p-5">
                  <span className="text-xs font-bold text-[#E32132]">03 • Revenue Share Payout</span>
                  <p className="mt-1 text-xs sm:text-sm text-white/60">
                    Upon client invoice collection, your agreed revenue-share is disbursed promptly via
                    wire transfer, Wise, or crypto each billing cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO CAN APPLY */}
      <section className="w-full py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Applicant Profiles
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Who should apply to{" "}
              <span className="font-serif italic text-[#FFB84A]">this program?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55">
              We are seeking self-motivated professionals with craft skills and commercial hunger.
            </p>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoCanApply.map((profile) => {
              const Icon = profile.icon;
              return (
                <div
                  key={profile.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E32132]/10 text-[#E32132]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-semibold text-white">
                    {profile.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/50">
                    {profile.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="w-full bg-[#05090b] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Everything you need to know.
            </h2>
          </div>

          <div className="mt-12 sm:mt-16 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-[#0a1113] transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#FFB84A] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 pb-6 pt-4 text-xs sm:text-sm leading-relaxed text-white/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. APPLICATION FORM SECTION */}
      <section id="apply" className="w-full py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#0a1113]/95 p-8 sm:p-12 md:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#E32132]">
                Official Candidate Intake
              </span>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white">
                Apply to Become a{" "}
                <span className="font-serif italic text-[#FFB84A]">Country Growth Partner.</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                Please complete all fields carefully. Applications are reviewed by K Media
                leadership, and qualified candidates receive an automated confirmation email and an
                invitation to interview.
              </p>
            </div>

            {submitted ? (
              <div className="mt-12 py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E32132]/20 text-[#E32132]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold sm:text-3xl text-white">
                  Application Successfully Received!
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm text-white/65 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your
                  application to represent{" "}
                  <strong className="text-[#FFB84A]">
                    {formData.preferredTerritory || formData.countryResidence}
                  </strong>{" "}
                  has been submitted to K Media admissions. We have sent an automated confirmation
                  email to <strong className="text-white">{formData.email}</strong>.
                </p>
                <div className="mt-4 text-xs text-white/40">
                  Expected review timeline: 3 to 5 business days.
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold hover:bg-white/10 text-white"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                {/* 1. Basic Info */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Full Legal Name <span className="text-[#E32132]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Email Address <span className="text-[#E32132]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@example.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 2. WhatsApp & Country */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      WhatsApp Number (with Country Code) <span className="text-[#E32132]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+1 (555) 000-0000 or +44 7..."
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Country of Residence <span className="text-[#E32132]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.countryResidence}
                      onChange={(e) =>
                        setFormData({ ...formData, countryResidence: e.target.value })
                      }
                      placeholder="e.g. United Kingdom, Germany, Brazil"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 3. Preferred Territory & Portfolio */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Preferred Country / Territory to Lead <span className="text-[#E32132]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.preferredTerritory}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTerritory: e.target.value })
                      }
                      placeholder="e.g. United Kingdom (Exclusive)"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Portfolio / Showreel Link <span className="text-[#E32132]">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.portfolioLink}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolioLink: e.target.value })
                      }
                      placeholder="https://drive.google.com/... or Behance / YouTube"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 4. Experience Levels */}
                <div className="grid gap-5 sm:grid-cols-3 border-t border-white/10 pt-6">
                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Video Editing Experience
                    </label>
                    <select
                      value={formData.videoEditingExp}
                      onChange={(e) =>
                        setFormData({ ...formData, videoEditingExp: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#060c0e] px-3.5 py-3 text-xs text-white focus:border-[#E32132] focus:outline-none"
                    >
                      <option value="1-2 years (Intermediate)">1-2 years (Intermediate)</option>
                      <option value="2-4 years (Advanced)">2-4 years (Advanced)</option>
                      <option value="5+ years (Master / Lead)">5+ years (Master / Lead)</option>
                      <option value="Agency Owner">Agency Owner / Studio Lead</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Social Media Management
                    </label>
                    <select
                      value={formData.socialMediaExp}
                      onChange={(e) =>
                        setFormData({ ...formData, socialMediaExp: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#060c0e] px-3.5 py-3 text-xs text-white focus:border-[#E32132] focus:outline-none"
                    >
                      <option value="Under 1 year">Under 1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Sales & BD Experience
                    </label>
                    <select
                      value={formData.salesExp}
                      onChange={(e) => setFormData({ ...formData, salesExp: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#060c0e] px-3.5 py-3 text-xs text-white focus:border-[#E32132] focus:outline-none"
                    >
                      <option value="None / Willing to learn">None / Willing to learn</option>
                      <option value="Some experience closing deals">
                        Some experience closing deals
                      </option>
                      <option value="Proven freelance closer">Proven freelance closer</option>
                      <option value="Seasoned B2B Sales Pro">Seasoned B2B Sales Pro</option>
                    </select>
                  </div>
                </div>

                {/* 5. Weekly Availability */}
                <div>
                  <label className="block text-xs font-medium text-white/80">
                    Weekly Time Availability Dedicated to K Media
                  </label>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      "10-15 hrs/wk (Part-time)",
                      "20-30 hrs/wk (Half-time)",
                      "30-40 hrs/wk (Full-time)",
                      "40+ hrs/wk (Agency Focus)",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, weeklyAvailability: opt })}
                        className={`rounded-xl border py-2.5 px-2 text-center text-xs font-medium transition ${formData.weeklyAvailability === opt
                            ? "border-[#E32132] bg-[#E32132] text-white font-bold shadow-[0_0_12px_rgba(227,33,50,0.4)]"
                            : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Why Join */}
                <div>
                  <label className="block text-xs font-medium text-white/80">
                    Why do you want to join K Media as a Country Growth Partner?{" "}
                    <span className="text-[#E32132]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                    placeholder="Tell us about your background, what excites you about leading your country's territory, and your strategy to acquire video editing clients..."
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#E32132] focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#E32132] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(227,33,50,0.4)] transition hover:bg-white hover:text-[#030809] sm:text-sm"
                >
                  <span>Submit Partnership Application</span>
                  <Send size={16} />
                </button>

                <p className="text-center text-[11px] text-white/40">
                  By submitting, you confirm the accuracy of your details. Your application will be
                  treated with strict confidentiality.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. FINAL BOTTOM BANNER */}
      <section className="w-full border-t border-white/10 bg-[#060c0e] py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl text-white">
            Have questions before applying?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/55">
            Reach out to our partnership coordination team at{" "}
            <a href="mailto:info@kodandamedia.com" className="text-[#FFB84A] hover:underline">
              info@kodandamedia.com
            </a>{" "}
            or WhatsApp us at{" "}
            <a href="tel:+918085082069" className="text-[#FFB84A] hover:underline">
              +91 8085082069
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

function ArrowDownRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7l10 10M17 7v10H7" />
    </svg>
  );
}
