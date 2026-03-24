"use client";

import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Sarah M.",
    location: "Minneapolis, MN",
    rating: 5,
    text: "Our main line burst on a Sunday night. They were at our house within 45 minutes. Saved us from absolute disaster. Honest pricing, no upselling. Will never call anyone else.",
    service: "Emergency Line Repair",
  },
  {
    name: "Mike T.",
    location: "Edina, MN",
    rating: 5,
    text: "Had a slow drain issue that three other plumbers couldn't diagnose. Twin Cities Plumbing Pro found a root intrusion 40 feet in with a camera. Fixed in one visit. These guys are the real deal.",
    service: "Drain Camera & Cleaning",
  },
  {
    name: "Jennifer K.",
    location: "Plymouth, MN",
    rating: 5,
    text: "Replaced our 20-year-old water heater with a tankless unit. They walked us through every option, gave us a fair price, and had it done in half a day. The crew was incredibly professional.",
    service: "Tankless Water Heater",
  },
  {
    name: "David R.",
    location: "St. Paul, MN",
    rating: 5,
    text: "I've been a homeowner for 25 years and these are the best plumbers I've hired. Showed up on time, explained everything, fixed the problem, cleaned up like they were never there.",
    service: "Bathroom Fixture Install",
  },
  {
    name: "Lisa H.",
    location: "Bloomington, MN",
    rating: 5,
    text: "Called at 6am about a slab leak. By noon it was found and fixed. The tech was professional, knowledgeable, and kept me informed the whole time. Incredible service.",
    service: "Slab Leak Detection",
  },
  {
    name: "Kevin B.",
    location: "Minnetonka, MN",
    rating: 5,
    text: "Finally found a plumber I trust completely. They fully repiped our 1960s home in two days. Clean work, fair price, zero mess. I recommend them to everyone.",
    service: "Full Home Repipe",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f5a623">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0}>
            <p className="text-[#1e6bff] font-semibold text-sm uppercase tracking-widest mb-3">
              Customer Reviews
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-title text-[#0a1628] mb-4">
              What Our Customers Say
            </h2>
          </ScrollReveal>

          {/* Overall rating */}
          <ScrollReveal delay={200}>
            <div className="inline-flex items-center gap-4 bg-[#f8fafc] border border-slate-200 rounded-2xl px-6 py-4">
              <div className="text-5xl font-black text-[#0a1628]">4.9</div>
              <div>
                <Stars count={5} />
                <div className="text-slate-500 text-sm mt-1">
                  Based on 127 Google reviews
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ScrollReveal key={review.name}>
              <div className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-100 hover:border-[#1e6bff]/20 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <Stars count={review.rating} />
                  <span className="text-xs text-[#1e6bff] font-semibold bg-[#f0f4ff] px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1e6bff] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1628] text-sm">
                      {review.name}
                    </div>
                    <div className="text-slate-400 text-xs">{review.location}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
