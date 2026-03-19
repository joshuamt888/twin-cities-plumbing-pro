import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconCheck, IconShield, IconWrench, IconBolt, IconStar, IconMap, IconPhone
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-owned plumbers serving Minneapolis, St. Paul, and the Twin Cities since 2008. Licensed, insured, and committed to honest work at fair prices.",
};

const PHONE = "(612) 555-0192";
const PHONE_HREF = "tel:6125550192";

const values = [
  {
    icon: IconShield,
    title: "Licensed & Insured",
    desc: "Every job is covered. We carry full liability insurance and are licensed plumbers in the State of Minnesota.",
  },
  {
    icon: IconCheck,
    title: "Upfront Pricing",
    desc: "You get a clear price before we start. No hourly surprises, no add-ons at the end. What we quote is what you pay.",
  },
  {
    icon: IconBolt,
    title: "Same-Day Service",
    desc: "Most jobs are scheduled same-day or next-day. Emergencies even faster — we don't make you wait a week.",
  },
  {
    icon: IconWrench,
    title: "We Do It Right",
    desc: "We don't cut corners. If it needs replacing, we say so. If it can be repaired, we'll repair it and tell you why.",
  },
];

const team = [
  {
    name: "Mike R.",
    role: "Master Plumber & Owner",
    bio: "20 years in the trade. Born and raised in Minneapolis. Started the company in 2008 after years of watching homeowners get overcharged.",
  },
  {
    name: "Jake R.",
    role: "Lead Plumber",
    bio: "Mike's brother. Been plumbing for 12 years. Known for showing up early and leaving the job site cleaner than he found it.",
  },
  {
    name: "Tom B.",
    role: "Plumber",
    bio: "Licensed plumber specializing in water heaters and repiping. 8 years experience, handles the bulk of our water heater work.",
  },
];

const cities = [
  "Minneapolis", "St. Paul", "Bloomington", "Edina", "Burnsville",
  "Eden Prairie", "Plymouth", "Minnetonka", "Eagan", "Apple Valley",
  "Lakeville", "Chaska", "Richfield", "Rosemount", "Savage",
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Page hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-navy)] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.jpg"
            alt="Professional plumber working"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-pipe-bright)] font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-[var(--font-heading)] font-bold leading-tight mb-5">
            Local Plumbers Who<br />
            <span className="text-[var(--color-pipe-bright)]">Actually Show Up</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl">
            Family-owned and operated since 2008. Serving Minneapolis, St. Paul, and the Twin Cities metro with honest work at fair prices.
          </p>
        </div>
      </section>

      {/* ─── Story ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-5">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Twin Cities Plumbing Pro was started by Mike in 2008 after spending years watching homeowners get overcharged, underserved, and ignored by big plumbing companies that treated them like ticket numbers.
                </p>
                <p>
                  He wanted to build a plumbing company that operated the way neighbors help each other — show up fast, be honest about what&apos;s wrong, fix it right, and charge a fair price.
                </p>
                <p>
                  Fifteen years later, that&apos;s still what we do. We&apos;re a small, tight crew of licensed plumbers who care about our reputation more than our revenue. Most of our work comes from referrals, and we intend to keep it that way.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/images/plumbing-pipes.jpg"
                  alt="Plumbing work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Stat overlay */}
              <div className="absolute -bottom-5 -right-5 bg-[var(--color-navy)] text-white rounded-2xl px-6 py-5 shadow-xl">
                <p className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-pipe-bright)]">2,400+</p>
                <p className="text-sm text-white/70 mt-0.5">Jobs completed since 2008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)]">
              What You Can Expect From Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 flex gap-4">
                <div className="w-12 h-12 bg-[var(--color-pipe-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-6 h-6 text-[var(--color-pipe-accent)]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-1">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">The Crew</p>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)]">
              The People Who Show Up At Your Door
            </h2>
            <p className="text-slate-500 text-lg mt-3">
              Every tech is employed by us — no subcontractors, no strangers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-14 h-14 bg-[var(--color-pipe-accent)] rounded-2xl flex items-center justify-center text-white font-bold text-xl font-[var(--font-heading)] mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-navy)] text-lg mb-0.5">{member.name}</h3>
                <p className="text-[var(--color-pipe-accent)] text-xs font-semibold uppercase tracking-wide mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats + Rating ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: "2008", label: "Year Founded" },
              { num: "2,400+", label: "Jobs Completed" },
              { num: "4.9★", label: "Google Rating" },
              { num: "Same Day", label: "Service Available" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-pipe-bright)]">{stat.num}</p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service area ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[var(--color-pipe-accent)] font-semibold text-sm tracking-wider uppercase mb-2">
              <IconMap className="w-4 h-4" />
              Service Area
            </div>
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-navy)]">
              We Serve the Entire Twin Cities Metro
            </h2>
            <p className="text-slate-500 text-lg mt-3 max-w-xl mx-auto">
              Based in Minneapolis — we serve homeowners and businesses across the metro, typically within 30 minutes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cities.map((city) => (
              <span key={city} className="bg-white border border-slate-200 text-slate-700 text-sm px-3 py-1.5 rounded-full shadow-sm">
                {city}
              </span>
            ))}
            <span className="bg-[var(--color-pipe-accent)] text-white text-sm px-3 py-1.5 rounded-full font-semibold">
              + surrounding areas
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <span>Not sure if we cover your area?</span>
            <a href={PHONE_HREF} className="text-[var(--color-pipe-accent)] font-semibold hover:underline">
              Call us — we&apos;ll let you know.
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-pipe-accent)] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-[var(--font-heading)] font-bold text-white mb-3">
            Ready to work with us?
          </h2>
          <p className="text-white/80 mb-8 text-lg">Get a free estimate in under an hour.</p>
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
              Request Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
