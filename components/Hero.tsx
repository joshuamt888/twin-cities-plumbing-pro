const badges = [
  { icon: "⭐", text: "4.9 Stars — 127 Reviews" },
  { icon: "🛡️", text: "Licensed & Insured" },
  { icon: "⚡", text: "Same-Day Service" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/75 via-[#0a1628]/60 to-[#0a1628]/85" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a1628] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Trust badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up delay-100">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now Accepting Jobs — Minneapolis–St. Paul Metro
          </div>
        </div>

        {/* Headline */}
        <div className="animate-fade-in-up delay-250">
          <h1
            className="text-white font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.025em" }}
          >
            Licensed Plumbers.
            <span className="block text-[#4d8eff]">Done Right the First Time.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="animate-fade-in-up delay-400">
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Master-licensed plumbers serving the Twin Cities metro. Same-day service, upfront pricing, and a crew that takes pride in every job — no matter the size.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up delay-550">
          <a
            href="tel:+16125550190"
            className="bg-[#1e6bff] hover:bg-[#1450cc] text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now — (612) 555-0190
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border border-white/30 hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get a Free Quote →
          </a>
        </div>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-700">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-white/80 text-sm"
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in delay-1200">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
