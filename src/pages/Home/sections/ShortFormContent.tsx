import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

interface ShortFormReel {
  id: string;
  title: string;
  views: string;
  platform: "instagram" | "tiktok" | "youtube";
  renderContent: (isMuted: boolean, onToggleMute: () => void) => React.ReactNode;
}

const reels: ShortFormReel[] = [
  {
    id: "chipmaker",
    title: "The Silicon Secret Behind Modern AI",
    views: "1.4M",
    platform: "tiktok",
    renderContent: (isMuted, onToggleMute) => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#0a0d10] via-[#050709] to-[#020304] flex flex-col justify-between p-5 select-none">
        {/* Background Industrial Machine Look */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(227,33,50,0.18),transparent_70%)]" />

        {/* Machine Conveyor Graphic Representation */}
        <div className="absolute inset-x-0 top-1/4 bottom-1/4 flex flex-col justify-center items-center opacity-70">
          <div className="w-full h-24 border-y border-white/10 bg-white/[0.02] flex items-center justify-around px-4">
            <div className="h-16 w-12 rounded bg-black/80 border border-white/10 flex items-center justify-center text-[10px] text-white/40">
              CPU
            </div>
            <div className="h-16 w-12 rounded bg-black/80 border border-white/10 flex items-center justify-center text-[10px] text-white/40">
              GPU
            </div>
            <div className="h-16 w-12 rounded bg-[#E32132]/30 border border-[#E32132]/50 flex items-center justify-center text-[10px] text-white/90">
              NPU
            </div>
          </div>
        </div>

        {/* Top Sound Control */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
            Viral Hook
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md hover:bg-black"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-[#E32132]" />}
            <span>{isMuted ? "Enable sound" : "Sound on"}</span>
          </button>
        </div>

        {/* Center Signature Overlay Text: 'chipmaker' (Exact Reference UI) */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
          <div className="font-serif italic text-3xl sm:text-4xl text-[#E32132] font-semibold tracking-wide drop-shadow-[0_4px_16px_rgba(227,33,50,0.6)]">
            chipmaker
          </div>

          <div className="mt-4 rounded bg-[#FFD600] px-2 py-0.5 text-[9px] font-black uppercase text-black tracking-widest shadow-md">
            DON'T TOUCH
          </div>
        </div>

        {/* Bottom Platform & Views */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <FaTiktok size={12} className="text-white" />
            <span className="font-bold text-white">1.4M</span>
          </span>
          <span className="text-[10px] text-white/40">Retention 84%</span>
        </div>
      </div>
    ),
  },
  {
    id: "apple-supply-chain",
    title: "Tim Cook's 1998 Inventory Revolution",
    views: "2.8M",
    platform: "instagram",
    renderContent: (isMuted, onToggleMute) => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#101416] via-[#090d0e] to-[#040607] flex flex-col justify-between p-5 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,184,74,0.14),transparent_65%)]" />

        {/* Top Sound Control */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
            Case Study
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md hover:bg-black"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-[#FFB84A]" />}
            <span>{isMuted ? "Enable sound" : "Sound on"}</span>
          </button>
        </div>

        {/* Middle Visual (Exact Reference UI: 1998 Document + Supply Chain Clipboard) */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-3">
          {/* Apple 1998 Document Graphic */}
          <div className="rounded-lg border border-white/20 bg-white/95 p-3 text-black shadow-2xl w-36 text-center transform -rotate-3">
            <div className="text-xl font-black tracking-tight"></div>
            <div className="font-heading font-extrabold text-sm tracking-wider">1998</div>
          </div>

          {/* Supply Chain Checklist Clipboard */}
          <div className="rounded-xl border border-white/20 bg-[#0d1214] p-3 text-white shadow-2xl w-44">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#FFB84A] border-b border-white/10 pb-1">
              SUPPLY CHAIN
            </div>
            <div className="mt-1.5 space-y-1 text-[9px] text-white/80">
              <div className="flex items-center gap-1.5">
                <span className="text-[#E32132]">✓</span> Manufacturing
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E32132]">✓</span> Inventory
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E32132]">✓</span> Logistics
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E32132]">✓</span> Distribution
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platform & Views */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <FaInstagram size={13} className="text-[#FFB84A]" />
            <span className="font-bold text-white">2.8M</span>
          </span>
          <span className="text-[10px] text-white/40">Viral Reel</span>
        </div>
      </div>
    ),
  },
  {
    id: "stage-keynote",
    title: "How Leaders Pitch On The Big Stage",
    views: "980K",
    platform: "youtube",
    renderContent: (isMuted, onToggleMute) => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#15121e] via-[#0b0a11] to-[#040406] flex flex-col justify-between p-5 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(147,51,234,0.15),transparent_65%)]" />

        {/* Top Sound Control */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
            Keynote Cut
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md hover:bg-black"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-[#E32132]" />}
            <span>{isMuted ? "Enable sound" : "Sound on"}</span>
          </button>
        </div>

        {/* Middle Visual (Exact Reference UI: Stage Speaker + 'his way' kinetic subtitle) */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
          <div className="h-28 w-28 rounded-full border border-white/10 bg-white/5 flex items-center justify-center relative shadow-inner">
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-white/10 to-transparent flex items-center justify-center text-xs text-white/40">
              SPEAKER
            </div>
          </div>

          <div className="mt-6 font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            his way
          </div>
        </div>

        {/* Bottom Platform & Views */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <FaYoutube size={13} className="text-[#E32132]" />
            <span className="font-bold text-white">980K</span>
          </span>
          <span className="text-[10px] text-white/40">Avg APV 78%</span>
        </div>
      </div>
    ),
  },
  {
    id: "fire-hook-creator",
    title: "The 3-Second Retention Framework",
    views: "3.2M",
    platform: "instagram",
    renderContent: (isMuted, onToggleMute) => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#2b1007] via-[#150702] to-[#040101] flex flex-col justify-between p-5 select-none">
        {/* Fire Energy Ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(227,33,50,0.3),transparent_60%)]" />

        {/* Top Sound Control (Exact Reference UI) */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="inline-flex items-center gap-1 rounded-md border border-[#E32132]/30 bg-[#E32132]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#E32132]">
            <Flame size={11} /> Top Performer
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md hover:bg-black"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-[#E32132]" />}
            <span>{isMuted ? "Enable sound" : "Sound on"}</span>
          </button>
        </div>

        {/* Middle Visual */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E32132] text-white shadow-[0_0_30px_rgba(227,33,50,0.6)]">
            <Play size={20} fill="currentColor" className="ml-1" />
          </div>

          <div className="mt-4 font-heading text-lg font-bold text-white">
            10x Pacing Formula
          </div>
          <div className="text-xs text-white/50">Word-by-word kinetic subtitle engine</div>
        </div>

        {/* Bottom Red Progress Bar (Exact Reference UI) */}
        <div className="relative z-10 space-y-2">
          <div className="h-1 w-full rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-[#E32132]" />
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <FaInstagram size={13} className="text-[#E32132]" />
              <span className="font-bold text-white">3.2M</span>
            </span>
            <span className="text-[10px] text-[#FFB84A] font-semibold">Viral Hit</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "founder-breakdown",
    title: "Bootstrapping to $5M ARR Story",
    views: "1.7M",
    platform: "tiktok",
    renderContent: (isMuted, onToggleMute) => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#0c1615] via-[#070e0d] to-[#020505] flex flex-col justify-between p-5 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.12),transparent_65%)]" />

        <div className="relative z-10 flex justify-between items-center">
          <span className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
            Founder Story
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-md hover:bg-black"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-[#10b981]" />}
            <span>{isMuted ? "Enable sound" : "Sound on"}</span>
          </button>
        </div>

        <div className="relative z-10 my-auto text-center">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#FFB84A]">
            0 to 50,000 Users
          </div>
          <div className="mt-2 font-heading font-extrabold text-2xl text-white">
            Without spending $1 on Ads
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <FaTiktok size={12} className="text-white" />
            <span className="font-bold text-white">1.7M</span>
          </span>
          <span className="text-[10px] text-white/40">Organic Flywheel</span>
        </div>
      </div>
    ),
  },
];

