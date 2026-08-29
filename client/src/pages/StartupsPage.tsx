import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Rocket, ExternalLink } from 'lucide-react';

// ========================================
// 106 FUNDED STARTUP IMAGES
// Add all startup poster images here.
// Images should be placed in /images/startups/
// ========================================
const startupImages = [
  '/images/startups/1.jpg',
  '/images/startups/10.jpg',
  '/images/startups/12.jpg',
  '/images/startups/17.png',
  '/images/startups/2.jpg',
  '/images/startups/ARENI.jpg',
  '/images/startups/Aeterno.png',
  '/images/startups/Attendvision.png',
  '/images/startups/CartBot.jpg',
  '/images/startups/Clarifoam.png',
  '/images/startups/Crictracker.png',
  '/images/startups/DERMICURA.jpg',
  '/images/startups/Ecodhoop.png',
  '/images/startups/Ecofresh.png',
  '/images/startups/Geobus.png',
  '/images/startups/Hywax.jpg',
  '/images/startups/MycoDBase.png',
  '/images/startups/Revio.png',
  '/images/startups/Trainsportation.png',
  '/images/startups/Trichobloom.png',
  '/images/startups/VERMIWASH.jpg',
  '/images/startups/agro-filters.jpg',
  '/images/startups/antidandruff-cocktail-oil.jpg',
  '/images/startups/ayu-prakriti-clock.jpg',
  '/images/startups/ayur-sakhi.png',
  '/images/startups/bachpan-rakshak.png',
  '/images/startups/bio-boost-fertilizer.png',
  '/images/startups/bio-revive-cleanser.png',
  '/images/startups/biotech-solutions.png',
  '/images/startups/breeze-blocks.jpg',
  '/images/startups/button-mushroom.jpg',
  '/images/startups/chasee-beauty.png',
  '/images/startups/chemotrades.jpg',
  '/images/startups/database-of-microbes.png',
  '/images/startups/detoxyfying-salts.png',
  '/images/startups/eco-fresh.jpg',
  '/images/startups/eyes-on-wheels.png',
  '/images/startups/fashion-on-flecks.jpg',
  '/images/startups/fetch-it.png',
  '/images/startups/folicura.png',
  '/images/startups/grant-pilot.png',
  '/images/startups/grip-sense-innovations.png',
  '/images/startups/grow-textiles.jpg',
  '/images/startups/hermaura.png',
  '/images/startups/hydro-bloom.jpg',
  '/images/startups/inteli-helmet.png',
  '/images/startups/mind-says-smile.png',
  '/images/startups/multipurpos-uv-c-chamber.png',
  '/images/startups/nature-wash.png',
  '/images/startups/nexus-techsol.png',
  '/images/startups/nova--cup.jpg',
  '/images/startups/oral-3d.png',
  '/images/startups/physio-connect.png',
  '/images/startups/precision-bond.jpg',
  '/images/startups/precision-care-gloves.png',
  '/images/startups/probiotic-ice-cubes.png',
  '/images/startups/pyrolysis-oil.jpg',
  '/images/startups/reach-touch.png',
  '/images/startups/shadow-weave.png',
  '/images/startups/skin-revive-face-mask.png',
  '/images/startups/smart-attendance.jpg',
  '/images/startups/smart-bio-srf.png',
  '/images/startups/smart-shoes.jpg',
  '/images/startups/spila-soap.jpg',
  '/images/startups/student-education-platform-with-ai-integrated.png',
  '/images/startups/tech-verse-hub.png',
  '/images/startups/virtual-lab-and-simulator.jpg'
];

const ITEMS_PER_PAGE = 12;

export default function StartupsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [countAnimated, setCountAnimated] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(startupImages.length / ITEMS_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate counter
  useEffect(() => {
    if (!isLoaded) return;
    const target = 106;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCountAnimated(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isLoaded]);

  const currentItems = startupImages.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0504] relative overflow-hidden" ref={topRef}>

      {/* Global Ambient dark reddish-brown base and glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a0907_0%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-accent-red/[0.05] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-10%] w-[800px] h-[800px] bg-accent-red/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-accent-red/[0.03] rounded-full blur-[180px] pointer-events-none" />

      {/* Global Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero Banner */}
      <section
        className={`relative pt-28 pb-20 sm:pb-28 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          {/* Counter */}
          <div
            className={`transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="font-display text-8xl sm:text-9xl lg:text-[10rem] font-extrabold text-white tracking-tighter leading-none">
                {countAnimated}
              </span>
              <span className="font-display text-4xl sm:text-5xl font-bold text-accent-red">+</span>
            </div>
          </div>

          <h1
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 transition-all duration-700 delay-200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Funded Startups
          </h1>

          <p
            className={`text-white/40 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Under the Student Startup &amp; Innovation Policy (SSIP) at PP Savani University
          </p>

          {/* Filter tags */}
          <div
            className={`flex items-center justify-center gap-6 sm:gap-10 flex-wrap transition-all duration-700 delay-400 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2 text-white/30">
              <Rocket className="w-4 h-4 text-accent-red" />
              <span className="font-mono text-[11px] tracking-wide uppercase">SSIP Funded</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2 text-white/30">
              <span className="font-mono text-[11px] tracking-wide uppercase">PP Savani University</span>
            </div>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="relative pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 delay-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {currentItems.map((src, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a] cursor-pointer transition-all duration-500 hover:border-accent-red/30 hover:shadow-[0_8px_40px_rgba(194,58,34,0.15)] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 60}ms` }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`SSIP Funded Startup ${currentPage * ITEMS_PER_PAGE + index + 1}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Index badge */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] tracking-wider text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    #{String(currentPage * ITEMS_PER_PAGE + index + 1).padStart(3, '0')}
                  </div>

                  {/* View icon */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-accent-red/90 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-14">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 0}
                  className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === currentPage
                          ? 'w-10 bg-accent-red'
                          : 'w-2.5 bg-white/15 hover:bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                  className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Bottom note */}
            <div className="text-center mt-12">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/20">
                Showcasing {startupImages.length} of 106 funded startups — more coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] animate-fade-in flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Startup Detail"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute -top-3 -right-3 md:top-3 md:-right-12 w-10 h-10 rounded-full bg-black/80 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent-red transition-colors z-[101]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
