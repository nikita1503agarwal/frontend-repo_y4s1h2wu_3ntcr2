import { Hotel, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-emerald-800 font-semibold">
          <Hotel className="w-6 h-6" /> Zöld Liget Panzió
        </a>
        <div className="hidden sm:flex items-center gap-6 text-emerald-900/80">
          <a href="#rooms" className="hover:text-emerald-900">Szobák</a>
          <a href="#contact" className="hover:text-emerald-900">Kapcsolat</a>
          <a href="#about" className="hover:text-emerald-900">Rólunk</a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 text-white px-3 py-2 text-sm hover:bg-emerald-600"
        >
          <Phone className="w-4 h-4" /> Foglalás
        </a>
      </div>
    </nav>
  );
}
