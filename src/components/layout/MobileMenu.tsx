import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Partnership", path: "/partnership" },
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#030809] text-white lg:hidden overflow-y-auto"
        >
          {/* TOP BAR */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-8">
            <Link
              to="/"
              onClick={onClose}
              className="font-heading text-2xl font-extrabold tracking-tight"
            >
              KMEDIA<span className="text-[#E32132]">HQ.</span>
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#E32132] hover:text-[#E32132]"
            >
              <X size={20} />
            </button>
          </div>

          {/* NAV LINKS */}
          <nav className="flex flex-col px-5 sm:px-8 pt-6 sm:pt-8">
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center justify-between border-b border-white/10 py-4 sm:py-5 font-heading text-2xl sm:text-3xl font-semibold transition hover:text-[#FFB84A]"
                >
                  {link.name}
                  <ArrowUpRight
                    size={20}
                    className="text-[#FFB84A]"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* BOTTOM CTA */}
          <div className="mt-auto px-5 sm:px-8 py-8">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex h-12 w-full items-center justify-between rounded-full bg-[#E32132] px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#030809]"
            >
              <span>Book a discovery call</span>
              <ArrowUpRight size={18} />
            </Link>

            <p className="mt-5 text-center text-[10px] uppercase tracking-[0.2em] text-white/35">
              Content. Storytelling. Production. Distribution.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
