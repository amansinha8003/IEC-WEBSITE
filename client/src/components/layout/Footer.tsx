import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { siteConfig, footerLinks } from '@/lib/data';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();

    if (href.endsWith('-page')) {
      if (window.location.hash !== href) {
        window.location.hash = href;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (window.location.hash.endsWith('-page')) {
      window.location.hash = href === '#home' ? '' : href;
      setTimeout(() => {
        if (href === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }

    if (href === '#home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
    }
  };

  const footerEntries = Object.entries(footerLinks);

  return (
    <footer id="contact" className="bg-ink text-canvas/70">
      {/* Newsletter strip */}
      <div className="border-b border-white/8">
        <div className="container-ledger py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
            <div>
              <h3 className="font-display font-bold text-white text-base md:text-lg tracking-tight mb-1">
                Stay in the loop
              </h3>
              <p className="text-xs md:text-sm text-canvas/40">
                Updates on programs, events, and funding opportunities.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
                (e.target as HTMLFormElement).reset();
              }}
              className="flex gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 min-w-0 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder-canvas/30 focus:outline-none focus:ring-2 focus:ring-accent-red/40 focus:border-accent-red/40 transition-all font-body"
              />
              <button type="submit" className="btn btn-primary text-[13px] py-2.5 px-5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-ledger py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 sm:gap-6 mb-6 md:mb-10 shrink min-w-0">
              <img src="/logos/ppsu-logo.png" alt="PPSU" className="h-12 sm:h-20 w-auto brightness-200 shrink object-contain" />
              <div className="h-10 sm:h-16 w-px bg-white/15 shrink-0" />
              <img src="/logos/iec-logo.jpg" alt="IEC" className="h-10 sm:h-16 w-auto rounded-lg brightness-150 shrink object-contain" />
            </div>

            <div className="space-y-3 md:space-y-4 text-[13px] md:text-[14px]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                <span className="text-canvas/50 leading-relaxed">{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-red flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-canvas/50 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Link columns — 2-col grid on mobile, 3 individual cols on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:contents gap-x-6 gap-y-8">
            {footerEntries.map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-mono text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-canvas/30 font-medium mb-4 md:mb-5">
                  {heading}
                </h4>
                <ul className="space-y-2.5 md:space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group inline-flex items-center gap-1 text-[12px] md:text-[13px] text-canvas/50 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-ledger py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-[10px] md:text-[11px] text-canvas/25">
          <span>© {new Date().getFullYear()} PP Savani University — Innovation & Entrepreneurship Cell</span>
          <span className="font-mono tracking-wider">Built at PPSU</span>
        </div>
      </div>
    </footer>
  );
}
