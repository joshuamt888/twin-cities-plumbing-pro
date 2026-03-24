"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
    title: "Emergency Plumbing",
    desc: "Burst pipes, flooding, gas leaks — we're on call 24/7 and arrive within the hour.",
    highlight: "24/7 Dispatch",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Drain Cleaning",
    desc: "Clogged drains cleared fast with hydro-jetting and professional snaking.",
    highlight: "Same Day",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
      </svg>
    ),
    title: "Water Heater Service",
    desc: "Installation, repair, and replacement for tank and tankless water heaters.",
    highlight: "All Brands",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3zm0 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    title: "Leak Detection & Repair",
    desc: "We find hidden leaks behind walls and under slabs — non-invasive technology.",
    highlight: "No Guessing",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    title: "Fixture Installation",
    desc: "Faucets, toilets, showers, and sinks installed perfectly the first time.",
    highlight: "Clean Work",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: "Repiping & New Builds",
    desc: "Full home repiping with copper or PEX, plus rough-in work for new construction.",
    highlight: "Warrantied",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0}>
            <p className="text-[#1e6bff] font-semibold text-sm uppercase tracking-widest mb-3">
              What We Fix
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-title text-[#0a1628] mb-4">
              Every Plumbing Job,
              <span className="text-[#1e6bff]"> Done Right</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="section-subtitle max-w-xl mx-auto">
              From simple drain clogs to full repiping jobs, our licensed
              technicians handle it all — fast, clean, and backed by our workmanship
              guarantee.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#1e6bff]/30 hover:shadow-xl hover:shadow-[#1e6bff]/10 transition-all duration-300 hover:-translate-y-1 cursor-default h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-[#f0f4ff] rounded-xl flex items-center justify-center text-[#1e6bff] group-hover:bg-[#1e6bff] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold text-[#1e6bff] bg-[#f0f4ff] px-3 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
