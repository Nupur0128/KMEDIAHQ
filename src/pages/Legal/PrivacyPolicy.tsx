import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
            LEGAL DOCUMENTATION
          </div>

          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Privacy Policy<span className="text-[#E32132]">.</span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/50">
            <span>Effective Date: November 16, 2026</span>
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
              {/* Introduction */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  1. Introduction & Scope
                </h2>
                <p className="mt-3">
                  Kodanda Media Private Limited (&ldquo;KMEDIAHQ&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
                  operates the website{" "}
                  <a href="https://kmediahq.com" className="text-[#FFB84A] underline hover:text-white">
                    kmediahq.com
                  </a>{" "}
                  and provides professional video editing, post-production, motion graphics, and content
                  distribution services. This Privacy Policy outlines our standards for collecting,
                  handling, and protecting personal data and proprietary client media.
                </p>
              </div>

              {/* Information Collected */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  2. Information We Collect
                </h2>
                <p className="mt-3">
                  When you visit our site, book a discovery call, or engage our creative services, we may collect:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/60">
                  <li>
                    <strong className="text-white">Contact & Account Details:</strong> Name, work email address,
                    phone number, company name, and social media handles.
                  </li>
                  <li>
                    <strong className="text-white">Client Media & Raw Assets:</strong> Video footage, audio
                    recordings, graphics, brand logos, scripts, and production briefs uploaded for editing.
                  </li>
                  <li>
                    <strong className="text-white">Billing Information:</strong> Business registration details,
                    invoicing addresses, and transaction confirmations. All credit card transactions are processed securely via PCI-compliant payment gateways; we never store raw card numbers.
                  </li>
                  <li>
                    <strong className="text-white">Usage & Diagnostic Data:</strong> IP address, browser type,
                    device identifiers, and referral sources to monitor system performance and prevent abuse.
                  </li>
                </ul>
              </div>

              {/* Media Confidentiality */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  3. Client Footage & Media Confidentiality
                </h2>
                <p className="mt-3">
                  We understand that your raw video and audio files frequently contain sensitive, pre-launch, or proprietary company material. We enforce strict confidentiality standards:
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#060c0e] p-6 space-y-3 text-xs sm:text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#E32132] shrink-0" />
                    <span>
                      <strong className="text-white">No Public Showcasing Without Approval:</strong> We will never upload, exhibit, or share your raw footage or final videos as portfolio pieces without your explicit written approval.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#E32132] shrink-0" />
                    <span>
                      <strong className="text-white">Access-Restricted Workstations:</strong> Only assigned editors, colorists, and project managers have access to your dedicated workspace folders.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 text-[#E32132] shrink-0" />
                    <span>
                      <strong className="text-white">Non-Disclosure Agreements:</strong> We routinely sign mutual NDAs prior to file ingestion upon client request.
                    </span>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  4. How We Use Your Information
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/60">
                  <li>Delivering, editing, and rendering agreed video deliverables.</li>
                  <li>Coordinating revisions, delivery timelines, and feedback sessions via Frame.io or Slack.</li>
                  <li>Issuing invoices, project agreements, and transactional notices.</li>
                  <li>Optimizing our web interface and evaluating marketing campaign efficacy.</li>
                </ul>
              </div>

              {/* Third-Party Service Providers */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  5. Third-Party Service Providers
                </h2>
                <p className="mt-3">
                  We do not sell, rent, or trade your personal information. We only share necessary data with trusted cloud providers required to execute operations, such as:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/60">
                  <li>Cloud storage and asset review platforms (Google Drive, Dropbox, Frame.io).</li>
                  <li>Communication and project management systems (Slack, Notion).</li>
                  <li>Payment processors and accounting software for compliant tax invoicing.</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  6. Data Retention & Archival
                </h2>
                <p className="mt-3">
                  Raw footage and completed video projects are retained on our secure cloud storage for 60 days following final sign-off to facilitate any subsequent revisions. Clients may request expedited deletion or long-term cold archive storage at any time.
                </p>
              </div>

              {/* Your Rights */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  7. Your Rights
                </h2>
                <p className="mt-3">
                  Depending on your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections, or ask for total deletion of your personal records and files.
                </p>
              </div>

              {/* Contact Information */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  8. Contact & Data Officer
                </h2>
                <p className="mt-3">
                  If you have questions regarding this Privacy Policy or wish to exercise data rights, reach out to our legal department:
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
                to="/terms-and-conditions"
                className="text-xs font-semibold text-[#FFB84A] hover:text-white transition"
              >
                View Terms & Conditions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
