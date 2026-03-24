export default function Footer() {
  const services = [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Water Heater Service",
    "Leak Detection",
    "Fixture Installation",
    "Repiping",
  ];

  const areas = [
    "Minneapolis",
    "St. Paul",
    "Bloomington",
    "Edina",
    "Plymouth",
    "Minnetonka",
    "Eden Prairie",
    "Burnsville",
    "Eagan",
    "Apple Valley",
  ];

  return (
    <footer className="bg-[#060e1c] text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#1e6bff] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17 6.5A1.5 1.5 0 0 0 15.5 5h-7A1.5 1.5 0 0 0 7 6.5v1h10v-1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold block leading-none">
                  Twin Cities
                </span>
                <span className="text-[#4d8eff] text-sm">Plumbing Pro</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Licensed master plumbers serving Minneapolis, St. Paul, and the
              entire Twin Cities metro since 2009.
            </p>
            <a
              href="tel:+16125550190"
              className="text-white font-bold text-lg hover:text-[#4d8eff] transition-colors"
            >
              (612) 555-0190
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm hover:text-white/80 transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2.5 columns-2">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-sm hover:text-white/80 transition-colors cursor-default">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p>Minneapolis, MN 55401</p>
              <a
                href="tel:+16125550190"
                className="block hover:text-white transition-colors"
              >
                (612) 555-0190
              </a>
              <a
                href="mailto:service@twincitiesplumbingpro.com"
                className="block hover:text-white transition-colors"
              >
                service@twincitiesplumbingpro.com
              </a>
              <div className="pt-2">
                <div className="text-white font-semibold mb-1">Hours</div>
                <div>Mon–Fri: 7am – 7pm</div>
                <div>Sat–Sun: 8am – 5pm</div>
                <div className="text-green-400 font-semibold mt-1">
                  24/7 Emergency Line
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © 2025 Twin Cities Plumbing Pro. All rights reserved. Licensed
            Master Plumber — State of Minnesota.
          </p>
          <p className="text-xs">
            Website by{" "}
            <a
              href="https://steadyscaling.com"
              className="text-[#4d8eff] hover:text-white transition-colors"
            >
              Steady Scaling LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
