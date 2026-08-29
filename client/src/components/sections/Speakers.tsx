import { useState } from 'react';

const speakersData = [
  {
    id: 1,
    name: 'Mohd. Ibrahim Susiwala',
    designation: 'Business Strategist',
    image: '/images/ibrahim-susiwala.png',
    linkedin: 'https://www.linkedin.com/in/mohd-ibrahim-susiwala-aba3268a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 2,
    name: 'Haresh Calcuttawala',
    designation: 'Founder, Trezix',
    image: '/images/haresh-calcuttawala.png',
    linkedin: 'https://www.linkedin.com/in/hareshcalcuttawala?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 3,
    name: 'Nayan Bheda',
    designation: 'Founder, Hastech Ventures',
    image: '/images/nayan-bheda.png',
    linkedin: 'https://www.linkedin.com/in/nayanbheda?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 4,
    name: 'Nisha Talati',
    designation: 'Founder, BCM Training Academy',
    image: '/images/nisha-talati.png',
    linkedin: 'https://www.linkedin.com/in/coachnisha?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 5,
    name: 'Harini Sreenivasan',
    designation: 'Founder, Simpliwise Consulting',
    image: '/images/harini-sreenivasan.png',
    linkedin: 'https://www.linkedin.com/in/harini-sreenivasan?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 6,
    name: 'Naman Sarawgi',
    designation: 'Co-Founder, Refrens',
    image: '/images/naman-sarawgi.png',
    linkedin: 'https://www.linkedin.com/in/namansr?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 7,
    name: 'Kirtikumar Patel',
    designation: 'Founder, IPCalculus',
    image: '/images/kirtikumar-patel.png',
    linkedin: 'https://www.linkedin.com/in/kirtikumarpatel?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 8,
    name: 'Dr. Meera Sharma',
    designation: 'Head, Leading Technical Company',
    image: '/images/meera-sharma.jpg',
    linkedin: 'https://www.linkedin.com/in/meera-sharma-06233a15b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
];

export default function Speakers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(3); // Default center focused


  return (
    <section id="speakers" className="py-24 sm:py-32 bg-[#111111] overflow-hidden text-white relative">
      <div className="container-ledger relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-slide-up">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest uppercase mb-6 text-white">
            Our Speakers
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto mb-8" />
          <p className="text-white/60 text-lg sm:text-xl font-body leading-relaxed px-4">
            PPSU EBC has hosted a powerhouse lineup of visionary speakers who've inspired, challenged, and redefined the way we think about entrepreneurship.
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div 
          className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] flex items-center justify-center perspective-[1200px]"
          onMouseLeave={() => setHoveredIndex(2)}
        >
          {speakersData.map((speaker, index) => {
            // Calculate distance from currently "focused" item
            const isActive = hoveredIndex === index;
            const distance = hoveredIndex !== null ? index - hoveredIndex : 0;
            
            // Dynamic styling based on position relative to hovered item
            let transform = 'translateX(0) scale(1) rotateY(0deg)';
            let zIndex = 10;
            let opacity = 1;
            let filter = 'grayscale(0%) brightness(100%)';

            if (distance < 0) {
              // Left items
              transform = `translateX(${distance * 105}%) scale(${1 - Math.abs(distance) * 0.15}) rotateY(25deg)`;
              zIndex = 10 + distance;
              opacity = Math.max(1 - Math.abs(distance) * 0.3, 0);
              filter = 'grayscale(100%) brightness(50%)';
            } else if (distance > 0) {
              // Right items
              transform = `translateX(${distance * 105}%) scale(${1 - Math.abs(distance) * 0.15}) rotateY(-25deg)`;
              zIndex = 10 - distance;
              opacity = Math.max(1 - Math.abs(distance) * 0.3, 0);
              filter = 'grayscale(100%) brightness(50%)';
            } else {
              // Center / Active item
              transform = 'translateX(0) scale(1.15) rotateY(0deg)';
              zIndex = 20;
              opacity = 1;
              filter = 'grayscale(0%) brightness(110%)';
            }

            return (
              <div
                key={speaker.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className="absolute w-[200px] sm:w-[260px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-[1200ms] ease-in-out shadow-2xl bg-[#1a1a1a]"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  filter,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, filter, opacity'
                }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left transform transition-transform duration-[1200ms]">
                  <h3 className={`font-display font-bold text-white mb-1 transition-all duration-[800ms] ${isActive ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                    {speaker.name}
                  </h3>
                  <p className={`font-mono uppercase tracking-widest text-accent-red transition-all duration-[800ms] ${isActive ? 'text-sm' : 'text-[10px] opacity-0'}`}>
                    {speaker.designation}
                  </p>

                  {/* LinkedIn Icon */}
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute bottom-4 right-4 w-9 h-9 rounded-md bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center text-white transition-all duration-500 hover:scale-110 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
