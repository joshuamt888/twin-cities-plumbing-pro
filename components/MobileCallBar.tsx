"use client";

import { IconPhone } from "./Icons";

const PHONE_HREF = "tel:6125550192";

export default function MobileCallBar() {
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
        href="/estimate"
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3 rounded-xl text-sm"
      >
        Free Estimate
      </a>
    </div>
  );
}
