
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const services = [
  { name: "Short-form Video Editing", path: "/services/short-form-video-editing" },
  { name: "Long-form Video Editing", path: "/services/long-form-video-editing" },
  { name: "Podcast Editing", path: "/services/podcast-editing" },
  { name: "UGC Video Services", path: "/services/ugc-video-services" },
  { name: "Content Distribution", path: "/services/content-distribution" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap text-[15px] font-medium transition-colors duration-200 hover:text-[#E32132] ${
      isActive ? "text-[#E32132]" : "text-white"
    }`;

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#101010] text-white"
        style={{ boxSizing: "border-box" }}
      >
        {/* NAVBAR CONTAINER */}
        <div
          className="relative mx-auto flex h-[82px] w-full items-center justify-between"
          style={{
            maxWidth: "1720px",
            paddingLeft: "clamp(20px, 4vw, 64px)",
            paddingRight: "clamp(20px, 4vw, 64px)",
            boxSizing: "border-box",
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="shrink-0 whitespace-nowrap text-[27px] font-extrabold tracking-[-1.8px]"
          >
            KMEDIA<span className="text-[#E32132]">HQ.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
            style={{ gap: "clamp(24px, 3vw, 48px)" }}
          >
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>

            {/* SERVICES */}
            <div
              className="relative flex h-[82px] items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className={`flex items-center gap-2 whitespace-nowrap text-[15px] font-medium transition-colors hover:text-[#E32132] ${
                  servicesOpen ? "text-[#E32132]" : "text-white"
                }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-1/2 top-full z-[60] -translate-x-1/2 border border-white/10 bg-[#191919] shadow-2xl"
                  style={{
                    width: "310px",
                    padding: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 text-[13px] font-bold uppercase tracking-wide text-[#E32132] transition hover:bg-white/5"
                    style={{
                      padding: "15px 14px",
                      marginBottom: "7px",
                    }}
                  >
                    Explore All Services
                    <ArrowUpRight size={17} />
                  </Link>

                  <div className="flex flex-col">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setServicesOpen(false)}
                        className="rounded-sm text-[14px] font-medium text-white/75 transition-all duration-200 hover:bg-white/5 hover:text-white"
                        style={{
                          padding: "12px 14px",
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/work" className={linkStyle}>
              Portfolio
            </NavLink>

            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </nav>

          {/* DESKTOP CTA */}
          <Link
            to="/contact"
            className="group hidden shrink-0 items-center justify-center gap-4 rounded-full bg-[#E32132] text-[13px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#101010] lg:flex"
            style={{
              minHeight: "48px",
              padding: "0 23px",
            }}
          >
            Start a Project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#E32132] hover:text-[#E32132] lg:hidden"
          >
            <Menu size={23} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
