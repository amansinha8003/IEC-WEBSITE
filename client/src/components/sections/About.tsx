import { siteConfig } from '@/lib/data';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const { targetRef: sectionRef, isIntersecting: isVisible } = useIntersectionObserver();

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32">
      <div className="container-ledger">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="eyebrow mb-6">About Us</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1] mb-6">
              Innovation & Entrepreneurship Cell
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>The <strong>Innovation & Entrepreneurship Cell (IEC), P. P. Savani University</strong> serves as a catalyst for building a vibrant culture of innovation, creativity and entrepreneurship across the university ecosystem.</p>
              <p>The Cell aims to provide students, faculty, researchers, staff and alumni with opportunities to identify real-world problems, develop innovative solutions, explore entrepreneurial possibilities and transform knowledge into societal and economic impact.</p>
              <p>The IEC works at the intersection of Education, Innovation, Research, Intellectual Property, Entrepreneurship and Industry, creating pathways for ideas to progress from conception to implementation and commercialization.</p>
              
              <h3 className="font-display text-2xl font-bold text-ink pt-4">Our Philosophy</h3>
              <p className="font-semibold text-ink">Think Beyond. Create Better. Build for Impact.</p>
              <p>We believe innovation is not restricted to laboratories or technology. Innovation can emerge from engineering, healthcare, agriculture, management, design, science, social sciences, education and every discipline where a meaningful problem exists.</p>
              <p>Therefore, IEC promotes an interdisciplinary approach where diverse perspectives come together to create better solutions.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`ledger-card relative overflow-hidden transition-all duration-1000 delay-200 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(194,58,34,0.12)] cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-red" />
              <div className="pl-5">
                <h3 className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent-red font-semibold mb-3">Our Vision</h3>
                <p className="text-ink leading-relaxed font-medium">To be a catalyst for innovation, entrepreneurship and sustainable impact.</p>
              </div>
            </div>

            <div className={`ledger-card relative overflow-hidden transition-all duration-1000 delay-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(20,184,166,0.12)] cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-teal" />
              <div className="pl-5">
                <h3 className="font-mono text-[11px] tracking-[0.12em] uppercase text-accent-teal font-semibold mb-3">Our Mission</h3>
                <p className="text-ink leading-relaxed font-medium">To inspire ideas, enable innovation, nurture entrepreneurs and transform solutions into meaningful impact.</p>
              </div>
            </div>

            <div className={`grid grid-cols-3 gap-2 sm:gap-4 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[{ val: '8+', label: 'Years Active' }, { val: '500+', label: 'Community' }, { val: '6', label: 'Programs' }].map((s) => (
                <div key={s.label} className="text-center p-2 sm:p-4 bg-canvas-alt rounded-md border border-border hover:border-accent-red/30 hover:bg-white transition-all duration-300 hover:-translate-y-1">
                  <div className="font-display text-2xl font-bold text-ink">{s.val}</div>
                  <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted mt-1 truncate">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`ledger-card relative overflow-hidden transition-all duration-1000 delay-600 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(26,26,26,0.08)] cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-ink" />
              <div className="pl-5 py-1">
                <h3 className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink font-semibold mb-4">What We Do</h3>
                <ul className="space-y-3">
                  {[
                    { title: 'Incubation & Support', desc: 'Nurturing early-stage ideas into viable businesses.' },
                    { title: 'Mentorship', desc: 'Expert guidance from industry leaders and founders.' },
                    { title: 'Funding & Grants', desc: 'Financial assistance for prototyping and scaling.' },
                    { title: 'IPR Assistance', desc: 'Support for patents, copyrights, and trademarks.' }
                  ].map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3">
                      <div className="mt-[6px] w-1.5 h-1.5 rounded-full bg-border-strong group-hover:bg-accent-red transition-colors duration-300 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-ink text-sm leading-tight group-hover:text-accent-red transition-colors">{item.title}</h4>
                        <p className="text-muted text-[13px] mt-1 leading-snug">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {[
            { src: '/images/campus-event.jpg', alt: 'Campus event at PPSU' },
            { src: '/images/infrastructure-event.jpg', alt: 'Innovation infrastructure' },
            { src: '/images/mentorship-event.jpg', alt: 'Mentorship session' },
            { src: '/images/ipr-event.jpg', alt: 'IPR workshop' },
          ].map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-md border border-border aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
