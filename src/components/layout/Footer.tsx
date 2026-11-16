import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Book a Call", path: "/booking" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030809] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 border-b border-white/10 pb-12 sm:pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight"
            >
              KMEDIA<span className="text-[#E32132]">HQ.</span>
            </Link>

            <p className="mt-4 sm:mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              The content production and distribution partner for ambitious
              founders and brands.
            </p>

            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
              Content. Storytelling. Production. Distribution.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Explore
            </h3>

            <div className="mt-4 sm:mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm text-white/65 transition hover:text-[#FFB84A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
              Get in touch
            </h3>

            <div className="mt-4 sm:mt-5 flex flex-col gap-3.5">
              <a
                href="mailto:info@kodandamedia.com"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Mail size={16} className="text-[#FFB84A]" />
                info@kodandamedia.com
              </a>

              <a
                href="tel:+918085082069"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Phone size={16} className="text-[#FFB84A]" />
                +91 8085082069
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-6 sm:pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} K Media. All rights reserved.</p>

          <div className="flex flex-wrap gap-5 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions" className="hover:text-white transition">
              Terms & Conditions
            </Link>

            <Link to="/legal" className="hover:text-white transition">
              Legal Hub
            </Link>
          </div>

          <Link
            to="/"
            className="flex items-center gap-1.5 font-bold text-white transition hover:text-[#FFB84A]"
          >
            KMEDIAHQ <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
