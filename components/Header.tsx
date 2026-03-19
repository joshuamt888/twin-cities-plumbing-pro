"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconPhone } from "./Icons";

const PHONE = "(612) 555-0192";
const PHONE_HREF = "tel:6125550192";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/estimate", label: "Get an Estimate" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy)] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo placeholder */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 px-4 bg-white/10 border border-dashed border-white/30 rounded-lg flex items-center justify-center">
            <span className="text-white/50 text-sm font-medium tracking-wide">[ Your Logo Here ]</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden sm:flex items-center gap-2 bg-[var(--color-pipe-accent)] hover:bg-[var(--color-pipe-bright)] text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
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
        <div className="md:hidden bg-[var(--color-navy-light)] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                pathname === link.href
                  ? "bg-white/10 text-white font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
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
