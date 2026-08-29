import { journeySteps } from '@/lib/data';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Journey() {
  const { targetRef: sectionRef, isIntersecting: isVisible } = useIntersectionObserver();

  return (
    <section id="journey" ref={sectionRef} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container-ledger">
        <div className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="eyebrow justify-center mb-4">The Pipeline</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            Idea to impact — six stages, one system.
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left/Right fading gradients for a premium feel */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden sm:block" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden sm:block" />

        <div className="flex w-max animate-image-gallery-scroll hover:[animation-play-state:paused] will-change-transform" style={{ transform: 'translateZ(0)' }}>
          {[...journeySteps, ...journeySteps].map((step, i) => (
            <div 
              key={`${step.stage}-${i}`}
              className="w-[300px] sm:w-[360px] md:w-[400px] flex-shrink-0 mx-3 sm:mx-4 group relative p-8 sm:p-10 rounded-2xl border border-border bg-[#fafafa] hover:bg-white transition-all duration-500 ease-out hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-8 font-display text-[120px] font-bold text-black/[0.02] group-hover:text-accent-red/[0.05] transition-colors duration-500 pointer-events-none select-none">
                {String((i % journeySteps.length) + 1).padStart(2, '0')}
              </div>
              
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mb-8 group-hover:border-accent-red/30 group-hover:bg-accent-red/5 transition-all duration-300 shadow-sm">
                <span className="font-mono text-[13px] font-bold text-accent-red">{String((i % journeySteps.length) + 1).padStart(2, '0')}</span>
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4 group-hover:text-accent-red transition-colors duration-300">
                {step.stage}
              </h3>
              
              <p className="text-muted leading-relaxed text-[15px] relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
