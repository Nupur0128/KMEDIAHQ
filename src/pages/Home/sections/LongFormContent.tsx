import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

interface LongFormVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  currentSec: number;
  totalSec: number;
  renderVisual: (isActive: boolean, isPlaying: boolean) => React.ReactNode;
}

const longFormVideos: LongFormVideo[] = [
  {
    id: "coca-cola-history",
    title: "How Coca-Cola Engineered A 100-Year Global Monopoly",
    category: "YouTube Brand Documentary",
    duration: "21:40",
    currentSec: 284,
    totalSec: 1300,
    renderVisual: () => (
      <div className="relative h-full w-full overflow-hidden bg-[#0d0907] flex items-center justify-center select-none">
        {/* Studio Wood-Panel Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,245,230,0.18)_0%,rgba(20,12,8,0.7)_60%,rgba(5,2,1,0.95)_100%)]" />

        {/* Framing Border / Projector Vignette */}
        <div className="relative z-10 flex h-[88%] w-[58%] max-w-[440px] flex-col items-center justify-between rounded-xl border-4 border-[#3d2c20] bg-[#1a120d] p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Top Globe & Vintage Sky */}
          <div className="relative w-full flex-1 flex flex-col items-center justify-center text-center">
            {/* Vintage Globe Backdrop */}
            <div className="absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-gradient-to-tr from-[#3a6b5c] via-[#a38753] to-[#407a82] opacity-80 blur-[1px] shadow-inner" />

            {/* Hand Holding Glass Bottle Illustration Mockup */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="h-40 w-16 sm:h-48 sm:w-20 rounded-full bg-gradient-to-b from-[#1b2b23] via-[#08120d] to-[#120805] border border-white/20 shadow-2xl flex items-center justify-center">
                <span className="font-serif italic font-bold text-[#FFD600] text-[11px] sm:text-xs tracking-wider transform -rotate-12 drop-shadow-md">
                  Coca-Cola
                </span>
              </div>
            </div>

            {/* Faded Watermark Title */}
            <div className="absolute bottom-2 font-serif italic text-3xl sm:text-4xl text-white/40 font-bold select-none">
              Coca-Cola
            </div>
          </div>

          {/* Bottom Red Banner */}
          <div className="w-full rounded bg-[#c51d24] py-2 px-3 text-center shadow-md">
            <div className="text-[9px] uppercase tracking-widest text-[#FFCB05] font-bold">
              Enjoy
            </div>
            <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow">
              Coca-Cola
            </div>
            <div className="text-[7px] uppercase tracking-widest text-white/80 font-semibold">
              ALL THE YEAR ROUND
            </div>
          </div>
        </div>

        {/* Subtle Vignette Shadows */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      </div>
    ),
  },
  {
    id: "pokemon-coke",
    title: "The Mystery of Viral Brand Crossovers",
    category: "YouTube Culture Essay",
    duration: "18:45",
    currentSec: 252,
    totalSec: 1125,
    renderVisual: () => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#c91d24] via-[#e32132] to-[#870a13] flex items-center justify-center select-none">
        {/* Radial burst behind bottle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.95)_0%,rgba(147,197,253,0.7)_25%,rgba(59,130,246,0.3)_45%,transparent_60%)]" />

        {/* Dynamic Starburst Lines */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "repeating-conic-gradient(from 0deg at 30% 50%, white 0deg 8deg, transparent 8deg 16deg)",
          }}
        />

        {/* Content Elements */}
        <div className="relative z-10 flex h-full w-full items-center justify-between px-6 sm:px-14 lg:px-20">
          {/* Bottle Silhouette */}
          <div className="relative flex flex-col items-center">
            <div className="relative flex h-48 w-18 sm:h-60 sm:w-22 items-center justify-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
              <div className="h-full w-full rounded-t-[30px] rounded-b-[20px] bg-gradient-to-b from-[#180808] via-[#050101] to-[#120505] shadow-inner relative flex items-center justify-center border-t-4 border-[#2d1212]">
                <div className="h-3 w-8 bg-[#2d1212] absolute -top-3 rounded-t-sm" />
                <div className="h-14 w-full bg-[#120505]/80 my-auto flex items-center justify-center">
                  <span className="font-serif italic text-[10px] sm:text-xs text-white/20 tracking-widest uppercase">
                    Original
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Question Mark & Pokemon Title */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-black text-6xl sm:text-8xl lg:text-9xl text-[#FFD600] drop-shadow-[0_6px_0_#255BB5] tracking-tight">
              ?
            </div>
            <div className="mt-1 font-black text-3xl sm:text-5xl lg:text-6xl text-[#FFCB05] tracking-tighter drop-shadow-[0_5px_0_#2A599B] uppercase font-sans">
              Pok<span className="lowercase">é</span>mon
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "apple-supply-chain",
    title: "Inside The Apple Supply Chain: Tim Cook's Masterstroke",
    category: "Corporate Documentary",
    duration: "24:10",
    currentSec: 740,
    totalSec: 1450,
    renderVisual: () => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0c1619] via-[#071113] to-[#030809] flex items-center justify-center select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(227,33,50,0.12),transparent_60%)]" />

        <div className="relative z-10 w-full px-8 sm:px-14 flex items-center justify-between">
          <div className="max-w-md">
            <span className="inline-block rounded-md bg-[#E32132]/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E32132]">
              Global Operations
            </span>
            <h3 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
              The Architecture of Infinite Scale
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/60">
              How inventory turnaround speed created the most profitable hardware brand in history.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md hidden sm:block">
            <div className="text-[10px] uppercase font-bold text-white/40">Inventory Velocity</div>
            <div className="text-3xl font-extrabold text-[#FFB84A]">5.2 Days</div>
            <div className="text-[10px] text-white/50 mt-1">vs. 32 days industry average</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ai-architecture",
    title: "The Architecture of Modern AI Engines",
    category: "Technical Deep Dive",
    duration: "31:40",
    currentSec: 980,
    totalSec: 1900,
    renderVisual: () => (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#0d1017] via-[#070b10] to-[#020508] flex items-center justify-center select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,74,0.08),transparent_65%)]" />

        <div className="relative z-10 text-center px-6">
          <div className="font-mono text-xs text-[#FFB84A] uppercase tracking-widest">
            Neural Attention Mechanisms • Layer 48
          </div>
          <h3 className="mt-3 font-heading text-2xl sm:text-4xl font-semibold text-white">
            Transformer Inference Pipeline
          </h3>
          <div className="mt-6 flex justify-center gap-3">
            {["Input Tokens", "Self-Attention", "Feed Forward", "Softmax"].map((node, i) => (
              <span
                key={node}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
              >
                0{i + 1}. {node}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function LongFormContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(32);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : longFormVideos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < longFormVideos.length - 1 ? prev + 1 : 0));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleRewind = () => {
    setProgress((prev) => Math.max(0, prev - 8));
  };

  const handleForward = () => {
    setProgress((prev) => Math.min(100, prev + 12));
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.3));
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative w-full overflow-hidden bg-[#030809] py-20 sm:py-24 lg:py-28 text-white">
      {/* Background Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Pill, Heading, and Paragraph (As Requested) */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center justify-center rounded-full border border-[#E32132]/40 bg-[#E32132]/10 px-5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E32132] shadow-[0_0_20px_rgba(227,33,50,0.15)]">
            LONG-FORM & STORYTELLING
          </span>

          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Turn deep ideas into{" "}
            <span className="font-serif italic text-[#FFB84A]">
              watch-worthy films.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/55 leading-relaxed">
            From YouTube video essays and brand documentaries to full-length podcasts, we craft
            cinematic viewing experiences that hold attention from first frame to end screen.
          </p>
        </div>

        {/* 80% / 20% SLIDER STAGE (Exact Reference UI) */}
        <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              // Each step shifts by 80% plus the gap
              transform: `translateX(calc(-${currentIndex} * (80% + 1.25rem)))`,
              gap: "1.25rem",
            }}
          >
            {longFormVideos.map((video, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={video.id}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(idx);
                  }}
                  className={`relative shrink-0 rounded-[24px] sm:rounded-[32px] border transition-all duration-300 overflow-hidden select-none ${
                    isActive
                      ? "w-[80%] border-white/15 bg-[#0a1113] shadow-[0_25px_80px_rgba(0,0,0,0.85)] cursor-default aspect-[16/9.5] sm:aspect-[16/9]"
                      : "w-[80%] border-white/10 bg-[#070b0d] opacity-75 hover:opacity-100 hover:border-white/25 cursor-pointer aspect-[16/9.5] sm:aspect-[16/9]"
                  }`}
                >
                  {/* TOP OVERLAYS */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/90 hover:border-white/40"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX size={14} className="text-white/80" />
                          <span>Enable sound</span>
                        </>
                      ) : (
                        <>
                          <Volume2 size={14} className="text-[#E32132]" />
                          <span>Sound on</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Top-Right Category Badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
                      <FaYoutube size={13} className="text-[#E32132]" />
                      {video.category}
                    </span>
                  </div>

                  {/* VIDEO VISUAL */}
                  <div className="relative h-full w-full">
                    {video.renderVisual(isActive, isPlaying)}
                  </div>

                  {/* BOTTOM PLAYER BAR CONTROLS (Always Rendered on Active & Peek Card, exactly as in screenshot) */}
                  <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 sm:p-6 pt-12">
                    {/* Progress Bar (Brand Red) */}
                    <div
                      className="group/progress relative h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition-all hover:h-2"
                      onClick={(e) => {
                        if (!isActive) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newPct = (clickX / rect.width) * 100;
                        setProgress(Math.max(0, Math.min(100, newPct)));
                      }}
                    >
                      <div
                        className="h-full rounded-full bg-[#E32132] shadow-[0_0_12px_#E32132] relative transition-all"
                        style={{ width: `${isActive ? progress : 45}%` }}
                      >
                        {isActive && (
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-md scale-0 group-hover/progress:scale-100 transition-transform" />
                        )}
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="mt-3 sm:mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-white/70">
                        {isActive ? (
                          <>
                            <span className="font-mono text-white/90">
                              {Math.floor((video.totalSec * (progress / 100)) / 60)}:
                              {String(
                                Math.floor((video.totalSec * (progress / 100)) % 60)
                              ).padStart(2, "0")}
                            </span>
                            <span className="text-white/40">/</span>
                            <span className="font-mono text-white/50">{video.duration}</span>
                            <span className="hidden sm:inline-block text-white/40">•</span>
                            <span className="hidden sm:inline-block font-medium text-white/80">
                              {video.title}
                            </span>
                          </>
                        ) : (
                          <span className="font-mono text-xs text-white/50">{video.duration}</span>
                        )}
                      </div>

                      {/* Control Buttons (Rewind 10, Play/Pause, Forward 20, Fullscreen) */}
                      <div className="flex items-center gap-2.5 sm:gap-3.5">
                        {/* Rewind 10s */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isActive) handleRewind();
                          }}
                          aria-label="Rewind 10s"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
                        >
                          <div className="relative flex items-center justify-center">
                            <RotateCcw size={15} />
                            <span className="absolute -bottom-2 text-[7px] font-extrabold">10</span>
                          </div>
                        </button>

                        {/* Play/Pause */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isActive) {
                              togglePlay();
                            } else {
                              setCurrentIndex(idx);
                            }
                          }}
                          aria-label={isActive && isPlaying ? "Pause" : "Play"}
                          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-[#030809] transition hover:bg-[#FFB84A] shadow-md"
                        >
                          {isActive && isPlaying ? (
                            <Pause size={15} fill="currentColor" />
                          ) : (
                            <Play size={15} fill="currentColor" className="ml-0.5" />
                          )}
                        </button>

                        {/* Forward 20s */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isActive) handleForward();
                          }}
                          aria-label="Forward 20s"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
                        >
                          <div className="relative flex items-center justify-center">
                            <RotateCw size={15} />
                            <span className="absolute -bottom-2 text-[7px] font-extrabold">20</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert("Expanded video preview");
                          }}
                          className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
                        >
                          <Maximize2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ARROW CONTROLS (< and > Buttons) */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous video"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0a1113] text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next video"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0a1113] text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
