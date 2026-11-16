import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";

function Booking() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#030809] px-5 py-20 text-white">
      <div className="text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#FFB84A]">
          KMEDIAHQ
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-semibold">
          Let's Talk About Your Content.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/55">
          Our discovery call booking experience is coming soon.
        </p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#030809] px-5 py-20 text-white">
      <div className="text-center">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold">
          404 — Page Not Found
        </h1>
        <p className="mt-4 text-sm text-white/50">
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#030809] text-white">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
