import Link from "next/link";

const PHONE = "(612) 555-0192";
const PHONE_HREF = "tel:6125550192";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white/60 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="h-9 px-4 bg-white/10 border border-dashed border-white/20 rounded-lg inline-flex items-center justify-center mb-3">
              <span className="text-white/40 text-sm font-medium tracking-wide">[ Your Logo Here ]</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Licensed, insured plumbers serving Minneapolis, St. Paul, and the Twin Cities metro since 2008.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Quick Links</p>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/estimate", label: "Get an Estimate" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Contact</p>
            <div className="space-y-2 text-sm">
              <a href={PHONE_HREF} className="block hover:text-white transition-colors">{PHONE}</a>
              <p>Minneapolis, MN</p>
              <p>Licensed & Insured</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2024 Twin Cities Plumbing Pro. All rights reserved.</p>
          <p>Licensed Plumber — Minneapolis & St. Paul, MN</p>
        </div>
      </div>
    </footer>
  );
}
