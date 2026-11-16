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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap text-sm font-medium transition-colors duration-200 hover:text-[#E32132] ${
      isActive ? "text-[#E32132]" : "text-white/85"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#030809]/95 backdrop-blur-md text-white">
        {/* NAVBAR CONTAINER */}
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            className="shrink-0 whitespace-nowrap text-2xl font-extrabold tracking-tight"
          >
            KMEDIA<span className="text-[#E32132]">HQ.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative flex h-20 items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className={`flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors hover:text-[#E32132] ${
                  servicesOpen ? "text-[#E32132]" : "text-white/85"
                }`}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full z-[60] w-72 rounded-xl border border-white/10 bg-[#091214] p-2 shadow-2xl backdrop-blur-xl">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between rounded-lg border-b border-white/10 px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-[#E32132] transition hover:bg-white/5"
                  >
                    Explore All Services
                    <ArrowUpRight size={15} />
                  </Link>

                  <div className="mt-1 flex flex-col gap-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setServicesOpen(false)}
                        className="rounded-lg px-3.5 py-2.5 text-xs font-medium text-white/75 transition-all duration-200 hover:bg-white/5 hover:text-white"
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
            className="group hidden shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#E32132] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#030809] lg:inline-flex"
          >
            Start a Project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#E32132] hover:text-[#E32132] lg:hidden"
          >
            <Menu size={20} />
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
