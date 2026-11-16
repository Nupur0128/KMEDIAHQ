
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
//import Container from "../common/Container";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// const socialLinks = [
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/",
//     Icon: Instagram,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/",
//     Icon: Linkedin,
//   },
//   {
//     label: "YouTube",
//     href: "https://www.youtube.com/",
//     Icon: Youtube,
//   },
// ];

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-heading text-3xl font-extrabold tracking-[-.07em]"
            >
              KMEDIA<span className="text-[#E32132]">HQ.</span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-white/50">
              The content production and distribution partner for ambitious
              founders and brands.
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[.15em] text-white/35">
              Content. Storytelling. Production. Distribution.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm text-white/65 transition hover:text-[#E32132]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">
              Get in touch
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <a
                href="mailto:info@kodandamedia.com"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Mail size={17} className="text-[#E32132]" />
                info@kodandamedia.com
              </a>

              <a
                href="tel:+918085082069"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Phone size={17} className="text-[#E32132]" />
                +91 8085082069
              </a>
            </div>

            {/* <div className="mt-8 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 transition hover:border-[#E32132] hover:bg-[#E32132]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-white/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} K Media. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-white"
          >
            KMEDIAHQ <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
