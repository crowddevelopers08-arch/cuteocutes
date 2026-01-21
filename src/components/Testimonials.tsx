import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement | null>(null);

  // IDs / URLs
  const elfsightAppId = "1f9edc53-23c7-4ec5-aeb3-0f9d9440d131"; // your Elfsight widget id
  const SHAPO_WIDGET_ID = "shapo-widget-8d147fdad92f1e724a14";
  const SHAPO_SCRIPT_ID = "shapo-embed-js";
  const SHAPO_SRC = "https://cdn.shapo.io/js/embed.js";

  // Load (or reuse) Elfsight script and (re)initialize widgets
  useEffect(() => {
    const SRC = "https://elfsightcdn.com/platform.js";

    const initElfsight = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && (window as any).ELFSIGHT_APP_WIDGETS?.init) {
        // @ts-ignore
        (window as any).ELFSIGHT_APP_WIDGETS.init();
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) {
      initElfsight();
      return;
    }

    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    script.defer = true;
    script.onload = initElfsight;
    document.head.appendChild(script);
  }, []);

  // Load (or reuse) Shapo script — only if the container exists on the page
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If widget container isn't present (e.g., JSX commented out), skip.
    if (!document.getElementById(SHAPO_WIDGET_ID)) return;

    const existing = document.getElementById(SHAPO_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) return;

    const script = document.createElement("script");
    script.id = SHAPO_SCRIPT_ID;
    script.src = SHAPO_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const videoTestimonials = [
    { videoUrl: "https://ik.imagekit.io/c3g7atysal/1.mp4?updatedAt=1760002674192" },
    { videoUrl: "https://ik.imagekit.io/c3g7atysal/2.mp4?updatedAt=1760002674222" },
    { videoUrl: "https://ik.imagekit.io/c3g7atysal/3.mp4?updatedAt=1760332526110" },
    { videoUrl: "https://ik.imagekit.io/c3g7atysal/4.mp4?updatedAt=1761220886650" },
  ];

  const scrollByViewport = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    const delta = dir === "right" ? el.clientWidth : -el.clientWidth;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-12 max-[470px]:py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-[470px]:mb-8 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Video Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our clients say about our factory-direct service
          </p>
        </div>

        {/* Video Rail */}
        <div className="relative">
          {/* Arrows (rail-only scroll) */}
          <button
            onClick={() => scrollByViewport("left")}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white 
                       text-slate-700 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollByViewport("right")}
            aria-label="Next testimonials"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white 
                       text-slate-700 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable rail with snap */}
          <div
            ref={railRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            <div className="flex gap-6 pr-2">
              {videoTestimonials.map((video, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 snap-start w-[85%] sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[9/16] bg-slate-200">
                      <video
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                        playsInline
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              ))}
              {/* End spacer to avoid last-card white gap on snap */}
              <div className="flex-shrink-0 w-2 lg:w-4" aria-hidden />
            </div>
          </div>
        </div>

        {/* Google Reviews Widget (Elfsight) */}
        <div className=" max-sm:mt-0 mt-16">
          <h3 className="sr-only">Google Reviews</h3>
          <div className={`elfsight-app-${elfsightAppId}`} data-elfsight-app-lazy />
        </div>

        {/*
          Shapo Widget (commented out)
          --------------------------
          <div className="mt-16">
            <h3 className="sr-only">Shapo Reviews</h3>
            <div id={SHAPO_WIDGET_ID} />
          </div>
          --------------------------
          Script is conditionally loaded in useEffect (only if container exists).
        */}
      </div>
    </section>
  );
}

// Tailwind helper (move to your global.css):
// .no-scrollbar::-webkit-scrollbar { display: none; }
// .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
