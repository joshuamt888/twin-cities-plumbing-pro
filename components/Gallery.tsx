"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const images = [
  {
    src: "/images/bathroom.png",
    alt: "Luxury bathroom renovation Twin Cities",
    label: "Bathroom Remodel",
    span: "lg:col-span-2 lg:row-span-2",
    height: 560,
  },
  {
    src: "/images/tools.png",
    alt: "Professional plumbing tools and equipment",
    label: "Pro Equipment",
    span: "",
    height: 260,
  },
  {
    src: "/images/hands.png",
    alt: "Expert plumber repairing sink drain",
    label: "Expert Repair",
    span: "",
    height: 260,
  },
  {
    src: "/images/exterior.png",
    alt: "Minneapolis home plumbing service",
    label: "Local Service",
    span: "lg:col-span-2",
    height: 300,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <ScrollReveal delay={0}>
            <p className="text-[#1e6bff] font-semibold text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-title text-[#0a1628]">
              Quality You Can See
            </h2>
          </ScrollReveal>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          {images.map((img, i) => (
            <ScrollReveal
              key={img.src}
              dir="scale"
              delay={i * 80}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
              style={{ height: img.height }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="text-white font-semibold text-sm">
                  {img.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
