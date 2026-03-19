"use client";

import { useState } from "react";

const PHONE = "(612) 555-0192";
const PHONE_HREF = "tel:6125550192";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconDroplet({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 2C6.48 2 3 7.5 3 11.5a9 9 0 0018 0C21 7.5 17.52 2 12 2z" />
    </svg>
  );
}

function IconFire({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10zm0 0c2 3 5 5 5 8a5 5 0 01-10 0c0-3 3-5 5-8z" />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
    </svg>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconStar({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconMap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: IconDroplet,
    title: "Drain Cleaning",
    desc: "Slow or clogged drains cleared fast — kitchen, bathroom, floor drains, and main sewer lines. No mess, no guesswork.",
  },
  {
    icon: IconFire,
    title: "Water Heater Service",
    desc: "Same-day water heater repair and installation. Traditional tank or tankless — we handle it all and get your hot water back.",
  },
  {
    icon: IconSearch,
    title: "Leak Detection & Repair",
    desc: "We find and fix leaks before they turn into expensive damage. Under slabs, inside walls, under cabinets — we track them down.",
  },
  {
    icon: IconWrench,
    title: "Pipe Repair & Repiping",
    desc: "Burst pipes, corroded lines, or full repipes. We use copper and PEX to get it done right the first time.",
  },
  {
    icon: IconBolt,
    title: "Emergency Plumbing",
    desc: "Plumbing emergencies don't wait. We're available when you need us most — evenings, weekends, no extra runaround.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    location: "Minneapolis",
    text: "Had a burst pipe at 10pm and they were at my house within the hour. Fixed it clean, no damage to the drywall. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "Dave M.",
    location: "Burnsville",
    text: "Replaced our old water heater with a tankless unit. The whole job was done in one day and they explained everything. Hot water instantly every time now.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    location: "Edina",
    text: "We had a slab leak no one else could find. Twin Cities Plumbing Pro located it in 20 minutes. Fair price and fast fix. Highly recommend.",
    rating: 5,
  },
];

const trustPoints = [
  "Licensed & insured in Minnesota",
  "15+ years serving the Twin Cities",
  "Upfront pricing — no hidden fees",
  "Same-day service available",
  "Family-owned & locally operated",
  "100% satisfaction guaranteed",
];

// ─── Components ───────────────────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy)] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo placeholder */}
        <div className="flex items-center gap-2.5">
          <div className="h-9 px-4 bg-white/10 border border-dashed border-white/30 rounded-lg flex items-center justify-center">
            <span className="text-white/50 text-sm font-medium tracking-wide">[ Your Logo Here ]</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden sm:flex items-center gap-2 bg-[var(--color-pipe-accent)] hover:bg-[var(--color-pipe-bright)] text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm pulse-ring"
          >
            <IconPhone className="w-4 h-4" />
            {PHONE}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-navy-light)] border-t border-white/10 px-4 py-4 space-y-3">
          {["#services", "#about", "#reviews", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white py-1.5 text-sm capitalize"
            >
              {href.replace("#", "")}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-[var(--color-pipe-accent)] text-white font-bold px-4 py-2.5 rounded-lg text-sm w-full justify-center mt-2"
          >
            <IconPhone className="w-4 h-4" />
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-[var(--color-navy)] text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Blue accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-pipe-accent)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-pipe-accent)]/15 border border-[var(--color-pipe-accent)]/30 text-[var(--color-pipe-bright)] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-[var(--color-pipe-bright)] rounded-full" />
            Licensed & Insured — Twin Cities, MN
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold leading-tight mb-5 animate-fade-up [animation-delay:0.1s]">
            Fast, Honest Plumbing<br />
            <span className="text-[var(--color-pipe-bright)]">for the Twin Cities</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-8 animate-fade-up [animation-delay:0.2s]">
            Family-owned. Licensed. On time. We handle drain cleaning, water heaters, leak repair, and plumbing emergencies — same-day service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up [animation-delay:0.3s]">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-pipe-accent)] hover:bg-[var(--color-pipe-bright)] text-white font-bold px-7 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-[var(--color-pipe-accent)]/30"
            >
              <IconPhone className="w-5 h-5" />
              Call {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl transition-colors text-lg"
            >
              Get a Free Estimate
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-8 animate-fade-up [animation-delay:0.4s]">
            {["Same-day service", "Upfront pricing", "No hidden fees", "15+ years local"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-white/60 text-sm">
                <IconCheck className="w-4 h-4 text-[var(--color-pipe-bright)]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)]">
            Plumbing Services in the Twin Cities
          </h2>
          <p className="text-slate-500 text-lg mt-3 max-w-xl mx-auto">
            From a dripping faucet to a full repipe — we handle every job with the same care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group bg-[var(--color-pipe-sky)] hover:bg-[var(--color-navy)] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-navy)]/20"
            >
              <div className="w-12 h-12 bg-[var(--color-pipe-accent)]/15 group-hover:bg-[var(--color-pipe-accent)]/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <svc.icon className="w-6 h-6 text-[var(--color-pipe-accent)] group-hover:text-[var(--color-pipe-bright)] transition-colors" />
              </div>
              <h3 className="text-lg font-[var(--font-heading)] font-bold text-[var(--color-navy)] group-hover:text-white mb-2 transition-colors">
                {svc.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {svc.desc}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[var(--color-pipe-accent)] rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <IconPhone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-[var(--font-heading)] font-bold mb-2">Not Sure What You Need?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Call us and describe the problem. We&apos;ll tell you exactly what it is — no obligation.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-[var(--color-pipe-accent)] hover:bg-white/90 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              <IconPhone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-5">
              Local Plumbers Who Actually Show Up
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              We&apos;re a family-owned plumbing company that&apos;s been fixing problems for Twin Cities homeowners since 2008. No corporate call centers. No flaky subcontractors. When you call us, you get one of our own guys — licensed, experienced, and accountable.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We built this business on referrals, and we plan to keep it that way. That means we treat every job like it&apos;s our own house — clean work, honest pricing, and no upselling you on things you don&apos;t need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustPoints.map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-[var(--color-pipe-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3 h-3 text-[var(--color-pipe-accent)]" />
                  </div>
                  <span className="text-slate-700 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats / Visual */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "15+", label: "Years in Business", icon: IconShield },
              { num: "2,400+", label: "Jobs Completed", icon: IconWrench },
              { num: "4.9★", label: "Average Rating", icon: IconStar },
              { num: "Same Day", label: "Service Available", icon: IconBolt },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
                <div className="w-10 h-10 bg-[var(--color-pipe-accent)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-[var(--color-pipe-accent)]" />
                </div>
                <p className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-navy)]">{stat.num}</p>
                <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}

            {/* Service area */}
            <div className="col-span-2 bg-[var(--color-navy)] text-white rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <IconMap className="w-4 h-4 text-[var(--color-pipe-bright)]" />
                <p className="font-semibold text-sm">Service Area</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Minneapolis", "St. Paul", "Bloomington", "Edina", "Burnsville", "Eden Prairie", "Plymouth", "Minnetonka"].map((city) => (
                  <span key={city} className="bg-white/10 text-white/80 text-xs px-2.5 py-1 rounded-full">{city}</span>
                ))}
                <span className="bg-[var(--color-pipe-accent)]/20 text-[var(--color-pipe-bright)] text-xs px-2.5 py-1 rounded-full font-semibold">+ more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="bg-[var(--color-navy)] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-pipe-bright)] font-semibold text-sm tracking-wider uppercase mb-2">Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-white">
            What Our Customers Say
          </h2>
          <p className="text-white/50 text-lg mt-3">
            4.9 stars across 300+ Google reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <IconStar key={s} className="w-4 h-4 text-amber-400" filled />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[var(--color-pipe-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <IconStar key={s} className="w-5 h-5 text-amber-400" filled />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9 / 5.0</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <p className="text-white/50 text-sm">Based on 300+ Google Reviews</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-5">
              Get a Free Estimate Today
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Fill out the form and we&apos;ll call you back within the hour. Or just call us directly — we pick up.
            </p>

            <div className="space-y-4">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[var(--color-pipe-accent)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-pipe-bright)] transition-colors">
                  <IconPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Call or Text</p>
                  <p className="text-[var(--color-navy)] font-bold text-lg">{PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-pipe-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconBolt className="w-5 h-5 text-[var(--color-pipe-accent)]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Response Time</p>
                  <p className="text-[var(--color-navy)] font-bold">Within 1 hour</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-pipe-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconMap className="w-5 h-5 text-[var(--color-pipe-accent)]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Service Area</p>
                  <p className="text-[var(--color-navy)] font-bold">Twin Cities & suburbs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-2">
                  We Got It!
                </h3>
                <p className="text-slate-600">
                  Expect a call back within the hour. If it&apos;s an emergency, call us directly at{" "}
                  <a href={PHONE_HREF} className="text-[var(--color-pipe-accent)] font-semibold">{PHONE}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(612) 555-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">What do you need?</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service…</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Leak Detection & Repair</option>
                    <option>Pipe Repair / Repiping</option>
                    <option>Emergency Plumbing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Describe the problem</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What's going on? The more detail, the better."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-pipe-accent)] hover:bg-[var(--color-pipe-bright)] text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-sm"
                >
                  Send My Request
                </button>
                <p className="text-slate-400 text-xs text-center">
                  We&apos;ll call you back within the hour — usually sooner.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white/60 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-white/60 text-sm font-semibold font-[var(--font-heading)]">Twin Cities Plumbing Pro</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a>
            <span className="hidden sm:inline">·</span>
            <span>Minneapolis, MN</span>
            <span className="hidden sm:inline">·</span>
            <span>Licensed & Insured</span>
          </div>
          <p className="text-xs text-white/30">© 2024 Twin Cities Plumbing Pro</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Mobile sticky CTA ────────────────────────────────────────────────────────

function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-[var(--color-navy)] border-t border-white/10 px-4 py-3 flex gap-3">
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-pipe-accent)] text-white font-bold py-3 rounded-xl text-sm"
      >
        <IconPhone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-xl text-sm"
      >
        Free Estimate
      </a>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileCallBar />
    </>
  );
}
