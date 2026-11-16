import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <main className="w-full bg-[#030809] text-white">
      {/* HEADER SECTION */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
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

        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(227,33,50,0.06),transparent_65%)]" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
            <span className="h-2 w-2 rounded-full bg-[#E32132] shadow-[0_0_8px_#E32132] animate-pulse" />
            TERMS OF SERVICE
          </div>

          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Terms & Conditions<span className="text-[#E32132]">.</span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/50">
            <span>Last Updated: November 16, 2026</span>
            <span>•</span>
            <span>Kodanda Media Private Limited</span>
          </div>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section className="w-full pb-24 sm:pb-28 lg:pb-32">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="rounded-[28px] border border-white/10 bg-[#0a1113]/90 p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-xl">
            <div className="prose prose-invert max-w-none space-y-10 text-sm sm:text-base leading-relaxed text-white/70">
              {/* Acceptance */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  1. Agreement to Terms
                </h2>
                <p className="mt-3">
                  These Terms and Conditions constitute a legally binding agreement made between you
                  (&ldquo;Client&rdquo;) and Kodanda Media Private Limited (&ldquo;KMEDIAHQ&rdquo;, &ldquo;we&rdquo;,
                  or &ldquo;us&rdquo;), governing your access to our website and our professional video editing,
                  post-production, and distribution services. By onboarding or paying an invoice, you accept
                  and agree to these terms.
                </p>
              </div>

              {/* Scope of Services */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  2. Scope of Creative Services
                </h2>
                <p className="mt-3">
                  KMEDIAHQ provides post-production services including short-form video editing, long-form
                  YouTube editing, multi-camera podcast production, UGC performance ad editing, motion graphics,
                  and content distribution. Specific deliverables, quantities, and scopes are defined in your
                  monthly retainer agreement or discovery scope document.
                </p>
              </div>

              {/* Turnaround & Revisions */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  3. Turnaround Times & Feedback Cycles
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/60">
                  <li>
                    <strong className="text-white">Short-form Edits (Reels/Shorts/TikToks):</strong> Standard
                    turnaround is 24 to 48 business hours per batch from the receipt of raw footage and briefs.
                  </li>
                  <li>
                    <strong className="text-white">Long-form Videos & YouTube Essays:</strong> Standard
                    turnaround is 3 to 5 business days for first cut delivery.
                  </li>
                  <li>
                    <strong className="text-white">Revisions:</strong> Each deliverable includes reasonable
                    editorial adjustments (pacing, captions, sound FX, color trims). Revisions are submitted
                    asynchronously through Frame.io or dedicated Slack channels. Fundamental script changes or
                    re-shoots requested after initial assembly may incur an out-of-scope surcharge.
                  </li>
                </ul>
              </div>

              {/* Intellectual Property Rights */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  4. Intellectual Property & Complete Asset Ownership
                </h2>
                <p className="mt-3">
                  We believe creators and brands should own their creative assets unconditionally:
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#060c0e] p-6 space-y-3 text-xs sm:text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-[#E32132] shrink-0" />
                    <span>
                      <strong className="text-white">Full Rights Assignment:</strong> Upon receipt of full payment for the relevant billing cycle, KMEDIAHQ irrevocably transfers and assigns to the Client 100% of all copyrights, titles, and rights in the finalized exported video files.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-[#E32132] shrink-0" />
                    <span>
                      <strong className="text-white">Client Materials:</strong> The Client warrants that all raw footage, music licenses, and graphics provided to KMEDIAHQ are owned by the Client or properly licensed.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-[#E32132] shrink-0" />
                    <span>
                      <strong className="text-white">Portfolio Rights:</strong> Unless a signed NDA specifically prohibits it, KMEDIAHQ reserves the right to display published, non-confidential video deliverables solely in our portfolio and marketing reels.
                    </span>
                  </div>
                </div>
              </div>

              {/* Billing and Invoicing */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  5. Retainers, Payments & Invoicing
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/60">
                  <li>
                    Monthly retainers are billed in advance at the start of each 30-day service cycle.
                  </li>
                  <li>
                    Payments must be settled within 7 days of invoice issue to maintain continuous editor allocation.
                  </li>
                  <li>
                    Unused monthly quotas do not roll over indefinitely unless mutually agreed in writing.
                  </li>
                </ul>
              </div>

              {/* Pauses and Cancellation */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  6. Pauses & Cancellation Policy
                </h2>
                <p className="mt-3">
                  We value long-term partnerships built on trust. Clients may cancel or pause recurring retainers at any time by providing 14 days written notice prior to their next billing date. Work in progress will be rendered and completed through the end of the active paid period.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  7. Limitation of Liability
                </h2>
                <p className="mt-3">
                  To the maximum extent permitted by applicable law, KMEDIAHQ shall not be liable for indirect, incidental, or consequential damages resulting from algorithmic changes, platform suspensions, or third-party service outages. Our total liability for any claim shall not exceed the amount paid by the Client to KMEDIAHQ in the two months preceding the event.
                </p>
              </div>

              {/* Governing Law */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  8. Governing Law & Jurisdiction
                </h2>
                <p className="mt-3">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any dispute arising out of this agreement shall be submitted to binding arbitration in accordance with applicable arbitration rules.
                </p>
              </div>

              {/* Contact Information */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  9. Inquiries Regarding Terms
                </h2>
                <p className="mt-3">
                  For questions or enterprise contract customization, please reach out to our legal team:
                </p>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs sm:text-sm">
                  <p className="font-semibold text-white">Kodanda Media Private Limited</p>
                  <p className="mt-1 text-white/60">
                    Email:{" "}
                    <a href="mailto:info@kodandamedia.com" className="text-[#FFB84A] hover:underline">
                      info@kodandamedia.com
                    </a>
                  </p>
                  <p className="text-white/60">Phone: +91 8085082069</p>
                </div>
              </div>
            </div>

            {/* Back Navigation */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
              <Link
                to="/legal"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition"
              >
                <ArrowLeft size={14} /> Back to Legal Hub
              </Link>

              <Link
                to="/privacy-policy"
                className="text-xs font-semibold text-[#FFB84A] hover:text-white transition"
              >
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
