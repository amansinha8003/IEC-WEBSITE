import { MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-border">
      <div className="container-ledger">
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-[11px] tracking-[0.12em] text-[#2b5a8c] font-semibold uppercase">
              WE'D LOVE TO HEAR FROM YOU!
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-accent-red/20"></div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink uppercase tracking-tight">
            CONTACT US
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          {/* Address Card */}
          <div className="bg-white rounded-xl p-8 sm:p-12 flex flex-col items-center text-center border border-border shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
            <div className="mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <MapPin className="w-10 h-10 text-[#f32735] stroke-[1.5]" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#334155] mb-4">Our Address</h3>
            <p className="text-[#f32735] text-[13px] sm:text-[14px] font-medium leading-relaxed max-w-sm uppercase">
              P P SAVANI UNIVERSITY<br/>
              NH48, GETCO, Near Biltech,<br/>
              Dhamdod Village, Mangrol,<br/>
              Kosamba, Surat 394125
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl p-8 sm:p-12 flex flex-col items-center text-center border border-border shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
            <div className="mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <Mail className="w-10 h-10 text-[#f32735] stroke-[1.5]" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#334155] mb-4">Email Us</h3>
            <a href="mailto:ssip@ppsu.ac.in" className="text-[#f32735] text-[14px] sm:text-[15px] font-medium hover:opacity-80 transition-opacity">
              ssip@ppsu.ac.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
