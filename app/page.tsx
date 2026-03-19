"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconDroplet, IconFire, IconSearch, IconWrench, IconBolt,
  IconPhone, IconCheck, IconStar, IconArrow,
} from "@/components/Icons";

const PHONE = "(612) 555-0192";
const PHONE_HREF = "tel:6125550192";

const services = [
  {
    icon: IconDroplet,
    title: "Drain Cleaning",
    desc: "Slow or clogged drains cleared fast — kitchen, bathroom, floor drains, and main sewer lines.",
  },
  {
    icon: IconFire,
    title: "Water Heater Service",
    desc: "Same-day water heater repair and installation. Traditional tank or tankless — we handle it all.",
  },
  {
    icon: IconSearch,
    title: "Leak Detection & Repair",
    desc: "We find and fix leaks before they turn into expensive damage — under slabs, inside walls, anywhere.",
  },
  {
    icon: IconWrench,
    title: "Pipe Repair & Repiping",
    desc: "Burst pipes, corroded lines, or full repipes. Copper and PEX done right the first time.",
  },
  {
    icon: IconBolt,
    title: "Emergency Plumbing",
    desc: "Plumbing emergencies don't wait. We're available evenings and weekends — no extra runaround.",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    location: "Minneapolis",
    text: "Had a burst pipe at 10pm and they were at my house within the hour. Fixed it clean, no damage to the drywall.",
    rating: 5,
  },
  {
    name: "Dave M.",
    location: "Burnsville",
    text: "Replaced our old water heater with tankless. Done in one day, explained everything. Hot water instantly.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    location: "Edina",
    text: "We had a slab leak no one else could find. They located it in 20 minutes. Fair price and fast fix.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--color-navy)] text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Plumber at work"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
          <div className="max-w-2xl">
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
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl transition-colors text-lg"
              >
                Get a Free Estimate
              </Link>
            </div>

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

      {/* ─── Services ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
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
                  Call us and describe the problem. We&apos;ll tell you what it is — no obligation.
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

      {/* ─── About teaser ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-bg.jpg"
                alt="Professional plumber at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                  <p className="text-white font-bold text-2xl font-[var(--font-heading)]">15+</p>
                  <p className="text-white/80 text-xs">Years Serving the Twin Cities</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-5">
                Local Plumbers Who Actually Show Up
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                We&apos;re a family-owned plumbing company that&apos;s been fixing problems for Twin Cities homeowners since 2008. No corporate call centers. No flaky subcontractors.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We built this business on referrals, and we plan to keep it that way — clean work, honest pricing, and no upselling you on things you don&apos;t need.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Licensed & Insured", "Family-Owned", "2,400+ Jobs Done", "4.9★ Rating"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-pipe-sky)] text-[var(--color-pipe-accent)] text-sm font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--color-pipe-accent)] font-bold hover:gap-3 transition-all"
              >
                Learn more about us <IconArrow className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-pipe-bright)] font-semibold text-sm tracking-wider uppercase mb-2">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-white">
              What Our Customers Say
            </h2>
            <p className="text-white/50 text-lg mt-3">4.9 stars across 300+ Google reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
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

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => <IconStar key={s} className="w-5 h-5 text-amber-400" filled />)}
              </div>
              <span className="text-white font-bold text-lg">4.9 / 5.0</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <p className="text-white/50 text-sm">Based on 300+ Google Reviews</p>
          </div>
        </div>
      </section>

      {/* ─── CTA bar ───────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-pipe-accent)] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-[var(--font-heading)] font-bold text-white mb-3">
            Ready to get your plumbing fixed?
          </h2>
          <p className="text-white/80 mb-8 text-lg">Same-day service available. Upfront pricing. No surprises.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-pipe-accent)] hover:bg-white/90 font-bold px-7 py-4 rounded-xl transition-colors text-lg"
            >
              <IconPhone className="w-5 h-5" />
              Call {PHONE}
            </a>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-4 rounded-xl transition-colors text-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
