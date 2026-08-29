import { Lightbulb, Coins, Building2, Rocket, Wrench, Users, Handshake, Mic } from 'lucide-react';

const offerings = [
  { icon: Lightbulb, title: 'Idea to Startup', desc: 'Turn promising ideas into viable ventures.' },
  { icon: Coins, title: 'Funding Connect', desc: 'Discover grants, investors and funding pathways.' },
  { icon: Building2, title: 'Innovation Spaces', desc: 'Work, collaborate and build in an enabling environment.' },
  { icon: Rocket, title: 'Startup Programs', desc: 'Move from ideation to incubation and growth.' },
  { icon: Wrench, title: 'Prototype & Build', desc: 'Turn concepts into working products.' },
  { icon: Users, title: 'Mentor Connect', desc: 'Learn from founders, experts and industry leaders.' },
  { icon: Handshake, title: 'Ecosystem Connect', desc: 'Connect with partners, investors and innovators.' },
  { icon: Mic, title: 'Events & Opportunities', desc: 'Pitch, showcase, compete, learn and grow.' }
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-canvas-alt">
      <div className="container-ledger">
        <div className="mb-12 sm:mb-16 animate-slide-up">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-[11px] tracking-[0.12em] text-accent-teal font-semibold uppercase">OFFERINGS</span>
            <div className="h-[1px] w-16 sm:w-24 bg-accent-red/40"></div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink uppercase tracking-tight">
            WHAT WE DO AT IEC
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 animate-slide-up">
          {offerings.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 sm:p-8 flex items-start gap-5 sm:gap-6 border border-border shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-canvas-alt/50 border border-border">
                  <Icon className="w-6 h-6 text-accent-red stroke-[1.5]" />
                </div>
                <div className="mt-1">
                  <h3 className="font-display text-[17px] sm:text-[19px] font-bold text-ink mb-1.5 leading-tight">{offering.title}</h3>
                  <p className="text-muted leading-relaxed font-medium text-[13px] sm:text-[14px]">{offering.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
