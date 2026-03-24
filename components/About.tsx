"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const perks = [
  {
    title: "Licensed Master Plumbers",
    desc: "Every tech on our team holds a Minnesota master plumber license — not just journeymen.",
  },
  {
    title: "Upfront Flat-Rate Pricing",
    desc: "We quote before we work. No surprises on your invoice, ever.",
  },
  {
    title: "We Clean Up After Ourselves",
    desc: "We treat your home with respect. Shoe covers, drop cloths, and a spotless exit.",
  },
  {
    title: "Satisfaction Guaranteed",
    desc: "If it's not right, we come back and make it right. That's our promise.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal dir="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/technician.webp"
                  alt="Twin Cities Plumbing Pro technician inspecting water heater"
                  width={700}
                  height={520}
                  className="w-full h-auto object-cover"
                  priority={false}
                  unoptimized
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1e6bff] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#0a1628] font-bold text-sm">
                      Licensed & Insured
                    </div>
                    <div className="text-slate-500 text-xs">
                      State of Minnesota — Master Plumber
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal dir="right" delay={150}>
            <div>
              <p className="text-[#1e6bff] font-semibold text-sm uppercase tracking-widest mb-4">
                Why Choose Us
              </p>
              <h2 className="section-title text-[#0a1628] mb-6">
                Plumbing Done With
                <span className="text-[#1e6bff]"> Real Care</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                We&apos;re not a call center operation — we&apos;re a local Twin Cities company
                with real plumbers who answer the phone and show up on time. Every
                job gets our full attention whether it&apos;s a $150 repair or a full
                repipe.
              </p>

              <div className="space-y-6">
                {perks.map((perk, i) => (
                  <ScrollReveal key={perk.title} dir="right" delay={i * 80}>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 bg-[#1e6bff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[#0a1628] mb-1">
                          {perk.title}
                        </div>
                        <div className="text-slate-500 text-sm leading-relaxed">
                          {perk.desc}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
