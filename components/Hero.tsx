'use client';

import { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    quote: "Fixed our burst pipe at midnight. Had water back on within the hour.",
    name: "David K.",
    city: "Eden Prairie",
  },
  {
    quote: "Upfront pricing, no surprises on the bill. Best plumber I've ever hired.",
    name: "Sarah M.",
    city: "Bloomington",
  },
  {
    quote: "Showed up on time, explained everything, done in under an hour. Rare.",
    name: "Tom B.",
    city: "Minnetonka",
  },
  {
    quote: "Same-day water heater replacement. Professional from start to finish.",
    name: "Lisa H.",
    city: "St. Paul",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % reviews.length);
        setVisible(true);
      }, 450);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[idx];

  return (
    <section ref={sectionRef} className="relative flex flex-col overflow-hidden bg-[#0a1628] min-h-[120svh] md:min-h-[100svh]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center pt-28 pb-[22svh] md:pb-12">

        {/* Eyebrow */}
        <p className="text-white text-xs uppercase tracking-[0.2em] mb-4 animate-fade-in-up delay-100">
          Minneapolis – St. Paul Metro
        </p>

        {/* Headline */}
        <div className="animate-fade-in-up delay-250">
          <h1
            className="text-white font-black leading-[1.0] mb-4"
            style={{ fontSize: 'clamp(1.9rem, 5.8vw, 4.4rem)', letterSpacing: '-0.03em' }}
          >
            Licensed Plumbers.
            <span className="block text-[#4d8eff]">Done Right the First Time.</span>
          </h1>
        </div>

        {/* Reviews */}
        <div className="animate-fade-in-up delay-700 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-white/30" />
            <span className="text-white/70 text-xs uppercase tracking-[0.2em]">What clients say</span>
            <div className="flex-1 h-px bg-white/30" />
          </div>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity 0.45s ease, transform 0.45s ease' }}>
            <p className="text-white text-sm italic leading-relaxed max-w-md mx-auto mb-3">
              &ldquo;{review.quote}&rdquo;
            </p>
            <p className="text-white/80 text-xs uppercase tracking-[0.15em] mb-3">
              — {review.name}, {review.city}
            </p>
            <div className="flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-4 items-center">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true); }, 450); }}
                className="rounded-full transition-all duration-300"
                style={{ width: i === idx ? '20px' : '6px', height: '6px', background: i === idx ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.2)' }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTAs — below reviews */}
        <div className="animate-fade-in-up delay-1000 flex flex-col sm:flex-row gap-3 justify-center w-full mt-8">
          <a href="tel:+16125550190" className="bg-white text-[#0a1628] font-semibold px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 text-center">
            Call Now
          </a>
          <a href="#contact" className="bg-transparent text-white font-semibold px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base border border-white/40 transition-all duration-200 hover:border-white/80 hover:bg-white/5 hover:-translate-y-0.5 text-center">
            Get a Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}
