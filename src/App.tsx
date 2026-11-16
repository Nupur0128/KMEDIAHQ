
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";

function Booking() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-brand-light px-5">
      <div className="text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-red">
          KMEDIAHQ
        </p>

        <h1 className="font-heading text-4xl font-semibold">
          Let's Talk About Your Content.
        </h1>

        <p className="mt-4 text-gray-500">
          Our discovery call booking experience is coming soon.
        </p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-brand-light">
      <h1 className="font-heading text-3xl font-semibold">
        404 — Page Not Found
      </h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
