import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Rocket } from 'lucide-react';

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

export default function Startups() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [countAnimated, setCountAnimated] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const totalPages = Math.ceil(startupImages.length / ITEMS_PER_PAGE);

  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate the "106" counter
  useEffect(() => {
    if (!isVisible) return;
    const target = 106;
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out expo
      const eased = 1 - Math.pow(1 - progress, 3);
      setCountAnimated(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  const currentItems = startupImages.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
  };

  return (
    <section
      id="startups"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#0a0504]"
    >
      {/* Ambient dark reddish-brown base and glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#180806_0%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-accent-red/[0.05] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[800px] h-[600px] bg-accent-red/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] bg-accent-red/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-canvas) 1px, transparent 1px), linear-gradient(90deg, var(--color-canvas) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-ledger relative">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-red font-semibold mb-6 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-accent-red/50" />
            Ecosystem
            <span className="inline-block w-8 h-px bg-accent-red/50" />
          </div>

          {/* Prominent 106 counter */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-7xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none">
                {countAnimated}
              </span>
              <span className="font-display text-3xl sm:text-4xl font-bold text-accent-red">
                +
              </span>
            </div>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Funded Startups
          </h2>
          <p className="text-canvas/40 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Under the Student Startup &amp; Innovation Policy (SSIP) at PP Savani University
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-canvas/30">
              <Rocket className="w-4 h-4 text-accent-red" />
              <span className="font-mono text-[11px] tracking-wide uppercase">
                SSIP Funded
              </span>
            </div>
            <div className="h-4 w-px bg-canvas/10" />
            <div className="flex items-center gap-2 text-canvas/30">
              <span className="font-mono text-[11px] tracking-wide uppercase">
                PP Savani University
              </span>
            </div>
          </div>
        </div>

        {/* Startup image grid */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {currentItems.map((src, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] transition-all duration-500 ease-out-expo hover:border-accent-red/30 hover:shadow-[0_8px_40px_rgba(194,58,34,0.12)]"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                {/* Image */}
                <img
                  src={src}
                  alt={`SSIP Funded Startup ${currentPage * ITEMS_PER_PAGE + index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Index badge */}
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-wider text-white/60 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  #{String(currentPage * ITEMS_PER_PAGE + index + 1).padStart(3, '0')}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-canvas/50 hover:text-white hover:border-white/25 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentPage
                        ? 'w-8 bg-accent-red'
                        : 'w-2 bg-white/15 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-canvas/50 hover:text-white hover:border-white/25 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Bottom note */}
          <div className="text-center mt-10">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-canvas/20">
              Showcasing {startupImages.length} of 106 funded startups — more coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
