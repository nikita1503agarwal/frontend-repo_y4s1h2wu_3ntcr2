import { BedDouble, Coffee, Wifi, Car, Snowflake, Users } from "lucide-react";

const rooms = [
  {
    name: "Standard kétágyas",
    price: "22 900 Ft/éj",
    img:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
    features: ["Franciaágy", "Privát fürdőszoba", "Síkképernyős TV"],
  },
  {
    name: "Családi szoba",
    price: "32 900 Ft/éj",
    img:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    features: ["4 férőhely", "Mini hűtő", "Babaágy kérhető"],
  },
  {
    name: "Prémium lakosztály",
    price: "45 900 Ft/éj",
    img:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=2069&auto=format&fit=crop",
    features: ["Erkély kertre néző kilátással", "Kávégép", "Tágas nappali"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-800">
              Szobák és árak
            </h2>
            <p className="text-emerald-900/70 mt-1">
              Kényelmes, tiszta és ízlésesen berendezett szobáink különböző
              igényekhez.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-emerald-800/80">
            <div className="flex items-center gap-2"><Wifi className="w-5 h-5"/>Ingyenes Wi‑Fi</div>
            <div className="flex items-center gap-2"><Coffee className="w-5 h-5"/>Reggeli kérhető</div>
            <div className="flex items-center gap-2"><Car className="w-5 h-5"/>Parkoló</div>
            <div className="flex items-center gap-2"><Snowflake className="w-5 h-5"/>Klíma</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="group rounded-2xl overflow-hidden border border-emerald-900/10 shadow-sm hover:shadow-md transition bg-emerald-50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    {room.name}
                  </h3>
                  <span className="text-emerald-700 font-medium">{room.price}</span>
                </div>
                <ul className="mt-3 text-sm text-emerald-900/80 space-y-1">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 opacity-70" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-emerald-700 text-white font-medium px-4 py-2 hover:bg-emerald-600 transition">
                  Érdeklődés
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
