
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
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
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
          className="fixed inset-0 z-[100] bg-[#101010] text-white lg:hidden"
        >
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
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
              className="flex h-11 w-11 items-center justify-center border border-white/20"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-12">
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center justify-between border-b border-white/10 py-6 font-heading text-3xl font-semibold"
                >
                  {link.name}
                  <ArrowUpRight
                    size={22}
                    className="text-[#E32132]"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-6 pt-10">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex min-h-14 items-center justify-between bg-[#E32132] px-5 text-xs font-bold uppercase tracking-wider"
            >
              Book a discovery call
              <ArrowUpRight size={20} />
            </Link>

            <p className="mt-8 text-[10px] uppercase tracking-[.2em] text-white/35">
              Content. Storytelling. Production. Distribution.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
