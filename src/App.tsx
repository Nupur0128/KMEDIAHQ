import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Legal from "./pages/Legal/Legal";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsConditions from "./pages/Legal/TermsConditions";
import Partnership from "./pages/Partnership/Partnership";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#030809] px-5 py-20 text-white">
      <div className="text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E32132]">
          Error 404
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-semibold">
          Page Not Found<span className="text-[#E32132]">.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
          The page you are looking for has been moved or does not exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#E32132] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(227,33,50,0.35)] hover:bg-white hover:text-[#030809] transition"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#030809] text-white">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Services />} />
            <Route path="/work" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/partners" element={<Partnership />} />
            <Route path="/global-partner" element={<Partnership />} />
            <Route path="/creators" element={<Partnership />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
