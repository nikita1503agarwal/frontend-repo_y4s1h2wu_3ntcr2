import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer id="about" className="bg-emerald-800 text-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold">Zöld Liget Panzió</h4>
          <p className="text-emerald-100/80 mt-2 text-sm">
            Barátságos szállás zöld környezetben, kényelmes szobákkal és
            házias reggelivel. Várjuk szeretettel!
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Hasznos</h4>
          <ul className="mt-2 space-y-1 text-sm text-emerald-100/80">
            <li><a href="#rooms" className="hover:text-white">Szobák és árak</a></li>
            <li><a href="#contact" className="hover:text-white">Foglalás</a></li>
            <li><a href="#about" className="hover:text-white">Rólunk</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Nyitvatartás</h4>
          <ul className="mt-2 space-y-1 text-sm text-emerald-100/80">
            <li>Recepció: 8:00 – 20:00</li>
            <li>Bejelentkezés: 14:00 – 20:00</li>
            <li>Kijelentkezés: 10:00-ig</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Közösségi</h4>
          <p className="text-emerald-100/80 mt-2 text-sm">
            Kövessen minket újdonságokért és akciókért!
          </p>
          <div className="mt-3 flex gap-3">
            <a href="#" className="text-emerald-100/80 hover:text-white">Facebook</a>
            <a href="#" className="text-emerald-100/80 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-emerald-100/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Zöld Liget Panzió</span>
          <a href="#contact" className="hover:text-white">Kapcsolat</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      <Navbar />
      <Hero />
      <Rooms />
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
}
