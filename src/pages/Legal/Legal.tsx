import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Scale,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Legal() {
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

        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(227,33,50,0.08),transparent_65%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            LEGAL, TRUST & COMPLIANCE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Transparent agreements &{" "}
            <span className="font-serif italic font-normal text-[#FFB84A]">
              100% client asset ownership.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Clear, honest terms designed to protect your brand, ensure confidentiality, and make collaborating with our production studio effortless.
          </motion.p>
        </div>
      </section>

      {/* THREE CORE LEGAL PILLARS */}
      <section className="w-full pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Privacy Policy Card */}
            <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#0a1113] p-8 shadow-xl transition hover:border-white/25">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E32132]/10 text-[#E32132]">
                  <Shield size={22} />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-semibold text-white">Privacy Policy</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Learn how we handle your personal data, secure client video footage, and uphold industry privacy standards.
                </p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
                  Last revised: November 2026
                </div>
              </div>

              <Link
                to="/privacy-policy"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFB84A] hover:text-white transition"
              >
                <span>Read Privacy Policy</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Terms and Conditions Card */}
            <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#0a1113] p-8 shadow-xl transition hover:border-white/25">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFB84A]/10 text-[#FFB84A]">
                  <Scale size={22} />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-semibold text-white">Terms & Conditions</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Our operational service agreements, revision rules, turnaround expectations, billing terms, and cancellation policies.
                </p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
                  Standard Agency Engagement Agreement
                </div>
              </div>

              <Link
                to="/terms-and-conditions"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFB84A] hover:text-white transition"
              >
                <span>Read Terms & Conditions</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* IP & Asset Ownership Card */}
            <div className="flex flex-col justify-between rounded-[28px] border border-[#E32132]/30 bg-[#0d1518] p-8 shadow-xl transition hover:border-[#E32132]/60">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E32132] text-white shadow-[0_0_15px_rgba(227,33,50,0.5)]">
                  <Lock size={22} />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-semibold text-white">IP & Ownership</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  You retain 100% ownership of all finished video deliverables, project files, and source footage upon full invoice payment.
                </p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-[#FFB84A]">
                  Guaranteed Full Intellectual Rights Transfer
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <CheckCircle2 size={16} className="text-[#E32132]" />
                <span>Zero Licensing Royalties</span>
              </div>
            </div>
          </div>

          {/* CONFIDENTIALITY SECTION */}
          <div className="mt-16 rounded-[32px] border border-white/10 bg-[#060c0e] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
                  Strict Confidentiality
                </span>
                <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl text-white">
                  Mutual Non-Disclosure (NDA) Standard
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                  Many of our clients share unreleased product footage, pre-launch startup announcements, and proprietary company insights. We will gladly sign your company’s custom NDA or provide our standard mutual confidentiality agreement before any file transfers occur.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-[#0a1113] p-6 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#E32132] shrink-0" />
                  <span>Secure encrypted Google Drive / Frame.io storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#E32132] shrink-0" />
                  <span>Footage never shared publicly without written client approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#E32132] shrink-0" />
                  <span>Automatic archival or deletion upon contract completion upon request</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT INQUIRIES */}
          <div className="mt-12 text-center text-xs text-white/40">
            For legal inquiries, NDA requests, or compliance questions, please contact{" "}
            <a href="mailto:info@kodandamedia.com" className="text-[#FFB84A] underline hover:text-white">
              info@kodandamedia.com
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
