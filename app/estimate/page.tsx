"use client";

import { useState } from "react";
import { IconPhone, IconCheck, IconBolt, IconMap, IconShield } from "@/components/Icons";

const PHONE = "(612) 555-0192";
const PHONE_HREF = "tel:6125550192";

const services = [
  "Drain Cleaning",
  "Water Heater Repair",
  "Water Heater Installation",
  "Leak Detection & Repair",
  "Pipe Repair",
  "Repiping",
  "Toilet Repair or Replacement",
  "Faucet Repair or Replacement",
  "Emergency Plumbing",
  "Other",
];

export default function EstimatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <>
      {/* ─── Page header ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] text-white pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-pipe-bright)] font-semibold text-sm tracking-wider uppercase mb-3">Free Estimate</p>
          <h1 className="text-4xl sm:text-5xl font-[var(--font-heading)] font-bold leading-tight mb-4">
            Get a Free Plumbing<br />
            <span className="text-[var(--color-pipe-bright)]">Estimate Today</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl">
            Fill out the form below and we&apos;ll call you back within the hour — usually sooner.
          </p>
        </div>
      </section>

      {/* ─── Main content ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Call box */}
              <div className="bg-[var(--color-navy)] text-white rounded-2xl p-6">
                <p className="text-[var(--color-pipe-bright)] font-semibold text-sm uppercase tracking-wide mb-2">
                  Prefer to call?
                </p>
                <p className="text-white/70 text-sm mb-4">
                  We pick up. Call or text anytime — we&apos;ll get you a price fast.
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 bg-[var(--color-pipe-accent)] rounded-xl flex items-center justify-center group-hover:bg-[var(--color-pipe-bright)] transition-colors flex-shrink-0">
                    <IconPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide">Call or Text</p>
                    <p className="text-white font-bold text-xl">{PHONE}</p>
                  </div>
                </a>
              </div>

              {/* What happens next */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-4">What Happens Next</p>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We call you back within the hour to confirm your request." },
                    { step: "2", text: "We ask a few quick questions to understand the problem." },
                    { step: "3", text: "We give you a clear, upfront price — no obligation." },
                    { step: "4", text: "If you&apos;re ready, we schedule same-day or next-day service." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 bg-[var(--color-pipe-accent)] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="space-y-3">
                {[
                  { icon: IconShield, text: "Licensed & insured in Minnesota" },
                  { icon: IconBolt, text: "Same-day service available" },
                  { icon: IconCheck, text: "Upfront pricing — no surprises" },
                  { icon: IconMap, text: "Serving the full Twin Cities metro" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--color-pipe-accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[var(--color-pipe-accent)]" />
                    </div>
                    <p className="text-slate-700 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconCheck className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-3">
                      Request Received!
                    </h3>
                    <p className="text-slate-600 text-lg max-w-sm mx-auto">
                      Expect a call back within the hour. If it&apos;s an emergency, call us directly:
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="mt-5 inline-flex items-center gap-2 bg-[var(--color-pipe-accent)] text-white font-bold px-6 py-3 rounded-xl"
                    >
                      <IconPhone className="w-4 h-4" />
                      {PHONE}
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-[var(--font-heading)] font-bold text-[var(--color-navy)] mb-6">
                      Tell Us About Your Job
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="(612) 555-0000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          What service do you need? <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={form.service}
                          onChange={(e) => update("service", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-[var(--color-pipe-accent)] focus:ring-2 focus:ring-[var(--color-pipe-accent)]/20 outline-none transition-all appearance-none"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Describe the problem <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.description}
                          onChange={(e) => update("description", e.target.value)}
                          placeholder="What's going on? Where is the problem located? The more detail, the faster we can help."
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
                        No spam, no BS.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
