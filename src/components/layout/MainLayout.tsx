
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-[#101010]">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
