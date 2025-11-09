import { Globe2, Phone } from "lucide-react";

export default function Navbar({ lang, setLang, t }) {
  const languages = [
    { code: "hu", label: "HU" },
    { code: "ro", label: "RO" },
    { code: "en", label: "EN" },
  ];

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-emerald-800 font-semibold">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600" /> Seltersz • Szeltersz
        </a>

        <div className="hidden md:flex items-center gap-6 text-emerald-900/80">
          <a href="#rooms" className="hover:text-emerald-900">{t("nav.rooms")}</a>
          <a href="#booking" className="hover:text-emerald-900">{t("nav.booking")}</a>
          <a href="#faq" className="hover:text-emerald-900">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              aria-label={t("nav.language")}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="appearance-none bg-white/80 border border-emerald-900/20 rounded-lg px-8 py-2 text-sm text-emerald-900/90 hover:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              style={{ backgroundImage: "none" }}
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <Globe2 className="w-4 h-4 text-emerald-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 text-white px-3 py-2 text-sm hover:bg-emerald-600"
          >
            <Phone className="w-4 h-4" /> {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