export default function ShortFormContent() {
  const [startIndex, setStartIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    chipmaker: true,
    "apple-supply-chain": true,
    "stage-keynote": true,
    "fire-hook-creator": true,
    "founder-breakdown": true,
  });

  const toggleMute = (id: string) => {
    setMutedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : reels.length - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < reels.length - 1 ? prev + 1 : 0));
  };

  // Create an extended array for smooth carousel peek
  const visibleReels = [
    reels[(startIndex + 0) % reels.length],
    reels[(startIndex + 1) % reels.length],
    reels[(startIndex + 2) % reels.length],
    reels[(startIndex + 3) % reels.length],
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#030809] py-20 sm:py-24 lg:py-28 text-white border-t border-white/5">
      {/* Background Subtle Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Centered Header (Pill, Heading & Paragraph) */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center justify-center rounded-full border border-[#E32132]/40 bg-[#E32132]/10 px-5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E32132] shadow-[0_0_20px_rgba(227,33,50,0.15)]">
            SHORT-FORM STORYTELLING
          </span>

          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Engineered to stop thumbs{" "}
            <span className="font-serif italic text-[#FFB84A]">
              in the first 2 seconds.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/55 leading-relaxed">
            High-retention vertical edits for Instagram Reels, YouTube Shorts, and TikTok with
            kinetic typography, custom sound design, and narrative hooks.
          </p>
        </div>

        {/* Carousel Grid Track */}
        <div className="relative mt-8 sm:mt-12 w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleReels.map((reel, idx) => (
              <motion.div
                key={`${reel.id}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative aspect-[9/16] w-full overflow-hidden rounded-[26px] sm:rounded-[30px] border border-white/10 bg-[#0a1113] shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
              >
                {reel.renderContent(
                  mutedStates[reel.id] ?? true,
                  () => toggleMute(reel.id)
                )}

                {/* Hover Play Button Trigger */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E32132] text-white shadow-[0_0_25px_rgba(227,33,50,0.6)]">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ARROW CONTROLS (< and > Buttons Exactly like Reference UI) */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous reel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0a1113] text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next reel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0a1113] text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
