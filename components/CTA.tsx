"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/exterior.webp"
          alt="Twin Cities neighborhood"
          fill
          className="object-cover opacity-15"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1e6bff]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal delay={0} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1e6bff]/20 border border-[#1e6bff]/30 rounded-full px-4 py-2 text-[#4d8eff] text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available Now — Request a Free Quote
          </div>
          <h2
            className="text-white font-black mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Get Your Free Estimate
            <span className="block text-[#4d8eff]">We Respond Within the Hour.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            No obligation. No pressure. Just a straight answer from a licensed plumber.
          </p>
        </ScrollReveal>

        {/* Form card — frosted glass */}
        <ScrollReveal delay={150}>
          <div className="rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Request Received</h3>
                <p className="text-white/50">We&apos;ll be in touch within the hour. Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1e6bff]/50 transition"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1e6bff]/50 transition"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(612) 555-0190"
                      className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1e6bff]/50 transition"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      required
                      className="w-full rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1e6bff]/50 transition"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <option value="" style={{ background: '#0a1628' }}>Select a service...</option>
                      <option style={{ background: '#0a1628' }}>Emergency Plumbing</option>
                      <option style={{ background: '#0a1628' }}>Drain Cleaning</option>
                      <option style={{ background: '#0a1628' }}>Water Heater Service</option>
                      <option style={{ background: '#0a1628' }}>Leak Detection & Repair</option>
                      <option style={{ background: '#0a1628' }}>Fixture Installation</option>
                      <option style={{ background: '#0a1628' }}>Repiping</option>
                      <option style={{ background: '#0a1628' }}>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/70 mb-1.5">
                    Describe the Issue
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's going on — the more detail, the better we can help."
                    className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#1e6bff]/50 transition resize-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e6bff] hover:bg-[#1450cc] text-white font-bold py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
                >
                  Request My Free Estimate →
                </button>

                <p className="text-center text-white/30 text-sm">
                  We typically respond within 60 minutes · No spam, ever
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Trust row */}
        <ScrollReveal delay={250} dir="fade" className="mt-10">
          <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            {[
              "✓ Licensed Master Plumbers",
              "✓ Fully Insured",
              "✓ Upfront Pricing",
              "✓ Satisfaction Guaranteed",
            ].map((item) => (
              <span key={item} className="text-white/50">
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
